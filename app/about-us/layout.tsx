import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Watney College, our mission, vision, and values in London.",
  keywords: [
    "Watney College",
    "London college",
    "higher education",
    "courses in London",
    "student accommodation",
    "career support",
    "alumni network",
  ],
  openGraph: {
    title: "About",
    description:
      "Learn more about Watney College, our mission, vision, and values in London.",
    url: "/about-us",
    siteName: "Watney College",
    images: [
      {
        url: "/about.jpg",
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
    title: "About Us | Watney College",
    description:
      "Learn more about Watney College, our mission, vision, and values in London.",
    images: ["/about.jpg"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
