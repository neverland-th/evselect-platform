const fs = require('fs');
const file = 'src/app/(storefront)/articles/ev-horsepower-vs-torque-explained/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace Hero Image
const oldHero = `<div className="w-full h-64 bg-slate-200 flex items-center justify-center rounded-2xl border border-slate-300 my-8"><span className="text-slate-500 font-medium">ภาพประกอบ: การทดสอบกราฟไดโน่แรงม้าและแรงบิดของมอเตอร์ไฟฟ้ารถยนต์ EVSELECT</span></div>`;
const newHero = `<Image
          src="https://upload.wikimedia.org/wikipedia/commons/1/10/Electric_motor_Toyota_bZ4X_Expo_2022_CRI_4894.jpg"
          alt="มอเตอร์ไฟฟ้า EV ขุมพลังแรงม้าและแรงบิด"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />`;

content = content.replace(oldHero, newHero);


// 2. Summarize Back-EMF
const oldBackEMF = `<p className="text-xs text-slate-600 leading-relaxed">
                เมื่อโรเตอร์หมุนเร็วขึ้น ขดลวดจะสร้าง <strong>แรงดันไฟฟ้าเหนี่ยวนำย้อนกลับ (Back-EMF)</strong> ซึ่งจะวิ่งต้านแรงดันไฟฟ้ากระแสตรงจากแบตเตอรี่ และเมื่อแรงดันย้อนกลับนี้พุ่งสูงจนชนเพดานแรงดันของระบบ อินเวอร์เตอร์จึงต้องปรับกระแสควบคุมเพื่อ <em>&quot;ลดความเข้มของสนามแม่เหล็กถาวร&quot; (Field Weakening)</em> ส่งผลให้กำลังสูงสุดในหน่วยกิโลวัตต์ (kW) ยังคงที่ได้ แต่แรงบิดจะค่อยๆ ลดลงสวนทางกับความเร็วรอบที่สูงขึ้นเรื่อยๆ
              </p>`;

const newBackEMF = `<p className="text-xs text-slate-600 leading-relaxed">
                พูดง่ายๆ คือ เมื่อมอเตอร์หมุนเร็วมากๆ มันจะกลายสภาพเป็นเครื่องปั่นไฟ สร้าง <strong>"ไฟย้อนกลับ" (Back-EMF)</strong> มาสู้กับไฟจากแบตเตอรี่ ทำให้เร่งต่อยากขึ้น ระบบจึงต้องลดแรงแม่เหล็กเพื่อสู้กับไฟย้อนกลับนี้ ผลคือแรงบิดลดลงฮวบฮาบตอนความเร็วปลาย
              </p>`;

content = content.replace(oldBackEMF, newBackEMF);

fs.writeFileSync(file, content);
console.log("Rewritten horsepower guide");
