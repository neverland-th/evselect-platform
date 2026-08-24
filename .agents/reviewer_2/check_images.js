const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.tsx')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('src/app/(storefront)/articles');
const missingImages = [];
const checkedImages = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /src=["'`](\/images\/[^"'`]+)["'`]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const imgPath = match[1];
    checkedImages.add(imgPath);
    const diskPath = path.join('public', imgPath.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      missingImages.push({ file: f, image: imgPath, diskPath });
    }
  }
});

console.log('Checked files count:', files.length);
console.log('Total unique images referenced:', checkedImages.size);
console.log('Checked images list:', Array.from(checkedImages));
console.log('Missing images count:', missingImages.length);
if (missingImages.length > 0) {
  console.log('Missing images details:', missingImages);
} else {
  console.log('SUCCESS: All referenced images exist on disk!');
}
