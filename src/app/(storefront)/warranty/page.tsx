import Link from 'next/link';
import InformationPage, { informationLinkStyle } from '@/components/InformationPage';

export const metadata = {
  alternates: { canonical: '/warranty' },
  robots: { index: false, follow: true },
  title: 'นโยบายการรับประกัน | EVSELECT',
  description: 'สถานะข้อมูลการรับประกันในช่วงที่ EVSELECT ยังไม่เปิดจำหน่ายสินค้า',
};

export default function WarrantyPage() {
  return <InformationPage title="ข้อมูลการรับประกัน" intro="ขณะนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน จึงยังไม่มีเงื่อนไขรับประกันสินค้าที่เปิดขายบนเว็บไซต์นี้">
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">ข้อมูลในบทความไม่ใช่ข้อเสนอรับประกัน</h2><p>การกล่าวถึงระยะรับประกันของแบรนด์ใดในบทความเป็นข้อมูลของแหล่งที่อ้างอิง ต้องตรวจเงื่อนไขรุ่นสินค้า ตลาด และผู้ขายจริงอีกครั้ง หากต้องการสอบถามข้อมูลในบทความ ใช้ <Link href="/contact" className={informationLinkStyle}>ช่องทางติดต่อทีมงาน</Link> ได้</p></section>
  </InformationPage>;
}
