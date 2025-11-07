import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Access and Participation Plan | Watney College",
  description:
    "Read Watney College's OfS-approved Full Access and Participation Plan, detailing targets, activities, and investments to support student success and inclusion.",
  keywords: [
    "Watney College",
    "access and participation",
    "student success",
    "OfS plan",
    "higher education",
    "inclusion",
  ],
  openGraph: {
    title: "Access and Participation Statement | Watney College",
    description:
      "Read Watney College's OfS-approved  Access and Participation Statement, detailing targets, activities, and investments to support student success and inclusion.",
    url: "/access-participation-plan",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with a relevant image for this page
        width: 1200,
        height: 630,
        alt: "Watney College Full Access and Participation Plan",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Access and Participation Plan | Watney College",
    description:
      "Read Watney College's OfS-approved Full Access and Participation Plan, detailing targets, activities, and investments to support student success and inclusion.",
    images: ["/logo.png"], // Replace with a relevant image
  },
  alternates: {
    canonical: "/access-participation-plan",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
    
      {children}
    </div>
  );
}
