import type { Metadata } from "next";
import axiosInstance from "@/utils/axios";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  let jobTitle = "Join Our Team";
  let jobDescription =
    "Explore career opportunities at Watney College and our partner organisations. Find your next role in education, finance, healthcare, and more.";

  try {
    const res = await axiosInstance.get("/jobs");
    const data = res.data?.data;
    let result: any[] = [];
    if (data && Array.isArray(data.result)) {
      result = data.result;
    } else if (Array.isArray(data)) {
      result = data;
    }
    const job = result.find((j: any) => j.slug === slug);
    if (job) {
      jobTitle = job.jobTitle || job.title || jobTitle;
      jobDescription = job.jobDetail || job.description || jobDescription;
    }
  } catch (e) {
    console.error("Failed to fetch job metadata", e);
  }

  return {
    title: `${jobTitle} | Careers | Watney College`,
    description: jobDescription,
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
      title: `${jobTitle} | Careers | Watney College`,
      description: jobDescription,
      url: `/jobs/${slug}`,
      siteName: "Watney College",
      images: [
        {
          url: "/watney.png",
          width: 1200,
          height: 630,
          alt: jobTitle,
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${jobTitle} | Careers | Watney College`,
      description: jobDescription,
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
