import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Finance",
  description:
    "Learn about student finance options at Watney College, including tuition fees, scholarships, and financial aid for students in London.",
  keywords: [
    "Watney College",
    "London college",
    "student finance",
    "tuition fees",
    "scholarships",
    "financial aid",
    "student funding",
  ],
  openGraph: {
    title: "Student Finance",
    description:
      "Learn about student finance options at Watney College, including tuition fees, scholarships, and financial aid for students in London.",
    url: "/student-finance",
    siteName: "Watney College",
    images: [
      {
        url: "/about.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Watney College Student Finance Information",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Finance",
    description:
      "Learn about student finance options at Watney College, including tuition fees, scholarships, and financial aid for students in London.",
    images: ["/about.jpg"], // replace with actual image
  },
  alternates: {
    canonical: "/student-finance",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
