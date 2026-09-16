import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Sparkles,
  Award,
  Zap,
  CheckCircle2,
  TrendingUp,
  Compass,
  ChevronRight,
  Flame,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'แรงม้า vs แรงบิด ในมอเตอร์ไฟฟ้า: ทำไม EV ถึงออกตัวเร็วกว่า แต่ปลายเหี่ยว? เจาะลึกกราฟไดโน่และเกียร์ทดเดี่ยว | EVSELECT',
  description: 'เจาะลึกฟิสิกส์มอเตอร์ไฟฟ้า PMSM และ Induction: อธิบายกราฟ Constant Torque ตั้งแต่ 0 RPM, โซน Constant Power, ปรากฏการณ์ Back-EMF, หลักการถ่ายทอดแรงขับที่ล้อ และเปรียบเทียบเกียร์ 2 สปีดใน Taycan กับเกียร์ทดเดี่ยวใน Tesla และ BYD Seal',
  keywords: [
    'แรงม้า vs แรงบิด รถ EV',
    'ทำไมรถ EV ปลายเหี่ยว',
    'กราฟไดโน่มอเตอร์ไฟฟ้า',
    'Single speed reduction gear EV',
    'Back EMF มอเตอร์ไฟฟ้า',
    'Field Weakening EV',
    'Porsche Taycan 2-speed gearbox',
    'อัตราทดเกียร์รถยนต์ไฟฟ้า',
    'กำลังมอเตอร์ไฟฟ้า PMSM',
    'EVSELECT Powertrain'
  ],
  openGraph: {
    title: 'แรงม้า vs แรงบิด ในมอเตอร์ไฟฟ้า: ทำไม EV ถึงออกตัวเร็วกว่า แต่ปลายเหี่ยว? | EVSELECT',
    description: 'เจาะลึกฟิสิกส์มอเตอร์ไฟฟ้า: กราฟไดโน่ 0 RPM, ปรากฏการณ์ Back-EMF, หลักการถ่ายทอดแรงฉุดที่ล้อ และระบบเกียร์ทดเดี่ยว',
    url: 'https://evselects.com/articles/ev-horsepower-vs-torque-explained',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'แรงม้า vs แรงบิด ในมอเตอร์ไฟฟ้า EVSELECT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'แรงม้า vs แรงบิด ในมอเตอร์ไฟฟ้า | EVSELECT Powertrain & Dynamics',
    description: 'ไขความลับทำไม EV ออกตัวหลังติดเบาะ แต่ความเร็วปลายเริ่มแผ่ว: กราฟไดโน่, Back-EMF และเกียร์ทดเดี่ยว',
    images: ['/images/hero-bg.jpg']
  }
};

export default function EVHorsepowerVsTorquePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* 1. Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lime-600 transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-slate-400 group-hover:text-lime-600" />
          <span>กลับไปหน้ารวมบทความและคู่มือ EV</span>
        </Link>
      </nav>

      {/* 2. Article Header & Metadata Badges */}
      <header className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
            <span className="bg-lime-50 text-lime-700 border border-lime-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-lime-600" />
              ระบบขับเคลื่อน &amp; มอเตอร์ไฟฟ้า
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
              Racecar Engineering &amp; Dyno Physics
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 27 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 9 นาที
            </span>
          </div>

          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">ระดับการวิเคราะห์</span>
            <span className="text-sm font-black text-lime-700">MOTOR DYNO PHYSICS</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          แรงม้า vs แรงบิด ในมอเตอร์ไฟฟ้า: ทำไม EV ถึงออกตัวเร็วกว่า แต่ปลายเหี่ยว? เจาะลึกกราฟไดโน่และเกียร์ทดเดี่ยว
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          ไขข้อข้องใจอันดับหนึ่งของคนรักความเร็ว: เหตุใดรถยนต์ไฟฟ้าที่มีแรงม้า 500+ ตัว ถึงกระชากออกตัว 0-100 ได้เร็วกว่าซูเปอร์คาร์ แต่พอวิ่งแตะ 160 – 200 กม./ชม. อัตราเร่งกลับเริ่มแผ่วลง? วิเคราะห์ลึกถึง <strong>กราฟไดโน่มอเตอร์ไฟฟ้า 3 ช่วง</strong>, ปรากฏการณ์ <strong>Back-EMF</strong>, การฉีดกระแส <strong>Field Weakening</strong>, และฟิสิกส์ของ <strong>Single-Speed Reduction Gearbox</strong>
        </p>
      </header>

      {/* 3. Executive Verdict / Summary Box */}
      <div className="bg-slate-900 text-white border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-400" /> Powertrain Core Equation
            </div>
            <div className="text-lg sm:text-xl font-black text-lime-400 leading-tight">
              Tractive Force at Wheels
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              &quot;แรงบิดที่ปลายเพลามอเตอร์ (Motor Torque) คือสิ่งที่คุณจ่ายเงินซื้อ แต่แรงขับที่หน้ายางกดลงพื้น (Tractive Force) คือสิ่งที่คุณสัมผัสได้จริงเมื่อหลังติดเบาะ&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">แรงบิดที่ 0 RPM</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">100% Maximum</div>
              <div className="text-[10px] text-slate-400">ไม่ต้องรอรอบเหมือน ICE</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">อัตราทดเกียร์เดี่ยว (Typical)</div>
              <div className="text-base font-bold text-emerald-400 mt-0.5">8.5:1 – 10.5:1</div>
              <div className="text-[10px] text-slate-400">ทวีคูณแรงบิดเข้าสู่เพลาล้อ</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">รอบหมุนสูงสุด (Redline)</div>
              <div className="text-base font-bold text-white mt-0.5">16,000 – 22,000 RPM</div>
              <div className="text-[10px] text-slate-400">โรเตอร์แม่เหล็กถาวรหมุนจัด</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">ขีดจำกัดความเร็วปลาย</div>
              <div className="text-base font-bold text-amber-400 mt-0.5">Back-EMF Voltage</div>
              <div className="text-[10px] text-slate-400">แรงดันต้านเท่าแรงดันแบตเตอรี่</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">ประสิทธิภาพการส่งกำลัง</div>
              <div className="text-base font-bold text-white mt-0.5">&gt; 96 – 98%</div>
              <div className="text-[10px] text-slate-400">สูญเสียต่ำกว่าเกียร์คลัตช์คู่</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">ระบบเกียร์ 2 สปีด</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">Porsche Taycan</div>
              <div className="text-[10px] text-slate-400">ปลดล็อกความเร็วปลาย 260 km/h</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Hero Banner Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Electric_motor_Toyota_bZ4X_Expo_2022_CRI_4894.jpg"
          alt="มอเตอร์ไฟฟ้า EV ขุมพลังแรงม้าและแรงบิด"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            ระบบทดสอบ: PMSM Electric Motor Dyno vs ICE Twin-Turbo Powerband
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            การวิเคราะห์ทางฟิสิกส์ยานยนต์ (Applied Automotive Physics)
          </span>
        </div>
      </div>

      {/* 5. Key Takeaways Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-lime-600" /> สรุปข้อเท็จจริงสำคัญ (Dyno Fact Sheet)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> ออกตัวไวเพราะ Flat Torque
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              มอเตอร์ไฟฟ้าให้แรงบิดเต็ม 100% ตั้งแต่ 0 RPM เมื่อคูณด้วยเกียร์ทด 9:1 แรงฉุดที่ล้อจึงสูงถึง 10,000+ นิวตัน ทันที ส่งผลให้อัตราเร่ง 0-60 กม./ชม. ไวกว่ารถสันดาปทุกคัน
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" /> ปลายแผ่วเพราะ Back-EMF
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              เมื่อรอบมอเตอร์หมุนเกิน 6,000 RPM แรงดันไฟฟ้าเหนี่ยวนำย้อนกลับจะสูงขึ้นจนเท่าแรงดันแบตเตอรี่ อินเวอร์เตอร์ต้องลดสนามแม่เหล็ก (Field Weakening) แรงบิดจึงค่อยๆ ลดฮวบลงสวนทางกับความเร็วรอบหมุนของมอเตอร์ที่เพิ่มสูงขึ้น
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> เกียร์ทดเดี่ยวคือความสมดุล
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              เกียร์ทดอัตราเดียวช่วยตัดน้ำหนักชุดเกียร์ได้ 80-120 กก. ไม่มีรอยต่อการเปลี่ยนเกียร์ และมีประสิทธิภาพการส่งกำลังสูงถึง 97% เหมาะสมที่สุดสำหรับการใช้งานจริงในชีวิตประจำวัน
            </p>
          </div>
        </div>
      </div>

      {/* 6. Main Body Content */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-lime-600 prose-strong:text-slate-900 text-slate-700">

        {/* SECTION 1: PHYSICAL DEFINITIONS */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            1. นิยามทางฟิสิกส์: แรงบิด (Torque) vs แรงม้า (Horsepower)
          </h2>
          <p>
            เพื่อเข้าใจความแตกต่างระหว่างเครื่องยนต์สันดาปและมอเตอร์ไฟฟ้า เราต้องแยกแยะ 2 พารามิเตอร์พื้นฐานทางฟิสิกส์ให้ชัดเจน:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose my-8">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 bg-lime-100 px-3 py-1 rounded-full inline-block mb-3">
                แรงบิด (Torque)
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">แรงบิดหมุนที่สร้างอัตราเร่ง</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                แรงบิดวัดเป็นหน่วย <strong>นิวตัน-เมตร (Nm)</strong> คือขนาดของแรงหมุนที่มอเตอร์สร้างขึ้นได้รอบแกนหมุน เปรียบเสมือน <em>&quot;กล้ามเนื้อ&quot;</em> ที่ใช้ผลักดันน้ำหนักตัวรถ 2 ตันให้ออกตัวพุ่งทะยานจากจุดหยุดนิ่ง
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block mb-3">
                แรงม้า / กำลัง (Power)
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">อัตราการทำงานต่อหน่วยเวลา</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                กำลังของมอเตอร์วัดเป็น <strong>กิโลวัตต์ (kW)</strong> หรือเทียบเคียงเป็น <strong>แรงม้า (HP หรือ PS)</strong> เกิดจากการทำงานร่วมกันระหว่างแรงบิดกับความเร็วรอบหมุนของมอเตอร์ เป็นตัวกำหนด <em>&quot;ความสามารถในการรักษาความเร็วสูงอย่างต่อเนื่อง&quot;</em>
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-lime-400 p-6 rounded-2xl my-6 shadow-inner not-prose">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-lime-400" />
              หลักการทำงาน: กำลังและแรงม้าสัมพันธ์กับแรงบิดอย่างไร?
            </div>
            <p className="text-slate-200 text-sm leading-relaxed mb-3">
              กำลังหรือแรงม้าไม่ได้เกิดขึ้นมาเดี่ยวๆ แต่เกิดจาก <strong>แรงบิดในการหมุน</strong> ทำงานผสานกับ <strong>ความเร็วรอบหมุนของมอเตอร์</strong> ยิ่งรอบจัดและมีแรงบิดสูง กำลังขับเคลื่อนของรถก็จะยิ่งมหาศาล
            </p>
            <div className="text-slate-300 text-xs pt-3 border-t border-slate-800 leading-relaxed">
              <strong>ข้อสังเกตสำคัญ:</strong> ในช่วงที่มอเตอร์เพิ่งเริ่มหมุนที่ความเร็วรอบต่ำมากๆ ใกล้ 0 RPM แม้มอเตอร์จะปล่อยแรงบิดเต็มพิกัดทันที แต่เนื่องจากความเร็วรอบยังน้อย กำลังหรือแรงม้าที่วัดได้บนหน้าปัดจึงยังดูน้อยตามไปด้วย นี่คือเหตุผลว่าทำไมที่ความเร็ว 0-30 กม./ชม. รถ EV ถึงกระชากหลังติดเบาะอย่างน่าทึ่ง ทั้งที่หน้าปัดแสดงว่าเพิ่งใช้กำลังไปเพียง 50-80 kW เท่านั้น
            </div>
          </div>
        </section>

        {/* SECTION 2: CUSTOM SVG DYNO CURVE DIAGRAM */}
        <section className="my-12 not-prose">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-lime-700 bg-lime-100 px-3 py-1 rounded-full">
                  Dyno Technical Diagram
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-2">
                  เปรียบเทียบกราฟไดโน่: ICE Turbo Engine vs Electric PMSM Motor
                </h3>
              </div>
              <div className="text-xs text-slate-500 max-w-xs text-right">
                วิเคราะห์ 3 ช่วงกำลัง: Constant Torque, Constant Power, Field Weakening
              </div>
            </div>

            {/* Inline SVG Dyno Plot */}
            <div className="w-full bg-slate-950 rounded-2xl p-4 sm:p-6 text-white overflow-hidden relative">
              <div className="absolute top-3 left-4 text-xs font-mono text-slate-400">
                DYNO PLOT COMPARISON :: ICE GASOLINE TURBO vs ELECTRIC MOTOR (PMSM)
              </div>

              <svg
                viewBox="0 0 820 480"
                className="w-full h-auto max-h-[500px] select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="dynoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.8" />
                  </pattern>
                  <linearGradient id="evTorqueArea" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#84cc16" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#84cc16" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="evPowerArea" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <rect width="820" height="480" fill="#090d16" />
                <rect width="820" height="480" fill="url(#dynoGrid)" />

                {/* Main Dyno Plot Origin (80, 400) */}
                <g transform="translate(80, 40)">
                  {/* Y-Axis (Left: Torque Nm, Right: Power kW) */}
                  <line x1="0" y1="0" x2="0" y2="360" stroke="#475569" strokeWidth="1.5" />
                  <line x1="680" y1="0" x2="680" y2="360" stroke="#475569" strokeWidth="1.5" />
                  <line x1="0" y1="360" x2="680" y2="360" stroke="#475569" strokeWidth="1.5" />

                  {/* Y-Axis Labels (Left - Torque) */}
                  <text x="-12" y="10" fill="#84cc16" fontSize="11" fontWeight="bold" textAnchor="end">500 Nm</text>
                  <text x="-12" y="90" fill="#84cc16" fontSize="11" textAnchor="end">400 Nm</text>
                  <text x="-12" y="180" fill="#84cc16" fontSize="11" textAnchor="end">300 Nm</text>
                  <text x="-12" y="270" fill="#84cc16" fontSize="11" textAnchor="end">150 Nm</text>
                  <text x="-12" y="360" fill="#84cc16" fontSize="11" textAnchor="end">0 Nm</text>

                  {/* Y-Axis Labels (Right - Power) */}
                  <text x="692" y="10" fill="#38bdf8" fontSize="11" fontWeight="bold">350 kW (475 HP)</text>
                  <text x="692" y="90" fill="#38bdf8" fontSize="11">250 kW</text>
                  <text x="692" y="180" fill="#38bdf8" fontSize="11">150 kW</text>
                  <text x="692" y="270" fill="#38bdf8" fontSize="11">75 kW</text>
                  <text x="692" y="360" fill="#38bdf8" fontSize="11">0 kW</text>

                  {/* X-Axis Labels (Motor RPM) */}
                  <text x="0" y="380" fill="#94a3b8" fontSize="10.5" textAnchor="middle">0</text>
                  <text x="140" y="380" fill="#94a3b8" fontSize="10.5" textAnchor="middle">3,000</text>
                  <text x="260" y="380" fill="#facc15" fontSize="11" textAnchor="middle" fontWeight="bold">5,500 (Base Spd)</text>
                  <text x="420" y="380" fill="#94a3b8" fontSize="10.5" textAnchor="middle">10,000</text>
                  <text x="560" y="380" fill="#f87171" fontSize="10.5" textAnchor="middle">16,000 (Field Wk)</text>
                  <text x="660" y="380" fill="#94a3b8" fontSize="10.5" textAnchor="middle">20,000 RPM</text>

                  {/* Vertical Zone Delineations */}
                  {/* Zone 1: Constant Torque */}
                  <rect x="0" y="0" width="260" height="360" fill="#84cc16" fillOpacity="0.04" />
                  <line x1="260" y1="0" x2="260" y2="360" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="130" y="25" fill="#a3e635" fontSize="11" textAnchor="middle" fontWeight="bold">
                    โซนที่ 1: Constant Torque (กระแส Inverter สูงสุด)
                  </text>

                  {/* Zone 2: Constant Power */}
                  <rect x="260" y="0" width="300" height="360" fill="#0284c7" fillOpacity="0.04" />
                  <line x1="560" y1="0" x2="560" y2="360" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="410" y="25" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">
                    โซนที่ 2: Constant Power (Field Weakening)
                  </text>

                  {/* Zone 3: High-RPM Roll-off */}
                  <text x="615" y="25" fill="#f87171" fontSize="10" textAnchor="middle" fontWeight="bold">
                    โซน 3: Roll-off
                  </text>

                  {/* EV MOTOR TORQUE CURVE (LIME GREEN - FLAT THEN ROLL OFF) */}
                  <path
                    d="M 0 30 L 260 30 Q 380 90 480 180 T 660 300"
                    fill="none"
                    stroke="#84cc16"
                    strokeWidth="4"
                  />
                  <text x="210" y="55" fill="#a3e635" fontSize="11" fontWeight="bold">
                    EV Torque: 500 Nm คงที่ตั้งแต่ 0 RPM
                  </text>
                  <text x="510" y="230" fill="#a3e635" fontSize="10">
                    แรงบิดค่อยๆ ลดลงที่รอบสูง
                  </text>

                  {/* EV MOTOR POWER CURVE (CYAN - LINEAR RISE THEN FLAT) */}
                  <path
                    d="M 0 360 L 260 50 L 560 50 Q 620 70 660 140"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="3.5"
                  />
                  <text x="370" y="70" fill="#38bdf8" fontSize="11" fontWeight="bold">
                    EV Power: 310 kW (420 HP) คงที่ยาว
                  </text>

                  {/* ICE COMPARISON CURVE (ORANGE DASHED - DELAYED POWERBAND) */}
                  <path
                    d="M 40 340 Q 120 280 200 160 T 320 80 Q 400 120 480 340"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <text x="325" y="110" fill="#fb923c" fontSize="10">
                    ICE Turbo Power Band (แคบและต้องเปลี่ยนเกียร์)
                  </text>

                  {/* Legend Callouts */}
                  <g transform="translate(20, 290)">
                    <rect x="0" y="0" width="220" height="60" rx="8" fill="#0f172a" stroke="#334155" />
                    <line x1="12" y1="18" x2="35" y2="18" stroke="#84cc16" strokeWidth="3" />
                    <text x="42" y="22" fill="#cbd5e1" fontSize="10">EV Motor Torque (Nm)</text>
                    <line x1="12" y1="40" x2="35" y2="40" stroke="#06b6d4" strokeWidth="3" />
                    <text x="42" y="44" fill="#cbd5e1" fontSize="10">EV Motor Power (kW)</text>
                  </g>
                </g>
              </svg>
            </div>

            <div className="mt-4 text-xs text-slate-500 leading-relaxed">
              <strong>คำอธิบายกราฟไดโน่:</strong> มอเตอร์ไฟฟ้าสร้างแรงบิดสูงสุดเต็มร้อย (500 Nm) ตั้งแต่ 0 RPM ในโซนที่ 1 ส่งผลให้แรงม้าไต่ระดับขึ้นเป็นเส้นตรง จนกระทั่งถึง Base Speed (5,500 RPM) ซึ่งเข้าสู่โซนที่ 2 โดยแรงม้าจะคงที่ระดับสูงสุด แต่แรงบิดจะค่อยๆ ลดลงตามความเร็วรอบที่เพิ่มขึ้น
            </div>
          </div>
        </section>

        {/* SECTION 2: 3 PHASES OF MOTOR POWER */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. ผ่าโครงสร้าง 3 ช่วงการทำงานของมอเตอร์ไฟฟ้า
          </h2>
          <p>
            วิศวกรรมควบคุมมอเตอร์ซิงโครนัสแบบแม่เหล็กถาวร (PMSM) และมอเตอร์เหนี่ยวนำ (Induction Motor) แบ่งย่านการทำงานออกเป็น 3 ช่วงอย่างชัดเจน:
          </p>

          <div className="space-y-4 not-prose my-8">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="flex items-center gap-2 text-lime-700 font-bold text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                ช่วงที่ 1: Constant Torque Region (0 ถึง Base Speed ~5,000 RPM)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                ในช่วงนี้ อินเวอร์เตอร์จะถูกจำกัดด้วยเพดานกระแสไฟฟ้าสูงสุดที่มอเตอร์และสารกึ่งตัวนำ SiC/IGBT สามารถรับได้ อินเวอร์เตอร์จะจ่ายกระแสเพื่อสร้างสนามแม่เหล็กเต็มพิกัด ทำให้ <strong>แรงบิดมีค่าคงที่และเป็นค่าสูงสุดตั้งแต่ 0 RPM</strong> อัตราเร่งในช่วง 0-80 กม./ชม. จึงดุดันและกดหลังติดเบาะทันทีโดยไม่ต้องรอรอบ
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                ช่วงที่ 2: Constant Power &amp; Field Weakening Region (~5,000 ถึง 16,000 RPM)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                เมื่อโรเตอร์หมุนเร็วขึ้น ขดลวดจะสร้าง <strong>แรงดันไฟฟ้าเหนี่ยวนำย้อนกลับ (Back-EMF)</strong> ซึ่งจะวิ่งต้านแรงดันไฟฟ้ากระแสตรงจากแบตเตอรี่ และเมื่อแรงดันย้อนกลับนี้พุ่งสูงจนชนเพดานแรงดันของระบบ อินเวอร์เตอร์จึงต้องปรับกระแสควบคุมเพื่อ <em>&quot;ลดความเข้มของสนามแม่เหล็กถาวร&quot; (Field Weakening)</em> ส่งผลให้กำลังสูงสุดในหน่วยกิโลวัตต์ (kW) ยังคงที่ได้ แต่แรงบิดจะค่อยๆ ลดลงสวนทางกับความเร็วรอบที่สูงขึ้นเรื่อยๆ
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                ช่วงที่ 3: High-RPM Roll-off &amp; Thermal Limit (&gt; 16,000 RPM)
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                ที่ความเร็วรอบหมุนสูงจัด ความสูญเสียจากกระแสไหลวน (Eddy Current Losses) และความสูญเสียในแกนเหล็ก (Hysteresis Losses) จะพุ่งสูงขึ้นอย่างก้าวกระโดด ทำให้เกิดความร้อนสะสมในโรเตอร์และสเตเตอร์อย่างรวดเร็ว ระบบ BMS จะสั่งลดกำลัง (Thermal Derating) เพื่อป้องกันฉนวนขดลวดละลาย ทำให้ทั้งแรงบิดและแรงม้าตกลง
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SINGLE-SPEED GEARBOX & TRACTIVE FORCE MATH */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. กลไกเกียร์ทดเดี่ยว (Single-Speed Gearbox) และที่มาของแรงขับมหาศาลที่ล้อ
          </h2>
          <p>
            ในขณะที่รถยนต์สันดาปต้องใช้เกียร์อัตโนมัติ 7 – 10 สปีดเพื่อชดเชยช่วง Powerband ที่แคบของเครื่องยนต์ แต่รถยนต์ไฟฟ้ากว่า 98% ในท้องตลาดกลับใช้ <strong>เกียร์ทดเดี่ยว (Fixed Reduction Gear)</strong> เพียงอัตราทดเดียว:
          </p>

          <div className="bg-slate-900 text-lime-400 p-6 rounded-2xl my-6 shadow-inner not-prose">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-lime-400" />
              กลไกการถ่ายทอดกำลัง: ทำไมมอเตอร์ลูกเล็กถึงสร้างแรงขับที่ล้อได้มหาศาล?
            </div>
            <p className="text-slate-200 text-sm leading-relaxed mb-3">
              แรงขับจริงที่ผลักดันให้รถพุ่งทะยานไปข้างหน้า ไม่ได้ขึ้นอยู่กับแรงบิดมอเตอร์เพียวๆ แต่เกิดจาก <strong>แรงบิดของมอเตอร์</strong> วิ่งผ่าน <strong>อัตราทดของเฟืองเกียร์</strong> (เช่น เกียร์ทดอัตรา 9 ต่อ 1 ซึ่งช่วยขยายแรงบิดมอเตอร์ให้สูงขึ้นถึง 9 เท่าตัว) หักลบการสูญเสียเล็กน้อยในระบบ แล้วถ่ายทอดลงสู่หน้าสัมผัสถนนผ่าน <strong>รัศมีวงล้อและยาง</strong>
            </p>
            <div className="text-slate-300 text-xs pt-3 border-t border-slate-800 leading-relaxed">
              <strong>ตัวอย่างรถจริง:</strong> มอเตอร์ไฟฟ้าแรงบิด 450 นิวตัน-เมตร เมื่อผ่านชุดเกียร์ทด 9.0:1 จะสามารถสร้างแรงขับฉุดกระชากที่หน้ายางลงสู่พื้นถนนได้สูงถึง <strong>11,550 นิวตัน</strong> ในชั่วพริบตา
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            ตัวอย่างการคำนวณจริง: ทำไมออกตัวถึงแรงมหาศาล แต่ปลายถึงแผ่ว?
          </h3>

          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <thead className="bg-slate-900 text-white uppercase font-mono">
                <tr>
                  <th className="p-3.5">ความเร็วรถ</th>
                  <th className="p-3.5">รอบมอเตอร์ (RPM)</th>
                  <th className="p-3.5">สถานะมอเตอร์</th>
                  <th className="p-3.5">แรงบิดที่มอเตอร์</th>
                  <th className="p-3.5 text-lime-400">แรงขับที่ล้อ (นิวตัน)</th>
                  <th className="p-3.5">แรงต้านอากาศ (นิวตัน)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">0 – 30 km/h (ออกตัว)</td>
                  <td className="p-3.5 text-slate-600">0 – 2,500 RPM</td>
                  <td className="p-3.5 text-emerald-700 font-bold">Constant Torque</td>
                  <td className="p-3.5 font-bold text-slate-900">450 Nm</td>
                  <td className="p-3.5 font-bold text-emerald-700">11,550 N (อัตราเร่ง &gt; 0.95g)</td>
                  <td className="p-3.5 text-slate-400">~80 N (น้อยมาก)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">80 km/h (แซงในเมือง)</td>
                  <td className="p-3.5 text-slate-600">6,700 RPM</td>
                  <td className="p-3.5 text-blue-700 font-bold">Constant Power</td>
                  <td className="p-3.5 font-bold text-slate-900">350 Nm</td>
                  <td className="p-3.5 font-bold text-blue-700">8,980 N (ดึงกระชากดีมาก)</td>
                  <td className="p-3.5 text-slate-500">~380 N</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">140 km/h (ไฮเวย์)</td>
                  <td className="p-3.5 text-slate-600">11,800 RPM</td>
                  <td className="p-3.5 text-amber-700 font-bold">Field Weakening</td>
                  <td className="p-3.5 font-bold text-slate-900">200 Nm</td>
                  <td className="p-3.5 font-bold text-amber-700">5,130 N (เริ่มรู้สึกตึงมือ)</td>
                  <td className="p-3.5 text-slate-600">~1,150 N</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">180 km/h (ความเร็วสูง)</td>
                  <td className="p-3.5 text-slate-600">15,200 RPM</td>
                  <td className="p-3.5 text-red-600 font-bold">Deep Weakening</td>
                  <td className="p-3.5 font-bold text-slate-900">130 Nm</td>
                  <td className="p-3.5 font-bold text-red-600">3,330 N (แรงขับลดลง 70%)</td>
                  <td className="p-3.5 text-red-600 font-bold">~1,900 N (กินแรงขับเกินครึ่ง!)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>บทสรุปของตัวเลข:</strong> ที่ความเร็ว 180 กม./ชม. แรงบิดของมอเตอร์ลดลงเหลือเพียง 130 Nm ส่งผลให้แรงขับที่ล้อตกลงเหลือ 3,330 นิวตัน ในขณะที่ <strong>แรงต้านอากาศ (Aerodynamic Drag)</strong> พุ่งสูงขึ้นอย่างก้าวกระโดดตามความเร็ว (แทนด้วยตัวแปร v) โดยเมื่อความเร็วเพิ่มขึ้นเป็นสองเท่า แรงต้านลมจะทวีคูณขึ้นถึงสี่เท่า จนกลืนกินแรงขับไปถึง 1,900 นิวตัน แรงขับสุทธิที่เหลือไว้ใช้เร่งแซงจึงเหลือน้อยมาก ทำให้คนขับรู้สึกว่าอัตราเร่งช่วงความเร็วปลายนั้นแผ่วลง หรือ <em>&quot;ปลายเหี่ยว&quot;</em> นั่นเอง
          </p>
        </section>

        {/* SECTION 4: 2-SPEED GEARBOX (PORSCHE TAYCAN CASE STUDY) */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. กรณีศึกษา: ระบบเกียร์ 2 สปีดใน Porsche Taycan ทำงานอย่างไร?
          </h2>
          <p>
            เพื่อแก้ปัญหาแรงบิดตกที่ย่านความเร็วสูง วิศวกรของ Porsche จึงได้พัฒนา <strong>ระบบเกียร์อัตโนมัติ 2 สปีดแบบ Planetary Gearbox</strong> ติดตั้งที่เพลาล้อหลังของ <strong>Porsche Taycan</strong> และ <strong>Audi e-tron GT</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose my-8">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <div className="text-xs font-bold text-slate-500 uppercase">เกียร์ 1 (1st Gear - Ratio ~15.5:1)</div>
              <h4 className="text-lg font-black text-slate-900 my-1">อัตราทดจัด สำหรับออกตัว</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                สร้างแรงขับที่ล้อหลังมหาศาลเกิน <strong>13,000 นิวตัน</strong> ในโหมด Launch Control ช่วยให้ตัวถังหนัก 2.3 ตัน พุ่งทะยานจาก 0-100 กม./ชม. ได้ในเวลาเพียง <strong>2.4 – 2.8 วินาที</strong>
              </p>
            </div>

            <div className="bg-lime-50 border border-lime-300 p-6 rounded-2xl">
              <div className="text-xs font-bold text-lime-700 uppercase">เกียร์ 2 (2nd Gear - Ratio ~8.05:1)</div>
              <h4 className="text-lg font-black text-slate-900 my-1">อัตราทดต่ำ สำหรับความเร็วสูง</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                ระบบจะสั่งสลับเข้าเกียร์ 2 ที่ความเร็วประมาณ 90-100 กม./ชม. ช่วย <strong>ดึงรอบมอเตอร์ลงมาอยู่ในโซน Constant Power</strong> ทำให้มีแรงบิดเหลือเฟือในการเร่งแซง 140-260 กม./ชม. ได้อย่างต่อเนื่อง
              </p>
            </div>
          </div>

          <p>
            <strong>ทำไม Tesla และ BYD ถึงไม่ใช้เกียร์ 2 สปีด?</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>น้ำหนักและความซับซ้อน:</strong> ชุดเกียร์ 2 สปีดพร้อมคลัตช์ไฮดรอลิกเพิ่มน้ำหนักตัวรถอีกประมาณ 30 – 50 กก. และมีชิ้นส่วนสึกหรอที่ต้องบำรุงรักษา
            </li>
            <li>
              <strong>การสูญเสียทางกล (Parasitic Drag):</strong> เกียร์ทดเดี่ยวมีประสิทธิภาพสูงถึง 97-98% ในขณะที่เกียร์ 2 สปีดมีแรงเสียดทานของคลัตช์ ทำให้กินพลังงานแบตเตอรี่มากกว่าที่ความเร็วต่ำ
            </li>
            <li>
              <strong>มอเตอร์รอบจัดยุคใหม่:</strong> มอเตอร์อย่าง Tesla Model 3 Performance หรือ BYD e-Platform 3.0 สามารถหมุนได้ถึง <strong>18,000 – 21,000 RPM</strong> ซึ่งเพียงพอที่จะทำความเร็วแตะ 250 กม./ชม. ด้วยเกียร์ทดเดี่ยว
            </li>
          </ul>
        </section>

        {/* SECTION 5: THERMAL DERATING & COOLING */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. การระบายความร้อน Hairpin Winding และ Thermal Derating
          </h2>
          <p>
            อีกหนึ่งปัจจัยที่ทำให้รถ EV สูญเสียพละกำลังเมื่อขับขี่ด้วยความเร็วสูงต่อเนื่อง คือ <strong>ความร้อนสะสมในมอเตอร์ไฟฟ้า</strong>:
          </p>

          <div className="my-8 not-prose bg-slate-900 text-white p-6 sm:p-8 rounded-3xl">
            <h4 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5" /> นวัตกรรมการจัดการความร้อนของมอเตอร์ไฟฟ้าสมัยใหม่
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">ขดลวดแบน Hairpin Winding</span>
                แทนที่ขดลวดกลมแบบเดิม เพิ่มพื้นที่หน้าตัดทองแดง (Slot Fill Factor) จาก 45% เป็น &gt; 70% ลดความต้านทานไฟฟ้าและลดความร้อนสะสมลง 25%
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">การระบายความร้อนด้วยน้ำมันตรง (Direct Oil Cooling)</span>
                ฉีดน้ำมันไดอิเล็กทริกเข้าสัมผัสกับหัวขดลวดและแกนโรเตอร์โดยตรง ระบายความร้อนได้ไวกว่าการหล่อเย็นด้วยเสื้อน้ำภายนอก (Water Jacket) ถึง 3 เท่า
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HIGHWAY DRIVING & POWER MANAGEMENT TIPS */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. คำแนะนำสำหรับผู้ใช้รถ: ขับทางไกลอย่างไรให้ได้ทั้งสมรรถนะและระยะทาง
          </h2>

          <div className="space-y-4 not-prose my-8">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">ช่วงความเร็วที่สมดุลที่สุดบนมอเตอร์เวย์</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  การขับขี่ที่ความเร็ว 110 – 120 กม./ชม. มอเตอร์จะหมุนที่ประมาณ 9,000 – 10,000 RPM ซึ่งยังอยู่ในโซนประสิทธิภาพสูงสุด (Efficiency &gt; 92%) และไม่สูญเสียพลังงานให้แรงต้านอากาศมากเกินไป
                </p>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">การเร่งแซงจังหวะสั้น (Punch &amp; Coast)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  ใช้ประโยชน์จากแรงบิดฉับพลันกดแซงให้พ้นอย่างรวดเร็ว แล้วผ่อนคันเร่งกลับมารักษาความเร็วเดินทางปกติ จะช่วยประหยัดแบตเตอรี่ได้ดีกว่าการแช่ความเร็วสูงเป็นเวลานาน
                </p>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">การเลือกยางที่มีค่าต้านทานการกลิ้งต่ำ (Low RRC)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  ยาง EV เฉพาะทางจะออกแบบคอมปาวด์ให้ลดแรงเสียดทานการหมุน แต่รักษาหน้าสัมผัสเกาะถนน ช่วยเพิ่มระยะทางวิ่งต่อการชาร์จได้อีก 5 – 8%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: EVSELECT ACCESSORIES RECOMMENDATIONS */}
        <section className="my-12 not-prose">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" /> EVSELECT Performance &amp; Protection
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                อุปกรณ์เสริมเพื่อการปกป้องและสมรรถนะที่สมบูรณ์แบบ
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mb-6">
                ยกระดับประสบการณ์การขับขี่รถยนต์ไฟฟ้าของคุณด้วยอุปกรณ์ตกแต่งและของแต่งตรงรุ่นคุณภาพระดับพรีเมียมจาก EVSELECT:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">ล้อฟอร์จน้ำหนักเบา (Forged Wheels)</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    ลดน้ำหนักมวลใต้สปริง (Unsprung Mass) ล้อละ 3-4 กก. ช่วยให้ออกตัวไวยิ่งขึ้นและประหยัดพลังงาน
                  </p>
                </div>

                <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">เซ็นเซอร์วัดลมยาง TPMS ไร้สาย</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    ตรวจสอบแรงดันและอุณหภูมิยางแบบ Real-time ป้องกันยางระเบิดจากความร้อนสะสมเมื่อขับขี่ความเร็วสูง
                  </p>
                </div>

                <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">แผ่นกันกระแทกแบตเตอรี่ใต้ท้อง</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    อะลูมิเนียมเกรดอากาศยาน 5 มม. ปกป้องโครงสร้างแบตเตอรี่และระบบหล่อเย็นจากเศษหินและสิ่งกีดขวาง
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  ตรวจรุ่น ปี และรายละเอียดสินค้ากับทีม EVSELECT ก่อนสั่งซื้อ
                </span>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
                >
                  <span>เลือกซื้ออุปกรณ์เสริมตรงรุ่น</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 7. Article Footer Navigation */}
      <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles/hybrid-to-ev-chassis-dynamics-transition"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-lime-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>บทความก่อนหน้า: Hybrid สู่ Full EV</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-slate-100 hover:bg-lime-50 hover:text-lime-700 text-slate-800 px-4 py-2 rounded-xl border border-slate-200 transition-all"
          >
            <span>กลับสู่หน้ารวมบทความทั้งหมด</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </article>
  );
}
