import Link from 'next/link';
import Image from 'next/image';
import { ImageCredit } from '@/components/ImageCredit';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
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
  ThermometerSun,
  Droplets,
  AlertTriangle,
  Compass,
  ArrowDownCircle,
  Flame,
  Activity,
  Wrench,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/optimizing-ev-suspension-thai-roads' },
  title: 'การเซ็ตติ้งช่วงล่างรถ EV ให้สมบูรณ์แบบบนถนนเมืองไทย: รอยต่อสะพาน คอสะพานทรุด ลูกระนาด และน้ำท่วมขัง | EVSELECT',
  description: 'เจาะลึกวิศวกรรมการเซ็ตอัปช่วงล่างสำหรับรถยนต์ไฟฟ้าในไทย: รับมือรอยต่อสะพาน คอสะพานทรุด ลูกระนาดไม่ได้มาตรฐาน ความร้อนผิวถนน 50-65°C และน้ำท่วมขัง พร้อมสูตร Bump Travel >45mm วาล์วไดเกรสซีฟ และตารางค่าเซ็ตติ้งตรงรุ่น BYD Seal, Tesla Model Y, MG4, Deepal S07, Zeekr X',
  keywords: [
    'เซ็ตช่วงล่าง EV',
    'ช่วงล่างรถยนต์ไฟฟ้า ถนนเมืองไทย',
    'รอยต่อสะพาน รถ EV',
    'คอสะพานทรุด รถไฟฟ้า',
    'Bump Travel รถ EV',
    'Digressive Damping',
    'ช่วงล่าง BYD Seal',
    'ช่วงล่าง Tesla Model Y',
    'ช่วงล่าง MG4',
    'โช้คอัพทนความร้อน EV'
  ],
  openGraph: {
    title: 'การเซ็ตติ้งช่วงล่างรถ EV ให้สมบูรณ์แบบบนถนนเมืองไทย | EVSELECT Engineering Guide',
    description: 'คู่มือวิศวกรรมช่วงล่างรถยนต์ไฟฟ้าสเปกไทย: รับมือรอยต่อสะพาน คอสะพานทรุด วาล์วไดเกรสซีฟ รักษาระยะ Bump Travel >45mm และตารางเซ็ตติ้งรถ EV ยอดนิยม 5 รุ่น',
    url: 'https://evselects.com/articles/optimizing-ev-suspension-thai-roads',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 675,
        alt: 'การเซ็ตติ้งช่วงล่างรถยนต์ไฟฟ้าบนสภาพถนนเมืองไทย EVSELECT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'การเซ็ตติ้งช่วงล่างรถ EV ให้สมบูรณ์แบบบนถนนเมืองไทย | EVSELECT',
    description: 'สูตรเซ็ตช่วงล่างรถ EV หนัก 2 ตันให้ซับคอสะพานเนียนกริบ ไม่กระด้าง ไม่ยัน Bump Stop ทนความร้อนและน้ำท่วมขัง',
    images: ['/images/hero-bg.jpg']
  }
};

