import type { Metadata } from "next";
import { Prompt, Geist_Mono } from "next/font/google";
import "./globals.css";

const promptFont = Prompt({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-thai",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://evselect.com'),
  title: 'EVSELECT | อุปกรณ์เสริมรถยนต์ไฟฟ้า คัดเกรดพรีเมียม ผ่านการทดสอบตรงรุ่น 100%',
  description: 'EVSELECT แพลตฟอร์มรวมอุปกรณ์เสริมและของแต่ง EV คัดเกรดตรงจากโรงงานชั้นนำ ผ่านการทดสอบ Fitment บนรถสเปกไทย 100% สำหรับ BYD, Tesla, Zeekr, Deepal, Geely',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'EVSELECT - DRIVE BETTER. SELECT SMARTER.',
    description: 'ศูนย์รวมอุปกรณ์เสริมและของแต่ง EV ตรงรุ่นสเปกไทย พร้อมบทความรีวิวเจาะลึก 12 มิติ',
    url: 'https://evselect.com',
    siteName: 'EVSELECT Thailand',
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
    <html lang="th" className={`${promptFont.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}


