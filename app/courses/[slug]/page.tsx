"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  Star,
  Tag,
  ExternalLink,
  Book,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import { BlinkingDots } from "@/components/blinking-dots";


export default function CourseDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedCourses, setRelatedCourses] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/courses", {
          params: { status: "active", slug },
        });
        const payload = res.data?.data || {};
        const resultData = payload.result || payload || [];
        const arr = Array.isArray(resultData) ? resultData : resultData.result || [];
        setCourse(arr[0] || null);
      } catch (err) {
        console.error("Failed to fetch course", err);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchCourse();
  }, [slug]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await axiosInstance.get("/courses", {
          params: { status: "active", limit: 3 },
        });
        const payload = res.data?.data || {};
        const resultData = payload.result || payload || [];
        const arr = Array.isArray(resultData) ? resultData : resultData.result || [];
        setRelatedCourses(arr.filter((c: any) => c.slug !== slug).slice(0, 2));
      } catch (err) {
        console.error("Failed to fetch related", err);
        setRelatedCourses([]);
      }
    };
    if (course) fetchRelated();
  }, [course, slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary/5 flex items-center justify-center">
        <div className="text-center text-black"><BlinkingDots/></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-primary/5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black">Course not found</h2>
          <Button
            variant="link"
            onClick={() => router.back()}
            className="text-primary"
          >
            ← Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  // Helper for stars (kept for UI consistency)
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-black"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-primary/5">
      <div className="container mx-auto py-8 px-4">
        {/* Back Button */}
        <Button
          variant="default"
          onClick={() => router.back()}
          className="flex items-center text-white mb-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              

              <h1 className="text-3xl lg:text-4xl font-bold  mb-2">
                {course.name || course.title}
              </h1>
              {course.intakeId?.termName && (
                <p className="text-xl font-semibold  mb-4">{course.intakeId.termName}</p>
              )}

              <div
                className="text-lg text-black mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: (course.description || "")
                    .replace(/<[^>]*>?/gm, "")
                    .slice(0, 150) + ((course.description || "").replace(/<[^>]*>?/gm, "").length > 150 ? "…" : ""),
                }}
              />

              <div className="flex flex-wrap items-center gap-6 text-sm text-black">
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {course.categoryId?.title || course.category || "General"}
                </div>
                {course.duration && (
                  <div className="flex items-start gap-2 text-black px-4 py-3 rounded-lg">
                    <Clock className="w-4 h-4 mt-1 text-primary" />
                    <span className="leading-relaxed">{course.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/60 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
              <div className="relative p-8 lg:p-12 flex items-center">
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {course.name || course.title}
                  </h2>
                </div>
                <div className="hidden lg:block">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.name || course.title || "Course"}
                    className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-2xl shadow-lg">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="">
                <TabsList
                  className="
    flex w-full overflow-x-auto bg-primary p-1 rounded-md 
    scrollbar-hide 
    sm:grid sm:grid-cols-4 sm:overflow-visible
  "
                >
                  {[
                    { value: "overview", label: "Overview", shortLabel: "Overview" },
                    { value: "curriculum", label: "Programme Information", shortLabel: "Program Info" },
                    { value: "requirements", label: "Entry Requirement", shortLabel: "Requirement" },
                    { value: "career", label: "Programme Structure", shortLabel: "Structure" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="
        flex items-center flex-shrink-0 text-white text-xs sm:text-sm gap-1 
        data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm 
        rounded-md transition-colors
      "
                      style={{ minWidth: "max-content" }}
                    >
                      <span className="sm:hidden">{tab.shortLabel}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="p-6 lg:p-8">
                  <TabsContent value="overview" className="space-y-6">
                        <h3 className="text-2xl font-bold text-black">Course Overview</h3>
                        <div
                          className="text-black leading-relaxed whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: course.description || "" }}
                        />
                        {(course.keyFeatures || []).filter((tag: string) => tag && tag.trim()).length > 0 && (
                          <div>
                            <h4 className="text-xl font-semibold text-black mb-4">Key Features</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {(course.keyFeatures || [])
                                .filter((tag: string) => tag && tag.trim())
                                .map((tag: string, idx: number) => (
                                  <div key={idx} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                    <span className="text-black">{tag}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </TabsContent>

                      <TabsContent value="curriculum" className="space-y-6">
                        <h3 className="text-2xl font-bold text-black">Programme Information</h3>
                        {(course.programmeInfo || [])
                          .filter((info: any) => info.heading && info.heading.trim())
                          .map((info: any, idx: number) => (
                          <div key={info._id || idx} className="mb-6">
                            <h4 className="text-xl font-semibold text-black mb-2">{info.heading}</h4>
                            {info.subHeading && <p className="text-black mb-3 italic">{info.subHeading}</p>}
                            {info.keyPoints && info.keyPoints.length > 0 && (
                              <ul className="space-y-2 text-black">
                                {info.keyPoints.map((pt: string, i: number) => (
                                  <li key={i} className="flex items-start space-x-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="requirements" className="space-y-6">
                        <h3 className="text-2xl font-bold text-black">Entry Requirements</h3>
                        {(course.entryRequirements || [])
                          .filter((req: any) => req.heading && req.heading.trim())
                          .map((req: any, idx: number) => (
                          <div key={req._id || idx} className="mb-6">
                            <h4 className="text-xl font-semibold text-black mb-2">{req.heading}</h4>
                            {req.subHeading && <p className="text-black mb-3">{req.subHeading}</p>}
                            {req.keyPoints && req.keyPoints.length > 0 && (
                              <ul className="space-y-2 text-black">
                                {req.keyPoints.map((pt: string, i: number) => (
                                  <li key={i} className="flex items-start space-x-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="career" className="space-y-6">
                        <h3 className="text-2xl font-bold text-black">Programme Structure</h3>
                        {(course.programmeStructure || [])
                          .filter((term: any) => term.title && term.title.trim() && (term.rows || []).some((r: any) => r.title && r.title.trim()))
                          .map((term: any, idx: number) => (
                          <div key={term._id || idx} className="mb-8">
                            <h4 className="text-xl font-bold text-black mb-1">{term.title}</h4>
                            {term.subtitle && <p className="text-black mb-4 italic">{term.subtitle}</p>}
                            {term.keyPoints && term.keyPoints.length > 0 && (
                              <ul className="list-disc pl-5 text-sm text-black space-y-1 mb-4">
                                {term.keyPoints.map((pt: string, i: number) => (
                                  <li key={i}>{pt}</li>
                                ))}
                              </ul>
                            )}
                            {term.rows && term.rows.length > 0 && (
                              <div className="overflow-x-auto mb-4">
                                <table className="min-w-full text-sm border-collapse">
                                  <thead>
                                    <tr className="bg-gray-50">
                                      <th className="border p-2 text-left font-semibold">Week</th>
                                      <th className="border p-2 text-left font-semibold">Unit</th>
                                      <th className="border p-2 text-left font-semibold">Title</th>
                                      <th className="border p-2 text-center font-semibold">Credits</th>
                                      <th className="border p-2 text-center font-semibold">GLH</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {term.rows.map((row: any, rIdx: number) => (
                                      <tr key={row._id || rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="border p-2">{row.week}</td>
                                        <td className="border p-2 font-mono text-xs">{row.unit || ""}</td>
                                        <td className="border p-2">{row.title}</td>
                                        <td className="border p-2 text-center">{row.credits}</td>
                                        <td className="border p-2 text-center">{row.glh}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                            {(term.totalCredits || term.totalGLH) && (
                              <div className="mt-3 p-3 bg-blue-50 rounded-md text-sm font-medium">
                                <strong>Term Total:</strong> {term.totalCredits} credits, {term.totalGLH} GLH
                              </div>
                            )}
                            {term.conditionUnits && term.conditionUnits.length > 0 && (
                              <div className="mt-4 p-4 bg-yellow-50 rounded-md">
                                <h5 className="font-semibold text-black mb-2">Condition-Specific Awareness Units</h5>
                                <ul className="list-disc pl-5 text-sm space-y-1">
                                  {term.conditionUnits.map((unit: any, uIdx: number) => (
                                    <li key={uIdx}>
                                      <strong>{unit.title}</strong> | {unit.code} | {unit.credits} credits | {unit.glh} GLH
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-white/10 p-6 border-b border-white/10 rounded-md mb-6">
                  <div className="text-white text-sm font-medium mb-1">Tuition Fee</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{course.courseFee || "-"}</span>
                  </div>
                  <span className="text-white text-sm">{course.feeDetails || ""}</span>
                </div>
                <Button
                  onClick={() => router.push(`/courses/${course.slug}/${course._id}`)}
                  className="block w-full bg-white text-primary hover:bg-gray-100 font-semibold h-12 text-lg text-center rounded"
                >
                  🚀 Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-black mb-4 flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-purple-600" />
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <button
                    className="w-full flex items-center justify-start space-x-3 text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => router.push("/contact")}
                  >
                    <Book className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Book Consultation</span>
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-black mb-4">You Might Also Like</h4>
                <div className="space-y-4">
                  {relatedCourses.map((related: any) => (
                    <div
                      key={related._id || related.slug}
                      className="border-b pb-3 last:border-b-0 cursor-pointer hover:bg-watney-blue-primary/20 p-2  bg-watney-blue-primary/10 rounded"
                      onClick={() => router.push(`/courses/${related.slug}`)}
                    >
                      <h5 className="font-medium text-black">
                        {related.name || related.title}
                        {related.intakeId?.termName ? (
                          <span className="ml-1  text-black">- {related.intakeId.termName}</span>
                        ) : null}
                      </h5>
                      <p className="text-black text-xs">
                        {String(related.description || "").replace(/<[^>]*>?/gm, "").split(" ").slice(0, 10).join(" ")}
                        {String(related.description || "").replace(/<[^>]*>?/gm, "").split(" ").length > 10 ? "…" : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
