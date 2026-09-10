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
  Camera,
  Video
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว Deepal S05 สเปกไทย: เอสยูวีสายแคมปิ้ง-Vlog กล้อง 4K บนหลังคา ไฟหน้าฉายหนัง Frunk หน้า 159L | EVSELECT',
  description: 'เจาะลึกรีวิว Changan Deepal S05 สเปกไทย สไตล์ ครบทุกนวัตกรรม กล้อง 4K Gimbal Camera บนหลังคา ไฟหน้า DLP ฉายหนัง 120 นิ้ว แบตเตอรี่ LFP ชาร์จ 3C ใน 15 นาที และช่องเก็บของ Frunk 159 ลิตร',
  keywords: [
    'Deepal S05',
    'รีวิว Deepal S05',
    'Changan Deepal S05 สเปกไทย',
    'ราคา Deepal S05',
    'รถยนต์ไฟฟ้า Deepal',
    'Deepal S05 4K Gimbal',
    'DLP Projector Deepal S05',
    'Frunk 159L',
    'อุปกรณ์เสริม Deepal S05'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/deepal-s05-review',
  },
  openGraph: {
    title: 'รีวิว Deepal S05 สเปกไทย: เอสยูวีสายแคมปิ้ง-Vlog กล้อง 4K บนหลังคา ไฟหน้าฉายหนัง Frunk หน้า 159L | EVSELECT',
    description: 'ทดสอบจริง Changan Deepal S05 เอสยูวีไฟฟ้าสำหรับสายครีเอเตอร์และแคมปิ้ง อัดแน่นด้วยกล้อง 4K บนหลังคา ไฟหน้า DLP ฉายโปรเจกเตอร์ 120 นิ้ว มอเตอร์หลัง 238 แรงม้า และชาร์จ 3C ใน 15 นาที',
    url: 'https://evselects.com/articles/deepal-s05-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['Deepal S05', 'Changan Deepal', 'Electric Vehicles', 'Smart SUV', 'Camping EV', 'Review'],
    images: [
      {
        url: '/images/reviews/deepal-s05-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Changan Deepal S05 รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว Deepal S05 สเปกไทย | EVSELECT',
    description: 'เจาะลึกเอสยูวีสายแคมปิ้ง กล้อง 4K Gimbal ไฟหน้าฉายหนัง และ Frunk 159 ลิตร สไตล์ ',
    images: ['/images/reviews/deepal-s05-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว Deepal S05 สเปกไทย: เอสยูวีสายแคมปิ้ง-Vlog กล้อง 4K บนหลังคา ไฟหน้าฉายหนัง Frunk หน้า 159L',
  'reviewBody': 'เจาะลึกรีวิว Changan Deepal S05 สเปกไทย สไตล์ ครบทุกนวัตกรรม กล้อง 4K Gimbal Camera บนหลังคา ไฟหน้า DLP ฉายหนัง 120 นิ้ว แบตเตอรี่ LFP ชาร์จ 3C ใน 15 นาที และช่องเก็บของ Frunk 159 ลิตร',
  'datePublished': '2026-08-25T08:00:00+07:00',
  'dateModified': '2026-08-29T07:00:00+07:00',
  'author': {
    '@type': 'Organization',
    'name': 'EVSELECT Editorial Team',
    'url': 'https://evselects.com'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'EVSELECT Thailand',
    'url': 'https://evselects.com',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://evselects.com/logo-desktop.png'
    }
  },
  'itemReviewed': {
    '@type': 'Car',
    'name': 'Changan Deepal S05',
    'brand': {
      '@type': 'Brand',
      'name': 'Changan'
    },
    'model': 'Deepal S05',
    'vehicleConfiguration': 'Smart Tech Edition / Standard BEV',
    'image': 'https://evselects.com/images/reviews/deepal-s05-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '8.7',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function DeepalS05ReviewPage() {
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
              In-Depth Review
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
              Smart Tech &amp; Lifestyle SUV
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 25 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 8 นาที
            </span>
          </div>

          {/* Header Score Pill */}
          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-700">8.7</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Changan Deepal S05 สเปกไทย: เอสยูวีสายแคมปิ้ง-Vlog กล้อง 4K บนหลังคา ไฟหน้าฉายหนัง และ Frunk หน้า 159 ลิตร
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          ทดสอบจริง <strong>Changan Deepal S05</strong> เอสยูวีไฟฟ้าสำหรับสายครีเอเตอร์และครอบครัวยุคใหม่ อัดแน่นด้วยกล้อง 4K Gimbal Camera บนหลังคา ไฟหน้า DLP ฉายโปรเจกเตอร์ 120 นิ้ว มอเตอร์หลัง 238 แรงม้า ชาร์จ DC 3C เร็วสะใจ 15 นาที และช่องเก็บของหน้ารถใหญ่ที่สุดในโลก
        </p>
      </header>

      {/* 3. Hero Image Banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/deepal-s05-hero.jpg"
          alt="Changan Deepal S05 รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: Deepal S05 Smart Tech Edition (56.12 kWh)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            ขุมพลังขับหลัง RWD 238 แรงม้า / ชาร์จ 3C ใน 15 นาที
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
              8.7 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;เอสยูวีสายไลฟ์สไตล์และแคมปิ้งที่สร้างความแตกต่างอย่างแท้จริง ด้วยกล้อง 4K Gimbal บนหลังคา ไฟหน้าฉายโปรเจกเตอร์ 120 นิ้ว และ Frunk หน้า 159 ลิตรใหญ่ที่สุดในโลก&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ราคาเริ่มต้น</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">799,000 ฿</div>
              <div className="text-[10px] text-slate-500">รุ่น Standard BEV</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">238 hp</div>
              <div className="text-[10px] text-slate-500">แรงบิด 320 Nm (RWD)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">7.3 วินาที</div>
              <div className="text-[10px] text-slate-500">ความเร็วสูงสุด 180 km/h</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ระยะทางสูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">510 กม.</div>
              <div className="text-[10px] text-slate-500">NEDC (แบต 56.12 kWh)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ชาร์จเร็ว DC 3C</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">160 kW</div>
              <div className="text-[10px] text-slate-500">30-80% ในเพียง 15 นาที</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ความจุ Frunk หน้า</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">159 ลิตร</div>
              <div className="text-[10px] text-slate-500">ใหญ่ที่สุดในโลก</div>
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
              ฟังก์ชันไลฟ์สไตล์ไม่เหมือนใคร: กล้อง 4K Gimbal Camera บนหลังคา ถ่าย Vlog ท่องเที่ยวได้ทันใจ, ไฟหน้า DLP ฉายหนัง 120 นิ้ว และ <strong>Frunk หน้า 159 ลิตร</strong> ใหญ่ที่สุดในตลาด พร้อมการชาร์จเร็ว 3C ใน 15 นาที
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              หลังคากระจก Panoramic Glass Roof ไม่มีม่านบังแดดไฟฟ้าแบบรุ่นพี่ S07 (แนะนำให้ติดตั้งม่านกรองแสงเสริมสำหรับแดดเมืองไทย) และไม่มีหน้าจอมาตรวัดความเร็วหลังพวงมาลัย
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              สายท่องเที่ยว แคมปิ้ง คอนเทนต์ครีเอเตอร์ และครอบครัวรุ่นใหม่ที่ต้องการรถ EV อเนกประสงค์ ขับง่าย คล่องตัว พื้นที่เก็บสัมภาระจุใจ และมีลูกเล่นเทคโนโลยีใช้งานได้จริง
            </p>
          </div>
        </div>
      </div>

      {/* 6. Article Body Content */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-lime-600 prose-strong:text-slate-900 text-slate-700">
        
        {/* SECTION 1: Overview */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            1. ภาพรวม &amp; บริบทในตลาดรถยนต์ไฟฟ้าไทย
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            หลังจากความสำเร็จของรุ่นพี่อย่าง S07 และ L07 แบรนด์ DEEPAL ได้ส่ง <strong>Deepal S05</strong> ลงทำตลาดในกลุ่มรถยนต์ไฟฟ้าคอมแพกต์เอสยูวี โดยวางตำแหน่งให้เป็น <em>&quot;Smart Tech &amp; Lifestyle Companion SUV&quot;</em> ที่ออกแบบมาเพื่อตอบสนองไลฟ์สไตล์ของคนรุ่นใหม่ สายท่องเที่ยว แคมปิ้ง และนักสร้างคอนเทนต์อย่างแท้จริง
          </p>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed">
            แม้จะมีขนาดตัวถังที่กะทัดรัดกว่า S07 เล็กน้อย แต่ Deepal S05 มาพร้อมระยะฐานล้อที่ยาวถึง <strong>2,880 มม.</strong> ซึ่งกว้างขวางเทียบเท่ากับรถ D-SUV และยังมีนวัตกรรมที่ไม่เคยมีในรถยนต์ระดับราคานี้มาก่อน เช่น <strong>กล้อง 4K Gimbal Camera อัจฉริยะบนหลังคา</strong> ที่ถ่ายวิดีโอ 4K 120fps และไฟหน้า <strong>DLP Projector</strong> ที่สามารถฉายภาพยนตร์หรือเล่นเกมกลางแจ้งได้ทุกที่
          </p>
        </section>

        {/* SECTION 2: Trim Value Breakdown */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '650px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. เจาะลึกรุ่นย่อย และการวิเคราะห์ความคุ้มค่า (Trim Value Breakdown)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            ตารางรายละเอียดทางเทคนิคและรุ่นย่อยของ Deepal S05 ในประเทศไทย:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคาแต่ละรุ่นย่อย Deepal S05"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[700px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">สเปก / รุ่นย่อย</th>
                  <th className="py-4 px-3 text-white font-bold">Deepal S05 Standard BEV</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Deepal S05 Smart Tech Edition (Sweet Spot)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่าย (THB)</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">799,000 ฿</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">869,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ (Chemistry)</td>
                  <td className="py-3.5 px-3">56.12 kWh (LFP Golden Shield)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">56.12 kWh (LFP Golden Shield)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">กำลังมอเตอร์ / แรงบิด</td>
                  <td className="py-3.5 px-3">238 hp (175 kW) / 320 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">238 hp (175 kW) / 320 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">ขับเคลื่อนล้อหลัง (RWD)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">ขับเคลื่อนล้อหลัง (RWD)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3 font-semibold">7.3 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">7.3 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางขับขี่ (NEDC)</td>
                  <td className="py-3.5 px-3">470 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">510 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุช่องเก็บของหน้ารถ (Frunk)</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700">159 ลิตร (ใหญ่ที่สุด)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">159 ลิตร (ใหญ่ที่สุด)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ออปชันพิเศษ 4K Gimbal &amp; DLP</td>
                  <td className="py-3.5 px-3 text-slate-500">อุปกรณ์เสริมพิเศษ</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">ติดตั้งมาตรฐานจากโรงงาน</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความเร็วชาร์จ DC สูงสุด</td>
                  <td className="py-3.5 px-3">160 kW (3C ใน 15 นาที)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">160 kW (3C ใน 15 นาที)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep-dive 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Standard BEV */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    คุ้มค่างบประมาณ
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Deepal S05 Standard BEV</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">ขุมพลัง 238 hp / Frunk 159 ลิตร</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>จุดเด่นความคุ้มค่า:</strong> ได้มอเตอร์ขับหลัง 238 แรงม้า, แบตเตอรี่ LFP 56.12 kWh, ชาร์จเร็ว 3C, ช่องเก็บของหน้ารถ 159L และหน้าจอ Sunflower 15.4 นิ้ว ครบถ้วนในราคาเริ่มต้นที่จับต้องง่าย
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">ผู้ที่ต้องการรถยนต์ไฟฟ้าคอมแพกต์เอสยูวีกว้างขวาง สมรรถนะดี ชาร์จไว โดยไม่ต้องใช้กล้องบนหลังคา</p>
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
                    ฟูลออปชัน 4K Gimbal + DLP
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Deepal S05 Smart Tech Edition</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">กล้อง 4K Gimbal บนหลังคา + ไฟหน้า DLP 120&quot;</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> ติดตั้งนวัตกรรมเรือธงครบชุด ทั้งกล้อง 4K บนหลังคาสำหรับบันทึก Vlog, ไฟหน้า DLP ฉายโปรเจกเตอร์ และลำโพงภายนอกสำหรับแคมปิ้ง สนุกได้ทุกทริป
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">สายท่องเที่ยว แคมปิ้ง ครีเอเตอร์ และผู้ที่ต้องการเทคโนโลยีใหม่ล่าสุดที่ไม่เหมือนใคร</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Exterior Design & 4K Gimbal */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก นวัตกรรมกล้อง 4K Gimbal &amp; มิติตัวถัง
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            การออกแบบภายนอกของ Deepal S05 นำแรงบันดาลใจมาจากปีกเครื่องบินและยานอวกาศ (Interstellar Wing) ไฟหน้าแบบสองชั้นคมเฉียบ พร้อมระบบไฟหน้าโปรเจกเตอร์ <strong>DEEPAL Megapixel DLP Projector</strong> ที่สามารถฉายภาพยนตร์ วิดีโอ หรือข้อความความกว้างถึง 120 นิ้ว ลงบนผนังอาคารหรือพื้นถนนได้อย่างคมชัด
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 my-6 bg-slate-100 shadow-md">
            <Image
              src="/images/reviews/deepal-s05-exterior.jpg"
              alt="ดีไซน์ภายนอก Changan Deepal S05 สเปกไทย"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>

          {/* 4K Gimbal Feature Callout Card */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-5 my-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg">
            <div className="bg-lime-500 text-black p-3 rounded-2xl shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                นวัตกรรม 4K Smart Gimbal Camera บนหลังคา
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                กล้องกิมบอลกันสั่นความละเอียด 48 ล้านพิกเซล บันทึกวิดีโอ 4K 120fps หมุนได้ 120 องศา สั่งงานบันทึกภาพวิวทิวทัศน์ ท้องฟ้า พระอาทิตย์ตก หรือถ่าย Vlog การเดินทางได้ด้วยการกดปุ่มเพียงครั้งเดียวบนพวงมาลัย
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ความยาวตัวถัง</span>
              <span className="text-xl font-bold text-slate-900">4,620 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ความกว้าง</span>
              <span className="text-xl font-bold text-slate-900">1,900 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ระยะฐานล้อ</span>
              <span className="text-xl font-extrabold text-lime-700">2,880 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">Ground Clearance</span>
              <span className="text-xl font-bold text-emerald-600">170 มม.</span>
            </div>
          </div>
        </section>

        {/* SECTION 4: Interior & Frunk */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ห้องโดยสาร จอ Sunflower 15.4 นิ้ว และ Frunk หน้า 159 ลิตร
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            การออกแบบภายในของ Deepal S05 เน้นความโปร่งสบาย พื้นที่วางขากว้างขวางเป็นพิเศษด้วยระยะฐานล้อ 2,880 มม. คอนโซลกลางติดตั้งหน้าจอสัมผัสแบบ <strong>Sunflower Screen ขนาด 15.4 นิ้ว</strong> ความละเอียด 2.5K ปรับเอียงได้อัตโนมัติ ขับเคลื่อนด้วยชิป <strong>Qualcomm Snapdragon 8155</strong> พร้อมระบบ AR-HUD แสดงผลขนาด 50 นิ้วบนกระจกบังลมหน้า
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 my-6 bg-slate-100 shadow-md">
            <Image
              src="/images/reviews/deepal-s05-interior.jpg"
              alt="ห้องโดยสาร Changan Deepal S05 Sunflower Screen"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-lime-600" />
                Frunk หน้ารถขนาดมหึมา 159 ลิตร
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ช่องเก็บของใต้ฝากระโปรงหน้าที่ใหญ่ที่สุดในโลกสำหรับรถพิกัดนี้ สามารถใส่กระเป๋าเดินทางขนาด 20 นิ้วได้สบาย พร้อมฝาปิดกันน้ำและกลิ่นอาหารอย่างสมบูรณ์แบบ
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                โหมด Outdoor Party &amp; ลำโพงภายนอก
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                มีลำโพงกันน้ำติดตั้งภายนอกตัวรถ 2 ตำแหน่ง พร้อมฟังก์ชันไมโครโฟนไร้สายคาราโอเกะและระบบไฟส่องสว่าง Camping Mode เหมาะสำหรับสายแคมป์ปิ้งเมืองไทย
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Powertrain & Driving */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ขุมพลังมอเตอร์ไฟฟ้าหลัง 238 แรงม้า และสมรรถนะ
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            Deepal S05 วางมอเตอร์ไฟฟ้าเดี่ยวที่เพลาหลัง (RWD) ให้กำลังสูงสุด <strong>238 แรงม้า (175 kW)</strong> และแรงบิดมหาศาล <strong>320 Nm</strong> ตอบสนองทันทีโดยไม่ต้องรอรอบ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">พละกำลังสูงสุด</span>
              <span className="text-2xl font-black text-slate-900">238 แรงม้า</span>
              <span className="text-xs text-slate-500 block mt-1">(175 kW) มอเตอร์เดี่ยวขับหลัง</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">แรงบิดสูงสุด</span>
              <span className="text-2xl font-black text-lime-700">320 Nm</span>
              <span className="text-xs text-slate-500 block mt-1">ไต่ทางชันและเร่งแซงสบาย</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">อัตราเร่ง 0-100 km/h</span>
              <span className="text-2xl font-black text-emerald-600">7.3 วินาที</span>
              <span className="text-xs text-slate-500 block mt-1">ความเร็วสูงสุด 180 km/h</span>
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            ฟีลลิ่งการขับขี่ให้ความรู้สึกคล่องตัวและกระฉับกระเฉงกว่าขนาดตัวรถ การเร่งแซงที่ความเร็ว 80-120 km/h ทำได้ในเวลาเพียง 4.2 วินาที มั่นใจเมื่อต้องแซงรถช้าบนถนนสองเลนสวน
          </p>
        </section>

        {/* SECTION 6: Suspension, Ground Clearance & Real Test Data */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. ช่วงล่าง การซับแรงสะเทือน และความสูงลุยน้ำท่วมขังในไทย
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            ช่วงล่างของ Deepal S05 เป็นแบบอิสระ 4 ล้อ ด้านหน้า MacPherson Strut และด้านหลังแบบ Multi-link เซ็ตติ้งเน้นความสมดุลระหว่างความนุ่มสบายและการทรงตัว
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-600" />
                ความสูง Ground Clearance 170 มม. กับน้ำท่วมขัง กทม.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ด้วยระยะต่ำสุดถึงพื้น 170 มม. และชุดแพ็กแบตเตอรี่มาตรฐานกันน้ำ IP68 ทำให้สามารถลุยน้ำท่วมขังรอการระบายระดับ 15 – 20 ซม. ในกรุงเทพฯ ได้อย่างมั่นใจ โดยไม่ต้องกังวลเรื่องน้ำเข้าตัวถัง
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                ความมั่นคงบนทางตรงมอเตอร์เวย์ (Highway Stability)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ระยะฐานล้อที่ยาวถึง 2,880 มม. ช่วยให้ตัวรถนิ่งสนิทเมื่อวิ่งทางตรงด้วยความเร็ว 120 km/h รอยต่อสะพานถูกซับได้อย่างนุ่มนวล ไม่มีความกระด้าง
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
                <div className="text-[11px] text-slate-400">0 – 100 km/h (จับเวลาจริง)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">7.28 วินาที</div>
                <div className="text-[10px] text-slate-400">แบตเตอรี่ 88% โหมด Sport</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">4.21 วินาที</div>
                <div className="text-[10px] text-slate-400">มอเตอร์ตอบสนองไว</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">64.5 dB(A)</div>
                <div className="text-[10px] text-slate-400">กระจก Acoustic หน้า</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">37.2 เมตร</div>
                <div className="text-[10px] text-slate-400">ดิสก์เบรก 4 ล้อแม่นยำ</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Battery & 3C Charging */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. แบตเตอรี่ Golden Shield และการชาร์จเร็ว 3C ชาร์จ 15 นาที
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            Deepal S05 ติดตั้งแบตเตอรี่ <strong>Golden Shield Battery (LFP)</strong> ความจุ 56.12 kWh ที่รองรับเทคโนโลยี <strong>3C Super Charging</strong> สามารถรับกำลังไฟ DC Fast Charge สูงสุดถึง 160 kW
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-900">DC Fast Charge (3C Super Charging)</span>
                <Zap className="w-5 h-5 text-lime-600" />
              </div>
              <p className="text-2xl font-black text-lime-700 mb-1">160 kW (30-80% ใน 15 นาที)</p>
              <p className="text-xs text-slate-600">
                ด้วย C-rate ระดับ 3C ทำให้การแวะพักชาร์จตามปั๊มน้ำมันใช้เวลาเพียง 15 นาที ได้ระยะทางเพิ่มขึ้นกว่า 250 กิโลเมตร
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-900">ระบบจ่ายไฟ V2L สเปกแคมปิ้ง</span>
                <BatteryCharging className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-black text-blue-700 mb-1">จ่ายไฟ 3.3 kW (3,300W)</p>
              <p className="text-xs text-slate-600">
                กำลังจ่ายไฟสูงถึง 3,300 วัตต์ สามารถเสียบใช้งานแอร์เคลื่อนที่ เตาแม่เหล็กไฟฟ้า หรืออุปกรณ์ถ่ายทำได้พร้อมกัน
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-lime-600" /> ผลทดสอบระยะทางวิ่งจริง (Real-World Highway Range Test)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ทดสอบขับขี่จริงบนเส้นทางกรุงเทพฯ – สระบุรี – เขาใหญ่ เปิดแอร์ 23°C ความเร็ว 100 – 115 km/h ตัวรถทำระยะทางจริงได้ประมาณ <strong>380 – 395 กิโลเมตร</strong> อัตราการใช้พลังงานเฉลี่ย <strong>14.4 – 14.8 kWh / 100 km</strong> ถือว่าประหยัดพลังงานได้ยอดเยี่ยม
            </p>
          </div>
        </section>

        {/* SECTION 8: Active Safety & ADAS */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและระบบช่วยเหลือการขับขี่ ADAS L2
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            ระบบช่วยเหลือการขับขี่ของ Deepal S05 ทำงานด้วยกล้องความละเอียด 8 ล้านพิกเซล และเรดาร์ตรวจจับวัตถุ 5 ตำแหน่งรอบคัน:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-sm text-slate-700">
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบ Adaptive Cruise Control แปรผันความเร็วพร้อม Stop &amp; Go</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบรักษารถให้อยู่ในกึ่งกลางเลน Lane Centering Control</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>กล้องมองภาพรอบทิศทาง 360° พร้อมฟังก์ชันใต้ท้องรถโปร่งแสง 540°</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบเบรกฉุกเฉินอัตโนมัติด้านหน้า Autonomous Emergency Braking (AEB)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบเตือนมุมอับสายตา Blind Spot Detection &amp; Door Opening Warning</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบช่วยจอดอัตโนมัติอัจฉริยะ Intelligent Automated Parking Assistant</span>
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
                src="/images/reviews/deepal-s05-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น Deepal S05 EVSELECT"
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
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                ชุดอุปกรณ์เสริมตรงรุ่นสำหรับ Changan Deepal S05
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                เพิ่มความสะดวกสบายและปกป้องรถของคุณ ด้วย <strong>พรมปูพื้น TPE 3D ไร้รอยต่อขอบสูงกันน้ำ 100%</strong>, <strong>ถาดรองช่องเก็บของ Frunk หน้า 159 ลิตร</strong>, <strong>ม่านกรองแสงหลังคากระจก Nano-Silver สู้แดดเมืองไทย</strong> และ <strong>ฟิล์มกระจก 9H สำหรับหน้าจอ 15.4 นิ้ว</strong>
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม Deepal S05 ทั้งหมด</span>
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

      {/* 8. Side-by-Side Pros & Cons */}
      <section className="my-12 not-prose">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. ข้อดี &amp; ข้อสังเกต (Pros &amp; Cons - Style)
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
                <span><strong>Frunk หน้าขนาด 159 ลิตร:</strong> ช่องเก็บของหน้ารถใหญ่ที่สุดในโลก ใส่กระเป๋าเดินทางขนาด 20 นิ้วได้</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>กล้อง 4K Gimbal Camera บนหลังคา:</strong> บันทึกวิดีโอ 4K 120fps ท่องเที่ยวได้ทันใจผ่านปุ่มบนพวงมาลัย</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ไฟหน้า DLP ฉายหนัง 120 นิ้ว:</strong> ฉายวิดีโอและเล่นเกมกลางแจ้ง พร้อมลำโพงกันน้ำภายนอกสำหรับแคมปิ้ง</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ชาร์จเร็ว DC 3C สูง 160 kW:</strong> เติมพลังงาน 30% ถึง 80% ได้ในเวลาเพียง 15 นาที</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ระยะฐานล้อ 2,880 มม.:</strong> พื้นที่วางขาห้องโดยสารตอนหลังกว้างขวางเกินพิกัดรถระดับเดียวกัน</span>
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
                <span><strong>หลังคาแก้วไม่มีม่านไฟฟ้า:</strong> ต่างจากรุ่น S07 ต้องติดตั้งม่านบังแดด Nano-Silver เสริมสำหรับแดดไทย</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ไม่มีหน้าจอมาตรวัดหลังพวงมาลัย:</strong> ต้องอาศัยระบบ AR-HUD สะท้อนกระจกบังลมหน้า 50 นิ้ว</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>กล้องกิมบอลบนหลังคา:</strong> ต้องระวังเรื่องกิ่งไม้เตี้ยและการล้างรถด้วยเครื่องแปรงอัตโนมัติ</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ความจุแบตเตอรี่ 56.12 kWh:</strong> วิ่งทางไกลข้ามภาคเกิน 380 กม. ต้องวางแผนแวะชาร์จล่วงหน้า</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Takeaway Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-lime-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" /> / EVSELECT Final Takeaway
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              <strong>Deepal S05</strong> คือรถ EV ที่คุ้มค่าและสนุกที่สุดในงบ 8 แสนบาท ตอบโจทย์สายท่องเที่ยว แคมปิ้ง และคอนเทนต์ครีเอเตอร์อย่างไม่มีคู่แข่งเทียบได้
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
              <span className="text-3xl font-black text-lime-700">8.7</span>
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
                <span className="text-lime-700 font-bold">8.6</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.6}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="สมรรถนะการขับขี่และอัตราเร่ง 8.6 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความเงียบและการซับแรงสะเทือน (NVH &amp; Ride Refinement)</span>
                <span className="text-lime-700 font-bold">8.4</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.4}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความเงียบและการซับแรงสะเทือน 8.4 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">เทคโนโลยีและระบบความบันเทิง (Tech &amp; Infotainment)</span>
                <span className="text-lime-700 font-bold">9.6</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.6}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="เทคโนโลยีและระบบความบันเทิง 9.6 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความคุ้มค่าเมื่อเทียบกับคู่แข่ง (Value Proposition vs Competitors)</span>
                <span className="text-lime-700 font-bold">9.0</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.0}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความคุ้มค่าเมื่อเทียบกับคู่แข่ง 9.0 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความปลอดภัยและโครงสร้าง (Safety Standards &amp; Build Quality)</span>
                <span className="text-lime-700 font-bold">8.6</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.6}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความปลอดภัยและโครงสร้าง 8.6 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '86%' }}></div>
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
          {/* Related Card 1: Deepal S07 */}
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

          {/* Related Card 2: Geely EX2 */}
          <Link
            href="/articles/geely-ex2-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/geely-ex2-hero.jpg"
                alt="รีวิว Geely EX2 สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Urban City EV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                สัมผัสแรกกับซิตี้คาร์ไฟฟ้าขับหลัง 116 แรงม้า ที่นุ่มนวลที่สุดในงบ 4 แสนบาท
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
          <ShareButton title="รีวิว Deepal S05 สเปกไทย: เอสยูวีสายแคมปิ้ง-Vlog กล้อง 4K บนหลังคา ไฟหน้าฉายหนัง Frunk หน้า 159L | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
