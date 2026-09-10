const fs = require('fs');
const file = 'src/app/(storefront)/articles/shock-absorber-types-monotube-twintube-air-ev/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Hero Image
const headerPattern = `{/* Executive Comparison Summary */}`;
const heroImageCode = `
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-slate-200 bg-slate-100 shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Damper_1.jpg"
            alt="Shock Absorber Components"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs text-white">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
              โครงสร้างภายในโช้คอัพ
            </span>
          </div>
        </div>
`;
content = content.replace(headerPattern, heroImageCode + '\n        ' + headerPattern);

// 2. Change Section 5 to a table
const oldSection5 = `<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-lime-700 uppercase tracking-wider mb-1">รถคอมแพกต์ / ซีดาน EV</div>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">Tesla Model 3 / BYD Seal / MG4</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <strong>แนะนำ:</strong> ชุดสตรัทปรับเกลียว <strong>Monotube พร้อม Digressive Valving</strong> ปรับแข็ง-อ่อนได้ 16–32 ระดับ ช่วยหยุดอาการดีดเด้งของท้ายรถและเพิ่มความมั่นใจในโค้งความเร็วสูง
              </p>
              <Link href="/" className="text-xs font-bold text-lime-700 hover:text-lime-800 inline-flex items-center gap-1">
                ดูโช้คอัพ Monotube ตรงรุ่น <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">รถเอสยูวีครอบครัว EV</div>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">Tesla Model Y / Deepal S07 / BYD Atto 3</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <strong>แนะนำ:</strong> โช้คอัพ <strong>Inverted Monotube (คู่หน้า) + Monotube Sub-tank (คู่หลัง)</strong> เสริมความทนทานต่อแรงกระแทกคอสะพาน และซับแรงกระเทือนเบาะแถวสองอย่างนุ่มนวล
              </p>
              <Link href="/" className="text-xs font-bold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1">
                ดูชุดอัปเกรดช่วงล่าง SUV <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">พรีเมียมเอ็มพีวี / เรือธง EV</div>
              <h4 className="font-extrabold text-slate-900 text-base mb-2">Zeekr 009 / Zeekr 7X / Denza D9</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <strong>แนะนำ:</strong> <strong>Dual-Chamber Smart Air Suspension</strong> ควบคุมด้วยระบบคอมพิวเตอร์พร้อมระบบปรับความสูงอัตโนมัติ ให้ความนุ่มเงียบระดับ First Class
              </p>
              <Link href="/articles" className="text-xs font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1">
                อ่านรีวิวช่วงล่าง Zeekr 7X <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>`;

const newSection5 = `<div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4 border-b border-slate-800">ประเภทรถ EV</th>
                  <th className="p-4 border-b border-slate-800">รุ่นรถยอดนิยม</th>
                  <th className="p-4 border-b border-slate-800">ระบบช่วงล่างที่แนะนำ</th>
                  <th className="p-4 border-b border-slate-800">ประโยชน์หลัก</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-lime-700 bg-lime-50/50">คอมแพกต์ / ซีดาน</td>
                  <td className="p-4 text-slate-800 font-medium">Tesla Model 3, BYD Seal, MG4</td>
                  <td className="p-4 text-slate-700">Monotube + Digressive Valving</td>
                  <td className="p-4 text-slate-600">ลดอาการดีดเด้ง เข้าโค้งหนึบขึ้น คุมตัวถังได้ดีเยี่ยม</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-sky-700 bg-sky-50/50">เอสยูวีครอบครัว</td>
                  <td className="p-4 text-slate-800 font-medium">Tesla Model Y, Deepal S07, Atto 3</td>
                  <td className="p-4 text-slate-700">Inverted Monotube + Sub-tank</td>
                  <td className="p-4 text-slate-600">ทนทานต่อแรงกระแทก ซับคอสะพาน นุ่มนวลผู้โดยสารตอนหลัง</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-purple-700 bg-purple-50/50">พรีเมียมเอ็มพีวี</td>
                  <td className="p-4 text-slate-800 font-medium">Zeekr 009, Zeekr 7X, Denza D9</td>
                  <td className="p-4 text-slate-700">Dual-Chamber Air Suspension</td>
                  <td className="p-4 text-slate-600">ปรับระดับความสูงอัตโนมัติ นุ่มเงียบระดับ First Class</td>
                </tr>
              </tbody>
            </table>
          </div>`;

content = content.replace(oldSection5, newSection5);

fs.writeFileSync(file, content);
console.log("Rewritten shock absorbers guide");
