import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Bribery and Anti-Corruption Policy | Watney College",
  description:
    "Review Watney College’s Anti-Bribery and Anti-Corruption Policy. We maintain strict ethical standards and a zero-tolerance approach to bribery and corruption in all institutional activities.",
  keywords: [
    "Watney College",
    "anti-bribery policy",
    "anti-corruption",
    "UK Bribery Act 2010 compliance",
    "institutional ethics",
    "corporate governance",
    "financial integrity",
    "zero tolerance bribery",
    "business conduct standards",
  ],
  openGraph: {
    title: "Anti-Bribery and Anti-Corruption Policy | Watney College",
    description:
      "Upholding the highest standards of integrity. Learn about our zero-tolerance policy towards bribery and corruption at Watney College.",
    url: "/anti-bribery-and-anti-corruption-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Anti-Bribery and Anti-Corruption Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Bribery and Anti-Corruption Policy | Watney College",
    description:
      "Our official framework for preventing bribery and ensuring ethical conduct across all Watney College operations.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/anti-bribery-and-anti-corruption-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}