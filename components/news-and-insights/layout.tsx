import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights | Watney College",
  description:
    "Stay informed with the latest news, insights, and success stories from Watney College. Discover student achievements, academic updates, and college announcements.",
  keywords: [
    "Watney College",
    "news",
    "insights",
    "college news",
    "academic success",
    "student achievements",
    "adult social care",
    "UK higher education news",
    "London college updates",
  ],
  openGraph: {
    title: "News & Insights | Watney College",
    description:
      "Stay informed with the latest news, insights, and success stories from Watney College. Discover student achievements, academic updates, and college announcements.",
    url: "/news-and-insights",
    siteName: "Watney College",
    images: [
      {
        url: "/watney.png",
        width: 1200,
        height: 630,
        alt: "Watney College News & Insights",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Insights | Watney College",
    description:
      "Stay informed with the latest news, insights, and success stories from Watney College. Discover student achievements, academic updates, and college announcements.",
    images: ["/watney.png"],
  },
  alternates: {
    canonical: "/news-and-insights",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
