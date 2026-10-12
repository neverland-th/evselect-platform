import { createRequire } from 'node:module';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve('next/package.json'))('sharp');
const source = path.resolve('public/logo-evselects.webp');
// Delivery derivatives only: preserve the corrected logo artwork and originals.
await sharp(source).resize(300, 150).png().toFile('public/logo-evselects.png');
const sizes = [16, 32, 48, 64, 128, 256];
const bitmaps = await Promise.all(sizes.map(size => sharp(source)
  .resize(size, size, { fit: 'contain', background: '#ffffff' }).ensureAlpha().png().toBuffer()));
const directory = Buffer.alloc(6 + 16 * sizes.length);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
for (const [index, size] of sizes.entries()) {
  const entry = 6 + 16 * index;
  directory[entry] = size === 256 ? 0 : size;
  directory[entry + 1] = size === 256 ? 0 : size;
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(bitmaps[index].length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += bitmaps[index].length;
}
await writeFile('src/app/favicon.ico', Buffer.concat([directory, ...bitmaps]));
console.log({ source, png: 'public/logo-evselects.png', favicon: 'src/app/favicon.ico', sizes });
