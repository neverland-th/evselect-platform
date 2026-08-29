/**
 * EV Selection Thailand - Complete Home TOU & Public Charging Guide Template
 * 
 * Generates an authentic Thai educational Facebook post on Home TOU electricity tariffs,
 * cost-per-kilometer breakdown (~0.48 THB/km vs 2.71 THB/km Petrol), CPO network apps,
 * and public charging etiquette.
 */

import { VehicleSpec, GenerationOptions, PostMetadata } from '../types';
import { calculateTOUSavings, getAllChargingNetworks } from '../data/charging';
import { formatPriceTHB } from '../data';

/**
 * Helper to pick random item
 */
function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generates dynamic charging guide hook
 */
function generateChargingGuideHook(): string {
  const hooks = [
    `⚡ [คู่มือค่าไฟ EV] ชาร์จรถไฟฟ้ายังไงให้เหลือกิโลเมตรละ 0.48 บาท? สรุปวิธีขอหม้อ TOU + รวมแอปชาร์จนอกบ้านที่ต้องมีติดเครื่อง! 🔌💰`,
    `💡 อยากประหยัดค่าน้ำมันปีละ 33,000+ บาท ต้องอ่าน! เจาะลึกสูตรคิดค่าไฟบ้านมิเตอร์ TOU และวิธีตั้งเวลาชาร์จแบบมือโปร 🚗⚡`,
    `🔌 ขับรถ EV จ่ายค่าไฟเดือนละกี่บาท? เปิดตารางเปรียบเทียบค่าไฟบ้าน vs ปั๊มน้ำมัน vs ตู้ชาร์จสาธารณะ ชัดเจนทุกตัวเลข! 👇`,
  ];
  return pickRandom(hooks);
}

/**
 * Formats Complete Home TOU & Public Charging Guide in Thai editorial style
 */
