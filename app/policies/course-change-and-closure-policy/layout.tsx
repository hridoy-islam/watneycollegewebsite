import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Change And Closure Policy | Watney College",
  description:
    "Information on Watney College’s procedures for course modifications and closures, including student protection measures, teach-out arrangements, and academic continuity.",
  keywords: [
    "Watney College",
    "course change policy",
    "course closure",
    "student protection plan",
    "teach-out arrangements",
    "academic continuity",
    "curriculum modification",
    "higher education compliance",
  ],
  openGraph: {
    title: "Course Change And Closure Policy | Watney College",
    description:
      "Review our protocols for course modifications and closures, ensuring student interests are protected through clear teach-out and transfer arrangements.",
    url: "/course-change-and-closure-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Course Change and Closure Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Course Change Aand Closure Policy | Watney College",
    description:
      "Procedures and student protection measures regarding course modifications and closures at Watney College.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/course-change-and-closure-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}