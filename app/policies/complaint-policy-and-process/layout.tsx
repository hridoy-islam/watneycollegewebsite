import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaint Policy and Process | Watney College",
  description:
    "Review Watney College’s student complaint procedures. Our transparent process ensures all grievances are handled fairly, promptly, and with a commitment to effective resolution.",
  keywords: [
    "Watney College",
    "complaint policy",
    "student grievance process",
    "appeals procedure",
    "formal complaint handling",
    "academic complaints",
    "resolution process",
    "student rights",
    "OIA compliance",
  ],
  openGraph: {
    title: "Complaint Policy and Process | Watney College",
    description:
      "A clear guide to submitting and resolving complaints at Watney College. We are committed to fairness and continuous improvement through student feedback.",
    url: "/complaint-policy-and-process",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Complaint Policy and Process",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complaint Policy and Process | Watney College",
    description:
      "Understand the formal steps for raising a concern or complaint at Watney College.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/complaint-policy-and-process",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}