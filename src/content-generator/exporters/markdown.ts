/**
 * EV Selection Thailand - Markdown Content Exporter
 * 
 * Formats generated Facebook posts into an aesthetic, copy-paste ready `posts.md`
 * document specifically tailored for Facebook page managers, content creators,
 * and Meta Business Suite / Creator Studio workflows.
 */

import { GeneratedPost, PostTopic } from '../types';

export interface MarkdownExportOptions {
  includeHeaderSummary?: boolean;
  includeTableOfContents?: boolean;
  includeFacebookCopyGuide?: boolean;
  pageName?: string;
  generatedBy?: string;
}

/**
 * Maps post topic to an emoji badge and Thai descriptive title
 */
function getTopicBadge(topic: PostTopic): { emoji: string; labelThai: string } {
  switch (topic) {
    case 'review':
      return { emoji: '🏎️', labelThai: 'รีวิวเจาะลึกสเปกไทย (In-Depth Review)' };
    case 'comparison':
      return { emoji: '⚔️', labelThai: 'ศึกเปรียบเทียบหมัดต่อหมัด (EV Comparison)' };
    case 'news':
      return { emoji: '📰', labelThai: 'สรุปข่าวเด่น & เทรนด์ EV ประจำสัปดาห์ (Weekly News)' };
    case 'heat-guide':
      return { emoji: '☀️', labelThai: 'คู่มือขับ EV สู้แดดเมืองไทย 40°C (Tropical Heat Guide)' };
    case 'charging-guide':
      return { emoji: '⚡', labelThai: 'คู่มือชาร์จไฟบ้าน TOU & สถานีชาร์จ (Charging Guide)' };
    default:
      return { emoji: '📌', labelThai: 'คอนเทนต์ EV Selection Thailand' };
  }
}

/**
 * Calculates estimated reading time in minutes (based on ~200-250 Thai words/min or 500 chars/min)
 */
function estimateReadingTime(charCount: number): number {
  return Math.max(1, Math.ceil(charCount / 500));
}

/**
 * Formats multiple GeneratedPost objects into a comprehensive Markdown document
 */
