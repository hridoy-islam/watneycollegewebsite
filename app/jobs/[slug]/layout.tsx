import type { Metadata } from "next";
import { jobs } from "@/lib/jobData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  // Find job by slug or fallback
  const job = jobs.find((j) => j.slug === slug) || {
    title: "Join Our Team",
    description:
      "Explore career opportunities at Watney College and our partner organisations. Find your next role in education, finance, healthcare, and more.",
    image: "/watney.png",
  };

  return {
    title: `${job.title} | Careers | Watney College`,
    description: job.description,
    keywords: [
      "Watney College",
      "jobs",
      "careers",
      "job vacancies",
      "London jobs",
      "education jobs",
      "finance jobs",
      "healthcare jobs",
      "part-time jobs London",
      "permanent jobs UK",
    ],
    openGraph: {
      title: `${job.title} | Careers | Watney College`,
      description: job.description,
      url: `/jobs/${slug}`,
      siteName: "Watney College",
      images: [
        {
          url: "/watney.png",
          width: 1200,
          height: 630,
          alt: job.title,
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.title} | Careers | Watney College`,
      description: job.description,
      images: "/watney.png",
    },
    alternates: {
      canonical: `/jobs/${slug}`,
    },
  };
}

export default function JobLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}