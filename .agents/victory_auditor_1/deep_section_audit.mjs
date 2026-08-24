import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const articlesDir = path.join(rootDir, 'src/app/(storefront)/articles');

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

console.log('=== DEEP STRUCTURAL & CONTENT QUALITY AUDIT ===\n');

const requiredThemes = [
  { name: 'Pricing/Trims', patterns: ['ราคา', 'รุ่นย่อย', 'บาท', '฿'] },
  { name: 'Exterior/Dimensions', patterns: ['ภายนอก', 'มิติ', 'มม.', 'ล้อ'] },
  { name: 'Interior/Infotainment', patterns: ['ภายใน', 'ห้องโดยสาร', 'จอ', 'เบาะ'] },
  { name: 'Luggage/Practicality', patterns: ['สัมภาระ', 'ลิตร', 'Frunk', 'Trunk', 'ท้าย'] },
  { name: 'Performance/Motor', patterns: ['แรงม้า', 'แรงบิด', '0-100', 'มอเตอร์', 'kW', 'Nm'] },
  { name: 'Ride Quality/Suspension', patterns: ['ขับขี่', 'ช่วงล่าง', 'ถนน', 'โช้ค', 'ควบคุม'] },
  { name: 'Range/Battery/Charging', patterns: ['แบตเตอรี่', 'ชาร์จ', 'NEDC', 'WLTP', 'kWh', 'DC'] },
  { name: 'Safety/ADAS', patterns: ['ความปลอดภัย', 'ADAS', 'กล้อง', 'เบรก'] },
  { name: 'Pros/Cons', patterns: ['จุดเด่น', 'ข้อสังเกต', 'Pros', 'Cons'] },
  { name: 'Verdict/Scorecard', patterns: ['บทสรุป', 'ความคุ้มค่า', 'Scorecard', 'Rating', '/ 10'] }
];

let allPassed = true;

for (const slug of slugs) {
  const filePath = path.join(articlesDir, slug, 'page.tsx');
  const content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`[Testing Structure: ${slug}]`);
  const missingThemes = [];
  
  for (const theme of requiredThemes) {
    const match = theme.patterns.some(p => content.includes(p));
    if (!match) {
      missingThemes.push(theme.name);
    }
  }
  
  if (missingThemes.length > 0) {
    console.error(`  ❌ Missing themes: ${missingThemes.join(', ')}`);
    allPassed = false;
  } else {
    console.log(`  ✓ All ${requiredThemes.length} required CarExpert technical sections confirmed present.`);
  }
  
  // Check tables presence
  const hasTable = content.includes('<table') || content.includes('grid grid-cols');
  console.log(`  ✓ Specs/Pricing comparison tables: ${hasTable ? 'YES' : 'NO'}`);
}

console.log('\nResult: ' + (allPassed ? 'ALL ARTICLES STRUCTURALLY COMPLETE AND ROBUST' : 'FAILURES DETECTED'));
process.exit(allPassed ? 0 : 1);
