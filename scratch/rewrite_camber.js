const fs = require('fs');
const file = 'src/app/(storefront)/articles/ev-camber-adjustment-wheel-alignment-guide/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add next/image
if (!content.includes("import Image from 'next/image';")) {
  content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport Image from 'next/image';");
}

// 1. Insert Hero Image before Executive Summary box
const execSummaryStart = '        {/* Executive Summary Box */}';
const targetExec = content.indexOf(execSummaryStart);
if (targetExec !== -1) {
  const insertHero = `
        <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group relative w-full aspect-[16/9] bg-slate-100">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/LADA_Vesta_Sport%2C_Wheel_alignment.jpg"
            alt="ภาพรถขณะทำการตั้งศูนย์ล้อและมุมแคมเบอร์ด้วยระบบเลเซอร์คอมพิวเตอร์"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </figure>

`;
  content = content.slice(0, targetExec) + insertHero + content.slice(targetExec);
}

// 2. Insert Beginner Section after Executive Summary
const bodyStart = '      {/* 3. Article Content Body */}';
const targetBody = content.indexOf(bodyStart);
if (targetBody !== -1) {
    const beginSection = `
        {/* Beginner Section */}
        <section className="bg-lime-50/50 border border-lime-200 p-6 rounded-3xl space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-lime-100 text-lime-700 rounded-xl">
              <Info className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0">
              สำหรับมือใหม่: แคมเบอร์ (Camber) คืออะไร? แบบเข้าใจง่ายสุดๆ
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            ถ้าเปรียบเทียบง่ายๆ <strong>"แคมเบอร์"</strong> ก็เหมือนกับ <strong>"การวางเท้า"</strong> ของเราเวลาเดินหรือวิ่ง:
          </p>
          <ul className="space-y-3 text-sm text-slate-700 list-disc pl-5">
            <li>
              <strong>ล้อตั้งตรง (แคมเบอร์ 0)</strong> = เหมือนเรายืนฝ่าเท้าแนบพื้นเต็มๆ เดินทางตรงได้มั่นคง เบรกได้ดีที่สุด แต่พอจะวิ่งเลี้ยวโค้งแรงๆ อาจจะสะดุดหรือทรงตัวยาก
            </li>
            <li>
              <strong>ล้อหุบเข้าด้านใน (แคมเบอร์ลบ)</strong> = เหมือนนักสเก็ตน้ำแข็งที่เอียงข้อเท้าเข้าหากันเพื่อจิกน้ำแข็งเวลาเข้าโค้ง! ล้อจะจิกพื้นถนนได้ดีเยี่ยมเวลาสาดโค้งแรงๆ ทำให้รถเกาะถนนหนึบขึ้นมาก นี่คือเหตุผลที่รถสปอร์ตหรือรถ EV ซิ่งๆ นิยมตั้งล้อให้แบะออกนิดๆ (แคมเบอร์ลบนั่นเอง)
            </li>
          </ul>
          <p className="text-sm text-slate-700 leading-relaxed font-semibold text-lime-900 bg-white p-3 rounded-xl border border-lime-200">
            💡 สรุปสั้นๆ: ถ้าคุณเน้นขับขี่ทั่วไปในเมือง จ่ายตลาด การตั้งล้อตรงๆ คือดีที่สุด ประหยัดยางสุด แต่ถ้าคุณชอบขับรถเร็ว มุดเปลี่ยนเลนไวๆ การทำแคมเบอร์ลบ (ล้อแบะนิดๆ) จะช่วยให้รถเกาะถนนขึ้นอย่างเห็นได้ชัด แลกมากับการกินยางด้านในเร็วขึ้นเล็กน้อย
          </p>
        </section>

`;
    // Find the next line to insert after bodyStart
    const insertPoint = content.indexOf('<div className="space-y-12">', targetBody);
    if(insertPoint !== -1) {
        const offset = insertPoint + '<div className="space-y-12">'.length;
        content = content.slice(0, offset) + '\n' + beginSection + content.slice(offset);
    }
}

fs.writeFileSync(file, content);
console.log("Rewritten camber guide");
