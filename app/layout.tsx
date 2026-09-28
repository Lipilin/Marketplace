import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header/header"
import Footer from "@/components/layout/footer/footer"
import "./globals.css";

const geistSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Приложение Маркетплейс",
  description: "Приложение маркетплейс пет-проект разработчика Егора Липилина",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-inter">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
