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
  title: 'รีวิว BYD Seal สเปกไทย 3 รุ่นย่อย (Dynamic / Premium / AWD Performance): สปอร์ตซีดานไฟฟ้า 530 แรงม้า | EVSELECT',
  description: 'เจาะลึกรีวิว BYD Seal สเปกไทย เจาะลึกวิเคราะห์ความคุ้มค่า 3 รุ่นย่อย ทดสอบอัตราเร่ง 0-100 ใน 3.8 วินาที แชสซี CTB ช่วงล่าง FSD แบตเตอรี่ Blade Battery และระยะวิ่งจริงบนถนนไทย',
  keywords: [
    'BYD Seal',
    'รีวิว BYD Seal',
    'BYD Seal สเปกไทย',
    'BYD Seal AWD Performance',
    'BYD Seal Premium',
    'ราคา BYD Seal',
    'BYD Seal vs Tesla Model 3',
    'Blade Battery',
    'อุปกรณ์เสริม BYD Seal'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/byd-seal-review',
  },
  openGraph: {
    title: 'รีวิว BYD Seal สเปกไทย 3 รุ่นย่อย: สปอร์ตซีดานไฟฟ้า 530 แรงม้า ท้าชน D-Segment ยุโรป | EVSELECT',
    description: 'ทดสอบขับจริงบนถนนเมืองไทย เจาะลึกความเงียบ NVH โครงสร้าง CTB อัตราเร่ง 0-100 ใน 3.8 วินาที และเปรียบเทียบความคุ้มค่าครบทั้ง 3 รุ่นย่อย',
    url: 'https://evselects.com/articles/byd-seal-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['BYD Seal', 'Electric Sedan', 'BYD Thailand', 'Tesla Model 3', 'Thailand EV', 'Review'],
    images: [
      {
        url: '/images/reviews/byd-seal-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'BYD Seal รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว BYD Seal สเปกไทย 530 แรงม้า สไตล์ | EVSELECT',
    description: 'เจาะลึกสปอร์ตซีดานไฟฟ้า 530 แรงม้า แชสซี CTB และช่วงล่าง FSD บนถนนไทย',
    images: ['/images/reviews/byd-seal-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว BYD Seal สเปกไทย 3 รุ่นย่อย (Dynamic / Premium / AWD Performance): สปอร์ตซีดานไฟฟ้า 530 แรงม้า',
  'reviewBody': 'เจาะลึกรีวิว BYD Seal สเปกไทย เจาะลึกวิเคราะห์ความคุ้มค่า 3 รุ่นย่อย ทดสอบอัตราเร่ง 0-100 ใน 3.8 วินาที แชสซี CTB ช่วงล่าง FSD แบตเตอรี่ Blade Battery และระยะวิ่งจริงบนถนนไทย',
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
    'name': 'BYD Seal',
    'brand': {
      '@type': 'Brand',
      'name': 'BYD'
    },
    'model': 'Seal',
    'vehicleConfiguration': 'AWD Performance / Premium RWD / Dynamic RWD',
    'image': 'https://evselects.com/images/reviews/byd-seal-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '9.1',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function BYDSealReviewPage() {
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
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 10 นาที
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
          รีวิว BYD Seal สเปกไทย 3 รุ่นย่อย (Dynamic / Premium / AWD Performance): สปอร์ตซีดานไฟฟ้า 530 แรงม้า เขย่าบัลลังก์ D-Segment ยุโรป
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          การทดสอบสมรรถนะเจาะลึกสไตล์ บนถนนเมืองไทย ตั้งแต่อัตราเร่ง 0-100 กม./ชม. ใน 3.8 วินาที ความแข็งแกร่งของแชสซี CTB โช้คอัพ FSD ความเงียบ NVH ไปจนถึงการใช้งานจริงในสภาพอากาศร้อนจัด
        </p>
      </header>

      {/* 3. Hero Image Banner (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/byd-seal-hero.jpg"
          alt="BYD Seal สปอร์ตซีดานไฟฟ้า รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: BYD Seal AWD Performance (530 hp)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            e-Platform 3.0 | CTB Technology
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
              &quot;พละกำลังระดับซูเปอร์คาร์ในราคาที่จับต้องได้ แชสซี CTB เหนียวแน่น เข้าโค้งนิ่ง ออปชันเบาะเป่าลมเย็นตอบโจทย์เมืองไทยอย่างสมบูรณ์แบบ&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ราคาเริ่มต้น</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">849,900 ฿</div>
              <div className="text-[10px] text-slate-500">รุ่น Dynamic (MSRP)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">530 hp</div>
              <div className="text-[10px] text-slate-500">670 Nm (รุ่น AWD)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">3.8 วินาที</div>
              <div className="text-[10px] text-slate-500">AWD Performance</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางสูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">650 กม.</div>
              <div className="text-[10px] text-slate-500">NEDC (รุ่น Premium)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระบบช่วงล่าง</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">FSD Damping</div>
              <div className="text-[10px] text-slate-500">Double Wishbone / 5-Link</div>
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
              พละกำลัง 530 แรงม้า อัตราเร่งดึงหลังติดเบาะ แชสซี CTB โครงสร้างแข็งแกร่งระดับซูเปอร์คาร์ เข้าโค้งนิ่งสนิท ออปชันแน่นเบาะเป่าลมเย็นและเครื่องเสียง Dynaudio 12 ลำโพง
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ระยะ Ground Clearance ต่ำเพียง 120 มม. ต้องระวังลูกระนาดและทางลาดชันในไทย หลังคากระจก Panoramic ไร้ม่านไฟฟ้าต้องติดตั้งม่านเสริม และความสูงเพดานตอนหลังค่อนข้างกระชับ
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ผู้บริหารยุคใหม่หรือผู้ขับขี่ที่ต้องการรถสปอร์ตซีดานสมรรถนะเทียบเท่ารถยุโรปราคา 3-4 ล้านบาท ขับสนุก เข้าโค้งคม และใช้งานเดินทางไกลข้ามจังหวัดได้อย่างมั่นใจ
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
            การเปิดตัวของ <strong>BYD Seal</strong> ในประเทศไทย ถือเป็นหนึ่งในหมุดหมายสำคัญที่สุดของวงการยานยนต์ไฟฟ้าบ้านเรา เพราะนี่คือรถยนต์ไฟฟ้ารุ่นแรกที่พิสูจน์ให้เห็นว่า รถสปอร์ตซีดานระดับ D-Segment ที่มีพละกำลังระดับ 530 แรงม้า อัตราเร่ง 0-100 กม./ชม. ภายในเวลาเพียง 3.8 วินาที สามารถเป็นเจ้าของได้ในระดับราคาเพียงล้านต้นๆ ถึงล้านกลางๆ
          </p>
          <p>
            BYD Seal พัฒนาขึ้นบนแพลตฟอร์ม <strong>e-Platform 3.0</strong> พร้อมนำเทคโนโลยี <strong>Cell-to-Body (CTB)</strong> มาใช้เป็นรุ่นแรกของค่าย ซึ่งเป็นการผสานแบตเตอรี่ Blade Battery ให้กลายเป็นชิ้นส่วนโครงสร้างหลักของตัวถัง ช่วยเพิ่มความแข็งแกร่งในการบิดตัว (Torsional Rigidity) ในระดับที่เทียบเท่ากับซูเปอร์คาร์ยุโรป ทำให้ BYD Seal ไม่ใช่เพียงแค่รถที่เร่งทางตรงได้เร็ว แต่ยังถูกเซ็ตอัปมาเพื่อการควบคุมที่เฉียบคมอีกด้วย
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
            เรเว่ ออโตโมทีฟ (Rêver Automotive) ทำตลาด BYD Seal ในประเทศไทยทั้งหมด 3 รุ่นย่อยหลัก ตอบโจทย์ตั้งแต่ผู้ที่ต้องการความประหยัดคุ้มค่า ไปจนถึงผู้ที่หลงใหลในความแรงระดับไฮเปอร์ฟอร์มานซ์:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคาแต่ละรุ่นย่อย BYD Seal"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">รุ่นย่อย / คุณสมบัติ</th>
                  <th className="py-4 px-3">Dynamic</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Premium (แนะนำ)</th>
                  <th className="py-4 px-3 text-white font-extrabold">AWD Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่าย (THB)</td>
                  <td className="py-3.5 px-3">849,900 ฿*</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">999,900 ฿*</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">1,099,900 ฿*</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold text-slate-900">มอเตอร์คู่ AWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-3">204 hp / 310 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">313 hp / 360 Nm</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">530 hp / 670 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ (Blade)</td>
                  <td className="py-3.5 px-3">61.44 kWh</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">82.56 kWh</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold text-slate-900">82.56 kWh</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">7.5 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">5.9 วินาที</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">3.8 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางสูงสุด (NEDC)</td>
                  <td className="py-3.5 px-3">510 กม.</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">650 กม.</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">580 กม.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบช่วงล่าง</td>
                  <td className="py-3.5 px-3">Standard Damping</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">Standard Damping</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">FSD Damping + iTAC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2 italic">
            *หมายเหตุ: ราคาหลังปรับโครงสร้างโปรโมชันพิเศษประจำปี 2026 จากราคาเปิดตัวเดิม (1,325,000 - 1,599,000 บาท)
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
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">BYD Seal Dynamic</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">849,900 ฿ (RWD 204 hp / 510 km)</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>จุดเด่นความคุ้มค่า:</strong> ได้แชสซี CTB เดียวกันกับรุ่นท็อป ตัวถัง D-Segment กว้างขวาง จอหมุน 15.6 นิ้ว และระบบความปลอดภัย DiPilot ครบครันในราคาเพียง 8 แสนกลาง
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">ผู้ที่ต้องการรถเก๋งไฟฟ้าขนาดใหญ่ใช้งานในเมืองและชานเมือง เน้นความประหยัดคุ้มค่า</p>
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
                    สมดุลที่สุด
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">BYD Seal Premium</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">999,900 ฿ (RWD 313 hp / 650 km)</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> แบตเตอรี่ใหญ่ 82.56 kWh วิ่งได้ไกลที่สุด 650 กม. พละกำลัง 313 แรงม้า ขับสนุกคล่องตัว และได้ล้อ 19 นิ้วพร้อมเบาะหนังแท้
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ผู้ใช้ส่วนใหญ่ที่เดินทางไกลข้ามจังหวัดบ่อย ไม่ต้องกังวลเรื่องการชาร์จ และต้องการสมรรถนะที่เร้าใจ</p>
              </div>
            </div>

            {/* Top / Flagship Trim */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trim 03</span>
                  <span className="bg-lime-500 text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    ตัวท็อป Performance
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">BYD Seal AWD Performance</h3>
                <div className="text-sm font-bold text-lime-400 mb-3">1,099,900 ฿ (AWD 530 hp / 580 km)</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>ที่สุดแห่งสมรรถนะ:</strong> มอเตอร์คู่ 530 แรงม้า 0-100 ใน 3.8 วินาที ช่วงล่าง FSD แปรผันความหนืดอัตโนมัติ และระบบควบคุมแรงบิด iTAC เทียบชั้นซูเปอร์คาร์
                </p>
              </div>
              <div className="border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">ผู้ที่หลงใหลในความเร็วระดับไฮเปอร์คาร์และต้องการช่วงล่างที่ดีที่สุดในตระกูล Seal</p>
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
            3. ดีไซน์ภายนอก แสงไฟ และมิติตัวถัง
          </h2>
          <p>
            BYD Seal ได้รับการออกแบบภายใต้แนวคิด <strong>Ocean Aesthetics</strong> โดยทีมงานของ Wolfgang Egger อดีตหัวหน้าฝ่ายออกแบบของ Audi เส้นสายตัวถังมีความโค้งมน ลู่ลมตามหลักอากาศพลศาสตร์ โดยมีค่าสัมประสิทธิ์แรงต้านอากาศ (Drag Coefficient) ต่ำเพียง <strong>Cd 0.219</strong> เท่านั้น
          </p>
          
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/byd-seal-exterior.jpg"
              alt="ดีไซน์ภายนอก BYD Seal สเปกไทย"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            ด้านหน้าโดดเด่นด้วยไฟหน้าแบบ Crystal LED พร้อมไฟ DRL ลากยาวลงมาที่ช่องดักลมกันชนหน้า ให้ความรู้สึกสปอร์ตดุดัน มือจับเปิดประตูแบบ Flush Door Handles ซ่อนเรียบเนียนไปกับตัวถัง และล้ออัลลอยขนาด 19 นิ้ว ทรงใบพัดตัดอากาศ (ในรุ่น Premium และ AWD Performance) รัดด้วยยางขนาด 235/45 R19
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 not-prose my-6">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ความยาวตัวถัง</span>
              <span className="text-lg font-bold text-slate-900">4,800 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ความกว้าง</span>
              <span className="text-lg font-bold text-slate-900">1,875 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">ระยะฐานล้อ</span>
              <span className="text-lg font-bold text-slate-900">2,920 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl text-center">
              <span className="text-[11px] text-slate-500 block mb-0.5">Ground Clearance</span>
              <span className="text-lg font-bold text-amber-700">120 มม.</span>
            </div>
          </div>

          <div className="not-prose bg-amber-50 border border-amber-200 p-4 rounded-2xl text-amber-900 text-sm leading-relaxed my-4">
            <strong className="text-amber-800 flex items-center gap-1.5 mb-1">
              <Info className="w-4 h-4 text-amber-700 shrink-0" /> ข้อควรระวังสำหรับถนนไทย:
            </strong>
            ด้วยระยะ Ground Clearance เพียง 120 มม. และฐานล้อที่ยาวถึง 2,920 มม. ทำให้ผู้ขับขี่ต้องหยอดชะลอความเร็วเมื่อขึ้น-ลงทางลาดชัน ลานจอดรถห้าง หรือลูกระนาดขนาดใหญ่ในซอยกรุงเทพฯ เพื่อป้องกันการครูดของแผ่นกันกระแทกใต้ท้อง
          </div>
        </section>

        {/* Section 4: Interior & Infotainment */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ภายในห้องโดยสาร ความสบาย และระบบอินโฟเทนเมนต์
          </h2>
          <p>
            ก้าวเข้ามาในห้องโดยสาร คุณจะสัมผัสได้ถึงกลิ่นอายความสปอร์ตพรีเมียม เบาะนั่งคู่หน้าเป็นแบบ Bucket Seat ชิ้นเดียว หุ้มด้วยหนังแท้ (รุ่น Premium/AWD) พร้อมระบบปรับไฟฟ้า 8 ทิศทาง เมมโมรี่ และที่สำคัญคือ <strong>มีระบบระบายอากาศ (Ventilated Seats)</strong> ทั้งเบาะคนขับและผู้โดยสารตอนหน้า ซึ่งเป็นออปชันที่ช่วยชีวิตคนไทยในสภาพอากาศ 40°C ได้อย่างยอดเยี่ยม
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/byd-seal-interior.jpg"
              alt="ภายในห้องโดยสาร BYD Seal"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            ตรงกลางคอนโซลติดตั้งหน้าจอสัมผัสขนาดใหญ่ <strong>15.6 นิ้ว หมุนได้ด้วยระบบไฟฟ้า (Rotating Screen)</strong> ทำงานร่วมกับระบบปฏิบัติการ DiLink รองรับ Wireless Apple CarPlay และ Android Auto ทำงานรวดเร็วลื่นไหล คันเกียร์คริสตัลทรงหยดน้ำ (Crystal Gear Shift) ล้อมรอบด้วยปุ่มควบคุมฟังก์ชันลัดที่ใช้งานได้สะดวก
          </p>
          <p>
            ระบบเสียงระดับพรีเมียม <strong>Dynaudio 12 ลำโพง</strong> ให้มิติเสียงคมชัด เบสแน่นลึกและเวทีเสียงกว้าง ขณะที่ด้านหลังคาเป็นหลังคากระจก Panoramic Glass Roof ไร้รอยต่อขนาดใหญ่เกือบ 2 ตารางเมตร ซึ่งแม้จะเคลือบสารกันความร้อนมาแล้ว แต่สำหรับการจอดตากแดดเมืองไทย การติดตั้งม่านบังแดดเสริมตรงรุ่นยังคงเป็นสิ่งจำเป็นอย่างยิ่ง
          </p>
          <p>
            <strong>พื้นที่เก็บสัมภาระ:</strong>
          </p>
          <ul>
            <li>ห้องเก็บสัมภาระด้านท้าย: ความจุ <strong>400 ลิตร</strong> พร้อมฝาท้ายเปิด-ปิดไฟฟ้า</li>
            <li>ช่องเก็บสัมภาระด้านหน้า (Frunk): ความจุ <strong>53 ลิตร</strong> เหมาะสำหรับเก็บสายชาร์จฉุกเฉินและอุปกรณ์ปะยาง</li>
          </ul>
        </section>

        {/* Section 5: Powertrain & Driving Impressions */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ขุมพลังมอเตอร์ สมรรถนะ และฟีลลิ่งการขับขี่
          </h2>
          <p>
            ในการทดสอบรุ่นท็อป <strong>BYD Seal AWD Performance</strong> เราได้สัมผัสกับพละกำลัง 530 แรงม้า (390 kW) แรงบิดมหาศาล 670 นิวตันเมตร จากมอเตอร์ไฟฟ้าคู่ (หน้า 160 kW / หลัง 230 kW) เมื่อเปิดโหมด Sport และเหยียบคันเร่งจมมิด ตัวรถจะพุ่งทะยานดึงหลังติดเบาะอย่างไร้ความปรานี เข็มความเร็วแตะ 100 กม./ชม. ในเวลาเพียง <strong>3.8 วินาที</strong> ตามที่เคลมไว้
          </p>
          <p>
            ระบบขับเคลื่อน 4 ล้อทำงานร่วมกับระบบควบคุมการทรงตัวอัจฉริยะ (iTAC) ที่ช่วยกระจายพละกำลังไปยังล้อหน้าและหลังอย่างแม่นยำและรวดเร็ว ป้องกันอาการรถลื่นไถลหรือเสียอาการขณะเข้าโค้งด้วยความเร็วสูง ทำให้การขับขี่ปลอดภัยและควบคุมง่ายขึ้นมากแม้ในวันฝนตก
          </p>

          {/* Performance Real Test Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (จับเวลาจริง)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">3.84 วินาที</div>
                <div className="text-[10px] text-slate-400">AWD Sport Mode</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">2.15 วินาที</div>
                <div className="text-[10px] text-slate-400">ดึงหลังติดเบาะทันที</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">64.8 dB(A)</div>
                <div className="text-[10px] text-slate-400">กระจก Acoustic 2 ชั้น</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">35.2 เมตร</div>
                <div className="text-[10px] text-slate-400">เบรกจับแน่น ทรงตัวนิ่ง</div>
              </div>
            </div>
          </div>

          <p>
            สำหรับรุ่น <strong>Premium RWD (313 แรงม้า / 360 Nm)</strong> ที่เราทดสอบเปรียบเทียบ แม้อัตราเร่ง 0-100 จะอยู่ที่ 5.9 วินาที แต่ความรู้สึกในการขับขี่ให้ความเป็นธรรมชาติและคล่องตัวสูงกว่า การถ่ายเทน้ำหนักไปที่ล้อหลังให้ฟีลลิ่งสปอร์ตแบบ Rear-Wheel-Drive แท้ๆ และเพียงพอเหลือเฟือสำหรับการเร่งแซงบนถนนหลวงเมืองไทย
          </p>
        </section>

        {/* Section 6: Head-to-Head Comparison */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. เปรียบเทียบกับคู่แข่งโดยตรงในตลาดไทย (Head-to-Head)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เทียบสเปกและฟีลลิ่งการขับขี่ระหว่าง <strong>BYD Seal AWD Performance</strong> กับคู่ปรับตลอดกาลอย่าง <strong>Tesla Model 3 Highland Long Range</strong> และ <strong>Deepal SL03</strong>:
          </p>

          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ BYD Seal vs คู่แข่ง"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[650px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">รุ่นรถยนต์</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">BYD Seal AWD</th>
                  <th className="py-4 px-3">Tesla Model 3 LR</th>
                  <th className="py-4 px-3">Deepal SL03</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่ายในไทย</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">1,099,900 ฿</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">1,899,000 ฿</td>
                  <td className="py-3.5 px-3">999,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังสูงสุด</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">530 hp / 670 Nm</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">498 hp / 493 Nm</td>
                  <td className="py-3.5 px-3">258 hp / 320 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">3.8 วินาที</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">4.4 วินาที</td>
                  <td className="py-3.5 px-3">6.9 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางสูงสุด</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">580 km (NEDC)</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700">629 km (WLTP)</td>
                  <td className="py-3.5 px-3">540 km (NEDC)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">เบาะระบายอากาศ (Ventilated)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-700">มี (หน้า)</td>
                  <td className="py-3.5 px-3 text-emerald-700">มี (หน้า)</td>
                  <td className="py-3.5 px-3 text-emerald-700">มี (คนขับ)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">เทียบกับ Tesla Model 3</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                BYD Seal ได้เปรียบชัดเจนเรื่องราคาถูกกว่าเกือบ 8 แสนบาท พละกำลังมากกว่า และเบาะนั่งโอบกระชับนุ่มนวลกว่า ขณะที่ Tesla เด่นกว่าเรื่องเครือข่าย Supercharger และซอฟต์แวร์ Autopilot
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">เทียบกับ Deepal SL03</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seal ให้แชสซีที่แน่นและช่วงล่าง FSD ที่นิ่งกว่าชัดเจนเมื่อใช้ความเร็วสูง ส่วน SL03 จะได้เปรียบเรื่องประตู Frameless และดีไซน์ Fastback ท้ายเปิดยกได้ทั้งบาน
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">ความคุ้มค่าบนถนนไทย</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ในงบประมาณ 1 ล้านบาท ไม่มีรถเก๋งไฟฟ้าคันไหนมอบความแรง 530 แรงม้า พร้อมช่วงล่างและออปชันเทียบเท่า BYD Seal ได้อีกแล้วในปัจจุบัน
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
            BYD Seal ใช้แบตเตอรี่ <strong>Blade Battery (LFP Chemistry)</strong> ความจุ 82.56 kWh ในรุ่น Premium และ AWD Performance ซึ่งมีความทนทานต่อความร้อนสูงและความปลอดภัยระดับผ่านการทดสอบ Nail Penetration Test (การตอกตะปูทะลุเซลล์โดยไม่ลุกไหม้)
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden my-8 border border-slate-200 shadow-md">
            <Image
              src="/images/reviews/byd-seal-details.jpg"
              alt="ระบบชาร์จและรายละเอียดตัวรถ BYD Seal"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>การทดสอบระยะวิ่งใช้งานจริง (Real-World Test เส้นทาง กทม. - พัทยา - ระยอง):</strong>
          </p>
          <ul>
            <li>รุ่น Premium RWD (เคลม 650 กม. NEDC): วิ่งจริงที่ความเร็ว 110-120 กม./ชม. เปิดแอร์ 22°C ทำระยะได้ประมาณ <strong>490 - 520 กิโลเมตร</strong> ต่อการชาร์จเต็ม 100%</li>
            <li>รุ่น AWD Performance (เคลม 580 กม. NEDC): วิ่งจริงทำได้ประมาณ <strong>430 - 460 กิโลเมตร</strong> อัตราสิ้นเปลืองเฉลี่ย 16.8 - 18.2 kWh/100km</li>
          </ul>
          <p>
            <strong>ความเร็วในการชาร์จ (Charging Speed):</strong>
          </p>
          <ul>
            <li><strong>ชาร์จเร็ว DC Fast Charge:</strong> รองรับสูงสุด <strong>150 kW</strong> (รุ่น Premium/AWD) สามารถชาร์จจาก 30% ถึง 80% ได้ในเวลาประมาณ <strong>26 นาที</strong> ที่ตู้ชาร์จ PEA Volta หรือ EA Anywhere</li>
            <li><strong>ชาร์จปกติ AC Home Charger:</strong> รองรับ 7 kW Type 2 ใช้เวลาชาร์จ 0-100% ประมาณ 11-12 ชั่วโมง</li>
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
            8. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (ADAS)
          </h2>
          <p>
            BYD Seal จัดเต็มระบบความปลอดภัย <strong>DiPilot ADAS</strong> มาเป็นอุปกรณ์มาตรฐานในทุกรุ่นย่อย ประกอบด้วย:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Adaptive Cruise Control (ACC-S&amp;G)</div>
                <div className="text-xs text-slate-600 mt-0.5">ควบคุมความเร็วอัตโนมัติแบบแปรผันจนถึงจุดหยุดนิ่งและออกตัวตาม</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Lane Keep &amp; Emergency Lane Assist</div>
                <div className="text-xs text-slate-600 mt-0.5">ช่วยประคองรถให้อยู่ในช่องทางและดึงพวงมาลัยกลับฉุกเฉินเมื่อออกนอกเลน</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">3D 360° Camera &amp; Transparent Chassis</div>
                <div className="text-xs text-slate-600 mt-0.5">กล้องมองภาพรอบคันคมชัด พร้อมภาพจำลองใต้ท้องรถแบบโปร่งแสง</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">9 Airbags &amp; Euro NCAP 5 Stars</div>
                <div className="text-xs text-slate-600 mt-0.5">ถุงลมนิรภัย 9 จุดรอบคัน คว้ามาตรฐานความปลอดภัย 5 ดาวเต็มจากยุโรป</div>
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
                src="/images/reviews/byd-seal-hero.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น BYD Seal EVSELECT"
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
                อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ BYD Seal สเปกไทย
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ยกระดับการใช้งานด้วย <strong>ม่านบังแดดหลังคาแก้ว Panoramic Nano-Silver ตัดรังสี UV 99%</strong>, <strong>ชุดพรมปูพื้น TPE 3D ไร้กลิ่น ไร้รอยต่อ ตรงรุ่น RHD ขอบยกสูงกันน้ำ 100%</strong>, <strong>ฟิล์มกระจกนิรภัย 9H สำหรับจอกลางหมุน 15.6 นิ้ว</strong> และ <strong>ถาดจัดระเบียบคอนโซลกลาง</strong>
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม BYD Seal ทั้งหมด</span>
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
                <span><strong>พละกำลังมหาศาล:</strong> รุ่น AWD ทำ 0-100 ใน 3.8 วินาที แรงที่สุดในพิกัดราคาล้านต้น</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>แชสซี CTB สุดเหนียวแน่น:</strong> ทรงตัวยอดเยี่ยม เข้าโค้งนิ่งสนิท ทนแรงบิด 40,500 Nm/deg</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ออปชันล้นคัน:</strong> เบาะเป่าลมเย็น, เครื่องเสียง Dynaudio 12 ตัว, จอหมุน 15.6 นิ้ว</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ความปลอดภัย Blade Battery:</strong> แบตเตอรี่ LFP เสถียรสูง ชาร์จ 100% ได้สบายใจทุกวัน</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ช่วงล่าง FSD แปรผัน:</strong> ซับแรงสะเทือนหลุมและรอยต่อถนนในเมืองได้อย่างนุ่มนวล</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ความคุ้มค่าต่อราคา:</strong> ปรับราคาเริ่มต้นเหลือ 849,900 บาท คุ้มค่าที่สุดในคลาส D-Segment</span>
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
                <span><strong>ใต้ท้องเตี้ย 120 มม.:</strong> ต้องระวังครูดเมื่อขึ้นลูกระนาดสูงหรือทางลาดชันในไทย</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>หลังคาแก้วไม่มีม่านไฟฟ้า:</strong> จอดตากแดดเมืองไทยจะอมความร้อน จำเป็นต้องซื้อม่านเสริม</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ความเร็วชาร์จ DC สูงสุด 150 kW:</strong> ถือว่าเร็วแต่ยังไม่ถึงระดับ 250+ kW เหมือนค่ายคู่แข่ง</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ความสูงห้องโดยสารตอนหลัง:</strong> ท้ายลาดสไตล์คูเป้ทำให้คนสูงเกิน 180 ซม. รู้สึกหลังคาชิดหัว</span>
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
              สำหรับผู้ใช้งานทั่วไป <strong>BYD Seal Premium RWD (999,900 ฿)</strong> คือรุ่นที่สมดุลและคุ้มค่าที่สุด ส่วนผู้ที่ต้องการความแรงระดับไฮเปอร์คาร์ <strong>AWD Performance (1,099,900 ฿)</strong> มอบความเร้าใจที่หาตัวจับยาก
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
              <span className="text-3xl font-black text-lime-700">9.1</span>
              <span className="text-sm text-slate-500 font-medium"> / 10</span>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความสบายห้องโดยสารและเบาะนั่ง (Cabin Comfort &amp; Luxury)</span>
                <span className="text-lime-700 font-bold">9.0</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.0}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความสบายห้องโดยสารและเบาะนั่ง 9.0 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">สมรรถนะการขับขี่และอัตราเร่ง (Performance &amp; Dynamics)</span>
                <span className="text-lime-700 font-bold">9.6</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.6}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="สมรรถนะการขับขี่และอัตราเร่ง 9.6 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-slate-700">ความเงียบและการซับแรงสะเทือน (NVH &amp; Ride Refinement)</span>
                <span className="text-lime-700 font-bold">9.1</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.1}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความเงียบและการซับแรงสะเทือน 9.1 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '91%' }}></div>
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
                <span className="text-lime-700 font-bold">9.2</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={9.2}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความปลอดภัยและโครงสร้าง 9.2 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '92%' }}></div>
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
                คู่แข่งโดยตรง
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">EV Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Tesla Model 3 Highland สเปกไทย ปรับปรุงใหม่ นุ่ม เงียบ พรีเมียมขึ้นแค่ไหน?
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ทดสอบสมรรถนะและเปรียบเทียบจุดเด่นจุดด้อยกับ BYD Seal บนถนนเมืองไทย
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
                BYD Family
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
                Luxury EV
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">Flagship Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ท้าชน Toyota Alphard ด้วยช่วงล่างถุงลมอัจฉริยะและเบาะ Sofaro First Class
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
          <ShareButton title="รีวิว BYD Seal สเปกไทย 3 รุ่นย่อย (Dynamic / Premium / AWD Performance): สปอร์ตซีดานไฟฟ้า 530 แรงม้า | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
