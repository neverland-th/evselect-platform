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

console.log('=== SECTION-BY-SECTION DETAILED CONTENT DEPTH AUDIT ===\n');

const checks = [
  { name: 'Pricing in THB', test: (s) => /[\d,]{6,}\s*(?:฿|บาท|THB)/is.test(s) },
  { name: 'Motor specs (hp/kW)', test: (s) => /(?:\d+\s*(?:hp|แรงม้า|kW|นิวตันเมตร|Nm))/is.test(s) },
  { name: '0-100 km/h acceleration', test: (s) => /(?:0-100[\s\S]*?วินาที)/is.test(s) || /0-100[\s\S]*?\d+\.\d+/is.test(s) },
  { name: 'Thai road conditions ride test', test: (s) => /(?:หลุม|คอสะพาน|รอยต่อ|คอนกรีต|ลูกระนาด|ถนนไทย|เมืองไทย)/is.test(s) },
  { name: 'Charging specs (kW, minutes, DC/AC)', test: (s) => /(?:DC[\s\S]*?kW|kW[\s\S]*?DC|ชาร์จ[\s\S]*?นาที)/is.test(s) },
  { name: 'ADAS & safety features', test: (s) => /(?:ADAS|ACC|Cruise Control|AEB|ถุงลมนิรภัย|Blind Spot|Euro NCAP)/is.test(s) },
  { name: 'EVSELECT Fitment card & accessories', test: (s) => /(?:EVSELECT|Fitment|อุปกรณ์เสริม|ม่านบังแดด|พรม TPE|ฟิล์ม)/is.test(s) },
  { name: 'Pros & Cons (จุดเด่น & ข้อสังเกต)', test: (s) => /(?:จุดเด่น|Pros)[\s\S]*?(?:ข้อสังเกต|Cons)/is.test(s) },
  { name: 'Scorecard rating breakdown', test: (s) => /(?:Scorecard|คะแนนประเมิน|EVSELECT Scorecard)[\s\S]*?\d+\.\d+\s*\/\s*10/is.test(s) }
];

let allPassed = true;

for (const slug of slugs) {
  const pagePath = path.join(articlesDir, slug, 'page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');

  console.log(`[AUDITING] ${slug}`);
  for (const check of checks) {
    const passed = check.test(content);
    if (!passed) {
      console.error(`  ❌ FAILED: ${check.name}`);
      allPassed = false;
    } else {
      console.log(`  ✅ PASSED: ${check.name}`);
    }
  }
  console.log('');
}

if (!allPassed) {
  console.error('FAILURES DETECTED IN DEEP SECTION AUDIT!');
  process.exit(1);
} else {
  console.log('ALL SECTION AUDITS PASSED WITH FULL MARKS!');
  process.exit(0);
}
