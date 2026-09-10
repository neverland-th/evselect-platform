const fs = require('fs');
const file = 'src/app/(storefront)/articles/ev-carbon-ceramic-brakes-guide/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard img with Image
if (!content.includes("import Image from 'next/image';")) {
  content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport Image from 'next/image';");
}

// 1. Replace Hero Image
const oldImgTag = `<img
          src="/images/articles/carbon_ceramic_brake_hero.jpg"
          alt="ระบบเบรก Carbon Ceramic (CCB) แบบเจาะลึก"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
        />`;
const newImgTag = `<Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/AMG_Carbon_Ceramic_brake..JPG"
          alt="ระบบเบรก Carbon Ceramic (CCB) แบบเจาะลึก"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />`;

content = content.replace(oldImgTag, newImgTag);


// 2. Summarize Pyrolysis
const oldPyrolysis = `<div className="bg-slate-50 border-l-4 border-slate-300 p-6 rounded-r-2xl my-8">
          <h4 className="text-slate-800 mt-0 mb-3 font-bold">The Manufacturing Process (กระบวนการผลิตระดับ NASA)</h4>
          <ol className="text-sm md:text-base space-y-3 mb-0 text-slate-700">
            <li><strong>Preform:</strong> เส้นใยคาร์บอนไฟเบอร์สับละเอียด ถูกนำมาผสมกับฟีนอลิกเรซิน (Phenolic Resin) และขึ้นรูปเป็นแผ่นจานเบรกภายใต้แรงดันสูง</li>
            <li><strong>Pyrolysis (การไพโรไลซิส):</strong> นำแผ่นดิสก์ไปอบในเตาสุญญากาศที่อุณหภูมิ 1,000°C เพื่อเผาไหม้สารอินทรีย์ออกไป ทิ้งไว้เพียงโครงสร้างคาร์บอนรูพรุนที่แข็งแกร่ง (Carbon Skeleton)</li>
            <li><strong>Silicon Infiltration (การแทรกซึมซิลิกอน):</strong> นี่คือขั้นตอนชี้เป็นชี้ตาย จานเบรกจะถูกนำไปอบในเตาที่มีผงซิลิกอนบริสุทธิ์ที่อุณหภูมิสูงถึง <strong>1,700°C</strong> ซิลิกอนจะหลอมละลายและซึมเข้าไปในรูพรุนของคาร์บอน ทำปฏิกิริยาเคมีกลายเป็น <strong>Silicon Carbide (SiC)</strong> ซึ่งมีความแข็งแกร่งรองจากเพชร</li>
            <li><strong>Anti-Oxidation Coating:</strong> เคลือบผิวหน้าด้วยสารป้องกันการเกิดปฏิกิริยาออกซิเดชัน เพื่อป้องกันไม่ให้คาร์บอนระเหยเมื่อเจอความร้อนสูงจัด</li>
          </ol>
        </div>`;

const newPyrolysis = `<div className="bg-slate-50 border-l-4 border-slate-300 p-6 rounded-r-2xl my-8">
          <h4 className="text-slate-800 mt-0 mb-3 font-bold">สรุปขั้นตอนการผลิตแบบย่อ (The Manufacturing Process)</h4>
          <p className="text-sm md:text-base text-slate-700 m-0">
            กว่าจะเป็นจานเบรกคาร์บอนเซรามิก ต้องผ่านการขึ้นรูปเส้นใยคาร์บอนไฟเบอร์ผสมเรซิน (Preform) จากนั้นนำไปเผาในเตาสุญญากาศ 1,000°C (Pyrolysis) เพื่อสร้างโครงสร้างรูพรุน และขั้นตอนสำคัญสุดคือนำไปอบกับผงซิลิกอนที่ 1,700°C จนซิลิกอนซึมซับเข้าไปทำปฏิกิริยาเกิดเป็น <strong>Silicon Carbide (SiC)</strong> ซึ่งแข็งแกร่งเป็นรองแค่เพชรเท่านั้น
          </p>
        </div>`;

content = content.replace(oldPyrolysis, newPyrolysis);

fs.writeFileSync(file, content);
console.log("Rewritten carbon ceramic guide");
