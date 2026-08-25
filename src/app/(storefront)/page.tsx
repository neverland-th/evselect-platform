import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import VehicleFilter, { VehicleOption, StorefrontProduct } from '@/components/VehicleFilter';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Car, 
  ShoppingBag, 
  MessageCircle, 
  Zap, 
  ArrowRight, 
  Sliders, 
  Sparkles, 
  Box, 
  Truck, 
  RotateCcw,
  Check,
  AlertTriangle
} from 'lucide-react';

export const revalidate = 0; // Dynamic server rendering

export default async function StorefrontPage() {
  // Fetch vehicles from database — graceful fallback if DB unavailable (e.g. on Vercel)
  let dbVehicles: { id: string; make: string; model: string; year: string; variant: string }[] = [];
  try {
    dbVehicles = await prisma.vehicle.findMany({
      orderBy: [{ make: 'asc' }, { model: 'asc' }, { variant: 'asc' }]
    });
  } catch {
    // DB not available — use fallback data below
  }

  // Fallback initial Thai EV vehicles if database hasn't been seeded yet
  const defaultVehicles: VehicleOption[] = [
    { id: 'v1', make: 'BYD', model: 'Atto 3', year: '2022+', variant: 'Extended Range' },
    { id: 'v2', make: 'BYD', model: 'Atto 3', year: '2022+', variant: 'Standard Range' },
    { id: 'v3', make: 'BYD', model: 'Seal', year: '2023+', variant: 'AWD Performance' },
    { id: 'v4', make: 'BYD', model: 'Seal', year: '2023+', variant: 'Premium' },
    { id: 'v5', make: 'BYD', model: 'Seal', year: '2023+', variant: 'Dynamic' },
    { id: 'v6', make: 'BYD', model: 'Sealion 7', year: '2024+', variant: 'Standard' },
    { id: 'v7', make: 'Tesla', model: 'Model 3', year: 'Highland (2024+)', variant: 'Long Range AWD' },
    { id: 'v8', make: 'Tesla', model: 'Model 3', year: 'Highland (2024+)', variant: 'RWD' },
    { id: 'v9', make: 'Tesla', model: 'Model Y', year: '2022+', variant: 'RWD' },
    { id: 'v10', make: 'Tesla', model: 'Model Y L', year: '2024+', variant: 'RWD' },
    { id: 'v11', make: 'Zeekr', model: 'X', year: '2024+', variant: 'Premium' },
    { id: 'v12', make: 'Zeekr', model: '009', year: '2024+', variant: 'Luxury' },
    { id: 'v13', make: 'Deepal', model: 'S05', year: '2024+', variant: 'Standard' },
    { id: 'v14', make: 'Geely', model: 'EX2', year: '2024+', variant: 'Standard' },
  ];

  const vehicles: VehicleOption[] = dbVehicles.length > 0
    ? dbVehicles.map(v => ({ id: v.id, make: v.make, model: v.model, year: v.year, variant: v.variant }))
    : defaultVehicles;

  // Fetch products and active batches with verified fitments — graceful fallback if DB unavailable
  type DbProduct = Awaited<ReturnType<typeof prisma.product.findMany<{
    include: {
      category: true;
      batches: {
        where: { status: { in: ['ACTIVE', 'SAMPLE_RECEIVED'] } };
        include: {
          fitments: {
            where: { status: 'PASSED' };
            include: { vehicle: true };
          };
        };
      };
    };
  }>>>[number];

  function transformProduct(p: DbProduct): StorefrontProduct {
    const verifiedVehiclesMap = new Map<string, { vehicleId: string; make: string; model: string; year: string; variant: string; status: string }>();
    let representativeCost: number | null = null;

    p.batches.forEach(b => {
      if (b.cost && !representativeCost) representativeCost = b.cost;
      b.fitments.forEach(f => {
        if (!verifiedVehiclesMap.has(f.vehicleId)) {
          verifiedVehiclesMap.set(f.vehicleId, {
            vehicleId: f.vehicleId,
            make: f.vehicle.make,
            model: f.vehicle.model,
            year: f.vehicle.year,
            variant: f.vehicle.variant,
            status: f.status
          });
        }
      });
    });

    const costVal = representativeCost || 450;
    const priceThb = Math.round((costVal * 2.2) / 10) * 10 || 990;

    return {
      id: p.id,
      sku: p.sku,
      title: p.title,
      description: p.description,
      categoryName: p.category.name,
      shopeeId: p.category.shopeeId,
      wooId: p.category.wooId,
      cost: representativeCost,
      priceThb,
      verifiedVehicles: Array.from(verifiedVehiclesMap.values())
    };
  }

  let dbProducts: DbProduct[] = [];
  try {
    dbProducts = await prisma.product.findMany({
      include: {
        category: true,
        batches: {
          where: { status: { in: ['ACTIVE', 'SAMPLE_RECEIVED'] } },
          include: {
            fitments: {
              where: { status: 'PASSED' },
              include: { vehicle: true }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
  } catch {
    // DB not available — products will fall through to curated demo data below
  }

  let products: StorefrontProduct[] = dbProducts.map(transformProduct);

  // If no products in DB yet, provide realistic curated starter accessories
  if (products.length === 0) {
    products = [
      {
        id: 'p1',
        sku: 'EV-M3H-CC-TRAY',
        title: 'ถาดวางของคอนโซลกลาง 2 ชั้น บุผ้ากำมะหยี่ Model 3 Highland',
        description: 'ขึ้นรูปตรงรุ่นสำหรับ Tesla Model 3 Highland (ปี 2024+) พวงมาลัยขวาสเปกไทย บุผ้ากำมะหยี่ลดเสียงก๊อกแก๊ก พร้อมรางสไลด์ลื่นไหล',
        categoryName: 'ถาดและกล่องจัดระเบียบคอนโซล',
        shopeeId: '1001',
        wooId: '11',
        cost: 320,
        priceThb: 690,
        imageUrl: '/images/tray-organizer.jpg',
        verifiedVehicles: [
          { vehicleId: 'v7', make: 'Tesla', model: 'Model 3', year: 'Highland (2024+)', variant: 'Long Range AWD', status: 'PASSED' },
          { vehicleId: 'v8', make: 'Tesla', model: 'Model 3', year: 'Highland (2024+)', variant: 'RWD', status: 'PASSED' },
        ]
      },
      {
        id: 'p2',
        sku: 'EV-SEAL-TPE-MATS',
        title: 'ชุดพรมปูพื้น TPE 3D พรีเมียม กันน้ำ ไร้กลิ่น สำหรับ BYD Seal',
        description: 'สแกน 3D เข้ารูปพวงมาลัยขวาสเปกไทย 100% วัสดุ TPE เกรดการแพทย์ ไร้กลิ่นพลาสติก ทนน้ำ โคลน ล้างทำความสะอาดง่าย',
        categoryName: 'พรมปูพื้นและถาดรอง',
        shopeeId: '1002',
        wooId: '12',
        cost: 1100,
        priceThb: 2490,
        imageUrl: '/images/tpe-floormats.jpg',
        verifiedVehicles: [
          { vehicleId: 'v3', make: 'BYD', model: 'Seal', year: '2023+', variant: 'AWD Performance', status: 'PASSED' },
          { vehicleId: 'v4', make: 'BYD', model: 'Seal', year: '2023+', variant: 'Premium', status: 'PASSED' },
          { vehicleId: 'v5', make: 'BYD', model: 'Seal', year: '2023+', variant: 'Dynamic', status: 'PASSED' },
        ]
      },
      {
        id: 'p3',
        sku: 'EV-ATTO3-SUNSHADE',
        title: 'ม่านบังแดดหลังคาพาโนรามา เคลือบเงินสะท้อนความร้อน BYD Atto 3',
        description: 'โครงสปริงเข้ารูปเป๊ะ ไม่หย่อนคล้อย เคลือบชั้น Nano Silver สะท้อนรังสี UV และความร้อน ช่วยลดอุณหภูมิห้องโดยสารในไทยได้สูงสุด 14°C',
        categoryName: 'ม่านบังแดดและกันความร้อน',
        shopeeId: '1003',
        wooId: '13',
        cost: 450,
        priceThb: 990,
        imageUrl: '/images/sunroof-shade.jpg',
        verifiedVehicles: [
          { vehicleId: 'v1', make: 'BYD', model: 'Atto 3', year: '2022+', variant: 'Extended Range', status: 'PASSED' },
          { vehicleId: 'v2', make: 'BYD', model: 'Atto 3', year: '2022+', variant: 'Standard Range', status: 'PASSED' },
        ]
      },
      {
        id: 'p4',
        sku: 'EV-ZEEKRX-CHARG-MAT',
        title: 'แผ่นซิลิโคนกันลื่นถนอมแท่นชาร์จไร้สาย Zeekr X',
        description: 'ซิลิโคนเกรดพรีเมียม ปกป้องแท่นชาร์จจากรอยขีดข่วน กันมือถือลื่นหลุดขณะเร่งความเร็ว ชาร์จไวไร้สาย Qi ได้เต็มประสิทธิภาพ',
        categoryName: 'อุปกรณ์ตกแต่งภายใน',
        shopeeId: '1001',
        wooId: '11',
        cost: 210,
        priceThb: 490,
        imageUrl: '/images/wireless-pad.jpg',
        verifiedVehicles: [
          { vehicleId: 'v11', make: 'Zeekr', model: 'X', year: '2024+', variant: 'Premium', status: 'PASSED' },
        ]
      },
      {
        id: 'p5',
        sku: 'EV-SEALION7-TRUNK',
        title: 'ถาดวางสัมภาระห้องเก็บของท้ายรถ ขอบยกกันน้ำ BYD Sealion 7',
        description: 'ขอบยกสูงป้องกันของเหลวหกเลอะห้องโดยสาร ผลิตจาก TPE แข็งแรงทนทาน ออกแบบตรงตามมิติท้ายรถ Sealion 7 สเปกไทย',
        categoryName: 'ถาดท้ายและกล่องเก็บของ',
        shopeeId: '1002',
        wooId: '12',
        cost: 750,
        priceThb: 1690,
        imageUrl: '/images/trunk-liner.jpg',
        verifiedVehicles: [
          { vehicleId: 'v6', make: 'BYD', model: 'Sealion 7', year: '2024+', variant: 'Standard', status: 'PASSED' },
        ]
      },
      {
        id: 'p6',
        sku: 'EV-DEEPAL-SCRN-PROT',
        title: 'ฟิล์มกระจกนิรภัย 9H เคลือบด้านกันรอยหน้าจอกลาง 15.6" Deepal S05',
        description: 'กระจกนิรภัยความคมชัดสูง เคลือบสารลดรอยนิ้วมือและลดแสงสะท้อน ออกแบบเฉพาะหน้าจอกลาง Deepal ในไทย สัมผัสทัชลื่นไหล',
        categoryName: 'ฟิล์มและอุปกรณ์อิเล็กทรอนิกส์',
        shopeeId: '1004',
        wooId: '14',
        cost: 180,
        priceThb: 450,
        imageUrl: '/images/screen-protector.jpg',
        verifiedVehicles: [
          { vehicleId: 'v13', make: 'Deepal', model: 'S05', year: '2024+', variant: 'Standard', status: 'PASSED' },
        ]
      },
    ];
  }

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section with Real Automotive Cockpit Imagery */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-36 overflow-hidden border-b border-zinc-800/80">
        {/* Background Real Photo & Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/hero-bg.jpg"
            alt="EV Cockpit Background"
            fill
            priority
            className="object-cover object-center opacity-25 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/85 to-[#09090b]/60" />
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-lime-500/15 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Logo Badge in Hero */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-1.5 shadow-[0_0_20px_-5px_rgba(132,204,22,0.3)]">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-zinc-300">
                แพลตฟอร์มอุปกรณ์แต่ง EV ตรงรุ่นสเปกไทย #1
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                DRIVE BETTER. <br />
                <span className="text-gradient-lime">SELECT SMARTER.</span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                อุปกรณ์เสริม EV คัดเกรดพรีเมียม <strong className="text-white font-semibold">ผ่านการทดสอบ Fitment จริงบนรถสเปกไทย 100%</strong> ไม่ต้องเสี่ยงเดา ไม่เจอปัญหาติดขัด ใส่ได้พอดีแน่นอน
              </p>
            </div>

            {/* Quick Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full px-4 sm:px-0">
              <a
                href="#vehicle-finder"
                className="inline-flex justify-center items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black text-sm font-bold px-6 py-3.5 rounded-xl shadow-[0_0_30px_-5px_rgba(132,204,22,0.5)] transition-all hover:scale-105 w-full sm:w-auto"
              >
                <Car className="w-4 h-4" />
                <span>เลือกรุ่นรถของคุณ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://shopee.co.th/shop/9535932"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl border border-zinc-700 backdrop-blur-md transition-all w-full sm:w-auto"
              >
                <ShoppingBag className="w-4 h-4 text-orange-400" />
                <span>ช้อปผ่าน Shopee Thailand</span>
              </a>
            </div>

            {/* Trust Pillars Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10 text-left">
              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-lime-500/10 text-lime-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">ทดสอบบนรถไทย</h5>
                  <p className="text-[11px] text-zinc-400">พวงมาลัยขวาใส่ได้ 100%</p>
                </div>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-lime-500/10 text-lime-400 flex items-center justify-center shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">คัดเกรดโรงงาน</h5>
                  <p className="text-[11px] text-zinc-400">ตรวจสอบ QC อย่างเข้มงวด</p>
                </div>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-lime-500/10 text-lime-400 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">ส่งด่วนจากไทย</h5>
                  <p className="text-[11px] text-zinc-400">ศูนย์สต็อกกรุงเทพฯ</p>
                </div>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-lime-500/10 text-lime-400 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white">รับประกัน Fitment</h5>
                  <p className="text-[11px] text-zinc-400">เปลี่ยนคืนฟรีใน 7 วัน</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog Section with Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VehicleFilter vehicles={vehicles} products={products} />
      </section>

      {/* The EVSELECT Standard & Fitment Assurance Section with Real Inspection Photo */}
      <section id="fitment-assurance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Problem vs Solution */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-lime-400 bg-lime-950/60 border border-lime-800/50 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>จุดเด่นของ EVSELECT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                ทำไมของแต่ง EV ทั่วไปจากจีนถึงมักมีปัญหาเมื่อใส่ในไทย?
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                ร้านค้าทั่วไปมักนำเข้าสินค้าแบบไม่ทดสอบ รถยนต์ไฟฟ้าสเปกไทย (พวงมาลัยขวา RHD) มักมีการปรับมิติช่องคอนโซล ตำแหน่งพวงมาลัย หรือการตัดเย็บภายในที่แตกต่างจากรถสเปกจีน ทำให้ของที่สั่งมาใส่ไม่สนิทหรือใช้งานไม่ได้
              </p>

              {/* QC Inspection Real Image Callout */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-zinc-800 shadow-md">
                <Image
                  src="/images/qc-inspection.jpg"
                  alt="EV Fitment Inspection Lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
                  <span className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>ศูนย์ตรวจเช็กและทดสอบ Fitment กรุงเทพฯ</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-red-950/20 border border-red-900/30 rounded-xl p-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-red-200 block">ร้านค้าทั่วไปในมาร์เก็ตเพลส:</strong>
                    <span className="text-xs text-zinc-400">
                      ไม่อิงสเปกไทย หลวม มีช่องว่าง พรมเบียดคันเร่ง คอนโซลปิดไม่ได้ และเสียเวลาส่งคืนไปจีน
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-lime-950/30 border border-lime-800/40 rounded-xl p-3">
                  <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-lime-300 block">มาตรฐาน EVSELECT:</strong>
                    <span className="text-xs text-zinc-300">
                      นำเข้าตัวอย่างจริงมาทดสอบติดตั้งบนรถสเปกไทยทุกโมเดล ตรวจสอบระยะฟิตติ้งก่อนเปิดขายทุกชิ้น
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 5-Stage Verification Workflow */}
            <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center justify-between">
                <span>กระบวนการทดสอบ 5 ขั้นตอน (Fitment Workflow)</span>
                <span className="text-xs font-mono font-normal text-lime-400">QC คุณภาพเข้มงวด</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">คัดสรรตรงจากโรงงานผู้ผลิตชั้นนำในจีน</h5>
                    <p className="text-xs text-zinc-400">ตรวจสอบไฟล์แม่พิมพ์ 3D CAD และมาตรฐานวัสดุจากโรงงานผู้ผลิตโดยตรง</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">ส่งตัวอย่างด่วนสู่ศูนย์ปฏิบัติการในกรุงเทพฯ</h5>
                    <p className="text-xs text-zinc-400">รับสินค้าตัวอย่างเข้ามาตรวจเช็กความเรียบร้อยและเนื้อวัสดุในแล็บ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">ทดสอบติดตั้งจริงบนรถ EV สเปกไทย (Test-Fit)</h5>
                    <p className="text-xs text-zinc-400">ลองติดตั้งจริงบนรถพวงมาลัยขวา ตรวจสอบระยะกิ๊บล็อก ปุ่มกด ช่องสายไฟ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">ทดสอบความทนทานต่อสภาพอากาศร้อนของไทย</h5>
                    <p className="text-xs text-zinc-400">ตรวจสอบการทนความร้อน ไม่บิดงอ ไม่ละลาย และไร้กลิ่นกวนใจเมื่อจอดตากแดด</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0">
                    5
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-lime-400">อนุมัติเครื่องหมาย &quot;ตรงรุ่น 100%&quot; และเปิดจำหน่าย</h5>
                    <p className="text-xs text-zinc-400">เฉพาะสินค้าที่ผ่านการทดสอบเท่านั้นที่จะได้รับสิทธิ์จำหน่าย พร้อมรับประกัน 7 วัน</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Thai EV Models Showcase with Real Vehicle Imagery */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-lime-400">
            ครอบคลุมรถยนต์ไฟฟ้าทุกรุ่นยอดนิยมในไทย
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            ออกแบบเฉพาะสำหรับรถ EV สเปกประเทศไทย
          </h2>
          <p className="text-sm text-zinc-400">
            รองรับรถที่จำหน่ายผ่านศูนย์อย่างเป็นทางการในไทย พวงมาลัยขวาใส่ได้พอดี ไร้รอยต่อ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* BYD */}
          <div className="group bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
            <div className="relative w-full h-36 bg-zinc-950 overflow-hidden">
              <Image
                src="/images/byd-seal.jpg"
                alt="BYD Seal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-xs font-mono font-bold text-lime-400 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-lime-800/60">
                  BYD
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">Seal & Sealion 7</h4>
              <p className="text-[11px] text-zinc-400">Dynamic, Premium, AWD Performance</p>
            </div>
          </div>

          {/* Tesla */}
          <div className="group bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
            <div className="relative w-full h-36 bg-zinc-950 overflow-hidden">
              <Image
                src="/images/tesla-model3.jpg"
                alt="Tesla Model 3 Highland"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-xs font-mono font-bold text-lime-400 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-lime-800/60">
                  Tesla
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">Model 3 Highland</h4>
              <p className="text-[11px] text-zinc-400">Model 3 & Model Y สเปกไทย (RHD)</p>
            </div>
          </div>

          {/* BYD Atto 3 */}
          <div className="group bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
            <div className="relative w-full h-36 bg-zinc-950 overflow-hidden">
              <Image
                src="/images/byd-atto3.jpg"
                alt="BYD Atto 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-xs font-mono font-bold text-lime-400 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-lime-800/60">
                  BYD
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">Atto 3</h4>
              <p className="text-[11px] text-zinc-400">Standard & Extended Range</p>
            </div>
          </div>

          {/* Zeekr */}
          <div className="group bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
            <div className="relative w-full h-36 bg-zinc-950 overflow-hidden">
              <Image
                src="/images/zeekr-x.jpg"
                alt="Zeekr X"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-xs font-mono font-bold text-lime-400 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-lime-800/60">
                  Zeekr
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">Zeekr X & 009</h4>
              <p className="text-[11px] text-zinc-400">Flagship Luxury Thai Trims</p>
            </div>
          </div>

          {/* Deepal */}
          <div className="group bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
            <div className="relative w-full h-36 bg-zinc-950 overflow-hidden">
              <Image
                src="/images/deepal-s05.jpg"
                alt="Deepal S05"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-xs font-mono font-bold text-lime-400 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-lime-800/60">
                  Deepal
                </span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">Deepal S05 / S07</h4>
              <p className="text-[11px] text-zinc-400">Changan Thai Market Specs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Channel Purchase CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-gradient-to-r from-orange-950/30 via-zinc-900 to-blue-950/30 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            สั่งซื้อได้อย่างมั่นใจผ่าน Shopee หรือทักสอบถามทีมงานโดยตรง
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            เลือกช่องทางที่คุณสะดวก ช้อปปลอดภัยผ่าน Shopee มีการันตี หรือทักแชทคุยกับผู้เชี่ยวชาญด้านอุปกรณ์แต่ง EV ในกรุงเทพฯ ได้ทันที
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full">
            <a
              href="https://shopee.co.th/shop/9535932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all w-full sm:w-auto"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ไปยังร้านค้า Shopee Thailand</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ทักแชทสั่งซื้อผ่าน Facebook / LINE</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
