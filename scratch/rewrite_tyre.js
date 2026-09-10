const fs = require('fs');

const file = 'src/app/(storefront)/articles/ev-tyre-and-coilover-selection-guide/page.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes("import Image from 'next/image';")) {
  content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport Image from 'next/image';");
}

const introEndIdx = content.indexOf('</p>', content.indexOf('คู่มือวิศวกรรมฉบับสมบูรณ์สำหรับเจ้าของรถยนต์ไฟฟ้า'));
if (introEndIdx !== -1) {
  const insertHero = `
        <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group relative w-full aspect-[16/9] bg-slate-100">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/28/Audi_Wheel_with_Michelin_Pilot_Sport_All_Season_4_Tire.jpg"
            alt="ภาพประกอบล้อและยาง Michelin Pilot Sport สำหรับรถ EV"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </figure>
  `;
  content = content.slice(0, introEndIdx + 4) + insertHero + content.slice(introEndIdx + 4);
}

const tableContent = `
        {/* Recommended EV Tyres Table */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 my-8 shadow-xs">
          <div className="flex items-center gap-2.5 text-slate-900 font-bold text-lg mb-4">
            <span className="p-2 bg-lime-50 text-lime-700 rounded-xl">
              <Award className="w-5 h-5" />
            </span>
            ตารางแนะนำยางสำหรับรถ EV (EVSELECT Recommended)
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-4 font-bold">แบรนด์ / รุ่น</th>
                  <th className="p-4 font-bold">จุดเด่น</th>
                  <th className="p-4 font-bold">เหมาะสำหรับ</th>
                  <th className="p-4 font-bold">ระดับราคา</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Michelin Pilot Sport EV</td>
                  <td className="p-4">เทคโนโลยี Acoustic Foam, เนื้อยาง ElectricGrip Compound, ประหยัดไฟขึ้น 60km</td>
                  <td className="p-4">รถ EV สมรรถนะสูง (Tesla Model 3/Y Long Range/Performance, BYD Seal AWD)</td>
                  <td className="p-4 text-slate-500">฿฿฿฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Hankook iON evo</td>
                  <td className="p-4">iON Sound Absorber, EVolution Compound, ลดเสียงรบกวนได้ดีเยี่ยม</td>
                  <td className="p-4">รถ EV ที่เน้นความเงียบและนุ่มนวล (Tesla Model 3 Highland, Zeekr X)</td>
                  <td className="p-4 text-slate-500">฿฿฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Pirelli P Zero Elect</td>
                  <td className="p-4">PNCS (Pirelli Noise Cancelling System), โครงสร้างเสริมความแข็งแกร่ง (HL)</td>
                  <td className="p-4">รถ EV ขนาดใหญ่/หนักมาก (Zeekr 009, รถตู้ไฟฟ้า)</td>
                  <td className="p-4 text-slate-500">฿฿฿฿฿</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Bridgestone Turanza EV</td>
                  <td className="p-4">ENLITEN Technology, อายุการใช้งานยาวนาน (Treadwear สูง)</td>
                  <td className="p-4">การใช้งานทั่วไปในเมือง เน้นความทนทาน (BYD Atto 3, MG4)</td>
                  <td className="p-4 text-slate-500">฿฿฿</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
`;

// Insert the table at the end of Section 1
const section1End = '</section>';
const section2Start = '{/* 5. Section 2: Custom Inline React SVG Diagram (Curves & Load Index) */}';
const targetIdx = content.indexOf(section2Start);
if (targetIdx !== -1) {
    const s1EndIdx = content.lastIndexOf(section1End, targetIdx);
    if(s1EndIdx !== -1) {
        content = content.slice(0, s1EndIdx) + tableContent + content.slice(s1EndIdx);
    }
}

fs.writeFileSync(file, content);
console.log("Rewritten tyre guide");
