import { generatePost, vehicles } from '../src/content-generator';

async function checkSampleOutputs() {
  console.log('Generating samples for all 5 templates:\n');

  const topics = ['review', 'comparison', 'news', 'heat-guide', 'charging-guide'] as const;
  for (const topic of topics) {
    const post = await generatePost({
      topic,
      vehicleId: 'byd-seal',
      compareVehicleId: 'tesla-model-3-highland',
    });
    console.log(`==================== [TOPIC: ${topic.toUpperCase()}] ====================`);
    console.log(`TITLE: ${post.title}`);
    console.log(`CHAR COUNT: ${post.metadata.charCount}`);
    console.log(`HASHTAGS: ${post.metadata.hashtags.join(' ')}`);
    console.log(`FIRST 300 CHARS:\n${post.contentMarkdown.substring(0, 300)}...`);
    console.log('\n');
  }
}

checkSampleOutputs().catch(console.error);
