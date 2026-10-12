import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve('next/package.json'))('sharp');
const source = path.resolve('public/images/articles/kw-coilover-adjustable.avif');
const destination = path.resolve('public/images/articles/kw-coilover-adjustable.webp');
// Format conversion only: keep the owner-supplied AVIF and its original credits.
// Next's AVIF passthrough kept delivering 2160px even for a 750px thumbnail.
await sharp(source).webp({ quality: 85, effort: 6 }).toFile(destination);
console.log({ source, destination, ...(await sharp(destination).metadata()) });
