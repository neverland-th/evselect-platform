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
  title: 'รีวิว Zeekr X (Flagship AWD & Standard): พรีเมียมคอมแพกต์ครอสโอเวอร์ ดีไซน์ล้ำ | EVSELECT Reviews',
  description: 'เจาะลึกรีวิว Zeekr X สเปกไทย ทั้งรุ่น Standard RWD และ Flagship AWD 428 แรงม้า แพลตฟอร์ม SEA จากสวีเดน ลำโพง Yamaha 13 ตัว และสมรรถนะการขับขี่สุดเฉียบคมบนถนนไทย',
};

export default function ZeekrXReviewPage() {
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
          รีวิว Zeekr X (Flagship AWD &amp; Standard): พรีเมียมคอมแพกต์ครอสโอเวอร์ ดีไซน์ล้ำ ออปชันหรูระดับไฮเอนด์
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed font-light">
          สัมผัสความหรูหราสไตล์สแกนดิเนเวียจากแพลตฟอร์ม SEA (ร่วมกับ Volvo EX30) ผสานความแรงระดับ 428 แรงม้า อัตราเร่ง 0-100 ใน 3.8 วินาที ประตูไร้กรอบ ลำโพง Yamaha 13 ตำแหน่ง และการทดสอบขับจริงบนถนนเมืองไทย
        </p>

        {/* Executive Verdict Score Card */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-zinc-800 pb-6 md:pb-0 md:pr-6">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-lime-400" /> EVSELECT Rating
              </div>
              <div className="text-4xl font-black text-lime-400 flex items-baseline gap-2">
                9.0 <span className="text-base font-normal text-zinc-400">/ 10</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                &quot;วัสดุห้องโดยสารพรีเมียมเหนือชั้น ช่วงล่างยุโรปแน่นหนึบ และอัตราเร่งระดับซูเปอร์คาร์&quot;
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">ราคาเริ่มต้น</div>
                <div className="text-base font-bold text-white mt-0.5">899,000 ฿</div>
                <div className="text-[11px] text-zinc-500">รุ่น Standard RWD</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80">
                <div className="text-xs text-zinc-400">พละกำลังสูงสุด</div>
                <div className="text-base font-bold text-lime-400 mt-0.5">428 hp</div>
                <div className="text-[11px] text-zinc-500">รุ่น Flagship AWD</div>
              </div>
              <div className="bg-zinc-950/80 p-3.5 rounded-2xl border border-zinc-800/80 col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-400">ระยะทางวิ่งสูงสุด</div>
                <div className="text-base font-bold text-white mt-0.5">540 กม.</div>
                <div className="text-[11px] text-zinc-500">NEDC (รุ่น Standard)</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image (LCP Priority) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-zinc-800 bg-zinc-950 shadow-2xl">
        <Image
          src="/images/reviews/zeekr-x-hero.jpg"
          alt="Zeekr X พรีเมียมคอมแพกต์ครอสโอเวอร์ สเปกไทย"
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
            <strong>Zeekr (ซีเคอร์)</strong> คือแบรนด์รถยนต์ไฟฟ้าระดับพรีเมียม-ลักชัวรีในเครือ Geely Holding Group ซึ่งมีแบรนด์ยานยนต์ชั้นนำระดับโลกอย่าง Volvo, Polestar และ Lotus อยู่ในเครือเดียวกัน การเปิดตัว <strong>Zeekr X</strong> ในประเทศไทย ถือเป็นการนำเสนอตัวเลือกครอสโอเวอร์ไฟฟ้าที่ผสมผสานงานวิศวกรรมและดีไซน์จากศูนย์ออกแบบระดับโลกในเมืองโกเธนเบิร์ก ประเทศสวีเดน
          </p>
          <p>
            Zeekr X พัฒนาขึ้นบนแพลตฟอร์ม <strong>SEA (Sustainable Experience Architecture)</strong> ซึ่งเป็นพื้นฐานเดียวกันกับ Volvo EX30 และ Smart #1 แต่ Zeekr X ถูกวางตำแหน่งให้มีความหรูหรา ใช้วัสดุห้องโดยสารเกรดพรีเมียม และมอบความกว้างขวางของพื้นที่ใช้สอยมากกว่าในระดับราคาที่จับต้องได้ง่าย
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
            Zeekr Intelligent Technology (Thailand) ทำตลาด Zeekr X ในประเทศไทยทั้งหมด 2 รุ่นย่อยหลัก พร้อมการรับประกันคุณภาพตัวรถและแบตเตอรี่ระดับพรีเมียม:
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
                  <th className="py-4 px-3">ระยะทาง (NEDC)</th>
                  <th className="py-4 px-4 text-right">ราคาจำหน่าย (THB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                <tr className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Standard RWD</td>
                  <td className="py-4 px-3">มอเตอร์เดี่ยว RWD</td>
                  <td className="py-4 px-3">272 hp / 343 Nm</td>
                  <td className="py-4 px-3">66.0 kWh (NMC)</td>
                  <td className="py-4 px-3">5.6 วินาที</td>
                  <td className="py-4 px-3 text-lime-400 font-semibold">540 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-white">899,000 ฿*</td>
                </tr>
                <tr className="hover:bg-zinc-800/40 transition-colors bg-lime-950/10 border-l-2 border-lime-400">
                  <td className="py-4 px-4 font-semibold text-white flex items-center gap-1.5">
                    Flagship AWD <span className="bg-lime-500/20 text-lime-400 text-[10px] px-1.5 py-0.5 rounded">แนะนำ</span>
                  </td>
                  <td className="py-4 px-3 text-lime-400 font-medium">มอเตอร์คู่ AWD</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">428 hp / 543 Nm</td>
                  <td className="py-4 px-3">66.0 kWh (NMC)</td>
                  <td className="py-4 px-3 text-lime-400 font-bold">3.8 วินาที</td>
                  <td className="py-4 px-3">470 กม.</td>
                  <td className="py-4 px-4 text-right font-bold text-lime-400">1,049,000 ฿*</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 mt-2 italic">
            *หมายเหตุ: ราคาจำหน่ายอย่างเป็นทางการ ณ ปัจจุบัน (ปรับโครงสร้างราคาใหม่จากเดิม 1,199,000 - 1,349,000 บาท)
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
            ดีไซน์ภายนอกของ Zeekr X มีความโดดเด่นและล้ำสมัยสไตล์ Sci-Fi Minimalism ทุกรายละเอียดถูกออกแบบมาเพื่อความสวยงามตามหลักอากาศพลศาสตร์:
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/zeekr-x-exterior.jpg"
              alt="ดีไซน์ภายนอก Zeekr X"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <ul>
            <li><strong>ประตูไร้กรอบ (Frameless Doors):</strong> พร้อมระบบเปิด-ปิดด้วยไฟฟ้าอัจฉริยะ ซ่อนมือจับประตูเรียบเนียนไปกับบานประตู</li>
            <li><strong>ฝาปิดช่องชาร์จไฟแบบกระจกซ่อน (Concealed Glass Charging Flap):</strong> กลมกลืนไปกับตัวถังรถด้านหลังอย่างแนบเนียน</li>
            <li><strong>ไฟหน้าแบบ Micro-Optic LED:</strong> ประกอบด้วยหลอดไฟ LED ขนาดจิ๋ว 56 ดวง ให้แสงสว่างคมชัดและดีไซน์เส้นสายเพรียวบาง</li>
            <li><strong>กระจกมองข้างแบบไร้กรอบ (Frameless Side Mirrors):</strong> ลดแรงต้านอากาศและเพิ่มทัศนวิสัย</li>
            <li><strong>ระบบเบรก Akebono 4-Piston:</strong> ในรุ่น Flagship AWD ติดตั้งคาลิเปอร์เบรก 4 พ็อตสีสปอร์ต พร้อมจานเบรกขนาดใหญ่ หยุดรถจาก 100-0 กม./ชม. ในระยะเพียง <strong>34.5 เมตร</strong></li>
          </ul>
          <p>
            <strong>มิติตัวถัง (Dimensions):</strong>
          </p>
          <ul>
            <li>ความยาว: 4,432 มม.</li>
            <li>ความกว้าง: 1,836 มม.</li>
            <li>ความสูง: 1,566 มม.</li>
            <li>ระยะฐานล้อ (Wheelbase): 2,750 มม.</li>
            <li>ระยะต่ำสุดจากพื้น (Ground Clearance): <strong>170 มม.</strong></li>
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
            เมื่อก้าวเข้ามาภายในห้องโดยสารของ Zeekr X คุณจะรู้สึกได้ทันทีว่านี่คือ <strong>&quot;ห้องโดยสารที่ใช้วัสดุหรูหราที่สุดในระดับราคา 1 ล้านบาท&quot;</strong>:
          </p>

          <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/zeekr-x-interior.jpg"
              alt="ห้องโดยสารพรีเมียมและระบบเสียง Yamaha ใน Zeekr X"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <ul>
            <li><strong>วัสดุบุนุ่มและผ้า Microfiber Suede:</strong> บุเพดานหลังคาและเสาด้วยหนังกลับสัมผัสนุ่ม ตัดเย็บประณีตด้วยตะเข็บคู่</li>
            <li><strong>การตกแต่งด้วย Rose Gold Accents:</strong> สวิตช์กระจกไฟฟ้า ปุ่มควบคุม และที่แขวนสัมภาระตกแต่งด้วยวัสดุสีโรสโกลด์เนื้อแมตต์</li>
            <li><strong>ไฟตกแต่งห้องโดยสาร Ice Block Ambient Lighting:</strong> ไฟ LED 66 ดวง ส่องประกายผ่านลวดลายปริซึมราวกับคริสตัลน้ำแข็ง ปรับเปลี่ยนตามจังหวะเพลงได้</li>
            <li><strong>หน้าจอกลางสัมผัสขนาด 14.6 นิ้ว:</strong> ทำงานด้วยชิปประมวลผล <strong>Qualcomm Snapdragon 8155</strong> มอบความลื่นไหลระดับเดียวกับสมาร์ทโฟนเรือธง รองรับ Apple CarPlay และ Android Auto</li>
            <li><strong>ระบบเสียงระดับพรีเมียม Yamaha 13 ลำโพง:</strong> มาพร้อมลำโพงฝังที่พนักพิงศีรษะคนขับ (Headrest Speakers) ให้มิติเสียงรอบทิศทางคมชัดและแยกเสียงนำทาง GPS เข้าหูคนขับโดยไม่รบกวนผู้โดยสาร</li>
            <li><strong>แท่นชาร์จสมาร์ทโฟนไร้สาย 50W แบบมีพัดลมเป่าเย็น:</strong> ป้องกันไม่ให้โทรศัพท์มือถือร้อนจัดขณะชาร์จเร็ว</li>
          </ul>
          <p>
            <strong>พื้นที่เก็บสัมภาระ:</strong>
          </p>
          <ul>
            <li>ห้องเก็บสัมภาระด้านท้าย: <strong>362 ลิตร</strong> (ขยายเป็น 1,182 ลิตรเมื่อพับเบาะหลัง)</li>
            <li>ช่องเก็บสัมภาระด้านหน้า (Frunk): <strong>21 ลิตร</strong> เหมาะสำหรับเก็บสายชาร์จฉุกเฉิน</li>
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
            ในการทดสอบรุ่นท็อป <strong>Zeekr X Flagship AWD</strong> เราได้สัมผัสกับมอเตอร์ไฟฟ้าคู่หน้า-หลัง ให้กำลังรวม <strong>428 แรงม้า (315 kW)</strong> แรงบิดมหาศาล <strong>543 นิวตันเมตร</strong>
          </p>
          <p>
            เมื่อกดคันเร่งจมมิดในโหมด Sport ตัวรถจะพุ่งทะยานออกตัวอย่างรวดเร็วและดึงหลังติดเบาะ อัตราเร่ง 0-100 กม./ชม. ทำได้ในเวลาเพียง <strong>3.8 วินาที</strong> เทียบเท่ากับซูเปอร์คาร์เครื่องยนต์ V8 แต่ขับขี่ควบคุมได้ง่ายดายด้วยระบบกระจายแรงบิดไฟฟ้าอัจฉริยะ
          </p>
          <p>
            สำหรับรุ่น <strong>Standard RWD (272 แรงม้า / 343 Nm)</strong> อัตราเร่ง 0-100 อยู่ที่ 5.6 วินาที ซึ่งเร็วแรงเหลือเฟือ และมีจุดเด่นเรื่องความเบาและคล่องตัวของหน้ารถ การถ่ายทอดกำลังลงล้อหลังให้ฟีลลิ่งสนุกสนานแบบสปอร์ตแฮทช์แบ็กยุโรป
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
            วิศวกรชาวสวีเดนได้เซ็ตอัปช่วงล่างของ Zeekr X ด้วยระบบกันสะเทือนหน้าแบบ MacPherson Strut และหลังแบบ <strong>Five-link Multi-link อิสระ</strong> ร่วมกับบุชชิ่งไฮดรอลิก (Hydraulic Bushings):
          </p>
          <ul>
            <li><strong>ฟีลลิ่งการขับขี่แบบ European Solid:</strong> ช่วงล่างให้ความรู้สึกแน่น หนึบ มั่นคงสูงมาก รอยต่อคอสะพานและลูกระนาดถูกซับแรงกระแทกได้อย่างผู้ดี ไม่เด้งกระดอนหรือย้วยหลอน</li>
            <li><strong>การเข้าโค้ง:</strong> แชสซี SEA มีจุดศูนย์ถ่วงต่ำ ตัวรถเข้าโค้งได้คม แม่นยำ และแทบไม่มีอาการเอียงตัว (Body Roll) ให้เสียความมั่นใจ</li>
            <li><strong>การเก็บเสียง (NVH):</strong> แม้จะเป็นประตูแบบไร้กรอบ (Frameless) แต่การซีลขอบยางแบบสองชั้นผสานกับกระจกหนาพิเศษ ทำให้การเก็บเสียงลมปะทะและเสียงการจราจรในกรุงเทพฯ ทำได้เงียบสงบอย่างน่าประทับใจ</li>
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
            Zeekr X ใช้แบตเตอรี่ <strong>Ternary Lithium (NMC Chemistry)</strong> ความจุ <strong>66.0 kWh</strong> ผลิตโดย CATL พร้อมระบบควบคุมอุณหภูมิของเหลวแบบแอคทีฟ (Liquid Thermal Management)
          </p>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden my-8 border border-zinc-800">
            <Image
              src="/images/reviews/zeekr-x-details.jpg"
              alt="ช่องชาร์จไฟและรายละเอียดตัวรถ Zeekr X"
              fill
              sizes="(max-width: 768px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          <p>
            <strong>การทดสอบระยะวิ่งใช้งานจริง (Real-World Test เส้นทาง กทม. - หัวหิน / พัทยา):</strong>
          </p>
          <ul>
            <li>รุ่น Standard RWD (เคลม 540 กม. NEDC): วิ่งทางไกลจริงที่ความเร็ว 110-120 กม./ชม. เปิดแอร์ 22°C ทำระยะได้ประมาณ <strong>410 - 435 กิโลเมตร</strong></li>
            <li>รุ่น Flagship AWD (เคลม 470 กม. NEDC): วิ่งทางไกลจริงทำได้ประมาณ <strong>360 - 385 กิโลเมตร</strong> (อัตรากินไฟเฉลี่ย 16.5 - 17.8 kWh/100km)</li>
          </ul>
          <p>
            <strong>ระบบชาร์จไฟ:</strong>
          </p>
          <ul>
            <li><strong>ชาร์จเร็ว DC Fast Charge:</strong> รองรับกำลังไฟสูงสุด <strong>150 kW</strong> ชาร์จจาก 10% ถึง 80% ในเวลาเพียง <strong>28 นาที</strong> ที่ตู้ชาร์จ PEA Volta, EA Anywhere หรือ EleX by EGAT</li>
            <li><strong>ชาร์จปกติ AC Type 2:</strong> รองรับสูงสุด <strong>11 kW (3 Phase)</strong> ชาร์จเต็ม 0-100% ใน 6-7 ชั่วโมง หรือ 7.4 kW (Single Phase) ใน 9-10 ชั่วโมง</li>
            <li><strong>ฟังก์ชัน V2L:</strong> จ่ายไฟออกสู่อุปกรณ์ภายนอกได้สูงสุด 3.3 kW (3,300W) สูงกว่ารถทั่วไปในระดับเดียวกัน</li>
          </ul>
        </section>

        {/* Section 8: Safety & ADAS */}
        <section
          className="my-12"
          style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '400px' } as React.CSSProperties}
        >
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
            <span className="w-2 h-7 bg-lime-400 rounded-full inline-block"></span>
            8. ระบบความปลอดภัยและเทคโนโลยีช่วยขับขี่ (Zeekr AD)
          </h2>
          <p>
            Zeekr X จัดเต็มระบบช่วยเหลือผู้ขับขี่อัจฉริยะ <strong>Zeekr AD</strong> โดยใช้เซ็นเซอร์ระดับสูงรอบคัน และคว้ามาตรฐานความปลอดภัย <strong>5 ดาวจาก Euro NCAP และ Green NCAP</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Full-Speed Adaptive Cruise Control (ACC)</div>
                <div className="text-xs text-zinc-400 mt-0.5">ควบคุมความเร็วแปรผันตามคันหน้าแบบ Stop &amp; Go ลื่นไหล</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Lane Centering &amp; Automatic Lane Change</div>
                <div className="text-xs text-zinc-400 mt-0.5">ประคองรถกึ่งกลางเลนและช่วยเปลี่ยนเลนอัตโนมัติเมื่อเปิดไฟเลี้ยว</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">Door Opening Warning (DOW)</div>
                <div className="text-xs text-zinc-400 mt-0.5">เตือนและล็อกประตูไม่ให้เปิดหากมีมอเตอร์ไซค์หรือจักรยานแล่นมาด้านข้าง</div>
              </div>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">HD 360° Panoramic Camera with 3D Surround</div>
                <div className="text-xs text-zinc-400 mt-0.5">กล้องรอบคันความละเอียดสูงพิเศษมองได้ทุกมุมมอง</div>
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
                src="/images/wireless-pad.jpg"
                alt="อุปกรณ์เสริมสำหรับ Zeekr X"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime-500/10 text-lime-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> EVSELECT Fitment Guide
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                อุปกรณ์เสริมตรงรุ่นระดับพรีเมียมสำหรับ Zeekr X
              </h3>
              <p className="text-sm text-zinc-300 mb-4">
                ยกระดับความสมบูรณ์แบบด้วย <strong>ม่านบังแดดหลังคาแก้ว Nano-Silver ป้องกัน UV 99%</strong>, <strong>พรมปูพื้น TPE 3D ขึ้นรูปเฉพาะรุ่น</strong>, <strong>ฟิล์มกระจก 9H สำหรับจอ 14.6 นิ้ว</strong> และ <strong>แผ่นซิลิโคนรองแท่นชาร์จไร้สาย 50W</strong>
              </p>
              <Link
                href="/#products"
                className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-lime-500 text-zinc-950 font-bold text-sm hover:bg-lime-400 transition-all shadow-lg hover:shadow-lime-500/20 w-full sm:w-auto"
              >
                เลือกดูอุปกรณ์เสริม Zeekr X ทั้งหมด <ArrowRight className="w-4 h-4" />
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
                  <span><strong>วัสดุและการประกอบระดับพรีเมียม:</strong> สัมผัสหรูหรา บุหนังกลับ Suede และตกแต่งโรสโกลด์</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>พละกำลัง 428 แรงม้า:</strong> อัตราเร่ง 0-100 ใน 3.8 วินาที พร้อมเบรก Akebono 4 พ็อต</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ช่วงล่างยุโรปแท้ (SEA Platform):</strong> ซับแรงสะเทือนเนียนกริบ ทรงตัวมั่นใจ เข้าโค้งเฉียบคม</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span><strong>ระบบเสียง Yamaha 13 ลำโพง:</strong> มีลำโพงฝังพนักพิงศีรษะ มิติเสียงสมบูรณ์แบบ</span>
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
                  <span><strong>พื้นที่เก็บสัมภาระท้าย 362 ลิตร:</strong> ค่อนข้างกะทัดรัด เหมาะกับสัมภาระทั่วไปมากกว่าของชิ้นใหญ่</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>หลังคาแก้วไร้ม่านบังแดดไฟฟ้า:</strong> ต้องติดฟิล์มกันร้อนสูงหรือใช้ม่านเสริมตรงรุ่น</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>แบตเตอรี่ NMC 66 kWh:</strong> การใช้งานประจำวันแนะนำชาร์จที่ 80-90% เพื่อถนอมอายุแบต</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span><strong>เครือข่ายศูนย์บริการยังอยู่ระหว่างขยาย:</strong> แม้จะเติบโตเร็วแต่ยังมีสาขาน้อยกว่าแบรนด์หลัก</span>
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
            <strong>Zeekr X</strong> คือตัวแทนของรถยนต์ไฟฟ้ายุคใหม่ที่ตอบโจทย์ผู้ซื้อที่ต้องการ &quot;ความแตกต่าง ความหรูหรา และสมรรถนะการขับขี่ที่เหนือชั้น&quot; โดยไม่ต้องจ่ายเงินระดับ 2-3 ล้านบาท ดีไซน์ที่ล้ำสมัย ประตูไร้กรอบ และห้องโดยสารที่ใช้วัสดุประณีต ทำให้รถคันนี้ให้ความรู้สึกเป็นรถยนต์ระดับลักชัวรีอย่างแท้จริง
          </p>
          <p>
            หากคุณเน้นการขับขี่ในเมืองและต้องการระยะทางที่วิ่งได้ไกลที่สุด <strong>Standard RWD (899,000 ฿)</strong> มอบความคุ้มค่าอย่างเหลือเชื่อ แต่ถ้าคุณต้องการสัมผัสพลัง 428 แรงม้า ระบบเบรก Akebono และความมั่นใจของระบบขับเคลื่อนสี่ล้อ <strong>Flagship AWD (1,049,000 ฿)</strong> คือที่สุดของคอมแพกต์ครอสโอเวอร์ไฟฟ้าที่คุณไม่ควรพลาด
          </p>

          {/* Detailed Scorecard */}
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-3xl not-prose my-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>EVSELECT Scorecard Breakdown</span>
              <span className="text-lime-400 font-extrabold text-xl">9.0 / 10</span>
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
                  <span className="text-zinc-300">ความหรูหราและห้องโดยสาร (Cabin Luxury &amp; Materials)</span>
                  <span className="font-bold text-lime-400">9.3 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">เทคโนโลยีและระบบอินโฟเทนเมนต์ (Tech &amp; Yamaha Audio)</span>
                  <span className="font-bold text-lime-400">9.2 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-zinc-300">ระยะทางวิ่งและการชาร์จ (Range &amp; 150kW Charging)</span>
                  <span className="font-bold text-lime-400">8.5 / 10</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: '85%' }}></div>
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
