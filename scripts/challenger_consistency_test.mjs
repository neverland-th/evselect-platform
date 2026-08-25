import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const ARTICLES_DIR = path.join(PROJECT_ROOT, 'src', 'app', '(storefront)', 'articles');
const CATALOG_PAGE = path.join(ARTICLES_DIR, 'page.tsx');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');

console.log('====================================================');
console.log('CHALLENGER 2: CATALOG & CONTENT CONSISTENCY TEST HARNESS');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failureDetails = [];

function assert(condition, message, detail = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message}`);
    if (detail) {
      console.error(`         Detail: ${detail}`);
    }
    failureDetails.push({ message, detail });
  }
}

// 1. Parse ALL_ARTICLES from articles/page.tsx
console.log('--- TEST SUITE 1: Catalog Index & ALL_ARTICLES Metadata ---');
assert(fs.existsSync(CATALOG_PAGE), 'Catalog page.tsx exists');

const catalogContent = fs.readFileSync(CATALOG_PAGE, 'utf-8');

// Extract ALL_ARTICLES array using regex/eval or AST parsing
const articlesMatch = catalogContent.match(/const ALL_ARTICLES:\s*ArticleItem\[\]\s*=\s*(\[[\s\S]*?\]);/);
assert(!!articlesMatch, 'ALL_ARTICLES array successfully found in articles/page.tsx');

let allArticles = [];
try {
  // Clean TS annotations if any and parse via Function
  const arrayCode = articlesMatch[1];
  allArticles = new Function(`return ${arrayCode}`)();
  assert(Array.isArray(allArticles) && allArticles.length > 0, `Parsed ${allArticles.length} articles from ALL_ARTICLES`);
} catch (err) {
  assert(false, 'Failed to parse ALL_ARTICLES array', err.message);
}

// Test Segment and Category counts in ALL_ARTICLES
const reviews = allArticles.filter(a => a.categorySlug === 'reviews');
const guides = allArticles.filter(a => a.categorySlug === 'guides');
const sedans = allArticles.filter(a => a.segment === 'sedan');
const suvs = allArticles.filter(a => a.segment === 'suv');
const hatchbacks = allArticles.filter(a => a.segment === 'hatchback');
const citys = allArticles.filter(a => a.segment === 'city');
const guideSegments = allArticles.filter(a => a.segment === 'guide');

assert(allArticles.length === 9, `Total articles count is 9 (actual: ${allArticles.length})`);
assert(reviews.length === 8, `Total reviews count is 8 (actual: ${reviews.length})`);
assert(guides.length === 1, `Total guides count is 1 (actual: ${guides.length})`);
assert(sedans.length === 2, `Total sedans count is 2 (actual: ${sedans.length})`);
assert(suvs.length === 4, `Total SUVs count is 4 (actual: ${suvs.length})`);
assert(hatchbacks.length === 1, `Total hatchbacks count is 1 (actual: ${hatchbacks.length})`);
assert(citys.length === 1, `Total city cars count is 1 (actual: ${citys.length})`);
assert(guideSegments.length === 1, `Total guide segment count is 1 (actual: ${guideSegments.length})`);

// Check that catalog UI filter labels match segment counts
assert(catalogContent.includes('⚡ ซีดาน / สปอร์ต (2)'), 'Catalog UI has correct sedan filter label (2)');
assert(catalogContent.includes('🚙 เอสยูวี / ครอสโอเวอร์ (4)'), 'Catalog UI has correct suv filter label (4)');
assert(catalogContent.includes('🏎️ แฮทช์แบ็กขับหลัง (1)'), 'Catalog UI has correct hatchback filter label (1)');
assert(catalogContent.includes('🏙️ ซิตี้คาร์ในเมือง (1)'), 'Catalog UI has correct city filter label (1)');


console.log('\n--- TEST SUITE 2: Article Directory & Routing Consistency ---');

// Find all directories in src/app/(storefront)/articles/
const subdirs = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

// Check that every directory corresponds to an article in ALL_ARTICLES
for (const dir of subdirs) {
  const matchingArticle = allArticles.find(a => a.slug === dir);
  assert(!!matchingArticle, `Directory '${dir}' matches a slug in ALL_ARTICLES`);
  const pagePath = path.join(ARTICLES_DIR, dir, 'page.tsx');
  assert(fs.existsSync(pagePath), `Page file '${dir}/page.tsx' exists`);
}

// Check that every article in ALL_ARTICLES has a corresponding directory
for (const article of allArticles) {
  const dirPath = path.join(ARTICLES_DIR, article.slug);
  assert(fs.existsSync(dirPath), `Article '${article.slug}' has corresponding directory`);
}


console.log('\n--- TEST SUITE 3: Metadata, Title & Content Consistency per Article ---');

const EXPECTED_SPECS = {
  'tesla-model-3-highland-review': {
    brand: 'Tesla',
    model: 'Model 3 Highland',
    prices: ['1,149,000', '1,799,000', '1,439,000', '1,599,000', '1,899,000', '2,149,000'],
    powerTerms: ['283 hp', '498 hp', '460', '627 hp'],
    batteryTerms: ['60.0 kWh', '78.1 kWh', 'CATL LFP', 'LG NMC'],
    rangeTerms: ['513 กม.', '629 กม.', '528 กม.', 'WLTP'],
    accelTerms: ['3.1', '4.4', '6.1'],
  },
  'byd-seal-review': {
    brand: 'BYD',
    model: 'Seal',
    prices: ['849,900', '999,900', '1,099,900'],
    powerTerms: ['204 hp', '313 hp', '530 hp', '670 Nm'],
    batteryTerms: ['61.44 kWh', '82.56 kWh', 'Blade'],
    rangeTerms: ['510 กม.', '650 กม.', '580 กม.', 'NEDC'],
    accelTerms: ['3.8', '5.9', '7.5'],
  },
  'zeekr-x-review': {
    brand: 'Zeekr',
    model: 'X',
    prices: ['899,000', '1,049,000'],
    powerTerms: ['272 hp', '428 hp', '343 Nm', '543 Nm'],
    batteryTerms: ['66.0 kWh', 'NMC'],
    rangeTerms: ['540 กม.', '470 กม.', 'NEDC'],
    accelTerms: ['3.8', '5.6'],
  },
  'mg4-electric-review': {
    brand: 'MG',
    model: 'MG4 Electric',
    prices: ['569,900', '1,119,900', '649,900', '769,900', '889,900'],
    powerTerms: ['170 hp', '180 hp', '435 hp', '250 Nm', '600 Nm'],
    batteryTerms: ['49.0 kWh', '64.0 kWh', 'LFP', 'Rubik'],
    rangeTerms: ['423', '540', '480', 'NEDC'],
    accelTerms: ['3.8', '7.7', '7.9'],
  },
  'deepal-s07-review': {
    brand: 'Changan Deepal',
    model: 'S07',
    prices: ['1,099,000', '1,399,000', '1,199,000', '1,299,000', '1,499,000'],
    powerTerms: ['258 แรงม้า', '218 แรงม้า', '320 Nm'],
    batteryTerms: ['66.8 kWh', '79.97 kWh', 'NMC'],
    rangeTerms: ['485', '560', 'NEDC'],
    accelTerms: ['6.7', '7.5'],
  },
  'byd-atto-3-review': {
    brand: 'BYD',
    model: 'Atto 3',
    prices: ['669,900', '749,900', '799,900'],
    powerTerms: ['201 hp', '310 Nm'],
    batteryTerms: ['50.25 kWh', '60.48 kWh', 'Blade'],
    rangeTerms: ['410 กม.', '480 กม.', 'NEDC'],
    accelTerms: ['7.3', '7.9'],
  },
  'deepal-s05-review': {
    brand: 'Changan Deepal',
    model: 'S05',
    prices: ['799,000', '899,000', '849,000', '949,000'],
    powerTerms: ['238 แรงม้า', '320 Nm'],
    batteryTerms: ['56.12 kWh', 'Golden Shield'],
    rangeTerms: ['470', '510', 'NEDC'],
    accelTerms: ['7.3'],
  },
  'geely-ex2-review': {
    brand: 'Geely',
    model: 'EX2',
    prices: ['429,990', '459,990'],
    powerTerms: ['116 hp', '85 kW', '150 Nm'],
    batteryTerms: ['39.4 kWh', 'Aegis Short Blade'],
    rangeTerms: ['395 km', '395', 'NEDC'],
    accelTerms: ['9.9', '10.2'],
  },
  'ev-battery-care': {
    brand: 'Guide',
    model: 'ดูแลแบตเตอรี่',
    isGuide: true,
    prices: [],
    powerTerms: [],
    batteryTerms: ['LFP', 'NMC', '20%', '80%', '100%'],
    rangeTerms: [],
    accelTerms: [],
  }
};

for (const article of allArticles) {
  console.log(`\nChecking article: ${article.slug}`);
  const pageFile = path.join(ARTICLES_DIR, article.slug, 'page.tsx');
  const pageContent = fs.readFileSync(pageFile, 'utf-8');

  // Check metadata export
  assert(pageContent.includes('export const metadata'), `${article.slug} exports metadata`);
  assert(pageContent.includes('title:') && pageContent.includes('description:'), `${article.slug} metadata has title and description`);

  // Check default component export
  assert(pageContent.includes('export default function'), `${article.slug} exports default page component`);

  // Check breadcrumb link back to /articles
  assert(pageContent.includes('href="/articles"'), `${article.slug} contains breadcrumb back link to /articles`);

  // Check Title consistency
  const expected = EXPECTED_SPECS[article.slug];
  if (expected && expected.model) {
    assert(pageContent.includes(expected.model), `${article.slug} page body includes expected title/topic '${expected.model}'`);
  }

  // Check price consistency
  if (expected && !expected.isGuide && expected.prices.length > 0) {
    let matchedPrices = 0;
    for (const p of expected.prices) {
      if (pageContent.includes(p)) {
        matchedPrices++;
      }
    }
    assert(matchedPrices >= 2, `${article.slug} contains consistent Thai pricing mentions (${matchedPrices}/${expected.prices.length} matched)`);
  }

  // Check power specs consistency
  if (expected && !expected.isGuide && expected.powerTerms.length > 0) {
    let matchedPower = 0;
    for (const p of expected.powerTerms) {
      if (pageContent.includes(p)) {
        matchedPower++;
      }
    }
    assert(matchedPower >= Math.min(2, expected.powerTerms.length), `${article.slug} contains expected power specs (${matchedPower}/${expected.powerTerms.length} matched)`);
  }

  // Check battery specs consistency
  if (expected && expected.batteryTerms.length > 0) {
    let matchedBattery = 0;
    for (const b of expected.batteryTerms) {
      if (pageContent.includes(b)) {
        matchedBattery++;
      }
    }
    assert(matchedBattery >= Math.min(2, expected.batteryTerms.length), `${article.slug} contains expected battery specs (${matchedBattery}/${expected.batteryTerms.length} matched)`);
  }

  // Check range specs consistency
  if (expected && !expected.isGuide && expected.rangeTerms.length > 0) {
    let matchedRange = 0;
    for (const r of expected.rangeTerms) {
      if (pageContent.includes(r)) {
        matchedRange++;
      }
    }
    assert(matchedRange >= Math.min(2, expected.rangeTerms.length), `${article.slug} contains expected range specs (${matchedRange}/${expected.rangeTerms.length} matched)`);
  }

  // Check rating consistency
  if (article.rating) {
    assert(pageContent.includes(article.rating.toString()), `${article.slug} scorecard rating matches catalog rating ${article.rating}`);
  }
}


console.log('\n--- TEST SUITE 4: Image Reference & Asset Integrity ---');

// Extract all image sources from all articles
const allImageSrcs = new Set();

// From catalog
for (const article of allArticles) {
  allImageSrcs.add(article.image);
}

// From individual page files
for (const article of allArticles) {
  const pageFile = path.join(ARTICLES_DIR, article.slug, 'page.tsx');
  const pageContent = fs.readFileSync(pageFile, 'utf-8');

  // Match src="..." or src='...'
  const imgMatches = pageContent.matchAll(/src=["'](\/images\/[^"']+)["']/g);
  for (const m of imgMatches) {
    allImageSrcs.add(m[1]);
  }
}

console.log(`Found ${allImageSrcs.size} unique image references across all articles.`);

let verifiedImages = 0;
let missingImages = 0;

for (const imgSrc of allImageSrcs) {
  // Convert /images/... to public/images/...
  const relPath = imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc;
  const fullDiskPath = path.join(PUBLIC_DIR, relPath);

  const exists = fs.existsSync(fullDiskPath);
  assert(exists, `Image asset exists on disk: ${imgSrc}`);
  
  if (exists) {
    const stats = fs.statSync(fullDiskPath);
    assert(stats.size > 1000, `Image ${imgSrc} is non-empty (${Math.round(stats.size / 1024)} KB)`);
    verifiedImages++;
  } else {
    missingImages++;
  }
}

// Verify 4-asset set for all 8 review cars: hero, exterior, interior, details
const REVIEW_SLUGS_8 = [
  'tesla-model-3',
  'byd-seal',
  'zeekr-x',
  'mg4-electric',
  'deepal-s07',
  'byd-atto-3',
  'deepal-s05',
  'geely-ex2'
];

for (const modelKey of REVIEW_SLUGS_8) {
  const heroPath = path.join(PUBLIC_DIR, 'images', 'reviews', `${modelKey}-hero.jpg`);
  const exteriorPath = path.join(PUBLIC_DIR, 'images', 'reviews', `${modelKey}-exterior.jpg`);
  const interiorPath = path.join(PUBLIC_DIR, 'images', 'reviews', `${modelKey}-interior.jpg`);
  const detailsPath = path.join(PUBLIC_DIR, 'images', 'reviews', `${modelKey}-details.jpg`);

  assert(fs.existsSync(heroPath), `Review asset set: ${modelKey}-hero.jpg exists`);
  assert(fs.existsSync(exteriorPath), `Review asset set: ${modelKey}-exterior.jpg exists`);
  assert(fs.existsSync(interiorPath), `Review asset set: ${modelKey}-interior.jpg exists`);
  assert(fs.existsSync(detailsPath), `Review asset set: ${modelKey}-details.jpg exists`);
}

// Top-level deepal-s05.jpg check
const topDeepalS05 = path.join(PUBLIC_DIR, 'images', 'deepal-s05.jpg');
assert(fs.existsSync(topDeepalS05), 'Top-level asset public/images/deepal-s05.jpg exists');


console.log('\n====================================================');
console.log(`TOTAL TESTS: ${totalTests}`);
console.log(`PASSED: ${passedTests}`);
console.log(`FAILED: ${failedTests}`);
console.log('====================================================');

if (failedTests > 0) {
  console.error('\nFAILURES SUMMARY:');
  failureDetails.forEach((f, idx) => {
    console.error(`${idx + 1}. ${f.message}: ${f.detail}`);
  });
  process.exit(1);
} else {
  console.log('\nALL CONSISTENCY TESTS PASSED CLEANLY! VERDICT: APPROVE');
  process.exit(0);
}
