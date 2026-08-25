const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', '..');

function auditReview(slug) {
  const file = path.join(baseDir, 'src', 'app', '(storefront)', 'articles', slug, 'page.tsx');
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n========================================`);
  console.log(`AUDITING: ${slug}`);
  console.log(`File size: ${content.length} bytes, Lines: ${content.split('\n').length}`);
  
  // Extract key specs from table or text
  const tableData = [...content.matchAll(/<tr[^>]*>[\s\S]*?<\/tr>/g)].map(m => m[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  console.log(`Spec Table rows (${tableData.length}):`);
  tableData.slice(0, 10).forEach(r => console.log(`  - ${r}`));

  const images = [...content.matchAll(/\/images\/[a-zA-Z0-9_\-\/]+\.jpg/g)].map(m => m[0]);
  console.log(`Referenced images:`, [...new Set(images)]);
}

auditReview('tesla-model-3-highland-review');
auditReview('byd-seal-review');
