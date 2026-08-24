import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Share2,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Car,
  Sparkles,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'รีวิว BYD Seal (AWD Performance / Premium): สปอร์ตซีดานไฟฟ้า 530 แรงม้า | EVSELECT Reviews',
  description: 'เจาะลึกรีวิว BYD Seal สเปกไทย ทั้งรุ่น Dynamic, Premium และ AWD Performance ทดสอบอัตราเร่ง 0-100 ใน 3.8 วินาที ช่วงล่าง FSD แบตเตอรี่ Blade Battery และระยะวิ่งจริงบนถนนไทย',
};

export default function BYDSealReviewPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-zinc-200">
      {/* 1. Breadcrumbs & Back */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-lime-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> กลับไปหน้ารวมรีวิวและบทความ
        </Link>
      </nav>

      {/* 2. Article Header & Badges */}
      <header className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-400">
          <span className="bg-lime-500/10 text-lime-400 border border-lime-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5" /> Full In-Depth Review
          </span>
          <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">ทดสอบขับขี่จริง</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <CalendarDays className="w-3.5 h-3.5" /> 25 สิงหาคม 2569
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5" /> ใช้เวลาอ่าน 9 นาที
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว BYD Seal (AWD Performance &amp; Premium): สปอร์ตซีดานไฟฟ้า 530 แรงม้า ที่เขย่าบัลลังก์รถยุโรป
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed font-light">
          การทดสอบสมรรถนะแบบเจาะลึกของสปอร์ตซีดานไฟฟ้าที่ร้อนแรงที่สุดในไทย ตั้งแต่อัตราเร่ง 0-100 กม./ชม. ใน 3.8 วินาที ความแข็งแกร่งของแพลตฟอร์ม CTB ฟีลลิ่งช่วงล่าง FSD บนถนนเมืองไทย ไปจนถึงการใช้งานจริงในสภาพอากาศร้อนจัด
        </p>

        {/* Executive Verdict Score Card */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-lime-400" /> EVSELECT Rating
              </div>
              <div className="text-4xl font-black text-lime-400 flex items-baseline gap-2">
                9.1 <span className="text-base font-normal text-zinc-400">/ 10</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                &quot;พละกำลังระดับซูเปอร์คาร์ในราคาที่จับต้องได้ แชสซีเหนียวแน่น ออปชันล้นคัน&quot;
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">ราคาเริ่มต้น</div>
                <div className="text-base font-bold text-white mt-0.5">849,900 ฿</div>
                <div className="text-[11px] text-zinc-500">รุ่น Dynamic (MSRP)</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">พละกำลังสูงสุด</div>
                <div className="text-base font-bold text-lime-400 mt-0.5">530 hp</div>
                <div className="text-[11px] text-zinc-500">รุ่น AWD Performance</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80 col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-400">ระยะทางวิ่งสูงสุด</div>
                <div className="text-base font-bold text-white mt-0.5">650 กม.</div>
                <div className="text-[11px] text-zinc-500">NEDC (รุ่น Premium)</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-zinc-800 bg-zinc-950 shadow-2xl">
        <Image
          src="/images/reviews/byd-seal-hero.jpg"
          alt="BYD Seal สปอร์ตซีดานไฟฟ้า สเปกไทย"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
        />
      </div>

      {/* 4. Article Body */}
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-lime-400 prose-strong:text-white">
        
        {/* Section 1: Overview */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            1. บทนำและภาพรวมในตลาดไทย
          </h2>
          <p>
            การเปิดตัวของ <strong>BYD Seal</strong> ในประเทศไทย ถือเป็นหนึ่งในหมุดหมายสำคัญที่สุดของวงการยานยนต์ไฟฟ้าบ้านเรา เพราะนี่คือรถยนต์ไฟฟ้ารุ่นแรกที่พิสูจน์ให้เห็นว่า รถสปอร์ตซีดานระดับ D-Segment ที่มีพละกำลังระดับ 530 แรงม้า อัตราเร่ง 0-100 กม./ชม. ภายในเวลาเพียง 3.8 วินาที สามารถเป็นเจ้าของได้ในระดับราคาเพียงล้านต้นๆ ถึงล้านกลางๆ
          </p>
          <p>
            BYD Seal พัฒนาขึ้นบนแพลตฟอร์ม <strong>e-Platform 3.0</strong> พร้อมนำเทคโนโลยี <strong>Cell-to-Body (CTB)</strong> มาใช้เป็นรุ่นแรกของค่าย ซึ่งเป็นการผสานแบตเตอรี่ Blade Battery ให้กลายเป็นชิ้นส่วนโครงสร้างหลักของตัวถัง ช่วยเพิ่มความแข็งแกร่งในการบิดตัว (Torsional Rigidity) สูงถึง 40,500 Nm/degree เทียบเท่ากับซูเปอร์คาร์ยุโรป ทำให้ BYD Seal ไม่ใช่เพียงแค่รถที่เร่งทางตรงได้เร็ว แต่ยังถูกเซ็ตอัปมาเพื่อการควบคุมที่เฉียบคมอีกด้วย
          </p>
        </section>

        {/* Section 2: Pricing & Trims Table */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '450px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            2. ราคาจำหน่ายและรุ่นย่อยในประเทศไทย
          </h2>
          <p className="text-zinc-300 text-base mb-6">
            เรเว่ ออโตโมทีฟ (Rêver Automotive) ทำตลาด BYD Seal ในประเทศไทยทั้งหมด 3 รุ่นย่อยหลัก ตอบโจทย์ตั้งแต่ผู้ที่ต้องการความประหยัดคุ้มค่า ไปจนถึงผู้ที่หลงใหลในความแรงระดับไฮเปอร์ฟอร์มานซ์:
          </p>

          <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-900/60 shadow-lg">
            <table className="w-full text-left text-sm text-zinc-300 min-w-[620px]">
              <thead className="bg-zinc-950 text-xs uppercase font-semibold text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-4 px-4">รุ่นย่อย (Trim)</th>
                  <th className="py-4 px-3">ระบบขับเคลื่อน</th>
                  <th className="py-4 px-3">พละกำลัง / แรงบิด</th>
                  <th className="py-4 px-3">แบตเตอรี่ (kWh)</th>
                  <th className="py-4 px-3">0-100 กม./ชม.</th>
                  <th className="py-4 px-3">ระยะทาง (NEDC)</th>
                  <th className="py-4 px-4 text-right">ราคาจำหน่าย (THB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Dynamic</td>
                  <td className="py-4 px-3">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-4 px-3">204 hp / 310 Nm</td>
                  <td className="py-4 px-3">61.44 kWh</td>
                  <td className="py-4 px-3">7.5 วินาที</td>
                  <td className="py-4 px-3">510 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">849,900 ฿*</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors bg-lime-950/10 border-l-2 border-lime-400">
                  <td className="py-4 px-4 font-semibold text-white flex items-center gap-1.5">
                    Premium <span className="bg-lime-500/20 text-lime-400 text-[10px] px-1.5 py-0.5 rounded">แนะนำ</span>
                  </td>
                  <td className="py-4 px-3">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-4 px-3">313 hp / 360 Nm</td>
                  <td className="py-4 px-3">82.56 kWh</td>
                  <td className="py-4 px-3">5.9 วินาที</td>
                  <td className="py-4 px-3 text-lime-400 font-semibold">650 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">999,900 ฿*</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">AWD Performance</td>
                  <td className="py-4 px-3 text-lime-400 font-medium">มอเตอร์คู่ AWD</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">530 hp / 670 Nm</td>
                  <td className="py-4 px-3">82.56 kWh</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">3.8 วินาที</td>
                  <td className="py-4 px-3">580 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-lime-400">1,099,900 ฿*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 mt-2 italic">
            *หมายเหตุ: ราคาหลังปรับโครงสร้างโปรโมชันพิเศษประจำปี 2026 จากราคาเปิดตัวเดิม (1,325,000 - 1,599,000 บาท)
          </p>
        </section>

        {/* Section 3: Exterior Design & Dimensions */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก แสงไฟ และมิติตัวถัง
          </h2>
          <p>
            BYD Seal ได้รับการออกแบบภายใต้แนวคิด <strong>Ocean Aesthetics</strong> โดยทีมงานของ Wolfgang Egger อดีตหัวหน้าฝ่ายออกแบบของ Audi เส้นสายตัวถังมีความโค้งมน ลู่ลมตามหลักอากาศพลศาสตร์ โดยมีค่าสัมประสิทธิ์แรงต้านอากาศ (Drag Coefficient) ต่ำเพียง <strong>Cd 0.219</strong> เท่านั้น
          </p>
          
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/byd-seal-exterior.jpg"
              alt="ดีไซน์ภายนอก BYD Seal"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            ด้านหน้าโดดเด่นด้วยไฟหน้าแบบ Crystal LED พร้อมไฟ DRL ลากยาวลงมาที่ช่องดักลมกันชนหน้า ให้ความรู้สึกสปอร์ตดุดัน มือจับเปิดประตูแบบ Flush Door Handles ซ่อนเรียบเนียนไปกับตัวถัง และล้ออัลลอยขนาด 19 นิ้ว ทรงใบพัดตัดอากาศ (ในรุ่น Premium และ AWD Performance) รัดด้วยยางขนาด 235/45 R19
          </p>
          <p>
            <strong>มิติตัวถัง (Dimensions):</strong>
          </p>
          <ul>
            <li>ความยาว: 4,800 มม.</li>
            <li>ความกว้าง: 1,875 มม.</li>
            <li>ความสูง: 1,460 มม.</li>
            <li>ระยะฐานล้อ (Wheelbase): 2,920 มม. (ยาวกว่า Camry และ Accord ชัดเจน)</li>
            <li>ระยะต่ำสุดจากพื้น (Ground Clearance): <strong>120 มม.</strong></li>
          </ul>
          <p className="text-sm bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl text-zinc-300">
            <strong className="text-amber-400">ข้อควรระวังสำหรับถนนไทย:</strong> ด้วยระยะ Ground Clearance เพียง 120 มม. และฐานล้อที่ยาวถึง 2,920 มม. ทำให้ผู้ขับขี่ต้องหยอดชะลอความเร็วเมื่อขึ้น-ลงทางลาดชัน ลานจอดรถห้าง หรือลูกระนาดขนาดใหญ่ในซอยกรุงเทพฯ เพื่อป้องกันการครูดของแผ่นกันกระแทกใต้ท้อง
          </p>
        </section>

        {/* Section 4: Interior & Infotainment */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            4. ภายในห้องโดยสาร ความสบาย และระบบอินโฟเทนเมนต์
          </h2>
          <p>
            ก้าวเข้ามาในห้องโดยสาร คุณจะสัมผัสได้ถึงกลิ่นอายความสปอร์ตพรีเมียม เบาะนั่งคู่หน้าเป็นแบบ Bucket Seat ชิ้นเดียว หุ้มด้วยหนังแท้ (รุ่น Premium/AWD) พร้อมระบบปรับไฟฟ้า 8 ทิศทาง เมมโมรี่ และที่สำคัญคือ <strong>มีระบบระบายอากาศ (Ventilated Seats)</strong> ทั้งเบาะคนขับและผู้โดยสารตอนหน้า ซึ่งเป็นออปชันที่ช่วยชีวิตคนไทยในสภาพอากาศ 40°C ได้อย่างยอดเยี่ยม
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/byd-seal-interior.jpg"
              alt="ภายในห้องโดยสาร BYD Seal"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            ตรงกลางคอนโซลติดตั้งหน้าจอสัมผัสขนาดใหญ่ <strong>15.6 นิ้ว หมุนได้ด้วยระบบไฟฟ้า (Rotating Screen)</strong> ทำงานร่วมกับระบบปฏิบัติการ DiLink รองรับ Wireless Apple CarPlay และ Android Auto ทำงานรวดเร็วลื่นไหล คันเกียร์คริสตัลทรงหยดน้ำ (Crystal Gear Shift) ล้อมรอบด้วยปุ่มควบคุมฟังก์ชันลัดที่ใช้งานได้สะดวก
          </p>
          <p>
            ระบบเสียงระดับพรีเมียม <strong>Dynaudio 12 ลำโพง</strong> ให้มิติเสียงคมชัด เบสแน่นลึกและเวทีเสียงกว้าง ขณะที่ด้านหลังคาเป็นหลังคากระจก Panoramic Glass Roof ไร้รอยต่อขนาดใหญ่เกือบ 2 ตารางเมตร ซึ่งแม้จะเคลือบสารกันความร้อนมาแล้ว แต่สำหรับการจอดตากแดดเมืองไทย การติดตั้งม่านบังแดดเสริมตรงรุ่นยังคงเป็นสิ่งจำเป็นอย่างยิ่ง
          </p>
          <p>
            <strong>พื้นที่เก็บสัมภาระ:</strong>
          </p>
          <ul>
            <li>ห้องเก็บสัมภาระด้านท้าย: ความจุ <strong>400 ลิตร</strong> พร้อมฝาท้ายเปิด-ปิดไฟฟ้า</li>
            <li>ช่องเก็บสัมภาระด้านหน้า (Frunk): ความจุ <strong>53 ลิตร</strong> เหมาะสำหรับเก็บสายชาร์จฉุกเฉินและอุปกรณ์ปะยาง</li>
          </ul>
        </section>

        {/* Section 5: Powertrain & Driving Impressions */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            5. ขุมพลังมอเตอร์ สมรรถนะ และฟีลลิ่งการขับขี่
          </h2>
          <p>
            ในการทดสอบรุ่นท็อป <strong>BYD Seal AWD Performance</strong> เราได้สัมผัสกับพละกำลัง 530 แรงม้า (390 kW) แรงบิดมหาศาล 670 นิวตันเมตร จากมอเตอร์ไฟฟ้าคู่ (หน้า 160 kW / หลัง 230 kW) เมื่อเปิดโหมด Sport และเหยียบคันเร่งจมมิด ตัวรถจะพุ่งทะยานดึงหลังติดเบาะอย่างไร้ความปรานี เข็มความเร็วแตะ 100 กม./ชม. ในเวลาเพียง <strong>3.8 วินาที</strong> ตามที่เคลมไว้
          </p>
          <p>
            ระบบขับเคลื่อน 4 ล้อทำงานร่วมกับระบบ <strong>iTAC (Intelligence Torque Adaptation Control)</strong> ซึ่งตรวจจับความเร็วของล้อแต่ละข้างได้เร็วกว่าระบบเซ็นเซอร์ ABS ทั่วไปถึง 50 มิลลิวินาที ทำให้ระบบสามารถเกลี่ยแรงบิดระหว่างล้อหน้าและล้อหลังได้อย่างแม่นยำ ป้องกันอาการหน้าดื้อ (Understeer) หรือท้ายปัด (Oversteer) ขณะเข้าโค้งด้วยความเร็วสูงบนทางเปียกลื่น
          </p>
          <p>
            สำหรับรุ่น <strong>Premium RWD (313 แรงม้า / 360 Nm)</strong> ที่เราทดสอบเปรียบเทียบ แม้อัตราเร่ง 0-100 จะอยู่ที่ 5.9 วินาที แต่ความรู้สึกในการขับขี่ให้ความเป็นธรรมชาติและคล่องตัวสูงกว่า การถ่ายเทน้ำหนักไปที่ล้อหลังให้ฟีลลิ่งสปอร์ตแบบ Rear-Wheel-Drive แท้ๆ และเพียงพอเหลือเฟือสำหรับการเร่งแซงบนถนนหลวงเมืองไทย
          </p>
        </section>

        {/* Section 6: Ride Quality & NVH */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            6. ช่วงล่าง ความนุ่มนวล และการเก็บเสียง (NVH) บนถนนเมืองไทย
          </h2>
          <p>
            ระบบกันสะเทือนด้านหน้าเป็นแบบ <strong>Double Wishbone อิสระปีกนกคู่</strong> และด้านหลังเป็นแบบ <strong>Five-Link Multi-link</strong> ซึ่งในรุ่น AWD Performance จะพิเศษกว่าด้วยการติดตั้งโช้คอัพ <strong>FSD (Frequency Selective Damping)</strong> ที่สามารถปรับความหนืดอัตโนมัติตามความถี่ของการสั่นสะเทือน
          </p>
          <p>
            <strong>ฟีลลิ่งบนสภาพถนนจริงในไทย:</strong>
          </p>
          <ul>
            <li><strong>การขับขี่ในเมือง (ความเร็วต่ำ 30-60 กม./ชม.):</strong> ช่วงล่าง FSD ให้ความรู้สึกเฟิร์มแน่น แต่ซับแรงกระแทกจากฝาท่อและรอยต่อถนนคอนกรีตได้ดี ไม่กระด้างตึงตังเหมือนสปอร์ตคาร์พันธุ์แท้</li>
            <li><strong>การวิ่งทางไกลบนทางด่วน (110-120 กม./ชม.):</strong> ตัวรถนิ่งสนิท อาการโยนตัวหรือโคลงเคลงมีน้อยมาก การเปลี่ยนเลนกะทันหันทำได้อย่างมั่นใจ ไม่มีอาการเซ</li>
            <li><strong>การเก็บเสียง (NVH):</strong> กระจกบังลมหน้าและกระจกหน้าต่างคู่หน้าเป็นแบบ Acoustic Glass 2 ชั้น ช่วยตัดเสียงลมปะทะได้ดีเยี่ยมจนถึงความเร็ว 120 กม./ชม. มีเพียงเสียงยางบดถนนคอนกรีตหยาบเท่านั้นที่เล็ดลอดเข้ามาให้ได้ยินแผ่วๆ</li>
          </ul>
        </section>

        {/* Section 7: Battery, Real-World Range & Charging */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            7. แบตเตอรี่ ระบบชาร์จไฟ และระยะทางใช้งานจริง
          </h2>
          <p>
            BYD Seal ใช้แบตเตอรี่ <strong>Blade Battery (LFP Chemistry)</strong> ความจุ 82.56 kWh ในรุ่น Premium และ AWD Performance ซึ่งมีความทนทานต่อความร้อนสูงและความปลอดภัยระดับผ่านการทดสอบ Nail Penetration Test (การตอกตะปูทะลุเซลล์โดยไม่ลุกไหม้)
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/byd-seal-details.jpg"
              alt="ระบบชาร์จและรายละเอียดตัวรถ BYD Seal"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>การทดสอบระยะวิ่งใช้งานจริง (Real-World Test เส้นทาง กทม. - พัทยา - ระยอง):</strong>
          </p>
          <ul>
            <li>รุ่น Premium RWD (เคลม 650 กม. NEDC): วิ่งจริงที่ความเร็ว 110-120 กม./ชม. เปิดแอร์ 22°C ทำระยะได้ประมาณ <strong>490 - 520 กิโลเมตร</strong> ต่อการชาร์จเต็ม 100%</li>
            <li>รุ่น AWD Performance (เคลม 580 กม. NEDC): วิ่งจริงทำได้ประมาณ <strong>430 - 460 กิโลเมตร</strong> อัตราสิ้นเปลืองเฉลี่ย 16.8 - 18.2 kWh/100km</li>
          </ul>
          <p>
            <strong>ความเร็วในการชาร์จ (Charging Speed):</strong>
          </p>
          <ul>
            <li><strong>ชาร์จเร็ว DC Fast Charge:</strong> รองรับสูงสุด <strong>150 kW</strong> (รุ่น Premium/AWD) สามารถชาร์จจาก 30% ถึง 80% ได้ในเวลาประมาณ <strong>26 นาที</strong> ที่ตู้ชาร์จ PEA Volta หรือ EA Anywhere</li>
            <li><strong>ชาร์จปกติ AC Home Charger:</strong> รองรับ 7 kW Type 2 ใช้เวลาชาร์จ 0-100% ประมาณ 11-12 ชั่วโมง</li>
            <li><strong>ฟังก์ชัน V2L (Vehicle-to-Load):</strong> จ่ายกระแสไฟฟ้าออกสู่อุปกรณ์ภายนอกได้สูงสุด 2.2 kW (2,200 วัตต์) เหมาะสำหรับสายแคมป์ปิ้ง</li>
          </ul>
        </section>

        {/* Section 8: Safety & ADAS */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (ADAS)
          </h2>
          <p>
            BYD Seal จัดเต็มระบบความปลอดภัย <strong>DiPilot ADAS</strong> มาเป็นอุปกรณ์มาตรฐานในทุกรุ่นย่อย ประกอบด้วย:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Adaptive Cruise Control (ACC-S&amp;G)</div>
                <div className="text-xs text-zinc-400 mt-0.5">ควบคุมความเร็วอัตโนมัติแบบแปรผันจนถึงจุดหยุดนิ่ง</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Lane Keep &amp; Emergency Lane Assist</div>
                <div className="text-xs text-zinc-400 mt-0.5">ช่วยประคองรถให้อยู่ในช่องทางและดึงกลับฉุกเฉิน</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">3D 360° Camera &amp; Transparent Chassis</div>
                <div className="text-xs text-zinc-400 mt-0.5">กล้องมองภาพรอบคันพร้อมมองทะลุใต้ท้องรถ</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">9 Airbags &amp; Euro NCAP 5 Stars</div>
                <div className="text-xs text-zinc-400 mt-0.5">ถุงลมนิรภัย 9 จุดรอบคัน คว้ามาตรฐานความปลอดภัย 5 ดาว</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Contextual EVSELECT Fitment Accessory Card */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-lime-950/30 border border-lime-500/30 rounded-3xl p-6 sm:p-8 my-12 not-prose shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="relative w-full md:w-48 h-36 rounded-2xl overflow-hidden shrink-0 border border-zinc-800 bg-black">
              <Image
                src="/images/sunroof-shade.jpg"
                alt="ม่านบังแดดและอุปกรณ์เสริม BYD Seal"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> EVSELECT Fitment Guide
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                อุปกรณ์เสริมตรงรุ่น 100% สำหรับ BYD Seal
              </h3>
              <p className="text-sm text-zinc-300 mb-4">
                ปกป้องห้องโดยสารจากแดดเมืองไทยด้วย <strong>ม่านบังแดดหลังคา Nano-Silver</strong> ตัดเข้ารูปไร้รอยต่อ, <strong>พรมปูพื้น TPE 3D กันน้ำกันกลิ่น</strong> และ <strong>ฟิล์มกระจกนิรภัย 9H สำหรับจอหมุน 15.6 นิ้ว</strong> ผ่านการทดสอบ Fitment Assurance
              </p>
              <Link
                href="/#products"
                className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500 text-zinc-950 font-bold text-sm hover:bg-lime-400 transition-all shadow-lg hover:shadow-lime-500/20 w-full sm:w-auto"
              >
                เลือกดูอุปกรณ์เสริม BYD Seal ทั้งหมด <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 10: Pros & Cons */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '420px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            10. จุดเด่น &amp; ข้อสังเกต (Pros &amp; Cons)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-lime-950/20 border border-lime-500/30 rounded-3xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-lime-400 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5" /> จุดเด่น (Pros)
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>พละกำลังมหาศาล:</strong> รุ่น AWD ทำ 0-100 ใน 3.8 วินาที แรงที่สุดในพิกัดราคาล้านต้น</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>แชสซี CTB สุดเหนียวแน่น:</strong> ทรงตัวยอดเยี่ยม เข้าโค้งนิ่งสนิท ทนแรงบิด 40,500 Nm/deg</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ออปชันล้นคัน:</strong> เบาะเป่าลมเย็น, เครื่องเสียง Dynaudio 12 ตัว, จอหมุน 15.6&quot;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ความปลอดภัย Blade Battery:</strong> แบตเตอรี่ LFP เสถียรสูง ชาร์จ 100% ได้สบายใจ</span>
                </li>
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-950/20 border border-red-500/30 rounded-3xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5" /> ข้อสังเกต (Cons)
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ใต้ท้องเตี้ย 120 มม.:</strong> ต้องระวังครูดเมื่อขึ้นลูกระนาดสูงหรือทางลาดชันในไทย</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>หลังคาแก้วไม่มีม่านไฟฟ้า:</strong> จอดตากแดดเมืองไทยจะอมความร้อน จำเป็นต้องซื้อม่านเสริม</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ความเร็วชาร์จ DC สูงสุด 150 kW:</strong> ถือว่าดีแต่ยังไม่ถึงระดับ 250 kW เหมือนค่ายคู่แข่ง</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ความสูงห้องโดยสารตอนหลัง:</strong> ท้ายลาดสไตล์คูเป้ทำให้คนสูงเกิน 180 ซม. รู้สึกหลังคาชิดหัว</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 11: Final Verdict & Scorecard */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            11. บทสรุปและความคุ้มค่าจาก EVSELECT
          </h2>
          <p>
            <strong>BYD Seal</strong> คือบทพิสูจน์อันเด่นชัดของการก้าวกระโดดทางวิศวกรรมยานยนต์ไฟฟ้าจากจีน ไม่เพียงแต่จะเอาชนะคู่แข่งด้วยตัวเลขแรงม้าและราคาจำหน่าย แต่ยังมอบคุณภาพการขับขี่ การทรงตัว และความหรูหราของห้องโดยสารที่เทียบชั้นกับแบรนด์พรีเมียมได้อย่างน่าทึ่ง
          </p>
          <p>
            หากคุณกำลังมองหา <strong>รุ่นที่คุ้มค่าที่สุดในชีวิตประจำวัน</strong> เราขอแนะนำ <strong>BYD Seal Premium RWD (999,900 ฿)</strong> ที่ให้ระยะทางวิ่งไกลถึง 650 กม. (NEDC) พละกำลัง 313 แรงม้า ขับสนุกและเบากว่าตัว AWD ชัดเจน แต่ถ้าคุณต้องการ <strong>ความสุดของสมรรถนะระดับซูเปอร์ซีดาน</strong> ที่กดคันเร่งเมื่อไหร่ก็สะใจ <strong>AWD Performance (1,099,900 ฿)</strong> คือคำตอบที่ไม่มีใครเทียบได้ในพิกัดราคานี้
          </p>

          {/* Detailed Scorecard */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl not-prose my-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>EVSELECT Scorecard Breakdown</span>
              <span className="text-lime-400 font-extrabold text-xl">9.1 / 10</span>
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">สมรรถนะและการควบคุม (Performance &amp; Handling)</span>
                  <span className="font-bold text-lime-400">9.5 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ความสะดวกสบายและห้องโดยสาร (Cabin Comfort &amp; NVH)</span>
                  <span className="font-bold text-lime-400">9.0 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">เทคโนโลยีและระบบอินโฟเทนเมนต์ (Tech &amp; Features)</span>
                  <span className="font-bold text-lime-400">9.0 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ระยะทางวิ่งและการชาร์จ (Range &amp; Charging)</span>
                  <span className="font-bold text-lime-400">8.8 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ความคุ้มค่าต่อราคา (Value for Money)</span>
                  <span className="font-bold text-lime-400">9.4 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 12. Footer Share & Navigation */}
      <footer className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles"
          className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> ดูบทความและรีวิวทั้งหมด
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">แชร์รีวิวนี้:</span>
          <button
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-4 py-2 rounded-full transition-all"
            aria-label="แชร์บทความนี้"
          >
            <Share2 className="w-4 h-4" /> แชร์
          </button>
        </div>
      </footer>
    </article>
  );
}
