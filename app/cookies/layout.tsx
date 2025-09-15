import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore the wide range of courses offered by Watney College. Learn programming, data science, web development, mobile app development, and more with expert instructors.",
  keywords: [
    "Watney College",
    "courses",
    "online courses",
    "programming",
    "web development",
    "mobile app development",
    "data science",
    "machine learning",
    "education",
    "learning",
  ],
  openGraph: {
    title: "Courses",
    description:
      "Explore the wide range of courses offered by Watney College. Learn programming, data science, web development, mobile app development, and more with expert instructors.",
    url: "/courses",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
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
      "Explore the wide range of courses offered by Watney College. Learn programming, data science, web development, mobile app development, and more with expert instructors.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/courses",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
