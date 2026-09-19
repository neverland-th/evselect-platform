import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.join(root, 'src');
const publicRoot = path.join(root, 'public');
const imagePathPattern = /\/(?:images|icons)\/[A-Za-z0-9._/-]+\.(?:png|jpe?g|webp|avif|gif|svg)\b/g;
const retiredTextCovers = new Set([
  '/images/editorial/zeekr-7x-cover.png',
  '/images/editorial/zeekr-7x-cover.svg',
  '/images/editorial/tesla-model-y-l-cover.png',
  '/images/editorial/tesla-model-y-l-cover.svg',
]);
const references = new Map();
const remoteImages = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(file);
    } else if (/\.[cm]?[jt]sx?$/.test(entry.name)) {
      const text = readFileSync(file, 'utf8');
      for (const match of text.matchAll(imagePathPattern)) {
        const uses = references.get(match[0]) ?? [];
        uses.push(path.relative(root, file));
        references.set(match[0], uses);
      }
      if (/<(?:Image|img)\b[^>]*?\bsrc=["']https?:\/\//s.test(text)) {
        remoteImages.push(path.relative(root, file));
      }
    }
  }
}

function validHeader(file, extension) {
  const bytes = readFileSync(file);
  if (bytes.length < 100) return false;
  switch (extension) {
    case '.jpg':
    case '.jpeg': return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    case '.png': return bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    case '.webp': return bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
    case '.gif': return bytes.toString('ascii', 0, 3) === 'GIF';
    case '.avif': return bytes.toString('ascii', 4, 12).includes('ftypavif');
    case '.svg': return /<svg\b/.test(bytes.toString('utf8', 0, Math.min(bytes.length, 2000)));
    default: return false;
  }
}

walk(sourceRoot);
const failures = [];
for (const file of remoteImages) {
  failures.push(`${file} (remote image source in markup; host the licensed asset locally)`);
}
for (const [url, uses] of references) {
  if (retiredTextCovers.has(url)) {
    failures.push(`${url} (retired text-only cover; ${uses[0]})`);
    continue;
  }
  const parts = url.slice(1).split('/');
  let directory = publicRoot;
  let exists = true;
  for (const part of parts) {
    if (part === '.' || part === '..' || !readdirSync(directory).includes(part)) {
      exists = false;
      break;
    }
    directory = path.join(directory, part);
  }
  if (!exists || !statSync(directory).isFile()) {
    failures.push(`${url} (missing or wrong case; ${uses[0]})`);
  } else if (!validHeader(directory, path.extname(directory).toLowerCase())) {
    failures.push(`${url} (empty or invalid image; ${uses[0]})`);
  }
}

if (failures.length) {
  console.error(`Public image verification failed (${failures.length}):\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Verified ${references.size} referenced public images.`);
}
