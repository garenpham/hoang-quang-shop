import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOÀNG QUANG - Thiết bị Điện Nước",
  description:
    "CỬA HÀNG THIẾT BỊ ĐIỆN - NƯỚC HOÀNG QUANG - Chuyên kinh doanh các sản phẩm về Thiết bị điện, Điện gia dụng, Điện dân dụng, Đèn chiếu sáng, Đèn trang trí, Công tắc, ổ cắm,...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
