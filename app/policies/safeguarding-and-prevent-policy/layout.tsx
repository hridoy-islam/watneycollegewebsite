import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safeguarding and Prevent Policy | Watney College",
  description:
    "Review Watney College’s commitment to safety through our Safeguarding and Prevent policies. We ensure a secure environment by protecting students from harm, abuse, and radicalisation.",
  keywords: [
    "Watney College",
    "safeguarding policy",
    "Prevent duty",
    "student welfare",
    "child protection",
    "vulnerable adults",
    "preventing radicalisation",
    "duty of care",
    "campus safety",
  ],
  openGraph: {
    title: "Safeguarding and Prevent Policy | Watney College",
    description:
      "Protecting our community is our highest priority. Learn about our safeguarding procedures and our commitment to the Prevent duty.",
    url: "/safeguarding-and-prevent-policy",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Safeguarding and Prevent Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safeguarding and Prevent Policy | Watney College",
    description:
      "The official framework for safeguarding students and fulfilling our Prevent duty at Watney College.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/safeguarding-and-prevent-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}