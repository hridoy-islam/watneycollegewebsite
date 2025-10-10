import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Watney College",
  description:
    "Explore current job vacancies at Watney College and our partner organisations. Join our team in education, finance, administration, and more across London and the UK.",
  keywords: [
    "Watney College",
    "jobs",
    "careers",
    "job vacancies",
    "education jobs",
    "London jobs",
    "part-time jobs",
    "permanent jobs",
    "college careers",
    "work in education UK",
  ],
  openGraph: {
    title: "Careers | Watney College",
    description:
      "Explore current job vacancies at Watney College and our partner organisations. Join our team in education, finance, administration, and more across London and the UK.",
    url: "/jobs",
    siteName: "Watney College",
    images: [
      {
        url: "/watney.png", // Replace with an actual careers/team image if available
        width: 1200,
        height: 630,
        alt: "Watney College Careers",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Watney College",
    description:
      "Explore current job vacancies at Watney College and our partner organisations. Join our team in education, finance, administration, and more.",
    images: ["/watney.png"],
  },
  alternates: {
    canonical: "/jobs",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}