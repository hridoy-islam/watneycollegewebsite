import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Watney College",
  description:
    "Join our network of trusted partners and help us empower students across London and beyond.",
  keywords: [
    "Watney College",
    "partners",
    "affiliates",
    "education partners",
    "healthcare partners",
    "student support",
    "collaboration",
  ],
  openGraph: {
    title: "Partner with Watney College",
    description:
      "Join our network of trusted partners and help us empower students across London and beyond.",
    url: "/partners/affiliate",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Watney College Partners",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner with Watney College",
    description:
      "Join our network of trusted partners and help us empower students across London and beyond.",
    images: ["/logo.png"], // Replace with actual image
  },
  alternates: {
    canonical: "/partners/affiliate",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
