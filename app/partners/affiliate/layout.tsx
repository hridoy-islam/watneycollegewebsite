import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accreditations & Partnerships",
  description:
    "Watney College is proud to be accredited by leading organizations, ensuring the quality and recognition of our programs.",
  keywords: [
    "Watney College",
    "accreditations",
    "partnerships",
    "education quality",
    "student support",
    "career readiness",
  ],
  openGraph: {
    title: "Accreditations & Partnerships | Watney College",
    description:
      "Watney College is proud to be accredited by leading organizations, ensuring the quality and recognition of our programs.",
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
    title: "Accreditations & Partnerships | Watney College",
    description:
      "Watney College is proud to be accredited by leading organizations, ensuring the quality and recognition of our programs.",
    images: ["/logo.png"], // Replace with an actual image
  },
  alternates: {
    canonical: "/partners/accreditations",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
