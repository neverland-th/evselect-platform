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
  title: 'โช้คเดิมเอาไม่อยู่? คู่มือจูนโช้ค EV ฉบับสมบูรณ์ (KW, Öhlins, BC, H-Drive) | EVSELECT',
  description: 'รถ EV แบตหนักทำช่วงล่างย้วย? เจาะลึกวิธีจูน Bump & Rebound พร้อมเปรียบเทียบโช้ค 4 แบรนด์ดัง KW, Öhlins, BC Racing และ H-Drive เพื่อการขับขี่ที่หนึบและนุ่มนวลที่สุดสำหรับถนนเมืองไทย',
  openGraph: {
    title: 'คู่มือจูนโช้ค EV แก้อาการย้วย | EVSELECT',
    description: 'เจาะลึกวิธีแก้ช่วงล่าง EV ย้วย ด้วยการจูน Bump & Rebound พร้อมเปรียบเทียบโช้คอัพ 4 แบรนด์ดัง KW, Öhlins, BC Racing และ H-Drive',
    images: [
      {
      url: '/images/articles/damper_tuning_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'เปรียบเทียบโช้คอัพสำหรับรถ EV KW Ohlins BC Racing H Drive',
      },
    ],
    type: 'article',
  },
};

export default function EvSuspensionTuningGuidePage() {
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
            <BookOpen className="w-3.5 h-3.5" /> Accessory Guide
          </span>
          <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full flex items-center gap-1.5">
             <Settings className="w-3.5 h-3.5" /> Suspension & Handling
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <CalendarDays className="w-3.5 h-3.5" /> 3 กันยายน 2569
          </span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5" /> ใช้เวลาอ่าน 8 นาที
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-tight text-white tracking-tight">
          โช้คเดิมเอาไม่อยู่? <span className="text-lime-400">คู่มือจูนโช้ค EV ฉบับสมบูรณ์</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-3xl">
          เจาะลึกวิธีแก้อาการ &quot;ย้วย&quot; และ &quot;กระด้าง&quot; ในรถยนต์ไฟฟ้า ทำไมแบตเตอรี่หนักถึงทำให้ช่วงล่างทำงานหนัก? พร้อมเปรียบเทียบโช้คอัพ 4 แบรนด์ดังระดับโลก 
          KW, Öhlins, BC Racing และ H-Drive เพื่อหาตัวจบสำหรับคุณ
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 pb-2">
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
            <ShieldCheck className="w-6 h-6 text-lime-400" />
          </div>
          <div>
            <div className="font-semibold text-zinc-100">ทีมวิศวกรรมช่วงล่าง EVSELECT</div>
            <div className="text-sm text-zinc-500">Thailand EV Research & Fitment</div>
          </div>
        </div>
      </header>

      {/* 3. Article Body */}
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-lime-400 hover:prose-a:text-lime-300 prose-img:rounded-2xl prose-img:border prose-img:border-zinc-800">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-10 flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-white mt-0 mb-2">ทำไมรถ EV ถึงมีปัญหาช่วงล่าง &apos;ย้วย&apos; หรือ &apos;กระด้าง&apos;?</h2>
            <p className="text-zinc-300 text-base mb-0 leading-relaxed">
              ปัญหาหลักของรถยนต์ไฟฟ้า (EV) คือ <strong>น้ำหนักแบตเตอรี่ (Mass)</strong> ที่ทำให้รถหนักกว่ารถน้ำมันขนาดเดียวกันถึง 300-500 กิโลกรัม 
              เมื่อรถที่มีน้ำหนักมากเจอถนนเมืองไทยที่มีคอสะพานชันและหลุมบ่อ พลังงานจลน์ (Kinetic Energy) จะถูกส่งไปยังโช้คเดิมโรงงานมากเกินไป 
              ทำให้เกิดอาการ &quot;ย้วย&quot; (สปริงดีดตัวแรง) หรือ &quot;กระด้าง&quot; (โช้คยัน)
            </p>
          </div>
        </div>

        <h2>ความเข้าใจผิด: ซื้อโช้คแพง แต่จบไม่สวยเพราะ &apos;จูนไม่เป็น&apos;</h2>
        <p>
          การเปลี่ยนโช้คเป็นแบรนด์ระดับโลก จะไม่เกิดประโยชน์สูงสุดหากไม่ได้ตั้งค่าให้เข้ากับสไตล์การขับขี่ หัวใจสำคัญคือการปรับตั้งสองค่านี้ให้สอดคล้องกัน:
        </p>
        <ul>
          <li><strong>Bump (จังหวะยุบ):</strong> คุมความเร็วตอนโช้คยุบตัวเมื่อเจอหลุม ถ้าแข็งไปรถจะกระด้าง ถ้านิ่มไปรถจะยวบ</li>
          <li><strong>Rebound (จังหวะคืนตัว):</strong> คุมความเร็วตอนโช้คยืดตัว ถ้าตั้งผิด รถจะเด้งเป็นเรือ หรือดึงรั้งจนนั่งไม่สบาย</li>
        </ul>

        <h2>เปรียบเทียบ 4 แบรนด์โช้คยอดฮิตสำหรับรถยนต์ไฟฟ้า</h2>
        <p>
          แบรนด์โช้คอัพแต่ละค่ายมีปรัชญาการออกแบบและวิศวกรรมภายในที่แตกต่างกัน ลองเล่น Interactive Infographic ด้านล่างนี้เพื่อเปรียบเทียบสเปค 
          และค้นหาโช้คที่เหมาะกับสไตล์การขับขี่ของคุณที่สุด
        </p>

        {/* --- INTERACTIVE INFOGRAPHIC COMPONENT --- */}
        <EvDamperInfographicWrapper />
        {/* --- END INFOGRAPHIC --- */}



        <h2>สรุปคำแนะนำจาก EVSELECT</h2>
        <p>
          ก่อนเลือกซื้อโช้ค ให้ตอบตัวเองก่อนว่า <em>&quot;เราขับรถแบบไหน?&quot;</em> 
          ถ้าเน้นครอบครัว <strong>Öhlins</strong> คือคำตอบ ถ้าเน้นขับเร็วทางไกล <strong>KW</strong> จะตอบโจทย์ 
          ถ้าเน้นจัดทรงสั่งได้ดั่งใจ <strong>BC Racing</strong> ทำได้ดีที่สุด และถ้าเน้นแก้ปัญหาในงบจำกัด <strong>H-Drive</strong> คือตัวเลือกที่คุ้มค่า! 
        </p>
        <p>
          <strong>และที่สำคัญที่สุด:</strong> เลือกร้านติดตั้งที่มีประสบการณ์กับรถ EV โดยเฉพาะ และมีความชำนาญในการปรับจูน Bump/Rebound ให้เหมาะกับน้ำหนักรถ 
          เพราะสำหรับ EVSELECT... <em>&quot;ใส่ของแพงยังไม่พอ ต้องใช้แล้วดีด้วย!&quot;</em>
        </p>
      </div>

    </article>
  );
}
