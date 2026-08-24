import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Share2,
  Zap,
  BatteryCharging,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sliders,
  Sparkles,
  Layers,
  VolumeX,
  Compass,
  Check,
  Cpu,
  Eye,
  Flame,
  Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว MG4 Electric สเปกไทย (MY2024-2026): ขับหลัง 50:50 แฮทช์แบ็กไฟฟ้าที่ขับสนุกและคุ้มค่าที่สุด | EVSELECT',
  description: 'ทดสอบสมรรถนะ MG4 Electric สเปกไทย ครบทุกรุ่นย่อย Standard, Long Range และ XPOWER 435 แรงม้า 0-100 ใน 3.8 วิ ฟีลลิ่งช่วงล่าง 5-Link การชาร์จ DC 140 kW และของแต่งตรงรุ่น',
  keywords: ['MG4 Electric', 'รีวิว MG4 Electric', 'MG4 สเปกไทย', 'ราคา MG4 Electric', 'MG4 XPOWER', 'รถยนต์ไฟฟ้า MG', 'อุปกรณ์เสริม MG4'],
};

export default function MG4ElectricReviewPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-zinc-100">
      {/* Back to Articles Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-lime-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>กลับไปหน้ารวมบทความและรีวิวรถยนต์ไฟฟ้า</span>
        </Link>
      </nav>

      {/* Article Header & Badges */}
      <header className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
            <span className="bg-lime-500/10 text-lime-400 border border-lime-500/30 px-3 py-1 rounded-full font-semibold">
              CarExpert In-Depth Review
            </span>
            <span className="bg-zinc-800/80 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700/60">
              RWD Electric Hot Hatch
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <CalendarDays className="w-4 h-4 text-zinc-500" />
              25 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-4 h-4 text-zinc-500" />
              ใช้เวลาอ่าน 8 นาที
            </span>
          </div>

          {/* Overall Rating Pill */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-lime-500/20 to-emerald-500/10 border border-lime-500/40 px-4 py-1.5 rounded-full">
            <span className="text-xs text-zinc-400 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-400">8.9</span>
            <span className="text-xs text-zinc-500">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว MG4 Electric สเปกไทย: รถยนต์ไฟฟ้าขับหลัง 50:50 ที่ขับมันส์ คม หนึบที่สุดในงบไม่เกินล้าน
        </h1>

        <p
          className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          ผ่าลึกสมรรถนะของ MG4 Electric แฮทช์แบ็กไฟฟ้าขวัญใจสายซิ่ง ตั้งแต่รุ่น Standard แบตเตอรี่ 49 kWh, Long Range 540 km ไปจนถึงตัวแรง XPOWER มอเตอร์คู่ 435 แรงม้า 0-100 ใน 3.8 วินาที พร้อมบทวิเคราะห์ช่วงล่าง Five-Link บนถนนเมืองไทย
        </p>
      </header>

      {/* Hero Cover Image (Above-the-fold with Priority) */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl shadow-black/60 bg-zinc-950">
        <Image
          src="/images/reviews/mg4-electric-hero.jpg"
          alt="รีวิว MG4 Electric สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            รุ่นที่ทดสอบ: MG4 Electric (Standard / Long Range / XPOWER)
          </div>
          <div className="bg-lime-500/20 text-lime-300 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-lime-500/30 font-semibold">
            ราคาจำหน่าย 569,900 – 1,119,900 บาท
          </div>
        </div>
      </div>

      {/* Quick Verdict & Executive Summary Card */}
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 mb-14 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-lime-400" />
          บทสรุปภาพรวมสำหรับผู้ซื้อในไทย (Executive Verdict)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-4 md:pb-0 md:pr-4">
            <span className="text-xs text-zinc-400 font-medium">จุดเด่นที่ประทับใจที่สุด</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              ฟีลลิ่งการขับขี่ระดับ <strong className="text-lime-400">&quot;Driver&apos;s Car&quot;</strong> การกระจายน้ำหนักหน้า-หลัง 50:50 ขับเคลื่อนล้อหลัง ช่วงล่างหลัง 5-Link หนึบแน่น เข้าโค้งคมกริบเกินราคา
            </p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-4 md:pb-0 md:pr-4">
            <span className="text-xs text-zinc-400 font-medium">ข้อพิจารณาก่อนซื้อ</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              อินโฟเทนเมนต์และกล้องมองหลังยังมีความหน่วงเล็กน้อยในบางจังหวะ และไม่มีที่ปัดน้ำฝนหลัง (Rear Wiper) ในรุ่นเริ่มต้น
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-zinc-400 font-medium">เหมาะกับใคร</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              คนที่รักการขับรถ ชอบความคล่องตัวในเมือง เดินทางไกลมั่นใจ และต้องการรถ EV สเปกยุโรปที่สมรรถนะคุ้มเกินราคาค่าตัว
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Overview & Thai Market Context */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Car className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 01</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ภาพรวม & บริบทในตลาดรถยนต์ไฟฟ้าไทย</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ในบรรดารถยนต์ไฟฟ้าที่จำหน่ายในประเทศไทย <strong>MG4 Electric</strong> ได้รับการยอมรับจากสื่อยานยนต์และนักขับทั่วประเทศให้เป็นหนึ่งในรถ EV ที่มี <em>&quot;Handling และสมรรถนะการขับขี่ดีที่สุดในงบประมาณจับต้องได้&quot;</em> ตัวรถถูกสร้างขึ้นบนแพลตฟอร์มไฟฟ้าเฉพาะกิจ <strong>Nebula Pure Electric Platform (MSP)</strong> ที่วางตำแหน่งมอเตอร์ไว้ที่เพลาขับหลัง และกระจายน้ำหนักหน้า-หลังแบบ 50:50 ตามหลักพลศาสตร์ยานยนต์
        </p>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ปัจจุบัน MG ประเทศไทยได้เดินสายการประกอบ MG4 Electric ในประเทศไทย (CKD) ทำให้สามารถตั้งราคาจำหน่ายได้อย่างเร้าใจเริ่มต้นเพียง 5 แสนปลายๆ ไปจนถึงตัวท็อปสมรรถนะสูงอย่าง <strong>MG4 XPOWER</strong> ที่มอบพลัง 435 แรงม้า ระบบขับเคลื่อนสี่ล้อ ในราคาเพียง 1.119 ล้านบาท กลายเป็น Hot Hatch ไฟฟ้าที่ไม่มีใครเทียบความคุ้มค่าได้ในท้องตลาด
        </p>
      </section>

      {/* Section 2: Pricing & Specs Comparison Table */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 02</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ราคาจำหน่ายและตารางเปรียบเทียบ 3 ขุมพลังในไทย</h2>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          MG4 Electric สเปกไทยมีทางเลือกครอบคลุมตั้งแต่การใช้งานประจำวันในเมือง ไปจนถึงสายสปอร์ตมอเตอร์สปอร์ต:
        </p>

        {/* Pricing Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-950 text-xs font-bold text-zinc-400 uppercase border-b border-zinc-800">
              <tr>
                <th scope="col" className="px-5 py-4">สเปก / รุ่นย่อย</th>
                <th scope="col" className="px-5 py-4 text-zinc-300">MG4 Standard (D / X)</th>
                <th scope="col" className="px-5 py-4 text-lime-400">MG4 Long Range (V)</th>
                <th scope="col" className="px-5 py-4 text-emerald-400">MG4 XPOWER AWD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5 font-medium text-white">ราคาจำหน่ายในไทย (บาท)</td>
                <td className="px-5 py-3.5 font-bold text-white">569,900 – 649,900</td>
                <td className="px-5 py-3.5 font-bold text-lime-400">769,900 – 889,900</td>
                <td className="px-5 py-3.5 font-bold text-emerald-400">1,119,900</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ความจุแบตเตอรี่ (Chemistry)</td>
                <td className="px-5 py-3.5">49.0 kWh (LFP)</td>
                <td className="px-5 py-3.5">64.0 kWh (NMC Rubik)</td>
                <td className="px-5 py-3.5">64.0 kWh (NMC Rubik)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">มอเตอร์ & ระบบขับเคลื่อน</td>
                <td className="px-5 py-3.5">มอเตอร์เดี่ยว RWD</td>
                <td className="px-5 py-3.5">มอเตอร์เดี่ยว RWD</td>
                <td className="px-5 py-3.5 font-semibold text-emerald-400">มอเตอร์คู่ Dual-Motor AWD</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">พละกำลังสูงสุด / แรงบิด</td>
                <td className="px-5 py-3.5">170 hp / 250 Nm</td>
                <td className="px-5 py-3.5">180 hp / 250 Nm</td>
                <td className="px-5 py-3.5 font-bold text-white">435 hp / 600 Nm</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">อัตราเร่ง 0-100 km/h</td>
                <td className="px-5 py-3.5">7.7 วินาที</td>
                <td className="px-5 py-3.5">7.9 วินาที</td>
                <td className="px-5 py-3.5 font-black text-emerald-400">3.8 วินาที 🚀</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางขับขี่ (NEDC)</td>
                <td className="px-5 py-3.5">423 กิโลเมตร</td>
                <td className="px-5 py-3.5 font-semibold text-lime-400">540 กิโลเมตร</td>
                <td className="px-5 py-3.5">480 กิโลเมตร</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางวิ่งจริงบนไฮเวย์ไทย</td>
                <td className="px-5 py-3.5">~330 – 350 km</td>
                <td className="px-5 py-3.5">~430 – 460 km</td>
                <td className="px-5 py-3.5">~370 – 400 km</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">กำลังชาร์จ DC สูงสุด</td>
                <td className="px-5 py-3.5">88 kW</td>
                <td className="px-5 py-3.5">140 kW</td>
                <td className="px-5 py-3.5">140 kW (10-80% ใน 26 นาที)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Exterior Design, Lighting & Dimensions */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 03</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ดีไซน์ Energetic Agility ไฟท้ายหงอนคู่ และมิติตัวถัง</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          MG4 Electric มาพร้อมแนวคิดการออกแบบ <strong>Energetic Agility Design</strong> ตัวถังแบบ 5 ประตูแฮทช์แบ็กคอมแพกต์ ด้านหน้าโฉบเฉี่ยวด้วยไฟหน้า LED ทรงสามเหลี่ยมคมกริบ ไฟเลี้ยวฝังในกันชน และไฮไลต์สำคัญคือสปอยเลอร์หลังคาแบบ <strong>Twin Arrow Wing</strong> คู่กับแถบไฟท้าย LED Cygnus Light Bar ที่ลากยาวเชื่อมต่อกัน ให้เอกลักษณ์โดดเด่นสะดุดตาทุกมุมมองยามค่ำคืน
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/mg4-electric-exterior.jpg"
            alt="ดีไซน์ภายนอก MG4 Electric สเปกไทย"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความยาวตัวถัง</span>
            <span className="text-xl font-bold text-white">4,287 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความกว้าง</span>
            <span className="text-xl font-bold text-white">1,836 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ระยะฐานล้อ</span>
            <span className="text-xl font-bold text-lime-400">2,705 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">รัศมีวงเลี้ยวแคบสุด</span>
            <span className="text-xl font-bold text-emerald-400">5.3 เมตร</span>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          ความสูงของตัวรถอยู่ที่ 1,516 มม. พร้อมการออกแบบชุดแพ็กแบตเตอรี่แบบ <strong>One Pack Slim Battery</strong> ที่หนาเพียง 110 มม. (บางที่สุดในกลุ่มรถยนต์ไฟฟ้าปัจจุบัน) ทำให้จุดศูนย์ถ่วง (Center of Gravity) ของตัวรถอยู่ต่ำมากเพียง 490 มม. ส่งผลให้ตัวรถนิ่งและเกาะถนนเหมือนรถแข่งโกคาร์ท
        </p>
      </section>

      {/* Section 4: Interior Ergonomics, Infotainment & Practicality */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 04</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ห้องโดยสาร คอนโซลลอยตัว และการใช้งานในเมือง</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ห้องโดยสารของ MG4 เน้นความโปร่งโล่งสไตล์โมเดิร์นด้วยดีไซน์ <strong>Floating Console</strong> หรือคอนโซลเกียร์แบบลอยตัว ติดตั้งปุ่มเกียร์แบบหมุน Rotary Gear Selector และแท่นชาร์จสมาร์ทโฟนแบบไร้สาย (Wireless Charger) ช่วยเพิ่มพื้นที่วางแก้วและช่องเก็บสัมภาระด้านล่างได้อย่างกว้างขวาง
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/mg4-electric-interior.jpg"
            alt="ห้องโดยสารและหน้าจอ MG4 Electric"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-lime-400" />
              หน้าจอสัมผัสคู่ Dual Screen
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              หน้าปัดดิจิทัลแสดงผลข้อมูลการขับขี่ขนาด 7 นิ้ว คมชัด อ่านค่าง่าย และหน้าจอกลางแบบสัมผัสขนาด <strong>10.25 นิ้ว</strong> รองรับ Apple CarPlay และ Android Auto สั่งงานแอร์และระบบขับขี่ได้อย่างครบถ้วน
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              พื้นที่เก็บสัมภาระท้าย Trunk
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              ความจุห้องสัมภาระท้าย 363 ลิตร และสามารถปรับพับเบาะหลังแบบ 60:40 แบนราบเพื่อขยายพื้นที่ได้สูงสุดถึง <strong>1,177 ลิตร</strong> รองรับกระเป๋าเดินทางขนาดใหญ่ ถุงกอล์ฟ หรือจักรยานพับได้สบาย
            </p>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          พวงมาลัยมัลติฟังก์ชันแบบ 2 ก้านท้ายตัด D-Shape หุ้มหนังจับกระชับมือ พร้อมปุ่มลัด Shortcut 2 ปุ่ม (รูปดาว) ที่ผู้ขับขี่สามารถตั้งค่าได้เอง เช่น การปรับระดับแรงดึงคืนพลังงาน (KERS Mode) หรือการเปิดกล้องมองภาพรอบทิศทาง 360 องศา
        </p>
      </section>

      {/* Section 5: Powertrain Motors & Performance */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 05</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">สมรรถนะขุมพลัง ขับหลัง RWD vs XPOWER 435 แรงม้า</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          เสน่ห์หลักของ MG4 อยู่ที่การเลือกใช้ระบบ <strong>Rear-Wheel Drive (ขับเคลื่อนล้อหลัง)</strong> ตั้งแต่รุ่นเริ่มต้น ซึ่งแตกต่างจากรถยนต์ไฟฟ้าทั่วไปในระดับราคาเดียวกันที่มักใช้ขับหน้า (FWD) ทำให้ล้อหน้ามีหน้าที่เลี้ยวอย่างเดียวโดยไม่มีอาการทอร์กสเตียร์ (Torque Steer) เมื่อเหยียบคันเร่งออกตัวแรง
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">Standard (D / X)</span>
            <span className="text-2xl font-black text-white">170 hp / 250 Nm</span>
            <span className="text-xs text-zinc-400 block mt-1">0-100 ใน 7.7 วินาที คล่องตัวในเมือง</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">Long Range (V)</span>
            <span className="text-2xl font-black text-lime-400">180 hp / 250 Nm</span>
            <span className="text-xs text-zinc-400 block mt-1">วิ่งไกล 540 km อัตราเร่งกระฉับกระเฉง</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">XPOWER Dual Motor</span>
            <span className="text-2xl font-black text-emerald-400">435 hp / 600 Nm</span>
            <span className="text-xs text-zinc-400 block mt-1">0-100 ใน 3.8 วิ ด้วย Launch Control</span>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          ในรุ่น <strong>MG4 XPOWER</strong> มอเตอร์ไฟฟ้าคู่หน้า-หลังทำงานร่วมกับระบบ Dynamic Cornering Braking Control ควบคุมแรงบิดล้อทั้ง 4 แบบเรียลไทม์ การกด Launch Control ออกตัวให้อัตราเร่งเทียบเท่ากับ Supercar ยุโรปในพิกัดราคาหลักหลายล้านบาท
        </p>
      </section>

      {/* Section 6: Ride Quality, Suspension & NVH on Thai roads */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <VolumeX className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 06</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">การควบคุม ช่วงล่าง Five-Link และฟีลลิ่งบนถนนไทย</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          จุดที่ทำให้ MG4 ได้รับเสียงชื่นชมอย่างเอกฉันท์คือระบบช่วงล่างอิสระ 4 ล้อ ด้านหน้าแบบ MacPherson Strut และด้านหลังแบบ <strong>Five-Link Independent Suspension</strong> ที่เซ็ตติ้งมาในสไตล์รถยุโรปแท้
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-lime-400" />
              ความแม่นยำของพวงมาลัยและการเข้าโค้ง (Steering Precision & Agility)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              น้ำหนักพวงมาลัยปรับได้ 3 ระดับ (Light, Normal, Sport) ให้การตอบสนองที่ฉับไว สั่งเลี้ยวได้ดั่งใจ การมุดเปลี่ยนเลนกะทันหันบนทางด่วนหรือถนนวงแหวนตัวรถไม่มีอาการเซ แชสซีบิดตัวต่ำมาก
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              การซับแรงกระแทกลูกระนาดและถนนขรุขระ (Bump Absorption)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              ช่วงล่างมีความเฟิร์มแน่น ไม่นิ่มยวบเหมือนรถเก๋งครอบครัวทั่วไป ซับแรงสะเทือนลูกระนาดในซอยกรุงเทพฯ ได้คมชัด ไม่เด้งกระดอนซ้ำซ้อน และยังคงความนุ่มพอเหมาะสำหรับการเดินทางไกล
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <VolumeX className="w-4 h-4 text-amber-400" />
              การเก็บเสียงและการขับขี่ One-Pedal Drive
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              โหมด <strong>One-Pedal</strong> ของ MG4 สามารถหน่วงความเร็วจนรถหยุดสนิท (Hold) ได้อย่างนุ่มนวล ช่วยให้การขับขี่รถติดในเมือง กทม. สบายเท้าขวามาก การเก็บเสียงลมทำได้ดีถึง 110 km/h ก่อนจะมีเสียงลมและเสียงยางที่ความเร็วสูง
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Battery, Real-World Range & Charging Speeds */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <BatteryCharging className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 07</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">แบตเตอรี่ Rubik&apos;s Cube การชาร์จ DC 140 kW และระยะทางจริง</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          แบตเตอรี่แบบ <strong>Rubik&apos;s Cube Battery</strong> ของ MG ใช้การวางเซลล์แนวนอน (Horizontal Cell Layout) เพื่อระบายความร้อนได้สม่ำเสมอ พร้อมระบบ CTP (Cell-to-Pack) ที่ป้องกันการลุกลามความร้อนแบบ Zero Thermal Runaway
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">DC Fast Charging (Long Range / XPOWER)</span>
              <Zap className="w-5 h-5 text-lime-400" />
            </div>
            <p className="text-2xl font-black text-lime-400 mb-1">สูงสุด 140 kW</p>
            <p className="text-xs text-zinc-300">
              ทดสอบกับหัวชาร์จ EleX by EGAT สามารถชาร์จจาก 10% ถึง 80% ได้ในเวลาเพียง <strong>26 นาที</strong> ชาร์จได้รวดเร็วทันใจบนเส้นทางหลักทั่วประเทศ
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">ฟังก์ชัน V2L (Vehicle-to-Load)</span>
              <BatteryCharging className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-2xl font-black text-blue-400 mb-1">จ่ายไฟ 2,200 Watts</p>
            <p className="text-xs text-zinc-300">
              จ่ายกระแสไฟฟ้า 220V ให้กับอุปกรณ์แคมปิ้ง หม้อต้มกาแฟ เตาปิ้งย่างไฟฟ้า หรือชาร์จโน้ตบุ๊กขณะเดินทางท่องเที่ยว
            </p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5">
          <h3 className="text-sm font-bold text-white mb-2 text-lime-400">
            📊 ผลทดสอบระยะทางวิ่งจริง (Real-World Highway Range Test)
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            ทดสอบขับขี่จริงบนเส้นทางกรุงเทพฯ – เขาใหญ่ – ปากช่อง (ทางราบสลับเนินเขา) เปิดแอร์ 23°C ความเร็ว 100 – 120 km/h ในรุ่น <strong>Long Range (64 kWh)</strong> สามารถทำระยะทางวิ่งจริงได้ <strong>430 – 450 กิโลเมตร</strong> ต่อการชาร์จหนึ่งครั้ง อัตราการกินไฟเฉลี่ยอยู่ที่ <strong>14.5 – 15.2 kWh / 100 km</strong> ถือว่าประหยัดพลังงานเป็นอันดับต้นๆ ของรถ EV ไซส์คอมแพกต์
          </p>
        </div>
      </section>

      {/* Section 8: Active Safety & ADAS Technology */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 08</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ระบบความปลอดภัยและระบบช่วยเหลือการขับขี่ MG Pilot L2</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          MG4 Electric ได้รับการรับรองความปลอดภัยระดับ 5 ดาวจาก <strong>Euro NCAP</strong> พร้อมระบบช่วยเหลือการขับขี่ขั้นสูง MG Pilot ประกอบด้วย:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-sm text-zinc-300">
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบควบคุมความเร็วอัตโนมัติแปรผัน ACC พร้อม Traffic Jam Assist (TJA)</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบช่วยควบคุมรถให้อยู่ในเลน Lane Keep Assist (LKA & ELK)</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเตือนมุมอับสายตา Blind Spot Detection & Rear Cross Traffic Alert</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเบรกฉุกเฉินอัตโนมัติ Autonomous Emergency Braking (AEB)</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>กล้องมองภาพรอบทิศทาง 3D 360-Degree Surround View Camera</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเตือนการเปิดประตู Door Open Warning (DOW)</span>
          </div>
        </div>
      </section>

      {/* Section 9: Contextual EVSELECT Fitment Accessory Card */}
      <section
        className="my-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
      >
        <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border-2 border-lime-500/40 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            <div className="relative w-full lg:w-1/3 h-56 rounded-2xl overflow-hidden border border-zinc-700/80 shrink-0 bg-black">
              <Image
                src="/images/reviews/mg4-electric-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น MG4 Electric EVSELECT"
                fill
                sizes="(max-width: 1024px) 100vw, 350px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-lime-500 text-black font-extrabold text-xs px-2.5 py-1 rounded-md">
                100% Direct Fitment
              </div>
            </div>

            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full text-xs font-semibold text-lime-400">
                <Sparkles className="w-3.5 h-3.5" />
                EVSELECT Recommended Upgrades
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                ชุดอุปกรณ์เสริมและปกป้องห้องโดยสารตรงรุ่นสำหรับ MG4 Electric
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                ปกป้อง MG4 ของคุณให้ใหม่อยู่เสมอ ด้วยชุดพรม TPE 3D ยกระดับขอบสูงกันน้ำ 100%, ถาดจัดระเบียบคอนโซลลอยตัว 2 ชั้น, ฟิล์มกระจก 9H สำหรับหน้าจอกลาง 10.25 นิ้ว และแผ่นยางรองกันลื่นแท่นชาร์จไร้สาย
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม MG4 Electric ทั้งหมด</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Pros & Cons Side-by-Side Cards */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 10</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">จุดเด่น & ข้อสังเกตจากการทดสอบจริง (Pros & Cons)</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Pros */}
          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg border-b border-emerald-500/20 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>จุดเด่นที่น่าประทับใจ (Pros)</span>
            </div>
            <ul className="space-y-3 text-sm text-zinc-200">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>การขับขี่ดีที่สุดในคลาส กระจายน้ำหนัก 50:50 ขับหลัง RWD ช่วงล่าง 5-Link หนึบแน่น</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ราคาจำหน่ายคุ้มค่ามาก ประกอบไทยเริ่มต้นเพียง 569,900 บาท</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>รุ่น XPOWER อัตราเร่ง 0-100 ใน 3.8 วินาที แรงที่สุดในราคาล้านต้นๆ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ความเร็วชาร์จ DC สูงถึง 140 kW ชาร์จ 10-80% ได้ใน 26 นาที</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>วงเลี้ยวแคบเพียง 5.3 เมตร คล่องตัวสูงในการมุดซอยหรือกลับรถในเมือง</span>
              </li>
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-lg border-b border-rose-500/20 pb-3">
              <XCircle className="w-5 h-5 text-rose-400" />
              <span>ข้อสังเกตที่ควรพิจารณา (Cons)</span>
            </div>
            <ul className="space-y-3 text-sm text-zinc-200">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ไม่มีก้านปัดน้ำฝนกระจกหลัง (Rear Wiper) ในรุ่น Standard</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ระบบอินโฟเทนเมนต์และกล้องมองหลังอาจมีอาการโหลดช้าบ้างตอนสตาร์ตรถ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>วัสดุพลาสติกแข็งภายในห้องโดยสารในบางจุดยังดูเรียบง่ายตามระดับราคา</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>พื้นที่เบาะนั่งตอนหลังเหมาะกับผู้ใหญ่ 2 คนมากกว่า 3 คนสำหรับการเดินทางไกล</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 11: Final Verdict & EVSELECT Scorecard */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 11</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">บทสรุปส่งท้าย & ตารางคะแนน EVSELECT Scorecard</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          หากคุณกำลังมองหารถยนต์ไฟฟ้าที่ไม่ได้มีดีแค่การประหยัดค่าพลังงาน แต่ยังต้องการความสนุกในการขับขี่ที่แท้จริง แชสซีที่เกาะถนนมั่นใจ และความคล่องตัวสำหรับการใช้งานในชีวิตประจำวัน <strong>MG4 Electric</strong> คือคำตอบที่ตอบสนองจิตวิญญาณของผู้ขับขี่ได้อย่างสมบูรณ์แบบที่สุดในราคาที่เอื้อมถึงง่าย
        </p>

        {/* Multi-dimensional Scorecard Grid */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 my-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">ตารางคะแนนประเมินสมรรถนะ (EVSELECT Rating)</h3>
              <p className="text-xs text-zinc-400">ทดสอบและประเมินตามมาตรฐานสภาพการขับขี่ในประเทศไทย</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-lime-400">8.9</span>
              <span className="text-sm text-zinc-500"> / 10</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ฟีลลิ่งการขับขี่ & ช่วงล่าง (Handling & Chassis Balance 50:50)</span>
                <span className="text-lime-400">9.7 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '97%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">สมรรถนะมอเตอร์ & อัตราเร่ง (Powertrain & Overtaking)</span>
                <span className="text-lime-400">9.2 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความคุ้มค่าต่อราคาจำหน่าย (Value for Money in Thailand)</span>
                <span className="text-lime-400">9.5 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความเร็วในการชาร์จ & ประสิทธิภาพแบตเตอรี่ (Charging Speed DC 140 kW)</span>
                <span className="text-lime-400">8.6 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ดีไซน์ภายนอก & ความสปอร์ต (Exterior Styling & Aero)</span>
                <span className="text-lime-400">8.8 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">อินโฟเทนเมนต์ & วัสดุห้องโดยสาร (Infotainment & Interior Trim)</span>
                <span className="text-lime-400">7.6 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Footer Share & Navigation */}
      <footer className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ดูรีวิวรถยนต์ไฟฟ้าและบทความทั้งหมด</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 px-4 py-2 rounded-full transition-all"
            aria-label="Share article"
          >
            <Share2 className="w-4 h-4 text-lime-400" />
            <span>แชร์บทความรีวิวนี้</span>
          </button>
        </div>
      </footer>
    </article>
  );
}

