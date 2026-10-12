import { siteIdentitySchema } from '@/lib/site-identity';
import { serializeImageMetadata as serializeJsonLd } from '@/lib/image-credits';
import type { Metadata, Viewport } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const promptFont = Prompt({
  weight: ["300", "400", "500", "600", "700", "800"],
  // Thai copy mixes EV/Tesla/model names with Thai glyphs. Preload both to avoid
  // a late Latin-font request/repaint after the hero has already downloaded.
  subsets: ["thai", "latin"],
  variable: "--font-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://evselects.com'),
  title: 'EVSELECTS | รีวิวรถ EV และอุปกรณ์เสริมสำหรับคนรักรถ',
  description: 'บทความรถยนต์ไฟฟ้า ความรู้เรื่องช่วงล่าง และแนวคิดเลือกอุปกรณ์เสริมสำหรับคนรักรถ EV ในไทย ติดตามข่าวการเปิดตัวสินค้าจาก EVSELECTS',
  icons: {
    icon: '/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EVSELECTS | เข้าใจรถให้ลึก เลือกให้ตรงใจ',
    description: 'อ่านรีวิวรถ EV ความรู้เรื่องช่วงล่าง และติดตามอุปกรณ์เสริมที่กำลังเตรียมเปิดตัว',
    url: 'https://evselects.com',
    siteName: 'EVSELECTS Thailand',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${promptFont.variable} antialiased`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteIdentitySchema) }} />
        {children}
      </body>
    </html>
  );
}
