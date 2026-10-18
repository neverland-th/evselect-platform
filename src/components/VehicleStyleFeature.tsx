import Link from 'next/link';
import VehicleStyleEditor from './VehicleStyleEditor';

export default function VehicleStyleFeature() {
  return (
    <section id="vehicle-style" aria-labelledby="home-vehicle-style-title" className="scroll-mt-24 border-b border-slate-700 bg-[#101213] text-slate-100">
      <div className="mx-auto max-w-7xl">
        <VehicleStyleEditor />
        <p className="px-6 pb-8 text-sm leading-7 text-slate-300">
          <Link href="/vehicle-style" prefetch={false} className="inline-flex min-h-12 items-center text-lime-300 underline underline-offset-4">วิธีใช้งานและข้อควรรู้</Link>
          {' · '}ภาพแนวคิดไม่ยืนยัน fitment{' · '}
          <Link href="/privacy" prefetch={false} className="inline-flex min-h-12 items-center text-lime-300 underline underline-offset-4">ความเป็นส่วนตัว</Link>
        </p>
      </div>
    </section>
  );
}
