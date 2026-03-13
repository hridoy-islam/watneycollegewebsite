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

// export const metadata: Metadata = {
//   title: "Watney College",
//   description: "English Learning Centre In London",
// };

export const metadata: Metadata = {
  title: {
    default:
      "Study in the UK | Watney College – Higher Education & Professional Diplomas",
    template: "%s | Watney College – Higher Education & Professional Diplomas",
  },
  description: "English Learning Centre In London",
  keywords: [
    "Higher Education in the UK",
    "UK Professional Qualifications",
    "International Students UK",
    "English Language Courses UK",
    "Healthcare Management Courses UK",
    "ATHE Diplomas",
    "UK Career-Focused Education",
  ],
  openGraph: {
    title:
      "Study in the UK | Watney College – Higher Education & Professional Diplomas",
    description: "English Learning Centre In London",
    url: "/",
    siteName: "Watney College",
    images: [
      {
        url: "/watney.png",
        width: 1200,
        height: 630,
        alt: "Watney College | English Learning Centre In London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Study in the UK | Watney College – Higher Education & Professional Diplomas",
    description: "English Learning Centre In London.",
    images: ["/watney.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} light`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative">
        <Header />
        <div className="pt-24 min-h-screen">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
