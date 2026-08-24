import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const reviewsDir = path.join(rootDir, 'public/images/reviews');
const files = fs.readdirSync(reviewsDir);

console.log('=== VERIFY IMAGE CONTAINER FORMATS ===\n');
let unknownCount = 0;

function detectImageFormat(buffer) {
  if (buffer.length < 12) return 'CORRUPT_TOO_SHORT';
  
  // JPEG: FF D8 FF
  if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) {
    return 'JPEG';
  }
  // PNG: 89 50 4E 47
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    return 'PNG';
  }
  // WEBP: RIFF .... WEBP
  if (buffer.slice(0, 4).toString('ascii') === 'RIFF' && buffer.slice(8, 12).toString('ascii') === 'WEBP') {
    return 'WEBP';
  }
  // AVIF / HEIC / ISO-BMFF: ....ftypavif or ....ftypavis or ....ftyp
  const ftyp = buffer.slice(4, 8).toString('ascii');
  if (ftyp === 'ftyp') {
    const brand = buffer.slice(8, 12).toString('ascii');
    return `ISO-BMFF / ${brand.toUpperCase()}`;
  }
  // GIF
  if (buffer.slice(0, 6).toString('ascii').startsWith('GIF')) {
    return 'GIF';
  }
  return 'UNKNOWN';
}

for (const file of files) {
  const filePath = path.join(reviewsDir, file);
  const buffer = fs.readFileSync(filePath);
  const format = detectImageFormat(buffer);
  
  console.log(`  ${file}: [${format}] - ${(buffer.length / 1024).toFixed(1)} KB`);
  if (format === 'UNKNOWN' || format.startsWith('CORRUPT')) {
    unknownCount++;
  }
}

console.log(`\nResult: ${unknownCount === 0 ? 'ALL 32 IMAGES ARE GENUINE BINARY IMAGE FILES' : `${unknownCount} UNKNOWN FILES`}`);
process.exit(unknownCount === 0 ? 0 : 1);
