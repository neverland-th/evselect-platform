import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TyreConcept } from './EditorialCover';
import styles from './EditorialHubHero.module.css';

export default function EditorialHubHero() {
  return <section className={styles.section} aria-labelledby="tyre-feature-title">
    <div className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>EV TYRE GUIDE</p>
        <h2 id="tyre-feature-title">ยางที่ใช่<br /><span>เริ่มจากรถที่คุณขับ</span></h2>
        <p>ไม่ได้ดูแค่คำว่า EV บนแก้มยาง ชวนเช็กสเปกและสิ่งที่คุณต้องการจากยางชุดต่อไป</p>
        <Link href="/articles/ev-tyre-and-coilover-selection-guide">อ่านคู่มือเลือกยาง <ArrowRight size={19} aria-hidden="true" /></Link>
      </div>
      <div className={styles.picture}><TyreConcept priority /></div>
    </div>
    <p className={styles.caption}>ภาพคอนเซปต์จากตัวอย่างที่เจ้าของเว็บไซต์ส่งให้ ใช้สื่อแนวคิด ไม่ใช่ผลทดสอบหรือสินค้าที่เปิดขาย</p>
  </section>;
}
