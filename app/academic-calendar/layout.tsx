import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar | Watney College",
  description:
    "View the official academic calendar for Watney College, including term dates, holidays, assessment periods, and key academic deadlines.",
  keywords: [
    "Watney College academic calendar",
    "term dates London college",
    "college timetable UK",
    "academic schedule Watney College",
    "exam dates Watney College",
    "semester dates London",
  ],
  openGraph: {
    title: "Academic Calendar | Watney College",
    description:
      "Stay updated with Watney College’s academic calendar, including term dates, holidays, and important academic deadlines.",
    url: "/academic-calendar",
    siteName: "Watney College",
    images: [
      {
        url: "/watney.png", // replace with actual image if available
        width: 1200,
        height: 630,
        alt: "Watney College Academic Calendar",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Calendar | Watney College",
    description:
      "Explore key dates, term schedules, and academic deadlines at Watney College.",
    images: ["/watney.png"], // replace if needed
  },
  alternates: {
    canonical: "/academic-calendar",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
