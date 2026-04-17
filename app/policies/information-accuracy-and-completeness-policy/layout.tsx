import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information Accuracy and Completeness Policy | Watney College",
  description:
    "Review our policy on ensuring all published information, from course details to tuition fees, is accurate, transparent, and regularly updated for our students and stakeholders.",
  keywords: [
    "Watney College",
    "information accuracy",
    "data integrity policy",
    "consumer protection",
    "transparency in education",
    "academic documentation",
    "course information standards",
    "regulatory compliance",
  ],
  openGraph: {
    title: "Information Accuracy and Completeness Policy | Watney College",
    description:
      "At Watney College, we are committed to providing reliable and precise information. Explore our standards for data accuracy and institutional transparency.",
    url: "/information-accuracy-and-completeness-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Information Accuracy Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Information Accuracy and Completeness Policy | Watney College",
    description:
      "Our framework for ensuring all institutional data and course information remains accurate and complete.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/information-accuracy-and-completeness-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}