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
  Eye,
  Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าไซเบอร์พังก์ ออปชันหรู ม่านบังแดดไฟฟ้าสู้แดดไทย | EVSELECT',
  description: 'เจาะลึกรีวิว Changan Deepal S07 สเปกไทย สไตล์ CarExpert วิเคราะห์ความคุ้มค่ารุ่น Standard และ Long Range มอเตอร์หลัง 258 แรงม้า ชาร์จ DC 167 kW ช่วงล่างนุ่มนวล และม่านบังแดดไฟฟ้าแท้จากโรงงาน',
  keywords: [
    'Changan Deepal S07',
    'รีวิว Deepal S07',
    'Deepal S07 สเปกไทย',
    'ราคา Deepal S07',
    'Deepal S07 Long Range',
    'รถยนต์ไฟฟ้า Changan',
    'EV SUV Thailand',
    'Sunflower Screen 15.6',
    'ม่านบังแดดไฟฟ้า Deepal S07',
    'อุปกรณ์เสริม Deepal S07'
  ],
  alternates: {
    canonical: 'https://evselect.com/articles/deepal-s07-review',
  },
  openGraph: {
    title: 'รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าไซเบอร์พังก์ ออปชันหรู ม่านบังแดดไฟฟ้าสู้แดดไทย | EVSELECT',
    description: 'ทดสอบขับขี่จริงบนถนนเมืองไทย เจาะลึกความเงียบ NVH ความเร็วชาร์จ DC 167 kW มอเตอร์หลัง 258 แรงม้า และความคุ้มค่าของม่านบังแดดไฟฟ้าแท้จากโรงงาน',
    url: 'https://evselect.com/articles/deepal-s07-review',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: '2026-08-25T08:00:00.000Z',
    modifiedTime: '2026-08-29T07:00:00.000Z',
    authors: ['EVSELECT Editorial Team'],
    section: 'Reviews',
    tags: ['Changan Deepal S07', 'Deepal S07', 'Smart SUV', 'Electric Vehicles', 'Thailand EV', 'Review'],
    images: [
      {
        url: '/images/reviews/deepal-s07-hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Changan Deepal S07 รีวิว สเปกไทย'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'รีวิว Changan Deepal S07 สเปกไทย | EVSELECT',
    description: 'เจาะลึกเอสยูวีไฟฟ้าดีไซน์ล้ำ มอเตอร์หลัง 258 แรงม้า จอ Sunflower 15.6 นิ้ว และม่านบังแดดไฟฟ้าแท้ สไตล์ CarExpert',
    images: ['/images/reviews/deepal-s07-hero.jpg']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  'name': 'รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าไซเบอร์พังก์ ออปชันหรู ม่านบังแดดไฟฟ้าสู้แดดไทย',
  'reviewBody': 'เจาะลึกรีวิว Changan Deepal S07 สเปกไทย สไตล์ CarExpert วิเคราะห์ความคุ้มค่ารุ่น Standard และ Long Range มอเตอร์หลัง 258 แรงม้า ชาร์จ DC 167 kW ช่วงล่างนุ่มนวล และม่านบังแดดไฟฟ้าแท้จากโรงงาน',
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
    'name': 'Changan Deepal S07',
    'brand': {
      '@type': 'Brand',
      'name': 'Changan'
    },
    'model': 'Deepal S07',
    'vehicleConfiguration': 'Standard BEV / Long Range BEV',
    'image': 'https://evselect.com/images/reviews/deepal-s07-hero.jpg'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '8.8',
    'bestRating': '10',
    'worstRating': '1'
  }
};

export default function DeepalS07ReviewPage() {
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
              D-Segment Smart SUV
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
          รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าไซเบอร์พังก์ ออปชันหรู ม่านบังแดดไฟฟ้าสู้แดดไทย วิ่งจริงไกลแค่ไหน?
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เจาะลึกทุกรายละเอียดของ <strong>Changan Deepal S07</strong> เอสยูวีขุมพลังไฟฟ้า 100% สไตล์ล้ำยุค ทั้งสมรรถนะมอเตอร์หลัง 258 แรงม้า แบตเตอรี่ 66.8 – 79.97 kWh ความเร็วชาร์จ DC สูงสุด 167 kW และการทดสอบช่วงล่าง การเก็บเสียง NVH รวมถึงม่านบังแดดไฟฟ้าแท้ที่ตอบโจทย์สภาพอากาศเมืองไทยอย่างสมบูรณ์แบบ
        </p>
      </header>

      {/* 3. Hero Image Banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl group">
        <Image
          src="/images/reviews/deepal-s07-hero.jpg"
          alt="Changan Deepal S07 รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            รุ่นที่ทดสอบ: Deepal S07 Standard BEV / Long Range
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            แพลตฟอร์ม EPA1 RWD สถาปัตยกรรมไฟฟ้า 100%
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
              &quot;เอสยูวีไฟฟ้ารูปลักษณ์ไซเบอร์พังก์ที่เข้าใจคนไทยที่สุด ด้วยม่านบังแดดไฟฟ้าแท้จากโรงงาน พื้นที่ Frunk หน้า 125 ลิตร และความเร็วชาร์จ DC 167 kW ที่รวดเร็วทันใจ&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ราคาจำหน่าย</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">1,099,000 ฿</div>
              <div className="text-[10px] text-slate-500">เริ่มต้นรุ่น Standard BEV</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">พละกำลังสูงสุด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">258 hp</div>
              <div className="text-[10px] text-slate-500">แรงบิด 320 Nm (RWD)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">อัตราเร่ง 0-100 km/h</div>
              <div className="text-base font-bold text-lime-700 mt-0.5">6.7 วินาที</div>
              <div className="text-[10px] text-slate-500">โหมด Sport ตอบสนองไว</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ระยะทางสูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">560 กม.</div>
              <div className="text-[10px] text-slate-500">NEDC (แบต 79.97 kWh)</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ชาร์จเร็ว DC สูงสุด</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">167 kW</div>
              <div className="text-[10px] text-slate-500">30-80% ใน ~18 นาที</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-[11px] text-slate-500 font-medium">ความจุ Frunk หน้า</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">125 ลิตร</div>
              <div className="text-[10px] text-slate-500">ใหญ่ที่สุดรุ่นหนึ่งในคลาส</div>
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
              ดีไซน์ Fastback ไซเบอร์พังก์เฉียบคม ประตูไร้กรอบ Frameless ทั้ง 4 บาน หลังคากระจกพาโนรามาพร้อม <strong>ม่านบังแดดไฟฟ้าเปิด-ปิดได้จริง</strong> ทนแดดเมืองไทย 40 องศาได้สบาย และหน้าจอ Sunflower 15.6 นิ้ว ปรับเอียงได้อัตโนมัติ
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0" /> ข้อพิจารณาก่อนตัดสินใจ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ช่วงล่างเซ็ตติ้งเน้นความนุ่มนวลแบบครอบครัว มีจังหวะโยนตัวเบาๆ เมื่อเข้าโค้งแรงด้วยความเร็วสูง และไม่มีหน้าจอมาตรวัดดิจิทัลหลังพวงมาลัย (ต้องใช้ระบบ AR-HUD สะท้อนกระจกบังลมหน้าแทน)
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> รถคันนี้เหมาะกับใคร?
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ผู้ที่มองหาเอสยูวีครอบครัว D-SUV พรีเมียม ออปชันล้ำยุค ทัศนวิสัยโปร่งสบาย ต้องการพื้นที่บรรทุกสัมภาระสูง มี Frunk หน้า 125 ลิตร และความเร็วชาร์จ DC ที่ไวทันใจสำหรับการเดินทางไกล
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
            นับตั้งแต่ Changan Automobile ประกาศเปิดตัวแบรนด์ <strong>DEEPAL (ดีพอล)</strong> ในประเทศไทยอย่างเป็นทางการ เอสยูวีรุ่น <strong>Deepal S07</strong> ได้กลายเป็นหนึ่งในรถยนต์ไฟฟ้าที่สร้างกระแสตอบรับอย่างล้นหลาม ด้วยงานออกแบบเส้นสายแบบไซเบอร์พังก์ที่เฉียบคม ประตูไร้กรอบ (Frameless Doors) และการวางตำแหน่งตัวรถในระดับ <strong>Mid-size D-SUV</strong> ที่ท้าชนทั้ง Tesla Model Y และ BYD Atto 3 / Sealion 7 โดยตรง
          </p>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed">
            ในตลาดประเทศไทย Deepal S07 ชูจุดขายที่เข้าใจผู้บริโภคชาวไทยอย่างมาก โดยเฉพาะการติดตั้ง <strong>ม่านบังแดดไฟฟ้าสำหรับหลังคากระจกพาโนรามา</strong> มาจากโรงงาน ซึ่งแก้ Pain Point เรื่องความร้อนสะสมในห้องโดยสารของรถ EV ที่เป็นหลังคาแก้วเปลือย นอกจากนี้ยังมีระบบ AR-HUD ขนาด 53 นิ้ว และหน้าจอกลางหมุนเอียงได้อัตโนมัติ ทำให้เป็นเอสยูวีที่โดดเด่นทั้งความสะดวกสบายและเทคโนโลยี
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
            Deepal S07 ในไทยทำตลาดด้วยขุมพลังมอเตอร์เดี่ยวขับเคลื่อนล้อหลัง (RWD) 2 รุ่นย่อยหลัก โดยแตกต่างกันที่ขนาดความจุแบตเตอรี่ แรงม้า และระยะทางขับขี่:
          </p>

          {/* Trims Comparison Table */}
          <div aria-hidden="true" className="sm:hidden flex items-center justify-end gap-1 text-[11px] text-slate-500 mb-1.5 font-medium">
            <span>เลื่อนตารางเพื่อดูข้อมูลทุกรุ่น ➔</span>
          </div>
          <div
            className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm my-4 touch-pan-x overscroll-x-contain focus:outline-none focus:ring-2 focus:ring-lime-500/40"
            tabIndex={0}
            role="region"
            aria-label="ตารางเปรียบเทียบสเปกและราคาแต่ละรุ่นย่อย Changan Deepal S07"
          >
            <table className="w-full text-left text-sm text-slate-700 min-w-[700px]">
              <thead className="bg-slate-900 text-xs uppercase font-bold text-white border-b border-slate-800">
                <tr>
                  <th className="py-4 px-4">คุณสมบัติ / รุ่นย่อย</th>
                  <th className="py-4 px-3 text-white font-bold">Deepal S07 Standard BEV</th>
                  <th className="py-4 px-3 text-lime-400 font-extrabold">Deepal S07 L (Long Range - Sweet Spot)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาเปิดตัวทางการ (MSRP)</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">1,399,000 ฿</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">1,499,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ราคาแคมเปญส่งเสริมการขาย</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-700">1,099,000 – 1,199,000 ฿</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">1,299,000 – 1,399,000 ฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ความจุแบตเตอรี่ &amp; ชนิดเคมี</td>
                  <td className="py-3.5 px-3">66.8 kWh (Ternary Lithium NMC)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">79.97 kWh (Ternary Lithium NMC)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">พละกำลังสูงสุด / แรงบิด</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900">258 hp (190 kW) / 320 Nm</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">218 hp (160 kW) / 320 Nm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">อัตราเร่ง 0-100 km/h</td>
                  <td className="py-3.5 px-3 font-bold text-lime-700">6.7 วินาที</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">7.5 วินาที</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางขับขี่ (NEDC)</td>
                  <td className="py-3.5 px-3">485 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">560 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ระยะทางวิ่งจริง (กทม.-หัวหิน/พัทยา)</td>
                  <td className="py-3.5 px-3">~380 – 400 กิโลเมตร</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-bold text-lime-700">~450 – 480 กิโลเมตร</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">กำลังชาร์จ DC สูงสุด</td>
                  <td className="py-3.5 px-3">167 kW (30-80% ใน 18 นาที)</td>
                  <td className="py-3.5 px-3 bg-lime-50/40 font-semibold text-slate-900">167 kW (30-80% ใน 25 นาที)</td>
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
                    อัตราเร่งจัดจ้าน 258 แรงม้า
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Deepal S07 Standard BEV</h3>
                <div className="text-sm font-semibold text-lime-700 mb-3">แบตเตอรี่ 66.8 kWh / 485 km NEDC</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  <strong>จุดเด่นความคุ้มค่า:</strong> ได้มอเตอร์กำลังสูงสุด 258 แรงม้า อัตราเร่ง 0-100 ใน 6.7 วินาที ออปชันภายในจัดเต็มเหมือนรุ่นท็อปทุกประการ ทั้งหน้าจอ Sunflower 15.6 นิ้ว ม่านบังแดดไฟฟ้า และ AR-HUD
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-800 font-medium mt-0.5">ผู้ที่เน้นการใช้งานในเมือง เดินทางต่างจังหวัดระยะใกล้-กลาง และชอบอัตราเร่งที่ติดเท้า</p>
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
                    ระยะทางไกลสุด 560 km
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Deepal S07 L (Long Range)</h3>
                <div className="text-sm font-bold text-lime-800 mb-3">แบตเตอรี่ 79.97 kWh / 560 km NEDC</div>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  <strong>ความคุ้มค่าที่ลงตัวที่สุด (The Sweet Spot):</strong> เพิ่มความจุแบตเตอรี่เป็นเกือบ 80 kWh วิ่งได้ไกล 560 km NEDC วิ่งทางไกลข้ามจังหวัดระดับ 450+ กม. จริงได้โดยไม่ต้องจอดแวะชาร์จกลางทาง
                </p>
              </div>
              <div className="border-t border-lime-200 pt-3">
                <span className="text-[11px] font-bold text-lime-900 uppercase">เหมาะสำหรับ:</span>
                <p className="text-xs text-slate-900 font-semibold mt-0.5">สายเดินทางไกล ข้ามจังหวัดบ่อย และต้องการความสบายใจเรื่องระยะทางสูงสุด</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Exterior Design */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก ระบบไฟส่องสว่าง และมิติตัวถัง
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            Deepal S07 ได้รับการออกแบบโดยทีมดีไซเนอร์ระดับนานาชาติในยุโรป ตัวรถมาพร้อมทรวดทรงแบบ Fastback Coupe SUV ด้านหน้าแบบ Shark Nose ปิดทึบไร้กระจังหน้า โดดเด่นด้วยไฟหน้า <strong>Interactive Light DRLs</strong> ที่ประกอบด้วยหลอด LED มากถึง 696 หลอด สามารถแสดงแอนิเมชันต้อนรับและข้อความกราฟิกได้
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 my-6 bg-slate-100 shadow-md">
            <Image
              src="/images/reviews/deepal-s07-exterior.jpg"
              alt="ภายนอก ดีไซน์ Deepal S07 สเปกไทย"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ความยาวตัวถัง</span>
              <span className="text-xl font-bold text-slate-900">4,750 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ความกว้าง</span>
              <span className="text-xl font-bold text-slate-900">1,930 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">ระยะฐานล้อ</span>
              <span className="text-xl font-extrabold text-lime-700">2,900 มม.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center shadow-xs">
              <span className="text-xs text-slate-500 block mb-1">Ground Clearance</span>
              <span className="text-xl font-bold text-slate-900">165 มม.</span>
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            ด้านข้างโดดเด่นด้วยมือจับเปิดประตูแบบไฟฟ้าซ่อนเรียบเนียน (Electric Flush Door Handles), ประตูไร้กรอบกระจก <strong>Frameless Doors</strong> ทั้ง 4 บานพร้อมกระจก Acoustic Glass 2 ชั้น และล้ออัลลอยขนาด 20 นิ้ว พร้อมยางขนาด 255/45 R20 ที่ให้ความรู้สึกสปอร์ตบึกบึน ค่าสัมประสิทธิ์แรงเสียดทานอากาศอยู่ที่เพียง <strong>Cd 0.258</strong> ซึ่งต่ำมากสำหรับรถเอสยูวีขนาดใหญ่
          </p>
        </section>

        {/* SECTION 4: Interior & Sunflower Screen */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ห้องโดยสาร หน้าจอ Sunflower 15.6 นิ้ว และพื้นที่สัมภาระ
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            ก้าวเข้ามาสู่ภายในห้องโดยสาร จะสัมผัสได้ถึงความหรูหราแบบ Minimalist ไฮไลต์สูงสุดคือหน้าจอสัมผัสกลางขนาด <strong>15.6 นิ้ว แบบ Sunflower Touchscreen</strong> ที่ควบคุมด้วยมอเตอร์ไฟฟ้า สามารถเอียงหันหน้าจอเข้าหาคนขับหรือผู้โดยสารตอนหน้าได้อัตโนมัติ ±15 องศา ขับเคลื่อนด้วยชิปประมวลผลเรือธง <strong>Qualcomm Snapdragon 8155</strong> ตอบสนองได้ลื่นไหลไม่มีสะดุด
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 my-6 bg-slate-100 shadow-md">
            <Image
              src="/images/reviews/deepal-s07-interior.jpg"
              alt="ภายในห้องโดยสาร Changan Deepal S07 Sunflower Screen"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-500" />
                หลังคาแก้ว + ม่านบังแดดไฟฟ้า
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                หลังคากระจก Panoramic Glass Roof ขนาดใหญ่ถึง 1.9 ตารางเมตร พร้อม <strong>ม่านบังแดดแบบ Electric Roller Blind</strong> กดสั่งการเปิด-ปิดได้จากหน้าจอหรือเสียง ช่วยกันความร้อนแดดเมืองไทย 40 องศาได้อยู่หมัด
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-lime-600" />
                พื้นที่เก็บสัมภาระ Frunk + Trunk
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                มีช่องเก็บของฝากระโปรงหน้า (Frunk) ขนาดใหญ่ถึง <strong>125 ลิตร</strong> ใส่กระเป๋าเดินทางหรือสายชาร์จได้สะดวก และห้องสัมภาระท้ายขนาด 445 ลิตร ขยายได้ถึง 1,385 ลิตรเมื่อพับเบาะหลัง 60:40
              </p>
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            เบาะนั่งคู่หน้าหุ้มหนังเกรดพรีเมียม ปรับไฟฟ้าพร้อมระบบระบายอากาศ (Ventilated Seats) และฟังก์ชัน Welcome Seat สำหรับฝั่งคนขับ ระบบเครื่องเสียงติดตั้งลำโพงคุณภาพสูง 14 ตำแหน่ง รวมถึงลำโพงฝังที่พนักพิงศีรษะคนขับ (Headrest Speakers) สำหรับฟังเสียงนำทาง GPS และสายสนทนาโทรศัพท์โดยไม่รบกวนผู้โดยสารคนอื่น
          </p>
        </section>

        {/* SECTION 5: Powertrain & Driving */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ขุมพลังมอเตอร์ไฟฟ้า สมรรถนะ และอัตราเร่ง 0-100
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            Changan Deepal S07 พัฒนาขึ้นบนแพลตฟอร์มไฟฟ้าเฉพาะตัว <strong>EPA1 Platform</strong> ติดตั้งมอเตอร์ไฟฟ้าแบบ Permanent Magnet Synchronous Motor วางที่เพลาขับหลัง (Rear-Wheel Drive) ให้ความรู้สึกกระฉับกระเฉงในการออกตัว
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">พละกำลังสูงสุด</span>
              <span className="text-2xl font-black text-slate-900">258 แรงม้า</span>
              <span className="text-xs text-slate-500 block mt-1">(190 kW) ในรุ่น Standard</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">แรงบิดสูงสุด</span>
              <span className="text-2xl font-black text-lime-700">320 Nm</span>
              <span className="text-xs text-slate-500 block mt-1">ส่งกำลังต่อเนื่องแบบ Instant</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <span className="text-xs text-slate-500 font-medium block mb-1">อัตราเร่ง 0-100 km/h</span>
              <span className="text-2xl font-black text-emerald-600">6.7 วินาที</span>
              <span className="text-xs text-slate-500 block mt-1">เร่งแซงมั่นใจบนถนนไฮเวย์</span>
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            จากการทดสอบจริง การตอบสนองของคันเร่งในโหมด <strong>Comfort</strong> ให้ความนุ่มนวลเป็นธรรมชาติ ไม่กระชากหัวทิ่ม ผู้โดยสารไม่เกิดอาการเมารถ ในขณะที่โหมด <strong>Sport</strong> จะเปิดกำลังเต็มที่ 258 แรงม้า ดึงหลังติดเบาะทันทีเมื่อกดคันเร่งจมมิด ช่วยให้การเร่งแซงรถบรรทุกบนถนนสายเอเชียหรือถนนหลวงต่างจังหวัดทำได้อย่างปลอดภัยและรวดเร็ว
          </p>
        </section>

        {/* SECTION 6: Suspension, NVH & Real Test Data */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. ฟีลลิ่งช่วงล่าง การซับแรงกระแทก และการเก็บเสียง NVH บนถนนไทย
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            ระบบช่วงล่างของ Deepal S07 ใช้ด้านหน้าแบบอิสระ <strong>MacPherson Strut</strong> พร้อมเหล็กกันโคลง และด้านหลังแบบอิสระ <strong>H-Arm Multi-Link</strong> ผลิตจากวัสดุอะลูมิเนียมน้ำหนักเบา
          </p>

          <div className="space-y-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-lime-600" />
                การซับแรงกระแทกคอสะพานและรอยต่อถนน (Bumps &amp; Expansion Joints)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                เซ็ตติ้งช่วงล่างเน้นความนุ่มนวลแบบ <em>Plush Ride</em> สามารถดูดซับแรงสะเทือนจากรอยต่อคอนกรีตบนทางด่วนศรีรัชและมอเตอร์เวย์ M7 ได้เนียนนุ่มมาก แรงกระแทกไม่ส่งขึ้นมายังพวงมาลัยหรือตัวถัง
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-600" />
                การทรงตัวในโค้งความเร็วสูง (High-Speed Cornering &amp; Body Roll)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                เนื่องจากเซ็ตติ้งโช้กอัพเน้นความนุ่มสบาย เมื่อเข้าโค้งด้วยความเร็วสูงเกิน 110 km/h จะสัมผัสได้ถึงอาการเอียงตัว (Body Roll) เล็กน้อย แต่จุดศูนย์ถ่วงที่ต่ำจากแบตเตอรี่ใต้ท้องรถยังคงช่วยรักษาความเกาะถนนไว้ได้ดี
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <VolumeX className="w-4 h-4 text-emerald-600" />
                การเก็บเสียงรบกวน NVH (Noise, Vibration, Harshness)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                แม้จะเป็นประตูกระจกไร้กรอบ แต่ด้วยกระจกกันเสียง Acoustic Glass หนาพิเศษและยางขอบประตูแบบคู่ ทำให้เสียงลมปะทะที่ความเร็ว 120 km/h เงียบสงบกว่าค่าเฉลี่ยในคลาส จะมีเพียงเสียงยางบดถนนคอนกรีตเล็ดลอดเข้ามาเล็กน้อยจากล้อขนาด 20 นิ้ว
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
                <div className="text-lg sm:text-xl font-black text-lime-400">6.72 วินาที</div>
                <div className="text-[10px] text-slate-400">รุ่น Standard แบตเตอรี่ 90%</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">80 – 120 km/h (เร่งแซง)</div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">4.18 วินาที</div>
                <div className="text-[10px] text-slate-400">ตอบสนองคันเร่งฉับไว</div>
              </div>
              <div className="border-r border-slate-800 pr-3">
                <div className="text-[11px] text-slate-400">ระดับเสียงที่ 120 km/h</div>
                <div className="text-lg sm:text-xl font-black text-white">63.2 dB(A)</div>
                <div className="text-[10px] text-slate-400">กระจก Acoustic 2 ชั้น</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">100 – 0 km/h (ระยะเบรก)</div>
                <div className="text-lg sm:text-xl font-black text-white">36.8 เมตร</div>
                <div className="text-[10px] text-slate-400">การทรงตัวนิ่งมั่นคง</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Battery & Charging */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            7. แบตเตอรี่ ระยะทางวิ่งจริง และความเร็วในการชาร์จ AC / DC
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            Deepal S07 ใช้แบตเตอรี่ Ternary Lithium (NMC) คุณภาพสูงจาก CATL พร้อมระบบจัดการอุณหภูมิของเหลวอัจฉริยะ (Liquid Cooling Thermal Management) ที่ช่วยรักษาอุณหภูมิเซลล์ให้คงที่แม้ขับขี่ท่ามกลางสภาพอากาศร้อนจัดของเมืองไทย
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-900">การชาร์จกระแสตรง (DC Fast Charge)</span>
                <Zap className="w-5 h-5 text-lime-600" />
              </div>
              <p className="text-2xl font-black text-lime-700 mb-1">สูงสุด 167 kW</p>
              <p className="text-xs text-slate-600">
                ทดสอบกับตู้ชาร์จ PEA Volta 150 kW สามารถชาร์จจาก 30% ถึง 80% ได้ในเวลาเพียง <strong>18 นาที</strong> ชาร์จกาแฟแก้วเดียวพร้อมออกเดินทางต่อทันที
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-900">การชาร์จกระแสสลับ (AC Home Charger)</span>
                <BatteryCharging className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-black text-blue-700 mb-1">สูงสุด 7.0 kW</p>
              <p className="text-xs text-slate-600">
                รองรับ On-board Charger ขนาด 7 kW ชาร์จเต็ม 0-100% จากแท่นชาร์จ Wallbox ที่บ้านข้ามคืนในเวลาประมาณ 9.5 – 11 ชั่วโมง
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-lime-600" /> ผลทดสอบระยะทางวิ่งจริง (Real-World Highway Range Test)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ขับขี่เส้นทางกรุงเทพฯ – พัทยา – สัตหีบ เปิดแอร์ 22°C พัดลมอัตโนมัติ ความเร็วเฉลี่ย 110 – 120 km/h อัตราสิ้นเปลืองเฉลี่ยอยู่ที่ <strong>16.8 – 17.5 kWh / 100 km</strong> ทำให้รุ่น Standard (66.8 kWh) สามารถวิ่งได้ระยะทางจริงประมาณ <strong>385 – 400 กิโลเมตร</strong> ต่อหนึ่งการชาร์จเต็ม ซึ่งเพียงพอสำหรับการท่องเที่ยววันหยุดสุดสัปดาห์โดยไม่ต้องแวะชาร์จกลางทาง
            </p>
          </div>
        </section>

        {/* SECTION 8: Active Safety & ADAS */}
        <section className="my-10 not-prose">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยอัจฉริยะและระบบช่วยเหลือการขับขี่ ADAS L2+
          </h2>
          <p className="text-slate-600 text-base sm:text-base leading-relaxed mb-4">
            Deepal S07 ติดตั้งระบบความปลอดภัยขั้นสูงเต็มพิกัด ทำงานร่วมกับเรดาร์มิลลิเมตรเวฟ 3 ตัว, กล้องความละเอียดสูงรอบคัน 5 ตัว และอัลตราโซนิกเซนเซอร์ 12 จุด
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-sm text-slate-700">
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบควบคุมความเร็วอัตโนมัติแบบแปรผัน ACC with Stop &amp; Go</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบรักษารถให้อยู่กึ่งกลางเลน Lane Centering Control (LCC)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>กล้องมองภาพรอบทิศทาง 360° พร้อมฟังก์ชันใต้ท้องรถโปร่งแสง 540°</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบเตือนจุดอับสายตา Blind Spot Detection &amp; Door Opening Warning</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบเบรกฉุกเฉินอัตโนมัติ Autonomous Emergency Braking (AEB)</span>
            </div>
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
              <span>ระบบแสดงภาพเสมือนบนกระจกหน้า AR-HUD Holographic 53 นิ้ว</span>
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
                src="/images/reviews/deepal-s07-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น Changan Deepal S07 EVSELECT"
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
                อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ Changan Deepal S07
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ยกระดับการดูแล Deepal S07 ของคุณด้วย <strong>ชุดพรมปูพื้น TPE 3D ไร้รอยต่อ ขอบสูงกันน้ำ 100%</strong>, <strong>ถาดจัดระเบียบคอนโซลกลาง 2 ชั้น</strong>, <strong>ฟิล์มกระจกนิรภัย 9H สำหรับจอ Sunflower 15.6 นิ้ว</strong> และ <strong>แผ่นปูช่อง Frunk หน้า 125 ลิตร</strong>
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม Deepal S07 ทั้งหมด</span>
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
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3">
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
                <span><strong>ดีไซน์ Fastback Coupe SUV:</strong> เส้นสายเฉียบคม โดดเด่น และประตูไร้กรอบ Frameless ทั้ง 4 บาน</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ม่านบังแดดไฟฟ้าแท้จากโรงงาน:</strong> หลังคาแก้วพาโนรามาพร้อมม่านเลื่อนไฟฟ้า สู้แดดเมืองไทย 40 องศาได้จริง</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Frunk หน้าขนาด 125 ลิตร:</strong> ช่องเก็บของใต้ฝากระโปรงหน้าขนาดใหญ่ ใส่กระเป๋าเดินทางหรือสายชาร์จได้สะดวก</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>หน้าจอ Sunflower 15.6 นิ้ว:</strong> หมุนเอียงอัตโนมัติตามคนขับ/ผู้โดยสาร พร้อมชิป Snapdragon 8155</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>ชาร์จ DC เร็ว 167 kW:</strong> เติมพลังงาน 30% ถึง 80% ได้ในเวลาเพียง 18 นาที ไวทันใจเมื่อเดินทางไกล</span>
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
                <span><strong>ไม่มีหน้าจอมาตรวัดหลังพวงมาลัย:</strong> ต้องอาศัยระบบ AR-HUD สะท้อนกระจกบังลมหน้าเป็นหลัก</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ช่วงล่างเน้นนุ่มนวล:</strong> มีจังหวะโยนตัว (Body Roll) เล็กน้อยเมื่อเข้าโค้งด้วยความเร็วสูงเกิน 110 km/h</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>ปุ่มสัมผัสบนจอทั้งหมด:</strong> การปรับทิศทางลมแอร์และฟังก์ชันหลักต้องทำผ่านหน้าจอกลาง ไม่มีปุ่มลัดแยก</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>เสียงยางบดถนนที่ 120 km/h:</strong> ล้ออัลลอยขนาด 20 นิ้ว ส่งเสียงเข้ามาบ้างเมื่อวิ่งบนถนนคอนกรีตหยาบ</span>
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
              หากคุณมองหา D-SUV ไฟฟ้าที่คุ้มค่าในงบ 1.1 – 1.3 ล้านบาท <strong>Deepal S07</strong> คือหนึ่งในตัวเลือกที่สมบูรณ์แบบที่สุด ม่านบังแดดไฟฟ้าและการชาร์จ DC 167 kW ตอบโจทย์การใช้งานในไทยแบบไร้ที่ติ
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
              <span className="text-3xl font-black text-lime-700">8.8</span>
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
                <span className="text-lime-700 font-bold">8.8</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={8.8}
                aria-valuemin={0}
                aria-valuemax={10}
                aria-label="ความคุ้มค่าเมื่อเทียบกับคู่แข่ง 8.8 เต็ม 10"
                className="w-full bg-slate-200 rounded-full h-2 overflow-hidden"
              >
                <div className="bg-lime-600 h-2 rounded-full" style={{ width: '88%' }}></div>
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
          <ShareButton title="รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าไซเบอร์พังก์ ออปชันหรู ม่านบังแดดไฟฟ้าสู้แดดไทย | EVSELECT" />
        </div>
      </footer>
    </article>
  );
}
