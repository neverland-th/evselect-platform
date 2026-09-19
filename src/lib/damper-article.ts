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
  title: 'ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?',
  cardTitle: 'ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?',
  subtitle: 'ปัญหาอยู่ที่โช้ค หรือเรายังไม่เข้าใจว่ามันทำงานยังไง?',
  description: 'เข้าใจโช้คสตรัทปรับเกลียว 1-Way, 2-Way, 3-Way และนิสัยของแต่ละชุด พร้อมตัวอย่างหลายแบรนด์ เลือกให้ตรงกับรถ ถนน และการใช้งาน ไม่จูนจากราคาหรือจำนวนคลิก',
  cardDescription: 'ปัญหาอยู่ที่โช้ค หรือเรายังไม่เข้าใจว่ามันทำงานยังไง? ดูความต่างของ 1-Way ถึง 3-Way และเลือกให้ตรงกับถนนที่ใช้จริง',
  publishedAt: '2026-08-27',
  updatedAt: '2026-09-19',
  cover,
  coverUrl: new URL('/images/articles/kw-coilover-adjustable-social.jpg', mediaOrigin).href,
  coverAlt: 'ผลิตภัณฑ์ KW Coilovers หลายรูปแบบ พร้อมสปริงสีเหลืองและแหวนปรับสีม่วงบนพื้นหลังสว่าง',
};
