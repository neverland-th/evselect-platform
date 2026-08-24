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

interface ArticleItem {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  category: 'รีวิวรถ EV' | 'คู่มือและเทคนิค';
  categorySlug: 'reviews' | 'guides';
  segment: 'sedan' | 'suv' | 'hatchback' | 'city' | 'guide';
  segmentName: string;
  image: string;
  date: string;
  dateDisplay: string;
  readTime: string;
  rating: number | null;
  ratingText?: string;
  priceRange: string;
  highlights: string[];
  featured?: boolean;
}

const ALL_ARTICLES: ArticleItem[] = [
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
    priceRange: '1,149,000 – 1,879,000 บาท',
    highlights: ['627 hp (Performance)', '0-100 ใน 3.1s', '629 กม. WLTP', 'Supercharger 250kW'],
    featured: true,
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
    priceRange: '849,900 – 1,599,000 บาท',
    highlights: ['530 hp / 670 Nm', '0-100 ใน 3.8s', 'แบต Blade 82.5 kWh', 'ช่วงล่าง FSD'],
    featured: false,
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
    priceRange: '899,000 – 1,199,000 บาท',
    highlights: ['428 hp (AWD Flagship)', '0-100 ใน 3.8s', 'แพลตฟอร์ม SEA', 'Yamaha 13 ลำโพง'],
    featured: false,
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
    priceRange: '669,900 – 859,900 บาท',
    highlights: ['201 hp / 310 Nm', 'วิ่งไกล 480 กม. (NEDC)', 'Blade Battery ทนทาน', 'ม่านซันรูฟไฟฟ้า'],
    featured: false,
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
  },
  {
    slug: 'geely-ex2-review',
    title: 'รีวิว Geely EX2 สเปกไทย: รถไฟฟ้าซิตี้คาร์ขับหลัง ช่วงล่างหลังอิสระ Multi-link ที่ยกระดับมาตรฐานรถเล็กในเมือง',
    shortTitle: 'Geely EX2',
    excerpt: 'สัมผัสแรกกับซิตี้คาร์ไฟฟ้าระบบขับเคลื่อนล้อหลัง RWD ช่วงล่างหลังอิสระ Multi-link หนึ่งเดียวในงบ 5 แสน แบตเตอรี่ Aegis Short Blade ทนความร้อน และระบบ Flyme Auto',
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
    priceRange: '489,000 – 659,000 บาท',
    highlights: ['ขับเคลื่อนล้อหลัง RWD', 'ช่วงล่างหลัง Multi-link', 'ระบบ Flyme Auto', 'แบต Aegis Short Blade'],
    featured: false,
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
    image: '/images/hero-bg.jpg',
    date: '2026-08-25',
    dateDisplay: '25 ส.ค. 2569',
    readTime: '4 นาที',
    rating: null,
    ratingText: 'คู่มือแนะนำ',
    priceRange: 'อ่านฟรี',
    highlights: ['กฎการชาร์จ 20-80%', 'LFP vs NMC Chemistry', 'ตั้งเวลาชาร์จ TOU', 'ป้องกันแบตเตอรี่เสื่อม'],
    featured: false,
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
    // Filter by Category
    if (activeCategory === 'reviews' && article.categorySlug !== 'reviews') {
      return false;
    }
    if (activeCategory === 'guides' && article.categorySlug !== 'guides') {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-zinc-200">
      {/* 1. Header Section */}
      <header className="space-y-6 mb-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
          <Sparkles className="w-4 h-4 text-lime-400" />
          <span>EVSELECT Editorial Lab &amp; Real Road Test Reviews</span>
          <span className="bg-lime-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
            {totalCount} บทความ
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          บทความ คู่มือ และรีวิวเจาะลึก{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300">
            รถยนต์ไฟฟ้า (EV)
          </span>
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          รวมรีวิวรถ EV สเปกไทยฉบับเจาะลึก 12 มิติตามมาตรฐาน CarExpert ทดสอบอัตราเร่ง 0-100 กม./ชม. ระยะทางวิ่งจริง 
          การรับมือความร้อน 40°C และช่วงล่างบนถนนไทย พร้อมคำแนะนำอุปกรณ์เสริมตรงรุ่นผ่าน QC 100%
        </p>

        {/* Quick Highlights Counter Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-xl">
            <Car className="w-4 h-4 text-lime-400" />
            <span><strong>{reviewsCount} รุ่น</strong> รีวิวรถ EV ยอดนิยม</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-lime-400" />
            <span><strong>100%</strong> ทดสอบขับขี่จริงบนถนนไทย</span>
          </div>
          <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-xl">
            <Award className="w-4 h-4 text-lime-400" />
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
                ? 'bg-lime-500 text-black shadow-[0_0_20px_-3px_rgba(132,204,22,0.4)]'
                : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>ทั้งหมด</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              activeCategory === 'all' ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-400'
            }`}>
              {totalCount}
            </span>
          </Link>

          <Link
            href="/articles?category=reviews"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'reviews'
                ? 'bg-lime-500 text-black shadow-[0_0_20px_-3px_rgba(132,204,22,0.4)]'
                : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>รีวิวเจาะลึกรถ EV</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              activeCategory === 'reviews' ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-400'
            }`}>
              {reviewsCount}
            </span>
          </Link>

          <Link
            href="/articles?category=guides"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'guides'
                ? 'bg-lime-500 text-black shadow-[0_0_20px_-3px_rgba(132,204,22,0.4)]'
                : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>คู่มือ &amp; เคล็ดลับการใช้งาน</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${
              activeCategory === 'guides' ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-400'
            }`}>
              {guidesCount}
            </span>
          </Link>
        </div>

        {/* Secondary Vehicle Segment Filters (Shown when category is 'all' or 'reviews') */}
        {activeCategory !== 'guides' && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
            <span className="text-zinc-500 flex items-center gap-1 mr-1 hidden sm:inline-flex">
              <SlidersHorizontal className="w-3 h-3" /> ประเภทรถ:
            </span>
            <Link
              href={activeCategory === 'reviews' ? '/articles?category=reviews' : '/articles'}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'all'
                  ? 'bg-zinc-700 text-white font-medium border border-zinc-600'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
              }`}
            >
              ทุกประเภทตัวถัง
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=sedan`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'sedan'
                  ? 'bg-lime-500/20 text-lime-400 font-medium border border-lime-500/40'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
              }`}
            >
              ⚡ ซีดาน / สปอร์ต (2)
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=suv`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'suv'
                  ? 'bg-lime-500/20 text-lime-400 font-medium border border-lime-500/40'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
              }`}
            >
              🚙 เอสยูวี / ครอสโอเวอร์ (4)
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=hatchback`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'hatchback'
                  ? 'bg-lime-500/20 text-lime-400 font-medium border border-lime-500/40'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
              }`}
            >
              🏎️ แฮทช์แบ็กขับหลัง (1)
            </Link>
            <Link
              href={`/articles?category=${activeCategory}&segment=city`}
              className={`px-3 py-1 rounded-lg transition-all ${
                activeSegment === 'city'
                  ? 'bg-lime-500/20 text-lime-400 font-medium border border-lime-500/40'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
              }`}
            >
              🏙️ ซิตี้คาร์ในเมือง (1)
            </Link>
          </div>
        )}
      </div>

      {/* 3. Featured Spotlight Card (When viewing All or Reviews with all segments) */}
      {isShowSpotlight && (
        <section className="mb-14" aria-label="Featured Article Spotlight">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-950 border border-zinc-800 hover:border-lime-500/40 transition-all duration-300 shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Left/Top Hero Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px] overflow-hidden bg-zinc-950">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-zinc-950/40 lg:to-zinc-950"></div>
                
                {/* Spotlight Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-lime-500 text-black text-xs font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    FEATURED REVIEW
                  </span>
                  <span className="bg-black/75 backdrop-blur text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                    ทดสอบขับขี่จริง
                  </span>
                </div>

                {/* Score Pill overlay on image */}
                <div className="absolute bottom-4 left-4 lg:hidden">
                  <div className="bg-zinc-950/90 backdrop-blur border border-lime-500/40 px-3 py-1 rounded-xl flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-lime-400" />
                    <span className="text-xs text-zinc-400 font-medium">คะแนนรวม</span>
                    <span className="text-sm font-black text-lime-400">{featuredArticle.ratingText}</span>
                  </div>
                </div>
              </div>

              {/* Right/Bottom Content Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-lime-400 tracking-wider uppercase bg-lime-500/10 border border-lime-500/20 px-2.5 py-1 rounded-lg">
                      {featuredArticle.segmentName}
                    </span>
                    <div className="hidden lg:flex items-center gap-1.5 bg-lime-500/10 border border-lime-500/30 px-3 py-1 rounded-full">
                      <Award className="w-4 h-4 text-lime-400" />
                      <span className="text-xs text-zinc-400">Score</span>
                      <span className="text-sm font-black text-lime-400">{featuredArticle.ratingText}</span>
                    </div>
                  </div>

                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-lime-400 transition-colors leading-tight"
                    style={{ textWrap: 'balance' } as React.CSSProperties}
                  >
                    <Link href={`/articles/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-zinc-300 leading-relaxed font-light line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="bg-zinc-950/80 border border-zinc-800 p-2.5 rounded-xl">
                      <div className="text-[11px] text-zinc-500">ราคาจำหน่าย</div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">{featuredArticle.priceRange}</div>
                    </div>
                    <div className="bg-zinc-950/80 border border-zinc-800 p-2.5 rounded-xl">
                      <div className="text-[11px] text-zinc-500">สมรรถนะสูงสุด</div>
                      <div className="text-xs sm:text-sm font-bold text-lime-400 mt-0.5">627 hp (0-100: 3.1s)</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredArticle.highlights.map((h, i) => (
                      <span key={i} className="text-[11px] bg-zinc-800/80 text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-700/60">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta & Action Button */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-zinc-500">
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
                    className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-sm transition-all"
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
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-800/80">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Car className="w-5 h-5 text-lime-400" />
          <span>
            {activeCategory === 'reviews'
              ? 'รีวิวรถยนต์ไฟฟ้าทั้งหมด'
              : activeCategory === 'guides'
              ? 'คู่มือและเทคนิคการใช้งาน'
              : 'บทความและรีวิวทั้งหมด'}
          </span>
          <span className="text-xs text-zinc-400 font-normal">
            ({filteredArticles.length} บทความ)
          </span>
        </h2>
        
        {activeSegment !== 'all' && (
          <Link
            href={activeCategory === 'reviews' ? '/articles?category=reviews' : '/articles'}
            className="text-xs text-lime-400 hover:underline"
          >
            ล้างตัวกรอง
          </Link>
        )}
      </div>

      {/* 5. Responsive 3-Column Articles Card Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900/40 rounded-3xl border border-zinc-800">
          <p className="text-zinc-400 text-sm mb-4">ไม่พบบทความในหมวดหมู่ที่เลือก</p>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-bold text-black bg-lime-500 px-4 py-2 rounded-xl"
          >
            ดูบทความทั้งหมด
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-3xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/50"
              style={{ contentVisibility: 'auto', containIntrinsicBlockSize: '460px' } as React.CSSProperties}
            >
              {/* Card Image Container with Direct Link */}
              <Link href={`/articles/${article.slug}`} className="relative h-56 sm:h-60 w-full overflow-hidden bg-zinc-950 block">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 ${
                    article.categorySlug === 'reviews'
                      ? 'bg-lime-500 text-black'
                      : 'bg-cyan-400 text-black'
                  }`}>
                    {article.categorySlug === 'reviews' ? (
                      <>
                        <Car className="w-3 h-3" />
                        <span>รีวิวรถ EV</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3 h-3" />
                        <span>คู่มือ &amp; ทริค</span>
                      </>
                    )}
                  </span>

                  {article.rating && (
                    <span className="bg-zinc-950/85 backdrop-blur text-lime-400 border border-lime-500/40 text-xs font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-lime-400" />
                      <span>{article.rating}</span>
                    </span>
                  )}
                </div>

                {/* Bottom Model Tag inside image */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-zinc-300">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10 text-[11px] font-medium truncate">
                    {article.segmentName}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  {/* Price Tag / Highlights Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-lime-400 bg-lime-500/10 border border-lime-500/20 px-2.5 py-0.5 rounded-md">
                      {article.priceRange}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-lime-400 transition-colors line-clamp-2 leading-snug"
                    style={{ textWrap: 'balance' } as React.CSSProperties}
                  >
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-zinc-400 mb-4 line-clamp-2 leading-relaxed font-light">
                    {article.excerpt}
                  </p>

                  {/* Key Highlights Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {article.highlights.slice(0, 3).map((hl, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-zinc-950 text-zinc-400 px-2 py-0.5 rounded-md border border-zinc-800 flex items-center gap-1"
                      >
                        <Zap className="w-2.5 h-2.5 text-lime-400" />
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-3.5 border-t border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5 text-zinc-500" />
                      {article.dateDisplay}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-xs font-semibold text-lime-400 group-hover:text-lime-300 inline-flex items-center gap-1 group/btn"
                    aria-label={`อ่านบทความ ${article.title}`}
                  >
                    <span>อ่านบทความ</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* 6. Bottom Banner: EVSELECT Fitment Storefront Integration */}
      <section className="mt-16 sm:mt-20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-lime-400 text-xs font-bold bg-lime-500/10 border border-lime-500/20 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>EVSELECT Lab Fitment Guarantee</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              กำลังมองหาอุปกรณ์เสริมตรงรุ่นสำหรับรถยนต์ไฟฟ้าของคุณ?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl font-light">
              EVSELECT ทดสอบ Fitment อุปกรณ์แต่งรถทุกชิ้นบนรถสเปกไทยจริง (พวงมาลัยขวา) 
              ทั้ง BYD, Tesla, Zeekr, Deepal และ Geely มั่นใจใส่ได้สนิท 100% ไม่หลวม ไม่ติดขัด พร้อมจัดส่งด่วนจากกรุงเทพฯ
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-zinc-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400" /> ม่านบังแดดหลังคา Nano-Silver
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400" /> พรม TPE 3D ไร้กลิ่น
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-lime-400" /> ฟิล์มกระจก 9H ตรงรุ่น
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href="/#vehicle-finder"
              className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all text-center w-full sm:w-auto lg:w-full"
            >
              <Car className="w-4 h-4" />
              <span>เลือกรุ่นรถเพื่อหาสินค้าตรงรุ่น</span>
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-zinc-700 transition-all text-center w-full sm:w-auto lg:w-full"
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
