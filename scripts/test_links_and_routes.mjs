import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const ARTICLES_DIR = path.join(PROJECT_ROOT, 'src', 'app', '(storefront)', 'articles');

console.log('--- LINK & ROUTING AUDIT ---');

const articleDirs = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let totalLinksChecked = 0;
let brokenLinks = 0;

for (const dir of articleDirs) {
  const pageFile = path.join(ARTICLES_DIR, dir, 'page.tsx');
  const content = fs.readFileSync(pageFile, 'utf-8');

  // Match href="..."
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
  for (const match of hrefMatches) {
    totalLinksChecked++;
    const href = match[1];
    
    // Internal links
    if (href.startsWith('/articles/')) {
      const slug = href.replace('/articles/', '');
      const targetPath = path.join(ARTICLES_DIR, slug, 'page.tsx');
      if (!fs.existsSync(targetPath)) {
        console.error(`[FAIL] Broken internal article link in ${dir}: ${href}`);
        brokenLinks++;
      } else {
        console.log(`[PASS] Valid article link in ${dir}: ${href}`);
      }
    } else if (href === '/articles' || href === '/' || href.startsWith('/#') || href.startsWith('/products')) {
      console.log(`[PASS] Valid standard route in ${dir}: ${href}`);
    } else {
      console.log(`[INFO] Other link in ${dir}: ${href}`);
    }
  }
}

console.log(`\nChecked ${totalLinksChecked} links. Broken links: ${brokenLinks}`);
if (brokenLinks > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
