import type { Metadata } from 'next';
import Link from 'next/link';
import { imageCredits } from '@/lib/image-credits';

export const metadata: Metadata = {
  title: 'เครดิตภาพและแหล่งที่มา | EVSELECTS.COM',
  description: 'ชื่อผู้ถ่าย แหล่งภาพต้นฉบับ ใบอนุญาต และบริบทของภาพประกอบบน EVSELECTS.COM',
  alternates: { canonical: '/image-credits' },
};

const linkStyle = 'font-medium text-lime-800 underline underline-offset-4 hover:text-lime-950';
function BrandText({ text }: { text: string }) {
  return <>{text.split(/(EVSELECTS?)/g).map((part, index) => /^EVSELECTS?$/.test(part) ? <Link key={index} href="/" className={linkStyle}>{part}</Link> : part)}</>;
}

export default function ImageCreditsPage() {
  return <div className="mx-auto max-w-5xl space-y-10 px-4 py-12 text-slate-700 sm:px-6 sm:py-16">
    <header className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">เครดิตภาพและแหล่งที่มา</h1>
      <p className="leading-7">รวมเครดิตภาพที่ใช้ในบทความและหน้ารวมของ <Link href="/" className={linkStyle}>EVSELECTS.COM</Link> ไว้ที่นี่ เพื่อให้หน้าบทความอ่านต่อได้ลื่นขึ้น โดยยังตรวจชื่อผู้ถ่าย แหล่งต้นฉบับ และเงื่อนไขการใช้ภาพได้</p>
      <p className="text-sm leading-6">ภาพประกอบไม่ใช่ผลทดสอบของทีมงาน และไม่ยืนยันอุปกรณ์หรือความเข้ากันได้กับรถสเปกไทย ภาพจากผู้ผลิตที่ไม่มีใบอนุญาตระบุไว้ยังไม่ถือว่าเป็นภาพที่เปิดให้ใช้ซ้ำทั่วไป ส่วนภาพที่เจ้าของเว็บไซต์จัดส่งให้ ไม่ได้หมายความว่าเว็บไซต์เป็นผู้ถ่ายหรือผู้ถือสิทธิ์ต้นฉบับ</p>
      <Link href="/articles" className={linkStyle}>กลับไปเลือกอ่านบทความรถ EV</Link>
    </header>
    <div className="space-y-6">
      {imageCredits.map(image => <article key={image.id} id={image.id} className="scroll-mt-28 space-y-3 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold leading-7 text-slate-950"><BrandText text={image.alt} /></h2>
        <p className="text-sm leading-6">เครดิต: {image.creditText}{image.source && <> · <a href={image.source} target="_blank" rel="noopener noreferrer" className={linkStyle}>แหล่งภาพต้นฉบับ<span className="sr-only"> (เปิดแท็บใหม่)</span></a></>}</p>
        {image.reference && <p className="text-sm"><a href={image.reference} target="_blank" rel="noopener noreferrer" className={linkStyle}>ดูผลิตภัณฑ์จากผู้ผลิต<span className="sr-only"> (เปิดแท็บใหม่)</span></a></p>}
        {image.originalTitle && <p className="break-words text-xs leading-5 text-slate-500">ชื่อต้นฉบับ: {image.originalTitle}</p>}
        {image.license && <p className="text-sm"><a href={image.license} target="_blank" rel="noopener noreferrer" className={linkStyle}>{image.licenseName}<span className="sr-only"> (เปิดแท็บใหม่)</span></a></p>}
        {!image.license && <p className="text-xs leading-5 text-slate-500">ไม่มีการระบุใบอนุญาตแบบเปิดสำหรับภาพนี้ ลิงก์ผู้ผลิตเป็นแหล่งที่มา ไม่ใช่การอนุญาตให้ใช้ภาพซ้ำ</p>}
        <details className="space-y-3 text-sm leading-6">
          <summary className="min-h-11 cursor-pointer py-2 font-semibold text-slate-700">บริบทภาพและการปรับขนาด</summary>
          {image.notes.map((note, index) => <p key={index} className="[overflow-wrap:anywhere]"><BrandText text={note} /></p>)}
        </details>
        <Link href={image.asset} prefetch={false} className={`${linkStyle} inline-flex min-h-11 items-center text-sm`}>ดูไฟล์ภาพนี้</Link>
      </article>)}
    </div>
  </div>;
}
