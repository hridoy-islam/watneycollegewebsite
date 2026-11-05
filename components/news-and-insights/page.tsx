import Link from "next/link";
import { newsArticles } from "@/app/news-and-insights/components/newsData";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, ChevronRight, User } from "lucide-react";

export default function NewsInsightsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <section className="relative py-20 bg-ocean-breeze z-10">
        <div className="container mx-auto relative z-20 text-center">
          <Newspaper className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />

          <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            News &{" "}
            <span className="text-watney-blue-primary">Insights</span>
          </h1>

          <p className="mb-12 text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl">
            Stay informed with the latest updates, success stories, and
            announcements from Watney College. Discover how we are shaping the
            future of education.
          </p>
        </div>
      </section>

      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute left-[248px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center rotate-0"></div>
        <div className="absolute right-[248px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center rotate-180"></div>
      </div>

      <div className="relative z-30 rounded-lg overflow-hidden space-y-4 container py-8">
        {[...newsArticles]
          .sort(
            (a, b) =>
              new Date(b.publishedDate).getTime() -
              new Date(a.publishedDate).getTime()
          )
          .map((article, index) => (
            <div
              key={article.id}
              className="bg-white shadow-md rounded-md border border-gray-300"
            >
              <Link href={`/news-and-insights/${article.slug}`}>
                <div className="p-6  transition-colors cursor-pointer group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h2>

                       
                      </div>

                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.publishedDate).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
