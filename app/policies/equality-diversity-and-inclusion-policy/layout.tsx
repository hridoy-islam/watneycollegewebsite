import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equality, Diversity, and Inclusion Policy | Watney College",
  description:
    "Explore Watney College’s EDI policy. We are dedicated to fostering an inclusive environment that celebrates diversity, promotes equality of opportunity, and eliminates discrimination.",
  keywords: [
    "Watney College",
    "EDI policy",
    "equality and diversity",
    "inclusive education",
    "accessibility standards",
    "social inclusion",
    "equality act compliance",
    "diversity in higher education",
    "anti-discrimination policy",
  ],
  openGraph: {
    title: "Equality, Diversity, and Inclusion Policy | Watney College",
    description:
      "Building a community where everyone belongs. Read our commitment to equality, diversity, and inclusion at Watney College.",
    url: "/equality-diversity-and-inclusion-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Equality, Diversity, and Inclusion Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equality, Diversity, and Inclusion Policy | Watney College",
    description:
      "Our framework for promoting equality and celebrating diversity within the Watney College community.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/equality-diversity-and-inclusion-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}