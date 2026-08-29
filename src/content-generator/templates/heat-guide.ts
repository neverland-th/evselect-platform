/**
 * EV Selection Thailand - Tropical Heat & Battery Care Guide Template
 * 
 * Generates an authentic Thai automotive guide post on managing EV cabin heat,
 * AC efficiency, battery longevity, and real-world range protection in 35°C–40°C Thai weather.
 */

import { VehicleSpec, GenerationOptions, PostMetadata } from '../types';
import { getFitmentSummaryForVehicle, getVehicleFullName } from '../data';

/**
 * Helper to pick random item
 */
function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Generates dynamic heat guide hook
 */
function generateHeatGuideHook(fullName?: string): string {
  if (fullName) {
    return pickRandom([
      `☀️ [คู่มือสู้แดด 40°C] ขับ ${fullName} หน้าร้อนเมืองไทยยังไงให้แอร์เย็นฉ่ำ แบตเตอรี่ไม่เสื่อม และเซฟระยะทางวิ่งได้สูงสุด! ❄️⚡`,
      `🔥 แดดเมืองไทยร้อนทะลุ 40°C! ส่องเทคนิคขับและดูแลแบตเตอรี่ ${fullName} ให้อยู่ยาวเกิน 10 ปี วิ่งจริงไม่อวย! 🚗💨`,
    ]);
  }
  return pickRandom([
    `☀️ [คู่มือสู้แดด 40°C] ขับรถ EV หน้าร้อนเมืองไทยยังไงให้แอร์เย็นฉ่ำ แบตเตอรี่ไม่เสื่อม และไม่กินไฟเกินจำเป็น! ❄️⚡`,
    `🔥 แดดเมืองไทยแรงจนแอร์ตัด? รวม 5 เคล็ดลับขับรถยนต์ไฟฟ้าสู้ความร้อน 35°C–40°C ถนอมแบตเตอรี่ให้อยู่ยาวเกิน 10 ปี! 🚗💡`,
    `⚡ เจาะลึกทำไมแดดไทยถึงกินแบตเตอรี่ EV มากกว่าสเปกโรงงาน? พร้อมสูตรตั้งแอร์และดูแลรถให้เซฟพลังงานสูงสุด! 👇`,
  ]);
}

/**
 * Formats Tropical Heat & Battery Care Guide in Thai editorial style
 */
