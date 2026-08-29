/**
 * EV Selection Thailand - In-Depth Vehicle Review Template
 * 
 * Generates an authentic 8-part in-depth Thai automotive review Facebook post
 * following EV Selection Thailand editorial conventions.
 * 
 * Anatomy:
 * 1. Catchy Hook & Badge
 * 2. Executive Verdict & Rating
 * 3. Official Thai Specs & Pricing in THB
 * 4. 35°C–40°C Tropical Heat & AC Test
 * 5. Suspension & Thai Road Quality NVH
 * 6. Public Charging Test with Thai CPOs & TOU Economics
 * 7. Pros & Cons (จุดเด่น & ข้อสังเกต)
 * 8. EVSELECT Accessory Fitment CTA & Hashtags
 */

import { VehicleSpec, GenerationOptions, PostMetadata } from '../types';
import { formatPriceRangeTHB, formatPriceTHB, getFitmentSummaryForVehicle, getVehicleFullName } from '../data';
import { calculateTOUSavings } from '../data/charging';

/**
 * Random selection helper
 */
function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generates dynamic catchy review hook
 */
function generateHook(fullName: string, modelYear: string, category: string, priceStr: string, topTrimHp: number, topTrim0100: number): string {
  const hooks = [
    `⚡ [ผ่าลึกสเปกไทย] ${fullName} (${modelYear}) คุ้มไหมในงบ ${priceStr}? เจาะลึกทดสอบจริงบนถนนเมืองไทย! 🚗💨`,
    `🔥 ขับจริงไม่อวย! ${fullName} แรงสะใจ ${topTrimHp} แรงม้า 0-100 ใน ${topTrim0100} วิ สู้แดด 40°C และหลุมพระราม 2 ไหวแค่ไหน? ⚡`,
    `🚗 สรุปครบจบในโพสต์เดียว! ${fullName} สเปกไทยแท้ ราคา ${priceStr} ตัวจบสาย ${category} หรือมีข้อสังเกตอะไรที่ต้องรู้ก่อนจอง? 👇`,
    `🌟 รีวิวเจาะลึก ${fullName}: สเปกไทย ออปชันแน่น ค่าไฟกิโลเมตรละ 48 สตางค์! ตอบโจทย์ครอบครัวยุคใหม่แค่ไหน? 🔋✨`,
  ];
  return pickRandom(hooks);
}

/**
 * Formats full review post in authentic Thai automotive editorial style
 */
