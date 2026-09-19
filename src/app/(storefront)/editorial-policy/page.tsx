import React from 'react';

export const metadata = {
  alternates: { canonical: '/editorial-policy' },
  robots: { index: false, follow: true },
  title: 'นโยบายบรรณาธิการ | EVSELECT',
  description: 'นโยบายบรรณาธิการ - EVSELECT',
};

export default function EditorialPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">นโยบายบรรณาธิการ</h1>
      <p className="text-gray-600">
        หน้านี้อยู่ระหว่างการตรวจสอบความถูกต้องทางกฎหมายและข้อกำหนด
      </p>
    </div>
  );
}
