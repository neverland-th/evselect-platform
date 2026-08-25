import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');
const publicDir = path.join(projectRoot, 'public');

function getAllFiles(dir, exts = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else if (exts.includes(path.extname(file))) {
      results.push(fullPath);
    }
  }
  return results;
}

const allSrcFiles = getAllFiles(srcDir);
console.log(`Auditing ${allSrcFiles.length} source files across the project...`);

let issues = [];
let imgReferences = [];
let linkReferences = [];

const imgRegex = /(?:src|image|srcSet|background|heroImage|poster)\s*[:=]\s*["'`]((\/images\/[^"'`]+)|(\/logo[^"'`]*))["'`]/g;
const hrefRegex = /href\s*[:=]\s*["'`]((\/[^"'`#?]*))["'`]/g;

for (const file of allSrcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(projectRoot, file);

  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgUrl = match[1];
    imgReferences.push({ file: relPath, img: imgUrl });
    const targetPath = path.join(publicDir, imgUrl.replace(/^\//, ''));
    if (!fs.existsSync(targetPath)) {
      issues.push(`Broken image in ${relPath}: ${imgUrl} -> ${targetPath} does not exist`);
    } else {
      const stats = fs.statSync(targetPath);
      if (stats.size < 1000) {
        issues.push(`Suspiciously small image file in ${relPath}: ${imgUrl} (${stats.size} bytes)`);
      }
    }
  }

  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    linkReferences.push({ file: relPath, href });
  }
}

console.log(`Found ${imgReferences.length} total image references.`);
console.log(`Found ${linkReferences.length} total internal href references.`);

// Check all 32 review images in public/images/reviews
const reviewImagesExpected = [
  'byd-seal-hero.jpg', 'byd-seal-exterior.jpg', 'byd-seal-interior.jpg', 'byd-seal-details.jpg',
  'tesla-model-3-hero.jpg', 'tesla-model-3-exterior.jpg', 'tesla-model-3-interior.jpg', 'tesla-model-3-details.jpg',
  'byd-atto-3-hero.jpg', 'byd-atto-3-exterior.jpg', 'byd-atto-3-interior.jpg', 'byd-atto-3-details.jpg',
  'zeekr-x-hero.jpg', 'zeekr-x-exterior.jpg', 'zeekr-x-interior.jpg', 'zeekr-x-details.jpg',
  'deepal-s07-hero.jpg', 'deepal-s07-exterior.jpg', 'deepal-s07-interior.jpg', 'deepal-s07-details.jpg',
  'mg4-electric-hero.jpg', 'mg4-electric-exterior.jpg', 'mg4-electric-interior.jpg', 'mg4-electric-details.jpg',
  'deepal-s05-hero.jpg', 'deepal-s05-exterior.jpg', 'deepal-s05-interior.jpg', 'deepal-s05-details.jpg',
  'geely-ex2-hero.jpg', 'geely-ex2-exterior.jpg', 'geely-ex2-interior.jpg', 'geely-ex2-details.jpg'
];

const reviewsDir = path.join(publicDir, 'images', 'reviews');
console.log('\n--- VERIFYING 32 REVIEW IMAGES IN public/images/reviews ---');
for (const imgName of reviewImagesExpected) {
  const p = path.join(reviewsDir, imgName);
  if (!fs.existsSync(p)) {
    issues.push(`Missing expected review image: public/images/reviews/${imgName}`);
  } else {
    const size = fs.statSync(p).size;
    console.log(`  ✓ ${imgName} (${(size / 1024).toFixed(1)} KB)`);
  }
}

// Top level deepal-s05.jpg check
const deepalTop = path.join(publicDir, 'images', 'deepal-s05.jpg');
if (!fs.existsSync(deepalTop)) {
  issues.push('Missing top-level public/images/deepal-s05.jpg');
} else {
  console.log(`  ✓ deepal-s05.jpg top-level (${(fs.statSync(deepalTop).size / 1024).toFixed(1)} KB)`);
}

console.log('\n--- AUDIT SUMMARY ---');
if (issues.length > 0) {
  console.error('ISSUES FOUND:');
  issues.forEach(i => console.error(`  ❌ ${i}`));
  process.exit(1);
} else {
  console.log('ALL AUDITS PASSED WITH 0 ISSUES!');
  process.exit(0);
}
