const fs = require('fs');
const file = 'src/app/(storefront)/articles/optimizing-ev-suspension-thai-roads/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Summarize Cavitation
const oldCavitation = `<p className="text-slate-700 leading-relaxed">
          ในฤดูร้อนของประเทศไทย อุณหภูมิอากาศแวดล้อม 38 - 42°C ส่งผลให้อุณหภูมิผิวหน้ายางมะตอยพุ่งสูงถึง <strong>50 - 65°C</strong> เมื่อรวมกับความร้อนจากการทำงานของมอเตอร์ไฟฟ้าด้านล่าง และการขยับตัวขึ้นลงอย่างต่อเนื่องของลูกสูบโช้คอัพภายใต้น้ำหนัก 2 ตัน อุณหภูมิภายในกระบอกโช้คอัพสามารถแตะระดับ <strong>75 - 90°C</strong> ได้อย่างง่ายดาย
        </p>

        {/* Heat Mechanics Comparison Card */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm my-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-500" />
            พฤติกรรมของน้ำมันโช้คอัพภายใต้ความร้อนสะสมสูง (Thermal Thinning &amp; Damping Fade)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5">
              <div className="text-sm font-bold text-rose-900 mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-600" />
                โช้คอัพน้ำมันเกรดมาตรฐาน (Mineral Oil, VI &lt; 150)
              </div>
              <ul className="text-xs sm:text-sm text-rose-800/90 space-y-2 list-disc pl-4">
                <li>
                  <strong>Viscosity Drop:</strong> ค่าความหนืดจลน์ (Kinematic Viscosity) ลดลงฮวบจาก 15 cSt ที่ 40°C เหลือเพียง 3.5 cSt ที่ 80°C (ความหนืดลดลงเกิน 75%)
                </li>
                <li>
                  <strong>อาการที่เกิดขึ้น:</strong> แรงหน่วง (Damping Force) หายไปกว่า 40% รถเริ่มมีอาการ &quot;ลอย โยน เด้งซ้ำซาก (Secondary Bouncing)&quot; ยิ่งขับเร็วยิ่งรู้สึกไม่เกาะถนน
                </li>
                <li>
                  <strong>Cavitation &amp; Aeration:</strong> น้ำมันที่มีแรงดันก๊าซต่ำในโครงสร้าง Twin-Tube จะเดือดเป็นฟองอากาศ ส่งผลให้วาล์วไม่สามารถสร้างแรงต้านไฮดรอลิกได้
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5">
              <div className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                โช้คอัพสังเคราะห์แท้ดัชนีสูง (Synthetic Fluid, VI &gt; 300 + High Pressure Gas)
              </div>
              <ul className="text-xs sm:text-sm text-emerald-800/90 space-y-2 list-disc pl-4">
                <li>
                  <strong>Thermal Stability:</strong> ค่าความหนืดคงที่สม่ำเสมอ แม้อุณหภูมิพุ่งแตะ 90°C แรงหน่วงแปรเปลี่ยนน้อยกว่า 8%
                </li>
                <li>
                  <strong>Gas Pressure Monotube:</strong> อัดก๊าซไนโตรเจนแรงดันสูง 20 - 30 bar แยกห้องด้วย Free Piston ป้องกันการเกิดฟองอากาศอย่างเด็ดขาด 100%
                </li>
                <li>
                  <strong>Consistent Handling:</strong> ฟีลลิ่งการควบคุมรถคมชัด แม่นยำเท่ากันตั้งแต่สตาร์ทรถตอนเช้าจนถึงขับข้ามจังหวัดตอนบ่ายแดดจัด
                </li>
              </ul>
            </div>
          </div>
        </div>`;

const newCavitation = `<p className="text-slate-700 leading-relaxed">
          ในฤดูร้อนของไทยที่ถนนร้อนจัด (50-65°C) บวกกับการรับน้ำหนักรถ EV กว่า 2 ตัน โช้คอัพจะเกิดความร้อนสะสมสูงมาก (แตะ 90°C) ความร้อนนี้ทำให้น้ำมันโช้คเกรดธรรมดา "ใสเป็นน้ำ" และเกิดฟองเดือด (Cavitation) 
        </p>
        <p className="text-slate-700 leading-relaxed mt-4 mb-6">
          <strong>ผลลัพธ์คือ "โช้ควืด"</strong> แรงหน่วงหายไป รถมีอาการย้วย ลอย และเด้งไม่หยุด การแก้ปัญหาคือต้องใช้โช้คอัพแบบ Monotube ที่อัดก๊าซไนโตรเจนแรงดันสูงและใช้น้ำมันสังเคราะห์แท้ เพื่อทนความร้อนและรักษากลับความหนืดให้คงที่ตลอดการเดินทาง
        </p>`;

content = content.replace(oldCavitation, newCavitation);

// We also need to insert the Hero Image. Where is it? It's not in the first 800 lines placeholder. Wait, let me check the file carefully.
// Ah, there's NO hero image placeholder currently in this file. Let me check the metadata/header.
// I will insert it right before the Executive Verdict.

const executiveVerdict = `{/* 3. Executive Verdict & Core Pillars Grid */}`;
const heroImageCode = `
      {/* 2.5 Hero Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/Basic_Construction_of_Single_Wishbone_Suspension_System.jpg"
          alt="EV Suspension Geometry"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
            Optimizing EV Suspension Setup
          </span>
        </div>
      </div>
`;
content = content.replace(executiveVerdict, heroImageCode + '\n      ' + executiveVerdict);

fs.writeFileSync(file, content);
console.log("Rewritten suspension guide");
