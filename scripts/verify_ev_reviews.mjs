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
const publicDir = path.join(rootDir, 'public');
const indexPagePath = path.join(articlesDir, 'page.tsx');

const placeholderPatterns = [
  /\blorem\b/i,
  /\bipsum\b/i,
  /\bdolor\b/i,
  /\bplaceholder\b/i,
  /\bdummy\b/i,
  /\btodo\b/i,
  /\btbd\b/i,
  /\bxxx\b/i,
  /\bsample text\b/i,
  /\binsert text\b/i,
  /\bcoming soon\b/i
];

const requiredSections = [
  {
    name: 'Pricing Table (THB)',
    regex: /(?:ราคา|ตารางราคา|รุ่นย่อย|THB|฿|บาท).*?<table/is
  },
  {
    name: 'Motor & Battery Specs',
    regex: /(?:มอเตอร์|แบตเตอรี่|kWh|hp|kW|แรงม้า|แรงบิด|Nm)/i
  },
  {
    name: '0-100 Performance',
    regex: /(?:0-100|อัตราเร่ง|วินาที)/i
  },
  {
    name: 'Ride Quality on Thai Road Conditions',
    regex: /(?:ช่วงล่าง|ถนน|หลุม|ลูกระนาด|คอนกรีต|NVH|ความนุ่มนวล|การทรงตัว)/i
  },
  {
    name: 'Charging Speeds (AC/DC)',
    regex: /(?:DC|AC|Fast Charge|ชาร์จ|kW|Home Charger|นาที)/i
  },
  {
    name: 'Active Safety & ADAS',
    regex: /(?:ADAS|ความปลอดภัย|Cruise Control|เตือน|เบรก|กล้อง|Airbag|ถุงลมนิรภัย)/i
  },
  {
    name: 'EVSELECT Fitment Card',
    regex: /(?:EVSELECT|Fitment|อุปกรณ์เสริม|ม่านบังแดด|พรม|ฟิล์ม|แผ่นกัน)/i
  },
  {
    name: 'Pros & Cons (จุดเด่น & ข้อสังเกต)',
    regex: /(?:จุดเด่น|ข้อสังเกต|Pros|Cons)/i
  },
  {
    name: 'Final Verdict Scorecard',
    regex: /(?:Scorecard|คะแนน|Verdict|บทสรุป|Rating)/i
  }
];

console.log('======================================================================');
console.log('EVSELECT ADVERSARIAL CONTENT & STRUCTURE VERIFICATION HARNESS');
console.log('======================================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const issues = [];

function assert(condition, message, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message}`);
    if (details) console.error(`         Details: ${details}`);
    issues.push({ message, details });
  }
}

// 1. Verify Articles Index Page
console.log('--- 1. Testing Articles Index Page (src/app/(storefront)/articles/page.tsx) ---');
if (fs.existsSync(indexPagePath)) {
  const indexContent = fs.readFileSync(indexPagePath, 'utf8');
  for (const slug of slugs) {
    const hasSlug = indexContent.includes(slug);
    assert(hasSlug, `Index links to review: /articles/${slug}`);
  }
} else {
  assert(false, `Articles index page exists at ${indexPagePath}`);
}
console.log('');

// 2. Deep Audit of All 8 Review Pages
for (const slug of slugs) {
  console.log(`--- Testing Review: ${slug} ---`);
  const pagePath = path.join(articlesDir, slug, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    assert(false, `File exists: ${slug}/page.tsx`, `Path not found: ${pagePath}`);
    continue;
  }
  
  const content = fs.readFileSync(pagePath, 'utf8');
  const lineCount = content.split('\n').length;
  const charCount = content.length;
  
  // Thai characters count
  const thaiCharMatches = content.match(/[\u0E00-\u0E7F]/g) || [];
  const thaiCharCount = thaiCharMatches.length;
  
  console.log(`  File stats: ${lineCount} lines, ${charCount} chars, ${thaiCharCount} Thai characters`);

  // Assert substantial depth
  assert(lineCount >= 300, `${slug}: Comprehensive line count (>= 300 lines, actual: ${lineCount})`);
  assert(thaiCharCount >= 2000, `${slug}: Deep Thai content (>= 2000 Thai chars, actual: ${thaiCharCount})`);

  // Placeholder check
  let foundPlaceholders = [];
  for (const pattern of placeholderPatterns) {
    const match = content.match(pattern);
    if (match) {
      // ignore legitimate tokens like 'todo' if inside code or non-placeholder, but flag if found
      foundPlaceholders.push(match[0]);
    }
  }
  assert(foundPlaceholders.length === 0, `${slug}: No placeholder/dummy/lorem ipsum text`, foundPlaceholders.join(', '));

  // Required sections check
  for (const sec of requiredSections) {
    const hasSec = sec.regex.test(content);
    assert(hasSec, `${slug}: Contains required section "${sec.name}"`);
  }

  // Modern Web Guidelines
  assert(content.includes("textWrap: 'balance'") || content.includes('text-wrap: balance'), `${slug}: Has text-wrap: balance styling`);
  assert(content.includes("contentVisibility: 'auto'") || content.includes('content-visibility: auto'), `${slug}: Has content-visibility: auto optimization`);

  // SEO Metadata
  assert(content.includes('export const metadata') && content.includes('title:') && content.includes('description:'), `${slug}: Exports SEO metadata`);

  // Image references verification
  const imgMatches = [...content.matchAll(/src=["'](\/images\/[^"']+)["']/g)];
  assert(imgMatches.length >= 3, `${slug}: Contains multiple images (>= 3, actual: ${imgMatches.length})`);
  
  for (const match of imgMatches) {
    const relativeImgPath = match[1];
    const absoluteImgPath = path.join(publicDir, relativeImgPath.replace(/^\//, ''));
    const exists = fs.existsSync(absoluteImgPath);
    assert(exists, `${slug}: Referenced image exists on disk (${relativeImgPath})`, absoluteImgPath);
  }

  console.log('');
}

console.log('======================================================================');
console.log(`SUMMARY: Total: ${totalTests}, Passed: ${passedTests}, Failed: ${failedTests}`);
console.log('======================================================================');

if (failedTests > 0) {
  console.error('\nFAILURES DETECTED:');
  issues.forEach((issue, idx) => {
    console.error(`${idx + 1}. ${issue.message} ${issue.details ? `(${issue.details})` : ''}`);
  });
  process.exit(1);
} else {
  console.log('\nALL 8 EV REVIEWS EMPIRICALLY VERIFIED AND APPROVED!');
  process.exit(0);
}
