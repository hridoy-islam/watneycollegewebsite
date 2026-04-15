import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employers & Partners",
  description:
    "Watney College is proud to be accredited by leading organizations, ensuring the quality and recognition of our programmes.",
  keywords: [
    "Watney College",
    "accreditations",
    "partnerships",
    "education quality",
    "student support",
    "career readiness",
  ],
  openGraph: {
    title: "Employers and Partners | Watney College",
    description:
      "Watney College is proud to be accredited by leading organizations, ensuring the quality and recognition of our programmes.",
    url: "/partners/accreditations",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with an actual image
        width: 1200,
        height: 630,
        alt: "Watney College Accreditations",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employers and Partners | Watney College",
    description:
      "Watney College is proud to be accredited by leading organizations, ensuring the quality and recognition of our programmes.",
    images: ["/logo.png"], // Replace with an actual image
  },
  alternates: {
    canonical: "/partners/accreditations",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
