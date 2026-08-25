const fs = require('fs');
const path = require('path');

function getJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) { // SOF0 / SOF2
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

const dir = path.join(__dirname, '..', '..', 'public', 'images', 'reviews');
const files = fs.readdirSync(dir).sort();

for (const f of files) {
  const buf = fs.readFileSync(path.join(dir, f));
  const dim = getJpegDimensions(buf);
  console.log(`${f.padEnd(30)} -> ${dim ? `${dim.width}x${dim.height}` : 'UNKNOWN'}`);
}
