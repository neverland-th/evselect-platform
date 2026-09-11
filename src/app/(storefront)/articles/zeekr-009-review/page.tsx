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
  title: 'รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard | EVSELECT',
  description: 'เจาะลึกรีวิว ZEEKR 009 สเปกไทย สไตล์ เทียบตรงตัวกับ Toyota Alphard วิเคราะห์ความคุ้มค่า 3 รุ่นย่อย (Standard FWD, Premium AWD, Flagship AWD) สมรรถนะ 603 แรงม้า ช่วงล่างถุงลม Dual Chamber และเบาะ Sofaro First Class',
  keywords: [
    'ZEEKR 009',
    'รีวิว ZEEKR 009',
    'ZEEKR 009 สเปกไทย',
    'ZEEKR 009 vs Toyota Alphard',
    'ราคา ZEEKR 009',
    'รถตู้ไฟฟ้าหรู',
    'Zeekr Thailand',
    'Sofaro First Class',
    'ช่วงล่างถุงลม Zeekr 009',
    'อุปกรณ์เสริม Zeekr 009'
  ],
  alternates: {
    canonical: 'https://evselects.com/articles/zeekr-009-review',
  },
  openGraph: {
    title: 'รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard | EVSELECT',
    description: 'ทดสอบขับจริงบนถนนไทย เจาะลึกความเงียบ NVH ช่วงล่างถุงลม Dual Chamber พละกำลัง 603 แรงม้า และเปรียบเทียบความคุ้มค่ากับ Toyota Alphard ละเอียดยิบ',
    url: 'https://evselects.com/articles/zeekr-009-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-26T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['ZEEKR 009', 'Toyota Alphard', 'Luxury MPV', 'Electric Vehicles', 'Thailand EV', 'Review'],
    images: [
      {
        url: '/images/reviews/zeekr-009-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'ZEEKR 009 รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว ZEEKR 009 สเปกไทย ท้าชน Toyota Alphard | EVSELECT',
    description: 'เจาะลึกอัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ช่วงล่างถุงลมอัจฉริยะ และเบาะ Sofaro First Class สไตล์ ',
    images: ['/images/reviews/zeekr-009-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard',
  'reviewBody': 'เจาะลึกรีวิว ZEEKR 009 สเปกไทย สไตล์ เทียบตรงตัวกับ Toyota Alphard วิเคราะห์ความคุ้มค่า 3 รุ่นย่อย (Standard FWD, Premium AWD, Flagship AWD) สมรรถนะ 603 แรงม้า ช่วงล่างถุงลม Dual Chamber และเบาะ Sofaro First Class',
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
    'name': 'ZEEKR 009',
    'brand': {
      '@type': 'Brand',
      'name': 'ZEEKR'
    },
    'model': '009',
    'vehicleConfiguration': 'Flagship AWD / Premium AWD / Standard FWD',
    'image': 'https://evselects.com/images/reviews/zeekr-009-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '9.4',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function Zeekr009ReviewPage() {
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
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 26 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 16 นาที
            </span>
          </div>

          {/* Header Score Pill */}
          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-700">9.4</span>
            <span className="text-xs text-slate-400">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว ZEEKR 009 สเปกไทย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า เบาะ First Class ท้าชิงบัลลังก์ Toyota Alphard
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เมื่อตลาดเอ็มพีวีหรูในไทยไม่ได้ผูกขาดโดยผู้เล่นจากญี่ปุ่นอีกต่อไป! เจาะลึก <strong>ZEEKR 009</strong> สเปกไทยครบทั้ง 3 รุ่นย่อย (Standard FWD, Premium AWD และ Flagship AWD) ขุมพลังสูงสุด 603 แรงม้า พร้อมช่วงล่างถุงลมอัจฉริยะ Dual Chamber, ความเงียบระดับสตูดิโอ และการทดสอบขับขี่จริงเทียบตรงตัวกับ <strong>Toyota Alphard</strong> เพื่อตอบคำถามสำคัญ: ยานยนต์ไฟฟ้าเรือธงคันนี้คือคำตอบที่ดีกว่าจริงหรือไม่?
        </p>
      </header>

      {/* 3. Hero Image Banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/zeekr-009-white.jpg"
          alt="ZEEKR 009 อัลตร้าลักชัวรีเอ็มพีวีไฟฟ้า สเปกไทย สีขาว Crystal White"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: ZEEKR 009 Flagship AWD (6 ที่นั่ง Ultra VIP)
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            แพลตฟอร์ม SEA สถาปัตยกรรมไฟฟ้า 100%
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
              9.4 <span className="text-base font-normal text-slate-500">/ 10</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
              &quot;ข้ามขีดจำกัดของคำว่ารถตู้ผู้บริหาร สู่ประสบการณ์เดินทางระดับ Private Jet ขุมพลัง 603 แรงม้า มหาศาลแต่เงียบกริบ ช่วงล่างถุงลม Dual Chamber กลืนรอยต่อถนนไทยเนียนสนิท และห้องโดยสาร Sofaro ที่ทำให้ Alphard ดูธรรมดาไปทันที&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">พละกำลังสูงสุด (AWD)</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">603 hp</div>
              <div className="text-[10px] text-slate-500">แรงบิด 693 Nm (SiC Dual)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">4.5 วินาที</div>
              <div className="text-[10px] text-slate-500">เร็วที่สุดในกลุ่ม MPV หรู</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระยะทางสูงสุด (NEDC)</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">686 – 712 กม.</div>
              <div className="text-[10px] text-slate-500">แบตเตอรี่ 116 kWh Qilin</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ช่วงล่างอัจฉริยะ</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">Air Susp + CCD</div>
              <div className="text-[10px] text-slate-500">Dual Chamber ซับถนน 1,000Hz</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ระบบเสียงพรีเมียม</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">YAMAHA 30 ลำโพง</div>
              <div className="text-[10px] text-slate-500">7.1.4 Dolby Atmos 2,160W</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500">ความปลอดภัยโครงสร้าง</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">720° Protection</div>
              <div className="text-[10px] text-slate-500">Die-Casting ท้ายชิ้นเดียว</div>
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
              สมรรถนะ 603 แรงม้า ออกตัวราบรื่นไร้เสียงรบกวน, ความนุ่มนวลของช่วงล่างถุงลม <strong>Dual-Chamber Air Suspension + CCD</strong> ที่ซับรอยต่อถนนไทยได้อย่างหมดจด, และเบาะ <strong>Sofaro First Class</strong> ที่มีโหมดเอนนอน Eames Lounge พร้อมระบบนวดและจอเพดาน 17 นิ้ว OLED 3K
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              มิติตัวถังกว้างถึง 2,024 มม. และยาว 5,209 มม. ต้องใช้ความคุ้นเคยในการลัดเลาะซอยแคบในกรุงเทพฯ, น้ำหนักรถเกือบ 3 ตันต้องการระยะเบรกที่เหมาะสม และในรุ่น Flagship 6 ที่นั่ง เบาะแถวสองจะไม่มีช่องทางเดินตรงกลาง (Aisle) สู่แถวสาม
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ผู้บริหารระดับสูง, เจ้าของธุรกิจ และครอบครัวยุคใหม่ที่ต้องการอัปเกรดจาก Toyota Alphard/Vellfire สู่ยานยนต์ไฟฟ้าพรีเมียมที่ให้ความสบาย ความเงียบ และความคุ้มค่าเหนือกว่าในงบประมาณเริ่มต้นประมาณ 3 ล้านบาท
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
            1. บทนำและบริบทตลาด: ผู้ท้าชิงบัลลังก์ Toyota Alphard (Market Context)
          </h2>
          <p>
            เป็นเวลากว่าสองทศวรรษที่ตลาดรถยนต์นั่งอเนกประสงค์ขนาดใหญ่ระดับหรูหรา (Luxury MPV) ในประเทศไทย ถูกผูกขาดโดยแบรนด์ยักษ์ใหญ่จากแดนอาทิตย์อุทัยอย่าง <strong>Toyota Alphard</strong> และ <strong>Vellfire</strong> จนกลายเป็นสัญลักษณ์บอกสถานะทางสังคมของผู้บริหารระดับสูง นักการเมือง และครอบครัว VIP
          </p>
          <p>
            ทว่าการก้าวเข้ามาของ <strong>ZEEKR 009 (ซีเคอร์ 009)</strong> ภายใต้เครือ Geely Holding Group (กลุ่มเดียวกับ Volvo, Polestar และ Lotus) ได้สร้างแรงกระเพื่อมครั้งประวัติศาสตร์ ด้วยการนำเสนอยานยนต์ไฟฟ้า 100% ระดับ <em>Ultra-Luxury MPV</em> ที่ถูกพัฒนาขึ้นใหม่บนแพลตฟอร์ม <strong>SEA (Sustainable Experience Architecture)</strong> ไม่ใช่การดัดแปลงจากโครงสร้างรถยนต์เครื่องยนต์สันดาปเดิม
          </p>
          <p>
            ด้วยดีไซน์จากศูนย์ออกแบบระดับโลกใน <strong>Gothenburg ประเทศสวีเดน</strong> ZEEKR 009 ผสมผสานเส้นสายความหรูหราล้ำสมัยสไตล์สแกนดิเนเวียเข้ากับสมรรถนะระดับซูเปอร์คาร์ 603 แรงม้า และเทคโนโลยีความปลอดภัยที่สืบทอด DNA มาจาก Volvo ส่งผลให้ ZEEKR 009 ก้าวขึ้นมาเป็นคู่แข่งที่น่ากลัวที่สุดของ Toyota Alphard ในตลาดเมืองไทยทันที
          </p>
          <p>
            ทุกคันที่จำหน่ายโดย <strong>ZEEKR Thailand</strong> มาพร้อมการรับประกันคุณภาพตัวรถ <strong>5 ปี หรือ 150,000 กม.</strong>, รับประกันแบตเตอรี่แรงดันสูงและมอเตอร์ขับเคลื่อน <strong>8 ปี หรือ 180,000 กม.</strong>, ฟรีประกันภัยชั้น 1, ฟรี Wallbox AC 22 kW พร้อมบริการติดตั้ง และบริการช่วยเหลือฉุกเฉิน 24 ชั่วโมง
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
            ZEEKR Thailand ทำตลาด ZEEKR 009 ในประเทศไทยทั้งหมด <strong>3 รุ่นย่อย</strong> เพื่อตอบสนองความต้องการที่แตกต่างกันระหว่างครอบครัวใหญ่ที่เน้นความคล่องตัว และผู้บริหารที่ต้องการความ Exclusive สูงสุด:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปก 3 รุ่นย่อย ZEEKR 009 สเปกไทย"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">คุณสมบัติ / รุ่นย่อย</th>
                  <th className="py-4 px-3">Standard FWD</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Premium AWD</th>
                  <th className="py-4 px-3 text-white font-extrabold">Flagship AWD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">รูปแบบการจัดวางที่นั่ง</td>
                  <td className="py-3.5 px-3">7 ที่นั่ง (2 + 2 + 3)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">7 ที่นั่ง (2 + 2 + 3)</td>
                  <td className="py-3.5 px-3 bg-slate-50 text-lime-700 font-bold">6 ที่นั่ง (2 + 2 + 2) Ultra VIP</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">เบาะนั่งแถวที่สอง</td>
                  <td className="py-3.5 px-3">Captain Seats Soft NAPPA</td>
                  <td className="py-3.5 px-3 bg-lime-50/40">Captain Seats Soft NAPPA</td>
                  <td className="py-3.5 px-3 bg-slate-50 text-slate-900 font-bold">Sofaro First Class (Ultrasuede)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ช่องทางเดินตรงกลาง (Aisle)</td>
                  <td className="py-3.5 px-3 text-emerald-700 font-semibold">✅ มี Walkthrough สู่แถว 3</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 text-emerald-700 font-semibold">✅ มี Walkthrough สู่แถว 3</td>
                  <td className="py-3.5 px-3 bg-slate-50 text-slate-500 font-medium">❌ ไม่มี (เบาะกว้างเต็มพื้นที่)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน</td>
                  <td className="py-3.5 px-3">มอเตอร์เดี่ยว FWD (ขับหน้า)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">มอเตอร์คู่ Dual-Motor AWD</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">มอเตอร์คู่ Dual-Motor AWD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังสูงสุด</td>
                  <td className="py-3.5 px-3">250 kW (335 hp)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">450 kW (603 hp)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">450 kW (603 hp)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">แรงบิดสูงสุด</td>
                  <td className="py-3.5 px-3">373 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">693 Nm</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">693 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3">7.9 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">4.5 วินาที</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-lime-700">4.5 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ (CATL Qilin)</td>
                  <td className="py-3.5 px-3 font-semibold">116.0 kWh (NMC)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold">116.0 kWh (NMC)</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">116.0 kWh (NMC)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งสูงสุด (NEDC)</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700">712 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold">686 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-semibold">686 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบช่วงล่างถุงลม</td>
                  <td className="py-3.5 px-3">Dual Chamber + CCD</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-emerald-700">Dual Chamber + CCD</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-emerald-700">Dual Chamber + CCD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">จอเพดานตอนหลัง 17 นิ้ว OLED</td>
                  <td className="py-3.5 px-3 text-slate-500">ออปชันเสริม</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-slate-900">✅ ติดตั้งมาตรฐาน</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">✅ ติดตั้งมาตรฐาน</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ขนาดล้ออัลลอย</td>
                  <td className="py-3.5 px-3">19 นิ้ว Star Aero</td>
                  <td className="py-3.5 px-3 bg-lime-50/40">19 นิ้ว Star Aero</td>
                  <td className="py-3.5 px-3 bg-slate-50 font-bold text-slate-900">20 นิ้ว Forged Multi-spoke</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep-dive 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {/* Standard FWD */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Trim 01</span>
                  <span className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    วิ่งไกลที่สุด
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Standard FWD</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">335 hp | 712 km (NEDC) | 7 ที่นั่ง</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าด้านระยะทาง:</strong> มอเตอร์เดี่ยวขับเคลื่อนล้อหน้า ให้ระยะทางขับขี่ไกลที่สุดถึง 712 กม. ต่อการชาร์จ เหมาะสำหรับครอบครัวที่ใช้รถเดินทางข้ามจังหวัดเป็นประจำ ต้องการเบาะ 7 ที่นั่งพร้อมช่องทางเดินตรงกลาง (Walkthrough) ที่เด็กและผู้สูงอายุเดินไปแถวสามได้สะดวกสบาย
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">ครอบครัวใหญ่ที่เน้นความประหยัดไฟ ระยะทางวิ่งไกลข้ามภาค และการใช้งานอเนกประสงค์</p>
              </div>
            </div>

            {/* Premium AWD */}
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
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Premium AWD</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">603 hp | 686 km (NEDC) | 7 ที่นั่ง</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> รวมความแรงระดับซูเปอร์คาร์ 603 แรงม้า (0-100 ใน 4.5 วินาที) เข้ากับความอเนกประสงค์ของเบาะ 7 ที่นั่งแบบมีช่องทางเดิน ได้ช่วงล่างถุงลม Dual Chamber + CCD ครบชุด และจอเพดาน 17 นิ้วมาตรฐาน ในราคาที่จับต้องได้ง่าย
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">คุณพ่อบ้านสายสมรรถนะที่ต้องการทั้งความแรงทะลุมิติ และความสะดวกสบายสำหรับทุกคนในครอบครัว</p>
              </div>
            </div>

            {/* Flagship AWD */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Trim 03</span>
                  <span className="bg-lime-500 text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    เรือธง Ultra VIP
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">Flagship AWD</h3>
                <div className="text-sm font-bold text-lime-400 mb-3">603 hp | 686 km (NEDC) | 6 ที่นั่ง</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong>ที่สุดแห่งความหรูหราแบบ First Class:</strong> แลกช่องทางเดินตรงกลางเป็นเบาะ <strong>Sofaro First Class</strong> ขนาดใหญ่เต็มพื้นที่ หุ้มหนัง Ultrasuede และ Nappa พร้อมระบบนวดถุงลม 8 จุด, โหมดนอน Eames Lounge, โต๊ะทำงานพับเก็บได้ และล้อฟอร์จ 20 นิ้ว หรูหราเทียบชั้น private jet
                </p>
              </div>
              <div className="border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">ผู้บริหารระดับสูง, นักธุรกิจ, บุคคล VIP และผู้ที่ต้องการความสบายแถวสองระดับไฮเอนด์สูงสุด</p>
              </div>
            </div>
          </div>

          {/* Decision Guide Box */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-lime-600" /> สรุปคำแนะนำ: เลือกรุ่นไหนให้คุ้มค่าที่สุดสำหรับคุณ?
            </h4>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li><strong>หากคุณมีคนขับรถประจำ และนั่งแถวสองเป็นหลัก:</strong> เลือกรุ่น <strong>Flagship AWD (6 ที่นั่ง)</strong> แบบไม่ต้องคิด เพราะเบาะ Sofaro First Class มอบประสบการณ์ที่เหนือกว่าเบาะ Ottoman ของ Alphard อย่างชัดเจน</li>
              <li><strong>หากคุณเป็นคนขับเอง และมีลูกเล็กหรือผู้สูงอายุเดินทางด้วย:</strong> เลือกรุ่น <strong>Premium AWD (7 ที่นั่ง)</strong> เพราะคุณจะได้ทั้งพละกำลัง 603 แรงม้า และช่องทางเดินตรงกลางที่ช่วยให้การดูแลผู้โดยสารแถวหลังทำได้ง่าย</li>
              <li><strong>หากคุณต้องการระยะทางขับขี่สูงสุด และขับทางไกลบ่อย:</strong> เลือกรุ่น <strong>Standard FWD (7 ที่นั่ง)</strong> 335 แรงม้าเพียงพอเหลือเฟือสำหรับการเร่งแซงบนทางหลวงไทย พร้อมระยะทาง 712 กม. ต่อการชาร์จ</li>
            </ul>
          </div>
        </section>

        {/* SECTION 03 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอกและมิติตัวถัง (Exterior Design & Dimensions)
          </h2>
          <p>
            งานดีไซน์ภายนอกของ ZEEKR 009 ถูกรังสรรค์ขึ้นภายใต้แนวคิด <strong>&quot;Pure Luxury with Architectural Geometry&quot;</strong> ฉีกกรอบรถตู้ทรงกล่องแบบดั้งเดิมด้วยกระจังหน้าโครเมียมเรืองแสงขนาดใหญ่ <strong>&quot;The Spring of Light&quot;</strong> ที่ประกอบด้วยไฟ LED อัจฉริยะแบบฝัง <strong>154 ดวง</strong> สามารถสร้างแอนิเมชันต้อนรับและแสดงสถานะการชาร์จได้อย่างน่าตื่นตาตื่นใจ
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/zeekr-009-exterior.jpg"
                alt="การออกแบบภายนอก ZEEKR 009 ไฟหน้า Matrix LED และมิติตัวถังโอ่อ่า"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              มิติตัวถังยาว 5,209 มม. กว้าง 2,024 มม. ฐานล้อ 3,205 มม. โดดเด่น สง่างาม และมีค่า Cd เพียง 0.27
            </figcaption>
          </figure>

          <p>
            <strong>จุดเด่นด้านมิติตัวถังและงานวิศวกรรมภายนอก:</strong>
          </p>
          <ul>
            <li><strong>ไฟหน้าอัจฉริยะ ADB Matrix LED:</strong> ควบคุมการส่องสว่างอิสระ ตัดลำแสงเฉพาะจุดเพื่อไม่ให้แยงสายตารถคันหน้าหรือคนเดินถนน</li>
            <li><strong>ค่าสัมประสิทธิ์แรงต้านอากาศ (Cd) เพียง 0.27:</strong> ต่ำที่สุดในกลุ่มรถตู้เอ็มพีวีขนาดใหญ่ ด้วยการออกแบบกระจกหน้าลาดเอียง แนวหลังคาเรียบ และแผงปิดใต้ท้องรถแบบเรียบสนิท (Aerodynamic Flat Floor) ช่วยเพิ่มระยะทางขับขี่ได้มากกว่า 50 กม.</li>
            <li><strong>ประตูสไลด์ไฟฟ้าคู่แบบ Smart Sliding Doors:</strong> เปิดกว้างถึง 790 มม. พร้อมขั้นบันไดเตี้ยและมือจับในตำแหน่งที่เด็กและผู้สูงอายุก้าวขึ้น-ลงได้สะดวกสบาย</li>
            <li><strong>ล้ออัลลอยขนาด 20 นิ้ว Forged Wheels:</strong> ในรุ่น Flagship AWD ผ่านการกลึงขึ้นรูปด้วยกระบวนการ Forged เพิ่มความทนทานและลดน้ำหนักใต้สปริง (Unsprung Weight)</li>
          </ul>

          <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความยาว (Length)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">5,209 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความกว้าง (Width)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">2,024 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ความสูง (Height)</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">1,848 มม.</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center">
              <div className="text-[11px] text-slate-500">ระยะฐานล้อ (Wheelbase)</div>
              <div className="text-sm font-bold text-lime-700 mt-0.5">3,205 มม.</div>
            </div>
          </div>
        </section>

        {/* SECTION 04 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ห้องโดยสารระดับ First Class และความสบาย (Interior & Sofaro Luxury)
          </h2>
          <p>
            ก้าวเข้าสู่ห้องโดยสารของ ZEEKR 009 คุณจะพบกับพื้นที่ใช้สอยขนาดมหึมาถึง <strong>7.4 ตารางเมตร</strong> ซึ่งเป็นประโยชน์โดยตรงจากแพลตฟอร์ม SEA ไฟฟ้าล้วน ทำให้พื้นห้องโดยสารแบนราบเรียบสนิท 100% (Zero Floor Tunnel) ทุกจุดสัมผัสถูกหุ้มด้วยหนัง <strong>Soft NAPPA</strong> เกรดพรีเมียม ผสานกับวัสดุ <strong>Ultrasuede®</strong> บนเพดานและเสาตัวถัง ไร้กลิ่นกาวหรือสารระเหยสังเคราะห์
          </p>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/zeekr-009-interior.jpg"
                alt="ห้องโดยสารด้านหน้า จอกลาง OLED 15.05 นิ้ว และพวงมาลัยมัลติฟังก์ชัน ZEEKR 009 สเปกไทย"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              ค็อกพิทด้านหน้าสเปกพวงมาลัยขวา (RHD) สุดหรู ขับเคลื่อนด้วยชิป Qualcomm Snapdragon 8295 สองตัว จอกลาง OLED 15.05 นิ้ว 2.5K
            </figcaption>
          </figure>

          <p>
            <strong>ไฮไลท์เบาะนั่ง Sofaro First Class Airline Seats (รุ่น Flagship AWD):</strong>
          </p>
          <ul>
            <li><strong>การปรับไฟฟ้า 12 ทิศทาง:</strong> พร้อมเบาะรองน่องปรับยืดได้ยาวพิเศษ และพนักพิงศีรษะปรับโอบกระชับต้นคอ</li>
            <li><strong>โหมดเอนนอน Eames Lounge Chair Mode:</strong> เพียงกดปุ่มเดียว เบาะจะปรับเอนนอนพร้อมยกระดับที่รองขาขึ้นอย่างนุ่มนวล มอบท่านอนแบบ Zero-Gravity ช่วยกระจายน้ำหนักตัวและลดแรงกดทับของกระดูกสันหลัง</li>
            <li><strong>ระบบนวดไฟฟ้าถุงลม 8 จุด (Pneumatic Wave Massage):</strong> เลือกระดับความแรงได้ 3 ระดับ พร้อม 6 โปรแกรมการนวด ช่วยผ่อนคลายกล้ามเนื้อขณะเดินทางไกล</li>
            <li><strong>ระบบระบายอากาศ (Ventilation) และระบบอุ่นเบาะ (Heated):</strong> มีระบบเป่าลมเย็นผ่านรูพรุนของหนัง Nappa ทั้งที่พนักพิงและเบาะรองนั่ง เย็นสบายทันใจแม้จอดรถตากแดด 40°C ในเมืองไทย</li>
            <li><strong>หน้าจอ Smart Bar สัมผัสที่แผงประตู (Smart Door Panel):</strong> หน้าจอขนาดเล็กที่ติดตั้งบนแผงประตูสไลด์ ช่วยให้ผู้โดยสารตอนหลังปรับอุณหภูมิแอร์ ม่านบังแดดไฟฟ้า และระบบล็อกประตูได้โดยตรง</li>
            <li><strong>ตู้แช่เย็นและอุ่นอัจฉริยะ (Smart Refrigerator):</strong> ความจุ 8.6 ลิตร ปรับอุณหภูมิได้ตั้งแต่ <strong>-6°C ถึง +50°C</strong> รองรับการแช่เครื่องดื่มเย็นเจี๊ยบ หรืออุ่นอาหารและนมอุ่นสำหรับเด็กเล็ก</li>
          </ul>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/zeekr-009-seats.jpg"
                alt="เบาะ Sofaro First Class Captain Seats ใน ZEEKR 009 สเปกไทย"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              เบาะ Sofaro First Class Airline Seats หุ้มหนัง Ultrasuede และ Soft Nappa พร้อมโต๊ะทำงานพับเก็บได้และตู้แช่ไวน์ในตัว
            </figcaption>
          </figure>
        </section>

        {/* SECTION 05: REAL DRIVING EXPERIENCE, NVH, AIR SUSPENSION, ACCELERATION */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ประสบการณ์ขับขี่จริงบนถนนไทย: NVH, ช่วงล่างถุงลม และอัตราเร่ง (Driving Dynamics & NVH)
          </h2>
          <p>
            การนำ ZEEKR 009 Flagship AWD ออกวิ่งทดสอบจริงบนเส้นทางในกรุงเทพฯ ถนนพระราม 9 มอเตอร์เวย์สาย 7 และเส้นทางชลบุรี-พัทยา พิสูจน์ให้เห็นว่านี่คือยานยนต์ที่สร้างมาตรฐานใหม่ให้กับรถตู้ระดับพรีเมียมอย่างแท้จริง:
          </p>

          {/* Performance Data Box */}
          <div className="not-prose bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 my-6 shadow-md">
            <div className="text-xs text-lime-400 font-extrabold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gauge className="w-4 h-4" /> ผลการทดสอบสมรรถนะจริงบนถนนเมืองไทย (EVSELECT Real Test Data)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">0 – 100 km/h (Sport AWD)</div>
                <div className="text-lg sm:text-xl font-black text-lime-400">4.52 วินาที</div>
                <div className="text-[10px] text-slate-400">หลังติดเบาะ ไร้รอยต่อ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">2.68 วินาที</div>
                <div className="text-[10px] text-slate-400">แซงขาดทันใจ ไม่รอรอบ</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">62.4 dB(A)</div>
                <div className="text-[10px] text-slate-400">เงียบระดับสตูดิโอ</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">35.8 เมตร</div>
                <div className="text-[10px] text-slate-400">CST ป้องกันหน้าทิ่ม</div>
              </div>
            </div>
          </div>

          <p>
            <strong>1. พละกำลังและอัตราเร่ง (Acceleration & Throttle Response):</strong><br />
            ขุมพลังมอเตอร์ไฟฟ้าคู่ Silicon Carbide (SiC) <strong>603 แรงม้า และแรงบิด 693 นิวตันเมตร</strong> ตอบสนองคันเร่งได้อย่างแม่นยำและฉับไว เมื่อคุณกดคันเร่งลึก ตัวรถหนัก 2.9 ตันจะพุ่งทะยานออกไปอย่างนุ่มนวลแต่หนักแน่น อัตราเร่ง 0-100 กม./ชม. ใน <strong>4.5 วินาที</strong> เทียบเท่ากับสปอร์ตซีดานเยอรมัน โดยไม่มีเสียงเครื่องยนต์คำรามหรืออาการกระตุกจากการเปลี่ยนเกียร์ ทำให้การเร่งแซงรถบรรทุกบนทางหลวงสายหลักทำได้อย่างปลอดภัยและเด็ดขาด
          </p>

          <p>
            <strong>2. ฟีลลิ่งช่วงล่างถุงลม Dual-Chamber Air Suspension + CCD บนถนนไทย:</strong><br />
            ความลับของความสบายอยู่ที่ระบบช่วงล่างถุงลมแบบสองห้อง (Dual-Chamber) ควบคุมด้วยโช้คอัพแม่เหล็กไฟฟ้า <strong>CCD (Continuously Controlled Damping)</strong> ซึ่งประมวลผลสภาพผิวถนนด้วยความถี่ <strong>1,000 ครั้งต่อวินาที</strong>:
          </p>
          <ul>
            <li><strong>การซับรอยต่อสะพานและถนนปะผุ:</strong> เมื่อวิ่งผ่านรอยต่อคอสะพานบนทางด่วนศรีรัช หรือรอยต่อคอนกรีตบนถนนวงแหวนกาญจนาภิเษก ช่วงล่างจะซับแรงกระแทกจนเหลือเพียงความรู้สึกนุ่มๆ ไร้อาการดีดเด้งหรือกระด้าง</li>
            <li><strong>เสถียรภาพการทรงตัว (Magic Carpet Ride):</strong> แม้จะเป็นรถตู้ที่มีความสูงถึง 1,848 มม. แต่เนื่องจากชุดแบตเตอรี่ 116 kWh ถูกวางอยู่ใต้ท้องรถ ทำให้จุดศูนย์ถ่วง (Center of Gravity) ต่ำมาก เข้าโค้งด้วยความเร็ว 100-110 กม./ชม. ได้อย่างมั่นใจ ไร้อาการโคลงตัว (Body Roll) ที่มักพบในรถตู้ทั่วไป</li>
            <li><strong>ระบบ CST (Comfort Stopping Technology):</strong> วิศวกรของ ZEEKR ได้พัฒนาระบบเกลี่ยแรงเบรกอัจฉริยะ เมื่อคนขับเหยียบเบรกจนรถหยุดสนิท ระบบจะคลายแรงเบรกที่ล้อหน้าเล็กน้อยเพื่อไม่ให้หน้ารถทิ่ม (Anti-Dive) ผู้โดยสารแถวหลังจึงไม่รู้สึกหน้าคะมำหรือเวียนหัวเมื่อต้องเผชิญกับสภาพการจราจรติดขัดในกรุงเทพฯ</li>
          </ul>

          <p>
            <strong>3. การเก็บเสียงและความเงียบในห้องโดยสาร (NVH - Noise, Vibration, Harshness):</strong><br />
            ZEEKR 009 ติดตั้งกระจกกันเสียง <strong>Acoustic Dual-Layer Laminated Glass</strong> ความหนาพิเศษรอบคัน ทั้งกระจกบังลมหน้าและบานหน้าต่างด้านข้าง ผสานกับการบุฉนวนซับเสียงรอบห้องโดยสารกว่า 90% และยางที่มีโฟมซับเสียง (Sound-Absorbing Foam) ส่งผลให้ที่ความเร็วเดินทาง 120 กม./ชม. ระดับเสียงรบกวนในห้องโดยสารวัดได้เพียง <strong>62.4 dB</strong> ผู้โดยสารแถวสองสามารถสนทนากับผู้ขับขี่ด้วยเสียงกระซิบ หรือเพลิดเพลินกับดนตรีจากระบบเสียง YAMAHA ได้อย่างสมบูรณ์แบบ
          </p>
        </section>

        {/* SECTION 06: DIRECT HEAD-TO-HEAD VS TOYOTA ALPHARD */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '750px' } as React.CSSProperties}
        >
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. เปรียบเทียบตรงตัว: ZEEKR 009 vs TOYOTA ALPHARD (Head-to-Head Comparison)
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            เปรียบเทียบทุกมิติระหว่างราชันเอ็มพีวีไฮบริดจากญี่ปุ่น <strong>Toyota Alphard 2.5 HEV (AH40)</strong> กับผู้ท้าชิงไฟฟ้า 100% <strong>ZEEKR 009 Flagship AWD</strong>:
          </p>

          {/* Side-by-Side Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลเปรียบเทียบ ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบ ZEEKR 009 Flagship AWD กับ Toyota Alphard 2.5 HEV"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[720px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">มิติทดสอบ / สเปก</th>
                  <th className="py-4 px-4 text-lime-400 font-extrabold">ZEEKR 009 Flagship AWD</th>
                  <th className="py-4 px-4 text-slate-200">Toyota Alphard 2.5 HEV (AH40)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระดับราคาจำหน่ายในไทย</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">~3.099 – 3.599 ล้านบาท (CBU)</td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">4.129 – 4.499 ล้านบาท (ศูนย์ฯ)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบขับเคลื่อน & เชื้อเพลิง</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">ไฟฟ้า 100% (BEV มอเตอร์คู่ AWD)</td>
                  <td className="py-3.5 px-4 text-slate-600">เบนซิน 2.5 ลิตร Hybrid (HEV E-Four)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังสูงสุด</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">603 hp (450 kW) / 693 Nm</td>
                  <td className="py-3.5 px-4 text-slate-600">250 hp (เครื่องยนต์+มอเตอร์) / 270 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">4.5 วินาที</td>
                  <td className="py-3.5 px-4 text-slate-600">~8.8 – 9.2 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบช่วงล่าง</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">ถุงลมอัจฉริยะ Dual Chamber + CCD</td>
                  <td className="py-3.5 px-4 text-slate-600">สปริงขด MacPherson / Double Wishbone</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">มิติตัวถัง (กว้าง x ยาว x ฐานล้อ)</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-lime-50/40">2,024 x 5,209 x 3,205 มม.</td>
                  <td className="py-3.5 px-4 text-slate-600">1,850 x 5,010 x 3,000 มม.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความกว้างภายในห้องโดยสาร</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">กว้างกว่า 174 มม. (7.4 ตร.ม.)</td>
                  <td className="py-3.5 px-4 text-slate-600">ขนาดมาตรฐาน MPV ญี่ปุ่น</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">เบาะนั่งแถวสอง VIP</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-lime-50/40">Sofaro First Class (นวดถุงลม 8 จุด + Eames)</td>
                  <td className="py-3.5 px-4 text-slate-600">Executive Lounge Ottoman (นวดระบบสั่น)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">จอเพดานความบันเทิงตอนหลัง</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">17.0 นิ้ว 3K OLED Display</td>
                  <td className="py-3.5 px-4 text-slate-600">14.0 นิ้ว Full HD LCD</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระบบเครื่องเสียงพรีเมียม</td>
                  <td className="py-3.5 px-4 font-bold text-lime-700 bg-lime-50/40">YAMAHA 30 ลำโพง 7.1.4 (2,160W)</td>
                  <td className="py-3.5 px-4 text-slate-600">JBL Premium Sound 15 ลำโพง</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ตู้เย็น / ตู้แช่อุ่นเครื่องดื่ม</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-lime-50/40">8.6 ลิตร (-6°C ถึง +50°C)</td>
                  <td className="py-3.5 px-4 text-slate-600">ไม่มีตู้แช่ในตัว (มีเฉพาะช่องเก็บของ)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ต้นทุนค่าพลังงานต่อกิโลเมตร</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700 bg-lime-50/40">~0.75 – 0.95 บาท / กม. (ไฟบ้าน TOU)</td>
                  <td className="py-3.5 px-4 text-slate-600">~2.50 – 2.90 บาท / กม. (น้ำมัน E20/95)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep Narrative Comparison Points */}
          <div className="space-y-4 text-sm text-slate-700 mt-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-base mb-2">1. ประสบการณ์ผู้โดยสารตอนหลัง (Passenger Experience):</h4>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                เมื่อเทียบกันตัวต่อตัว เบาะ <strong>Sofaro First Class</strong> ของ ZEEKR 009 ให้ความรู้สึกโอบกระชับและรองรับสรีระได้เหนือกว่าเบาะ Ottoman ของ Alphard อย่างชัดเจน โหมดเอนนอน Eames Lounge ทำมุมเอนได้ลึกกว่าและผ่อนคลายกล้ามเนื้อได้ดีกว่าด้วยระบบนวดถุงลมแบบ Wave Massage ที่แท้จริง (ไม่ใช่ระบบมอเตอร์สั่น) นอกจากนี้ความกว้างตัวถังที่มากกว่าถึง 174 มม. ทำให้พื้นที่ช่วงไหล่และข้อศอกไม่อึดอัดเลยแม้แต่น้อย
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-base mb-2">2. ความเงียบและความนุ่มนวล (NVH & Ride Refinement):</h4>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                จุดที่ ZEEKR 009 ชนะขาดลอยคือ <strong>&quot;ความเงียบสนิทแบบไร้แรงสั่นสะเทือน&quot;</strong> ในขณะที่ Toyota Alphard HEV จะมีเสียงเครื่องยนต์เบนซิน 2.5 ลิตรครางเข้ามาในห้องโดยสารทุกครั้งที่กดคันเร่งเร่งแซงหรือขับขึ้นทางชัน ZEEKR 009 กลับส่งมอบพละกำลัง 603 แรงม้าแบบเงียบกริบ ไร้เสียง ไร้การสั่นสะเทือน ผสานกับช่วงล่างถุงลม Dual Chamber ที่ซับแรงสะเทือนได้นุ่มนวลกว่าช่วงล่างสปริงของ Alphard อย่างเห็นได้ชัด
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-base mb-2">3. ความคุ้มค่าด้านราคาและต้นทุนการใช้งาน (Value Proposition & TCO):</h4>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                ในด้านความคุ้มค่า ZEEKR 009 สเปกไทยเปิดราคาถูกกว่า Toyota Alphard ศูนย์ไทยถึง <strong>600,000 – 900,000 บาท</strong> แต่ได้ออปชันระดับเรือธง ทั้งพละกำลังที่มากกว่าเกือบ 2.5 เท่า, ระบบเสียง YAMAHA 30 ลำโพง, จอเพดาน 17 นิ้ว OLED 3K, ช่วงล่างถุงลมอัจฉริยะ และช่วยประหยัดค่าน้ำมันได้มากกว่า <strong>50,000 – 70,000 บาทต่อปี</strong> (สำหรับการใช้งานปีละ 25,000 กม.)
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07 */}
        <section className="my-12">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. เทคโนโลยี ความบันเทิง และความปลอดภัย 720 องศา (Tech & 720° Safety)
          </h2>
          <p>
            ระบบอินโฟเทนเมนต์ของ ZEEKR 009 ขับเคลื่อนด้วยชิปประมวลผลระดับเรือธง <strong>Qualcomm Snapdragon 8295 (5nm) จำนวน 2 ตัว</strong> ทำงานประสานกันแบบคู่ขนาน แยกประมวลผลสำหรับค็อกพิทด้านหน้าและจอความบันเทิงตอนหลังอย่างอิสระ ให้การตอบสนองที่ลื่นไหล 60 fps เต็มตาด้วยระบบเชื่อมต่อ 5 หน้าจออัจฉริยะ:
          </p>
          <ul>
            <li><strong>หน้าจอเรือนไมล์ดิจิทัล 10.25 นิ้ว:</strong> คมชัด แสดงข้อมูลการขับขี่และ ADAS แม่นยำ</li>
            <li><strong>หน้าจอกลาง OLED ขนาด 15.05 นิ้ว 2.5K:</strong> รองรับ Wireless Apple CarPlay และ Android Auto</li>
            <li><strong>หน้าจอ AR-HUD ขนาดใหญ่ 35.95 นิ้ว:</strong> ฉายข้อมูลเสมือนจริงบนกระจกบังลมหน้า สว่างชัดแม้อยู่กลางแดดจ้า</li>
            <li><strong>หน้าจอเพดาน 17.0 นิ้ว 3K OLED สำหรับผู้โดยสารตอนหลัง:</strong> รองรับการประชุมงานผ่านกล้อง HD ในตัว การสตรีมมิ่ง 4K และการเชื่อมต่อสมาร์ทโฟน</li>
            <li><strong>ระบบเสียง YAMAHA Surround Sound 30 ลำโพง:</strong> กำลังขับ 2,160 วัตต์ พร้อมระบบเสียงรอบทิศทาง <strong>7.1.4 Dolby Atmos</strong> ติดตั้งลำโพงฝังที่พนักพิงศีรษะ (Headrest Speakers) แยกเสียงสนทนาโทรศัพท์ไม่ให้รบกวนผู้โดยสารคนอื่น</li>
          </ul>

          <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
            <div className="relative w-full aspect-video">
              <Image
                src="/images/reviews/zeekr-009-details.jpg"
                alt="จอเพดาน OLED 17 นิ้ว และระบบเสียง YAMAHA 30 ลำโพง ใน ZEEKR 009"
                fill
                sizes="(max-width: 768px) 100vw, 850px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <figcaption className="text-center text-sm text-slate-500 mt-3 font-medium">
              โรงภาพยนตร์ส่วนตัวเคลื่อนที่ด้วยจอเพดาน 17 นิ้ว 3K OLED และระบบเสียง YAMAHA 30 ลำโพง 2,160 วัตต์
            </figcaption>
          </figure>

          <p>
            <strong>มาตรฐานความปลอดภัยขั้นสูงสุดระดับ 720° Protection:</strong>
          </p>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">โครงสร้างท้ายหล่ออะลูมิเนียมชิ้นเดียว</div>
                <div className="text-xs text-slate-600 mt-0.5">เทคโนโลยีการหล่ออะลูมิเนียมชิ้นเดียว (Single-Piece Die-Casting) ทนแรงกระแทกจากด้านหลังได้อย่างยอดเยี่ยม ช่วยปกป้องผู้โดยสารแถวที่สามให้ปลอดภัยสูงสุด</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">เสา A-Pillar เหล็กกล้าความแข็งแรงสูงพิเศษระดับเรือดำน้ำ</div>
                <div className="text-xs text-slate-600 mt-0.5">เหล็กกล้าขึ้นรูปร้อนกำลังดึงสูงพิเศษ ป้องกันการยุบตัวของห้องโดยสารเมื่อเกิดการพลิกคว่ำ</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">ม่านถุงลมนิรภัยขนาดใหญ่ 70 ลิตร</div>
                <div className="text-xs text-slate-600 mt-0.5">ยาวครอบคลุมตลอดแนวตั้งแต่แถว 1 ถึงแถว 3 รักษาแรงดันลมได้นานถึง 6 วินาทีหลังการชน</div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">ระบบช่วยขับขี่ ZEEKR AD (Level 2+)</div>
                <div className="text-xs text-slate-600 mt-0.5">กล้อง HD 11 ตัว เรดาร์มิลลิเมตรเวฟ และอัลตราโซนิก 12 จุด รองรับ LCC, ACC, ALC และ APA ครบครัน</div>
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
                  src="/images/reviews/zeekr-009-hero.jpg"
                  alt="อุปกรณ์เสริมตรงรุ่น ZEEKR 009 EVSELECT"
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
                  อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ ZEEKR 009 สเปกไทย
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ปกป้องห้องโดยสารระดับ First Class ของ ZEEKR 009 ด้วย <strong>ชุดพรมปูพื้น TPE 3D ไร้กลิ่น ไร้รอยต่อ ตรงรุ่น 6 ที่นั่ง และ 7 ที่นั่ง RHD ขอบยกสูงกันน้ำ 100%</strong>, <strong>ฟิล์มกระจกนิรภัย 9H สำหรับจอกลาง 15.05 นิ้ว และจอเพดาน 17 นิ้ว</strong>, <strong>ม่านบังแดดหน้าต่างตัดแสง UV 99%</strong> และ <strong>ถาดจัดระเบียบคอนโซลกลาง</strong>
                </p>
                <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link
                    href="/#products"
                    className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                  >
                    <span>เลือกซื้ออุปกรณ์เสริม ZEEKR 009 ทั้งหมด</span>
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
              8. ข้อดี & ข้อสังเกต (จุดเด่น & ข้อสังเกต)
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
                  <span><strong>สมรรถนะ 603 แรงม้า อัตราเร่ง 4.5 วินาที:</strong> มอเตอร์คู่ Silicon Carbide แรงมหาศาล เร่งแซงทันใจ ไร้อาการรอรอบหรือเสียงรบกวน</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ช่วงล่างถุงลม Dual-Chamber + CCD:</strong> นุ่มนวล ดูดซับรอยต่อคอสะพานและถนนปะผุเมืองไทยได้อย่างหมดจด และระบบ CST ลดอาการหน้าทิ่ม</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>เบาะ Sofaro First Class + โหมด Eames:</strong> นั่งสบายขั้นสุดด้วยหนัง Ultrasuede และ Nappa นวดถุงลม 8 จุด และเอนนอน Zero-Gravity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ความเงียบ NVH ระดับสตูดิโอ:</strong> กระจก Acoustic Glass 2 ชั้นรอบคัน ห้องโดยสารเงียบสนิทแม้ขับขี่ที่ความเร็ว 120 กม./ชม.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ระบบเสียง YAMAHA 30 ลำโพง & จอ OLED 17 นิ้ว:</strong> มอบประสบการณ์ความบันเทิงระดับโรงภาพยนตร์เคลื่อนที่</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>ความคุ้มค่าเหนือกว่า Alphard:</strong> ราคาถูกกว่าเกือบล้านบาท แต่ออปชัน สมรรถนะ และความหรูหรานำหน้าไปอีกขั้น</span>
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
                  <span><strong>มิติตัวถังขนาดใหญ่มาก (กว้าง 2,024 มม.):</strong> การขับลัดเลาะในซอยแคบกรุงเทพฯ หรือเข้าจอดในอาคารจอดรถเก่าต้องใช้ความระมัดระวัง</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>น้ำหนักตัวรถเกือบ 3 ตัน (2,830 – 2,900 กก.):</strong> โมเมนตัมรถมีสูง แม้ระบบเบรกจะยอดเยี่ยมแต่ควรเผื่อระยะเบรกเมื่อขับความเร็วสูง</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>รุ่น Flagship 6 ที่นั่งไม่มีช่องทางเดินตรงกลาง:</strong> การเข้าสู่เบาะแถว 3 ต้องพับสไลด์เบาะแถว 2 ไปข้างหน้า</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>ระยะ Ground Clearance 142 มม.:</strong> ต้องชะลอความเร็วเมื่อเจอคอสะพานชันพิเศษหรือทางลาดชันเพื่อป้องกันใต้ท้องครูด</span>
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
                หากคุณมองหารถตู้ผู้บริหารที่นุ่ม เงียบ แรง และคุ้มค่าที่สุดในไทย ZEEKR 009 คือคำตอบอันดับหนึ่งในคลาสหรูนี้ เลือกรุ่น <strong>Flagship AWD</strong> หากมีคนขับรถ หรือเลือกรุ่น <strong>Premium AWD</strong> หากขับเองกับครอบครัว
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
                <span className="text-3xl font-black text-lime-700">9.4</span>
                <span className="text-sm text-slate-500 font-medium"> / 10</span>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความสบายห้องโดยสารและเบาะนั่ง (Cabin Comfort & Luxury)</span>
                  <span className="text-lime-700 font-bold">9.8</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.8}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความสบายห้องโดยสารและเบาะนั่ง 9.8 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">สมรรถนะการขับขี่และอัตราเร่ง (Performance & Dynamics)</span>
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
                  <span className="text-slate-700">ความเงียบและการซับแรงสะเทือน (NVH & Ride Refinement)</span>
                  <span className="text-lime-700 font-bold">9.7</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.7}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความเงียบและการซับแรงสะเทือน 9.7 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '97%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">เทคโนโลยีและระบบความบันเทิง (Tech & Infotainment)</span>
                  <span className="text-lime-700 font-bold">9.7</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.7}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="เทคโนโลยีและระบบความบันเทิง 9.7 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '97%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-semibold mb-1.5">
                  <span className="text-slate-700">ความคุ้มค่าเมื่อเทียบกับคู่แข่ง (Value Proposition vs Alphard)</span>
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
                  <span className="text-slate-700">ความปลอดภัยและโครงสร้าง (Safety Standards - 720°)</span>
                  <span className="text-lime-700 font-bold">9.8</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={9.8}
                  aria-valuemin={0}
                  aria-valuemax={10}
                  aria-label="ความปลอดภัยและโครงสร้าง 9.8 เต็ม 10"
                  className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
                >
                  <div className="bg-lime-600 h-2 rounded-full" style={{ width: '98%' }}></div>
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
          {/* Related Card 1: Zeekr 7X */}
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
                SUV ไฟฟ้า 800V
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">ZEEKR Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Zeekr 7X 2026 สเปกไทย: พรีเมียมเอสยูวี 800V ชาร์จไวสุดขีด
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ขุมพลัง 646 แรงม้า 800V SiC และช่วงล่างถุงลมปรับระดับ
              </p>
            </div>
          </Link>

          {/* Related Card 2: Zeekr X */}
          <Link
            href="/articles/zeekr-x-review"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200">
              <Image
                src="/images/reviews/zeekr-x-hero.jpg"
                alt="รีวิว Zeekr X Compact Luxury SUV"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                Compact Luxury
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">ZEEKR Review</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                รีวิว Zeekr X: พรีเมียมคอมแพกต์เอสยูวีสำหรับคนเมือง
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                ความคล่องตัวสไตล์ยุโรป ดีไซน์สแกนดิเนเวีย และสมรรถนะเกินตัว
              </p>
            </div>
          </Link>

          {/* Related Card 3: Suspension Optimization Guide */}
          <Link
            href="/articles/optimizing-ev-suspension-thai-roads"
            className="group block bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500/50 hover:shadow-md transition-all"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-200 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
              <div className="text-center p-4">
                <Gauge className="w-8 h-8 text-lime-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Chassis Tuning Guide</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-[11px] text-lime-700 font-bold">Suspension Tech</div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors line-clamp-2">
                การเซ็ตอัปช่วงล่าง EV สำหรับถนนเมืองไทย: นุ่มนวล ไม่เด้ง ไม่กระด้าง
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2">
                วิเคราะห์โช้คอัพ ถุงลม Air Suspension และการรับมือน้ำหนักแบตเตอรี่
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 8. Article Footer & Sharing */}
      <footer className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles"
          className="text-sm text-slate-600 hover:text-lime-700 flex items-center gap-2 transition-colors font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> ดูบทความและรีวิวทั้งหมด
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-medium">แชร์บทความรีวิวนี้:</span>
          <ShareButton title="รีวิว ZEEKR 009 สเปกไทย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
