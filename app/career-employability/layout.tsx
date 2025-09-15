import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Career & Employability",
  description:
    "Explore career support and employability programs at Watney College to enhance your skills and boost your professional prospects in London.",
  keywords: [
    "Watney College",
    "London college",
    "career support",
    "employability",
    "professional development",
    "internships",
    "job opportunities",
  ],
  openGraph: {
    title: "Career & Employability",
    description:
      "Explore career support and employability programs at Watney College to enhance your skills and boost your professional prospects in London.",
    url: "/career-employability",
    siteName: "Watney College",
    images: [
      {
        url: "/about.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Watney College Career & Employability Support",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career & Employability",
    description:
      "Explore career support and employability programs at Watney College to enhance your skills and boost your professional prospects in London.",
    images: ["/about.jpg"], // replace with actual image
  },
  alternates: {
    canonical: "/career-employability",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