export function renderChargingGuidePost(
  vehicle?: VehicleSpec,
  options?: GenerationOptions
): {
  id: string;
  title: string;
  contentMarkdown: string;
  plainText: string;
  metadata: PostMetadata;
  vehicleModel?: string;
} {
  const hook = generateChargingGuideHook();
  const touEconomics = calculateTOUSavings(15000); // 15,000 km annual baseline
  const cpos = getAllChargingNetworks();

  const postTitle = `คู่มือชาร์จรถไฟฟ้า: วิธีขอหม้อ TOU เซฟค่าไฟเหลือกิโลเมตรละ 0.48 บาท & แอปชาร์จที่ต้องมี`;

  const hashtags = [
    '#EVSelectionTH',
    '#มิเตอร์TOU',
    '#ชาร์จรถไฟฟ้า',
    '#คู่มือรถEV',
    '#ประหยัดค่าไฟ',
    '#PEAVOLTA',
    '#EVStationPluZ',
    '#EleXA',
    '#รถยนต์ไฟฟ้า',
    '#รอบรู้เรื่องEV',
  ];

  const contentMarkdown = `${hook}

หลายคนที่กำลังจะตัดสินใจซื้อรถยนต์ไฟฟ้า หรือเพิ่งรับรถมาใหม่ มักมีคำถามยอดฮิต:
"ติดมิเตอร์ TOU คุ้มจริงไหม?" "ตั้งเวลาชาร์จยังไง?" และ "เดินทางต่างจังหวัดต้องโหลดแอปอะไรบ้าง?"

วันนี้ทีมงาน **EV Selection Thailand** ทำคู่มือสรุปฉบับเข้าใจง่ายที่สุดมาให้เซฟเก็บไว้ใช้กันครับ! 👇

---

### 💰 1. ตารางเปรียบเทียบค่าเดินทางต่อปี (คำนวณที่ระยะทาง 15,000 กม./ปี)
==================================================
🚗 **รถยนต์เบนซินทั่วไป (E20 @ 38 บาท/ลิตร)**:
• ค่าใช้จ่าย: **${formatPriceTHB(touEconomics.costs.petrolCostTHB)} / ปี** (~${touEconomics.costPerKm.petrol.toFixed(2)} บาท/กม.)

🔌 **รถ EV ชาร์จตู้สาธารณะ DC Fast Charge (7.50 บาท/หน่วย)**:
• ค่าใช้จ่าย: **${formatPriceTHB(touEconomics.costs.evPublicDCCostTHB)} / ปี** (~${touEconomics.costPerKm.evPublicDC.toFixed(2)} บาท/กม.)
• ประหยัดกว่ารถน้ำมัน: **${touEconomics.savingsVsPetrol.publicDCSavingsPercent}%**

🏠 **รถ EV ชาร์จบ้านมิเตอร์ธรรมดา (4.50 บาท/หน่วย)**:
• ค่าใช้จ่าย: **${formatPriceTHB(touEconomics.costs.evHomeStandardCostTHB)} / ปี** (~${touEconomics.costPerKm.evHomeStandard.toFixed(2)} บาท/กม.)
• ประหยัดกว่ารถน้ำมัน: **${touEconomics.savingsVsPetrol.homeStandardSavingsPercent}%**

⚡ **รถ EV ชาร์จบ้านมิเตอร์ TOU ช่วง Off-Peak (3.10 บาท/หน่วย)**:
• ค่าใช้จ่าย: **${formatPriceTHB(touEconomics.costs.evHomeTOUOffPeakCostTHB)} / ปี** (เพียง **~${touEconomics.costPerKm.evHomeTOUOffPeak.toFixed(2)} บาท/กม.**!)
• **ประหยัดค่าน้ำมันได้สูงถึง ${touEconomics.savingsVsPetrol.homeTOUOffPeakSavingsPercent}% (เซฟเงินได้กว่า ${formatPriceTHB(touEconomics.savingsVsPetrol.homeTOUOffPeakSavingsTHB)} / ปี!)**

---

### ⏱️ 2. ช่วงเวลาและหลักการทำงานของมิเตอร์ TOU (Time of Use)
• **ช่วง Off-Peak (ค่าไฟถูกสุด ~3.10 บาท/หน่วย รวม Ft/VAT)**:
  - จันทร์ - ศุกร์: **22:00 น. ถึง 09:00 น.** ของวันรุ่งขึ้น
  - เสาร์ - อาทิตย์ และวันหยุดราชการตามปฏิทิน: **ตลอด 24 ชั่วโมง!**
• **ช่วง On-Peak (ค่าไฟปกติ ~5.80 บาท/หน่วย)**:
  - จันทร์ - ศุกร์: **09:00 น. ถึง 22:00 น.**

💡 **เคล็ดลับการใช้งาน**: เสียบหัวชาร์จ Wallbox ทิ้งไว้เมื่อกลับถึงบ้าน แล้วตั้งเวลาในตัวรถหรือแอป Wallbox ให้เริ่มชาร์จตอน **22:05 น.** และหยุดชาร์จก่อน **08:30 น.**

---

### 📝 3. ขั้นตอนการขอติดตั้งมิเตอร์ TOU (กฟน. MEA / กฟภ. PEA)
1. **ยื่นคำร้อง**: ผ่านแอปพลิเคชัน MEA Smart Life (กทม./นนทบุรี/สมุทรปราการ) หรือ PEA Smart Plus (ต่างจังหวัด)
2. **เตรียมระบบไฟฟ้าภายในบ้าน**:
   - อัปเกรดขนาดมิเตอร์หลักเป็น 30(100)A 1 Phase หรือขอ **"หม้อลูกที่สองสำหรับ EV โดยเฉพาะ"**
   - เดินสายเมนขนาดอย่างน้อย 16 sq.mm. จากตู้ควบคุมมายังจุดติดตั้ง Wallbox
   - ติดตั้งเบรกเกอร์เฉพาะทาง RCBO Type A หรือ Type B เพื่อความปลอดภัยสูงสุด
3. **เจ้าหน้าที่เข้าตรวจสอบ**: การไฟฟ้าจะส่งเจ้าหน้าที่มาตรวจรับรองมาตรฐานความปลอดภัยก่อนจ่ายไฟ

---

### 📱 4. รวม 5 แอปชาร์จสาธารณะที่ต้องมีติดมือถือเมื่อเดินทางไกล
1. **EV Station PluZ (OR)**: ครอบคลุมปั๊ม PTT ทั่วประเทศกว่า 77 จังหวัด จองหัวชาร์จล่วงหน้าได้
2. **PEA VOLTA**: สถานีครอบคลุมเส้นทางหลวงหลักและสำนักงาน กฟภ. ทั่วไทย
3. **EleXA (EGAT)**: สถานีไฮสปีดในปั๊ม PT และเขื่อน กฟผ. กำลังไฟนิ่งและเสถียร
4. **EA Anywhere**: จุดชาร์จใจกลางเมือง ห้างสรรพสินค้าชั้นนำ และอาคารสำนักงาน
5. **Tesla Supercharger**: ชาร์จแรงสะใจสูงสุด 250 kW เสียบแล้วชาร์จทันที

---

### 🤝 5. มารยาทสากลในการใช้ตู้ชาร์จสาธารณะ
• ชาร์จถึง **80% แล้วสละหัวชาร์จ** ให้เพื่อนร่วมทาง (เพราะช่วง 80-100% ความเร็วชาร์จจะดรอปลงอย่างมาก)
• ไม่ควรจอดรถแช่ในช่องชาร์จเมื่อชาร์จเสร็จแล้ว
• จองคิวแล้วควรไปให้ตรงเวลา หากเปลี่ยนแผนกรุณากดยกเลิกเพื่อไม่ให้กั๊กสิทธิ์ผู้อื่น

---

### 🛡️ อุปกรณ์เสริมระบบชาร์จแนะนำจาก EVSELECT:
• **แท่นแขวนและที่เก็บหัวชาร์จ Wallbox พร้อมล็อกกุญแจ**
• **กระเป๋าหนังกันน้ำพกพาสายชาร์จฉุกเฉินและ V2L**
• **ชุดหัวแปลงและอุปกรณ์จัดระเบียบสายไฟ**

👉 สั่งซื้ออุปกรณ์ชาร์จและอุปกรณ์เสริม EV ตรงรุ่นได้ที่: [EVSELECT Official Store]

---

💬 **เพื่อนๆ ที่ใช้มิเตอร์ TOU อยู่ ค่าไฟเดือนล่าสุดตกกิโลเมตรละกี่บาท มาแชร์ในคอมเมนต์กันได้เลยครับ!** 👇

${hashtags.join(' ')}`;

  const plainText = contentMarkdown
    .replace(/^###?\s+/gm, '')
    .replace(/\*\*/g, '')
    .replace(/---/g, '----------------------------------------');

  const suggestedImages = [
    '/images/charging/home-tou-meter-guide.jpg',
    '/images/charging/thailand-charging-network.jpg',
  ];

  return {
    id: `charging-guide-${Date.now()}`,
    title: postTitle,
    contentMarkdown,
    plainText,
    metadata: {
      charCount: contentMarkdown.length,
      hashtags,
      suggestedImages,
      callToActionUrl: 'https://evselect.co.th/guides/tou-charging',
      author: 'EV Selection Thailand Energy Team',
      targetAudience: 'เจ้าของรถ EV และผู้ที่กำลังวางแผนติดตั้ง Wallbox มิเตอร์ TOU',
    },
    vehicleModel: vehicle ? `${vehicle.brand} ${vehicle.model}` : undefined,
  };
}
