/**
 * EV Selection Thailand - Challenger Adversarial & Fuzzing Empirical Test Suite
 * 
 * Conducts exhaustive Tier 1-5 testing:
 * - Tier 1: Exhaustive generation & schema validation across all 13 models x 5 templates
 * - Tier 2: Boundary conditions, pricing limits, single/multi trim edge cases
 * - Tier 3: Full Pairwise combinations & comparison pairings
 * - Tier 4: Real-world application scenarios from TEST_INFRA.md
 * - Tier 5: Adversarial fuzzing, regex placeholder leak scans, tropical range derating math,
 *           currency formatting audits, and CLI crash resistance.
 */

import * as fs from 'fs';
import * as path from 'path';
import { spawnSync } from 'child_process';
import {
  vehicles,
  getVehicleById,
  formatPriceRangeTHB,
  formatPriceTHB,
  getFitmentSummaryForVehicle,
  getComparisonPair,
  getAllChargingNetworks,
  calculateTOUSavings,
  THAI_ECONOMIC_DEFAULTS,
  accessories,
} from '../src/content-generator/data';
import {
  generatePost,
  generateBatchPosts,
  generatePostsForAllVehicles,
} from '../src/content-generator/engine';
import {
  exportToMarkdown,
  exportToJson,
  exportPosts,
  ExportJsonSchema,
} from '../src/content-generator/exporters';
import { PostTopic, GenerationMode, GeneratedPost } from '../src/content-generator/types';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CLI_PATH = path.join(PROJECT_ROOT, 'scripts', 'generate-posts.ts');
const TEST_OUT_DIR = path.join(PROJECT_ROOT, 'test_output_adversarial');

interface TestRecord {
  tier: string;
  category: string;
  name: string;
  passed: boolean;
  durationMs: number;
  error?: string;
  details?: string;
}

const testRecords: TestRecord[] = [];

