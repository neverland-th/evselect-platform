import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const articlesDir = path.join(rootDir, 'src', 'app', '(storefront)', 'articles');
const publicDir = path.join(rootDir, 'public');

const filesToScan = [
  'byd-seal-review/page.tsx',
  'tesla-model-3-highland-review/page.tsx',
  'byd-atto-3-review/page.tsx',
  'zeekr-x-review/page.tsx',
  'deepal-s07-review/page.tsx',
  'mg4-electric-review/page.tsx',
  'deepal-s05-review/page.tsx',
  'geely-ex2-review/page.tsx',
  'page.tsx'
];

console.log('=== VERIFYING IMAGE INTEGRITY ACROSS ALL REVIEW PAGES ===\n');

let allImagesValid = true;

for (const relFile of filesToScan) {
  const filePath = path.join(articlesDir, relFile);
  const content = fs.readFileSync(filePath, 'utf8');

  const imgMatches = [...content.matchAll(/src=["'](\/images\/[^"']+)["']/g), ...content.matchAll(/image:\s*['"](\/images\/[^"']+)['"]/g)];
  const uniqueImages = [...new Set(imgMatches.map(m => m[1]))];

  console.log(`Checking ${relFile} (${uniqueImages.length} images):`);
  for (const imgUrl of uniqueImages) {
    const diskPath = path.join(publicDir, imgUrl.replace(/^\//, ''));
    if (!fs.existsSync(diskPath)) {
      console.error(`  ❌ MISSING: ${imgUrl} -> ${diskPath}`);
      allImagesValid = false;
    } else {
      const stats = fs.statSync(diskPath);
      if (stats.size === 0) {
        console.error(`  ❌ EMPTY FILE (0 bytes): ${imgUrl}`);
        allImagesValid = false;
      } else {
        console.log(`  ✅ OK: ${imgUrl} (${(stats.size / 1024).toFixed(1)} KB)`);
      }
    }
  }
  console.log('');
}

if (!allImagesValid) {
  console.error('IMAGE INTEGRITY CHECK FAILED!');
  process.exit(1);
} else {
  console.log('ALL REFERENCED IMAGES EXIST AND HAVE VALID FILE SIZES!');
  process.exit(0);
}
