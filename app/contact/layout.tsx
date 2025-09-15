import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact Watney College",
  description: "Contact us for admissions, programs, or general inquiries.",
  openGraph: {
    title: "Contact Watney College",
    description: "Contact us for admissions, programs, or general inquiries.",
    url: "/contact",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Contact Watney College",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Watney College",
    description: "Contact us for admissions, programs, or general inquiries.",
    images: ["/logo.png"], // Replace with actual image
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
