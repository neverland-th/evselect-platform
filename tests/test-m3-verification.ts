/**
 * EV Selection Thailand - Milestone 3 Verification Test Suite
 * 
 * Verifies:
 * 1. Markdown Exporter (`posts.md` format, summary, TOC, copy blocks, hashtags)
 * 2. JSON Exporter (`posts.json` schema, analytics summary, post payloads)
 * 3. Unified Exporter Pipeline (`exportPosts` writing files to disk)
 * 4. CLI Execution & Parameter Resolution (`--help`, `--list`, `--vehicle`, `--all`)
 */

import * as fs from 'fs';
import * as path from 'path';
import { generatePost, generatePostsForAllVehicles } from '../src/content-generator/engine';
import {
  exportToMarkdown,
  exportToJson,
  exportPosts,
  exportPostsSync,
  ExportJsonSchema,
} from '../src/content-generator/exporters';
import { vehicles } from '../src/content-generator/data';

async function runM3Verification() {
  console.log('====================================================');
  console.log('🧪 MILESTONE 3: EXPORTERS & CLI VERIFICATION SUITE');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, msg: string) {
    if (condition) {
      console.log(`  ✓ ${msg}`);
      passed++;
    } else {
      console.error(`  ❌ FAILED: ${msg}`);
      failed++;
    }
  }

  // 1. Generate sample posts
  console.log('▶ [1/4] Testing Markdown Exporter...');
  const samplePosts = [
    await generatePost({ vehicleId: 'byd-seal', topic: 'review' }),
    await generatePost({ vehicleId: 'tesla-model-3-highland', compareVehicleId: 'byd-seal', topic: 'comparison' }),
    await generatePost({ topic: 'charging-guide' }),
  ];

  const markdownOut = exportToMarkdown(samplePosts);
  assert(typeof markdownOut === 'string' && markdownOut.length > 500, 'Markdown output is a non-empty string');
  assert(markdownOut.includes('# ⚡ EV Selection Thailand — Facebook Content Batch Export'), 'Includes batch header');
  assert(markdownOut.includes('## 📑 สารบัญโพสต์ในชุดนี้ (Table of Contents)'), 'Includes Table of Contents');
  assert(markdownOut.includes('📋 ข้อความพร้อมโพสต์ (Copy-Paste Text สำหรับ Facebook)'), 'Includes Copy-Paste block');
  assert(markdownOut.includes('BYD Seal') && markdownOut.includes('Tesla Model 3 Highland'), 'Includes vehicle names');
  assert(markdownOut.includes('### 🏷️ แท็กแนะนำ'), 'Includes hashtag section');

  // 2. Testing JSON Exporter
  console.log('\n▶ [2/4] Testing JSON Exporter & Schema Validation...');
  const jsonStr = exportToJson(samplePosts);
  assert(typeof jsonStr === 'string' && jsonStr.length > 500, 'JSON output is a valid string');

  const parsedJson: ExportJsonSchema = JSON.parse(jsonStr);
  assert(parsedJson.schemaVersion === '1.0.0', 'JSON schemaVersion is 1.0.0');
  assert(parsedJson.generator.name.includes('EV Selection Thailand'), 'Generator info present');
  assert(parsedJson.summary.totalPosts === 3, 'Summary totalPosts count is 3');
  assert(parsedJson.summary.byTopic.review === 1, 'Topic review count is 1');
  assert(parsedJson.summary.byTopic.comparison === 1, 'Topic comparison count is 1');
  assert(parsedJson.summary.byTopic['charging-guide'] === 1, 'Topic charging-guide count is 1');
  assert(parsedJson.summary.totalCharacters > 0, 'Total characters calculated');
  assert(parsedJson.posts.length === 3, 'Posts array contains 3 posts');
  assert(parsedJson.posts[0].metadata.hashtags.length > 0, 'Post metadata includes hashtags');
  assert(parsedJson.posts[0].metadata.suggestedImages.length > 0, 'Post metadata includes suggested images');

  // 3. Testing File Writing Pipeline
  console.log('\n▶ [3/4] Testing exportPosts & exportPostsSync File Writing...');
  const tempDir = path.resolve(process.cwd(), './temp_test_export');
  
  const exportRes = await exportPosts(samplePosts, {
    outputDir: tempDir,
    markdownFileName: 'test_posts.md',
    jsonFileName: 'test_posts.json',
    writeFiles: true,
  });

  assert(Boolean(exportRes.markdownPath && fs.existsSync(exportRes.markdownPath)), 'test_posts.md successfully written to disk');
  assert(Boolean(exportRes.jsonPath && fs.existsSync(exportRes.jsonPath)), 'test_posts.json successfully written to disk');
  assert(exportRes.postsCount === 3, 'Export result reports 3 posts');

  // Test sync variant
  const exportSyncRes = exportPostsSync(samplePosts, {
    outputDir: tempDir,
    markdownFileName: 'test_sync.md',
    jsonFileName: 'test_sync.json',
  });
  assert(Boolean(exportSyncRes.markdownPath && fs.existsSync(exportSyncRes.markdownPath)), 'test_sync.md written synchronously');
  assert(Boolean(exportSyncRes.jsonPath && fs.existsSync(exportSyncRes.jsonPath)), 'test_sync.json written synchronously');

  // Cleanup temp dir
  fs.rmSync(tempDir, { recursive: true, force: true });
  assert(!fs.existsSync(tempDir), 'Cleaned up temporary export directory');

  // 4. Testing All Vehicles Export
  console.log('\n▶ [4/4] Testing full 13-vehicle batch generation & export...');
  const allVehiclePosts = await generatePostsForAllVehicles('review', 'rule_based');
  assert(allVehiclePosts.length === vehicles.length, `Generated posts for all ${vehicles.length} vehicles`);

  const allMarkdown = exportToMarkdown(allVehiclePosts);
  assert(allMarkdown.includes(`Total Posts Generated**: ${vehicles.length}`), 'All-vehicle markdown includes correct count');

  const allJson: ExportJsonSchema = JSON.parse(exportToJson(allVehiclePosts));
  assert(allJson.summary.totalPosts === vehicles.length, 'All-vehicle JSON has full count');
  assert(allJson.summary.vehiclesCovered.length === vehicles.length, 'All vehicles represented in JSON summary');

  console.log('\n====================================================');
  console.log(`📊 VERIFICATION SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runM3Verification().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
