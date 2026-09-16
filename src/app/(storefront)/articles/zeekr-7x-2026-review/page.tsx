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
  title: 'รีวิว Zeekr 7X 2026 สเปกไทย: พรีเมียมเอสยูวี 800V ชาร์จไวสุดขีด 420kW ออปชันหรูระดับเรือธง | EVSELECT',
  description: 'เจาะลึกรีวิว Zeekr 7X 2026 สเปกไทย เจาะลึกวิเคราะห์ความคุ้มค่า 3 รุ่นย่อย (Standard RWD, Long Range RWD, Performance AWD 646 แรงม้า) สถาปัตยกรรม 800V SiC ชาร์จ DC 420kW ชิป Snapdragon 8295 ช่วงล่างถุงลม และผลทดสอบจริงบนถนนเมืองไทย',
  keywords: [
    'Zeekr 7X',
    'รีวิว Zeekr 7X',
    'Zeekr 7X 2026',
    'Zeekr 7X สเปกไทย',
    'ราคา Zeekr 7X',
    'รถยนต์ไฟฟ้า Zeekr',
    'Zeekr Thailand',
    'รถ EV 800V',
    'อุปกรณ์เสริม Zeekr 7X',
    'พรมปูพื้น Zeekr 7X'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/zeekr-7x-2026-review',
  },
  openGraph: {
    title: 'รีวิว Zeekr 7X 2026 สเปกไทย: พรีเมียมเอสยูวี 800V ชาร์จไวสุดขีด 420kW | EVSELECT Reviews',
    description: 'ทดสอบสมรรถนะ Zeekr 7X สเปกไทย 646 แรงม้า สถาปัตยกรรม 800V SiC ชาร์จเร็วระดับเทพ ห้องโดยสารหรูหราสไตล์สแกนดิเนเวีย และอุปกรณ์เสริมตรงรุ่น',
    url: 'https://evselects.com/articles/zeekr-7x-2026-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-26T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['Zeekr 7X', 'Zeekr Thailand', 'Premium EV SUV', '800V Platform', 'Review'],
    images: [
      {
      url: '/images/editorial/zeekr-7x-cover.png',
        width: 1376,
        height: 768,
        alt: 'Zeekr 7X 2026 รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว Zeekr 7X 2026 สเปกไทย | EVSELECT',
    description: 'เจาะลึกพรีเมียมเอสยูวีไฟฟ้า 800V 646 แรงม้า ชิป Snapdragon 8295 และช่วงล่างถุงลม',
    images: ['/images/editorial/zeekr-7x-cover.png']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว Zeekr 7X 2026 สเปกไทย 3 รุ่นย่อย: พรีเมียมเอสยูวี 800V ชาร์จไวสุดขีด ออปชันหรูระดับเรือธง',
  'reviewBody': 'เจาะลึกรีวิว Zeekr 7X 2026 สเปกไทย เจาะลึกวิเคราะห์ความคุ้มค่า 3 รุ่นย่อย (Standard RWD, Long Range RWD, Performance AWD 646 แรงม้า) สถาปัตยกรรม 800V SiC ชาร์จ DC 420kW ชิป Snapdragon 8295 ช่วงล่างถุงลม และผลทดสอบจริงบนถนนเมืองไทย',
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
    'name': 'Zeekr 7X',
    'brand': {
      '@type': 'Brand',
      'name': 'ZEEKR'
    },
    'model': '7X (2026)',
    'vehicleConfiguration': 'Standard RWD / Long Range RWD / Performance AWD',
      'image': 'https://evselects.com/images/editorial/zeekr-7x-cover.png'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '9.2',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function Zeekr7XReviewPage() {
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
            <span className="text-base font-black text-lime-700">9.2</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Zeekr 7X 2026 สเปกไทย: พรีเมียมเอสยูวีไฟฟ้า 800V ชาร์จไวสุดขีด 420kW ออปชันหรูระดับเรือธง
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          สัมผัสตัวจริงของ <strong>Zeekr 7X (2026)</strong> พรีเมียมสมาร์ทเอสยูวีขนาดกลาง (D-Segment) นำเข้าอย่างเป็นทางการโดย ZEEKR Thailand พัฒนาบนแพลตฟอร์ม <strong>SEA (Sustainable Experience Architecture)</strong> พร้อมสถาปัตยกรรมระบบไฟ <strong>800V Silicon Carbide (SiC)</strong> เต็มระบบ พละกำลังสูงสุด 646 แรงม้า ชิปประมวลผล Snapdragon 8295 ช่วงล่างถุงลมอัจฉริยะ CCD และผลทดสอบจริงบนสภาพถนนเมืองไทย
        </p>
      </header>

      {/* 3. Hero Banner Image (LCP Priority) */}
      <div className="relative w-full rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-950 shadow-xl group">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/editorial/zeekr-7x-cover.png"
            alt="ภาพปกบทความรีวิว Zeekr 7X 2026"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        <div className="relative flex flex-wrap items-center justify-between gap-2 bg-slate-950 p-3 text-xs text-white md:absolute md:bottom-4 md:left-4 md:right-4 md:bg-transparent md:p-0">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: Zeekr 7X Performance AWD (100 kWh NMC)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            แพลตฟอร์ม SEA สถาปัตยกรรม 800V SiC
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
              9.2 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;มาตรฐานใหม่ของพรีเมียมเอสยูวีไฟฟ้า 800V ชาร์จไวทันใจสูงสุด 420 kW ช่วงล่างถุงลมซับถนนไทยเนียนกริบ ม่านหลังคาไฟฟ้ากันแดดไทยได้จริง และห้องโดยสารหรูหราคุ้มราคาทุกบาท&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ราคาเริ่มต้น</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">1,399,000 ฿</div>
              <div className="text-[10px] text-slate-500">3 รุ่นย่อย (RWD / AWD)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">422 – 646 PS</div>
              <div className="text-[10px] text-slate-500">แรงบิด 440 – 710 Nm</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">3.8 วินาที (AWD)</div>
              <div className="text-[10px] text-slate-500">6.0s ในรุ่น RWD</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">แบตเตอรี่ & สถาปัตยกรรม</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">75 / 100 kWh</div>
              <div className="text-[10px] text-slate-500">800V SiC Architecture</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางวิ่งสูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">566 – 730 กม.</div>
              <div className="text-[10px] text-slate-500">NEDC (วิ่งจริง 404-580 กม.)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ความเร็วชาร์จ DC / AC</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">420 kW / 22 kW</div>
              <div className="text-[10px] text-slate-500">10-80% ใน 10.5 – 16 นาที</div>
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
              สถาปัตยกรรม 800V ชาร์จ DC ไวสุด 420 kW และ <strong>On-Board Charger AC 22 kW ติดตั้งมาเป็นมาตรฐานทุกรุ่นย่อย</strong> พร้อมช่วงล่างถุงลมอัจฉริยะ CCD และจอ 16 นิ้ว 3.5K Mini LED ขับเคลื่อนด้วย Snapdragon 8295
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ตัวถังกว้าง 1,930 มม. และวงเลี้ยว 5.8 เมตร ต้องใช้ความระมัดระวังในซอยแคบ น้ำหนักรถ 2.3 – 2.5 ตัน และสถานีชาร์จ DC กำลังไฟเกิน 360 kW ในไทยยังมีเฉพาะหัวเมืองใหญ่
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ผู้บริหารและครอบครัวยุคใหม่ที่ต้องการรถเอสยูวีไฟฟ้าหรูหรา ออปชันจัดเต็มระดับเดียวกับ Porsche Macan EV หรือ BMW iX3 ในราคาเริ่มต้นเพียง 1.399 ล้านบาท
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
            <strong>Zeekr (ซีเคอร์)</strong> แบรนด์ยานยนต์ไฟฟ้าระดับพรีเมียมในเครือ Geely Holding Group (กลุ่มเดียวกับ Volvo, Polestar และ Lotus) ได้สร้างแรงกระเพื่อมครั้งใหญ่ในตลาดประเทศไทย หลังจากการเปิดตัวครอสโอเวอร์รุ่นเล็ก Zeekr X และเอ็มพีวีหรู Zeekr 009 ล่าสุดได้นำเข้า <strong>Zeekr 7X 2026</strong> เอสยูวีขนาดกลาง D-Segment ระดับเรือธงเข้ามาจำหน่ายในไทยอย่างเป็นทางการในรูปแบบ CBU
          </p>
          <p>
            Zeekr 7X ถูกวางตำแหน่งให้เป็น <em>&quot;The Ultimate Luxury Family EV SUV&quot;</em> ชนกับคู่แข่งระดับตำนานอย่าง <strong>Tesla Model Y</strong>, <strong>Changan Deepal S07</strong> และ <strong>Xpeng G6</strong> โดย Zeekr 7X ชูจุดเด่นที่เหนือกว่าด้วยแพลตฟอร์ม <strong>SEA (Sustainable Experience Architecture)</strong> ระบบไฟแรงดันสูง <strong>800V High-Voltage Silicon Carbide (SiC)</strong> เต็มรูปแบบ และแพ็กเกจบริการหลังการขายจัดเต็มสำหรับลูกค้าชาวไทย
          </p>
          <p>
            ทุกคันที่ส่งมอบในไทยมาพร้อมการรับประกันคุณภาพตัวรถ <strong>5 ปี หรือ 150,000 กม.</strong>, รับประกันแบตเตอรี่และมอเตอร์ขับเคลื่อน <strong>8 ปี หรือ 180,000 กม.</strong>, ฟรีประกันภัยชั้น 1, ฟรี Wallbox AC 22 kW พร้อมติดตั้ง และ Voucher พิเศษมูลค่า 20,000 บาท
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
            ZEEKR Thailand ทำตลาด Zeekr 7X ในประเทศไทยทั้งหมด <strong>3 รุ่นย่อย</strong> พร้อมขุมพลังมอเตอร์เดี่ยว RWD และมอเตอร์คู่ AWD เพื่อตอบโจทย์ตั้งแต่สายประหยัดงบ ไปจนถึงสายขับขี่สุดขั้ว:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคา 3 รุ่นย่อย Zeekr 7X 2026 สเปกไทย"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">คุณสมบัติ / รุ่นย่อย</th>
                  <th className="py-4 px-3">Standard RWD</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Long Range RWD (Sweet Spot)</th>
                  <th className="py-4 px-3 text-white font-extrabold">Performance AWD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาจำหน่ายอย่างเป็นทางการ</td>
                  <td className="py-3.5 px-3">1,399,000 ฿</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">1,599,000 ฿</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">1,799,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว RWD (SiC)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">มอเตอร์เดี่ยว RWD (SiC)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">มอเตอร์คู่ Dual-Motor AWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลัง / แรงบิด</td>
                  <td className="py-3.5 px-3">310 kW (415 hp) / 440 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">310 kW (415 hp) / 440 Nm</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">475 kW (637 hp) / 710 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">6.0 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">6.0 วินาที</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">3.8 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ & เคมี</td>
                  <td className="py-3.5 px-3 font-semibold">75.0 kWh Golden (LFP 5.5C)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">100.0 kWh Qilin (NMC 4C)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">100.0 kWh Qilin (NMC 4C)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งสูงสุด (NEDC)</td>
                  <td className="py-3.5 px-3">566 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">730 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">635 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">กำลังชาร์จ DC สูงสุด (10-80%)</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700">420 kW (10.5 นาที)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold">360 kW (15 นาที)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">360 kW (16 นาที)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบช่วงล่าง</td>
                  <td className="py-3.5 px-3">Double Wishbone / 5-Link</td>
                  <td className="py-3.5 px-3 bg-lime-50/40">Double Wishbone / 5-Link</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-emerald-700">Air Suspension + CCD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">แผงไฟหน้า Stargate 93 นิ้ว</td>
                  <td className="py-3.5 px-3 text-slate-400">ไม่มี</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 text-slate-400">ไม่มี</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">✅ ติดตั้งมาตรฐาน (1,854 LED)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep-dive 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {/* Standard RWD */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    ชาร์จไว 5.5C
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Standard RWD</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">1,399,000 ฿ | 415 hp | 566 km</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าระดับเริ่มต้น:</strong> สถาปัตยกรรม 800V เต็มระบบ แบตเตอรี่ Golden Battery 75 kWh ชาร์จ DC ไวสุดขีด 10.5 นาที ได้ On-Board AC 22 kW และม่านหลังคาไฟฟ้าครบครัน เหมาะกับผู้ที่ต้องการ EV คุณภาพยุโรปในงบประหยัด
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">การใช้งานในเมืองและชานเมือง เน้นชาร์จเร็วทุกวัน แบต LFP ทนทานชาร์จ 100% สบายใจ</p>
              </div>
            </div>

            {/* Long Range RWD */}
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
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Long Range RWD</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">1,599,000 ฿ | 415 hp | 730 km</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> อัปเกรดแบตเตอรี่ NMC 100 kWh วิ่งไกลที่สุดถึง 730 กม. (NEDC) ได้จอ AR-HUD 36.21 นิ้ว และระบบเสียง ZEEKR Sound 21 ลำโพง 2,160W ขับทางไกลข้ามจังหวัดโดยไม่ต้องกังวลเรื่องการชาร์จ
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">ครอบครัวสายท่องเที่ยวทางไกล ต้องการระยะทางสูงสุด ออปชันระดับพรีเมียมครบถ้วน</p>
              </div>
            </div>

            {/* Performance AWD */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trim 03</span>
                  <span className="bg-lime-500 text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    เรือธง 637 hp
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Performance AWD</h3>
                <div className="text-sm font-bold text-lime-400 mb-3">1,799,000 ฿ | 637 hp | 635 km</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>ที่สุดแห่งสมรรถนะ:</strong> มอเตอร์คู่ 637 แรงม้า อัตราเร่ง 0-100 ใน 3.8 วินาที พร้อมช่วงล่างถุงลมอัจฉริยะ Dual-Chamber Air Suspension + CCD, แผงไฟ Stargate Interactive LED 93 นิ้ว และประตูไฟฟ้าอัตโนมัติ 4 บาน
                </p>
              </div>
              <div className="border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">ผู้ที่ต้องการสมรรถนะเทียบเท่า Porsche Macan EV และฟังก์ชันลักชัวรีระดับท็อปคลาส</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก แผงไฟ Stargate และมิติตัวถัง (Exterior Design & Dimensions)
          </h2>
          <p>
            งานดีไซน์ภายนอกของ Zeekr 7X ใช้ภาษาการออกแบบ <strong>Hidden Energy</strong> ที่ให้ความรู้สึกล้ำสมัย เรียบหรู แต่แฝงความทรงพลัง ตัวถังทรง SUV แท้ ไม่ใช่ทรง Crossover ท้ายลาด ทำให้พื้นที่เหนือศีรษะของผู้โดยสารตอนหลังและพื้นที่ห้องเก็บสัมภาระมีความกว้างขวางเต็มพิกัด
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Car className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-medium text-slate-400">ภาพประกอบ: ดีไซน์ภายนอก Zeekr 7X</p>
                </div>
              </div>
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              มิติตัวถังยาว 4,787 มม. กว้าง 1,930 มม. ฐานล้อ 2,900 มม. พร้อมค่าสัมประสิทธิ์แรงต้านอากาศต่ำเพียง Cd 0.247
            </figcaption>
          </figure>

          <p>
            <strong>จุดเด่นด้านงานออกแบบและออปชันภายนอก:</strong>
          </p>
          <ul>
            <li><strong>แผงไฟอัจฉริยะ ZEEKR Stargate 93 นิ้ว (เฉพาะ Performance AWD):</strong> แผงหน้าจอ LED โค้งด้านหน้าบรรจุหลอด LED ถึง <strong>1,854 ดวง</strong> แสดงผลแอนิเมชันต้อนรับ แสดงสถานะการชาร์จ และฉายข้อความหรือลายกราฟิกแบบ Interactive ได้ 30 fps สว่างคมชัดแม้อยู่กลางแดด</li>
            <li><strong>ไฟหน้า Matrix LED อัจฉริยะ (ADB):</strong> พร้อมระบบปรับลำแสงอัตโนมัติ 18 โซน ป้องกันการแยงสายตารถคันหน้า</li>
            <li><strong>ไฟท้าย Through-Type LED Light Blade:</strong> แถบไฟท้ายเส้นบางเฉียบ Super Red ทอดยาวตลอดแนวตัวถังด้านหลัง</li>
            <li><strong>ประตูไฟฟ้าอัตโนมัติ 4 บาน (Automatic Doors):</strong> ในรุ่น Performance AWD มีระบบเปิด-ปิดด้วยไฟฟ้าเพียงสัมผัสปุ่ม พร้อมเรดาร์ตรวจจับสิ่งกีดขวางมิลลิเมตรเวฟ</li>
            <li><strong>หลังคาพาโนรามากลาสรูฟ 1.82 ตร.ม. พร้อมม่านบังแดดไฟฟ้า:</strong> จุดเด่นสำคัญที่เหนือกว่าคู่แข่งคือ มี <strong>ม่านบังแดดไฟฟ้าเปิด-ปิดได้ 100%</strong> ป้องกันความร้อน 83% และสะท้อน UV 99.9% เหมาะกับอากาศร้อน 40°C ของเมืองไทยอย่างแท้จริง</li>
          </ul>

          <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 my-6">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความยาว (Length)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">4,787 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความกว้าง (Width)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,930 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความสูง (Height)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,650 – 1,656 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ฐานล้อ (Wheelbase)</div>
              <div className="text-sm font-bold text-lime-700 mt-0.5">2,900 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center col-span-2 sm:col-span-1">
              <div className="text-[11px] text-slate-500">สัมประสิทธิ์แรงต้าน</div>
              <div className="text-sm font-bold text-lime-700 mt-0.5">Cd 0.247</div>
            </div>
          </div>
        </section>

        {/* SECTION 04 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ภายในห้องโดยสาร ความสบาย และความจุสัมภาระ (Interior Space & Practicality)
          </h2>
          <p>
            ห้องโดยสารของ Zeekr 7X สเปกไทย (พวงมาลัยขวา RHD) มอบสัมผัสระดับ Ultra-Luxury ที่เกินราคาจำหน่ายอย่างชัดเจน การเลือกใช้วัสดุบุนุ่มหนัง Nappa เกรดพรีเมียม ผ้า Microfiber Suede บุเพดาน และการตัดเย็บตะเข็บคู่ที่ละเอียดประณีต ทำให้รู้สึกเหมือนนั่งอยู่ในเอสยูวียุโรปราคา 3-4 ล้านบาท
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Car className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-medium text-slate-400">ภาพประกอบ: ภายในห้องโดยสาร Zeekr 7X</p>
                </div>
              </div>
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              ค็อกพิทพวงมาลัยขวา RHD หน้าจอกลาง 16 นิ้ว 3.5K Mini LED ขับเคลื่อนด้วยชิป Snapdragon 8295
            </figcaption>
          </figure>

          <p>
            <strong>ความสบายของเบาะนั่งระดับเฟิร์สคลาส:</strong>
          </p>
          <ul>
            <li><strong>เบาะคู่หน้าปรับไฟฟ้า 14 ทิศทาง:</strong> พร้อมระบบดันหลัง 4 ทิศทาง, ส่วนรองรับต้นขาปรับยืดได้, ระบบเป่าลมเย็น (Ventilation), ระบบอุ่นเบาะ (Heated) และ <strong>ระบบนวดไฟฟ้าแบบถุงลม 8 จุด (Pneumatic Wave Massage)</strong> ปรับได้ 6 รูปแบบ ช่วยผ่อนคลายขณะขับรถทางไกล</li>
            <li><strong>เบาะนั่งแถวหลังปรับเอนด้วยไฟฟ้า:</strong> ปรับองศาพนักพิงได้ตั้งแต่ 28° ถึง 37° พร้อมระบบอุ่นและระบายอากาศสำหรับเบาะหลัง และม่านบังแดดกระจกประตูหลังไฟฟ้า</li>
            <li><strong>หน้าจอควบคุมระบบสัมผัสที่ท้าวแขนตอนหลัง:</strong> ผู้โดยสารด้านหลังสามารถปรับแอร์ อุณหภูมิเบาะ และควบคุมมัลติมีเดียได้อิสระ</li>
          </ul>

          <p>
            <strong>พื้นที่จัดเก็บสัมภาระและความอเนกประสงค์:</strong>
          </p>
          <ul>
            <li><strong>ห้องเก็บสัมภาระด้านท้าย (Trunk):</strong> จุได้ถึง <strong>616 ลิตร</strong> เมื่อตั้งเบาะ และขยายได้ถึง <strong>1,978 ลิตร</strong> เมื่อพับเบาะหลังแบบ 60:40 ราบเรียบ พร้อมช่องเก็บของลึกใต้พื้นห้องสัมภาระ</li>
            <li><strong>ช่องเก็บสัมภาระด้านหน้า (Frunk):</strong> ความจุ <strong>66 ลิตร</strong> (ในรุ่น Standard &amp; Long Range RWD) และ <strong>42 ลิตร</strong> (ในรุ่น Performance AWD) สามารถใส่สายชาร์จฉุกเฉินหรือกระเป๋าเดินทางขนาด Cabin Size ได้พอดี</li>
            <li><strong>ช่องเก็บของในห้องโดยสาร 32 จุด:</strong> รวมถึงกล่องคอนโซลกลางขนาด 12.5 ลิตร พร้อมระบบทำความเย็นและอุ่น</li>
          </ul>
        </section>

        {/* SECTION 05 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ระบบอินโฟเทนเมนต์ หน้าจอ และระบบเสียง (Infotainment, Screens & Audio Tech)
          </h2>
          <p>
            ด้านเทคโนโลยีค็อกพิท Zeekr 7X ติดตั้งชิปประมวลผลเรือธง <strong>Qualcomm Snapdragon 8295 (สถาปัตยกรรม 5nm)</strong> ที่มีพลังคำนวณ AI NPU ถึง 30 TOPS ให้ความเร็วในการประมวลผลสูงกว่าชิป 8155 รุ่นเดิมถึง 8 เท่า การเปิดแอปรวดเร็ว หน้าจอทัชสกรีนตอบสนองลื่นไหล 60 fps ไม่มีอาการหน่วงหรือสะดุด
          </p>
          <ul>
            <li><strong>หน้าจอกลางขนาด 16.0 นิ้ว ความละเอียด 3.5K Mini LED:</strong> อัตราคอนทราสต์สูง มอบสีดำที่ดำสนิท เคลือบสารลดแสงสะท้อนและป้องกันรอยนิ้วมือ รองรับการแบ่งหน้าจอ Multitasking, Wireless Apple CarPlay และ Wireless Android Auto</li>
            <li><strong>หน้าจอเรือนไมล์ดิจิทัลขนาด 13.02 นิ้ว:</strong> ฝังแนบเนียนกับคอนโซลหน้า แสดงข้อมูลการขับขี่ แผนที่นำทาง และสถานะ ADAS คมชัด</li>
            <li><strong>หน้าจอ AR-HUD ขนาดใหญ่ 36.21 นิ้ว:</strong> แสดงกราฟิกระบบเสมือนจริงสะท้อนบนกระจกบังลมหน้า ความสว่าง 12,000 nits สู้แดดจ้าเมืองไทยได้สบาย (ติดตั้งเป็นมาตรฐานในรุ่น Long Range และ Performance)</li>
            <li><strong>ระบบเสียง ZEEKR Sound Pro 21 ลำโพง กำลังขับ 2,160 วัตต์:</strong> จัดวางระบบเสียงรอบทิศทาง <strong>7.1.4 Dolby Atmos</strong> พร้อมลำโพงฝังที่พนักพิงศีรษะ (Headrest Speakers) 4 ตำแหน่ง แยกเสียงนำทาง GPS และสายสนทนาโทรศัพท์ไม่ให้รบกวนผู้โดยสารคนอื่น</li>
            <li><strong>แท่นชาร์จไร้สายคู่ 50W Fast Charging:</strong> ติดตั้งพัดลมระบายอากาศในตัว ป้องกันสมาร์ทโฟนร้อนขณะชาร์จ</li>
          </ul>
        </section>

        {/* SECTION 06: REAL DRIVING PERFORMANCE & NVH */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. ขุมพลัง สมรรถนะ และการทดสอบขับขี่บนถนนไทย (Powertrain & Real Driving Performance)
          </h2>
          <p>
            หัวใจขับเคลื่อนของ Zeekr 7X ใช้มอเตอร์ไฟฟ้า Permanent Magnet Synchronous Motor (PMSM) เจเนอเรชันใหม่ที่ใช้สารกึ่งตัวนำ <strong>Silicon Carbide (SiC)</strong> ในชุดอินเวอร์เตอร์ ช่วยลดการสูญเสียพลังงานความร้อนและเร่งรอบได้สูงถึง 18,000 รอบ/นาที
          </p>

          {/* Performance Data Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (Performance AWD)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">3.82 วินาที</div>
                <div className="text-[10px] text-slate-400">6.04s ในรุ่น RWD</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">2.48 วินาที</div>
                <div className="text-[10px] text-slate-400">แซงขาดทันใจ ไม่รอรอบ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">63.1 dB(A)</div>
                <div className="text-[10px] text-slate-400">กระจก Acoustic 2 ชั้น</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">34.5 เมตร</div>
                <div className="text-[10px] text-slate-400">Akebono 4-Piston</div>
              </div>
            </div>
          </div>

          <p>
            ในการทดสอบขับขี่รุ่น <strong>Performance AWD (646 PS / 710 Nm)</strong> อัตราเร่ง 0-100 กม./ชม. ในเวลาเพียง <strong>3.8 วินาที</strong> เมื่อกดคันเร่งจมมิด ตัวรถจะพุ่งทะยานออกไปอย่างดุดัน หลังติดเบาะอย่างรุนแรงโดยไม่มีอาการท้ายปัดหรือล้อฟรี เนื่องจากระบบขับเคลื่อน 4 ล้อ AWD กระจายแรงบิดระหว่างล้อหน้าและล้อหลังด้วยความเร็วระดับมิลลิวินาที
          </p>
          <p>
            ระบบเบรกในรุ่น Performance AWD ใช้คาลิเปอร์ <strong>Akebono 4-Piston สีส้ม</strong> พร้อมจานเบรกระบายความร้อนขนาดใหญ่ สามารถหยุดรถจากความเร็ว 100-0 กม./ชม. ได้ในระยะเพียง <strong>34.5 เมตร</strong> แป้นเบรกให้น้ำหนักแน่น มั่นใจ และไม่พบอาการเบรกเฟดแม้จะผ่านการชะลอความเร็วหนักติดต่อกัน
          </p>
        </section>

        {/* SECTION 07 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. ช่วงล่างถุงลมอัจฉริยะ ความนุ่มนวล และการเก็บเสียง (Ride Quality, Suspension & NVH)
          </h2>
          <p>
            หนึ่งในจุดที่สร้างความประทับใจที่สุดให้กับทีมงานคือ <strong>&quot;ความประณีตของระบบช่วงล่างบนสภาพถนนเมืองไทย&quot;</strong>:
          </p>
          <ul>
            <li><strong>โครงสร้างช่วงล่างระดับสูง:</strong> ด้านหน้าแบบอิสระ Double Wishbone (ปีกนกคู่อะลูมิเนียมฟอร์จ) และด้านหลังแบบอิสระ 5-Link Multi-Link พร้อมบุชยางไฮดรอลิกซับแรงสั่นสะเทือน</li>
            <li><strong>ช่วงล่างถุงลมอัจฉริยะ Active Air Suspension + CCD (เฉพาะ Performance AWD):</strong> ถุงลมแบบ Closed Dual-Chamber ทำงานร่วมกับแดมเปอร์ปรับความหนืดไฟฟ้า Continuously Controlled Damping (CCD) สแกนสภาพถนน 1,000 ครั้ง/วินาที ปรับความสูงได้ 5 ระดับ (-25 มม. ถึง +45 มม.) ระยะ Ground Clearance ยืดหยุ่น 160 – 230 มม.</li>
            <li><strong>การซับแรงกระแทกคอสะพานและรอยต่อถนน:</strong> เมื่อขับผ่านคอสะพานมอเตอร์เวย์หรือถนนปะผุในกรุงเทพฯ ตัวรถซับแรงกระแทกได้นุ่มนวล ไร้อาการดีดเด้งหรือโยนตัว ผู้โดยสารตอนหลังนั่งสบาย ไม่เวียนหัว</li>
            <li><strong>การเก็บเสียงระดับ Acoustic Shield 360°:</strong> ติดตั้งกระจกกันเสียงสองชั้น Laminated Acoustic Glass ทั้ง 4 บานประตูและกระจกบานหน้า ผสานการบุฉนวนกันเสียงรอบคัน ทำให้เสียงลมปะทะที่ความเร็ว 120 กม./ชม. เงียบกริบจนได้ยินเพียงเสียงเพลงเบาๆ ในห้องโดยสาร</li>
          </ul>
        </section>

        {/* SECTION 08 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. สถาปัตยกรรม 800V แบตเตอรี่ และระบบชาร์จไวสุดขีด (800V Architecture & Charging)
          </h2>
          <p>
            Zeekr 7X ทุกรุ่นย่อยพัฒนาบนสถาปัตยกรรม <strong>800V High-Voltage Architecture</strong> ซึ่งนับเป็นจุดเปลี่ยนสำคัญของวงการ EV ในไทย:
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Car className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-medium text-slate-400">ภาพประกอบ: รายละเอียด Zeekr 7X</p>
                </div>
              </div>
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              สถาปัตยกรรม 800V SiC รองรับการชาร์จ DC สูงสุดถึง 420 kW ชาร์จ 10-80% ในเวลาเพียง 10.5 – 16 นาที
            </figcaption>
          </figure>

          <p>
            <strong>เทคโนโลยีแบตเตอรี่ 2 ทางเลือก:</strong>
          </p>
          <ol>
            <li><strong>75.0 kWh Golden Battery (LFP) ในรุ่น Standard RWD:</strong> แบตเตอรี่ลิเธียมไอออนฟอสเฟตพัฒนาขึ้นเองโดย Geely รองรับอัตราการชาร์จสูงถึง <strong>5.5C</strong> ทนทานต่อการชาร์จ 100% ทุกวัน ปลอดภัยสูงสุดผ่านการทดสอบแทงด้วยเข็มเหล็ก (Nail Penetration Test) ชาร์จ DC จาก 10% ถึง 80% ในเวลาเพียง <strong>10.5 – 13 นาที</strong></li>
            <li><strong>100.0 kWh CATL Qilin Battery (NMC) ในรุ่น Long Range &amp; Performance:</strong> เทคโนโลยี Cell-to-Pack 3.0 ความหนาแน่นพลังงานสูง 255 Wh/kg รองรับการชาร์จระดับ <strong>4C</strong> ชาร์จ DC จาก 10% ถึง 80% ในเวลาเพียง <strong>15 – 16 นาที</strong></li>
          </ol>

          <p>
            <strong>ผลทดสอบอัตราสิ้นเปลืองและระยะทางวิ่งจริง (Real-World Range in Thailand):</strong>
          </p>
          <ul>
            <li><strong>ทดสอบขับทางไกลความเร็วสูง:</strong> อัตราสิ้นเปลืองเฉลี่ย <strong>4.04 km/kWh</strong> (24.75 kWh/100 km) คำนวณระยะทางวิ่งจริงทางไกลแบบเร่งแซงหนักได้ประมาณ <strong>404 กิโลเมตร</strong> ต่อการชาร์จเต็ม 100%</li>
            <li><strong>การใช้งานในเมืองและชานเมืองผสมผสาน:</strong> วิ่งจริงได้ระยะทางประมาณ <strong>520 – 580 กิโลเมตร</strong> (จากสเปกเคลม NEDC 730 กม.)</li>
            <li><strong>On-Board Charger AC 22 kW Standard:</strong> ชาร์จไฟบ้าน 0-100% ผ่านตู้ Wallbox 3 เฟส 22 kW เต็มในเวลาเพียง <strong>4.0 – 5.5 ชั่วโมง</strong> (เร็วกว่ารถทั่วไปที่รองรับเพียง 7.4 kW ถึง 3 เท่า)</li>
            <li><strong>ระบบจ่ายไฟภายนอก V2L 3.3 kW:</strong> มีหัวแปลงจ่ายไฟ 220V เสียบใช้งานเครื่องใช้ไฟฟ้า แคมปิ้ง หรือชงกาแฟได้สะดวกสบาย</li>
          </ul>
        </section>

        {/* SECTION 09 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            9. ระบบช่วยเหลือการขับขี่และความปลอดภัย (Active Safety & ADAS - ZEEKR AD)
          </h2>
          <p>
            Zeekr 7X ติดตั้งระบบความปลอดภัยขั้นสูง <strong>ZEEKR AD (Level 2+)</strong> ขับเคลื่อนด้วยชิปประมวลผลคู่ <strong>Dual Mobileye EyeQ6H</strong> ผสานชุดเซ็นเซอร์รอบคันระดับไฮเอนด์:
          </p>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Full-Speed ACC &amp; LCC</div>
                <div className="text-xs text-slate-600 mt-0.5">ระบบควบคุมความเร็วอัตโนมัติแบบแปรผันพร้อม Stop &amp; Go และช่วยรักษาตำแหน่งกึ่งกลางเลนเนียนนุ่ม</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Automatic Lane Change (ALC)</div>
                <div className="text-xs text-slate-600 mt-0.5">ระบบเปลี่ยนเลนอัตโนมัติเพียงเปิดสัญญาณไฟเลี้ยว ตรวจจับช่องว่างรถด้านข้างอย่างแม่นยำ</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">กล้อง 3D 360° Transparent Chassis</div>
                <div className="text-xs text-slate-600 mt-0.5">มองเห็นมุมมองใต้ท้องรถและรอบทิศทางแบบเรียลไทม์ ป้องกันการขูดฟุตบาทหรือสิ่งกีดขวาง</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">ถุงลมนิรภัย 7 จุดรอบคัน (รวม Far-side)</div>
                <div className="text-xs text-slate-600 mt-0.5">พร้อมถุงลมนิรภัยคั่นกลางระหว่างเบาะหน้า ป้องกันศีรษะผู้โดยสารกระแทกกันเวลาชนด้านข้าง</div>
              </div>
            </div>
          </div>
          <p>
            โครงสร้างตัวถังนิรภัยใช้เหล็กกล้าความแข็งแรงสูงพิเศษระดับเรือดำน้ำ (Ultra-High Strength Steel) ผสานโครงสร้างชิ้นส่วนท้ายแบบหล่ออะลูมิเนียมชิ้นเดียว (Integrated Die-Casting Aluminum Subframe) ทำให้มีความแข็งแกร่งต้านการบิดตัวได้ในระดับเดียวกับซูเปอร์คาร์ และชุดแบตเตอรี่หุ้มเกราะกันกระแทกใต้ท้องรถผ่านมาตรฐานกันน้ำและฝุ่น <strong>IP68</strong>
          </p>
        </section>

        {/* SECTION 10: COMPETITOR COMPARISON */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            10. ตารางเปรียบเทียบกับคู่แข่งในไทย (Competitor Comparison)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เปรียบเทียบมิติข้อมูลเชิงเทคนิคและราคาจำหน่ายของ Zeekr 7X 2026 เทียบกับคู่แข่งในคลาส D-Segment EV SUV ในประเทศไทย:
          </p>

          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-6 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ Zeekr 7X กับคู่แข่ง Tesla Model Y, Deepal S07 และ Xpeng G6"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">มิติทดสอบ / สเปก</th>
                  <th className="py-4 px-3 text-lime-400 bg-slate-800 font-extrabold">Zeekr 7X 2026</th>
                  <th className="py-4 px-3">Tesla Model Y</th>
                  <th className="py-4 px-3">Changan Deepal S07</th>
                  <th className="py-4 px-3">Xpeng G6</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">ระดับราคา (THB)</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">1.39 – 1.79 ล้าน</td>
                  <td className="py-3.5 px-3 font-medium text-slate-800">1.74 – 2.32 ล้าน</td>
                  <td className="py-3.5 px-3 font-medium text-slate-800">1.09 – 1.39 ล้าน</td>
                  <td className="py-3.5 px-3 font-medium text-slate-800">1.43 – 1.59 ล้าน</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">สถาปัตยกรรมระบบไฟ</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">800V SiC เต็มระบบ</td>
                  <td className="py-3.5 px-3 text-slate-600">400V</td>
                  <td className="py-3.5 px-3 text-slate-600">400V</td>
                  <td className="py-3.5 px-3 text-slate-600">800V SEPA 2.0</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">พละกำลังสูงสุด (AWD)</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">646 PS / 710 Nm</td>
                  <td className="py-3.5 px-3 text-slate-600">450 PS (Long Range)</td>
                  <td className="py-3.5 px-3 text-slate-600">258 PS (RWD)</td>
                  <td className="py-3.5 px-3 text-slate-600">286 PS (RWD)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">3.8 วินาที</td>
                  <td className="py-3.5 px-3 text-slate-600">5.0 วินาที</td>
                  <td className="py-3.5 px-3 text-slate-600">6.7 วินาที</td>
                  <td className="py-3.5 px-3 text-slate-600">6.2 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">ความจุแบตเตอรี่สูงสุด</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">100.0 kWh (NMC)</td>
                  <td className="py-3.5 px-3 text-slate-600">78.1 kWh (NMC)</td>
                  <td className="py-3.5 px-3 text-slate-600">79.97 kWh (NMC)</td>
                  <td className="py-3.5 px-3 text-slate-600">87.5 kWh (NMC)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">ชาร์จ DC สูงสุด / เวลา</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">420 kW (10.5-16 นาที)</td>
                  <td className="py-3.5 px-3 text-slate-600">250 kW (27 นาที)</td>
                  <td className="py-3.5 px-3 text-slate-600">167 kW (25 นาที)</td>
                  <td className="py-3.5 px-3 text-slate-600">280 kW (20 นาที)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">On-Board AC Charger</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">22 kW (3-Phase)</td>
                  <td className="py-3.5 px-3 text-slate-600">11 kW (3-Phase)</td>
                  <td className="py-3.5 px-3 text-slate-600">7 kW (1-Phase)</td>
                  <td className="py-3.5 px-3 text-slate-600">11 kW (3-Phase)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">ชิปเซ็ตประมวลผล</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">Snapdragon 8295</td>
                  <td className="py-3.5 px-3 text-slate-600">AMD Ryzen</td>
                  <td className="py-3.5 px-3 text-slate-600">Snapdragon 8155</td>
                  <td className="py-3.5 px-3 text-slate-600">Snapdragon 8155</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">ระบบช่วงล่าง</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">ถุงลมปรับระดับ + CCD</td>
                  <td className="py-3.5 px-3 text-slate-600">สปริงขดมาตรฐาน</td>
                  <td className="py-3.5 px-3 text-slate-600">สปริงขด H-Arm</td>
                  <td className="py-3.5 px-3 text-slate-600">สปริงขดมาตรฐาน</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">ม่านหลังคาไฟฟ้า</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700 bg-lime-50/40">✅ มีม่านไฟฟ้าในตัว</td>
                  <td className="py-3.5 px-3 text-slate-600">❌ ไม่มี (ต้องซื้อเสริม)</td>
                  <td className="py-3.5 px-3 text-slate-600">✅ มีม่านไฟฟ้าในตัว</td>
                  <td className="py-3.5 px-3 text-slate-600">❌ ไม่มี (ต้องซื้อเสริม)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 11: EVSELECT VERIFIED ACCESSORIES */}
        <section className="my-16 not-prose">
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-lime-500/40 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
              <div className="relative w-full lg:w-1/3 h-56 rounded-2xl overflow-hidden border border-slate-700/80 shrink-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <Car className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-400">ภาพประกอบ: อุปกรณ์เสริม Zeekr 7X</p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-lime-500 text-black font-black text-xs px-2.5 py-1 rounded-md shadow-xs">
                ตรวจรุ่นรถก่อนเลือกอุปกรณ์
                </div>
              </div>

              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full text-xs font-semibold text-lime-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  EVSELECT Recommended Upgrades
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ Zeekr 7X 2026
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ปกป้องห้องโดยสารระดับพรีเมียมของ Zeekr 7X ด้วย <strong>ชุดพรมปูพื้น TPE 3D ไร้กลิ่น ไร้รอยต่อ ขอบยกสูงกันน้ำ 100% ตรงรุ่น RHD</strong>, <strong>ม่านบังแดดกระจกข้างและบานหน้าสะท้อน UV 99%</strong>, <strong>ฟิล์มกระจก 9H ป้องกันรอยสำหรับจอ 16 นิ้ว Mini LED</strong> และ <strong>ถาดจัดระเบียบคอนโซลกลาง 2 ชั้น</strong>
                </p>
                <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/#products"
                    className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                  >
                    <span>เลือกซื้ออุปกรณ์เสริม Zeekr 7X ทั้งหมด</span>
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

        {/* SECTION 12: PROS & CONS */}
        <section className="my-12 not-prose">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3">
              <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
              11. ข้อดี &amp; ข้อสังเกต (จุดเด่น &amp; ข้อสังเกต)
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
                  <span><strong>สถาปัตยกรรม 800V SiC &amp; DC 420 kW:</strong> ชาร์จ 10-80% ใน 10.5 – 16 นาที เร็วที่สุดรุ่นหนึ่งในประเทศไทย</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>AC On-Board Charger 22 kW Standard:</strong> รองรับชาร์จไฟบ้าน 3 เฟส 22 kW เต็มระบบทุกรุ่นย่อย</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>พละกำลัง 646 PS (AWD):</strong> อัตราเร่ง 0-100 ใน 3.8 วินาที แรงสั่งได้ดั่งใจ พร้อมเบรก Akebono 4 พ็อต</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ช่วงล่างถุงลมอัจฉริยะ + CCD:</strong> นุ่มนวล ดูดซับคอสะพานและรอยต่อถนนเมืองไทยได้อย่างยอดเยี่ยม</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>จอ 16 นิ้ว Mini LED + Snapdragon 8295:</strong> ระบบอินโฟเทนเมนต์ลื่นไหล พร้อมลำโพง ZEEKR Sound 21 ตัว</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>หลังคาแก้วพร้อมม่านไฟฟ้า &amp; เบาะนวด:</strong> ตอบโจทย์สภาพอากาศร้อนและการเดินทางในไทย 100%</span>
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
                  <span><strong>ขนาดตัวถังกว้าง 1,930 มม. และวงเลี้ยว 5.8 ม.:</strong> ต้องใช้ความคุ้นเคยในการลัดเลาะซอยแคบหรือถอยจอด</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>น้ำหนักตัวรถ 2,395 – 2,535 กก.:</strong> น้ำหนักค่อนข้างมากตามขนาดแบตเตอรี่และโครงสร้างนิรภัย</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>สถานีชาร์จ DC กำลังสูง 360-420 kW:</strong> ยังมีจำนวนจำกัดตามจุดหลัก ส่วนใหญ่เป็นตู้ 120-150 kW</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>ล้อ Forged 21 นิ้วในรุ่นท็อป:</strong> ยางแก้มเตี้ยให้ความรู้สึกตึงตังเล็กน้อยบนผิวทางคอนกรีตหยาบ</span>
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
                หากคุณกำลังมองหาพรีเมียมเอสยูวีไฟฟ้าระดับหรูที่คุ้มค่าและชาร์จเร็วที่สุดในไทย Zeekr 7X คือตัวเลือกอันดับหนึ่ง เลือกรุ่น <strong>Long Range RWD (1,599,000 ฿)</strong> เพื่อความคุ้มค่าลงตัว หรือ <strong>Performance AWD (1,799,000 ฿)</strong> สำหรับที่สุดแห่งสมรรถนะ
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

        {/* SECTION 13: SCORECARD BREAKDOWN */}
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
                <span className="text-3xl font-black text-lime-700">9.2</span>
                <span className="text-sm text-slate-500 font-medium"> / 10</span>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความสบายห้องโดยสารและเบาะนั่ง (Cabin Comfort &amp; Luxury)</span>
                  <span className="text-lime-700 font-bold">9.4</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.4}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความสบายห้องโดยสารและเบาะนั่ง 9.4 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '94%' }}></div>
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
                  <span className="text-lime-700 font-bold">9.3</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.3}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความปลอดภัยและโครงสร้าง 9.3 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '93%' }}></div>
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
            href="/articles/tesla-model-y-l-premium-6-seater-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/editorial/tesla-model-y-l-cover.png"
                alt="ภาพปกรีวิว Tesla Model Y L รุ่น 6 ที่นั่ง"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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
            href="/articles/zeekr-x-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/zeekr-x-hero.jpg"
                alt="รีวิว Zeekr X"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Compact Crossover
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">Compact Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Zeekr X (Flagship AWD): พรีเมียมคอมแพกต์ 489 แรงม้า ดีไซน์สแกนดิเนเวีย
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                แพลตฟอร์ม SEA ลำโพง Yamaha 13 ตัว และสมรรถนะ 0-100 ใน 3.7 วินาที
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
          <ShareButton title="รีวิว Zeekr 7X 2026 สเปกไทย: พรีเมียมเอสยูวี 800V ชาร์จไวสุดขีด 420kW ออปชันหรูระดับเรือธง | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
