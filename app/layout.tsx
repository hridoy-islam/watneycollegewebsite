import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

// const nunito = Nunito({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-nunito",
// });

const inter = Inter({
  weight: ["400", "200", "300", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Watney College",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} light`}>
      <head>
        <title>Watney College</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative">
        <Header />
        <div>
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
