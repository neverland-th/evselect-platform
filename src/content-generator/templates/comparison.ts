/**
 * EV Selection Thailand - Head-to-Head EV Comparison Template
 * 
 * Generates an authentic Thai automotive Facebook comparison post comparing 2 models
 * (e.g. BYD Seal vs Tesla Model 3 Highland, Deepal S07 vs BYD Atto 3, ORA Good Cat vs Dolphin)
 * with structured comparison matrix, driving feel comparison, charging speed battle,
 * and buying recommendation by persona.
 */

import { VehicleSpec, GenerationOptions, PostMetadata } from '../types';
import { formatPriceRangeTHB, getFitmentSummaryForVehicle, getVehicleFullName } from '../data';

/**
 * Helper to pick random item
 */
function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generate dynamic comparison hook
 */
function generateComparisonHook(nameA: string, nameB: string, priceA: string, priceB: string): string {
  const hooks = [
    `🥊 [ศึกมวยถูกคู่] ${nameA} 🆚 ${nameB} ในงบประมาณใกล้เคียงกัน คันไหนคุ้มค่าและตอบโจทย์การขับขี่ในเมืองไทยที่สุด? 🔥⚡`,
    `🔥 เทียบหมัดต่อหมัด! ${nameA} (${priceA}) ปะทะ ${nameB} (${priceB}) ขับจริงบนถนนไทย คันไหนน่าจัดกว่ากัน? 🚗💨`,
    `⚡ เลือกคันไหนดี? ${nameA} vs ${nameB} สรุปสเปกไทย อัตราเร่ง การชาร์จ และฟีลลิ่งช่วงล่าง ครบจบในโพสต์เดียว! 👇`,
    `📊 เจาะลึกจุดเด่น-จุดด้อย! ${nameA} หรือ ${nameB} คันไหนคือ "ตัวจบ" สำหรับคุณ? เทียบให้เห็นภาพชัดๆ! 🎯`,
  ];
  return pickRandom(hooks);
}

/**
 * Formats Head-to-Head Comparison Post in Thai automotive editorial style
 */
