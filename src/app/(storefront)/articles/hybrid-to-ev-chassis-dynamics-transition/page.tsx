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
  Gauge,
  SlidersHorizontal,
  Info,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Activity,
  Compass,
  Layers,
  ChevronRight,
  Cpu,
  RefreshCw,
  Scale
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'เจาะลึกการเปลี่ยนผ่านจาก Hybrid สู่ Full EV: พลศาสตร์แชสซี, การกระจายน้ำหนัก และฟีลลิ่งการขับขี่ | EVSELECT',
  description: 'เปรียบเทียบสถาปัตยกรรม HEV, PHEV และ Pure BEV Skateboard: วิเคราะห์จุดศูนย์ถ่วง, อัตราตอบสนองแรงบิด 10ms vs 300ms, โครงสร้างแชสซี, Unsprung Mass และการปรับตัวของระบบ Brake-by-Wire พร้อมแนวทางการปรับจูนช่วงล่าง',
  keywords: [
    'Hybrid vs EV ช่วงล่าง',
    'HEV PHEV BEV แชสซี',
    'Skateboard Platform EV',
    'การกระจายน้ำหนักรถ EV',
    'Brake by wire รถยนต์ไฟฟ้า',
    'Brake Blending EV',
    'Torsional Rigidity EV',
    'Anti-squat geometry',
    'ฟีลลิ่งการขับขี่รถ EV',
    'EVSELECT Chassis'
  ],
  openGraph: {
    title: 'เจาะลึกการเปลี่ยนผ่านจาก Hybrid สู่ Full EV: พลศาสตร์แชสซี และการกระจายน้ำหนัก | EVSELECT',
    description: 'วิเคราะห์ความแตกต่างเชิงวิศวกรรมระหว่าง HEV, PHEV และ Dedicated BEV: พลศาสตร์แชสซี, ระบบเบรก Brake-by-Wire และแรงบิด 10ms',
    url: 'https://evselects.com/articles/hybrid-to-ev-chassis-dynamics-transition',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Hybrid to EV Chassis Dynamics Transition EVSELECT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'เจาะลึกการเปลี่ยนผ่านจาก Hybrid สู่ Full EV | EVSELECT Dynamics',
    description: 'ผ่าโครงสร้างแชสซี HEV/PHEV vs Skateboard BEV: จุดศูนย์ถ่วง, การกระจายน้ำหนัก 50:50 และระบบ Brake-by-Wire',
    images: ['/images/hero-bg.jpg']
  }
};

