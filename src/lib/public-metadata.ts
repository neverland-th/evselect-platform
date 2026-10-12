import type { Metadata } from 'next';
import { siteName } from '@/lib/site-identity';

// Human-edited search titles. Keep article headings, evidence and existing URLs
// unchanged; do not truncate Thai words or simulate a newer verification date.
const searchCopy: Record<string, { title: string; description?: string }> = {
  '/': { title: 'แต่งรถ EV และของแต่งรถไฟฟ้า' },
  '/articles': { title: 'บทความและรีวิวรถ EV สเปกไทย' },
  '/articles/byd-atto-3-review': { title: 'BYD Atto 3 MY2026: Premium หรือ Extended?' },
  '/articles/byd-seal-review': { title: 'BYD Seal สเปกไทย: Premium หรือ AWD?' },
  '/articles/deepal-s05-review': { title: 'Deepal S05 สเปกไทย: BEV หรือ REEV?' },
  '/articles/deepal-s07-review': { title: 'Deepal NEW S07 สเปกไทย: ต้องลองอะไรบ้าง?' },
  '/articles/ev-battery-care': { title: 'แบตเตอรี่ EV: ชาร์จ 80% หรือ 100%?' },
  '/articles/ev-camber-adjustment-wheel-alignment-guide': { title: 'ยางกินใน: อ่านใบตั้งศูนย์ EV ก่อนเปลี่ยนอะไหล่' },
  '/articles/ev-carbon-ceramic-brakes-guide': {
    title: 'Carbon Ceramic คุ้มไหม? ก่อนอัปเกรดเบรก EV',
    description: 'ก่อนอัปเกรดเบรก EV เป็น Carbon Ceramic ดูฟีลเบรก ฝุ่น และค่าดูแล เทียบตัวเลือก Brembo กับ ENDLESS พร้อมแยกประสบการณ์เจ้าของรถจากข้อมูลผู้ผลิต',
  },
  '/articles/ev-damper-tuning-bump-rebound-guide': { title: 'ซื้อโช้คหลักแสน ทำไมยังไม่จบ!? สตรัทปรับเกลียว' },
  '/articles/ev-horsepower-vs-torque-explained': { title: 'แรงม้า vs แรงบิด: EV คันไหนเร่งดีกว่า?' },
  '/articles/ev-performance-driving-techniques': { title: 'ขับ EV: เข้าใจคันเร่ง Regen และเบรก' },
  '/articles/ev-suspension-tuning-guide': { title: 'ช่วงล่าง EV ย้วยหรือกระด้าง? เช็กก่อนเปลี่ยนโช้ค' },
  '/articles/ev-tyre-and-coilover-selection-guide': {
    title: 'ยาง EV ต่างจากยางทั่วไปยังไง?',
    description: 'เทียบโจทย์ออกแบบยาง EV ของ Michelin, Hankook, Continental และ Pirelli กับยาง Performance ดูความเงียบ ระยะวิ่ง และการควบคุมก่อนเลือกให้ตรงรถ',
  },
  '/articles/geely-ex2-review': { title: 'Geely EX2 สเปกไทย: Pro หรือ Max?' },
  '/articles/hybrid-to-ev-chassis-dynamics-transition': { title: 'จาก Hybrid เป็น EV: ทำไมขับแล้วรู้สึกต่างกัน?' },
  '/articles/mg4-electric-review': { title: 'MG4 MY2026 สเปกไทย: D หรือ X Long Range?' },
  '/articles/optimizing-ev-suspension-thai-roads': { title: 'EV กระแทกคอสะพาน? เช็กยางและช่วงล่างก่อน' },
  '/articles/shock-absorber-types-monotube-twintube-air-ev': { title: 'Monotube, Twin-tube และถุงลม ต่างกันยังไง?' },
  '/articles/tesla-model-3-highland-review': {
    title: 'Tesla Model 3 สเปกไทย: เทียบ 4 รุ่นและราคา',
    description: 'เทียบ Tesla Model 3 ขับหลัง, Premium RWD, Long Range RWD และ Performance AWD: ราคา ระยะวิ่ง และอุปกรณ์สเปกไทย อิงข้อมูลวันที่ตรวจสอบในบทความ',
  },
  '/articles/tesla-model-y-l-premium-6-seater-review': { title: 'Tesla Model Y L 6 ที่นั่ง: สเปกไทย' },
  '/articles/zeekr-009-review': { title: 'ZEEKR 009 สเปกไทย: เลือก 6 หรือ 7 ที่นั่ง?' },
  '/articles/zeekr-7x-2026-review': { title: 'ZEEKR 7X สเปกไทย: เลือกรุ่นไหนดี?' },
  '/articles/zeekr-x-review': { title: 'ZEEKR X สเปกไทย: Standard หรือ Flagship?' },
};

export function withPublicMetadata(path: string, original: Metadata): Metadata {
  const copy = searchCopy[path];
  const originalTitle = typeof original.title === 'string'
    ? original.title.replace(/\| EVSELECTS\.COM$/, '| EVSELECTS')
    : original.title;
  const title = copy ? `${copy.title} | ${siteName}` : originalTitle ?? undefined;
  const description = copy?.description ?? original.description ?? undefined;
  return {
    ...original,
    title,
    description,
    openGraph: { ...original.openGraph, title, description, siteName },
    twitter: { ...original.twitter, title, description },
  };
}
