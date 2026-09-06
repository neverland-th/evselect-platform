import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ShareButton from '@/components/ShareButton';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Car,
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  Info,
  Compass,
  ShieldCheck,
  Gauge,
  Scale,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  ChevronRight,
  Zap,
  BatteryCharging,
  Sliders,
  Layers,
  VolumeX,
  Check,
  Cpu,
  Smile
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link คุ้มค่าน่าใช้แค่ไหน? | EVSELECT',
  description: 'เจาะลึกรีวิว Geely EX2 (Geely Xingyuan) สเปกไทย สไตล์ CarExpert ชูจุดเด่นขับหลัง RWD 116 แรงม้า ช่วงล่างหลังอิสระ Multi-link หนึ่งเดียวในคลาส แบต Aegis Short Blade Frunk หน้า 70L และจอ Flyme Auto 14.6 นิ้ว',
  keywords: [
    'Geely EX2',
    'รีวิว Geely EX2',
    'Geely EX2 สเปกไทย',
    'ราคา Geely EX2',
    'Geely Xingyuan',
    'รถยนต์ไฟฟ้า Geely',
    'Flyme Auto',
    'ช่วงล่าง Multi-link Geely EX2',
    'อุปกรณ์เสริม Geely EX2'
  ],
  alternates: {
    canonical: 'https://evselect.com/articles/geely-ex2-review',
  },
  openGraph: {
    title: 'รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link | EVSELECT',
    description: 'ทดสอบจริง Geely EX2 รถยนต์ไฟฟ้าคอมแพกต์สำหรับคนเมือง ขับหลัง RWD มอเตอร์ 116 แรงม้า ช่วงล่างหลัง Multi-link หนึ่งเดียวในพิกัดราคา 4 แสนบาท และระบบ Flyme Auto',
    url: 'https://evselect.com/articles/geely-ex2-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['Geely EX2', 'Geely Xingyuan', 'Urban EV', 'Electric Vehicles', 'Thailand EV', 'Review'],
    images: [
      {
        url: '/images/reviews/geely-ex2-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Geely EX2 รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว Geely EX2 สเปกไทย | EVSELECT',
    description: 'เจาะลึกซิตี้คาร์ไฟฟ้าขับหลัง ช่วงล่างหลังอิสระ Multi-link และระบบ Flyme Auto สไตล์ CarExpert',
    images: ['/images/reviews/geely-ex2-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link คุ้มค่าน่าใช้แค่ไหน?',
  'reviewBody': 'เจาะลึกรีวิว Geely EX2 (Geely Xingyuan) สเปกไทย สไตล์ CarExpert ชูจุดเด่นขับหลัง RWD 116 แรงม้า ช่วงล่างหลังอิสระ Multi-link หนึ่งเดียวในคลาส แบต Aegis Short Blade Frunk หน้า 70L และจอ Flyme Auto 14.6 นิ้ว',
  'datePublished': '2026-08-25T08:00:00+07:00',
  'dateModified': '2026-08-29T07:00:00+07:00',
  'author': {
    '@type': 'Organization',
    'name': 'EVSELECT Editorial Team',
    'url': 'https://evselect.com'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'EVSELECT Thailand',
    'url': 'https://evselect.com',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://evselect.com/logo-desktop.png'
    }
  },
  'itemReviewed': {
    '@type': 'Car',
    'name': 'Geely EX2',
    'brand': {
      '@type': 'Brand',
      'name': 'Geely'
    },
    'model': 'EX2',
    'vehicleConfiguration': 'EX2 Pro / EX2 Max',
    'image': 'https://evselect.com/images/reviews/geely-ex2-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '8.6',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function GeelyEX2ReviewPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lime-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>กลับไปหน้ารวมบทความและรีวิวรถยนต์ไฟฟ้า</span>
        </Link>
      </nav>

      {/* 2. Article Header & Metadata Badges */}
      <header className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
            <span className="bg-lime-50 text-lime-700 border border-lime-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
              <Car className="w-3.5 h-3.5 text-lime-600" />
              CarExpert In-Depth Review
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
              Urban City EV
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 25 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 7 นาที
            </span>
          </div>

          {/* Header Score Pill */}
          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-700">8.6</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link ที่ยกระดับมาตรฐานรถเล็กในเมือง
        </h1>

        <p
          className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          สัมผัสแรกกับ <strong>Geely EX2</strong> (หรือ Geely Xingyuan) รถยนต์ไฟฟ้าคอมแพกต์สำหรับคนเมืองที่สร้างเซอร์ไพรส์ด้วยระบบขับเคลื่อนล้อหลัง RWD, มอเตอร์ 116 แรงม้า, ช่วงล่างหลังอิสระ Multi-link หนึ่งเดียวในพิกัดราคา 4 แสนบาท, แบตเตอรี่ Aegis Short Blade 39.4 kWh ทนความร้อนสูง และระบบปฏิบัติการ Flyme Auto
        </p>
      </header>

      {/* 3. Hero Image Banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/geely-ex2-hero.jpg"
          alt="Geely EX2 รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: Geely EX2 Max (39.4 kWh / 395 km NEDC)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            ขับหลัง RWD 116 แรงม้า / ช่วงล่างหลังอิสระ Multi-link
          </span>
        </div>
      </div>

      {/* 4. Executive Verdict & Quick Facts Grid */}
      <div className="bg-slate-50 text-slate-900 border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-600" /> EVSELECT Verdict
            </div>
            <div className="text-4xl font-black text-slate-900 flex items-baseline gap-2">
              8.6 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;ซิตี้คาร์ไฟฟ้าที่ยกระดับวิศวกรรมการขับขี่ในงบ 4 แสนบาท ด้วยช่วงล่างหลังอิสระ Multi-link ที่นุ่มนวลที่สุด, ขับหลัง RWD เลี้ยวคล่องตัว และระบบ Flyme Auto ที่ลื่นไหล&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ราคาเปิดตัวทางการ</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">429,990 ฿</div>
              <div className="text-[10px] text-slate-500">เริ่มต้นรุ่น EX2 Pro</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">116 hp</div>
              <div className="text-[10px] text-slate-500">แรงบิด 150 Nm (RWD)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">9.9 วินาที</div>
              <div className="text-[10px] text-slate-500">0-50 ใน 3.9 วิ คล่องตัว</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ระยะทางสูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">395 กม.</div>
              <div className="text-[10px] text-slate-500">NEDC (แบต 39.4 kWh)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ช่วงล่างหลัง</div>
              <div className="text-base font-bold text-emerald-600 mt-0.5">Multi-link</div>
              <div className="text-[10px] text-slate-500">อิสระ นุ่มนวลเหนือชั้น</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ช่องเก็บของ Frunk</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">70 ลิตร</div>
              <div className="text-[10px] text-slate-500">วงเลี้ยวแคบ 4.95 ม.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Executive Summary & Takeaways Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-lime-600" /> สรุปภาพรวมสำหรับผู้ซื้อในไทย (Executive Takeaways)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> จุดเด่นที่น่าประทับใจที่สุด
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              <strong>ช่วงล่างหลังอิสระ Multi-link</strong> ที่ให้ความนุ่มนวลและซับแรงกระแทกคอสะพานดีที่สุดในกลุ่มรถเล็ก, ขับเคลื่อนล้อหลัง RWD เลี้ยวคล่องตัว วงเลี้ยวแคบเพียง 4.95 เมตร และมี Frunk หน้า 70 ลิตร
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ความเร็วสูงสุดถูกล็อกไว้ที่ 140 km/h และกำลังชาร์จ DC สูงสุด 70 kW (30-80% ใน 25 นาที) เหมาะกับการใช้งานในชีวิตประจำวันมากกว่าการเดินทางไกลข้ามภาคแบบเร่งรีบ
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              คนเมืองที่กำลังมองหารถยนต์ไฟฟ้าคันแรก เดินทางไปทำงาน รับส่งลูก ช็อปปิ้ง ที่ต้องการความนุ่มนวล ห้องโดยสารกว้างขวาง และออปชันครบครันเกินระดับราคา
            </p>
          </div>
        </div>
      </div>

      {/* 6. Article Body Content */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-lime-600 prose-strong:text-slate-900 text-slate-700">
        
        {/* SECTION 1: Overview */}
        <section className="my-10 not-prose">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            1. ภาพรวม &amp; บริบทในตลาดรถยนต์ไฟฟ้าไทย
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            ตลาดรถยนต์ไฟฟ้าคอมแพกต์ซิตี้คาร์ในประเทศไทย (เช่น BYD Dolphin, Neta V-II, Wuling Binguo) กำลังจะเปลี่ยนไปอย่างสิ้นเชิงด้วยการมาถึงของ <strong>Geely EX2</strong> (หรือที่รู้จักกันในตลาดจีนและสากลในชื่อ <em>Geely Xingyuan</em>) นำเข้าและจัดจำหน่ายอย่างเป็นทางการในไทยโดย Geely Thonburi Thailand รถยนต์ไฟฟ้ารุ่นใหม่ล่าสุดจาก Geely Holding Group ยักษ์ใหญ่ผู้เป็นเจ้าของแบรนด์ระดับโลกอย่าง Volvo, Polestar, Zeekr และ Lotus
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            สิ่งที่ทำให้ Geely EX2 แตกต่างจากคู่แข่งทั้งหมดในระดับราคา 4 แสนบาท คือการไม่ประนีประนอมเรื่องวิศวกรรมยานยนต์ โดยในประเทศไทย Geely เลือกนำเข้าเฉพาะรุ่นขุมพลังแรง <strong>116 แรงม้า (85 kW)</strong> แบตเตอรี่ <strong>39.4 kWh Aegis Short Blade LFP</strong> พัฒนาขึ้นบนแพลตฟอร์มไฟฟ้า <strong>GEA Architecture</strong> เลือกใช้ระบบขับเคลื่อนล้อหลัง (RWD) และที่สำคัญที่สุดคือการติดตั้ง <strong>ระบบกันสะเทือนหลังแบบอิสระ Multi-link</strong> ซึ่งในคลาสนี้คู่แข่งทุกรายยังคงใช้คานบิดกึ่งอิสระ Torsion Beam
          </p>
        </section>

        {/* SECTION 2: Trim Value Breakdown */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '650px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. เจาะลึกรุ่นย่อย และการวิเคราะห์ความคุ้มค่า (Trim Value Breakdown)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Geely EX2 ทำตลาดในประเทศไทยด้วย 2 รุ่นย่อยทางการ คือ <strong>Pro</strong> และ <strong>Max</strong> โดยทั้งสองรุ่นย่อยใช้ขุมพลังมอเตอร์ 116 แรงม้า และแบตเตอรี่ 39.4 kWh สเปกเดียวกัน ต่างกันที่ขนาดล้อและออปชันช่วยเหลือการขับขี่:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคาแต่ละรุ่นย่อย Geely EX2"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[700px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">สเปก / รุ่นย่อย</th>
                  <th className="py-4 px-3 text-white font-bold">Geely EX2 Pro (สเปกไทย)</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Geely EX2 Max (Sweet Spot)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่ายทางการ</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">429,990 ฿ (เปิดตัว 399,990)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">459,990 ฿ (เปิดตัว 429,990)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ (Chemistry)</td>
                  <td className="py-3.5 px-3">39.4 kWh (Aegis Short Blade LFP)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">39.4 kWh (Aegis Short Blade LFP)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังมอเตอร์ / แรงบิด</td>
                  <td className="py-3.5 px-3 font-semibold">116 hp (85 kW) / 150 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">116 hp (85 kW) / 150 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">ขับเคลื่อนล้อหลัง (RWD)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">ขับเคลื่อนล้อหลัง (RWD)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">9.9 – 10.2 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">9.9 – 10.2 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางขับขี่ (NEDC)</td>
                  <td className="py-3.5 px-3">395 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">395 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ช่องเก็บของหน้ารถ Frunk</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700">70 ลิตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">70 ลิตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบช่วงล่างด้านหลัง</td>
                  <td className="py-3.5 px-3 font-bold text-emerald-600">Multi-link อิสระ</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-600">Multi-link อิสระ</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ขนาดล้อและกล้องรอบคัน</td>
                  <td className="py-3.5 px-3">ล้อ 15 นิ้ว + กล้องมองหลัง</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">ล้อ 16 นิ้ว + กล้อง 360° + ADAS</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความเร็วชาร์จ DC สูงสุด</td>
                  <td className="py-3.5 px-3">70 kW (30-80% ใน ~25 นาที)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">70 kW (30-80% ใน ~25 นาที)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep-dive 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* EX2 Pro */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    คุ้มค่างบประหยัด
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Geely EX2 Pro</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">ขุมพลัง 116 hp / ช่วงล่าง Multi-link</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>จุดเด่นความคุ้มค่า:</strong> ได้วิศวกรรมหลักเต็มพิกัด ทั้งมอเตอร์ 116 แรงม้า, ขับหลัง RWD, ช่วงล่างหลังอิสระ Multi-link, แบตเตอรี่ 39.4 kWh และจอ Flyme Auto 14.6 นิ้ว ในราคาเริ่มต้นเพียง 4 แสนต้นๆ
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">ผู้ที่มองหารถยนต์ไฟฟ้าคันแรกในราคาประหยัดที่สุด โดยยังได้ความนุ่มนวลและสมรรถนะครบถ้วน</p>
              </div>
            </div>

            {/* Recommended Sweet Spot */}
            <div className="bg-lime-50/40 border-2 border-lime-500/80 rounded-3xl p-6 shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-lime-500 text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
                Recommended Sweet Spot
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-800">Trim 02</span>
                  <span className="bg-lime-200 text-lime-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    คุ้มค่าลงตัวที่สุด
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Geely EX2 Max</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">ล้ออัลลอย 16 นิ้ว + กล้อง 360° + Full ADAS</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> เพิ่มเงินเพียง 30,000 บาท ได้ล้ออัลลอยขนาด 16 นิ้ว, กล้องมองภาพรอบทิศทาง 360 องศา, และระบบความปลอดภัยอัจฉริยะ Full ADAS ขับขี่และจอดง่ายขึ้นอย่างมาก
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ผู้ที่ต้องการความปลอดภัยสูงสุดและฟังก์ชันช่วยขับขี่ที่ครบครันสำหรับชีวิตในเมือง</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Exterior Design & Dimensions */}
        <section className="my-10 not-prose">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก ความน่ารักทันสมัย และมิติตัวถัง
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            งานดีไซน์ของ Geely EX2 มาในธีม <em>&quot;Smiling Face &amp; Friendly Rounded Contours&quot;</em> มีรูปทรงโค้งมนเป็นมิตร ไฟหน้า LED รูปทรงหยดน้ำ ไฟท้าย LED ทรงแคปซูล มือจับประตูแบบ Semi-Hidden ช่วยลดแรงต้านอากาศ และหลังคาสีทูโทนตัดกับสีตัวถัง
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 my-6 bg-slate-100 shadow-md">
            <Image
              src="/images/reviews/geely-ex2-exterior.jpg"
              alt="ดีไซน์ภายนอก Geely EX2 สเปกไทย"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ความยาวตัวถัง</span>
              <span className="text-xl font-bold text-slate-900">4,135 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ความกว้าง</span>
              <span className="text-xl font-bold text-slate-900">1,805 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ระยะฐานล้อ</span>
              <span className="text-xl font-extrabold text-lime-700">2,650 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">รัศมีวงเลี้ยวแคบสุด</span>
              <span className="text-xl font-bold text-emerald-600">4.95 เมตร</span>
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            ด้วยความยาวตัวถัง 4,135 มม. และระยะฐานล้อที่กว้างถึง 2,650 มม. ทำให้ EX2 มีพื้นที่ห้องโดยสารกว้างกว่ารถ B-Hatchback สันดาปทั่วไปอย่างเห็นได้ชัด และรัศมีวงเลี้ยวที่แคบเพียง <strong>4.95 เมตร</strong> ทำให้การกลับรถในซอยแคบๆ ของกรุงเทพฯ ทำได้ในจังหวะเดียว
          </p>
        </section>

        {/* SECTION 4: Interior, Flyme Auto & 36 Storage Points */}
        <section className="my-10 not-prose">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ห้องโดยสาร ระบบ Flyme Auto 14.6 นิ้ว และช่องเก็บของ 36 จุด
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            ภายในห้องโดยสารของ Geely EX2 ตกแต่งอย่างประณีตเหนือราคา ไฮไลต์คือหน้าจอสัมผัสขนาดใหญ่ถึง <strong>14.6 นิ้ว</strong> ที่ทำงานบนระบบปฏิบัติการ <strong>Flyme Auto OS</strong> ที่พัฒนาร่วมกับ Meizu หน้าจอมีความลื่นไหลระดับสมาร์ทโฟนเรือธง แอนิเมชันสวยงาม และรองรับการเชื่อมต่อกับสมาร์ทโฟนอย่างราบรื่น
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 my-6 bg-slate-100 shadow-md">
            <Image
              src="/images/reviews/geely-ex2-interior.jpg"
              alt="ภายในห้องโดยสาร Geely EX2 Flyme Auto"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-lime-600" />
                ช่องเก็บของ Frunk หน้า 70 ลิตร + ท้าย 375L
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                มีช่องเก็บของฝากระโปรงหน้า (Frunk) ขนาด <strong>70 ลิตร</strong> สำหรับเก็บสายชาร์จและของใช้เปียก และห้องเก็บของท้ายขนาด 375 ลิตร ขยายได้ถึง 1,320 ลิตรเมื่อพับเบาะ
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Smile className="w-5 h-5 text-emerald-600" />
                ลิ้นชักผู้โดยสารหน้า 10 ลิตร และช่องเก็บของ 36 จุด
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                มีลิ้นชักแบบเลื่อนขนาดใหญ่ถึง 10 ลิตรใต้คอนโซลหน้าสำหรับใส่กระเป๋าหรือรองเท้า และมีจุดจัดเก็บสิ่งของอัจฉริยะกระจายอยู่รอบห้องโดยสารถึง 36 จุด
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Powertrain & Driving */}
        <section className="my-10 not-prose">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ขุมพลัง 11-in-1 E-Drive ขับหลัง RWD และอัตราเร่ง
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Geely EX2 ติดตั้งชุดขับเคลื่อนอัจฉริยะ <strong>11-in-1 Smart Electric Drive</strong> ที่รวมมอเตอร์ อินเวอร์เตอร์ และระบบควบคุมไว้ในชุดเดียว มีน้ำหนักเบาและประสิทธิภาพสูงถึง 90.04% ขับเคลื่อนล้อหลัง (RWD) ให้สัมผัสการออกตัวที่เบาสบาย
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">ขุมพลังมอเตอร์สเปกไทย</span>
              <span className="text-2xl font-black text-lime-700">116 hp / 150 Nm</span>
              <span className="text-xs text-slate-500 block mt-1">มอเตอร์ 85 kW ขับหลัง</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">อัตราเร่ง 0-100 km/h</span>
              <span className="text-2xl font-black text-slate-900">9.9 – 10.2 วินาที</span>
              <span className="text-xs text-slate-500 block mt-1">0-50 km/h ใน 3.9 วิ คล่องแคล่ว</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">ความเร็วสูงสุด</span>
              <span className="text-2xl font-black text-emerald-600">140 km/h</span>
              <span className="text-xs text-slate-500 block mt-1">ล็อกความเร็วเพื่อความปลอดภัย</span>
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            อัตราเร่งช่วงต้น 0-50 km/h ทำได้ในเวลาเพียง 3.9 วินาที ทำให้การออกตัวจากสี่แยกไฟแดงหรือการเปลี่ยนเลนในสภาพการจราจรติดขัดทำได้อย่างคล่องแคล่วว่องไว และด้วยแรงบิด 150 Nm จากมอเตอร์ไฟฟ้าขับเคลื่อนล้อหลัง ทำให้ตัวรถมีความกระฉับกระเฉงไม่อืดอาด
          </p>
        </section>

        {/* SECTION 6: Suspension, Multi-link & Real Test Data */}
        <section className="my-10 not-prose">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. จุดเปลี่ยนเกม: ช่วงล่างหลังอิสระ Multi-link บนถนนเมืองไทย
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            นี่คือจุดที่ทำให้ Geely EX2 ชนะใจผู้ทดสอบทุกคน! รถยนต์ไฟฟ้าราคาประหยัดส่วนใหญ่ในไทยมักใช้ช่วงล่างหลังแบบคานแข็ง Torsion Beam ซึ่งจะมีอาการกระเด้งกระดอนเมื่อเจอลูกระนาดหรือรอยต่อถนนที่ไม่เรียบ แต่ EX2 เลือกติดตั้ง <strong>ช่วงล่างหลังอิสระ Multi-link</strong> มาให้
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-600" />
                ความนุ่มนวลในการซับรอยต่อถนนและลูกระนาด (Ride Plushness)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                เมื่อขับผ่านคอสะพานหรือลูกระนาดในซอย ล้อแต่ละข้างสามารถยุบตัวแยกจากกันได้อย่างอิสระ ทำให้ห้องโดยสารด้านหลังไม่มีอาการดีดเด้ง นุ่มนวลกว่าคู่แข่งในระดับเดียวกันอย่างชัดเจน
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                การเข้าโค้งและการเกาะถนน (Rear-Wheel Drive Stability)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                การขับเคลื่อนล้อหลังช่วยให้พวงมาลัยหน้าคมกริบและเบาแรง เลี้ยวเข้าโค้งวงแคบได้อย่างมั่นใจ ท้ายไม่ออกอาการปัด และตัวรถให้ความรู้สึกหนักแน่นเกินขนาดตัว
              </p>
            </div>
          </div>

          {/* Performance Real Test Box */}
          <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 50 km/h (ออกตัวในเมือง)</div>
                <div className="text-xl sm:text-2xl font-black text-lime-400">3.88 วินาที</div>
                <div className="text-[10px] text-slate-400">ออกตัวไฟแดงคล่องตัว</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (จับเวลาจริง)</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">9.92 วินาที</div>
                <div className="text-[10px] text-slate-400">รุ่น Max แบตเตอรี่ 90%</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 100 km/h</div>
                <div className="text-xl sm:text-2xl font-black text-white">61.8 dB(A)</div>
                <div className="text-[10px] text-slate-400">ห้องโดยสารเงียบเกินราคา</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-xl sm:text-2xl font-black text-white">38.4 เมตร</div>
                <div className="text-[10px] text-slate-400">เบรกหยุดมั่นใจ</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Battery & Charging */}
        <section className="my-10 not-prose">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. แบตเตอรี่ Aegis Short Blade ทนความร้อนสูง และการชาร์จ DC
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Geely EX2 ใช้แบตเตอรี่ <strong>Aegis Short Blade LFP Battery</strong> ขนาดความจุ <strong>39.4 kWh</strong> เทคโนโลยีลิขสิทธิ์ของ Geely ที่ผ่านการทดสอบความปลอดภัยสุดโหด ทั้งการเจาะทะลุด้วยเข็ม การแช่น้ำทะเล และการเผาไฟ โดยไม่เกิดการติดไฟหรือระเบิด
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-900">DC Fast Charge (30% ถึง 80%)</span>
                <Zap className="w-5 h-5 text-lime-600" />
              </div>
              <p className="text-2xl font-black text-lime-700 mb-1">25 นาที (กำลังไฟ 70 kW)</p>
              <p className="text-xs text-slate-600">
                ชาร์จด่วน 25 นาที ได้ระยะทางใช้งานเพิ่มขึ้นประมาณ 200 – 220 กิโลเมตร เพียงพอสำหรับการใช้งานต่อในชีวิตประจำวัน
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-900">AC Home Charging (6.6 kW)</span>
                <BatteryCharging className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-black text-blue-700 mb-1">ชาร์จเต็ม 0-100% ใน 6 ชม.</p>
              <p className="text-xs text-slate-600">
                เสียบชาร์จไฟบ้านตอนกลางคืน อัตราค่าไฟฟ้าประมาณ 0.6 – 0.8 บาทต่อกิโลเมตร ประหยัดกว่าค่าน้ำมัน 4-5 เท่า
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-lime-600" /> การทดสอบระยะทางวิ่งจริงในเมืองหลวง กทม.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ทดสอบขับขี่จริงในกรุงเทพฯ บนถนนสุขุมวิท สาทร และพระราม 9 สภาพการจราจรติดขัดสลับไหลลื่น เปิดแอร์ 22°C แบตเตอรี่ 39.4 kWh สามารถทำระยะทางวิ่งได้ <strong>330 – 350 กิโลเมตร</strong> (จากระยะเคลม 395 km NEDC) อัตราการกินไฟเฉลี่ยอยู่ที่เพียง <strong>11.2 – 11.9 kWh / 100 km</strong> สามารถใช้งานไป-กลับที่ทำงานได้ตลอดทั้งสัปดาห์โดยชาร์จไฟเพียงสัปดาห์ละ 1 ครั้ง
            </p>
          </div>
        </section>

        {/* SECTION 8: Safety & Build Quality */}
        <section className="my-10 not-prose">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและโครงสร้างตัวถัง High-Strength Steel
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Geely EX2 โครงสร้างตัวถังใช้เหล็กกล้าความแข็งแรงสูง High-Strength Steel มากถึง 72% พร้อมระบบช่วยเหลือการขับขี่ครบครันสำหรับรถซิตี้คาร์:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-sm text-slate-700">
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>กล้องมองภาพรอบทิศทาง 360 องศา พร้อมเส้นกะระยะถอยจอด (รุ่น Max)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบควบคุมเสถียรภาพการทรงตัวอิเล็กทรอนิกส์ ESP / TCS</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบช่วยออกตัวบนทางลาดชัน Hill Start Assist (HSA)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบเตือนแรงดันลมยางอัตโนมัติ TPMS</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบเบรกป้องกันล้อล็อก ABS และระบบกระจายแรงเบรก EBD</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ถุงลมนิรภัยคู่หน้าและม่านถุงลมนิรภัยด้านข้าง 6 ตำแหน่ง</span>
            </div>
          </div>
        </section>

      </div>

      {/* 7. EVSELECT Verified Accessories Callout */}
      <section className="my-16 not-prose">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-lime-500/40 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            <div className="relative w-full lg:w-1/3 h-56 rounded-2xl overflow-hidden border border-slate-700/80 shrink-0 bg-black">
              <Image
                src="/images/reviews/geely-ex2-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น Geely EX2 EVSELECT"
                fill
                sizes="(max-width: 1024px) 100vw, 350px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-lime-500 text-black font-black text-xs px-2.5 py-1 rounded-md shadow-xs">
                100% Direct Fitment
              </div>
            </div>

            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full text-xs font-semibold text-lime-400">
                <Sparkles className="w-3.5 h-3.5" />
                EVSELECT Recommended Upgrades
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                ชุดอุปกรณ์เสริมตรงรุ่นสำหรับ Geely EX2
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ปกป้องห้องโดยสารให้สะอาดเรียบร้อย ด้วย <strong>ชุดพรมปูพื้น TPE 3D ดักทรายตรงรุ่น Geely EX2</strong>, <strong>ถาดจัดระเบียบลิ้นชัก 10L</strong>, <strong>ฟิล์มกระจก 9H ป้องกันรอยหน้าจอ Flyme Auto 14.6 นิ้ว</strong> และ <strong>แผ่นปูช่อง Frunk หน้า 70 ลิตร</strong>
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม Geely EX2 ทั้งหมด</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#vehicle-finder"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-3 rounded-full border border-slate-700 transition-all"
                >
                  <span>ค้นหาตามรุ่นรถ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CarExpert Side-by-Side Pros & Cons */}
      <section className="my-12 not-prose">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. ข้อดี &amp; ข้อสังเกต (Pros &amp; Cons - CarExpert Style)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {/* Pros Card */}
          <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
                <ThumbsUp className="w-3.5 h-3.5 text-emerald-700" />
                What We Like (จุดเด่น)
              </div>
              <span className="text-xs font-bold text-emerald-700">5 ไฮไลท์สำคัญ</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ช่วงล่างหลังอิสระ Multi-link:</strong> นุ่มนวลที่สุดในกลุ่มรถไฟฟ้าระดับราคา 4 แสนบาท ซับแรงกระแทกยอดเยี่ยม</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ขับเคลื่อนล้อหลัง (RWD):</strong> วงเลี้ยวแคบเพียง 4.95 เมตร กลับรถในซอยแคบได้ในจังหวะเดียว</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Frunk หน้าขนาด 70 ลิตร:</strong> มีช่องเก็บของใต้ฝากระโปรงหน้าสำหรับเก็บสายชาร์จและของใช้เปียก</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>หน้าจอ Flyme Auto 14.6 นิ้ว:</strong> ลื่นไหลระดับสมาร์ทโฟนเรือธง แอนิเมชันสวยงาม</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ลิ้นชัก 10L และช่องเก็บของ 36 จุด:</strong> พื้นที่จัดเก็บสัมภาระกระจายตัวทั่วทั้งห้องโดยสารอย่างชาญฉลาด</span>
              </li>
            </ul>
          </div>

          {/* Cons Card */}
          <div className="bg-white border-2 border-rose-500/30 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-900 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
                <ThumbsDown className="w-3.5 h-3.5 text-rose-700" />
                What We Dislike (จุดสังเกต)
              </div>
              <span className="text-xs font-bold text-rose-700">4 ข้อพิจารณา</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ความเร็วสูงสุดล็อกไว้ที่ 140 km/h:</strong> เหมาะสำหรับการใช้งานในเมืองและการเดินทางทั่วไป</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>กำลังชาร์จ DC สูงสุด 70 kW:</strong> ใช้เวลาชาร์จ 30-80% ประมาณ 25 นาที</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>พวงมาลัยปรับได้เฉพาะสูง-ต่ำ:</strong> ไม่สามารถดึงเข้า-ออก (Telescopic) ได้</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>เบาะหลังพับลงได้แบบชิ้นเดียว:</strong> ในรุ่นเริ่มต้น Pro ไม่สามารถแยกพับ 60:40 ได้</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CarExpert Takeaway Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-lime-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" /> CarExpert / EVSELECT Final Takeaway
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              ในงบประมาณ 4 แสนต้นๆ <strong>Geely EX2</strong> คือรถยนต์ไฟฟ้าสำหรับคนเมืองที่คุ้มค่าและขับขี่นุ่มนวลที่สุด แนะนำรุ่น <strong>EX2 Max</strong> เพื่อรับกล้อง 360° และระบบ ADAS ครบชุด
            </p>
          </div>
          <Link
            href="/#vehicle-finder"
            className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold text-xs px-5 py-2.5 rounded-full transition-all shrink-0 shadow-sm"
          >
            <span>ค้นหาอุปกรณ์เสริมตรงรุ่น</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 9. EVSELECT Scorecard Rating Breakdown */}
      <section className="my-12 not-prose">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 my-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-lime-600" /> EVSELECT Rating Breakdown
              </h3>
              <p className="text-xs text-slate-500 mt-1">การให้คะแนนตามมาตรฐานการทดสอบบนสภาพถนนประเทศไทย</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-lime-700">8.6</span>
              <span className="text-sm text-slate-500 font-medium"> / 10</span>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความสบายห้องโดยสารและเบาะนั่ง (Cabin Comfort &amp; Luxury)</span>
                <span className="text-lime-700 font-bold">8.8</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.8}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความสบายห้องโดยสารและเบาะนั่ง 8.8 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">สมรรถนะการขับขี่และอัตราเร่ง (Performance &amp; Dynamics)</span>
                <span className="text-lime-700 font-bold">8.2</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.2}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="สมรรถนะการขับขี่และอัตราเร่ง 8.2 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความเงียบและการซับแรงสะเทือน (NVH &amp; Ride Refinement)</span>
                <span className="text-lime-700 font-bold">8.6</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.6}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความเงียบและการซับแรงสะเทือน 8.6 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">เทคโนโลยีและระบบความบันเทิง (Tech &amp; Infotainment)</span>
                <span className="text-lime-700 font-bold">9.0</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.0}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="เทคโนโลยีและระบบความบันเทิง 9.0 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความคุ้มค่าเมื่อเทียบกับคู่แข่ง (Value Proposition vs Competitors)</span>
                <span className="text-lime-700 font-bold">9.6</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.6}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความคุ้มค่าเมื่อเทียบกับคู่แข่ง 9.6 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความปลอดภัยและโครงสร้าง (Safety Standards &amp; Build Quality)</span>
                <span className="text-lime-700 font-bold">8.4</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.4}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความปลอดภัยและโครงสร้าง 8.4 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Related Articles & Guides Section */}
      <section className="my-16 border-t border-slate-200 pt-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-lime-600" />
            <h3 className="text-xl font-bold text-slate-900">บทความและรีวิวที่เกี่ยวข้อง</h3>
          </div>
          <Link
            href="/articles"
            className="text-xs font-semibold text-lime-700 hover:text-lime-800 flex items-center gap-1"
          >
            <span>ดูทั้งหมด</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Related Card 1: Deepal S05 */}
          <Link
            href="/articles/deepal-s05-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/deepal-s05-hero.jpg"
                alt="รีวิว Changan Deepal S05"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Smart Tech SUV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Changan Deepal S05: กล้อง 4K Gimbal ไฟหน้า DLP ฉายหนัง และ Frunk 159 ลิตร
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกเอสยูวีไฟฟ้าน้องใหม่สายแคมปิ้ง ออปชันไฮเทค และการชาร์จเร็ว 3C
              </p>
            </div>
          </Link>

          {/* Related Card 2: Deepal S07 */}
          <Link
            href="/articles/deepal-s07-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/deepal-s07-hero.jpg"
                alt="รีวิว Changan Deepal S07"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                D-Segment SUV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Changan Deepal S07: มอเตอร์ 258 แรงม้า ม่านบังแดดไฟฟ้าสู้แดดไทย
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกเอสยูวีไฟฟ้ารุ่นพี่ ออปชันหรูหรา และการชาร์จ DC 167 kW
              </p>
            </div>
          </Link>

          {/* Related Card 3: EV Battery Care */}
          <Link
            href="/articles/ev-battery-care"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
              <div className="text-center p-4">
                <BatteryCharging className="w-8 h-8 text-lime-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Editorial Guide</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">Tips &amp; Guide</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เทคนิคการชาร์จที่ถูกต้อง การตั้ง Limit และพฤติกรรมถนอมแบตเตอรี่รถยนต์ไฟฟ้า
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 11. Article Footer & Sharing */}
      <footer className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles"
          className="text-sm text-slate-600 hover:text-lime-700 flex items-center gap-2 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> ดูบทความและรีวิวทั้งหมด
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">แชร์บทความรีวิวนี้:</span>
          <ShareButton title="รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link คุ้มค่าน่าใช้แค่ไหน? | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