export default function HybridToEVChassisDynamicsPage() {
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
              <Layers className="w-3.5 h-3.5 text-lime-600" />
              โครงสร้างแชสซี &amp; ระบบขับเคลื่อน
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
              Racecar Engineering &amp; Dynamics
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 27 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 9 นาที
            </span>
          </div>

          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium">หมวดเทคนิค</span>
            <span className="text-sm font-black text-lime-700">CHASSIS &amp; POWERTRAIN</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เจาะลึกการเปลี่ยนผ่านจาก Hybrid สู่ Full EV: พลศาสตร์แชสซี, การกระจายน้ำหนัก และฟีลลิ่งการขับขี่
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เมื่อคุณก้าวข้ามจากรถยนต์ไฮบริด (HEV / PHEV) สู่รถยนต์ไฟฟ้าแบตเตอรี่ 100% (Pure BEV) ความแตกต่างไม่ได้มีเพียงแค่การเสียบปลั๊กแทนการเติมน้ำมัน แต่คือการปฏิวัติโครงสร้างทางวิศวกรรมครั้งใหญ่: จากแชสซีแบบดั้งเดิมที่หน้าหนัก สู่ <strong>Dedicated Skateboard Platform</strong> บาลานซ์ 50:50, อัตราตอบสนองแรงบิดระดับ <strong>10 มิลลิวินาที</strong>, และความท้าทายในการจูนเบรก <strong>Brake-by-Wire</strong>
        </p>
      </header>

      {/* 3. Executive Verdict / Summary Box */}
      <div className="bg-slate-900 text-white border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-400" /> Engineering Core Verdict
            </div>
            <div className="text-lg sm:text-xl font-black text-lime-400 leading-tight">
              Skateboard Architecture
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              &quot;Pure BEV มีความแข็งแกร่งในการต้านทานการบิดตัว (Torsional Rigidity) สูงกว่ารถยนต์ไฮบริดทั่วไปถึง 30-50% ส่งผลให้ช่วงล่างทำงานได้ตรงตามเรขาคณิตโดยไม่มีการบิดเบี้ยวของบอดี้&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">การกระจายน้ำหนัก (BEV)</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">50:50 หรือ 48:52</div>
              <div className="text-[10px] text-slate-400">HEV ทั่วไป 60:40 (หน้าหนัก)</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">Torque Step Response</div>
              <div className="text-base font-bold text-emerald-400 mt-0.5">10 – 15 ms</div>
              <div className="text-[10px] text-slate-400">ICE/HEV ดีเลย์ 300-800 ms</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">Torsional Rigidity</div>
              <div className="text-base font-bold text-white mt-0.5">&gt; 35,000 Nm/deg</div>
              <div className="text-[10px] text-slate-400">แบตเตอรี่ทำหน้าที่เป็นโครงสร้างรับแรง</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">ระบบเบรก (Braking System)</div>
              <div className="text-base font-bold text-white mt-0.5">Brake-by-Wire (IPB)</div>
              <div className="text-[10px] text-slate-400">แยกแป้นเหยียบ ผสาน Regen อัจฉริยะ</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">มวลใต้สปริง (Unsprung Mass)</div>
              <div className="text-base font-bold text-amber-400 mt-0.5">เพิ่มขึ้น 10 – 20%</div>
              <div className="text-[10px] text-slate-400">จานเบรกใหญ่ขึ้นและดุมล้อรับโหลดสูง</div>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700/60">
              <div className="text-[11px] text-slate-400">ระดับเสียง NVH ภายใน</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">ไร้เสียงรอบเครื่อง</div>
              <div className="text-[10px] text-slate-400">ต้องใช้ยางซับเสียง Acoustic Foam</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Hero Banner Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Volkswagen_ID.3_electric_car_chassis_DSC_0060_%2852146930872%29.jpg"
          alt="EV Skateboard Chassis"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            สถาปัตยกรรม: ICE Transverse Hybrid vs Dedicated Pure BEV Skateboard
          </span>
          <span className="bg-lime-600 text-white font-semibold px-3 py-1 rounded-lg shadow-sm">
            บทวิเคราะห์วิศวกรรมยานยนต์ (Automotive Engineering Insight)
          </span>
        </div>
      </div>

      {/* 5. Key Takeaways Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-lime-600" /> สรุปประเด็นเปลี่ยนผ่านที่ผู้ขับขี่ต้องรู้ (Transition Summary)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> บาลานซ์ตัวถังที่สมบูรณ์แบบ
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ในรถ HEV หน้ารถจะหนักจากเครื่องยนต์และเกียร์ แต่ BEV กระจายน้ำหนัก 50:50 แบตเตอรี่วางขนานใต้พื้น ทำให้หน้ารถคม พวงมาลัยแม่นยำ และไม่มีอาการดื้อโค้งหนักๆ
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-amber-800 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" /> แรงบิดมาทันทีใน 10 มิลลิวินาที
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ไม่มีรอบรอเกียร์ Kickdown หรือบูสต์เทอร์โบ การเร่งแซงเกิดขึ้นฉับพลัน ต้องอาศัยเรขาคณิตช่วงล่างแบบ <strong>Anti-Squat</strong> เพื่อไม่ให้หน้าเชิดท้ายยุบ
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-blue-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 shrink-0" /> ฟีลลิ่งแป้นเบรกแบบจำลอง
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              ระบบ Brake-by-Wire ใช้เซ็นเซอร์อ่านความลึกและความเร็วในการเหยียบแป้น แล้วสั่ง Inverter ผสานปั๊มไฮดรอลิก (Brake Blending) ผู้ขับขี่ต้องปรับความคุ้นเคยกับระยะแป้น
            </p>
          </div>
        </div>
      </div>

      {/* 6. Main Body Content */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-a:text-lime-600 prose-strong:text-slate-900 text-slate-700">

        {/* SECTION 1: ARCHITECTURAL DIFFERENCES */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            1. ความแตกต่างเชิงสถาปัตยกรรม: HEV, PHEV และ Pure BEV Skateboard
          </h2>
          <p>
            การทำความเข้าใจความต่างของระบบขับเคลื่อน 3 ยุคสมัย จะช่วยอธิบายว่าทำไมพฤติกรรมการตอบสนองของตัวถังถึงเปลี่ยนไปอย่างมหาศาลเมื่อคุณเปลี่ยนมาขับรถยนต์ไฟฟ้าล้วน:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
            {/* HEV */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs">
              <div className="inline-block bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1 rounded-full mb-3">
                1. Traditional HEV (Full Hybrid)
              </div>
              <h4 className="font-black text-slate-900 text-base mb-2">โครงสร้างดั้งเดิมเพิ่มมอเตอร์</h4>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li>• แบตเตอรี่ขนาดเล็ก <strong>1.0 – 2.0 kWh</strong> วางใต้เบาะหลัง</li>
                <li>• เครื่องยนต์ + เกียร์ e-CVT + มอเตอร์ 2 ตัว อัดแน่นอยู่ในห้องเครื่องด้านหน้า</li>
                <li>• การกระจายน้ำหนักหน้าหนัก <strong>58:42 ถึง 62:38</strong> หน้ารถมีแรงเฉื่อยสูงตอนเลี้ยว</li>
              </ul>
            </div>

            {/* PHEV */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs">
              <div className="inline-block bg-blue-100 text-blue-800 font-bold text-xs px-3 py-1 rounded-full mb-3">
                2. Plug-in Hybrid (PHEV)
              </div>
              <h4 className="font-black text-slate-900 text-base mb-2">ความซับซ้อนสูงสุด น้ำหนักสองต่อ</h4>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li>• แบตเตอรี่ขนาดกลาง <strong>12 – 25 kWh</strong> เพิ่มน้ำหนัก +250 ถึง +400 กก.</li>
                <li>• มีทั้งระบบน้ำมัน (ถังน้ำมัน, ท่อไอเสีย) และระบบไฟฟ้าแรงดันสูง</li>
                <li>• น้ำหนักกดหน้าจากเครื่องยนต์ และน้ำหนักกดท้ายจากแบตเตอรี่ ทำให้ <strong>Polar Moment สูง</strong></li>
              </ul>
            </div>

            {/* BEV */}
            <div className="bg-white border-2 border-lime-400 p-6 rounded-2xl shadow-md relative bg-lime-50/20">
              <div className="inline-block bg-lime-500 text-black font-bold text-xs px-3 py-1 rounded-full mb-3">
                3. Dedicated Pure BEV
              </div>
              <h4 className="font-black text-slate-900 text-base mb-2">Skateboard Platform แท้</h4>
              <ul className="text-xs text-slate-700 space-y-2 leading-relaxed">
                <li>• แบตเตอรี่ <strong>60 – 120 kWh</strong> เป็นแผ่นเรียบใต้ท้องรถ</li>
                <li>• มอเตอร์ขนาดกะทัดรัดติดตั้งบนซับเฟรมหน้า-หลัง ไร้เพลากลางและท่อไอเสีย</li>
                <li>• บาลานซ์น้ำหนัก <strong>50:50</strong> สมบูรณ์แบบ จุดศูนย์ถ่วงต่ำสุดขีด</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">
            ความแข็งแกร่งในการต้านทานการบิดตัว (Torsional Rigidity)
          </h3>
          <p>
            ในรถยนต์สันดาปและไฮบริด แชสซีจะมีช่องเปิดขนาดใหญ่สำหรับอุโมงค์เพลากลาง (Transmission Tunnel) และช่องวางถังน้ำมัน ซึ่งลดความแข็งแกร่งของตัวถังลง แต่ใน <strong>Dedicated BEV Platform</strong> กล่องบรรจุเซลล์แบตเตอรี่อะลูมิเนียมความแข็งแรงสูง (Structural Battery Pack / CTC - Cell to Chassis) จะถูกขันยึดเป็นส่วนหนึ่งของโครงสร้างหลักตัวถัง ส่งผลให้มีค่า Torsional Rigidity สูงเกิน <strong>35,000 – 45,000 Nm/deg</strong> เมื่อโครงสร้างตัวถังไม่บิดตัว สปริงและแดมเปอร์จึงสามารถทำงานซับแรงและควบคุมมุมล้อได้อย่างแม่นยำ 100% ตามที่วิศวกรออกแบบไว้
          </p>
        </section>

        {/* SECTION 2: CUSTOM SVG ARCHITECTURE DIAGRAM */}
        <section className="my-12 not-prose">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-lime-700 bg-lime-100 px-3 py-1 rounded-full">
                  Technical Architecture Diagram
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-2">
                  เปรียบเทียบสถาปัตยกรรมแชสซี: Hybrid vs Dedicated Skateboard EV
                </h3>
              </div>
              <div className="text-xs text-slate-500 max-w-xs text-right">
                วิเคราะห์ตำแหน่งจุดศูนย์ถ่วง (CG) และการกระจายน้ำหนักตามหลัก Racecar Engineering
              </div>
            </div>

            {/* Inline SVG Vector Graphics */}
            <div className="w-full bg-slate-950 rounded-2xl p-4 sm:p-6 text-white overflow-hidden relative">
              <div className="absolute top-3 left-4 text-xs font-mono text-slate-400">
                CHASSIS KINEMATICS COMPARISON :: HEV/PHEV vs PURE BEV SKATEBOARD
              </div>

              <svg
                viewBox="0 0 820 500"
                className="w-full h-auto max-h-[520px] select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="iceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c2410c" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="bevGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#84cc16" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4d7c0f" stopOpacity="0.3" />
                  </linearGradient>
                  <radialGradient id="cgPulse" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#eab308" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                {/* Left Side: Hybrid / PHEV Architecture */}
                <g transform="translate(30, 60)">
                  <rect x="0" y="0" width="360" height="380" rx="16" fill="#0b1120" stroke="#334155" strokeWidth="1.5" />
                  <text x="20" y="30" fill="#f97316" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                    A. สถาปัตยกรรม Hybrid / PHEV
                  </text>
                  <text x="20" y="48" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
                    น้ำหนักหน้าหนัก (60:40) | จุด CG สูง 580 มม.
                  </text>

                  {/* Car Profile Wireframe */}
                  <path d="M 30 220 L 70 170 L 150 140 L 260 140 L 310 180 L 330 220 Z" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="20" y1="260" x2="340" y2="260" stroke="#334155" strokeWidth="2" />

                  {/* Front Wheels & Rear Wheels */}
                  <circle cx="70" cy="260" r="28" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  <circle cx="280" cy="260" r="28" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

                  {/* Components */}
                  {/* Heavy Front ICE Engine + Gearbox */}
                  <rect x="50" y="160" width="75" height="70" rx="8" fill="url(#iceGrad)" stroke="#f97316" strokeWidth="1.5" />
                  <text x="87" y="195" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                    ICE ENGINE
                  </text>
                  <text x="87" y="210" fill="#fed7aa" fontSize="8.5" textAnchor="middle">
                    + Transaxle (Heavy)
                  </text>

                  {/* Transmission Exhaust tunnel */}
                  <rect x="125" y="215" width="90" height="15" rx="3" fill="#334155" />
                  <text x="170" y="226" fill="#94a3b8" fontSize="7.5" textAnchor="middle">Exhaust / Shaft</text>

                  {/* Fuel Tank */}
                  <rect x="220" y="200" width="45" height="35" rx="5" fill="#b45309" stroke="#d97706" strokeWidth="1" />
                  <text x="242" y="220" fill="#ffffff" fontSize="8" textAnchor="middle">Fuel Tank</text>

                  {/* Small Hybrid Battery in Trunk */}
                  <rect x="270" y="180" width="45" height="35" rx="5" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
                  <text x="292" y="198" fill="#ffffff" fontSize="8" textAnchor="middle">PHEV Bat.</text>
                  <text x="292" y="209" fill="#bfdbfe" fontSize="7" textAnchor="middle">(15 kWh)</text>

                  {/* Center of Gravity (High & Front-biased) */}
                  <g transform="translate(125, 175)">
                    <circle cx="0" cy="0" r="14" fill="url(#cgPulse)" stroke="#eab308" strokeWidth="2" />
                    <line x1="-12" y1="0" x2="12" y2="0" stroke="#eab308" strokeWidth="1.5" />
                    <line x1="0" y1="-12" x2="0" y2="12" stroke="#eab308" strokeWidth="1.5" />
                    <text x="18" y="4" fill="#facc15" fontSize="11" fontWeight="bold">CG (580 mm)</text>
                  </g>

                  {/* Weight Distribution Bars */}
                  <rect x="30" y="320" width="180" height="24" rx="6" fill="#ea580c" />
                  <text x="120" y="336" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                    ล้อหน้า: 60% (1,140 kg)
                  </text>
                  <rect x="215" y="320" width="115" height="24" rx="6" fill="#475569" />
                  <text x="272" y="336" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                    ล้อหลัง: 40% (760 kg)
                  </text>
                  <text x="180" y="365" fill="#cbd5e1" fontSize="10" textAnchor="middle">
                    มวลรวมกระจายห่างแกนหมุน → Yaw Inertia สูง
                  </text>
                </g>

                {/* Right Side: Dedicated Skateboard Pure BEV */}
                <g transform="translate(430, 60)">
                  <rect x="0" y="0" width="360" height="380" rx="16" fill="#0b1120" stroke="#4d7c0f" strokeWidth="2" />
                  <text x="20" y="30" fill="#a3e635" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                    B. สถาปัตยกรรม Skateboard BEV
                  </text>
                  <text x="20" y="48" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
                    กระจายน้ำหนักสมบูรณ์ (50:50) | จุด CG ต่ำ 450 มม.
                  </text>

                  {/* Car Profile Wireframe */}
                  <path d="M 30 220 L 70 170 L 150 140 L 260 140 L 310 180 L 330 220 Z" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="20" y1="260" x2="340" y2="260" stroke="#334155" strokeWidth="2" />

                  {/* Front Wheels & Rear Wheels */}
                  <circle cx="70" cy="260" r="28" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                  <circle cx="280" cy="260" r="28" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

                  {/* Front Compact Motor */}
                  <rect x="50" y="210" width="45" height="35" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="72" y="228" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Front</text>
                  <text x="72" y="238" fill="#bae6fd" fontSize="7" textAnchor="middle">Motor</text>

                  {/* Underfloor Flat Battery Pack (Skateboard) */}
                  <rect x="95" y="225" width="160" height="25" rx="5" fill="url(#bevGrad)" stroke="#84cc16" strokeWidth="2" />
                  <text x="175" y="241" fill="#ecfccb" fontSize="9" fontWeight="bold" textAnchor="middle">
                    HV BATTERY PACK (80-100 kWh)
                  </text>

                  {/* Rear Compact Motor */}
                  <rect x="255" y="210" width="45" height="35" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="277" y="228" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">Rear</text>
                  <text x="277" y="238" fill="#bae6fd" fontSize="7" textAnchor="middle">Motor</text>

                  {/* Center of Gravity (Ultra-Low & Perfectly Centered) */}
                  <g transform="translate(175, 235)">
                    <circle cx="0" cy="0" r="14" fill="url(#cgPulse)" stroke="#eab308" strokeWidth="2" />
                    <line x1="-12" y1="0" x2="12" y2="0" stroke="#eab308" strokeWidth="1.5" />
                    <line x1="0" y1="-12" x2="0" y2="12" stroke="#eab308" strokeWidth="1.5" />
                    <text x="18" y="4" fill="#facc15" fontSize="11" fontWeight="bold">CG (450 mm)</text>
                  </g>

                  {/* Weight Distribution Bars */}
                  <rect x="30" y="320" width="150" height="24" rx="6" fill="#65a30d" />
                  <text x="105" y="336" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                    ล้อหน้า: 50% (1,050 kg)
                  </text>
                  <rect x="185" y="320" width="145" height="24" rx="6" fill="#65a30d" />
                  <text x="257" y="336" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                    ล้อหลัง: 50% (1,050 kg)
                  </text>
                  <text x="180" y="365" fill="#a3e635" fontSize="10" textAnchor="middle" fontWeight="bold">
                    มวลรวมอยู่กึ่งกลางฐานล้อ → Turn-in ไว เลี้ยวคม
                  </text>
                </g>
              </svg>
            </div>

            <div className="mt-4 text-xs text-slate-500 leading-relaxed">
              <strong>คำอธิบายไดอะแกรม:</strong> เปรียบเทียบตำแหน่งของเครื่องยนต์และแบตเตอรี่ในระบบ Hybrid (ฝั่งซ้าย) ที่มีจุดศูนย์ถ่วงสูง 580 มม. และน้ำหนักเทไปที่ล้อหน้า 60% เทียบกับ Dedicated Skateboard BEV (ฝั่งขวา) ที่แบตเตอรี่แบนราบกดจุด CG ลงเหลือ 450 มม. และกระจายน้ำหนัก 50:50 ระหว่างล้อหน้า-หลัง
            </div>
          </div>
        </section>

        {/* SECTION 2: INSTANT TORQUE & ANTI-SQUAT */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            2. อัตราตอบสนองแรงบิด 10ms vs 300ms และผลกระทบต่อช่วงล่าง
          </h2>
          <p>
            ความแตกต่างด้านการส่งกำลังระหว่างเครื่องยนต์สันดาปภายใน (ICE/HEV) กับมอเตอร์ไฟฟ้ากระแสสลับแบบแม่เหล็กถาวร (PMSM) ใน Pure BEV:
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 not-prose">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-b sm:border-b-0 sm:border-r border-slate-200 pb-4 sm:pb-0 sm:pr-4">
                <div className="text-xs font-bold text-slate-500 uppercase">ICE / Hybrid Transmission Latency</div>
                <div className="text-2xl font-black text-slate-800 my-1">300 – 800 ms</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  เมื่อคนขับกดคันเร่ง กล่อง ECU ต้องสั่งเปิดลิ้นปีกผีเสื้อ อากาศไหลเข้าท่อร่วมไอดี ฉีดน้ำมัน สปูลเทอร์โบชาร์จเจอร์ และสั่งเกียร์อัตโนมัติ/e-CVT ปรับอัตราทด (Kickdown) แรงบิดจึงค่อยๆ ไต่ระดับขึ้น
                </p>
              </div>

              <div className="sm:pl-2">
                <div className="text-xs font-bold text-lime-700 uppercase">Electric Motor Step Response</div>
                <div className="text-2xl font-black text-lime-600 my-1">&lt; 10 – 15 ms</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  อินเวอร์เตอร์แบบ Field-Oriented Control (FOC) จ่ายกระแสไฟฟ้าสร้างแรงบิด (Quadrature Current) ตรงเข้าสู่ขดลวดสเตเตอร์ สร้างแรงบิดเต็มพิกัดแทบจะในเสี้ยววินาทีเดียวกับที่เท้าแตะคันเร่ง
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
            ความจำเป็นของ Anti-Squat Suspension Geometry
          </h3>
          <p>
            เมื่อแรงบิด 500 – 700 Nm ถูกส่งลงสู่ล้อหลังในเวลาเพียง 10 มิลลิวินาที จะทำให้เกิดแรงดึงตามแนวยาวกระแทกกลับมายังแชสซี หากช่วงล่างด้านหลังไม่มีการออกแบบเรขาคณิต <strong>Anti-Squat Geometry (อย่างน้อย 40% – 60%)</strong> ท้ายรถจะยุบตัวยวบลงอย่างรวดเร็ว (อาการท้ายยุบ หรือ Rear Squat) ส่งผลให้หน้ารถลอย หน้ายางหน้าสูญเสียแรงกด และคนขับจะรู้สึกว่าพวงมาลัยเบาหวิวขณะเร่งแซง
          </p>
        </section>

        {/* SECTION 3: UNSPRUNG MASS & DAMPING */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            3. ภาระมวลใต้สปริง (Unsprung Mass Penalty) และการเซ็ตติ้งโช้คอัพ
          </h2>
          <p>
            ในการออกแบบช่วงล่าง อัตราส่วนระหว่าง <strong>มวลบนสปริง (Sprung Mass - ตัวถังและผู้โดยสาร)</strong> ต่อ <strong>มวลใต้สปริง (Unsprung Mass - ล้อ ยาง ดุมล้อ จานเบรก และปีกนก)</strong> มีความสำคัญอย่างยิ่งต่อความนุ่มนวลและการเกาะถนน:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>ขนาดจานเบรกและคาลิเปอร์ที่ใหญ่ขึ้น:</strong> เพื่อรองรับการหยุดรถน้ำหนัก 2.2 ตัน จานเบรกใน EV มักมีขนาด 355 – 380 มม. พร้อมคาลิเปอร์ 4-Piston ส่งผลให้น้ำหนักมวลใต้สปริงแต่ละมุมล้อเพิ่มขึ้น 3 – 5 กก.
            </li>
            <li>
              <strong>การกระดอนของล้อ (Wheel Hop Tendency):</strong> เมื่อมวลใต้สปริงหนักขึ้น หากวิ่งผ่านรอยต่อถนนหรือผิวทางขรุขระ ล้อจะเกิดแรงเฉื่อยในการดีดตัวสูง ทำให้ลอยค้างในอากาศนานขึ้นหากแดมเปอร์ไม่มีแรงหน่วงจังหวะยืด (High-Speed Rebound Damping) ที่เพียงพอ
            </li>
            <li>
              <strong>การเลือกโช้คอัพแบบ Monotube:</strong> โช้คอัพกระบอกเดี่ยวที่มีลูกสูบขนาดใหญ่ (46 มม.) สามารถสร้างแรงหน่วงไฮดรอลิกเพื่อหยุดการสั่นสะเทือนของมวลใต้สปริงได้อย่างฉับพลัน ช่วยให้ยางกดแนบติดกับผิวถนนตลอดเวลา
            </li>
          </ul>
        </section>

        {/* SECTION 4: BRAKE-BY-WIRE & BRAKE BLENDING */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            4. ระบบเบรกไฟฟ้า Brake-by-Wire และเทคโนโลยี Brake Blending
          </h2>
          <p>
            ในรถยนต์ไฮบริดและ EV ยุคใหม่ ระบบเบรกไฮดรอลิกแบบดั้งเดิมที่ใช้หม้อลมสุญญากาศ (Vacuum Booster) ได้ถูกแทนที่ด้วยระบบ <strong>Electro-Hydraulic Brake (EHB)</strong> หรือ <strong>Integrated Power Brake (IPB)</strong> เช่น Bosch IPB:
          </p>

          <div className="my-8 not-prose bg-slate-900 text-white p-6 sm:p-8 rounded-3xl">
            <h4 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> กลไกการทำงานของ Brake Blending System
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">1. แป้นเหยียบตัดขาดจากระบบไฮดรอลิก (Decoupled Pedal)</span>
                เมื่อเหยียบแป้นเบรก ตัวจำลองสัมผัส (Pedal Feel Simulator) จะสร้างแรงต้านเท้าด้วยสปริงและยางไฮดรอลิก แปรผันตามทั้งระยะความลึกที่กดแป้นเบรกลงไป และความเร็วในการกระทืบเบรกของคนขับ
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">2. กล่องสมองกลคำนวณสัดส่วน Regen vs Friction</span>
                หากแบตเตอรี่ยังมีพื้นที่รับไฟ (SOC &lt; 90%) และอุณหภูมิปกติ มอเตอร์จะสร้างแรงหน่วง Regenerative Braking สูงสุดก่อน
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">3. มอเตอร์ปั๊มไฮดรอลิกจ่ายแรงดันเสริมไร้รอยต่อ</span>
                เมื่อความต้องการแรงเบรกเกินขีดจำกัดของมอเตอร์ หรือความเร็วรถลดลงต่ำกว่า 5 km/h วาล์วไฟฟ้าจะสั่งฉีดน้ำมันเบรกเข้าสู่คาลิเปอร์ทั้ง 4 ล้อเพื่อหยุดรถสนิท
              </div>
            </div>
          </div>

          <p>
            <strong>สาเหตุของอาการ &quot;แป้นเบรกแข็งทื่อ&quot; (Wooden Pedal Feel) ในอดีต:</strong> ในรถยนต์ไฮบริดและ EV รุ่นแรกๆ การเปลี่ยนผ่านระหว่าง Regen เบรกกับปั๊มไฮดรอลิกยังไม่ราบรื่น ทำให้คนขับรู้สึกว่าระยะแป้นเบรกตื้นเกินไปหรือมีแรงสะท้อนกลับ แต่ใน EV เจเนอเรชันปัจจุบัน ซอฟต์แวร์สามารถผสานแรงเบรกได้อย่างเนียนตาจนแทบแยกไม่ออก
          </p>
        </section>

        {/* SECTION 5: ENGINEERING COMPARISON MATRIX */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            5. ตารางเปรียบเทียบเชิงวิศวกรรม: HEV vs PHEV vs Dedicated BEV
          </h2>
          <p>
            ตารางสรุปมิติทางวิศวกรรมยานยนต์และฟีลลิ่งการขับขี่ระหว่างระบบขับเคลื่อนทั้ง 3 รูปแบบ:
          </p>

          <div className="overflow-x-auto not-prose my-6">
            <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <thead className="bg-slate-900 text-white uppercase font-mono">
                <tr>
                  <th className="p-3.5">คุณลักษณะทางวิศวกรรม</th>
                  <th className="p-3.5">Traditional HEV</th>
                  <th className="p-3.5">Plug-in Hybrid (PHEV)</th>
                  <th className="p-3.5 text-lime-400">Dedicated Pure BEV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">ความจุแบตเตอรี่</td>
                  <td className="p-3.5 text-slate-600">1.0 – 2.0 kWh</td>
                  <td className="p-3.5 text-slate-600">12 – 25 kWh</td>
                  <td className="p-3.5 font-bold text-emerald-700">60 – 120 kWh</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">แรงดันระบบไฟฟ้า</td>
                  <td className="p-3.5 text-slate-600">200V – 650V (บูสต์)</td>
                  <td className="p-3.5 text-slate-600">350V – 400V</td>
                  <td className="p-3.5 font-bold text-emerald-700">400V – 800V Architecture</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">การกระจายน้ำหนักหน้า:หลัง</td>
                  <td className="p-3.5 text-slate-600">60:40 (หน้าหนัก)</td>
                  <td className="p-3.5 text-slate-600">54:46 หรือ 52:48</td>
                  <td className="p-3.5 font-bold text-emerald-700">50:50 หรือ 48:52</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">ความสูงจุดศูนย์ถ่วง (Center of Gravity)</td>
                  <td className="p-3.5 text-slate-600">560 – 600 mm</td>
                  <td className="p-3.5 text-slate-600">520 – 550 mm</td>
                  <td className="p-3.5 font-bold text-emerald-700">450 – 480 mm (ต่ำสุด)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">ความแข็งแกร่งตัวถังบิดตัว</td>
                  <td className="p-3.5 text-slate-600">22,000 – 28,000 Nm/deg</td>
                  <td className="p-3.5 text-slate-600">25,000 – 30,000 Nm/deg</td>
                  <td className="p-3.5 font-bold text-emerald-700">&gt; 35,000 – 45,000 Nm/deg</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">ความเร็วในการตอบสนองแรงบิด</td>
                  <td className="p-3.5 text-slate-600">300 – 600 ms</td>
                  <td className="p-3.5 text-slate-600">100 ms (EV) / 500 ms (ICE)</td>
                  <td className="p-3.5 font-bold text-emerald-700">&lt; 10 – 15 ms</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">ความซับซ้อนของชิ้นส่วนกลไก</td>
                  <td className="p-3.5 text-slate-600">สูงมาก</td>
                  <td className="p-3.5 text-red-600">สูงสุด (เครื่อง+มอเตอร์+ชาร์จเจอร์)</td>
                  <td className="p-3.5 font-bold text-emerald-700">ต่ำ (มอเตอร์+เกียร์ทดรอบเดียว)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: DRIVER ADAPTATION GUIDELINES */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-3 text-slate-900">
            <span className="w-2 h-7 bg-lime-500 rounded-full inline-block"></span>
            6. คู่มือการปรับตัวสำหรับผู้ขับขี่ (Driver Adaptation Guidelines)
          </h2>

          <div className="space-y-4 not-prose my-8">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">การควบคุมน้ำหนักเท้าขวา (Modulate Throttle)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  ในรถยนต์ไฟฟ้า การกดคันเร่งเพียง 20% สามารถสร้างแรงดึงเท่ากับการกดมิดในรถสันดาป ให้ฝึกการขยับข้อเท้าอย่างละเอียดแบบมิลลิเมตรเพื่อความนุ่มนวลของผู้โดยสาร
                </p>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">การกะระยะเบรกและการเว้นระยะห่าง</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  เนื่องจากรถมีน้ำหนักเพิ่มขึ้น 300-500 กิโลกรัม ในช่วงความเร็วสูง (&gt; 120 km/h) ระยะเบรกจะยาวขึ้นกว่ารถคันเดิม ควรเผื่อระยะเบรกเพิ่มขึ้น 10-15%
                </p>
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">การปรับตัวกับความเงียบและเสียงยาง</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  เมื่อไม่มีเสียงเครื่องยนต์ คุณจะได้ยินเสียงลมปะทะและเสียงยางบดถนนชัดเจนขึ้น การเลือกยางที่มีโฟมซับเสียง (Acoustic Foam) และการติดตั้งพรมปูพื้น TPE เข้ารูปจะช่วยลดเสียงสะท้อนในห้องโดยสารได้อย่างเห็นผล
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
                <Sparkles className="w-4 h-4" /> EVSELECT Transition Upgrades
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                อัปเกรดความสมบูรณ์แบบให้รถ EV ของคุณ
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mb-6">
                ตอบโจทย์การใช้งานจริงบนถนนเมืองไทยด้วยอุปกรณ์ตกแต่งและช่วงล่างตรงรุ่นที่ผ่านการคัดสรรโดยทีมวิศวกร EVSELECT:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">ชุดโช้คอัพสเปกถนนไทย</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    วาล์วแบบ Digressive ช่วยซับรอยต่อคอสะพานอย่างนุ่มนวล แต่หน่วงตัวถัง 2 ตันไม่ให้โยนตัวที่ความเร็วสูง
                  </p>
                </div>

                <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">พรมปูพื้น TPE ซับเสียง 3D</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    เข้ารูปไร้รอยต่อ ทนน้ำ ปราศจากกลิ่นเคมี พร้อมชั้นฟองน้ำลดเสียงยางและเสียงหินดีดใต้ท้องรถ
                  </p>
                </div>

                <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl">
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">ม่านบังแดดหลังคาแก้ว</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    ลดความร้อนสะสมจากหลังคาพาโนรามา ช่วยลดภาระคอมเพรสเซอร์แอร์ ประหยัดแบตเตอรี่วิ่งได้ไกลขึ้น
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  รองรับรถยนต์ไฟฟ้าทุกแบรนด์ชั้นนำในไทย: BYD, Tesla, Zeekr, Changan Deepal, MG, GAC Aion
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
          href="/articles/ev-performance-driving-techniques"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-lime-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>บทความก่อนหน้า: เทคนิคการขับ EV สมรรถนะสูง</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/articles/ev-horsepower-vs-torque-explained"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-slate-100 hover:bg-lime-50 hover:text-lime-700 text-slate-800 px-4 py-2 rounded-xl border border-slate-200 transition-all"
          >
            <span>บทความถัดไป: แรงม้า vs แรงบิดในรถ EV</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </article>
  );
}
