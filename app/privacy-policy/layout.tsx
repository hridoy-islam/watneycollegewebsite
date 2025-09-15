import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Privacy Policy",
  description:
    "Read Watney College's Privacy Policy to understand how we collect, use, and protect your personal data on our website and services.",
  keywords: [
    "Watney College",
    "privacy policy",
    "data protection",
    "student information",
    "website privacy",
  ],
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read Watney College's Privacy Policy to understand how we collect, use, and protect your personal data on our website and services.",
    url: "/privacy-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with a relevant image if desired
        width: 1200,
        height: 630,
        alt: "Watney College Privacy Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "Read Watney College's Privacy Policy to understand how we collect, use, and protect your personal data on our website and services.",
    images: ["/logo.png"], // Replace with relevant image if desired
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
