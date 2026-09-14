import cover from '../../public/images/articles/ev-damper-tuning-cover.jpg';

// A static import makes a missing cover a build error instead of a live 404.
export const damperArticle = {
  path: '/articles/ev-damper-tuning-bump-rebound-guide',
  url: 'https://evselects.com/articles/ev-damper-tuning-bump-rebound-guide',
  cover,
  coverUrl: new URL(cover.src, 'https://evselects.com').href,
  coverAlt: 'ภาพประกอบโช้คอัพสตรัทปรับเกลียวสองชุด พร้อมสปริงสีดำและแหวนปรับสีเขียวบนโต๊ะช่าง',
};
