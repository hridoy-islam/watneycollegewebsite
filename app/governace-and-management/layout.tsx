import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Statement | Watney College",
  description:
    "Read Watney College's Fire Safety Statement outlining our fire prevention measures, emergency procedures, and commitment to ensuring the safety of all students and staff on campus.",
  keywords: [
    "Watney College",
    "fire safety statement",
    "campus safety",
    "emergency procedures",
    "fire prevention",
    "student safety",
    "staff safety",
    "health and safety",
  ],
  openGraph: {
    title: "Fire Safety Statement | Watney College",
    description:
      "Read Watney College's Fire Safety Statement outlining our fire prevention measures, emergency procedures, and commitment to ensuring the safety of all students and staff on campus.",
    url: "/fire-safety-statement",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with a relevant image
        width: 1200,
        height: 630,
        alt: "Watney College Fire Safety Statement",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Safety Statement | Watney College",
    description:
      "Read Watney College's Fire Safety Statement outlining our fire prevention measures, emergency procedures, and commitment to ensuring the safety of all students and staff on campus.",
    images: ["/logo.png"], // Replace with a relevant image
  },
  alternates: {
    canonical: "/fire-safety-statement",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div >
      
      {children}
    </div>
  );
}
