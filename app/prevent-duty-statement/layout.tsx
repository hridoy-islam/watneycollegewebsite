import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prevent Duty Statement | Watney College",
  description:
    "Read Watney College's Prevent Duty Statement, outlining our commitment to safeguarding students and staff, preventing radicalization, and promoting a safe and inclusive campus environment.",
  keywords: [
    "Watney College",
    "Prevent Duty Statement",
    "safeguarding students",
    "prevent radicalization",
    "campus safety",
    "student welfare",
    "staff safety",
  ],
  openGraph: {
    title: "Prevent Duty Statement | Watney College",
    description:
      "Read Watney College's Prevent Duty Statement, outlining our commitment to safeguarding students and staff, preventing radicalization, and promoting a safe and inclusive campus environment.",
    url: "/prevent-duty-statement",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with a relevant image
        width: 1200,
        height: 630,
        alt: "Watney College Prevent Duty Statement",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prevent Duty Statement | Watney College",
    description:
      "Read Watney College's Prevent Duty Statement, outlining our commitment to safeguarding students and staff, preventing radicalization, and promoting a safe and inclusive campus environment.",
    images: ["/logo.png"], // Replace with a relevant image
  },
  alternates: {
    canonical: "/prevent-duty-statement",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
     
      {children}
    </div>
  );
}
