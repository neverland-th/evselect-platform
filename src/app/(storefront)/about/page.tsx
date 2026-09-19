import React from 'react';

export const metadata = {
  alternates: { canonical: '/about' },
  robots: { index: false, follow: true },
  title: 'เกี่ยวกับเรา | EVSELECT',
  description: 'เกี่ยวกับเรา - EVSELECT',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">เกี่ยวกับเรา</h1>
      <p className="text-gray-600">
        หน้านี้อยู่ระหว่างการตรวจสอบความถูกต้องทางกฎหมายและข้อกำหนด
      </p>
    </div>
  );
}