export function renderReviewPost(
  vehicle: VehicleSpec,
  options?: GenerationOptions
): {
  id: string;
  title: string;
  contentMarkdown: string;
  plainText: string;
  metadata: PostMetadata;
  vehicleModel: string;
} {
  const fullName = getVehicleFullName(vehicle);
  const topTrim = vehicle.trims[vehicle.trims.length - 1] || vehicle.trims[0];
  const baseTrim = vehicle.trims[0];
  const priceStr = formatPriceRangeTHB(vehicle.trims);
  const fitment = getFitmentSummaryForVehicle(vehicle.id);
  const touEconomics = calculateTOUSavings(1000);

  const hook = generateHook(fullName, vehicle.modelYear, vehicle.category, priceStr, topTrim.powerHp, topTrim.acceleration0to100);
  const postTitle = `รีวิวเจาะลึก ${fullName} สเปกไทย: ${vehicle.taglineThai}`;


  // Build Trims Specification List
  const trimsSpecText = vehicle.trims
    .map((trim, idx) => {
      const rangeText = trim.rangeNedcKm
        ? `NEDC ${trim.rangeNedcKm} กม. (วิ่งจริงแดดไทย ~${trim.realWorldRangeThaiKm} กม.)`
        : trim.rangeWltpKm
        ? `WLTP ${trim.rangeWltpKm} กม. (วิ่งจริงแดดไทย ~${trim.realWorldRangeThaiKm} กม.)`
        : trim.rangeCltcKm
        ? `CLTC ${trim.rangeCltcKm} กม. (วิ่งจริงแดดไทย ~${trim.realWorldRangeThaiKm} กม.)`
        : `วิ่งจริงแดดไทย ~${trim.realWorldRangeThaiKm} กม.`;

      return `   ${idx + 1}. รุ่น ${trim.name}: ราคา ${formatPriceTHB(trim.priceTHB)}
      • แบตเตอรี่ ${trim.batteryKWh} kWh (${trim.batteryType}) | ขับเคลื่อน ${trim.drivetrain}
      • ระยะทาง: ${rangeText}
      • พละกำลัง: ${trim.powerHp} hp / แรงบิด ${trim.torqueNm} Nm (0-100 ใน ${trim.acceleration0to100} วินาที)
      • การชาร์จ: DC สูงสุด ${trim.maxDCSpeedKw} kW (${trim.dcChargeTimeMinutes || '30-80% ใน ~30 นาที'}) / AC ${trim.maxACSpeedKw} kW`;
    })
    .join('\n\n');

  // Build Pros List
  const prosText = vehicle.prosThai.map((p) => `✅ ${p}`).join('\n');

  // Build Cons List
  const consText = vehicle.consThai.map((c) => `❌ ${c}`).join('\n');

  // Build Accessories Recommendation
  let accessoriesText = '';
  if (fitment.accessories.length > 0) {
    accessoriesText = fitment.accessories
      .slice(0, 3)
      .map((acc, i) => `${i + 1}. **${acc.nameThai}** (ราคา ${formatPriceTHB(acc.priceTHB)})\n   👉 จุดเด่น: ${acc.benefitsThai[0] || acc.descriptionThai}`)
      .join('\n');
  } else {
    accessoriesText = `1. **ชุดพรมปูพื้น TPE 3D เข้ารูปพวงมาลัยขวา** (กันน้ำ ไร้กลิ่น ทนแดดไทย)\n2. **ม่านบังแดดหลังคาแก้ว Nano-Silver Reflex** (ลดความร้อนสะสม 10-15°C)\n3. **ฟิล์มกระจกกันรอยหน้าจอกลาง 9H Matte** (ลดรอยนิ้วมือและแสงสะท้อน)`;
  }

  // Recommended hashtags
  const hashtags = [
    '#EVSelectionTH',
    '#EVSelectionThailand',
    '#รีวิวรถEV',
    '#รถยนต์ไฟฟ้า',
    `#${vehicle.brand.replace(/\s+/g, '')}`,
    `#${vehicle.brand.replace(/\s+/g, '')}${vehicle.model.replace(/\s+/g, '')}`,
    `#${vehicle.model.replace(/\s+/g, '')}`,
    '#ชาร์จรถไฟฟ้า',
    '#รถEVสเปกไทย',
    '#รถยนต์ไฟฟ้า2026',
  ];

  // Compose Full 8-Part Markdown Post
  const contentMarkdown = `${hook}

ทีมงาน **EV Selection Thailand** พามาเจาะลึกแบบจัดเต็มกับ **${fullName}** (${vehicle.modelYear}) ${vehicle.segmentNameThai} ที่กำลังได้รับความสนใจอย่างล้นหลามในตลาดรถยนต์ไฟฟ้าเมืองไทย!

---

### 🚗 1. บทสรุปความคุ้มค่า (EVSELECT Verdict)
⭐ **คะแนนทดสอบโดยทีมงาน: ${vehicle.rating.toFixed(1)} / 10**
> "${vehicle.verdictThai}"

**กลุ่มลูกค้าที่เหมาะที่สุด**: ${vehicle.targetAudienceThai}

---

### 📊 2. ข้อมูลสเปกไทยและราคาจำหน่ายอย่างเป็นทางการ (Official Thai Specs)
💰 **ช่วงราคาจำหน่าย**: ${priceStr}

${trimsSpecText}

---

### ☀️ 3. ทดสอบการระบายความร้อน & สภาพอากาศเมืองไทย 35°C–40°C
${vehicle.heatPerformanceNotesThai}
• **ระบบแอร์และการสู้แดด**: ห้องโดยสารทำความเย็นได้รวดเร็ว คอมเพรสเซอร์ทำงานเงียบ 
• **การจัดการความร้อนแบตเตอรี่**: มีระบบ Liquid Cooling คุมอุณหภูมิเซลล์แบตเตอรี่ได้อย่างมีเสถียรภาพแม้ขับทางไกลท่ามกลางแดดบ่ายจัด

---

### 🛣️ 4. ฟีลลิ่งช่วงล่าง & ความนุ่มเงียบบนถนนเมืองไทย (NVH & Thai Road Test)
${vehicle.suspensionThaiRoadsNotesThai}
• การเก็บเสียงในห้องโดยสาร (NVH) ทำได้เงียบสงบในความเร็วเมือง และมีความมั่นใจเมื่อใช้ความเร็ว 110–120 กม./ชม. บนทางด่วน

---

### ⚡ 5. ประสบการณ์ชาร์จไฟ & ค่าไฟต่อกิโลเมตร
${vehicle.chargingExperienceThai}
• **ชาร์จไฟบ้านมิเตอร์ TOU รอบดึก** (3.10 บาท/หน่วย): วิ่งจริงตกเพียง **กิโลเมตรละ ~${touEconomics.costPerKm.evHomeTOUOffPeak.toFixed(2)} บาท!**
• **เปรียบเทียบกับรถน้ำมัน**: ประหยัดค่าเชื้อเพลิงได้มากถึง **${touEconomics.savingsVsPetrol.homeTOUOffPeakSavingsPercent}%** (วิ่ง 15,000 กม./ปี ประหยัดเงินได้กว่า ${(touEconomics.savingsVsPetrol.homeTOUOffPeakSavingsTHB * 15).toLocaleString('th-TH')} บาท)
• **ชาร์จด่วน DC นอกบ้าน**: รองรับหัวชาร์จ CCS2 สเปกไทย เข้าได้ทุกตู้ชาร์จทั้ง PTT EV Station PluZ, PEA VOLTA, EleXA by EGAT และ EA Anywhere

---

### 🔍 6. จุดเด่นที่ประทับใจ (Pros)
${prosText}

### ⚠️ 7. ข้อสังเกตที่ควรรู้ก่อนตัดสินใจ (Cons)
${consText}

---

### 🛡️ 8. แนะนำอุปกรณ์เสริมตรงรุ่น 100% Fitment จาก EVSELECT
เพื่อการใช้งานรถอย่างสมบูรณ์แบบและปกป้องรถที่คุณรักในสภาพอากาศเมืองไทย แนะนำไอเทมตรงรุ่นพวงมาลัยขวา (RHD):
${accessoriesText}

👉 ช้อปอุปกรณ์เสริมตรงรุ่นคุณภาพพรีเมียมได้ที่: [EVSELECT Official Store]
🌐 ดูข้อมูลรีวิวและตารางเปรียบเทียบสเปกเพิ่มเติม: https://evselect.co.th/articles/${vehicle.articleSlug || vehicle.id}

---

💬 **ใครขับ ${fullName} อยู่บ้างครับ? วิ่งจริงได้ระยะทางเท่าไหร่ หรือชอบฟังก์ชันไหนเป็นพิเศษ มาคอมเมนต์แชร์ประสบการณ์กันได้เลยครับ!** 👇

${hashtags.join(' ')}`;

  // Create clean plain text
  const plainText = contentMarkdown
    .replace(/^###?\s+/gm, '')
    .replace(/\*\*/g, '')
    .replace(/---/g, '----------------------------------------')
    .replace(/>\s+/g, '');

  const suggestedImages = [
    vehicle.imageUrls.hero,
    ...(vehicle.imageUrls.exterior ? [vehicle.imageUrls.exterior] : []),
    ...(vehicle.imageUrls.interior ? [vehicle.imageUrls.interior] : []),
    ...(vehicle.imageUrls.details ? [vehicle.imageUrls.details] : []),
  ];

  return {
    id: `review-${vehicle.id}-${Date.now()}`,
    title: postTitle,
    contentMarkdown,
    plainText,
    metadata: {
      charCount: contentMarkdown.length,
      hashtags,
      suggestedImages,
      callToActionUrl: `https://evselect.co.th/articles/${vehicle.articleSlug || vehicle.id}`,
      author: 'EV Selection Thailand Editorial Team',
      targetAudience: vehicle.targetAudienceThai,
      ratingScore: vehicle.rating,
    },
    vehicleModel: fullName,
  };
}

