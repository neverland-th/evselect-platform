import { brakeComparisonProducts, formatKitPrice } from '@/lib/brake-comparison';
import styles from './BrakeGuide.module.css';

export default function BrakeKitReferences() {
  return <div className="overflow-hidden rounded-2xl border border-slate-200" data-testid="complete-kit-references">
    <table className={styles.table}>
      <caption>ชุดหน้าใหม่ทั้ง 4 รายการมีจาน 380 mm และคาลิเปอร์ 6 พอต · ตรวจราคา 19 ก.ย. 2569</caption>
      <thead><tr><th scope="col">ชุดและแหล่งที่มา</th><th scope="col">สเปก / อุปกรณ์ในราคา</th><th scope="col">ราคาและรถตามแคตตาล็อก</th></tr></thead>
      <tbody>{brakeComparisonProducts.map(product => <tr key={product.id}>
        <th scope="row" className="lg:w-1/4"><a href={product.source} className="text-lime-800 underline underline-offset-4">{product.name}</a><span className="mt-2 block text-sm font-normal text-slate-600">{product.part}<br />{product.authority}</span></th>
        <td data-label="สเปก / อุปกรณ์ในราคา" className="lg:w-1/3"><strong>{product.diameterMm} × {product.thicknessMm} mm · {product.pistons} พอต</strong><p className="mt-2">{product.contents}</p><a href={product.technicalSource} className="mt-2 inline-flex min-h-11 items-center text-sm text-lime-800 underline">สเปกและรายการอุปกรณ์ ↗</a></td>
        <td data-label="ราคาและรถตามแคตตาล็อก"><strong className="text-lg text-slate-950">{formatKitPrice(product)}</strong><p className="mt-1 text-sm text-slate-600">{product.priceNote}</p><p className="mt-3 font-semibold">{product.vehicle}</p><p className="mt-1 text-sm text-slate-600">{product.fitmentNote}</p><a href={product.wheelSource} className="mt-2 inline-flex min-h-11 items-center text-sm text-lime-800 underline">ข้อมูลตรวจระยะล้อ ↗</a></td>
      </tr>)}</tbody>
    </table>
  </div>;
}
