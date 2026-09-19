export type BrakeScoreAxis = 'performance' | 'price' | 'dust';
export type EditorialScore = {
  score: number;
  reason: string;
  limitation: string;
  sources: { label: string; url: string }[];
};
export const brakeScoreAxes: { id: BrakeScoreAxis; label: string; meaning: string; color: string }[] = [
  { id: 'performance', label: 'Performance', meaning: 'ศักยภาพของชุด', color: '#4d7c0f' },
  { id: 'price', label: 'ราคา', meaning: 'คุ้มค่าบนถนน', color: '#0369a1' },
  { id: 'dust', label: 'ฝุ่น', meaning: 'ฝุ่นน้อย = คะแนนสูง', color: '#7c3aed' },
];
const gt = { label: 'ชุด Brembo GT | M และราคาต้นทาง', url: 'https://www.racetechnologies.com/products/brembo-gt-m-front-brake-system-6-piston-caliper-2-piece-disc-18-model-3-awd-18-model-3-rwd-1' };
const gtReview = { label: 'เจ้าของ Brembo GT / FM1000 บน BMW · รีวิวปี 2025', url: 'https://nam3forum.com/forums/forum/main-forum/e46-2001-2006/303813-choosing-brake-pads-for-brembo-gt-big-brake-kit' };
const mx72 = { label: 'ENDLESS MX72 · ข้อมูลผู้ผลิต', url: 'https://www.endless-sport.co.jp/products/brake_pad/MX72.html' };
const mxReview = { label: 'เจ้าของ MX72 บน WRX STI · รีวิวปี 2021', url: 'https://minkara.carview.co.jp/userid/2381346/car/1882719/11119748/parts.aspx' };
const mxReview2 = { label: 'เจ้าของ MX72 บน Legacy · รีวิวปี 2020', url: 'https://minkara.carview.co.jp/userid/3131142/car/2765147/10310208/parts.aspx' };
const pccb = { label: 'Porsche อธิบาย PCCB · ข้อมูลผู้ผลิต', url: 'https://www.porsche.com/stories/innovation/porsche-ceramic-composite-brakes-pccb-explained/' };
const pccbReview = { label: 'ประสบการณ์เจ้าของ PCCB และค่าดูแล · ปี 2024', url: 'https://www.reddit.com/r/porsche911/comments/1f3avgw/downsides_with_ceramic_brakes/' };
const pccbDust = { label: 'เจ้าของ PCCB รายงานฝุ่นแตกต่างกัน · ปี 2025', url: 'https://www.reddit.com/r/Porsche/comments/1m5wjub/tracking_with_pccb/' };

