import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Assessment and Feedback Process | Watney College",
  description:
    "Explore Watney College’s assessment and feedback framework. Learn about our marking criteria, feedback timelines, and how we support student achievement through constructive evaluation.",
  keywords: [
    "Watney College",
    "student assessment",
    "feedback process",
    "marking criteria",
    "academic evaluation",
    "assessment feedback timeline",
    "grading standards",
    "student achievement",
  ],
  openGraph: {
    title: "Student Assessment and Feedback Process | Watney College",
    description:
      "A transparent guide to how assessments are marked and feedback is provided at Watney College, designed to support your academic growth.",
    url: "/student-assessment-feedback-process",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Assessment and Feedback Process",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Assessment and Feedback Process | Watney College",
    description:
      "Understand the grading, marking, and feedback standards that ensure academic quality at Watney College.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/student-assessment-feedback-process",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}