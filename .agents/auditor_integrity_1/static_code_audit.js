const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '..', '..', 'src', 'app', '(storefront)', 'articles');
const files = [];

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const p = path.join(dir, item);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      walk(p);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(p);
    }
  }
}

walk(articlesDir);
console.log('Found article TSX files:', files.length);

const suspiciousKeywords = [
  'TODO', 'FIXME', 'mock', 'dummy', 'cheat', 'facade', 
  'lorem ipsum', 'NotImplemented', 'placeholder image', 
  'porsche', 'camaro', 'ferrari', 'corvette', 'audi-a5', 'anime'
];

let allValid = true;

for (const f of files) {
  const relPath = path.relative(path.join(__dirname, '..', '..'), f);
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n').length;
  
  console.log(`\n--- Inspecting ${relPath} (${lines} lines, ${content.length} bytes) ---`);
  
  // Keyword scan
  for (const kw of suspiciousKeywords) {
    const re = new RegExp(kw, 'gi');
    const matches = content.match(re);
    if (matches) {
      console.log(`  [FLAG] Suspicious keyword match: "${kw}" (${matches.length} occurrences)`);
      // print matching lines
      const lineArr = content.split('\n');
      lineArr.forEach((l, idx) => {
        if (re.test(l)) {
          console.log(`    Line ${idx + 1}: ${l.trim()}`);
        }
      });
    }
  }

  // Image reference check
  const imgMatches = [...content.matchAll(/src=['"]([^'"]+)['"]/g), ...content.matchAll(/image:\s*['"]([^'"]+)['"]/g), ...content.matchAll(/heroImage:\s*['"]([^'"]+)['"]/g)];
  for (const m of imgMatches) {
    const src = m[1];
    if (src.startsWith('/')) {
      const diskPath = path.join(__dirname, '..', '..', 'public', src);
      const exists = fs.existsSync(diskPath);
      if (!exists) {
        console.log(`  [ERROR] Image reference missing on disk: ${src}`);
        allValid = false;
      } else {
        // console.log(`  [OK] Image exists: ${src}`);
      }
    }
  }
}

console.log('\nOverall image path validation:', allValid ? 'ALL REFERENCED IMAGES EXIST' : 'MISSING IMAGES DETECTED');
