import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Learn about Watney College's use of cookies on the website, including types of cookies, purposes, and how we protect your privacy.",
  keywords: [
    "Watney College",
    "cookies policy",
    "website cookies",
    "privacy",
    "data protection",
    "user consent",
  ],
  openGraph: {
    title: "Cookies",
    description:
      "Learn about Watney College's use of cookies on the website, including types of cookies, purposes, and how we protect your privacy.",
    url: "/cookies",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with a relevant image
        width: 1200,
        height: 630,
        alt: "Watney College Cookies Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies",
    description:
      "Learn about Watney College's use of cookies on the website, including types of cookies, purposes, and how we protect your privacy.",
    images: ["/logo.png"], // Replace with a relevant image
  },
  alternates: {
    canonical: "/cookies",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
