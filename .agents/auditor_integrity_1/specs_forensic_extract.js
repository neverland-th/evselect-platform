const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '..', '..', 'src', 'app', '(storefront)', 'articles');

const reviews = [
  'tesla-model-3-highland-review',
  'byd-seal-review',
  'zeekr-x-review',
  'mg4-electric-review',
  'deepal-s07-review',
  'byd-atto-3-review',
  'deepal-s05-review',
  'geely-ex2-review',
];

console.log('=== SPECIFICATION AUDIT REPORT ===');

for (const rev of reviews) {
  const filePath = path.join(articlesDir, rev, 'page.tsx');
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n========================================`);
  console.log(`MODEL REVIEW: ${rev}`);
  console.log(`========================================`);

  // Extract meta title & description
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) console.log(`Title: ${titleMatch[1]}`);
  if (descMatch) console.log(`Description: ${descMatch[1]}`);

  // Extract pricing
  const priceMatches = [...content.matchAll(/(\d[\d,]*\s*(?:บาท|THB|฿))/g)];
  const uniquePrices = [...new Set(priceMatches.map(m => m[0]))];
  console.log(`Pricing Mentions:`, uniquePrices.slice(0, 8).join(', '));

  // Extract key spec mentions
  const hpMatches = [...content.matchAll(/(\d+[\d\.]*\s*(?:แรงม้า|hp|PS|kW))/gi)];
  const uniqueHp = [...new Set(hpMatches.map(m => m[0]))];
  console.log(`Horsepower/Power:`, uniqueHp.slice(0, 10).join(', '));

  const torqueMatches = [...content.matchAll(/(\d+[\d\.]*\s*(?:นิวตัน-เมตร|Nm|N·m))/gi)];
  const uniqueTorque = [...new Set(torqueMatches.map(m => m[0]))];
  console.log(`Torque:`, uniqueTorque.slice(0, 8).join(', '));

  const accelMatches = [...content.matchAll(/(\d+[\d\.]*\s*วินาที|\d+[\d\.]*s)/gi)];
  const uniqueAccel = [...new Set(accelMatches.map(m => m[0]))];
  console.log(`0-100 km/h:`, uniqueAccel.slice(0, 8).join(', '));

  const rangeMatches = [...content.matchAll(/(\d+[\d\.]*\s*(?:กม\.|km|กิโลเมตร)(?:\s*\((?:NEDC|WLTP|CLTC)\))?)/gi)];
  const uniqueRange = [...new Set(rangeMatches.map(m => m[0]))];
  console.log(`Range:`, uniqueRange.slice(0, 10).join(', '));

  const batteryMatches = [...content.matchAll(/(\d+[\d\.]*\s*kWh)/gi)];
  const uniqueBattery = [...new Set(batteryMatches.map(m => m[0]))];
  console.log(`Battery:`, uniqueBattery.slice(0, 8).join(', '));

  // Check images used in page
  const images = [...content.matchAll(/(?:\/images\/reviews\/[a-zA-Z0-9\-_]+\.jpg)/g)].map(m => m[0]);
  const uniqueImages = [...new Set(images)];
  console.log(`Images:`, uniqueImages.join(', '));
}
