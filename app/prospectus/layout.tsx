import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prospectus",
  description:
    "Request your Watney College prospectus and discover our courses, campus life, student support, and career opportunities. Download or request a physical copy today.",
  keywords: [
    "Watney College",
    "prospectus",
    "courses in London",
    "undergraduate prospectus",
    "postgraduate prospectus",
    "international student guide",
    "campus tour",
    "student support",
    "career opportunities",
  ],
  openGraph: {
    title: "Prospectus",
    description:
      "Request your Watney College prospectus and discover our courses, campus life, student support, and career opportunities. Download or request a physical copy today.",
    url: "/prospectus",
    siteName: "Watney College",
    images: [
      {
        url: "/about.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Watney College Prospectus",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prospectus",
    description:
      "Request your Watney College prospectus and discover our courses, campus life, student support, and career opportunities. Download or request a physical copy today.",
    images: ["/about.jpg"], // replace with actual image
  },
  alternates: {
    canonical: "/prospectus",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
