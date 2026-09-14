"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import styles from "./MobileMenu.module.css";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/#vehicle-finder", label: "เลือกรุ่นรถ" },
  { href: "/#products", label: "สินค้าและอุปกรณ์เสริม" },
  { href: "/articles", label: "บทความและคู่มือ EV" },
  { href: "/#fitment-assurance", label: "มาตรฐานการคัดสินค้า" },
  { href: "/#ecosystem", label: "รถรุ่นที่รองรับ" },
  { href: "/dealer", label: "สมัครตัวแทนจำหน่าย B2B" },
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
            <p className={styles.brand}>EVSELECT</p>
            <h2 id={`${id}-title`}>เมนูหลัก</h2>
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
            <p>ให้เราช่วยเลือกอุปกรณ์สำหรับรถคุณ</p>
            <a href="https://www.facebook.com/evselects" target="_blank" rel="noopener noreferrer" onClick={close} className={styles.chat}>
              สอบถามทีม EVSELECT <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="https://shopee.co.th/shop/9535932" target="_blank" rel="noopener noreferrer" onClick={close} className={styles.shop}>
              เลือกซื้อที่ร้าน Shopee <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
