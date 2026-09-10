import { readdirSync, existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

/**
 * For every source JPG/PNG under public/img, emit a matching .webp and .avif
 * next to it (same base name). The app references .webp everywhere; the
 * <Picture> component adds the .avif <source>, which is why every .webp needs
 * an .avif sibling — a <picture> source that 404s does NOT fall back.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, '..', 'public', 'img');
const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png']);

function walk(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(entry => {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return SOURCE_EXTS.has(extname(entry.name).toLowerCase()) ? [fullPath] : [];
  });
}

/*
 * Regenerate only when the derivative is missing (not mtime-based): the .webp
 * and .avif files are committed to the repo, so CI/Vercel builds reuse them and
 * stay fast. If you replace a source image, delete its .webp/.avif so they get
 * rebuilt. Force a full rebuild with FORCE_IMAGES=1.
 */
const force = process.env.FORCE_IMAGES === '1';
const needsBuild = (out: string) => force || !existsSync(out);

async function run() {
  const files = walk(IMG_DIR);
  let webp = 0;
  let avif = 0;
  let skipped = 0;

  for (const file of files) {
    const stem = join(file, '..', basename(file, extname(file)));
    const webpPath = `${stem}.webp`;
    const avifPath = `${stem}.avif`;

    if (needsBuild(webpPath)) {
      await sharp(file).webp({ quality: 82 }).toFile(webpPath);
      webp++;
    } else {
      skipped++;
    }

    if (needsBuild(avifPath)) {
      await sharp(file).avif({ quality: 58, effort: 4 }).toFile(avifPath);
      avif++;
    } else {
      skipped++;
    }
  }

  console.log(`[generate-webp] ${webp} webp, ${avif} avif written; ${skipped} up to date. Sources scanned: ${files.length}.`);
}

run().catch(err => {
  console.error('[generate-webp] Failed:', err);
  process.exit(1);
});
