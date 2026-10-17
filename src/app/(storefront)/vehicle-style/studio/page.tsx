import Link from 'next/link';
import VehicleStyleEditor from '@/components/VehicleStyleEditor';
import { withPublicMetadata } from '@/lib/public-metadata';

export const metadata = withPublicMetadata('/vehicle-style/studio', {
  title: 'ลองสีรถและล้อใน Vehicle Style | EVSELECTS',
  description: 'เลือกรูปรถและลองสีหรือล้อด้วย AI ไม่ต้องกรอก API key หรือรหัสสตูดิโอ ภายใต้โควตาทดลองรายวัน',
  alternates: { canonical: '/vehicle-style/studio' },
  robots: { index: false, follow: true },
});

export default function VehicleStyleStudioPage() {
  return <div className="bg-[#0b0d10] text-slate-100">
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <Link href="/#vehicle-style" prefetch={false} className="inline-flex min-h-12 items-center text-sm text-lime-300 underline underline-offset-4">กลับไปใช้ Vehicle Style บนหน้าแรก</Link>
      <h1 className="mt-4 text-3xl font-bold">ลองสีรถและล้อ</h1>
      <p className="mt-3 text-sm leading-7 text-slate-300">ไม่ต้องใส่ API key หรือรหัสสตูดิโอ · ภาพแนวคิดจาก AI ไม่ยืนยันการติดตั้งหรือ fitment</p>
      <h2 className="mb-6 mt-8 text-xl font-semibold">เลือกรูปและสไตล์ที่ชอบ</h2>
      <VehicleStyleEditor />
      <p className="mt-6 text-sm leading-7 text-slate-300">ภาพจะถูกส่งให้ OpenAI เมื่อยืนยันและกดสร้างเท่านั้น ดู <Link href="/privacy" prefetch={false} className="text-lime-300 underline underline-offset-4">นโยบายความเป็นส่วนตัว</Link> หรือ <Link href="/vehicle-style" prefetch={false} className="text-lime-300 underline underline-offset-4">วิธีใช้และข้อควรรู้ของ Vehicle Style</Link></p>
    </div>
  </div>;
}