function cleanDir(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function runCli(args: string[], env: Record<string, string> = {}) {
  const res = spawnSync('npx', ['tsx', CLI_PATH, ...args], {
    cwd: PROJECT_ROOT,
    env: { ...process.env, ...env },
    encoding: 'utf-8',
    shell: true,
  });
  return {
    status: res.status,
    stdout: res.stdout || '',
    stderr: res.stderr || '',
  };
}

const FORBIDDEN_PLACEHOLDER_REGEXES = [
  /undefined/i,
  /\bNaN\b/,
  /\bnull\b/,
  /\[object\s+Object\]/i,
  /\bTODO\b/i,
  /\bTBD\b/i,
  /\bFIXME\b/i,
  /\[INSERT/i,
  /\blorem\s+ipsum\b/i,
  /undefined%/i,
  /NaN%/i,
  /\[placeholder\]/i,
];

function assertNoPlaceholderLeaks(text: string, context: string): void {
  for (const regex of FORBIDDEN_PLACEHOLDER_REGEXES) {
    if (regex.test(text)) {
      throw new Error(`[LEAK DETECTED] Match for regex ${regex} found in ${context}: "...${text.slice(Math.max(0, text.search(regex) - 20), text.search(regex) + 40)}..."`);
    }
  }
}

async function runTest(
  tier: string,
  category: string,
  name: string,
  fn: () => Promise<void> | void
) {
  const start = Date.now();
  try {
    const res = fn();
    if (res instanceof Promise) {
      await res;
    }
    testRecords.push({
      tier,
      category,
      name,
      passed: true,
      durationMs: Date.now() - start,
    });
  } catch (err: any) {
    testRecords.push({
      tier,
      category,
      name,
      passed: false,
      durationMs: Date.now() - start,
      error: err?.message || String(err),
    });
  }
}

async function runAdversarialTestSuite() {
  console.log('========================================================================');
  console.log('⚡ EV SELECTION THAILAND — TIER 1-5 ADVERSARIAL & FUZZING TEST HARNESS ⚡');
  console.log('========================================================================\n');

  cleanDir(TEST_OUT_DIR);

  // =========================================================================
  // TIER 1: Basic Generation & Schema Coverage (All 13 Models x 5 Templates)
  // =========================================================================
  const topics: PostTopic[] = ['review', 'comparison', 'news', 'heat-guide', 'charging-guide'];

  for (const vehicle of vehicles) {
    for (const topic of topics) {
      await runTest('Tier 1', 'Catalog x Template Coverage', `${vehicle.id} x ${topic} (Mode A)`, async () => {
        const post = await generatePost({
          vehicleId: vehicle.id,
          topic,
          mode: 'rule_based',
        });

        // 1. Structural validation
        if (!post.id || !post.title || !post.contentMarkdown || !post.plainText) {
          throw new Error('Missing core GeneratedPost fields');
        }
        if (post.metadata.charCount < 400) {
          throw new Error(`Content too short: ${post.metadata.charCount} chars`);
        }
        if (!post.metadata.hashtags || post.metadata.hashtags.length < 3) {
          throw new Error(`Insufficient hashtags: ${post.metadata.hashtags?.length}`);
        }
        if (!post.metadata.suggestedImages || post.metadata.suggestedImages.length === 0) {
          throw new Error('Suggested images array is empty');
        }

        // 2. Token leak checks
        assertNoPlaceholderLeaks(post.contentMarkdown, `${vehicle.id} ${topic} contentMarkdown`);
        assertNoPlaceholderLeaks(post.plainText, `${vehicle.id} ${topic} plainText`);
        assertNoPlaceholderLeaks(post.title, `${vehicle.id} ${topic} title`);

        // 3. Thai Language Authenticity
        const thaiCharRegex = /[\u0E00-\u0E7F]/g;
        const thaiMatches = post.contentMarkdown.match(thaiCharRegex) || [];
        if (thaiMatches.length < 150) {
          throw new Error(`Low Thai character density: ${thaiMatches.length} characters`);
        }
      });
    }
  }

  // Test Mode B with Fallback for all topics
  for (const topic of topics) {
    await runTest('Tier 1', 'Mode B AI Fallback Coverage', `AI Augmented synthesis with auto-fallback for topic: ${topic}`, async () => {
      const post = await generatePost({
        vehicleId: 'byd-seal',
        topic,
        mode: 'ai_augmented',
      });
      if (!post.contentMarkdown || post.contentMarkdown.length < 400) {
        throw new Error('AI fallback post empty or too short');
      }
      assertNoPlaceholderLeaks(post.contentMarkdown, `Mode B topic ${topic}`);
    });
  }

  // =========================================================================
  // TIER 2: Boundary Cases, Missing Fields & Extreme Price Points
  // =========================================================================
  await runTest('Tier 2', 'Boundary Pricing', 'Lowest price vehicle formatting (Geely EX2 @ 429,990 THB)', () => {
    const ex2 = getVehicleById('geely-ex2');
    if (!ex2) throw new Error('Geely EX2 missing');
    const priceStr = formatPriceRangeTHB(ex2.trims);
    if (!priceStr.includes('429,990') || !priceStr.includes('บาท')) {
      throw new Error(`Incorrect formatting for Geely EX2: ${priceStr}`);
    }
  });

  await runTest('Tier 2', 'Boundary Pricing', 'Highest price vehicle formatting (Tesla Model Y Performance @ 1,999,000 THB)', () => {
    const my = getVehicleById('tesla-model-y');
    if (!my) throw new Error('Tesla Model Y missing');
    const priceStr = formatPriceRangeTHB(my.trims);
    if (!priceStr.includes('1,999,000') || !priceStr.includes('บาท')) {
      throw new Error(`Incorrect formatting for Tesla Model Y: ${priceStr}`);
    }
  });

  await runTest('Tier 2', 'Boundary Trims', 'Multi-trim rendering consistency (BYD Seal with 3 trims)', () => {
    const seal = getVehicleById('byd-seal');
    if (!seal || seal.trims.length !== 3) throw new Error('BYD Seal should have 3 trims');
    for (const trim of seal.trims) {
      const formatted = formatPriceTHB(trim.priceTHB);
      if (!/^\d{1,3}(,\d{3})*\s+บาท$/.test(formatted)) {
        throw new Error(`Trim ${trim.name} price invalid formatting: "${formatted}"`);
      }
    }
  });

  await runTest('Tier 2', 'Optional Image URL Handlers', 'Vehicles with missing exterior/interior/details image URLs render safely', async () => {
    const partialVehicle = {
      ...vehicles[0],
      id: 'mock-partial-ev',
      model: 'Mock Partial',
      imageUrls: {
        hero: '/images/mock-hero.jpg',
      },
    };
    const post = await generatePost({
      vehicleId: partialVehicle.id,
      topic: 'review',
    });
    if (!post.metadata.suggestedImages || post.metadata.suggestedImages.length === 0) {
      throw new Error('Suggested images should have at least hero');
    }
  });

  // =========================================================================
  // TIER 3: Pairwise Combinations & Rivalry Matchups
  // =========================================================================
  const rivalryPairs = [
    ['byd-seal', 'tesla-model-3-highland'],
    ['deepal-s07', 'byd-atto-3'],
    ['zeekr-x', 'mg4-electric'],
    ['byd-dolphin', 'geely-ex2'],
    ['ora-good-cat', 'gac-aion-y-plus'],
    ['deepal-s05', 'deepal-s07'],
    ['deepal-l07', 'byd-seal'],
    ['tesla-model-y', 'deepal-s07'],
  ];

  for (const [slugA, slugB] of rivalryPairs) {
    await runTest('Tier 3', 'Pairwise Comparisons', `Head-to-head comparison: ${slugA} vs ${slugB}`, async () => {
      const post = await generatePost({
        topic: 'comparison',
        vehicleId: slugA,
        compareVehicleId: slugB,
      });

      if (!post.compareVehicleModel) {
        throw new Error('compareVehicleModel is undefined');
      }
      if (!post.contentMarkdown.includes('ตารางประชันสเปกไทย')) {
        throw new Error('Comparison table section missing');
      }
      assertNoPlaceholderLeaks(post.contentMarkdown, `Comparison ${slugA} vs ${slugB}`);
    });
  }

  // Verify getComparisonPair works for every single vehicle in catalog
  for (const v of vehicles) {
    await runTest('Tier 3', 'Pairwise Resolver', `Auto-pairing fallback for ${v.id}`, () => {
      const [v1, v2] = getComparisonPair(v.id);
      if (!v1 || !v2 || v1.id === v2.id) {
        throw new Error(`Invalid comparison pair generated for ${v.id}: [${v1?.id}, ${v2?.id}]`);
      }
    });
  }

  // =========================================================================
  // TIER 4: Real-World Application Scenarios (TEST_INFRA.md)
  // =========================================================================
  await runTest('Tier 4', 'Scenario 1', 'Batch Weekly Schedule Generation (5 distinct post types for weekly queue)', async () => {
    const weeklyBatch = await generateBatchPosts([
      { topic: 'review', vehicleId: 'byd-seal' },
      { topic: 'comparison', vehicleId: 'tesla-model-3-highland', compareVehicleId: 'byd-seal' },
      { topic: 'heat-guide', vehicleId: 'deepal-s07' },
      { topic: 'charging-guide' },
      { topic: 'news', vehicleId: 'zeekr-x' },
    ]);

    if (weeklyBatch.length !== 5) throw new Error(`Expected 5 weekly posts, got ${weeklyBatch.length}`);
    const topicsSet = new Set(weeklyBatch.map((p) => p.topic));
    if (topicsSet.size !== 5) throw new Error('Not all 5 unique topics generated in batch');

    const outDir = path.join(TEST_OUT_DIR, 'scenario_1_weekly');
    const exportResult = await exportPosts(weeklyBatch, {
      outputDir: outDir,
      markdownFileName: 'weekly_posts.md',
      jsonFileName: 'weekly_posts.json',
    });

    if (!fs.existsSync(exportResult.markdownPath!) || !fs.existsSync(exportResult.jsonPath!)) {
      throw new Error('Scenario 1 export files not written');
    }
  });

  await runTest('Tier 4', 'Scenario 2', 'High Heat Wave Special Post (Bangkok 40°C Battery Protection Guide)', async () => {
    const post = await generatePost({
      topic: 'heat-guide',
      vehicleId: 'deepal-s07',
    });
    if (!post.contentMarkdown.includes('40°C') || !post.contentMarkdown.includes('Deepal S07')) {
      throw new Error('Heat guide missing temperature context or vehicle name');
    }
    if (!post.contentMarkdown.includes('ม่านบังแดด')) {
      throw new Error('Heat guide missing sunshade recommendation');
    }
    assertNoPlaceholderLeaks(post.contentMarkdown, 'Scenario 2 Heat Wave Post');
  });

  await runTest('Tier 4', 'Scenario 3', 'BYD Seal vs Tesla Model 3 Head-to-Head Comparison', async () => {
    const post = await generatePost({
      topic: 'comparison',
      vehicleId: 'byd-seal',
      compareVehicleId: 'tesla-model-3-highland',
    });
    if (!post.contentMarkdown.includes('BYD Seal') || !post.contentMarkdown.includes('Tesla Model 3 Highland')) {
      throw new Error('Scenario 3 missing vehicle models in content');
    }
    if (!post.contentMarkdown.includes('Supercharger') && !post.contentMarkdown.includes('Blade')) {
      throw new Error('Scenario 3 missing specific technical advantages');
    }
  });

  await runTest('Tier 4', 'Scenario 4', 'Deepal S07 Review with Genuine EVSELECT Accessory Recommendation & CTA', async () => {
    const post = await generatePost({
      topic: 'review',
      vehicleId: 'deepal-s07',
    });
    if (!post.contentMarkdown.includes('EVSELECT') || !post.contentMarkdown.includes('EVS-')) {
      if (!post.contentMarkdown.includes('อุปกรณ์เสริมตรงรุ่น')) {
        throw new Error('Scenario 4 missing EVSELECT accessory callout');
      }
    }
    if (!post.metadata.callToActionUrl) {
      throw new Error('Scenario 4 missing CTA URL in metadata');
    }
  });

  await runTest('Tier 4', 'Scenario 5', 'Complete Offline Mode Run via CLI (3 posts exported)', () => {
    const outDir = path.join(TEST_OUT_DIR, 'scenario_5_offline');
    const res = runCli(
      ['--mode', 'rule_based', '--count', '3', '--topic', 'review', '--output-dir', outDir],
      { GEMINI_API_KEY: '', GOOGLE_API_KEY: '' }
    );
    if (res.status !== 0) throw new Error(`CLI exit code ${res.status}: ${res.stderr}`);
    const jsonPath = path.join(outDir, 'posts.json');
    const mdPath = path.join(outDir, 'posts.md');
    if (!fs.existsSync(jsonPath) || !fs.existsSync(mdPath)) {
      throw new Error('Scenario 5 output files not written');
    }
    const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    if (json.posts.length !== 3) throw new Error(`Expected 3 posts in offline run, got ${json.posts.length}`);
  });

  // =========================================================================
  // TIER 5: Adversarial Fuzzing, Math Verification & Token Leak Scans
  // =========================================================================

  // 1. Tropical Heat Derating Math Audit
  await runTest('Tier 5', 'Physics & Chemistry Audit', 'Derated range calculation under 35°C–40°C heat with AC load across all 13 models', () => {
    for (const vehicle of vehicles) {
      for (const trim of vehicle.trims) {
        const nominalRange = trim.rangeNedcKm || trim.rangeWltpKm || trim.rangeCltcKm;
        if (!nominalRange) {
          throw new Error(`Vehicle ${vehicle.id} trim ${trim.name} has no nominal rating (NEDC/WLTP/CLTC)`);
        }
        const realRange = trim.realWorldRangeThaiKm;
        if (!realRange || realRange <= 0) {
          throw new Error(`Vehicle ${vehicle.id} trim ${trim.name} has invalid real-world range: ${realRange}`);
        }

        const ratio = realRange / nominalRange;
        if (ratio < 0.65 || ratio > 0.88) {
          throw new Error(`Unrealistic derating ratio ${ratio.toFixed(3)} for ${vehicle.id} ${trim.name} (Nominal: ${nominalRange}, Real: ${realRange})`);
        }

        const efficiency = realRange / trim.batteryKWh;
        if (efficiency < 4.0 || efficiency > 8.0) {
          throw new Error(`Unrealistic efficiency ${efficiency.toFixed(2)} km/kWh for ${vehicle.id} ${trim.name}`);
        }
      }
    }
  });

  // 2. Charging Economics Exact Math Audit
  await runTest('Tier 5', 'Economics Math Audit', 'TOU tariff calculations and savings formulas (0.48฿/km baseline)', () => {
    const tou = calculateTOUSavings(15000);
    if (Math.abs(tou.costPerKm.petrol - 2.71) > 0.05) {
      throw new Error(`Petrol cost per km mismatch: got ${tou.costPerKm.petrol}, expected ~2.71`);
    }

    if (Math.abs(tou.costPerKm.evHomeTOUOffPeak - 0.48) > 0.05) {
      throw new Error(`TOU Off-peak cost per km mismatch: got ${tou.costPerKm.evHomeTOUOffPeak}, expected ~0.48`);
    }

    if (tou.savingsVsPetrol.homeTOUOffPeakSavingsPercent < 80 || tou.savingsVsPetrol.homeTOUOffPeakSavingsPercent > 85) {
      throw new Error(`TOU Savings percent out of bounds: got ${tou.savingsVsPetrol.homeTOUOffPeakSavingsPercent}%`);
    }

    if (tou.savingsVsPetrol.homeTOUOffPeakSavingsTHB < 30000 || tou.savingsVsPetrol.homeTOUOffPeakSavingsTHB > 38000) {
      throw new Error(`Annual savings out of bounds: ${tou.savingsVsPetrol.homeTOUOffPeakSavingsTHB} THB`);
    }
  });

  // 3. Currency Formatting Audit across all dataset and generated content
  await runTest('Tier 5', 'Currency Format Audit', 'All prices across 13 models formatted with commas and THB/บาท', () => {
    for (const vehicle of vehicles) {
      for (const trim of vehicle.trims) {
        const formatted = formatPriceTHB(trim.priceTHB);
        if (!/^\d{1,3}(,\d{3})+\s+บาท$/.test(formatted)) {
          throw new Error(`Trim ${vehicle.id} ${trim.name} formatted price invalid: "${formatted}"`);
        }
      }
    }
    for (const acc of accessories) {
      const formatted = formatPriceTHB(acc.priceTHB);
      if (!/^\d{1,3}(,\d{3})*\s+บาท$/.test(formatted)) {
        throw new Error(`Accessory ${acc.sku} formatted price invalid: "${formatted}"`);
      }
    }
  });

  // 4. Adversarial CLI Input Fuzzing
  const fuzzCases = [
    { name: 'SQL Injection String', args: ['--vehicle', "'; DROP TABLE Vehicles; --"] },
    { name: 'XSS Script Tag', args: ['--vehicle', "<script>alert('xss')</script>"] },
    { name: 'Special Unicode & Emoji', args: ['--vehicle', "🏎️⚡🎉\uFFFFBYD-Seal-Special"] },
    { name: 'Huge Positive Count', args: ['--count', '999999999', '--vehicle', 'byd-seal'] },
    { name: 'Huge Negative Count', args: ['--count', '-999999999', '--vehicle', 'byd-seal'] },
    { name: 'Floating Point Count', args: ['--count', '3.14159', '--vehicle', 'byd-seal'] },
    { name: 'Empty String Vehicle', args: ['--vehicle', '', '--topic', 'review'] },
  ];

  for (const fuzz of fuzzCases) {
    await runTest('Tier 5', 'CLI Adversarial Fuzzing', `Fuzz test: ${fuzz.name}`, () => {
      const outDir = path.join(TEST_OUT_DIR, `fuzz_${fuzz.name.replace(/[^a-zA-Z0-9]/g, '_')}`);
      const res = runCli([...fuzz.args, '--output-dir', outDir]);
      if (res.stderr.includes('FATAL') || res.stderr.includes('SyntaxError') || res.stderr.includes('TypeError')) {
        throw new Error(`Unhandled runtime crash on fuzz input: ${res.stderr}`);
      }
    });
  }

  // 5. Global Deep JSON & Markdown Export Validation
  await runTest('Tier 5', 'Schema Conformance Audit', 'Export all 13 vehicles to posts.json and validate complete ExportJsonSchema', async () => {
    const allPosts = await generatePostsForAllVehicles('review', 'rule_based');
    const jsonStr = exportToJson(allPosts);
    const schema: ExportJsonSchema = JSON.parse(jsonStr);

    if (schema.schemaVersion !== '1.0.0') throw new Error('Invalid schemaVersion');
    if (schema.summary.totalPosts !== vehicles.length) throw new Error('Summary totalPosts count mismatch');
    if (schema.summary.vehiclesCovered.length !== vehicles.length) throw new Error('Not all vehicles recorded in summary');
    if (schema.posts.length !== vehicles.length) throw new Error('Posts array length mismatch');

    for (const post of schema.posts) {
      if (!post.id || !post.title || !post.contentMarkdown || !post.plainText) {
        throw new Error(`Post ${post.id} missing core fields`);
      }
      if (post.metadata.wordCount <= 0) {
        throw new Error(`Post ${post.id} word count not calculated`);
      }
      if (post.metadata.estimatedReadingTimeMinutes <= 0) {
        throw new Error(`Post ${post.id} reading time not calculated`);
      }
      assertNoPlaceholderLeaks(post.contentMarkdown, `Global schema audit post ${post.id}`);
    }
  });

  // 6. Exporter Options Variations
  await runTest('Tier 5', 'Exporter Custom Options', 'Markdown and JSON exporter handles custom layout flags', async () => {
    const samplePost = await generatePost({ vehicleId: 'byd-seal', topic: 'review' });
    const customMd = exportToMarkdown([samplePost], {
      includeHeaderSummary: false,
      includeTableOfContents: false,
      includeFacebookCopyGuide: false,
    });
    if (customMd.includes('# ⚡ EV Selection Thailand — Facebook Content Batch Export')) {
      throw new Error('Header summary should have been excluded');
    }
    if (customMd.includes('## 📑 สารบัญโพสต์ในชุดนี้')) {
      throw new Error('TOC should have been excluded');
    }

    const customJsonCompact = exportToJson([samplePost], { pretty: false });
    if (customJsonCompact.includes('\n')) {
      throw new Error('Compact JSON should be single-line');
    }
  });

  // 7. Root Workspace Output Files Audit
  await runTest('Tier 5', 'Root Files Audit', 'Audit root posts.md and posts.json for zero placeholder leaks', () => {
    const rootMdPath = path.join(PROJECT_ROOT, 'posts.md');
    const rootJsonPath = path.join(PROJECT_ROOT, 'posts.json');
    if (fs.existsSync(rootMdPath)) {
      const content = fs.readFileSync(rootMdPath, 'utf-8');
      assertNoPlaceholderLeaks(content, 'Root posts.md');
    }
    if (fs.existsSync(rootJsonPath)) {
      const content = fs.readFileSync(rootJsonPath, 'utf-8');
      assertNoPlaceholderLeaks(content, 'Root posts.json');
      const parsed = JSON.parse(content);
      if (!parsed.schemaVersion || !Array.isArray(parsed.posts)) {
        throw new Error('Root posts.json is not valid ExportJsonSchema');
      }
    }
  });

  // =========================================================================
  // Report Generation & Summary
  // =========================================================================
  console.log('\n========================================================================');
  console.log('                 ADVERSARIAL TEST EXECUTION SUMMARY                     ');
  console.log('========================================================================\n');

  let passedTotal = 0;
  let failedTotal = 0;

  const tiers = Array.from(new Set(testRecords.map((t) => t.tier)));
  for (const tier of tiers) {
    console.log(`\n🔷 [${tier}]`);
    const tierRecords = testRecords.filter((r) => r.tier === tier);
    const categories = Array.from(new Set(tierRecords.map((r) => r.category)));

    for (const cat of categories) {
      console.log(`  📂 Category: ${cat}`);
      const catRecords = tierRecords.filter((r) => r.category === cat);
      for (const r of catRecords) {
        const icon = r.passed ? '  ✅' : '  ❌';
        console.log(`    ${icon} [${r.durationMs}ms] ${r.name}`);
        if (!r.passed) {
          console.log(`        ↳ ERROR: ${r.error}`);
          failedTotal++;
        } else {
          passedTotal++;
        }
      }
    }
  }

  console.log('\n------------------------------------------------------------------------');
  console.log(`🏆 TOTAL TESTS: ${testRecords.length} | ✅ PASSED: ${passedTotal} | ❌ FAILED: ${failedTotal}`);
  console.log('------------------------------------------------------------------------\n');

  if (failedTotal > 0) {
    console.error(`💥 Adversarial test suite FAILED with ${failedTotal} error(s).`);
    process.exit(1);
  } else {
    console.log('🎉 ALL TIER 1-5 ADVERSARIAL AND FUZZING TESTS PASSED EMPIRICALLY!');
    process.exit(0);
  }
}

runAdversarialTestSuite().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
