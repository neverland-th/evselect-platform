import responsiveCover from '../../public/images/articles/kw-coilover-adjustable.webp';

// Preview media must be reachable before the new asset exists on production.
const mediaOrigin = process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://evselects.com';

// Keep the original AVIF for provenance; serve its WebP derivative through
// Next's responsive optimizer. The existing JPEG remains the social preview.
const cover = responsiveCover;

export const damperArticle = {
  path: '/articles/ev-damper-tuning-bump-rebound-guide',
  url: 'https://evselects.com/articles/ev-damper-tuning-bump-rebound-guide',
  title: 'ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?',
  cardTitle: 'ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?',
  subtitle: 'ใส่ตรงรุ่น ทำไมยังไม่ถูกใจ? เริ่มจากอาการที่อยากแก้ แล้วค่อยเลือกโช้คให้ตรงชีวิตที่ใช้รถ',
  description: 'ซื้อโช้คหลักแสนทำไมยังไม่จบ? แยกใส่ตรงรุ่นจากเหมาะกับเรา เรียนรู้ Spring rate, Preload, Wheel rate และ 1-Way–3-Way พร้อมภาพผู้ผลิตและเช็กลิสต์ถามร้าน',
  cardDescription: 'ใส่ตรงรุ่นยังไม่เท่ากับเหมาะกับเรา เข้าใจสปริง ระยะยุบ และปุ่ม 1-Way–3-Way ก่อนเลือกชุดที่ตรงกับยาง ถนน และการใช้งานจริง',
  publishedAt: '2026-08-27',
  updatedAt: '2026-09-19',
  cover,
  coverUrl: new URL('/images/articles/kw-coilover-adjustable-social.jpg', mediaOrigin).href,
  coverAlt: 'ผลิตภัณฑ์ KW Coilovers หลายรูปแบบ พร้อมสปริงสีเหลืองและแหวนปรับสีม่วงบนพื้นหลังสว่าง',
};
