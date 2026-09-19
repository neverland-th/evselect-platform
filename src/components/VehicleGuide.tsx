"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import styles from "./VehicleGuide.module.css";

// Editorial links only: these do not assert stock, fitment, or Thai-trim equipment.
const slides = [
  {
    brand: "DEEPAL", model: "S05", slug: "deepal-s05-review",
    image: "/images/reviews/deepal-s05-hero.jpg",
    alt: "ภาพประกอบ DEEPAL S05 สีเงิน พร้อมฉากถนนและภูเขา",
    eyebrow: "เปิดมุมมองใหม่ให้รถคันต่อไป",
    description: "ทำความรู้จัก S05 ให้มากกว่าภาพแรกที่เห็น แล้วค่อยเลือกสิ่งที่เหมาะกับคุณ",
  },
  {
    brand: "Tesla", model: "Model 3 Highland", slug: "tesla-model-3-highland-review",
    image: "/images/reviews/tesla-model-3-hero.jpg",
    alt: "Tesla Model 3 Highland สีแดง มุมด้านหน้าและด้านข้าง",
    eyebrow: "รายละเอียดที่คนรักรถอยากรู้",
    description: "เปิดรีวิว Model 3 Highland และดูประเด็นที่ควรเทียบ ก่อนตัดสินใจเลือกรุ่น",
  },
  {
    brand: "ZEEKR", model: "X", slug: "zeekr-x-review",
    image: "/images/reviews/zeekr-x-hero.jpg",
    alt: "ZEEKR X สีขาว มุมด้านหน้าและด้านข้าง",
    eyebrow: "มองให้ลึกกว่าดีไซน์",
    description: "ชอบเส้นสายของ ZEEKR X? ไปต่อที่ข้อมูลรถและสิ่งที่ควรรู้ในรีวิวฉบับเต็ม",
  },
];

const guides = [
  { label: "BYD Atto 3", slug: "byd-atto-3-review" },
  { label: "BYD Seal", slug: "byd-seal-review" },
  { label: "Tesla Model 3 Highland", slug: "tesla-model-3-highland-review" },
  { label: "Tesla Model Y L", slug: "tesla-model-y-l-premium-6-seater-review" },
  { label: "ZEEKR X", slug: "zeekr-x-review" },
  { label: "ZEEKR 009", slug: "zeekr-009-review" },
  { label: "ZEEKR 7X", slug: "zeekr-7x-2026-review" },
  { label: "DEEPAL S05", slug: "deepal-s05-review" },
  { label: "DEEPAL S07", slug: "deepal-s07-review" },
  { label: "Geely EX2", slug: "geely-ex2-review" },
  { label: "MG MG4", slug: "mg4-electric-review" },
];

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

