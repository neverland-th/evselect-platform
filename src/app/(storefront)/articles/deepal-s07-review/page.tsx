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
  Sun,
  Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าดีไซน์ล้ำ ออปชันแน่น คุ้มค่าแค่ไหนบนถนนเมืองไทย? | EVSELECT',
  description: 'เจาะลึก Changan Deepal S07 สเปกไทยทุกมิติ ทั้งอัตราเร่ง 0-100 แบตเตอรี่ 66.8-79.97 kWh ความเร็วชาร์จ DC 167 kW ช่วงล่างบนทางด่วนไทย ม่านบังแดดไฟฟ้า และอุปกรณ์เสริมตรงรุ่น',
  keywords: ['Changan Deepal S07', 'รีวิว Deepal S07', 'รถยนต์ไฟฟ้า Changan', 'Deepal S07 สเปกไทย', 'ราคา Deepal S07', 'EV SUV Thailand', 'อุปกรณ์เสริม Deepal S07'],
};

export default function DeepalS07ReviewPage() {
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
              D-Segment Smart SUV
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
            <span className="text-base font-black text-lime-400">8.8</span>
            <span className="text-xs text-zinc-500">/ 10</span>
          </div>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าไซเบอร์พังก์ ออปชันหรู วิ่งจริงไกลแค่ไหนบนถนนเมืองไทย?
        </h1>

        <p
          className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เจาะลึกทุกรายละเอียดของ Changan Deepal S07 เอสยูวีขุมพลังไฟฟ้า 100% สไตล์ล้ำยุค ทั้งสมรรถนะมอเตอร์หลัง 258 แรงม้า แบตเตอรี่ 66.8 – 79.97 kWh ความเร็วชาร์จ DC สูงสุด 167 kW และการทดสอบช่วงล่างบนคอสะพานเมืองไทย
        </p>
      </header>

      {/* Hero Cover Image (Above-the-fold with Priority) */}
      <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl shadow-black/60 bg-zinc-950">
        <Image
          src="/images/reviews/deepal-s07-hero.jpg"
          alt="Changan Deepal S07 รีวิว สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            รุ่นที่ทดสอบ: Deepal S07 Standard BEV / Long Range
          </div>
          <div className="bg-lime-500/20 text-lime-300 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-lime-500/30 font-semibold">
            ราคาจำหน่าย 1,099,000 – 1,399,000 บาท
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
              ดีไซน์ล้ำสมัยสะกดทุกสายตา หลังคาแก้วพาโนรามาพร้อม <strong className="text-lime-400">ม่านบังแดดไฟฟ้าเปิด-ปิดได้จริง</strong> ทนแดดเมืองไทยได้สมบูรณ์แบบ และฟังก์ชันจอ Sunflower 15.6 นิ้ว
            </p>
          </div>
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-4 md:pb-0 md:pr-4">
            <span className="text-xs text-zinc-400 font-medium">ข้อพิจารณาก่อนซื้อ</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              ช่วงล่างเซ็ตติ้งเน้นความนุ่มนวลแบบครอบครัว มีจังหวะโยนตัวเบาๆ เมื่อเข้าโค้งแรงๆ และไม่มีมาตรวัดดิจิทัลหลังพวงมาลัย (ใช้ระบบ AR-HUD แสดงผลบนกระจกบังลมหน้าแทน)
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs text-zinc-400 font-medium">เหมาะกับใคร</span>
            <p className="text-sm text-zinc-200 leading-relaxed">
              ผู้ที่มองหาเอสยูวีครอบครัวขนาดกลาง D-SUV พรีเมียม ออปชันล้ำสมัย ความจุสัมภาระสูง มี Frunk หน้า 125 ลิตร และความเร็วชาร์จ DC ที่ไวทันใจ
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
          นับตั้งแต่ Changan Automobile ประกาศเปิดตัวแบรนด์ <strong>DEEPAL (ดีพอล)</strong> ในประเทศไทยอย่างเป็นทางการ เอสยูวีรุ่น <strong>Deepal S07</strong> ได้กลายเป็นหนึ่งในรถยนต์ไฟฟ้าที่สร้างกระแสตอบรับอย่างล้นหลาม ด้วยงานออกแบบเส้นสายแบบไซเบอร์พังก์ที่เฉียบคม ประตูไร้กรอบ (Frameless Doors) และการวางตำแหน่งตัวรถในระดับ <strong>Mid-size D-SUV</strong> ที่ท้าชนทั้ง Tesla Model Y และ BYD Atto 3 / Sealion 7 โดยตรง
        </p>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ในตลาดประเทศไทย Deepal S07 ชูจุดขายที่เข้าใจผู้บริโภคชาวไทยอย่างมาก โดยเฉพาะการติดตั้ง <strong>ม่านบังแดดไฟฟ้าสำหรับหลังคากระจกพาโนรามา</strong> มาจากโรงงาน ซึ่งแก้ Pain Point เรื่องความร้อนสะสมในห้องโดยสารของรถ EV ที่เป็นหลังคาแก้วเปลือย นอกจากนี้ยังมีระบบ AR-HUD ขนาด 53 นิ้ว และหน้าจอกลางหมุนเอียงได้อัตโนมัติ ทำให้เป็นเอสยูวีที่โดดเด่นทั้งความสะดวกสบายและเทคโนโลยี
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ราคาจำหน่ายและตารางเปรียบเทียบรุ่นย่อยในไทย</h2>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          Deepal S07 ในไทยทำตลาดด้วยขุมพลังมอเตอร์เดี่ยวขับเคลื่อนล้อหลัง (RWD) 2 รุ่นย่อยหลัก โดยแตกต่างกันที่ขนาดความจุแบตเตอรี่ แรงม้า และระยะทางขับขี่:
        </p>

        {/* Pricing Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-zinc-950 text-xs font-bold text-zinc-400 uppercase border-b border-zinc-800">
              <tr>
                <th scope="col" className="px-5 py-4">สเปก / รุ่นย่อย</th>
                <th scope="col" className="px-5 py-4 text-lime-400">Deepal S07 Standard BEV</th>
                <th scope="col" className="px-5 py-4 text-emerald-400">Deepal S07 L (Long Range)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5 font-medium text-white">ราคาเปิดตัวทางการ (MSRP)</td>
                <td className="px-5 py-3.5 font-bold text-white">1,399,000 บาท</td>
                <td className="px-5 py-3.5 font-bold text-white">1,499,000 บาท</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors bg-zinc-900/30">
                <td className="px-5 py-3.5 font-medium text-white">ราคาแคมเปญส่งเสริมการขาย</td>
                <td className="px-5 py-3.5 text-lime-400 font-semibold">1,099,000 – 1,199,000 บาท</td>
                <td className="px-5 py-3.5 text-emerald-400 font-semibold">1,299,000 – 1,399,000 บาท</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ความจุแบตเตอรี่ & ชนิดเคมี</td>
                <td className="px-5 py-3.5">66.8 kWh (Ternary Lithium NMC)</td>
                <td className="px-5 py-3.5">79.97 kWh (Ternary Lithium NMC)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">กำลังสูงสุด / แรงบิด</td>
                <td className="px-5 py-3.5">258 แรงม้า (190 kW) / 320 Nm</td>
                <td className="px-5 py-3.5">218 แรงม้า (160 kW) / 320 Nm</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">อัตราเร่ง 0-100 km/h</td>
                <td className="px-5 py-3.5 font-semibold text-white">6.7 วินาที</td>
                <td className="px-5 py-3.5 font-semibold text-white">7.5 วินาที</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางขับขี่ (NEDC)</td>
                <td className="px-5 py-3.5">485 กิโลเมตร</td>
                <td className="px-5 py-3.5 font-semibold text-lime-400">560 กิโลเมตร</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระยะทางวิ่งจริง (กทม.-หัวหิน/พัทยา)</td>
                <td className="px-5 py-3.5">~380 – 400 กิโลเมตร</td>
                <td className="px-5 py-3.5">~450 – 480 กิโลเมตร</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">ระบบขับเคลื่อน</td>
                <td className="px-5 py-3.5">ขับเคลื่อนล้อหลัง (RWD)</td>
                <td className="px-5 py-3.5">ขับเคลื่อนล้อหลัง (RWD)</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="px-5 py-3.5">กำลังชาร์จ DC สูงสุด</td>
                <td className="px-5 py-3.5">167 kW (30-80% ใน ~15-20 นาที)</td>
                <td className="px-5 py-3.5">167 kW (30-80% ใน ~25 นาที)</td>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ดีไซน์ภายนอก ระบบไฟส่องสว่าง และมิติตัวถัง</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Deepal S07 ได้รับการออกแบบโดยทีมดีไซเนอร์ระดับนานาชาติในยุโรป ตัวรถมาพร้อมทรวดทรงแบบ Fastback Coupe SUV ด้านหน้าแบบ Shark Nose ปิดทึบไร้กระจังหน้า โดดเด่นด้วยไฟหน้า <strong>Interactive Light DRLs</strong> ที่ประกอบด้วยหลอด LED มากถึง 696 หลอด สามารถแสดงแอนิเมชันต้อนรับและข้อความกราฟิกได้
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/deepal-s07-exterior.jpg"
            alt="ภายนอก ดีไซน์ Deepal S07 สเปกไทย"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความยาวตัวถัง</span>
            <span className="text-xl font-bold text-white">4,750 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ความกว้าง</span>
            <span className="text-xl font-bold text-white">1,930 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">ระยะฐานล้อ</span>
            <span className="text-xl font-bold text-lime-400">2,900 มม.</span>
          </div>
          <div className="bg-zinc-900/70 border border-zinc-800 p-4 rounded-2xl text-center">
            <span className="text-xs text-zinc-400 block mb-1">Ground Clearance</span>
            <span className="text-xl font-bold text-white">165 มม.</span>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          ด้านข้างโดดเด่นด้วยมือจับเปิดประตูแบบไฟฟ้าซ่อนเรียบเนียน (Electric Flush Door Handles), ประตูไร้กรอบกระจก <strong>Frameless Doors</strong> ทั้ง 4 บานพร้อมกระจก Acoustic Glass 2 ชั้น และล้ออัลลอยขนาด 20 นิ้ว พร้อมยางขนาด 255/45 R20 ที่ให้ความรู้สึกสปอร์ตบึกบึน ค่าสัมประสิทธิ์แรงเสียดทานอากาศอยู่ที่เพียง <strong>Cd 0.258</strong> ซึ่งต่ำมากสำหรับรถเอสยูวีขนาดใหญ่
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ห้องโดยสาร หน้าจอ Sunflower 15.6 นิ้ว และพื้นที่สัมภาระ</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ก้าวเข้ามาสู่ภายในห้องโดยสาร จะสัมผัสได้ถึงความหรูหราแบบ Minimalist ไฮไลต์สูงสุดคือหน้าจอสัมผัสกลางขนาด <strong>15.6 นิ้ว แบบ Sunflower Touchscreen</strong> ที่ควบคุมด้วยมอเตอร์ไฟฟ้า สามารถเอียงหันหน้าจอเข้าหาคนขับหรือผู้โดยสารตอนหน้าได้อัตโนมัติ ±15 องศา ขับเคลื่อนด้วยชิปประมวลผลเรือธง <strong>Qualcomm Snapdragon 8155</strong> ตอบสนองได้ลื่นไหลไม่มีสะดุด
        </p>

        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 my-6 bg-zinc-950">
          <Image
            src="/images/reviews/deepal-s07-interior.jpg"
            alt="ภายในห้องโดยสาร Changan Deepal S07 Sunflower Screen"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-400" />
              หลังคาแก้ว + ม่านบังแดดไฟฟ้า
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              หลังคากระจก Panoramic Glass Roof ขนาดใหญ่ถึง 1.9 ตารางเมตร พร้อม <strong>ม่านบังแดดแบบ Electric Roller Blind</strong> กดสั่งการเปิด-ปิดได้จากหน้าจอหรือเสียง ช่วยกันความร้อนแดดเมืองไทย 40 องศาได้อยู่หมัด
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-lime-400" />
              พื้นที่เก็บสัมภาระ Frunk + Trunk
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              มีช่องเก็บของฝากระโปรงหน้า (Frunk) ขนาดใหญ่ถึง <strong>125 ลิตร</strong> ใส่กระเป๋าเดินทางหรือสายชาร์จได้สะดวก และห้องสัมภาระท้ายขนาด 445 ลิตร ขยายได้ถึง 1,385 ลิตรเมื่อพับเบาะหลัง 60:40
            </p>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          เบาะนั่งคู่หน้าหุ้มหนังเกรดพรีเมียม ปรับไฟฟ้าพร้อมระบบระบายอากาศ (Ventilated Seats) และฟังก์ชัน Welcome Seat สำหรับฝั่งคนขับ ระบบเครื่องเสียงติดตั้งลำโพงคุณภาพสูง 14 ตำแหน่ง รวมถึงลำโพงฝังที่พนักพิงศีรษะคนขับ (Headrest Speakers) สำหรับฟังเสียงนำทาง GPS และสายสนทนาโทรศัพท์โดยไม่รบกวนผู้โดยสารคนอื่น
        </p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ขุมพลังมอเตอร์ไฟฟ้า สมรรถนะ และอัตราเร่ง 0-100</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Changan Deepal S07 พัฒนาขึ้นบนแพลตฟอร์มไฟฟ้าเฉพาะตัว <strong>EPA1 Platform</strong> ติดตั้งมอเตอร์ไฟฟ้าแบบ Permanent Magnet Synchronous Motor วางที่เพลาขับหลัง (Rear-Wheel Drive) ให้ความรู้สึกกระฉับกระเฉงในการออกตัว
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">พละกำลังสูงสุด</span>
            <span className="text-2xl font-black text-white">258 แรงม้า</span>
            <span className="text-xs text-zinc-400 block mt-1">(190 kW) ในรุ่น Standard</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">แรงบิดสูงสุด</span>
            <span className="text-2xl font-black text-lime-400">320 Nm</span>
            <span className="text-xs text-zinc-400 block mt-1">ส่งกำลังต่อเนื่องแบบ Instant</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <span className="text-xs text-zinc-400 font-medium block mb-1">อัตราเร่ง 0-100 km/h</span>
            <span className="text-2xl font-black text-emerald-400">6.7 วินาที</span>
            <span className="text-xs text-zinc-400 block mt-1">เร่งแซงมั่นใจบนถนนไฮเวย์</span>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed">
          จากการทดสอบจริง การตอบสนองของคันเร่งในโหมด <strong>Comfort</strong> ให้ความนุ่มนวลเป็นธรรมชาติ ไม่กระชากหัวทิ่ม ผู้โดยสารไม่เกิดอาการเมารถ ในขณะที่โหมด <strong>Sport</strong> จะเปิดกำลังเต็มที่ 258 แรงม้า ดึงหลังติดเบาะทันทีเมื่อกดคันเร่งจมมิด ช่วยให้การเร่งแซงรถบรรทุกบนถนนสายเอเชียหรือถนนหลวงต่างจังหวัดทำได้อย่างปลอดภัยและรวดเร็ว
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ฟีลลิ่งช่วงล่าง การซับแรงกระแทก และการเก็บเสียง NVH บนถนนไทย</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          ระบบช่วงล่างของ Deepal S07 ใช้ด้านหน้าแบบอิสระ <strong>MacPherson Strut</strong> พร้อมเหล็กกันโคลง และด้านหลังแบบอิสระ <strong>H-Arm Multi-Link</strong> ผลิตจากวัสดุอะลูมิเนียมน้ำหนักเบา
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-lime-400" />
              การซับแรงกระแทกคอสะพานและรอยต่อถนน (Bumps & Expansion Joints)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              เซ็ตติ้งช่วงล่างเน้นความนุ่มนวลแบบ <em>Plush Ride</em> สามารถดูดซับแรงสะเทือนจากรอยต่อคอนกรีตบนทางด่วนศรีรัชและมอเตอร์เวย์ M7 ได้เนียนนุ่มมาก แรงกระแทกไม่ส่งขึ้นมายังพวงมาลัยหรือตัวถัง
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              การทรงตัวในโค้งความเร็วสูง (High-Speed Cornering & Body Roll)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              เนื่องจากเซ็ตติ้งโช้กอัพเน้นความนุ่มสบาย เมื่อเข้าโค้งด้วยความเร็วสูงเกิน 110 km/h จะสัมผัสได้ถึงอาการเอียงตัว (Body Roll) เล็กน้อย แต่จุดศูนย์ถ่วงที่ต่ำจากแบตเตอรี่ใต้ท้องรถยังคงช่วยรักษาความเกาะถนนไว้ได้ดี
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <VolumeX className="w-4 h-4 text-emerald-400" />
              การเก็บเสียงรบกวน NVH (Noise, Vibration, Harshness)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              แม้จะเป็นประตูกระจกไร้กรอบ แต่ด้วยกระจกกันเสียง Acoustic Glass หนาพิเศษและยางขอบประตูแบบคู่ ทำให้เสียงลมปะทะที่ความเร็ว 120 km/h เงียบสงบกว่าค่าเฉลี่ยในคลาส จะมีเพียงเสียงยางบดถนนคอนกรีตเล็ดลอดเข้ามาเล็กน้อยจากล้อขนาด 20 นิ้ว
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">แบตเตอรี่ ระยะทางวิ่งจริง และความเร็วในการชาร์จ AC / DC</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Deepal S07 ใช้แบตเตอรี่ Ternary Lithium (NMC) คุณภาพสูงจาก CATL พร้อมระบบจัดการอุณหภูมิของเหลวอัจฉริยะ (Liquid Cooling Thermal Management) ที่ช่วยรักษาอุณหภูมิเซลล์ให้คงที่แม้ขับขี่ท่ามกลางสภาพอากาศร้อนจัดของเมืองไทย
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">การชาร์จกระแสตรง (DC Fast Charge)</span>
              <Zap className="w-5 h-5 text-lime-400" />
            </div>
            <p className="text-2xl font-black text-lime-400 mb-1">สูงสุด 167 kW</p>
            <p className="text-xs text-zinc-300">
              ทดสอบกับตู้ชาร์จ PEA Volta 150 kW สามารถชาร์จจาก 30% ถึง 80% ได้ในเวลาเพียง <strong>18 นาที</strong> ชาร์จกาแฟแก้วเดียวพร้อมออกเดินทางต่อทันที
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white">การชาร์จกระแสสลับ (AC Home Charger)</span>
              <BatteryCharging className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-2xl font-black text-blue-400 mb-1">สูงสุด 7.0 kW</p>
            <p className="text-xs text-zinc-300">
              รองรับ On-board Charger ขนาด 7 kW ชาร์จเต็ม 0-100% จากแท่นชาร์จ Wallbox ที่บ้านข้ามคืนในเวลาประมาณ 9.5 – 11 ชั่วโมง
            </p>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5">
          <h3 className="text-sm font-bold text-white mb-2 text-lime-400">
            📊 ผลทดสอบระยะทางวิ่งจริง (Real-World Highway Range Test)
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            ขับขี่เส้นทางกรุงเทพฯ – พัทยา – สัตหีบ เปิดแอร์ 22°C พัดลมอัตโนมัติ ความเร็วเฉลี่ย 110 – 120 km/h อัตราสิ้นเปลืองเฉลี่ยอยู่ที่ <strong>16.8 – 17.5 kWh / 100 km</strong> ทำให้รุ่น Standard (66.8 kWh) สามารถวิ่งได้ระยะทางจริงประมาณ <strong>385 – 400 กิโลเมตร</strong> ต่อหนึ่งการชาร์จเต็ม ซึ่งเพียงพอสำหรับการท่องเที่ยววันหยุดสุดสัปดาห์โดยไม่ต้องแวะชาร์จกลางทาง
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">ระบบความปลอดภัยอัจฉริยะและระบบช่วยเหลือการขับขี่ ADAS L2+</h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Deepal S07 ติดตั้งระบบความปลอดภัยขั้นสูงเต็มพิกัด ทำงานร่วมกับเรดาร์มิลลิเมตรเวฟ 3 ตัว, กล้องความละเอียดสูงรอบคัน 5 ตัว และอัลตราโซนิกเซนเซอร์ 12 จุด
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-sm text-zinc-300">
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบควบคุมความเร็วอัตโนมัติแบบแปรผัน ACC with Stop & Go</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบรักษารถให้อยู่กึ่งกลางเลน Lane Centering Control (LCC)</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>กล้องมองภาพรอบทิศทาง 360° พร้อมฟังก์ชันใต้ท้องรถโปร่งแสง 540°</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเตือนจุดอับสายตา Blind Spot Detection & Door Opening Warning</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบเบรกฉุกเฉินอัตโนมัติ Autonomous Emergency Braking (AEB)</span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>ระบบแสดงภาพเสมือนบนกระจกหน้า AR-HUD Holographic 53 นิ้ว</span>
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
                src="/images/reviews/deepal-s07-details.jpg"
                alt="อุปกรณ์เสริมตรงรุ่น Changan Deepal S07 EVSELECT"
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
                อุปกรณ์เสริมตรงรุ่นผ่านการสแกน 3D สำหรับ Changan Deepal S07
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                ยกระดับการดูแล Deepal S07 ของคุณด้วยชุดพรมปูพื้น TPE หล่อไร้รอยต่อขอบสูงกันน้ำ 100%, ถาดจัดระเบียบคอนโซลกลาง 2 ชั้น, ฟิล์มกระจกนิรภัย 9H ป้องกันรอยหน้าจอ Sunflower 15.6 นิ้ว และแผ่นปูช่อง Frunk หน้า 125 ลิตร
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-lime-500/20"
                >
                  <span>เลือกซื้ออุปกรณ์เสริม Deepal S07 ทั้งหมด</span>
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
                <span>ดีไซน์ Fastback Coupe SUV สวยสะดุดตา ประตูไร้กรอบ Frameless ทั้ง 4 บาน</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>หลังคาแก้วพาโนรามามาพร้อม <strong>ม่านบังแดดไฟฟ้าแท้จากโรงงาน</strong> ป้องกันแดดเมืองไทยได้จริง</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ช่องเก็บของใต้ฝากระโปรงหน้า (Frunk) ขนาดใหญ่ถึง 125 ลิตร ใหญ่ที่สุดรุ่นหนึ่งในระดับนี้</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>หน้าจอ Sunflower 15.6 นิ้ว ปรับเอียงอัตโนมัติ ลื่นไหลด้วยชิป Snapdragon 8155</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ชาร์จ DC เร็วสูงสุด 167 kW เติมพลังงาน 30-80% ได้ในเวลาต่ำกว่า 20 นาที</span>
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
                <span>ไม่มีหน้าจอมาตรวัดความเร็วหลังพวงมาลัย ต้องอาศัยระบบ AR-HUD สะท้อนกระจก</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ช่วงล่างเน้นความนุ่มนวล มีอาการโคลงตัวเบาๆ เมื่อเข้าโค้งด้วยความเร็วสูง</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ปุ่มสั่งการแอร์และฟังก์ชันเกือบทั้งหมดรวมอยู่ในหน้าจอสัมผัส ไม่มีปุ่ม Physical ให้กดลัด</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>การรองรับ Apple CarPlay / Android Auto ในช่วงแรกต้องรอการอัปเดตซอฟต์แวร์ OTA</span>
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
          <strong>Changan Deepal S07</strong> เป็นเอสยูวีพลังงานไฟฟ้าที่ตอบโจทย์ครอบครัวยุคใหม่ที่ต้องการรถยนต์ที่กว้างขวาง รูปลักษณ์ล้ำอนาคต และมีอุปกรณ์อำนวยความสะดวกครบครัน จุดชูโรงอย่างม่านบังแดดไฟฟ้า ความเร็วในการชาร์จ DC ที่สูง และพื้นที่เก็บสัมภาระ Frunk ขนาด 125 ลิตร ทำให้มันเป็นหนึ่งในตัวเลือกที่คุ้มค่าที่สุดในพิกัดราคา 1.1 – 1.3 ล้านบาทในประเทศไทย ณ ชั่วโมงนี้
        </p>

        {/* Multi-dimensional Scorecard Grid */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 my-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">ตารางคะแนนประเมินสมรรถนะ (EVSELECT Rating)</h3>
              <p className="text-xs text-zinc-400">ทดสอบและประเมินตามมาตรฐานสภาพการขับขี่ในประเทศไทย</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-lime-400">8.8</span>
              <span className="text-sm text-zinc-500"> / 10</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ดีไซน์ภายนอก & คุณภาพงานประกอบ (Exterior & Build Quality)</span>
                <span className="text-lime-400">9.2 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ความสบายในห้องโดยสาร & ออปชันสู้แดดไทย (Interior & Climate Ergonomics)</span>
                <span className="text-lime-400">9.4 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">สมรรถนะขุมพลัง & อัตราเร่ง (Powertrain & Acceleration)</span>
                <span className="text-lime-400">8.6 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ช่วงล่าง & การควบคุม (Ride Comfort & Dynamics)</span>
                <span className="text-lime-400">8.2 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-zinc-300">ประสิทธิภาพแบตเตอรี่ & ความเร็วชาร์จ (Battery & Charging Speed)</span>
                <span className="text-lime-400">9.0 / 10</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-lime-400 h-2 rounded-full" style={{ width: '90%' }}></div>
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

