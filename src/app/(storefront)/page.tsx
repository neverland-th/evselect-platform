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
  Sparkles, 
  Box, 
  Truck, 
  RotateCcw,
  Check,
  AlertTriangle,
  Star,
  Award,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal,
  Flame
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

  // Authoritative Thai EV vehicle list fallback
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
      shopeeItemId: p.shopeeItemId,
      shopeeShopId: p.shopeeShopId,
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
    // DB not available — products will fall through to curated starter data below
  }

  let products: StorefrontProduct[] = dbProducts.map(transformProduct);

  // Curated high-fitment starter accessories matching official Thai EV models
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
        description: 'สแกน 3D เข้ารูปพวงมาลัยขวาสเปกไทย 100% วัสดุ TPE คุณภาพสูง ไร้กลิ่นพลาสติก ทนน้ำ โคลน ล้างทำความสะอาดง่าย ไม่เบียดคันเร่ง',
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
        description: 'โครงสปริงเข้ารูปเป๊ะ ไม่หย่อนคล้อย เคลือบชั้น Nano Silver สะท้อนรังสี UV และความร้อน ช่วยลดอุณหภูมิห้องโดยสารขณะจอดตากแดดในไทย',
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
    <div className="space-y-16 md:space-y-24 pb-20 bg-white">
      {/* 1. Hero Stage: Dynamic Headline, Value Prop & 3-Car Showcase Preview */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-28 overflow-hidden border-b border-slate-200 bg-slate-50/50">
        {/* Subtle Background Texture & Soft Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/hero-bg.jpg"
            alt="EV Cockpit Background"
            fill
            priority
            className="object-cover object-center opacity-10 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-slate-50/95" />
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Top Thai RHD Verification Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-4 py-1.5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-500 animate-pulse shrink-0"></span>
              <span className="text-xs font-semibold text-slate-800">
                🇹🇭 ศูนย์วิจัย Fitment &amp; อุปกรณ์เสริมรถ EV สเปกไทยพวงมาลัยขวา (RHD) 100%
              </span>
            </div>

            {/* Main Punchy Automotive Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                DRIVE BETTER. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-lime-600 via-lime-500 to-emerald-600 bg-clip-text text-transparent">
                  SELECT SMARTER.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                อุปกรณ์เสริม EV คัดเกรดพรีเมียม <strong className="text-slate-900 font-semibold">ผ่านการทดสอบติดตั้งจริงบนรถสเปกไทย 100%</strong> ไม่ต้องเสี่ยงเดา ไม่ติดขัด ไม่เจาะตัวถัง ไม่กระทบประกันศูนย์ พร้อมบทวิเคราะห์รีวิวรถยนต์ไฟฟ้าเจาะลึกจาก EVSELECT Test Lab
              </p>
            </div>

            {/* Hero Quick Navigation CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full px-4 sm:px-0">
              <a
                href="#vehicle-finder"
                className="inline-flex justify-center items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-all hover:scale-105 w-full sm:w-auto"
              >
                <Car className="w-4 h-4" />
                <span>ค้นหาอุปกรณ์ตรงรุ่น</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#featured-reviews"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold px-6 py-3 rounded-xl border border-slate-300 shadow-xs transition-all w-full sm:w-auto"
              >
                <Award className="w-4 h-4 text-lime-600" />
                <span>อ่านรีวิว EV เจาะลึก</span>
              </a>

              <a
                href="https://shopee.co.th/shop/9535932"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold px-6 py-3 rounded-xl border border-slate-300 shadow-xs transition-all w-full sm:w-auto"
              >
                <ShoppingBag className="w-4 h-4 text-orange-500" />
                <span>ร้านค้า Shopee Thailand</span>
              </a>
            </div>

            {/* 3-Car Showcase Preview Cards (Tesla Highland, Zeekr X 2026, BYD Seal) */}
            <div className="pt-6 sm:pt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* 1. Tesla Model 3 Highland */}
                <Link
                  href="/articles/tesla-model-3-highland-review"
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/reviews/tesla-model-3-hero.jpg"
                      alt="Tesla Model 3 Highland สเปกไทย"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[11px] font-bold text-slate-900 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded shadow-xs">
                        Tesla Model 3
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-lime-500 text-black text-[11px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                      9.3 / 10
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        Tesla Model 3 Highland
                      </h2>
                      <p className="text-xs text-slate-500">
                        Performance 460 แรงม้า • กระจก Acoustic 360° • เบาะเป่าลมเย็น
                      </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-lime-700 border-t border-slate-100">
                      <span>อ่านรีวิวเจาะลึก</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>

                {/* 2. The New Zeekr X (July 2026) */}
                <Link
                  href="/articles/zeekr-x-review"
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/reviews/zeekr-x-hero.jpg"
                      alt="The New Zeekr X กรกฎาคม 2026 สเปกไทย"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[11px] font-bold text-slate-900 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded shadow-xs">
                        Zeekr X (ก.ค. 2026)
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-lime-500 text-black text-[11px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                      9.1 / 10
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        The New Zeekr X 2026
                      </h2>
                      <p className="text-xs text-slate-500">
                        มอเตอร์คู่ AWD 489 แรงม้า • 0-100 ใน 3.7 วินาที • ใต้ท้องสูง 189 มม.
                      </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-lime-700 border-t border-slate-100">
                      <span>อ่านรีวิวเจาะลึก</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>

                {/* 3. BYD Seal AWD Performance */}
                <Link
                  href="/articles/byd-seal-review"
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col"
                >
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/reviews/byd-seal-hero.jpg"
                      alt="BYD Seal AWD Performance สเปกไทย"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[11px] font-bold text-slate-900 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded shadow-xs">
                        BYD Seal
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-lime-500 text-black text-[11px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                      9.0 / 10
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        BYD Seal AWD Performance
                      </h2>
                      <p className="text-xs text-slate-500">
                        สปอร์ตซีดาน 530 แรงม้า • เทคโนโลยี Cell-to-Body • ควบคุม iTAC
                      </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-lime-700 border-t border-slate-100">
                      <span>อ่านรีวิวเจาะลึก</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Trust Pillars Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 text-left">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0 border border-lime-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">ทดสอบบนรถไทย 100%</p>
                  <p className="text-[11px] text-slate-500">พวงมาลัยขวา RHD ใส่ได้เป๊ะ</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0 border border-lime-200">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">สต็อกพร้อมส่ง กทม.</p>
                  <p className="text-[11px] text-slate-500">จัดส่งไว 24-48 ชั่วโมง</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0 border border-lime-200">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">รับประกัน Fitment</p>
                  <p className="text-[11px] text-slate-500">เปลี่ยนคืนฟรีใน 7 วัน</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center shrink-0 border border-lime-200">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">ช้อปมั่นใจ ปลอดภัย</p>
                  <p className="text-[11px] text-slate-500">Shopee Mall / มีทีมงานดูแล</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Brand Selector Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <SlidersHorizontal className="w-5 h-5 text-lime-600" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">เลือกยี่ห้อรถของคุณเพื่อค้นหาอุปกรณ์ตรงรุ่น</h3>
                <p className="text-xs text-slate-500">คลิกเพื่อไปยังระบบกรองอุปกรณ์สำหรับรถยนต์ไฟฟ้าสเปกไทย</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href="#vehicle-finder"
                className="px-3.5 py-1.5 bg-white hover:bg-lime-50 border border-slate-200 hover:border-lime-400 text-xs font-bold text-slate-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>BYD</span>
                <span className="text-[10px] text-slate-400 font-normal">(Seal, Atto 3, Sealion)</span>
              </a>
              <a
                href="#vehicle-finder"
                className="px-3.5 py-1.5 bg-white hover:bg-lime-50 border border-slate-200 hover:border-lime-400 text-xs font-bold text-slate-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Tesla</span>
                <span className="text-[10px] text-slate-400 font-normal">(Model 3 Highland, Y)</span>
              </a>
              <a
                href="#vehicle-finder"
                className="px-3.5 py-1.5 bg-white hover:bg-lime-50 border border-slate-200 hover:border-lime-400 text-xs font-bold text-slate-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Zeekr</span>
                <span className="text-[10px] text-slate-400 font-normal">(X 2026, 009, 7X)</span>
              </a>
              <a
                href="#vehicle-finder"
                className="px-3.5 py-1.5 bg-white hover:bg-lime-50 border border-slate-200 hover:border-lime-400 text-xs font-bold text-slate-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Deepal</span>
                <span className="text-[10px] text-slate-400 font-normal">(S05, S07, L07)</span>
              </a>
              <a
                href="#vehicle-finder"
                className="px-3.5 py-1.5 bg-white hover:bg-lime-50 border border-slate-200 hover:border-lime-400 text-xs font-bold text-slate-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Geely</span>
                <span className="text-[10px] text-slate-400 font-normal">(EX2)</span>
              </a>
              <a
                href="#vehicle-finder"
                className="px-3.5 py-1.5 bg-white hover:bg-lime-50 border border-slate-200 hover:border-lime-400 text-xs font-bold text-slate-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>MG</span>
                <span className="text-[10px] text-slate-400 font-normal">(MG4)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Interactive Catalog Section with Filter */}
      <section id="vehicle-finder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="mb-6 space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-700 bg-lime-50 px-3 py-1 rounded-full border border-lime-200">
            <Car className="w-3.5 h-3.5" />
            <span>ระบบค้นหาอุปกรณ์ตรงรุ่น (Vehicle Accessory Finder)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            เลือกดูอุปกรณ์สำหรับรถ EV ของคุณ
          </h2>
          <p className="text-sm text-slate-600">
            เฉพาะสินค้าที่ผ่านการทดสอบ Fitment บนรถสเปกไทยพวงมาลัยขวา 100% เท่านั้น
          </p>
        </div>
        <VehicleFilter vehicles={vehicles} products={products} />
      </section>

      {/* 4. Popular EV Accessory Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-lime-700 bg-lime-50 px-3 py-1 rounded-full border border-lime-200">
            หมวดหมู่อุปกรณ์ยอดนิยม
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            อุปกรณ์ที่เจ้าของรถ EV ในไทยเลือกติดตั้งมากที่สุด
          </h2>
          <p className="text-sm text-slate-600">
            คัดสรรวัสดุเกรดพรีเมียม ไร้กลิ่น ทนต่อสภาพอากาศร้อนแดดจัดของเมืองไทย 40°C
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1: TPE 3D Mats */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col">
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
              <Image
                src="/images/tpe-floormats.jpg"
                alt="ชุดพรมปูพื้น TPE 3D พรีเมียม"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
                  ยอดนิยมอันดับ 1
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                  ชุดพรมปูพื้น TPE 3D พรีเมียม
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  สแกน 3D เข้ารูปพวงมาลัยขวา ไร้กลิ่นพลาสติกเมื่อจอดตากแดดเมืองไทย 40°C กันน้ำ โคลน ล้างทำความสะอาดง่าย ไม่เบียดคันเร่ง
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-lime-700">
                <span>สำหรับ BYD, Tesla, Zeekr</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Category 2: Sunroof Shade */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col">
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
              <Image
                src="/images/sunroof-shade.jpg"
                alt="ม่านบังแดดหลังคาพาโนรามา เคลือบเงิน Nano-Silver"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
                  จำเป็นสำหรับแดดไทย
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                  ม่านบังแดดหลังคา Nano-Silver
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  โครงสปริงเมมโมรี่เข้ารูป ไม่หย่อนคล้อย เคลือบชั้น Nano Silver สะท้อนรังสี UV และความร้อน ลดอุณหภูมิห้องโดยสารขณะจอดกลางแดด
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-lime-700">
                <span>สำหรับ Model Y/3, Atto 3, Seal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Category 3: Tray Organizer */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col">
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
              <Image
                src="/images/tray-organizer.jpg"
                alt="ถาดวางของคอนโซลกลาง 2 ชั้น บุผ้ากำมะหยี่"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
                  จัดระเบียบในรถ
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                  ถาดคอนโซลกลาง 2 ชั้น
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  เพิ่มพื้นที่จัดเก็บ บุผ้ากำมะหยี่ลดเสียงก๊อกแก๊กของกุญแจและเหรียญ รางสไลด์ลื่นไหล ใช้งานง่ายไม่ติดขัดสายชาร์จ
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-lime-700">
                <span>สำหรับ Model 3 Highland, Zeekr X</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Category 4: Screen Protector & Wireless Pad */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col">
            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
              <Image
                src="/images/screen-protector.jpg"
                alt="ฟิล์มกระจกนิรภัย 9H เคลือบด้านกันรอยหน้าจอกลาง"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
                  ปกป้องหน้าจอ
                </span>
              </div>
            </div>
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                  ฟิล์มกระจก 9H &amp; ซิลิโคนแท่นชาร์จ
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  กระจกนิรภัย 9H สัมผัสลื่นไหล เคลือบสารลดรอยนิ้วมือและลดแสงสะท้อน พร้อมแผ่นซิลิโคนถนอมแท่นชาร์จไร้สาย
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-lime-700">
                <span>สำหรับ Deepal, BYD, Tesla</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured EVSELECT Editorial Reviews & Scorecard Showcase */}
      <section id="featured-reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-700 bg-lime-100 border border-lime-300 px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5" />
                <span>EVSELECT IN-DEPTH REVIEWS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                รีวิวและบทวิเคราะห์เจาะลึกรถ EV สเปกไทย
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                ทดสอบขับขี่จริงบนถนนเมืองไทย ทั้งสมรรถนะ อัตรากินไฟ การเก็บเสียง NVH และฟิตติ้งอุปกรณ์เสริม โดยทีมงาน EVSELECT
              </p>
            </div>

            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-lime-700 bg-white hover:bg-lime-50 border border-slate-200 px-4 py-2 rounded-xl transition-colors shrink-0 shadow-xs"
            >
              <span>ดูบทความทั้งหมด (20+ เรื่อง)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review 1: The New Zeekr X (July 2026) */}
            <Link
              href="/articles/zeekr-x-review"
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-slate-100 shrink-0 overflow-hidden">
                <Image
                  src="/images/reviews/zeekr-x-hero.jpg"
                  alt="รีวิว The New Zeekr X กรกฎาคม 2026 สเปกไทย"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-lime-500 text-black text-xs font-extrabold px-2 py-0.5 rounded shadow-xs">
                  9.1 / 10
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-lime-700 bg-lime-50 px-2 py-0.5 rounded border border-lime-200">
                      ฉบับอัปเดต ก.ค. 2026
                    </span>
                    <span className="text-[11px] text-slate-400">สเปกไทย RHD</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                    The New Zeekr X (MY2026): พรีเมียม SUV 489 แรงม้า
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    มอเตอร์คู่ AWD 489 hp (360 kW) • 0-100 กม./ชม. ใน 3.7 วินาที • ช่วงล่างยกสูง 189 มม. ซับแรงสะเทือนหลุมลูกรังเมืองไทยได้ยอดเยี่ยม
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-lime-700 pt-2 border-t border-slate-100">
                  <span>อ่านรีวิวฉบับเต็ม</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Review 2: Tesla Model 3 Highland */}
            <Link
              href="/articles/tesla-model-3-highland-review"
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-slate-100 shrink-0 overflow-hidden">
                <Image
                  src="/images/reviews/tesla-model-3-hero.jpg"
                  alt="รีวิว Tesla Model 3 Highland สเปกไทย"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-lime-500 text-black text-xs font-extrabold px-2 py-0.5 rounded shadow-xs">
                  9.3 / 10
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-lime-700 bg-lime-50 px-2 py-0.5 rounded border border-lime-200">
                      EVSELECT Editor&apos;s Pick
                    </span>
                    <span className="text-[11px] text-slate-400">สเปกไทย RHD</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                    Tesla Model 3 Highland: เงียบ นุ่ม และลงตัวที่สุด
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Performance 460 แรงม้า (343 kW) • 0-100 ใน 3.1 วิ • กระจก Acoustic 360° รอบคัน • เบาะเป่าลมเย็นระบายอากาศเพื่ออากาศร้อนไทย
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-lime-700 pt-2 border-t border-slate-100">
                  <span>อ่านรีวิวฉบับเต็ม</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Review 3: Zeekr 009 Flagship MPV */}
            <Link
              href="/articles/zeekr-009-review"
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-slate-100 shrink-0 overflow-hidden">
                <Image
                  src="/images/reviews/zeekr-009-hero.jpg"
                  alt="รีวิว Zeekr 009 สเปกไทย"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-lime-500 text-black text-xs font-extrabold px-2 py-0.5 rounded shadow-xs">
                  9.4 / 10
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-lime-700 bg-lime-50 px-2 py-0.5 rounded border border-lime-200">
                      เรือธงลักชัวรี
                    </span>
                    <span className="text-[11px] text-slate-400">สเปกไทย RHD</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                    Zeekr 009: นิยามใหม่ของ First Class MPV ไฟฟ้า 603 แรงม้า
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    ช่วงล่างถุงลมคู่ Dual-Chamber Air Suspension ดูดซับคอสะพานกรุงเทพฯ ได้ไร้ที่ติ พร้อมเบาะ Sofaro First Class นุ่มสบาย
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-lime-700 pt-2 border-t border-slate-100">
                  <span>อ่านรีวิวฉบับเต็ม</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Review 4: BYD Seal AWD Performance */}
            <Link
              href="/articles/byd-seal-review"
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-slate-100 shrink-0 overflow-hidden">
                <Image
                  src="/images/reviews/byd-seal-hero.jpg"
                  alt="รีวิว BYD Seal AWD Performance สเปกไทย"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-lime-500 text-black text-xs font-extrabold px-2 py-0.5 rounded shadow-xs">
                  9.0 / 10
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-lime-700 bg-lime-50 px-2 py-0.5 rounded border border-lime-200">
                      สปอร์ตยอดนิยม
                    </span>
                    <span className="text-[11px] text-slate-400">สเปกไทย RHD</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                    BYD Seal AWD: ซีดานไฟฟ้า 530 แรงม้า ช่วงล่างสปอร์ต
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    0-100 ใน 3.8 วินาที • เทคโนโลยีโครงสร้างตัวถัง CTB แข็งแกร่ง • พร้อมระบบควบคุมแรงบิด iTAC เกาะถนนหนึบแน่น
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-lime-700 pt-2 border-t border-slate-100">
                  <span>อ่านรีวิวฉบับเต็ม</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. The EVSELECT Standard & Fitment Assurance Section with Real Inspection Photo */}
      <section id="fitment-assurance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Problem vs Solution */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-lime-700 bg-lime-100 border border-lime-300 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>จุดเด่นของ EVSELECT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                ทำไมของแต่ง EV ทั่วไปจากจีนถึงมักมีปัญหาเมื่อใส่ในไทย?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                ร้านค้าทั่วไปมักนำเข้าสินค้าแบบไม่ได้ทดสอบจริง รถยนต์ไฟฟ้าสเปกไทย (พวงมาลัยขวา RHD) มีการปรับตำแหน่งคอนโซล แกนพวงมาลัย และตำแหน่งคันเร่งที่แตกต่างจากรถสเปกจีน ทำให้สินค้าจำนวนมากใส่ไม่สนิท เบียดปุ่ม หรือใช้งานไม่ได้จริง
              </p>

              {/* QC Inspection Real Image Callout */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/qc-inspection.jpg"
                  alt="EV Fitment Inspection Lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <span className="text-xs font-medium text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>ศูนย์ตรวจเช็กและทดสอบ Fitment กรุงเทพฯ</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-3.5">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-red-900 block">ร้านค้าทั่วไปในมาร์เก็ตเพลส:</strong>
                    <span className="text-xs text-red-700">
                      ไม่อิงสเปกไทย หลวม มีช่องว่าง พรมเบียดคันเร่ง คอนโซลปิดไม่ได้ และเสียเวลาส่งคืนไปต่างประเทศ
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-lime-50 border border-lime-200 rounded-2xl p-3.5">
                  <CheckCircle2 className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-lime-900 block">มาตรฐาน EVSELECT:</strong>
                    <span className="text-xs text-lime-800">
                      นำเข้าตัวอย่างจริงมาทดสอบติดตั้งบนรถสเปกไทยทุกโมเดล ตรวจสอบระยะฟิตติ้งก่อนเปิดขายทุกชิ้น
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 5-Stage Verification Workflow */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                <span>กระบวนการทดสอบ 5 ขั้นตอน (Fitment Workflow)</span>
                <span className="text-xs font-mono font-bold text-lime-700 bg-lime-50 px-2.5 py-1 rounded-full border border-lime-200">
                  QC คุณภาพเข้มงวด
                </span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">คัดสรรตรงจากโรงงานผู้ผลิตชั้นนำ</h4>
                    <p className="text-xs text-slate-500">ตรวจสอบไฟล์แม่พิมพ์ 3D CAD และมาตรฐานวัสดุจากโรงงานผู้ผลิตโดยตรง</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">ส่งตัวอย่างด่วนสู่ศูนย์ปฏิบัติการในกรุงเทพฯ</h4>
                    <p className="text-xs text-slate-500">รับสินค้าตัวอย่างเข้ามาตรวจเช็กความเรียบร้อยและเนื้อวัสดุในแล็บ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">ทดสอบติดตั้งจริงบนรถ EV สเปกไทย (Test-Fit)</h4>
                    <p className="text-xs text-slate-500">ลองติดตั้งจริงบนรถพวงมาลัยขวา ตรวจสอบระยะกิ๊บล็อก ปุ่มกด ช่องสายไฟ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">ทดสอบความทนทานต่อสภาพอากาศร้อนของไทย</h4>
                    <p className="text-xs text-slate-500">ตรวจสอบการทนความร้อน ไม่บิดงอ ไม่ละลาย และไร้กลิ่นกวนใจเมื่อจอดตากแดด 40°C</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-lime-500 text-black font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    5
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">อนุมัติเครื่องหมาย &quot;ตรงรุ่น 100%&quot; และเปิดจำหน่าย</h4>
                    <p className="text-xs text-slate-500">เฉพาะสินค้าที่ผ่านการทดสอบเท่านั้นที่จะได้รับสิทธิ์จำหน่าย พร้อมรับประกัน 7 วัน</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. B2B Dealer Recruitment Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-lime-400 bg-lime-950/60 border border-lime-800 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>B2B DEALER &amp; WORKSHOP PARTNERS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              เปิดรับสมัครร้านประดับยนต์ &amp; ดีลเลอร์อุปกรณ์ EV ทั่วประเทศ
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              เพิ่มยอดขายให้ร้านของคุณด้วยอุปกรณ์เสริม EV คุณภาพสูงที่ผ่านการทดสอบความเข้ากันได้บนรถสเปกไทยแล้ว 100% ไม่ต้องเสี่ยงสต็อกของไม่ได้มาตรฐาน พร้อมรับราคาส่งพิเศษและบริการส่งด่วนจากคลังกรุงเทพฯ
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-1">
                <span className="text-xs font-bold text-lime-400">ราคาส่งพิเศษ (Wholesale)</span>
                <p className="text-xs text-slate-400">อัตรากำไรดี ไม่กำหนดขั้นต่ำสูงในระยะเริ่มต้น</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-1">
                <span className="text-xs font-bold text-lime-400">การันตี Fitment 100%</span>
                <p className="text-xs text-slate-400">ลดปัญหาเคลมของ ใส่ได้พอดีทุกชิ้น</p>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 space-y-1">
                <span className="text-xs font-bold text-lime-400">สต็อกพร้อมส่งในไทย</span>
                <p className="text-xs text-slate-400">จัดส่งภายใน 24-48 ชม. ลูกค้าไม่ต้องรอนาน</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/dealer"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-all hover:scale-105"
              >
                <span>สมัครเป็นตัวแทนจำหน่าย EVSELECT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Multi-Channel Purchase & Concierge CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-50/80 via-slate-50 to-blue-50/80 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xs">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs">
            <ShoppingBag className="w-3.5 h-3.5 text-orange-500" />
            <span>OFFICIAL STORE &amp; CONCIERGE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            สั่งซื้อได้อย่างมั่นใจผ่าน Shopee หรือปรึกษาทีมงานโดยตรง
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            เลือกช่องทางที่คุณสะดวก ช้อปปลอดภัยผ่าน Shopee Thailand มีการันตี หรือทักแชทคุยกับผู้เชี่ยวชาญด้านอุปกรณ์แต่ง EV ในกรุงเทพฯ ได้ทันที
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full">
            <a
              href="https://shopee.co.th/shop/9535932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all w-full sm:w-auto hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ไปยังร้านค้า Shopee Thailand</span>
            </a>

            <a
              href="https://m.me/evselects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all w-full sm:w-auto hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ทัก Facebook Messenger</span>
            </a>

            <a
              href="https://lin.ee/evselects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all w-full sm:w-auto hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ทัก LINE Official Account</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
