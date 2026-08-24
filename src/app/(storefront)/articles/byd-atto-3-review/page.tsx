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
  title: 'รีวิว BYD Atto 3 (MY2024-2026): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่า น่าใช้แค่ไหน? | EVSELECT Reviews',
  description: 'เจาะลึกรีวิว BYD Atto 3 สเปกไทย ทั้งรุ่น Dynamic, Premium และ Extended Range ทดสอบความกว้างขวาง ช่วงล่างนุ่มซับทางขรุขระ แบตเตอรี่ Blade Battery และความคุ้มค่าในปี 2026',
};

export default function BYDAtto3ReviewPage() {
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
            <Clock className="w-3.5 h-3.5" /> ใช้เวลาอ่าน 8 นาที
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รีวิว BYD Atto 3 (Extended Range &amp; Dynamic): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่า น่าใช้แค่ไหนในปี 2026?
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed font-light">
          รีวิวเจาะลึกเอสยูวีไฟฟ้าขวัญใจมหาชนที่มียอดจดทะเบียนสูงที่สุดในไทย ทดสอบความทนทานของแบตเตอรี่ Blade Battery ความนุ่มนวลของช่วงล่างบนถนนเมืองไทย ม่านบังแดดไฟฟ้าสู้แดด และความคุ้มค่าหลังปรับโครงสร้างราคาใหม่
        </p>

        {/* Executive Verdict Score Card */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-lime-400" /> EVSELECT Rating
              </div>
              <div className="text-4xl font-black text-lime-400 flex items-baseline gap-2">
                8.8 <span className="text-base font-normal text-zinc-400">/ 10</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                &quot;เอสยูวีครอบครัวที่ใช้งานง่าย ช่วงล่างนุ่มนั่งสบาย มีม่านไฟฟ้าในตัว และราคาคุ้มค่าที่สุด&quot;
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">ราคาเริ่มต้น</div>
                <div className="text-base font-bold text-white mt-0.5">669,900 ฿</div>
                <div className="text-[11px] text-zinc-500">รุ่น Dynamic (MSRP)</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">พละกำลังสูงสุด</div>
                <div className="text-base font-bold text-lime-400 mt-0.5">201 hp</div>
                <div className="text-[11px] text-zinc-500">มอเตอร์หน้า 310 Nm</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80 col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-400">ระยะทางวิ่งสูงสุด</div>
                <div className="text-base font-bold text-white mt-0.5">480 กม.</div>
                <div className="text-[11px] text-zinc-500">NEDC (รุ่น Extended)</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-zinc-800 bg-zinc-950 shadow-2xl">
        <Image
          src="/images/reviews/byd-atto-3-hero.jpg"
          alt="BYD Atto 3 เอสยูวีไฟฟ้า สเปกไทย"
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
            หากจะยกย่องรถยนต์ไฟฟ้ารุ่นใดรุ่นหนึ่งว่าเป็น <strong>&quot;ผู้บุกเบิกและจุดกระแส EV Fever ในประเทศไทย&quot;</strong> รถรุ่นนั้นย่อมหนีไม่พ้น <strong>BYD Atto 3</strong> คอมแพกต์เอสยูวีที่สร้างปรากฏการณ์คนต่อคิวจองข้ามคืนตั้งแต่ปลายปี 2022 จนปัจจุบันกลายเป็นรถ EV ที่มียอดจำหน่ายสะสมสูงที่สุดบนท้องถนนเมืองไทย
          </p>
          <p>
            ในรุ่นปรับปรุงล่าสุด (MY2024–2026) BYD ได้อัปเกรดจุดต่างๆ ตามเสียงสะท้อนของผู้ใช้งานจริง เช่น การเปลี่ยนหน้าจอกลางเป็นขนาดใหญ่ <strong>15.6 นิ้ว</strong>, การปรับปรุงซอฟต์แวร์ระบบสัมผัสและแอปพลิเคชัน, เปลี่ยนยางติดรถคุณภาพสูงขึ้น และที่สำคัญที่สุดคือการปรับโครงสร้างราคาใหม่ลงมาเริ่มต้นเพียง <strong>669,900 บาท</strong> ทำให้ความคุ้มค่ายิ่งทวีคูณขึ้นไปอีก
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
            BYD Atto 3 ทำตลาดในไทยด้วย 3 รุ่นย่อยหลัก โดยใช้ขุมพลังมอเตอร์ 201 แรงม้าเท่ากันทุกรุ่น แตกต่างกันที่ขนาดความจุแบตเตอรี่และออปชันอำนวยความสะดวก:
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
                  <td className="py-4 px-3">มอเตอร์เดี่ยว FWD</td>
                  <td className="py-4 px-3">201 hp / 310 Nm</td>
                  <td className="py-4 px-3">50.25 kWh</td>
                  <td className="py-4 px-3">7.9 วินาที</td>
                  <td className="py-4 px-3">410 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">669,900 ฿*</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Premium</td>
                  <td className="py-4 px-3">มอเตอร์เดี่ยว FWD</td>
                  <td className="py-4 px-3">201 hp / 310 Nm</td>
                  <td className="py-4 px-3">50.25 kWh</td>
                  <td className="py-4 px-3">7.9 วินาที</td>
                  <td className="py-4 px-3">410 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">749,900 ฿*</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors bg-lime-950/10 border-l-2 border-lime-400">
                  <td className="py-4 px-4 font-semibold text-white flex items-center gap-1.5">
                    Extended Range <span className="bg-lime-500/20 text-lime-400 text-[10px] px-1.5 py-0.5 rounded">ยอดนิยม</span>
                  </td>
                  <td className="py-4 px-3">มอเตอร์เดี่ยว FWD</td>
                  <td className="py-4 px-3">201 hp / 310 Nm</td>
                  <td className="py-4 px-3 text-lime-400 font-semibold">60.48 kWh</td>
                  <td className="py-4 px-3 font-semibold">7.3 วินาที</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">480 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-lime-400">799,900 ฿*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 mt-2 italic">
            *หมายเหตุ: ราคาอย่างเป็นทางการ ณ ปัจจุบัน (ปรับลดลงมาจากราคาเปิดตัวเดิม 1,099,900 - 1,199,900 บาท)
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
            BYD Atto 3 ออกแบบภายใต้แนวคิด <strong>Dragon Face 3.0</strong> ผสมผสานความทันสมัยแบบเอสยูวีคนเมืองเข้ากับเอกลักษณ์ตะวันออก ด้านหน้าโดดเด่นด้วยแถบโครเมียมสลักตัวอักษร BYD เชื่อมต่อไฟหน้า Full LED คมเข้ม ด้านข้างมีลวดลาย Ripple D-Pillar ลายระลอกคลื่นสีเงิน/ดำเงา และด้านท้ายติดตั้งไฟท้าย LED แบบลากยาวตลอดแนวฝาท้าย (One-piece Through-type Taillight)
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/byd-atto-3-exterior.jpg"
              alt="ดีไซน์ภายนอก BYD Atto 3"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>มิติตัวถัง (Dimensions):</strong>
          </p>
          <ul>
            <li>ความยาว: 4,455 มม.</li>
            <li>ความกว้าง: 1,875 มม.</li>
            <li>ความสูง: 1,615 มม.</li>
            <li>ระยะฐานล้อ (Wheelbase): 2,720 มม.</li>
            <li>ระยะต่ำสุดจากพื้น (Ground Clearance): <strong>175 มม.</strong></li>
          </ul>
          <p className="text-sm bg-zinc-900/80 border border-zinc-800 p-4 rounded-xl text-zinc-300">
            <strong className="text-lime-400">จุดเด่นสำหรับสภาพถนนไทย:</strong> ความสูง Ground Clearance 175 มม. ผสานกับโครงสร้างใต้ท้องเรียบและการป้องกันน้ำของแบตเตอรี่มาตรฐาน IP67 ทำให้ Atto 3 ขับผ่านแอ่งน้ำท่วมขังรอการระบายในกรุงเทพฯ (ระดับ 15-20 ซม.) ได้อย่างมั่นใจ หมดกังวลเรื่องการครูดใต้ท้องแบบรถซีดาน
          </p>
        </section>

        {/* Section 4: Interior & Infotainment */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '550px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            4. ภายในห้องโดยสาร ความกว้างขวาง และระบบอินโฟเทนเมนต์
          </h2>
          <p>
            ห้องโดยสารของ Atto 3 ได้รับแรงบันดาลใจจาก <strong>ฟิตเนสและดนตรี (Gym &amp; Music Concept)</strong> ซึ่งมีความแปลกใหม่ไม่ซ้ำใครในตลาด:
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/byd-atto-3-interior.jpg"
              alt="ภายในห้องโดยสารและหน้าจอหมุน 15.6 นิ้ว BYD Atto 3"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <ul>
            <li><strong>ช่องเก็บของข้างประตูพร้อมสายกีตาร์สีแดง 3 เส้น:</strong> ดีดมีเสียงโน้ตจริงและยืดหยุ่นใส่ขวดน้ำขนาดใหญ่ได้สะดวก</li>
            <li><strong>คันเกียร์ทรงกริปดัมเบล (Dumbbell Gear Selector):</strong> จับถนัดมือพร้อมปุ่มเบรกมือไฟฟ้าและโหมดการขับขี่</li>
            <li><strong>ช่องแอร์แบบใบเวท (Weight Plate Vents):</strong> หมุนปรับทิศทางลมได้อิสระ</li>
            <li><strong>ม่านบังแดดหลังคาพาโนรามาไฟฟ้า (Built-in Electric Roller Blind):</strong> นี่คือข้อได้เปรียบมหาศาลเหนือรถคู่แข่งอย่าง Tesla หรือ BYD Seal เพราะ Atto 3 มีม่านผ้าทึบเปิด-ปิดด้วยไฟฟ้าจากโรงงาน กดปิดปุ๊บลดความร้อนจากแดดเที่ยงวันของไทยได้ 100%</li>
            <li><strong>หน้าจอสัมผัสหมุนไฟฟ้าขนาด 15.6 นิ้ว:</strong> รองรับ Wireless Apple CarPlay และ Android Auto ทำงานรวดเร็ว พร้อมระบบนำทางและสั่งการด้วยเสียงภาษาไทย</li>
          </ul>
          <p>
            <strong>พื้นที่เก็บสัมภาระ:</strong>
          </p>
          <ul>
            <li>ห้องเก็บสัมภาระด้านท้าย: <strong>440 ลิตร</strong> ปรับพื้นห้องสัมภาระได้ 2 ระดับ และเมื่อพับเบาะหลัง 60:40 จะขยายพื้นที่ได้สูงสุดถึง <strong>1,340 ลิตร</strong></li>
            <li>(ไม่มีช่องเก็บสัมภาระด้านหน้า Frunk)</li>
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
            BYD Atto 3 ติดตั้งมอเตอร์ไฟฟ้า Permanent Magnet Synchronous Motor ขับเคลื่อนล้อหน้า ให้พละกำลังสูงสุด <strong>201 แรงม้า (150 kW)</strong> และแรงบิดสูงสุด <strong>310 นิวตันเมตร</strong>
          </p>
          <p>
            ในการทดสอบขับขี่ อัตราเร่ง 0-100 กม./ชม. ทำได้ในเวลา <strong>7.3 วินาที (รุ่น Extended Range)</strong> ซึ่งถือว่าจี๊ดจ๊าดและกระฉับกระเฉงมากสำหรับรถยนต์ระดับราคานี้ คันเร่งเซ็ตมานุ่มนวลในโหมด Eco และ Normal ขับง่าย ไม่กระชากหัวทิ่ม เหมาะสำหรับทั้งมือใหม่และครอบครัวที่มีเด็กหรือผู้สูงอายุร่วมเดินทาง
          </p>
          <p>
            เมื่อสลับเป็นโหมด <strong>Sport</strong> คันเร่งจะตอบสนองไวขึ้นทันตา การเร่งแซงรถบรรทุกบนถนน 2 เลนสวนทำได้อย่างเฉียบขาดและปลอดภัย
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
            ช่วงล่างด้านหน้าเป็นแบบ MacPherson Strut และด้านหลังเป็นแบบ <strong>Multi-link อิสระ</strong> ซึ่งหาได้ยากในรถระดับราคานี้ที่คู่แข่งหลายรุ่นมักใช้คานแข็ง Torsion Beam
          </p>
          <ul>
            <li><strong>ความนุ่มนวลในเมือง (30-80 กม./ชม.):</strong> ช่วงล่างเซ็ตอัปมาเน้นความนุ่มสบาย ซับแรงกระแทกจากรอยต่อถนน ฝาท่อคอนกรีต และลูกระนาดได้อย่างยอดเยี่ยม นั่งนุ่มนวลและผ่อนคลายที่สุดรุ่นหนึ่งในกลุ่ม B-SUV</li>
            <li><strong>การทรงตัวที่ความเร็วสูง (110-120 กม./ชม.):</strong> บนทางตรงนิ่งมั่นใจ แต่เนื่องจากเซ็ตติ้งช่วงล่างเน้นนุ่ม หากเข้าโค้งแคบด้วยความเร็วสูงจะมีอาการโคลง (Body Roll) ให้สัมผัสอยู่บ้างตามสไตล์รถเอสยูวียกสูง</li>
            <li><strong>การเก็บเสียง (NVH):</strong> ในเมืองเงียบสงบดีเยี่ยม เมื่อวิ่งทางไกล 110-120 กม./ชม. มีเสียงลมปะทะบริเวณเสา A และกระจกมองข้างเข้ามาบ้างตามรูปทรงตัวถัง แต่ยังสนทนาได้อย่างสบายโดยไม่ต้องเร่งเสียง</li>
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
            หัวใจสำคัญของ Atto 3 คือ <strong>BYD Blade Battery (LFP Chemistry)</strong> ความจุ 60.48 kWh (Extended Range) และ 50.25 kWh (Dynamic/Premium) ที่ขึ้นชื่อเรื่องความทนทานต่อความร้อนและความปลอดภัยสูง
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/byd-atto-3-details.jpg"
              alt="ระบบชาร์จและฟังก์ชัน V2L ใน BYD Atto 3"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>การทดสอบระยะวิ่งใช้งานจริง (Real-World Test เส้นทาง กทม. - ระยอง - สัตหีบ):</strong>
          </p>
          <ul>
            <li>รุ่น Extended Range 60.48 kWh (เคลม 480 กม. NEDC): วิ่งทางไกลจริงที่ความเร็ว 100-110 กม./ชม. เปิดแอร์ 22°C ทำระยะได้ประมาณ <strong>350 - 375 กิโลเมตร</strong> (อัตรากินไฟเฉลี่ย 15.5 - 16.5 kWh/100km)</li>
            <li>รุ่น Dynamic/Premium 50.25 kWh (เคลม 410 กม. NEDC): วิ่งจริงได้ประมาณ <strong>290 - 320 กิโลเมตร</strong> เหมาะกับการใช้งานในเมืองและชานเมือง</li>
          </ul>
          <p>
            <strong>ระบบชาร์จไฟ:</strong>
          </p>
          <ul>
            <li><strong>ชาร์จเร็ว DC Fast Charge:</strong> รองรับสูงสุด <strong>88 kW</strong> (รุ่น Extended) และ 70 kW (รุ่น Standard) ชาร์จ 30% ถึง 80% ใช้เวลาประมาณ <strong>35-40 นาที</strong> ที่ตู้ชาร์จสาธารณะ PTT EV Station PluZ, PEA Volta, EA Anywhere</li>
            <li><strong>ชาร์จปกติ AC Type 2:</strong> รองรับ 7 kW ใช้เวลาชาร์จ 0-100% ประมาณ 8.5-9.5 ชั่วโมง</li>
            <li><strong>ฟังก์ชัน V2L (Vehicle-to-Load):</strong> จ่ายไฟออกสู่อุปกรณ์ภายนอก 2.2 kW เสียบหม้อต้มสุกี้ พัดลม หรือชาร์จโน้ตบุ๊กขณะแคมป์ปิ้งได้สบาย</li>
          </ul>
        </section>

        {/* Section 8: Safety & ADAS */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (DiPilot ADAS)
          </h2>
          <p>
            BYD Atto 3 ติดตั้งระบบช่วยเหลือการขับขี่อัจฉริยะ DiPilot ครบครันและผ่านมาตรฐานความปลอดภัยระดับ <strong>5 ดาวจาก Euro NCAP และ ANCAP</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Adaptive Cruise Control (ACC with Stop &amp; Go)</div>
                <div className="text-xs text-zinc-400 mt-0.5">คุมความเร็วแปรผันตามคันหน้าจนถึงจุดหยุดนิ่ง</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Autonomous Emergency Braking (AEB)</div>
                <div className="text-xs text-zinc-400 mt-0.5">ระบบเบรกฉุกเฉินอัตโนมัติพร้อมตรวจจับคนเดินถนน</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Panoramic 360° Camera with 3D View</div>
                <div className="text-xs text-zinc-400 mt-0.5">กล้องมองรอบคันคมชัด พร้อมมองทะลุใต้ท้องรถเข้าซองแคบ</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">7 Airbags &amp; High-Strength Steel Body</div>
                <div className="text-xs text-zinc-400 mt-0.5">ถุงลมนิรภัย 7 จุด รวมถึงถุงลมตรงกลางระหว่างเบาะหน้า</div>
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
                src="/images/tpe-floormats.jpg"
                alt="พรมปูพื้น TPE สำหรับ BYD Atto 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> EVSELECT Fitment Guide
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                อุปกรณ์เสริมตรงรุ่นยอดนิยมสำหรับ BYD Atto 3
              </h3>
              <p className="text-sm text-zinc-300 mb-4">
                เพิ่มความทนทานและความสะดวกในการทำความสะอาดด้วย <strong>พรมปูพื้น 3D TPE ขอบสูงกันน้ำ 100%</strong>, <strong>ฟิล์มกระจก 9H สำหรับจอหมุน 15.6 นิ้ว</strong>, <strong>ถาดจัดระเบียบคอนโซลกลาง</strong> และ <strong>ถาดท้ายรถกันรอย</strong>
              </p>
              <Link
                href="/#products"
                className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500 text-zinc-950 font-bold text-sm hover:bg-lime-400 transition-all shadow-lg hover:shadow-lime-500/20 w-full sm:w-auto"
              >
                เลือกดูอุปกรณ์เสริม BYD Atto 3 ทั้งหมด <ArrowRight className="w-4 h-4" />
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
                  <span><strong>ความคุ้มค่าต่อราคาสูงสุด:</strong> เริ่มต้นเพียง 6 แสนปลาย ได้ช่วงล่าง Multi-link และออปชันครบ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ม่านบังแดดพาโนรามาไฟฟ้า:</strong> ป้องกันความร้อนแดดเมืองไทยได้ 100% ไม่ต้องซื้อม่านเสริม</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ช่วงล่างนุ่มสบาย:</strong> ซับแรงกระแทกถนนเมืองไทย ฝาท่อ หลุมบ่อ ได้อย่างผ่อนคลาย</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>Blade Battery ปลอดภัยสูง:</strong> แบตเตอรี่ LFP เสถียร ทนทาน และชาร์จเต็ม 100% ได้บ่อย</span>
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
                  <span><strong>ความเร็วชาร์จ DC สูงสุด 88 kW:</strong> การชาร์จตามตู้ทางหลวงใช้เวลาราว 35-40 นาที (ช้ากว่าคู่แข่ง 150 kW)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ช่วงล่างย้วยในโค้งความเร็วสูง:</strong> หากขับสไตล์สปอร์ตมุดเร็วๆ จะมีอาการโคลงตัวชัดเจน</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ไม่มีช่องเก็บของด้านหน้า (Frunk):</strong> ช่องใต้ฝากระโปรงหน้าไม่มีกล่องเก็บสายชาร์จ</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>ดีไซน์ห้องโดยสารเฉพาะกลุ่ม:</strong> ธีมฟิตเนสและสายกีตาร์บางคนอาจมองว่าแปลกตาเกินไป</span>
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
            แม้จะมีคู่แข่งรุ่นใหม่เปิดตัวเข้าสู่ตลาดอย่างต่อเนื่อง แต่ <strong>BYD Atto 3</strong> ยังคงยืนหยัดเป็นหนึ่งในตัวเลือกที่ &quot;ปลอดภัยและคุ้มค่าที่สุด&quot; สำหรับครอบครัวไทยที่ต้องการเปลี่ยนผ่านจากรถน้ำมันมาใช้รถยนต์ไฟฟ้าคันแรก ด้วยข้อได้เปรียบเรื่องศูนย์บริการที่ครอบคลุมทั่วประเทศ ความทนทานของ Blade Battery และความสบายของห้องโดยสารที่มีม่านบังแดดไฟฟ้า
          </p>
          <p>
            รุ่นที่เราแนะนำมากที่สุดคือ <strong>BYD Atto 3 Extended Range (799,900 ฿)</strong> เพราะส่วนต่างราคาที่เพิ่มขึ้นมาคุ้มค่ากับแบตเตอรี่ 60.48 kWh ที่ช่วยให้คุณวิ่งทางไกลต่างจังหวัดได้อย่างสบายใจโดยไม่ต้องกังวลเรื่องการหาจุดชาร์จบ่อยๆ
          </p>

          {/* Detailed Scorecard */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl not-prose my-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>EVSELECT Scorecard Breakdown</span>
              <span className="text-lime-400 font-extrabold text-xl">8.8 / 10</span>
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">สมรรถนะและการควบคุม (Performance &amp; Handling)</span>
                  <span className="font-bold text-lime-400">8.3 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '83%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ความสะดวกสบายและห้องโดยสาร (Cabin Comfort &amp; Practicality)</span>
                  <span className="font-bold text-lime-400">8.8 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">เทคโนโลยีและระบบอินโฟเทนเมนต์ (Tech &amp; Features)</span>
                  <span className="font-bold text-lime-400">8.7 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ระยะทางวิ่งและการชาร์จ (Range &amp; Charging)</span>
                  <span className="font-bold text-lime-400">8.5 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ความคุ้มค่าต่อราคา (Value for Money)</span>
                  <span className="font-bold text-lime-400">9.6 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '96%' }}></div>
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
