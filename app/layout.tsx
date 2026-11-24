import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SiteChrome from "@/components/site-chrome";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

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
//   description: "Higher Education in the UK",
// };

export const metadata: Metadata = {
  title: {
    default:
      "Watney College Dubai | Dubai Knowledge Park, UAE",
    template: "%s | Watney College Dubai",
  },
  description:
    "Watney College Dubai, the UAE branch of Watney College Limited, UK, offers vocational education, professional training, English language learning and career-focused short courses in Dubai Knowledge Park.",
  keywords: [
    "Watney College Dubai",
    "Dubai Knowledge Park",
    "vocational education Dubai",
    "professional training Dubai",
    "English language courses Dubai",
    "short courses Dubai",
    "career-focused learning UAE",
    "professional development UAE",
  ],
  openGraph: {
    title:
      "Watney College Dubai | Dubai Knowledge Park, UAE",
    description:
      "Practical, career-focused vocational education and professional training at Watney College Dubai, Dubai Knowledge Park.",
    url: "/",
    siteName: "Watney College Dubai",
    images: [
      {
        url: "/watney.png",
        width: 1200,
        height: 630,
        alt: "Watney College Dubai, Dubai Knowledge Park, UAE",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Watney College Dubai | Dubai Knowledge Park, UAE",
    description:
      "Practical, career-focused vocational education and professional training at Watney College Dubai, Dubai Knowledge Park.",
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
  // return (
  //   <html lang="en" className={`${inter.variable} light`}>
  //     <head>
       
  //       <link rel="icon" href="/favicon.ico" />
  //     </head>
  //     <body className="relative">
  //       <Header />
  //       <div className="pt-24 min-h-screen">
  //         <Providers>{children}</Providers>
  //       </div>
  //       <Footer />
  //     </body>
  //   </html>
  // );

   return (
    <html lang="en" className={`${inter.variable} light`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative" suppressHydrationWarning>
        <SiteChrome>
          <Providers>{children}</Providers>
          <Toaster />
        </SiteChrome>
      </body>
    </html>
  );
}
