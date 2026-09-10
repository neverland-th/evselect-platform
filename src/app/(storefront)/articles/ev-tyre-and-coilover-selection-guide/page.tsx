import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Car,
  Award,
  Zap,
  Gauge,
  SlidersHorizontal,
  Layers,
  Info,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  Disc,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Wrench,
  Percent,
  Check,
  Flame,
  AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'คู่มือการเลือกซื้อยาง (EV Tyres) และสตรัทปรับเกลียว (Coilovers) สำหรับรถ EV: สเปก, ค่าสปริงเรท, โหลดอินเด็กซ์ และการเลือกใช้งาน | EVSELECT',
  description: 'เจาะลึกคู่มือการเลือกยางและสตรัทปรับเกลียวสำหรับรถยนต์ไฟฟ้า: มาตรฐาน HL & XL Load Index, ชั้นโฟมซับเสียงลดเสียงหอน, ค่า UTQG & Rolling Resistance, หลักการคำนวณสปริงเรทและอัตราทดช่วงล่าง Motion Ratio, สปริง Linear vs Progressive, โช้ค 1-Way / 2-Way / 3-Way และระยะความสูงปลอดภัยสำหรับแบตเตอรี่',
  keywords: [
    'ยางรถ EV',
    'เลือกยางรถยนต์ไฟฟ้า',
    'EV Tyres HL Load Index',
    'โฟมซับเสียงยาง EV',
    'สตรัทปรับเกลียว EV',
    'Coilovers รถยนต์ไฟฟ้า',
    'คำนวณสปริงเรท EV',
    'Linear vs Progressive Spring',
    'KW Suspension EV',
    'Michelin Pilot Sport EV',
    'Hankook iON evo'
  ],
  openGraph: {
    title: 'คู่มือการเลือกซื้อยาง (EV Tyres) และสตรัทปรับเกลียว (Coilovers) สำหรับรถ EV | EVSELECT Expert Guide',
    description: 'คู่มือฉบับสมบูรณ์สำหรับเจ้าของรถ EV: โหลดอินเด็กซ์ HL/XL, โฟมซับเสียง, หลักการเลือกค่าสปริงเรท, สปริง Linear vs Progressive, โช้ค 1-Way/2-Way/3-Way และตารางเปรียบเทียบแบรนด์ชั้นนำ',
    url: 'https://evselects.com/articles/ev-tyre-and-coilover-selection-guide',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 675,
        alt: 'คู่มือการเลือกยางและสตรัทปรับเกลียวสำหรับรถยนต์ไฟฟ้า EVSELECT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'คู่มือเลือกซื้อยางและสตรัทปรับเกลียวสำหรับรถ EV | EVSELECT',
    description: 'เจาะลึกสเปกยาง HL/XL โฟมซับเสียง หลักการเลือกค่าสปริงเรท และการเลือกโช้คอัพตรงรุ่นสำหรับรถยนต์ไฟฟ้าน้ำหนัก 2 ตัน',
    images: ['/images/hero-bg.jpg']
  }
};

