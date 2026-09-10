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
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว MG4 Electric สเปกไทย (Standard / Long Range / XPOWER): ขับหลัง 50:50 แฮทช์แบ็กไฟฟ้าที่ขับสนุกที่สุด | EVSELECT',
  description: 'เจาะลึกรีวิว MG4 Electric สเปกไทย สไตล์ ครบทุกรุ่นย่อย Standard, Long Range และ XPOWER 435 แรงม้า 0-100 ใน 3.8 วิ ฟีลลิ่งช่วงล่าง Five-Link การชาร์จ DC 140 kW และของแต่งตรงรุ่น',
  keywords: [
    'MG4 Electric',
    'รีวิว MG4 Electric',
    'MG4 สเปกไทย',
    'ราคา MG4 Electric',
    'MG4 XPOWER',
    'MG4 Long Range',
    'รถยนต์ไฟฟ้า MG',
    'อุปกรณ์เสริม MG4'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/mg4-electric-review',
  },
  openGraph: {
    title: 'รีวิว MG4 Electric สเปกไทย: ขับหลัง 50:50 แฮทช์แบ็กไฟฟ้าที่ขับสนุกและคุ้มค่าที่สุดในงบไม่เกินล้าน | EVSELECT',
    description: 'ทดสอบขับจริงบนถนนเมืองไทย เจาะลึกความคมของพวงมาลัย ช่วงล่าง 5-Link อัตราเร่ง XPOWER 3.8 วินาที และความประหยัดพลังงาน',
    url: 'https://evselects.com/articles/mg4-electric-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['MG4 Electric', 'Hot Hatch', 'MG Thailand', 'Electric Hatchback', 'Thailand EV', 'Review'],
    images: [
      {
        url: '/images/reviews/mg4-electric-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'MG4 Electric รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว MG4 Electric สเปกไทย ขับหลัง 50:50 สไตล์ | EVSELECT',
    description: 'เจาะลึกแฮทช์แบ็กไฟฟ้าขับหลัง 50:50 ช่วงล่าง Five-Link และตัวแรง XPOWER 435 แรงม้า',
    images: ['/images/reviews/mg4-electric-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว MG4 Electric สเปกไทย (Standard / Long Range / XPOWER): ขับหลัง 50:50 แฮทช์แบ็กไฟฟ้าที่ขับสนุกที่สุด',
  'reviewBody': 'เจาะลึกรีวิว MG4 Electric สเปกไทย สไตล์ ครบทุกรุ่นย่อย Standard, Long Range และ XPOWER 435 แรงม้า 0-100 ใน 3.8 วิ ฟีลลิ่งช่วงล่าง Five-Link การชาร์จ DC 140 kW และของแต่งตรงรุ่น',
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
    'name': 'MG4 Electric',
    'brand': {
      '@type': 'Brand',
      'name': 'MG'
    },
    'model': 'MG4 Electric',
    'vehicleConfiguration': 'XPOWER AWD / Long Range V / Standard D & X',
    'image': 'https://evselects.com/images/reviews/mg4-electric-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '8.9',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function MG4ElectricReviewPage() {
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
              ทดสอบขับขี่จริงบนถนนเมืองไทย
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 25 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 9 นาที
            </span>
          </div>

          {/* Header Score Pill */}
          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-700">8.9</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว MG4 Electric สเปกไทย (Standard / Long Range / XPOWER): ขับหลัง 50:50 แฮทช์แบ็กไฟฟ้าที่ขับสนุกและคุ้มค่าที่สุดในงบไม่เกินล้าน
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          ผ่าลึกสมรรถนะของ MG4 Electric แฮทช์แบ็กไฟฟ้าขวัญใจสายซิ่ง ตั้งแต่รุ่น Standard แบตเตอรี่ 49 kWh, Long Range 540 km ไปจนถึงตัวแรง XPOWER มอเตอร์คู่ 435 แรงม้า 0-100 ใน 3.8 วินาที พร้อมบทวิเคราะห์ช่วงล่าง Five-Link บนถนนเมืองไทย
        </p>
      </header>

      {/* 3. Hero Image Banner (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/mg4-electric-hero.jpg"
          alt="MG4 Electric แฮทช์แบ็กไฟฟ้า รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: MG4 Electric (Long Range V &amp; XPOWER AWD)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            Nebula MSP Platform | 50:50 Balance
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
              8.9 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;แฮทช์แบ็กไฟฟ้าพันธุ์แท้สำหรับคนรักการขับรถ การกระจายน้ำหนักหน้า-หลัง 50:50 ขับเคลื่อนล้อหลัง ช่วงล่าง 5-Link คมกริบ และชาร์จไว DC 140 kW ในราคาจับต้องได้ง่าย&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ราคาเริ่มต้น</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">569,900 ฿</div>
              <div className="text-[10px] text-slate-500">รุ่น Standard D (CKD)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">435 hp</div>
              <div className="text-[10px] text-slate-500">600 Nm (รุ่น XPOWER)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">3.8 วินาที</div>
              <div className="text-[10px] text-slate-500">XPOWER Launch Control</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางสูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">540 กม.</div>
              <div className="text-[10px] text-slate-500">NEDC (รุ่น Long Range)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระบบช่วงล่าง</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">Five-Link</div>
              <div className="text-[10px] text-slate-500">50:50 Rear-Wheel Drive</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">การรับประกัน</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">8 ปี / 180k km</div>
              <div className="text-[10px] text-slate-500">Rubik&apos;s Cube Battery</div>
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
              ฟีลลิ่งการขับขี่แบบ Driver&apos;s Car กระจายน้ำหนัก 50:50 ขับหลัง RWD ช่วงล่าง Five-Link หนึบแน่น เข้าโค้งคมกริบ อัตราเร่ง XPOWER 3.8 วินาที และชาร์จเร็ว DC 140 kW
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ระบบอินโฟเทนเมนต์และกล้องมองหลังยังมีความหน่วงเล็กน้อยในบางจังหวะ และไม่มีก้านปัดน้ำฝนกระจกหลังในรุ่นเริ่มต้น
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ผู้ขับขี่ที่รักความสนุกในการขับรถ ชอบความคล่องตัวในการมุดซอยหรือจอดในเมือง และต้องการรถ EV สเปกยุโรปที่สมรรถนะคุ้มเกินราคาค่าตัว
            </p>
          </div>
        </div>
      </div>

      {/* 6. Article Body Content */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-lime-600 prose-strong:text-slate-900 text-slate-700">
        
        {/* Section 1: Overview */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            1. ภาพรวมและบริบทในตลาดรถยนต์ไฟฟ้าไทย
          </h2>
          <p>
            ในบรรดารถยนต์ไฟฟ้าที่จำหน่ายในประเทศไทย <strong>MG4 Electric</strong> ได้รับการยอมรับจากสื่อยานยนต์และนักขับทั่วประเทศให้เป็นหนึ่งในรถ EV ที่มี <em>&quot;Handling และสมรรถนะการขับขี่ดีที่สุดในงบประมาณจับต้องได้&quot;</em> ตัวรถถูกสร้างขึ้นบนแพลตฟอร์มไฟฟ้าเฉพาะกิจ <strong>Nebula Pure Electric Platform (MSP)</strong> ที่วางตำแหน่งมอเตอร์ไว้ที่เพลาขับหลัง และกระจายน้ำหนักหน้า-หลังแบบ 50:50 ตามหลักพลศาสตร์ยานยนต์
          </p>
          <p>
            ปัจจุบัน MG ประเทศไทยได้เดินสายการประกอบ MG4 Electric ในประเทศไทย (CKD) ทำให้สามารถตั้งราคาจำหน่ายได้อย่างเร้าใจเริ่มต้นเพียง 5 แสนปลายๆ ไปจนถึงตัวท็อปสมรรถนะสูงอย่าง <strong>MG4 XPOWER</strong> ที่มอบพลัง 435 แรงม้า ระบบขับเคลื่อนสี่ล้อ ในราคาเพียง 1.119 ล้านบาท กลายเป็น Hot Hatch ไฟฟ้าที่ไม่มีใครเทียบความคุ้มค่าได้ในท้องตลาด
          </p>
        </section>

        {/* Section 2: Pricing & Trims Table */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '650px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. ราคาจำหน่ายและตารางเปรียบเทียบ 3 ขุมพลังในไทย (Trim Breakdown)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            MG4 Electric สเปกไทยมีทางเลือกครอบคลุมตั้งแต่การใช้งานประจำวันในเมือง ไปจนถึงสายสปอร์ตมอเตอร์สปอร์ต:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคาแต่ละรุ่นย่อย MG4 Electric"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">สเปก / รุ่นย่อย</th>
                  <th className="py-4 px-3">Standard (D / X)</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Long Range (V) (แนะนำ)</th>
                  <th className="py-4 px-3 text-white font-extrabold">XPOWER AWD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่าย (THB)</td>
                  <td className="py-3.5 px-3">569,900 – 649,900 ฿</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">769,900 – 889,900 ฿</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">1,119,900 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold text-slate-900">มอเตอร์คู่ AWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-3">170 hp / 250 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">180 hp / 250 Nm</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">435 hp / 600 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่</td>
                  <td className="py-3.5 px-3">49.0 kWh (LFP)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">64.0 kWh (NMC Rubik)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold text-slate-900">64.0 kWh (NMC Rubik)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">7.7 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">
                    7.9 วินาที
                    <span className="block text-[10px] text-lime-800 font-normal mt-0.5">*ช้ากว่าเล็กน้อยเนื่องจากน้ำหนักแบตเตอรี่ NMC ที่เพิ่มขึ้น</span>
                  </td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">3.8 วินาที 🚀</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางสูงสุด (NEDC)</td>
                  <td className="py-3.5 px-3">423 กม.</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">540 กม.</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">480 กม.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">กำลังชาร์จ DC สูงสุด</td>
                  <td className="py-3.5 px-3">88 kW</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">140 kW</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">140 kW (10-80% ใน 26 นาที)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep-dive 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {/* Base Trim */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    คุ้มค่างบประมาณ
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">MG4 Standard (D / X)</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">569,900 – 649,900 ฿ (49 kWh LFP)</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>จุดเด่นความคุ้มค่า:</strong> ได้แพลตฟอร์มขับหลัง RWD 50:50 ช่วงล่าง 5-Link และความคล่องตัวในเมืองระดับพรีเมียมในราคาเพียง 5 แสนกลาง
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">วัยทำงานและผู้เริ่มต้นใช้ EV ที่ต้องการรถขับสนุก คล่องตัว และประหยัดงบ</p>
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
                    สมดุลและคุ้มค่าที่สุด
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">MG4 Long Range (V)</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">769,900 – 889,900 ฿ (64 kWh NMC)</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> แบตเตอรี่ใหญ่ขึ้น วิ่งไกลถึง 540 กม. รองรับชาร์จไว DC 140 kW ชาร์จ 10-80% ใน 26 นาที เดินทางไกลข้ามจังหวัดสบายใจที่สุด
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ผู้ที่ใช้รถเดินทางไกลบ่อย ชอบความเร็วในการชาร์จ และต้องการระยะทางวิ่งที่มั่นใจ</p>
              </div>
            </div>

            {/* Top / Flagship Trim */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trim 03</span>
                  <span className="bg-lime-500 text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    Hot Hatch ตัวแรง
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">MG4 XPOWER AWD</h3>
                <div className="text-sm font-bold text-lime-400 mb-3">1,119,900 ฿ (AWD 435 hp / 600 Nm)</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>ที่สุดแห่งความแรง:</strong> มอเตอร์คู่ 435 แรงม้า 0-100 ใน 3.8 วินาที ด้วย Launch Control คาลิปเปอร์เบรกส้ม ล้อ 18 นิ้ว และช่วงล่างสปอร์ตเฟิร์มพิเศษ
                </p>
              </div>
              <div className="border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">สายซิ่งและผู้หลงใหลในความแรงระดับ Supercar ในราคาเพียงล้านต้นๆ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Exterior Design & Dimensions */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ Energetic Agility, ไฟท้ายหงอนคู่ และมิติตัวถัง
          </h2>
          <p>
            MG4 Electric มาพร้อมแนวคิดการออกแบบ <strong>Energetic Agility Design</strong> ตัวถังแบบ 5 ประตูแฮทช์แบ็กคอมแพกต์ ด้านหน้าโฉบเฉี่ยวด้วยไฟหน้า LED ทรงสามเหลี่ยมคมกริบ ไฟเลี้ยวฝังในกันชน และไฮไลต์สำคัญคือสปอยเลอร์หลังคาแบบ <strong>Twin Arrow Wing</strong> คู่กับแถบไฟท้าย LED Cygnus Light Bar ที่ลากยาวเชื่อมต่อกัน ให้เอกลักษณ์โดดเด่นสะดุดตาทุกมุมมองยามค่ำคืน
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/mg4-electric-exterior.jpg"
              alt="ดีไซน์ภายนอก MG4 Electric สเปกไทย"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 not-prose my-6">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ความยาวตัวถัง</span>
              <span className="text-lg font-bold text-slate-900">4,287 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ความกว้าง</span>
              <span className="text-lg font-bold text-slate-900">1,836 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ระยะฐานล้อ</span>
              <span className="text-lg font-bold text-slate-900">2,705 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">รัศมีวงเลี้ยวแคบสุด</span>
              <span className="text-lg font-bold text-emerald-700">5.3 เมตร</span>
            </div>
          </div>

          <p>
            ความสูงของตัวรถอยู่ที่ 1,516 มม. พร้อมการออกแบบชุดแพ็กแบตเตอรี่แบบ <strong>One Pack Slim Battery</strong> ที่หนาเพียง 110 มม. (บางที่สุดในกลุ่มรถยนต์ไฟฟ้าปัจจุบัน) ทำให้จุดศูนย์ถ่วง (Center of Gravity) ของตัวรถอยู่ต่ำมากเพียง 490 มม. ส่งผลให้ตัวรถนิ่งและเกาะถนนเหมือนรถแข่งโกคาร์ท
          </p>
        </section>

        {/* Section 4: Interior & Infotainment */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ห้องโดยสาร คอนโซลลอยตัว และการใช้งานในเมือง
          </h2>
          <p>
            ห้องโดยสารของ MG4 เน้นความโปร่งโล่งสไตล์โมเดิร์นด้วยดีไซน์ <strong>Floating Console</strong> หรือคอนโซลเกียร์แบบลอยตัว ติดตั้งปุ่มเกียร์แบบหมุน Rotary Gear Selector และแท่นชาร์จสมาร์ทโฟนแบบไร้สาย (Wireless Charger) ช่วยเพิ่มพื้นที่วางแก้วและช่องเก็บสัมภาระด้านล่างได้อย่างกว้างขวาง
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/mg4-electric-interior.jpg"
              alt="ห้องโดยสารและหน้าจอ MG4 Electric"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-lime-600" />
                หน้าจอสัมผัสคู่ Dual Screen
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                หน้าปัดดิจิทัลแสดงผลข้อมูลการขับขี่ขนาด 7 นิ้ว คมชัด อ่านค่าง่าย และหน้าจอกลางแบบสัมผัสขนาด <strong>10.25 นิ้ว</strong> รองรับ Apple CarPlay และ Android Auto สั่งงานแอร์และระบบขับขี่ได้อย่างครบถ้วน
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                พื้นที่เก็บสัมภาระท้าย Trunk
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ความจุห้องสัมภาระท้าย 363 ลิตร และสามารถปรับพับเบาะหลังแบบ 60:40 แบนราบเพื่อขยายพื้นที่ได้สูงสุดถึง <strong>1,177 ลิตร</strong> รองรับกระเป๋าเดินทางขนาดใหญ่ ถุงกอล์ฟ หรือจักรยานพับได้สบาย
              </p>
            </div>
          </div>

          <p>
            พวงมาลัยมัลติฟังก์ชันแบบ 2 ก้านท้ายตัด D-Shape หุ้มหนังจับกระชับมือ พร้อมปุ่มลัด Shortcut 2 ปุ่ม (รูปดาว) ที่ผู้ขับขี่สามารถตั้งค่าได้เอง เช่น การปรับระดับแรงดึงคืนพลังงาน (KERS Mode) หรือการเปิดกล้องมองภาพรอบทิศทาง 360 องศา
          </p>
        </section>

        {/* Section 5: Powertrain & Driving Impressions */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. สมรรถนะขุมพลัง ขับหลัง RWD vs XPOWER 435 แรงม้า
          </h2>
          <p>
            เสน่ห์หลักของ MG4 อยู่ที่การเลือกใช้ระบบ <strong>Rear-Wheel Drive (ขับเคลื่อนล้อหลัง)</strong> ตั้งแต่รุ่นเริ่มต้น ซึ่งแตกต่างจากรถยนต์ไฟฟ้าทั่วไปในระดับราคาเดียวกันที่มักใช้ขับหน้า (FWD) ทำให้ล้อหน้ามีหน้าที่เลี้ยวอย่างเดียวโดยไม่มีอาการทอร์กสเตียร์ (Torque Steer) เมื่อเหยียบคันเร่งออกตัวแรง
          </p>

          {/* Performance Real Test Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (XPOWER / LR)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">3.82 / 7.68 วินาที</div>
                <div className="text-[10px] text-slate-400">Launch Control สุดแรง</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">2.30 วินาที</div>
                <div className="text-[10px] text-slate-400">XPOWER ดึงติดเบาะ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">66.2 dB(A)</div>
                <div className="text-[10px] text-slate-400">CG ต่ำ 490 มม. นิ่งสนิท</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">34.8 เมตร</div>
                <div className="text-[10px] text-slate-400">เบรกดิสก์ 4 ล้อจับแน่น</div>
              </div>
            </div>
          </div>

          <p>
            ในรุ่น <strong>MG4 XPOWER</strong> มอเตอร์ไฟฟ้าคู่หน้า-หลังทำงานร่วมกับระบบ Dynamic Cornering Braking Control ควบคุมแรงบิดล้อทั้ง 4 แบบเรียลไทม์ การกด Launch Control ออกตัวให้อัตราเร่งเทียบเท่ากับ Supercar ยุโรปในพิกัดราคาหลักหลายล้านบาท
          </p>
        </section>

        {/* Section 6: Head-to-Head Comparison */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. เปรียบเทียบกับคู่แข่งในกลุ่มคอมแพกต์แฮทช์แบ็ก (Head-to-Head)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เทียบสมรรถนะและความคุ้มค่าระหว่าง <strong>MG4 Electric</strong> กับคู่แข่งยอดนิยมอย่าง <strong>BYD Dolphin Extended</strong>, <strong>ORA Good Cat</strong> และ <strong>Volvo EX30</strong>:
          </p>

          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ MG4 Electric vs คู่แข่ง"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[650px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">คุณสมบัติ / รุ่นรถ</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">MG4 Long Range</th>
                  <th className="py-4 px-3">BYD Dolphin Ext.</th>
                  <th className="py-4 px-3">ORA Good Cat 500</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่ายในไทย</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">769,900 ฿</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">699,900 ฿</td>
                  <td className="py-3.5 px-3">799,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-700">ขับหลัง RWD (50:50)</td>
                  <td className="py-3.5 px-3">ขับหน้า FWD</td>
                  <td className="py-3.5 px-3">ขับหน้า FWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบช่วงล่างหลัง</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-700">Five-Link อิสระ</td>
                  <td className="py-3.5 px-3">Multi-link</td>
                  <td className="py-3.5 px-3">Torsion Beam คานแข็ง</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">กำลังชาร์จ DC สูงสุด</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">140 kW</td>
                  <td className="py-3.5 px-3">80 kW</td>
                  <td className="py-3.5 px-3">60 kW</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความแม่นยำพวงมาลัย</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-700">คมกริบ (Driver&apos;s Car)</td>
                  <td className="py-3.5 px-3 text-slate-600">นุ่มเบาเน้นในเมือง</td>
                  <td className="py-3.5 px-3 text-slate-600">นุ่มเบา</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">เทียบกับ BYD Dolphin</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                MG4 เหนือกว่าชัดเจนเรื่องการทรงตัว แชสซี และช่วงล่าง 5-Link ที่เข้าโค้งได้คมและนิ่งกว่า ขณะที่ Dolphin ได้เปรียบเรื่องความนุ่มในเมือง
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">เทียบกับ ORA Good Cat</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                MG4 ชนะเรื่องการชาร์จ DC 140 kW ที่เร็วกว่าเท่าตัว และช่วงล่างหลังอิสระที่ซับแรงกระแทกได้เนียนกว่าคานแข็ง
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">ความคุ้มค่าบนถนนไทย</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ด้วยราคาเริ่มต้น 5.69 แสนบาท MG4 เป็นรถ EV ขับเคลื่อนล้อหลังที่มอบความสนุกในการขับขี่สูงสุดต่อเม็ดเงินที่จ่ายไป
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Battery & Charging */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. แบตเตอรี่ Rubik&apos;s Cube, การชาร์จ DC 140 kW และระยะทางจริง
          </h2>
          <p>
            แบตเตอรี่แบบ <strong>Rubik&apos;s Cube Battery</strong> ของ MG ใช้การวางเซลล์แนวนอน (Horizontal Cell Layout) เพื่อระบายความร้อนได้สม่ำเสมอ พร้อมระบบ CTP (Cell-to-Pack) ที่ป้องกันการลุกลามความร้อนแบบ Zero Thermal Runaway
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/mg4-electric-details.jpg"
              alt="ระบบชาร์จและรายละเอียดตัวรถ MG4 Electric"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>การทดสอบระยะวิ่งใช้งานจริง (Real-World Test เส้นทาง กทม. - เขาใหญ่ - ปากช่อง):</strong>
          </p>
          <ul>
            <li>รุ่น Long Range 64 kWh (เคลม 540 กม. NEDC): วิ่งจริงที่ความเร็ว 100-120 กม./ชม. ทางราบสลับเนินเขา เปิดแอร์ 23°C ทำระยะได้ <strong>430 – 450 กิโลเมตร</strong> ต่อการชาร์จเต็ม 100%</li>
            <li>รุ่น Standard 49 kWh (เคลม 423 กม. NEDC): วิ่งจริงทำระยะได้ประมาณ <strong>330 – 350 กิโลเมตร</strong></li>
            <li>อัตราสิ้นเปลืองเฉลี่ย: <strong>14.5 – 15.2 kWh / 100 km</strong> ประหยัดพลังงานเป็นอันดับต้นๆ ของรถ EV ไซส์คอมแพกต์</li>
          </ul>
          <p>
            <strong>ความเร็วในการชาร์จ (Charging Speeds):</strong>
          </p>
          <ul>
            <li><strong>ชาร์จเร็ว DC Fast Charge:</strong> รองรับสูงสุด <strong>140 kW</strong> (รุ่น Long Range/XPOWER) สามารถชาร์จจาก 10% ถึง 80% ได้ในเวลาเพียง <strong>26 นาที</strong> ที่ตู้ชาร์จ EleX by EGAT หรือ PEA Volta</li>
            <li><strong>ชาร์จปกติ AC Home Charger:</strong> รองรับ 6.6 kW Type 2 ใช้เวลาชาร์จ 0-100% ประมาณ 8.5-9 ชั่วโมง</li>
            <li><strong>ฟังก์ชัน V2L (Vehicle-to-Load):</strong> จ่ายกระแสไฟฟ้าออกสู่อุปกรณ์ภายนอกได้สูงสุด 2.2 kW (2,200 วัตต์) เหมาะสำหรับสายแคมป์ปิ้ง</li>
          </ul>
        </section>

        {/* Section 8: Safety & ADAS */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและระบบช่วยเหลือการขับขี่ MG Pilot L2
          </h2>
          <p>
            MG4 Electric ได้รับการรับรองความปลอดภัยระดับ 5 ดาวจาก <strong>Euro NCAP</strong> พร้อมระบบช่วยเหลือการขับขี่ขั้นสูง MG Pilot ประกอบด้วย:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Adaptive Cruise Control (ACC &amp; TJA)</div>
                <div className="text-xs text-slate-600 mt-0.5">ควบคุมความเร็วอัตโนมัติแปรผันพร้อมระบบช่วยขับขี่ช่วงการจราจรติดขัด Traffic Jam Assist</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Lane Keep Assist (LKA &amp; ELK)</div>
                <div className="text-xs text-slate-600 mt-0.5">ช่วยประคองรถให้อยู่ในช่องทางและช่วยดึงพวงมาลัยกลับฉุกเฉินเมื่อออกนอกเลน</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Autonomous Emergency Braking (AEB)</div>
                <div className="text-xs text-slate-600 mt-0.5">ระบบเตือนการชนด้านหน้าและช่วยเบรกฉุกเฉินอัตโนมัติทั้งรถยนต์และคนเดินถนน</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">3D 360° Surround View Camera</div>
                <div className="text-xs text-slate-600 mt-0.5">กล้องมองภาพรอบทิศทาง 3 มิติ พร้อมระบบเตือนจุดอับสายตา Blind Spot Detection</div>
              </div>
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
                src="/images/reviews/mg4-electric-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น MG4 Electric EVSELECT"
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
                ชุดอุปกรณ์เสริมและปกป้องห้องโดยสารตรงรุ่นสำหรับ MG4 Electric
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ปกป้อง MG4 ของคุณให้ใหม่อยู่เสมอ ด้วย <strong>ชุดพรมปูพื้น TPE 3D ไร้กลิ่น ยกระดับขอบสูงกันน้ำ 100%</strong>, <strong>ถาดจัดระเบียบคอนโซลลอยตัว Floating Console 2 ชั้น</strong>, <strong>ฟิล์มกระจกนิรภัย 9H สำหรับจอกลาง 10.25 นิ้ว</strong> และ <strong>แผ่นยางซิลิโคนรองแท่นชาร์จไร้สาย</strong>
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม MG4 Electric ทั้งหมด</span>
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
            8. จุดเด่น &amp; ข้อสังเกต (Pros &amp; Cons - Style)
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
              <span className="text-xs font-bold text-emerald-700">6 ไฮไลท์สำคัญ</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>การขับขี่ดีที่สุดในคลาส:</strong> กระจายน้ำหนัก 50:50 ขับหลัง RWD ช่วงล่าง 5-Link หนึบแน่น เข้าโค้งคมกริบ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ราคาจำหน่ายคุ้มค่ามาก:</strong> รถประกอบไทยเริ่มต้นเพียง 569,900 บาท คุ้มค่าที่สุดต่อสมรรถนะ</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ตัวแรง XPOWER 435 hp:</strong> อัตราเร่ง 0-100 ใน 3.8 วินาที แรงที่สุดในราคาล้านต้น</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ความเร็วชาร์จ DC สูงถึง 140 kW:</strong> ชาร์จ 10-80% ได้ใน 26 นาที เร็วที่สุดในระดับราคาเดียวกัน</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>วงเลี้ยวแคบ 5.3 เมตร:</strong> คล่องตัวสูงมากในการมุดซอยแคบหรือกลับรถในเมือง</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>จุดศูนย์ถ่วงต่ำ 490 มม.:</strong> แบตเตอรี่บาง 110 มม. เกาะถนนนิ่งสนิท ไร้อาการโคลง</span>
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
                <span><strong>ไม่มีก้านปัดน้ำฝนหลัง:</strong> ในรุ่น Standard ไม่มี Rear Wiper ลุยฝนหนักอาจมีละอองน้ำเกาะ</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>อินโฟเทนเมนต์หน่วงเล็กน้อย:</strong> จอกลางและกล้อง 360° อาจโหลดช้าบ้างช่วงสตาร์ตรถ</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>วัสดุภายในบางจุดเรียบง่าย:</strong> มีพลาสติกแข็งในหลายตำแหน่งตามระดับราคาจำหน่าย</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>เบาะหลังกระชับ:</strong> พื้นที่เบาะนั่งตอนหลังเหมาะกับผู้ใหญ่ 2 คนสำหรับการเดินทางไกล</span>
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
              <strong>MG4 Long Range V (769,900 – 889,900 ฿)</strong> คือรุ่นที่ลงตัวที่สุดสำหรับคนรักการขับขี่ ได้แบตเตอรี่ใหญ่ ชาร์จไว 140 kW และความสนุกของระบบขับหลังเต็มพิกัด
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

      {/* 9. EVSELECT Scorecard Rating Grid */}
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
              <span className="text-3xl font-black text-lime-700">8.9</span>
              <span className="text-sm text-slate-500 font-medium"> / 10</span>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความสบายห้องโดยสารและเบาะนั่ง (Cabin Comfort &amp; Luxury)</span>
                <span className="text-lime-700 font-bold">8.2</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.2}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความสบายห้องโดยสารและเบาะนั่ง 8.2 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">สมรรถนะการขับขี่และอัตราเร่ง (Performance &amp; Dynamics)</span>
                <span className="text-lime-700 font-bold">9.7</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.7}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="สมรรถนะการขับขี่และอัตราเร่ง 9.7 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '97%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความเงียบและการซับแรงสะเทือน (NVH &amp; Ride Refinement)</span>
                <span className="text-lime-700 font-bold">8.7</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.7}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความเงียบและการซับแรงสะเทือน 8.7 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">เทคโนโลยีและระบบความบันเทิง (Tech &amp; Infotainment)</span>
                <span className="text-lime-700 font-bold">8.3</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.3}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="เทคโนโลยีและระบบความบันเทิง 8.3 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '83%' }}></div>
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
                <span className="text-lime-700 font-bold">9.0</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.0}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความปลอดภัยและโครงสร้าง 9.0 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '90%' }}></div>
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
          {/* Related Card 1 */}
          <Link
            href="/articles/byd-seal-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/byd-seal-hero.jpg"
                alt="รีวิว BYD Seal สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Performance EV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">EV Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว BYD Seal สเปกไทย 3 รุ่นย่อย: สปอร์ตซีดานไฟฟ้า 530 แรงม้า
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกสมรรถนะ 0-100 ใน 3.8 วิ แชสซี CTB เหนียวแน่น และโช้ค FSD
              </p>
            </div>
          </Link>

          {/* Related Card 2 */}
          <Link
            href="/articles/byd-atto-3-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/byd-atto-3-hero.jpg"
                alt="รีวิว BYD Atto 3 สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Popular SUV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">EV Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว BYD Atto 3 สเปกไทย: คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่าน่าใช้แค่ไหน?
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกความนุ่มนวล ความกว้างขวาง และความคุ้มค่าหลังปรับลดราคาพิเศษ
              </p>
            </div>
          </Link>

          {/* Related Card 3 */}
          <Link
            href="/articles/tesla-model-3-highland-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/tesla-model-3-highland-hero.jpg"
                alt="รีวิว Tesla Model 3 Highland สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Electric Sedan
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">EV Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Tesla Model 3 Highland สเปกไทย ปรับปรุงใหม่ นุ่ม เงียบ พรีเมียมขึ้นแค่ไหน?
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ทดสอบสมรรถนะและเปรียบเทียบจุดเด่นจุดด้อยบนถนนเมืองไทย
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
          <ShareButton title="รีวิว MG4 Electric สเปกไทย (Standard / Long Range / XPOWER): ขับหลัง 50:50 แฮทช์แบ็กไฟฟ้าที่ขับสนุกที่สุด | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