export default function OptimizingEVSuspensionThaiRoadsPage() {
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
              ระบบช่วงล่าง &amp; แฮนด์ลิ่ง (Suspension Engineering)
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
              ถนนเมืองไทย (Thai Road Conditions)
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 27 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 12 นาที
            </span>
          </div>

          <div className="flex items-center gap-2 bg-lime-50 border border-lime-300 px-4 py-1.5 rounded-full shadow-2xs">
            <span className="text-xs text-slate-600 font-medium"><Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">EVSELECT</Link> Technical Level</span>
            <span className="text-sm font-black text-lime-700">Expert / Advanced</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          การเซ็ตติ้งช่วงล่างรถ EV ให้สมบูรณ์แบบบนถนนเมืองไทย: รับมือรอยต่อสะพาน, คอสะพานทรุด, ลูกระนาด และน้ำท่วมขัง
        </h1>

        <p
          className="text-base sm:text-base text-slate-600 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          ถอดรหัสฟิสิกส์ยานยนต์ขั้นสูง: ทำไมช่วงล่าง OEM ของรถยนต์ไฟฟ้าที่หนักกว่า 2 ตันและจุดศูนย์ถ่วงต่ำ ถึงมักมีอาการ <strong>&quot;เด้ง ดีด แข็งกระด้าง หรือยัน Bump Stop&quot;</strong> เมื่อเจอรอยต่อสะพานโทลล์เวย์ คอสะพานทรุด ลูกระนาดชัน และความร้อนผิวถนนกรุงเทพฯ 65°C พร้อมสูตรการคำนวณระยะยุบ (Bump Travel), วาล์วไดเกรสซีฟ (Digressive Valving) และตารางค่าเซ็ตติ้งเฉพาะรุ่นสำหรับ BYD Seal, Tesla Model Y, MG4, Deepal S07 และ Zeekr X
        </p>
      </header>
      <p data-contextual-reading className="mb-8 text-sm leading-relaxed text-slate-600">คำว่า High-speed บนปุ่มปรับโช้คไม่ได้หมายถึงความเร็วรถ อ่าน <Link href="/articles/ev-damper-tuning-bump-rebound-guide#shaft-speed" className="font-semibold text-lime-800 underline underline-offset-4">ความเร็วรถกับความเร็วก้านโช้คต่างกันอย่างไร</Link> จะช่วยให้แยกทางเป็นคลื่นออกจากขอบรอยต่อคม ๆ ได้ชัดขึ้น</p>

      
      {/* 2.5 Hero Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl">
        <Image
          src="/images/articles/single-wishbone-suspension.jpg"
          alt="แผนภาพ MacPherson strut และปีกนกล่างสำหรับอธิบายโครงสร้างช่วงล่าง"
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            Optimizing EV Suspension Setup
          </span>
        </div>
      </div>

      <ImageCredit author="Atharv Chandel" source="https://commons.wikimedia.org/wiki/File:Basic_Construction_of_Single_Wishbone_Suspension_System.jpg" license="CC BY-SA 4.0" licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/" />

      {/* 3. Executive Verdict & Core Pillars Grid */}
      <div className="bg-slate-900 text-white border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-lime-400" /> <Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">EVSELECT</Link> Suspension Golden Rules
            </div>
            <div className="text-3xl font-black text-lime-400 flex items-baseline gap-2">
              4 กฎทอง <span className="text-sm font-normal text-slate-400">ช่วงล่าง EV เมืองไทย</span>
            </div>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              &quot;น้ำหนักแบตเตอรี่ 450-700 กก. ใต้ท้องรถสร้างโมเมนตัมมหาศาล การเซ็ตติ้งบนถนนไทยต้องเน้นรักษาระยะยุบอิสระ (Bump Travel &gt; 45mm) และใช้วาล์วช็อกอัปไดเกรสซีฟที่ปล่อยน้ำมันได้เร็วเมื่อเจอแรงกระแทกความเร็วสูง&quot;
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-lime-500/10 text-lime-400 rounded-xl shrink-0 mt-0.5">
                <ArrowDownCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">1. ระยะ Bump Travel &gt; 45 mm</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  ห้ามโหลดเตี้ยจนช็อกอัปแตะ Bump Stop ขณะจอดเด็ดขาด มิฉะนั้นแรงกระแทกจะพุ่งสู่ตัวถังแบบไร้ขีดจำกัด
                </div>
              </div>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl shrink-0 mt-0.5">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">2. วาล์วช็อกอัปแบบ Digressive</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  แรงหน่วงความเร็วต่ำสูงเพื่อคุมตัวถัง 2 ตันไม่ให้โยนตัว แต่เปิดวาล์ว High-Speed ซับรอยต่อสะพานให้นุ่มนวล
                </div>
              </div>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-orange-500/10 text-orange-400 rounded-xl shrink-0 mt-0.5">
                <ThermometerSun className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">3. น้ำมันโช้คดัชนีความหนืดสูง (HVI)</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  ใช้น้ำมันสังเคราะห์แท้ที่มีค่า Viscosity Index &gt; 300 ป้องกันน้ำมันเหลวและเกิดฟอง (Cavitation) ในแดด 65°C
                </div>
              </div>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/70 flex items-start gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0 mt-0.5">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">4. เสื้อสแตนเลส &amp; บูชยางกันน้ำ</div>
                <div className="text-[11px] text-slate-300 mt-1">
                  ป้องกันสนิมจากน้ำท่วมขังด้วย Inox-Line/อลูมิเนียมอโนไดซ์ และหลีกเลี่ยง Pillowball เปลือยที่สึกหรอจากโคลน
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Section 1: กายวิภาคถนนเมืองไทย */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            1. สภาพถนนเมืองไทย: บททดสอบสุดหินของรถยนต์ไฟฟ้าน้ำหนัก 2 ตัน
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ในมุมมองด้านวิศวกรรมพลศาสตร์ยานยนต์ (Vehicle Dynamics) รถยนต์ไฟฟ้า (BEV) มีคุณลักษณะทางกายภาพที่แตกต่างจากรถยนต์สันดาปภายใน (ICE) อย่างสิ้นเชิง <strong>จุดศูนย์ถ่วง (Center of Gravity - CG) ที่ต่ำมาก (ประมาณ 450 - 500 มม.)</strong> ร่วมกับ <strong>น้ำหนักตัวถังที่มหาศาล (2,000 – 2,600 กก.)</strong> จากชุดแบตเตอรี่แรงดันสูงใต้ท้องรถ ทำให้เมื่อล้อรถวิ่งผ่านความไม่สม่ำเสมอของผิวถนนในประเทศไทย พลังงานจลน์และโมเมนตัมที่กระแทกเข้าสู่ระบบกันสะเทือนจะถูกขับเคลื่อนด้วย 2 ปัจจัยหลัก คือ <strong>น้ำหนักตัวรถ (แทนด้วยตัวแปร m)</strong> และ <strong>ความเร็วในการวิ่ง (แทนด้วยตัวแปร v)</strong> โดยเฉพาะเมื่อความเร็ว (v) เพิ่มขึ้น พลังงานการกระแทกจะทวีคูณขึ้นเป็นเท่าตัว ส่งผลให้ระบบช่วงล่างต้องรับภาระหนักกว่ารถเครื่องยนต์สันดาปทั่วไปถึง 20–35%
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>รอยต่อสะพานและคอสะพานทรุด (Bridge Expansion Joints)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              รอยต่อเหล็กบนทางด่วน (เช่น ดอนเมืองโทลล์เวย์, ทางพิเศษเฉลิมมหานคร) และคอสะพานข้ามคลองที่ทรุดตัว สร้างแรงกระตุ้นในแนวดิ่งที่มี <strong>ความเร็วลูกสูบโช้คกระแทกขึ้นอย่างรวดเร็ว (ความเร็วการยุบตัวของแกนโช้คเกินกว่า 300 - 500 มม./วินาที)</strong> ภายในเวลาไม่ถึง 20 มิลลิวินาที หากโช้คอัพมีแรงหน่วงช่วงความเร็วสูงมากเกินไป แรงสะเทือนจะทะลุเข้าสู่โครงสร้างตัวถัง ทำให้ผู้โดยสารรู้สึกกระแทกหลังแอ่นและรถเสียอาการทรงตัว
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>ร่องลึกถนนทรุดเลนซ้าย (Truck Ruts &amp; Asphalt Creep)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ถนนสายหลักในไทย (เช่น ถนนพระราม 2, ทางหลวงหมายเลข 347) มีร่องคลื่นยางมะตอยทรุดจากการรับน้ำหนักรถบรรทุก ทำให้เกิดอาการ <strong>Tramlining (หน้ารถวิ่งดึงตามร่องถนน)</strong> และเกิด <strong>Bump Steer</strong> เมื่อช่วงล่างยุบตัวไม่พร้อมกัน ซ้ำเติมด้วยน้ำหนักด้านหน้าของ EV ที่กดทับลงบนมุมล้อ
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>ลูกระนาดไม่ได้มาตรฐานในซอย (Steep &amp; Non-Standard Bumps)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ลูกระนาดชะลอความเร็วในหมู่บ้านและซอยแคบมักมีความสูงชันเกินมาตรฐาน (12–18 ซม.) และช่วงฐานสั้น รถ EV ที่มีระยะฐานล้อยาว (2,900 – 3,100 มม.) หากผ่านการโหลดเตี้ยที่ไม่ถูกต้อง ท้องรถหรือเคสแบตเตอรี่จะมีความเสี่ยงสูงมากที่จะครูดหรือกระแทกพื้น
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl shadow-2xs space-y-2.5">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
              <Droplets className="w-4 h-4 shrink-0" />
              <span>น้ำท่วมขังและเศษดินทราย (Monsoon Flooding &amp; Debris)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              น้ำรอการระบายในฤดูมรสุมมีสารแขวนลอยและไอเกลือ/กรดปนเปื้อน นำไปสู่การเกิดสนิมที่เกลียวปรับสตรัท การกัดกร่อนลูกปืน Pillowball และการสึกหรอของซีลกันฝุ่นแกนโช้คอัพอย่างรวดเร็ว
            </p>
          </div>
        </div>
      </section>

      {/* 5. Section 2: ผลกระทบความร้อน 50-65°C ต่อน้ำมันโช้ค */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            2. อุณหภูมิผิวถนน 50–65°C: ศัตรูเงียบที่ทำให้น้ำมันโช้คเหลวและเกิด Cavitation
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ในฤดูร้อนของประเทศไทย อุณหภูมิอากาศแวดล้อม 38 - 42°C ส่งผลให้อุณหภูมิผิวหน้ายางมะตอยพุ่งสูงถึง <strong>50 - 65°C</strong> เมื่อรวมกับความร้อนจากการทำงานของมอเตอร์ไฟฟ้าด้านล่าง และการขยับตัวขึ้นลงอย่างต่อเนื่องของลูกสูบโช้คอัพภายใต้น้ำหนัก 2 ตัน อุณหภูมิภายในกระบอกโช้คอัพสามารถแตะระดับ <strong>75 - 90°C</strong> ได้อย่างง่ายดาย
        </p>

        {/* Heat Mechanics Comparison Card */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm my-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-500" />
            พฤติกรรมของน้ำมันโช้คอัพภายใต้ความร้อนสะสมสูง (Thermal Thinning &amp; Damping Fade)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5">
              <div className="text-sm font-bold text-rose-900 mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-600" />
                โช้คอัพน้ำมันเกรดมาตรฐาน (Mineral Oil, VI &lt; 150)
              </div>
              <ul className="text-xs sm:text-sm text-rose-800/90 space-y-2 list-disc pl-4">
                <li>
                  <strong>Viscosity Drop:</strong> ค่าความหนืดจลน์ (Kinematic Viscosity) ลดลงฮวบจาก 15 cSt ที่ 40°C เหลือเพียง 3.5 cSt ที่ 80°C (ความหนืดลดลงเกิน 75%)
                </li>
                <li>
                  <strong>อาการที่เกิดขึ้น:</strong> แรงหน่วง (Damping Force) หายไปกว่า 40% รถเริ่มมีอาการ &quot;ลอย โยน เด้งซ้ำซาก (Secondary Bouncing)&quot; ยิ่งขับเร็วยิ่งรู้สึกไม่เกาะถนน
                </li>
                <li>
                  <strong>Cavitation &amp; Aeration:</strong> น้ำมันที่มีแรงดันก๊าซต่ำในโครงสร้าง Twin-Tube จะเดือดเป็นฟองอากาศ ส่งผลให้วาล์วไม่สามารถสร้างแรงต้านไฮดรอลิกได้
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5">
              <div className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                โช้คอัพสังเคราะห์แท้ดัชนีสูง (Synthetic Fluid, VI &gt; 300 + High Pressure Gas)
              </div>
              <ul className="text-xs sm:text-sm text-emerald-800/90 space-y-2 list-disc pl-4">
                <li>
                  <strong>Thermal Stability:</strong> ค่าความหนืดคงที่สม่ำเสมอ แม้อุณหภูมิพุ่งแตะ 90°C แรงหน่วงแปรเปลี่ยนน้อยกว่า 8%
                </li>
                <li>
                  <strong>Gas Pressure Monotube:</strong> อัดก๊าซไนโตรเจนแรงดันสูง 20 - 30 bar แยกห้องด้วย Free Piston ป้องกันการเกิดฟองอากาศอย่างเด็ดขาด 100%
                </li>
                <li>
                  <strong>Consistent Handling:</strong> ฟีลลิ่งการควบคุมรถคมชัด แม่นยำเท่ากันตั้งแต่สตาร์ทรถตอนเช้าจนถึงขับข้ามจังหวัดตอนบ่ายแดดจัด
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 3: Custom Inline React SVG Engineering Diagram */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            3. ไดอะแกรมวิศวกรรม: การวิเคราะห์ระยะยุบ (Bump Travel) และการชน Bump Stop
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          สาเหตุอันดับ 1 ที่ทำให้เจ้าของรถ EV บ่นว่า <strong>&quot;ช่วงล่างกระด้าง ตึงตัง หรือคอสะพานแล้วสะเทือนถึงกะโหลก&quot;</strong> ไม่ใช่เพราะสปริงแข็งเกินไป แต่เกิดจาก <strong>&quot;ระยะยุบอิสระของโช้คอัพหมดลง (Zero Free Bump Travel)&quot;</strong> จนตัวถังกดทับลงบนยางกันกระแทก (Micro-cellular Polyurethane Bump Stop) โดยตรง ซึ่งตัวยางกันกระแทกนี้มีความแข็งสูงมาก เกินกว่า 30 กก./มม. ยิ่งยุบตัวยิ่งแข็งขึ้นอย่างก้าวกระโดด
        </p>

        {/* SVG Diagram Container */}
        <div className="bg-slate-950 p-4 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl my-8 overflow-hidden text-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                EV Suspension Kinematics: Bump Stroke &amp; Travel Budget
              </span>
            </div>
            <span className="text-[11px] text-slate-400">วิเคราะห์เปรียบเทียบสเปกมาตรฐาน vs โหลดผิดวิธี vs เซ็ตติ้งถนนไทย</span>
          </div>

          {/* Inline Responsive SVG */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 920 480"
              className="w-full min-w-[760px] h-auto font-sans"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background grid */}
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.75" />
                </pattern>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#84cc16" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4d7c0f" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="amberGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#b45309" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#991b1b" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              <rect width="920" height="480" fill="#090d16" />
              <rect width="920" height="480" fill="url(#gridPattern)" />

              {/* Title Section */}
              <text x="40" y="38" fill="#f8fafc" fontSize="15" fontWeight="bold">
                การกระจายระยะสโตรกของโช้คอัพ (Stroke Allocation) ใน 3 รูปแบบการติดตั้ง
              </text>
              <text x="40" y="58" fill="#94a3b8" fontSize="11">
                เปรียบเทียบระยะยุบอิสระ (Free Bump Travel) ก่อนการชน Bump Stop เมื่อวิ่งผ่านรอยต่อคอสะพานลึก 35 มม.
              </text>

              {/* Case 1: OEM Suspension */}
              <g transform="translate(60, 90)">
                <rect x="0" y="0" width="240" height="34" rx="8" fill="#1e293b" stroke="#334155" />
                <text x="120" y="21" fill="#e2e8f0" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Case A: OEM ติดรถเดิมๆ
                </text>

                <rect x="70" y="50" width="100" height="280" rx="10" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                
                <rect x="75" y="55" width="90" height="70" fill="#3b82f6" fillOpacity="0.3" rx="4" stroke="#60a5fa" strokeDasharray="3 3" />
                <text x="120" y="95" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">Droop 40mm</text>

                <line x1="45" y1="125" x2="195" y2="125" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
                <text x="35" y="129" fill="#38bdf8" fontSize="10" textAnchor="end" fontWeight="bold">Ride Height</text>

                <rect x="75" y="125" width="90" height="60" fill="#84cc16" fillOpacity="0.35" rx="4" stroke="#a3e635" />
                <text x="120" y="158" fill="#bef264" fontSize="10" fontWeight="bold" textAnchor="middle">Free Bump 32mm</text>

                <rect x="75" y="185" width="90" height="85" fill="url(#amberGradient)" rx="4" stroke="#f59e0b" />
                <text x="120" y="225" fill="#fef3c7" fontSize="10" fontWeight="bold" textAnchor="middle">Bump Stop 50mm</text>
                <text x="120" y="240" fill="#fef3c7" fontSize="9" textAnchor="middle">(เริ่มหน่วงสะเทือน)</text>

                <rect x="75" y="270" width="90" height="55" fill="url(#redGradient)" rx="4" stroke="#ef4444" />
                <text x="120" y="302" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Metal Limit</text>

                <rect x="20" y="340" width="200" height="30" rx="6" fill="#451a03" stroke="#b45309" />
                <text x="120" y="360" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">
                  ⚠️ คอสะพานกระแทก Bump Stop บ่อย
                </text>
              </g>

              {/* Case 2: Wrong Lowering (Short Spring on OEM Shock) */}
              <g transform="translate(340, 90)">
                <rect x="0" y="0" width="240" height="34" rx="8" fill="#450a0a" stroke="#7f1d1d" />
                <text x="120" y="21" fill="#fca5a5" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Case B: โหลดสปริงสั้นกับโช้คเดิม
                </text>

                <rect x="70" y="50" width="100" height="280" rx="10" fill="#0f172a" stroke="#475569" strokeWidth="2" />
                
                <rect x="75" y="55" width="90" height="110" fill="#3b82f6" fillOpacity="0.25" rx="4" stroke="#60a5fa" strokeDasharray="3 3" />
                <text x="120" y="115" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">Droop 65mm</text>

                <line x1="45" y1="165" x2="195" y2="165" stroke="#ef4444" strokeWidth="2.5" />
                <text x="35" y="169" fill="#f87171" fontSize="10" textAnchor="end" fontWeight="bold">Ride Height -30mm</text>

                <rect x="75" y="165" width="90" height="20" fill="#ef4444" fillOpacity="0.5" rx="4" stroke="#f87171" />
                <text x="120" y="179" fill="#fecaca" fontSize="9" fontWeight="bold" textAnchor="middle">Free 10mm ❌</text>

                <rect x="75" y="185" width="90" height="85" fill="url(#amberGradient)" rx="4" stroke="#f59e0b" />
                <text x="120" y="222" fill="#fef3c7" fontSize="10" fontWeight="bold" textAnchor="middle">ชนยางกันกระแทก</text>
                <text x="120" y="238" fill="#fef3c7" fontSize="9" textAnchor="middle">ตลอดเวลาที่รถวิ่ง!</text>

                <rect x="75" y="270" width="90" height="55" fill="url(#redGradient)" rx="4" stroke="#ef4444" />
                <text x="120" y="302" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Bottom Out 💥</text>

                <rect x="20" y="340" width="200" height="30" rx="6" fill="#7f1d1d" stroke="#ef4444" />
                <text x="120" y="360" fill="#fecaca" fontSize="10" fontWeight="bold" textAnchor="middle">
                  ⛔ กระด้างรุนแรง ท้ายปัด เสี่ยงเคสแบตแตก
                </text>
              </g>

              {/* Case 3: Optimized Thai EV Coilover Setup */}
              <g transform="translate(620, 90)">
                <rect x="0" y="0" width="240" height="34" rx="8" fill="#14532d" stroke="#22c55e" />
                <text x="120" y="21" fill="#86efac" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Case C: เซ็ตติ้ง EV สเปกถนนไทย ✨
                </text>

                <rect x="70" y="50" width="100" height="280" rx="10" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />
                
                <rect x="75" y="55" width="90" height="60" fill="#3b82f6" fillOpacity="0.3" rx="4" stroke="#60a5fa" strokeDasharray="3 3" />
                <text x="120" y="90" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">Droop 35mm</text>

                <line x1="45" y1="115" x2="195" y2="115" stroke="#84cc16" strokeWidth="2.5" />
                <text x="35" y="119" fill="#a3e635" fontSize="10" textAnchor="end" fontWeight="bold">Ride Height</text>

                <rect x="75" y="115" width="90" height="95" fill="url(#greenGradient)" rx="4" stroke="#84cc16" />
                <text x="120" y="158" fill="#f7fee7" fontSize="11" fontWeight="black" textAnchor="middle">Free Bump 52mm ✅</text>
                <text x="120" y="174" fill="#ecfccb" fontSize="9" textAnchor="middle">(ซับรอยต่อสะพานเนียน)</text>

                <rect x="75" y="210" width="90" height="65" fill="url(#amberGradient)" rx="4" stroke="#f59e0b" />
                <text x="120" y="242" fill="#fef3c7" fontSize="9" fontWeight="bold" textAnchor="middle">Bump Stop 38mm</text>
                <text x="120" y="256" fill="#fef3c7" fontSize="8" textAnchor="middle">(Micro-cellular Polyurethane)</text>

                <rect x="75" y="275" width="90" height="50" fill="#334155" rx="4" stroke="#475569" />
                <text x="120" y="304" fill="#94a3b8" fontSize="9" textAnchor="middle">Safety Margin</text>

                <rect x="20" y="340" width="200" height="30" rx="6" fill="#14532d" stroke="#22c55e" />
                <text x="120" y="360" fill="#bbf7d0" fontSize="10" fontWeight="bold" textAnchor="middle">
                  🏆 นุ่มแน่น ซับคอสะพาน ทรงตัวนิ่งสนิท
                </text>
              </g>

              {/* Bottom Legend */}
              <g transform="translate(140, 440)">
                <rect x="0" y="0" width="14" height="14" fill="#84cc16" rx="3" />
                <text x="22" y="11" fill="#cbd5e1" fontSize="10">ระยะยุบอิสระ (Free Bump Travel)</text>

                <rect x="220" y="0" width="14" height="14" fill="#f59e0b" rx="3" />
                <text x="242" y="11" fill="#cbd5e1" fontSize="10">โซนยางกันกระแทก (Bump Stop Range)</text>

                <rect x="470" y="0" width="14" height="14" fill="#ef4444" rx="3" />
                <text x="492" y="11" fill="#cbd5e1" fontSize="10">จุดกระแทกสุดสโตรก (Bottom Out / Chassis Spike)</text>
              </g>
            </svg>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
            <strong className="text-lime-400">บทสรุปทางวิศวกรรม:</strong> หากเปลี่ยนเฉพาะสปริงโหลดสั้นบนกระบอกโช้คเดิม (Case B) ระยะสโตรกของโช้คจะถูกกดลงไปจนเหลือระยะยุบอิสระไม่ถึง 10-15 มม. เมื่อวิ่งผ่านรอยต่อสะพาน 35 มม. โช้คจะชน Bump Stop เต็มแรงทันที ส่งผลให้เกิดแรงกระแทกกระด้างและสูญเสียการยึดเกาะ การแก้ปัญหาที่ถูกต้องสำหรับรถ EV คือการใช้สตรัทปรับเกลียวแบบ <strong>Full Tap (สไลด์กระบอก)</strong> ร่วมกับการคำนวณระยะสโตรกให้มี <strong>Free Bump Travel ไม่ต่ำกว่า 45–55 มม. (Case C)</strong>
          </div>
        </div>
      </section>

      {/* 7. Section 4: วาล์วไดเกรสซีฟ (Digressive Valving) */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            4. ศาสตร์แห่งวาล์วไดเกรสซีฟ (Digressive Valving): คุมตัวถัง 2 ตันนิ่งสนิท แต่ซับรอยต่อสะพานนุ่มมือ
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ตามหลักการปรับจูนของ <strong>OptimumG</strong> และ <strong>Racecar Engineering</strong> โค้งแรงหน่วงเทียบกับความเร็วลูกสูบ (Force-Velocity Curve) ของโช้คอัพแบ่งออกเป็น 3 ช่วงหลัก ซึ่งเป็นหัวใจสำคัญในการรับมือกับสภาพถนนเมืองไทย:
        </p>

        {/* 3 Speed Regimes Table */}
        <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-2xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-3.5 font-bold">ช่วงความเร็วลูกสูบ (Piston Velocity)</th>
                <th className="p-3.5 font-bold">อาการตัวถังที่ควบคุม (Chassis Motion)</th>
                <th className="p-3.5 font-bold">กลไกวาล์วภายในโช้คอัพ</th>
                <th className="p-3.5 font-bold">การเซ็ตติ้งสำหรับ EV ถนนไทย</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">
                  Low-Speed Damping<br />
                  <span className="text-xs text-lime-700 font-medium">(0 – 50 mm/s)</span>
                </td>
                <td className="p-3.5">
                  การโคลงขณะเลี้ยว (Body Roll), หน้าทิ่มขณะเบรก (Pitch Dive), ท้ายยุบตอนกดคันเร่ง (Squat)
                </td>
                <td className="p-3.5">
                  รูบายพาสแบบเข็มปรับ (Needle Bleed Orifice) และแรงพรีโหลดของแผ่นชิมชุดแรก
                </td>
                <td className="p-3.5 text-emerald-800 font-semibold bg-emerald-50/40">
                  เซ็ตหน่วงสูง (Stiff Low-Speed) เพื่อรั้งน้ำหนักแบต 2 ตันไม่ให้โยนตัวและลดอาการเมารถ
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">
                  Mid-Speed Damping<br />
                  <span className="text-xs text-blue-700 font-medium">(50 – 150 mm/s)</span>
                </td>
                <td className="p-3.5">
                  การยุบ-ยืดตัวเมื่อวิ่งผ่านเนินลอนคลื่นบนมอเตอร์เวย์ และการเปลี่ยนเลนกะทันหัน
                </td>
                <td className="p-3.5">
                  การโก่งตัวของแผ่นชิมหลัก (Main Shim Stack Deflection)
                </td>
                <td className="p-3.5 text-slate-700">
                  เซ็ตหน่วงปานกลางแบบเชิงเส้น (Linear Transition) เพื่อความเสถียรในการเดินทางไกล
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">
                  High-Speed Damping<br />
                  <span className="text-xs text-rose-700 font-medium">(&gt; 150 – 500+ mm/s)</span>
                </td>
                <td className="p-3.5">
                  การกระแทกรอยต่อสะพานเหล็ก, คอสะพานทรุด, หลุมฝาท่อ และสันลูกระนาดชัน
                </td>
                <td className="p-3.5">
                  วาล์วบายพาสแรงดันสูง (High-Speed Blow-Off Spring Valve)
                </td>
                <td className="p-3.5 text-blue-900 font-semibold bg-blue-50/40">
                  เซ็ตหน่วงต่ำแบบไดเกรสซีฟ (Blow-Off / Digressive) ให้น้ำมันไหลผ่านได้เร็วทันที ล้อลอยซับหลุมได้โดยไม่ส่งแรงตึงตังเข้าห้องโดยสาร
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Section 5: การป้องกันสนิมและน้ำท่วมขัง */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            5. มาตรการป้องกันสนิมและน้ำท่วมขัง: เลือกวัสดุอย่างไรให้อยู่รอดเกิน 5 ปีในไทย
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          น้ำท่วมขังรอการระบายในกรุงเทพฯ และสภาพอากาศร้อนชื้นของไทยเป็นตัวการทำลายชิ้นส่วนช่วงล่างแต่งราคาแพง หากเลือกใช้วัสดุที่ไม่ทนต่อการกัดกร่อน เกลียวปรับสตรัทจะเกิดสนิมจนหมุนปรับไม่ได้ภายในเวลาไม่กี่เดือน:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
          <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-lime-100 text-lime-700 flex items-center justify-center font-bold mb-3">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">กระบอกสแตนเลส INOX หรืออลูมิเนียมเกรดอากาศยาน</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              เลือกกระบอกช็อกอัปที่ผลิตจาก <strong>Stainless Steel เกรด INOX-LINE</strong> หรือ <strong>Forged 6061-T6 Aluminum อโนไดซ์แข็ง</strong> ซึ่งผ่านการทดสอบพ่นละอองเกลือ (Salt Spray Test) เกิน 300 ชั่วโมง ไม่เป็นสนิมตลอดอายุการใช้งาน
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">หัวเบ้าโช้คยางสังเคราะห์ (Rubber Top Mount)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              สำหรับรถใช้งานประจำวัน แนะนำให้ใช้หัวท็อปเมาท์ยางเสริมความแข็งแกร่ง (Reinforced Rubber) หรือใช้เบ้าเดิมติดรถ <strong>หลีกเลี่ยงลูกปืน Pillowball หัวบอลเปลือย</strong> เพราะทรายและน้ำฝนจะแทรกซึมทำให้เกิดเสียงดังกุกกักและสึกหรออย่างรวดเร็ว
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1.5">ยางกันฝุ่นและซีลปิดกั้นคราบโคลน (Full Dust Boot)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ต้องติดตั้งยางกันฝุ่นคลุมแกนช็อกอัปเต็มความยาว 100% เพื่อป้องกันเศษหินดีดใส่แกนชุบโครเมียมจนเป็นรอยตามด ซึ่งเป็นสาเหตุหลักที่ทำให้น้ำมันไฮดรอลิกรั่วซึมและซีลช็อกอัพฉีกขาด
            </p>
          </div>
        </div>
      </section>

      {/* 9. Section 6: Cheat Sheet การปรับตั้งช่วงล่างตาม 5 สภาพถนนยอดนิยมในไทย */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            6. Road Condition Setting Cheat Sheet: สูตรปรับคลิกช็อกอัพ 5 สภาพถนนไทย
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ตารางสูตรคลิกปรับโช้คอัพ (สมมติสตรัทปรับได้ 24–32 คลิก โดยนับจาก 0 = ปรับแข็งสุด / Full Stiff):
        </p>

        {/* Cheat Sheet Table */}
        <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-2xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-3.5 font-bold">สภาพเส้นทาง (Driving Scenario)</th>
                <th className="p-3.5 font-bold">Front Rebound (ยืดหน้า)</th>
                <th className="p-3.5 font-bold">Rear Rebound (ยืดหลัง)</th>
                <th className="p-3.5 font-bold">Bump / Compression (ยุบ)</th>
                <th className="p-3.5 font-bold">ข้อแนะนำในการขับขี่และฟีลลิ่ง</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  1. ทางด่วนโทลล์เวย์ &amp; บูรพาวิถี (ความเร็วสูง + คอสะพาน)
                </td>
                <td className="p-3.5 font-mono text-slate-900">10 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">8 / 24 Clicks (หน่วงแน่น)</td>
                <td className="p-3.5 font-mono text-slate-900">14 / 24 Clicks (วาล์วเปิดไว)</td>
                <td className="p-3.5 text-xs text-slate-600">
                  เน้น Rebound หลังหน่วงกระชับเพื่อหยุดอาการท้ายดีดซ้ำเมื่อลงคอสะพานด้วยความเร็ว 110–120 กม./ชม.
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  2. ถนนสุขุมวิท / สาทร / ในเมือง (ฝาท่อ + ลูกระนาดถี่)
                </td>
                <td className="p-3.5 font-mono text-slate-900">16 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">16 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">18 / 24 Clicks (นุ่มซับ)</td>
                <td className="p-3.5 text-xs text-slate-600">
                  คลายวาล์วให้น้ำมันไหลสะดวก ซับรอยต่อถนนคอนกรีตและข้ามลูกระนาดเตี้ยๆ ได้นุ่มนวล ไม่สะเทือนสะโพก
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  3. ทางหลวงชนบท &amp; สายรอง (ถนนคลื่น + เลนซ้ายทรุด)
                </td>
                <td className="p-3.5 font-mono text-slate-900">13 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">12 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">15 / 24 Clicks</td>
                <td className="p-3.5 text-xs text-slate-600">
                  ปล่อยให้ล้อขยับตามผิวถนนได้อิสระ ป้องกันล้อลอยเหนือกองยางมะตอย พร้อมตั้งมุมโทหน้าใกล้ 0 เพื่อลด Tramlining
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  4. หน้าฝนน้ำท่วมขัง &amp; ถนนลื่น (Wet Safety)
                </td>
                <td className="p-3.5 font-mono text-slate-900">15 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">14 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">16 / 24 Clicks</td>
                <td className="p-3.5 text-xs text-slate-600">
                  ลดความกระด้างลง 15-20% เพื่อให้หน้ายางสัมผัสและรีดน้ำบนพื้นผิวได้เต็มประสิทธิภาพ ลดโอกาสเหินน้ำ (Aquaplaning)
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  5. วิ่งขึ้นเขา / มุดโค้งสไตล์สปอร์ต (Spirited Canyon / B-Road)
                </td>
                <td className="p-3.5 font-mono text-slate-900">6 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">5 / 24 Clicks</td>
                <td className="p-3.5 font-mono text-slate-900">8 / 24 Clicks</td>
                <td className="p-3.5 text-xs text-slate-600">
                  พวงมาลัยตอบสนองฉับไว ตัวถังเอียงน้อยลงอย่างเด่นชัด เหมาะสำหรับผู้ที่ต้องการฟีลลิ่งเหมือนขับรถแข่งโกคาร์ท
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Section 7: คำแนะนำเฉพาะรุ่นสำหรับ 5 EV ยอดนิยมในไทย */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            7. คู่มือการเซ็ตติ้งเฉพาะรุ่นสำหรับ 5 รถยนต์ไฟฟ้ายอดนิยมในไทย
          </h2>
        </div>

        <div className="space-y-6 my-8">
          {/* 1. BYD Seal */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-lime-400 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-lime-500 text-black text-xs font-black rounded-lg">BYD</span>
                <h3 className="text-xl font-bold text-slate-900">BYD Seal (Dynamic / Premium / AWD Performance)</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">น้ำหนัก 2,050 – 2,185 กก. | ฐานล้อ 2,920 มม.</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 space-y-2">
                <div className="text-xs font-bold text-rose-700 uppercase tracking-wider">จุดอ่อนช่วงล่างเดิม (OEM Flaws):</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  โช้คเดิมติดรถมีแรงหน่วง Rebound ด้านหลังน้อยเกินไป ทำให้เวลาขึ้น-ลงคอสะพานด้วยความเร็วสูง ท้ายจะยุบยวบและดีดขึ้น 2-3 จังหวะ (Undamped Floating) และมีระยะ Ground Clearance ท้องรถค่อนข้างเตี้ย (120-130 มม.)
                </p>
              </div>
              <div className="lg:col-span-2 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">สูตรการเซ็ตติ้งแนะนำ (Optimal Thai Setup):</div>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li><strong>สปริงเรทหน้า/หลัง:</strong> หน้า 7.0–8.0 kgf/mm, หลัง 8.5–9.5 kgf/mm (สปริง Linear)</li>
                  <li><strong>ระดับความสูง:</strong> ปรับตั้งให้มี Ground Clearance ใต้ท้องแบตเตอรี่ Blade ไม่ต่ำกว่า <strong>140 มม.</strong> (ห้ามโหลดเกิน 20 มม.)</li>
                  <li><strong>การจูนแดมเปอร์:</strong> เพิ่ม Rebound ด้านหลังให้กระชับขึ้น 30% เพื่อคุมโมเมนตัมท้ายรถให้นิ่งสนิทหลังลงคอสะพานในจังหวะเดียว</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Tesla Model Y */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-lime-400 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-rose-600 text-white text-xs font-black rounded-lg">TESLA</span>
                <h3 className="text-xl font-bold text-slate-900">Tesla Model Y (RWD / Long Range / Performance)</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">น้ำหนัก 1,980 – 2,070 กก. | ฐานล้อ 2,890 มม.</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 space-y-2">
                <div className="text-xs font-bold text-rose-700 uppercase tracking-wider">จุดอ่อนช่วงล่างเดิม (OEM Flaws):</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  โช้คติดรถช่วงปี 2022-2024 มีแรงหน่วง High-Speed Bump แข็งเกินไป ทำให้มีอาการสะเทือนกุกกักแบบ Micro-Jitter บนถนนคอนกรีตรอยต่อถี่ ผู้โดยสารแถวหลังจะรู้สึกเหนื่อยล้า
                </p>
              </div>
              <div className="lg:col-span-2 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">สูตรการเซ็ตติ้งแนะนำ (Optimal Thai Setup):</div>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li><strong>ประเภทโช้ค:</strong> สตรัทพร้อมวาล์ว Comfort Digressive หรือ FSD (Frequency Selective Damping) เช่น KW V3 Levelling / Öhlins DFV / Tein EnduraPro Plus</li>
                  <li><strong>สปริงเรทหน้า/หลัง:</strong> หน้า 6.0–7.0 kgf/mm, หลัง 9.0–10.0 kgf/mm (พร้อมสปริง Tender ซับแรงสั่นสะเทือนจังหวะแรก)</li>
                  <li><strong>ผลลัพธ์:</strong> อาการสะเทือนบนรอยต่อสะพานหายไปกว่า 60% ซับผิวถนนเนียนเทียบเท่ารถยุโรปพรีเมียม</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. MG4 Electric */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-lime-400 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-black rounded-lg">MG</span>
                <h3 className="text-xl font-bold text-slate-900">MG4 Electric (Standard / Long Range / XPOWER)</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">น้ำหนัก 1,650 – 1,800 กก. | บาลานซ์ 50:50 | ขับเคลื่อนล้อหลัง</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 space-y-2">
                <div className="text-xs font-bold text-rose-700 uppercase tracking-wider">จุดเด่น &amp; ข้อควรระวัง:</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  แชสซีส์มีบาลานซ์น้ำหนัก 50:50 และช่วงล่างหลังแบบ 5-Link อิสระที่คมมาก แต่สำหรับรุ่น XPOWER 435 แรงม้า แรงบิดออกตัวมหาศาลทำให้หน้ารถยกและท้ายยุบยัน Bump Stop จนเสียการควบคุมในโค้ง
                </p>
              </div>
              <div className="lg:col-span-2 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">สูตรการเซ็ตติ้งแนะนำ (Optimal Thai Setup):</div>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li><strong>สปริงเรทหน้า/หลัง:</strong> หน้า 5.5–6.5 kgf/mm, หลัง 6.5–7.5 kgf/mm</li>
                  <li><strong>Anti-Squat Geometry:</strong> เพิ่มแรงหน่วง Low-Speed Compression ด้านหลัง เพื่อหยุดอาการหน้าลอยขณะกดคันเร่งออกจากโค้ง</li>
                  <li><strong>มุมล้อ:</strong> ปรับ Camber หน้า -1.2° และ Camber หลัง -1.5° เพิ่มพื้นที่หน้าสัมผัสยางบนถนนไทย</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Deepal S07 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-lime-400 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-cyan-600 text-white text-xs font-black rounded-lg">DEEPAL</span>
                <h3 className="text-xl font-bold text-slate-900">Deepal S07 (Smart Electric SUV)</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">น้ำหนัก 1,940 – 2,050 กก. | ฐานล้อ 2,900 มม.</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 space-y-2">
                <div className="text-xs font-bold text-rose-700 uppercase tracking-wider">จุดอ่อนช่วงล่างเดิม (OEM Flaws):</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  เซ็ตติ้งเดิมเน้นความนุ่มนวลแบบคอมฟอร์ต แต่เมื่อขับความเร็วเกิน 100 กม./ชม. บนทางด่วนบูรพาวิถี รถจะมีอาการโยนตัวตามกระแสลมปะทะ และมีอาการโคลงตัว (Body Roll) ชัดเจนเมื่อเปลี่ยนเลนเร็ว
                </p>
              </div>
              <div className="lg:col-span-2 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">สูตรการเซ็ตติ้งแนะนำ (Optimal Thai Setup):</div>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li><strong>การอัปเกรด:</strong> สตรัทปรับเกลียวแบบ Monotube กระบอกใหญ่ 45 มม. เพิ่มเสถียรภาพการทรงตัว</li>
                  <li><strong>สปริงเรทหน้า/หลัง:</strong> หน้า 7.0 kgf/mm, หลัง 8.0 kgf/mm ช่วยดึงตัวถัง SUV ให้นิ่ง ไม่โยกเยก</li>
                  <li><strong>ความสูง:</strong> โหลดลงเพียง 15–20 มม. เพื่อรักษาระยะความสูงลุยน้ำท่วมขังกรุงเทพฯ ได้อย่างปลอดภัย</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Zeekr X */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-lime-400 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-amber-600 text-white text-xs font-black rounded-lg">ZEEKR</span>
                <h3 className="text-xl font-bold text-slate-900">Zeekr X (Standard RWD / Flagship AWD)</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">แพลตฟอร์ม SEA | มอเตอร์คู่ 489 แรงม้า | น้ำหนัก 1,945 กก.</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-1 space-y-2">
                <div className="text-xs font-bold text-rose-700 uppercase tracking-wider">จุดเด่น &amp; ข้อแนะนำ:</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ฐานล้อสั้นและพละกำลังสูง ทำให้มีความคล่องตัวในเมืองระดับยอดเยี่ยม แต่ช่วงล่างเดิมมีความตึงตังเล็กน้อยเมื่อผ่านรอยต่อสะพานเหล็กชัน
                </p>
              </div>
              <div className="lg:col-span-2 space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">สูตรการเซ็ตติ้งแนะนำ (Optimal Thai Setup):</div>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li><strong>สปริงเรทหน้า/หลัง:</strong> หน้า 6.5 kgf/mm, หลัง 8.0 kgf/mm</li>
                  <li><strong>แดมเปอร์:</strong> เลือกโช้ควาล์ว Digressive คลาย High-Speed Compression ให้ซับรอยต่อสะพานได้อย่างหมดจด</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Section 8: Thai Environment Fitment Checklist */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <span className="w-2.5 h-8 bg-lime-500 rounded-full inline-block" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
            8. 7 ขั้นตอนตรวจเช็คก่อนส่งมอบรถ (EV Fitment &amp; QC Checklist)
          </h2>
        </div>

        <p className="text-slate-700 leading-relaxed">
          ทุกครั้งที่มีการเปลี่ยนโช้คอัพหรือสปริงในรถยนต์ไฟฟ้า ช่างผู้เชี่ยวชาญต้องทำการตรวจสอบตามรายการดังต่อไปนี้เพื่อความปลอดภัยสูงสุดของแบตเตอรี่และระบบขับขี่อัตโนมัติ:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm block">1. ตรวจวัด Ground Clearance ใต้เคสแบตเตอรี่</strong>
              <span className="text-xs text-slate-600">ต้องมีระยะห่างจากพื้นถนนไม่ต่ำกว่า 135–140 มม. ในตำแหน่งต่ำสุดขณะบรรทุกเต็มพิกัด</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm block">2. ตรวจสอบระยะ Free Bump Travel</strong>
              <span className="text-xs text-slate-600">ตรวจสอบว่ามีระยะยุบอิสระก่อนชน Bump Stop อย่างน้อย 45 มม. ขณะรถจอดนิ่ง</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm block">3. ขันน็อตช่วงล่างด้วยประแจทอร์ค (Torque Wrench)</strong>
              <span className="text-xs text-slate-600">ขันตามค่ามาตรฐานโรงงาน และต้องขันล็อกในตำแหน่ง Ride Height (On-Ground Torque) เพื่อไม่ให้บูชยางบิดตัว</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm block">4. ตั้งศูนย์ล้อด้วยระบบ 3D Laser Alignment</strong>
              <span className="text-xs text-slate-600">ปรับตั้งมุม Camber, Caster และ Toe ให้ตรงตามค่าแนะนำ และตรวจสอบความสมมาตรซ้าย-ขวา</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm block">5. คาลิเบรตเซนเซอร์ ADAS &amp; กล้องมองรอบคัน</strong>
              <span className="text-xs text-slate-600">หากระดับความสูงเปลี่ยนเกิน 15 มม. ต้องทำการ Calibrate เซนเซอร์ช่วยขับขี่เพื่อป้องกันความคลาดเคลื่อน</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm block">6. ตรวจสอบสายไฟเซนเซอร์ ABS และสายเบรกไฮดรอลิก</strong>
              <span className="text-xs text-slate-600">ตรวจเช็คว่าสายไฟและท่อเบรกไม่ตึง รัดแน่นหนา และไม่เสียดสีกับซุ้มล้อเมื่อหักเลี้ยวสุด</span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Cross-Sell Banner & Related Articles */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/20 border border-lime-500/40 text-lime-400 text-xs font-bold rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> <Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">EVSELECT</Link> Suspension &amp; Fitment Hub
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              เรียนรู้เรื่องช่วงล่าง สตรัทปรับเกลียว และยางก่อนเลือก
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              สินค้ายังไม่เปิดจำหน่าย ระหว่างรอคุณอ่านหลักการเลือกสเปกและสิ่งที่ต้องตรวจให้ตรงกับรถและการใช้งานได้ก่อน
            </p>
          </div>

          <Link
            href="/articles/ev-tyre-and-coilover-selection-guide"
            className="px-5 py-2.5 bg-lime-500 hover:bg-lime-400 text-black font-black text-sm rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 group"
          >
            <span>อ่านต่อ: คู่มือเลือกซื้อยางและสตรัท EV</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 13. Article Footer Navigation */}
      <footer className="border-t border-slate-200 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-lime-600 font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          กลับสู่หน้ารวมบทความ EV
        </Link>
        <span>© 2026 <Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">EVSELECT</Link>. สงวนลิขสิทธิ์บทความวิชาการเชิงวิศวกรรมยานยนต์</span>
      </footer>
    </article>
  );
}
