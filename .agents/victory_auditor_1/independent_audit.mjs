import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const articlesDir = path.join(rootDir, 'src/app/(storefront)/articles');
const publicDir = path.join(rootDir, 'public');

const slugs = [
  'byd-seal-review',
  'tesla-model-3-highland-review',
  'byd-atto-3-review',
  'zeekr-x-review',
  'deepal-s07-review',
  'mg4-electric-review',
  'deepal-s05-review',
  'geely-ex2-review'
];

console.log('====================================================');
console.log('   INDEPENDENT VICTORY AUDIT: DETAILED INSPECTION   ');
console.log('====================================================\n');

let totalIssues = 0;

// 1. Audit each article
console.log('--- 1. REVIEW ARTICLES AUDIT ---');
for (const slug of slugs) {
  const filePath = path.join(articlesDir, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ MISSING FILE: ${filePath}`);
    totalIssues++;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').length;
  const chars = content.length;
  const thaiChars = (content.match(/[\u0E00-\u0E7F]/g) || []).length;
  const imageMatches = [...content.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
  const hasBalance = content.includes('textWrap') || content.includes('text-wrap');
  const hasContentVis = content.includes('contentVisibility');
  
  // Check for forbidden placeholder patterns
  const forbidden = ['TODO', 'TBD', 'FIXME', 'placeholder', 'Lorem ipsum', 'lorem ipsum', 'test test'];
  const foundForbidden = forbidden.filter(f => content.toLowerCase().includes(f.toLowerCase()));

  console.log(`\n[Article: ${slug}]`);
  console.log(`  Lines: ${lines} | Chars: ${chars} | Thai Chars: ${thaiChars}`);
  console.log(`  text-wrap compliant: ${hasBalance} | content-visibility: ${hasContentVis}`);
  console.log(`  Placeholders found: ${foundForbidden.length === 0 ? 'CLEAN (0)' : 'FAIL: ' + foundForbidden.join(', ')}`);
  console.log(`  Images referenced (${imageMatches.length}): ${imageMatches.join(', ')}`);

  if (foundForbidden.length > 0) totalIssues++;
  if (thaiChars < 2000) {
    console.error(`  ❌ Low Thai content count: ${thaiChars}`);
    totalIssues++;
  }
  if (!hasBalance) {
    console.error(`  ❌ Missing textWrap / text-wrap`);
    totalIssues++;
  }

  // Verify all image references
  for (const img of imageMatches) {
    if (img.startsWith('/')) {
      const diskPath = path.join(publicDir, img.slice(1));
      if (!fs.existsSync(diskPath)) {
        console.error(`  ❌ Image not found on disk: ${diskPath}`);
        totalIssues++;
      } else {
        const stat = fs.statSync(diskPath);
        if (stat.size < 5000) {
          console.error(`  ❌ Suspiciously small image file (${stat.size} bytes): ${img}`);
          totalIssues++;
        }
      }
    }
  }
}

// 2. Audit Articles Index Page
console.log('\n--- 2. ARTICLES INDEX PAGE AUDIT ---');
const indexFile = path.join(articlesDir, 'page.tsx');
if (!fs.existsSync(indexFile)) {
  console.error(`❌ MISSING INDEX: ${indexFile}`);
  totalIssues++;
} else {
  const indexContent = fs.readFileSync(indexFile, 'utf8');
  console.log(`Index file size: ${indexContent.length} bytes, lines: ${indexContent.split('\n').length}`);
  for (const slug of slugs) {
    const linkTarget = `/articles/${slug}`;
    const hasLink = indexContent.includes(linkTarget) || indexContent.includes(slug);
    if (!hasLink) {
      console.error(`❌ Index page does NOT link to ${linkTarget}`);
      totalIssues++;
    } else {
      console.log(`  ✓ Link to ${slug} present`);
    }
  }
}

// 3. Audit Images in public/images/reviews
console.log('\n--- 3. IMAGE DIRECTORY AUDIT ---');
const reviewsImgDir = path.join(publicDir, 'images', 'reviews');
if (!fs.existsSync(reviewsImgDir)) {
  console.error(`❌ MISSING reviews image directory: ${reviewsImgDir}`);
  totalIssues++;
} else {
  const imgFiles = fs.readdirSync(reviewsImgDir);
  console.log(`Found ${imgFiles.length} image files in ${reviewsImgDir}`);
  for (const f of imgFiles) {
    const stat = fs.statSync(path.join(reviewsImgDir, f));
    console.log(`  - ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
  }
}

console.log('\n====================================================');
console.log(`AUDIT SCRIPT COMPLETE: Total Issues Found = ${totalIssues}`);
console.log('====================================================');

if (totalIssues > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
