import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

/**
 * One-off asset pipeline (runs on every build, before vite):
 *  - Rasterises public/favicon.svg into the PNG sizes browsers/OS expect.
 *  - Builds a dedicated 1200×630 Open Graph image from the hero photo so link
 *    previews aren't a raw, wrongly-cropped product shot.
 * All outputs are committed too, so a plain `vite build` without this script
 * still ships them.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

async function favicons() {
  const svg = readFileSync(join(PUBLIC, 'favicon.svg'));
  const targets: Array<[string, number]> = [
    ['favicon-16.png', 16],
    ['favicon-32.png', 32],
    ['favicon-192.png', 192],
    ['favicon-512.png', 512],
    ['apple-touch-icon.png', 180],
  ];
  for (const [name, size] of targets) {
    await sharp(svg, { density: 384 })
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(PUBLIC, name));
  }
  console.log(`[generate-assets] Wrote ${targets.length} favicon PNG(s).`);
}

async function ogImage() {
  const source = join(PUBLIC, 'img', 'fotos_txell', 'Foto_Home.png');
  if (!existsSync(source)) {
    console.warn('[generate-assets] Foto_Home.png missing, skipped OG image.');
    return;
  }
  const outDir = join(PUBLIC, 'img', 'og');
  mkdirSync(outDir, { recursive: true });

  const overlay = Buffer.from(
    `<svg width="1200" height="630"><rect width="1200" height="630" fill="rgba(23,23,23,0.28)"/></svg>`
  );

  await sharp(source)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .composite([{ input: overlay }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(outDir, 'og-default.jpg'));
  console.log('[generate-assets] Wrote og-default.jpg (1200×630).');
}

async function run() {
  await favicons();
  await ogImage();
}

run().catch(err => {
  console.error('[generate-assets] Failed:', err);
  process.exit(1);
});
