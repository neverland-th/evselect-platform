import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

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

const articlesDir = path.join(rootDir, 'src', 'app', '(storefront)', 'articles');

console.log('=== DETAILED DATA EXTRACTION AUDIT ACROSS ALL 8 REVIEWS ===\n');

for (const slug of slugs) {
  const pagePath = path.join(articlesDir, slug, 'page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');

  // Title
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  const title = titleMatch ? titleMatch[1] : 'N/A';

  // Score
  const scoreMatch = content.match(/EVSELECT Rating.*?(\d+\.\d+)\s*<span/s) || content.match(/(\d+\.\d+)\s*\/\s*10/);
  const score = scoreMatch ? scoreMatch[1] : 'N/A';

  // Sections found
  const sections = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  // Pros and cons count
  const prosMatches = [...content.matchAll(/จุดเด่น \(Pros\)[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/g)];
  const consMatches = [...content.matchAll(/ข้อสังเกต \(Cons\)[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/g)];
  
  const prosCount = prosMatches.length > 0 ? (prosMatches[0][1].match(/<li/g) || []).length : 0;
  const consCount = consMatches.length > 0 ? (consMatches[0][1].match(/<li/g) || []).length : 0;

  // Images used
  const images = [...content.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);

  console.log(`Model Slug: ${slug}`);
  console.log(`  SEO Title: ${title}`);
  console.log(`  Overall Rating: ${score}/10`);
  console.log(`  H2 Sections Count: ${sections.length}`);
  console.log(`  Pros: ${prosCount}, Cons: ${consCount}`);
  console.log(`  Image Assets (${images.length}): ${images.join(', ')}`);
  console.log(`  Sections:\n    - ${sections.join('\n    - ')}`);
  console.log('------------------------------------------------------------\n');
}
