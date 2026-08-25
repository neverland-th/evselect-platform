import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function scanDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanDir(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const articleFiles = scanDir(path.join(process.cwd(), 'src/app/(storefront)/articles'));
let totalImagesFound = 0;
let missingImages = 0;
const referencedImages = new Set();

for (const file of articleFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/\/images\/[a-zA-Z0-9_\-\.\/]+/g) || [];
  for (const match of matches) {
    totalImagesFound++;
    referencedImages.add(match);
    const diskPath = path.join(process.cwd(), 'public', match);
    if (!fs.existsSync(diskPath)) {
      console.error(`MISSING IMAGE: ${match} in ${file}`);
      missingImages++;
    }
  }
}

console.log(`Checked ${totalImagesFound} image references across ${articleFiles.length} files.`);
console.log(`Unique image paths referenced: ${referencedImages.size}`);
console.log(`Missing images count: ${missingImages}`);

// Check all review images in public/images/reviews
const reviewsDir = path.join(process.cwd(), 'public/images/reviews');
const reviewFiles = fs.readdirSync(reviewsDir).filter(f => f.endsWith('.jpg'));
console.log(`\nReview images in public/images/reviews: ${reviewFiles.length}`);

const hashes = new Map();
let invalidHeaders = 0;
for (const rf of reviewFiles) {
  const buf = fs.readFileSync(path.join(reviewsDir, rf));
  const isJpeg = buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;
  if (!isJpeg) {
    console.error(`INVALID JPEG HEADER: ${rf}`);
    invalidHeaders++;
  }
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  if (hashes.has(hash)) {
    console.error(`DUPLICATE HASH between ${rf} and ${hashes.get(hash)}`);
  } else {
    hashes.set(hash, rf);
  }
}

console.log(`Unique SHA256 hashes: ${hashes.size} / ${reviewFiles.length}`);
console.log(`Invalid JPEG headers: ${invalidHeaders}`);
