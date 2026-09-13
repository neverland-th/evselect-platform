"use client";

import Image from "next/image";
import { useState } from "react";
import desktop from "../../public/images/articles/damper-tuning-desktop.jpg";
import mobile from "../../public/images/articles/damper-tuning-mobile.jpg";

const alt =
  "โช้คแข็ง เกาะถนนขึ้นจริง? เข้าใจ Bump & Rebound ก่อนหมุนคลิก — EVSELECT";

export default function DamperArticleCover({ priority = false }: { priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const frame = "relative block w-full aspect-[1092/1440] md:aspect-[1672/941] bg-slate-950";

  if (failed) {
    return (
      <div className={`${frame} flex items-center justify-center p-6 text-center text-slate-200`} role="img" aria-label={alt}>
        <span className="text-sm">ไม่สามารถโหลดภาพปกบทความได้</span>
      </div>
    );
  }

  return (
    <picture className={frame}>
      <source
        media="(min-width: 768px)"
        srcSet={desktop.src}
        width={desktop.width}
        height={desktop.height}
      />
      <Image
        src={mobile}
        alt={alt}
        unoptimized
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 block h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </picture>
  );
}