// User-requested coarse editorial estimates, not measured scores, star averages or universal brand ratings.
// Same road-use lens; deliberately no decimal precision or fabricated stopping/dust measurements.
export const brakeEditorialProfiles: {
  id: string; name: string; context: string; scope: string; scores: Record<BrakeScoreAxis, EditorialScore>;
}[] = [
  {
    id: 'brembo', name: 'Brembo', context: 'ชุด GT + จานเหล็ก / ผ้า FM1000',
    scope: 'อ้างอิง GT | M 6 พอต 380×34 mm ส่วนรีวิวฟีลและฝุ่นมาจาก GT / FM1000 บน BMW คนละชุดรถ',
    scores: {
      performance: { score: 8, reason: 'ให้ระดับเด่นกับชุด GT ที่ออกแบบครบระบบ และรีวิวเจ้าของกล่าวถึงแรงกัดกับฟีลที่ดี เหมาะเป็นตัวเลือกพรีเมียมสำหรับถนนที่ต้องการความสม่ำเสมอ', limitation: 'ความมั่นใจต่ำสำหรับการเทียบข้ามชุด: รีวิวไม่ใช่ Model 3 คันเดียวกัน ไม่มีผลระยะหยุดหรืออุณหภูมิร่วมกัน', sources: [gt, gtReview] },
      price: { score: 6, reason: 'เป็นชุดพรีเมียมที่ยังต้องมีเหตุผลในการอัปเกรด แต่มีรายการอะไหล่ทดแทนและราคาอ้างอิงชัด ให้ระดับกลางด้านความคุ้มค่าบนถนน', limitation: 'คะแนนบรรณาธิการ ไม่ใช่การแปลง $4,895 เป็นบาท และไม่สรุปว่าราคาถูกกว่า ENDLESS; ค่าใช้จ่ายจริงต้องมีใบเสนอราคาตรงรถ', sources: [gt] },
      dust: { score: 4, reason: 'เจ้าของ GT / FM1000 ในรีวิวที่ใช้ประกอบรายงานฝุ่นมาก จึงไม่ให้คะแนนฝุ่นสูงเพียงเพราะเป็นชุดราคาแพง', limitation: 'ความมั่นใจต่ำ: ประสบการณ์บน BMW ไม่ใช่การวัดฝุ่น GT | M บน Tesla และเปลี่ยนผ้าแล้วผลอาจเปลี่ยน', sources: [gtReview, gt] },
    },
  },
  {
    id: 'endless', name: 'ENDLESS', context: 'ชุด 6 พอต + จานเหล็ก / ผ้า MX72',
    scope: 'มีเคส M6 จาน 375 mm บน Highland จากเจ้าของ ส่วนรีวิวผ้า MX72 มาจาก Subaru ไม่ใช่ผลทดสอบ M6 ทั้งชุด',
    scores: {
      performance: { score: 8, reason: 'รีวิว MX72 กล่าวถึงการควบคุมแรงเบรกและความมั่นใจเมื่อใช้งาน ข้อมูลผู้ผลิตระบุ compound สำหรับถนนร่วมกับงานร้อน จึงให้ระดับเด่นในกรอบชุดที่จับคู่ถูกต้อง', limitation: 'ความมั่นใจต่ำในการให้คะแนนทั้งชุด: 700°C เป็นข้อมูลผ้า ไม่ใช่คะแนนหยุดรถ ส่วนเคส 375 mm เป็นข้อมูลเฉพาะเจ้าของ', sources: [mx72, mxReview, { label: 'เคส ENDLESS 375 mm ของเจ้าของรถ', url: '#japan' }] },
      price: { score: 6, reason: 'ให้ระดับกลางเช่นเดียวกับ Brembo เพราะเป็นการลงทุนพรีเมียมที่ต้องตรงงาน เคสเจ้าของรายงานประมาณสองแสนบาท ยังไม่มีเหตุผลพอจะจัดว่าคุ้มกว่ากันจากราคาเพียงอย่างเดียว', limitation: 'ความมั่นใจต่ำ: ยอดเจ้าของยังไม่แยกภาษีและอุปกรณ์ครบ ไม่ใช่ราคาไทยที่ตรวจใบเสร็จแล้ว และไม่ใช้ราคา ALVELL6 แทน M6', sources: [{ label: 'เคสและขอบเขตราคาจากเจ้าของ', url: '#japan' }] },
      dust: { score: 4, reason: 'รีวิว MX72 บน WRX STI และ Legacy ระบุว่ายังมีฝุ่นพอสมควร จึงให้ระดับเดียวกับกลุ่มผ้าเน้นสมรรถนะ ไม่เหมารวมว่า ENDLESS ทุก compound ฝุ่นน้อย', limitation: 'ความมั่นใจต่ำ: เป็นรีวิวคนละรถและต่างปี ไม่ใช่การชั่งฝุ่นร่วมกัน; SSM PLUS เป็นคนละ compound และไม่ได้ใช้คะแนนนี้', sources: [mxReview, mxReview2] },
    },
  },
  {
    id: 'carbon-ceramic', name: 'Carbon Ceramic', context: 'ระบบ CCB สำหรับถนนที่ผู้ผลิตจับคู่ครบ',
    scope: 'เป็นกลุ่มวัสดุ ไม่ใช่แบรนด์ อ้างอิง PCCB เพื่ออธิบายแนวโน้ม ไม่รับรองจานแต่ง 375–390 mm ที่ไม่ทราบผู้ผลิต',
    scores: {
      performance: { score: 9, reason: 'ให้ระดับเด่นด้านวัสดุ น้ำหนัก และศักยภาพรับงานร้อนของระบบถนนที่ออกแบบครบ ตามคุณสมบัติที่ Porsche อธิบาย', limitation: 'ความมั่นใจต่ำเมื่อย้ายไปชุดแต่งอื่น: ไม่ได้หมายความว่าหยุดสั้นกว่าจานเหล็ก 1 คะแนน และไม่ใช่ผลทดสอบ CCB บน Highland', sources: [pccb] },
      price: { score: 3, reason: 'ประเมินความคุ้มค่าบนถนนไว้ต่ำกว่าสองแนวทางแรก เพราะต้นทุนชิ้นส่วนและการทดแทนสูง ขณะที่เจ้าของบางคนเลือกเพื่อฝุ่น น้ำหนัก และความชอบ มากกว่าความจำเป็นเรื่องระยะหยุด', limitation: 'ความมั่นใจต่ำ: ไม่เอาราคาเฉพาะจาน 150,000–400,000 บาทไปเทียบตรงกับราคาครบชุด และไม่มีราคาไทยครบชุดที่ยืนยันร่วมกัน', sources: [pccbReview, { label: 'แยกราคาเฉพาะจานออกจากครบชุด', url: '#carbon-ceramic' }] },
      dust: { score: 8, reason: 'รีวิวเจ้าของ PCCB หลายความเห็นชอบที่ล้อสะอาดขึ้น จึงให้คะแนนเด่นด้านฝุ่น แต่ไม่ให้เต็มเพราะยังมีรายงานฝุ่นต่างกันตามผ้าและการใช้งาน', limitation: 'ความมั่นใจต่ำถึงปานกลางสำหรับแนวโน้ม PCCB และต่ำสำหรับ CCB ยี่ห้ออื่น; ไม่ได้แปลว่าไม่มีฝุ่นหรือปล่อยอนุภาคเป็นศูนย์', sources: [pccbReview, pccbDust] },
    },
  },
];
