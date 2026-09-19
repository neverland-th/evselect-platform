import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ImageCredit } from '@/components/ImageCredit';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  SlidersHorizontal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Info,
  Target,
  Thermometer,
  ShieldAlert
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'การตั้งมุมแคมเบอร์ (Camber) และศูนย์ล้อสำหรับรถ EV: หน้าสัมผัสยาง โรลเซนเตอร์ และการเข้าโค้งตามหลัก OptimumG | EVSELECT',
  description: 'คู่มือเชิงลึกการปรับมุมแคมเบอร์ (Static vs Dynamic Camber), Roll Center Kinematics, Camber Thrust, Caster & Toe และการวิเคราะห์อุณหภูมิยาง 3 โซน (Pyrometer) สำหรับรถยนต์ไฟฟ้าหนัก 2 ตันตามหลักวิศวกรรมยานยนต์ OptimumG',
  keywords: [
    'มุมแคมเบอร์ EV',
    'Camber Angle',
    'Dynamic Camber',
    'Roll Center EV',
    'OptimumG Camber',
    'Wheel Alignment EV',
    'ตั้งศูนย์ล้อรถไฟฟ้า',
    'Camber Thrust',
    'Pyrometer วัดอุณหภูมิยาง',
    'ช่วงล่าง Tesla Model 3',
    'ช่วงล่าง BYD Seal'
  ],
  openGraph: {
    title: 'การตั้งมุมแคมเบอร์ (Camber) และศูนย์ล้อสำหรับรถ EV ตามหลัก OptimumG | EVSELECT Technical Guide',
    description: 'เจาะลึกฟิสิกส์การเกาะถนน: Static vs Dynamic Camber, Roll Center Kinematics และเทคนิคการตั้งศูนย์ล้อเพื่อหน้าสัมผัสยางสมบูรณ์แบบ',
    url: 'https://evselects.com/articles/ev-camber-adjustment-wheel-alignment-guide',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'การตั้งมุมแคมเบอร์ (Camber) และศูนย์ล้อสำหรับรถ EV | EVSELECT',
    description: 'คู่มือวิศวกรรมการตั้งศูนย์ล้อและมุมแคมเบอร์สำหรับรถยนต์ไฟฟ้าหนัก 2 ตัน'
  }
};

