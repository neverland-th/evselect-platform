import Link from 'next/link';
import { ArrowRight, Camera, CircleCheck, Palette, SlidersHorizontal } from 'lucide-react';
import { withPublicMetadata } from '@/lib/public-metadata';

const title = 'Vehicle Style: ลองสีรถและล้อจากรูปของคุณ | EVSELECTS';
const description = 'ลองเปลี่ยนสีรถ สีล้อ ขนาดและดีไซน์ล้อจากรูปคันเดิมด้วย AI เทียบก่อน–หลังในภาพเดียว ใช้บนมือถือได้ พร้อมข้อจำกัดของภาพแนวคิดก่อนแต่งจริง';
const studioPath = '/vehicle-style/studio';

export const metadata = withPublicMetadata('/vehicle-style', {
  title,
  description,
  alternates: { canonical: '/vehicle-style' },
  openGraph: { title, description, url: 'https://evselects.com/vehicle-style', type: 'website', locale: 'th_TH' },
  twitter: { card: 'summary', title, description },
});

const steps = [
  { icon: Camera, title: 'เลือกรูปรถคันเดิม', text: 'ใช้รูปมุมเฉียงหน้าหรือด้านข้างที่เห็นตัวรถและล้อชัด รองรับ JPG, PNG และ WebP สูงสุด 10 MB' },
  { icon: Palette, title: 'ลองสีและสไตล์ที่ชอบ', text: 'เลือกสีรถหรือพิมพ์สีเอง เลือกขอบและความกว้างล้อ แล้วพิมพ์รุ่นหรือดีไซน์ที่อยากลอง' },
  { icon: SlidersHorizontal, title: 'ลากเทียบ แล้วบันทึกภาพ', text: 'ใช้สไลเดอร์เดียวบนภาพเพื่อเทียบก่อน–หลัง แล้วบันทึกภาพแนวคิดไว้ดูต่อได้' },
];

export default function VehicleStylePage() {
  return (
    <div className="bg-[#0b0d10] text-slate-100 selection:bg-lime-300 selection:text-slate-950">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="vehicle-style-title">
        <nav aria-label="เส้นทางหน้านี้" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <Link href="/" prefetch={false} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-lime-300">หน้าแรก</Link>
          <span aria-hidden="true">/</span><span aria-current="page">Vehicle Style</span>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-lime-300">VEHICLE STYLE · ภาพแนวคิดจากรถของคุณ</p>
            <h1 id="vehicle-style-title" className="text-3xl font-bold leading-snug tracking-tight sm:text-5xl">ลองสีรถและล้อ<br /><span className="text-lime-300">ให้เห็นภาพก่อนแต่งจริง</span></h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">เริ่มจากรูปคันเดิม แล้วลองสีตัวรถ สีล้อ หรือดีไซน์ล้อที่อยากได้ ให้ AI ช่วยทำภาพแนวคิดก่อนตัดสินใจเลือกของจริง</p>
            <a href={studioPath} className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-lime-300 px-6 py-3 font-semibold text-slate-950 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:w-auto">เข้าสู่ Vehicle Style <ArrowRight size={20} aria-hidden="true" /></a>
            <p className="mt-3 text-sm leading-7 text-slate-300">ไม่ต้องกรอก API key หรือรหัสสตูดิโอ · ทดลอง 1 ครั้งต่อเครือข่ายต่อวัน รวม 5 ครั้งต่อวัน</p>
            <Link href="/#vehicle-style" prefetch={false} className="mt-2 inline-flex min-h-11 items-center text-sm text-lime-300 underline underline-offset-4 hover:text-lime-200">เปิดเครื่องมือจากหน้าแรก</Link>
          </div>
          <div className="rounded-2xl border border-slate-600 bg-[#14181d] p-6 sm:p-8">
            <h2 className="text-xl font-semibold">ลองลุคใหม่ได้ในหน้าเดียว</h2>
            <ul className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
              {['เลือกสีสำเร็จรูป หรือพิมพ์ชื่อสีและฟินิชเอง', 'เลือกขอบและความกว้างล้อ พร้อมพิมพ์รุ่นหรือดีไซน์', 'ลากเส้นบนภาพเพื่อเทียบรถเดิมกับภาพแนวคิด', 'เปิดบนมือถือ Android หรือคอมพิวเตอร์ได้'].map(text => <li key={text} className="flex gap-3"><CircleCheck className="mt-1 shrink-0 text-lime-300" size={20} aria-hidden="true" /><span>{text}</span></li>)}
            </ul>
            <p className="mt-7 border-t border-slate-600 pt-5 text-sm leading-7 text-slate-300"><strong className="font-semibold text-lime-300">Concept preview</strong><br />ภาพใช้สื่อไอเดีย อาจเปลี่ยนรายละเอียดรถ และไม่ยืนยันขนาดจริง การติดตั้ง หรือ fitment</p>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-700 bg-[#14181d]" aria-labelledby="vehicle-style-steps">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
          <h2 id="vehicle-style-steps" className="text-2xl font-semibold">จากรูปคันเดิม สู่ไอเดียใหม่ใน 3 ขั้นตอน</h2>
          <div className="mt-7 grid gap-8 md:grid-cols-3">
            {steps.map(({ icon: Icon, title: stepTitle, text }, index) => <div key={stepTitle}>
              <div className="mb-4 flex items-center gap-3 text-lime-300"><Icon size={24} aria-hidden="true" /><span className="text-sm font-medium">0{index + 1}</span></div>
              <h3 className="text-lg font-semibold">{stepTitle}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </div>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8" aria-labelledby="vehicle-style-before-start">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="vehicle-style-before-start" className="text-2xl font-semibold">ก่อนกดสร้างภาพ</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-300">
              <li>ใช้รูปที่คุณมีสิทธิ์ใช้งาน และยืนยันก่อนส่งภาพกับรายละเอียดให้ OpenAI ประมวลผล</li>
              <li>ทดลองสร้างครั้งละ 1 ภาพ ภายใต้โควตารายวัน รีเซ็ตตามวันในประเทศไทย โดยเริ่มนับเมื่อส่งคำขอสร้าง แม้คำขออาจไม่สำเร็จ</li>
              <li>รูปและผลลัพธ์ไม่ถูกเก็บเป็นประวัติในสตูดิโอ บันทึกภาพที่ต้องการก่อนรีเฟรชหรือปิดหน้า ดูเพิ่มเติมที่ <Link href="/privacy" prefetch={false} className="text-lime-300 underline underline-offset-4">นโยบายความเป็นส่วนตัว</Link></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-600 p-6 sm:p-8">
            <h2 className="text-xl font-semibold">ชอบลุคแล้ว เช็กของจริงก่อนติดตั้ง</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">สี ขนาดล้อ และรุ่นที่พิมพ์ใช้เป็นแนวทางให้ AI ภาพจึงอาจไม่ตรงสินค้า ต้องตรวจข้อมูลล้อ ยาง ระยะเคลียร์ และความเข้ากันได้กับรถคันจริงแยกต่างหาก</p>
            <Link href="/articles/ev-tyre-and-coilover-selection-guide" prefetch={false} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-lime-300 underline underline-offset-4">อ่านคู่มือเลือกยางและช่วงล่าง EV <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
