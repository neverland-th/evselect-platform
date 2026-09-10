const fs = require('fs');
const file = 'src/app/(storefront)/articles/hybrid-to-ev-chassis-dynamics-transition/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace Hero Image
const oldHero = `<div className="w-full h-64 bg-slate-200 flex items-center justify-center rounded-2xl border border-slate-300 my-8"><span className="text-slate-500 font-medium">ภาพประกอบ: การเปรียบเทียบสถาปัตยกรรมแชสซีรถยนต์ไฮบริดและรถยนต์ไฟฟ้าล้วน EVSELECT</span></div>`;
const newHero = `<Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Volkswagen_ID.3_electric_car_chassis_DSC_0060_%2852146930872%29.jpg"
          alt="EV Skateboard Chassis"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />`;

content = content.replace(oldHero, newHero);


// 2. Summarize Brake-by-Wire
const oldBrake = `<div className="my-8 not-prose bg-slate-900 text-white p-6 sm:p-8 rounded-3xl">
            <h4 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> กลไกการทำงานของ Brake Blending System
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">1. แป้นเหยียบตัดขาดจากระบบไฮดรอลิก (Decoupled Pedal)</span>
                เมื่อเหยียบแป้นเบรก ตัวจำลองสัมผัส (Pedal Feel Simulator) จะสร้างแรงต้านเท้าด้วยสปริงและยางไฮดรอลิก แปรผันตามทั้งระยะความลึกที่กดแป้นเบรกลงไป และความเร็วในการกระทืบเบรกของคนขับ
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">2. กล่องสมองกลคำนวณสัดส่วน Regen vs Friction</span>
                หากแบตเตอรี่ยังมีพื้นที่รับไฟ (SOC &lt; 90%) และอุณหภูมิปกติ มอเตอร์จะสร้างแรงหน่วง Regenerative Braking สูงสุดก่อน
              </div>

              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="font-bold text-white block mb-1">3. มอเตอร์ปั๊มไฮดรอลิกจ่ายแรงดันเสริมไร้รอยต่อ</span>
                เมื่อความต้องการแรงเบรกเกินขีดจำกัดของมอเตอร์ หรือความเร็วรถลดลงต่ำกว่า 5 km/h วาล์วไฟฟ้าจะสั่งฉีดน้ำมันเบรกเข้าสู่คาลิเปอร์ทั้ง 4 ล้อเพื่อหยุดรถสนิท
              </div>
            </div>
          </div>

          <p>
            <strong>สาเหตุของอาการ &quot;แป้นเบรกแข็งทื่อ&quot; (Wooden Pedal Feel) ในอดีต:</strong> ในรถยนต์ไฮบริดและ EV รุ่นแรกๆ การเปลี่ยนผ่านระหว่าง Regen เบรกกับปั๊มไฮดรอลิกยังไม่ราบรื่น ทำให้คนขับรู้สึกว่าระยะแป้นเบรกตื้นเกินไปหรือมีแรงสะท้อนกลับ แต่ใน EV เจเนอเรชันปัจจุบัน ซอฟต์แวร์สามารถผสานแรงเบรกได้อย่างเนียนตาจนแทบแยกไม่ออก
          </p>`;

const newBrake = `<div className="my-8 not-prose bg-slate-900 text-white p-6 sm:p-8 rounded-3xl">
            <h4 className="text-lg font-extrabold text-slate-900 mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5" /> ระบบเบรกไฟฟ้า (Brake-by-Wire) แบบเข้าใจง่าย
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed m-0">
              รถ EV ยุคใหม่ แป้นเบรกที่เท้าคุณเหยียบไม่ได้ต่อตรงกับปั๊มน้ำมันเบรกอีกต่อไป แต่มันคือ "สวิตช์ไฟฟ้า" ที่คอยส่งสัญญาณไปบอกสมองกล (ECU) ให้จัดการเบรกให้:
              <br/><br/>
              <strong>1. การหน่วงด้วยมอเตอร์ (Regen):</strong> ตอนคุณแตะเบรกเบาๆ ระบบจะสั่งให้มอเตอร์ไฟฟ้าสลับหน้าที่ไปเป็นเครื่องปั่นไฟเพื่อหน่วงล้อและชาร์จไฟกลับแบตเตอรี่ (คุณแทบไม่ได้ใช้ผ้าเบรกเลยในจังหวะนี้)
              <br/>
              <strong>2. การเบรกด้วยผ้าเบรกจริง:</strong> เมื่อคุณกระทืบเบรกแรงๆ หรือแบตเตอรี่เต็มจนชาร์จไฟกลับไม่ได้แล้ว สมองกลถึงจะสั่งปั๊มไฟฟ้าให้ดึงน้ำมันเบรกไปบีบผ้าเบรกที่ล้อ
              <br/><br/>
              การผสมผสานสองระบบนี้เรียกว่า <strong>"Brake Blending"</strong> ซึ่งใน EV รุ่นเก่าๆ มักจะมีรอยต่อที่ทำให้รู้สึกเบรกแข็งทื่อหรือกะระยะยาก แต่ในรุ่นใหม่ๆ ระบบ FOC (Field-Oriented Control) และวาล์วไฟฟ้าทำงานไวมากจนคุณแทบไม่รู้สึกถึงความแตกต่างแล้ว
            </p>
          </div>`;

content = content.replace(oldBrake, newBrake);

fs.writeFileSync(file, content);
console.log("Rewritten chassis guide");
