import socialCover from '../../public/images/articles/kw-coilover-adjustable-social.jpg';

// Preview media must be reachable before the new asset exists on production.
const mediaOrigin = process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://evselects.com';

// Keep the supplied AVIF unchanged; this bundler cannot read AVIF metadata.
// The same-size JPEG supplies dimensions and a broadly compatible social image.
const cover = {
  src: '/images/articles/kw-coilover-adjustable.avif',
  width: socialCover.width,
  height: socialCover.height,
};

export const damperArticle = {
  path: '/articles/ev-damper-tuning-bump-rebound-guide',
  url: 'https://evselects.com/articles/ev-damper-tuning-bump-rebound-guide',
  title: 'โช้คแพงแต่ยังเด้ง? เจาะลึกคอยล์โอเวอร์ 1-Way, 2-Way, 3-Way ก่อนเสียเงินแต่ง',
  cardTitle: 'โช้คแพง แต่ทำไมยังเด้ง?',
  description: 'คอยล์โอเวอร์ 1-Way, 2-Way, 3-Way ต่างกันอย่างไร? ดูภาพช่องปรับ เทียบหลายแบรนด์ พร้อม 3 กรณีจำลองและแบบบันทึกก่อนจูนช่วงล่าง EV ไม่เดาสูตรคลิกข้ามรุ่น',
  cardDescription: '1-Way ถึง 3-Way จ่ายเพิ่มแล้วได้อะไร? อ่านกลไกและตัวอย่างหลายแบรนด์ ก่อนเลือกช่วงล่างให้รถ EV',
  publishedAt: '2026-08-27',
  updatedAt: '2026-09-19',
  cover,
  coverUrl: new URL('/images/articles/kw-coilover-adjustable-social.jpg', mediaOrigin).href,
  coverAlt: 'ผลิตภัณฑ์ KW Coilovers หลายรูปแบบ พร้อมสปริงสีเหลืองและแหวนปรับสีม่วงบนพื้นหลังสว่าง',
};