export default function VehicleGuide() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
  const pageVisible = useSyncExternalStore(subscribeVisibility, () => document.visibilityState === "visible", () => false);
  const playing = !paused && !reducedMotion;

  function selectSlide(index: number) {
    setPaused(true);
    const track = trackRef.current;
    if (!track) return;
    const next = (index + slides.length) % slides.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: reducedMotion ? "instant" : "smooth" });
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.45 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible || !pageVisible) return;
    const timer = window.setInterval(() => {
      // Read actual hover state: replacing the play/pause icon can drop mouseleave events.
      if (window.matchMedia("(hover: hover)").matches && carouselRef.current?.matches(":hover")) return;
      const track = trackRef.current;
      if (!track) return;
      const current = Math.round(track.scrollLeft / track.clientWidth);
      track.scrollTo({ left: ((current + 1) % slides.length) * track.clientWidth, behavior: "smooth" });
    }, 7000);
    return () => window.clearInterval(timer);
  }, [playing, visible, pageVisible]);

  // Keep the selected slide aligned after a viewport resize or phone rotation.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let width = track.clientWidth;
    const observer = new ResizeObserver(() => {
      if (track.clientWidth !== width) {
        width = track.clientWidth;
        track.scrollTo({ left: active * width, behavior: "instant" });
      }
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={rootRef} className={styles.showcase}>
      <div ref={carouselRef} role="region" aria-roledescription="สไลด์แนะนำรถ" aria-label="เลือกรถแล้วเปิดอ่านรีวิว" onFocusCapture={(event) => {
        // Let the rotation control toggle once; focusing content/navigation stops rotation.
        if (!(event.target as HTMLElement).closest("[data-rotation-control]")) setPaused(true);
      }}>
        <div ref={trackRef} id="vehicle-showcase-track" className={styles.track} tabIndex={0} aria-label="ภาพรถแนะนำ ใช้ปุ่มลูกศรซ้ายและขวาเพื่อเลื่อน" onPointerDown={() => setPaused(true)}
          onScroll={() => {
            const track = trackRef.current;
            if (track) setActive(Math.min(slides.length - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth))));
          }}
          onKeyDown={(event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              selectSlide(active + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}>
          {slides.map((slide, index) => (
            <article key={slide.slug} className={styles.slide} role="group" aria-roledescription="สไลด์" aria-label={`${index + 1} จาก ${slides.length}: ${slide.brand} ${slide.model}`}>
              <div className={styles.visual}>
                <Image src={slide.image} alt={slide.alt} fill sizes="(max-width: 959px) 92vw, (max-width: 1279px) 60vw, 760px" className={styles.image} />
                <span className={styles.imageLabel}>จากคลังบทความ EVSELECT</span>
              </div>
              <div className={styles.copy}>
                <div>
                  <p className={styles.eyebrow}>{slide.eyebrow}</p>
                  <p className={styles.brand}>{slide.brand}</p>
                  <h3 className={styles.model}>{slide.model}</h3>
                  <p className={styles.description}>{slide.description}</p>
                </div>
                <Link href={`/articles/${slide.slug}`} prefetch={false} className={styles.cta} aria-label={`อ่านรีวิว ${slide.brand} ${slide.model}`}>
                  อ่านรีวิวฉบับเต็ม <ArrowUpRight size={19} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.controls}>
          <div className={styles.selectors} aria-label="เลือกสไลด์รถ">
            {slides.map((slide, index) => (
              <button key={slide.slug} type="button" className={styles.selector} aria-current={active === index ? "true" : undefined} aria-label={`แสดง ${slide.brand} ${slide.model}`} aria-controls="vehicle-showcase-track" onClick={() => selectSlide(index)}>
                <span className={styles.marker} aria-hidden="true" /><span>{slide.brand} {slide.model}</span>
              </button>
            ))}
          </div>
          <div className={styles.arrows}>
            <span className={styles.counter} aria-hidden="true">0{active + 1}<span> / 0{slides.length}</span></span>
            {!reducedMotion && <button type="button" data-rotation-control className={styles.iconButton} aria-label={playing ? "หยุดสไลด์อัตโนมัติ" : "เล่นสไลด์อัตโนมัติ"} onClick={() => setPaused(playing)}>{playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}</button>}
            <button type="button" className={styles.iconButton} aria-label="รถคันก่อนหน้า" aria-controls="vehicle-showcase-track" onClick={() => selectSlide(active - 1)}><ChevronLeft size={21} aria-hidden="true" /></button>
            <button type="button" className={styles.iconButton} aria-label="รถคันถัดไป" aria-controls="vehicle-showcase-track" onClick={() => selectSlide(active + 1)}><ChevronRight size={21} aria-hidden="true" /></button>
          </div>
          <p className="sr-only" aria-live={playing ? "off" : "polite"} aria-atomic="true">{slides[active].brand} {slides[active].model} สไลด์ {active + 1} จาก {slides.length}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.caption}>ภาพประกอบจากบทความ อุปกรณ์ในภาพอาจต่างจากรุ่นที่จำหน่ายในไทย</p>
        <details className={styles.more}>
          <summary>ดูรถทุกรุ่นที่มีบทความ <ChevronDown size={17} aria-hidden="true" /></summary>
          <nav aria-label="บทความรถทั้ง 11 รุ่น" className={styles.modelLinks}>
            {guides.map((guide) => <Link key={guide.slug} href={`/articles/${guide.slug}`} prefetch={false}>{guide.label}<ArrowUpRight size={14} aria-hidden="true" /></Link>)}
          </nav>
        </details>
      </div>
    </div>
  );
}
