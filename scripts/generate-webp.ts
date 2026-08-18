import { readdirSync, statSync, existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

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

async function run() {
  const files = walk(IMG_DIR);
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const webpPath = join(file, '..', basename(file, extname(file)) + '.webp');

    if (existsSync(webpPath) && statSync(webpPath).mtimeMs >= statSync(file).mtimeMs) {
      skipped++;
      continue;
    }

    await sharp(file).webp({ quality: 82 }).toFile(webpPath);
    converted++;
  }

  console.log(`[generate-webp] Converted ${converted} image(s), skipped ${skipped} up-to-date file(s). Total sources scanned: ${files.length}.`);
}

run().catch(err => {
  console.error('[generate-webp] Failed:', err);
  process.exit(1);
});
