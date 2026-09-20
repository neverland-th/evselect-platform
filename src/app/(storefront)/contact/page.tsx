import React from 'react';

export const metadata = {
  alternates: { canonical: '/contact' },
  robots: { index: false, follow: true },
  title: 'ติดต่อเรา | EVSELECT',
  description: 'ติดต่อเรา - EVSELECT',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">ติดต่อเรา</h1>
      <p className="text-gray-600">
        บอกรุ่นรถ ปัญหาที่เจอ หรือหัวข้อที่อยากอ่านได้ทาง Facebook Messenger
      </p>
      <a
        href="https://m.me/evselects"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-lime-300 px-5 py-3 font-semibold text-slate-950 underline underline-offset-4 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        แชทกับทีมงานผ่าน Messenger (เปิดแท็บใหม่)
      </a>
      <p className="mt-6 text-sm text-gray-600">
        ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน
      </p>
    </div>
  );
}
