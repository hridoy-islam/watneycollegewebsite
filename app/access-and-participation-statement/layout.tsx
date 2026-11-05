import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Access and Participation Statement | Watney College",
  description:
    "Read Watney College's Full Access and Participation Statement, detailing targets, activities, and investments to support student success and inclusion.",
  keywords: [
    "Watney College",
    "access and participation",
    "student success",
    "higher education",
    "inclusion",
  ],
  openGraph: {
    title: "Access and Participation Statement | Watney College",
    description:
      "Read Watney College's Access and Participation Statement, detailing targets, activities, and investments to support student success and inclusion.",
    url: "/access-and-participation-statement",
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
    title: "Full Access and Participation Statement | Watney College",
    description:
      "Read Watney College's Full Access and Participation Statement, detailing targets, activities, and investments to support student success and inclusion.",
    images: ["/logo.png"], // Replace with a relevant image
  },
  alternates: {
    canonical: "/access-and-participation-statement",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
    
      {children}
    </div>
  );
}