export default function EVTyreAndCoiloverSelectionGuidePage() {
  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white font-sans">
      {/* 1. Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lime-600 transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>กลับไปหน้ารวมบทความและคู่มือเทคนิค EV</span>
        </Link>
      </nav>

      {/* 2. Article Header & Metadata Badges */}
      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
            <span className="bg-lime-50 text-lime-800 border border-lime-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-lime-600" />
              คู่มืออุปกรณ์และชิ้นส่วนสมรรถนะ (Component Selection Guide)
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
              ยาง EV &amp; สตรัทปรับเกลียว
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 27 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 14 นาที
            </span>
          </div>

          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">EVSELECT Technical Level</span>
            <span className="text-sm font-black text-lime-700">Expert / Comprehensive</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          คู่มือการเลือกซื้อยาง (EV Tyres) และสตรัทปรับเกลียว (Coilovers) สำหรับรถ EV: สเปก, ค่าสปริงเรท, โหลดอินเด็กซ์ และการเลือกใช้งาน
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          คู่มือวิศวกรรมฉบับสมบูรณ์สำหรับเจ้าของรถยนต์ไฟฟ้า: ทำความเข้าใจมาตรฐานดัชนีรับน้ำหนัก <strong>HL (High Load) &amp; XL (Extra Load)</strong>, ชั้นโฟมซับเสียงลดเสียงก้องในห้องโดยสาร (Acoustic Foam), ค่าความต้านทานการหมุน (Rolling Resistance) เทียบกับระยะวิ่ง WLTP, หลักการเลือกสปริงเรทและอัตราทดช่วงล่าง (Motion Ratio), ข้อแตกต่างระหว่างสปริง <strong>Linear vs Progressive</strong>, การเลือกโช้คอัพ 1-Way, 2-Way, 3-Way และขีดจำกัดความสูงปลอดภัยสำหรับแบตเตอรี่ใต้ท้องรถ
        </p>
        <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group relative w-full aspect-[16/9] bg-slate-100">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/28/Audi_Wheel_with_Michelin_Pilot_Sport_All_Season_4_Tire.jpg"
            alt="ภาพประกอบล้อและยาง Michelin Pilot Sport สำหรับรถ EV"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </figure>
  
      </header>

      {/* 3. Executive Verdict & Core Decision Matrix Card */}
      <div className="bg-slate-900 text-white border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-400" /> Executive Buyer Summary
            </div>
            <div className="text-3xl font-black text-lime-400 flex items-baseline gap-2">
              สรุปย่อ <span className="text-sm font-normal text-slate-400">สำหรับผู้ซื้อของแต่ง EV</span>
            </div>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              &quot;ห้ามใช้ยาง Standard Load (SL) กับรถ EV เด็ดขาด ให้เลือกสเปก XL หรือ HL ที่มีชั้นโฟมซับเสียง และเลือกสตรัทปรับเกลียวที่คำนวณ Spring Rate ตรงตามน้ำหนัก Corner Weight ของแบตเตอรี่ พร้อมรักษาระยะความสูงปลอดภัยไม่ต่ำกว่า 135 มม.&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-lime-500/10 text-lime-400 rounded-xl shrink-0 mt-0.5">
                <Disc className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">เกณฑ์การเลือกยาง EV</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  ต้องมีดัชนีรับน้ำหนัก HL หรือ XL, มี Acoustic Foam ซับเสียงยางหอน 180-220Hz และคอมพาวด์ซิลิกาต้านแรงบิดฉับพลัน
                </div>
              </div>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl shrink-0 mt-0.5">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">เกณฑ์การเลือกสตรัท Coilovers</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  เลือกสปริง Linear ที่คำนวณตาม Motion Ratio (MR), โช้คแบบ Monotube หรือ Twin-valve FSD ที่มีระยะยุบ Bump Travel &gt; 45mm
                </div>
              </div>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-orange-500/10 text-orange-400 rounded-xl shrink-0 mt-0.5">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">การควบคุมระยะทางวิ่ง (WLTP Range)</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  ยาง Class A Rolling Resistance ช่วยประหยัดแบตเตอรี่ได้ 5–8% เมื่อเทียบกับยางสปอร์ต Treadwear ต่ำทั่วไป
                </div>
              </div>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">ระยะความสูงปลอดภัยใต้ท้องรถ</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  ความสูงจากพื้นถึงกล่องแบตเตอรี่ต้องเหลือไม่น้อยกว่า 135–150 มม. เพื่อป้องกันความเสียหายจากเนินลูกระนาดและเศษหิน
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Section 1: มาตรฐานยางรถยนต์ไฟฟ้า (EV Tyre Selection Criteria) */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            1. ศาสตร์แห่งยางรถ EV: ทำไมยางทั่วไปถึงรับน้ำหนักและแรงบิดรถไฟฟ้าไม่ไหว?
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          รถยนต์ไฟฟ้าสร้างความท้าทายอย่างรุนแรงต่อยางรถยนต์มากกว่ารถสันดาปถึง 3 ประการ: <strong>1) น้ำหนักตัวถังที่มากกว่าปกติ 300–600 กก.</strong>, <strong>2) แรงบิดมหาศาล (Instant Torque 400 - 800+ Nm)</strong> ที่ถ่ายทอดลงสู่หน้ายางทันทีตั้งแต่ 0 RPM และ <strong>3) เสียงห้องโดยสารที่เงียบสนิท</strong> ไร้เสียงเครื่องยนต์บดบังเสียงยางบดถนน (Road &amp; Tyre Cavity Noise)
        </p>

        {/* Load Index Sub-Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 my-6">
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-lime-600" />
            1.1 ดัชนีการรับน้ำหนัก: SL (Standard) vs XL (Extra Load) vs HL (High Load)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            ยางรถยนต์มาตรฐานถูกแบ่งตามระดับความสามารถในการรับแรงดันลมยางและน้ำหนักบรรทุกสูงสุด (Load Capacity at Maximum Inflation Pressure):
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3.5 font-bold">ประเภทมาตรฐานยาง (Tyre Rating)</th>
                  <th className="p-3.5 font-bold">แรงดันลมยางอ้างอิง (Reference Pressure)</th>
                  <th className="p-3.5 font-bold">ความสามารถในการรับน้ำหนัก (Load Capacity)</th>
                  <th className="p-3.5 font-bold">ความเหมาะสมกับรถ EV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">
                    SL (Standard Load)<br />
                    <span className="text-xs text-slate-400 font-normal">เช่น สเปก 98V SL</span>
                  </td>
                  <td className="p-3.5 font-mono">36 psi (2.5 bar)</td>
                  <td className="p-3.5">สูงสุด 750 กก. ต่อเส้น (3,000 กก./คัน)</td>
                  <td className="p-3.5 text-rose-600 font-semibold">
                    ❌ ไม่แนะนำสำหรับ EV น้ำหนักมาก (แก้มยางให้ตัวเกินไป เสี่ยงระเบิดเมื่อตกหลุม)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">
                    XL (Extra Load / Reinforced)<br />
                    <span className="text-xs text-blue-600 font-normal">เช่น สเปก 102Y XL</span>
                  </td>
                  <td className="p-3.5 font-mono">42 psi (2.9 bar)</td>
                  <td className="p-3.5">สูงสุด 850 กก. ต่อเส้น (+13% vs SL)</td>
                  <td className="p-3.5 text-blue-900 font-semibold bg-blue-50/30">
                    ✅ มาตรฐานขั้นต่ำสำหรับ EV ทั่วไป (BYD Atto 3, MG4, Model 3 RWD)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">
                    HL (High Load Capacity)<br />
                    <span className="text-xs text-lime-700 font-bold">เช่น สเปก 105Y HL</span>
                  </td>
                  <td className="p-3.5 font-mono">42 – 44 psi (2.9 – 3.0 bar)</td>
                  <td className="p-3.5 font-bold text-slate-900">สูงสุด 925 กก. ต่อเส้น (+23% vs SL)</td>
                  <td className="p-3.5 text-emerald-800 font-bold bg-emerald-50/50">
                    🏆 มาตรฐานใหม่สำหรับ EV ขนาดใหญ่ &amp; แบตหนา (Model Y, Seal AWD, Zeekr 009)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Acoustic Foam & Noise Attenuation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Volume2 className="w-5 h-5" />
              </div>
              <span>1.2 ชั้นโฟมซับเสียงลดเสียงหอน (Acoustic Foam)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              เมื่อรถวิ่งบนถนนเรียบ ลมภายในโพรงยางจะสั่นสะเทือนเกิดเสียงก้องกังวาน (Cavity Resonance) ที่ความถี่ <strong>180 – 220 Hz</strong> ยางสเปก EV จะบุแผ่นโฟมโพลียูรีเทนดูดซับเสียง (เช่น <em>Michelin Acoustic, Continental ContiSilent, Hankook SoundComfort, Pirelli PNCS</em>) ซึ่งช่วยลดระดับเสียงในห้องโดยสารลงได้ถึง <strong>3 – 5 dB(A)</strong> อย่างเห็นผล
            </p>
            <div className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
              💡 <strong>ข้อควรระวังเมื่อปะยาง:</strong> หากโดนตะปูตำ ต้องแจ้งช่างให้กรีดโฟมบริเวณรูรั่วออกก่อนแทงไหมหรือแปะสตรีม จากนั้นจึงทากาวยึดโฟมกลับเข้าที่
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <div className="p-2 bg-lime-50 text-lime-700 rounded-xl">
                <Gauge className="w-5 h-5" />
              </div>
              <span>1.3 UTQG Treadwear vs Rolling Resistance vs Grip</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              การเลือกยาง EV คือการบาลานซ์ระหว่าง 3 ปัจจัย:
            </p>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-4">
              <li>
                <strong>Rolling Resistance (แรงต้านทานการหมุน):</strong> ยางเกรด EU Label Class A ประหยัดพลังงาน ช่วยเพิ่มระยะวิ่งได้ <strong>5 – 8%</strong> (ประมาณ 25–40 กม. ต่อการชาร์จ)
              </li>
              <li>
                <strong>Treadwear Rating:</strong> ยางทั่วไป Treadwear 240-300 อาจสึกหรอหมดดอกใน 20,000 กม. เมื่อเจอน้ำหนัก 2 ตัน ยาง EV แท้จะใช้คอมพาวด์ High-Structure Silica ให้ Treadwear 340–440
              </li>
              <li>
                <strong>Wet Braking Grip:</strong> ต้องเลือกยางที่ได้คะแนน Wet Grip Class A เพื่อระยะเบรกที่สั้นและปลอดภัยเมื่อหยุดรถน้ำหนักมาก
              </li>
            </ul>
          </div>
        </div>
      
        {/* Recommended EV Tyres Table */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 my-8 shadow-xs">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-lg mb-4">
            <span className="p-2 bg-lime-50 text-lime-700 rounded-xl">
              <Award className="w-5 h-5" />
            </span>
            ตารางแนะนำยางสำหรับรถ EV (EVSELECT Recommended)
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 font-bold">แบรนด์ / รุ่น</th>
                  <th className="p-4 font-bold">จุดเด่น</th>
                  <th className="p-4 font-bold">เหมาะสำหรับ</th>
                  <th className="p-4 font-bold">ระดับราคา</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Michelin Pilot Sport EV</td>
                  <td className="p-4">เทคโนโลยี Acoustic Foam, เนื้อยาง ElectricGrip Compound, ประหยัดไฟขึ้น 60km</td>
                  <td className="p-4">รถ EV สมรรถนะสูง (Tesla Model 3/Y Long Range/Performance, BYD Seal AWD)</td>
                  <td className="p-4 text-slate-500">฿฿฿฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Hankook iON evo</td>
                  <td className="p-4">iON Sound Absorber, EVolution Compound, ลดเสียงรบกวนได้ดีเยี่ยม</td>
                  <td className="p-4">รถ EV ที่เน้นความเงียบและนุ่มนวล (Tesla Model 3 Highland, Zeekr X)</td>
                  <td className="p-4 text-slate-500">฿฿฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Pirelli P Zero Elect</td>
                  <td className="p-4">PNCS (Pirelli Noise Cancelling System), โครงสร้างเสริมความแข็งแกร่ง (HL)</td>
                  <td className="p-4">รถ EV ขนาดใหญ่/หนักมาก (Zeekr 009, รถตู้ไฟฟ้า)</td>
                  <td className="p-4 text-slate-500">฿฿฿฿฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Bridgestone Turanza EV</td>
                  <td className="p-4">ENLITEN Technology, อายุการใช้งานยาวนาน (Treadwear สูง)</td>
                  <td className="p-4">การใช้งานทั่วไปในเมือง เน้นความทนทาน (BYD Atto 3, MG4)</td>
                  <td className="p-4 text-slate-500">฿฿฿</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</section>

      {/* 5. Section 2: Custom Inline React SVG Diagram (Curves & Load Index) */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            2. ไดอะแกรมวิศวกรรม: กราฟสปริง Linear vs Progressive และดัชนี Load Index
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ภาพเปรียบเทียบคุณสมบัติเชิงฟิสิกส์ระหว่างเส้นโค้งแรงสปริง (Spring Force Curve) และความสามารถในการรับน้ำหนักตามระดับแรงดันลมยางของยางแต่ละมาตรฐาน:
        </p>

        {/* SVG Container */}
        <div className="bg-slate-950 p-4 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl my-8 overflow-hidden text-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                Technical Plots: Spring Force Mechanics &amp; Tyre Load Capacity
              </span>
            </div>
            <span className="text-[11px] text-slate-400">วิเคราะห์ตามหลักการ OptimumG &amp; ETRTO Standards</span>
          </div>

          {/* Inline Responsive SVG */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 920 440"
              className="w-full min-w-[760px] h-auto font-sans"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="diagGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1e293b" strokeWidth="0.6" />
                </pattern>
                <linearGradient id="linearLineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="progLineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a3e635" />
                  <stop offset="100%" stopColor="#65a30d" />
                </linearGradient>
              </defs>

              <rect width="920" height="440" fill="#090d16" />
              <rect width="920" height="440" fill="url(#diagGrid)" />

              {/* PART 1: Spring Rate Force vs Deflection (Left Graph) */}
              <g transform="translate(40, 40)">
                <text x="0" y="0" fill="#f8fafc" fontSize="14" fontWeight="bold">
                  กราฟ 1: ความสัมพันธ์แรงสปริงเทียบกับระยะยุบ (Force vs Deflection)
                </text>
                <text x="0" y="18" fill="#94a3b8" fontSize="10">
                  เปรียบเทียบพฤติกรรมสปริงขดตรง (Linear) ที่ยุบตัวสม่ำเสมอ vs สปริงสองสเต็ป (Progressive &amp; Tender Spring)
                </text>

                {/* Graph Axes */}
                <line x1="40" y1="280" x2="380" y2="280" stroke="#64748b" strokeWidth="1.5" />
                <line x1="40" y1="50" x2="40" y2="280" stroke="#64748b" strokeWidth="1.5" />

                {/* Axis Labels */}
                <text x="380" y="295" fill="#94a3b8" fontSize="9" textAnchor="end">ระยะยุบ (Travel / mm) &gt;&gt;</text>
                <text x="35" y="45" fill="#94a3b8" fontSize="9" textAnchor="end">แรงต้านสปริง (Force / N) ^</text>

                {/* Grid lines inside graph */}
                <line x1="40" y1="200" x2="360" y2="200" stroke="#334155" strokeDasharray="3 3" />
                <line x1="40" y1="120" x2="360" y2="120" stroke="#334155" strokeDasharray="3 3" />
                <line x1="200" y1="50" x2="200" y2="280" stroke="#334155" strokeDasharray="3 3" />

                {/* Linear Spring Line (Straight Cyan) */}
                <line x1="40" y1="280" x2="340" y2="80" stroke="#38bdf8" strokeWidth="3" />
                <circle cx="340" cy="80" r="4" fill="#38bdf8" />
                <text x="345" y="78" fill="#38bdf8" fontSize="10" fontWeight="bold">Linear Spring (k คงที่)</text>

                {/* Progressive Spring Curve (Curved Lime) */}
                <path
                  d="M 40 280 Q 180 260 220 190 T 340 55"
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="3.5"
                />
                <circle cx="340" cy="55" r="4" fill="#a3e635" />
                <text x="345" y="55" fill="#a3e635" fontSize="10" fontWeight="bold">Progressive Spring</text>

                {/* Tender Spring Transition Callout */}
                <circle cx="220" cy="190" r="5" fill="#f59e0b" />
                <line x1="220" y1="190" x2="260" y2="230" stroke="#f59e0b" strokeWidth="1.2" />
                <rect x="260" y="220" width="130" height="34" rx="5" fill="#1e293b" stroke="#f59e0b" />
                <text x="265" y="234" fill="#fef3c7" fontSize="8" fontWeight="bold">Tender Spring Lockout</text>
                <text x="265" y="247" fill="#cbd5e1" fontSize="7.5">(สปริงตัวแรกยุบสุดแล้ว)</text>

                {/* Legend Box Left */}
                <rect x="50" y="60" width="150" height="50" rx="6" fill="#0f172a" stroke="#334155" />
                <circle cx="62" cy="75" r="4" fill="#38bdf8" />
                <text x="72" y="78" fill="#e2e8f0" fontSize="9">Linear: จูนโช้คง่าย แน่น แม่นยำ</text>
                <circle cx="62" cy="95" r="4" fill="#a3e635" />
                <text x="72" y="98" fill="#e2e8f0" fontSize="9">Progressive: นุ่มต้น แข็งปลาย</text>
              </g>

              {/* PART 2: Tyre Load Capacity vs Inflation Pressure (Right Graph) */}
              <g transform="translate(480, 40)">
                <text x="0" y="0" fill="#f8fafc" fontSize="14" fontWeight="bold">
                  กราฟ 2: พิกัดการรับน้ำหนักยาง (Load vs Inflation Pressure)
                </text>
                <text x="0" y="18" fill="#94a3b8" fontSize="10">
                  เปรียบเทียบมาตรฐาน SL (Standard) vs XL (Extra Load) vs HL (High Load)
                </text>

                {/* Graph Axes */}
                <line x1="40" y1="280" x2="380" y2="280" stroke="#64748b" strokeWidth="1.5" />
                <line x1="40" y1="50" x2="40" y2="280" stroke="#64748b" strokeWidth="1.5" />

                {/* Axis Labels */}
                <text x="380" y="295" fill="#94a3b8" fontSize="9" textAnchor="end">แรงดันลมยาง (Inflation / psi) &gt;&gt;</text>
                <text x="35" y="45" fill="#94a3b8" fontSize="9" textAnchor="end">น้ำหนักรับได้ (Load / kg) ^</text>

                {/* Pressure markers on X Axis */}
                <text x="130" y="295" fill="#64748b" fontSize="9" textAnchor="middle">32 psi</text>
                <text x="210" y="295" fill="#64748b" fontSize="9" textAnchor="middle">36 psi (SL Max)</text>
                <text x="300" y="295" fill="#64748b" fontSize="9" textAnchor="middle">42 psi (XL Max)</text>
                <text x="360" y="295" fill="#64748b" fontSize="9" textAnchor="middle">44 psi (HL)</text>

                {/* Curves */}
                {/* SL Curve (Red/Grey) */}
                <path d="M 40 250 Q 130 200 210 170 T 360 170" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="4 2" />
                <circle cx="210" cy="170" r="4" fill="#94a3b8" />
                <text x="215" y="165" fill="#cbd5e1" fontSize="9">SL Max (750 kg)</text>

                {/* XL Curve (Blue) */}
                <path d="M 40 240 Q 200 160 300 115 T 360 115" fill="none" stroke="#60a5fa" strokeWidth="3" />
                <circle cx="300" cy="115" r="4" fill="#60a5fa" />
                <text x="305" y="110" fill="#93c5fd" fontSize="9" fontWeight="bold">XL Max (850 kg)</text>

                {/* HL Curve (Lime Green) */}
                <path d="M 40 225 Q 220 130 360 65" fill="none" stroke="#a3e635" strokeWidth="3.5" />
                <circle cx="360" cy="65" r="5" fill="#a3e635" />
                <text x="320" y="55" fill="#a3e635" fontSize="10" fontWeight="black">HL Max (925 kg) ⚡</text>

                {/* Safety Boundary Callout */}
                <rect x="50" y="70" width="160" height="60" rx="6" fill="#0f172a" stroke="#334155" />
                <text x="60" y="88" fill="#a3e635" fontSize="9" fontWeight="bold">ข้อแนะนำสำหรับ EV หนัก 2 ตัน:</text>
                <text x="60" y="103" fill="#cbd5e1" fontSize="8">เติมลมยาง 38 – 42 psi สม่ำเสมอ</text>
                <text x="60" y="118" fill="#fca5a5" fontSize="8">ลมยางอ่อนต่ำกว่า 32 psi = หน้ายางพังไว</text>
              </g>

              {/* Bottom Info Banner inside SVG */}
              <g transform="translate(40, 370)">
                <rect x="0" y="0" width="840" height="46" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="15" y="20" fill="#a3e635" fontSize="10" fontWeight="bold">
                  💡 วิศวกรรมจับคู่ยางและสปริง:
                </text>
                <text x="15" y="36" fill="#cbd5e1" fontSize="9.5">
                  การใช้สปริง Linear ร่วมกับโช้ควาล์วไดเกรสซีฟและยาง HL/XL เติมลม 40 psi ช่วยให้หน้าสัมผัสยาง (Contact Patch) เรียบสนิทกับถนนไทย กระจายแรงดันสม่ำเสมอ ยืดอายุการใช้งานดอกยางได้เกิน 45,000 กม.
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* 6. Section 3: การคำนวณสปริงเรท & โครงสร้าง Coilovers */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            3. สตรัทปรับเกลียว (Coilovers): การเลือกค่า Spring Rate และอัตราทด Motion Ratio
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ตามหลักวิศวกรรมช่วงล่าง ค่าความแข็งของสปริงที่ระบุไว้บนตัวกระบอก (เช่น 8 kgf/mm) ไม่ใช่ความแข็งจริงที่ดุมล้อได้รับ เพราะตำแหน่งจุดยึดสปริงบนปีกนกมี <strong>อัตราทดคานช่วงล่าง (Motion Ratio)</strong> และมุมเอียงในการติดตั้งเข้ามาเป็นตัวแปรสำคัญ:
        </p>

        {/* Math Calculation Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl my-6">
          <div className="text-xs uppercase font-extrabold text-lime-400 mb-2 flex items-center gap-2">
            <Wrench className="w-4 h-4" /> วิศวกรรมช่วงล่าง: แรงกดจริงที่ดุมล้อและความถี่การยุบตัว
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs sm:text-sm space-y-2.5 text-slate-200">
              <div>
                <strong className="text-lime-400 block">• อัตราทดคานปีกนก (Motion Ratio):</strong>
                เนื่องจากสปริงไม่ได้วางอยู่บนดุมล้อโดยตรง แต่อยู่บนก้านปีกนก จึงเกิดผลกระทบจาก &apos;คานงัด&apos; ทำให้ความแข็งที่ล้อได้รับจริงจะลดลงเสมอ
              </div>
              <div>
                <strong className="text-lime-400 block">• ความถี่การเต้นของตัวถัง:</strong>
                ขึ้นอยู่กับความแข็งจริงที่ดุมล้อเทียบกับ <strong>น้ำหนักกดในแต่ละมุมล้อ (แทนด้วยตัวแปร m)</strong>
              </div>
              <div>
                <strong className="text-lime-400 block">• การคำนวณสำหรับรถ EV:</strong>
                เพราะรถยนต์ไฟฟ้ามีน้ำหนักตัวรถ (m) มาก จึงต้องเลือกสปริงที่ชดเชยแรงคานงัดของปีกนก เพื่อป้องกันไม่ให้ช่วงล่างยุบยันกระแทก
              </div>
            </div>

            <div className="text-xs text-slate-300 space-y-2">
              <div><strong>ตัวอย่างการคำนวณจริงสำหรับ BYD Seal AWD (น้ำหนักรวม 2,185 กก.):</strong></div>
              <div>• น้ำหนักกดเฉลี่ยที่มุมล้อหลัง (แทนด้วยตัวแปร m) = ประมาณ 550 กก.</div>
              <div>• อัตราทดปีกนกหลัง Multi-link อยู่ที่ประมาณ 0.82 โดยมีมุมเอียงเล็กน้อย 5 องศา</div>
              <div>• ต้องการฟีลลิ่งการขับขี่สไตล์สปอร์ตแน่นหนึบสำหรับถนนไทย (ความถี่กระชับคุมง่าย)</div>
              <div className="text-lime-400 font-extrabold">
                &rarr; จะได้ค่าสปริงเรทที่เหมาะสมสำหรับสั่งผลิต = <strong>9.0 – 9.5 kgf/mm (ประมาณ 500–530 lbs/in)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 1-Way vs 2-Way vs 3-Way Damping Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
            <div className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg inline-block">
              1-Way Adjustable
            </div>
            <h4 className="font-bold text-slate-900 text-sm">ปรับรวม 1 วาล์ว (Rebound &amp; Bump)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              การหมุนปุ่มปรับเพียงจุดเดียวจะแปรผันทั้งแรงดึง (Rebound) และแรงยุบ (Bump) พร้อมกัน เหมาะสำหรับผู้เริ่มต้นใช้งานประจำวัน ปรับง่าย ไม่ซับซ้อน (เช่น <em>Tein Street Advance Z, BC Racing BR</em>)
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
            <div className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg inline-block">
              2-Way Adjustable
            </div>
            <h4 className="font-bold text-slate-900 text-sm">ปรับแยกอิสระ 2 วาล์ว (Rebound &amp; Bump)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              แยกปุ่มปรับจังหวะยืดและจังหวะยุบออกจากกันอย่างเด็ดขาด ช่วยให้สามารถเซ็ตติ้ง <strong>Low-Speed Rebound แข็ง</strong> เพื่อคุมตัวถังนิ่ง และ <strong>Low-Speed Bump นุ่ม</strong> ซับรอยต่อสะพานได้พร้อมกัน (เช่น <em>KW Variant 3 / V3 Levelling, Öhlins DFV</em>)
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-2">
            <div className="px-2.5 py-1 bg-lime-100 text-lime-800 text-xs font-bold rounded-lg inline-block">
              3-Way Adjustable
            </div>
            <h4 className="font-bold text-slate-900 text-sm">ปรับแยก 3 วาล์วพร้อมซับแทงค์ (Sub-tank)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              ปรับแยก Rebound, Low-Speed Bump และ High-Speed Bump มีกระบอกซับแทงค์ระบายความร้อน เหมาะสำหรับผู้ที่ต้องการความสมบูรณ์แบบสูงสุดหรือใช้งานในสนามแข่ง Trackday (เช่น <em>KW Clubsport 3-Way, BC Racing ER</em>)
            </p>
          </div>
        </div>
      </section>

      {/* 7. Section 4: ข้อจำกัดความสูง & Roll Center Kinematics */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            4. ข้อควรระวัง: การโหลดเตี้ยกับความปลอดภัยของชุดแบตเตอรี่และ Roll Center
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ในรถยนต์สันดาป การโหลดเตี้ยลง 30–40 มม. อาจช่วยให้รถดูสวยงามและเกาะถนนขึ้น แต่สำหรับรถยนต์ไฟฟ้า <strong>การโหลดเตี้ยมากเกินไป (Excessive Lowering) ก่อให้เกิดอันตรายร้ายแรง 2 ประการ</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-rose-50/60 border border-rose-200 p-6 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
              <span>ความเสี่ยงต่อเคสแบตเตอรี่แรงดันสูง (Battery Enclosure Hazard)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              หากโหลดเตี้ยจน Ground Clearance ต่ำกว่า <strong>120 มม.</strong> เมื่อรถตกหลุมลึกหรือขึ้นสันลูกระนาดชันในไทย โครงสร้างใต้ท้องรถจะกระแทกพื้นโดยตรง ซึ่งชุดแบตเตอรี่ Li-ion มีแผงระบายความร้อน Liquid Cooling อยู่ด้านล่าง การกระแทกอาจทำให้สารหล่อเย็นรั่วไหลหรือเกิด Thermal Runaway จนบริษัทประกันภัยปฏิเสธการเคลม
            </p>
          </div>

          <div className="bg-amber-50/60 border border-amber-200 p-6 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>กับดักเรขาคณิต Roll Center (Roll Moment Arm Trap)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              เมื่อโหลดเตี้ยโดยไม่แก้จุดยึดปีกนก ปีกนกตัวล่างจะชี้ขึ้นฟ้า ส่งผลให้จุดศูนย์กลางการโคลง (Roll Center) ทรุดตัวต่ำลงเร็วกว่าจุดศูนย์ถ่วงของตัวรถ ทำให้ <strong>ระยะห่างระหว่างจุดศูนย์ถ่วงกับจุดหมุนกว้างขึ้น (แขนคานงัดยาวขึ้น)</strong> รถจะเอียงโคลงตัวในโค้งมากกว่าเดิม ทั้งที่รถเตี้ยลง!
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm text-emerald-900 font-medium">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span><strong>กฎเหล็กความสูง EVSELECT:</strong> โหลดลงได้สูงสุดไม่เกิน <strong>15 – 25 มม.</strong> จากสแตนดาร์ดโรงงาน และต้องรักษาระยะ Ground Clearance รวมไม่ต่ำกว่า 135–140 มม. เสมอ</span>
        </div>
      </section>

      {/* 8. Section 5: Step-by-Step Buyer Decision Matrix */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            5. Decision Matrix: เลือกรุ่นยางและสตรัทตามลักษณะการใช้งานจริง
          </h2>
        </div>

        {/* Decision Table */}
        <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-2xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-3.5 font-bold">สไตล์การขับขี่ (Driver Persona)</th>
                <th className="p-3.5 font-bold">รุ่นยางแนะนำ (Recommended EV Tyres)</th>
                <th className="p-3.5 font-bold">ชุดสตรัทโช้คอัพแนะนำ (Coilovers Spec)</th>
                <th className="p-3.5 font-bold">ผลลัพธ์และความคุ้มค่า</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">
                  1. ขับในเมือง + เน้นครอบครัว นุ่ม เงียบ ไม่เมารถ<br />
                  <span className="text-xs text-slate-400 font-normal">(Daily Comfort &amp; Executive)</span>
                </td>
                <td className="p-3.5 text-xs text-slate-700">
                  • Michelin e-Primacy (Acoustic)<br />
                  • Hankook iON evo SUV (SoundComfort)<br />
                  • Continental eContact
                </td>
                <td className="p-3.5 text-xs text-slate-700">
                  • <strong>KW V3 Levelling</strong> (เน้นความนุ่ม ไม่โหลด)<br />
                  • <strong>Tein EnduraPro Plus</strong> (โช้คกระบอกเดิมปรับ 16 ระดับ)<br />
                  • สปริง Comfort Progressive
                </td>
                <td className="p-3.5 text-xs text-emerald-800 font-medium">
                  เก็บเสียงเงียบสนิท ซับรอยต่อถนนคอนกรีตเนียนกริบ ผู้โดยสารแถวหลังนั่งสบายไม่เมารถ
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">
                  2. วิ่งทางไกลข้ามจังหวัด มอเตอร์เวย์ รูดคอสะพาน<br />
                  <span className="text-xs text-slate-400 font-normal">(Highway Cruiser &amp; Fast Touring)</span>
                </td>
                <td className="p-3.5 text-xs text-slate-700">
                  • Michelin Pilot Sport EV (HL Spec)<br />
                  • Continental PremiumContact 7 (EV-c)<br />
                  • Bridgestone Turanza 6 EV
                </td>
                <td className="p-3.5 text-xs text-slate-700">
                  • <strong>Öhlins Road &amp; Track (DFV)</strong><br />
                  • <strong>Bilstein EVO S / B16</strong><br />
                  • <strong>KW Variant 3 (V3)</strong>
                </td>
                <td className="p-3.5 text-xs text-blue-900 font-medium">
                  รถนิ่งสนิทที่ 120-140 กม./ชม. ท้ายไม่ดีดหลังลงคอสะพาน ทรงตัวมั่นใจแม้เจอลมปะทะ
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">
                  3. สายซิ่ง มุดเร็ว เข้าโค้งหนัก ขับสนุกเต็มสมรรถนะ<br />
                  <span className="text-xs text-slate-400 font-normal">(Spirited Driving &amp; Trackday)</span>
                </td>
                <td className="p-3.5 text-xs text-slate-700">
                  • Michelin Pilot Sport 4S / PS5 (XL)<br />
                  • Pirelli P Zero Elect (HL Rating)<br />
                  • Hankook Ventus S1 evo3 EV
                </td>
                <td className="p-3.5 text-xs text-slate-700">
                  • <strong>KW Clubsport 2-Way / 3-Way</strong><br />
                  • <strong>BC Racing ER Series</strong> (Sub-tank)<br />
                  • สปริง Linear 10–12 kgf/mm พร้อมสปริง Helper
                </td>
                <td className="p-3.5 text-xs text-rose-900 font-medium">
                  พวงมาลัยคมกริบ อาการ Body Roll เป็นศูนย์ ถ่ายน้ำหนักฉับไว รองรับแรงม้า 500+ hp
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Section 6: Fitment Checklist & Maintenance */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            6. 10 ข้อเช็คลิสต์ก่อนรับรถออกจากศูนย์บริการช่วงล่าง EVSELECT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 text-xs sm:text-sm">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>1. เช็คสเปกยางว่ามีตัวอักษร <strong>XL</strong> หรือ <strong>HL</strong> ตรงตามสมุดคู่มือรถ</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>2. ตรวจสอบว่าแผ่นโฟมซับเสียงภายในยางแนบสนิท ไม่หลุดร่อน</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>3. วัดค่าความสูงสี่มุม (Hub-to-Fender) ต้องสมมาตรซ้าย-ขวา คลาดเคลื่อนไม่เกิน 2 มม.</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>4. ตรวจเช็คระยะห่างระหว่างยางกับซุ้มล้อและสตรัทโช้คขณะหักเลี้ยวสุด (Clearance &gt; 15mm)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>5. ขันปอนด์น็อตล้อและน็อตยึดปีกนกตามมาตรฐานแรงบิดผู้ผลิต (Torque Spec)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>6. ตรวจสอบระยะ Free Bump Travel ก่อนชนยางกันกระแทก ต้องเหลือไม่น้อยกว่า 45 มม.</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>7. ชั่งน้ำหนักบาลานซ์มุมล้อ (Corner Weight Balancing) ให้น้ำหนักทแยง (Cross Weight) ใกล้เคียง 50.0%</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>8. ขับรันอินช่วงล่าง 300–500 กม. ให้สปริงเซ็ตตัว แล้วนำรถกลับมาตั้งศูนย์ล้อ 3D ซ้ำอีกครั้ง</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>9. ปรับรีเซ็ตเซนเซอร์ลมยาง TPMS และทำการ Re-learn ตำแหน่งล้อ</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
            <span>10. ตรวจเช็คสายไฟแรงดันสูงใต้ท้องรถและสายเซนเซอร์เบรก ABS ว่าเก็บเรียบร้อยปลอดภัย</span>
          </div>
        </div>
      </section>

      {/* 10. Cross-Sell Banner & Related Articles */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/20 border border-lime-500/40 text-lime-400 text-xs font-bold rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> EVSELECT Suspension Engineering
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              อ่านต่อ: สูตรเซ็ตติ้งช่วงล่างรับมือถนนเมืองไทย คอสะพาน และน้ำท่วมขัง
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              เจาะลึกวิธีการเซ็ตอัปวาล์วโช้คไดเกรสซีฟและรักษาระยะ Bump Travel สำหรับ BYD Seal, Model Y, MG4, Deepal S07 และ Zeekr X
            </p>
          </div>

          <Link
            href="/articles/optimizing-ev-suspension-thai-roads"
            className="px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-black text-sm rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 group"
          >
            <span>อ่านบทความ: เซ็ตช่วงล่างถนนไทย</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 11. Article Footer Navigation */}
      <footer className="border-t border-slate-200 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-lime-600 font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          กลับสู่หน้ารวมบทความ EVSELECT
        </Link>
        <span>© 2026 EVSELECT. สงวนลิขสิทธิ์บทความวิชาการเชิงวิศวกรรมยานยนต์</span>
      </footer>
    </article>
  );
}