export function exportToMarkdown(
  posts: GeneratedPost[],
  options: MarkdownExportOptions = {}
): string {
  const {
    includeHeaderSummary = true,
    includeTableOfContents = true,
    includeFacebookCopyGuide = true,
    pageName = 'EV Selection Thailand',
    generatedBy = 'EV Selection Thailand Automated Engine',
  } = options;

  const now = new Date();
  const dateFormatted = now.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const lines: string[] = [];

  // 1. Header Summary Banner
  if (includeHeaderSummary) {
    lines.push(`# ⚡ ${pageName} — Facebook Content Batch Export`);
    lines.push('');
    lines.push(`> 📅 **Export Date**: ${dateFormatted} (${now.toISOString()})  `);
    lines.push(`> 📊 **Total Posts Generated**: ${posts.length} โพสต์  `);
    lines.push(`> 🤖 **System Engine**: ${generatedBy}  `);
    lines.push(`> 💡 **Target Platform**: Facebook Page & Meta Business Suite  `);
    lines.push('');

    // Topic breakdown
    const topicCounts: Record<string, number> = {};
    for (const p of posts) {
      topicCounts[p.topic] = (topicCounts[p.topic] || 0) + 1;
    }
    const topicBreakdown = Object.entries(topicCounts)
      .map(([t, count]) => {
        const badge = getTopicBadge(t as PostTopic);
        return `${badge.emoji} **${t}**: ${count}`;
      })
      .join(' | ');

    lines.push(`**Topic Breakdown**: ${topicBreakdown || 'N/A'}`);
    lines.push('');
  }

  // 2. Facebook Copy-Paste Guide
  if (includeFacebookCopyGuide) {
    lines.push('---');
    lines.push('');
    lines.push('## 📌 คำแนะนำการนำไปโพสต์ลง Facebook (Posting Instructions)');
    lines.push('');
    lines.push('1. **คัดลอกเนื้อหา**: ให้ Copy ข้อความในบล็อก `📋 ข้อความพร้อมโพสต์ (Copy-Paste Text)` หรือข้อความด้านล่างของแต่ละโพสต์');
    lines.push('2. **แนบรูปภาพ**: ดาวน์โหลดรูปภาพตามที่ระบุในหัวข้อ `🖼️ ภาพประกอบที่แนะนำ` เพื่อเพิ่ม Engagement ให้สูงสุด');
    lines.push('3. **แท็ก & ลิงก์**: ลิงก์และ Hashtags ถูกจัดวางไว้ท้ายโพสต์เรียบร้อยแล้ว');
    lines.push('4. **เวลาโพสต์ที่แนะนำ**:');
    lines.push('   - 🌅 เช้า: 07:30 – 08:30 น. (ช่วงเดินทาง)');
    lines.push('   - 🍱 เที่ยง: 11:45 – 13:00 น. (ช่วงพักกลางวัน)');
    lines.push('   - 🌙 เย็น/ค่ำ: 18:30 – 20:30 น. (ช่วง Prime Time คนเปิดอ่านมากที่สุด)');
    lines.push('');
  }

  // 3. Table of Contents / Index Table
  if (includeTableOfContents && posts.length > 0) {
    lines.push('---');
    lines.push('');
    lines.push('## 📑 สารบัญโพสต์ในชุดนี้ (Table of Contents)');
    lines.push('');
    lines.push('| # | หัวข้อโพสต์ (Post Title) | หมวดหมู่ (Topic) | รถยนต์ (Vehicle) | จำนวนตัวอักษร | ลิงก์ข้าม |');
    lines.push('|---|---|---|---|---|---|');

    posts.forEach((post, idx) => {
      const num = idx + 1;
      const badge = getTopicBadge(post.topic);
      const vehicle = post.compareVehicleModel
        ? `${post.vehicleModel || 'N/A'} vs ${post.compareVehicleModel}`
        : post.vehicleModel || 'ภาพรวมตลาด / All';
      const cleanTitle = post.title.replace(/\|/g, '-');
      lines.push(
        `| ${num} | ${cleanTitle} | ${badge.emoji} \`${post.topic}\` | ${vehicle} | ${post.metadata.charCount.toLocaleString()} ตัว | [ดูโพสต์](#post-${num}) |`
      );
    });

    lines.push('');
  }

  // 4. Render Individual Posts
  posts.forEach((post, idx) => {
    const num = idx + 1;
    const badge = getTopicBadge(post.topic);
    const readingTime = estimateReadingTime(post.metadata.charCount);
    const vehicleInfo = post.compareVehicleModel
      ? `${post.vehicleModel} ⚡ ${post.compareVehicleModel}`
      : post.vehicleModel || 'EV Selection Thailand Editorial';

    lines.push('---');
    lines.push('');
    lines.push(`<a id="post-${num}"></a>`);
    lines.push(`## 📝 Post #${num}: ${post.title}`);
    lines.push('');

    // Metadata Table
    lines.push('| ข้อมูลกำกับ (Metadata) | รายละเอียด (Details) |');
    lines.push('|---|---|');
    lines.push(`| **หมวดหมู่ (Topic)** | ${badge.emoji} ${badge.labelThai} |`);
    lines.push(`| **รถยนต์ที่เกี่ยวข้อง** | **${vehicleInfo}** |`);
    lines.push(`| **Post ID** | \`${post.id}\` |`);
    lines.push(`| **โหมดการสร้าง (Engine Mode)** | \`${post.mode}\` |`);
    lines.push(`| **วันที่สร้าง** | ${post.generatedAt} |`);
    lines.push(`| **ความยาวเนื้อหา** | ${post.metadata.charCount.toLocaleString()} ตัวอักษร (อ่านประมาณ ~${readingTime} นาที) |`);
    if (post.metadata.targetAudience) {
      lines.push(`| **กลุ่มเป้าหมาย (Target Audience)** | ${post.metadata.targetAudience} |`);
    }
    if (post.metadata.ratingScore) {
      lines.push(`| **คะแนนรีวิว** | ⭐ ${post.metadata.ratingScore}/10 |`);
    }
    lines.push('');

    // Suggested Images Block
    if (post.metadata.suggestedImages && post.metadata.suggestedImages.length > 0) {
      lines.push('### 🖼️ ภาพประกอบที่แนะนำสำหรับโพสต์นี้ (Suggested Media)');
      lines.push('');
      post.metadata.suggestedImages.forEach((img, imgIdx) => {
        lines.push(`- 📸 **รูปที่ ${imgIdx + 1}**: \`${img}\``);
      });
      lines.push('');
    }

    // Copy-Paste Ready Clean Text Block
    lines.push('### 📋 ข้อความพร้อมโพสต์ (Copy-Paste Text สำหรับ Facebook)');
    lines.push('');
    lines.push('```text');
    lines.push(post.plainText || post.contentMarkdown);
    lines.push('```');
    lines.push('');

    // Markdown Visual Preview
    lines.push('### 👁️ ตัวอย่างการแสดงผล (Formatted Preview)');
    lines.push('');
    lines.push(post.contentMarkdown);
    lines.push('');

    // Hashtags & CTA summary
    if (post.metadata.hashtags && post.metadata.hashtags.length > 0) {
      lines.push('### 🏷️ แท็กแนะนำ (Recommended Hashtags)');
      lines.push('');
      lines.push(`\`${post.metadata.hashtags.join(' ')}\``);
      lines.push('');
    }

    if (post.metadata.callToActionUrl) {
      lines.push('### 🔗 ลิงก์ Call To Action');
      lines.push('');
      lines.push(`- [${post.metadata.callToActionUrl}](${post.metadata.callToActionUrl})`);
      lines.push('');
    }
  });

  // Footer
  lines.push('---');
  lines.push('');
  lines.push(`*Generated automatically by EV Selection Thailand Content Engine — ${now.getFullYear()}*`);
  lines.push('');

  return lines.join('\n');
}
