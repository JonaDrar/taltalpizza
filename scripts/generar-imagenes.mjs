/**
 * Genera las fotos del menú con la API de imágenes de OpenAI.
 *
 * Requiere la API key en el entorno (nunca en el repo):
 *   export OPENAI_API_KEY=sk-...
 *
 * Uso:
 *   node scripts/generar-imagenes.mjs --dry-run          Muestra qué haría, sin gastar
 *   node scripts/generar-imagenes.mjs --limit 5          Genera 5 y para
 *   node scripts/generar-imagenes.mjs --section pizzas   Solo esa sección
 *   node scripts/generar-imagenes.mjs --only espanola    Solo los slugs que coincidan
 *   node scripts/generar-imagenes.mjs --force            Regenera aunque ya exista
 *
 * Es idempotente: salta los platos que ya tienen foto en public/menu/. Por eso se
 * puede ir generando de a poco, corriendo el comando varias veces.
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { SECTIONS } from "../lib/menu-data.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "menu");
const MODEL = "gpt-image-1";
const SIZE = "1024x1024";
const QUALITY = "medium";

// Todas las fotos comparten este look para que el menú se vea como un set y no
// como un collage. Está calcado del estilo de las 4 fotos de pizza que ya existían.
// Luz y cámara. Sin props: los props se deciden por familia (ver PROPS), porque
// un "esparce ingredientes frescos alrededor" global le ponía tomates cherry y
// palta alrededor de los cafés.
const LOOK =
  "Professional food photography. Light oak wooden table, bright soft diffused natural " +
  "daylight, airy and evenly lit, NO dark vignette, NO moody shadows, light and fresh mood. " +
  "Vibrant appetizing colors, high detail, square centered composition, no text, no logos, " +
  "no people, no hands.";

// Qué puede aparecer alrededor del plato en cada familia.
const PROPS = {
  // Ojo: pedir "los ingredientes crudos del plato" ponía carne y pollo CRUDOS al
  // lado de la comida servida, que en una carta se ve pésimo. Solo verduras y hierbas.
  comida:
    "A few fresh vegetables and herbs scattered around as props. ABSOLUTELY NO raw meat, " +
    "NO raw chicken breast, NO raw steak, NO raw sausages, NO raw shrimp, NO uncooked protein " +
    "anywhere in the image — only the cooked dish itself.",
  cafe:
    "Only a few roasted coffee beans as props. ABSOLUTELY NO fruit, NO vegetables, NO tomatoes, " +
    "NO avocado, NO strawberries, NO herbs, NO basil around the cup.",
  te:
    "Clean and simple, no props at all around the cup. ABSOLUTELY NO coffee beans, NO fruit, " +
    "NO vegetables, NO herbs.",
  jugo:
    "Only the whole fruits that this specific juice is made of, as props. NO other fruit, " +
    "NO vegetables, NO herbs that are not part of the recipe."
};

const ENCUADRE = {
  pizza: {
    props: "comida",
    texto:
      "A LARGE family-size artisan pizza, wide and generous, big enough to share between several " +
      "people. Thin hand-stretched base with a thin golden crust edge — NOT thick, NOT deep-dish, " +
      "NOT focaccia, NOT a small personal pizza. Whole and uncut, filling most of the frame, " +
      "seen from a 45-degree angle."
  },
  hamburguesa: {
    props: "comida",
    texto:
      "A tall gourmet burger on a brioche bun with a side of french fries, on a wooden board, 45-degree angle."
  },
  // Una "tabla para compartir" chilena es una CHORRILLANA: cama de papas fritas
  // con todo apilado ENCIMA, en una fuente rectangular. No es un plato con
  // compartimentos separados.
  tabla: {
    props: "comida",
    texto:
      "A Chilean sharing platter (chorrillana): a generous BED OF FRENCH FRIES completely covering " +
      "a long rectangular serving tray, with all the other ingredients PILED ON TOP OF the fries, " +
      "mixed together and overlapping in a rustic, abundant, messy pile. The fries are the base " +
      "layer and everything else sits on them. It is NOT a bento box, NOT a plate with separate " +
      "compartments, NOT neatly arranged in sections — everything is stacked on top of the fries. " +
      "Seen from a 45-degree angle."
  },
  plato: {
    props: "comida",
    texto: "A plated main dish on a ceramic plate, seen from a 45-degree angle on a wooden table."
  },
  postre: {
    props: "comida",
    texto: "A sweet brunch dish on a ceramic plate, styled and generous, 45-degree angle."
  },
  bowl: {
    props: "comida",
    texto: "A breakfast bowl in a ceramic bowl, seen from above, ingredients neatly arranged."
  },
  cafe: {
    props: "cafe",
    texto: "A hot coffee drink in a cup on a saucer, seen from a 45-degree angle on a wooden table."
  },
  // Ojo: antes este encuadre decía "with whipped cream" y se la ponía a TODOS los
  // cafés fríos, incluso a los que la carta no la lleva. La crema solo va si está
  // en la lista de ingredientes.
  "cafe-frio": {
    props: "cafe",
    texto:
      "An iced coffee drink in a tall clear glass with ice cubes, 45-degree angle. Include whipped " +
      "cream ONLY if it is explicitly listed in the ingredients below; otherwise NO whipped cream, " +
      "NO cream topping of any kind."
  },
  jugo: {
    props: "jugo",
    texto: "A fresh juice in a tall clear glass, on a wooden table."
  }
};

function parseArgs(argv) {
  const args = { limit: Infinity, section: null, only: null, force: false, dryRun: false };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--force") args.force = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--limit") args.limit = Number(argv[++i]);
    else if (arg === "--section") args.section = argv[++i];
    else if (arg === "--only") args.only = argv[++i];
    else {
      console.error(`Argumento desconocido: ${arg}`);
      process.exit(1);
    }
  }

  if (!Number.isFinite(args.limit) && args.limit !== Infinity) {
    console.error("--limit necesita un número.");
    process.exit(1);
  }

  return args;
}

// El modelo tiende a colapsar los embutidos en "pepperoni genérico" y a ignorar
// ingredientes de la lista, así que hay que insistirle en que se vean todos.
// `item.prompt` reemplaza la descripción del plato para los casos que el modelo
// entendía mal por su cuenta (ver lib/menu-data.mjs).
function buildPrompt(item, encuadre) {
  // Un ítem puede pedir props distintos a los de su sección (el té vive entre los
  // cafés, pero no quiere granos de café al lado).
  const props = PROPS[item.props ?? encuadre.props];

  if (item.prompt) {
    return `${item.prompt} ${LOOK} ${props}`;
  }

  const detalle = item.desc
    ? ` The toppings are EXACTLY these, all of them clearly visible and distinguishable ` +
      `from each other: ${item.desc} Do not add any topping that is not on that list.`
    : "";

  return `${encuadre.texto} The dish is "${item.name}".${detalle} ${LOOK} ${props}`;
}

function pendientes({ section, only, force }) {
  const tareas = [];

  for (const seccion of SECTIONS) {
    if (!seccion.items || !seccion.photoStyle) continue;
    if (section && seccion.id !== section) continue;

    const encuadre = ENCUADRE[seccion.photoStyle];
    if (!encuadre) {
      console.error(`Sección "${seccion.id}": photoStyle "${seccion.photoStyle}" no existe.`);
      process.exit(1);
    }
    if (!PROPS[encuadre.props]) {
      console.error(`Encuadre "${seccion.photoStyle}": props "${encuadre.props}" no existe.`);
      process.exit(1);
    }

    for (const item of seccion.items) {
      if (!item.photo) continue;
      if (only && !item.photo.includes(only)) continue;

      if (item.props && !PROPS[item.props]) {
        console.error(`Ítem "${item.name}": props "${item.props}" no existe.`);
        process.exit(1);
      }

      const destino = path.join(OUT_DIR, `${item.photo}.png`);
      if (!force && existsSync(destino)) continue;

      tareas.push({
        slug: item.photo,
        nombre: item.name,
        seccion: seccion.title,
        destino,
        prompt: buildPrompt(item, encuadre)
      });
    }
  }

  return tareas;
}

async function generar(tarea, apiKey) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: MODEL,
      prompt: tarea.prompt,
      size: SIZE,
      quality: QUALITY,
      n: 1
    })
  });

  if (!res.ok) {
    const detalle = await res.text();
    throw new Error(`OpenAI respondió ${res.status}: ${detalle.slice(0, 300)}`);
  }

  const data = await res.json();
  const b64 = data?.data?.[0]?.b64_json;
  if (!b64) throw new Error("La respuesta de OpenAI no traía imagen.");

  mkdirSync(path.dirname(tarea.destino), { recursive: true });
  writeFileSync(tarea.destino, Buffer.from(b64, "base64"));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const tareas = pendientes(args).slice(0, args.limit);

  if (!tareas.length) {
    console.log("No hay fotos pendientes con esos filtros. Nada que hacer.");
    return;
  }

  console.log(`Fotos pendientes: ${tareas.length}`);
  for (const tarea of tareas) {
    console.log(`  · ${tarea.seccion} → ${tarea.nombre}  (${tarea.slug}.png)`);
  }

  if (args.dryRun) {
    console.log("\n--dry-run: no se generó ni se cobró nada.");
    console.log("\nEjemplo de prompt:\n" + tareas[0].prompt);
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("\nFalta OPENAI_API_KEY en el entorno.");
    console.error("Ponla con:  export OPENAI_API_KEY=sk-...");
    process.exit(1);
  }

  console.log("");
  let ok = 0;
  const fallidas = [];

  // De a una: es más lento, pero no revienta el rate limit ni gasta de más si algo falla.
  for (const [i, tarea] of tareas.entries()) {
    const progreso = `[${i + 1}/${tareas.length}]`;
    try {
      process.stdout.write(`${progreso} ${tarea.nombre}... `);
      await generar(tarea, apiKey);
      ok += 1;
      console.log("ok");
    } catch (error) {
      console.log("FALLÓ");
      console.error(`         ${error.message}`);
      fallidas.push(tarea.slug);
    }
  }

  console.log(`\nListas: ${ok}/${tareas.length}`);
  if (fallidas.length) {
    console.log(`Fallaron: ${fallidas.join(", ")}`);
    console.log("Reintenta solo esas con:  node scripts/generar-imagenes.mjs --only <slug>");
    process.exitCode = 1;
  }
}

main();
