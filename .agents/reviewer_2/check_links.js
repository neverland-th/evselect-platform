const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync('src/app/(storefront)/articles/page.tsx', 'utf8');

// Extract ALL_ARTICLES array slugs
const slugMatches = Array.from(indexContent.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)).map(m => m[1]);
console.log('Slugs found in page.tsx ALL_ARTICLES:', slugMatches);

const missingRoutes = [];
slugMatches.forEach(slug => {
  const pagePath = path.join('src/app/(storefront)/articles', slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    missingRoutes.push({ slug, pagePath });
  }
});

console.log('Missing routes count:', missingRoutes.length);
if (missingRoutes.length > 0) {
  console.log('Missing routes:', missingRoutes);
} else {
  console.log('SUCCESS: All article slugs point to valid page.tsx files!');
}
