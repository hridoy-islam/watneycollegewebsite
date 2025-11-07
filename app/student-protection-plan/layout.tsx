import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Protection Plan | Watney College",
  description:
    "Learn about Watney College's Student Protection Plan, ensuring your studies are secure and supported in case of unexpected changes. Understand our commitments to student safety and education continuity.",
  keywords: [
    "Watney College",
    "student protection plan",
    "education security",
    "student support",
    "course continuity",
    "safeguarding students",
    "higher education",
  ],
  openGraph: {
    title: "Student Protection Plan | Watney College",
    description:
      "Learn about Watney College's Student Protection Plan, ensuring your studies are secure and supported in case of unexpected changes. Understand our commitments to student safety and education continuity.",
    url: "/student-protection-plan",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // replace with a relevant image
        width: 1200,
        height: 630,
        alt: "Watney College Student Protection Plan",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Protection Plan | Watney College",
    description:
      "Learn about Watney College's Student Protection Plan, ensuring your studies are secure and supported in case of unexpected changes. Understand our commitments to student safety and education continuity.",
    images: ["/logo.png"], // replace with a relevant image
  },
  alternates: {
    canonical: "/student-protection-plan",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div >
      
      {children}
    </div>
  );
}
