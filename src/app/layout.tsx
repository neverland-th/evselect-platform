import { siteName } from '@/lib/site-identity';
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
  subsets: ["thai", "latin"],
  variable: "--font-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://evselects.com'),
  title: `${siteName} | รีวิวรถ EV และอุปกรณ์เสริมสำหรับคนรักรถ`,
  description: `บทความรถยนต์ไฟฟ้า ความรู้เรื่องช่วงล่าง และแนวคิดเลือกอุปกรณ์เสริมสำหรับคนรักรถ EV ในไทย ติดตามข่าวการเปิดตัวสินค้าจาก ${siteName}`,
  icons: {
    icon: '/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} | เข้าใจรถให้ลึก เลือกให้ตรงใจ`,
    description: 'อ่านรีวิวรถ EV ความรู้เรื่องช่วงล่าง และติดตามอุปกรณ์เสริมที่กำลังเตรียมเปิดตัว',
    url: 'https://evselects.com',
    siteName: siteName,
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
        {children}
      </body>
    </html>
  );
}


