import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governance and Management | Watney College",
  description:
    "Explore the organizational structure of Watney College. Learn about our Board of Directors, Academic Committees, and Executive Group dedicated to maintaining institutional excellence.",
  keywords: [
    "Watney College",
    "Governance",
    "Management Structure",
    "Board of Directors",
    "Academic Committee",
    "College Leadership",
    "Institutional Oversight",
    "Quality Assurance",
  ],
  openGraph: {
    title: "Governance and Management | Watney College",
    description:
      "Explore the organizational structure of Watney College. Learn about our Board of Directors, Academic Committees, and Executive Group.",
    url: "/governance-and-management",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Governance and Management",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Governance and Management | Watney College",
    description:
      "Explore the organizational structure of Watney College including our leadership boards and committees.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/governance-and-management",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}