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
  title: 'รีวิว Tesla Model 3 Highland สเปกไทย: อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยีที่สมบูรณ์แบบที่สุด | EVSELECT',
  description: 'เจาะลึกรีวิว Tesla Model 3 Highland (2024-2026) สเปกไทย สไตล์ วิเคราะห์ความคุ้มค่า 3 รุ่นย่อย (Standard RWD, Long Range AWD, Performance AWD) กระจก Acoustic 360 องศา ช่วงล่างใหม่ เบาะเป่าลมเย็น จอหลัง 8 นิ้ว และเครือข่าย Supercharger ในไทย',
  keywords: [
    'Tesla Model 3 Highland',
    'รีวิว Tesla Model 3 Highland',
    'Tesla Model 3 สเปกไทย',
    'ราคา Tesla Model 3',
    'Tesla Thailand',
    'Model 3 Highland vs BYD Seal',
    'อุปกรณ์เสริม Tesla Model 3',
    'พรมปูพื้น Tesla Model 3'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/tesla-model-3-highland-review',
  },
  openGraph: {
    title: 'รีวิว Tesla Model 3 Highland สเปกไทย: อัปเกรดความเงียบ นุ่มนวล | EVSELECT Reviews',
    description: 'ทดสอบสมรรถนะ Tesla Model 3 Highland สเปกไทย 498 แรงม้า ชาร์จเร็ว Supercharger 250 kW ห้องโดยสารเงียบกริบ พร้อมอุปกรณ์เสริมตรงรุ่น',
    url: 'https://evselects.com/articles/tesla-model-3-highland-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['Tesla Model 3', 'Tesla Thailand', 'Project Highland', 'Electric Sedan', 'Review'],
    images: [
      {
        url: '/images/reviews/tesla-model-3-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Tesla Model 3 Highland รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว Tesla Model 3 Highland สเปกไทย | EVSELECT',
    description: 'เจาะลึกพรีเมียมซีดานไฟฟ้า นุ่ม เงียบ จอหลัง 8 นิ้ว และ Supercharger',
    images: ['/images/reviews/tesla-model-3-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว Tesla Model 3 Highland สเปกไทย: อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยีที่สมบูรณ์แบบที่สุด',
  'reviewBody': 'เจาะลึกรีวิว Tesla Model 3 Highland (2024-2026) สเปกไทย สไตล์ วิเคราะห์ความคุ้มค่า 3 รุ่นย่อย (Standard RWD, Long Range AWD, Performance AWD) กระจก Acoustic 360 องศา ช่วงล่างใหม่ เบาะเป่าลมเย็น จอหลัง 8 นิ้ว และเครือข่าย Supercharger ในไทย',
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
    'name': 'Tesla Model 3',
    'brand': {
      '@type': 'Brand',
      'name': 'Tesla'
    },
    'model': 'Model 3 Highland (2024-2026)',
    'vehicleConfiguration': 'Standard RWD / Long Range AWD / Performance AWD',
    'image': 'https://evselects.com/images/reviews/tesla-model-3-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '9.3',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function TeslaModel3HighlandReviewPage() {
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
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 13 นาที
            </span>
          </div>

          {/* Header Score Pill */}
          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-700">9.3</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Tesla Model 3 Highland (2024-2026): อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยีที่สมบูรณ์แบบที่สุด
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          การปรับโฉมครั้งประวัติศาสตร์ภายใต้รหัสพัฒนา <strong>&quot;Project Highland&quot;</strong> ที่ลบทุกคำสบประมาทเรื่องความกระด้างและเสียงรบกวน ด้วยกระจก Acoustic 360 องศา, ช่วงล่างใหม่ Frequency Response Dampers, เบาะเป่าลมเย็น (Ventilated Seats), จอหลัง 8 นิ้ว และความสะดวกสบายไร้กังวลจากเครือข่าย <strong>Tesla Supercharger</strong> ทั่วประเทศไทย
        </p>
      </header>

      {/* 3. Hero Banner Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/tesla-model-3-hero.jpg"
          alt="Tesla Model 3 Highland รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: Tesla Model 3 Long Range AWD (Project Highland)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            สัมประสิทธิ์แรงต้าน Cd 0.219 ต่ำที่สุดในคลาส
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
              9.3 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;มาตรฐานใหม่ของพรีเมียมสปอร์ตซีดาน EV เงียบสนิท นุ่มนวลขึ้นอย่างเห็นได้ชัด จัดการพลังงานยอดเยี่ยมที่สุด และความสบายใจจากเครือข่าย Supercharger ที่ไม่มีใครเทียบได้&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ราคาเริ่มต้น</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">1,149,000 ฿</div>
              <div className="text-[10px] text-slate-500">3 รุ่นย่อย (RWD / AWD)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">283 – 627 hp</div>
              <div className="text-[10px] text-slate-500">แรงบิด 420 – 741 Nm</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">4.4 วินาที (AWD)</div>
              <div className="text-[10px] text-slate-500">3.1s ในรุ่น Performance</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางสูงสุด (WLTP)</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">629 กม.</div>
              <div className="text-[10px] text-slate-500">Long Range (วิ่งจริง 530 กม.)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระบบช่วงล่าง</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">FRD Dampers</div>
              <div className="text-[10px] text-slate-500">ซับแรงสะเทือนเนียนนุ่ม</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ความเร็วชาร์จ DC</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">250 kW</div>
              <div className="text-[10px] text-slate-500">Supercharger V3/V4 (18 นาที)</div>
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
              การเก็บเสียง <strong>Acoustic Glass 360°</strong> และความนุ่มนวลของช่วงล่างใหม่ที่ลบความกระด้างของรุ่นเดิมได้อย่างหมดจด, ประสิทธิภาพพลังงานกินไฟต่ำสุดในคลาส, <strong>เบาะเป่าลมเย็น</strong> ที่ตอบโจทย์อากาศเมืองไทย และเครือข่าย Supercharger ที่สะดวกที่สุด
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              การตัดก้านไฟเลี้ยวและก้านเกียร์ออกเปลี่ยนมาใช้ปุ่มสัมผัสบนพวงมาลัยและสไลด์หน้าจอ ต้องใช้เวลาปรับตัว 2-3 วันแรก และหลังคาพาโนรามากลาสรูฟไม่มีม่านบังแดดไฟฟ้าในตัว ต้องติดม่านบังแดดเสริม
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              คนทำงานรุ่นใหม่และผู้บริหารที่ต้องการซีดานไฟฟ้าสมรรถนะสูง ดีไซน์เรียบหรู ขับสนุก และต้องการความมั่นใจในการเดินทางไกลข้ามจังหวัดโดยไม่ต้องลุ้นตู้ชาร์จสาธารณะ
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
            เมื่อพูดถึงรถยนต์ไฟฟ้าที่สร้างมาตรฐานให้กับอุตสาหกรรม EV ทั่วโลก <strong>Tesla Model 3</strong> คือชื่อแรกที่ทุกคนนึกถึง ทว่าในรุ่นก่อนหน้านี้ ผู้ใช้งานชาวไทยหลายคนมักสะท้อนถึงจุดด้อยเรื่องความกระด้างตึงตังของระบบกันสะเทือน, เสียงลมและเสียงยางที่เล็ดลอดเข้ามาในห้องโดยสาร และการขาดฟังก์ชันที่จำเป็นสำหรับประเทศเมืองร้อนอย่างเบาะเป่าลมเย็น
          </p>
          <p>
            การเปิดตัว <strong>Tesla Model 3 Highland</strong> สเปกไทย (นำเข้า CBU พวงมาลัยขวาจาก Gigafactory Shanghai) นับเป็นการยกเครื่องครั้งใหญ่ที่เปลี่ยนชิ้นส่วนตัวรถใหม่มากกว่า 50% มุ่งเน้นการปรับปรุงความสบาย ความเงียบ และความประณีตของวัสดุภายใน เพื่อรักษาตำแหน่งผู้นำในกลุ่มคอมแพกต์พรีเมียมซีดานไฟฟ้า ท่ามกลางการแข่งขันที่ดุเดือดจาก BYD Seal และ Deepal SL03
          </p>
          <p>
            ทุกคันที่จำหน่ายโดย <strong>Tesla Thailand</strong> มาพร้อมการรับประกันคุณภาพตัวรถ <strong>4 ปี หรือ 80,000 กม.</strong> และรับประกันชุดแบตเตอรี่และระบบขับเคลื่อน <strong>8 ปี หรือ 160,000 – 192,000 กม.</strong> พร้อมความสะดวกสบายระดับ World-Class จากเครือข่ายสถานี <strong>Tesla Supercharger</strong> ที่ครอบคลุมเส้นทางสายหลักทั่วไทย
          </p>
        </section>

        {/* SECTION 02: TRIM BREAKDOWN & VALUE ANALYSIS */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '650px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. เจาะลึก 3 รุ่นย่อย และการวิเคราะห์ความคุ้มค่า (Trim Value Breakdown)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Tesla Thailand ทำตลาด Model 3 Highland ทั้งหมด <strong>3 รุ่นย่อย</strong> พร้อมโครงสร้างราคาและขุมพลังที่ตอบโจทย์การใช้งานที่แตกต่างกันอย่างชัดเจน:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคา 3 รุ่นย่อย Tesla Model 3 Highland"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">คุณสมบัติ / รุ่นย่อย</th>
                  <th className="py-4 px-3">Standard RWD</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Long Range AWD (Sweet Spot)</th>
                  <th className="py-4 px-3 text-white font-extrabold">Performance AWD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่าย (MSRP)</td>
                  <td className="py-3.5 px-3">1,149,000 – 1,599,000 ฿*</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">1,439,000 – 1,899,000 ฿*</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">1,799,000 – 2,149,000 ฿*</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว RWD (ขับหลัง)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">มอเตอร์คู่ Dual-Motor AWD</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">มอเตอร์คู่ Performance AWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-3">283 hp / 420 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">498 hp / 493 Nm</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">627 hp / 741 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">6.1 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">4.4 วินาที</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">3.1 วินาที (Insane Mode)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ & เคมี</td>
                  <td className="py-3.5 px-3 font-semibold">60.0 kWh (CATL LFP)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">78.1 kWh (LG NMC)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">78.1 kWh (LG NMC)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งสูงสุด (WLTP)</td>
                  <td className="py-3.5 px-3">513 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">629 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">528 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ชาร์จเร็ว DC Supercharger</td>
                  <td className="py-3.5 px-3">170 kW (10-80% ใน 22 นาที)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-700">250 kW (10-80% ใน 18 นาที)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-emerald-700">250 kW (10-80% ใน 18 นาที)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบเครื่องเสียงพรีเมียม</td>
                  <td className="py-3.5 px-3 text-slate-600">9 ลำโพง + 1 แอมป์</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">17 ลำโพง + Dual Subwoofers</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">17 ลำโพง + Dual Subwoofers</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ขนาดล้อมาตรฐาน</td>
                  <td className="py-3.5 px-3">18 นิ้ว Photon Aero</td>
                  <td className="py-3.5 px-3 bg-lime-50/40">18 นิ้ว Photon Aero</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">20 นิ้ว Warp Forged</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 my-2 italic">
            *หมายเหตุ: ช่วงราคาตามโปรโมชันส่งเสริมการขายเทียบกับราคา MSRP เปิดตัว
          </p>

          {/* Deep-dive 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {/* Standard RWD */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    คุ้มค่างบประมาณ
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Standard RWD</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">283 hp | 513 km (WLTP) | LFP 60 kWh</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าด้านงบประมาณ:</strong> ขับเคลื่อนล้อหลัง แบตเตอรี่ LFP ทนทาน ชาร์จ 100% ประจำวันได้โดยไม่เสื่อมง่าย อัตราเร่ง 0-100 ใน 6.1 วินาที ได้ความนุ่มนวลของช่วงล่างใหม่และเบาะเป่าลมเย็นครบถ้วนในราคาเริ่มต้นที่จับต้องได้ง่าย
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">การใช้งานในเมืองและชานเมือง เน้นความประหยัดและความทนทานของแบตเตอรี่ LFP</p>
              </div>
            </div>

            {/* Long Range AWD */}
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
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Long Range AWD</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">498 hp | 629 km (WLTP) | NMC 78.1 kWh</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> รวมความแรง 498 แรงม้า (0-100 ใน 4.4 วินาที) เข้ากับระยะทางวิ่งไกลที่สุดถึง 629 กม. พร้อมระบบขับเคลื่อน 4 ล้อ AWD มั่นใจในทุกสภาพถนน ชาร์จเร็ว Supercharger 250 kW และระบบเสียง 17 ลำโพงระดับคอนเสิร์ตฮอลล์
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ผู้ที่ขับขี่เดินทางไกลข้ามจังหวัดเป็นประจำ ต้องการทั้งสมรรถนะและความอุ่นใจด้านระยะทาง</p>
              </div>
            </div>

            {/* Performance AWD */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trim 03</span>
                  <span className="bg-lime-500 text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    ตัวท็อป Supercar Eater
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Performance AWD</h3>
                <div className="text-sm font-bold text-lime-400 mb-3">627 hp | 528 km (WLTP) | 0-100 ใน 3.1s</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>ที่สุดแห่งความแรงระดับซูเปอร์คาร์:</strong> ขุมพลัง 627 แรงม้า อัตราเร่ง 0-100 ใน 3.1 วินาที พร้อมช่วงล่าง Adaptive Damping พิเศษ, เบาะ Sport Seats โอบกระชับตัว, สปอยเลอร์หลังคาร์บอนไฟเบอร์ และล้อฟอร์จ Warp 20 นิ้ว
                </p>
              </div>
              <div className="border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">ผู้ที่หลงใหลในความเร็วระดับหัวแถว และต้องการสปอร์ตซีดานไฟฟ้าที่พร้อมลงสนามแข่งได้ทันที</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก แอโรไดนามิกส์ และมิติตัวถัง (Exterior & Aerodynamics)
          </h2>
          <p>
            งานดีไซน์ภายนอกของ Model 3 Highland ถูกขัดเกลาให้เฉียบคมและลู่ลมยิ่งขึ้น โดยด้านหน้าตัดไฟตัดหมอกออกและออกแบบกันชนหน้าใหม่หมดจรด ส่งผลให้ค่าสัมประสิทธิ์แรงต้านอากาศลดลงเหลือเพียง <strong>Cd 0.219</strong> ซึ่งต่ำที่สุดในประวัติศาสตร์ของ Tesla ช่วยลดเสียงลมปะทะและเพิ่มระยะทางวิ่งต่อการชาร์จได้อีก 5-8%
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/tesla-model-3-exterior.jpg"
                alt="ดีไซน์ภายนอก ไฟหน้าสลิม Matrix LED และไฟท้าย C-Shape ของ Tesla Model 3 Highland"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              ดีไซน์ด้านหน้าเพรียวบาง ไฟหน้า Matrix LED ใหม่ พร้อมไฟท้ายแบบ C-Shape ชิ้นเดียวไร้รอยต่อ
            </figcaption>
          </figure>

          <p>
            <strong>จุดเด่นด้านงานวิศวกรรมภายนอก:</strong>
          </p>
          <ul>
            <li><strong>ไฟหน้า Matrix LED ทรงสลิม:</strong> ส่องสว่างคมกริบ พร้อมไฟ DRL เส้นสายโฉบเฉี่ยว</li>
            <li><strong>ไฟท้าย C-Shape Integrated Tailgate:</strong> หล่อขึ้นรูปเป็นชิ้นเดียวฝังอยู่บนฝากระโปรงท้าย ไม่มีรอยต่อแยกชิ้น ให้ความประณีตระดับสูง</li>
            <li><strong>ล้ออัลลอย Aero Wheels:</strong> ล้อ Photon 18 นิ้ว พร้อมฝาครอบตัดลม หรือล้อ Nova 19 นิ้ว (และล้อ Forged Warp 20 นิ้วในรุ่น Performance)</li>
            <li><strong>สีตัวถังพิเศษใหม่:</strong> สีแดง Ultra Red และสีเทา Stealth Grey ผสมผสานชั้นสีหลายเลเยอร์ สะท้อนแสงเงาได้อย่างมีมิติ</li>
          </ul>

          <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความยาว (Length)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">4,720 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความกว้าง (Width)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,850 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความสูง (Height)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,441 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ระยะฐานล้อ (Wheelbase)</div>
              <div className="text-sm font-bold text-lime-700 mt-0.5">2,875 มม.</div>
            </div>
          </div>
        </section>

        {/* SECTION 04 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ภายในห้องโดยสาร เบาะเป่าลมเย็น และจอหลัง 8 นิ้ว (Interior Luxury & Features)
          </h2>
          <p>
            ภายในห้องโดยสารคือจุดที่เกิดการเปลี่ยนแปลงมากที่สุด ดีไซน์คอนโซลหน้าใหม่หุ้มด้วยผ้านุ่มและวัสดุอะลูมิเนียม พร้อมแถบไฟ <strong>Ambient Lighting แบบปรับแต่งได้ 256 สี</strong> โอบล้อมรอบห้องโดยสารตั้งแต่คอนโซลหน้าจรดแผงประตูด้านหลัง
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/tesla-model-3-interior.jpg"
                alt="ภายในห้องโดยสาร Tesla Model 3 Highland พร้อมจอหลัง 8 นิ้วและไฟ Ambient Light"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              ค็อกพิทมินิมอลแบบใหม่ จอกลาง 15.4 นิ้ว พวงมาลัยไร้ก้าน พร้อมจอหลัง 8 นิ้วสำหรับผู้โดยสารตอนหลัง
            </figcaption>
          </figure>

          <p>
            <strong>จุดเด่นสำคัญที่อัปเกรดในรุ่น Highland:</strong>
          </p>
          <ul>
            <li><strong>เบาะคู่หน้าพร้อมระบบเป่าลมเย็น (Ventilated Seats):</strong> ดูดลมเย็นผ่านรูระบายอากาศ ช่วยให้หลังและต้นขาไม่อับชื้นเมื่อขึ้นรถที่จอดตากแดดเมืองไทย 40°C</li>
            <li><strong>หน้าจอหลังขนาด 8.0 นิ้ว (Rear Display):</strong> ผู้โดยสารตอนหลังสามารถปรับอุณหภูมิแอร์, เปิดระบบอุ่นเบาะ, เลื่อนเบาะหน้า และดูสตรีมมิ่ง YouTube, Netflix, Disney+ ผ่านหูฟังบลูทูธแยกอิสระได้</li>
            <li><strong>พวงมาลัยไร้ก้าน (Stalkless Steering):</strong> เทสลาได้ตัดก้านไฟเลี้ยวและก้านเกียร์ออก โดยเปลี่ยนมาใช้ปุ่มสัมผัสบนพวงมาลัยสำหรับไฟเลี้ยว/ไฟสูง/แตร และการสไลด์หน้าจอสัมผัสเพื่อเข้าเกียร์ D/R/P/N</li>
            <li><strong>ระบบเสียงพรีเมียม 17 ลำโพง Dual Subwoofers:</strong> (ในรุ่น Long Range / Performance) ให้มิติเสียงและพลังเบสที่หนักแน่น คมชัดระดับหัวแถวของวงการ</li>
            <li><strong>พื้นที่เก็บสัมภาระจุใจ:</strong> ท้ายรถ <strong>594 ลิตร</strong> (รวมช่องหลุมลึกใต้พื้น 88 ลิตร) และช่องเก็บของด้านหน้า Frunk อีก <strong>88 ลิตร</strong></li>
          </ul>
        </section>

        {/* SECTION 05: REAL DRIVING & NVH DATA */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ประสบการณ์ขับขี่จริงบนถนนไทย: ความเงียบ NVH และสมรรถนะ (Real Driving Dynamics)
          </h2>
          <p>
            การนำ Model 3 Long Range AWD ออกวิ่งทดสอบจริงบนเส้นทางในกรุงเทพฯ ถนนพระราม 9 มอเตอร์เวย์สาย 7 และทางด่วนบูรพาวิถี พิสูจน์ให้เห็นว่านี่คือการเปลี่ยนแปลงที่ก้าวกระโดด:
          </p>

          {/* Performance Data Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (Long Range AWD)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">4.42 วินาที</div>
                <div className="text-[10px] text-slate-400">3.10s ในรุ่น Performance</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">2.52 วินาที</div>
                <div className="text-[10px] text-slate-400">ตอบสนองทันที ไม่รอรอบ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">63.4 dB(A)</div>
                <div className="text-[10px] text-slate-400">เงียบขึ้นกว่ารุ่นเดิม 30%</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">34.8 เมตร</div>
                <div className="text-[10px] text-slate-400">เบรกหยุดมั่นใจ ไม่เป๋</div>
              </div>
            </div>
          </div>

          <p>
            <strong>1. ช่วงล่างใหม่ Frequency Response Dampers บนถนนไทย:</strong><br />
            เทสลาได้เปลี่ยนสปริง บุชยางปีกนก และโช้คอัพชุดใหม่ทั้งหมด อาการตึงตังกระแทกกระทั้นบนรอยต่อคอสะพานทางด่วนและผิวถนนคอนกรีตไม่เรียบในกรุงเทพฯ หายไปอย่างสิ้นเชิง ตัวรถซับแรงสั่นสะเทือนได้เนียนนุ่มและแน่นหนึบ ผู้โดยสารตอนหลังนั่งได้สบายโดยไม่เวียนหัว
          </p>

          <p>
            <strong>2. การเก็บเสียงระดับ 360° Acoustic Glass:</strong><br />
            กระจกทุกบานรอบคัน (ทั้งกระจกบังลมหน้า กระจกประตูทั้ง 4 บาน และกระจกหลังคา) เป็นแบบสองชั้น Laminated Acoustic Glass ทั้งหมด ทำให้เสียงลมปะทะที่ความเร็ว 120 กม./ชม. ลดลงกว่ารุ่นเดิมถึง <strong>30%</strong> และเสียงยางบดถนนลดลง <strong>20%</strong>
          </p>

          <p>
            <strong>3. การจัดการพลังงานและระยะทางวิ่งจริง:</strong><br />
            Model 3 Highland กินไฟเฉลี่ยต่ำเพียง <strong>13.8 – 14.8 kWh/100km</strong> ในการขับขี่ความเร็วเดินทาง 110-120 กม./ชม. ส่งผลให้รุ่น Long Range วิ่งทางไกลจริงได้ถึง <strong>520 – 545 กิโลเมตร</strong> ต่อการชาร์จเต็ม 100%
          </p>
        </section>

        {/* SECTION 06: HEAD-TO-HEAD COMPARISON */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '700px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. เปรียบเทียบตรงตัว: Tesla Model 3 Highland vs BYD Seal & Deepal SL03
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เปรียบเทียบทุกมิติระหว่างราชันซีดานไฟฟ้าระดับโลก <strong>Tesla Model 3 Highland</strong> กับคู่แข่งจากแดนมังกร <strong>BYD Seal</strong> และ <strong>Deepal SL03</strong>:
          </p>

          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ Tesla Model 3 Highland กับ BYD Seal และ Deepal SL03"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">มิติทดสอบ / สเปก</th>
                  <th className="py-4 px-4 text-lime-400 bg-slate-800 font-extrabold">Tesla Model 3 Long Range</th>
                  <th className="py-4 px-4 text-slate-200">BYD Seal AWD Performance</th>
                  <th className="py-4 px-4 text-slate-200">Deepal SL03 Long Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระดับราคาจำหน่ายในไทย</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">1.439 – 1.899 ล้านบาท</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">1.399 – 1.599 ล้านบาท</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">1.199 – 1.299 ล้านบาท</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-lime-50/40">498 hp / 493 Nm</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">530 hp / 670 Nm</td>
                  <td className="py-3.5 px-4 text-slate-600">258 hp / 320 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">4.4 วินาที</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">3.8 วินาที</td>
                  <td className="py-3.5 px-4 text-slate-600">6.9 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งสูงสุด</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">629 กม. (WLTP)</td>
                  <td className="py-3.5 px-4 text-slate-600">580 กม. (NEDC)</td>
                  <td className="py-3.5 px-4 text-slate-600">540 กม. (NEDC)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">สัมประสิทธิ์แรงต้าน (Cd)</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">Cd 0.219 (ต่ำสุด)</td>
                  <td className="py-3.5 px-4 text-slate-600">Cd 0.230</td>
                  <td className="py-3.5 px-4 text-slate-600">Cd 0.230</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ชาร์จ DC สูงสุด / เวลา</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">250 kW Supercharger (18 นาที)</td>
                  <td className="py-3.5 px-4 text-slate-600">150 kW (30 นาที)</td>
                  <td className="py-3.5 px-4 text-slate-600">80 kW (35 นาที)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบจอตอนหลัง</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">✅ มีจอ 8.0 นิ้วแยกอิสระ</td>
                  <td className="py-3.5 px-4 text-slate-500">❌ ไม่มี</td>
                  <td className="py-3.5 px-4 text-slate-500">❌ ไม่มี</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุช่องเก็บสัมภาระหน้า (Frunk)</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">88 ลิตร (ใหญ่สุด)</td>
                  <td className="py-3.5 px-4 text-slate-600">53 ลิตร</td>
                  <td className="py-3.5 px-4 text-slate-600">64 ลิตร</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-sm text-slate-700 mt-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-base mb-2">1. ความได้เปรียบด้านการจัดการพลังงานและ Supercharger:</h4>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                แม้ BYD Seal AWD จะมีตัวเลขอัตราเร่ง 0-100 ที่เร็วกว่าบนหน้ากระดาษ แต่ในการใช้งานจริงทางไกล Tesla Model 3 Highland ชนะขาดด้วยประสิทธิภาพการกินไฟที่ต่ำกว่าถึง 20% ทำให้ระยะทางวิ่งจริงไกลกว่า และสถานี <strong>Tesla Supercharger</strong> ที่เพียงแค่เสียบสายระบบจะตัดเงินอัตโนมัติ ไม่ต้องต่อคิวหรือแย่งชาร์จกับรถแบรนด์อื่น
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-base mb-2">2. ความประณีตและความเงียบในห้องโดยสาร:</h4>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                การอัปเกรดกระจก Acoustic รอบคันและช่วงล่างใหม่ทำให้ Model 3 Highland มีความเงียบและนุ่มนวลเทียบเท่ากับรถยุโรปอย่าง BMW i4 และเหนือกว่า Deepal SL03 อย่างชัดเจน
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07: ACTIVE SAFETY & ADAS */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (Tesla Vision &amp; Autopilot)
          </h2>
          <p>
            Tesla Model 3 Highland ใช้ฮาร์ดแวร์ <strong>HW4 (Hardware 4.0)</strong> พร้อมกล้องความละเอียดสูงรอบคัน ทำงานร่วมกับระบบประมวลผลเครือข่ายประสาทเทียม (Neural Network) โดยไม่มีการใช้เซ็นเซอร์เรดาร์หรืออัลตราโซนิก (Tesla Vision):
          </p>

          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Basic Autopilot (ติดตั้งมาตรฐาน)</div>
                <div className="text-xs text-slate-600 mt-0.5">ควบคุมพวงมาลัย ความเร็ว และรักษาระยะห่างในเลนได้อย่างแม่นยำและเป็นธรรมชาติ</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Sentry Mode &amp; Dashcam 360°</div>
                <div className="text-xs text-slate-600 mt-0.5">บันทึกวิดีโอรอบคันเมื่อมีสิ่งผิดปกติ พร้อมดูกล้องสดผ่านแอปสมาร์ทโฟนได้ตลอด 24 ชม.</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Cabin Overheat Protection</div>
                <div className="text-xs text-slate-600 mt-0.5">เปิดแอร์เลี้ยงห้องโดยสารอัตโนมัติไม่ให้เกิน 40°C เมื่อจอดตากแดดเมืองไทย</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Euro NCAP 5 Stars (Top Safety Pick+)</div>
                <div className="text-xs text-slate-600 mt-0.5">โครงสร้างตัวถังเหล็กกล้าและอะลูมิเนียมแข็งแกร่งระดับสูงสุด ต้านแรงกดทับหลังคาได้ 4 เท่าตัวรถ</div>
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
                  src="/images/reviews/tesla-model-3-details.jpg"
                  alt="อุปกรณ์เสริมตรงรุ่น Tesla Model 3 Highland EVSELECT"
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
                  อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ Tesla Model 3 Highland
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ยกระดับความสมบูรณ์แบบของ Model 3 Highland ด้วย <strong>ชุดพรมปูพื้น TPE 3D ไร้กลิ่น ไร้รอยต่อ ตรงรุ่น RHD ขอบยกสูงกันน้ำ 100%</strong>, <strong>ม่านบังแดดหลังคาแก้ว 2 ชั้น Nano-Silver สะท้อนรังสี UV 99%</strong>, <strong>ถาดจัดระเบียบคอนโซลกลางแบบสไลด์</strong>, <strong>แผ่นซิลิโคนรองแท่นชาร์จไร้สาย</strong> และ <strong>ฟิล์มกระจก 9H สำหรับจอกลาง 15.4 นิ้ว และจอหลัง 8 นิ้ว</strong>
                </p>
                <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/#products"
                    className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                  >
                    <span>เลือกซื้ออุปกรณ์เสริม Model 3 ทั้งหมด</span>
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

        {/* SECTION 09: PROS & CONS - STYLE */}
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
                  <span><strong>ห้องโดยสารเงียบและนุ่มขึ้นมหาศาล:</strong> กระจก Acoustic 360° และช่วงล่างใหม่ลบความกระด้างเดิมสนิท</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ประสิทธิภาพพลังงานอันดับ 1 (Cd 0.219):</strong> กินไฟต่ำสุด วิ่งทางไกล 520+ กม. ได้อย่างมั่นใจ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>เครือข่าย Tesla Supercharger:</strong> เสียบชาร์จง่าย รวดเร็ว 250 kW และตัดเงินอัตโนมัติ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>เบาะเป่าลมเย็น &amp; จอหลัง 8.0 นิ้ว:</strong> ออปชันใหม่ตอบโจทย์อากาศเมืองไทยและการโดยสารตอนหลัง</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>สมรรถนะคันเร่งฉับไวและ One-Pedal:</strong> ควบคุมความเร็วได้แม่นยำและเป็นธรรมชาติที่สุดในตลาด</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>พื้นที่เก็บสัมภาระ Frunk + Trunk 682 ลิตร:</strong> กว้างขวางและจุของได้มากกว่าซีดานทั่วไป</span>
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
                  <span><strong>ตัดก้านไฟเลี้ยวและก้านเกียร์:</strong> ต้องใช้เวลาปรับตัวในการกดปุ่มบนพวงมาลัยขณะเลี้ยวหรือกลับรถ</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>หลังคาแก้วไร้ม่านบังแดดไฟฟ้าในตัว:</strong> จอดรถตากแดดเมืองไทยยังมีความร้อนสะสม ต้องใช้ม่านบังแดดเสริม</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>ไม่มี Apple CarPlay / Android Auto:</strong> ต้องพึ่งพาระบบแผนที่และแอปพลิเคชันของ Tesla เป็นหลัก</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>ระยะ Ground Clearance 138 มม.:</strong> ต้องระมัดระวังเมื่อขับขึ้นอาคารจอดรถชันหรือคอสะพานสูงพิเศษ</span>
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
                Tesla Model 3 Highland คือสปอร์ตซีดานไฟฟ้าที่น่าซื้อที่สุดในไทยเวลานี้ เลือกรุ่น <strong>Long Range AWD</strong> เพื่อความคุ้มค่าและความอุ่นใจสูงสุดในการเดินทางไกล
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
                <span className="text-3xl font-black text-lime-700">9.3</span>
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
                  <span className="text-lime-700 font-bold">9.2</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.2}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความเงียบและการซับแรงสะเทือน 9.2 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '92%' }}></div>
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
                  <span className="text-lime-700 font-bold">9.1</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.1}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความคุ้มค่าเมื่อเทียบกับคู่แข่ง 9.1 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '91%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความปลอดภัยและโครงสร้าง (Safety Standards &amp; Build Quality)</span>
                  <span className="text-lime-700 font-bold">9.6</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.6}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความปลอดภัยและโครงสร้าง 9.6 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '96%' }}></div>
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
            href="/articles/zeekr-7x-2026-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/zeekr-7x-hero.jpg"
                alt="รีวิว Zeekr 7X 2026"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
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

          {/* Related Card 2 */}
          <Link
            href="/articles/tesla-model-y-l-premium-6-seater-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/tesla-model-y-l-hero.jpg"
                alt="รีวิว Tesla Model Y L 6-Seater"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                6-Seater SUV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">New Release</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Tesla Model Y L (Premium 6-Seater): รถ EV ครอบครัวที่ลงตัวที่สุด
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                เจาะลึกเลย์เอาต์เบาะ 2+2+2 Captain Seats และความอเนกประสงค์เพื่อครอบครัวยุคใหม่
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
                src="/images/reviews/zeekr-009-white.jpg"
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
          <ShareButton title="รีวิว Tesla Model 3 Highland สเปกไทย: อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยีที่สมบูรณ์แบบที่สุด | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
