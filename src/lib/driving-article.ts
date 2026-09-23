import { thaiRoadsArticle } from '@/lib/thai-roads-article';

export const drivingArticle = {
  path: '/articles/ev-performance-driving-techniques',
  title: 'ขับ EV แรงอย่างเข้าใจรถ: คันเร่ง Regen และเบรกที่ควรรู้',
  description: 'ทำความคุ้นเคยกับคันเร่งและ Regen เข้าใจการใช้เบรกกับ ABS และแยกการขับถนนออกจากการฝึกในสนาม พร้อมตัวอย่างจากคู่มือ Model 3',
  publishedAt: '2026-08-27T08:00:00+07:00',
  updatedAt: '2026-09-23T20:20:00+07:00',
  readTime: '5 นาที',
  image: thaiRoadsArticle.image,
  imageAlt: thaiRoadsArticle.imageAlt,
  imageSource: thaiRoadsArticle.imageSource,
  imageAuthor: thaiRoadsArticle.imageAuthor,
  imageLicense: thaiRoadsArticle.imageLicense,
  imageLicenseUrl: thaiRoadsArticle.imageLicenseUrl,
};

export const drivingSources = {
  braking: 'https://www.tesla.com/ownersmanual/model3/en_th/GUID-3DFFB071-C0F6-474D-8A45-17BE1A006365.html',
  acceleration: 'https://www.tesla.com/ownersmanual/model3/en_th/GUID-8EAFF5D8-7209-45ED-A7E0-508FFA60C530.html',
  regen: 'https://www.bosch-mobility.com/en/solutions/driving-safety/regenerative-braking-systems/',
  traction: 'https://www.tesla.com/ownersmanual/model3/en_th/GUID-CC0F27E7-FD78-448D-B739-209EBBEDF2C3.html',
  track: 'https://www.tesla.com/ownersmanual/model3/en_th/GUID-92CA3DCA-EDA3-4243-861E-2C770F5506FD.html',
};
