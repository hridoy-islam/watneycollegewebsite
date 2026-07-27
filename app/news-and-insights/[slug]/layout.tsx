import type { Metadata } from "next";
import { newsArticles } from "@/app/news-and-insights/components/newsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  const article = newsArticles.find((a) => a.slug === slug);

  const fallbackTitle = "News & Insights";
  const fallbackDescription =
    "Stay informed with the latest news, insights, and success stories from Watney College.";

  const title = article?.title || fallbackTitle;
  const description = article?.excerpt || fallbackDescription;

  return {
    title: `${title} | News & Insights | Watney College`,
    description,
    keywords: [
      "Watney College",
      "news",
      "insights",
      "college news",
      "academic success",
      "student achievements",
    ],
    openGraph: {
      title: `${title} | News & Insights | Watney College`,
      description,
      url: `/news-and-insights/${slug}`,
      siteName: "Watney College",
      images: [
        {
          url: "/watney.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | News & Insights | Watney College`,
      description,
      images: "/watney.png",
    },
    alternates: {
      canonical: `/news-and-insights/${slug}`,
    },
  };
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
