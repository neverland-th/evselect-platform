const fs = require('fs');

const file = 'src/app/(storefront)/articles/ev-damper-tuning-bump-rebound-guide/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const getSec = (str, start, end) => {
  const i = str.indexOf(start);
  const j = str.indexOf(end, i);
  if (i === -1 || j === -1) throw new Error("Not found: " + start + " or " + end);
  return str.substring(i, j);
}

const s1Start = '{/* Section 1:';
const s2Start = '{/* Section 2:';
const s3Start = '{/* Section 3:';
const s4Start = '{/* Section 4:';
const s5Start = '{/* Section 5:';
const sEnd = '      </div>\r\n\r\n      {/* Article Footer */}'; // Note CRLF
const sEndAlt = '      </div>\n\n      {/* Article Footer */}'; // Note LF

let endTag = content.indexOf(sEnd) !== -1 ? sEnd : (content.indexOf(sEndAlt) !== -1 ? sEndAlt : null);
if (!endTag) throw new Error("Could not find end tag");

const s1 = getSec(content, s1Start, s2Start);
const s2 = getSec(content, s2Start, s3Start);
const s3 = getSec(content, s3Start, s4Start);
const s4 = getSec(content, s4Start, s5Start);
const s5 = getSec(content, s5Start, endTag);

const expertHeader = `
        {/* EXPERT SECTION DIVIDER */}
        <div className="my-16 pt-12 border-t-2 border-slate-900 border-dashed relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-1.5 rounded-full font-black text-sm tracking-wider shadow-md">
            EXPERT SECTION : เจาะลึกฟิสิกส์ช่วงล่าง
          </div>
          <p className="text-center text-slate-500 text-sm mt-4 mb-8">
            ส่วนนี้เนื้อหาจะมีความซับซ้อนระดับวิศวกรรม เหมาะสำหรับช่างปรับจูนหรือผู้ที่ต้องการทำความเข้าใจกลศาสตร์การซับแรงสั่นสะเทือนเชิงลึก
          </p>
        </div>
`;

let newS5 = s5.replace("5. ขั้นตอน 4 สเต็ปการเซ็ตติ้งโช้คอัพสำหรับผู้เริ่มต้น (Baseline Setup Protocol)", "1. ขั้นตอน 4 สเต็ปการเซ็ตติ้งโช้คอัพสำหรับผู้เริ่มต้น (เริ่มปรับเองได้ง่ายๆ)");
let newS4 = s4.replace("4. ตารางปรับคลิกแดมเปอร์แก้ Understeer / Oversteer ใน 3 ช่วงของโค้ง", "2. ตารางปรับคลิกแดมเปอร์แก้หน้าดื้อ/ท้ายปัด (ฉบับใช้งานจริง)");

let newS2 = s2.replace("2. ทำความเข้าใจ Bump, Rebound และย่านความเร็วลูกสูบ (Velocity Regimes)", "เจาะลึก 1. กลไกเชิงลึก Bump, Rebound และย่านความเร็วลูกสูบ (Velocity Regimes)");
let newS1 = s1.replace("1. ฟิสิกส์การหน่วงและอัตราส่วนความหน่วงที่เหมาะสม (Damping Ratio)", "เจาะลึก 2. ฟิสิกส์การหน่วงและอัตราส่วนความหน่วงที่เหมาะสม (Damping Ratio)");
let newS3 = s3.replace("3. การอ่านกราฟ Force-Velocity (F-V Curve): Linear vs Digressive vs Progressive", "เจาะลึก 3. การอ่านกราฟ Force-Velocity (F-V Curve)");

const reorderedSections = newS5 + newS4 + expertHeader + newS2 + newS1 + newS3;

const beforeS1 = content.substring(0, content.indexOf(s1Start));
const afterS5 = content.substring(content.indexOf(endTag));

const finalContent = beforeS1 + reorderedSections + afterS5;
fs.writeFileSync(file, finalContent);
console.log('Swap complete!');
