const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, '..', '..', 'src', 'app', '(storefront)', 'articles', 'page.tsx');
const content = fs.readFileSync(indexFile, 'utf8');

console.log('=== CATALOG INDEX AUDIT ===');
console.log('File size:', content.length, 'bytes, Lines:', content.split('\n').length);

// Extract reviews array if defined
const articleMatches = [...content.matchAll(/title:\s*['"`]([^'"`]+)['"`][\s\S]*?slug:\s*['"`]([^'"`]+)['"`][\s\S]*?excerpt:\s*['"`]([^'"`]+)['"`]/g)];
console.log(`Found ${articleMatches.length} structured article entries in index:`);

articleMatches.forEach((m, i) => {
  console.log(`\nEntry #${i+1}:`);
  console.log(`  Title: ${m[1]}`);
  console.log(`  Slug: ${m[2]}`);
  console.log(`  Excerpt: ${m[3].slice(0, 100)}...`);
});

// Check all image references in index
const imgMatches = [...content.matchAll(/(?:\/images\/[a-zA-Z0-9_\-\/]+\.jpg)/g)].map(m => m[0]);
console.log('\nReferenced images in catalog index:', [...new Set(imgMatches)]);
