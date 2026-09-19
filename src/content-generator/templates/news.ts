/**
 * EV Selection Thailand - Weekly EV News & Market Trends Template
 * 
 * Generates an authentic Thai EV market news roundup post covering
 * industry updates, EV3.5 subsidies, CPO network expansions,
 * price movements, and trending discussion topics.
 */

import { VehicleSpec, GenerationOptions, PostMetadata } from '../types';
import { formatPriceRangeTHB, getVehicleFullName } from '../data';

/**
 * Helper to pick random item
 */
function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generates dynamic news headline hooks
 */
function generateNewsHook(): string {
  const hooks = [
    `⚡ [EV THAILAND WEEKLY] สรุปข่าวเด่นวงการยานยนต์ไฟฟ้าเมืองไทยประจำสัปดาห์! จับตาการปรับตัวของตลาด และไฮไลต์สถานีชาร์จใหม่ทั่วประเทศ 🔥🚗`,
    `📢 อัปเดตตลาด EV ไทยรอบสัปดาห์! เจาะลึกความเคลื่อนไหวมาตรการ EV3.5 ขยายโครงข่ายชาร์จด่วน 77 จังหวัด และเทรนด์รถรุ่นใหม่ที่กำลังจะเข้าไทย ⚡`,
    `🔥 สรุปครบจบทุกประเด็นร้อน! วงการรถยนต์ไฟฟ้าไทยสัปดาห์นี้มีอะไรอัปเดตบ้าง? ค่ายไหนขยับ สเปกไหนเด่น สรุปมาให้แล้วครับ! 👇`,
  ];
  return pickRandom(hooks);
}

/**
 * Formats Weekly EV News Post in Thai automotive editorial style
 */
