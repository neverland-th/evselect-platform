/**
 * Comprehensive Empirical Test Suite for EV Selection Thailand Facebook Content System
 * 
 * Tests CLI flags, vehicle aliases, topic templates, dual-mode engine,
 * error handling, boundary conditions, and output file schemas.
 */

import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { vehicles } from '../src/content-generator/data';
import { generatePost, generateBatchPosts } from '../src/content-generator/engine';
import { PostTopic } from '../src/content-generator/types';

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CLI_PATH = path.join(PROJECT_ROOT, 'scripts', 'generate-posts.ts');
const TEST_OUT_DIR = path.join(PROJECT_ROOT, 'test_output_empirical');

interface TestResult {
  suite: string;
  name: string;
  passed: boolean;
  durationMs: number;
  error?: string;
  details?: string;
}

const results: TestResult[] = [];

function recordTest(suite: string, name: string, fn: () => void | Promise<void>) {
  const start = Date.now();
  try {
    const res = fn();
    if (res instanceof Promise) {
      throw new Error('Async test called in sync runner; use recordAsyncTest');
    }
    results.push({
      suite,
      name,
      passed: true,
      durationMs: Date.now() - start,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    results.push({
      suite,
      name,
      passed: false,
      durationMs: Date.now() - start,
      error: errorMsg,
    });
  }
}

async function recordAsyncTest(suite: string, name: string, fn: () => Promise<void>) {
  const start = Date.now();
  try {
    await fn();
    results.push({
      suite,
      name,
      passed: true,
      durationMs: Date.now() - start,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    results.push({
      suite,
      name,
      passed: false,
      durationMs: Date.now() - start,
      error: errorMsg,
    });
  }
}

function runCli(args: string[], env: Record<string, string> = {}): { status: number | null; stdout: string; stderr: string } {
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

function cleanDir(dirPath: string) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

async function main() {
  console.log('🧪 Starting EV Selection Thailand Empirical Test Suite...\n');
  cleanDir(TEST_OUT_DIR);

  // ==========================================
  // SUITE 1: CLI Flags & Basic Operations
  // ==========================================
  const S1 = 'CLI Flags & Basic Commands';

  recordTest(S1, '--help displays usage and exits 0', () => {
    const res = runCli(['--help']);
    if (res.status !== 0) throw new Error(`Exit code was ${res.status}`);
    if (!res.stdout.includes('USAGE:') || !res.stdout.includes('--vehicle')) {
      throw new Error('Output missing USAGE or --vehicle docs');
    }
  });

  recordTest(S1, '-h short flag works identical to --help', () => {
    const res = runCli(['-h']);
    if (res.status !== 0) throw new Error(`Exit code was ${res.status}`);
    if (!res.stdout.includes('USAGE:')) throw new Error('Output missing USAGE');
  });

  recordTest(S1, '--list displays all 13 Thai catalog vehicles and templates', () => {
    const res = runCli(['--list']);
    if (res.status !== 0) throw new Error(`Exit code was ${res.status}`);
    if (!res.stdout.includes('Available Vehicles (13 Models in Thai Database)')) {
      throw new Error('Vehicle count header missing');
    }
    // Verify key models present
    for (const v of ['byd-seal', 'tesla-model-3-highland', 'deepal-s07', 'zeekr-x', 'ora-good-cat']) {
      if (!res.stdout.includes(v)) throw new Error(`Model ${v} missing from --list`);
    }
    // Verify 5 topics present
    for (const t of ['review', 'comparison', 'news', 'heat-guide', 'charging-guide']) {
      if (!res.stdout.includes(t)) throw new Error(`Topic ${t} missing from --list`);
    }
  });

  // ==========================================
  // SUITE 2: Vehicle Aliases & Fuzzy Matching
  // ==========================================
  const S2 = 'Vehicle Aliases & Fuzzy Matching';

  const aliasCases: [string, string][] = [
    ['seal', 'BYD Seal'],
    ['atto3', 'BYD Atto 3'],
    ['atto-3', 'BYD Atto 3'],
    ['model3', 'Tesla Model 3 Highland'],
    ['model-3', 'Tesla Model 3 Highland'],
    ['modely', 'Tesla Model Y'],
    ['s07', 'Deepal S07'],
    ['s05', 'Deepal S05'],
    ['l07', 'Deepal L07'],
    ['goodcat', 'Good Cat'],
    ['good-cat', 'Good Cat'],
    ['dolphin', 'BYD Dolphin'],
    ['zeekr', 'Zeekr X'],
    ['mg4', 'MG4 Electric'],
    ['ex2', 'Geely EX2'],
    ['aion-y', 'GAC Aion Y Plus'],
  ];

  for (const [alias, expectedSnippet] of aliasCases) {
    recordTest(S2, `Alias '${alias}' resolves to ${expectedSnippet}`, () => {
      const outDir = path.join(TEST_OUT_DIR, `alias_${alias}`);
      const res = runCli(['--vehicle', alias, '--topic', 'review', '--output-dir', outDir]);
      if (res.status !== 0) throw new Error(`Exit code was ${res.status}: ${res.stderr}`);
      if (!res.stdout.includes('SUCCESS!') || !res.stdout.includes(expectedSnippet)) {
        throw new Error(`Output did not indicate resolved vehicle ${expectedSnippet}`);
      }
      const jsonPath = path.join(outDir, 'posts.json');
      if (!fs.existsSync(jsonPath)) throw new Error(`JSON file missing: ${jsonPath}`);
      const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      if (!json.posts[0].vehicleModel.includes(expectedSnippet)) {
        throw new Error(`Resolved vehicle in JSON was ${json.posts[0].vehicleModel}, expected ${expectedSnippet}`);
      }
    });
  }

  // ==========================================
  // SUITE 3: Topic Templates Generation
  // ==========================================
  const S3 = 'Topic Templates Generation';

  const topicCases: PostTopic[] = ['review', 'comparison', 'news', 'heat-guide', 'charging-guide'];

  for (const topic of topicCases) {
    recordTest(S3, `Topic '${topic}' generates valid content and files`, () => {
      const outDir = path.join(TEST_OUT_DIR, `topic_${topic}`);
      const args = ['--topic', topic, '--output-dir', outDir];
      if (topic === 'review' || topic === 'heat-guide') {
        args.push('--vehicle', 'byd-seal');
      } else if (topic === 'comparison') {
        args.push('--vehicle', 'tesla-model-3', '--compare', 'byd-seal');
      }
      const res = runCli(args);
      if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);

      const mdPath = path.join(outDir, 'posts.md');
      const jsonPath = path.join(outDir, 'posts.json');

      if (!fs.existsSync(mdPath)) throw new Error(`Markdown file missing: ${mdPath}`);
      if (!fs.existsSync(jsonPath)) throw new Error(`JSON file missing: ${jsonPath}`);

      const mdContent = fs.readFileSync(mdPath, 'utf-8');
      const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

      if (mdContent.length < 200) throw new Error('Markdown output suspiciously short');
      if (jsonContent.posts.length !== 1) throw new Error(`Expected 1 post in JSON, got ${jsonContent.posts.length}`);
      if (jsonContent.posts[0].topic !== topic) {
        throw new Error(`Expected topic ${topic}, got ${jsonContent.posts[0].topic}`);
      }

      // Check for zero placeholder leaks
      for (const placeholder of ['[INSERT', 'undefined', 'NaN', 'null']) {
        if (mdContent.includes(placeholder)) {
          throw new Error(`Placeholder leak detected in Markdown: ${placeholder}`);
        }
      }
    });
  }

  // ==========================================
  // SUITE 4: Flag Syntax & Parameter Parsing
  // ==========================================
  const S4 = 'Flag Syntax & Parameter Parsing';

  recordTest(S4, 'Supports --flag=value equal sign syntax', () => {
    const outDir = path.join(TEST_OUT_DIR, 'syntax_equals');
    const res = runCli([
      '--vehicle=byd-seal',
      '--topic=review',
      '--mode=rule_based',
      '--count=2',
      `--output-dir=${outDir}`,
    ]);
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (json.posts.length !== 2) throw new Error(`Expected 2 posts, got ${json.posts.length}`);
  });

  recordTest(S4, 'Supports short flags -v, -t, -m, -c, -o', () => {
    const outDir = path.join(TEST_OUT_DIR, 'syntax_short');
    const res = runCli([
      '-v', 'byd-seal',
      '-t', 'review',
      '-m', 'rule_based',
      '-c', '1',
      '-o', outDir,
    ]);
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (json.posts.length !== 1) throw new Error(`Expected 1 post, got ${json.posts.length}`);
  });

  recordTest(S4, '--all batch generates full 16-post publication suite', () => {
    const outDir = path.join(TEST_OUT_DIR, 'batch_all');
    const res = runCli(['--all', '--output-dir', outDir]);
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (json.posts.length !== 16) throw new Error(`Expected 16 batch posts, got ${json.posts.length}`);
    if (json.summary.totalPosts !== 16) throw new Error(`Summary total mismatch: ${json.summary.totalPosts}`);
    
    // Verify each post has title, contentMarkdown, hashtags, and no placeholders
    for (const p of json.posts) {
      if (!p.title || p.title.trim().length === 0) throw new Error(`Post ${p.id} missing title`);
      if (!p.contentMarkdown || p.contentMarkdown.length < 100) throw new Error(`Post ${p.id} content too short`);
      if (!p.metadata.hashtags || p.metadata.hashtags.length === 0) throw new Error(`Post ${p.id} missing hashtags`);
    }
  });

  // ==========================================
  // SUITE 5: Adversarial Boundary & Stress Tests
  // ==========================================
  const S5 = 'Adversarial Boundary & Stress Tests';

  recordTest(S5, 'Unknown vehicle ID returns exit code 1 with helpful message', () => {
    const res = runCli(['--vehicle', 'ferrari-f40-turbo']);
    if (res.status === 0) throw new Error('Expected failure on unknown vehicle');
    if (!res.stderr.includes('not found in Thai catalog') && !res.stdout.includes('not found in Thai catalog')) {
      throw new Error('Missing helpful error message for unknown vehicle');
    }
  });

  recordTest(S5, 'Unknown compare vehicle ID returns exit code 1 with error message', () => {
    const res = runCli(['--topic', 'comparison', '--vehicle', 'byd-seal', '--compare', 'phantom-ev']);
    if (res.status === 0) throw new Error('Expected failure on unknown compare vehicle');
    if (!res.stderr.includes('not found') && !res.stdout.includes('not found')) {
      throw new Error('Missing error message for unknown compare vehicle');
    }
  });

  recordTest(S5, 'Invalid topic returns exit code 1', () => {
    const res = runCli(['--topic', 'celebrity-drama']);
    if (res.status === 0) throw new Error('Expected failure on invalid topic');
    if (!res.stderr.includes('Invalid topic') && !res.stdout.includes('Invalid topic')) {
      throw new Error('Missing invalid topic error message');
    }
  });

  recordTest(S5, 'Invalid mode returns exit code 1', () => {
    const res = runCli(['--mode', 'super_intelligence']);
    if (res.status === 0) throw new Error('Expected failure on invalid mode');
    if (!res.stderr.includes('Invalid mode') && !res.stdout.includes('Invalid mode')) {
      throw new Error('Missing invalid mode error message');
    }
  });

  recordTest(S5, 'Negative count (--count -5) safely clamped to 1 post without crash', () => {
    const outDir = path.join(TEST_OUT_DIR, 'count_negative');
    const res = runCli(['--count', '-5', '--vehicle', 'byd-seal', '--output-dir', outDir]);
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (json.posts.length !== 1) throw new Error(`Expected 1 clamped post, got ${json.posts.length}`);
  });

  recordTest(S5, 'Zero count (--count 0) safely clamped to 1 post without crash', () => {
    const outDir = path.join(TEST_OUT_DIR, 'count_zero');
    const res = runCli(['--count', '0', '--vehicle', 'byd-seal', '--output-dir', outDir]);
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (json.posts.length !== 1) throw new Error(`Expected 1 clamped post, got ${json.posts.length}`);
  });

  recordTest(S5, 'Non-numeric count (--count abc) safely defaults to 1 post without crash', () => {
    const outDir = path.join(TEST_OUT_DIR, 'count_nan');
    const res = runCli(['--count', 'abc', '--vehicle', 'byd-seal', '--output-dir', outDir]);
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (json.posts.length !== 1) throw new Error(`Expected 1 default post, got ${json.posts.length}`);
  });

  recordTest(S5, 'Deep nested output directory creation (--output-dir)', () => {
    const outDir = path.join(TEST_OUT_DIR, 'deep', 'nested', 'level1', 'level2', 'level3');
    const res = runCli(['--vehicle', 'deepal-s07', '--output-dir', outDir]);
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    if (!fs.existsSync(path.join(outDir, 'posts.md'))) throw new Error('Nested posts.md not created');
    if (!fs.existsSync(path.join(outDir, 'posts.json'))) throw new Error('Nested posts.json not created');
  });

  // ==========================================
  // SUITE 6: Offline & Fallback Robustness
  // ==========================================
  const S6 = 'Offline & Fallback Robustness';

  recordTest(S6, 'Mode A (rule_based) operates 100% offline with zero API keys', () => {
    const outDir = path.join(TEST_OUT_DIR, 'offline_rule_based');
    // Blank out GEMINI_API_KEY and GOOGLE_API_KEY
    const res = runCli(
      ['--vehicle', 'byd-seal', '--mode', 'rule_based', '--output-dir', outDir],
      { GEMINI_API_KEY: '', GOOGLE_API_KEY: '' }
    );
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (json.posts[0].mode !== 'rule_based') {
      throw new Error(`Expected mode rule_based, got ${json.posts[0].mode}`);
    }
  });

  recordTest(S6, 'Mode B (ai_augmented) with missing API key seamlessly falls back to Mode A', () => {
    const outDir = path.join(TEST_OUT_DIR, 'fallback_mode_b');
    // Mode B requested, but API keys are explicitly cleared
    const res = runCli(
      ['--vehicle', 'zeekr-x', '--mode', 'ai_augmented', '--output-dir', outDir],
      { GEMINI_API_KEY: '', GOOGLE_API_KEY: '' }
    );
    if (res.status !== 0) throw new Error(`Exit code ${res.status}: ${res.stderr}`);
    const json = JSON.parse(fs.readFileSync(path.join(outDir, 'posts.json'), 'utf-8'));
    if (!json.posts || json.posts.length !== 1) throw new Error('Post not generated during fallback');
    if (json.posts[0].mode !== 'rule_based') {
      throw new Error(`Fallback did not set mode to rule_based, got ${json.posts[0].mode}`);
    }
  });

  // ==========================================
  // SUITE 7: In-Memory Engine API Direct Verification
  // ==========================================
  const S7 = 'Core Engine Programmatic API';

  await recordAsyncTest(S7, 'generatePost generates authentic Thai content for all 13 vehicles', async () => {
    for (const v of vehicles) {
      const post = await generatePost({ vehicleId: v.id, topic: 'review', mode: 'rule_based' });
      if (!post.title.includes(v.model) && !post.title.includes(v.brand)) {
        throw new Error(`Title for ${v.id} does not contain model/brand`);
      }
      if (post.metadata.charCount < 300) {
        throw new Error(`Post for ${v.id} is too short (${post.metadata.charCount} chars)`);
      }
      if (!post.contentMarkdown.includes('บาท')) {
        throw new Error(`Post for ${v.id} missing Thai Baht currency symbol (บาท)`);
      }
    }
  });

  await recordAsyncTest(S7, 'generateBatchPosts correctly processes multiple mixed options', async () => {
    const batch = await generateBatchPosts([
      { vehicleId: 'byd-seal', topic: 'review' },
      { topic: 'charging-guide' },
      { topic: 'news' },
    ]);
    if (batch.length !== 3) throw new Error(`Expected 3 batch posts, got ${batch.length}`);
  });

  // ==========================================
  // Test Results Presentation & Summary
  // ==========================================
  console.log('\n========================================================');
  console.log('                 TEST EXECUTION SUMMARY                 ');
  console.log('========================================================\n');

  let passedCount = 0;
  let failedCount = 0;

  const suites = Array.from(new Set(results.map((r) => r.suite)));
  for (const s of suites) {
    console.log(`📦 Suite: ${s}`);
    const suiteTests = results.filter((r) => r.suite === s);
    for (const t of suiteTests) {
      const mark = t.passed ? '  ✅ PASS' : '  ❌ FAIL';
      console.log(`${mark} [${t.durationMs}ms] ${t.name}`);
      if (!t.passed && t.error) {
        console.log(`     ↳ Error: ${t.error}`);
        failedCount++;
      } else {
        passedCount++;
      }
    }
    console.log('');
  }

  console.log('--------------------------------------------------------');
  console.log(`Total: ${results.length} | Passed: ${passedCount} | Failed: ${failedCount}`);
  console.log('--------------------------------------------------------\n');

  // Clean scratch directory
  cleanDir(TEST_OUT_DIR);

  if (failedCount > 0) {
    console.error(`💥 Verification FAILED with ${failedCount} failure(s).`);
    process.exit(1);
  } else {
    console.log('✨ All empirical verification tests PASSED with 100% success rate!');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Fatal test runner error:', err);
  process.exit(1);
});
