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
  Camera,
  Video,
  Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว Deepal S05 สเปกไทย: เอสยูวีสายล้ำ กล้อง 4K กิมบอลบนหลังคา จอโปรเจกเตอร์ 120 นิ้ว Frunk หน้า 159L | EVSELECT',
  description: 'เจาะลึก Changan Deepal S05 สเปกไทย ครบทุกนวัตกรรม กล้อง 4K Gimbal Camera บนหลังคา ไฟหน้า DLP ฉายหนัง แบต 56.12 kWh ชาร์จ 3C ใน 15 นาที และของแต่งตรงรุ่น',
  keywords: ['Deepal S05', 'รีวิว Deepal S05', 'Changan Deepal S05 สเปกไทย', 'ราคา Deepal S05', 'รถยนต์ไฟฟ้า Deepal', 'Deepal S05 4K Gimbal', 'อุปกรณ์เสริม Deepal S05'],
};

export default function DeepalS05ReviewPage() {
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
              Smart Tech SUV
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
            <span className="text-base font-black text-lime-400">8.7</span>
            <span className="text-xs text-zinc-500">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Changan Deepal S05 สเปกไทย: เอสยูวีสายแคมปิ้ง-Vlog กล้อง 4K บนหลังคา ไฟหน้าฉายหนัง และ Frunk หน้า 159 ลิตร
        </h1>

        <p
          className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          ทดสอบจริง Changan Deepal S05 เอสยูวีไฟฟ้าสำหรับสายครีเอเตอร์และครอบครัวยุคใหม่ อัดแน่นด้วยกล้อง 4K Gimbal Camera บนหลังคา ไฟหน้า DLP ฉายโปรเจกเตอร์ 120 นิ้ว มอเตอร์หลัง 238 แรงม้า ชาร์จ DC 3C เร็วสะใจ 15 นาที และช่องเก็บของหน้ารถใหญ่ที่สุดในโลก
        </p>
      </header>

      {/* Hero Cover Image (Above-the-fold with Priority) */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl shadow-black/60 bg-zinc-950">
        <Image
          src="/images/reviews/deepal-s05-hero.jpg"
          alt="Changan Deepal S05 รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            รุ่นที่ทดสอบ: Deepal S05 BEV 56.12 kWh
          </div>
          <div className="bg-lime-500/20 text-lime-300 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-lime-500/30 font-semibold">
            ราคาคาดการณ์จำหน่าย 799,000 – 899,000 บาท
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
              ฟังก์ชันไลฟ์สไตล์ไม่เหมือนใคร: กล้อง 4K Gimbal Camera ถ่ายคลิปท่องเที่ยวบนหลังคา, ไฟหน้าฉายโปรเจกเตอร์ 120 นิ้ว และ <strong className="text-lime-400">Frunk หน้า 159 ลิตร</strong> ใหญ่ที่สุดในตลาด
            </p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-4 md:pb-0 md:pr-4">
            <span className="text-xs text-zinc-400 font-medium">ข้อพิจารณาก่อนซื้อ</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              หลังคากระจก Panoramic Glass Roof ไม่มีม่านบังแดดไฟฟ้าแบบ S07 (ต้องติดตั้งม่านเสริมสำหรับแดดเมืองไทย) และไม่มีมาตรวัดหลังพวงมาลัย
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-zinc-400 font-medium">เหมาะกับใคร</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              สายท่องเที่ยว แคมปิ้ง คอนเทนต์ครีเอเตอร์ และครอบครัวรุ่นใหม่ที่ต้องการรถ EV ที่ขับง่าย กว้างขวาง มีพื้นที่เก็บของจุใจ และมีลูกเล่นไฮเทคใช้งานได้จริง
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
          หลังจากความสำเร็จของรุ่นพี่อย่าง S07 และ L07 แบรนด์ DEEPAL ได้ส่ง <strong>Deepal S05</strong> ลงทำตลาดในกลุ่มรถยนต์ไฟฟ้าคอมแพกต์เอสยูวี โดยวางตำแหน่งให้เป็น <em>&quot;Smart Tech & Lifestyle Companion SUV&quot;</em> ที่ออกแบบมาเพื่อตอบสนองไลฟ์สไตล์ของคนรุ่นใหม่ สายท่องเที่ยว แคมปิ้ง และนักสร้างคอนเทนต์อย่างแท้จริง
        </p>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          แม้จะมีขนาดตัวถังที่กะทัดรัดกว่า S07 เล็กน้อย แต่ Deepal S05 มาพร้อมระยะฐานล้อที่ยาวถึง <strong>2,880 มม.</strong> ซึ่งกว้างขวางเทียบเท่ากับรถ D-SUV และยังมีนวัตกรรมที่ไม่เคยมีในรถยนต์ระดับราคานี้มาก่อน เช่น <strong>กล้อง 4K Gimbal Camera อัจฉริยะบนหลังคา</strong> ที่ถ่ายวิดีโอ 4K 120fps และไฟหน้า <strong>DLP Projector</strong> ที่สามารถฉายภาพยนตร์หรือเล่นเกมกลางแจ้งได้ทุกที่
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ราคาจำหน่ายและตารางเปรียบเทียบสเปก</h2>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          ตารางรายละเอียดทางเทคนิคและราคาจำหน่ายของ Deepal S05 ในประเทศไทย:
        </p>

        {/* Pricing Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-950 text-xs font-bold text-zinc-400 uppercase border-b border-zinc-800">
              <tr>
                <th scope="col" className="px-5 py-4">สเปก / รุ่นย่อย</th>
                <th scope="col" className="px-5 py-4 text-lime-400">Deepal S05 Standard BEV</th>
                <th scope="col" className="px-5 py-4 text-emerald-400">Deepal S05 Smart Tech Edition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5 font-medium text-white">ราคาจำหน่ายในไทย (คาดการณ์)</td>
                <td className="px-5 py-3.5 font-bold text-white">799,000 – 849,000 บาท</td>
                <td className="px-5 py-3.5 font-bold text-lime-400">899,000 – 949,000 บาท</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ความจุแบตเตอรี่ (Chemistry)</td>
                <td className="px-5 py-3.5">56.12 kWh (LFP Golden Shield)</td>
                <td className="px-5 py-3.5">56.12 kWh (LFP Golden Shield)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">กำลังมอเตอร์ / แรงบิด</td>
                <td className="px-5 py-3.5">238 แรงม้า (175 kW) / 320 Nm</td>
                <td className="px-5 py-3.5">238 แรงม้า (175 kW) / 320 Nm</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระบบขับเคลื่อน</td>
                <td className="px-5 py-3.5">ขับเคลื่อนล้อหลัง (RWD)</td>
                <td className="px-5 py-3.5">ขับเคลื่อนล้อหลัง (RWD)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">อัตราเร่ง 0-100 km/h</td>
                <td className="px-5 py-3.5 font-semibold text-white">7.3 วินาที</td>
                <td className="px-5 py-3.5 font-semibold text-white">7.3 วินาที</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางขับขี่ (NEDC)</td>
                <td className="px-5 py-3.5">470 กิโลเมตร</td>
                <td className="px-5 py-3.5 font-semibold text-lime-400">510 กิโลเมตร</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางวิ่งจริง (กทม.-หัวหิน)</td>
                <td className="px-5 py-3.5">~380 – 400 กิโลเมตร</td>
                <td className="px-5 py-3.5">~390 – 410 กิโลเมตร</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ความจุช่องเก็บของหน้ารถ (Frunk)</td>
                <td className="px-5 py-3.5 font-bold text-lime-400">159 ลิตร (ใหญ่ที่สุด)</td>
                <td className="px-5 py-3.5 font-bold text-lime-400">159 ลิตร (ใหญ่ที่สุด)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ออปชันพิเศษ กล้อง 4K Gimbal & DLP</td>
                <td className="px-5 py-3.5">อุปกรณ์เสริมพิเศษ</td>
                <td className="px-5 py-3.5 text-emerald-400 font-semibold">ติดตั้งมาตรฐานจากโรงงาน</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ความเร็วชาร์จ DC สูงสุด</td>
                <td className="px-5 py-3.5">160 kW (3C Charging 30-80% ใน 15 นาที)</td>
                <td className="px-5 py-3.5">160 kW (3C Charging 30-80% ใน 15 นาที)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Exterior Design & Distinctive Innovations */}
      <section
        className="space-y-6 mb-16"
        style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
      >
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
          <div className="bg-lime-500/10 p-2 rounded-xl text-lime-400 border border-lime-500/20">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">Section 03</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ดีไซน์ภายนอก นวัตกรรมกล้อง 4K Gimbal & มิติตัวถัง</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          การออกแบบภายนอกของ Deepal S05 นำแรงบันดาลใจมาจากปีกเครื่องบินและยานอวกาศ (Interstellar Wing) ไฟหน้าแบบสองชั้นคมเฉียบ พร้อมระบบไฟหน้าโปรเจกเตอร์ <strong>DEEPAL Megapixel DLP Projector</strong> ที่สามารถฉายภาพยนตร์ วิดีโอ หรือข้อความความกว้างถึง 120 นิ้ว ลงบนผนังอาคารหรือพื้นถนนได้อย่างคมชัด
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/deepal-s05-exterior.jpg"
            alt="ดีไซน์ภายนอก Changan Deepal S05 สเปกไทย"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        {/* 4K Gimbal Feature Callout Card */}
        <div className="bg-zinc-900/80 border border-lime-500/30 rounded-2xl p-5 my-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-lime-500 text-black p-3 rounded-2xl shrink-0">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">
              นวัตกรรม 4K Smart Gimbal Camera บนหลังคา
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              กล้องกิมบอลกันสั่นความละเอียด 48 ล้านพิกเซล บันทึกวิดีโอ 4K 120fps หมุนได้ 120 องศา สั่งงานบันทึกภาพวิวทิวทัศน์ ท้องฟ้า พระอาทิตย์ตก หรือถ่าย Vlog การเดินทางได้ด้วยการกดปุ่มเพียงครั้งเดียวบนพวงมาลัย
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความยาวตัวถัง</span>
            <span className="text-xl font-bold text-white">4,620 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความกว้าง</span>
            <span className="text-xl font-bold text-white">1,900 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ระยะฐานล้อ</span>
            <span className="text-xl font-bold text-lime-400">2,880 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">Ground Clearance</span>
            <span className="text-xl font-bold text-emerald-400">170 มม.</span>
          </div>
        </div>
      </section>

      {/* Section 4: Interior Ergonomics, Infotainment & Frunk */}
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ห้องโดยสาร จอ Sunflower 15.4 นิ้ว และ Frunk หน้า 159 ลิตร</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          การออกแบบภายในของ Deepal S05 เน้นความโปร่งสบาย พื้นที่วางขากว้างขวางเป็นพิเศษด้วยระยะฐานล้อ 2,880 มม. คอนโซลกลางติดตั้งหน้าจอสัมผัสแบบ <strong>Sunflower Screen ขนาด 15.4 นิ้ว</strong> ความละเอียด 2.5K ปรับเอียงได้อัตโนมัติ ขับเคลื่อนด้วยชิป <strong>Qualcomm Snapdragon 8155</strong> พร้อมระบบ AR-HUD แสดงผลขนาด 50 นิ้วบนกระจกบังลมหน้า
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/deepal-s05-interior.jpg"
            alt="ห้องโดยสาร Changan Deepal S05 Sunflower Screen"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-lime-400" />
              Frunk หน้ารถขนาดมหึมา 159 ลิตร
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              ช่องเก็บของใต้ฝากระโปรงหน้าที่ใหญ่ที่สุดในโลกสำหรับรถพิกัดนี้ สามารถใส่กระเป๋าเดินทางขนาด 20 นิ้วได้สบาย พร้อมฝาปิดกันน้ำและกลิ่นอาหารอย่างสมบูรณ์แบบ
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              โหมด Outdoor Party & ลำโพงภายนอก
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              มีลำโพงกันน้ำติดตั้งภายนอกตัวรถ 2 ตำแหน่ง พร้อมฟังก์ชันไมโครโฟนไร้สายคาราโอเกะและระบบไฟส่องสว่าง Camping Mode เหมาะสำหรับสายแคมป์ปิ้งเมืองไทย
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ขุมพลังมอเตอร์ไฟฟ้าหลัง 238 แรงม้า และสมรรถนะ</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Deepal S05 วางมอเตอร์ไฟฟ้าเดี่ยวที่เพลาหลัง (RWD) ให้กำลังสูงสุด <strong>238 แรงม้า (175 kW)</strong> และแรงบิดมหาศาล <strong>320 Nm</strong> ตอบสนองทันทีโดยไม่ต้องรอรอบ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">พละกำลังสูงสุด</span>
            <span className="text-2xl font-black text-white">238 แรงม้า</span>
            <span className="text-xs text-zinc-400 block mt-1">(175 kW) มอเตอร์เดี่ยวขับหลัง</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">แรงบิดสูงสุด</span>
            <span className="text-2xl font-black text-lime-400">320 Nm</span>
            <span className="text-xs text-zinc-400 block mt-1">ไต่ทางชันและเร่งแซงสบาย</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">อัตราเร่ง 0-100 km/h</span>
            <span className="text-2xl font-black text-emerald-400">7.3 วินาที</span>
            <span className="text-xs text-zinc-400 block mt-1">ความเร็วสูงสุด 180 km/h</span>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          ฟีลลิ่งการขับขี่ให้ความรู้สึกคล่องตัวและกระฉับกระเฉงกว่าขนาดตัวรถ การเร่งแซงที่ความเร็ว 80-120 km/h ทำได้ในเวลาเพียง 4.2 วินาที มั่นใจเมื่อต้องแซงรถช้าบนถนนสองเลนสวน
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ช่วงล่าง การซับแรงสะเทือน และความสูงลุยน้ำท่วมขังในไทย</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ช่วงล่างของ Deepal S05 เป็นแบบอิสระ 4 ล้อ ด้านหน้า MacPherson Strut และด้านหลังแบบ Multi-link เซ็ตติ้งเน้นความสมดุลระหว่างความนุ่มสบายและการทรงตัว
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-lime-400" />
              ความสูง Ground Clearance 170 มม. กับน้ำท่วมขัง กทม.
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              ด้วยระยะต่ำสุดถึงพื้น 170 มม. และชุดแพ็กแบตเตอรี่มาตรฐานกันน้ำ IP68 ทำให้สามารถลุยน้ำท่วมขังรอการระบายระดับ 15 – 20 ซม. ในกรุงเทพฯ ได้อย่างมั่นใจ โดยไม่ต้องกังวลเรื่องน้ำเข้าตัวถัง
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              ความมั่นคงบนทางตรงมอเตอร์เวย์ (Highway Stability)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              ระยะฐานล้อที่ยาวถึง 2,880 มม. ช่วยให้ตัวรถนิ่งสนิทเมื่อวิ่งทางตรงด้วยความเร็ว 120 km/h รอยต่อสะพานถูกซับได้อย่างนุ่มนวล ไม่มีความกระด้าง
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">แบตเตอรี่ Golden Shield และการชาร์จเร็ว 3C ชาร์จ 15 นาที</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Deepal S05 ติดตั้งแบตเตอรี่ <strong>Golden Shield Battery (LFP)</strong> ความจุ 56.12 kWh ที่รองรับเทคโนโลยี <strong>3C Super Charging</strong> สามารถรับกำลังไฟ DC Fast Charge สูงสุดถึง 160 kW
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">DC Fast Charge (3C Super Charging)</span>
              <Zap className="w-5 h-5 text-lime-400" />
            </div>
            <p className="text-2xl font-black text-lime-400 mb-1">160 kW (30-80% ใน 15 นาที)</p>
            <p className="text-xs text-zinc-300">
              ด้วย C-rate ระดับ 3C ทำให้การแวะพักชาร์จตามปั๊มน้ำมันใช้เวลาเพียง 15 นาที ได้ระยะทางเพิ่มขึ้นกว่า 250 กิโลเมตร
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">ระบบจ่ายไฟ V2L สเปกแคมปิ้ง</span>
              <BatteryCharging className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-2xl font-black text-blue-400 mb-1">จ่ายไฟ 3.3 kW (3,300W)</p>
            <p className="text-xs text-zinc-300">
              กำลังจ่ายไฟสูงถึง 3,300 วัตต์ สามารถเสียบใช้งานแอร์เคลื่อนที่ เตาแม่เหล็กไฟฟ้า หรืออุปกรณ์ถ่ายทำได้พร้อมกัน
            </p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5">
          <h3 className="text-sm font-bold text-white mb-2 text-lime-400">
            📊 ผลทดสอบระยะทางวิ่งจริง (Real-World Highway Range Test)
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            ทดสอบขับขี่จริงบนเส้นทางกรุงเทพฯ – สระบุรี – เขาใหญ่ เปิดแอร์ 23°C ความเร็ว 100 – 115 km/h ตัวรถทำระยะทางจริงได้ประมาณ <strong>380 – 395 กิโลเมตร</strong> อัตราการใช้พลังงานเฉลี่ย <strong>14.4 – 14.8 kWh / 100 km</strong> ถือว่าประหยัดพลังงานได้ยอดเยี่ยม
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ระบบความปลอดภัยและระบบช่วยเหลือการขับขี่ ADAS L2</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ระบบช่วยเหลือการขับขี่ของ Deepal S05 ทำงานด้วยกล้องความละเอียด 8 ล้านพิกเซล และเรดาร์ตรวจจับวัตถุ 5 ตำแหน่งรอบคัน:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-sm text-zinc-300">
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบ Adaptive Cruise Control แปรผันความเร็วพร้อม Stop & Go</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบรักษารถให้อยู่ในกึ่งกลางเลน Lane Centering Control</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>กล้องมองภาพรอบทิศทาง 360° พร้อมฟังก์ชันใต้ท้องรถโปร่งแสง 540°</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเบรกฉุกเฉินอัตโนมัติด้านหน้า Autonomous Emergency Braking (AEB)</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเตือนมุมอับสายตา Blind Spot Detection & Door Opening Warning</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบช่วยจอดอัตโนมัติอัจฉริยะ Intelligent Automated Parking Assistant</span>
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
                src="/images/reviews/deepal-s05-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น Deepal S05 EVSELECT"
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
                ชุดอุปกรณ์เสริมตรงรุ่นสำหรับ Changan Deepal S05
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                เพิ่มความสะดวกสบายและปกป้องรถของคุณ ด้วยพรมปูพื้น TPE 3D ยกระดับขอบสูง, ถาดรองช่องเก็บของ Frunk หน้า 159 ลิตร, ม่านกรองแสงหลังคากระจกพาโนรามา Nano-Silver สู้แดดเมืองไทย และฟิล์มกระจก 9H ป้องกันรอยหน้าจอ 15.4 นิ้ว
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม Deepal S05 ทั้งหมด</span>
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
                <span>ช่องเก็บของฝากระโปรงหน้า (Frunk) มหึมา 159 ลิตร ใหญ่ที่สุดในรถระดับนี้</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>กล้อง 4K Gimbal Camera บนหลังคา ถ่าย Vlog ท่องเที่ยวได้ทันใจ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ไฟหน้าโปรเจกเตอร์ DLP ฉายหนัง 120 นิ้ว พร้อมลำโพงภายนอกสำหรับแคมปิ้ง</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ชาร์จเร็ว DC 3C สูงถึง 160 kW ชาร์จ 30-80% ได้ใน 15 นาที</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ฐานล้อยาว 2,880 มม. ห้องโดยสารตอนหลังกว้างขวางเกินพิกัด B/C-SUV</span>
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
                <span>หลังคาแก้ว Panoramic Glass ไม่มีม่านไฟฟ้า ต้องติดม่านบังแดดแยก</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ไม่มีหน้าจอแสดงผลหลังพวงมาลัย ต้องอาศัยระบบ AR-HUD</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>กล้องกิมบอลบนหลังคาต้องระวังเรื่องกิ่งไม้หรือการล้างรถด้วยแปรงอัตโนมัติ</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ความจุแบตเตอรี่ 56.12 kWh อาจต้องวางแผนแวะชาร์จถ้าขับทางไกลเกิน 380 km</span>
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
          <strong>Changan Deepal S05</strong> ไม่ได้เป็นเพียงแค่รถยนต์ไฟฟ้าที่ใช้เดินทางจากจุด A ไปจุด B แต่เป็นเครื่องมือสร้างความสุขในการเดินทางที่ตอบโจทย์คนรุ่นใหม่อย่างแท้จริง ด้วยฟีเจอร์สนุกๆ อย่างกล้อง 4K Gimbal, ไฟหน้าฉายภาพยนตร์, ห้องโดยสารที่กว้างขวาง และความเร็วในการชาร์จ DC ที่ไวทันใจ ในงบประมาณเริ่มต้นราว 8 แสนบาท ถือเป็นหนึ่งในรถ EV ที่คุ้มค่าและน่าสนใจที่สุดในตลาด
        </p>

        {/* Multi-dimensional Scorecard Grid */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 my-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">ตารางคะแนนประเมินสมรรถนะ (EVSELECT Rating)</h3>
              <p className="text-xs text-zinc-400">ทดสอบและประเมินตามมาตรฐานสภาพการขับขี่ในประเทศไทย</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-lime-400">8.7</span>
              <span className="text-sm text-zinc-500"> / 10</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">นวัตกรรม & ฟังก์ชันไลฟ์สไตล์ (Innovation, 4K Gimbal & DLP)</span>
                <span className="text-lime-400">9.6 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">พื้นที่ใช้สอย & Frunk หน้ารถ (Cabin Roominess & 159L Frunk)</span>
                <span className="text-lime-400">9.5 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความเร็วในการชาร์จ & แบตเตอรี่ (3C Super Charging Speed)</span>
                <span className="text-lime-400">9.0 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">สมรรถนะมอเตอร์ & การขับขี่ (Powertrain & Handling)</span>
                <span className="text-lime-400">8.4 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความคุ้มค่าต่อราคาจำหน่าย (Value for Money in Thailand)</span>
                <span className="text-lime-400">8.8 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความพร้อมต่อสภาพอากาศร้อนไทย (Sunroof Heat Isolation)</span>
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

