import Image from 'next/image';
import styles from './EditorialCover.module.css';

export const editorialCovers = {
  'ev-tyre-and-coilover-selection-guide': {
    label: 'EV TYRE GUIDE', title: 'เลือกยาง EV', accent: 'ให้ตรงการใช้งาน',
    detail: 'น้ำหนักรถ · การเกาะถนน · ความสบาย',
    image: '/images/editorial/ev-tyres-user-concept.png',
    alt: 'ภาพคอนเซปต์รถและยางจากตัวอย่างที่เจ้าของเว็บไซต์ส่งให้ ไม่ใช่ภาพทดสอบสินค้า',
  },
  'shock-absorber-types-monotube-twintube-air-ev': {
    label: 'DAMPER GUIDE', title: 'เลือกโช้ค EV', accent: 'เริ่มจากเข้าใจระบบ',
    detail: 'โครงสร้างโช้ค · แรงหน่วง · สปริง',
    image: '/images/articles/kw-coilover-adjustable-social.jpg',
    alt: 'ภาพรวมชุดคอยล์โอเวอร์ KW จากเจ้าของเว็บไซต์ ไม่ยืนยันการติดตั้งตรงรุ่น',
  },
  'optimizing-ev-suspension-thai-roads': {
    label: 'SUSPENSION GUIDE', title: 'กระแทก เด้ง ย้วย', accent: 'เช็กก่อนเปลี่ยน',
    detail: 'แยกอาการ · ตรวจสภาพ · คุยกับช่าง',
    image: '/images/articles/single-wishbone-suspension.jpg',
    alt: 'ภาพอธิบายส่วนประกอบช่วงล่าง MacPherson ไม่ใช่แบบติดตั้งเฉพาะรุ่น',
  },
} as const;

export function hasEditorialCover(slug: string): slug is keyof typeof editorialCovers {
  return slug in editorialCovers;
}

export function TyreConcept({ priority = false }: { priority?: boolean }) {
  return <div className={styles.concept}>
    <Image src="/images/editorial/ev-tyres-user-concept.png" width={941} height={1672}
      alt={editorialCovers['ev-tyre-and-coilover-selection-guide'].alt}
      sizes="(max-width: 767px) 230vw, 115vw" priority={priority} />
  </div>;
}

export default function EditorialCover({ slug }: { slug: keyof typeof editorialCovers }) {
  const cover = editorialCovers[slug];
  return <div className={styles.cover} data-editorial-cover={slug}>
    <div className={styles.top}><span>{cover.label}</span></div>
    <div className={styles.body}>
      <div className={styles.copy}><strong>{cover.title}</strong><strong>{cover.accent}</strong><span>{cover.detail}</span></div>
      {slug === 'ev-tyre-and-coilover-selection-guide' ? <TyreConcept /> :
        <div className={styles.subject}><Image src={cover.image} alt={cover.alt} fill sizes="(max-width: 767px) 50vw, 22vw" /></div>}
    </div>
    <div className={styles.rule} />
  </div>;
}
