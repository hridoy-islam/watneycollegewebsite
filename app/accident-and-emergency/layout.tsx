import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accident & Emergency | Watney College",
  description:
    "Learn about Watney College's Accident and Emergency procedures, ensuring student safety, immediate support, and effective response in case of emergencies on campus.",
  keywords: [
    "Watney College",
    "accident and emergency",
    "student safety",
    "emergency procedures",
    "campus safety",
    "health and safety",
    "incident response",
  ],
  openGraph: {
    title: "Accident & Emergency | Watney College",
    description:
      "Learn about Watney College's Accident and Emergency procedures, ensuring student safety, immediate support, and effective response in case of emergencies on campus.",
    url: "/accident-and-emergency",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png", // Replace with a relevant image
        width: 1200,
        height: 630,
        alt: "Watney College Accident and Emergency",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accident & Emergency | Watney College",
    description:
      "Learn about Watney College's Accident and Emergency procedures, ensuring student safety, immediate support, and effective response in case of emergencies on campus.",
    images: ["/logo.png"], // Replace with a relevant image
  },
  alternates: {
    canonical: "/accident-and-emergency",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div >
      
      {children}
    </div>
  );
}
