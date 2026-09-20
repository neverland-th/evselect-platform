import Link from 'next/link';
import type { ReactNode } from 'react';

export const informationLinkStyle = 'font-semibold text-lime-800 underline underline-offset-4 hover:text-lime-950';

export default function InformationPage({ title, intro, children }: { title: string; intro: ReactNode; children: ReactNode }) {
  return <article className="mx-auto max-w-3xl space-y-8 px-4 py-10 text-base leading-[1.9] text-slate-700 sm:px-6 sm:py-14 sm:text-lg">
    <header className="space-y-5">
      <p className="text-sm font-semibold text-lime-800">ข้อมูลเว็บไซต์</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p>{intro}</p>
    </header>
    {children}
    <section aria-labelledby="information-next" className="rounded-2xl border border-lime-200 bg-lime-50 p-5">
      <h2 id="information-next" className="mb-3 text-xl font-bold text-slate-900">อ่านต่อระหว่างเตรียมเปิดตัว</h2>
      <p>ดู <Link href="/articles" className={informationLinkStyle}>บทความรถ EV และคู่มือเลือกอุปกรณ์</Link> หรือกลับไป <Link href="/" className={informationLinkStyle}>หน้าแรก</Link> เพื่อเลือกเรื่องที่ตรงกับรถของคุณ</p>
    </section>
  </article>;
}
