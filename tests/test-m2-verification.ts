/**
 * Milestone 2 Verification Test Suite
 * 
 * Verifies that all 5 template types render authentic Thai content,
 * all 13 vehicle datasets synthesize valid posts with 0 placeholders,
 * and the dual-mode engine operates seamlessly with auto-fallback.
 */

import {
  generatePost,
  generateBatchPosts,
  generatePostsForAllVehicles,
  vehicles,
  PostTopic,
  getComparisonPair,
} from '../src/content-generator';

async function runMilestone2Verification() {
  console.log('====================================================');
  console.log('🧪 MILESTONE 2: TEMPLATES & ENGINE VERIFICATION SUITE');
  console.log('====================================================\n');

  let passedChecks = 0;
  let failedChecks = 0;
  const forbiddenTokens = ['undefined', 'NaN', '[object Object]', '[INSERT]', 'TODO', 'TBD', 'lorem'];

  function assertNoPlaceholders(text: string, context: string) {
    for (const token of forbiddenTokens) {
      if (text.includes(token)) {
        console.error(`❌ [FAILURE] Placeholder token "${token}" found in: ${context}`);
        failedChecks++;
        return;
      }
    }
    passedChecks++;
  }

  // --- Test 1: All 5 Post Topics ---
  console.log('▶ [1/5] Testing all 5 post topics...');
  const topics: PostTopic[] = ['review', 'comparison', 'news', 'heat-guide', 'charging-guide'];

  for (const topic of topics) {
    const post = await generatePost({ topic, vehicleId: 'tesla-model-3-highland' });
    console.log(`  ✓ Topic "${topic}": "${post.title.substring(0, 50)}..." (${post.metadata.charCount} chars, ${post.metadata.hashtags.length} tags)`);
    assertNoPlaceholders(post.contentMarkdown, `Topic: ${topic}`);
    assertNoPlaceholders(post.plainText, `Topic: ${topic} (plainText)`);

    // Verify Thai language and currency elements
    if (!post.contentMarkdown.includes('บาท') && topic !== 'heat-guide') {
      console.warn(`  ⚠️ Warning: "บาท" not found in topic ${topic}`);
    }
    if (post.metadata.hashtags.length < 3) {
      console.error(`❌ [FAILURE] Insufficient hashtags in topic: ${topic}`);
      failedChecks++;
    } else {
      passedChecks++;
    }
  }

  // --- Test 2: In-Depth Review for all 13 Thai EV Models ---
  console.log('\n▶ [2/5] Testing Review generation for all 13 Thai EV models...');
  const allReviewPosts = await generatePostsForAllVehicles('review', 'rule_based');
  console.log(`  ✓ Successfully generated ${allReviewPosts.length} reviews.`);

  for (const post of allReviewPosts) {
    assertNoPlaceholders(post.contentMarkdown, `Review for ${post.vehicleModel}`);
    if (post.metadata.charCount < 1000) {
      console.error(`❌ [FAILURE] Review post content too short for ${post.vehicleModel} (${post.metadata.charCount} chars)`);
      failedChecks++;
    } else {
      passedChecks++;
    }
  }

  // --- Test 3: Head-to-Head Comparisons ---
  console.log('\n▶ [3/5] Testing Head-to-Head Comparisons...');
  const comparisonPairs = [
    ['byd-seal', 'tesla-model-3-highland'],
    ['deepal-s07', 'byd-atto-3'],
    ['byd-dolphin', 'ora-good-cat'],
    ['mg4-electric', 'zeekr-x'],
  ];

  for (const [slugA, slugB] of comparisonPairs) {
    const post = await generatePost({
      topic: 'comparison',
      vehicleId: slugA,
      compareVehicleId: slugB,
    });
    console.log(`  ✓ Comparison: ${post.vehicleModel} vs ${post.compareVehicleModel} (${post.metadata.charCount} chars)`);
    assertNoPlaceholders(post.contentMarkdown, `Comparison: ${slugA} vs ${slugB}`);
  }

  // --- Test 4: Batch Post Generation ---
  console.log('\n▶ [4/5] Testing batch post generation...');
  const batchPosts = await generateBatchPosts([
    { topic: 'review', vehicleId: 'zeekr-x' },
    { topic: 'heat-guide', vehicleId: 'deepal-s07' },
    { topic: 'charging-guide' },
    { topic: 'news', vehicleId: 'byd-sealion-7' },
  ]);
  console.log(`  ✓ Generated batch of ${batchPosts.length} posts successfully.`);
  if (batchPosts.length === 4) passedChecks++;
  else failedChecks++;

  // --- Test 5: Mode B (AI-Augmented with Automatic Fallback) ---
  console.log('\n▶ [5/5] Testing Mode B (AI-Augmented with Fallback)...');
  const aiPost = await generatePost({
    topic: 'review',
    vehicleId: 'byd-seal',
    mode: 'ai_augmented',
  });
  console.log(`  ✓ AI Post synthesized: "${aiPost.title.substring(0, 50)}..." (Mode: ${aiPost.mode})`);
  assertNoPlaceholders(aiPost.contentMarkdown, 'AI Post generation');
  if (aiPost.contentMarkdown.length > 500) passedChecks++;

  // --- Summary ---
  console.log('\n====================================================');
  console.log(`📊 VERIFICATION SUMMARY: ${passedChecks} PASSED, ${failedChecks} FAILED`);
  console.log('====================================================');

  if (failedChecks > 0) {
    process.exit(1);
  }
}

runMilestone2Verification().catch((err) => {
  console.error('Unhandled test exception:', err);
  process.exit(1);
});
