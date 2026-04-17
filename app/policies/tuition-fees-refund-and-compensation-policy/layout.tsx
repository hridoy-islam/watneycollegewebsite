import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuition Fees, Refund, and Compensation Policy | Watney College",
  description:
    "Review Watney College’s official policy on tuition fees, refund eligibility, and student compensation. We ensure clear financial guidelines and protect student interests in the event of course changes.",
  keywords: [
    "Watney College",
    "tuition fee policy",
    "refund policy",
    "student compensation",
    "fee repayment",
    "financial transparency",
    "CMA compliance",
    "student protection plan",
    "tuition fee refunds",
  ],
  openGraph: {
    title: "Tuition Fees, Refund, and Compensation Policy | Watney College",
    description:
      "A transparent guide to tuition fees, refund procedures, and compensation eligibility at Watney College, designed to ensure financial fairness for all students.",
    url: "/tuition-fees-refund-and-compensation-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Tuition Fees and Refund Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuition Fees, Refund, and Compensation Policy | Watney College",
    description:
      "Detailed information on fee structures, refund eligibility, and compensation at Watney College.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/tuition-fees-refund-and-compensation-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}