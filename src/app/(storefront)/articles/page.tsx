import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Clock, 
  CalendarDays, 
  Star, 
  Sparkles, 
  Car, 
  ShieldCheck, 
  Award, 
  Zap, 
  BookOpen, 
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

export const metadata = {
  title: 'บทความและรีวิวรถยนต์ไฟฟ้า EV สเปกไทยฉบับเจาะลึก | EVSELECT',
  description: 'ศูนย์รวมบทความรีวิวรถยนต์ไฟฟ้า EV สเปกไทย ทดสอบอัตราเร่ง 0-100 ระยะทางวิ่งจริง แบตเตอรี่ ช่วงล่าง พร้อมเทคนิคการดูแลรักษาและอุปกรณ์เสริมตรงรุ่น',
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
    title: 'เบรก Carbon Ceramic จำเป็นแค่ไหนสำหรับรถ EV สมรรถนะสูง? คุ้มค่าหรือไม่?',
    shortTitle: 'เบรก Carbon Ceramic',
    excerpt: 'เจาะลึกระบบเบรกคาร์บอนเซรามิก ทำไมรถ EV ตัวแรงถึงต้องใช้ แตกต่างจากเบรกเหล็กหล่ออย่างไร พร้อมวิเคราะห์ความคุ้มค่าบนถนนเมืองไทย',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: 'Brake Upgrade',
    image: '/images/reviews/carbon_ceramic_brake_hero.jpg',
    date: '2026-09-02',
    dateDisplay: '2 ก.ย. 2569',
    readTime: '8 นาที',
    rating: null,
    priceRange: 'แสนบาทขึ้นไป',
    highlights: ['ทนความร้อนสูง หมดปัญหาเบรกเฟด', 'น้ำหนักเบากว่าเหล็กหล่อ 50%', 'ฟีลลิ่งเบรกเย็นอาจต้องใช้เวลาวอร์ม'],
    featured: false,
    brand: 'Aftermarket',
    badge: 'Brake System',
  },
  {
    slug: 'zeekr-7x-2026-review',
    title: 'รีวิว Zeekr 7X 2026 สเปกไทย: พรีเมียมเอสยูวีไฟฟ้า 800V สถาปัตยกรรมล้ำ ชาร์จไวสุดขีด ออปชันหรูระดับเรือธง',
    shortTitle: 'Zeekr 7X 2026',
    excerpt: 'เจาะลึกพรีเมียมเอสยูวีไฟฟ้าแพลตฟอร์ม SEA สถาปัตยกรรม 800V SiC มอเตอร์คู่แรงสุด 646 แรงม้า 0-100 ใน 3.8 วินาที ชิป Snapdragon 8295 ช่วงล่างถุงลม และทดสอบระยะวิ่งจริงบนถนนเมืองไทย',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'พรีเมียมสมาร์ทเอสยูวี D-Segment',
    image: '/images/reviews/zeekr-7x-hero.jpg',
    date: '2026-08-26',
    dateDisplay: '26 ส.ค. 2569',
    readTime: '12 นาที',
    rating: 9.2,
    ratingText: '9.2 / 10',
    priceRange: '1,399,000 – 1,799,000 บาท',
    performanceText: '310 – 475 kW (416 – 637 hp / 422 – 646 PS) / 710 Nm',
    highlights: [
      'สถาปัตยกรรม 800V SiC ชาร์จ DC 420kW',
      'สูงสุด 637 hp / 646 PS (AWD) 0-100 ใน 3.8s',
      'On-Board Charger AC 22kW ทุกรุ่น',
      'ชิป Snapdragon 8295 + จอ 16 นิ้ว Mini LED',
      'ช่วงล่างถุงลมปรับระดับ + แดมเปอร์ CCD'
    ],
    featured: true,
    brand: 'Zeekr',
    badge: 'Thailand focus model',
    accessoryOpportunity: 'พรม TPE 3D, ม่านบังแดดหลังคาแก้ว, ฟิล์มกระจก 9H, ถาดคอนโซล',
    fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'zeekr-009-review',
    title: 'รีวิว ZEEKR 009 สเปกไทย 3 รุ่นย่อย: อัลตร้าลักชัวรีเอ็มพีวี 603 แรงม้า ท้าชน Toyota Alphard',
    shortTitle: 'ZEEKR 009',
    excerpt: 'เจาะลึกอัลตร้าลักชัวรีเอ็มพีวี 3 รุ่นย่อย (Standard FWD, Premium AWD, Flagship AWD) ขุมพลังสูงสุด 603 แรงม้า วิ่งไกล 686-712 กม. เบาะ Sofaro First Class พร้อมโครงสร้าง 720 องศา',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: '👑 อัลตร้าลักชัวรีเอ็มพีวีไฟฟ้า',
    image: '/images/reviews/zeekr-009-white.jpg',
    date: '2026-08-26',
    dateDisplay: '26 ส.ค. 2569',
    readTime: '16 นาที',
    rating: 9.4,
    ratingText: '9.4 / 10',
    priceRange: '3,099,000 – 3,599,000 บาท',
    performanceText: '450 kW (603 hp) / 693 Nm (0-100: 4.5s)',
    highlights: [
      'มอเตอร์คู่ 603 hp / 693 Nm (0-100: 4.5s)',
      'แบตเตอรี่ 116 kWh วิ่งไกล 686 กม. (NEDC)',
      'เบาะ Sofaro First Class + Eames Lounge Mode',
      'ลำโพง YAMAHA 30 จุด + จอเพดาน OLED 17 นิ้ว',
      'ช่วงล่างถุงลม Dual Chamber + CCD'
    ],
    featured: false,
    brand: 'Zeekr',
    badge: 'Flagship Luxury MPV',
    accessoryOpportunity: 'พรม TPE 3 แถวตรงรุ่น, ฟิล์มกันรอยจอหลังคา, ถาดจัดระเบียบตู้เย็น',
    fitmentGate: 'เช็คเลย์เอาต์ที่นั่ง 6 ที่นั่ง (Sofaro) หรือ 7 ที่นั่ง (Walkthrough)',
  },
  {
    slug: 'tesla-model-y-l-premium-6-seater-review',
    title: 'รีวิว 2026 Tesla Model Y L (Premium 6-Seater): หรือนี่จะเป็น EV ครอบครัวที่สมบูรณ์แบบที่สุดในไทย?',
    shortTitle: 'Tesla Model Y L (6-Seater)',
    excerpt: 'การปรับฐานล้อให้ยาวขึ้นและรื้อโครงสร้างห้องโดยสารใหม่ทั้งหมด ทำให้ Tesla สามารถเปลี่ยนภาพลักษณ์จากรถ SUV 5 ที่นั่งสำหรับใช้งานทั่วไป ให้กลายเป็นรถครอบครัวตัวจริงที่รองรับผู้โดยสารได้มากขึ้น...',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'พรีเมียม 6 ที่นั่ง SUV',
    image: '/images/reviews/tesla-model-y-l-hero.jpg',
    date: '2026-08-26',
    dateDisplay: '26 ส.ค. 2569',
    readTime: '8 นาที',
    rating: 8.8,
    ratingText: '8.8 / 10',
    priceRange: '1,999,000 บาท',
    performanceText: 'Long Range AWD (0-100: 5.0s)',
    highlights: ['2+2+2 Captain Seats', '0-100 ใน 5.0s', 'Long Range AWD', 'จอควบคุมแถวหลัง 8 นิ้ว'],
    featured: false,
    brand: 'Tesla',
    badge: 'Family 6-Seater',
    accessoryOpportunity: 'พรม TPE 3 แถว, ถาดท้ายรถเมื่อพับเบาะ, ตัวจัดระเบียบ Frunk',
    fitmentGate: 'ตรวจเช็คเลย์เอาต์เบาะ 6 ที่นั่งและแอร์หลัง',
  },
  {
    slug: 'tesla-model-3-highland-review',
    title: 'รีวิว Tesla Model 3 Highland (2024-2026): อัปเกรดความเงียบ นุ่มนวล และเทคโนโลยีที่สมบูรณ์แบบที่สุด',
    shortTitle: 'Tesla Model 3 Highland',
    excerpt: 'เจาะลึก Project Highland สเปกไทย เพิ่มกระจก Acoustic 360 องศา ช่วงล่างใหม่นุ่มนวล เบาะเป่าลมเย็น จอหลัง 8 นิ้ว และความเร็วชาร์จ Supercharger สูงสุด 250 kW',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'sedan',
    segmentName: 'พรีเมียมซีดานไฟฟ้า D-Segment',
    image: '/images/reviews/tesla-model-3-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '10 นาที',
    rating: 9.3,
    ratingText: '9.3 / 10',
    priceRange: '1,149,000 – 1,799,000 บาท',
    performanceText: '460 – 627 hp (0-100: 3.1s)',
    highlights: ['460 – 627 hp (Performance)', '0-100 ใน 3.1s', '629 กม. WLTP (LR)', 'Supercharger 250kW'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'byd-seal-review',
    title: 'รีวิว BYD Seal (AWD Performance & Premium): สปอร์ตซีดานไฟฟ้า 530 แรงม้า ที่เขย่าบัลลังก์รถยุโรป',
    shortTitle: 'BYD Seal',
    excerpt: 'ทดสอบสมรรถนะสปอร์ตซีดานไฟฟ้าตัวแรง 530 แรงม้า 0-100 ใน 3.8 วินาที ความแข็งแกร่งของเทคโนโลยี CTB แบตเตอรี่ Blade Battery และช่วงล่าง FSD บนถนนไทย',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'sedan',
    segmentName: 'สปอร์ตซีดานไฟฟ้าสมรรถนะสูง',
    image: '/images/reviews/byd-seal-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '9 นาที',
    rating: 9.1,
    ratingText: '9.1 / 10',
    priceRange: '849,900 – 1,099,900 บาท',
    highlights: ['530 hp / 670 Nm', '0-100 ใน 3.8s', 'แบต Blade 82.5 kWh', 'ช่วงล่าง FSD'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'zeekr-x-review',
    title: 'รีวิว Zeekr X (Flagship AWD & Standard): พรีเมียมคอมแพกต์ครอสโอเวอร์ ดีไซน์ล้ำ ออปชันหรูระดับไฮเอนด์',
    shortTitle: 'Zeekr X',
    excerpt: 'สัมผัสความหรูหราสไตล์สแกนดิเนเวีย แพลตฟอร์ม SEA มอเตอร์คู่ 428 แรงม้า 0-100 ใน 3.8 วินาที ประตูไร้กรอบไฟฟ้า ลำโพง Yamaha 13 จุด และการขับขี่สุดเฟิร์ม',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'พรีเมียมคอมแพกต์ครอสโอเวอร์',
    image: '/images/reviews/zeekr-x-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '9 นาที',
    rating: 9.0,
    ratingText: '9.0 / 10',
    priceRange: '899,000 – 1,049,000 บาท',
    highlights: ['428 hp (AWD Flagship)', '0-100 ใน 3.8s', 'แพลตฟอร์ม SEA', 'Yamaha 13 ลำโพง'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'mg4-electric-review',
    title: 'รีวิว MG4 Electric สเปกไทย: รถยนต์ไฟฟ้าขับหลัง 50:50 ที่ขับมันส์ คม หนึบที่สุดในงบไม่เกินล้าน',
    shortTitle: 'MG4 Electric',
    excerpt: 'ผ่าลึกสมรรถนะแฮทช์แบ็กไฟฟ้าขับหลังบาลานซ์ 50:50 ช่วงล่าง Five-Link ขับสนุกเร้าใจ พร้อมรุ่นแรง XPOWER 435 แรงม้า อัตราเร่ง 0-100 ใน 3.8 วินาที',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'hatchback',
    segmentName: 'ฮอตแฮทช์ไฟฟ้าขับเคลื่อนล้อหลัง',
    image: '/images/reviews/mg4-electric-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '8 นาที',
    rating: 8.9,
    ratingText: '8.9 / 10',
    priceRange: '569,900 – 1,119,900 บาท',
    highlights: ['RWD บาลานซ์ 50:50', 'ช่วงล่าง 5-Link อิสระ', 'XPOWER 435 hp', 'วงเลี้ยวแคบ 5.3 ม.'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'deepal-s07-review',
    title: 'รีวิว Changan Deepal S07 สเปกไทย: เอสยูวีไฟฟ้าไซเบอร์พังก์ ออปชันหรู วิ่งจริงไกลแค่ไหนบนถนนเมืองไทย?',
    shortTitle: 'Changan Deepal S07',
    excerpt: 'เจาะลึกเอสยูวีไซเบอร์พังก์ มอเตอร์หลัง 258 แรงม้า หลังคาแก้วพร้อมม่านไฟฟ้าเปิด-ปิดได้จริง จอ Sunflower 15.6 นิ้ว ชาร์จไว DC 167 kW และ Frunk หน้า 125 ลิตร',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'สมาร์ทเอสยูวีขนาดกลาง D-Segment',
    image: '/images/reviews/deepal-s07-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '8 นาที',
    rating: 8.8,
    ratingText: '8.8 / 10',
    priceRange: '1,099,000 – 1,399,000 บาท',
    highlights: ['258 hp / 320 Nm', 'ชาร์จไว DC 167 kW', 'ม่านหลังคาไฟฟ้ากันร้อน', 'Frunk หน้า 125 ลิตร'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'byd-atto-3-review',
    title: 'รีวิว BYD Atto 3 (Extended Range & Dynamic): คอมแพกต์เอสยูวีไฟฟ้ายอดนิยม คุ้มค่า น่าใช้แค่ไหนในปี 2026?',
    shortTitle: 'BYD Atto 3',
    excerpt: 'รีวิวเจาะลึกเอสยูวีไฟฟ้าขวัญใจมหาชน ทดสอบความทนทานของแบตเตอรี่ Blade Battery ช่วงล่างนุ่มนั่งสบาย ม่านบังแดดไฟฟ้าในตัว และความคุ้มค่าหลังปรับโครงสร้างราคาใหม่',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'คอมแพกต์เอสยูวีครอบครัวยอดนิยม',
    image: '/images/reviews/byd-atto-3-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '8 นาที',
    rating: 8.8,
    ratingText: '8.8 / 10',
    priceRange: '669,900 – 799,900 บาท',
    highlights: ['201 hp / 310 Nm', 'วิ่งไกล 480 กม. (NEDC)', 'Blade Battery ทนทาน', 'ม่านซันรูฟไฟฟ้า'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'deepal-s05-review',
    title: 'รีวิว Changan Deepal S05 สเปกไทย: เอสยูวีสายแคมปิ้ง-Vlog กล้อง 4K บนหลังคา ไฟหน้าฉายหนัง และ Frunk หน้า 159 ลิตร',
    shortTitle: 'Changan Deepal S05',
    excerpt: 'เอสยูวีไฟฟ้าสำหรับสายครีเอเตอร์และแคมปิ้ง ติดตั้งกล้อง 4K Gimbal Camera บนหลังคา ไฟหน้า DLP ฉายโปรเจกเตอร์ 120 นิ้ว มอเตอร์หลัง 238 แรงม้า และ Frunk หน้าใหญ่สุด 159 ลิตร',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'suv',
    segmentName: 'สมาร์ทเทคเอสยูวีสายครีเอเตอร์',
    image: '/images/reviews/deepal-s05-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '8 นาที',
    rating: 8.7,
    ratingText: '8.7 / 10',
    priceRange: '799,000 – 899,000 บาท',
    highlights: ['กล้อง 4K Gimbal Camera', 'ไฟหน้าฉายหนัง DLP', 'Frunk หน้า 159 ลิตร', 'ชาร์จไว 3C ใน 15 นาที'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'geely-ex2-review',
    title: 'รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link ที่ยกระดับมาตรฐานรถเล็กในเมือง',
    shortTitle: 'Geely EX2',
    excerpt: 'สัมผัสแรกกับซิตี้คาร์ไฟฟ้าระบบขับเคลื่อนล้อหลัง RWD มอเตอร์ 116 แรงม้า ช่วงล่างหลังอิสระ Multi-link หนึ่งเดียวในงบ 4 แสน แบตเตอรี่ Aegis 39.4 kWh และระบบ Flyme Auto',
    category: 'รีวิวรถ EV',
    categorySlug: 'reviews',
    segment: 'city',
    segmentName: 'ซิตี้คาร์ไฟฟ้าขับหลังขนาดกะทัดรัด',
    image: '/images/reviews/geely-ex2-hero.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '7 นาที',
    rating: 8.6,
    ratingText: '8.6 / 10',
    priceRange: '429,990 – 459,990 บาท',
    highlights: ['มอเตอร์ 116 hp (RWD)', 'ช่วงล่างหลัง Multi-link', 'แบต Aegis 39.4 kWh', 'Frunk หน้า 70 ลิตร'],
    featured: false,
      brand: 'EV',
      badge: 'Thailand focus model',
      accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
      fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'ev-battery-care',
    title: '5 วิธีดูแลแบตเตอรี่รถ EV ให้เสื่อมช้าลง และใช้ได้นานเกิน 10 ปี',
    shortTitle: 'คู่มือดูแลแบตเตอรี่ EV',
    excerpt: 'เรียนรู้เทคนิคการชาร์จที่ถูกต้อง การตั้งค่า Limit การชาร์จ (80% vs 100%) และพฤติกรรมที่ควรหลีกเลี่ยงเพื่อยืดอายุแบตเตอรี่รถยนต์ไฟฟ้าของคุณให้ใช้งานได้ยาวนานสูงสุด',
    category: 'คู่มือและเทคนิค',
    categorySlug: 'guides',
    segment: 'guide',
    segmentName: 'คู่มือการใช้งาน & เทคนิคการชาร์จ',
    image: '/images/reviews/ev-battery-hero-new.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '4 นาที',
    rating: null,
    ratingText: 'คู่มือแนะนำ',
    priceRange: 'อ่านฟรี',
    highlights: ['กฎการชาร์จ 20-80%', 'LFP vs NMC Chemistry', 'ตั้งเวลาชาร์จ TOU', 'ป้องกันแบตเตอรี่เสื่อม'],
    featured: false,
      brand: 'EV',
    badge: 'Thailand focus model',
    accessoryOpportunity: 'พรม TPE, ถาดคอนโซล, กันรอยชายประตู',
    fitmentGate: 'เช็คโมเดลปี และความแตกต่างของรุ่นย่อยในไทย',
  },
  {
    slug: 'ev-performance-driving-techniques',
    title: 'เทคนิคการขับขี่รถ EV สมรรถนะสูง: Weight Transfer, Trail Braking และการควบคุม Instant Torque บนแทร็กและโค้ง',
    shortTitle: 'เทคนิคขับขี่ EV สมรรถนะสูง',
    subtitle: 'คู่มือการขับขี่สปอร์ต EV ระดับสนามแข่งตามหลักฟิสิกส์ OptimumG',
    excerpt: 'เจาะลึกฟิสิกส์การควบคุมรถยนต์ไฟฟ้าน้ำหนัก 2+ ตัน เทคนิค Trail Braking ถ่ายเทน้ำหนักลงล้อหน้า การบริหารแรงยึดเกาะจาก Instant Torque และการแก้อาการ Understeer/Oversteer ตามหลัก OptimumG',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: '🏁 ไดนามิกส์ & การขับขี่ขั้นสูง',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Dynamics Lab',
    readTime: '10 นาที',
    rating: 9.5,
    ratingText: 'OptimumG Dynamics Guide',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Weight Transfer & Grip Dynamics',
    highlights: [
      'Longitudinal Weight Transfer ในรถ 2 ตัน',
      'Trail Braking เพื่อเพิ่ม Grip ล้อหน้า',
      'Regen vs Hydraulic Brake Blending',
      'การแก้อาการ Snap Oversteer ใน EV ขับหลัง'
    ],
    featured: false,
    brand: 'OPTIMUMG DYNAMICS',
    badge: 'Track & Dynamics Guide',
    tags: ['OptimumG', 'Weight Transfer', 'Trail Braking', 'Instant Torque', 'Race Driving', 'EV Track Day'],
    accessoryOpportunity: 'ยาง High Load Rating, ผ้าเบรกคาร์บอนเซรามิก, ชุดสตรัทปรับเกลียว 2-Way',
    fitmentGate: 'ตรวจสอบพิกัดการกระจายน้ำหนักหน้า-หลัง (Weight Distribution) และค่า CG ของรถ',
  },
  {
    slug: 'hybrid-to-ev-chassis-dynamics-transition',
    title: 'การเปลี่ยนผ่านจาก Hybrid สู่ EV: พลศาสตร์แชสซี จุดศูนย์ถ่วง (CoG) และ Polar Moment of Inertia',
    shortTitle: 'พลศาสตร์แชสซี Hybrid สู่ EV',
    subtitle: 'เปรียบเทียบสถาปัตยกรรมแชสซี ICE/HEV vs Skateboard BEV ตามหลัก Racecar Engineering',
    excerpt: 'วิเคราะห์ความแตกต่างเชิงโครงสร้างระหว่าง HEV/PHEV กับ Skateboard BEV จุดศูนย์ถ่วงต่ำพิเศษ Polar Moment of Inertia และการกระจาย Roll Stiffness หน้า-หลัง ตามหลัก Racecar Engineering',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'chassis',
    segmentName: '📐 พลศาสตร์แชสซี & แพลตฟอร์ม',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Engineering',
    readTime: '9 นาที',
    rating: 9.4,
    ratingText: 'Racecar Eng. Architecture',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'CoG Height & Polar Moment',
    highlights: [
      'Skateboard Battery Tray Structure',
      'Polar Moment of Inertia รอบแกน Yaw',
      'Roll Stiffness Distribution 55:45',
      'Torsional Rigidity มากกว่า 40,000 Nm/deg'
    ],
    featured: false,
    brand: 'RACECAR ENGINEERING',
    badge: 'Chassis Architecture',
    tags: ['Chassis Dynamics', 'Center of Gravity', 'Polar Moment of Inertia', 'Skateboard Platform', 'Roll Stiffness'],
    accessoryOpportunity: 'ค้ำโช้คหน้า-หลังอะลูมิเนียม, บาร์กันโคลงปรับระดับได้, ซับเฟรมบูชยูรีเทน',
    fitmentGate: 'วัดระยะ Torsional Rigidity และจุดยึด Subframe เฉพาะของแพลตฟอร์ม EV',
  },
  {
    slug: 'ev-horsepower-vs-torque-explained',
    title: 'แรงม้า vs แรงบิดในรถยนต์ไฟฟ้า (EV Power Band): ทำไมแรงบิดมหาศาลที่ 0 RPM ถึงเปลี่ยนพฤติกรรมช่วงล่าง?',
    shortTitle: 'แรงม้า vs แรงบิดในรถยนต์ไฟฟ้า',
    subtitle: 'เจาะลึกฟิสิกส์มอเตอร์ไฟฟ้า PMSM กราฟไดโน่ และผลกระทบต่อเรขาคณิตช่วงล่าง',
    excerpt: 'เจาะลึกกราฟไดโน่ของมอเตอร์ไฟฟ้า Permanent Magnet Synchronous Motor (PMSM) ย่าน Constant Torque vs Constant Power แรงเค้นบนหน้ายาง และผลกระทบต่อเรขาคณิตช่วงล่าง',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: '⚡ ระบบส่งกำลัง & แรงบิด',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Powertrain Lab',
    readTime: '8 นาที',
    rating: 9.3,
    ratingText: 'Powertrain Physics',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Instant Torque 0-RPM Dynamics',
    highlights: [
      'Constant Torque vs Constant Power Region',
      'Back-EMF Limitation ในมอเตอร์ไฟฟ้า',
      'Single-Speed Gear Reduction Ratio',
      'Tire Longitudinal Slip Ratio ใต้แรงบิดเต็มที่'
    ],
    featured: false,
    brand: 'EV DRIVETRAIN LAB',
    badge: 'Motor Dyno Physics',
    tags: ['Horsepower vs Torque', 'PMSM Motor', 'Dyno Curves', 'Back EMF', 'Single Speed Gearbox', 'Slip Angle'],
    accessoryOpportunity: 'ยางคอมปาวด์รองรับแรงบิดสูง, บูชช่วงล่างทนแรงบิด, แท่นมอเตอร์ยูรีเทนเสริมความแข็งแกร่ง',
    fitmentGate: 'ตรวจสอบพิกัดรองรับแรงบิดของเพลาขับและยางตามสเปกโรงงาน',
  },
  {
    slug: 'ev-camber-adjustment-wheel-alignment-guide',
    title: 'คู่มือการตั้งมุมแคมเบอร์ (Camber) และศูนย์ล้อรถ EV: Static vs Dynamic Camber และการคุม Contact Patch',
    shortTitle: 'คู่มือตั้งมุมแคมเบอร์ & ศูนย์ล้อ EV',
    subtitle: 'ศาสตร์การเซ็ตศูนย์ล้อและ Camber Gain Curve เพื่อเสถียรภาพสูงสุดตามหลัก Suspension Secrets',
    excerpt: 'เข้าใจพฤติกรรมหน้ายางรถ EV ใต้แรงเหวี่ยงหนีศูนย์ การชดเชย Camber Gain Curve ตามมุม Roll ของตัวถัง การเซ็ตติ้ง Toe-in/Toe-out และ Caster เพื่อลดอาการกินยางและเพิ่มเสถียรภาพตามหลัก Suspension Secrets',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'alignment',
    segmentName: '📏 เรขาคณิตศูนย์ล้อ & แคมเบอร์',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Kinematics Lab',
    readTime: '11 นาที',
    rating: 9.6,
    ratingText: 'Suspension Secrets Spec',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Camber Gain & Contact Patch',
    highlights: [
      'Static vs Dynamic Camber ภายใต้ Body Roll',
      'Camber Gain Curve ต่อองศาการเอียงตัวถัง',
      'Contact Patch Pressure Distribution',
      'การปรับ Toe & Caster สำหรับแชสซี EV หนัก'
    ],
    featured: false,
    brand: 'SUSPENSION SECRETS',
    badge: 'Kinematics & Alignment',
    tags: ['Camber Adjustment', 'Wheel Alignment', 'Dynamic Camber', 'Contact Patch', 'Toe and Caster', 'Suspension Secrets'],
    accessoryOpportunity: 'Pillowball Camber Plates, อาร์มปรับมุมแคมเบอร์หลังปรับเกลียว, สลักแคมเบอร์แต่ง',
    fitmentGate: 'ตรวจสอบระยะเคลียร์แลนซ์ซุ้มล้อและโช้คเมื่อปรับ Negative Camber เกิน -1.8 องศา',
  },
  {
    slug: 'ev-damper-tuning-bump-rebound-guide',
    title: 'คู่มือการปรับจูนแดมเปอร์ (Damper Tuning) สำหรับรถ EV: Low-speed vs High-speed Bump & Rebound',
    shortTitle: 'คู่มือจูนแดมเปอร์ Bump & Rebound',
    subtitle: 'การควบคุม Body Motion และคลื่นความถี่สั่นสะเทือนตามหลัก OptimumG Damper Science',
    excerpt: 'เจาะลึกการควบคุมการเคลื่อนที่ของตัวถัง (Sprung Mass) และล้อ (Unsprung Mass) กราฟ Force-Velocity (F-V Curve) แบบ Digressive การตั้งค่า Rebound-to-Bump Ratio 65:35 เพื่อขจัดอาการโยนย้วยในรถแบตเตอรี่หนัก',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'dampers',
    segmentName: '🔧 วาล์วแดมเปอร์ & F-V Curve',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Damper Lab',
    readTime: '11 นาที',
    rating: 9.7,
    ratingText: 'OptimumG Damper Science',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Damping Ratio & F-V Curve',
    highlights: [
      'Low-speed Damping (0-2 in/s Body Roll Control)',
      'High-speed Damping (>6 in/s Road Imperfections)',
      'Digressive Valve Profiles สำหรับถนนจริง',
      'อัตราส่วนความหน่วง Damping Ratio 0.65 - 0.70'
    ],
    featured: false,
    brand: 'OPTIMUMG DAMPER LAB',
    badge: 'Damper Dynamics',
    tags: ['Damper Tuning', 'Bump and Rebound', 'Force Velocity Curve', 'Digressive Valving', 'Critical Damping', 'OptimumG'],
    accessoryOpportunity: 'ชุดแดมเปอร์ปรับระดับ 2-Way / 3-Way อิสระ, วาล์ว DFV / Digressive Valving',
    fitmentGate: 'ตรวจสอบความยาวกระบอกโช้คและ Stroke Travel ให้ตรงตามสเปกรถ EV แต่ละรุ่น',
  },
  {
    slug: 'shock-absorber-types-monotube-twintube-air-ev',
    title: 'เจาะลึกประเภทโช้คอัพสำหรับรถยนต์ไฟฟ้า: Monotube vs Twin-tube vs Air Suspension',
    shortTitle: 'ประเภทโช้คอัพ Monotube vs Twin-tube',
    subtitle: 'เปรียบเทียบโครงสร้างภายใน ข้อดี-ข้อจำกัด และระบบวาล์วแปรผันอัจฉริยะ',
    excerpt: 'เปรียบเทียบข้อดี-ข้อเสียเชิงวิศวกรรม โครงสร้างลูกสูบเดี่ยว Monotube แรงดันไนโตรเจนสูง vs Twin-tube วาล์วฐานคู่ และระบบถุงลม Dual-Chamber Air Suspension พร้อมระบบแดมเปอร์แปรผัน CDC ในรถ EV พรีเมียม',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'dampers',
    segmentName: '🔩 เทคโนโลยีโช้คอัพ & แอร์สปริง',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Hardware Lab',
    readTime: '10 นาที',
    rating: 9.5,
    ratingText: 'Shock Absorber Architecture',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Piston Diameter & Gas Pressure',
    highlights: [
      'Monotube Large Piston & Heat Dissipation',
      'Twin-tube Internal Construction & Cavitation Risk',
      'Inverted Monotube Unsprung Mass Reduction',
      'Dual-Chamber Air Suspension + CDC System'
    ],
    featured: false,
    brand: 'RACECAR SHOCK LAB',
    badge: 'Hardware Architecture',
    tags: ['Shock Absorber Types', 'Monotube', 'Twin Tube', 'Air Suspension', 'CDC Damper', 'FSD Valve'],
    accessoryOpportunity: 'โช้คอัพ Monotube ตรงรุ่น, ชุดอัปเกรดถุงลมไฟฟ้า, วาล์ว FSD อัตโนมัติ',
    fitmentGate: 'ตรวจสอบขนาดรูยึด Top Mount และขายึดสายเซนเซอร์ ABS / เบรก',
  },
  {
    slug: 'optimizing-ev-suspension-thai-roads',
    title: 'การเซ็ตติ้งช่วงล่างรถ EV ให้สมบูรณ์แบบบนถนนเมืองไทย: รอยต่อคอสะพาน ลอนคลื่น และลูกระนาด',
    shortTitle: 'เซ็ตติ้งช่วงล่าง EV ถนนเมืองไทย',
    subtitle: 'คู่มือแก้ปัญหาช่วงล่างดีดย้วย รอยต่อทางด่วน และรักษาระยะความสูงปลอดภัยบนถนนไทย',
    excerpt: 'แนวทางการแก้ปัญหารถ EV ย้วยโยนบนถนนคอนกรีตลอนคลื่นและกระแทกแรงที่คอสะพาน การเพิ่ม Bump Travel >45mm การจัดค่าวาล์ว Digressive ซับแรงกระแทกความเร็วสูง และการป้องกันน้ำท่วมขังใต้ท้องรถ',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'tuning',
    segmentName: '🇹🇭 ปรับแต่งช่วงล่างถนนไทย',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Thai Road Lab',
    readTime: '9 นาที',
    rating: 9.6,
    ratingText: 'EVSELECT Thai Lab Verified',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'Thai Asphalt & Concrete Setup',
    highlights: [
      'การรับมือรอยต่อคอสะพานทางด่วนกรุงเทพฯ',
      'Bump Travel ขั้นต่ำ >45mm สำหรับรถ EV หนัก',
      'Digressive High-speed Blow-off Valve',
      'Ground Clearance ป้องกันแบตเตอรี่ครูดน้ำท่วม'
    ],
    featured: false,
    brand: 'EVSELECT THAI ROAD LAB',
    badge: 'Thailand Road Setup',
    tags: ['Thai Road Tuning', 'Bridge Expansion Joints', 'Bump Travel', 'Digressive Valving', 'Battery Ground Clearance'],
    accessoryOpportunity: 'ชุดสปริงคอมฟอร์ทลดเด้ง, แดมเปอร์วาล์วไทยแลนด์สเปก, การ์ดกันกระแทกใต้ท้องแบตเตอรี่',
    fitmentGate: 'วัดระยะความสูงใต้ท้องรถ (Ride Height) หลังติดตั้งสปริงโหลดไม่ต่ำกว่า 135mm',
  },
  {
    slug: 'ev-tyre-and-coilover-selection-guide',
    title: 'คู่มือการเลือกยางและชุดสตรัทปรับเกลียว (Coilovers) สำหรับรถ EV: สเปก High Load (HL) และ Spring Rate',
    shortTitle: 'คู่มือเลือกยางและสตรัทสำหรับ EV',
    subtitle: 'หลักการคำนวณสปริงเรท เลือกรุ่นยาง และค่าความแข็งสปริงสำหรับแชสซีน้ำหนักสูง',
    excerpt: 'วิธีเลือกยาง EV ที่มีดัชนีรับน้ำหนักพิเศษ (HL / XL) โฟมซับเสียง Acoustic Resonance และการคำนวณสปริงเรท (Linear vs Progressive) เพื่อรองรับแชสซีแบตเตอรี่น้ำหนักสูงโดยไม่กระด้าง',
    category: 'ระบบช่วงล่างและสมรรถนะ',
    categorySlug: 'suspension',
    segment: 'coilovers',
    segmentName: '🛞 ยาง & สตรัทปรับเกลียวตรงรุ่น',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1200&auto=format&fit=crop',
    date: '2026-08-27',
    dateDisplay: '27 ส.ค. 2569',
    publishedAt: '2026-08-27',
    author: 'EVSELECT Component Lab',
    readTime: '12 นาที',
    rating: 9.7,
    ratingText: 'Comprehensive Buyer Guide',
    priceRange: 'คู่มือเชิงลึก',
    performanceText: 'HL Rating & Spring Rate Math',
    highlights: [
      'สัญลักษณ์ยาง EV (HL - High Load Capacity)',
      'Acoustic Foam ซับเสียงยางบดถนน',
      'การคำนวณ Spring Rate (k) รองรับรถ 2 ตัน',
      'Linear vs Progressive Spring Characteristics'
    ],
    featured: false,
    brand: 'EVSELECT BUYER GUIDE',
    badge: 'Fitment & Hardware Guide',
    tags: ['EV Tyres', 'High Load Capacity', 'Coilover Selection', 'Spring Rate Calculation', 'Linear Springs', 'Acoustic Foam'],
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

  const groupedArticles = activeCategory === 'all' ? [ { title: 'รีวิวรถ EV', items: filteredArticles.filter(a => a.categorySlug === 'reviews') }, { title: 'ระบบช่วงล่างและสมรรถนะ', items: filteredArticles.filter(a => a.categorySlug === 'suspension') }, { title: 'คู่มือและเทคนิค', items: filteredArticles.filter(a => a.categorySlug === 'guides') } ].filter(g => g.items.length > 0) : [ { title: '', items: filteredArticles } ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-slate-900 bg-white">
      {/* 1. Header Section */}
      <header className="space-y-6 mb-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-lime-50 border border-lime-200 text-lime-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-xs">
          <Sparkles className="w-4 h-4 text-lime-600" />
          <span>EVSELECT Editorial Lab &amp; Real Road Test Reviews</span>
          <span className="bg-lime-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
            {totalCount} บทความ
          </span>
        </div>

        <h1
          className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          บทความ คู่มือ และรีวิวเจาะลึก{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-emerald-600 to-lime-700">
            รถยนต์ไฟฟ้า (EV)
          </span>
        </h1>

        <p
          className="text-sm sm:text-base md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รวมรีวิวรถ EV สเปกไทยฉบับเจาะลึก 12 มิติตามมาตรฐาน ทดสอบอัตราเร่ง 0-100 กม./ชม. ระยะทางวิ่งจริง 
          การรับมือความร้อน 40°C และช่วงล่างบนถนนไทย พร้อมคำแนะนำอุปกรณ์เสริมตรงรุ่นผ่าน QC 100%
        </p>

        {/* Quick Highlights Counter Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <Car className="w-4 h-4 text-lime-600" />
            <span><strong>{reviewsCount} รุ่น</strong> รีวิวรถ EV ยอดนิยม</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <SlidersHorizontal className="w-4 h-4 text-lime-600" />
            <span><strong>{suspensionCount} บทความ</strong> เจาะลึกระบบช่วงล่าง</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-lime-600" />
            <span><strong>100%</strong> ทดสอบขับขี่จริงบนถนนไทย</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <Award className="w-4 h-4 text-lime-600" />
            <span><strong>EVSELECT</strong> Scorecard มาตรฐาน</span>
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
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/10 lg:to-white"></div>
                
                {/* Spotlight Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    FEATURED REVIEW
                  </span>
                  <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                    ทดสอบขับขี่จริง
                  </span>
                </div>

                {/* Score Pill overlay on image */}
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <div className="bg-white/95 backdrop-blur border border-lime-500 px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-xs">
                    <Award className="w-4 h-4 text-lime-600" />
                    <span className="text-xs text-slate-600 font-medium">คะแนนรวม</span>
                    <span className="text-sm font-black text-lime-700">{featuredArticle.ratingText}</span>
                  </div>
                </div>
              </div>

              {/* Right/Bottom Content Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-lime-800 tracking-wider uppercase bg-lime-50 border border-lime-200 px-2.5 py-1 rounded-lg">
                      {featuredArticle.segmentName}
                    </span>
                    <div className="hidden lg:flex items-center gap-1.5 bg-lime-50 border border-lime-200 px-3 py-1 rounded-full">
                      <Award className="w-4 h-4 text-lime-600" />
                      <span className="text-xs text-slate-500">Score</span>
                      <span className="text-sm font-black text-lime-700">{featuredArticle.ratingText}</span>
                    </div>
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

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                      <div className="text-[11px] text-slate-500">ราคาจำหน่าย</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 truncate">{featuredArticle.priceRange}</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
                      <div className="text-[11px] text-slate-500">สมรรถนะสูงสุด</div>
                      <div className="text-xs sm:text-sm font-bold text-lime-700 mt-0.5">{featuredArticle.performanceText || '646 PS (0-100: 3.8s)'}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredArticle.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200">
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
                    <span>อ่านรีวิวฉบับเต็ม</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Section Heading for Grid */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
          {activeCategory === 'suspension' ? (
            <SlidersHorizontal className="w-5 h-5 text-lime-600" />
          ) : activeCategory === 'guides' ? (
            <BookOpen className="w-5 h-5 text-lime-600" />
          ) : (
            <Car className="w-5 h-5 text-lime-600" />
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
          <span className="text-xs text-slate-500 font-normal">
            ({filteredArticles.length} บทความ)
          </span>
        </h2>
        
        {(activeSegment !== 'all' || activeCategory !== 'all') && (
          <Link
            href="/articles"
            className="text-xs text-lime-600 hover:underline font-medium"
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
          {groupedArticles.map((group, groupIdx) => (
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
                {group.items.map((article, idx) => (
            <article
              key={article.slug}
              className="group flex flex-col bg-white hover:bg-white border border-slate-200 hover:border-slate-300 rounded-3xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl"
              style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '460px' } as React.CSSProperties}
            >
              {/* Card Image Container with Direct Link */}
              <Link href={`/articles/${article.slug}`} className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100 block">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Top Badges */}
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

                  {article.rating && (
                    <span className="bg-white/95 backdrop-blur text-slate-900 border border-slate-200 text-xs font-black px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{article.rating}</span>
                    </span>
                  )}
                </div>

                {/* Top left badge */}
                {article.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white/95 backdrop-blur text-slate-900 border border-slate-200 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                      {article.badge}
                    </span>
                  </div>
                )}
                {/* Bottom Model Tag inside image */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/20 text-[11px] font-medium truncate">
                    {article.category}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-3 tracking-wider">
                    <span>{(String(idx + 1).padStart(2, '0'))}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-900 uppercase">{article.brand || 'BRAND'}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-lime-700">{article.segmentName}</span>
                  </div>

                  <h3 className="text-base sm:text-base font-bold text-slate-900 mb-2.5 group-hover:text-lime-700 transition-colors line-clamp-2 leading-snug" style={{ textWrap: 'balance' }}>
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed font-normal">{article.excerpt}</p>

                  <dl className="space-y-3 mb-5 border-t border-slate-100 pt-4">
                    <div>
                      <dt className="text-[10px] font-bold text-slate-400 tracking-wider mb-0.5">TECHNOLOGY SNAPSHOT</dt>
                      <dd className="text-xs text-slate-700 leading-relaxed flex flex-wrap gap-1">
                        {article.highlights.map((hl, i) => (
                          <span key={i} className="bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{hl}</span>
                        ))}
                      </dd>
                    </div>
                    {article.accessoryOpportunity && (
                      <div>
                        <dt className="text-[10px] font-bold text-slate-400 tracking-wider mb-0.5">ACCESSORY OPPORTUNITY</dt>
                        <dd className="text-xs text-slate-700 leading-relaxed">{article.accessoryOpportunity}</dd>
                      </div>
                    )}
                    {article.fitmentGate && (
                      <div>
                        <dt className="text-[10px] font-bold text-slate-400 tracking-wider mb-0.5">FITMENT GATE</dt>
                        <dd className="text-xs text-slate-700 leading-relaxed">{article.fitmentGate}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-3.5 border-t border-slate-100">
                  <span className="font-bold text-slate-900">{article.priceRange}</span>
                  <Link href={`/articles/${article.slug}`} className="text-xs font-semibold text-lime-700 hover:text-lime-800 inline-flex items-center gap-1 group/btn">
                    <span>{article.categorySlug === 'reviews' ? 'อ่านรีวิวฉบับเต็ม' : 'อ่านบทความฉบับเต็ม'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 6. Bottom Banner: EVSELECT Fitment Storefront Integration */}
      <section className="mt-16 sm:mt-20 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-lime-800 text-xs font-bold bg-lime-100 border border-lime-200 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4 text-lime-600" />
              <span>EVSELECT Lab Fitment Guarantee</span>
            </div>
            <h3
              className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              กำลังมองหาอุปกรณ์เสริมตรงรุ่นสำหรับรถยนต์ไฟฟ้าของคุณ?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
              EVSELECT ทดสอบ Fitment อุปกรณ์แต่งรถทุกชิ้นบนรถสเปกไทยจริง (พวงมาลัยขวา) 
              ทั้ง BYD, Tesla, Zeekr, Deepal และ Geely มั่นใจใส่ได้สนิท 100% ไม่หลวม ไม่ติดขัด พร้อมจัดส่งด่วนจากกรุงเทพฯ
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-600" /> ม่านบังแดดหลังคา Nano-Silver
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-600" /> พรม TPE 3D ไร้กลิ่น
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-600" /> ฟิล์มกระจก 9H ตรงรุ่น
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href="/#vehicle-finder"
              className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold text-sm px-6 py-3 rounded-xl shadow-xs transition-all text-center w-full sm:w-auto lg:w-full"
            >
              <Car className="w-4 h-4" />
              <span>เลือกรุ่นรถเพื่อหาสินค้าตรงรุ่น</span>
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-300 transition-all text-center w-full sm:w-auto lg:w-full shadow-xs"
            >
              <span>ดูแคตตาล็อกสินค้าทั้งหมด</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
