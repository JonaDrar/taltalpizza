/**
 * Comprime las fotos del menú para que el repo no se infle.
 *
 * OpenAI las entrega en 1024x1024 sin comprimir (~1,7 MB c/u). Las tarjetas del
 * menú se muestran a 220px, así que 800px de lado sobra incluso en pantallas
 * retina. Con eso y cuantización de paleta bajan a ~200-400 KB sin diferencia
 * visible.
 *
 * Uso:
 *   node scripts/comprimir-imagenes.mjs --dry-run   Muestra cuánto ahorraría
 *   node scripts/comprimir-imagenes.mjs             Comprime en sitio
 *
 * Salta las que ya están bajo el umbral, así que se puede correr las veces que
 * sea después de generar fotos nuevas.
 */

import { readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "menu");

const LADO_MAX = 800;
const UMBRAL_BYTES = 500 * 1024; // Bajo esto ya está comprimida, no la tocamos.

const dryRun = process.argv.includes("--dry-run");

function pngsEn(dir) {
  const encontrados = [];

  for (const entrada of readdirSync(dir, { withFileTypes: true })) {
    const completo = path.join(dir, entrada.name);
    if (entrada.isDirectory()) encontrados.push(...pngsEn(completo));
    else if (entrada.name.endsWith(".png")) encontrados.push(completo);
  }

  return encontrados;
}

function mb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  const todas = pngsEn(OUT_DIR);
  const pesadas = todas.filter((f) => statSync(f).size > UMBRAL_BYTES);

  if (!pesadas.length) {
    console.log(`Nada que comprimir: las ${todas.length} fotos ya están livianas.`);
    return;
  }

  const antesTotal = pesadas.reduce((suma, f) => suma + statSync(f).size, 0);
  console.log(`Fotos a comprimir: ${pesadas.length} de ${todas.length}  (${mb(antesTotal)})`);

  if (dryRun) {
    console.log("\n--dry-run: no se modificó nada.");
    return;
  }

  let despuesTotal = 0;

  for (const [i, archivo] of pesadas.entries()) {
    const antes = statSync(archivo).size;

    const buffer = await sharp(archivo)
      .resize(LADO_MAX, LADO_MAX, { fit: "inside", withoutEnlargement: true })
      .png({ palette: true, quality: 85, compressionLevel: 9 })
      .toBuffer();

    // Solo la reemplazamos si de verdad quedó más liviana.
    if (buffer.length < antes) {
      writeFileSync(archivo, buffer);
    }

    const despues = statSync(archivo).size;
    despuesTotal += despues;

    const nombre = path.relative(OUT_DIR, archivo);
    const ahorro = Math.round((1 - despues / antes) * 100);
    console.log(`[${i + 1}/${pesadas.length}] ${nombre}  ${mb(antes)} → ${mb(despues)}  (-${ahorro}%)`);
  }

  const ahorroTotal = Math.round((1 - despuesTotal / antesTotal) * 100);
  console.log(`\nTotal: ${mb(antesTotal)} → ${mb(despuesTotal)}  (-${ahorroTotal}%)`);
}

main();
