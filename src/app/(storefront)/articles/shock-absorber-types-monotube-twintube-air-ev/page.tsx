import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ImageCredit } from '@/components/ImageCredit';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Layers,
  CheckCircle2,
  Zap,
  Gauge,
  Thermometer,
  Cpu
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'เจาะลึกประเภทโช้คอัพ: Monotube vs Twin-tube vs Inverted vs ถุงลมอัจฉริยะ (Air Suspension) สำหรับรถ EV | EVSELECT',
  description: 'ผ่าโครงสร้างภายในโช้คอัพ Monotube, Twin-tube, Inverted Monotube และระบบถุงลมอัจฉริยะ Dual-chamber Air Suspension: เปรียบเทียบความทนทาน ระบายความร้อน และความคุ้มค่าสำหรับรถยนต์ไฟฟ้าหนัก 2 ตัน',
  keywords: [
    'โช้คอัพ Monotube vs Twintube',
    'โช้คอัพ Inverted',
    'โช้คหัวกลับ EV',
    'Air Suspension รถยนต์ไฟฟ้า',
    'ช่วงล่างถุงลม Zeekr',
    'โช้คอัพ Tesla Model Y',
    'Cavitation โช้คอัพ',
    'โช้คอัพรถ EV',
    'CDC Damper',
    'MagneRide EV'
  ],
  openGraph: {
    title: 'เจาะลึกประเภทโช้คอัพ Monotube vs Twin-tube vs Inverted สำหรับรถ EV | EVSELECT Engineering Review',
    description: 'ผ่าโครงสร้างภายใน วิเคราะห์การระบายความร้อน ปรากฏการณ์ฟองอากาศ (Aeration) และการเลือกโช้คอัพที่ทนทานต่อน้ำหนักแบตเตอรี่ EV',
    url: 'https://evselects.com/articles/shock-absorber-types-monotube-twintube-air-ev',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'เจาะลึกประเภทโช้คอัพสำหรับรถยนต์ไฟฟ้า | EVSELECT',
    description: 'เปรียบเทียบ Monotube, Twin-tube, Inverted และช่วงล่างถุงลมอัจฉริยะ'
  }
};

