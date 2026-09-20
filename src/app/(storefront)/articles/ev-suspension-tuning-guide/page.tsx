import Link from 'next/link';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  BookOpen,
  Settings,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import EvDamperInfographicWrapper from '@/components/EvDamperInfographicWrapper';


export const metadata = {
  alternates: { canonical: '/articles/ev-suspension-tuning-guide' },
  title: 'รถ EV เด้ง กระด้าง หรือโยน เริ่มตรวจอะไรก่อนเปลี่ยนโช้ค? | EVSELECT',
  description: 'แยกอาการช่วงล่าง EV ก่อนเลือกโช้คสตรัทปรับเกลียว เข้าใจ Bump และ Rebound พร้อมตัวอย่างช่องปรับ KW V3, TEIN FLEX Z, BC Racing ER และ Öhlins DFV',
  openGraph: {
    title: 'รถ EV เด้ง กระด้าง หรือโยน เริ่มตรวจอะไรก่อนเปลี่ยนโช้ค? | EVSELECT',
    description: 'แยกอาการและเตรียมข้อมูลให้ร้าน ก่อนเลือกแบรนด์หรือหมุนปุ่มปรับโช้ค',
    images: [
      {
      url: '/images/articles/damper_tuning_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ภาพประกอบบทความทำความเข้าใจช่วงล่าง EV',
      },
    ],
    type: 'article',
  },
};

export default function EvSuspensionTuningGuidePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-800">
      {/* 1. Breadcrumbs & Back */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-lime-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> กลับไปหน้ารวมรีวิวและบทความ
        </Link>
      </nav>

      {/* 2. Article Header & Badges */}
      <header className="space-y-6 mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-400">
          <span className="bg-lime-500/10 text-lime-400 border border-lime-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> คู่มือก่อนเปลี่ยนโช้ค
          </span>
          <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full flex items-center gap-1.5">
             <Settings className="w-3.5 h-3.5" /> ช่วงล่างและการควบคุมรถ
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <CalendarDays className="w-3.5 h-3.5" /> 3 กันยายน 2569
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5" /> ใช้เวลาอ่านประมาณ 7 นาที
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-tight text-slate-950 tracking-tight">
          รถ EV เด้ง กระด้าง หรือโยน <span className="text-lime-800">เริ่มตรวจอะไรก่อนเปลี่ยนโช้ค?</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
          อาการคล้ายกันอาจมาจากคนละสาเหตุ ก่อนซื้อโช้คสตรัทปรับเกลียว ลองแยกสิ่งที่รถกำลังบอก แล้วดูตัวอย่างจาก KW, TEIN, BC Racing และ Öhlins ว่าปุ่มปรับของแต่ละรุ่นทำอะไรได้จริง
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 pb-2">
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
            <ShieldCheck className="w-6 h-6 text-lime-400" />
          </div>
          <div>
            <div className="font-semibold text-slate-900">เรียบเรียงโดย <Link href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">EVSELECT</Link></div>
            <div className="text-sm text-slate-500">อธิบายหลักการและเอกสารผู้ผลิต ไม่ใช่ผลทดสอบรถ</div>
          </div>
        </div>
      </header>
      <p data-contextual-reading className="mb-8 text-sm leading-relaxed text-slate-600">ถ้ากำลังสงสัยว่าปุ่มบนโช้คปรับอะไร ลองดู <Link href="/articles/ev-damper-tuning-bump-rebound-guide#explorer" className="font-semibold text-lime-800 underline underline-offset-4">ความต่างของโช้คปรับ 1-way, 2-way และ 3-way</Link> ก่อนหมุนตามคนอื่น เพราะจำนวนปุ่มและหน้าที่ของแต่ละปุ่มไม่เหมือนกันทุกรุ่น</p>

      {/* 3. Article Body */}
      <div className="space-y-6 text-base leading-relaxed">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-10 flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-white mt-0 mb-2">ทำไมรถ EV ถึงมีปัญหาช่วงล่าง &apos;ย้วย&apos; หรือ &apos;กระด้าง&apos;?</h2>
            <p className="text-zinc-300 text-base mb-0 leading-relaxed">
              ต้องแยกอาการก่อน: แรงกระแทกครั้งเดียว การเด้งต่อหลังผ่านเนิน และตัวรถโยน ไม่ได้มีสาเหตุเดียวกัน ตรวจแรงดันและสภาพยาง น้ำหนักบรรทุก ระยะยุบ จุดยึด และสภาพโช้คก่อน ไม่ควรสรุปว่าแบตเตอรี่หนักจนโช้คโรงงานรับไม่ไหว
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-950">รู้ก่อนว่าปุ่มปรับคุมอะไร และอะไรที่ปุ่มแก้ไม่ได้</h2>
        <p>
          แรงหน่วงต้องเข้ากับสปริง ระยะทำงาน ยาง และการใช้งาน ปุ่มบนโช้คไม่ได้แก้ยางผิดสเปก ระยะยุบที่เหลือน้อย หรือชิ้นส่วนติดตั้งผิดได้ทุกกรณี ส่วนหน้าที่พื้นฐานแบ่งได้เป็น:
        </p>
        <ul className="list-disc space-y-3 pl-6">
          <li><strong>Bump / Compression:</strong> แรงหน่วงฝั่งยุบ เช่น ตอนล้อขึ้นขอบนูนหรือตัวรถยุบลง ไม่ใช่คำสั่งเพิ่มความแข็งของสปริงโดยตรง</li>
          <li><strong>Rebound:</strong> แรงหน่วงฝั่งยืด ต้องให้ล้อและตัวรถคืนตัวได้เหมาะสม เพิ่มมากเกินไปอาจทำให้คืนตัวไม่ทันเมื่อเจอทางเป็นคลื่นต่อเนื่อง</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-950">ลองแยกอาการ แล้วอ่านตัวอย่างช่องปรับจากผู้ผลิต</h2>
        <p>
          เลือกสภาพถนนหรือรุ่นโช้คด้านล่างเพื่อดูว่าควรสังเกตอะไร และข้อมูลไหนยืนยันได้จากผู้ผลิต ไม่มีสูตรจำนวนคลิกหรือแบรนด์เดียวที่ตอบแทนการตรวจรถจริงได้
        </p>

        {/* --- INTERACTIVE INFOGRAPHIC COMPONENT --- */}
        <EvDamperInfographicWrapper />
        {/* --- END INFOGRAPHIC --- */}



        <h2 className="text-2xl font-bold text-slate-950">ก่อนซื้อ ให้ตอบโจทย์ของรถคันนี้ให้ชัด</h2>
        <p>
          บอกรุ่น ปี รุ่นย่อย อาการที่อยากแก้ ถนนที่เจอ และความสบายที่ยอมแลกได้ แล้วขอรหัสชุด สเปกสปริง คู่มือติดตั้ง และค่าตั้งต้นจากผู้ขาย อย่าเลือกจากชื่อแบรนด์หรือคำว่า &quot;ใส่แล้วจบ&quot; อย่างเดียว
        </p>
        <p>
          <strong>ถ้าจะเริ่มปรับ:</strong> ใช้คู่มือของรหัสชุดนั้น จดค่าตั้งเดิม เปลี่ยนทีละตัวแปรภายในขอบเขตผู้ผลิต และหยุดตรวจเมื่อมีเสียงผิดปกติ รถดึง หรือควบคุมได้แย่ลง อ่าน <Link href="/articles/ev-damper-tuning-bump-rebound-guide#baseline" className="font-semibold text-lime-800 underline underline-offset-4">วิธีเก็บค่าตั้งต้นและบันทึกผลการปรับโช้ค</Link> ก่อนทดลองจริง
        </p>
      </div>

    </article>
  );
}
