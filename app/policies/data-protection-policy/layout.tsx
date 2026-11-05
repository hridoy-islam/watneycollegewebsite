import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Protection Policy | Watney College",
  description:
    "Data Protection Policy. Learn how we collect, process, and protect personal data in compliance with UK GDPR and the Data Protection Act 2018.",
  keywords: [
    "Watney College",
    "data protection policy",
    "UK GDPR compliance",
    "privacy policy",
    "personal data processing",
    "Data Protection Act 2018",
    "information security",
    "student data privacy",
    "data controller",
  ],
  openGraph: {
    title: "Data Protection Policy | Watney College",
    description:
      "Our commitment to your privacy. Explore how Watney College ensures the security and lawful processing of personal data.",
    url: "/data-protection-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Data Protection Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Protection Policy | Watney College",
    description:
      "Understand how we protect your personal information and maintain UK GDPR standards at Watney College.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/data-protection-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}