export function renderComparisonPost(
  vA: VehicleSpec,
  vB: VehicleSpec,
  options?: GenerationOptions
): {
  id: string;
  title: string;
  contentMarkdown: string;
  plainText: string;
  metadata: PostMetadata;
  vehicleModel: string;
  compareVehicleModel: string;
} {
  const nameA = getVehicleFullName(vA);
  const nameB = getVehicleFullName(vB);

  const priceA = formatPriceRangeTHB(vA.trims);
  const priceB = formatPriceRangeTHB(vB.trims);

  const topTrimA = vA.trims[vA.trims.length - 1] || vA.trims[0];
  const topTrimB = vB.trims[vB.trims.length - 1] || vB.trims[0];

  const fitmentA = getFitmentSummaryForVehicle(vA.id);
  const fitmentB = getFitmentSummaryForVehicle(vB.id);

  const hook = generateComparisonHook(nameA, nameB, priceA, priceB);
  const postTitle = `เปรียบเทียบสเปกไทย: ${nameA} vs ${nameB}`;

  // Combined Hashtags
  const hashtags = [
    '#EVSelectionTH',
    '#เปรียบเทียบรถEV',
    '#รถยนต์ไฟฟ้า',
    `#${vA.brand.replace(/\s+/g, '')}${vA.model.replace(/\s+/g, '')}`,
    `#${vB.brand.replace(/\s+/g, '')}${vB.model.replace(/\s+/g, '')}`,
    `#${vA.model.replace(/\s+/g, '')}`,
    `#${vB.model.replace(/\s+/g, '')}`,
    '#รถEVสเปกไทย',
    '#เลือกคันไหนดี',
    '#EVThailand',
  ];

  const contentMarkdown = `${hook}

วันนี้ทีมงาน **EV Selection Thailand** จับ 2 ยานยนต์ไฟฟ้ายอดนิยมมาประชันสเปกไทยแบบหมัดต่อหมัด เพื่อช่วยให้เพื่อนๆ ที่กำลังลังเลตัดสินใจได้ง่ายขึ้นว่าคันไหนเหมาะกับไลฟ์สไตล์ของคุณมากที่สุด!

---

### 📊 1. ตารางประชันสเปกไทยแบบหมัดต่อหมัด (Side-by-Side Specs)
==================================================
🔹 **${nameA}** 🆚 **${nameB}**
==================================================
💰 **ช่วงราคาอย่างเป็นทางการ**:
• ${nameA}: ${priceA}
• ${nameB}: ${priceB}

🔋 **ขนาดแบตเตอรี่ & เทคโนโลยี**:
• ${nameA}: ${topTrimA.batteryKWh} kWh (${topTrimA.batteryType})
• ${nameB}: ${topTrimB.batteryKWh} kWh (${topTrimB.batteryType})

☀️ **ระยะทางวิ่งจริง (แดดไทย 35°C–40°C เปิดแอร์ 22°C)**:
• ${nameA}: ~${topTrimA.realWorldRangeThaiKm} กม./ชาร์จ
• ${nameB}: ~${topTrimB.realWorldRangeThaiKm} กม./ชาร์จ

🐎 **พละกำลัง & อัตราเร่ง 0-100 กม./ชม.**:
• ${nameA}: ${topTrimA.powerHp} แรงม้า / ${topTrimA.torqueNm} Nm (0-100 ใน ${topTrimA.acceleration0to100} วินาที)
• ${nameB}: ${topTrimB.powerHp} แรงม้า / ${topTrimB.torqueNm} Nm (0-100 ใน ${topTrimB.acceleration0to100} วินาที)

⚡ **ความเร็วการชาร์จด่วน DC Fast Charge**:
• ${nameA}: สูงสุด ${topTrimA.maxDCSpeedKw} kW (${topTrimA.dcChargeTimeMinutes || '30-80% ใน ~30 นาที'})
• ${nameB}: สูงสุด ${topTrimB.maxDCSpeedKw} kW (${topTrimB.dcChargeTimeMinutes || '30-80% ใน ~30 นาที'})

---

### 🛣️ 2. ฟีลลิ่งการขับขี่ & การเก็บเสียงบนถนนเมืองไทย (Driving & NVH)
• **${nameA}**: ${vA.suspensionThaiRoadsNotesThai}
• **${nameB}**: ${vB.suspensionThaiRoadsNotesThai}

---

### ☀️ 3. การรับมืออากาศร้อนเมืองไทย & ระบบแอร์ (Heat Management)
• **${nameA}**: ${vA.heatPerformanceNotesThai}
• **${nameB}**: ${vB.heatPerformanceNotesThai}

---

### 🔌 4. ประสบการณ์การชาร์จ & โครงข่ายสถานี (Charging Infrastructure)
• **${nameA}**: ${vA.chargingExperienceThai}
• **${nameB}**: ${vB.chargingExperienceThai}

---

### 🎯 5. สรุปความคุ้มค่า ใครควรซื้อคันไหน? (Buyer's Persona Recommendation)

👉 **เลือก ${nameA} หากคุณคือ**:
• ${vA.targetAudienceThai}
• ชื่นชอบจุดเด่น: ${vA.prosThai[0]} และ ${vA.prosThai[1]}

👉 **เลือก ${nameB} หากคุณคือ**:
• ${vB.targetAudienceThai}
• ชื่นชอบจุดเด่น: ${vB.prosThai[0]} และ ${vB.prosThai[1]}

---

### 🛡️ 6. แนะนำอุปกรณ์เสริมตรงรุ่น 100% จาก EVSELECT สำหรับทั้ง 2 รุ่น
• สำหรับ **${nameA}**: ${fitmentA.accessories.length > 0 ? fitmentA.accessories[0].nameThai : 'พรมปูพื้น TPE 3D และม่านบังแดดหลังคาแก้วสะท้อนความร้อน'}
• สำหรับ **${nameB}**: ${fitmentB.accessories.length > 0 ? fitmentB.accessories[0].nameThai : 'พรมปูพื้น TPE 3D และม่านบังแดดหลังคาแก้วสะท้อนความร้อน'}

ช้อปอุปกรณ์เสริมตรงรุ่น QC แท้ 100% สเปกพวงมาลัยขวาได้ที่ร้านค้าทางการของ EVSELECT!

---

💬 **เป็นเพื่อนๆ ในงบนี้จะกดเลือกคันไหนกันครับ?**
❤️ กดหัวใจให้ **${nameA}**
⚡ กดสายฟ้าให้ **${nameB}**
คอมเมนต์บอกเหตุผลกันได้เลยครับ! 👇

${hashtags.join(' ')}`;

  const plainText = contentMarkdown
    .replace(/^###?\s+/gm, '')
    .replace(/\*\*/g, '')
    .replace(/---/g, '----------------------------------------');

  const suggestedImages = [
    vA.imageUrls.hero,
    vB.imageUrls.hero,
    ...(vA.imageUrls.exterior ? [vA.imageUrls.exterior] : []),
    ...(vB.imageUrls.exterior ? [vB.imageUrls.exterior] : []),
  ];

  return {
    id: `comparison-${vA.id}-vs-${vB.id}-${Date.now()}`,
    title: postTitle,
    contentMarkdown,
    plainText,
    metadata: {
      charCount: contentMarkdown.length,
      hashtags,
      suggestedImages,
      callToActionUrl: 'https://evselect.co.th/compare',
      author: 'EV Selection Thailand Editorial Team',
      targetAudience: `ผู้ที่กำลังตัดสินใจเลือกระหว่าง ${nameA} และ ${nameB}`,
      ratingScore: Math.round(((vA.rating + vB.rating) / 2) * 10) / 10,
    },
    vehicleModel: nameA,
    compareVehicleModel: nameB,
  };
}

