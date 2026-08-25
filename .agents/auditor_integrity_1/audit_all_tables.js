const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', '..');

const reviews = [
  'tesla-model-3-highland-review',
  'byd-seal-review',
  'zeekr-x-review',
  'mg4-electric-review',
  'deepal-s07-review',
  'byd-atto-3-review',
  'deepal-s05-review',
  'geely-ex2-review',
];

for (const rev of reviews) {
  const file = path.join(baseDir, 'src', 'app', '(storefront)', 'articles', rev, 'page.tsx');
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n========================================`);
  console.log(`MODEL: ${rev}`);
  const tableData = [...content.matchAll(/<tr[^>]*>[\s\S]*?<\/tr>/g)].map(m => m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  tableData.forEach(r => console.log(`  - ${r}`));
}
