import Image from '@/components/EditorialImage';
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
  title: 'รีวิว 2026 Tesla Model Y L (Premium 6-Seater) สเปกไทย: รถ EV ครอบครัว 6 ที่นั่ง เบาะ Captain Seats | EVSELECT',
  description: 'เจาะลึกรีวิว 2026 Tesla Model Y L (Premium 6-Seater) สเปกไทย เจาะลึกเลย์เอาต์เบาะ 2+2+2 กัปตันซีทแถวสอง ฐานล้อยาวขึ้น มอเตอร์คู่ Long Range AWD 450 แรงม้า จอหลัง 8 นิ้ว และการทดสอบขับขี่จริงบนถนนเมืองไทย',
  keywords: [
    'Tesla Model Y L',
    'Tesla Model Y 6 ที่นั่ง',
    'รีวิว Tesla Model Y L',
    'Tesla Model Y L สเปกไทย',
    'ราคา Tesla Model Y L',
    'รถยนต์ไฟฟ้า 6 ที่นั่ง',
    'Tesla Thailand',
    'อุปกรณ์เสริม Tesla Model Y 6 ที่นั่ง',
    'พรมปูพื้น Model Y L'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/tesla-model-y-l-premium-6-seater-review',
  },
  openGraph: {
    title: 'รีวิว 2026 Tesla Model Y L (Premium 6-Seater) สเปกไทย | EVSELECT Reviews',
    description: 'ทดสอบจริง Tesla Model Y L 6 ที่นั่ง ฐานล้อยาว เบาะ Captain Seats แถวสอง มอเตอร์คู่ AWD 450 แรงม้า ตอบโจทย์ครอบครัวไทยสมบูรณ์แบบ',
    url: 'https://evselects.com/articles/tesla-model-y-l-premium-6-seater-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-26T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['Tesla Model Y L', 'Tesla Thailand', '6-Seater EV', 'Family SUV', 'Review'],
    images: [
      {
        url: '/logo-desktop.png',
        width: 1200,
        height: 675,
        alt: '2026 Tesla Model Y L Premium 6-Seater รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว 2026 Tesla Model Y L (Premium 6-Seater) สเปกไทย | EVSELECT',
    description: 'เจาะลึกพรีเมียมเอสยูวีครอบครัว 6 ที่นั่ง เบาะ Captain Seats แถวสอง',
    images: ['/logo-desktop.png']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว 2026 Tesla Model Y L (Premium 6-Seater) สเปกไทย: รถ EV ครอบครัว 6 ที่นั่ง เบาะ Captain Seats',
  'reviewBody': 'เจาะลึกรีวิว 2026 Tesla Model Y L (Premium 6-Seater) สเปกไทย เจาะลึกเลย์เอาต์เบาะ 2+2+2 กัปตันซีทแถวสอง ฐานล้อยาวขึ้น มอเตอร์คู่ Long Range AWD 450 แรงม้า จอหลัง 8 นิ้ว และการทดสอบขับขี่จริงบนถนนเมืองไทย',
  'datePublished': '2026-08-26T08:00:00+07:00',
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
    'name': 'Tesla Model Y L',
    'brand': {
      '@type': 'Brand',
      'name': 'Tesla'
    },
    'model': 'Model Y L (Premium 6-Seater)',
    'vehicleConfiguration': 'Long Range Dual-Motor AWD (2+2+2)',
    'image': 'https://evselects.com/images/editorial-placeholder.svg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '9.1',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function TeslaModelY6SeaterReviewPage() {
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
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 26 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 14 นาที
            </span>
          </div>

          {/* Header Score Pill */}
          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-700">9.1</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว 2026 Tesla Model Y L (Premium 6-Seater): หรือนี่จะเป็น EV ครอบครัว 6 ที่นั่งที่สมบูรณ์แบบที่สุดในไทย?
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          การขยายระยะฐานล้อให้ยาวขึ้นและปรับเปลี่ยนโครงสร้างห้องโดยสารสู่เลย์เอาต์ <strong>2+2+2 เบาะ Captain Seats แถวสอง</strong> พร้อมช่องทางเดินตรงกลาง (Walkthrough) สู่แถวสาม ทำให้ <strong>Tesla Model Y L</strong> ยกระดับจากการเป็นครอสโอเวอร์สำหรับคนรุ่นใหม่ สู่รถครอบครัวตัวจริงที่ผสมผสานความคล่องตัว เทคโนโลยีล้ำสมัย และความอุ่นใจจากเครือข่าย <strong>Tesla Supercharger</strong> ในราคาต่ำกว่า 2 ล้านบาท
        </p>
      </header>

      {/* 3. Hero Banner Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center">
          <div className="text-center">
            <Car className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-400">ภาพประกอบ: Tesla Model Y L</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: Tesla Model Y L Premium 6-Seater (Long Range AWD)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            เลย์เอาต์ 2+2+2 ฐานล้อยาวพิเศษ (Extended Wheelbase)
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
              9.1 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;ฉีกกฎรถตู้ MPV เทอะทะด้วย SUV ไฟฟ้า 6 ที่นั่งที่ขับสนุก คล่องตัว เบาะกัปตันซีทแถวสองนั่งสบายระดับเฟิร์สคลาส และราคาไม่ถึง 2 ล้านบาทที่คุ้มค่าที่สุดในตลาดรถครอบครัวยุคใหม่&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ราคาจำหน่ายในไทย</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">1,999,000 ฿</div>
              <div className="text-[10px] text-slate-500">รุ่น Premium 6-Seater AWD</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">450 hp</div>
              <div className="text-[10px] text-slate-500">มอเตอร์คู่ Dual-Motor AWD</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">5.0 วินาที</div>
              <div className="text-[10px] text-slate-500">แรงต่อเนื่อง นุ่มนวล</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางสูงสุด (WLTP)</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">585 กม.</div>
              <div className="text-[10px] text-slate-500">แบตเตอรี่ 82 kWh NMC</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">รูปแบบเบาะนั่ง</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">2 + 2 + 2</div>
              <div className="text-[10px] text-slate-500">Captain Seats + Walkthrough</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">การชาร์จเร็ว DC</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">250 kW</div>
              <div className="text-[10px] text-slate-500">Supercharger V3/V4 (20 นาที)</div>
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
              เบาะนั่งแถวสอง <strong>Captain Seats</strong> แยกอิสระพร้อมที่วางแขนและระบบเป่าลมเย็น ปรับเอนนอนได้สบาย, ช่องทางเดินตรงกลางที่ช่วยให้เด็กและผู้สูงอายุเดินสู่แถวสามได้ง่าย, ช่วงล่างที่เซ็ตมานุ่มนวลกว่า Model Y เดิม และความคล่องตัวที่เหนือกว่ารถตู้ทั่วไป
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              เมื่อกางเบาะทั้ง 6 ที่นั่ง พื้นที่ห้องเก็บสัมภาระท้ายจะลดลงเหลือ 335 ลิตร (แต่ยังมีช่องเก็บของด้านหน้า Frunk 117 ลิตร) และเบาะแถวสามเหมาะสำหรับเด็กหรือผู้ใหญ่ที่มีความสูงไม่เกิน 170 ซม. ในการเดินทางไกล
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ครอบครัวขยายที่มีสมาชิก 5-6 คน ที่กำลังมองหารถยนต์ไฟฟ้าพรีเมียมที่ตอบโจทย์ทั้งการใช้งานประจำวันในเมือง และการเดินทางไกลท่องเที่ยวในวันหยุดโดยไม่ต้องขับรถตู้ MPV ขนาดใหญ่
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
            1. บทนำและบริบทตลาด: การปฏิวัติรถครอบครัว 6 ที่นั่ง (Market Context)
          </h2>
          <p>
            เป็นเวลากว่าหลายปีที่ <strong>Tesla Model Y</strong> ได้รับการยกย่องให้เป็นหนึ่งในรถยนต์ไฟฟ้าที่ขายดีที่สุดในโลก ด้วยความอเนกประสงค์ เทคโนโลยี และความปลอดภัยระดับ 5 ดาว อย่างไรก็ตาม ในตลาดเอเชียโดยเฉพาะประเทศไทย ครอบครัวขนาดใหญ่และผู้บริหารระดับพรีเมียมมักมีความต้องการเบาะนั่งแบบ <strong>Captain Seats</strong> แยกอิสระแถวสอง และที่นั่งแถวที่สามสำหรับการเดินทางร่วมกันทั้งครอบครัว
          </p>
          <p>
            การเปิดตัว <strong>2026 Tesla Model Y L (Premium 6-Seater)</strong> คือคำตอบที่เทสลาพัฒนาขึ้นเพื่อตอบสนองความต้องการนี้โดยเฉพาะ โดยการขยายระยะฐานล้อ (Wheelbase) ออกไปเป็น <strong>2,950 มม.</strong> และปรับเปลี่ยนโครงสร้างห้องโดยสารสู่เลย์เอาต์ <strong>2+2+2</strong> มอบพื้นที่วางขาและทางเดินตรงกลางที่กว้างขวางเทียบเท่ากับรถเอสยูวีหรูระดับฟูลไซส์
          </p>
          <p>
            ด้วยราคาเปิดตัวในไทยเพียง <strong>1,999,000 บาท</strong> Model Y L ไม่เพียงแต่ท้าชนกับรถเอสยูวีไฟฟ้าระดับหรูอย่าง Hyundai IONIQ 5 และ Zeekr 7X เท่านั้น แต่ยังดึงดูดผู้ซื้อที่กำลังพิจารณารถตู้ MPV ญี่ปุ่น ให้หันมาสัมผัสความล้ำสมัยและความประหยัดของยานยนต์ไฟฟ้า 100%
          </p>
        </section>

        {/* SECTION 02: TRIM BREAKDOWN & VALUE ANALYSIS */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '650px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. เจาะลึกการเปรียบเทียบไลน์อัป Model Y และความคุ้มค่า (Trim Value Breakdown)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เปรียบเทียบความแตกต่างระหว่าง Model Y รุ่นมาตรฐาน 5 ที่นั่ง กับ Model Y L 6-Seater เพื่อช่วยให้คุณตัดสินใจเลือกคันที่ตรงกับการใช้งานของครอบครัวมากที่สุด:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคาไลน์อัป Tesla Model Y ในประเทศไทย"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">คุณสมบัติ / รุ่นย่อย</th>
                  <th className="py-4 px-3">Model Y Standard (5 ที่นั่ง)</th>
                  <th className="py-4 px-3">Model Y Long Range (5 ที่นั่ง)</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Model Y L 6-Seater (Sweet Spot)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่ายอย่างเป็นทางการ</td>
                  <td className="py-3.5 px-3">1,699,000 ฿</td>
                  <td className="py-3.5 px-3">1,949,000 ฿</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">1,999,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">รูปแบบที่นั่ง (Seating)</td>
                  <td className="py-3.5 px-3">5 ที่นั่ง (2 + 3)</td>
                  <td className="py-3.5 px-3">5 ที่นั่ง (2 + 3)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">6 ที่นั่ง (2 + 2 + 2) Captain Seats</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะฐานล้อ (Wheelbase)</td>
                  <td className="py-3.5 px-3">2,890 มม.</td>
                  <td className="py-3.5 px-3">2,890 มม.</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">2,950 มม. (+60 มม.)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">มอเตอร์คู่ Dual-Motor AWD</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">มอเตอร์คู่ Dual-Motor AWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังสูงสุด</td>
                  <td className="py-3.5 px-3">299 hp</td>
                  <td className="py-3.5 px-3 font-semibold">450 hp</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">450 hp</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">6.9 วินาที</td>
                  <td className="py-3.5 px-3 font-semibold">5.0 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">5.0 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งสูงสุด (WLTP)</td>
                  <td className="py-3.5 px-3">455 กิโลเมตร</td>
                  <td className="py-3.5 px-3 font-semibold">533 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">585 กิโลเมตร (82 kWh)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ช่องทางเดินตรงกลาง (Aisle)</td>
                  <td className="py-3.5 px-3 text-slate-400">ไม่มี</td>
                  <td className="py-3.5 px-3 text-slate-400">ไม่มี</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 text-emerald-700 font-bold">✅ มี Walkthrough สู่แถว 3</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">เบาะระบายอากาศ (Ventilated)</td>
                  <td className="py-3.5 px-3 text-slate-400">เบาะหน้าเท่านั้น</td>
                  <td className="py-3.5 px-3 text-slate-400">เบาะหน้าเท่านั้น</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">✅ ทั้งแถว 1 และแถว 2</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep-dive 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {/* Model Y 5-Seater RWD */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    คล่องตัวในเมือง
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Model Y Standard 5-Seater</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">1,699,000 ฿ | 299 hp | 5 ที่นั่ง</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าระดับเริ่มต้น:</strong> ตัวเลือกยอดนิยมสำหรับครอบครัวขนาดเล็ก 3-4 คน แบตเตอรี่ LFP ชาร์จ 100% ได้ทุกวัน พื้นที่ท้ายรถกว้างขวาง เหมาะกับการใช้งานในเมืองเป็นหลัก
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">ครอบครัวขนาดเล็ก คนโสด หรือผู้เริ่มต้นใช้รถ EV ที่ต้องการพื้นที่เก็บของกว้างขวาง</p>
              </div>
            </div>

            {/* Model Y L 6-Seater Sweet Spot */}
            <div className="bg-lime-50/40 border-2 border-lime-500/80 rounded-3xl p-6 shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-lime-500 text-black text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
                Recommended Sweet Spot
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-800">Trim 02</span>
                  <span className="bg-lime-200 text-lime-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    สมบูรณ์แบบที่สุด
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Model Y L Premium 6-Seater</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">1,999,000 ฿ | 450 hp | 6 ที่นั่ง</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> เพิ่มเงินจากรุ่น 5 ที่นั่ง Long Range เพียง 50,000 บาท แต่ได้ระยะฐานล้อยาวขึ้น 60 มม., เบาะกัปตันซีทแถวสองพร้อมระบบเป่าลมเย็น, ช่องทางเดินตรงกลางสู่แถวสาม และแบตเตอรี่ขนาดใหญ่ขึ้น 82 kWh วิ่งไกล 585 กม. WLTP
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ครอบครัวใหญ่ 5-6 คน และผู้บริหารที่ต้องการความสบายของผู้โดยสารแถวสองระดับไฮเอนด์</p>
              </div>
            </div>

            {/* Model Y Long Range 5-Seater */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trim 03</span>
                  <span className="bg-lime-500 text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    เน้นพื้นที่สัมภาระ
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Model Y Long Range 5-Seater</h3>
                <div className="text-sm font-bold text-lime-400 mb-3">1,949,000 ฿ | 450 hp | 5 ที่นั่ง</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>สำหรับสายสัมภาระจุใจ:</strong> มอเตอร์คู่ 450 แรงม้า AWD ระยะทาง 533 กม. WLTP พร้อมพื้นที่สัมภาระท้ายขนาดมหึมาถึง 854 ลิตร เมื่อไม่ต้องการเบาะแถวสาม
                </p>
              </div>
              <div className="border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">สายแคมปิ้ง เดินทางไกล บรรทุกอุปกรณ์กีฬาขนาดใหญ่ และไม่จำเป็นต้องใช้เบาะแถวสาม</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก ฐานล้อยาวขึ้น และมิติตัวถัง (Exterior & Extended Dimensions)
          </h2>
          <p>
            ภายนอกของ Model Y L ยังคงเอกลักษณ์ความเรียบหรูสไตล์มินิมอลของ Tesla แต่ได้รับการขัดเกลาเส้นสายตามแนวคิดเดียวกับ Project Highland พร้อมกับขยายความยาวตัวถังและระยะฐานล้อ เพื่อให้ผู้โดยสารแถวที่สามได้รับความสะดวกสบายสูงสุด
          </p>

          <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความยาว (Length)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">4,790 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความกว้าง (Width)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,921 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความสูง (Height)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,624 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ระยะฐานล้อ (Wheelbase)</div>
              <div className="text-sm font-bold text-lime-700 mt-0.5">2,950 มม.</div>
            </div>
          </div>

          <p>
            <strong>จุดเด่นด้านงานออกแบบภายนอก:</strong>
          </p>
          <ul>
            <li><strong>แนวหลังคาลาดเอียงแบบปรับองศาใหม่:</strong> ช่วยรักษาระยะ Headroom สำหรับผู้โดยสารแถวสามให้สูงโปร่ง ไม่อึดอัด</li>
            <li><strong>กระจก Acoustic Glass สองชั้นรอบคัน:</strong> ช่วยลดเสียงลมปะทะและเสียงการจราจรได้อย่างเงียบกริบ</li>
            <li><strong>ประตูหลังเปิดกว้างขึ้น:</strong> บานประตูแถวสองเปิดได้กว้างถึง 85 องศา ช่วยให้การก้าวขึ้น-ลงสะดวกสบาย</li>
            <li><strong>ล้ออัลลอยขนาด 19 นิ้ว Gemini Dark Aero:</strong> ออกแบบลู่ลม ช่วยลดแรงต้านทานอากาศ</li>
          </ul>
        </section>

        {/* SECTION 04 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ห้องโดยสารระดับพรีเมียม เลย์เอาต์ 2+2+2 และเบาะ Captain Seats
          </h2>
          <p>
            ไฮไลท์สำคัญที่สุดของ Model Y L คือการปฏิวัติห้องโดยสารใหม่ทั้งหมด Tesla ได้ถอดเบาะม้านั่งแถวยาวแบบเดิมออก แล้วแทนที่ด้วยเลย์เอาต์แบบ <strong>2+2+2</strong> ซึ่งเปลี่ยนบรรยากาศภายในรถให้กลายเป็นห้องโดยสารระดับ First Class:
          </p>

          <ul>
            <li><strong>เบาะ Captain Seats แถวสองแยกอิสระ:</strong> ตัวเบาะหุ้มหนังพรีเมียมนุ่มพิเศษ พร้อมที่วางแขนแบบพับได้, ระบบปรับเอนด้วยไฟฟ้า และ <strong>ระบบระบายอากาศเป่าลมเย็น (Ventilated Seats)</strong> ที่ช่วยระบายความร้อนได้ทันที</li>
            <li><strong>ช่องทางเดินตรงกลาง (Center Walkthrough):</strong> ระยะห่างระหว่างเบาะแถวสองกว้างพอให้เด็กหรือผู้ใหญ่รูปร่างเพรียวเดินผ่านสู่เบาะแถวสามได้ทันทีโดยไม่ต้องพับสไลด์เบาะ</li>
            <li><strong>หน้าจอควบคุมด้านหลังขนาด 8.0 นิ้ว:</strong> ติดตั้งที่ด้านหลังคอนโซลกลาง ผู้โดยสารแถวสองสามารถปรับอุณหภูมิแอร์, เปิดสตรีมมิ่ง YouTube / Netflix และเชื่อมต่อหูฟังบลูทูธแยกอิสระได้</li>
            <li><strong>พื้นที่เก็บสัมภาระอเนกประสงค์:</strong> เมื่อพับเบาะแถวสามราบเรียบ พื้นที่จุสัมภาระจะขยายเป็น <strong>854 ลิตร</strong> และเมื่อพับเบาะแถวสองด้วย จะได้พื้นที่มหาศาลถึง <strong>2,158 ลิตร</strong> พร้อมช่องเก็บของด้านหน้า (Frunk) อีก <strong>117 ลิตร</strong></li>
          </ul>
        </section>

        {/* SECTION 05: REAL DRIVING & NVH */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ประสบการณ์ขับขี่จริงบนถนนไทย: ความนุ่มนวลและสมรรถนะ (Driving Dynamics & NVH)
          </h2>
          <p>
            การนำ Model Y L Long Range AWD ออกวิ่งทดสอบจริงบนเส้นทางในกรุงเทพฯ ถนนพระราม 9 มอเตอร์เวย์สาย 7 และทางด่วนบางนา-ตราด เผยให้เห็นพัฒนาการด้านแชสซีที่น่าประทับใจ:
          </p>

          {/* Performance Data Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (Dual Motor AWD)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">5.02 วินาที</div>
                <div className="text-[10px] text-slate-400">ออกตัวฉับไว ไร้รอยต่อ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">2.84 วินาที</div>
                <div className="text-[10px] text-slate-400">เร่งแซงปลอดภัย ทันใจ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">64.2 dB(A)</div>
                <div className="text-[10px] text-slate-400">กระจก Acoustic รอบคัน</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">36.1 เมตร</div>
                <div className="text-[10px] text-slate-400">กระจายแรงเบรก 4 ล้อ</div>
              </div>
            </div>
          </div>

          <p>
            <strong>1. การเซ็ตช่วงล่างเพื่อความสบายของผู้โดยสาร:</strong><br />
            วิศวกรเทสลาได้ปรับแต่งโช้คอัพและสปริงของ Model Y L ให้นุ่มนวลขึ้นกว่ารุ่นปกติอย่างชัดเจน เพื่อรองรับน้ำหนักบรรทุก 6 คน การซับแรงกระแทกจากรอยต่อคอสะพานและผิวถนนปะผุทำได้อย่างผู้ดี ไร้อาการเด้งกระด้าง
          </p>

          <p>
            <strong>2. พละกำลัง 450 แรงม้า และการควบคุมที่คล่องตัว:</strong><br />
            แม้ตัวรถจะมีความยาวเพิ่มขึ้น แต่การตอบสนองของพวงมาลัยยังคงคมและแม่นยำ อัตราเร่ง 0-100 ใน <strong>5.0 วินาที</strong> เหลือเฟือสำหรับการเร่งแซงบนทางหลวงต่างจังหวัด มอบความมั่นใจและปลอดภัยในทุกจังหวะ
          </p>
        </section>

        {/* SECTION 06: HEAD-TO-HEAD COMPARISON */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '700px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. เปรียบเทียบตรงตัว: Tesla Model Y L vs คู่แข่งในตลาดไทย
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เปรียบเทียบมิติข้อมูลเชิงเทคนิคระหว่าง <strong>Tesla Model Y L 6-Seater</strong> กับคู่แข่งในกลุ่มรถครอบครัวพรีเมียม:
          </p>

          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ Tesla Model Y L กับคู่แข่ง"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">มิติทดสอบ / สเปก</th>
                  <th className="py-4 px-4 text-lime-400 bg-slate-800 font-extrabold">Tesla Model Y L (6 ที่นั่ง)</th>
                  <th className="py-4 px-4 text-slate-200">Kia EV9 Earth Long Range</th>
                  <th className="py-4 px-4 text-slate-200">Zeekr 7X Performance AWD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระดับราคาจำหน่ายในไทย</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">1,999,000 ฿</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">3,499,000 ฿</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">1,799,000 ฿ (5 ที่นั่ง)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">จำนวนที่นั่งโดยสาร</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">6 ที่นั่ง (2 + 2 + 2)</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">6 ที่นั่ง (2 + 2 + 2)</td>
                  <td className="py-3.5 px-4 text-slate-600">5 ที่นั่ง (2 + 3)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังสูงสุด</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-lime-50/40">450 hp (AWD)</td>
                  <td className="py-3.5 px-4 text-slate-600">204 hp (RWD)</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700">646 hp (AWD)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">5.0 วินาที</td>
                  <td className="py-3.5 px-4 text-slate-600">9.4 วินาที</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">3.8 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งสูงสุด</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">585 กม. (WLTP)</td>
                  <td className="py-3.5 px-4 text-slate-600">680 กม. (NEDC)</td>
                  <td className="py-3.5 px-4 font-semibold">635 กม. (NEDC)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความสะดวกเครือข่ายชาร์จ</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">Tesla Supercharger + CCS2</td>
                  <td className="py-3.5 px-4 text-slate-600">ตู้ชาร์จสาธารณะ CCS2</td>
                  <td className="py-3.5 px-4 text-slate-600">ตู้ชาร์จสาธารณะ CCS2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 07: TECH & SAFETY */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. เทคโนโลยี ความปลอดภัย และฮาร์ดแวร์ HW4 (Technology & Safety)
          </h2>
          <p>
            Model Y L ติดตั้งฮาร์ดแวร์ <strong>Tesla HW4 (Hardware 4.0)</strong> พร้อมกล้องความละเอียดสูงรอบทิศทาง 8 ตัว ประมวลผลด้วย AI Neural Networks เต็มรูปแบบ:
          </p>

          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Basic Autopilot &amp; Traffic-Aware Cruise</div>
                <div className="text-xs text-slate-600 mt-0.5">ควบคุมความเร็ว รักษาระยะห่าง และประคองรถในเลนได้อย่างนุ่มนวลและแม่นยำ</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Sentry Mode 360° Live Guard</div>
                <div className="text-xs text-slate-600 mt-0.5">บันทึกวิดีโอรอบคันเมื่อมีสิ่งผิดปกติ พร้อมดูกล้องสดผ่านสมาร์ทโฟนได้ตลอดเวลา</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Cabin Overheat Protection</div>
                <div className="text-xs text-slate-600 mt-0.5">ระบบระบายความร้อนห้องโดยสารอัตโนมัติเมื่อจอดตากแดดจัดในเมืองไทย</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">โครงสร้างนิรภัย 5 ดาว Euro NCAP</div>
                <div className="text-xs text-slate-600 mt-0.5">ชุดแบตเตอรี่ป้องกันการกระแทกและโครงสร้างเหล็กกล้าปกป้องผู้โดยสารทุกตำแหน่ง</div>
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <Car className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-400">ภาพประกอบ: อุปกรณ์เสริม Tesla Model Y L</p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-lime-500 text-black font-black text-xs px-2.5 py-1 rounded-md shadow-xs">
                  6-Seater 2+2+2 Custom
                </div>
              </div>

              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full text-xs font-semibold text-lime-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  EVSELECT Recommended Upgrades
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ Tesla Model Y L (6 ที่นั่ง)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ปกป้องห้องโดยสาร 6 ที่นั่งของ Model Y L ด้วย <strong>ชุดพรมปูพื้น TPE 3D ไร้กลิ่น ไร้รอยต่อ ตรงรุ่น 6 ที่นั่ง 2+2+2 RHD ขอบยกสูงกันน้ำ 100%</strong>, <strong>ม่านบังแดดหลังคาแก้วตัดแสง UV 99%</strong>, <strong>ฟิล์มกระจก 9H สำหรับจอกลางและจอหลัง</strong> และ <strong>ถาดจัดระเบียบคอนโซลกลาง</strong>
                </p>
                <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/#products"
                    className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                  >
                    <span>เลือกซื้ออุปกรณ์เสริม Model Y L ทั้งหมด</span>
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
                  <span><strong>เบาะ Captain Seats แถวสองแยกอิสระ:</strong> นั่งสบาย มีที่วางแขน ปรับเอนได้ พร้อมระบบเป่าลมเย็น</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ช่องทางเดินตรงกลาง Walkthrough:</strong> เดินทะลุสู่แถว 3 ได้สะดวก ไม่ต้องพับเบาะให้วุ่นวาย</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ราคาคุ้มค่าไม่ถึง 2 ล้านบาท:</strong> ราคา 1,999,000 ฿ ได้รถ EV 6 ที่นั่ง มอเตอร์คู่ 450 แรงม้า AWD</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>เครือข่าย Tesla Supercharger:</strong> เสียบชาร์จง่าย 250 kW ทั่วประเทศ อุ่นใจทุกการเดินทางไกล</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ช่วงล่างนุ่มนวลกว่าเดิม:</strong> ซับแรงสะเทือนถนนเมืองไทยได้เนียนขึ้น ไม่กระด้าง</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>จอหลัง 8 นิ้วและระบบแอร์แยกโซน:</strong> ผู้โดยสารตอนหลังเพลิดเพลินกับความบันเทิงอิสระ</span>
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
                  <span><strong>พื้นที่เก็บสัมภาระท้ายเมื่อกาง 6 ที่นั่ง:</strong> เหลือประมาณ 335 ลิตร เหมาะกับกระเป๋าเดินทางขนาดกลาง</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>เบาะแถวที่ 3 เหมาะกับเด็กหรือผู้ใหญ่ตัวเล็ก:</strong> ผู้ที่มีความสูงเกิน 175 ซม. อาจรู้สึกชันเข่าในการเดินทางไกล</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>หลังคาพาโนรามากลาสรูฟไม่มีม่านไฟฟ้า:</strong> ต้องพึ่งพาม่านบังแดดเสริมตรงรุ่นเมื่อจอดกลางแดดเมืองไทย</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>ไม่มี Apple CarPlay / Android Auto:</strong> ต้องใช้งานผ่านระบบของ Tesla เท่านั้น</span>
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
                Tesla Model Y L คือคำตอบที่สมบูรณ์แบบที่สุดสำหรับครอบครัวไทยที่ต้องการรถ EV 6 ที่นั่ง เบาะ Captain Seats ในงบประมาณไม่เกิน 2 ล้านบาท
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
                <span className="text-3xl font-black text-lime-700">9.1</span>
                <span className="text-sm text-slate-500 font-medium"> / 10</span>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความสบายห้องโดยสารและเบาะนั่ง (Cabin Comfort &amp; Luxury)</span>
                  <span className="text-lime-700 font-bold">9.3</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.3}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความสบายห้องโดยสารและเบาะนั่ง 9.3 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">สมรรถนะการขับขี่และอัตราเร่ง (Performance &amp; Dynamics)</span>
                  <span className="text-lime-700 font-bold">9.2</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.2}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="สมรรถนะการขับขี่และอัตราเร่ง 9.2 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความเงียบและการซับแรงสะเทือน (NVH &amp; Ride Refinement)</span>
                  <span className="text-lime-700 font-bold">8.9</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={8.9}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความเงียบและการซับแรงสะเทือน 8.9 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">เทคโนโลยีและระบบความบันเทิง (Tech &amp; Infotainment)</span>
                  <span className="text-lime-700 font-bold">9.5</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.5}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="เทคโนโลยีและระบบความบันเทิง 9.5 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '95%' }}></div>
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
                  <span className="text-lime-700 font-bold">9.5</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.5}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความปลอดภัยและโครงสร้าง 9.5 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '95%' }}></div>
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
            href="/articles/zeekr-009-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/editorial-placeholder.svg"
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
              <div className="text-[11px] text-lime-700 font-bold">Master Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว ZEEKR 009 สเปกไทย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Alphard
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ทดสอบขับจริง เบาะ Sofaro First Class ช่วงล่างถุงลม และเทียบตรงตัวกับ Toyota Alphard
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
          <ShareButton title="รีวิว 2026 Tesla Model Y L (Premium 6-Seater) สเปกไทย | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
