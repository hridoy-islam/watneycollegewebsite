import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Regulations | Watney College",
  description:
    "Review the formal academic regulations of Watney College, covering assessment standards, progression requirements, and institutional governance to ensure academic excellence.",
  keywords: [
    "Watney College",
    "academic regulations",
    "assessment framework",
    "academic governance",
    "student progression",
    "higher education standards",
    "academic quality assurance",
  ],
  openGraph: {
    title: "Academic Regulations | Watney College",
    description:
      "Review the formal academic regulations of Watney College, covering assessment standards, progression requirements, and institutional governance.",
    url: "/academic-regulations",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Watney College Academic Regulations",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Regulations | Watney College",
    description:
      "The official framework for academic standards, quality assurance, and student progression at Watney College.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/academic-regulations",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}