import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whistleblowing Policy | Watney College",
  description:
    "Review Watney College’s whistleblowing policy and procedures. We provide a secure and confidential framework for reporting concerns regarding malpractice or ethical misconduct.",
  keywords: [
    "Watney College",
    "whistleblowing policy",
    "reporting malpractice",
    "institutional integrity",
    "ethical standards",
    "confidential reporting",
    "public interest disclosure",
    "academic ethics",
  ],
  openGraph: {
    title: "Whistleblowing Policy | Watney College",
    description:
      "A safe and confidential framework for reporting concerns. Learn how Watney College protects institutional integrity and supports ethical conduct.",
    url: "/whistleblowing-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Whistleblowing Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whistleblowing Policy | Watney College",
    description:
      "Our commitment to transparency and ethical standards through secure and confidential reporting procedures.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/whistleblowing-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}