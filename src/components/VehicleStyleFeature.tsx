import Link from 'next/link';
import { ArrowRight, Palette, SlidersHorizontal } from 'lucide-react';

export default function VehicleStyleFeature() {
  return (
    <section id="vehicle-style" aria-labelledby="home-vehicle-style-title" className="hidden scroll-mt-28 border-b border-slate-700 bg-[#0b0d10] text-slate-100 lg:block">
      <div className="mx-auto grid max-w-7xl grid-cols-[1.1fr_1fr] items-center gap-14 px-8 py-12">
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-lime-300"><Palette size={18} aria-hidden="true" /> VEHICLE STYLE</p>
          <h2 id="home-vehicle-style-title" className="text-3xl font-bold leading-snug">ลองสีรถและล้อ<br /><span className="text-lime-300">จากรูปคันเดิมของคุณ</span></h2>
          <p className="mt-4 max-w-lg text-base leading-8 text-slate-300">อยากเปลี่ยนลุค แต่ยังนึกภาพไม่ออก? ลองสีตัวรถ สีล้อ หรือดีไซน์ล้อที่ชอบ แล้วลากเทียบก่อน–หลังในภาพเดียว</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="/vehicle-style/studio" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-lime-300 px-5 py-3 font-semibold text-slate-950 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300">เริ่มลองลุคใหม่ <ArrowRight size={18} aria-hidden="true" /></a>
            <Link href="/vehicle-style" prefetch={false} className="inline-flex min-h-12 items-center text-sm text-slate-200 underline underline-offset-4 hover:text-lime-300">ดูวิธีใช้งานและข้อควรรู้</Link>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-400">ต้องใช้รหัสสตูดิโอ · ภาพแนวคิดไม่ยืนยันการติดตั้งหรือ fitment</p>
        </div>
        <div className="rounded-2xl border border-slate-600 bg-[#14181d] p-6" aria-label="ตัวอย่างตัวเลือกที่ปรับได้ในสตูดิโอ">
          <p className="mb-6 flex items-center gap-2 border-b border-slate-600 pb-4 text-sm font-medium text-slate-200"><SlidersHorizontal size={18} className="text-lime-300" aria-hidden="true" /> ตัวอย่างสิ่งที่คุณปรับได้</p>
          <div className="flex items-center justify-between gap-4"><span className="text-sm text-slate-300">สีตัวรถและสีล้อ</span><div className="flex gap-3" aria-hidden="true"><span className="h-8 w-8 rounded-full border border-slate-400 bg-[#e8e8e0]" /><span className="h-8 w-8 rounded-full border border-slate-400 bg-[#708238]" /><span className="h-8 w-8 rounded-full border border-slate-400 bg-[#b6a078]" /></div></div>
          <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-lg border border-slate-500 bg-[#1e252d] p-3"><p className="text-xs text-slate-300">ขนาดขอบ</p><p className="mt-1 font-semibold">20 นิ้ว</p></div><div className="rounded-lg border border-slate-500 bg-[#1e252d] p-3"><p className="text-xs text-slate-300">ความกว้างล้อ</p><p className="mt-1 font-semibold">9.5 นิ้ว</p></div></div>
          <div className="mt-3 rounded-lg border border-slate-500 bg-[#1e252d] p-3"><p className="text-xs text-slate-300">รุ่นหรือดีไซน์ล้อ</p><p className="mt-1 text-sm">พิมพ์ลายที่ชอบ เช่น ล้อ 6 ก้านเรียบ</p></div>
          <p className="mt-4 text-xs leading-6 text-slate-400">ตัวเลขเป็นตัวอย่างการเลือกเพื่อทำภาพแนวคิด ไม่ใช่ขนาดแนะนำสำหรับรถคันใด</p>
        </div>
      </div>
    </section>
  );
}