export function renderHeatGuidePost(
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
  const fullName = vehicle ? getVehicleFullName(vehicle) : undefined;
  const hook = generateHeatGuideHook(fullName);
  const postTitle = fullName
    ? `คู่มือสู้แดด 40°C: เทคนิคถนอมแบตเตอรี่ & แอร์เย็นฉ่ำสำหรับ ${fullName}`
    : `คู่มือสู้แดด 40°C: 5 เทคนิคขับรถ EV หน้าร้อนเมืองไทยให้แอร์เย็นฉ่ำและถนอมแบตเตอรี่`;

  let vehicleSpecificNote = '';
  if (vehicle && fullName) {
    const fitment = getFitmentSummaryForVehicle(vehicle.id);
    const sunshade = fitment.accessories.find((a) => a.category === 'Heat Defense');
    vehicleSpecificNote = `
---

### 🚗 ข้อแนะนำเฉพาะรุ่นสำหรับ **${fullName}**
• **การจัดการความร้อน**: ${vehicle.heatPerformanceNotesThai}
• **อุปกรณ์แนะนำ**: ${sunshade ? `ติดตั้ง **${sunshade.nameThai}** ช่วยลดความร้อนสะสมบริเวณเพดานได้อย่างเห็นผล` : 'ติดตั้งม่านบังแดดสะท้อนความร้อนตรงรุ่นพวงมาลัยขวา'}
`;
  }


  const hashtags = [
    '#EVSelectionTH',
    '#คู่มือรถEV',
    '#ถนอมแบตเตอรี่',
    '#ขับEVหน้าร้อน',
    '#แอร์รถยนต์ไฟฟ้า',
    '#รถยนต์ไฟฟ้า',
    '#รอบรู้เรื่องEV',
    '#ของแต่งรถEV',
    ...(vehicle ? [`#${vehicle.brand.replace(/\s+/g, '')}`, `#${vehicle.model.replace(/\s+/g, '')}`] : []),
  ];

  const contentMarkdown = `${hook}

หลายท่านที่ใช้รถยนต์ไฟฟ้าในประเทศไทยคงเคยเจอปัญหา: ทำไมเวลาขับกลางแดดเที่ยง 38°C–40°C แบตเตอรี่ถึงหมดเร็วกว่าปกติ? หรือทำไมหลังคาแก้วถึงแผ่ความร้อนลงมาจนแอร์แทบไม่ทัน?

วันนี้ **EV Selection Thailand** สรุปหลักการทางวิศวกรรมและ **5 เคล็ดลับสู้แดดเมืองไทย** มาให้ปรับใช้กันได้ทันทีครับ! 👇

---

### 🌡️ 1. ทำไมสภาพอากาศไทยถึงทำให้รถ EV กินไฟเพิ่มขึ้น?
• **ภาระคอมเพรสเซอร์แอร์ (A/C Load)**: ในห้องแล็บยุโรป (NEDC/WLTP) ทดสอบที่ 20°C–25°C โดยปิดแอร์ แต่ในไทยแอร์อินเวอร์เตอร์ต้องดึงไฟต่อเนื่อง **1.5 kW – 3.5 kW** เพื่อสู้แดดและลดอุณหภูมิห้องโดยสาร
• **ความร้อนสะสมหลังคาแก้ว (Greenhouse Effect)**: กระจกพาโนรามาที่ไร้ม่านบังแดดสะสมอุณหภูมิผิวสูงถึง 60°C+ แผ่รังสีอินฟราเรดลงมาที่ศีรษะคนขับตลอดเวลา
• **การควบคุมอุณหภูมิแบตเตอรี่ (Battery Thermal Management)**: ปั๊มน้ำหล่อเย็นและพัดลมระบายความร้อนต้องทำงานหนักขึ้นเพื่อรักษาอุณหภูมิเซลล์ให้อยู่ในช่วงที่เหมาะสม (25°C–35°C)

---

### 💡 2. 5 กฎเหล็กขับรถ EV หน้าร้อนให้เย็นฉ่ำและถนอมแบตเตอรี่

📌 **กฎข้อที่ 1: เปิดแอร์ล่วงหน้าก่อนขึ้นรถ (Pre-cooling) ขณะยังเสียบสายชาร์จ**
• สั่งเปิดแอร์ผ่านแอปมือถือล่วงหน้า 5-10 นาทีก่อนออกเดินทาง ขณะที่รถยังเสียบ Wallbox อยู่
• วิธีนี้จะดึงกระแสไฟจากบ้านมาทำความเย็นห้องโดยสารโดยตรง โดยไม่เปลืองพลังงานในแบตเตอรี่เลยแม้แต่น้อย!

📌 **กฎข้อที่ 2: ติดตั้งม่านบังแดดหลังคาแก้วแบบสะท้อนความร้อน (Reflex Sunshade)**
• ติดตั้งม่านบังแดดตรงรุ่นที่เคลือบสารสะท้อนรังสี UV และอินฟราเรด สามารถลดอุณหภูมิห้องโดยสารลงได้ทันที 10–15°C ช่วยลดภาระคอมเพรสเซอร์แอร์ได้มากกว่า 30%

📌 **กฎข้อที่ 3: ปรับอุณหภูมิแอร์อย่างเหมาะสม 23°C–24°C + พัดลมเบอร์กลาง**
• ไม่จำเป็นต้องเร่งแอร์ไปที่ 18°C เพราะจะทำให้คอมเพรสเซอร์ทำงานโหลดสูงสุดตลอดเวลา 
• หากรถมี **เบาะเป่าลมเย็น (Ventilated Seats)** ให้เปิดควบคู่กัน จะรู้สึกเย็นสบายตัวอย่างรวดเร็วและประหยัดไฟกว่ามาก

📌 **กฎข้อที่ 4: หลีกเลี่ยงการอัด DC Fast Charge ติดต่อกันขณะแบตเตอรี่ร้อนจัด**
• หากเพิ่งขับรถฝ่าแดดบ่ายด้วยความเร็วสูง ควรพักรถให้ระบบระบายความร้อนทำงานสักครู่ หรือเลือกตู้ชาร์จที่มีหลังคาบังแดด จะช่วยให้ชาร์จไฟได้เต็มสปีดและป้องกันแบตเตอรี่ Overheat

📌 **กฎข้อที่ 5: แบตเตอรี่ LFP vs NMC ดูแลต่างกันอย่างไรในเมืองร้อน?**
• **แบตเตอรี่ LFP (Blade / Aegis)**: ทนทานต่อความร้อนได้สูง ชาร์จ 100% สัปดาห์ละ 1 ครั้งเพื่อรีเซ็ต SoC ได้ปลอดภัย
• **แบตเตอรี่ NMC**: หลีกเลี่ยงการชาร์จ 100% แล้วจอดตากแดดทิ้งไว้นานๆ แนะนำตั้ง Limit ไว้ที่ 80% สำหรับการใช้งานในชีวิตประจำวัน
${vehicleSpecificNote}
---

### 🛡️ อุปกรณ์เสริมแนะนำสำหรับสู้แดดเมืองไทยจาก EVSELECT:
1. **ม่านบังแดดหลังคาแก้ว Nano-Silver Reflex ตรงรุ่น 100%**
2. **ม่านบังแดดกระจกหน้าแบบพับร่มพรีเมียม**
3. **ฟิล์มกระจกกันรอยหน้าจอกลางแบบด้าน (Anti-Glare / Anti-Fingerprint)**

👉 ช้อปอุปกรณ์เสริมสู้แดดตรงรุ่นสเปกไทยได้ที่: [EVSELECT Official Store]

---

💬 **หน้าร้อนนี้เพื่อนๆ มีเทคนิคตั้งแอร์หรือถนอมแบตเตอรี่อย่างไรกันบ้าง? มาร่วมแชร์ประสบการณ์กันได้เลยครับ!** 👇

${hashtags.join(' ')}`;

  const plainText = contentMarkdown
    .replace(/^###?\s+/gm, '')
    .replace(/\*\*/g, '')
    .replace(/---/g, '----------------------------------------');

  const suggestedImages = [
    '/images/sunroof-shade.jpg',
    vehicle ? vehicle.imageUrls.hero : '/images/tips/ev-tropical-battery-care.jpg',
  ];

  return {
    id: `heat-guide-${vehicle ? vehicle.id : 'general'}-${Date.now()}`,
    title: postTitle,
    contentMarkdown,
    plainText,
    metadata: {
      charCount: contentMarkdown.length,
      hashtags,
      suggestedImages,
      callToActionUrl: 'https://evselect.co.th/guides/heat-and-battery',
      author: 'EV Selection Thailand Technical Team',
      targetAudience: 'ผู้ใช้รถ EV ในประเทศไทยที่ต้องการถนอมแบตเตอรี่และประหยัดพลังงาน',
    },
    vehicleModel: fullName,
  };
}

