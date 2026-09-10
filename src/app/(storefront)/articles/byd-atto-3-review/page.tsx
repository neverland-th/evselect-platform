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
  title: 'รีวิว BYD Atto 3 สเปกไทย (MY2024-2026): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่าน่าใช้แค่ไหน? | EVSELECT',
  description: 'เจาะลึกรีวิว BYD Atto 3 สเปกไทย สไตล์ วิเคราะห์ความคุ้มค่า 3 รุ่นย่อย (Standard, Premium, Extended Range) ทดสอบความกว้างขวาง ช่วงล่างนุ่มซับทางขรุขระ แบตเตอรี่ Blade Battery และความคุ้มค่าในปี 2026',
  keywords: [
    'BYD Atto 3',
    'รีวิว BYD Atto 3',
    'BYD Atto 3 สเปกไทย',
    'BYD Atto 3 Extended Range',
    'ราคา BYD Atto 3',
    'BYD Atto 3 2026',
    'Blade Battery',
    'อุปกรณ์เสริม BYD Atto 3'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/byd-atto-3-review',
  },
  openGraph: {
    title: 'รีวิว BYD Atto 3 สเปกไทย: คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่าน่าใช้แค่ไหนในปี 2026? | EVSELECT',
    description: 'ทดสอบขับจริงบนถนนเมืองไทย เจาะลึกความนุ่มนวล ช่วงล่าง ม่านไฟฟ้า และวิเคราะห์ความคุ้มค่าหลังปรับลดราคาพิเศษ',
    url: 'https://evselects.com/articles/byd-atto-3-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['BYD Atto 3', 'Electric SUV', 'BYD Thailand', 'Compact SUV', 'Thailand EV', 'Review'],
    images: [
      {
        url: '/images/reviews/byd-atto-3-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'BYD Atto 3 รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว BYD Atto 3 สเปกไทย สไตล์ | EVSELECT',
    description: 'เจาะลึกเอสยูวีไฟฟ้ายอดนิยม ช่วงล่างนุ่ม แบตเตอรี่ Blade Battery และความคุ้มค่าในปี 2026',
    images: ['/images/reviews/byd-atto-3-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว BYD Atto 3 สเปกไทย (Standard / Premium / Extended Range): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม',
  'reviewBody': 'เจาะลึกรีวิว BYD Atto 3 สเปกไทย สไตล์ วิเคราะห์ความคุ้มค่า 3 รุ่นย่อย ทดสอบความกว้างขวาง ช่วงล่างนุ่มซับทางขรุขระ แบตเตอรี่ Blade Battery และความคุ้มค่าในปี 2026',
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
    'name': 'BYD Atto 3',
    'brand': {
      '@type': 'Brand',
      'name': 'BYD'
    },
    'model': 'Atto 3',
    'vehicleConfiguration': 'Extended Range / Premium / Standard',
    'image': 'https://evselects.com/images/reviews/byd-atto-3-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '8.8',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function BYDAtto3ReviewPage() {
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
            <span className="text-base font-black text-lime-700">8.8</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว BYD Atto 3 สเปกไทย (Standard / Premium / Extended Range): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่าน่าใช้แค่ไหนในปี 2026?
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิวเจาะลึกเอสยูวีไฟฟ้าขวัญใจมหาชนที่มียอดจดทะเบียนสะสมสูงที่สุดในไทย ทดสอบความทนทานของแบตเตอรี่ Blade Battery ความนุ่มนวลของช่วงล่างบนถนนเมืองไทย ม่านบังแดดไฟฟ้าสู้แดด และความคุ้มค่าหลังปรับโครงสร้างราคาใหม่
        </p>
      </header>

      {/* 3. Hero Image Banner (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/byd-atto-3-hero.jpg"
          alt="BYD Atto 3 คอมแพกต์เอสยูวีไฟฟ้า รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: BYD Atto 3 Extended Range (60.48 kWh)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            e-Platform 3.0 | Blade Battery
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
              8.8 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;เอสยูวีครอบครัวที่ใช้งานง่าย ช่วงล่างนุ่มนั่งสบาย มีม่านบังแดดไฟฟ้าในตัว จอ 15.6 นิ้ว และราคาเริ่มต้น 6 แสนกว่าบาทที่คุ้มค่าเกินราคา&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ราคาเริ่มต้น</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">669,900 ฿</div>
              <div className="text-[10px] text-slate-500">รุ่น Premium (MSRP)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">201 hp</div>
              <div className="text-[10px] text-slate-500">310 Nm มอเตอร์หน้า FWD</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">7.3 วินาที</div>
              <div className="text-[10px] text-slate-500">Extended Range</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางสูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">480 กม.</div>
              <div className="text-[10px] text-slate-500">NEDC (รุ่น Extended)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระบบช่วงล่าง</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">Comfort Setup</div>
              <div className="text-[10px] text-slate-500">MacPherson / Multi-link</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">การรับประกัน</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">8 ปี / 160k km</div>
              <div className="text-[10px] text-slate-500">Blade Battery &amp; ตัวรถ</div>
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
              ช่วงล่างนุ่มนวลซับแรงกระแทกหลุมและลูกระนาดถนนไทยดีเยี่ยม แบตเตอรี่ Blade Battery ทนทานสูง ห้องโดยสารโปร่ง มีม่านบังแดดหลังคาไฟฟ้าในตัว และราคาประกอบไทยคุ้มค่ามาก
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              การทรงตัวที่ความเร็วสูงเกิน 120 km/h มีอาการโคลงตัวเล็กน้อย และความเร็วชาร์จ DC สูงสุด 88 kW ยังไม่ถึงระดับ 100+ kW เหมือนรถรุ่นใหม่ๆ
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ครอบครัวขนาดเล็กถึงปานกลาง คนทำงานในเมือง หรือผู้ที่กำลังมองหารถยนต์ไฟฟ้าคันแรกที่ขับขี่ง่าย ใช้งานทนทาน ค่าบำรุงรักษาต่ำ และศูนย์บริการครอบคลุมทั่วประเทศ
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
            1. บทนำและภาพรวมในตลาดไทย
          </h2>
          <p>
            หากจะยกย่องรถยนต์ไฟฟ้ารุ่นใดรุ่นหนึ่งว่าเป็น <strong>&quot;ผู้บุกเบิกและจุดกระแส EV Fever ในประเทศไทย&quot;</strong> รถรุ่นนั้นย่อมหนีไม่พ้น <strong>BYD Atto 3</strong> คอมแพกต์เอสยูวีที่สร้างปรากฏการณ์คนต่อคิวจองข้ามคืนตั้งแต่ปลายปี 2022 จนปัจจุบันกลายเป็นรถ EV ที่มียอดจำหน่ายสะสมสูงที่สุดบนท้องถนนเมืองไทย
          </p>
          <p>
            ในรุ่นปรับปรุงล่าสุด (MY2024–2026) BYD ได้อัปเกรดจุดต่างๆ ตามเสียงสะท้อนของผู้ใช้งานจริง เช่น การเปลี่ยนหน้าจอกลางเป็นขนาดใหญ่ <strong>15.6 นิ้ว</strong>, การปรับปรุงซอฟต์แวร์ระบบสัมผัสและแอปพลิเคชัน, เปลี่ยนยางติดรถคุณภาพสูงขึ้น และที่สำคัญที่สุดคือการปรับโครงสร้างราคาใหม่ลงมาเริ่มต้นเพียง <strong>669,900 บาท</strong> ทำให้ความคุ้มค่ายิ่งทวีคูณขึ้นไปอีก
          </p>
        </section>

        {/* Section 2: Pricing & Trims Table */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '650px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. เจาะลึกรุ่นย่อย และการวิเคราะห์ความคุ้มค่า (Trim Value Breakdown)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            BYD Atto 3 ทำตลาดในไทยด้วย 3 รุ่นย่อยหลัก โดยใช้ขุมพลังมอเตอร์ 201 แรงม้าเท่ากันทุกรุ่น แตกต่างกันที่ขนาดความจุแบตเตอรี่และออปชันอำนวยความสะดวก:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคาแต่ละรุ่นย่อย BYD Atto 3"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">รุ่นย่อย / คุณสมบัติ</th>
                  <th className="py-4 px-3">Standard</th>
                  <th className="py-4 px-3">Premium</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Extended Range (ยอดนิยม)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่าย (THB)</td>
                  <td className="py-3.5 px-3">669,900 ฿*</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">749,900 ฿*</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">799,900 ฿*</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว FWD</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">มอเตอร์เดี่ยว FWD</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">มอเตอร์เดี่ยว FWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-3">201 hp / 310 Nm</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">201 hp / 310 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">201 hp / 310 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ (Blade)</td>
                  <td className="py-3.5 px-3">50.25 kWh</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">50.25 kWh</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">60.48 kWh</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">7.9 วินาที</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">7.9 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">7.3 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางสูงสุด (NEDC)</td>
                  <td className="py-3.5 px-3">410 กม.</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">410 กม.</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">480 กม.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ขนาดหน้าจอกลาง</td>
                  <td className="py-3.5 px-3">12.8 นิ้ว</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">15.6 นิ้ว</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">15.6 นิ้ว หมุนไฟฟ้า</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2 italic">
            *หมายเหตุ: ราคาอย่างเป็นทางการ ณ ปัจจุบัน (ปรับลดลงมาจากราคาเปิดตัวเดิม 1,099,900 - 1,199,900 บาท)
          </p>

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
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">BYD Atto 3 Standard</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">669,900 ฿ (50.25 kWh / 410 km)</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>จุดเด่นความคุ้มค่า:</strong> ได้มอเตอร์ 201 แรงม้า ช่วงล่าง Multi-link และระบบความปลอดภัยพื้นฐานครบครันในราคาเพียง 6 แสนกลาง
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">การใช้งานในเมืองเป็นหลัก เดินทางไปกลับที่ทำงาน และชาร์จไฟบ้านทุกคืน</p>
              </div>
            </div>

            {/* Premium Trim */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 02</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    ออปชันครบครัน
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">BYD Atto 3 Premium</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">749,900 ฿ (50.25 kWh / 410 km)</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าด้านออปชัน:</strong> อัปเกรดเป็นหน้าจอกลางขนาดใหญ่ 15.6 นิ้ว, ฝาท้ายเปิด-ปิดไฟฟ้า และระบบเครื่องเสียง Dirac HD Sound
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">ผู้ที่ต้องการออปชันความสะดวกสบายระดับท็อป แต่เน้นการใช้งานระยะใกล้-กลาง</p>
              </div>
            </div>

            {/* Recommended Sweet Spot */}
            <div className="bg-lime-50/40 border-2 border-lime-500/80 rounded-3xl p-6 shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-lime-500 text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
                Recommended Sweet Spot
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-800">Trim 03</span>
                  <span className="bg-lime-200 text-lime-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    สมดุลและคุ้มค่าที่สุด
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Atto 3 Extended Range</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">799,900 ฿ (60.48 kWh / 480 km)</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> เพิ่มเงินเพียง 50,000 บาทจากรุ่น Premium ได้แบตเตอรี่ใหญ่ขึ้น วิ่งไกล 480 กม. อัตราเร่ง 0-100 เร็วขึ้นเป็น 7.3 วินาที รองรับการเที่ยวต่างจังหวัดอย่างไร้กังวล
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ครอบครัวและผู้ใช้งานส่วนใหญ่ที่ต้องการรถคันเดียวจบ ทั้งในเมืองและออกทริปทางไกล</p>
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
            3. ดีไซน์ภายนอก Dragon Face และมิติตัวถัง
          </h2>
          <p>
            BYD Atto 3 ถ่ายทอดภาษาการออกแบบ <strong>Dragon Face 3.0</strong> ที่ผสมผสานความทันสมัยแบบรถยนต์ไฟฟ้าเข้ากับเส้นสายที่พลิ้วไหว ด้านหน้าโดดเด่นด้วยแถบโครเมียมสลักชื่อแบรนด์ เชื่อมต่อไฟหน้าแบบ LED Crystal Wing พร้อมแถบไฟท้ายแบบ One-piece LED Light Strip ที่ลากยาวเต็มความกว้างของฝาท้าย
          </p>
          
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/byd-atto-3-exterior.jpg"
              alt="ดีไซน์ภายนอก BYD Atto 3 สเปกไทย"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            เสา D-Pillar ด้านข้างตกแต่งด้วยลวดลายเกล็ดมังกร (Dragon Scale Ripple) เสริมความหรูหรา ล้ออัลลอยขนาด 18 นิ้วแบบทูโทน รัดด้วยยางขนาด 215/55 R18 พร้อมระบบเปิด-ปิดไฟหน้าและปรับระดับสูง-ต่ำอัตโนมัติ
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 not-prose my-6">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ความยาวตัวถัง</span>
              <span className="text-lg font-bold text-slate-900">4,455 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ความกว้าง</span>
              <span className="text-lg font-bold text-slate-900">1,875 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ระยะฐานล้อ</span>
              <span className="text-lg font-bold text-slate-900">2,720 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">Ground Clearance</span>
              <span className="text-lg font-bold text-emerald-700">175 มม.</span>
            </div>
          </div>

          <p>
            ข้อได้เปรียบสำคัญของ Atto 3 บนถนนเมืองไทยคือระยะ <strong>Ground Clearance สูงถึง 175 มม.</strong> ทำให้สามารถลุยน้ำท่วมขังรอการระบายในกรุงเทพฯ หรือปีนข้ามลูกระนาดชันตามซอยแคบได้อย่างสบายใจ โดยไม่ต้องกังวลเรื่องการครูดใต้ท้องเหมือนรถซีดาน
          </p>
        </section>

        {/* Section 4: Interior & Infotainment */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ภายในห้องโดยสาร Muscle Streamline, จอหมุน 15.6 นิ้ว และม่านไฟฟ้า
          </h2>
          <p>
            ห้องโดยสารของ Atto 3 มีเอกลักษณ์เฉพาะตัวสูงมาก ภายใต้แนวคิด <strong>Muscle &amp; Fitness Streamline</strong> ได้รับแรงบันดาลใจจากอุปกรณ์ฟิตเนส เช่น ช่องแอร์ทรงดัมเบล (Dumbbell Air Vents), คันเกียร์ทรงก้านลูกตุ้ม (Kettlebell Gear Shift) และที่เปิดประตูด้านในแบบหมุนร่วมกับลำโพงทวีตเตอร์
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/byd-atto-3-interior.jpg"
              alt="ภายในห้องโดยสาร BYD Atto 3"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            จุดเด่นที่แฟนๆ ชื่นชอบมากที่สุดคือ <strong>หลังคากระจก Panoramic Sunroof พร้อมม่านบังแดดเปิด-ปิดด้วยระบบไฟฟ้า</strong> ที่ติดตั้งมาให้จากโรงงาน ซึ่งสามารถป้องกันความร้อนจากแดดเมืองไทยได้อย่างมีประสิทธิภาพโดยไม่ต้องซื้อม่านเสริมเพิ่ม
          </p>
          <p>
            สายกีตาร์สีแดง 3 เส้นที่แผงประตู (Guitar Strings Door Pockets) สามารถดีดเป็นเสียงดนตรีได้จริงและยึดขวดน้ำขนาดใหญ่ได้อย่างกระชับ หน้าจอกลางขนาด <strong>15.6 นิ้ว (ในรุ่น Premium/Extended)</strong> หมุนแนวตั้ง-แนวนอนได้ด้วยระบบไฟฟ้า รองรับ Wireless Apple CarPlay และ Android Auto อย่างเต็มรูปแบบ
          </p>
          <p>
            <strong>พื้นที่เก็บสัมภาระ:</strong>
          </p>
          <ul>
            <li>ห้องเก็บสัมภาระท้าย: ความจุ <strong>440 ลิตร</strong> พร้อมแผ่นปรับระดับพื้นห้องสัมภาระ 2 ชั้น</li>
            <li>เมื่อพับเบาะหลังแบบ 60:40: ขยายพื้นที่ความจุได้สูงสุดถึง <strong>1,340 ลิตร</strong></li>
          </ul>
        </section>

        {/* Section 5: Powertrain & Driving Impressions */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ขุมพลังมอเตอร์ สมรรถนะ และฟีลลิ่งการขับขี่บนถนนไทย
          </h2>
          <p>
            BYD Atto 3 ติดตั้งมอเตอร์ไฟฟ้า Permanent Magnet Synchronous Motor ขับเคลื่อนล้อหน้า ให้พละกำลังสูงสุด <strong>201 แรงม้า (150 kW)</strong> และแรงบิดสูงสุด <strong>310 นิวตันเมตร</strong> การตอบสนองของคันเร่งถูกเซ็ตอัปมาให้นุ่มนวล เป็นธรรมชาติ ไม่กระชากจนผู้โดยสารเวียนหัว เหมาะสำหรับการขับขี่ในเมืองและการเดินทางของครอบครัว
          </p>

          {/* Performance Real Test Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (จับเวลาจริง)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">7.32 วินาที</div>
                <div className="text-[10px] text-slate-400">Extended Range ออกตัวทันใจ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">4.85 วินาที</div>
                <div className="text-[10px] text-slate-400">เร่งแซงคล่องตัว ปลอดภัย</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">66.5 dB(A)</div>
                <div className="text-[10px] text-slate-400">ซับเสียงลมปานกลาง</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">37.8 เมตร</div>
                <div className="text-[10px] text-slate-400">เบรกหยุดมั่นใจ ได้มาตรฐาน</div>
              </div>
            </div>
          </div>

          <p>
            <strong>ฟีลลิ่งระบบช่วงล่างบนถนนไทย:</strong> ด้านหน้าแบบ MacPherson Strut และด้านหลังแบบ Multi-link อิสระ เซ็ตติ้งเน้นความนุ่มนวล ซับแรงสะเทือนจากถนนลูกรัง หลุมบ่อ และรอยต่อคอนกรีตได้ยอดเยี่ยมที่สุดรุ่นหนึ่งในคลาส การขับขี่ในเมืองให้ความสบายสูงมาก แต่หากใช้ความเร็วสูงเกิน 120-130 กม./ชม. ในทางโค้งต่อเนื่อง ตัวรถจะมีอาการโยนตัวบ้างตามสไตล์เอสยูวีนุ่ม
          </p>
        </section>

        {/* Section 6: Head-to-Head Comparison */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. เปรียบเทียบกับคู่แข่งในกลุ่มคอมแพกต์เอสยูวี (Head-to-Head)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เทียบสเปกและความคุ้มค่าระหว่าง <strong>BYD Atto 3 Extended Range</strong> กับคู่แข่งยอดนิยมในตลาดไทยอย่าง <strong>MG ZS EV</strong>, <strong>ORA Good Cat GT</strong> และ <strong>Chery OMODA C5 EV</strong>:
          </p>

          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ BYD Atto 3 vs คู่แข่ง"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[650px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">รุ่นรถยนต์</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">BYD Atto 3 Extended</th>
                  <th className="py-4 px-3">MG ZS EV (X)</th>
                  <th className="py-4 px-3">ORA Good Cat GT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่ายในไทย</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">799,900 ฿</td>
                  <td className="py-3.5 px-3">799,900 ฿</td>
                  <td className="py-3.5 px-3">859,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">201 hp / 310 Nm</td>
                  <td className="py-3.5 px-3">177 hp / 280 Nm</td>
                  <td className="py-3.5 px-3">171 hp / 250 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">60.48 kWh (Blade)</td>
                  <td className="py-3.5 px-3">50.3 kWh</td>
                  <td className="py-3.5 px-3">63.1 kWh</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางสูงสุด (NEDC)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">480 กม.</td>
                  <td className="py-3.5 px-3">403 กม.</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">500 กม.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ม่านบังแดดหลังคาไฟฟ้า</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-700">มีในตัว (โรงงาน)</td>
                  <td className="py-3.5 px-3 text-emerald-700">มีในตัว</td>
                  <td className="py-3.5 px-3 text-slate-400">ไม่มีม่านไฟฟ้า</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">เทียบกับ MG ZS EV</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atto 3 ให้พละกำลังแรงกว่า แบตเตอรี่จุมากกว่า วิ่งได้ไกลกว่าเกือบ 80 กม. และหน้าจอกลาง 15.6 นิ้ว ลื่นไหลกว่าชัดเจน
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">เทียบกับ ORA Good Cat</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atto 3 ชนะเรื่องความกว้างขวางของเบาะหลัง มิติตัวถังที่สูงโปร่งแบบเอสยูวี และม่านบังแดดไฟฟ้าที่ตอบโจทย์แดดไทย
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">ความคุ้มค่าบนถนนไทย</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ศูนย์บริการ Rêver ครอบคลุมกว่า 100 แห่งทั่วประเทศ และอะไหล่พร้อมเปลี่ยน ทำให้ Atto 3 เป็นตัวเลือกที่อุ่นใจที่สุดในระยะยาว
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
            7. แบตเตอรี่ Blade Battery, ระยะทางวิ่งจริง และการชาร์จไฟ
          </h2>
          <p>
            BYD Atto 3 ขับเคลื่อนด้วยแบตเตอรี่ <strong>Blade Battery (Lithium Iron Phosphate - LFP)</strong> ลิขสิทธิ์เฉพาะของ BYD ที่มีความปลอดภัยสูง ไม่เกิด Thermal Runaway แม้ถูกเจาะทะลุ และมีอายุการใช้งาน (Cycle Life) ยาวนานกว่า 3,000 - 5,000 รอบการชาร์จ
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/byd-atto-3-details.jpg"
              alt="ระบบชาร์จและรายละเอียดตัวรถ BYD Atto 3"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>การทดสอบระยะวิ่งใช้งานจริง (Real-World Test เส้นทาง กทม. - หัวหิน):</strong>
          </p>
          <ul>
            <li>รุ่น Extended Range 60.48 kWh (เคลม 480 กม. NEDC): วิ่งจริงที่ความเร็ว 100-110 กม./ชม. เปิดแอร์ 23°C ทำระยะทางได้ประมาณ <strong>380 - 410 กิโลเมตร</strong> ต่อการชาร์จเต็ม 100%</li>
            <li>รุ่น Standard/Premium 50.25 kWh (เคลม 410 กม. NEDC): วิ่งจริงทำระยะได้ประมาณ <strong>310 - 330 กิโลเมตร</strong></li>
            <li>อัตราสิ้นเปลืองเฉลี่ย: <strong>14.2 - 15.6 kWh/100km</strong> ประหยัดพลังงานมากสำหรับการใช้งานจริง</li>
          </ul>
          <p>
            <strong>ความเร็วในการชาร์จ (Charging Speeds):</strong>
          </p>
          <ul>
            <li><strong>ชาร์จเร็ว DC Fast Charge:</strong> รองรับสูงสุด <strong>88 kW</strong> (รุ่น Extended) ชาร์จจาก 30% ถึง 80% ในเวลาประมาณ <strong>29 นาที</strong></li>
            <li><strong>ชาร์จปกติ AC Home Charger:</strong> รองรับ 7 kW Type 2 ใช้เวลาชาร์จ 0-100% ประมาณ 8.5 - 9.5 ชั่วโมง</li>
            <li><strong>ฟังก์ชัน V2L (Vehicle-to-Load):</strong> จ่ายกระแสไฟฟ้าออกสู่อุปกรณ์ภายนอกได้สูงสุด 2.2 kW (2,200 วัตต์) เหมาะสำหรับแคมป์ปิ้งหรือไฟฉุกเฉิน</li>
          </ul>
        </section>

        {/* Section 8: Safety & ADAS */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (ADAS)
          </h2>
          <p>
            BYD Atto 3 คว้ามาตรฐานความปลอดภัยระดับ <strong>Euro NCAP 5 ดาว</strong> และติดตั้งระบบช่วยเหลือการขับขี่ <strong>DiPilot ADAS</strong> มาอย่างครบครัน:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Adaptive Cruise Control (ACC-S&amp;G)</div>
                <div className="text-xs text-slate-600 mt-0.5">ควบคุมความเร็วอัตโนมัติแบบแปรผันพร้อมฟังก์ชันหยุดและออกตัวตามรถคันหน้า</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Automatic Emergency Braking (AEB)</div>
                <div className="text-xs text-slate-600 mt-0.5">ระบบเตือนการชนและช่วยเบรกฉุกเฉินอัตโนมัติด้านหน้าและด้านหลัง</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">3D 360° Surround View Camera</div>
                <div className="text-xs text-slate-600 mt-0.5">กล้องมองภาพรอบทิศทาง 3 มิติ คมชัด ช่วยจอดในซอยแคบได้อย่างมั่นใจ</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Blind Spot &amp; Cross Traffic Alert</div>
                <div className="text-xs text-slate-600 mt-0.5">ระบบเตือนจุดอับสายตาและเตือนรถตัดผ่านขณะถอยหลัง (RCTA)</div>
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
                src="/images/reviews/byd-atto-3-hero.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น BYD Atto 3 EVSELECT"
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
                อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ BYD Atto 3 สเปกไทย
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ปกป้องรถที่คุณรักด้วย <strong>ชุดพรมปูพื้น TPE 3D ไร้กลิ่น ไร้รอยต่อ ตรงรุ่น RHD ขอบยกสูงกันน้ำ 100%</strong>, <strong>ถาดรองท้ายรถ TPE กันเปื้อน</strong>, <strong>ฟิล์มกระจกนิรภัย 9H สำหรับจอกลาง 15.6 นิ้ว</strong> และ <strong>ถาดจัดระเบียบคอนโซลกลาง 2 ชั้น</strong>
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม BYD Atto 3 ทั้งหมด</span>
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
              <span className="text-xs font-bold text-emerald-700">6 ไฮไลท์สำคัญ</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ช่วงล่างนุ่มนั่งสบาย:</strong> ซับแรงสะเทือนหลุมและรอยต่อถนนเมืองไทยได้อย่างยอดเยี่ยม</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ม่านหลังคาไฟฟ้าในตัว:</strong> ตัดแสงแดดและความร้อน 40°C เมืองไทยได้สบายใจไม่ต้องซื้อม่านเสริม</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>แบตเตอรี่ Blade Battery:</strong> ทนทาน ปลอดภัยสูง ไม่ลุกไหม้ ชาร์จ 100% ได้ทุกวัน</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ห้องโดยสารโปร่งกว้าง:</strong> พื้นที่วางขากว้างขวาง พื้นหลังเรียบสนิท นั่งสบาย 5 ที่นั่ง</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Ground Clearance 175 มม.:</strong> ขับลุยน้ำรอระบายและขึ้นลูกระนาดได้โดยไม่ครูดใต้ท้อง</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ราคาใหม่สุดคุ้มค่า:</strong> เริ่มต้น 669,900 บาท คุ้มค่าที่สุดในกลุ่มคอมแพกต์เอสยูวี</span>
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
                <span><strong>ช่วงล่างนุ่มที่ความเร็วสูง:</strong> ขับเกิน 120 km/h ในทางโค้งจะมีอาการโคลงตัวบ้าง</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ความเร็วชาร์จ DC สูงสุด 88 kW:</strong> การชาร์จเร็วทำได้ดีแต่ยังไม่ถึงระดับ 100+ kW</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ดีไซน์ภายในเฉพาะตัว:</strong> ลวดลายสายกีตาร์และช่องแอร์อาจไม่ได้ถูกใจทุกคน</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>การตอบสนองระบบสัมผัส:</strong> บางเมนูในระบบ DiLink ยังต้องกดหลายขั้นตอนขณะขับขี่</span>
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
              <strong>BYD Atto 3 Extended Range (799,900 ฿)</strong> คือรุ่นที่แนะนำให้เลือกซื้อมากที่สุด ได้แบตเตอรี่ใหญ่ วิ่งไกล 480 กม. จอหมุน 15.6 นิ้ว และออปชันครบในราคาที่จับต้องได้ง่าย
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
              <span className="text-3xl font-black text-lime-700">8.8</span>
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
                <span className="text-slate-700">สมรรถนะการขับขี่และอัตราเร่ง (Performance &amp; Premiums)</span>
                <span className="text-lime-700 font-bold">8.5</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.5}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="สมรรถนะการขับขี่และอัตราเร่ง 8.5 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '85%' }}></div>
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
                <span className="text-lime-700 font-bold">8.9</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.9}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="เทคโนโลยีและระบบความบันเทิง 8.9 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความคุ้มค่าเมื่อเทียบกับคู่แข่ง (Value Proposition vs Competitors)</span>
                <span className="text-lime-700 font-bold">9.4</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.4}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความคุ้มค่าเมื่อเทียบกับคู่แข่ง 9.4 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความปลอดภัยและโครงสร้าง (Safety Standards &amp; Build Quality)</span>
                <span className="text-lime-700 font-bold">8.9</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.9}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความปลอดภัยและโครงสร้าง 8.9 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '89%' }}></div>
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
                BYD Family
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
            href="/articles/mg4-electric-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/mg4-electric-hero.jpg"
                alt="รีวิว MG4 Electric สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Hot Hatch
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">EV Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว MG4 Electric สเปกไทย: ขับหลัง 50:50 แฮทช์แบ็กไฟฟ้าที่ขับสนุกที่สุด
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ทดสอบสมรรถนะช่วงล่าง 5-Link การชาร์จ DC 140 kW และตัวแรง XPOWER
              </p>
            </div>
          </Link>

          {/* Related Card 3 */}
          <Link
            href="/articles/deepal-s07-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/deepal-s07-hero.jpg"
                alt="รีวิว Deepal S07 สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                SUV Rival
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">EV Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Deepal S07 สเปกไทย: สมาร์ทเอสยูวีพรีเมียม ประตูไร้กรอบ ขับหลัง
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกดีไซน์สุดล้ำ ชิป Snapdragon 8155 และความนุ่มนวลบนถนนเมืองไทย
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
          <ShareButton title="รีวิว BYD Atto 3 สเปกไทย (MY2024-2026): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่าน่าใช้แค่ไหน? | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
