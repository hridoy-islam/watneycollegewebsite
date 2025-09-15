import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore Watney College courses in Business, Technology, Healthcare, and Education. Find the right program for your career and academic goals.",
  keywords: [
    "Watney College",
    "courses",
    "business courses",
    "technology courses",
    "healthcare courses",
    "education courses",
    "London college",
    "higher education",
  ],
  openGraph: {
    title: "Courses",
    description:
      "Explore Watney College courses in Business, Technology, Healthcare, and Education. Find the right program for your career and academic goals.",
    url: "/courses",
    siteName: "Watney College",
    images: [
      {
        url: "/about.jpg", // Replace with actual course image
        width: 1200,
        height: 630,
        alt: "Watney College Courses",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses",
    description:
      "Explore Watney College courses in Business, Technology, Healthcare, and Education. Find the right program for your career and academic goals.",
    images: ["/about.jpg"], // Replace with actual course image
  },
  alternates: {
    canonical: "/courses",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
