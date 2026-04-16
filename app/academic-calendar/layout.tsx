import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Discover student accommodation options at Watney College in London, including affordable housing and safe living spaces.",
  keywords: [
    "Watney College",
    "London college",
    "student accommodation",
    "London housing",
    "student housing",
    "safe accommodation",
    "college dorms",
  ],
  openGraph: {
    title: "Accommodation",
    description:
      "Discover student accommodation options at Watney College in London, including affordable housing and safe living spaces.",
    url: "/accommodation",
    siteName: "Watney College",
    images: [
      {
        url: "/about.jpg", // update with actual accommodation image
        width: 1200,
        height: 630,
        alt: "Watney College Student Accommodation in London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accommodation",
    description:
      "Discover student accommodation options at Watney College in London, including affordable housing and safe living spaces.",
    images: ["/about.jpg"], // update with actual image
  },
  alternates: {
    canonical: "/accommodation",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