export default function EVCamberAdjustmentGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'การตั้งมุมแคมเบอร์ (Camber) และศูนย์ล้อสำหรับรถ EV: พื้นที่หน้าสัมผัสยาง, โรลเซนเตอร์ และการเข้าโค้งตามหลัก OptimumG',
    description: 'คู่มือวิศวกรรมการปรับตั้งมุมแคมเบอร์ สแตติก vs พลวัต การเคลื่อนที่ของจุดโรลเซนเตอร์ และการวิเคราะห์อุณหภูมิยางสำหรับรถยนต์ไฟฟ้า',
    author: {
      '@type': 'Organization',
      name: 'EVSELECT Technical Engineering Team'
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

      {/* 2. Article Header & Metadata Badges */}
      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
            <span className="bg-lime-50 text-lime-800 border border-lime-300 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-lime-700" />
              Kinematics &amp; Alignment Engineering
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200">
              OptimumG &amp; Racecar Dynamics
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 27 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 14 นาที
            </span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full shadow-xs">
            <span className="text-xs text-slate-300 font-medium">ความลึกเนื้อหา</span>
            <span className="text-sm font-black text-lime-400">Level 4: Advanced</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          การตั้งมุมแคมเบอร์ (Camber) และศูนย์ล้อสำหรับรถ EV: พื้นที่หน้าสัมผัสยาง, โรลเซนเตอร์ และการเข้าโค้งตามหลัก OptimumG
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          ทำไมรถยนต์ไฟฟ้า (EV) น้ำหนัก 2,000+ กก. ถึงกินยางด้านในเร็วผิดปกติ? หรือทำไมเมื่อเข้าโค้งหนักๆ หน้ายางถึงพับจนสูญเสียแรงยึดเกาะกะทันหัน? 
          เจาะลึกฟิสิกส์เรขาคณิตช่วงล่าง: <strong>Static vs Dynamic Camber</strong>, การเคลื่อนตัวของจุดศูนย์กลางการโคลง (<strong>Roll Center Kinematics</strong>), แรงผลักแคมเบอร์ (<strong>Camber Thrust</strong>) และหลักการตั้งศูนย์ล้อ 3 สเต็ปสำหรับถนนเมืองไทยและสนามแข่ง
        </p>


        <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group relative w-full aspect-[16/9] bg-slate-100">
          <Image
            src="/images/articles/wheel-alignment-lada.jpg"
            alt="LADA Vesta Sport ขณะตั้งศูนย์ล้อในอู่"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </figure>
        <ImageCredit author="Dmitry Racer" source="https://commons.wikimedia.org/wiki/File:LADA_Vesta_Sport,_Wheel_alignment.jpg" license="CC BY-SA 4.0" licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/" className="-mt-6 mb-10" />

        {/* Executive Summary Box */}
        <div className="bg-slate-50 border-l-4 border-lime-600 p-6 sm:p-7 rounded-r-2xl border-y border-r border-slate-200 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg bg-lime-500 flex items-center justify-center text-slate-950 font-black text-xs">
              EX
            </div>
            <h3 className="text-base font-bold text-slate-900 m-0">
              ข้อสรุปเชิงวิศวกรรมสำหรับผู้ใช้รถ EV (Executive Summary)
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 mb-0 pl-0 list-none">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>น้ำหนักตัวรถมหาศาล:</strong> น้ำหนักตัวรถ (แทนด้วยตัวแปร m) ที่มหาศาลจากแบตเตอรี่ จะสร้างแรงเหวี่ยงหนีศูนย์ออกด้านข้างขณะเข้าโค้งรุนแรงกว่ารถเครื่องยนต์สันดาปทั่วไปถึง 25–40% บังคับให้แก้มยางบิดตัวรุนแรงกว่า</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>Dynamic Camber Gain:</strong> ถ้าช่วงล่างไม่มี Camber Gain ชดเชยการเอียงตัวถัง ล้อฝั่งนอกโค้งจะกลายเป็นบวก (Positive Camber) ทำให้สูญเสียหน้าสัมผัส</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>The Lowering Trap:</strong> การโหลดเตี้ยด้วยสปริงสั้นโดยไม่แก้จุดยึด ปีกนกจะชี้ขึ้น ส่งผลให้ Roll Center ตกต่ำกว่าเดิม แขนโมเมนต์ยาวขึ้น รถกลับเอียงตัวมากกว่าเดิม</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
              <span><strong>Pyrometer Rule:</strong> อุณหภูมิหน้ายางฝั่งในต้องสูงกว่าฝั่งนอกไม่เกิน +5°C ถึง +8°C ในการใช้งานแบบ Fast Road</span>
            </li>
          </ul>
        </div>
      </header>

      {/* 3. Article Content Body */}
      <div className="space-y-12">

        {/* Beginner Section */}
        <section className="bg-lime-50/50 border border-lime-200 p-6 rounded-3xl space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-lime-100 text-lime-700 rounded-xl">
              <Info className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0">
              สำหรับมือใหม่: แคมเบอร์ (Camber) คืออะไร? แบบเข้าใจง่ายสุดๆ
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            ถ้าเปรียบเทียบง่ายๆ <strong>&quot;แคมเบอร์&quot;</strong> ก็เหมือนกับ <strong>&quot;การวางเท้า&quot;</strong> ของเราเวลาเดินหรือวิ่ง:
          </p>
          <ul className="space-y-3 text-sm text-slate-700 list-disc pl-5">
            <li>
              <strong>ล้อตั้งตรง (แคมเบอร์ 0)</strong> = เหมือนเรายืนฝ่าเท้าแนบพื้นเต็มๆ เดินทางตรงได้มั่นคง เบรกได้ดีที่สุด แต่พอจะวิ่งเลี้ยวโค้งแรงๆ อาจจะสะดุดหรือทรงตัวยาก
            </li>
            <li>
              <strong>ล้อหุบเข้าด้านใน (แคมเบอร์ลบ)</strong> = เหมือนนักสเก็ตน้ำแข็งที่เอียงข้อเท้าเข้าหากันเพื่อจิกน้ำแข็งเวลาเข้าโค้ง! ล้อจะจิกพื้นถนนได้ดีเยี่ยมเวลาสาดโค้งแรงๆ ทำให้รถเกาะถนนหนึบขึ้นมาก นี่คือเหตุผลที่รถสปอร์ตหรือรถ EV ซิ่งๆ นิยมตั้งล้อให้แบะออกนิดๆ (แคมเบอร์ลบนั่นเอง)
            </li>
          </ul>
          <p className="text-sm text-slate-700 leading-relaxed font-semibold text-lime-900 bg-white p-3 rounded-xl border border-lime-200">
            💡 สรุปสั้นๆ: ถ้าคุณเน้นขับขี่ทั่วไปในเมือง จ่ายตลาด การตั้งล้อตรงๆ คือดีที่สุด ประหยัดยางสุด แต่ถ้าคุณชอบขับรถเร็ว มุดเปลี่ยนเลนไวๆ การทำแคมเบอร์ลบ (ล้อแบะนิดๆ) จะช่วยให้รถเกาะถนนขึ้นอย่างเห็นได้ชัด แลกมากับการกินยางด้านในเร็วขึ้นเล็กน้อย
          </p>
        </section>


        
        {/* Section 1: Fundamental Camber Physics */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              1. กายวิภาคของมุมแคมเบอร์: Static Camber vs Dynamic Camber
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            ในเชิงกลศาสตร์ยานยนต์ (Vehicle Dynamics) ตามคำจำกัดความของ <em>OptimumG</em> และ <em>Claude Rouelle</em> <strong>มุมแคมเบอร์ (Camber Angle)</strong> คือมุมเอียงของระนาบกึ่งกลางล้อเมื่อเทียบกับแนวดิ่งตั้งฉากกับพื้นถนน:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Negative Camber (แคมเบอร์ลบ)</div>
              <div className="text-xl font-extrabold text-lime-700 mb-2">แคมเบอร์ลบ (ยอดล้อหุบเข้า)</div>
              <p className="text-xs text-slate-600 leading-normal">
                ด้านบนของล้อเอียงเข้าหาตัวถัง เป็นการเซ็ตติ้งมาตรฐานสำหรับรถสมรรถนะสูง เพื่อเตรียมรับแรงเมื่อตัวถังเกิดการโคลงในโค้ง
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Zero Camber (แคมเบอร์ศูนย์)</div>
              <div className="text-xl font-extrabold text-slate-900 mb-2">แคมเบอร์ศูนย์ (ล้อตั้งฉาก 90 องศา)</div>
              <p className="text-xs text-slate-600 leading-normal">
                หน้ายางสัมผัสพื้นราบเรียบ 100% ให้แรงเบรกและแรงเร่งทางตรงสูงสุด แต่จะสูญเสียการยึดเกาะทันทีที่ตัวถังเริ่มเอียงในโค้ง
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Positive Camber (แคมเบอร์บวก)</div>
              <div className="text-xl font-extrabold text-rose-600 mb-2">แคมเบอร์บวก (ยอดล้อบานออก)</div>
              <p className="text-xs text-slate-600 leading-normal">
                ด้านบนของล้อบานออกด้านนอก มักพบเฉพาะในรถบรรทุกสำหรับชดเชยการบรรทุกหนัก หรือเป็นผลข้างเคียงจากช่วงล่างผิดรูป
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl">
            <h4 className="text-base font-extrabold text-white mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-lime-400" />
              กลไก Dynamic Camber: ทำไมองศาล้อขณะเลี้ยวจริงถึงไม่เท่ากับตอนจอดนิ่งบนแท่นตั้งศูนย์?
            </h4>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              มุมเอียงของหน้ายางที่แนบกับพื้นถนนขณะรถกำลังเข้าโค้งจริงๆ ไม่ใช่ตัวเลของศานิ่งๆ ที่ตั้งไว้ตอนจอดบนลิฟต์ตั้งศูนย์ แต่เป็นผลลัพธ์จากการทำงานประสานกันของ 5 ปัจจัยทางพลศาสตร์ช่วงล่าง:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2 text-xs text-slate-300">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-lime-400 block mb-1">1. มุมแคมเบอร์สแตติกเดิม</strong>
                องศาตั้งต้นที่ช่างตั้งไว้ขณะจอดนิ่งบนแท่นตั้งศูนย์
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-lime-400 block mb-1">2. การยุบตัวของช่วงล่าง (Camber Gain)</strong>
                เมื่อสปริงและโช้คนอกโค้งยุบตัว ปีกนกจะดึงให้ยอดล้อเอียงหลบตามเรขาคณิต
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-lime-400 block mb-1">3. การเอียงของตัวถัง (Body Roll)</strong>
                น้ำหนักรถที่เทไปด้านข้างจะพยายามดึงรั้งให้หน้ายางหงายตัวขึ้น
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-lime-400 block mb-1">4. องศาการหักเลี้ยวพวงมาลัย (Caster Effect)</strong>
                มุมแคสเตอร์จะช่วยกดหน้ายางให้เอียงจิกโค้งตามองศาการเลี้ยว
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 sm:col-span-2">
                <strong className="text-lime-400 block mb-1">5. การยืดหยุ่นของบูชยางช่วงล่าง (Bushing Compliance)</strong>
                บูชยางและลูกหมากจะเกิดการบิดตัวเล็กน้อยเมื่อรับแรงหนีศูนย์จากน้ำหนักตัวรถมหาศาล
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Inline SVG Technical Diagram */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              2. ไดอะแกรมวิศวกรรม: การกระจายแรงกดหน้าสัมผัสยาง (Contact Patch Pressure)
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            แผนภาพเวกเตอร์จำลองพฤติกรรมของหน้ายางรถ EV (น้ำหนักกดต่อล้อ 500+ กก.) ขณะเลี้ยวรับแรงเหวี่ยง 1.0G: เปรียบเทียบระหว่างการเซ็ตติ้งล้อตรง 0.0 องศา กับการชดเชยด้วยมุมแคมเบอร์ลบ -2.2 องศา
          </p>

          {/* Custom Inline SVG Technical Diagram */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-xs font-extrabold text-slate-900 uppercase tracking-widest bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full">
                EVSELECT Engineering Vector Simulation
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-2 mb-1">
                Tyre Contact Patch Deformation &amp; Pressure Distribution Under 1.0g Lateral Load
              </h3>
              <p className="text-xs text-slate-400">
                จำลองพฤติกรรมโครงสร้างแก้มยางและการถ่ายเทแรงกดบนหน้ายางล้อหน้าฝั่งนอกโค้ง (Outside Front Wheel)
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 900 480"
                className="w-full min-w-[700px] h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="pressureGradientBad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1e293b" stopOpacity="0.0" />
                  </linearGradient>

                  <linearGradient id="pressureGradientGood" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#84cc16" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#84cc16" stopOpacity="0.8" />
                  </linearGradient>

                  <linearGradient id="roadSurface" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                <rect width="900" height="480" fill="#090d16" rx="16" />
                <path d="M 50 80 L 850 80 M 50 160 L 850 160 M 50 240 L 850 240 M 50 320 L 850 320 M 50 400 L 850 400" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 450 40 L 450 440" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" />

                {/* LEFT: Zero Camber Under Roll */}
                <g transform="translate(60, 40)">
                  <rect x="20" y="0" width="300" height="32" rx="8" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1" />
                  <text x="170" y="21" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">
                    กรณี A: Static Camber 0.0° (เกิด Positive ในโค้ง)
                  </text>

                  <rect x="0" y="320" width="340" height="16" fill="url(#roadSurface)" rx="4" />
                  <line x1="0" y1="320" x2="340" y2="320" stroke="#64748b" strokeWidth="2" />

                  <line x1="170" y1="40" x2="170" y2="310" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="170" y1="40" x2="205" y2="310" stroke="#f87171" strokeWidth="2" />
                  <text x="215" y="100" fill="#f87171" fontSize="11" fontWeight="bold">Roll Angle +3.5°</text>

                  <polygon points="150,110 200,115 190,230 140,225" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 125,120 Q 95,210 110,318 Q 170,322 235,310 Q 245,210 225,125 Z" fill="#1e293b" stroke="#ef4444" strokeWidth="3" />

                  <path d="M 110,335 C 130,375 160,335 235,322 L 235,335 L 110,335 Z" fill="url(#pressureGradientBad)" />
                  <line x1="110" y1="335" x2="235" y2="335" stroke="#ef4444" strokeWidth="1.5" />
                  
                  <circle cx="125" cy="355" r="4" fill="#ef4444" />
                  <line x1="125" y1="355" x2="60" y2="390" stroke="#ef4444" strokeWidth="1.5" />
                  <rect x="15" y="390" width="130" height="34" rx="6" fill="#1e1b2e" stroke="#ef4444" strokeWidth="1" />
                  <text x="80" y="405" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">Peak Edge Pressure</text>
                  <text x="80" y="418" fill="#f87171" fontSize="9" textAnchor="middle">ขอบยางด้านนอกรับภาระ 85%</text>

                  <path d="M 220,310 L 250,280" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="260" y="275" fill="#fcd34d" fontSize="10">หน้ายางฝั่งในลอยตัว</text>
                  <text x="260" y="288" fill="#94a3b8" fontSize="9">สูญเสียหน้าสัมผัส 40%</text>
                </g>

                {/* RIGHT: Optimal Negative Camber */}
                <g transform="translate(500, 40)">
                  <rect x="20" y="0" width="300" height="32" rx="8" fill="#84cc16" fillOpacity="0.15" stroke="#84cc16" strokeWidth="1" />
                  <text x="170" y="21" fill="#bef264" fontSize="13" fontWeight="bold" textAnchor="middle">
                    กรณี B: Optimized Camber -2.2° (หน้ายางแนบสนิท)
                  </text>

                  <rect x="0" y="320" width="340" height="16" fill="url(#roadSurface)" rx="4" />
                  <line x1="0" y1="320" x2="340" y2="320" stroke="#64748b" strokeWidth="2" />

                  <line x1="170" y1="40" x2="170" y2="310" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="170" y1="40" x2="170" y2="318" stroke="#84cc16" strokeWidth="2.5" />
                  <text x="180" y="90" fill="#a3e635" fontSize="11" fontWeight="bold">Dynamic Camber 0.0°</text>
                  <text x="180" y="105" fill="#65a30d" fontSize="9">(ล้อตั้งฉากสมบูรณ์แบบกับพื้น)</text>

                  <polygon points="145,110 195,110 195,230 145,230" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 120,120 Q 100,215 110,318 Q 170,320 230,318 Q 240,215 220,120 Z" fill="#1e293b" stroke="#84cc16" strokeWidth="3" />

                  <path d="M 110,335 C 130,365 210,365 230,335 Z" fill="url(#pressureGradientGood)" />
                  <line x1="110" y1="335" x2="230" y2="335" stroke="#84cc16" strokeWidth="1.5" />

                  <circle cx="170" cy="355" r="4" fill="#a3e635" />
                  <line x1="170" y1="355" x2="170" y2="390" stroke="#a3e635" strokeWidth="1.5" />
                  <rect x="90" y="390" width="160" height="34" rx="6" fill="#0f291e" stroke="#84cc16" strokeWidth="1" />
                  <text x="170" y="405" fill="#bef264" fontSize="10" fontWeight="bold" textAnchor="middle">100% Uniform Contact Patch</text>
                  <text x="170" y="418" fill="#86efac" fontSize="9" textAnchor="middle">กระจายแรงกดสม่ำเสมอเต็มหน้ากว้างยาง</text>
                </g>
              </svg>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div>
                <span className="text-slate-900 font-bold">สรุปผลการทดสอบ:</span> แคมเบอร์ลบที่ถูกต้องจะเปลี่ยนเป็น <strong>0.0° สัมพันธ์กับพื้นถนน (Effective Dynamic Zero)</strong> เมื่อตัวถังเอียงตัวในโค้ง
              </div>
              <div className="text-slate-500 font-mono">
                Source: EVSELECT Kinematics Simulation Laboratory
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Camber Thrust & Roll Center Kinematics */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              3. Camber Thrust และความลับของจุดโรลเซนเตอร์ (Roll Center Kinematics)
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            เมื่อล้อรถเอียงทำมุมแคมเบอร์ ยางรถยนต์จะเกิดแรงผลักในแนวระนาบที่เรียกว่า <strong>Camber Thrust</strong> ซึ่งเกิดจากการที่หน้ายางเมื่อเอียงจะมีรูปทรงคล้ายกรวยตัด พยายามกลิ้งเลี้ยวเข้าหาทิศทางที่ยอดล้อเอียงไปตามธรรมชาติ:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-lime-700" />
                Camber Thrust vs Cornering Force
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                แรงยึดเกาะทั้งหมดในแนวขวางขณะเข้าโค้ง เกิดจากการผสานพลังของ 2 ส่วนสำคัญ: <strong>แรงเกาะจากการบิดตัวของหน้ายาง (ตามมุมเลี้ยวของพวงมาลัย)</strong> ผนวกกับ <strong>แรงผลักจากการเอียงล้อ (Camber Thrust)</strong>
              </p>
              <p className="text-xs text-slate-500">
                ในรถ EV ที่มีน้ำหนักตกลงบนล้อสูง แรง Camber Thrust จะช่วยพยุงหน้ารถไม่ให้ไถลออกนอกโค้ง (Understeer) ได้อย่างมหาศาลโดยไม่ต้องเพิ่มมุมเลี้ยวพวงมาลัย
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                The Lowering Trap (กับดักการโหลดเตี้ย)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                เมื่อโหลดเตี้ย EV ด้วยการตัดสปริงหรือใส่สปริงโหลดสั้น ปีกนกล่างจะชี้ชันขึ้นด้านบน ส่งผลให้จุดศูนย์กลางการโคลง (Roll Center) ตกต่ำลงเร็วกว่าจุดศูนย์ถ่วงของตัวรถ
              </p>
              <div className="bg-white p-3 rounded-lg border border-slate-300 text-xs text-slate-800 mb-3 leading-relaxed">
                <strong>หลักการคานงัด:</strong> เมื่อรถเลี้ยวเข้าโค้ง แรงบิดที่ทำให้ตัวถังเอียงยวบจะเกิดขึ้นจากน้ำหนักตัวรถ (แทนด้วยตัวแปร m) ผสานกับแรงเหวี่ยงหนีศูนย์ และระยะห่างระหว่างจุดศูนย์ถ่วงกับจุดหมุนช่วงล่าง
              </div>
              <p className="text-xs text-slate-500">
                เมื่อระยะห่างระหว่างจุดศูนย์ถ่วงกับจุดหมุนกว้างขึ้น เปรียบเสมือนด้ามคานงัดที่ยาวขึ้น น้ำหนักตัวรถ (m) จึงสามารถงัดให้ตัวถังเอียงยวบยาบในโค้งได้มากกว่าเดิมอย่างเห็นได้ชัด แม้จุดศูนย์ถ่วงจะเตี้ยลงก็ตาม!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Alignment Parameter Lookup Tables */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              4. ตารางสูตรตั้งศูนย์ล้อมาตรฐานสำหรับรถ EV (Alignment Setup Matrix)
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            ค่าเรขาคณิตศูนย์ล้อแนะนำสำหรับรถยนต์ไฟฟ้าพิกัด 1,800 – 2,400 กก. (เช่น Tesla Model 3 / Model Y, BYD Seal, MG4, Zeekr 7X, Deepal S07) จำแนกตาม 3 รูปแบบการใช้งาน:
          </p>

          {/* Setup Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4 border-b border-slate-800">พารามิเตอร์ศูนย์ล้อ</th>
                  <th className="p-4 border-b border-slate-800 bg-slate-800/80">1. Daily Street &amp; Range Focus</th>
                  <th className="p-4 border-b border-slate-800 bg-lime-950 text-lime-400">2. Fast Road &amp; Canyon (แนะนำ)</th>
                  <th className="p-4 border-b border-slate-800">3. Trackday / Autocross</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    Front Camber (แคมเบอร์หน้า)
                  </td>
                  <td className="p-4 font-mono text-slate-700">-0.8° ถึง -1.0°</td>
                  <td className="p-4 font-mono font-bold text-lime-800 bg-lime-50/50">-1.8° ถึง -2.3°</td>
                  <td className="p-4 font-mono text-slate-900">-3.0° ถึง -3.8°</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    Rear Camber (แคมเบอร์หลัง)
                  </td>
                  <td className="p-4 font-mono text-slate-700">-1.2° ถึง -1.4°</td>
                  <td className="p-4 font-mono font-bold text-lime-800 bg-lime-50/50">-1.6° ถึง -1.9°</td>
                  <td className="p-4 font-mono text-slate-900">-2.2° ถึง -2.6°</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    Front Caster (แคสเตอร์หน้า)
                  </td>
                  <td className="p-4 font-mono text-slate-700">+5.5° ถึง +6.5°</td>
                  <td className="p-4 font-mono font-bold text-lime-800 bg-lime-50/50">+7.0° ถึง +8.0°</td>
                  <td className="p-4 font-mono text-slate-900">+8.0° ถึง +9.0°</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    Front Total Toe (โทหน้า)
                  </td>
                  <td className="p-4 font-mono text-slate-700">0.00° ถึง +0.06° (Toe-In บางๆ)</td>
                  <td className="p-4 font-mono font-bold text-lime-800 bg-lime-50/50">0.00° (Zero Toe คมกระชับ)</td>
                  <td className="p-4 font-mono text-slate-900">-0.08° ถึง -0.15° (Toe-Out เลี้ยวไว)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    Rear Total Toe (โทหลัง)
                  </td>
                  <td className="p-4 font-mono text-slate-700">+0.12° ถึง +0.18° (Toe-In)</td>
                  <td className="p-4 font-mono font-bold text-lime-800 bg-lime-50/50">+0.10° ถึง +0.14° (Toe-In)</td>
                  <td className="p-4 font-mono text-slate-900">+0.04° ถึง +0.08° (Toe-In)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/50">
                    อัตราการกินยาง / การใช้พลังงาน
                  </td>
                  <td className="p-4 text-emerald-700 font-medium">กินยางเรียบเสมอ / ประหยัดไฟสูงสุด</td>
                  <td className="p-4 text-lime-800 font-medium bg-lime-50/50">เกาะถนนดีเยี่ยม / กินยางในเล็กน้อย</td>
                  <td className="p-4 text-amber-700 font-medium">กินแก้มยางในเร็ว / เหมาะเฉพาะสนาม</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Pyrometer Tyre Temperature Analysis */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              5. การวิเคราะห์อุณหภูมิยาง 3 จุด (Tyre Pyrometer Diagnostics)
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            วิธีเดียวที่จะตรวจสอบว่ามุมแคมเบอร์และแรงดันลมยางของคุณถูกต้อง 100% หรือไม่ คือการใช้ <strong>ไพโรมิเตอร์แบบหัวเข็ม (Needle Pyrometer)</strong> วัดอุณหภูมิเนื้อยางด้านใน 3 ตำแหน่งทันทีหลังจากวิ่งทดสอบ: <strong>ฝั่งใน (Inside), ตรงกลาง (Middle), ฝั่งนอก (Outside)</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl">
              <div className="flex items-center gap-2 font-bold text-emerald-900 mb-2">
                <Thermometer className="w-4 h-4 text-emerald-700" />
                แคมเบอร์สมบูรณ์แบบ (Optimal)
              </div>
              <div className="text-xs font-bold bg-white p-2 rounded-lg border border-emerald-200 text-emerald-800 mb-2">
                ขอบในอุ่นกว่าขอบนอก +5°C ถึง +8°C
              </div>
              <p className="text-xs text-emerald-900/80">
                ฝั่งในอุ่นกว่าฝั่งนอกเล็กน้อย แสดงว่าเมื่อเข้าโค้งหนัก ยางจะกระจายความร้อนสม่ำเสมอเต็มหน้ากว้าง
              </p>
            </div>

            <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl">
              <div className="flex items-center gap-2 font-bold text-rose-900 mb-2">
                <ShieldAlert className="w-4 h-4 text-rose-700" />
                แคมเบอร์ลบมากเกินไป (Over-Cambered)
              </div>
              <div className="text-xs font-bold bg-white p-2 rounded-lg border border-rose-200 text-rose-800 mb-2">
                ขอบในร้อนกว่าขอบนอกเกิน 12°C
              </div>
              <p className="text-xs text-rose-900/80">
                ขอบยางฝั่งในร้อนจัด หน้าสัมผัสไม่ถูกใช้งานเต็มที่ ระยะเบรกทางตรงจะยาวขึ้น และยางด้านในสึกหมดก่อนกำหนด
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl">
              <div className="flex items-center gap-2 font-bold text-amber-900 mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                แคมเบอร์ไม่พอ (Under-Cambered)
              </div>
              <div className="text-xs font-bold bg-white p-2 rounded-lg border border-amber-200 text-amber-800 mb-2">
                ขอบนอกร้อนกว่าหรือเท่ากับขอบใน
              </div>
              <p className="text-xs text-amber-900/80">
                ขอบยางด้านนอกร้อนกว่าด้านใน เกิดอาการหน้ายางพับ (Shoulder rollover) เสี่ยงต่อการระเบิดและควบคุมรถไม่อยู่
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
            <Info className="w-5 h-5 text-lime-700 shrink-0" />
            <div>
              <strong>เกร็ดวิศวกรรมแรงดันลมยาง:</strong> หากอุณหภูมิตรงกลางหน้ายางร้อนกว่าค่าเฉลี่ยของขอบยางทั้งสองฝั่ง แสดงว่าเติมลมยางแข็งเกินไป (Over-inflated) หน้ากว้างตรงกลางนูน แต่หากตรงกลางเย็นกว่าขอบยาง แสดงว่าลมยางอ่อนเกินไป (Under-inflated)
            </div>
          </div>
        </section>

        {/* Section 6: Recommended Fitment & Hardware */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-8 bg-lime-500 rounded-full" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight m-0">
              6. อุปกรณ์เสริมและชิ้นส่วนปรับตั้งแคมเบอร์ตรงรุ่น EVSELECT
            </h2>
          </div>

          <p className="text-slate-700 leading-relaxed">
            รถยนต์ไฟฟ้าหลายรุ่นจากโรงงาน (เช่น Tesla Model 3 / Model Y หรือ BYD Seal) ไม่สามารถปรับมุมแคมเบอร์หน้า-หลังจากโรงงานได้ จำเป็นต้องอัปเกรดชิ้นส่วนเฉพาะทาง:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:border-lime-400 transition-colors">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center justify-between">
                <span>Adjustable Front Upper Control Arms</span>
                <span className="text-xs text-lime-700 bg-lime-50 border border-lime-200 px-2 py-0.5 rounded-full font-bold">ตรงรุ่น EV</span>
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                ปีกนกบนหน้าปรับแคมเบอร์และแคสเตอร์ได้ ผลิตจากอลูมิเนียมเกรดอากาศยาน 6061-T6 พร้อมบูชโพลียูรีเทนทนแรงบิดสูง
              </p>
              <Link href="/" className="text-xs font-bold text-lime-700 hover:text-lime-800 flex items-center gap-1">
                ดูปีกนกปรับแคมเบอร์ตรงรุ่น <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:border-lime-400 transition-colors">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center justify-between">
                <span>Rear Adjustable Camber &amp; Toe Arms</span>
                <span className="text-xs text-lime-700 bg-lime-50 border border-lime-200 px-2 py-0.5 rounded-full font-bold">แก้ปัญหายางกินใน</span>
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                อาร์มปรับแคมเบอร์และมุมโทหลัง ช่วยดึงล้อหลังให้กลับมาอยู่ในค่าสเปกมาตรฐานหลังจากโหลดเตี้ย หรือปรับเพิ่มความเกาะถนน
              </p>
              <Link href="/" className="text-xs font-bold text-lime-700 hover:text-lime-800 flex items-center gap-1">
                ดูชุดอาร์มหลังปรับมุมล้อ <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Article Footer & Social Share */}
      <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-lime-500 flex items-center justify-center font-black text-slate-950 text-sm">
            EV
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">EVSELECT Editorial &amp; Engineering</div>
            <div className="text-[11px] text-slate-500">เผยแพร่ภายใต้มาตรฐานวิศวกรรมยานยนต์ OptimumG</div>
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