export function renderNewsPost(
  featuredVehicle?: VehicleSpec,
  options?: GenerationOptions
): {
  id: string;
  title: string;
  contentMarkdown: string;
  plainText: string;
  metadata: PostMetadata;
  vehicleModel?: string;
} {
  const hook = generateNewsHook();
  const dateStr = new Date().toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const postTitle = `EV Thailand Weekly News: สรุปความเคลื่อนไหววงการยานยนต์ไฟฟ้าไทย (${dateStr})`;
  const featuredName = featuredVehicle ? getVehicleFullName(featuredVehicle) : undefined;

  // Spotlight Section if vehicle is provided
  let spotlightSection = '';
  if (featuredVehicle && featuredName) {
    const priceStr = formatPriceRangeTHB(featuredVehicle.trims);
    spotlightSection = `
---

### 🌟 4. Spotlight Model of the Week: **${featuredName}**
• **เซกเมนต์**: ${featuredVehicle.segmentNameThai} (ราคา ${priceStr})
• **ทำไมรุ่นนี้ถึงน่าสนใจในสัปดาห์นี้?**: ${featuredVehicle.taglineThai}
• **จุดเด่นสำหรับคนไทย**: ${featuredVehicle.prosThai[0]} พร้อมระบบความปลอดภัยและการจัดการความร้อนที่พัฒนามาเพื่อภูมิอากาศร้อนชื้นโดยเฉพาะ
`;
  }


  const hashtags = [
    '#EVSelectionTH',
    '#ข่าวรถEV',
    '#รถยนต์ไฟฟ้า',
    '#EVThailandNews',
    '#ชาร์จรถไฟฟ้า',
    '#มาตรการEV35',
    '#รถยนต์ไฟฟ้า2026',
    '#รอบรู้เรื่องEV',
    ...(featuredVehicle ? [`#${featuredVehicle.brand.replace(/\s+/g, '')}`, `#${featuredVehicle.model.replace(/\s+/g, '')}`] : []),
  ];

  const contentMarkdown = `${hook}

ทีมงาน **EV Selection Thailand** รวบรวมข้อมูลและความเคลื่อนไหวสำคัญของตลาดรถยนต์ไฟฟ้าในประเทศไทยมาสรุปให้แฟนเพจได้อัปเดตกันแบบเข้าใจง่ายครับ!

---

### 📌 1. ความคืบหน้าการตั้งฐานผลิตในไทย & มาตรการสนับสนุนภาครัฐ (EV3.5)
• โรงงานประกอบรถยนต์ไฟฟ้าในไทยหลายแห่ง (Rayong & Eastern Seaboard) เริ่มเดินสายการผลิตเต็มรูปแบบ ทั้งแบรนด์ชั้นนำอย่าง BYD, GWM, MG และ Changan
• ส่งผลให้อัตราการสต็อกอะไหล่ตัวถัง แบตเตอรี่ และระยะเวลารอคอยบริการหลังการขายดีขึ้นอย่างมีนัยสำคัญ
• ผู้ซื้อรถยังคงได้รับสิทธิประโยชน์และแพ็กเกจส่งเสริมการใช้งานตามนโยบายสนับสนุนยานยนต์พลังงานสะอาด

---

### ⚡ 2. โครงข่ายสถานีชาร์จด่วน (CPO Expansion) ทะลุเป้าหมาย
• **PTT EV Station PluZ & PEA VOLTA**: ขยายจุดชาร์จ DC Fast Charge บนเส้นทางสายหลักทั่วประเทศต่อเนื่อง รองรับการเดินทางข้ามจังหวัดอย่างไร้กังวล
• **Tesla Supercharger**: ทยอยเปิดสถานีชาร์จความเร็วสูง 250 kW เพิ่มเติมตามหัวเมืองเศรษฐกิจและศูนย์การค้าขนาดใหญ่
• เพิ่มเสถียรภาพระบบ Dynamic Load Balancing และฟังก์ชันจองหัวชาร์จล่วงหน้าผ่านสมาร์ตโฟน

---

### 💡 3. ตลาดมือสองและอัตราการประหยัดพลังงาน
• สถิติผู้ใช้งานจริงยืนยัน: การชาร์จไฟบ้านผ่าน **มิเตอร์ TOU รอบดึก** ประหยัดค่าใช้จ่ายด้านพลังงานได้มากกว่า 75–80% เมื่อเทียบกับรถสันดาป (จ่ายเฉลี่ยเพียง 0.48 บาท/กม.)
• แนวโน้มตลาดผู้ซื้อให้ความสำคัญกับการตรวจสอบสุขภาพแบตเตอรี่ (State of Health - SOH) และอุปกรณ์เสริมตรงรุ่นคุณภาพสูง
${spotlightSection}
---

### 💬 5. ประเด็นชวนคุยประจำสัปดาห์ (Community Discussion)
"ปัจจุบันเพื่อนๆ คิดว่า **โครงข่ายสถานีชาร์จนอกบ้านในไทยเพียงพอหรือยัง?** และเวลาเดินทางไกล ประทับใจสถานีของค่ายไหนมากที่สุด?"

มาคอมเมนต์แลกเปลี่ยนข้อมูลและแชร์พิกัดสถานีชาร์จที่ชอบกันได้เลยครับ! 👇

---

🛡️ ติดตามบทวิเคราะห์ ข่าวสาร และเลือกช้อปอุปกรณ์เสริม EV ตรงรุ่น 100% ได้ที่เพจ **EV Selection Thailand**

${hashtags.join(' ')}`;

  const plainText = contentMarkdown
    .replace(/^###?\s+/gm, '')
    .replace(/\*\*/g, '')
    .replace(/---/g, '----------------------------------------');

  const suggestedImages = featuredVehicle ? [featuredVehicle.imageUrls.hero] : [];

  return {
    id: `news-weekly-${Date.now()}`,
    title: postTitle,
    contentMarkdown,
    plainText,
    metadata: {
      charCount: contentMarkdown.length,
      hashtags,
      suggestedImages,
      callToActionUrl: 'https://evselect.co.th/news',
      author: 'EV Selection Thailand Editorial Team',
      targetAudience: 'ผู้ติดตามข่าวสารยานยนต์ไฟฟ้าและผู้ใช้รถ EV ในไทย',
    },
    vehicleModel: featuredName,
  };
}

