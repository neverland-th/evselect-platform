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
  title: 'รีวิว Tesla Model 3 Highland (2024-2026): เงียบ นุ่ม และสมบูรณ์แบบที่สุด | EVSELECT Reviews',
  description: 'เจาะลึกรีวิว Tesla Model 3 Highland สเปกไทย ทั้งรุ่น RWD, Long Range AWD และ Performance ทดสอบความเงียบจากกระจก Acoustic ช่วงล่างใหม่ จอหลัง 8 นิ้ว และเครือข่าย Supercharger ในไทย',
};

export default function TeslaModel3HighlandReviewPage() {
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
            <Clock className="w-3.5 h-3.5" /> ใช้เวลาอ่าน 10 นาที
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว Tesla Model 3 Highland (2024-2026): อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยีที่สมบูรณ์แบบที่สุด
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed font-light">
          การปรับโฉมครั้งประวัติศาสตร์ภายใต้รหัสพัฒนา &quot;Project Highland&quot; ที่ลบทุกคำสบประมาทเรื่องความกระด้างและเสียงรบกวน ด้วยกระจก Acoustic 360 องศา ช่วงล่างใหม่ เบาะเป่าลมเย็น และจอหลัง 8 นิ้ว พร้อมทดสอบการใช้งานจริงบนถนนเมืองไทย
        </p>

        {/* Executive Verdict Score Card */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-lime-400" /> EVSELECT Rating
              </div>
              <div className="text-4xl font-black text-lime-400 flex items-baseline gap-2">
                9.3 <span className="text-base font-normal text-zinc-400">/ 10</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                &quot;มาตรฐานใหม่ของพรีเมียมซีดาน EV เงียบ นุ่ม ควบคุมระบบง่าย และชาร์จเร็วไร้คู่แข่ง&quot;
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">ราคาเริ่มต้น</div>
                <div className="text-base font-bold text-white mt-0.5">1,149,000 ฿</div>
                <div className="text-[11px] text-zinc-500">รุ่น Standard RWD (Promo)</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">พละกำลังสูงสุด</div>
                <div className="text-base font-bold text-lime-400 mt-0.5">460 – 627 hp</div>
                <div className="text-[11px] text-zinc-500">รุ่น Performance AWD</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80 col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-400">ระยะทางวิ่งสูงสุด</div>
                <div className="text-base font-bold text-white mt-0.5">629 กม.</div>
                <div className="text-[11px] text-zinc-500">WLTP (รุ่น Long Range AWD)</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-zinc-800 bg-zinc-950 shadow-2xl">
        <Image
          src="/images/reviews/tesla-model-3-hero.jpg"
          alt="Tesla Model 3 Highland รีวิวสเปกไทย"
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
            เมื่อพูดถึงรถยนต์ไฟฟ้าที่ทรงอิทธิพลที่สุดในโลก <strong>Tesla Model 3</strong> คือชื่อแรกที่ทุกคนนึกถึงเสมอ อย่างไรก็ตาม ในรุ่นก่อนหน้านี้ ผู้ใช้งานชาวไทยหลายคนมักบ่นถึงความกระด้างตึงตังของช่วงล่าง เสียงลมและเสียงยางที่เล็ดลอดเข้ามาในห้องโดยสาร รวมถึงงานประกอบที่ยังไม่เนี้ยบเท่าแบรนด์ยุโรป
          </p>
          <p>
            การมาถึงของ <strong>Tesla Model 3 โฉมใหม่ (Highland)</strong> ถือเป็นการก้าวกระโดดครั้งใหญ่ เทสลาได้เปลี่ยนชิ้นส่วนตัวรถใหม่มากกว่า 50% ตั้งแต่หัวจรดท้าย มุ่งเน้นการแก้จุดอ่อนเดิมอย่างตรงจุด เพิ่มความหรูหรา นุ่มนวล เงียบสงบ และใส่ฟังก์ชันที่จำเป็นสำหรับเมืองร้อนอย่าง <strong>เบาะเป่าลมเย็น (Ventilated Seats)</strong> เข้ามาเป็นครั้งแรก
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
            เทสลา ประเทศไทย (Tesla Thailand) จำหน่าย Model 3 Highland สเปกพวงมาลัยขวา (ผลิตจาก Gigafactory Shanghai) ทั้งหมด 3 รุ่นย่อยอย่างเป็นทางการ:
          </p>

          <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-900/60 shadow-lg">
            <table className="w-full text-left text-sm text-zinc-300 min-w-[620px]">
              <thead className="bg-zinc-950 text-xs uppercase font-semibold text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-4 px-4">รุ่นย่อย (Trim)</th>
                  <th className="py-4 px-3">ระบบขับเคลื่อน</th>
                  <th className="py-4 px-3">พละกำลัง / แรงบิด</th>
                  <th className="py-4 px-3">แบตเตอรี่ (เคมี)</th>
                  <th className="py-4 px-3">0-100 กม./ชม.</th>
                  <th className="py-4 px-3">ระยะทาง (WLTP)</th>
                  <th className="py-4 px-4 text-right">ราคาจำหน่าย (THB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Standard RWD</td>
                  <td className="py-4 px-3">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-4 px-3">283 hp / 420 Nm</td>
                  <td className="py-4 px-3">60.0 kWh (CATL LFP)</td>
                  <td className="py-4 px-3">6.1 วินาที</td>
                  <td className="py-4 px-3">513 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">1,149,000 – 1,599,000 ฿*</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors bg-lime-950/10 border-l-2 border-lime-400">
                  <td className="py-4 px-4 font-semibold text-white flex items-center gap-1.5">
                    Long Range AWD <span className="bg-lime-500/20 text-lime-400 text-[10px] px-1.5 py-0.5 rounded">แนะนำ</span>
                  </td>
                  <td className="py-4 px-3 text-lime-400 font-medium">มอเตอร์คู่ Dual Motor AWD</td>
                  <td className="py-4 px-3">498 hp / 493 Nm</td>
                  <td className="py-4 px-3">78.1 kWh (LG NMC)</td>
                  <td className="py-4 px-3">4.4 วินาที</td>
                  <td className="py-4 px-3 text-lime-400 font-semibold">629 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">1,439,000 – 1,899,000 ฿*</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Performance AWD</td>
                  <td className="py-4 px-3 text-lime-400 font-medium">มอเตอร์คู่ Performance AWD</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">460 – 627 hp / 741 Nm</td>
                  <td className="py-4 px-3">78.1 kWh (LG NMC)</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">3.1 วินาที</td>
                  <td className="py-4 px-3">528 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-lime-400">1,799,000 – 2,149,000 ฿*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 mt-2 italic">
            *หมายเหตุ: ราคาเริ่มต้นตามแคมเปญส่งเสริมการขายปัจจุบัน ถึงราคาตั้งเปิดตัว MSRP (ไม่รวมออปชัน Enhanced Autopilot +122,000 ฿ หรือ Full Self-Driving +244,000 ฿)
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
            งานดีไซน์ภายนอกของ Model 3 Highland ถูกขัดเกลาให้เฉียบคมและลู่ลมยิ่งขึ้น โดยด้านหน้าตัดไฟตัดหมอกออกและออกแบบกันชนหน้าใหม่หมดจรด ทำให้ค่าสัมประสิทธิ์แรงต้านอากาศลดลงเหลือเพียง <strong>Cd 0.219</strong> ซึ่งต่ำที่สุดในบรรดารถทุกรุ่นของ Tesla ช่วยเพิ่มระยะทางวิ่งต่อการชาร์จได้อีกราว 5-8%
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/tesla-model-3-exterior.jpg"
              alt="ดีไซน์ภายนอก Tesla Model 3 Highland"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            ไฟหน้าใหม่เป็นแบบ Matrix LED ทรงสลิมเพรียวบาง พร้อมไฟ DRL ส่องสว่างคมกริบ ด้านท้ายเปลี่ยนไฟท้ายเป็นแบบ C-Shape ชิ้นเดียวฝังอยู่บนฝากระโปรงท้าย ไม่มีรอยต่อแยกชิ้น ล้ออัลลอยขนาด 18 นิ้ว ลาย Photon พร้อมฝาครอบ Aero Cover ช่วยตัดลม (หรือเลือกอัปเกรดเป็นล้อ Nova 19 นิ้ว) และสำหรับรุ่น Performance AWD จะมาพร้อมกับล้อ Forged ลาย Warp ขนาด 20 นิ้วโดยเฉพาะ
          </p>
          <p>
            <strong>มิติตัวถัง (Dimensions):</strong>
          </p>
          <ul>
            <li>ความยาว: 4,720 มม.</li>
            <li>ความกว้าง: 1,850 มม. (ไม่รวมกระจกมองข้าง)</li>
            <li>ความสูง: 1,441 มม.</li>
            <li>ระยะฐานล้อ (Wheelbase): 2,875 มม.</li>
            <li>ระยะต่ำสุดจากพื้น (Ground Clearance): <strong>138 มม.</strong></li>
          </ul>
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
            ภายในห้องโดยสารคือจุดที่เกิดการเปลี่ยนแปลงมากที่สุด ดีไซน์คอนโซลหน้าใหม่หุ้มด้วยผ้านุ่มและวัสดุอะลูมิเนียม พร้อมแถบไฟ <strong>Ambient Lighting แบบปรับแต่งได้ 256 สี</strong> โอบล้อมรอบห้องโดยสารตั้งแต่คอนโซลหน้าจรดแผงประตูด้านหลัง
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/tesla-model-3-interior.jpg"
              alt="ภายในห้องโดยสาร Tesla Model 3 Highland พร้อมจอหลัง 8 นิ้ว"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>จุดเด่นสำคัญที่อัปเกรดในรุ่น Highland:</strong>
          </p>
          <ul>
            <li><strong>เบาะนั่งคู่หน้าพร้อมระบบเป่าลมเย็น (Ventilated Seats):</strong> ดูดลมเย็นผ่านรูระบายอากาศ ช่วยให้หลังและต้นขาไม่อับชื้นเมื่อขึ้นรถที่จอดตากแดดเมืองไทย</li>
            <li><strong>หน้าจอหลังขนาด 8 นิ้ว (Rear Display):</strong> ผู้โดยสารตอนหลังสามารถปรับอุณหภูมิแอร์ เบาะอุ่น ปรับตำแหน่งเบาะผู้โดยสารหน้า และดูสตรีมมิง YouTube, Netflix, Disney+ ผ่านหูฟังบลูทูธแยกอิสระได้</li>
            <li><strong>พวงมาลัยไร้ก้าน (Stalkless Steering):</strong> เทสลาได้ตัดก้านไฟเลี้ยวและก้านเกียร์ออก โดยเปลี่ยนมาใช้ปุ่มสัมผัสบนพวงมาลัยสำหรับไฟเลี้ยว/ไฟสูง/แตร และการสไลด์หน้าจอสัมผัสเพื่อเข้าเกียร์ D/R/P/N ซึ่งต้องใช้เวลาปรับความคุ้นเคยประมาณ 2-3 วันแรก</li>
            <li><strong>ระบบเสียงพรีเมียม 17 ลำโพง พร้อม Dual Subwoofers:</strong> (ในรุ่น Long Range / Performance) ให้คุณภาพเสียงและมิติเบสที่ยอดเยี่ยมที่สุดในคลาส</li>
          </ul>
          <p>
            <strong>พื้นที่เก็บสัมภาระ:</strong>
          </p>
          <ul>
            <li>ห้องเก็บสัมภาระด้านท้าย: <strong>425 ลิตร + ช่องหลุมลึกใต้พื้น 88 ลิตร (รวม 594 ลิตร)</strong></li>
            <li>ช่องเก็บสัมภาระด้านหน้า (Frunk): <strong>88 ลิตร</strong> กว้างขวางและใส่กระเป๋าเดินทางขนาด Carry-on หรือสายชาร์จฉุกเฉินได้สบาย</li>
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
            เราได้นำ <strong>Tesla Model 3 Long Range AWD (498 hp / 493 Nm)</strong> ออกทดสอบสมรรถนะ สิ่งที่ทำให้เทสลาแตกต่างจากรถ EV แบรนด์อื่นคือ <strong>&quot;ความฉับไวและการตอบสนองของคันเร่งไฟฟ้า&quot;</strong> ที่ไม่มีอาการหน่วงหรือแล็กแม้แต่มิลลิวินาทีเดียว การเร่งแซงบนความเร็ว 80-120 กม./ชม. เกิดขึ้นในพริบตา และทำ 0-100 กม./ชม. ได้ในเวลา <strong>4.4 วินาที</strong>
          </p>
          <p>
            ระบบ <strong>One-Pedal Driving</strong> ของ Tesla ยังคงเป็น Benchmark ของวงการ สามารถควบคุมการชะลอความเร็วจนรถหยุดนิ่งสนิทได้อย่างนุ่มนวลและเป็นธรรมชาติที่สุด เมื่อขับขี่บนการจราจรที่ติดขัดในกรุงเทพฯ คุณแทบไม่ต้องยกเท้าไปเหยียบแป้นเบรกเลย
          </p>
          <p>
            พวงมาลัยเซ็ตอัตราทดมาค่อนข้างไว คม และกระชับ (สามารถปรับน้ำหนักได้ 3 ระดับ: Comfort, Standard, Sport) มอบความคล่องตัวสูงเมื่อต้องลัดเลาะในเมือง และให้ความมั่นคงอย่างยิ่งเมื่อวิ่งทางไกลด้วยความเร็วสูง
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
            นี่คือไฮไลท์ที่สำคัญที่สุดของ Model 3 Highland! เทสลาได้เปลี่ยนสปริง บุชยางปีกนก และติดตั้งโช้คอัพ <strong>Frequency Response Dampers</strong> ชุดใหม่ทั้งหมด ผลลัพธ์ที่ได้คือ:
          </p>
          <ul>
            <li><strong>ความนุ่มนวล:</strong> อาการตึงตัง กระแทกกระทั้นบนรอยต่อคอสะพาน หรือผิวถนนคอนกรีตไม่เรียบของกรุงเทพฯ หายไปอย่างสิ้นเชิง ตัวรถซับแรงสั่นสะเทือนได้เนียนนุ่มและผู้ใหญ่สามารถนั่งเบาะหลังได้อย่างสบายใจ</li>
            <li><strong>การเก็บเสียงระดับ 360° Acoustic Glass:</strong> กระจกทุกบานรอบคัน (รวมถึงกระจกประตูหลังและกระจกหลังคา) เป็นแบบสองชั้น Laminated Acoustic Glass ทั้งหมด ทำให้เสียงลมปะทะที่ความเร็ว 120 กม./ชม. ลดลงกว่ารุ่นเดิมถึง <strong>30%</strong> และเสียงยางบดถนนลดลง <strong>20%</strong></li>
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
            Model 3 Highland โดดเด่นด้วยประสิทธิภาพการจัดการพลังงาน (Efficiency) ที่ดีที่สุดในกลุ่มซีดานไฟฟ้า จากการทดสอบวิ่งจริงทางไกล กทม. - เขาใหญ่ - นครราชสีมา (เปิดแอร์ 22°C ความเร็วเฉลี่ย 110-120 กม./ชม.):
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/tesla-model-3-details.jpg"
              alt="ระบบชาร์จ Tesla Supercharger และดีเทลตัวรถ"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <ul>
            <li>รุ่น Long Range AWD (เคลม 629 กม. WLTP): วิ่งจริงได้ระยะทางประมาณ <strong>520 - 545 กิโลเมตร</strong> อัตรากินไฟต่ำเพียง <strong>13.8 - 14.8 kWh/100km</strong></li>
            <li>รุ่น Standard RWD (เคลม 513 กม. WLTP): วิ่งจริงได้ประมาณ <strong>420 - 440 กิโลเมตร</strong> (แบตเตอรี่ LFP 60 kWh ชาร์จ 100% ประจำวันได้โดยไม่เสื่อมง่าย)</li>
          </ul>
          <p>
            <strong>ระบบชาร์จไฟและเครือข่าย Tesla Supercharger:</strong>
          </p>
          <ul>
            <li><strong>Tesla Supercharger V3 / V4:</strong> รองรับกำลังไฟสูงสุด <strong>250 kW</strong> (รุ่น Long Range/Perf) และ 170 kW (รุ่น RWD) เพียงแค่เสียบหัวชาร์จเข้ากับตัวรถ ระบบจะตัดเงินผ่านบัตรเครดิตอัตโนมัติ (Plug &amp; Charge) ชาร์จจาก 10% ถึง 80% ในเวลาเพียง <strong>18-20 นาที</strong></li>
            <li><strong>ตู้ชาร์จสาธารณะทั่วไป (CCS2):</strong> รองรับหัวชาร์จมาตรฐานทุกค่ายในไทย (PEA Volta, PTT EV Station PluZ, EA Anywhere, EleX by EGAT)</li>
            <li><strong>ชาร์จปกติ AC Type 2:</strong> รองรับสูงสุด 11 kW (3 Phase) หรือ 7.4 kW (Single Phase)</li>
          </ul>
        </section>

        {/* Section 8: Safety & ADAS */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (Tesla Vision &amp; Autopilot)
          </h2>
          <p>
            Tesla Model 3 Highland ใช้ฮาร์ดแวร์ <strong>HW4 (Hardware 4.0)</strong> พร้อมกล้องความละเอียดสูงรอบคัน ทำงานร่วมกับระบบประมวลผลเครือข่ายประสาทเทียม (Neural Network) โดยไม่มีการใช้เซ็นเซอร์เรดาร์หรืออัลตราโซนิก (Tesla Vision):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Basic Autopilot (มาตรฐานทุกคัน)</div>
                <div className="text-xs text-zinc-400 mt-0.5">ควบคุมพวงมาลัย ความเร็ว และรักษาระยะห่างในเลนได้อย่างแม่นยำ</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Sentry Mode &amp; Dashcam 360°</div>
                <div className="text-xs text-zinc-400 mt-0.5">บันทึกวิดีโอรอบคันเมื่อมีคนเข้าใกล้ พร้อมดูกล้องสดผ่านสมาร์ทโฟน</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Cabin Overheat Protection</div>
                <div className="text-xs text-zinc-400 mt-0.5">เปิดแอร์เลี้ยงห้องโดยสารอัตโนมัติไม่ให้เกิน 40°C เมื่อจอดตากแดด</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Euro NCAP 5 Stars (Top Safety Pick+)</div>
                <div className="text-xs text-zinc-400 mt-0.5">โครงสร้างตัวถังเหล็กและอะลูมิเนียมแข็งแกร่งระดับสูงสุด</div>
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
                src="/images/tray-organizer.jpg"
                alt="อุปกรณ์เสริม Tesla Model 3 Highland"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> EVSELECT Fitment Guide
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                อุปกรณ์เสริมตรงรุ่นพิเศษสำหรับ Tesla Model 3 Highland
              </h3>
              <p className="text-sm text-zinc-300 mb-4">
                อัปเกรดความสมบูรณ์แบบด้วย <strong>ม่านบังแดดหลังคา 2 ชั้น Nano-Silver สะท้อนรังสี UV 99%</strong>, <strong>ถาดจัดระเบียบคอนโซลกลางแบบสไลด์</strong>, <strong>แผ่นซิลิโคนรองแท่นชาร์จไร้สาย</strong> และ <strong>พรมปูพื้น TPE 3D เข้ารูป</strong>
              </p>
              <Link
                href="/#products"
                className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500 text-zinc-950 font-bold text-sm hover:bg-lime-400 transition-all shadow-lg hover:shadow-lime-500/20 w-full sm:w-auto"
              >
                เลือกดูอุปกรณ์เสริม Model 3 Highland ทั้งหมด <ArrowRight className="w-4 h-4" />
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
                  <span><strong>ห้องโดยสารเงียบและนุ่มขึ้นมหาศาล:</strong> ลบภาพจำความกระด้างของรุ่นเดิมได้อย่างหมดจด</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ประสิทธิภาพพลังงานอันดับ 1:</strong> กินไฟต่ำสุด วิ่งทางไกล 500+ กม. ได้อย่างมั่นใจ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>Tesla Supercharger Network:</strong> เสียบชาร์จง่าย รวดเร็ว และสถานีครอบคลุมจุดสำคัญ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ออปชันใหม่ตอบโจทย์ไทย:</strong> เบาะเป่าลมเย็น, จอหลัง 8&quot;, ไฟ Ambient Light</span>
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
                  <span><strong>ตัดก้านไฟเลี้ยว/เกียร์:</strong> ต้องใช้เวลาปรับตัวในการกดปุ่มบนพวงมาลัยขณะเลี้ยวในวงเวียน</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>หลังคาแก้วไร้ม่านบังแดดไฟฟ้า:</strong> จอดตากแดดเมืองไทยยังร้อน ต้องพึ่งพาม่านเสริม</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ไม่มี Apple CarPlay / Android Auto:</strong> ต้องพึ่งพาระบบแผนที่และแอปของ Tesla เป็นหลัก</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ราคาอะไหล่ตัวถังและประกัน:</strong> ค่าเบี้ยประกันภัยรายปีและราคาอะไหล่บางชิ้นยังสูงกว่าแบรนด์จีน</span>
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
            <strong>Tesla Model 3 Highland</strong> คือหนึ่งในการปรับปรุงรถยนต์ที่ประสบความสำเร็จที่สุดของวงการยานยนต์ยุคใหม่ เทสลาสามารถรักษาจุดเด่นเรื่องสมรรถนะ ซอฟต์แวร์ และเครือข่าย Supercharger ไว้ได้อย่างเหนียวแน่น พร้อมกับอัปเกรดจุดด้อยเรื่องความกระด้างและเสียงรบกวนจนกลายเป็นรถที่นั่งสบายระดับแนวหน้าของคลาส
          </p>
          <p>
            สำหรับผู้ซื้อชาวไทย <strong>Model 3 Long Range AWD (1,439,000 – 1,899,000 ฿)</strong> คือรุ่นที่สมดุลและคุ้มค่าที่สุดสำหรับการเดินทางไกลข้ามจังหวัด ด้วยระยะทางวิ่งไกลถึง 629 กม. WLTP และระบบขับเคลื่อนสี่ล้อ 498 แรงม้า ในขณะที่ผู้ที่เน้นความแรงระดับซูเปอร์คาร์สามารถเลือกรุ่น <strong>Performance AWD (1,799,000 – 2,149,000 ฿)</strong> 0-100 ใน 3.1 วินาที ส่วนผู้ที่เน้นใช้งานในเมือง <strong>Standard RWD (1,149,000 – 1,599,000 ฿)</strong> ก็ถือเป็นจุดเริ่มต้นพรีเมียม EV ที่คุ้มราคาอย่างยิ่ง
          </p>

          {/* Detailed Scorecard */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl not-prose my-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>EVSELECT Scorecard Breakdown</span>
              <span className="text-lime-400 font-extrabold text-xl">9.3 / 10</span>
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
                  <span className="font-bold text-lime-400">9.2 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">เทคโนโลยีและระบบอินโฟเทนเมนต์ (Tech &amp; Features)</span>
                  <span className="font-bold text-lime-400">9.6 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ระยะทางวิ่งและการชาร์จ (Range &amp; Supercharger)</span>
                  <span className="font-bold text-lime-400">9.5 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ความคุ้มค่าต่อราคา (Value for Money)</span>
                  <span className="font-bold text-lime-400">8.9 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '89%' }}></div>
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
