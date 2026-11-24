import type { Metadata } from "next";

const title = "About Us";
const description =
  "Watney College Dubai is the UAE branch of Watney College Limited, UK, in Dubai Knowledge Park, offering vocational education, professional training and career-focused learning.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Watney College Dubai",
    "Watney College",
    "Dubai Knowledge Park",
    "vocational education Dubai",
    "professional training Dubai",
    "career-focused learning UAE",
    "English language courses Dubai",
    "short courses Dubai",
  ],
  openGraph: {
    title: "About Watney College Dubai",
    description,
    url: "/about-us",
    siteName: "Watney College Dubai",
    images: [
      {
        url: "/about.jpg",
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
    title: "About Us | Watney College Dubai",
    description,
    images: ["/about.jpg"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
