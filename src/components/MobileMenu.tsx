"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import styles from "./MobileMenu.module.css";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/#choose-your-path", label: "เริ่มจากสิ่งที่กำลังตัดสินใจ" },
  { href: "/articles?category=reviews", label: "รีวิวรถ EV" },
  { href: "/#launch", label: "ติดตามการเปิดตัวสินค้า" },
  { href: "/articles", label: "บทความและคู่มือ EV" },
  { href: "/editorial-policy", label: "นโยบายบทความ (กำลังจัดทำ)" },
  { href: "/contact", label: "ติดต่อทีมงาน" },
];

export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label="เปิดเมนูหลัก"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => { dialogRef.current?.showModal(); setIsOpen(true); }}
      >
        <Menu size={24} aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        id={id}
        className={styles.drawer}
        aria-labelledby={`${id}-title`}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
        }}
      >
        <div className={styles.heading}>
          <div>
            <p className={styles.brand}><Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">EVSELECT</Link></p>
            <p id={`${id}-title`} className={styles.menuTitle}>เมนูหลัก</p>
          </div>
          <button type="button" className={styles.close} aria-label="ปิดเมนูหลัก" onClick={close} autoFocus>
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <div className={styles.content}>
          <nav aria-label="เมนูหลัก">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} prefetch={false} onClick={close} className={styles.link}>
                <span>{label}</span><ChevronRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <div className={styles.contact}>
            <p>สินค้ายังอยู่ระหว่างเตรียมเปิดตัว บอกรุ่นรถหรือหัวข้อที่คุณอยากให้เราเริ่มก่อนได้</p>
            <a href="https://www.facebook.com/evselects" target="_blank" rel="noopener noreferrer" onClick={close} className={styles.chat}>
              สอบถามทีมงาน <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <Link href="/contact" prefetch={false} onClick={close} className={styles.launch}>
              บอกรุ่นรถที่คุณใช้ <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
