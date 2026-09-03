import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Car,
  Sparkles,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard | EVSELECT',
  description: 'เจาะลึกรีวิว ZEEKR 009 สเปกไทย ทั้ง 3 รุ่นย่อย พละกำลังสูงสุด 603 แรงม้า เบาะ Sofaro First Class นวดได้ ลำโพง Yamaha 30 ตัว Dolby Atmos และสมรรถนะ MPV ไฟฟ้าอัลตร้าลักชัวรีบนถนนไทย',
  openGraph: {
    title: 'รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard | EVSELECT',
    description: 'เจาะลึกรีวิว ZEEKR 009 สเปกไทย พละกำลังสูงสุด 603 แรงม้า เบาะ Sofaro First Class ลำโพง Yamaha 30 ตัว Dolby Atmos',
    images: [
      {
        url: '/images/reviews/zeekr-009-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ZEEKR 009 อัลตร้าลักชัวรีเอ็มพีวีไฟฟ้า สเปกไทย',
      },
    ],
    type: 'article',
  },
};

export default function Zeekr009ReviewPage() {
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
            <CalendarDays className="w-3.5 h-3.5" /> 31 สิงหาคม 2569
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5" /> ใช้เวลาอ่าน 9 นาที
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed font-light">
          สัมผัสประสบการณ์ห้องโดยสาร First Class บนท้องถนน ด้วยเบาะ Sofaro นวดได้ ลำโพง Yamaha 30 ตัวพร้อม Dolby Atmos
          และอัตราเร่ง 0-100 ใน 4.5 วินาที สำหรับ MPV ไฟฟ้าที่ไม่มีใครทำได้ขนาดนี้ในราคานี้
        </p>

        {/* Executive Verdict Score Card */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-lime-400" /> EVSELECT Rating
              </div>
              <div className="text-4xl font-black text-lime-400 flex items-baseline gap-2">
                9.2 <span className="text-base font-normal text-zinc-400">/ 10</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                &quot;ห้องโดยสาร First Class เงียบสงัด ลำโพง Yamaha 30 ตัว และ 603 แรงม้าที่คุณไม่คาดคิดว่า MPV จะให้ได้&quot;
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">ราคาเริ่มต้น</div>
                <div className="text-base font-bold text-white mt-0.5">3,690,000 ฿</div>
                <div className="text-[11px] text-zinc-500">รุ่น ME AWD</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">พละกำลังสูงสุด</div>
                <div className="text-base font-bold text-lime-400 mt-0.5">603 hp</div>
                <div className="text-[11px] text-zinc-500">รุ่น WE Max AWD</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80 col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-400">ระยะทางวิ่งสูงสุด</div>
                <div className="text-base font-bold text-white mt-0.5">712 กม.</div>
                <div className="text-[11px] text-zinc-500">NEDC (รุ่น ME AWD)</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-zinc-800 bg-zinc-950 shadow-2xl">
        <Image
          src="/images/reviews/zeekr-009-hero.jpg"
          alt="ZEEKR 009 อัลตร้าลักชัวรีเอ็มพีวีไฟฟ้า สเปกไทย จอดอยู่หน้าโรงแรมหรูในกรุงเทพฯ"
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
            1. บทนำ: ZEEKR 009 คือใคร และทำไมถึงน่าสนใจในไทย?
          </h2>
          <p>
            <strong>ZEEKR 009</strong> คือรถยนต์ไฟฟ้าแบบ MPV (Multi-Purpose Vehicle) สุดหรูจากแบรนด์ ZEEKR ในเครือ Geely Holding Group
            ที่เปิดตัวในไทยเพื่อท้าทายบัลลังก์ของ <strong>Toyota Alphard HEV</strong> และ <strong>Mercedes-Benz V-Class</strong>
            โดยตรง ด้วยราคาเริ่มต้นที่ต่ำกว่า แต่มาพร้อมสเปกและออปชันที่เหนือกว่าในทุกมิติที่วัดได้
          </p>
          <p>
            สิ่งที่ทำให้ ZEEKR 009 โดดเด่นคือการนำเสนอ <strong>ประสบการณ์ห้องโดยสาร First Class</strong> ที่ปกติจะพบเฉพาะในรถยนต์ระดับ
            5-8 ล้านบาท มาในราคาเริ่มต้น 3.69 ล้านบาท พร้อมกำลังขับเคลื่อนไฟฟ้าที่แรงกว่า Alphard ถึง 3 เท่า
          </p>
        </section>

        {/* Section 2: Pricing & Trims */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '450px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            2. ราคาจำหน่ายและรุ่นย่อยในประเทศไทย
          </h2>

          <div className="overflow-x-auto border border-zinc-800 rounded-2xl bg-zinc-900/60 shadow-lg">
            <table className="w-full text-left text-sm text-zinc-300 min-w-[640px]">
              <thead className="bg-zinc-950 text-xs uppercase font-semibold text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-4 px-4">รุ่นย่อย</th>
                  <th className="py-4 px-3">ระบบขับเคลื่อน</th>
                  <th className="py-4 px-3">พละกำลัง</th>
                  <th className="py-4 px-3">0-100 กม./ชม.</th>
                  <th className="py-4 px-3">ระยะทาง (NEDC)</th>
                  <th className="py-4 px-4 text-right">ราคา (THB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">ME AWD</td>
                  <td className="py-4 px-3">มอเตอร์คู่ AWD</td>
                  <td className="py-4 px-3">536 hp / 686 Nm</td>
                  <td className="py-4 px-3">4.5 วินาที</td>
                  <td className="py-4 px-3 text-lime-400 font-semibold">712 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">3,690,000 ฿</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">WE AWD</td>
                  <td className="py-4 px-3">มอเตอร์คู่ AWD</td>
                  <td className="py-4 px-3">536 hp / 686 Nm</td>
                  <td className="py-4 px-3">4.5 วินาที</td>
                  <td className="py-4 px-3">686 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">3,990,000 ฿</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors bg-lime-950/10 border-l-2 border-lime-400">
                  <td className="py-4 px-4 font-semibold text-white flex items-center gap-1.5">
                    WE Max AWD <span className="bg-lime-500/20 text-lime-400 text-[10px] px-1.5 py-0.5 rounded">แนะนำ</span>
                  </td>
                  <td className="py-4 px-3 text-lime-400 font-medium">มอเตอร์คู่ AWD</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">603 hp / 750 Nm</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">4.5 วินาที</td>
                  <td className="py-4 px-3">686 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-lime-400">4,390,000 ฿</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Exterior */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '500px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            3. ดีไซน์ภายนอก: MPV ที่ดูเหมือน Private Jet บนล้อ
          </h2>
          <p>
            ดีไซน์ภายนอกของ ZEEKR 009 สร้างจุดสนใจด้วย <strong>กระจังหน้าแบบ Kinetic Grille</strong> ที่ประกอบด้วยแถบแนวตั้ง
            เคลือบโครเมียม ให้ความรู้สึกหรูหราระดับ Rolls-Royce แต่ดูทันสมัยและ Futuristic กว่า ผสมผสานกับ
            <strong>ไฟหน้าแบบ Parametric LED</strong> เส้นบางคมชัด
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/zeekr-009-exterior.jpg"
              alt="ดีไซน์ภายนอก ZEEKR 009 กระจังหน้า Kinetic Grille"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <ul>
            <li><strong>ขนาดตัวถัง:</strong> ยาว 5,209 มม. กว้าง 1,968 มม. สูง 1,840 มม. ฐานล้อ 3,205 มม. — ยาวกว่า Alphard กว่า 20 ซม.</li>
            <li><strong>ประตูสไลด์ไฟฟ้าอัตโนมัติ:</strong> ทั้งสองฝั่ง พร้อมเซ็นเซอร์ป้องกันการชน</li>
            <li><strong>หลังคาแก้วพาโนราม่า:</strong> ครอบคลุมพื้นที่ห้องโดยสารตลอดความยาว</li>
            <li><strong>ล้อ 20 นิ้ว:</strong> ดีไซน์ Turbine Spoke ทำจากอะลูมิเนียมอัลลอยด์หล่อขึ้นรูป</li>
          </ul>
        </section>

        {/* Section 4: Interior - The Star */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '600px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            4. ห้องโดยสาร: First Class ที่แท้จริง — ไม่ใช่แค่คำโฆษณา
          </h2>
          <p>
            นี่คือจุดขายหลักของ ZEEKR 009 และทำได้น่าประทับใจมาก เมื่อเปิดประตูสไลด์ไฟฟ้าเข้าไปภายใน คุณจะพบกับ
            <strong>เบาะ Sofaro First Class</strong> ที่มีฟังก์ชันนวดไฟฟ้า ปรับนอนแบน พร้อมที่วางขาสำหรับผู้โดยสารแถวสอง
          </p>

          <div className="relative w-full h-[320px] sm:h-[480px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/zeekr-009-interior.jpg"
              alt="ห้องโดยสาร ZEEKR 009 เบาะ Sofaro First Class และจอ Ultra-wide"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <ul>
            <li>
              <strong>เบาะ Sofaro First Class (รุ่น WE/WE Max):</strong> นวดได้ 10 รูปแบบ ปรับนอนได้ 160 องศา มีที่วางขาแบบยืดหน้าแข้ง
              เหมือนที่นั่งชั้นหนึ่งของสายการบินชั้นนำ
            </li>
            <li>
              <strong>ระบบเสียง Yamaha 30 ลำโพง พร้อม Dolby Atmos:</strong> รองรับการแสดงเสียงแบบสามมิติแท้จริง
              มิติเสียงรอบทิศทางชัดเจนแม้ในระดับเสียงต่ำ
            </li>
            <li>
              <strong>จอ Ultra-wide 35.6 นิ้ว:</strong> ขยายคลุมทั้งแผงหน้าปัด รวมจอ Cluster + จอกลาง + จอ Co-pilot เข้าด้วยกัน
            </li>
            <li>
              <strong>ระบบกันเสียง NVH ระดับ Ultra:</strong> ใช้กระจก Acoustic Glass หนาพิเศษ ซีลยางสามชั้น และแผ่น Sound Dampening
              น้ำหนัก 80 กก. ทั่วตัวถัง ทำให้เงียบกว่า Alphard อย่างชัดเจนในการทดสอบจริง
            </li>
            <li>
              <strong>ระบบฟอกอากาศ HEPA + Fragrance:</strong> กรองฝุ่น PM2.5 พร้อมระบบปล่อยน้ำหอมอัตโนมัติ
            </li>
          </ul>
        </section>

        {/* Section 5: Performance */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            5. สมรรถนะ: MPV ที่วิ่งได้เร็วกว่าที่คุณคิด
          </h2>
          <p>
            แม้ ZEEKR 009 จะเป็น MPV ขนาดใหญ่ แต่พละกำลังสูงสุด <strong>603 แรงม้า (444 kW)</strong> แรงบิด
            <strong>750 นิวตันเมตร</strong> ทำให้มันสามารถพุ่งทะยานจาก 0-100 กม./ชม. ได้ใน <strong>4.5 วินาที</strong>
            — เร็วกว่า Toyota GR86 ที่ 6.3 วินาที และเร็วกว่า Alphard HEV ที่ 8.5 วินาที เกือบ 2 เท่า
          </p>
          <p>
            ในการทดสอบขับจริงบนทางด่วนกรุงเทพฯ ความเงียบของห้องโดยสารที่ความเร็ว 120 กม./ชม.
            อยู่ในระดับที่พูดคุยด้วยเสียงปกติได้โดยไม่ต้องเร่งเสียง ซึ่งเหนือกว่า Alphard อย่างชัดเจน
          </p>
        </section>

        {/* EVSELECT Fitment CTA */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-lime-950/30 border border-lime-500/30 rounded-3xl p-6 sm:p-8 my-12 not-prose shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> EVSELECT Fitment Guide
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                อุปกรณ์เสริมตรงรุ่นสเปกไทยสำหรับ ZEEKR 009
              </h3>
              <p className="text-sm text-zinc-300 mb-4">
                ยกระดับความสมบูรณ์แบบด้วย <strong>ม่านบังแดดหลังคาแก้วพาโนราม่า Nano-Silver</strong>,
                <strong>พรมปูพื้น TPE 3D ขึ้นรูปเฉพาะรุ่น</strong>, และ <strong>ฟิล์มกระจกกันรอย 9H</strong> สำหรับ
                จอ Ultra-wide 35.6 นิ้ว ทุกชิ้น Fitment QC 100% บนรถสเปกไทย RHD
              </p>
              <Link
                href="/#products"
                className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500 text-zinc-950 font-bold text-sm hover:bg-lime-400 transition-all shadow-lg hover:shadow-lime-500/20 w-full sm:w-auto"
              >
                เลือกดูอุปกรณ์เสริม ZEEKR 009 ทั้งหมด <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 6: Pros & Cons */}
        <section
          className="my-12 not-prose"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '420px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            6. จุดเด่น &amp; ข้อสังเกต (Pros &amp; Cons)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-lime-950/20 border border-lime-500/30 rounded-3xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-lime-400 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5" /> จุดเด่น (Pros)
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>เบาะ Sofaro First Class:</strong> นวดได้ ปรับนอนแบน ประสบการณ์ระดับ Business Class เครื่องบิน</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>Yamaha 30 ลำโพง Dolby Atmos:</strong> ระบบเสียงที่ดีที่สุดในระดับ MPV ไทย</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>603 แรงม้า / 0-100 ใน 4.5 วินาที:</strong> สมรรถนะที่ไม่มี MPV อื่นทำได้ในราคานี้</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>NVH เงียบกว่า Alphard:</strong> ผ่านการทดสอบจริง เงียบที่สุดในระดับ MPV ในไทย</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-950/20 border border-red-500/30 rounded-3xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5" /> ข้อสังเกต (Cons)
              </h3>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ขนาดใหญ่มาก:</strong> ยาว 5.2 เมตร ขับในซอยแคบๆ ในกรุงเทพฯ ต้องชำนาญ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>เครือข่าย Zeekr Service ยังขยายตัว:</strong> ศูนย์บริการมีน้อยกว่าแบรนด์ญี่ปุ่น</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ราคาชาร์จ AC:</strong> ชาร์จ AC 3 Phase เต็มใช้เวลา 9-10 ชั่วโมง แนะนำติดตั้ง Wallbox ที่บ้าน</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>หลังคาแก้วพาโนราม่าไม่มีม่านไฟฟ้า:</strong> จำเป็นต้องติดม่านบังแดด Nano-Silver เสริม</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Scorecard */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            7. บทสรุปและ EVSELECT Scorecard
          </h2>
          <p>
            <strong>ZEEKR 009</strong> คือทางเลือกที่น่าตื่นเต้นที่สุดในตลาด MPV ของไทยในขณะนี้ มันไม่ใช่แค่
            &quot;รถไฟฟ้าราคาดี&quot; แต่คือรถที่ให้ประสบการณ์การนั่งโดยสารที่ดีกว่า Toyota Alphard HEV ในทุกมิติที่วัดได้
            ในราคาที่ใกล้เคียงกัน
          </p>

          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl not-prose my-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>EVSELECT Scorecard Breakdown</span>
              <span className="text-lime-400 font-extrabold text-xl">9.2 / 10</span>
            </h3>

            <div className="space-y-4">
              {[
                { label: 'ความหรูหราและห้องโดยสาร (Cabin Luxury)', score: 97 },
                { label: 'ระบบเสียงและบันเทิง (Yamaha 30-Speaker Dolby Atmos)', score: 98 },
                { label: 'สมรรถนะและการควบคุม (603 hp Performance)', score: 90 },
                { label: 'ระยะทางวิ่งและการชาร์จ (712 km NEDC)', score: 88 },
                { label: 'ความคุ้มค่าต่อราคา (Value vs Alphard)', score: 95 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-zinc-300">{item.label}</span>
                    <span className="font-bold text-lime-400">{(item.score / 10).toFixed(1)} / 10</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-lime-400 rounded-full" style={{ width: `${item.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Safety */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '350px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและ ADAS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            {[
              { title: 'Full-Speed ACC Stop & Go', desc: 'ควบคุมความเร็วแปรผันตามคันหน้าลื่นไหล' },
              { title: 'Lane Centering & Auto Lane Change', desc: 'ช่วยประคองรถกึ่งกลางเลนและเปลี่ยนเลนอัตโนมัติ' },
              { title: 'HD 360° Panoramic Camera', desc: 'กล้องรอบคันความละเอียดสูงมองได้ทุกมุม' },
              { title: 'Blind Spot Monitor + Rear Cross Traffic', desc: 'เตือนจุดบอดและรถที่ตัดหลังขณะถอย' },
            ].map((item) => (
              <div key={item.title} className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">{item.title}</div>
                  <div className="text-xs text-zinc-400 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <footer className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/articles"
          className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> ดูบทความและรีวิวทั้งหมด
        </Link>
        <Link
          href="https://www.facebook.com/evselects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-300 hover:text-lime-400 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-4 py-2 rounded-full transition-all flex items-center gap-2"
        >
          ติดตามเพจ EVSELECT บน Facebook
        </Link>
      </footer>
    </article>
  );
}
