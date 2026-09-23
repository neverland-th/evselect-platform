import { teslaModel3 } from '@/lib/tesla-model-3';
import Link from 'next/link';
import Image from 'next/image';
import BrandHomeLink from '@/components/BrandHomeLink';
import { damperArticle } from '@/lib/damper-article';
import { brakeArticle } from '@/lib/brake-article';
import { powertrainArticle } from '@/lib/powertrain-article';
import { batteryArticle } from '@/lib/battery-article';
import { mg4Article } from '@/lib/mg4-article';
import { camberArticle } from '@/lib/camber-article';
import { shockTypesArticle } from '@/lib/shock-types-article';
import { thaiRoadsArticle } from '@/lib/thai-roads-article';
import { zeekr7xArticle } from '@/lib/zeekr-7x-article';
import { hybridEvArticle } from '@/lib/hybrid-ev-article';
import { atto3Article } from '@/lib/atto3-article';
import { sealArticle } from '@/lib/seal-article';
import { deepalS05Article } from '@/lib/deepal-s05-article';
import { deepalS07Article } from '@/lib/deepal-s07-article';
import { geelyEx2Article } from '@/lib/geely-ex2-article';
import { teslaModelYLArticle } from '@/lib/tesla-model-y-l-article';
import { zeekr009Article } from '@/lib/zeekr-009-article';
import { zeekrXArticle } from '@/lib/zeekr-x-article';
import { drivingArticle } from '@/lib/driving-article';
import { 
  ArrowRight, 
  Clock, 
  CalendarDays, 
  Star, 
  Sparkles, 
  Car, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

export const metadata = {
  alternates: { canonical: '/articles' },
  title: 'บทความและรีวิวรถยนต์ไฟฟ้า EV สเปกไทยฉบับเจาะลึก | EVSELECT',
  description: 'รวมบทความรถยนต์ไฟฟ้า EV สเปกไทย แบตเตอรี่ ยาง เบรก และช่วงล่าง เลือกอ่านตามรุ่นรถหรือคำถามที่สงสัย พร้อมแหล่งข้อมูลและสิ่งที่ควรตรวจสอบก่อนตัดสินใจ',
};

export interface ArticleItem {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle?: string;
  excerpt: string;
  category: 'รีวิวรถ EV' | 'คู่มือและเทคนิค' | 'ระบบช่วงล่างและสมรรถนะ';
  categorySlug: 'reviews' | 'guides' | 'suspension';
  segment: 'sedan' | 'suv' | 'hatchback' | 'city' | 'guide' | 'tuning' | 'chassis' | 'dampers' | 'alignment' | 'coilovers' | string;
  segmentName: string;
  image: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  heroImage?: string;
  date: string;
  dateDisplay: string;
  publishedAt?: string;
  author?: string;
  readTime: string;
  rating: number | null;
  ratingText?: string;
  priceRange: string;
  highlights: string[];
  featured?: boolean;
  brand?: string;
  badge?: string;
  performanceText?: string;
  accessoryOpportunity?: string;
  fitmentGate?: string;
  tags?: string[];
}

const ALL_ARTICLES: ArticleItem[] = [
  {
    slug: 'ev-carbon-ceramic-brakes-guide',
    title: brakeArticle.title,
    shortTitle: 'เบรก Carbon Ceramic',
    excerpt: brakeArticle.description,
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: 'Brake Upgrade',
    image: brakeArticle.cover,
    imageAlt: brakeArticle.coverAlt,
    imageFit: 'contain',
    heroImage: brakeArticle.cover,
    date: brakeArticle.updatedAt,
    dateDisplay: '22 ก.ย. 2569',
    readTime: brakeArticle.readTime,
    rating: null,
    priceRange: 'เลือกตามงานและงบจริง',
    highlights: ['ชุดหน้าใหม่ 375–390 mm ตั้งแต่ 6 พอต', 'แตะคะแนน Brembo / ENDLESS / Carbon Ceramic', 'เคส ENDLESS 375 mm บน Model 3 Highland'],
    featured: false,
    brand: 'Aftermarket',
    badge: 'Brake System',
  },
  {
    slug: 'zeekr-7x-2026-review',
    title: zeekr7xArticle.title,
    shortTitle: 'ZEEKR 7X สเปกไทย',
    excerpt: zeekr7xArticle.description,
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'SUV ไฟฟ้า · เทียบสามรุ่นไทย',
    image: zeekr7xArticle.image,
    imageAlt: zeekr7xArticle.imageAlt,
    imageFit: 'contain',
    date: zeekr7xArticle.updatedAt,
    dateDisplay: '23 ก.ย. 2569',
    readTime: zeekr7xArticle.readTime,
    rating: null,
    priceRange: 'หน้าเว็บผู้ผลิตเริ่ม 1,399,000 บาท · ตรวจ 23 ก.ย. 2569',
    performanceText: 'Performance AWD: 475 kW / 637 hp · น้ำหนัก 2,535 กก.',
    highlights: [
      'แยกถุงลมและอุปกรณ์ตามรุ่นย่อย',
      'NEDC 566 / 730 / 635 กม. ตามลำดับรุ่น',
      'เลือกยางจากสเปกเต็ม ไม่ใช่แรงม้าอย่างเดียว'
    ],
    featured: true,
    brand: 'ZEEKR',
    badge: 'Thailand focus model',
    fitmentGate: 'ตรวจรุ่นย่อย ปีผลิต และสเปกยางของรถคันจริง',
  },
  {
    slug: 'zeekr-009-review',
    title: zeekr009Article.title,
    shortTitle: 'ZEEKR 009',
    excerpt: 'เทียบสามรุ่นย่อยไทย พร้อมจุดที่ควรลองเรื่องเบาะ ช่วงล่าง และพื้นที่จอดก่อนซื้อ',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'MPV ไฟฟ้า · 6 หรือ 7 ที่นั่ง',
    image: zeekr009Article.image,
    imageAlt: zeekr009Article.imageAlt,
    imageFit: 'contain',
    date: zeekr009Article.updatedAt,
    publishedAt: zeekr009Article.publishedAt,
    dateDisplay: '23 ก.ย. 2569',
    readTime: zeekr009Article.readTime,
    rating: null,
    priceRange: 'ตรวจราคาตามรุ่นและวันสั่งซื้อ',
    performanceText: 'Standard 335 hp / รุ่น AWD 603 hp',
    highlights: ['เลือกจำนวนที่นั่งก่อนเลือกความแรง', 'ลองขึ้นลงรถและจัดกระเป๋ากับคันจริง', 'แยกข้อมูลสามรุ่นจาก ZEEKR ประเทศไทย'],
    featured: false,
    brand: 'ZEEKR',
    badge: 'คู่มือ MPV ครอบครัว',
    accessoryOpportunity: 'พรม TPE 3 แถวตรงรุ่น, ฟิล์มกันรอยจอหลังคา, ถาดจัดระเบียบตู้เย็น',
    fitmentGate: 'ตรวจรุ่นย่อย จำนวนที่นั่งและปีผลิตกับรถคันจริง',
  },
  {
    slug: 'tesla-model-y-l-premium-6-seater-review',
    title: teslaModelYLArticle.title,
    shortTitle: 'Tesla Model Y L (6-Seater)',
    excerpt: 'เช็กเบาะสามแถว พื้นที่กระเป๋าเมื่อนั่งครบหกคน และแผนชาร์จ จากข้อมูล Tesla ประเทศไทย',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'พรีเมียม 6 ที่นั่ง SUV',
    image: teslaModelYLArticle.image,
    imageAlt: teslaModelYLArticle.imageAlt,
    imageFit: 'contain',
    date: teslaModelYLArticle.updatedAt,
    publishedAt: teslaModelYLArticle.publishedAt,
    dateDisplay: '23 ก.ย. 2569',
    readTime: teslaModelYLArticle.readTime,
    rating: null,
    priceRange: 'ตรวจราคาตามสเปกและวันสั่งซื้อ',
    performanceText: 'AWD · 5.0 วินาที · 681 กม. WLTP',
    highlights: ['เบาะ 2+2+2 พร้อมจุดที่ควรลอง', 'แยกพื้นที่เก็บของตามจำนวนคน', 'อ่านสเปกไทยและข้อจำกัดการชาร์จ'],
    featured: false,
    brand: 'Tesla',
    badge: 'คู่มือรถครอบครัว 6 ที่นั่ง',
    accessoryOpportunity: 'พรม TPE 3 แถว, ถาดท้ายรถเมื่อพับเบาะ, ตัวจัดระเบียบ Frunk',
    fitmentGate: 'ยืนยันรุ่น L 6 ที่นั่ง ปีผลิตและอุปกรณ์กับรถจริง',
  },
  {
    slug: 'tesla-model-3-highland-review',
    title: teslaModel3.title,
    shortTitle: 'Tesla Model 3 Highland',
    excerpt: teslaModel3.description,
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'sedan',
    segmentName: 'พรีเมียมซีดานไฟฟ้า D-Segment',
    image: '/images/reviews/tesla-model-3-hero.jpg',
    date: teslaModel3.checkedDate,
    dateDisplay: '14 ก.ย. 2569',
    readTime: '7 นาที',
    rating: null,
    ratingText: 'ข้อมูลสเปกจาก Tesla',
    priceRange: '1,149,000 – 2,099,000 บาท',
    performanceText: 'Performance 460 แรงม้า / 0–100 ใน 3.1 วินาที*',
    highlights: ['Performance 460 แรงม้า', 'Long Range RWD 750 กม. WLTP', '4 รุ่นย่อยสเปกไทย', 'ตรวจสอบ 14 ก.ย. 2569'],
    featured: false,
      brand: 'Tesla',
      badge: 'สเปกไทย 4 รุ่น',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'byd-seal-review',
    title: sealArticle.title,
    shortTitle: 'BYD Seal',
    excerpt: sealArticle.description,
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'sedan',
    segmentName: 'ซีดานไฟฟ้า · สเปกไทย 3 รุ่น',
    image: sealArticle.image,
    imageAlt: sealArticle.imageAlt,
    date: sealArticle.updatedAt,
    dateDisplay: '23 ก.ย. 2569',
    publishedAt: sealArticle.publishedAt,
    readTime: sealArticle.readTime,
    rating: null,
    ratingText: 'ข้อมูลผู้ผลิต · ไม่มีคะแนนทดสอบ',
    priceRange: 'ขอใบเสนอราคาตรงรุ่นและปีรถ',
    highlights: ['Premium: 650 กม. NEDC', 'AWD: 390 kW · โช้ค FSD หน้า–หลัง'],
    featured: false,
    brand: 'BYD',
    badge: 'สเปกประเทศไทย',
    accessoryOpportunity: 'ตรวจยางตามข้อกำหนดรถ',
    fitmentGate: 'แยก Seal จาก Seal 6 และ Seal 5 DM-i',
  },
  {
    slug: 'zeekr-x-review',
    title: zeekrXArticle.title,
    shortTitle: 'ZEEKR X',
    excerpt: 'เทียบสองรุ่นย่อยไทย พร้อมสิ่งที่ควรลองเรื่องล้อ ยาง ห้องโดยสาร และการชาร์จก่อนซื้อ',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'คอมแพกต์ SUV · Standard / Flagship',
    image: zeekrXArticle.image,
    imageAlt: zeekrXArticle.imageAlt,
    imageFit: 'contain',
    date: zeekrXArticle.updatedAt,
    publishedAt: zeekrXArticle.publishedAt,
    dateDisplay: '23 ก.ย. 2569',
    readTime: zeekrXArticle.readTime,
    rating: null,
    priceRange: 'ตรวจราคาตามรุ่นและวันสั่งซื้อ',
    highlights: ['เทียบสเปกไทยจากโบรชัวร์ปี 2026', 'ล้อ ยาง และ AC 11 / 22 kW ต่างกันอย่างไร'],
    featured: false,
    brand: 'ZEEKR',
    fitmentGate: 'ตรวจรุ่นย่อย ปีผลิต และขนาดล้อของรถคันจริง',
  },
  {
    slug: 'mg4-electric-review',
    title: mg4Article.title,
    shortTitle: 'MG4 MY2026',
    excerpt: mg4Article.description,
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'hatchback',
    segmentName: 'แฮทช์แบ็กไฟฟ้าขับหลัง',
    image: mg4Article.image,
    imageAlt: mg4Article.imageAlt,
    imageFit: 'contain',
    date: mg4Article.updatedAt,
    publishedAt: mg4Article.publishedAt,
    dateDisplay: '22 ก.ย. 2569',
    readTime: mg4Article.readTime,
    rating: null,
    priceRange: 'ตรวจข้อเสนอให้ตรงรุ่นและวันที่',
    highlights: ['เทียบ D กับ X Long Range รุ่นปี 2026', 'แบต LFP 50 / 62.2 kWh · ระยะ NEDC 450 / 540 กม.', 'แยกสเปกปัจจุบันจาก XPOWER รุ่นเดิม'],
    featured: false,
      brand: 'MG',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'deepal-s07-review',
    title: deepalS07Article.title,
    shortTitle: 'Deepal NEW S07',
    excerpt: 'แยก NEW S07 จากรุ่นก่อน ตรวจสเปกไทย พร้อมจุดที่ควรลองเรื่องจอ ม่านไฟฟ้า ล้อ 20 นิ้วและการชาร์จก่อนซื้อ',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'เอสยูวีไฟฟ้า 5 ที่นั่ง',
    image: deepalS07Article.image,
    imageAlt: deepalS07Article.imageAlt,
    date: deepalS07Article.updatedAt,
    dateDisplay: '23 ก.ย. 2569',
    publishedAt: deepalS07Article.publishedAt,
    readTime: deepalS07Article.readTime,
    rating: null,
    priceRange: 'ขอใบเสนอราคาตรงรุ่นและวันที่ซื้อ',
    highlights: ['แยก NEW S07 จากรุ่นก่อน', 'จอ ม่านไฟฟ้าและล้อ 20 นิ้ว', 'ข้อมูลจากโบรชัวร์ไทย', 'ตรวจการชาร์จและรถคันที่จะรับ'],
    featured: false,
    brand: 'Deepal',
    badge: 'คู่มือเลือกซื้อจากสเปกไทย',
    accessoryOpportunity: 'ตรวจรถจริงก่อนเลือกอุปกรณ์เสริม',
    fitmentGate: 'ยืนยัน NEW S07 ปีผลิตและอุปกรณ์กับรถจริง',
  },
  {
    slug: 'byd-atto-3-review',
    title: atto3Article.title,
    shortTitle: 'BYD Atto 3',
    excerpt: atto3Article.description,
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'เอสยูวี 5 ที่นั่ง · สเปกไทย MY2026',
    image: atto3Article.image,
    imageAlt: atto3Article.imageAlt,
    date: atto3Article.updatedAt,
    dateDisplay: '23 ก.ย. 2569',
    publishedAt: atto3Article.publishedAt,
    readTime: atto3Article.readTime,
    rating: null,
    priceRange: 'ขอใบเสนอราคาตรงปีรุ่นและวันที่ซื้อ',
    highlights: ['Premium / Extended', '50.25 / 60.48 kWh', '410 / 480 กม. NEDC', 'DC สูงสุด 70 / 88 kW'],
    featured: false,
    brand: 'BYD',
    badge: 'คู่มือเลือกซื้อจากสเปกไทย',
    accessoryOpportunity: 'วัดพื้นที่และตรวจรถจริงก่อนเลือกอุปกรณ์',
    fitmentGate: 'ตรวจปีรุ่นและรุ่นย่อยกับรถคันที่จะรับ',
  },
  {
    slug: 'deepal-s05-review',
    title: deepalS05Article.title,
    shortTitle: 'Changan Deepal S05',
    excerpt: deepalS05Article.description,
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'เอสยูวี BEV และ REEV',
    image: deepalS05Article.image,
    imageAlt: deepalS05Article.imageAlt,
    date: deepalS05Article.updatedAt,
    dateDisplay: '23 ก.ย. 2569',
    publishedAt: deepalS05Article.publishedAt,
    readTime: deepalS05Article.readTime,
    rating: null,
    priceRange: 'ขอใบเสนอราคาตรงรุ่นและวันที่ซื้อ',
    highlights: ['แยก BEV 4 รุ่น / REEV 2 รุ่น', 'การชาร์จ ล้อและอุปกรณ์ที่ต่างกัน', 'ข้อมูลจากโบรชัวร์ไทย', 'ตรวจสเปกของรถคันที่จะรับ'],
    featured: false,
    brand: 'Deepal',
    badge: 'คู่มือเลือกซื้อจากสเปกไทย',
    accessoryOpportunity: 'ตรวจรุ่นย่อยและพื้นที่จริงก่อนเลือกอุปกรณ์',
    fitmentGate: 'ยืนยัน BEV / REEV ปีผลิตและอุปกรณ์กับรถจริง',
  },
  {
    slug: 'geely-ex2-review',
    title: geelyEx2Article.title,
    shortTitle: 'Geely EX2',
    excerpt: 'เทียบ Pro กับ Max จากโบรชัวร์ไทย ดูอุปกรณ์ช่วยขับ ล้อและการชาร์จ พร้อมจุดที่ควรลองก่อนซื้อ',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'city',
    segmentName: 'ซิตี้คาร์ไฟฟ้าขับหลังขนาดกะทัดรัด',
    image: geelyEx2Article.image,
    imageAlt: geelyEx2Article.imageAlt,
    date: geelyEx2Article.updatedAt,
    publishedAt: geelyEx2Article.publishedAt,
    dateDisplay: '23 ก.ย. 2569',
    readTime: geelyEx2Article.readTime,
    rating: null,
    priceRange: 'ขอใบเสนอราคาตรงรุ่นและวันที่ซื้อ',
    highlights: ['ขุมพลังเหมือนกัน อุปกรณ์ต่างกัน', 'เทียบกล้อง ล้อและระบบช่วยขับ', 'ยืนยันซอฟต์แวร์กับรถคันจริง'],
    featured: false,
    brand: 'Geely',
    badge: 'คู่มือเลือกซื้อจากสเปกไทย',
    accessoryOpportunity: 'ตรวจรถไทยก่อนเลือกอุปกรณ์เสริม',
    fitmentGate: 'ยืนยัน Pro / Max ปีผลิตและซอฟต์แวร์ก่อนรับรถ',
  },
  {
    slug: 'ev-battery-care',
    title: batteryArticle.title,
    shortTitle: 'คู่มือดูแลแบตเตอรี่ EV',
    excerpt: batteryArticle.description,
    category: 'คู่มือและเทคนิค',
    categorySlug: 'guides',
    segment: 'guide',
    segmentName: 'คู่มือการใช้งาน & เทคนิคการชาร์จ',
    image: batteryArticle.image,
    imageAlt: batteryArticle.imageAlt,
    imageFit: 'contain',
    date: batteryArticle.updatedAt,
    publishedAt: batteryArticle.publishedAt,
    dateDisplay: '22 ก.ย. 2569',
    readTime: batteryArticle.readTime,
    rating: null,
    ratingText: 'คู่มือแนะนำ',
    priceRange: 'อ่านฟรี',
    highlights: ['ตั้งขีดจำกัดชาร์จตามรถคันจริง', 'แยกระยะวิ่งออกจากสุขภาพแบตเตอรี่', 'เตรียมรถก่อนจอดนาน', 'ตัวอย่างจากคู่มือผู้ผลิต'],
    featured: false,
      brand: 'EV',
    badge: 'Thailand focus model',
    accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
    fitmentGate: 'ตรวจคู่มือและเมนูชาร์จให้ตรงรุ่น ปี และรุ่นย่อย',
  },
  {
    slug: 'ev-performance-driving-techniques',
    title: drivingArticle.title,
    shortTitle: 'เข้าใจการขับ EV',
    excerpt: 'รู้จังหวะคันเร่ง Regen และการใช้เบรก พร้อมแยกการขับถนนออกจากการฝึกในสนาม',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: 'คันเร่ง · Regen · ABS',
    image: drivingArticle.image,
    imageAlt: drivingArticle.imageAlt,
    imageFit: 'contain',
    date: drivingArticle.updatedAt,
    publishedAt: drivingArticle.publishedAt,
    dateDisplay: '23 ก.ย. 2569',
    readTime: drivingArticle.readTime,
    rating: null,
    priceRange: 'คู่มือความรู้การขับขี่',
    highlights: ['เข้าใจข้อจำกัดของ Regen', 'แยก ABS กับการฝึกในสนาม'],
    featured: false,
    brand: 'ความรู้การขับขี่',
    fitmentGate: 'ใช้คู่มือที่ตรงรุ่น ปี และซอฟต์แวร์ของรถ',
  },
  {
    slug: 'hybrid-to-ev-chassis-dynamics-transition',
    title: hybridEvArticle.title,
    shortTitle: 'เปลี่ยนจาก Hybrid เป็น EV',
    excerpt: hybridEvArticle.description,
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'chassis',
    segmentName: 'คันเร่ง · เบรก · ช่วงล่าง',
    image: hybridEvArticle.image,
    imageAlt: hybridEvArticle.imageAlt,
    imageFit: 'contain',
    date: hybridEvArticle.updatedAt,
    dateDisplay: '23 ก.ย. 2569',
    publishedAt: hybridEvArticle.publishedAt,
    author: 'EVSELECT',
    readTime: hybridEvArticle.readTime,
    rating: null,
    priceRange: 'คู่มือก่อนเลือกและปรับรถ',
    performanceText: 'แยกการตอบสนองกับอาการช่วงล่าง',
    highlights: [
      'เข้าใจ Regen และการใช้แป้นเบรก',
      'ลองรถให้ตรงกับผู้โดยสารและถนนที่ใช้'
    ],
    featured: false,
    brand: 'EVSELECT',
    badge: 'เข้าใจก่อนตัดสินใจแต่ง',
    tags: ['Hybrid', 'Regen', 'ช่วงล่าง'],
    fitmentGate: 'ตรวจรุ่นย่อย ล้อ ยาง และคู่มือของรถคันจริง',
  },
  {
    slug: 'ev-horsepower-vs-torque-explained',
    title: powertrainArticle.title,
    shortTitle: 'แรงม้า vs แรงบิดในรถยนต์ไฟฟ้า',
    subtitle: 'เข้าใจแรงขับที่ล้อ ก่อนเทียบตัวเลขสูงสุดในโบรชัวร์',
    excerpt: powertrainArticle.description,
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: '⚡ ระบบส่งกำลัง & แรงบิด',
    image: powertrainArticle.image,
    imageAlt: powertrainArticle.imageAlt,
    heroImage: powertrainArticle.image,
    date: powertrainArticle.updatedAt,
    dateDisplay: '21 ก.ย. 2569',
    publishedAt: powertrainArticle.publishedAt,
    author: 'EVSELECT',
    readTime: 'คู่มือฉบับเต็ม',
    rating: null,
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'แรงบิด อัตราทด และแรงขับที่ล้อ',
    highlights: [
      'แรงม้าและแรงบิดบอกอะไรได้บ้าง',
      'ตัวอย่างคำนวณอัตราทดกับแรงขับที่ล้อ',
      'ทำไมความเร็วเพิ่ม แรงที่เหลือเร่งต่อจึงเปลี่ยน',
      'เงื่อนไขที่ต้องเช็กก่อนเทียบผลทดสอบ'
    ],
    featured: false,
    brand: 'ความรู้ระบบขับเคลื่อน',
    badge: 'แรงม้าและแรงบิด',
    tags: ['Horsepower vs Torque', 'PMSM Motor', 'Back EMF', 'Single Speed Gearbox'],
    fitmentGate: 'เทียบหน่วย จุดที่วัด รุ่นย่อย และเงื่อนไขทดสอบให้ตรงกัน',
  },
  {
    slug: 'ev-camber-adjustment-wheel-alignment-guide',
    title: camberArticle.title,
    shortTitle: 'คู่มือตั้งมุมแคมเบอร์ & ศูนย์ล้อ EV',
    subtitle: 'เข้าใจมุมล้อและอ่านใบตั้งศูนย์ก่อนตัดสินใจเปลี่ยนอะไหล่',
    excerpt: camberArticle.description,
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'alignment',
    segmentName: '📏 เรขาคณิตศูนย์ล้อ & แคมเบอร์',
    image: camberArticle.image,
    imageAlt: camberArticle.imageAlt,
    imageFit: 'contain',
    heroImage: camberArticle.image,
    date: camberArticle.updatedAt,
    dateDisplay: '22 ก.ย. 2569',
    publishedAt: camberArticle.publishedAt,
    author: 'EVSELECT',
    readTime: camberArticle.readTime,
    rating: null,
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Camber · Toe · Caster',
    highlights: [
      'ยางสึกด้านเดียวไม่ได้บอกสาเหตุเดียว',
      'อ่านค่ารายล้อ หน่วย และเงื่อนไขก่อน–หลัง',
      'ตรวจสเปกตรงรุ่นก่อนซื้ออาร์มแต่ง'
    ],
    featured: false,
    brand: 'EVSELECT',
    badge: 'Kinematics & Alignment',
    tags: ['Camber', 'Wheel Alignment', 'Toe', 'Caster', 'ใบตั้งศูนย์'],
    fitmentGate: 'ให้ร้านยืนยันรุ่น ปี รุ่นย่อย และเงื่อนไขที่ใช้วัด',
  },
  {
    slug: 'ev-damper-tuning-bump-rebound-guide',
    title: damperArticle.title,
    shortTitle: '1-Way ถึง 3-Way: จ่ายเพิ่มแล้วได้อะไร?',
    subtitle: 'แยกโครงสร้าง ช่องปรับ และจำนวนคลิกให้เป็น ก่อนเลือกโช้คแต่ง',
    excerpt: damperArticle.description,
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'dampers',
    segmentName: 'คอยล์โอเวอร์ & การปรับแรงหน่วง',
    image: damperArticle.cover.src,
    imageAlt: damperArticle.coverAlt,
    imageFit: 'contain',
    heroImage: damperArticle.cover.src,
    date: '2026-08-27',
    dateDisplay: 'อัปเดต 19 ก.ย. 2569',
    publishedAt: damperArticle.publishedAt,
    author: 'EVSELECT',
    readTime: 'คู่มือฉบับเต็ม',
    rating: null,
    priceRange: 'คู่มือเชิงลึก',
    performanceText: '1-Way / 2-Way / 3-Way',
    highlights: [
      'ปุ่มเดียว: ปรับ Rebound หรือยุบ–ยืดพร้อมกัน?',
      '2-Way กับ 3-Way เพิ่มอิสระในการจูนอย่างไร',
      'ตัวอย่าง TEIN, BC Racing, HKS, BILSTEIN, Öhlins และ KW',
      'แยกอาการรถและตรวจสเปกก่อนซื้อสำหรับ EV'
    ],
    featured: false,
    brand: 'คู่มือหลายแบรนด์',
    badge: 'รู้ก่อนแต่งช่วงล่าง',
    tags: ['คอยล์โอเวอร์', 'โช้คปรับเกลียว', '1-way', '2-way', '3-way', 'Compression', 'Rebound', 'TEIN', 'BC Racing', 'HKS', 'BILSTEIN', 'Öhlins', 'KW'],
    accessoryOpportunity: 'เปรียบเทียบช่องปรับแรงหน่วง สปริง และบริการหลังการขายตามการใช้งาน',
    fitmentGate: 'ต้องยืนยันรหัสสินค้า รุ่น ปี รุ่นย่อย น้ำหนักเพลา และระบบช่วงล่างเดิมก่อนสั่งซื้อ',
  },
  {
    slug: 'shock-absorber-types-monotube-twintube-air-ev',
    title: shockTypesArticle.title,
    shortTitle: 'เลือกโช้ค EV ให้ตรงปัญหา',
    subtitle: 'แยกโครงสร้างโช้ค แรงหน่วง และถุงลมก่อนเลือกชุด',
    excerpt: shockTypesArticle.description,
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'dampers',
    segmentName: 'โครงสร้างโช้คและถุงลม',
    image: shockTypesArticle.image,
    imageAlt: shockTypesArticle.imageAlt,
    imageFit: 'contain',
    heroImage: shockTypesArticle.image,
    date: '2026-09-23',
    dateDisplay: '23 ก.ย. 2569',
    publishedAt: shockTypesArticle.publishedAt,
    author: 'EVSELECT',
    readTime: shockTypesArticle.readTime,
    rating: null,
    priceRange: 'คู่มือก่อนเลือกชุด',
    performanceText: 'โครงสร้าง · แรงหน่วง · สปริง',
    highlights: [
      'แยก Monotube / Twin-tube โดยไม่จัดเกรดจากชื่อ',
      'CDC และ MagneRide ต่างกันอย่างไร',
      'ถุงลม ZEEKR 7X ไทย ต้องดูรุ่นย่อย',
      'ห้าคำถามก่อนเปลี่ยนช่วงล่าง'
    ],
    featured: false,
    brand: 'คู่มือหลายแบรนด์',
    badge: 'รู้ก่อนเปลี่ยนโช้ค',
    tags: ['Monotube', 'Twin-tube', 'Inverted', 'Air Suspension', 'CDC', 'MagneRide'],
    accessoryOpportunity: 'เลือกระบบให้ตรงอาการ พร้อมดูการติดตั้งและบริการหลังการขาย',
    fitmentGate: 'ยืนยันรหัสสินค้า รุ่น ปี รุ่นย่อย น้ำหนักเพลา และระบบไฟฟ้าเดิมจากผู้ผลิต',
  },
  {
    slug: 'optimizing-ev-suspension-thai-roads',
    title: thaiRoadsArticle.title,
    shortTitle: 'เช็กช่วงล่าง EV ก่อนเปลี่ยนโช้ค',
    subtitle: 'แยกอาการและเตรียมข้อมูลคุยกับร้าน',
    excerpt: thaiRoadsArticle.description,
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: 'ช่วงล่างกับเส้นทางประจำวัน',
    image: thaiRoadsArticle.image,
    imageAlt: thaiRoadsArticle.imageAlt,
    imageFit: 'contain',
    heroImage: thaiRoadsArticle.image,
    date: '2026-09-23',
    dateDisplay: '23 ก.ย. 2569',
    publishedAt: thaiRoadsArticle.publishedAt,
    author: 'EVSELECT',
    readTime: thaiRoadsArticle.readTime,
    rating: null,
    priceRange: 'คู่มือก่อนเปลี่ยนช่วงล่าง',
    performanceText: 'แยกอาการ · ตรวจสภาพ · คุยกับช่าง',
    highlights: [
      'แยกกระแทก เด้ง และพวงมาลัยสั่น',
      'ตรวจยางกับโหมดช่วงล่างเดิมก่อนซื้อของใหม่',
      'เก็บข้อมูลก่อนปรับ Bump / Rebound',
      'ห้าคำถามที่ควรถามร้านติดตั้ง'
    ],
    featured: false,
    brand: 'EVSELECT',
    badge: 'รู้ก่อนเปลี่ยนช่วงล่าง',
    tags: ['ช่วงล่างถนนไทย', 'รอยต่อสะพาน', 'ยาง', 'แดมเปอร์', 'Model 3 Performance'],
    accessoryOpportunity: 'ตรวจหาสาเหตุและกำหนดเป้าหมายก่อนเลือกชุดช่วงล่าง',
    fitmentGate: 'ใช้คู่มือที่ตรงรุ่นและรหัสชุด ตรวจระยะทำงาน ศูนย์ล้อ และระบบไฟฟ้าเดิม',
  },
  {
    slug: 'ev-tyre-and-coilover-selection-guide',
    title: 'เลือกยางและคอยล์โอเวอร์ EV อย่างไร ให้รับทั้งน้ำหนักและแรงม้า',
    shortTitle: 'คู่มือเลือกยางและสตรัทสำหรับ EV',
    subtitle: 'เริ่มจากสเปกรถจริง ก่อนเลือกความนุ่ม เงียบ และการตอบสนอง',
    excerpt: 'ดู Load Index, XL/HL และการเลือกช่วงล่างให้ตรงรถ ผ่านตัวอย่าง ZEEKR 7X Performance AWD และ Tesla Model 3 Performance พร้อมเช็กลิสต์คุยกับร้าน',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'coilovers',
    segmentName: '🛞 ยาง & สตรัทปรับเกลียวตรงรุ่น',
    image: '/images/editorial/tesla-model-3-performance-2024.png',
    heroImage: '/images/editorial/tesla-model-3-performance-2024.png',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT',
    readTime: '8 นาที',
    rating: 9.7,
    ratingText: 'Comprehensive Buyer Guide',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Load Index & Coilover Fitment',
    highlights: [
      'อ่าน Load Index, XL และ HL ให้ตรงสเปกรถ',
      'ตัวอย่าง ZEEKR 7X Performance AWD 2,535 กก.',
      'ขนาดยางหน้า–หลัง Model 3 Performance',
      'เลือกคอยล์โอเวอร์และระยะติดตั้งตามคู่มือ'
    ],
    featured: false,
    brand: 'EVSELECT BUYER GUIDE',
    badge: 'Fitment & Hardware Guide',
    tags: ['EV Tyres', 'High Load Capacity', 'Coilover Selection', 'Spring Rate', 'Linear Springs', 'Acoustic Foam'],
    accessoryOpportunity: 'ชุดสตรัทปรับเกลียว Full-Tap ตรงรุ่น, ยาง EV เกรด HL, น็อตล้อฟอร์จน้ำหนักเบา',
    fitmentGate: 'ตรวจสอบ Load Index และ Speed Rating ตามสมุดคู่มือประจำรถ',
  },
];

interface PageProps {
  searchParams?: Promise<{ category?: string; segment?: string }>;
}

export default async function ArticlesIndexPage({ searchParams }: PageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const activeCategory = resolvedParams.category || 'all';
  const activeSegment = resolvedParams.segment || 'all';

  // Filtering logic
  const filteredArticles = ALL_ARTICLES.filter((article) => {
    // Dynamic Filter by Category
    if (activeCategory !== 'all' && article.categorySlug !== activeCategory) {
      return false;
    }

    // Filter by Segment
    if (activeSegment !== 'all' && article.segment !== activeSegment) {
      return false;
    }

    return true;
  });

  const featuredArticle = ALL_ARTICLES.find((a) => a.featured) || ALL_ARTICLES[0];
  const isShowSpotlight = (activeCategory === 'all' || activeCategory === 'reviews') && activeSegment === 'all';

  // Counts for pills
  const totalCount = ALL_ARTICLES.length;
  const reviewsCount = ALL_ARTICLES.filter((a) => a.categorySlug === 'reviews').length;
  const guidesCount = ALL_ARTICLES.filter((a) => a.categorySlug === 'guides').length;
  const suspensionCount = ALL_ARTICLES.filter((a) => a.categorySlug === 'suspension').length;
  const sedanCount = ALL_ARTICLES.filter((a) => a.segment === 'sedan').length;
  const suvCount = ALL_ARTICLES.filter((a) => a.segment === 'suv').length;
  const hatchbackCount = ALL_ARTICLES.filter((a) => a.segment === 'hatchback').length;
  const cityCount = ALL_ARTICLES.filter((a) => a.segment === 'city').length;

  const visibleArticles = isShowSpotlight
    ? filteredArticles.filter((article) => article.slug !== featuredArticle.slug)
    : filteredArticles;
  const groupedArticles = activeCategory === 'all'
    ? [
        { title: 'รีวิวรถ EV', items: visibleArticles.filter((article) => article.categorySlug === 'reviews') },
        { title: 'ระบบช่วงล่างและสมรรถนะ', items: visibleArticles.filter((article) => article.categorySlug === 'suspension') },
        { title: 'คู่มือและเทคนิค', items: visibleArticles.filter((article) => article.categorySlug === 'guides') },
      ].filter((group) => group.items.length > 0)
    : [{ title: '', items: visibleArticles }];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* 1. Header Section */}
      <header className="space-y-6 mb-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-lime-50 border border-lime-200 text-lime-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-xs">
          <Sparkles className="w-4 h-4 text-lime-600" />
          <span>ศูนย์รวมบทความ EV สำหรับการใช้งานในไทย</span>
          <span className="bg-lime-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
            {totalCount} บทความ
          </span>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เข้าใจรถให้ลึกขึ้น<br className="hidden sm:block" />
          <span className="text-lime-700">ก่อนเลือกและก่อนปรับแต่ง</span>
        </h1>

        <p
          className="text-sm sm:text-base md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          เปรียบเทียบสเปก แยกหลักการทางเทคนิค และชี้จุดที่ควรตรวจสอบกับรถของคุณ
          เพื่อให้ตัดสินใจได้ง่ายขึ้นโดยไม่ต้องเปิดหลายเว็บไซต์
        </p>

        {/* Quick Highlights Counter Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <Car className="w-4 h-4 text-lime-600" />
            <span><strong>{reviewsCount} บทความ</strong> รีวิวและข้อมูลรุ่นรถ</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <SlidersHorizontal className="w-4 h-4 text-lime-600" />
            <span><strong>{suspensionCount} บทความ</strong> เจาะลึกระบบช่วงล่าง</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-lime-600" />
            <span><strong>แยกชัดเจน</strong> ข้อมูล หลักการ และข้อควรตรวจสอบ</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <Award className="w-4 h-4 text-lime-600" />
            <span><strong>ภาษาไทย</strong> อ่านง่ายบนมือถือ</span>
          </div>
        </div>
      </header>

      {/* 2. Category & Segment Filter Tabs */}
      <div className="mb-10 space-y-4">
        {/* Main Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <Link
            href="/articles"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-lime-500 text-black shadow-xs'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>ทั้งหมด</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              activeCategory === 'all' ? 'bg-black/15 text-black font-bold' : 'bg-slate-100 text-slate-600'
            }`}>
              {totalCount}
            </span>
          </Link>

          <Link
            href="/articles?category=reviews"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'reviews'
                ? 'bg-lime-500 text-black shadow-xs'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>รีวิวเจาะลึกรถ EV</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              activeCategory === 'reviews' ? 'bg-black/15 text-black font-bold' : 'bg-slate-100 text-slate-600'
            }`}>
              {reviewsCount}
            </span>
          </Link>

          <Link
            href="/articles?category=suspension"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'suspension'
                ? 'bg-lime-500 text-black shadow-xs'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>ระบบช่วงล่าง &amp; แฮนด์ลิ่ง</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              activeCategory === 'suspension' ? 'bg-black/15 text-black font-bold' : 'bg-slate-100 text-slate-600'
            }`}>
              {suspensionCount}
            </span>
          </Link>

          <Link
            href="/articles?category=guides"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'guides'
                ? 'bg-lime-500 text-black shadow-xs'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>คู่มือ &amp; เคล็ดลับการใช้งาน</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              activeCategory === 'guides' ? 'bg-black/15 text-black font-bold' : 'bg-slate-100 text-slate-600'
            }`}>
              {guidesCount}
            </span>
          </Link>
        </div>

        {/* Secondary Vehicle Segment Filters (Shown when category is 'all' or 'reviews') */}
        {(activeCategory === 'all' || activeCategory === 'reviews') && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
            <span className="text-slate-500 flex items-center gap-1 mr-1 hidden sm:inline-flex">
              <SlidersHorizontal className="w-3 h-3" /> ประเภทรถ:
            </span>
            <Link
              href={activeCategory === 'reviews' ? '/articles?category=reviews' : '/articles'}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'all'
                  ? 'bg-slate-800 text-white font-medium shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              ทุกประเภทตัวถัง
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=sedan`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'sedan'
                  ? 'bg-lime-50 text-lime-800 font-semibold border border-lime-300'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              ⚡ ซีดาน / สปอร์ต ({sedanCount})
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=suv`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'suv'
                  ? 'bg-lime-50 text-lime-800 font-semibold border border-lime-300'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              🚙 เอสยูวี / ครอสโอเวอร์ ({suvCount})
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=hatchback`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'hatchback'
                  ? 'bg-lime-50 text-lime-800 font-semibold border border-lime-300'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              🏎️ แฮทช์แบ็กขับหลัง ({hatchbackCount})
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=city`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'city'
                  ? 'bg-lime-50 text-lime-800 font-semibold border border-lime-300'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              🏙️ ซิตี้คาร์ในเมือง ({cityCount})
            </Link>
          </div>
        )}
      </div>

      {/* 3. Featured Spotlight Card (When viewing All or Reviews with all segments) */}
      {isShowSpotlight && (
        <section className="mb-14" aria-label="Featured Article Spotlight">
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-lime-500 transition-all duration-300 shadow-md group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Left/Top Hero Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px] overflow-hidden bg-slate-100">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt ?? featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={featuredArticle.imageFit === 'contain' ? 'object-contain' : 'object-cover object-left'}
                />
                
                {/* Spotlight Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    บทความแนะนำ
                  </span>
                  <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                    สเปกและบริบทการใช้งาน
                  </span>
                </div>

                {/* Score Pill overlay on image */}
                {featuredArticle.rating !== null && <div className="absolute bottom-4 left-4 lg:hidden">
                  <div className="bg-white/95 backdrop-blur border border-lime-500 px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-xs">
                    <Award className="w-4 h-4 text-lime-600" />
                    <span className="text-xs text-slate-600 font-medium">คะแนนรวม</span>
                    <span className="text-sm font-black text-lime-700">{featuredArticle.ratingText}</span>
                  </div>
                </div>}
              </div>

              {/* Right/Bottom Content Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-lime-800 tracking-wider uppercase bg-lime-50 border border-lime-200 px-2.5 py-1 rounded-lg">
                      {featuredArticle.segmentName}
                    </span>
                    {featuredArticle.rating !== null && <div className="hidden lg:flex items-center gap-1.5 bg-lime-50 border border-lime-200 px-3 py-1 rounded-full">
                      <Award className="w-4 h-4 text-lime-600" />
                      <span className="text-xs text-slate-500">Score</span>
                      <span className="text-sm font-black text-lime-700">{featuredArticle.ratingText}</span>
                    </div>}
                  </div>

                  <h2
                    className="text-lg sm:text-xl lg:text-3xl font-extrabold text-slate-900 group-hover:text-lime-700 transition-colors leading-tight"
                    style={{ textWrap: 'balance' } as React.CSSProperties}
                  >
                    <Link href={`/articles/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                  {featuredArticle.slug === 'zeekr-7x-2026-review' && <p className="text-sm leading-6 text-slate-600">ภาพ ZEEKR 7X จากต่างประเทศ ไม่ยืนยันรุ่นย่อยไทย: <a href={zeekr7xArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{zeekr7xArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={zeekr7xArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">CC0 1.0<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                      <div className="text-xs text-slate-500">ราคาอ้างอิง</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">{featuredArticle.priceRange}</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                      <div className="text-xs text-slate-500">สเปกจากผู้ผลิต</div>
                      <div className="text-sm font-bold text-lime-700 mt-0.5">{featuredArticle.performanceText}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredArticle.highlights.map((h, i) => (
                      <span key={i} className="text-sm bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta & Action Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {featuredArticle.dateDisplay}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/articles/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-xs transition-all"
                  >
                    <span>อ่านบทความ</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Section Heading for Grid */}
      <div className="mb-6 flex flex-col items-start justify-between gap-2 border-b border-slate-200 pb-3 sm:flex-row sm:items-center sm:gap-4">
        <h2 className="min-w-0 text-lg font-bold text-slate-900 sm:text-xl">
          {activeCategory === 'suspension' ? (
            <SlidersHorizontal className="mr-2 inline-block h-5 w-5 align-middle text-lime-600" aria-hidden="true" />
          ) : activeCategory === 'guides' ? (
            <BookOpen className="mr-2 inline-block h-5 w-5 align-middle text-lime-600" aria-hidden="true" />
          ) : (
            <Car className="mr-2 inline-block h-5 w-5 align-middle text-lime-600" aria-hidden="true" />
          )}
          <span>
            {activeCategory === 'reviews'
              ? 'รีวิวรถยนต์ไฟฟ้าทั้งหมด'
              : activeCategory === 'guides'
              ? 'คู่มือและเทคนิคการใช้งาน'
              : activeCategory === 'suspension'
              ? 'บทความเทคนิคระบบช่วงล่างและแฮนด์ลิ่ง'
              : 'บทความและรีวิวทั้งหมด'}
          </span>
          <span className="ml-2 inline-block whitespace-nowrap text-xs font-normal text-slate-500">
            ({filteredArticles.length} บทความ)
          </span>
        </h2>
        
        {(activeSegment !== 'all' || activeCategory !== 'all') && (
          <Link
            href="/articles"
            className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap text-xs font-medium text-lime-700 hover:underline"
          >
            ล้างตัวกรอง
          </Link>
        )}
      </div>

      {/* 5. Responsive 3-Column Articles Card Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
          <p className="text-slate-600 text-sm mb-4">ไม่พบบทความในหมวดหมู่ที่เลือก</p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-bold text-black bg-lime-500 px-4 py-2 rounded-xl"
          >
            ดูบทความทั้งหมด
          </Link>
        </div>
      ) : (
        <div className="space-y-16">
          {groupedArticles.map((group, groupIdx) => {
            const ArticleHeading = group.title ? 'h4' : 'h3';
            return (
            <div key={groupIdx} className="space-y-6">
              {group.title && (
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">{group.title}</h3>
                    <span className="bg-lime-100 text-lime-800 font-bold text-xs px-2.5 py-1 rounded-full">{group.items.length} บทความ</span>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {group.items.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col bg-white border border-slate-200 hover:border-lime-500 rounded-2xl overflow-hidden transition-colors duration-200 shadow-xs"
            >
              {/* Card Image Container with Direct Link */}
              <Link href={`/articles/${article.slug}`} className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100 block">
                <Image
                  src={article.image}
                  alt={article.imageAlt ?? article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`${article.imageFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500 ease-out`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 ${
                    article.categorySlug === 'reviews'
                      ? 'bg-lime-400 text-black'
                      : article.categorySlug === 'suspension'
                      ? 'bg-amber-400 text-black'
                      : 'bg-cyan-500 text-white'
                  }`}>
                    {article.categorySlug === 'reviews' ? (
                      <>
                        <Car className="w-3 h-3" />
                        <span>รีวิวรถ EV</span>
                      </>
                    ) : article.categorySlug === 'suspension' ? (
                      <>
                        <SlidersHorizontal className="w-3 h-3" />
                        <span>ระบบช่วงล่าง</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3 h-3" />
                        <span>คู่มือ &amp; ทริค</span>
                      </>
                    )}
                  </span>

                  <span className="bg-white/95 backdrop-blur text-slate-700 border border-slate-200 text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    {article.readTime}
                  </span>
                </div>
                {/* Bottom Model Tag inside image */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/20 text-[11px] font-medium truncate">
                    {article.category}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  {article.slug === 'ev-performance-driving-techniques' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ Model 3 Performance ปี 2024 ไม่ใช่รถทดสอบของทีมงาน: <a href={drivingArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{drivingArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={drivingArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{drivingArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}
                  {article.slug === 'zeekr-x-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ Flagship ในไทย ปี 2024: <a href={zeekrXArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{zeekrXArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={zeekrXArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{zeekrXArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ภาพย่อ</p>}
                  {article.slug === 'zeekr-009-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ Flagship ในไทย ปี 2024: <a href={zeekr009Article.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{zeekr009Article.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={zeekr009Article.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{zeekr009Article.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ภาพย่อ</p>}
                  {article.slug === 'tesla-model-y-l-premium-6-seater-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพต่างประเทศ ปี 2025: <a href={teslaModelYLArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{teslaModelYLArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={teslaModelYLArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{teslaModelYLArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}
                  {article.slug === 'geely-ex2-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ EX2 Max ในไทย ปี 2025: <a href={geelyEx2Article.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{geelyEx2Article.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={geelyEx2Article.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{geelyEx2Article.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ภาพย่อ</p>}
                  {article.slug === 'deepal-s07-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ NEW S07 ในไทย ปี 2025: <a href={deepalS07Article.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{deepalS07Article.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={deepalS07Article.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{deepalS07Article.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ภาพย่อ</p>}
                  {article.slug === 'deepal-s05-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ Max ในไทย ปี 2025: <a href={deepalS05Article.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{deepalS05Article.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={deepalS05Article.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{deepalS05Article.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ภาพย่อ · ป้ายในภาพเป็นข้อมูลวันจัดแสดง</p>}
                  {article.slug === 'byd-seal-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ Premium ในไทย ปี 2023: <a href={sealArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{sealArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={sealArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{sealArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ภาพย่อ · ป้ายในภาพเป็นข้อมูลวันจัดแสดง</p>}
                  {article.slug === 'byd-atto-3-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพรถไทยปี 2024: <a href={atto3Article.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{atto3Article.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={atto3Article.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{atto3Article.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ภาพย่อ</p>}
                  {article.slug === 'hybrid-to-ev-chassis-dynamics-transition' && <p className="mb-3 text-sm leading-6 text-slate-600">แชสซี Volkswagen ID.3 จัดแสดง: <a href={hybridEvArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hybridEvArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={hybridEvArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{hybridEvArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}
                  {article.slug === 'zeekr-7x-2026-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ ZEEKR 7X จากต่างประเทศ ไม่ยืนยันรุ่นย่อยไทย: <a href={zeekr7xArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{zeekr7xArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={zeekr7xArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">CC0 1.0<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}
                  {article.slug === 'ev-carbon-ceramic-brakes-guide' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ PCCB บน Porsche Carrera S (997): <a href={brakeArticle.coverSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{brakeArticle.coverAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={brakeArticle.coverLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{brakeArticle.coverLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a></p>}
                  {article.slug === 'ev-camber-adjustment-wheel-alignment-guide' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ LADA บนแท่นตั้งศูนย์ ไม่ใช่รถ EV: <a href={camberArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{camberArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={camberArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{camberArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}
                  {article.slug === 'shock-absorber-types-monotube-twintube-air-ev' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพประกอบ ZEEKR 7X ไม่ยืนยันรุ่นย่อยไทย: <a href={shockTypesArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{shockTypesArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={shockTypesArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{shockTypesArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}
                  {article.slug === 'optimizing-ev-suspension-thai-roads' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ Model 3 Performance ปี 2024 ไม่ใช่ภาพทดสอบถนนไทย: <a href={thaiRoadsArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{thaiRoadsArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={thaiRoadsArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{thaiRoadsArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด</p>}
                  {article.slug === 'ev-battery-care' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพแชสซี Volkswagen ID.3: <a href={batteryArticle.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{batteryArticle.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={batteryArticle.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{batteryArticle.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาดสำหรับเว็บ</p>}
                  {article.slug === 'mg4-electric-review' && <p className="mb-3 text-sm leading-6 text-slate-600">ภาพ MG4 X ในไทย มี.ค. 2569: <a href={mg4Article.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{mg4Article.imageAuthor}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · <a href={mg4Article.imageLicenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{mg4Article.imageLicense}<span className="sr-only"> (เปิดแท็บใหม่)</span></a> · ย่อขนาด · ป้ายราคาในภาพเป็นข้อมูลวันจัดแสดง</p>}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                    <span className="text-slate-900">{article.brand === 'EVSELECT' ? <BrandHomeLink /> : article.brand === 'EVSELECT BUYER GUIDE' ? <><BrandHomeLink /> BUYER GUIDE</> : article.brand || article.category}</span>
                    <span aria-hidden="true">•</span>
                    <span className="text-lime-700 line-clamp-1">{article.segmentName}</span>
                  </div>

                  <ArticleHeading className={`text-lg font-bold text-slate-900 mb-2.5 group-hover:text-lime-700 transition-colors leading-snug ${['hybrid-to-ev-chassis-dynamics-transition', 'byd-atto-3-review', 'byd-seal-review', 'deepal-s05-review', 'deepal-s07-review', 'geely-ex2-review', 'tesla-model-y-l-premium-6-seater-review', 'zeekr-009-review', 'zeekr-x-review', 'ev-performance-driving-techniques'].includes(article.slug) ? '' : 'line-clamp-2'}`} style={{ textWrap: 'balance', fontSize: 'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)', lineHeight: 1.45 }}>
                    <Link href={`/articles/${article.slug}`}>{article.slug === 'shock-absorber-types-monotube-twintube-air-ev' ? <>{article.title.split('ถุงลม')[0]}<span className="whitespace-nowrap">ถุงลม</span>{article.title.split('ถุงลม')[1]}</> : article.slug === 'hybrid-to-ev-chassis-dynamics-transition' ? <>{article.title.split('คันเร่ง')[0]}<span className="whitespace-nowrap">คันเร่ง</span>{article.title.split('คันเร่ง')[1]}</> : article.title}</Link>
                  </ArticleHeading>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">{article.excerpt}</p>

                  <dl className="space-y-3 mb-5 border-t border-slate-100 pt-4">
                    <div>
                      <dt className="text-xs font-bold text-slate-500 mb-2">ประเด็นสำคัญในบทความ</dt>
                      <dd className="text-sm text-slate-700 leading-relaxed space-y-1.5">
                        {article.highlights.slice(0, 2).map((highlight) => (
                          <span key={highlight} className="flex gap-2">
                            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-lime-600" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </dd>
                    </div>
                    {article.fitmentGate && (
                      <div className="rounded-xl bg-lime-50 p-3">
                        <dt className="text-xs font-bold text-lime-800 mb-1">จุดที่ควรตรวจสอบ</dt>
                        <dd className="text-sm text-slate-700 leading-relaxed line-clamp-2">{article.fitmentGate}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="flex items-center justify-between gap-3 text-xs text-slate-500 pt-3.5 border-t border-slate-100">
                  <span>{article.dateDisplay}</span>
                  <Link href={`/articles/${article.slug}`} className="min-h-11 text-sm font-semibold text-lime-700 hover:text-lime-800 inline-flex items-center gap-1 group/btn">
                    <span>{article.categorySlug === 'reviews' ? 'อ่านรีวิวฉบับเต็ม' : 'อ่านบทความฉบับเต็ม'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      )}

      {/* 6. Bottom Banner: EVSELECT Fitment Storefront Integration */}
      <section className="mt-16 sm:mt-20 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-lime-800 text-xs font-bold bg-lime-100 border border-lime-200 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-lime-600" />
              <span>เริ่มจากข้อมูลของรถที่คุณใช้</span>
            </div>
            <h2
              className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              อ่านครบแล้ว แต่ยังไม่แน่ใจว่าควรเริ่มจากเรื่องไหน?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
              อ่านรีวิวรถรุ่นที่สนใจ หรือส่งคำถามให้ทีม <BrandHomeLink /> ช่วยชี้ข้อมูลที่ควรตรวจสอบก่อนตัดสินใจ
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-slate-700">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-lime-600" /> รุ่นรถและปีผลิต</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-lime-600" /> ลักษณะการใช้งาน</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-lime-600" /> สิ่งที่ต้องตรวจสอบก่อนซื้อ</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href="/articles?category=reviews"
              className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all text-center w-full sm:w-auto lg:w-full"
            >
              <Car className="w-4 h-4" />
              <span>ดูรีวิวรถ EV</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-300 transition-all text-center w-full sm:w-auto lg:w-full shadow-xs"
            >
              <span>ส่งคำถามให้ทีมงาน</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
