import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  SlidersHorizontal,
  Activity,
  Gauge,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'คู่มือการปรับจูนแดมเปอร์ (Damper Tuning): Bump, Rebound, Low-Speed vs High-Speed Damping สำหรับรถ EV | EVSELECT',
  description: 'เจาะลึกศาสตร์การปรับจูนโช้คอัพ (Damper Tuning) ตามหลัก Suspension Secrets: อัตราส่วนความหน่วงที่เหมาะสม (Damping Ratio), กราฟ Force-Velocity (F-V Curve), วาล์ว Digressive และตารางปรับคลิกแก้ Oversteer/Understeer สำหรับรถ EV หนัก 2 ตัน',
  keywords: [
    'Damper Tuning EV',
    'Bump vs Rebound',
    'Low-speed Damping',
    'High-speed Damping',
    'Critical Damping Ratio',
    'Zeta Damping',
    'F-V Curve โช้คอัพ',
    'Digressive Valving',
    'ปรับคลิกโช้คอัพ',
    'เซ็ตโช้ค Tesla',
    'เซ็ตติ้งช่วงล่าง EV'
  ],
  openGraph: {
    title: 'คู่มือการปรับจูนแดมเปอร์ (Damper Tuning) รถ EV ตามหลัก Suspension Secrets | EVSELECT Guide',
    description: 'คู่มือวิศวกรรมการเซ็ตติ้ง Bump/Rebound, อัตราส่วนความหน่วง Damping Ratio และกราฟ F-V Curve แก้ปัญหาอาการย้วย/กระด้างในรถยนต์ไฟฟ้า',
    url: 'https://evselects.com/articles/ev-damper-tuning-bump-rebound-guide',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    images: [{ url: '/images/articles/damper_tuning_hero.jpg' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'คู่มือการปรับจูนแดมเปอร์ (Damper Tuning) รถ EV | EVSELECT',
    description: 'คู่มือวิศวกรรมการเซ็ตติ้ง Bump/Rebound และกราฟ F-V Curve',
    images: ['/images/articles/damper_tuning_hero.jpg']
  }
};

export default function EVDamperTuningGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'คู่มือการปรับจูนแดมเปอร์ (Damper Tuning): ทำความเข้าใจ Bump, Rebound, Low-Speed vs High-Speed Damping ตามหลัก Suspension Secrets',
    description: 'การปรับตั้งแรงหน่วงโช้คอัพ Bump และ Rebound การคำนวณอัตราส่วนความหน่วงวิกฤต และการปรับคลิกแดมเปอร์สำหรับรถยนต์ไฟฟ้า',
    author: {
      '@type': 'Organization',
      name: 'EVSELECT Suspension Tuning Division'
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

      {/* 2. Header & Badges */}
      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
            <span className="bg-lime-50 text-lime-800 border border-lime-300 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-lime-700" />
              Damper Dynamics &amp; Valving
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200">
              Suspension Secrets &amp; OptimumG
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 27 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 15 นาที
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full shadow-xs">
            <span className="text-xs text-slate-300 font-medium">ความลึกเนื้อหา</span>
            <span className="text-sm font-black text-lime-400">Level 5: Masterclass</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          คู่มือการปรับจูนแดมเปอร์ (Damper Tuning): ทำความเข้าใจ Bump, Rebound, Low-Speed vs High-Speed Damping ตามหลัก Suspension Secrets
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          ทำไมการปรับสตรัทปรับเกลียว (Coilovers) ในรถยนต์ไฟฟ้าที่มีน้ำหนัก 2 ตัน ถึงมักจบลงด้วยอาการ <strong>&ldquo;เด้งดีดจนเวียนหัว&rdquo;</strong> หรือ <strong>&ldquo;กระด้างตึงตังจนคอนโซลสะเทือน&rdquo;</strong>? 
          ไขรหัสลับกลศาสตร์การซับแรงสั่นสะเทือน: แยกแยะความแตกต่างระหว่างจังหวะยุบ (<strong>Bump</strong>) และจังหวะยืด (<strong>Rebound</strong>), อัตราส่วนความหน่วงที่เหมาะสม (<strong>Damping Ratio</strong>), การอ่านกราฟ <strong>Force-Velocity (F-V Curve)</strong> และตารางปรับคลิกแก้บาลานซ์อันเดอร์/โอเวอร์สเตียร์ในแต่ละช่วงของโค้ง
        </p>

        {/* Key Takeaways Card */}
        <div className="bg-slate-50 border-l-4 border-lime-600 p-6 sm:p-7 rounded-r-2xl border-y border-r border-slate-200 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg bg-lime-500 flex items-center justify-center text-slate-950 font-black text-xs">
              DT
            </div>
            <h3 className="text-base font-bold text-slate-900 m-0">
              หัวใจสำคัญของการจูนโช้คอัพรถยนต์ไฟฟ้า (Core Engineering Principles)
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 mb-0 pl-0 list-none">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>สปริงเก็บพลังงาน แดมเปอร์สลายพลังงาน:</strong> สปริงทำหน้าที่แบกรับน้ำหนักนิ่งและยุบตัวตามระยะทางที่ถูกกด ส่วนแดมเปอร์หรือโช้คอัพจะสร้างแรงต้านตามความเร็วการเคลื่อนที่ของลูกสูบโช้ค เพื่อเปลี่ยนพลังงานจากการกระแทกให้กลายเป็นความร้อนและกระจายทิ้งไป</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>แยกย่านความเร็วลูกสูบ (Velocity Regimes):</strong> Low-Speed (&lt;50 mm/s) ควบคุมการเอียงตัวถัง ส่วน High-Speed (&gt;100 mm/s) ซับแรงกระแทกคอสะพานและรอยต่อถนน</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>แดมเปอร์ไม่เปลี่ยนน้ำหนักรวม:</strong> แดมเปอร์ควบคุมเฉพาะ <em>&ldquo;อัตราความเร็วในการถ่ายเทน้ำหนัก&rdquo;</em> ในช่วงจังหวะเปลี่ยนผ่าน ไม่ใช่น้ำหนักรวมที่กดลงในโค้ง</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>Digressive Curve คือคำตอบของ EV:</strong> วาล์วหัวชันท้ายนอนให้แรงหน่วง Low-Speed สูงเพื่อยึดแบตเตอรี่ 600 กก. ไม่ให้โยน แต่เปิดบายพาสที่ High-Speed เพื่อความนุ่มนวล</span>
            </li>
          </ul>
        </div>
      </header>

      {/* 3. Main Content Sections */}
      <div className="space-y-12">

        {/* Section 1: Physics of Damping & Critical Damping Ratio */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              1. ฟิสิกส์การหน่วงและอัตราส่วนความหน่วงที่เหมาะสม (Damping Ratio)
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            ระบบช่วงล่างรถยนต์สามารถจำลองทำความเข้าใจได้ง่ายๆ ผ่านระบบมวลและสปริง เมื่อรถวิ่งตกหลุม ตัวถังรถซึ่งมี <strong>น้ำหนักตัวรถ (แทนด้วยตัวแปร m)</strong> จะเริ่มสั่นกระเพื่อมขึ้นลงตาม <strong>ความถี่ธรรมชาติของการดีดตัว</strong> และจะถูกสลายแรงสั่นสะเทือนด้วยความหน่วงของโช้คอัพ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800">
              <h3 className="text-base font-extrabold text-white mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-lime-400" />
                หลักการทำงานของความถี่ธรรมชาติและอัตราส่วนความหน่วง
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-200 leading-relaxed">
                  <strong className="text-lime-400 block mb-1">• ความถี่ธรรมชาติ (Natural Frequency):</strong>
                  ขึ้นอยู่กับความแข็งของสปริงเทียบกับน้ำหนักกดในแต่ละมุมล้อ (แทนด้วยตัวแปร m) หากสปริงแข็งเกินไปเทียบกับน้ำหนักรถ รถจะดีดถี่และกระด้าง แต่สำหรับ EV ที่มีน้ำหนัก (m) มาก สปริงต้องเฟิร์มพอดีเพื่อให้จังหวะการคืนตัวนุ่มสบาย
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-200 leading-relaxed">
                  <strong className="text-lime-400 block mb-1">• แรงหน่วงวิกฤต (Critical Damping):</strong>
                  คือแรงหน่วงในอุดมคติของโช้คอัพ ที่สามารถหยุดการดีดของสปริงได้สนิทในรอบเดียวโดยไม่ปล่อยให้รถเกิดการเด้งกระเพื่อมซ้ำ
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-200 leading-relaxed">
                  <strong className="text-lime-400 block mb-1">• อัตราส่วนความหน่วง (Damping Ratio):</strong>
                  สัดส่วนแรงต้านจริงของโช้คอัพ เพื่อให้รถมีความนุ่มนวลซับแรงกระแทกได้ดี ไม่แข็งตึงตังและไม่ย้วยโยน
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-lime-700" />
                เกณฑ์ค่าเป้าหมายความหน่วงสำหรับรถยนต์ไฟฟ้า
              </h3>
              
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">ความหน่วงจังหวะยืดความเร็วต่ำ (Low-Speed Rebound Ratio):</span>
                  <span className="font-mono font-bold text-lime-700">0.65 – 0.75</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">ความหน่วงจังหวะยุบความเร็วต่ำ (Low-Speed Bump Ratio):</span>
                  <span className="font-mono font-bold text-lime-700">0.25 – 0.35</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">ความถี่ธรรมชาติสำหรับขับทั่วไปบนถนน (Street Frequency):</span>
                  <span className="font-mono text-slate-900">1.3 – 1.6 Hz (นุ่มนวลนั่งสบาย)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">ความถี่ธรรมชาติสายสปอร์ตเฟิร์มกระชับ (Fast Road Frequency):</span>
                  <span className="font-mono text-slate-900">1.7 – 2.0 Hz (กระชับคุมง่าย)</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                *สัดส่วนแรงหน่วง Rebound ต่อ Bump ในอุดมคติสำหรับรถ EV หนักคือประมาณ <strong>3:1 ถึง 2.5:1</strong> เพื่อปล่อยให้ล้อยุบหลบหลุมได้เร็ว แต่รั้งการดีดคืนตัวอย่างมั่นคง
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Bump vs Rebound Mechanics & Velocity Regimes */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              2. ทำความเข้าใจ Bump, Rebound และย่านความเร็วลูกสูบ (Velocity Regimes)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bump Card */}
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-2xs hover:border-lime-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-black text-sm">
                  &darr;B
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 m-0">Bump (Compression / จังหวะยุบ)</h3>
                  <div className="text-xs text-slate-500">แกนโช้คเคลื่อนที่ผลุบเข้าไปในกระบอก</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                เกิดขึ้นเมื่อล้อวิ่งขึ้นเนิน หรือตัวถังถ่ายน้ำหนักกดลงมา หน้าที่หลักคือต้านการยุบตัวของสปริงและควบคุมความเร็วของ Unsprung Mass (ดุมล้อและยาง)
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pl-0 list-none border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>Bump อ่อนเกินไป:</strong> ช่วงล่างกระแทกยัน Bump Stop ยางบวม ตัวถังยุบฮวบเมื่อแตะเบรก</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span><strong>Bump แข็งเกินไป:</strong> รถกระด้างสะเทือน คมถนนวิ่งเข้าห้องโดยสาร ล้อลอยเต้นไม่เกาะผิวถนน</span>
                </li>
              </ul>
            </div>

            {/* Rebound Card */}
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-2xs hover:border-lime-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-black text-sm">
                  &uarr;R
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 m-0">Rebound (Extension / จังหวะยืด)</h3>
                  <div className="text-xs text-slate-500">แกนโช้คดึงยืดตัวออกจากกระบอก</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                เกิดขึ้นเมื่อสปริงที่ถูกบีบอัดต้องการระเบิดพลังงานคืนตัว หน้าที่หลักคือ <em>&ldquo;ควบคุมการคืนตัวของสปริง&rdquo;</em> ไม่ให้ตัวถังเด้งลอยต่อเนื่อง
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pl-0 list-none border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                  <span><strong>Rebound อ่อนเกินไป:</strong> ตัวถังเด้งโคลงซ้ำ 2–3 ครั้ง (Pogo stick bounce) คุมทิศทางไม่อยู่</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                  <span><strong>Rebound แข็งเกินไป:</strong> เกิดอาการ <em>&ldquo;Packing Down&rdquo;</em> โช้คยืดไม่ทัน รถจะเตี้ยลงเรื่อยๆ บนทางขรุขระจนชน Bump Stop</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Velocity Regimes Bar */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-lime-700" />
              การแบ่ง 3 ย่านความเร็วลูกสูบแดมเปอร์ (Damper Piston Velocity Spectrum)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-lime-700 mb-1">1. Low-Speed (0 – 50 mm/s)</div>
                <div className="text-sm font-extrabold text-slate-900 mb-2">Chassis Motion Control</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ควบคุมการเคลื่อนที่ที่เกิดจากการขับขี่ของคน: การเลี้ยวเข้าโค้ง (Roll), การเบรกหน้าทิ่ม (Dive), และการกดคันเร่งท้ายยุบ (Squat) ถูกควบคุมโดยรูทางเดินน้ำมัน Bleed Orifice และเข็มคลิกปรับตั้ง
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-blue-700 mb-1">2. Mid-Speed (50 – 150 mm/s)</div>
                <div className="text-sm font-extrabold text-slate-900 mb-2">Road Undulations &amp; Crests</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ควบคุมอาการรถโยนบนเนินสันเขา ทางลอนคลื่น และการปีนเอเปกซ์ในสนาม ถูกควบคุมโดยความแข็งของแผ่นชิมวาล์วหลัก (Main Shim Stack Deflection)
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-purple-700 mb-1">3. High-Speed (&gt; 150 mm/s)</div>
                <div className="text-sm font-extrabold text-slate-900 mb-2">Harsh Impacts &amp; Potholes</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ควบคุมแรงกระแทกเฉียบพลัน: หลุมบ่อลึก รอยต่อสะพาน และลูกระนาด ถูกควบคุมโดยวาล์วเปิดบายพาสระบายแรงดัน (Blow-off Valves) เพื่อไม่ให้แรงสะเทือนส่งถึงตัวถัง
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Force-Velocity (F-V) Dyno Curves & Inline SVG */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              3. การอ่านกราฟ Force-Velocity (F-V Curve): Linear vs Digressive vs Progressive
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            กราฟ F-V Curve จากเครื่องทดสอบโช้คอัพ (Shock Dyno) คือพิมพ์เขียวบอกพฤติกรรมของแดมเปอร์อย่างแท้จริง แดมเปอร์คุณภาพสูงสำหรับรถยนต์ไฟฟ้าจำเป็นต้องใช้วาล์วแบบ <strong>Digressive Valving (หัวชัน ท้ายนอน)</strong> เพื่อสลายแรงสั่นสะเทือนจากน้ำหนักตัวรถ 2 ตันโดยไม่สูญเสียความนุ่มนวล
          </p>

          {/* Custom Inline SVG F-V Dyno Diagram */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-xs font-extrabold text-slate-900 uppercase tracking-widest bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full">
                Shock Dyno Force-Velocity (F-V) Characteristic Curves
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-2 mb-1">
                เปรียบเทียบกราฟแรงหน่วง: Digressive vs Linear vs Progressive Valving
              </h3>
              <p className="text-xs text-slate-400">
                แกน X: ความเร็วลูกสูบแดมเปอร์ (mm/s) | แกน Y: แรงหน่วงของโช้คอัพ (Newton)
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 900 500"
                className="w-full min-w-[720px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="lowSpeedZone" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#84cc16" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#84cc16" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                <rect width="900" height="500" fill="#0b0f19" rx="16" />

                <rect x="375" y="40" width="150" height="420" fill="url(#lowSpeedZone)" stroke="#84cc16" strokeWidth="1" strokeDasharray="3 3" />
                <text x="450" y="65" fill="#bef264" fontSize="11" fontWeight="bold" textAnchor="middle">
                  LOW-SPEED ZONE (0–50 mm/s)
                </text>
                <text x="450" y="80" fill="#84cc16" fontSize="9" textAnchor="middle">
                  โซนควบคุมตัวถัง / Roll / Pitch
                </text>

                <path d="M 100 110 L 800 110 M 100 180 L 800 180 M 100 320 L 800 320 M 100 390 L 800 390" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 200 40 L 200 460 M 300 40 L 300 460 M 600 40 L 600 460 M 700 40 L 700 460" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

                <line x1="80" y1="250" x2="820" y2="250" stroke="#94a3b8" strokeWidth="2" />
                <line x1="450" y1="40" x2="450" y2="460" stroke="#94a3b8" strokeWidth="2" />

                <text x="825" y="254" fill="#cbd5e1" fontSize="12" fontWeight="bold">Velocity (+ Bump)</text>
                <text x="65" y="254" fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="end">(- Rebound)</text>
                <text x="450" y="32" fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="middle">+ Force (Bump Compression N)</text>
                <text x="450" y="480" fill="#cbd5e1" fontSize="12" fontWeight="bold" textAnchor="middle">- Force (Rebound Tension N)</text>

                <text x="450" y="265" fill="#64748b" fontSize="10" textAnchor="middle">0</text>
                <text x="525" y="265" fill="#64748b" fontSize="10" textAnchor="middle">+50</text>
                <text x="600" y="265" fill="#64748b" fontSize="10" textAnchor="middle">+150</text>
                <text x="700" y="265" fill="#64748b" fontSize="10" textAnchor="middle">+300 mm/s</text>
                <text x="375" y="265" fill="#64748b" fontSize="10" textAnchor="middle">-50</text>
                <text x="300" y="265" fill="#64748b" fontSize="10" textAnchor="middle">-150</text>
                <text x="200" y="265" fill="#64748b" fontSize="10" textAnchor="middle">-300 mm/s</text>

                {/* CURVE 1: Digressive Curve */}
                <path
                  d="M 120,440 C 220,430 360,400 400,380 C 430,340 445,290 450,250 C 455,210 470,160 500,120 C 540,100 680,70 780,60"
                  fill="none"
                  stroke="#84cc16"
                  strokeWidth="4"
                />

                {/* CURVE 2: Linear Curve */}
                <line x1="120" y1="430" x2="780" y2="70" stroke="#0ea5e9" strokeWidth="2.5" strokeDasharray="6 4" />

                {/* CURVE 3: Progressive Curve */}
                <path
                  d="M 120,460 C 280,320 400,270 450,250 C 500,230 620,180 780,40"
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />

                <circle cx="500" cy="120" r="6" fill="#84cc16" stroke="#ffffff" strokeWidth="2" />
                <line x1="500" y1="120" x2="570" y2="90" stroke="#84cc16" strokeWidth="1.5" />
                <rect x="575" y="75" width="170" height="30" rx="6" fill="#14301a" stroke="#84cc16" strokeWidth="1" />
                <text x="660" y="94" fill="#bef264" fontSize="10" fontWeight="bold" textAnchor="middle">
                  Digressive Knee (Blow-off)
                </text>

                <g transform="translate(60, 60)">
                  <rect width="240" height="95" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <line x1="15" y1="22" x2="45" y2="22" stroke="#84cc16" strokeWidth="3" />
                  <text x="55" y="26" fill="#bef264" fontSize="11" fontWeight="bold">Digressive (แนะนำสำหรับ EV)</text>
                  <text x="55" y="38" fill="#94a3b8" fontSize="9">คุมตัวถังนิ่งสนิท ไม่กระด้างที่ความเร็วสูง</text>

                  <line x1="15" y1="52" x2="45" y2="52" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 2" />
                  <text x="55" y="56" fill="#7dd3fc" fontSize="11" fontWeight="bold">Linear (เชิงเส้น)</text>
                  <text x="55" y="68" fill="#94a3b8" fontSize="9">แรงหน่วงแปรผันตรงกับความเร็วลูกสูบ</text>

                  <line x1="15" y1="82" x2="45" y2="82" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="55" y="86" fill="#fda4af" fontSize="11" fontWeight="bold">Progressive (กระด้างในหลุม)</text>
                </g>
              </svg>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong className="text-lime-400">สรุปความได้เปรียบของ Digressive:</strong> ให้ความชันในย่าน 0–50 mm/s สูงมาก จึงหยุดการโคลงของแบตเตอรี่ EV ได้ทันที แต่แบนราบในย่านหลุมบ่อ (&gt;150 mm/s) เพื่อซับแรงกระแทก
              </div>
              <div className="font-mono text-slate-500">Source: Suspension Secrets Dyno Framework</div>
            </div>
          </div>
        </section>

        {/* Section 4: Understeer / Oversteer Damper Click Tuning Matrix */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              4. ตารางปรับคลิกแดมเปอร์แก้ Understeer / Oversteer ใน 3 ช่วงของโค้ง
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            แดมเปอร์มีผลต่อสมดุลการยึดเกาะเฉพาะช่วงที่มี <strong>การเคลื่อนไหวของน้ำหนัก (Dynamic Load Transfer)</strong> การปรับคลิกโช้คอัพต้องพิจารณาแยกตาม 3 เฟสของการเข้าโค้ง: <strong>Corner Entry (เริ่มหักเลี้ยว), Mid-Corner (จุดเอเปกซ์), และ Corner Exit (เริ่มเปิดคันเร่ง)</strong>
          </p>

          {/* Tuning Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4 border-b border-slate-800">ช่วงของการเข้าโค้ง (Corner Phase)</th>
                  <th className="p-4 border-b border-slate-800 bg-rose-950 text-rose-300">อาการ: Understeer (หน้าดื้อ/เลี้ยวไม่เข้า)</th>
                  <th className="p-4 border-b border-slate-800 bg-amber-950 text-amber-300">อาการ: Oversteer (ท้ายปัด/ท้ายออก)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    <div>1. Corner Entry (Turn-in &amp; Trail Braking)</div>
                    <div className="text-xs text-slate-500 font-normal mt-0.5">ช่วงแตะเบรกและเริ่มหักพวงมาลัยเข้าโค้ง</div>
                  </td>
                  <td className="p-4 text-slate-800">
                    <ul className="space-y-1 pl-0 list-none m-0">
                      <li>• <strong>ลด Front Bump:</strong> คลายคลิกหน้าให้นุ่มลง 2–3 คลิก ให้หน้ารถยุบถ่ายน้ำหนักกดล้อหน้าได้เร็วขึ้น</li>
                      <li>• <strong>เพิ่ม Rear Rebound:</strong> ขัน Rebound หลังให้หนืดขึ้น เพื่อรั้งท้ายไม่ให้ลอยเร็วเกินไป</li>
                    </ul>
                  </td>
                  <td className="p-4 text-slate-800">
                    <ul className="space-y-1 pl-0 list-none m-0">
                      <li>• <strong>เพิ่ม Front Bump:</strong> ปรับ Bump หน้าแข็งขึ้น 2 คลิก ชะลออัตราการทิ่มของหน้ารถ</li>
                      <li>• <strong>ลด Rear Rebound:</strong> คลาย Rebound หลังให้นุ่มลง เพื่อให้ล้อหลังยืดสัมผัสพื้นถนนได้เร็ว</li>
                    </ul>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    <div>2. Mid-Corner (Apex / Steady State)</div>
                    <div className="text-xs text-slate-500 font-normal mt-0.5">จุดกึ่งกลางโค้งที่ความเร็วคงที่</div>
                  </td>
                  <td className="p-4 text-slate-800">
                    <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs">
                      *ข้อควรจำ: ช่วง Steady-State แดมเปอร์ทำงานน้อยลง หากมีอาการดื้อโค้งหนัก ให้แก้ที่ <strong>Anti-Roll Bar หน้า (ปรับนิ่มลง)</strong> หรือ <strong>เพิ่ม Negative Camber หน้า</strong>
                    </div>
                  </td>
                  <td className="p-4 text-slate-800">
                    <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs">
                      *แก้ที่ <strong>Anti-Roll Bar หลัง (ปรับนิ่มลง)</strong> หรือลดแรงดันลมยางหลังลง 1–2 PSI เพื่อเพิ่ม Contact Patch
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    <div>3. Corner Exit (On-Throttle Acceleration)</div>
                    <div className="text-xs text-slate-500 font-normal mt-0.5">ช่วงคลายพวงมาลัยและเติมคันเร่งออกจากโค้ง</div>
                  </td>
                  <td className="p-4 text-slate-800">
                    <ul className="space-y-1 pl-0 list-none m-0">
                      <li>• <strong>เพิ่ม Rear Bump:</strong> ขัน Bump หลังแข็งขึ้น เพื่อต้านไม่ให้ท้ายยุบฮวบจนล้อหน้าลอย</li>
                      <li>• <strong>ลด Front Rebound:</strong> คลาย Rebound หน้าให้นุ่มลง ให้หน้ารถคืนตัวสัมผัสถนนได้อย่างราบรื่น</li>
                    </ul>
                  </td>
                  <td className="p-4 text-slate-800">
                    <ul className="space-y-1 pl-0 list-none m-0">
                      <li>• <strong>ลด Rear Bump:</strong> คลาย Bump หลังให้นุ่มลง 2–3 คลิก เพื่อให้ล้อหลังยุบรับแรงบิด Instant Torque ได้นุ่มนวลขึ้น</li>
                      <li>• <strong>เพิ่ม Front Rebound:</strong> ขัน Rebound หน้าหนืดขึ้น รั้งหน้ารถไม่ให้ยกตัวเร็วเกินไป</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Step-by-Step Tuning Workflow for EV Owners */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              5. ขั้นตอน 4 สเต็ปการเซ็ตติ้งโช้คอัพสำหรับผู้เริ่มต้น (Baseline Setup Protocol)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-lime-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                01
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">หาจุด Full Stiff</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                หมุนปรับคลิกตามเข็มนาฬิกาจนสุด (ค่าแข็งสุด = คลิกที่ 0) <em>ห้ามขันอัดแรงเกินไปเพราะจะทำให้เข็มวาล์วภายในเสียหาย</em>
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-lime-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                02
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">ตั้งค่า Baseline กลาง</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                หมุนทวนเข็มนาฬิกาถอยหลังออกมาที่ค่ากึ่งกลาง เช่น โช้คปรับได้ 32 คลิก ให้ถอยออกมาที่ <strong>คลิกที่ 16 จากแข็งสุด</strong>
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-lime-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                03
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">วิ่งทดสอบเส้นทางเดิม</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ขับทดสอบบนเส้นทางที่มีทั้งรอยต่อสะพาน ทางตรงความเร็วสูง และโค้งต่อเนื่อง สังเกตการโยนตัวและอาการเด้งซ้ำ
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-lime-500 text-slate-950 font-black flex items-center justify-center text-sm mb-3">
                04
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">ปรับทีละ 2 คลิก</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ปรับเปลี่ยนค่าทีละ 1 หรือ 2 คลิกต่อครั้งเท่านั้น และจดบันทึกความเปลี่ยนแปลง ห้ามปรับคลิกหน้า-หลังพร้อมกันหลายจุด
              </p>
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
            <div className="text-xs font-bold text-slate-900">EVSELECT Damper Engineering Division</div>
            <div className="text-[11px] text-slate-500">มาตรฐานการปรับจูนโช้คอัพและแดมเปอร์ไดโนตามหลัก Suspension Secrets</div>
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
