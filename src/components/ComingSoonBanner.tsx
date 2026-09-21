import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./ComingSoonBanner.module.css";

export default function ComingSoonBanner() {
  return (
    <section id="vehicle-finder" className={styles.section} aria-labelledby="coming-soon-heading">
      <div id="coming-soon" className={styles.banner}>
        <div className={styles.visual}>
          <Image
            src="/images/launch/evselect-coming-soon.webp"
            alt="ภาพคอนเซ็ปต์รถใต้ผ้าคลุมสำหรับแคมเปญเตรียมเปิดตัวอุปกรณ์เสริม EVSELECT"
            width={1672}
            height={941}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 95vw, 1216px"
            className={styles.image}
          />
        </div>
        <div className={styles.copy}>
          <div className={styles.brand}>
            <span className={styles.selector} aria-hidden="true"><i /><i /></span>
            <Link href="/" className="underline underline-offset-4">EVSELECT</Link>
          </div>
          <p className={styles.eyebrow}><span aria-hidden="true" />COMING SOON</p>
          <h2 id="coming-soon-heading" className={styles.title}>
            ของแต่ง EV<br /><span>ที่คุณต้องมี!</span>
          </h2>
          <p className={styles.description}>
            เรากำลังคัดอุปกรณ์เสริม พร้อมเตรียมข้อมูลรุ่นรถและการติดตั้งให้ชัดเจน ก่อนเปิดตัวให้ดูกันที่นี่
          </p>
          <div className={styles.actions}>
            <a href="https://www.facebook.com/evselects" target="_blank" rel="noopener noreferrer" className={styles.primary}>
              ติดตามข่าวเปิดตัว <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <Link href="/contact" className={styles.secondary}>
              อยากได้ของแต่งอะไร บอกเราได้ <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className={styles.footer}>
          <p><span className={styles.statusDot} aria-hidden="true" />ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
          <p className={styles.caption}>ภาพคอนเซ็ปต์สร้างด้วย AI ไม่ใช่ภาพสินค้าที่เปิดขาย</p>
        </div>
      </div>
    </section>
  );
}
