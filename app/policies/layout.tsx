import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies | Watney College",
  description:
    "Explore Watney College's policies, including academic, administrative, and student conduct guidelines, ensuring transparency and quality education.",
  keywords: [
    "Watney College",
    "policies",
    "academic policies",
    "student guidelines",
    "administrative rules",
    "education standards",
  ],
  openGraph: {
    title: "Policies | Watney College",
    description:
      "Explore Watney College's policies, including academic, administrative, and student conduct guidelines, ensuring transparency and quality education.",
    url: "/policies",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with a suitable image for the Policies page
        width: 1200,
        height: 630,
        alt: "Watney College Policies",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Policies | Watney College",
    description:
      "Explore Watney College's policies, including academic, administrative, and student conduct guidelines, ensuring transparency and quality education.",
    images: ["/logo.png"], // Replace with a suitable image
  },
  alternates: {
    canonical: "/policies",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
