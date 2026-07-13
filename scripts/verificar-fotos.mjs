/**
 * Verifica que cada plato con `photo` en lib/menu-data.mjs tenga su archivo en
 * public/menu/.
 *
 * Existe porque la página adjunta la foto solo si el archivo está presente: si un
 * slug queda mal escrito, el build pasa igual y el plato simplemente aparece sin
 * foto, sin ningún aviso. Esto lo convierte en un error.
 *
 * Uso:  node scripts/verificar-fotos.mjs
 */

import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { SECTIONS } from "../lib/menu-data.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "menu");

const faltantes = [];
let esperadas = 0;

for (const seccion of SECTIONS) {
  for (const item of seccion.items ?? []) {
    if (!item.photo) continue;

    esperadas += 1;
    if (!existsSync(path.join(OUT_DIR, `${item.photo}.png`))) {
      faltantes.push(`${seccion.title} → ${item.name}  (falta public/menu/${item.photo}.png)`);
    }
  }
}

if (faltantes.length) {
  console.error(`Faltan ${faltantes.length} de ${esperadas} fotos del menú:\n`);
  for (const falta of faltantes) console.error(`  · ${falta}`);
  console.error("\nGenéralas con:  node scripts/generar-imagenes.mjs");
  process.exit(1);
}

console.log(`Las ${esperadas} fotos del menú están presentes.`);
