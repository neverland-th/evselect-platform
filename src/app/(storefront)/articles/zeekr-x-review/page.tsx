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
  title: 'รีวิว Zeekr X (Flagship AWD & Standard) สเปกไทย: พรีเมียมคอมแพกต์ครอสโอเวอร์ 489 แรงม้า | EVSELECT',
  description: 'เจาะลึกรีวิว The New Zeekr X สเปกไทย ทั้งรุ่น Standard RWD (335 hp) และ Flagship AWD (489 hp) 0-100 ใน 3.7 วินาที แพลตฟอร์ม SEA ดีไซน์สแกนดิเนเวีย ลำโพง Yamaha 13 ตัว และผลทดสอบจริงบนถนนเมืองไทย',
  keywords: [
    'Zeekr X',
    'รีวิว Zeekr X',
    'Zeekr X สเปกไทย',
    'ราคา Zeekr X',
    'Zeekr Thailand',
    'Zeekr X vs Volvo EX30',
    'อุปกรณ์เสริม Zeekr X',
    'พรมปูพื้น Zeekr X'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/zeekr-x-review',
  },
  openGraph: {
    title: 'รีวิว Zeekr X สเปกไทย: พรีเมียมคอมแพกต์ครอสโอเวอร์ 489 แรงม้า | EVSELECT Reviews',
    description: 'ทดสอบสมรรถนะ Zeekr X สเปกไทย ขุมพลังสูงสุด 489 แรงม้า อัตราเร่ง 0-100 ใน 3.7 วินาที ห้องโดยสารหรูหราวัสดุ Suede พร้อมอุปกรณ์เสริมตรงรุ่น',
    url: 'https://evselects.com/articles/zeekr-x-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-09-11T08:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['Zeekr X', 'Zeekr Thailand', 'Compact Crossover', 'Electric Vehicles', 'Review'],
    images: [
      {
        url: '/images/reviews/zeekr-x-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Zeekr X รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว Zeekr X สเปกไทย | EVSELECT',
    description: 'เจาะลึกพรีเมียมคอมแพกต์ 489 แรงม้า แพลตฟอร์ม SEA และระบบเสียง Yamaha',
    images: ['/images/reviews/zeekr-x-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว Zeekr X (Flagship AWD & Standard) สเปกไทย: พรีเมียมคอมแพกต์ครอสโอเวอร์ ดีไซน์ล้ำ ออปชันหรูระดับไฮเอนด์',
  'reviewBody': 'เจาะลึกรีวิว The New Zeekr X สเปกไทย ทั้งรุ่น Standard RWD (335 hp) และ Flagship AWD (489 hp) 0-100 ใน 3.7 วินาที แพลตฟอร์ม SEA ดีไซน์สแกนดิเนเวีย ลำโพง Yamaha 13 ตัว และผลทดสอบจริงบนถนนเมืองไทย',
  'datePublished': '2026-08-25T08:00:00+07:00',
  'dateModified': '2026-09-11T08:00:00+07:00',
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
    'name': 'Zeekr X',
    'brand': {
      '@type': 'Brand',
      'name': 'ZEEKR'
    },
    'model': 'X',
    'vehicleConfiguration': 'Standard RWD / Flagship AWD',
    'image': 'https://evselects.com/images/reviews/zeekr-x-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '9.0',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function ZeekrXReviewPage() {
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
              ทดสอบขับขี่จริงบนถนนไทย
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 25 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 12 นาที
            </span>
          </div>

          {/* Header Score Pill */}
          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-700">9.0</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Zeekr X (Flagship AWD &amp; Standard): พรีเมียมคอมแพกต์ครอสโอเวอร์ 489 แรงม้า ดีไซน์ล้ำ ออปชันหรูระดับไฮเอนด์
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          สัมผัสความหรูหราสไตล์สแกนดิเนเวียจากแพลตฟอร์ม <strong>SEA (Sustainable Experience Architecture)</strong> ร่วมกับ Volvo EX30 ผสานความแรงระดับ <strong>489 แรงม้า</strong> อัตราเร่ง 0-100 ใน 3.7 วินาที ประตูไร้กรอบ (Frameless Doors), ระบบเสียง <strong>Yamaha 13 ลำโพง</strong> พร้อมลำโพงฝังพนักพิงศีรษะ และผลทดสอบสมรรถนะจริงบนถนนเมืองไทย
        </p>
      </header>

      {/* 3. Hero Banner Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/zeekr-x-hero.jpg"
          alt="Zeekr X พรีเมียมคอมแพกต์ครอสโอเวอร์ สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: Zeekr X Flagship AWD (Dual-Motor 489 hp / 365 kW)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            แพลตฟอร์ม SEA พัฒนาร่วมกับสวีเดน
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
              9.0 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;วัสดุห้องโดยสารพรีเมียมเกินราคา ช่วงล่างยุโรปแน่นหนึบมั่นใจ และอัตราเร่ง 0-100 ใน 3.7 วินาทีที่เร็วแรงเทียบชั้นซูเปอร์คาร์ในงบประมาณเริ่มต้นไม่ถึงล้านบาท&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ราคาเริ่มต้น</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">899,000 ฿</div>
              <div className="text-[10px] text-slate-500">รุ่น Standard RWD</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">335 – 489 hp</div>
              <div className="text-[10px] text-slate-500">แรงบิด 373 – 573 Nm</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">3.7 วินาที (AWD)</div>
              <div className="text-[10px] text-slate-500">5.6s ในรุ่น Standard</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางสูงสุด (NEDC)</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">450 – 470 กม.</div>
              <div className="text-[10px] text-slate-500">แบต 61 kWh LFP / 66 kWh NCM</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระบบเสียงพรีเมียม</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">Yamaha 13 ลำโพง</div>
              <div className="text-[10px] text-slate-500">ลำโพงฝังพนักพิงศีรษะ</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระบบเบรกสมรรถนะ</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">Akebono 4-Pot</div>
              <div className="text-[10px] text-slate-500">ระยะเบรก 100-0 ใน 34.5m</div>
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
              งานประกอบและวัสดุห้องโดยสารบุหนังกลับ Microfiber Suede ตกแต่ง Rose Gold หรูหราเทียบเท่ารถยุโรปราคา 2-3 ล้าน, พละกำลัง 489 แรงม้า อัตราเร่ง 0-100 ใน 3.7 วินาที พร้อมเบรก Akebono และระบบเสียง Yamaha 13 ลำโพง
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              พื้นที่เก็บสัมภาระท้ายขนาด 362 ลิตร เหมาะกับการใช้งานทั่วไปมากกว่าการขนของชิ้นใหญ่ และหลังคาแก้วพาโนรามาไม่มีม่านบังแดดไฟฟ้าในตัว ต้องติดตั้งม่านเสริมตรงรุ่นเพื่อสู้แดดเมืองไทย
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              คนรุ่นใหม่ คนทำงานในเมือง และครอบครัวขนาดเล็กที่ต้องการรถครอสโอเวอร์ไฟฟ้าพรีเมียม ดีไซน์โดดเด่นไม่ซ้ำใคร และสมรรถนะการขับขี่สไตล์ยุโรปในราคาคุ้มค่า
            </p>
          </div>
        </div>
      </div>

      {/* 6. Article Body Content */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-lime-600 prose-strong:text-slate-900 text-slate-700">

        {/* SECTION 01 */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            1. บทนำและภาพรวมในตลาดไทย (Introduction & Market Context)
          </h2>
          <p>
            <strong>Zeekr (ซีเคอร์)</strong> คือแบรนด์ยานยนต์ไฟฟ้าระดับพรีเมียมในเครือ Geely Holding Group ซึ่งมีแบรนด์ยานยนต์ชั้นนำระดับโลกอย่าง Volvo, Polestar และ Lotus อยู่ในเครือเดียวกัน การเปิดตัว <strong>Zeekr X</strong> ในประเทศไทย ถือเป็นการนำเสนอตัวเลือกครอสโอเวอร์ไฟฟ้าขนาดกะทัดรัดที่ผสมผสานงานวิศวกรรมและดีไซน์จากศูนย์ออกแบบระดับโลกในเมืองโกเธนเบิร์ก ประเทศสวีเดน
          </p>
          <p>
            Zeekr X พัฒนาขึ้นบนแพลตฟอร์มชั้นนำ แต่ Zeekr X ถูกวางตำแหน่งให้มีความหรูหรา ใช้วัสดุห้องโดยสารเกรดพรีเมียม และมอบความกว้างขวางของพื้นที่ใช้สอยมากกว่าในระดับราคาที่จับต้องได้ง่าย
          </p>
          <p>
            ทุกคันที่จำหน่ายโดย <strong>Zeekr Thailand</strong> มาพร้อมการรับประกันคุณภาพตัวรถ <strong>5 ปี หรือ 150,000 กม.</strong>, รับประกันแบตเตอรี่และมอเตอร์ <strong>8 ปี หรือ 180,000 กม.</strong>, ฟรีประกันภัยชั้น 1 และฟรี Wallbox AC 22 kW พร้อมติดตั้ง
          </p>
        </section>

        {/* SECTION 02: TRIM BREAKDOWN & VALUE ANALYSIS */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '650px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. เจาะลึกรุ่นย่อย และการวิเคราะห์ความคุ้มค่า (Trim Value Breakdown)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Zeekr Thailand ทำตลาด Zeekr X ทั้งหมด <strong>2 รุ่นย่อยหลัก</strong> พร้อมการปรับโครงสร้างราคาใหม่ที่เร้าใจยิ่งขึ้น:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคา 2 รุ่นย่อย Zeekr X ในไทย"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[620px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">คุณสมบัติ / รุ่นย่อย</th>
                  <th className="py-4 px-3">Standard RWD</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Flagship AWD (Sweet Spot)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่ายปัจจุบัน</td>
                  <td className="py-3.5 px-3">899,000 ฿</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">1,049,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว RWD (ขับหลัง)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">มอเตอร์คู่ Dual-Motor AWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-3 font-semibold">250 kW / 335 hp (373 Nm)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">365 kW / 489 hp (573 Nm)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">5.6 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">3.7 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ประเภทและขนาดแบตเตอรี่</td>
                  <td className="py-3.5 px-3 font-semibold">61.0 kWh (Lithium-ion LFP)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold">66.0 kWh (Lithium-ion NCM)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งสูงสุด (NEDC Mode)</td>
                  <td className="py-3.5 px-3 font-semibold">450 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">470 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">กำลังชาร์จ AC / DC</td>
                  <td className="py-3.5 px-3">AC 11 kW / DC 150 kW</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">AC 22 kW / DC 150 kW</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบเบรกหน้า</td>
                  <td className="py-3.5 px-3">ดิสก์เบรกมาตรฐาน</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">Akebono 4-Piston สีสปอร์ต</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ขนาดล้อและยาง</td>
                  <td className="py-3.5 px-3">19 นิ้ว Alloy (235/50 R19)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">20 นิ้ว Forged Wheel (245/45 R20)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">วัสดุตกแต่งเพดานหลังคา</td>
                  <td className="py-3.5 px-3">ผ้า (Fabric)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold text-slate-900">หนังกลับ (Microfiber Suede)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อุปกรณ์พิเศษเฉพาะรุ่น</td>
                  <td className="py-3.5 px-3 text-slate-400">-</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 text-xs font-semibold text-lime-900">AR HUD 24.3&quot;, ประตูไฟฟ้าคู่หน้า, จอเสา B, เบาะนวด+ดันหลัง</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep-dive 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* Standard RWD */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    คุ้มค่าคล่องตัว 450 กม.
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Standard RWD</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">899,000 ฿ | 335 hp | 450 km NEDC</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าระดับเริ่มต้น:</strong> มอเตอร์เดี่ยวขับเคลื่อนล้อหลัง อัปเกรดพละกำลังเป็น 335 แรงม้า (250 kW) แรงบิด 373 Nm 0-100 ใน 5.6 วินาที แบตเตอรี่ LFP 61 kWh รองรับชาร์จ AC 11 kW วิ่งได้ 450 กม. (NEDC) ได้จอกลาง 14.6 นิ้ว ชิป Snapdragon 8155 ล้อ 19 นิ้ว และลำโพง Yamaha 13 ตำแหน่งครบครัน
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">การใช้งานในเมืองและชานเมือง เน้นความคล่องตัว อัตราเร่งเร้าใจ และค่าตัวจับต้องง่ายที่สุด</p>
              </div>
            </div>

            {/* Flagship AWD */}
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
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Flagship AWD</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">1,049,000 ฿ | 489 hp | 0-100 ใน 3.7s</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> เพิ่มเงิน 150,000 บาท ได้พละกำลังกระโดดเป็น 489 แรงม้า (365 kW) แรงบิด 573 Nm ขับเคลื่อน 4 ล้อ AWD อัตราเร่ง 0-100 ใน 3.7 วินาที แบตเตอรี่ NCM 66 kWh ชาร์จ AC 22 kW พร้อมเบรก Akebono 4 พ็อต ล้อ Forged 20 นิ้ว หลังคาหนังกลับ Suede จอ AR HUD 24.3 นิ้ว ประตูไฟฟ้าคู่หน้า และเบาะนวดไฟฟ้า
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ผู้ที่หลงใหลในความแรงระดับซูเปอร์คาร์ ออปชันล้ำระดับไฮเอนด์ และต้องการความคุ้มค่าสูงสุดในงบ 1 ล้านบาท</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก ประตูไร้กรอบ และมิติตัวถัง (Exterior & Frameless Doors)
          </h2>
          <p>
            ดีไซน์ภายนอกของ Zeekr X มีความโดดเด่นและล้ำสมัยสไตล์ Sci-Fi Minimalism ทุกรายละเอียดถูกออกแบบมาเพื่อความสวยงามตามหลักอากาศพลศาสตร์:
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/zeekr-x-exterior.jpg"
                alt="ดีไซน์ภายนอก Zeekr X ไฟหน้า Micro-Optic LED และกระจกมองข้างไร้กรอบ"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              มิติตัวถังยาว 4,432 มม. กว้าง 1,836 มม. พร้อมประตูไร้กรอบ Frameless Doors สไตล์สปอร์ตคูเป้
            </figcaption>
          </figure>

          <ul>
            <li><strong>ประตูไร้กรอบ (Frameless Doors):</strong> พร้อมระบบเปิด-ปิดด้วยไฟฟ้าอัจฉริยะ ซ่อนมือจับประตูเรียบเนียนไปกับบานประตู</li>
            <li><strong>ฝาปิดช่องชาร์จไฟแบบกระจกซ่อน (Concealed Glass Charging Flap):</strong> กลมกลืนไปกับตัวถังรถด้านหลังอย่างแนบเนียน</li>
            <li><strong>ไฟหน้าแบบ Micro-Optic LED:</strong> ประกอบด้วยหลอดไฟ LED ขนาดจิ๋ว 56 ดวง ให้แสงสว่างคมชัดและดีไซน์เส้นสายเพรียวบาง</li>
            <li><strong>กระจกมองข้างแบบไร้กรอบ (Frameless Side Mirrors):</strong> ลดแรงต้านอากาศและเพิ่มทัศนวิสัย</li>
            <li><strong>ระบบเบรก Akebono 4-Piston:</strong> ในรุ่น Flagship AWD ติดตั้งคาลิเปอร์เบรก 4 พ็อตสีสปอร์ต พร้อมจานเบรกขนาดใหญ่ หยุดรถจาก 100-0 กม./ชม. ในระยะเพียง <strong>34.5 เมตร</strong></li>
          </ul>

          <div className="not-prose grid grid-cols-2 sm:grid-cols-5 gap-3 my-6">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความยาว (Length)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">4,432 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความกว้าง (Width)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,836 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความสูง (Height)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,566 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ระยะฐานล้อ (Wheelbase)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">2,750 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center col-span-2 sm:col-span-1">
              <div className="text-[11px] text-slate-500">ความสูงใต้ท้องรถ (GC)</div>
              <div className="text-sm font-bold text-lime-700 mt-0.5">189 มม.</div>
            </div>
          </div>
        </section>

        {/* SECTION 04 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ภายในห้องโดยสาร ความสบาย และระบบอินโฟเทนเมนต์ (Interior Luxury)
          </h2>
          <p>
            เมื่อก้าวเข้ามาภายในห้องโดยสารของ Zeekr X คุณจะรู้สึกได้ทันทีว่านี่คือ <strong>&quot;ห้องโดยสารที่ใช้วัสดุหรูหราที่สุดในระดับราคา 1 ล้านบาท&quot;</strong>:
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/zeekr-x-interior.jpg"
                alt="ห้องโดยสารพรีเมียมและระบบเสียง Yamaha ใน Zeekr X"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              ค็อกพิทมินิมอล ตกแต่งด้วยหนังกลับ Microfiber Suede, โรสโกลด์ และไฟ Ice Block Ambient Lighting
            </figcaption>
          </figure>

          <ul>
            <li><strong>วัสดุบุนุ่มและผ้า Microfiber Suede:</strong> บุเพดานหลังคาและเสาด้วยหนังกลับสัมผัสนุ่ม ตัดเย็บประณีตด้วยตะเข็บคู่ (เฉพาะรุ่น Flagship AWD ส่วนรุ่น Standard ตกแต่งด้วยผ้าพรีเมียม)</li>
            <li><strong>การตกแต่งด้วย Rose Gold Accents:</strong> สวิตช์กระจกไฟฟ้า ปุ่มควบคุม และที่แขวนสัมภาระตกแต่งด้วยวัสดุสีโรสโกลด์เนื้อแมตต์</li>
            <li><strong>ไฟตกแต่งห้องโดยสาร Ice Block Ambient Lighting:</strong> ไฟ LED 66 ดวง ส่องประกายผ่านลวดลายปริซึมราวกับคริสตัลน้ำแข็ง ปรับเปลี่ยนตามจังหวะเพลงได้</li>
            <li><strong>หน้าจอกลางสัมผัสขนาด 14.6 นิ้ว:</strong> ทำงานด้วยชิปประมวลผล <strong>Qualcomm Snapdragon 8155</strong> ตอบสนองลื่นไหล รองรับ Apple CarPlay และ Android Auto</li>
            <li><strong>ระบบเสียงระดับพรีเมียม Yamaha 13 ลำโพง:</strong> มาพร้อมลำโพงฝังที่พนักพิงศีรษะคนขับ (Headrest Speakers) ให้มิติเสียงรอบทิศทางคมชัดและแยกเสียงนำทาง GPS ได้อย่างอิสระ</li>
            <li><strong>พื้นที่เก็บสัมภาระ:</strong> ท้ายรถ <strong>362 ลิตร</strong> (ขยายเป็น 1,182 ลิตรเมื่อพับเบาะ) และช่องเก็บของด้านหน้า Frunk อีก <strong>21 ลิตร</strong></li>
          </ul>
        </section>

        {/* SECTION 05: REAL DRIVING DYNAMICS */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ประสบการณ์ขับขี่จริงบนถนนไทย: สมรรถนะและช่วงล่าง (Driving Dynamics & NVH)
          </h2>
          <p>
            การนำ Zeekr X Flagship AWD ออกวิ่งทดสอบจริงบนเส้นทางในกรุงเทพฯ และเส้นทางชลบุรี-พัทยา แสดงให้เห็นถึงความยอดเยี่ยมของแชสซี SEA:
          </p>

          {/* Performance Data Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (Flagship AWD)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">3.72 วินาที</div>
                <div className="text-[10px] text-slate-400">5.60s ในรุ่น Standard</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">2.35 วินาที</div>
                <div className="text-[10px] text-slate-400">หลังติดเบาะทันที</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">64.8 dB(A)</div>
                <div className="text-[10px] text-slate-400">ซีลขอบยางสองชั้น</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">34.5 เมตร</div>
                <div className="text-[10px] text-slate-400">Akebono 4-Piston</div>
              </div>
            </div>
          </div>

          <p>
            <strong>1. ฟีลลิ่งช่วงล่างแบบ European Solid:</strong><br />
            ช่วงล่างหน้า MacPherson Strut และหลัง Five-link Multi-link พร้อมบุชยางไฮดรอลิก ซับแรงกระแทกจากรอยต่อคอสะพานและผิวถนนปะผุได้อย่างนุ่มนวลและแน่นหนึบ ไร้อาการเด้งกระดอนหรือย้วยหลอน
          </p>

          <p>
            <strong>2. อัตราเร่งและระบบเบรก Akebono:</strong><br />
            ขุมพลัง 489 แรงม้า (365 kW) แรงบิด 573 Nm ในรุ่น AWD ตอบสนองฉับไว ดึงหลังติดเบาะอย่างเร้าใจ ขณะที่คาลิเปอร์ Akebono 4 พ็อต ให้ระยะเบรกที่สั้นและมั่นใจ มอบความปลอดภัยสูงสุด
          </p>
        </section>

        {/* SECTION 06: HEAD-TO-HEAD COMPARISON */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '700px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. เปรียบเทียบตรงตัว: Zeekr X vs Volvo EX30 & BYD Atto 3
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เปรียบเทียบข้อมูลเชิงเทคนิคระหว่าง <strong>Zeekr X Flagship AWD</strong> กับคู่แข่งในระดับราคาใกล้เคียงกัน:
          </p>

          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ Zeekr X กับ Volvo EX30 และ BYD Atto 3"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">มิติทดสอบ / สเปก</th>
                  <th className="py-4 px-4 text-lime-400 bg-slate-800 font-extrabold">Zeekr X Flagship AWD</th>
                  <th className="py-4 px-4 text-slate-200">Volvo EX30 Ultra Twin Motor</th>
                  <th className="py-4 px-4 text-slate-200">BYD Atto 3 Extended Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระดับราคาจำหน่ายในไทย</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">1,049,000 ฿</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">1,890,000 ฿</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">859,900 – 999,900 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังสูงสุด</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">489 hp / 573 Nm</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">428 hp / 543 Nm</td>
                  <td className="py-3.5 px-4 text-slate-600">204 hp / 310 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">3.7 วินาที</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">3.6 วินาที</td>
                  <td className="py-3.5 px-4 text-slate-600">7.3 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบเสียงพรีเมียม</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">Yamaha 13 ลำโพง + Headrest</td>
                  <td className="py-3.5 px-4 text-slate-600">Harman Kardon Soundbar 9 ตัว</td>
                  <td className="py-3.5 px-4 text-slate-600">Dirac HD 8 ลำโพง</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะฐานล้อ (ความกว้างภายใน)</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">2,750 มม. (กว้างขวางกว่า)</td>
                  <td className="py-3.5 px-4 text-slate-600">2,650 มม. (กระชับ)</td>
                  <td className="py-3.5 px-4 text-slate-600">2,720 มม.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 07: TECH & SAFETY */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (Zeekr AD)
          </h2>
          <p>
            Zeekr X จัดเต็มระบบช่วยเหลือผู้ขับขี่อัจฉริยะ <strong>Zeekr AD</strong> คว้ามาตรฐานความปลอดภัย <strong>5 ดาวจาก Euro NCAP</strong>:
          </p>

          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Full-Speed ACC with Stop &amp; Go</div>
                <div className="text-xs text-slate-600 mt-0.5">ควบคุมความเร็วแปรผันตามคันหน้าได้อย่างนุ่มนวลในการจราจรติดขัด</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Lane Centering &amp; Auto Lane Change</div>
                <div className="text-xs text-slate-600 mt-0.5">ประคองรถให้อยู่กึ่งกลางเลนและช่วยเปลี่ยนเลนเมื่อเปิดสัญญาณไฟเลี้ยว</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Door Opening Warning (DOW)</div>
                <div className="text-xs text-slate-600 mt-0.5">เตือนและล็อกประตูไม่ให้เปิดหากมีมอเตอร์ไซค์แล่นมาด้านข้าง</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">HD 360° Panoramic Camera with 3D</div>
                <div className="text-xs text-slate-600 mt-0.5">กล้องรอบคันความละเอียดสูงมองเห็นรอบทิศทางได้อย่างชัดเจน</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 08: EVSELECT VERIFIED ACCESSORIES */}
        <section className="my-16 not-prose">
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-lime-500/40 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
              <div className="relative w-full lg:w-1/3 h-56 rounded-2xl overflow-hidden border border-slate-700/80 shrink-0 bg-black">
                <Image
                  src="/images/reviews/zeekr-x-details.jpg"
                  alt="อุปกรณ์เสริมตรงรุ่น Zeekr X EVSELECT"
                  fill
                  sizes="(max-width: 1024px) 100vw, 350px"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-lime-500 text-black font-black text-xs px-2.5 py-1 rounded-md shadow-xs">
                ตรวจรุ่นรถก่อนเลือกอุปกรณ์
                </div>
              </div>

              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full text-xs font-semibold text-lime-400">
                  <Sparkles className="w-3.5 h-3.5" />
                PRE-LAUNCH • ยังไม่เปิดจำหน่าย
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  กำลังเตรียมข้อมูลอุปกรณ์สำหรับ Zeekr X สเปกไทย
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  หมวดที่กำลังศึกษา ได้แก่ พรมปูพื้น อุปกรณ์บังแดด ฟิล์มป้องกันหน้าจอ และอุปกรณ์ดูแลห้องโดยสาร รายการจริง รุ่นรถที่รองรับ และสเปกอาจเปลี่ยนก่อนเปิดตัว
                </p>
                <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                  >
                    <span>แจ้งความสนใจสำหรับ Zeekr X</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
            href="/contact"
                    className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-3 rounded-full border border-slate-700 transition-all"
                  >
                    <span>ค้นหาตามรุ่นรถ</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 09: PROS & CONS */}
        <section className="my-12 not-prose">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3">
              <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
              8. ข้อดี &amp; ข้อสังเกต (จุดเด่น &amp; ข้อสังเกต)
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
                  <span><strong>วัสดุห้องโดยสารพรีเมียมเกินราคา:</strong> สัมผัสหรูหรา บุหนังกลับ Suede และตกแต่งโรสโกลด์</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>พละกำลัง 489 แรงม้า (AWD):</strong> อัตราเร่ง 0-100 ใน 3.7 วินาที พร้อมเบรก Akebono 4 พ็อต</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ช่วงล่างยุโรปแท้ (SEA Platform):</strong> ซับแรงสะเทือนเนียนกริบ ทรงตัวมั่นใจ เข้าโค้งเฉียบคม</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ระบบเสียง Yamaha 13 ลำโพง:</strong> มีลำโพงฝังพนักพิงศีรษะ มิติเสียงสมบูรณ์แบบ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ราคาปรับใหม่คุ้มค่าสุดขีด:</strong> เริ่มต้นเพียง 899,000 บาท ได้เทคโนโลยีระดับสแกนดิเนเวีย</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ประตูไร้กรอบไฟฟ้า &amp; Ice Block Ambient:</strong> สัมผัสล้ำสมัยสไตล์ Sci-Fi Minimalism</span>
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
                  <span><strong>พื้นที่เก็บสัมภาระท้าย 362 ลิตร:</strong> กะทัดรัด เหมาะกับกระเป๋าเดินทางขนาดกลาง</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>หลังคาแก้วไร้ม่านบังแดดไฟฟ้าในตัว:</strong> ต้องพึ่งพาม่านบังแดดเสริมตรงรุ่นเมื่อจอดตากแดดเมืองไทย</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>กำลังชาร์จ DC 150 kW:</strong> เร็วตามมาตรฐาน 400V แต่ยังไม่เร็วระดับ 800V ของ Zeekr 7X</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>เครือข่ายศูนย์บริการ:</strong> อยู่ระหว่างการเร่งขยายสาขาในต่างจังหวัด</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Takeaway Callout */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-lime-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" /> EVSELECT Final Takeaway
              </div>
              <p className="text-xs sm:text-sm text-slate-200">
                Zeekr X คือคอมแพกต์ครอสโอเวอร์ไฟฟ้าที่คุ้มค่าที่สุดในงบ 1 ล้านบาท เลือกรุ่น <strong>Flagship AWD (1,049,000 ฿)</strong> เพื่อสัมผัสสมรรถนะ 489 แรงม้า เบรก Akebono 4 พ็อต ล้อ Forged 20 นิ้ว และประตูไฟฟ้าคู่หน้า
              </p>
            </div>
            <Link
              href="/#vehicle-finder"
              className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold text-xs px-5 py-2.5 rounded-full transition-all shrink-0 shadow-sm"
            >
            <span>บอกรุ่นรถที่คุณใช้</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SECTION 10: SCORECARD BREAKDOWN */}
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
                <span className="text-3xl font-black text-lime-700">9.0</span>
                <span className="text-sm text-slate-500 font-medium"> / 10</span>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความสบายห้องโดยสารและเบาะนั่ง (Cabin Comfort &amp; Luxury)</span>
                  <span className="text-lime-700 font-bold">9.2</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.2}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความสบายห้องโดยสารและเบาะนั่ง 9.2 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">สมรรถนะการขับขี่และอัตราเร่ง (Performance &amp; Dynamics)</span>
                  <span className="text-lime-700 font-bold">9.5</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.5}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="สมรรถนะการขับขี่และอัตราเร่ง 9.5 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความเงียบและการซับแรงสะเทือน (NVH &amp; Ride Refinement)</span>
                  <span className="text-lime-700 font-bold">8.8</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={8.8}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความเงียบและการซับแรงสะเทือน 8.8 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">เทคโนโลยีและระบบความบันเทิง (Tech &amp; Infotainment)</span>
                  <span className="text-lime-700 font-bold">9.2</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.2}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="เทคโนโลยีและระบบความบันเทิง 9.2 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความคุ้มค่าเมื่อเทียบกับคู่แข่ง (Value Proposition vs Competitors)</span>
                  <span className="text-lime-700 font-bold">9.3</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.3}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความคุ้มค่าเมื่อเทียบกับคู่แข่ง 9.3 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '93%' }}></div>
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

      </div>

      {/* 7. Related Articles & Guides Section */}
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
            href="/articles/zeekr-009-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/zeekr-009-hero.jpg"
                alt="รีวิว ZEEKR 009 สเปกไทย"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Luxury MPV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว ZEEKR 009 สเปกไทย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Alphard
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ทดสอบขับจริง เบาะ Sofaro First Class ช่วงล่างถุงลม และเทียบตรงตัวกับ Toyota Alphard
              </p>
            </div>
          </Link>

          {/* Related Card 2 */}
          <Link
            href="/articles/zeekr-7x-2026-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Car className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-[10px] font-medium text-slate-400">ภาพประกอบ: Zeekr 7X</p>
                </div>
              </div>
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                800V SUV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Zeekr 7X 2026 สเปกไทย: พรีเมียมเอสยูวี 800V ชาร์จไวสุดขีด 420kW
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ทดสอบสมรรถนะ 646 แรงม้า ชิป Snapdragon 8295 และช่วงล่างถุงลม CCD
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
                src="/images/reviews/tesla-model-3-hero.jpg"
                alt="รีวิว Tesla Model 3 Highland"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Electric Sedan
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">In-Depth Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Tesla Model 3 Highland: อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยี
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                กระจก Acoustic 360 องศา ช่วงล่างใหม่ และเบาะเป่าลมเย็น
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 8. Footer Share & Navigation */}
      <footer className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles"
          className="text-sm text-slate-600 hover:text-lime-700 flex items-center gap-2 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> ดูบทความและรีวิวทั้งหมด
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">แชร์บทความรีวิวนี้:</span>
          <ShareButton title="รีวิว Zeekr X (Flagship AWD & Standard) สเปกไทย: พรีเมียมคอมแพกต์ครอสโอเวอร์ 489 แรงม้า | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
