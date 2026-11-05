import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Engagement Strategies | Watney College",
  description:
    "Discover how Watney College fosters a collaborative learning environment through student representation, feedback loops, and active participation in institutional decision-making.",
  keywords: [
    "Watney College",
    "student engagement",
    "student voice",
    "student representation",
    "academic partnership",
    "campus community",
    "student feedback loops",
    "institutional participation",
  ],
  openGraph: {
    title: "Student Engagement Strategies | Watney College",
    description:
      "At Watney College, we prioritize the student voice. Explore our strategies for building a vibrant, representative, and engaged academic community.",
    url: "/student-engagement-strategies",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Student Engagement Strategies",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Engagement Strategies | Watney College",
    description:
      "Learn how we empower students to shape their educational experience at Watney College through active engagement and representation.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/student-engagement-strategies",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}