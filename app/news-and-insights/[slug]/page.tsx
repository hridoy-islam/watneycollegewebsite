import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getNewsArticleBySlug,
  newsArticles,
} from "@/app/news-and-insights/components/newsData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  ArrowLeft,
  Newspaper,
  Mail,
  ChevronRight,
} from "lucide-react";

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  function renderTextWithLinks(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts
      .map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return null;
        }
        const linkRegex =
          /(https?:\/\/[^\s]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
        const segments: React.ReactNode[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;
        const regex = new RegExp(linkRegex.source, "g");
        while ((match = regex.exec(part)) !== null) {
          if (match.index > lastIndex) {
            segments.push(part.slice(lastIndex, match.index));
          }
          const matched = match[0];
          if (match[1]) {
            segments.push(
              <a
                key={i + "-" + match.index}
                href={matched}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {matched}
              </a>,
            );
          } else if (match[2]) {
            segments.push(
              <a
                key={i + "-" + match.index}
                href={`mailto:${matched}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {matched}
              </a>,
            );
          }
          lastIndex = match.index + matched.length;
        }
        if (lastIndex < part.length) {
          segments.push(part.slice(lastIndex));
        }
        if (segments.length === 0) {
          segments.push(part);
        }
        return segments;
      })
      .filter(Boolean);
  }

  const contentParagraphs = article.content.split("\n\n").filter(Boolean);

  const otherArticles = newsArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="container py-8 space-y-4">
        <Link href="/news-and-insights">
          <Button className="transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News & Insights
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Card className="border-slate-200">
              <CardHeader className="space-y-4">
                <div className="flex flex-row flex-wrap gap-2 items-center">
                  <h2 className="text-2xl font-semibold text-slate-800">
                    {article.title}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.publishedDate).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {article.author}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {contentParagraphs.map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-semibold text-slate-900"
                      >
                        {paragraph.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="text-slate-700 leading-relaxed">
                      {renderTextWithLinks(paragraph)}
                    </p>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6 sticky top-28">
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-watney-blue-primary" />
                  <h3 className="text-xl font-semibold">
                    About Watney College
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Watney College is a dynamic higher education provider offering
                  flexible, student-focused learning. We foster diversity,
                  personal development, and academic achievement.
                </p>
                <div className="space-y-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-watney hover:text-white"
                  >
                    <Link href="/about-us">Learn More About Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-watney hover:text-white"
                  >
                    <Link href="/courses">View Our Courses</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {otherArticles.length > 0 ? (
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-watney-blue-primary" />
                    <h3 className="text-xl font-semibold">More News</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 p-4">
                  {otherArticles.map((other) => (
                    <Link
                      key={other.id}
                      href={`/news-and-insights/${other.slug}`}
                    >
                      <div className="bg-white border border-gray-300 rounded-md p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                              {other.title}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-2 mb-2">
                              {other.excerpt}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-slate-400">
                              <Calendar className="w-3 h-3" />
                              {new Date(other.publishedDate).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                },
                              )}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-watney-blue-primary" />
                    <h3 className="text-xl font-semibold">More News</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="bg-white border border-gray-300 rounded-md p-6 text-center">
                    <Newspaper className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="text-sm text-slate-500">
                      No more news articles available at the moment.
                    </p>
                    {/* <p className="text-xs text-slate-400 mt-1">Check back soon for updates.</p> */}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
