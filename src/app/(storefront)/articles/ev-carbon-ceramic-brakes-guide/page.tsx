import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  CheckCircle2,
  XCircle,
  ThermometerSun,
  AlertTriangle,
  Disc,
  ThumbsUp,
  ThumbsDown,
  Microscope,
  Scale
} from 'lucide-react';
import StorytellingWidget from '@/components/StorytellingWidget';
import { ImageCredit } from '@/components/ImageCredit';

export const metadata: Metadata = {
  title: 'เจาะลึกวิศวกรรมเบรก Carbon Ceramic (CCB) นวัตกรรมหยุดโลกที่ EV ตัวแรงต้องมี | EVSELECT',
  description: 'บทความเจาะลึกทางวิศวกรรมระดับ Expert ทำความเข้าใจกระบวนการสร้าง วัสดุศาสตร์ และเหตุผลที่ Carbon Ceramic Brakes (CCB) ถึงเป็นออปชันหลักแสนที่จำเป็นสำหรับ EV น้ำหนัก 2 ตัน+',
  keywords: [
    'เบรกคาร์บอนเซรามิก',
    'Carbon Ceramic Brakes',
    'เบรกแต่ง EV',
    'Tesla Model 3 Performance',
    'เบรกจานคาร์บอน',
    'อัปเกรดเบรก EV',
    'PCCB',
    'วัสดุศาสตร์เซรามิก'
  ],
  openGraph: {
    title: 'เจาะลึกวิศวกรรมเบรก Carbon Ceramic (CCB) นวัตกรรมหยุดโลกที่ EV ตัวแรงต้องมี | EVSELECT',
    description: 'บทความเจาะลึกทางวิศวกรรมระดับ Expert ทำความเข้าใจกระบวนการสร้าง วัสดุศาสตร์ และเหตุผลที่ Carbon Ceramic Brakes (CCB) ถึงเป็นออปชันหลักแสนที่จำเป็นสำหรับ EV น้ำหนัก 2 ตัน+',
    url: 'https://evselects.com/articles/ev-carbon-ceramic-brakes-guide',
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    images: [{
      url: '/images/articles/amg-carbon-ceramic-brake-gold.jpg',
      width: 1920,
      height: 1278,
      alt: 'ภาพถ่ายเบรก AMG Carbon Ceramic คาลิเปอร์สีทองและจานคาร์บอนเซรามิก'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'เจาะลึกวิศวกรรมเบรก Carbon Ceramic (CCB) | EVSELECT',
    description: 'นวัตกรรมหยุดโลกที่ EV ตัวแรงต้องมี พร้อมวิเคราะห์ความคุ้มค่าบนถนนเมืองไทย',
    images: ['/images/articles/amg-carbon-ceramic-brake-gold.jpg']
  }
};

export default function CarbonCeramicBrakesGuidePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white font-sans">
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lime-600 transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>กลับไปหน้ารวมบทความและคู่มือเทคนิค EV</span>
        </Link>
      </nav>

      <header className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
          <span className="bg-lime-50 text-lime-800 border border-lime-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
            <Disc className="w-3.5 h-3.5 text-lime-600" />
            Engineering &amp; Performance
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> 2 กันยายน 2569
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> ใช้เวลาอ่าน 15 นาที
          </span>
        </div>

        <h1 className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.18] tracking-tight">
          เจาะลึกวิศวกรรมเบรก Carbon Ceramic (CCB): นวัตกรรม &quot;หยุดโลก&quot; หลักแสนที่ EV สายสนามต้องมี
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
          เมื่อฟิสิกส์มวล 2 ตันปะทะกับอัตราเร่ง 0-100 ใน 3 วินาที นี่คือความท้าทายสูงสุดของระบบห้ามล้อ EVSELECT จะพาคุณดิ่งลึกลงไปในระดับ &quot;วัสดุศาสตร์&quot; ว่าทำไม Carbon Ceramic Brakes ถึงเป็นจิ๊กซอว์ชิ้นสุดท้ายที่ปลดล็อกขีดจำกัดของรถ EV สมรรถนะสูง
        </p>
      </header>

      <figure className="overflow-hidden rounded-3xl mb-3 border border-slate-200 bg-white shadow-sm">
        <Image
          src="/images/articles/amg-carbon-ceramic-brake-gold.jpg"
          alt="ภาพถ่ายเบรก AMG Carbon Ceramic คาลิเปอร์สีทองและจานคาร์บอนเซรามิกในงาน Geneva Motor Show"
          width={1920}
          height={1278}
          sizes="(min-width: 896px) 848px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          loading="eager"
          className="w-full h-auto"
        />
        <figcaption className="border-t border-slate-200 px-5 py-4 sm:px-6 sm:py-5">
          <p className="font-bold text-slate-900">AMG Carbon Ceramic</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            คาลิเปอร์สีทองและรายละเอียดผิวจานคาร์บอนเซรามิก · ภาพถ่ายจากงาน Geneva Motor Show ปี 2011
          </p>
        </figcaption>
      </figure>
      <ImageCredit
        author="Cheeni"
        source="https://commons.wikimedia.org/wiki/File:Amg_carbon_ceramic_brake_geneva_auto_show_2011.JPG"
        license="CC BY-SA 3.0"
        licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
        className="mb-12"
      />

      <div className="bg-slate-900 text-white border border-slate-800 p-8 rounded-3xl shadow-lg mb-12">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-lime-400">
          <Microscope className="w-6 h-6" />
          บทสรุปทางวิศวกรรม (Engineering Executive Summary)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-lime-400 font-bold">
              <ThermometerSun className="w-5 h-5" /> ทนทานความร้อนระดับวิกฤต
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              สลายพลังงานจลน์มหาศาลโดยไม่เสียรูปทรง จานเบรกสามารถแดงฉานด้วยอุณหภูมิระดับ 1,000°C ได้โดยที่แรงเสียดทาน (Coefficient of Friction) แทบไม่ลดลง ขจัดปัญหา Brake Fade โดยสมบูรณ์
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-lime-400 font-bold">
              <Scale className="w-5 h-5" /> ลด Unsprung Mass 50%
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              น้ำหนักจานเบรกที่เบาลงอย่างมีนัยสำคัญ ช่วยลดความเฉื่อยในการหมุน (Rotational Inertia) ทำให้ช่วงล่างตอบสนองต่อพื้นถนนได้ไวขึ้นอย่างชัดเจน
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-orange-400 font-bold">
              <AlertTriangle className="w-5 h-5" /> Operating Temperature
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              CCB ต้องการ &quot;อุณหภูมิทำงาน&quot; เพื่อให้ประสิทธิภาพการจับตัวสูงสุด การใช้งานในชีวิตประจำวันที่อุณหภูมิแวดล้อมต่ำ อาจต้องใช้ระยะเวลาในการวอร์มเบรก
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-lime-600 hover:prose-a:text-lime-700">
        
        <StorytellingWidget />

        <h2>ทำไม EV ถึงกระหายระบบเบรกขั้นสุด? (The EV Braking Paradox)</h2>
        <p>
          ตามหลักฟิสิกส์ การเคลื่อนที่ของรถยนต์จะสะสมพลังงานมหาศาลไว้ในตัวถัง โดยมี 2 ปัจจัยชี้ขาดคือ <strong>น้ำหนักตัวรถ (แทนด้วยตัวแปร m)</strong> และ <strong>ความเร็วในการวิ่ง (แทนด้วยตัวแปร v)</strong> เมื่อนำสองสิ่งนี้มามองในโลกของรถยนต์ไฟฟ้า เราจะพบความจริงที่น่าตกใจ:
          รถ EV อย่าง BYD Seal AWD หรือ Tesla Model 3 Performance แบกน้ำหนักตัวรถ (m) มากกว่ารถสันดาปในคลาสเดียวกันราวๆ 20-30% (จากแบตเตอรี่) ในขณะที่มันทำความเร็ว (v) ได้เร็วกว่าหลายเท่าตัวจาก Instant Torque และเมื่อความเร็ว (v) เพิ่มขึ้น พลังงานที่ระบบเบรกต้องแบกรับจะทวีคูณขึ้นอย่างมหาศาล ไม่ใช่แค่เพิ่มขึ้นทีละนิด
        </p>
        <p>
          เมื่อคุณเบรกฉุกเฉินจากความเร็ว 160 กม./ชม. บน Track Day พลังงานทั้งหมดนี้ต้องถูกสลายกลายเป็น <strong>&quot;ความร้อน&quot;</strong> ระบบ Regenerative Braking ผ่านมอเตอร์ไฟฟ้านั้นไม่เพียงพอสำหรับแรง G ระดับ Track-Level ภาระทั้งหมดจึงถูกโยนไปที่ระบบ Mechanical Brake อย่างหลีกเลี่ยงไม่ได้ หากคุณใช้จานเบรกเหล็กหล่อธรรมดา (Cast Iron) อุณหภูมิที่พุ่งปรี๊ดจะทำให้เรซินในผ้าเบรกเดือด เกิดก๊าซคั่นกลางระหว่างผ้าและจาน เกิดเป็นอาการที่เรียกว่า <strong>Brake Fade</strong> หรือ &quot;เบรกหาย&quot; ในที่สุด
        </p>

        <h2>วัสดุศาสตร์: กว่าจะมาเป็น Carbon Ceramic (C/SiC)</h2>
        <p>
          เรามักเรียกติดปากว่าเบรก &quot;คาร์บอนเซรามิก&quot; แต่วิทยาศาสตร์เบื้องหลังคือ <strong>Carbon fiber-reinforced Silicon Carbide (C/SiC)</strong> ซึ่งไม่ใช่เซรามิกแบบถ้วยชามเซรามิคทั่วไป
        </p>
        
        <div className="bg-slate-50 border-l-4 border-slate-300 p-6 rounded-r-2xl my-8">
          <h4 className="text-slate-800 mt-0 mb-3 font-bold">The Manufacturing Process (กระบวนการผลิตระดับ NASA)</h4>
          <ol className="text-sm md:text-base space-y-3 mb-0 text-slate-700">
            <li><strong>Preform:</strong> เส้นใยคาร์บอนไฟเบอร์สับละเอียด ถูกนำมาผสมกับฟีนอลิกเรซิน (Phenolic Resin) และขึ้นรูปเป็นแผ่นจานเบรกภายใต้แรงดันสูง</li>
            <li><strong>Pyrolysis (การไพโรไลซิส):</strong> นำแผ่นดิสก์ไปอบในเตาสุญญากาศที่อุณหภูมิ 1,000°C เพื่อเผาไหม้สารอินทรีย์ออกไป ทิ้งไว้เพียงโครงสร้างคาร์บอนรูพรุนที่แข็งแกร่ง (Carbon Skeleton)</li>
            <li><strong>Silicon Infiltration (การแทรกซึมซิลิกอน):</strong> นี่คือขั้นตอนชี้เป็นชี้ตาย จานเบรกจะถูกนำไปอบในเตาที่มีผงซิลิกอนบริสุทธิ์ที่อุณหภูมิสูงถึง <strong>1,700°C</strong> ซิลิกอนจะหลอมละลายและซึมเข้าไปในรูพรุนของคาร์บอน ทำปฏิกิริยาเคมีกลายเป็น <strong>Silicon Carbide (SiC)</strong> ซึ่งมีความแข็งแกร่งรองจากเพชร</li>
            <li><strong>Anti-Oxidation Coating:</strong> เคลือบผิวหน้าด้วยสารป้องกันการเกิดปฏิกิริยาออกซิเดชัน เพื่อป้องกันไม่ให้คาร์บอนระเหยเมื่อเจอความร้อนสูงจัด</li>
          </ol>
        </div>

        <p>
          ด้วยกระบวนการที่กินเวลาเกือบ 20 วันต่อ 1 รอบการผลิต และต้องใช้พลังงานความร้อนมหาศาล จึงไม่แปลกใจที่ราคาของจานเบรก CCB หนึ่งชุด (หน้า-หลัง) อาจมีราคาสูงถึง 300,000 - 500,000 บาท
        </p>

        <h2>เจาะลึก 3 สมรรถนะที่เปลี่ยนไปเมื่อใช้ CCB</h2>

        <h3>1. The Thermal Dynamics (การจัดการความร้อน)</h3>
        <p>
          จานเบรก C/SiC มีสัมประสิทธิ์การขยายตัวทางความร้อน (Thermal Expansion Coefficient) ที่ต่ำมาก หมายความว่าแม้จะถูกเผาจนแดงฉาน จานเบรกก็จะไม่คด ไม่งอ (Warping) และผิวสัมผัสจะยังคงความเรียบสนิท ผ้าเบรกจึงจับได้เต็มหน้าเสมอ นอกจากนี้ ตัววัสดุยังสามารถแผ่รังสีความร้อนออกสู่บรรยากาศรอบๆ ได้เร็วกว่าเหล็กหล่อ ช่วยให้เบรกเย็นตัวลงอย่างรวดเร็วเมื่อพ้นโค้ง
        </p>

        <h3>2. Unsprung Mass Reduction (วิศวกรรมช่วงล่าง)</h3>
        <p>
          น้ำหนักที่เบาลงประมาณ 50% เมื่อเทียบกับจานเบรกเหล็กหล่อขนาดเท่ากัน ไม่ได้ช่วยแค่ให้รถเบาลงรวมๆ 15-20 กิโลกรัม แต่นี่คือ <strong>&quot;Unsprung Mass&quot; (น้ำหนักใต้สปริง)</strong> และ <strong>&quot;Rotational Mass&quot; (น้ำหนักมวลหมุน)</strong>
        </p>
        <p>
          ในทางวิศวกรรมยานยนต์ การลดน้ำหนักใต้สปริง 1 กิโลกรัม ส่งผลต่อแฮนด์ลิ่งเท่ากับการลดน้ำหนักบนตัวถังรถ (Sprung Mass) ถึง 3-4 กิโลกรัม ล้อที่เบาลงจะขยับตามผิวถนนที่ขรุขระได้แนบสนิทขึ้น (โช้คอัพทำงานได้ง่ายขึ้น) และมวลหมุนที่น้อยลงช่วยให้รถมีอัตราเร่งตอนต้นที่ก้าวร้าวขึ้นอีกเล็กน้อย
        </p>

        {/* Pros and Cons with Deep Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 not-prose">
          <div className="bg-white border-2 border-lime-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center gap-3 text-lime-600 mb-6 border-b border-lime-50 pb-4">
              <ThumbsUp className="w-8 h-8" />
              <h4 className="font-bold text-xl m-0">The Superiority</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Zero Brake Fade (ไร้อาการเบรกเฟด)</strong>
                  <span className="text-sm">สัมประสิทธิ์แรงเสียดทานคงที่ แม้อุณหภูมิจานจะพุ่งทะลุ 800°C เหมาะกับการทำ Hot Lap ติดต่อกัน</span>
                </div>
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Suspension Fidelity (การตอบสนองช่วงล่าง)</strong>
                  <span className="text-sm">น้ำหนักใต้สปริงที่หายไป ปลดล็อกศักยภาพของโช้คอัพ (โดยเฉพาะพวก Ohlins DFV) ให้ทำงานได้เต็มประสิทธิภาพ</span>
                </div>
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-lime-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Lifespan &amp; Cleanliness (อายุการใช้งานยาวนาน)</strong>
                  <span className="text-sm">สำหรับการใช้งานบนถนน จานเบรก CCB อาจอยู่ได้นานกว่า 300,000 กม. และสร้างฝุ่นเบรก (Brake Dust) น้อยมาก ล้อแม็กฟอร์จของคุณจะสะอาดอยู่เสมอ</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-red-50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center gap-3 text-red-500 mb-6 border-b border-red-50 pb-4">
              <ThumbsDown className="w-8 h-8" />
              <h4 className="font-bold text-xl m-0">The Compromise</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-700">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Cold Bite Performance (ฟีลลิ่งตอนเบรกเย็น)</strong>
                  <span className="text-sm">นี่คือสิ่งที่ร้านเบรกไม่ได้บอกคุณ CCB หลายรุ่นมีสัมประสิทธิ์แรงเสียดทานต่ำเมื่ออุณหภูมิห้อง ในการขับขี่ช่วงเช้า หรือท่ามกลางสายฝน คุณอาจรู้สึกว่าเบรก &quot;ทื่อ&quot; กว่าเบรกเหล็กหล่อ จนกว่าคุณจะเลียเบรกให้เกิดอุณหภูมิการทำงาน (Operating Window)</span>
                </div>
              </li>
              <li className="flex gap-3 text-slate-700">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">NVH Issues (ปัญหาเสียงรบกวน)</strong>
                  <span className="text-sm">โครงสร้างที่แข็งดุจเพชร มักสร้าง Resonance ที่ก่อให้เกิดเสียง Squeal (เสียงอี๊ดดดด) เมื่อเหยียบเบรกเบาๆ ในความเร็วต่ำ เช่น ตอนกำลังถอยจอด</span>
                </div>
              </li>
              <li className="flex gap-3 text-slate-700">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 mb-1">Fragility (ความเปราะบางต่อแรงกระแทก)</strong>
                  <span className="text-sm">ถึงมันจะแข็งมาก แต่มัน <strong>&quot;เปราะ&quot;</strong> (Brittle) หากช่างเปลี่ยนล้อแม็กทำล้อหล่นใส่ขอบจานเบรก CCB มันสามารถบิ่นแตกได้ทันที และไม่สามารถซ่อมหรือเจียรจานได้ ต้องเปลี่ยนใบใหม่สถานเดียว (ใบละเฉียดแสนบาท)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h2>Verdict: การตัดสินใจสำหรับ EV ภาคสนาม</h2>
        <p>
          สำหรับเจ้าของรถ EV ที่ใช้รถรับส่งลูก ขับรถติดๆ ในเมือง การใส่จาน Carbon Ceramic คือ <strong>&quot;Overkill&quot;</strong> และอาจทำให้คุณรำคาญจากเสียงเบรก หรือหงุดหงิดกับเบรกที่จับไม่ค่อยอยู่ตอนเช้าๆ การอัปเกรดเพียงแค่ผ้าเบรกเซรามิก (Ceramic Pads) และเปลี่ยนน้ำมันเบรก Dot 5.1 ร่วมกับจานเหล็กหล่อแต่งดีๆ ก็เหลือเฟือแล้ว
        </p>
        <p>
          <strong>แต่...</strong> หากเป้าหมายของคุณคือการสร้าง &quot;Track Weapon&quot; ด้วยรถอย่าง Tesla Model 3 Performance หรือตั้งใจจะกดสุดไมล์กับ Zeekr 001 FR ระบบเบรก Carbon Ceramic ไม่ใช่ออปชันเสริมความหล่อ แต่มันคือ <strong>&quot;ใบรับประกันชีวิต&quot;</strong> ของคุณ เมื่อคุณต้องการควบคุมมวลน้ำหนัก 2 ตันให้หยุดสนิทจากความเร็วระดับซูเปอร์คาร์ CCB คือคำตอบเดียวที่ไม่ประนีประนอมในโลกแห่งฟิสิกส์ยานยนต์
        </p>
      </div>
    </article>
  );
}
