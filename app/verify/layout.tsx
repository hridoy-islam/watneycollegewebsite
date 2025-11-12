import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify",
  description:
    "Verify the authenticity of Watney College applicants and access official college policy documents securely and transparently.",
  keywords: [
    "Watney College",
    "student verification",
    "policy documents",
    "academic verification",
    "college policies",
    "student records",
  ],
  openGraph: {
    title: "Verification | Watney College",
    description:
      "Easily verify Watney College applicants and access official academic policy documents.",
    url: "/verify",
    siteName: "Watney College",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Watney College Verification",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify | Watney College",
    description:
      "Verify Watney College applicants and download official documents securely.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/verify",
  },
};

export default function VerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      
      {/* Main Content */}
      <div >{children}</div>
    </main>
  );
}
