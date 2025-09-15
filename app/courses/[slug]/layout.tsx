import type { Metadata } from "next";
import { courses } from "../data/courseData";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  // Await params before using them
  const { params } = props;
  const { slug } = params; // now safe to use

  // Find course or fallback
  const course = courses.find((c) => c.slug === slug) || {
    title: "Courses",
    description:
      "Explore Watney College courses in Business, Technology, Healthcare, and Education. Find the right program for your career and academic goals.",
    image: "/about.jpg",
  };

  return {
    title: course.title,
    description: course.description,
    keywords: [
      "Watney College",
      "courses",
      "Healthcare",
      "Healthcare courses",
      "business courses",
      "technology courses",
      "healthcare courses",
      "education courses",
      "London college",
      "higher education",
    ],
    openGraph: {
      title: course.title,
      description: course.description,
      url: `/courses/${slug}`,
      siteName: "Watney College",
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: [course.image],
    },
    alternates: {
      canonical: `/courses/${slug}`,
    },
  };
}

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
