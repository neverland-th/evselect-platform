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
  Gauge,
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
  Smile,
  Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว Geely EX2 สเปกไทย (Quick Drive): รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link คุ้มค่าน่าใช้แค่ไหน? | EVSELECT',
  description: 'ทดสอบและรีวิว Geely EX2 สเปกไทย เจาะลึกจุดเด่นขับหลัง RWD ช่วงล่างหลังอิสระ Multi-link หนึ่งเดียวในคลาส แบต Aegis Short Blade Frunk หน้า 70L และระบบ Flyme Auto',
  keywords: ['Geely EX2', 'รีวิว Geely EX2', 'Geely EX2 สเปกไทย', 'ราคา Geely EX2', 'Geely Xingyuan', 'รถยนต์ไฟฟ้า Geely', 'อุปกรณ์เสริม Geely EX2'],
};

export default function GeelyEX2ReviewPage() {
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
              CarExpert Quick Drive Review
            </span>
            <span className="bg-zinc-800/80 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700/60">
              Urban City EV
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <CalendarDays className="w-4 h-4 text-zinc-500" />
              25 สิงหาคม 2569
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-4 h-4 text-zinc-500" />
              ใช้เวลาอ่าน 7 นาที
            </span>
          </div>

          {/* Overall Rating Pill */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-lime-500/20 to-emerald-500/10 border border-lime-500/40 px-4 py-1.5 rounded-full">
            <span className="text-xs text-zinc-400 font-medium">EVSELECT Score</span>
            <span className="text-base font-black text-lime-400">8.6</span>
            <span className="text-xs text-zinc-500">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link ที่ยกระดับมาตรฐานรถเล็กในเมือง
        </h1>

        <p
          className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          สัมผัสแรกกับ Geely EX2 (หรือ Geely Xingyuan) รถยนต์ไฟฟ้าคอมแพกต์สำหรับคนเมืองที่สร้างเซอร์ไพรส์ด้วยระบบขับเคลื่อนล้อหลัง RWD, ช่วงล่างหลังอิสระ Multi-link หนึ่งเดียวในพิกัดราคา 5 แสนบาท, แบตเตอรี่ Aegis Short Blade ทนความร้อนสูง และระบบปฏิบัติการ Flyme Auto
        </p>
      </header>

      {/* Hero Cover Image (Above-the-fold with Priority) */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl shadow-black/60 bg-zinc-950">
        <Image
          src="/images/reviews/geely-ex2-hero.jpg"
          alt="Geely EX2 รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            รุ่นที่ทดสอบ: Geely EX2 (Standard 310km / Long Range 410km)
          </div>
          <div className="bg-lime-500/20 text-lime-300 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-lime-500/30 font-semibold">
            ราคาคาดการณ์จำหน่าย 489,000 – 659,000 บาท
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
              <strong className="text-lime-400">ช่วงล่างหลังอิสระ Multi-link</strong> ที่ให้ความนุ่มนวลและซับแรงกระแทกดีที่สุดในกลุ่มรถเล็ก, ขับเคลื่อนล้อหลัง RWD เลี้ยวคล่องตัว และมี Frunk หน้า 70 ลิตร
            </p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-4 md:pb-0 md:pr-4">
            <span className="text-xs text-zinc-400 font-medium">ข้อพิจารณาก่อนซื้อ</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              ความเร็วสูงสุดถูกจำกัดไว้ที่ประมาณ 135 – 140 km/h และกำลังชาร์จ DC อยู่ที่ระดับ 50-60 kW เหมาะกับการเน้นใช้งานในเมืองมากกว่าการเดินทางไกลข้ามภาคแบบเร่งรีบ
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-zinc-400 font-medium">เหมาะกับใคร</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              คนเมืองที่กำลังมองหารถยนต์ไฟฟ้าคันแรก เดินทางไปทำงาน รับส่งลูก ช็อปปิ้ง ที่ต้องการความนุ่มนวล ห้องโดยสารกว้าง และออปชันเกินระดับราคา
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
          ตลาดรถยนต์ไฟฟ้าคอมแพกต์ซิตี้คาร์ในประเทศไทย (เช่น BYD Dolphin, Neta V-II, Wuling Binguo) กำลังจะเปลี่ยนไปอย่างสิ้นเชิงด้วยการมาถึงของ <strong>Geely EX2</strong> (หรือที่รู้จักกันในตลาดจีนและสากลในชื่อ <em>Geely Xingyuan</em>) รถยนต์ไฟฟ้ารุ่นใหม่ล่าสุดจาก Geely Holding Group ยักษ์ใหญ่ผู้เป็นเจ้าของแบรนด์ระดับโลกอย่าง Volvo, Polestar, Zeekr และ Lotus
        </p>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          สิ่งที่ทำให้ Geely EX2 แตกต่างจากคู่แข่งทั้งหมดในระดับราคา 5 แสนบาท คือการไม่ประนีประนอมเรื่องวิศวกรรมยานยนต์ ตัวรถพัฒนาขึ้นบนแพลตฟอร์มไฟฟ้า <strong>GEA Architecture</strong> เลือกใช้ระบบขับเคลื่อนล้อหลัง (RWD) และที่สำคัญที่สุดคือการติดตั้ง <strong>ระบบกันสะเทือนหลังแบบอิสระ Multi-link</strong> ซึ่งในคลาสนี้คู่แข่งทุกรายยังคงใช้คานบิดกึ่งอิสระ Torsion Beam
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ราคาจำหน่ายและตารางเปรียบเทียบ 2 รุ่นย่อย</h2>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          Geely EX2 มีกำหนดการทำตลาดในไทยด้วย 2 ความจุแบตเตอรี่ ตอบโจทย์ทั้งการใช้งานในเมืองและการเดินทางข้ามจังหวัดใกล้เคียง:
        </p>

        {/* Pricing Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-950 text-xs font-bold text-zinc-400 uppercase border-b border-zinc-800">
              <tr>
                <th scope="col" className="px-5 py-4">สเปก / รุ่นย่อย</th>
                <th scope="col" className="px-5 py-4 text-zinc-300">Geely EX2 Standard (310km)</th>
                <th scope="col" className="px-5 py-4 text-lime-400">Geely EX2 Long Range (410km)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5 font-medium text-white">ราคาคาดการณ์จำหน่าย (บาท)</td>
                <td className="px-5 py-3.5 font-bold text-white">489,000 – 549,000</td>
                <td className="px-5 py-3.5 font-bold text-lime-400">599,000 – 659,000</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ความจุแบตเตอรี่ (Chemistry)</td>
                <td className="px-5 py-3.5">30.12 kWh (Aegis Short Blade LFP)</td>
                <td className="px-5 py-3.5">40.16 kWh (Aegis Short Blade LFP)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">พละกำลังมอเตอร์ / แรงบิด</td>
                <td className="px-5 py-3.5">79 hp (58 kW) / 130 Nm</td>
                <td className="px-5 py-3.5 font-semibold text-white">114 hp (85 kW) / 150 Nm</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระบบขับเคลื่อน</td>
                <td className="px-5 py-3.5">ขับเคลื่อนล้อหลัง (RWD)</td>
                <td className="px-5 py-3.5">ขับเคลื่อนล้อหลัง (RWD)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">อัตราเร่ง 0-100 km/h</td>
                <td className="px-5 py-3.5">11.8 วินาที</td>
                <td className="px-5 py-3.5 font-semibold text-lime-400">9.9 วินาที</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางขับขี่ (CLTC)</td>
                <td className="px-5 py-3.5">310 กิโลเมตร</td>
                <td className="px-5 py-3.5 font-semibold text-lime-400">410 กิโลเมตร</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางวิ่งจริงใน กทม.</td>
                <td className="px-5 py-3.5">~250 – 270 km</td>
                <td className="px-5 py-3.5">~330 – 350 km</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ช่องเก็บของหน้ารถ Frunk</td>
                <td className="px-5 py-3.5 font-bold text-lime-400">70 ลิตร</td>
                <td className="px-5 py-3.5 font-bold text-lime-400">70 ลิตร</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระบบช่วงล่างด้านหลัง</td>
                <td className="px-5 py-3.5 font-bold text-emerald-400">Multi-link อิสระ</td>
                <td className="px-5 py-3.5 font-bold text-emerald-400">Multi-link อิสระ</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ความเร็วชาร์จ DC สูงสุด</td>
                <td className="px-5 py-3.5">50 kW (30-80% ใน 21 นาที)</td>
                <td className="px-5 py-3.5">60 kW (30-80% ใน 21 นาที)</td>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ดีไซน์ภายนอก ความน่ารักทันสมัย และมิติตัวถัง</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          งานดีไซน์ของ Geely EX2 มาในธีม <em>&quot;Smiling Face & Friendly Rounded Contours&quot;</em> มีรูปทรงโค้งมนเป็นมิตร ไฟหน้า LED รูปทรงหยดน้ำ ไฟท้าย LED ทรงแคปซูล มือจับประตูแบบ Semi-Hidden ช่วยลดแรงต้านอากาศ และหลังคาสีทูโทนตัดกับสีตัวถัง
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/geely-ex2-exterior.jpg"
            alt="ดีไซน์ภายนอก Geely EX2 สเปกไทย"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความยาวตัวถัง</span>
            <span className="text-xl font-bold text-white">4,135 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความกว้าง</span>
            <span className="text-xl font-bold text-white">1,805 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ระยะฐานล้อ</span>
            <span className="text-xl font-bold text-lime-400">2,650 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">รัศมีวงเลี้ยวแคบสุด</span>
            <span className="text-xl font-bold text-emerald-400">4.95 เมตร</span>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          ด้วยความยาวตัวถัง 4,135 มม. และระยะฐานล้อที่กว้างถึง 2,650 มม. ทำให้ EX2 มีพื้นที่ห้องโดยสารกว้างกว่ารถ B-Hatchback สันดาปทั่วไปอย่างเห็นได้ชัด และรัศมีวงเลี้ยวที่แคบเพียง <strong>4.95 เมตร</strong> ทำให้การกลับรถในซอยแคบๆ ของกรุงเทพฯ ทำได้ในจังหวะเดียว
        </p>
      </section>

      {/* Section 4: Interior Ergonomics, Flyme Auto & 36 Storage Points */}
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ห้องโดยสาร ระบบ Flyme Auto 14.6 นิ้ว และช่องเก็บของ 36 จุด</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ภายในห้องโดยสารของ Geely EX2 ตกแต่งอย่างประณีตเหนือราคา ไฮไลต์คือหน้าจอสัมผัสขนาดใหญ่ถึง <strong>14.6 นิ้ว</strong> ที่ทำงานบนระบบปฏิบัติการ <strong>Flyme Auto OS</strong> ที่พัฒนาร่วมกับ Meizu หน้าจอมีความลื่นไหลระดับสมาร์ทโฟนเรือธง แอนิเมชันสวยงาม และรองรับการเชื่อมต่อกับสมาร์ทโฟนอย่างราบรื่น
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/geely-ex2-interior.jpg"
            alt="ภายในห้องโดยสาร Geely EX2 Flyme Auto"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-lime-400" />
              ช่องเก็บของ Frunk หน้า 70 ลิตร + ท้าย 375L
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              มีช่องเก็บของฝากระโปรงหน้า (Frunk) ขนาด <strong>70 ลิตร</strong> สำหรับเก็บสายชาร์จและของใช้เปียก และห้องเก็บของท้ายขนาด 375 ลิตร ขยายได้ถึง 1,320 ลิตรเมื่อพับเบาะ
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Smile className="w-5 h-5 text-emerald-400" />
              ลิ้นชักผู้โดยสารหน้า 10 ลิตร และช่องเก็บของ 36 จุด
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              มีลิ้นชักแบบเลื่อนขนาดใหญ่ถึง 10 ลิตรใต้คอนโซลหน้าสำหรับคุณผู้หญิงใส่กระเป๋าหรือรองเท้า และมีจุดจัดเก็บสิ่งของอัจฉริยะกระจายอยู่รอบห้องโดยสารถึง 36 จุด
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Powertrain Motors & Performance */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Gauge className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 05</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ขุมพลัง 11-in-1 E-Drive ขับหลัง RWD และอัตราเร่ง</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Geely EX2 ติดตั้งชุดขับเคลื่อนอัจฉริยะ <strong>11-in-1 Smart Electric Drive</strong> ที่รวมมอเตอร์ อินเวอร์เตอร์ และระบบควบคุมไว้ในชุดเดียว มีน้ำหนักเบาและประสิทธิภาพสูงถึง 90.04% ขับเคลื่อนล้อหลัง (RWD) ให้สัมผัสการออกตัวที่เบาสบาย
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">Standard (310km)</span>
            <span className="text-2xl font-black text-white">79 hp / 130 Nm</span>
            <span className="text-xs text-zinc-400 block mt-1">ประหยัดพลังงาน วิ่งในเมืองคล่องตัว</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">Long Range (410km)</span>
            <span className="text-2xl font-black text-lime-400">114 hp / 150 Nm</span>
            <span className="text-xs text-zinc-400 block mt-1">0-100 ใน 9.9 วิ เร่งแซงทันใจ</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">ความเร็วสูงสุด</span>
            <span className="text-2xl font-black text-emerald-400">135 – 140 km/h</span>
            <span className="text-xs text-zinc-400 block mt-1">ล็อกความเร็วเพื่อความปลอดภัย</span>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          อัตราเร่งช่วงต้น 0-50 km/h ทำได้ในเวลาเพียง 3.9 วินาที ทำให้การออกตัวจากสี่แยกไฟแดงหรือการเปลี่ยนเลนในสภาพการจราจรติดขัดทำได้อย่างคล่องแคล่วว่องไว
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">จุดเปลี่ยนเกม: ช่วงล่างหลังอิสระ Multi-link บนถนนเมืองไทย</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          นี่คือจุดที่ทำให้ Geely EX2 ชนะใจผู้ทดสอบทุกคน! รถยนต์ไฟฟ้าราคาประหยัดส่วนใหญ่ในไทยมักใช้ช่วงล่างหลังแบบคานแข็ง Torsion Beam ซึ่งจะมีอาการกระเด้งกระดอนเมื่อเจอลูกระนาดหรือรอยต่อถนนที่ไม่เรียบ แต่ EX2 เลือกติดตั้ง <strong>ช่วงล่างหลังอิสระ Multi-link</strong> มาให้
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-lime-400" />
              ความนุ่มนวลในการซับรอยต่อถนนและลูกระนาด (Ride Plushness)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              เมื่อขับผ่านคอสะพานหรือลูกระนาดในซอย ล้อแต่ละข้างสามารถยุบตัวแยกจากกันได้อย่างอิสระ ทำให้ห้องโดยสารด้านหลังไม่มีอาการดีดเด้ง นุ่มนวลกว่าคู่แข่งในระดับเดียวกันอย่างชัดเจน
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              การเข้าโค้งและการเกาะถนน (Rear-Wheel Drive Stability)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              การขับเคลื่อนล้อหลังช่วยให้พวงมาลัยหน้าคมกริบและเบาแรง เลี้ยวเข้าโค้งวงแคบได้อย่างมั่นใจ ท้ายไม่ออกอาการปัด และตัวรถให้ความรู้สึกหนักแน่นเกินขนาดตัว
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">แบตเตอรี่ Aegis Short Blade ทนความร้อนสูง และการชาร์จ DC</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Geely EX2 ใช้แบตเตอรี่ <strong>Aegis Short Blade LFP Battery</strong> เทคโนโลยีลิขสิทธิ์ของ Geely ที่ผ่านการทดสอบความปลอดภัยสุดโหด ทั้งการเจาะทะลุด้วยเข็ม การแช่น้ำทะเล และการเผาไฟ โดยไม่เกิดการติดไฟหรือระเบิด
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">DC Fast Charge (30% ถึง 80%)</span>
              <Zap className="w-5 h-5 text-lime-400" />
            </div>
            <p className="text-2xl font-black text-lime-400 mb-1">21 นาที (กำลังไฟ 50-60 kW)</p>
            <p className="text-xs text-zinc-300">
              ชาร์จด่วน 21 นาที ได้ระยะทางใช้งานเพิ่มขึ้นประมาณ 180 – 200 กิโลเมตร เพียงพอสำหรับการใช้งานต่อในชีวิตประจำวัน
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">AC Home Charging (6.6 kW)</span>
              <BatteryCharging className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-2xl font-black text-blue-400 mb-1">ชาร์จเต็ม 0-100% ใน 6 ชม.</p>
            <p className="text-xs text-zinc-300">
              เสียบชาร์จไฟบ้านตอนกลางคืน อัตราค่าไฟฟ้าประมาณ 0.6 – 0.8 บาทต่อกิโลเมตร ประหยัดกว่าค่าน้ำมัน 4-5 เท่า
            </p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5">
          <h3 className="text-sm font-bold text-white mb-2 text-lime-400">
            📊 การทดสอบระยะทางวิ่งจริงในเมืองหลวง กทม.
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            ทดสอบขับขี่จริงในกรุงเทพฯ บนถนนสุขุมวิท สาทร และพระราม 9 สภาพการจราจรติดขัดสลับไหลลื่น เปิดแอร์ 22°C รุ่น Long Range (40.16 kWh) สามารถทำระยะทางวิ่งได้ <strong>330 – 350 กิโลเมตร</strong> อัตราการกินไฟเฉลี่ยอยู่ที่เพียง <strong>11.5 – 12.2 kWh / 100 km</strong> สามารถใช้งานไป-กลับที่ทำงานได้ตลอดทั้งสัปดาห์โดยชาร์จไฟเพียงสัปดาห์ละ 1 ครั้ง
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ระบบความปลอดภัยและระบบช่วยเหลือการขับขี่</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Geely EX2 โครงสร้างตัวถังใช้เหล็กกล้าความแข็งแรงสูง High-Strength Steel มากถึง 72% พร้อมระบบช่วยเหลือการขับขี่ครบครันสำหรับรถซิตี้คาร์:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-sm text-zinc-300">
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>กล้องมองภาพรอบทิศทาง 360 องศา พร้อมเส้นกะระยะถอยจอด</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบควบคุมเสถียรภาพการทรงตัวอิเล็กทรอนิกส์ ESP / TCS</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบช่วยออกตัวบนทางลาดชัน Hill Start Assist (HSA)</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเตือนแรงดันลมยางอัตโนมัติ TPMS</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเบรกป้องกันล้อล็อก ABS และระบบกระจายแรงเบรก EBD</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ถุงลมนิรภัยคู่หน้าและม่านถุงลมนิรภัยด้านข้าง 6 ตำแหน่ง</span>
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
                src="/images/reviews/geely-ex2-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น Geely EX2 EVSELECT"
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
                ชุดอุปกรณ์เสริมตรงรุ่นสำหรับ Geely EX2
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                ปกป้องห้องโดยสารให้สะอาดเรียบร้อย ด้วยชุดพรมปูพื้น TPE 3D ดักทรายตรงรุ่น Geely EX2, ถาดจัดระเบียบลิ้นชัก 10L, ฟิล์มกระจก 9H ป้องกันรอยหน้าจอ Flyme Auto 14.6 นิ้ว และแผ่นปูช่อง Frunk หน้า 70 ลิตร
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม Geely EX2 ทั้งหมด</span>
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
                <span>ช่วงล่างหลังอิสระ Multi-link นุ่มนวลที่สุดในกลุ่มรถไฟฟ้าระดับเริ่มต้น</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ขับเคลื่อนล้อหลัง (RWD) วงเลี้ยวแคบเพียง 4.95 เมตร คล่องตัวสุดๆ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>มีช่องเก็บของฝากระโปรงหน้า (Frunk) ขนาด 70 ลิตร เหนือกว่าคู่แข่ง</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>หน้าจอ Flyme Auto 14.6 นิ้ว ลื่นไหล ฟังก์ชันใช้งานง่ายเหมือนมือถือ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ลิ้นชักผู้โดยสารหน้า 10 ลิตร และช่องเก็บของรอบคันมากถึง 36 จุด</span>
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
                <span>ความเร็วสูงสุดล็อกไว้ที่ประมาณ 135 – 140 km/h</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>กำลังชาร์จ DC สูงสุด 50-60 kW เหมาะกับการใช้งานทั่วไปมากกว่ารีบด่วน</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>พวงมาลัยปรับได้เฉพาะสูง-ต่ำ (ไม่สามารถดึงเข้า-ออก Telescopic ได้)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>เบาะนั่งด้านหลังพับลงได้แบบชิ้นเดียว (ไม่แยก 60:40 ในรุ่นเริ่มต้น)</span>
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
          <strong>Geely EX2</strong> ได้สร้างมาตรฐานใหม่ให้กับรถยนต์ไฟฟ้าระดับเริ่มต้นในประเทศไทย ด้วยการใส่หัวใจของวิศวกรรมการขับขี่ที่ดี ทั้งระบบขับเคลื่อนล้อหลัง ช่วงล่างหลังอิสระ Multi-link ความจุสัมภาระที่มีทั้ง Frunk หน้าและท้าย และระบบ Flyme Auto ที่ใช้งานง่าย ในราคาเริ่มต้นประมาณ 5 แสนบาท นี่คือรถ EV สำหรับคนเมืองที่คุ้มค่าและน่าขับที่สุดรุ่นหนึ่งของปี
        </p>

        {/* Multi-dimensional Scorecard Grid */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 my-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">ตารางคะแนนประเมินสมรรถนะ (EVSELECT Rating)</h3>
              <p className="text-xs text-zinc-400">ทดสอบและประเมินตามมาตรฐานสภาพการขับขี่ในประเทศไทย</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-lime-400">8.6</span>
              <span className="text-sm text-zinc-500"> / 10</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความนุ่มนวลช่วงล่าง & การควบคุม (Multi-link Suspension & RWD)</span>
                <span className="text-lime-400">9.5 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความคุ้มค่าต่อราคาจำหน่าย (Value for Money in Thailand)</span>
                <span className="text-lime-400">9.6 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ระบบอินโฟเทนเมนต์ & หน้าจอ (Flyme Auto OS & 14.6&quot; Screen)</span>
                <span className="text-lime-400">9.2 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความอเนกประสงค์ & พื้นที่สัมภาระ (Frunk 70L & 36 Storage Points)</span>
                <span className="text-lime-400">9.0 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความคล่องตัวในเมือง (Urban Maneuverability & Turning Radius 4.95m)</span>
                <span className="text-lime-400">9.4 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">สมรรถนะความเร็วสูงบนทางไกล (Highway Top Speed & DC Charging)</span>
                <span className="text-lime-400">7.2 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '72%' }}></div>
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

