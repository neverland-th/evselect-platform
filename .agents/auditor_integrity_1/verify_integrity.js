const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('=== FORENSIC IMAGE INTEGRITY AUDIT ===');
const imageDir = path.join(__dirname, '..', '..', 'public', 'images', 'reviews');
const files = fs.readdirSync(imageDir).sort();
console.log('Total review images found:', files.length);

const hashes = new Map();
let duplicates = 0;
let invalidHeaders = 0;
let tooSmall = 0;

for (const f of files) {
  const fullPath = path.join(imageDir, f);
  const buf = fs.readFileSync(fullPath);
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  const isJpeg = buf.length > 3 && buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;
  
  if (!isJpeg) invalidHeaders++;
  if (buf.length < 10000) tooSmall++;

  let dupNote = '';
  if (hashes.has(hash)) {
    dupNote = ` [DUPLICATE: ${hashes.get(hash)}]`;
    duplicates++;
  } else {
    hashes.set(hash, f);
  }

  console.log(`${f.padEnd(30)} | Size: ${buf.length.toString().padStart(8)} B | JPEG Header: ${isJpeg ? 'OK' : 'FAIL'} | SHA256: ${hash.slice(0, 16)}...${dupNote}`);
}

console.log('\n--- Review Images Summary ---');
console.log('Total files:', files.length);
console.log('Duplicate files:', duplicates);
console.log('Invalid JPEG headers:', invalidHeaders);
console.log('Files < 10KB:', tooSmall);

console.log('\n=== TOP-LEVEL IMAGES VS REVIEWS CHECK ===');
const topDir = path.join(__dirname, '..', '..', 'public', 'images');
const topFiles = fs.readdirSync(topDir).filter(f => fs.statSync(path.join(topDir, f)).isFile()).sort();

for (const tf of topFiles) {
  const fullPath = path.join(topDir, tf);
  const buf = fs.readFileSync(fullPath);
  const hash = crypto.createHash('sha256').update(buf).digest('hex');
  const matchedReview = hashes.get(hash);
  console.log(`Top-level: ${tf.padEnd(25)} | Size: ${buf.length.toString().padStart(8)} B | Matched in reviews: ${matchedReview || 'None'}`);
}