export default function ShockAbsorberTypesGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'เจาะลึกประเภทโช้คอัพ: Monotube vs Twin-tube vs Inverted vs ถุงลมอัจฉริยะ (Air Suspension) แบบไหนตอบโจทย์ EV มากที่สุด?',
    description: 'การวิเคราะห์โครงสร้างภายในของโช้คอัพแต่ละประเภท การต้านทานการเกิดฟองอากาศ การระบายความร้อน และความเหมาะสมกับรถยนต์ไฟฟ้า',
    author: {
      '@type': 'Organization',
      name: 'EVSELECT Suspension Engineering Lab'
    },
    publisher: {
      '@type': 'Organization',
      name: 'EVSELECT Thailand',
      logo: {
        '@type': 'ImageObject',
        url: 'https://evselects.com/logo.png'
      }
    },
    datePublished: '2026-08-27',
    inLanguage: 'th-TH'
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-lime-700 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>กลับไปหน้ารวมบทความและคู่มือช่วงล่าง EV</span>
        </Link>
      </nav>

      {/* 2. Article Header & Badges */}
      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
            <span className="bg-lime-50 text-lime-800 border border-lime-300 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-lime-700" />
              Damper Architecture &amp; Hardware
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200">
              Racecar Engineering &amp; Suspension Secrets
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 27 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 13 นาที
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full shadow-xs">
            <span className="text-xs text-slate-300 font-medium">ความลึกเนื้อหา</span>
            <span className="text-sm font-black text-lime-400">Level 4: Architecture</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เจาะลึกประเภทโช้คอัพ: Monotube vs Twin-tube vs Inverted vs ถุงลมอัจฉริยะ (Air Suspension) แบบไหนตอบโจทย์ EV มากที่สุด?
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          รถยนต์ไฟฟ้า (EV) สร้างความท้าทายอย่างที่ไม่เคยมีมาก่อนให้กับระบบกันสะเทือน: น้ำหนักตัวรถที่หนักกว่ารถเครื่องยนต์สันดาป 300–600 กิโลกรัม, 
          แรงบิดมหาศาลตั้งแต่ 0 RPM และจุดศูนย์ถ่วงต่ำที่ถ่ายเทน้ำหนักรวดเร็ว 
          ผ่าโครงสร้างภายในของ <strong>Monotube, Twin-tube, Inverted Monotube (โช้คหัวกลับ), Remote Reservoir และ Adaptive Air Suspension</strong> เพื่อหาคำตอบว่าสถาปัตยกรรมแบบไหนทนทาน ระบายความร้อน และควบคุมแชสซีรถ EV บนถนนเมืองไทยได้ดีที่สุด
        </p>

        
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl">
          <Image
            src="/images/articles/gas-damper-photo.jpg"
            alt="ตัวอย่างโช้คอัพรถยนต์ชนิดแก๊ส"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
              โครงสร้างภายในโช้คอัพ
            </span>
          </div>
        </div>

        <ImageCredit author="TEy~commonswiki" source="https://commons.wikimedia.org/wiki/File:Damper_1.jpg" license="CC BY-SA 3.0" licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/" />

        {/* Executive Comparison Summary */}
        <div className="bg-slate-50 border-l-4 border-lime-600 p-6 sm:p-7 rounded-r-2xl border-y border-r border-slate-200 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg bg-lime-500 flex items-center justify-center text-slate-950 font-black text-xs">
              SA
            </div>
            <h3 className="text-base font-bold text-slate-900 m-0">
              สรุปความแตกต่างเชิงโครงสร้างสำหรับรถ EV (Architecture Summary)
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 mb-0 pl-0 list-none">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>Twin-tube (กระบอกคู่):</strong> ต้นทุนต่ำ นุ่มนวลช่วงช้า แต่ผนังสองชั้นกักเก็บความร้อน และเสี่ยงต่อการเกิดฟองอากาศ (Aeration) เมื่อรับโหลด EV ต่อเนื่อง</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>Monotube (กระบอกเดี่ยว):</strong> ลูกสูบขนาดใหญ่ 40–46 มม. แรงดันไนโตรเจนสูง 20–30 bar แยกห้องน้ำมัน-แก๊ส 100% ระบายความร้อนสู่อากาศโดยตรง คุมตัวถัง EV นิ่งสนิท</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>Inverted Monotube (หัวกลับ):</strong> เสื้อกระบอกขนาดใหญ่ทนแรงดัดด้านข้าง (Lateral Rigidity) สูงกว่าปกติ 200% และลดน้ำหนักใต้สปริง (Unsprung Mass) เหมาะกับล้อหน้า EV</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>Dual-Chamber Air Suspension:</strong> ปรับระดับความสูงและเปลี่ยนค่า K ความแข็งถุงลมได้ตามโหมดการขับขี่ เป็นมาตรฐานของพรีเมียม EV ยุคใหม่ (Zeekr, Porsche, Tesla)</span>
            </li>
          </ul>
        </div>
      </header>

      {/* 3. Main Body */}
      <div className="space-y-12">

        {/* Section 1: Anatomy Cutaway & SVG Diagram */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              1. ผ่าโครงสร้างภายใน: กายวิภาค Monotube vs Twin-tube vs Inverted
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            แผนภาพตัดขวางแสดงกลไกการทำงานของห้องแรงดัน ลูกสูบหลัก แผ่นชิมวาล์ว และการแยกก๊าซไนโตรเจนออกจากน้ำมันไฮดรอลิก:
          </p>

          {/* Custom Inline SVG Technical Cutaway Diagram */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-xs font-extrabold text-slate-900 uppercase tracking-widest bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full">
                Engineering Anatomical Cutaways
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-2 mb-1">
                Internal Architecture: Monotube vs Twin-tube vs Inverted Monotube
              </h3>
              <p className="text-xs text-slate-400">
                เปรียบเทียบห้องน้ำมัน ลูกสูบ Floating Piston และเส้นทางระบายความร้อนสู่อากาศภายนอก
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 920 540"
                className="w-full min-w-[750px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="oilGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d97706" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.95" />
                  </linearGradient>

                  <linearGradient id="foamedOilGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#fed7aa" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#c2410c" stopOpacity="0.8" />
                  </linearGradient>

                  <linearGradient id="gasGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
                  </linearGradient>

                  <linearGradient id="chromeShaft" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="50%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>
                </defs>

                <rect width="920" height="540" fill="#080c14" rx="16" />

                {/* 1. TWIN-TUBE CUTAWAY */}
                <g transform="translate(40, 40)">
                  <rect x="0" y="0" width="240" height="32" rx="6" fill="#334155" />
                  <text x="120" y="21" fill="#f1f5f9" fontSize="12" fontWeight="bold" textAnchor="middle">
                    1. Twin-Tube (กระบอกคู่)
                  </text>

                  <rect x="50" y="70" width="140" height="360" fill="#1e293b" stroke="#475569" strokeWidth="2" rx="4" />
                  <rect x="54" y="74" width="132" height="352" fill="url(#foamedOilGradient)" />

                  <rect x="54" y="74" width="132" height="60" fill="url(#gasGradient)" fillOpacity="0.5" />
                  <text x="120" y="105" fill="#e0f2fe" fontSize="9" fontWeight="bold" textAnchor="middle">
                    Low-Pressure Gas (5-10 bar)
                  </text>

                  <rect x="80" y="110" width="80" height="310" fill="url(#oilGradient)" stroke="#64748b" strokeWidth="2" />

                  <rect x="113" y="45" width="14" height="200" fill="url(#chromeShaft)" stroke="#475569" strokeWidth="1" />
                  
                  <rect x="82" y="240" width="76" height="20" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
                  <line x1="86" y1="262" x2="154" y2="262" stroke="#e2e8f0" strokeWidth="2" />

                  <rect x="82" y="400" width="76" height="18" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />

                  <circle cx="170" cy="180" r="14" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1.5" />
                  <text x="170" y="184" fill="#fecaca" fontSize="9" fontWeight="bold" textAnchor="middle">Aeration</text>
                  <line x1="185" y1="180" x2="230" y2="180" stroke="#ef4444" strokeWidth="1" />
                  <text x="235" y="183" fill="#f87171" fontSize="9">เกิดฟองก๊าซผสมน้ำมัน</text>

                  <rect x="10" y="445" width="220" height="36" rx="6" fill="#1e1b2e" stroke="#ef4444" strokeWidth="1" />
                  <text x="120" y="460" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">Double-Wall Heat Barrier</text>
                  <text x="120" y="473" fill="#f87171" fontSize="9" textAnchor="middle">ผนัง 2 ชั้นกักความร้อน โช้คเฟดเร็วเมื่อเจอ EV หนัก</text>
                </g>

                {/* 2. MONOTUBE CUTAWAY */}
                <g transform="translate(340, 40)">
                  <rect x="0" y="0" width="240" height="32" rx="6" fill="#15803d" />
                  <text x="120" y="21" fill="#f0fdf4" fontSize="12" fontWeight="bold" textAnchor="middle">
                    2. Monotube (กระบอกเดี่ยว)
                  </text>

                  <rect x="60" y="70" width="120" height="360" fill="#0f172a" stroke="#84cc16" strokeWidth="2.5" rx="4" />

                  <rect x="64" y="74" width="112" height="230" fill="url(#oilGradient)" />

                  <rect x="112" y="45" width="16" height="170" fill="url(#chromeShaft)" stroke="#475569" strokeWidth="1" />

                  <rect x="65" y="210" width="110" height="24" fill="#022c22" stroke="#bef264" strokeWidth="2" />
                  <line x1="70" y1="236" x2="170" y2="236" stroke="#bef264" strokeWidth="3" />
                  <text x="120" y="226" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                    Large 44mm Piston
                  </text>

                  <rect x="65" y="300" width="110" height="18" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                  <circle cx="68" cy="309" r="3" fill="#0f172a" />
                  <circle cx="172" cy="309" r="3" fill="#0f172a" />
                  <text x="120" y="313" fill="#e2e8f0" fontSize="8" fontWeight="bold" textAnchor="middle">
                    Floating Dividing Piston
                  </text>

                  <rect x="64" y="320" width="112" height="106" fill="url(#gasGradient)" />
                  <text x="120" y="375" fill="#f0f9ff" fontSize="10" fontWeight="bold" textAnchor="middle">
                    High-Pressure N2 Gas
                  </text>
                  <text x="120" y="390" fill="#bae6fd" fontSize="9" textAnchor="middle">
                    (20 – 30 Bar)
                  </text>

                  <path d="M 40,200 L 55,200 M 40,240 L 55,240 M 40,280 L 55,280" stroke="#84cc16" strokeWidth="2" />
                  <path d="M 200,200 L 185,200 M 200,240 L 185,240 M 200,280 L 185,280" stroke="#84cc16" strokeWidth="2" />

                  <rect x="10" y="445" width="220" height="36" rx="6" fill="#052e16" stroke="#84cc16" strokeWidth="1" />
                  <text x="120" y="460" fill="#bef264" fontSize="10" fontWeight="bold" textAnchor="middle">Direct Ambient Cooling</text>
                  <text x="120" y="473" fill="#86efac" fontSize="9" textAnchor="middle">ระบายความร้อนสู่ลมปะทะ 100% ไม่เกิดฟอง</text>
                </g>

                {/* 3. INVERTED MONOTUBE CUTAWAY */}
                <g transform="translate(640, 40)">
                  <rect x="0" y="0" width="240" height="32" rx="6" fill="#0369a1" />
                  <text x="120" y="21" fill="#f0f9ff" fontSize="12" fontWeight="bold" textAnchor="middle">
                    3. Inverted Monotube (หัวกลับ)
                  </text>

                  <rect x="45" y="70" width="150" height="360" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" rx="6" />

                  <rect x="49" y="80" width="142" height="24" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
                  <rect x="49" y="210" width="142" height="24" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
                  <text x="120" y="96" fill="#f8fafc" fontSize="8" fontWeight="bold" textAnchor="middle">
                    Heavy-Duty Dual Bushings
                  </text>

                  <rect x="68" y="110" width="104" height="290" fill="#1e293b" stroke="#84cc16" strokeWidth="1.5" rx="3" />

                  <rect x="71" y="113" width="98" height="70" fill="url(#gasGradient)" />
                  <text x="120" y="150" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">
                    N2 Chamber (Top)
                  </text>

                  <rect x="71" y="185" width="98" height="14" fill="#334155" stroke="#94a3b8" strokeWidth="1" />

                  <rect x="71" y="200" width="98" height="195" fill="url(#oilGradient)" />

                  <rect x="113" y="320" width="14" height="100" fill="url(#chromeShaft)" stroke="#475569" strokeWidth="1" />

                  <rect x="10" y="445" width="220" height="36" rx="6" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
                  <text x="120" y="460" fill="#7dd3fc" fontSize="10" fontWeight="bold" textAnchor="middle">Maximum Lateral Rigidity</text>
                  <text x="120" y="473" fill="#bae6fd" fontSize="9" textAnchor="middle">ลด Unsprung Mass ทนแรงดัดเบรก 2.2 ตัน</text>
                </g>
              </svg>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong className="text-lime-400">หัวใจสำคัญทางวิศวกรรม:</strong> Monotube มีลูกสูบขนาดใหญ่กว่า Twin-tube ถึง 1.5 เท่า ให้พื้นที่สร้างแรงหน่วงมากกว่า และมีลูกสูบ Floating Piston กั้นไม่ให้น้ำมันสัมผัสก๊าซไนโตรเจน 100%
              </div>
              <div className="font-mono text-slate-500">Source: Racecar Engineering Architecture Survey</div>
            </div>
          </div>
        </section>

        {/* Section 2: Comprehensive Engineering Matrix */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              2. ตารางเปรียบเทียบสถาปัตยกรรมโช้คอัพ 5 รูปแบบ (Comprehensive Engineering Matrix)
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            การประเมินเปรียบเทียบสมรรถนะของระบบโช้คอัพใน 8 มิติตัวชี้วัดวิศวกรรม สำหรับการใช้งานบนรถยนต์ไฟฟ้าในประเทศไทย:
          </p>

          {/* Detailed Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4 border-b border-slate-800">มิติทางวิศวกรรม</th>
                  <th className="p-4 border-b border-slate-800">Twin-Tube (เดิมติดรถ)</th>
                  <th className="p-4 border-b border-slate-800 bg-lime-950 text-lime-400">Monotube (แนะนำสตรีท)</th>
                  <th className="p-4 border-b border-slate-800 bg-sky-950 text-sky-300">Inverted Monotube</th>
                  <th className="p-4 border-b border-slate-800">Dual-Chamber Air Susp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">ขนาดลูกสูบ (Piston Diameter)</td>
                  <td className="p-4 text-slate-600">28 – 32 มม. (เล็ก)</td>
                  <td className="p-4 font-bold text-lime-800 bg-lime-50/50">40 – 46 มม. (ใหญ่มาก)</td>
                  <td className="p-4 font-bold text-sky-800 bg-sky-50/50">40 – 46 มม. (ใหญ่มาก)</td>
                  <td className="p-4 text-slate-600">32 – 40 มม. + วาล์ว CDC</td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">แรงดันก๊าซไนโตรเจน (Gas Pressure)</td>
                  <td className="p-4 text-slate-600">5 – 10 Bar (ต่ำ)</td>
                  <td className="p-4 font-mono font-bold text-lime-800 bg-lime-50/50">20 – 30 Bar (สูงมาก)</td>
                  <td className="p-4 font-mono font-bold text-sky-800 bg-sky-50/50">20 – 30 Bar (สูงมาก)</td>
                  <td className="p-4 text-slate-600">10 – 16 Bar (ในถุงลม)</td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">การระบายความร้อน (Heat Dissipation)</td>
                  <td className="p-4 text-rose-600 font-medium">ปานกลาง - แย่ (กักความร้อน)</td>
                  <td className="p-4 font-bold text-emerald-700 bg-lime-50/50">ดีเยี่ยม (สัมผัสลมตรง)</td>
                  <td className="p-4 font-bold text-emerald-700 bg-sky-50/50">ยอดเยี่ยมที่สุด</td>
                  <td className="p-4 text-slate-600">ดี (ระบบหล่อเย็นภายนอก)</td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">ความเสี่ยงฟองอากาศ (Cavitation)</td>
                  <td className="p-4 text-rose-600 font-medium">สูง (น้ำมันปนก๊าซ)</td>
                  <td className="p-4 font-bold text-emerald-700 bg-lime-50/50">0% (แยกห้อง 100%)</td>
                  <td className="p-4 font-bold text-emerald-700 bg-sky-50/50">0% (แยกห้อง 100%)</td>
                  <td className="p-4 text-slate-600">ต่ำมาก</td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">ความทนทานต่อแรงดัด (Lateral Rigidity)</td>
                  <td className="p-4 text-slate-600">ปานกลาง (แกนเล็ก)</td>
                  <td className="p-4 text-slate-700 bg-lime-50/50">ดี (แกนโครเมียม 14-16 มม.)</td>
                  <td className="p-4 font-bold text-sky-800 bg-sky-50/50">สูงสุด (+200% ทน EV หนัก)</td>
                  <td className="p-4 text-slate-600">ดี (โครงสร้างแอร์สตรัท)</td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">น้ำหนักใต้สปริง (Unsprung Mass)</td>
                  <td className="p-4 text-slate-600">ปานกลาง</td>
                  <td className="p-4 text-slate-600 bg-lime-50/50">ปานกลาง</td>
                  <td className="p-4 font-bold text-emerald-700 bg-sky-50/50">ต่ำสุด (กระบอกยึดตัวถัง)</td>
                  <td className="p-4 text-slate-600">ค่อนข้างสูง (ถุงลมหนัก)</td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">การบำรุงรักษา / ซ่อมบำรุง (Overhaul)</td>
                  <td className="p-4 text-slate-600">ปิดผนึก ซ่อมไม่ได้ (ทิ้ง)</td>
                  <td className="p-4 font-bold text-lime-800 bg-lime-50/50">ถอด Revalve / ซ่อมได้ 100%</td>
                  <td className="p-4 font-bold text-sky-800 bg-sky-50/50">เปลี่ยน Cartridge ได้รวดเร็ว</td>
                  <td className="p-4 text-rose-600 font-medium">ค่าเปลี่ยนถุงลมสูงตามอายุ</td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">ความเหมาะสมกับถนนเมืองไทย</td>
                  <td className="p-4 text-slate-600">นุ่มแต่ย้วยที่ความเร็วสูง</td>
                  <td className="p-4 font-bold text-lime-800 bg-lime-50/50">ดีมากสำหรับ Street &amp; Fast Road</td>
                  <td className="p-4 font-bold text-sky-800 bg-sky-50/50">ยอดเยี่ยมสำหรับทางขรุขระ/โค้ง</td>
                  <td className="p-4 font-bold text-slate-900">นุ่มหรู ปรับยกหนีน้ำท่วมได้</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Adaptive & Electronic Suspensions */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              3. สถาปัตยกรรมช่วงล่างอัจฉริยะ: CDC vs Magnetorheological vs Dual-Chamber Air
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CDC Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center font-black">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 m-0">
                1. Continuous Damping Control (CDC)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ใช้วาล์วโซลินอยด์ไฟฟ้าแปรผัน (Proportional Solenoid Valve) เช่น ZF Sachs หรือ Bilstein DampTronic ปรับอัตราการไหลของน้ำมันภายใน <strong>10 – 20 มิลลิวินาที</strong> ตอบสนองตามเซนเซอร์จับการเอียง 6-Axis IMU
              </p>
              <div className="text-xs font-bold text-slate-500 pt-2 border-t border-slate-100">
                พบใน: BYD Seal AWD, Zeekr 001, Volvo EX30
              </div>
            </div>

            {/* MagneRide Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-black">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 m-0">
                2. Magnetorheological (MagneRide)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                น้ำมันโช้คผสมอนุภาคเหล็กขนาดไมครอน (Carbonyl Iron) เมื่อจ่ายกระแสไฟฟ้าผ่านขดลวดแม่เหล็กในลูกสูบ อนุภาคจะเรียงตัวต้านทานการไหล เปลี่ยนความหนืดได้ในเวลาเพียง <strong>1 – 2 มิลลิวินาที</strong> โดยไม่มีชิ้นส่วนกลไกเคลื่อนไหว
              </p>
              <div className="text-xs font-bold text-slate-500 pt-2 border-t border-slate-100">
                พบใน: Ford Mustang Mach-E GT, Cadillac Lyriq
              </div>
            </div>

            {/* Dual Chamber Air Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 m-0">
                3. Dual-Chamber Air Suspension
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ถุงลมที่มี 2 ห้องปริมาตรแยกกัน ควบคุมด้วยโซลินอยด์วาล์ว สามารถตัดต่อห้องลมเพื่อเปลี่ยนค่าสปริงเรท (ความแข็งของถุงลม) ได้ในเสี้ยววินาที พร้อมปรับความสูงตัวรถ &plusmn;50 มม. เพื่อลุยน้ำท่วมหรือลดแรงต้านอากาศที่ความเร็วสูง
              </p>
              <div className="text-xs font-bold text-slate-500 pt-2 border-t border-slate-100">
                พบใน: Zeekr 7X, Zeekr 009, Porsche Taycan
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Durability & Heat Analysis for Thailand */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              4. บทวิเคราะห์ความทนทานและการระบายความร้อนในสภาพภูมิอากาศเมืองไทย
            </h2>
          </div>

          <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <Thermometer className="w-6 h-6 text-amber-600" />
              <h3 className="text-base font-bold text-slate-900 m-0">
                วิกฤตความร้อนสะสมของโช้คอัพบนผิวถนนไทย (Tropical Heat Challenge)
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              ผิวถนนแอสฟัลต์ในกรุงเทพฯ ช่วงบ่ายมีอุณหภูมิสะสมสูงถึง <strong>55°C – 65°C</strong> เมื่อรวมกับความร้อนที่เกิดจากการสลายพลังงานจลน์ของตัวถัง EV หนัก 2,200 กิโลกรัม น้ำมันภายในกระบอกโช้คอัพ Twin-tube อาจพุ่งสูงเกิน <strong>90°C – 110°C</strong> ได้อย่างรวดเร็ว
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <strong className="text-rose-700 block mb-1">ผลกระทบต่อ Twin-Tube:</strong>
                น้ำมันที่ร้อนจัดจะมีความหนืดลดลง (Viscosity Drop) และเกิดฟองก๊าซปนเปื้อน ส่งผลให้แรงหน่วงโช้คตกลงมากกว่า 30% รถจะเกิดอาการยวบเด้งและโคลงตัวชัดเจนเมื่อขับขี่ทางไกล
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <strong className="text-lime-700 block mb-1">ความได้เปรียบของ Monotube:</strong>
                ผนังกระบอกเดี่ยวที่สัมผัสกระแสลมปะทะโดยตรงสามารถระบายความร้อนได้เร็วกว่า 2.5 เท่า พร้อมก๊าซไนโตรเจน 25 Bar คอยอัดน้ำมันไม่ให้เดือดเป็นฟอง ทำให้รักษาความหนืดสม่ำเสมอได้ตลอดการเดินทาง
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Selection Guide for EV Models */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              5. คำแนะนำในการเลือกอัปเกรดโช้คอัพให้ตรงรุ่นรถ EV ของคุณ
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-lime-700 uppercase tracking-wider mb-1">รถคอมแพกต์ / ซีดาน EV</div>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">Tesla Model 3 / BYD Seal / MG4</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <strong>แนะนำ:</strong> ชุดสตรัทปรับเกลียว <strong>Monotube พร้อม Digressive Valving</strong> ปรับแข็ง-อ่อนได้ 16–32 ระดับ ช่วยหยุดอาการดีดเด้งของท้ายรถและเพิ่มความมั่นใจในโค้งความเร็วสูง
              </p>
              <Link href="/" className="text-xs font-bold text-lime-700 hover:text-lime-800 inline-flex items-center gap-1">
                ดูโช้คอัพ Monotube ตรงรุ่น <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">รถเอสยูวีครอบครัว EV</div>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">Tesla Model Y / Deepal S07 / BYD Atto 3</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <strong>แนะนำ:</strong> โช้คอัพ <strong>Inverted Monotube (คู่หน้า) + Monotube Sub-tank (คู่หลัง)</strong> เสริมความทนทานต่อแรงกระแทกคอสะพาน และซับแรงกระเทือนเบาะแถวสองอย่างนุ่มนวล
              </p>
              <Link href="/" className="text-xs font-bold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1">
                ดูชุดอัปเกรดช่วงล่าง SUV <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">พรีเมียมเอ็มพีวี / เรือธง EV</div>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">Zeekr 009 / Zeekr 7X / Denza D9</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <strong>แนะนำ:</strong> <strong>Dual-Chamber Smart Air Suspension</strong> ควบคุมด้วยระบบคอมพิวเตอร์พร้อมระบบปรับความสูงอัตโนมัติ ให้ความนุ่มเงียบระดับ First Class
              </p>
              <Link href="/articles" className="text-xs font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1">
                อ่านรีวิวช่วงล่าง Zeekr 7X <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-lime-500 flex items-center justify-center font-black text-slate-950 text-sm">
            EV
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">EVSELECT Hardware &amp; Fitment Engineering</div>
            <div className="text-[11px] text-slate-500">บทความเจาะลึกมาตรฐานวิศวกรรมช่วงล่าง Racecar Engineering</div>
          </div>
        </div>

        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-lime-700 bg-slate-100 hover:bg-lime-50 border border-slate-200 px-4 py-2.5 rounded-full transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          กลับไปหน้ารวมบทความระบบช่วงล่าง
        </Link>
      </footer>
    </article>
  );
}
