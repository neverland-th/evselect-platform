import Link from 'next/link';
import InformationPage, { informationLinkStyle } from '@/components/InformationPage';

export const metadata = {
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
  title: 'นโยบายความเป็นส่วนตัว | EVSELECT',
  description: 'สถานะการจัดทำนโยบายความเป็นส่วนตัวและช่องทางติดต่อทีมงาน EVSELECT',
};

export default function PrivacyPage() {
  return <InformationPage title="นโยบายความเป็นส่วนตัว" intro="รายละเอียดนโยบายความเป็นส่วนตัวฉบับเต็มอยู่ระหว่างจัดทำและตรวจสอบ หน้านี้ยังไม่ใช่นโยบายฉบับสมบูรณ์">
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">มีคำถามเกี่ยวกับข้อมูลของคุณ</h2><p>ใช้ <Link href="/contact" className={informationLinkStyle}>ช่องทางติดต่อทีมงาน</Link> เพื่อสอบถามหรือแจ้งเรื่องที่เกี่ยวข้องได้ หน้าติดต่อมีลิงก์ไปยัง Facebook ซึ่งเป็นบริการภายนอกและมีนโยบายของผู้ให้บริการนั้นเอง</p></section>
  </InformationPage>;
}
