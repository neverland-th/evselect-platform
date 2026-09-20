import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Battery,
  AlertTriangle,
  Lightbulb,
  Footprints,
  Gamepad2
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/ev-performance-driving-techniques' },
  title: 'ขับ EV ให้มั่นใจ: เข้าใจการยึดเกาะ Regen และการเบรกก่อนเข้าโค้ง | EVSELECT',
  description: 'เข้าใจการยึดเกาะ น้ำหนักรถ และข้อจำกัดของ Regen ก่อนขับ EV พร้อมแยกการใช้รถบนถนนออกจากเทคนิคที่ควรฝึกกับผู้สอนในสนาม',
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
            <Gamepad2 className="w-4 h-4" /> อธิบายด้วยภาพ
          </span>
          <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4" /> สำหรับคนเริ่มใช้ EV
          </span>
        </div>

        <h1 className="text-3xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-tight">
          ขับ EV ให้มั่นใจ<br />
          <span className="text-lime-600">เข้าใจรถก่อนลองขีดจำกัด</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          อัตราเร่งที่ไวไม่ได้แปลว่าจะหยุดหรือเข้าโค้งได้ดีกว่าเสมอ มาทำความเข้าใจการยึดเกาะ Regen และการใช้เบรก โดยแยกเรื่องที่ใช้บนถนนออกจากทักษะที่ควรฝึกกับผู้สอนในสนาม
        </p>
      </header>
      <p data-contextual-reading className="mb-8 text-sm leading-relaxed text-slate-600">ก่อนคิดเรื่องขับให้เร็วขึ้น ควรเข้าใจ <Link href="/articles/ev-carbon-ceramic-brakes-guide#energy" className="font-semibold text-lime-800 underline underline-offset-4">ความเร็วและน้ำหนักเปลี่ยนพลังงานที่เบรกต้องรับอย่างไร</Link> และฝึกเทคนิคการควบคุมรถในสนามหรือพื้นที่ฝึกที่มีผู้ดูแล ไม่ทดลองขีดจำกัดบนถนนสาธารณะ</p>

      {/* 3. Story Chapters */}
      <div className="space-y-16">
        
        {/* Chapter 1 */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-200 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 shrink-0 rounded-full bg-lime-500 text-white flex items-center justify-center text-xl">1</span>
                จุดศูนย์ถ่วงต่ำ ไม่ได้แปลว่าเสียหลักไม่ได้
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                EV หลายรุ่นวางแบตเตอรี่ไว้ใต้ห้องโดยสาร ซึ่งช่วยให้มวลส่วนหนึ่งอยู่ต่ำ แต่ความนิ่งของรถยังขึ้นกับยาง ช่วงล่าง น้ำหนักบรรทุก ความเร็ว และสภาพถนน ไม่ใช่ตำแหน่งแบตเตอรี่อย่างเดียว
              </p>
              <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                อย่าใช้ความรู้สึกว่า <span className="text-lime-700">“รถนิ่งดี” เป็นเหตุผลให้เพิ่มความเร็ว</span> น้ำหนักกับความเร็วมีผลต่อพลังงานที่ต้องจัดการ แต่ระยะหยุดจริงยังขึ้นกับการยึดเกาะและระบบเบรกด้วย
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
                    <span className="text-white text-xs font-bold ml-1">แบตเตอรี่ใต้พื้น</span>
                  </div>
                  <div className="flex justify-between w-32 mx-auto -mt-3">
                    <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-slate-300"></div>
                    <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-slate-300"></div>
                  </div>
                  <p className="mt-4 text-xs text-slate-500 font-bold">ภาพแนวคิด ไม่ใช่การรับรองการทรงตัวของรถทุกรุ่น</p>
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
                <span className="w-10 h-10 shrink-0 rounded-full bg-sky-500 text-white flex items-center justify-center text-xl">2</span>
                ยางต้องรับทั้งแรงเลี้ยวและแรงเบรก
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                การยึดเกาะมีขีดจำกัด เมื่อยางต้องรับแรงเบรกกับแรงเลี้ยวพร้อมกัน ต้องมองแรงทั้งสองร่วมกัน ภาพข้างนี้เป็นเพียง<strong>ภาพอธิบายแนวคิด ไม่ใช่มาตรวัดหรือสูตรคำนวณ</strong>
              </p>
              <ul className="space-y-3 text-slate-700 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">▶</span> ถ้าวางแผนได้ ให้ลดความเร็วก่อนเข้าโค้ง และขับด้วยความเร็วที่มองเห็นทางหยุดได้อย่างปลอดภัย
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">▶</span> อย่าเข้าใจว่าการเบรกฉุกเฉินทำให้เลี้ยวไม่ได้เสมอไป ระบบ ABS ถูกออกแบบให้ลดการล็อกของล้อและช่วยคงการบังคับเลี้ยว แต่ไม่สามารถเพิ่มการยึดเกาะได้ไม่จำกัด
                </li>
              </ul>
              <p className="text-slate-700 text-lg leading-relaxed font-semibold text-rose-600">
                เมื่อเกิดเหตุฉุกเฉิน ให้ใช้เบรกตามคู่มือรถ อย่าลดแรงเบรกเพียงเพราะจำกฎว่า “ห้ามเบรกในโค้ง” และอย่าปิดระบบช่วยทรงตัวเพื่อทดลองบนถนน
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
                    <span className="block text-2xl font-black text-slate-900">Grip</span>
                    <span className="text-xs text-slate-500 font-bold">มีขีดจำกัด</span>
                  </div>
                </div>
                <div className="mt-6 w-full space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>แรงเลี้ยว</span>
                    <span>แรงเบรก</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-amber-400 w-[70%]"></div>
                    <div className="h-full bg-rose-400 w-[30%]"></div>
                  </div>
                  <div className="text-center text-xs text-slate-500 mt-1">สัดส่วนในภาพเป็นภาพประกอบ ไม่ใช่ค่าที่ใช้ขับรถ</div>
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
                <span className="w-10 h-10 shrink-0 rounded-full bg-amber-500 text-white flex items-center justify-center text-xl">3</span>
                Regen เปลี่ยนได้ อย่าพึ่งแรงหน่วงอย่างเดียว
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                <strong>Regen</strong> ใช้มอเตอร์สร้างแรงหน่วงพร้อมรับพลังงานกลับ ส่วน One-Pedal เป็นรูปแบบการควบคุมของรถบางรุ่น ไม่ใช่ EV ทุกคันจะลดความเร็วหรือหยุดนิ่งได้เหมือนกันเมื่อยกคันเร่ง
              </p>
              <p className="text-slate-700 text-lg leading-relaxed bg-amber-100 p-4 rounded-xl border border-amber-200">
                <AlertTriangle className="inline-block w-6 h-6 text-amber-600 mb-1 mr-1" />
                <strong>ตัวอย่างจาก Model 3:</strong> Tesla ระบุว่า Regen อาจลดลงเมื่อแบตเตอรี่เย็นหรือมีประจุสูง ผู้ขับต้องพร้อมใช้แป้นเบรก ไม่ควรคาดว่าแรงหน่วงจะเท่าเดิมทุกครั้ง <br/><br/>
                ล้อที่รับแรงหน่วงและวิธีผสานเบรกขึ้นกับระบบขับเคลื่อนและการควบคุมของรถ จึงไม่ควรเหมารวมว่า EV ทุกคันยกคันเร่งแล้วเบรกเฉพาะล้อหลังหรือจะท้ายปัดทันที
              </p>
              <p className="text-slate-700 mt-4 text-lg font-bold text-lime-700">
                อ่าน <a href="https://www.tesla.com/ownersmanual/model3/th_th/GUID-3DFFB071-C0F6-474D-8A45-17BE1A006365.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">ข้อจำกัดของ Regen และวิธีเบรกในคู่มือ Model 3</a> ส่วนรถรุ่นอื่นให้ใช้คู่มือของรุ่นนั้น ไม่มีระดับ Regen เดียวที่เหมาะกับทุกคันและทุกสถานการณ์
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
                      <div className="w-16 h-16 bg-rose-100 rounded-xl flex items-center justify-center border-2 border-rose-400 mb-2 shadow-lg">
                        <Footprints className="w-8 h-8 text-rose-500" />
                      </div>
                      <span className="text-xs font-bold text-rose-600">ผ่อนคันเร่ง<br/>สังเกตแรงหน่วง</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-slate-200 my-2"></div>
                  
                  <div className="flex items-center justify-between w-full px-4">
                    <span className="text-sm font-bold text-slate-700">แรงหน่วงขึ้นกับรถและสถานะแบตเตอรี่</span>
                    <span className="text-2xl">⚡🛞</span>
                  </div>
                  <div className="flex items-center justify-between w-full px-4 text-rose-500">
                    <span className="text-sm font-bold">พร้อมใช้แป้นเบรกเมื่อจำเป็น</span>
                    <span className="text-2xl">🛑</span>
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
                <span className="w-10 h-10 shrink-0 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl">4</span>
                Trail Braking ควรฝึกที่ไหน?
              </h2>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                <strong>Trail Braking</strong> คือการค่อยๆ ลดแรงเบรกต่อเนื่องเข้าไปในช่วงเริ่มเลี้ยว เป็นทักษะที่ต้องฝึก ไม่ใช่สูตรที่อ่านแล้วควรลองเข้าโค้งเร็วขึ้นบนถนน
              </p>
              <p className="text-slate-700 mb-4 text-lg leading-relaxed">
                จังหวะเบรกและพวงมาลัยมีผลต่อแรงที่ยางแต่ละเส้นรับ ผู้ฝึกต้องมีพื้นที่ปลอดภัยและคนคอยดูพฤติกรรมรถ เช่น <a href="https://newsroom.porsche.com/pdf/068b6e18-6d7a-470f-9c4b-9315d5c9e12a?print=" target="_blank" rel="noopener noreferrer" className="text-lime-800 underline underline-offset-4">เอกสาร Porsche Track Experience ออสเตรเลีย ปี 2020</a> อธิบายการสอน Trail Braking ในสนาม ไม่ใช่คำแนะนำให้ลองเทคนิคนี้บนถนนทั่วไป
              </p>
              <ul className="space-y-3 text-slate-700 text-lg mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 shrink-0">✅</span><span><strong>สำหรับถนน:</strong> เผื่อระยะ ลดความเร็วแต่เนิ่นๆ และควบคุมรถอย่างต่อเนื่อง ไม่ต้องพยายามขับตามไลน์หรือจุดเบรกของรถแข่ง</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 shrink-0">❌</span><span><strong>อย่าลองขีดจำกัดบนถนน:</strong> หากอยากฝึกเทคนิคนี้ ให้ใช้สนามหรือพื้นที่ฝึกปิดกับผู้สอน และตรวจสภาพรถก่อนเริ่ม</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Infographic Visual 4 */}
              <div className="relative w-full max-w-xs bg-white rounded-2xl shadow-xl border-4 border-slate-100 p-6">
                <h3 className="text-center font-bold text-slate-800 mb-6">หลักง่ายๆ สำหรับถนน</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">1</div>
                    <div>
                      <div className="text-sm font-bold text-slate-700">ทางตรงก่อนถึงโค้ง</div>
                      <div className="text-xs text-slate-500">ลดความเร็วให้เหมาะกับทางที่เห็น</div>
                    </div>
                  </div>
                  
                  <div className="w-0.5 h-6 bg-slate-200 ml-6"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">2</div>
                    <div>
                      <div className="text-sm font-bold text-slate-700">ระหว่างเข้าโค้ง</div>
                      <div className="text-xs text-slate-500">คุมรถให้ต่อเนื่อง อยู่ในช่องทาง</div>
                    </div>
                  </div>
                  
                  <div className="w-0.5 h-6 bg-slate-200 ml-6"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">3</div>
                    <div>
                      <div className="text-sm font-bold text-slate-700">เมื่อเกิดเหตุไม่คาดคิด</div>
                      <div className="text-xs text-slate-500">ใช้เบรกตามคู่มือ ไม่ยึดสูตรจากภาพ</div>
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
        <h2 className="text-2xl font-black text-lime-400 mb-4">ขับให้ปลอดภัย เริ่มจากรู้ข้อจำกัดของรถ</h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
          รักษาระยะและความเร็วให้เหมาะกับถนน เรียนรู้ว่า Regen ของรถตัวเองเปลี่ยนเมื่อไร และพร้อมใช้เบรกตามคู่มือ ส่วนทักษะขับใกล้ขีดจำกัดให้ฝึกกับผู้สอนในพื้นที่ปิด ไม่มีภาพหรือบทความไหนรับรองได้ว่ารถจะไม่เสียหลัก
        </p>
        <Link href="/articles" className="inline-block bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors">
          อ่านบทความอื่นๆ ต่อ
        </Link>
      </div>

    </article>
  );
}
