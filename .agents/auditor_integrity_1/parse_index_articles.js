const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, '..', '..', 'src', 'app', '(storefront)', 'articles', 'page.tsx');
const content = fs.readFileSync(indexFile, 'utf8');

// Find articles definition
const match = content.match(/const\s+articles\s*=\s*(\[[\s\S]*?\]);/);
if (match) {
  console.log('Found articles array. Inspecting articles array contents:');
  // Evaluate the array safely or parse it
  try {
    // We can evaluate it in a clean sandbox function
    const fn = new Function(`return ${match[1]};`);
    const articles = fn();
    console.log(`Parsed ${articles.length} articles in catalog:`);
    articles.forEach((a, i) => {
      console.log(`\n[${i+1}] ${a.title}`);
      console.log(`    Slug: ${a.slug}`);
      console.log(`    Badge: ${a.badge || a.category}`);
      console.log(`    Price: ${a.priceRange || a.price}`);
      console.log(`    Image: ${a.heroImage || a.image}`);
      console.log(`    Specs: ${JSON.stringify(a.specs || a.quickSpecs || {})}`);
    });
  } catch (e) {
    console.log('Error parsing articles array:', e.message);
  }
} else {
  console.log('Could not find `const articles = [...]` directly');
}
