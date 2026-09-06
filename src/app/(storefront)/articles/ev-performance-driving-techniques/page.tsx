import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Car,
  Battery,
  AlertTriangle,
  Lightbulb,
  Gauge,
  Footprints,
  Gamepad2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'สอนเทคนิคขับรถ EV แบบเข้าใจง่าย: ฉบับนักเล่าเรื่อง (เหมาะกับทุกคน) | EVSELECT',
  description: 'เรียนรู้วิธีขับรถยนต์ไฟฟ้าให้ปลอดภัยและสนุกสุดๆ ผ่านเรื่องราวของน้อง EV น้ำหนัก 2 ตัน, งบประมาณกาวติดถนน และวิชาตัวเบาของนินจา เข้าใจง่ายแม้อายุ 12 ขวบ!',
};

export default function EVPerformanceStoryPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-lime-600 transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-slate-400 group-hover:text-lime-600" />
          <span>กลับไปหน้ารวมบทความ</span>
        </Link>
      </nav>

      {/* 2. Header */}
      <header className="space-y-6 mb-12 text-center">
        <div className="flex justify-center gap-2 text-xs font-semibold mb-4">
          <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Gamepad2 className="w-4 h-4" /> Story Mode (ฉบับเข้าใจง่าย)
          </span>
          <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4" /> สำหรับทุกคน (อายุ 12+)
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          ขับรถ EV อย่างไรให้ปลอดภัย?<br />
          <span className="text-lime-600">ฉบับการ์ตูนนิทาน เข้าใจง่ายใน 5 นาที 🚗⚡</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          ลืมสมการฟิสิกส์ปวดหัวไปได้เลย! วันนี้เราจะมาเรียนรู้วิธีการควบคุมรถยนต์ไฟฟ้า (EV) ผ่านเรื่องราวสนุกๆ ที่จะทำให้คุณและเด็กๆ เข้าใจว่า "ทำไมรถ EV ถึงขับไม่เหมือนรถน้ำมัน"
        </p>
      </header>

      {/* 3. Story Chapters */}
      <div className="space-y-16">
        
        {/* Chapter 1 */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-200 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-lime-500 text-white flex items-center justify-center text-xl">1</span>
                ความลับของ "ตุ๊กตาล้มลุก"
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                รถ EV เหมือนกับ <strong>"ตุ๊กตาล้มลุก"</strong> ครับ! ถึงแม้ตัวจะหนักมาก (ประมาณ 2 ตัน หรือเท่ากับช้างเอเชียตัวเล็กๆ 🐘) แต่เพราะมีก้อนแบตเตอรี่แบนๆ หนักๆ ซ่อนอยู่ที่พื้นรถ (เหมือนพุงของตุ๊กตาล้มลุก) 
              </p>
              <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                ผลลัพธ์คือ: <span className="text-lime-700">มันเกาะถนนหนึบมาก! โค้งแรงแค่ไหนก็ไม่ค่อยเอียง</span> แต่ข้อควรระวังคือ ถ้ารถเสียหลักขึ้นมา ด้วยน้ำหนักที่เยอะมาก มันจะหยุดยากกว่ารถเบาๆ ครับ
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Infographic Visual 1 */}
              <div className="relative w-full max-w-xs aspect-square bg-white rounded-2xl shadow-xl border-4 border-slate-100 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-32 h-24 bg-sky-400 rounded-t-3xl mx-auto relative overflow-hidden shadow-inner flex items-end justify-center pb-2">
                    <span className="text-white font-black text-xl">รถ EV</span>
                  </div>
                  <div className="w-40 h-8 bg-lime-500 rounded-b-xl mx-auto relative flex items-center justify-center -mt-1 shadow-md">
                    <Battery className="w-5 h-5 text-white" />
                    <span className="text-white text-xs font-bold ml-1">แบตเตอรี่ (หนักมาก)</span>
                  </div>
                  <div className="flex justify-between w-32 mx-auto -mt-3">
                    <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-slate-300"></div>
                    <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-slate-300"></div>
                  </div>
                  <p className="mt-4 text-xs text-slate-500 font-bold">น้ำหนักอยู่ที่พื้น = จุดศูนย์ถ่วงต่ำ (ไม่พลิกคว่ำง่าย)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-50 -ml-20 -mb-20 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl">2</span>
                งบประมาณ "กาวติดถนน" (Grip Budget)
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                ลองจินตนาการว่า ยางรถยนต์ทั้ง 4 เส้นมี <strong>แต้มกาวติดถนนอยู่ 100 แต้ม</strong> 🪙
              </p>
              <ul className="space-y-3 text-slate-700 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">▶</span> ถ้าคุณเหยียบเบรกเต็มแรง คุณใช้ไปแล้ว 100 แต้ม (เหลือแต้มเลี้ยว = 0) รถจะเลี้ยวไม่เข้า!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">▶</span> ถ้าคุณกำลังหักพวงมาลัยเลี้ยวโค้งอย่างแรง คุณใช้แต้มกาวไปแล้ว 90 แต้ม... คุณจะเหลือแต้มให้เบรกแค่ 10 แต้มเท่านั้น!
                </li>
              </ul>
              <p className="text-slate-700 text-lg leading-relaxed font-semibold text-rose-600">
                กฎเหล็ก: อย่าทำ 2 อย่าง (เลี้ยวหนัก + เบรกแรง) พร้อมกันเด็ดขาด! ไม่งั้นแต้มกาวจะหมดและรถจะลื่นไถลทันที
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Infographic Visual 2 */}
              <div className="relative w-full max-w-xs bg-white rounded-2xl shadow-xl border-4 border-slate-100 p-6 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full border-4 border-slate-200 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-sky-50 rounded-full"></div>
                  {/* Vector Arrow representing Grip */}
                  <div className="w-1 h-20 bg-sky-500 absolute bottom-1/2 origin-bottom transform rotate-45 rounded-full"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 bg-sky-500 rounded-full shadow-lg"></div>
                  <div className="absolute text-center">
                    <span className="block text-2xl font-black text-slate-900">100</span>
                    <span className="text-xs text-slate-500 font-bold">แต้มกาว</span>
                  </div>
                </div>
                <div className="mt-6 w-full space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>เลี้ยว (70 แต้ม)</span>
                    <span>เบรก (30 แต้ม)</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-amber-400 w-[70%]"></div>
                    <div className="h-full bg-rose-400 w-[30%]"></div>
                  </div>
                  <div className="text-center text-[10px] text-slate-400 mt-1">แบ่งงบประมาณให้ดี! ห้ามใช้เกินขอบเขต</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3 */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl">3</span>
                กับดัก "ยกเท้า = เบรก" (One-Pedal)
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                รถ EV มักจะมีระบบ <strong>One-Pedal</strong> (ยกคันเร่งแล้วรถหน่วงเหมือนเหยียบเบรกเพื่อชาร์จไฟกลับ) ระบบนี้ดีมากตอนรถติด แต่เป็น <strong>"ศัตรูตัวร้าย"</strong> ตอนอยู่ในโค้งที่ขับเร็ว!
              </p>
              <p className="text-slate-700 text-lg leading-relaxed bg-amber-100 p-4 rounded-xl border border-amber-200">
                <AlertTriangle className="inline-block w-6 h-6 text-amber-600 mb-1 mr-1" />
                <strong>ลองนึกภาพ:</strong> คุณกำลังวิ่งตีโค้งมาเร็วๆ แล้วตกใจ "ยกเท้าออกจากคันเร่งหมดเลย" รถ EV จะทำการ <strong>"ดึงเบรกที่ล้อหลังทันที!"</strong> <br/><br/>
                จำเรื่องแต้มกาวได้ไหมครับ? ล้อหลังที่กำลังใช้แต้มไปกับการเลี้ยว พอโดนสั่งให้เบรกแรงๆ แต้มกาวจะหมดทันที ทำให้ <strong>"ท้ายปัด หรือ รถหมุน"</strong> ได้เลยครับ 🌪️
              </p>
              <p className="text-slate-700 mt-4 text-lg font-bold text-lime-700">
                ✅ วิธีแก้: เวลาขับทางไกลคดเคี้ยว หรือขับเร็วๆ แนะนำให้ปรับ Regen เบรกเป็นระดับ "ต่ำ" (Low) ครับ
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
               {/* Infographic Visual 3 */}
               <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl border-4 border-slate-100 p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full flex justify-center gap-4">
                    <div className="flex flex-col items-center text-center opacity-50">
                      <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-slate-300 mb-2">
                        <Footprints className="w-8 h-8 text-slate-400" />
                      </div>
                      <span className="text-xs font-bold text-slate-500">เหยียบคันเร่ง<br/>(ปกติ)</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-300 mt-5" />
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center border-2 border-rose-400 mb-2 shadow-lg animate-bounce">
                        <Footprints className="w-8 h-8 text-rose-500" />
                      </div>
                      <span className="text-xs font-bold text-rose-600">ยกคันเร่งกะทันหัน!<br/>ในโค้ง</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-slate-200 my-2"></div>
                  
                  <div className="flex items-center justify-between w-full px-4">
                    <span className="text-sm font-bold text-slate-700">ล้อหลังถูกเบรกแรง (Regen)</span>
                    <span className="text-2xl">⚡🛞</span>
                  </div>
                  <div className="flex items-center justify-between w-full px-4 text-rose-500">
                    <span className="text-sm font-bold">แต้มกาวติดถนนหมด! ท้ายปัด!</span>
                    <span className="text-2xl">💥🌪️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4 */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl">4</span>
                วิชาตัวเบาของนินจา (Trail Braking)
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                การขับรถ EV ให้สมูทและเกาะถนนที่สุด ต้องใช้ <strong>"วิชาค่อยๆ ถอนเบรก" (Trail Braking)</strong>
              </p>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                เวลาเราเบรก น้ำหนักรถจะเทไปข้างหน้า (เหมือนเวลาเราเบรกจักรยานแล้วหน้าทิ่ม) น้ำหนักที่กดลงล้อหน้านี้แหละคือ <strong>"ตัวช่วยเพิ่มกาวให้ล้อหน้า"</strong> ทำให้รถเลี้ยวได้คมกริบ!
              </p>
              <ul className="space-y-3 text-slate-700 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500">✅</span> <strong>วิธีทำ:</strong> เบรกหนักๆ ในทางตรง พอเริ่มหักพวงมาลัยเข้าโค้ง ให้ค่อยๆ คลายน้ำหนักเท้าออกจากแป้นเบรกเบาๆ (เหมือนนินจาย่องเบา) ยิ่งหักพวงมาลัยเยอะ ยิ่งต้องถอนเบรกเยอะ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500">❌</span> <strong>ห้ามทำ:</strong> ปล่อยเบรกพรวดเดียวหมด! เพราะน้ำหนักจะเด้งกลับไปข้างหลัง ล้อหน้าจะเบาหวิว แล้วรถจะเลี้ยวไม่ไป (หน้าดื้อ) ครับ
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Infographic Visual 4 */}
              <div className="relative w-full max-w-xs bg-white rounded-2xl shadow-xl border-4 border-slate-100 p-6">
                <h3 className="text-center font-bold text-slate-800 mb-6">ทริคการเบรกขั้นเทพ 🥷</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">1</div>
                    <div>
                      <div className="text-sm font-bold text-slate-700">ทางตรงก่อนถึงโค้ง</div>
                      <div className="text-xs text-slate-500">เหยียบเบรกเต็มที่ 🛑</div>
                    </div>
                  </div>
                  
                  <div className="w-0.5 h-6 bg-slate-200 ml-6"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">2</div>
                    <div>
                      <div className="text-sm font-bold text-slate-700">เริ่มหักพวงมาลัยเลี้ยว</div>
                      <div className="text-xs text-slate-500">ค่อยๆ ถอนเท้าจากเบรกเบาๆ 🦶📉</div>
                    </div>
                  </div>
                  
                  <div className="w-0.5 h-6 bg-slate-200 ml-6"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">3</div>
                    <div>
                      <div className="text-sm font-bold text-slate-700">กลางโค้ง (Apex)</div>
                      <div className="text-xs text-slate-500">ปล่อยเบรกหมด แตะคันเร่งส่ง 🚀</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Final Verdict */}
      <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 text-center shadow-xl">
        <h3 className="text-2xl font-black text-lime-400 mb-4">สรุปสั้นๆ เอาไปใช้ได้เลย!</h3>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
          "รถ EV หนักแต่จุดศูนย์ถ่วงต่ำ เลี้ยวได้ดีเยี่ยม แต่ห้ามเบรกแรงหรือยกคันเร่งกะทันหันกลางโค้ง ให้ใช้การค่อยๆ ถอนเบรก (Trail Braking) รถของคุณจะนิ่งและเกาะถนนเหมือนรถแข่งเลยล่ะ!"
        </p>
        <Link href="/articles" className="inline-block bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors">
          อ่านบทความอื่นๆ ต่อ
        </Link>
      </div>

    </article>
  );
}
