"use client";

import { use, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Calendar,
  Star,
  Users,
  Award,
  Share,
  Heart,
  Download,
  Book,
  Phone,
  ExternalLink,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { courses } from "@/app/courses/data/courseData";

export default function CourseDetailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  // Now you can use 'slug' to find your course:
  const course = courses.find((c) => c.slug === slug);

  const [activeTab, setActiveTab] = useState("overview");

  if (!course) {
    return (
      <div className="min-h-screen bg-primary/5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Course not found</h2>
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

  // Helper: Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
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
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-primary"
                >
                  {course.category}
                </Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {course.category}
                </div>
                {/* <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students}
                </div> */}
                {/* <div className="flex items-center">
                  {renderStars(course.rating)}
                  <span className="ml-1">
                    {course.rating} ({course.id === 1 ? 156 : course.id})
                    reviews
                  </span>
                </div> */}
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/60 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
              <div className="relative p-8 lg:p-12 flex items-center">
                <div className="flex-1">
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {course.title}
                  </h2>
                </div>
                <div className="hidden lg:block">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-2xl shadow-lg">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 bg-primary p-1">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-white"
                  >
                    <Book className="w-4 h-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="curriculum"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-white"
                  >
                    Curriculum
                  </TabsTrigger>
                  <TabsTrigger
                    value="requirements"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-white"
                  >
                    Requirements
                  </TabsTrigger>
                  <TabsTrigger
                    value="career"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-white"
                  >
                    Career
                  </TabsTrigger>
                </TabsList>

                <div className="p-6 lg:p-8">
                  {/* === Overview Tab === */}
                  <TabsContent value="overview" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Course Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {course.overview}
                    </p>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.tags.map((tag, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <span className="text-gray-600">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* === Curriculum Tab === */}
                  <TabsContent value="curriculum" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Curriculum
                    </h3>
                    <p className="text-gray-600">
                      This course includes the following units and assessments:
                    </p>
                    <ul className="space-y-3 mt-4">
                      {course.curriculum.map((item, index) => (
                        <li key={index} className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-800">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* === Requirements Tab === */}
                  <TabsContent value="requirements" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary ">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* === Career Tab === */}
                  <TabsContent value="career" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Career Pathways
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Successful graduates are well-prepared for a variety of
                      professional roles, including:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {course.career.map((role, index) => (
                        <div
                          key={index}
                          className="bg-white shadow-sm border border-gray-200 p-4 rounded-lg text-center hover:shadow-md transition"
                        >
                          <p className="font-semibold text-gray-800">{role}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2">Enroll Now</div>

                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-primary hover:bg-gray-100 font-semibold py-2 text-lg text-center rounded"
                >
                  🚀 Apply Now
                </a>

                <div className="text-center mt-4">
                  <span className="text-sm text-purple-200">Need help? </span>
                  <button className="text-sm text-white underline">
                    Contact us
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2 text-purple-600" />
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-start space-x-3 text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Download Brochure</span>
                  </button>
                  <button className="w-full flex items-center justify-start space-x-3 text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Book className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Book Consultation</span>
                  </button>
                  <button className="w-full flex items-center justify-start space-x-3 text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Schedule Call</span>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Related Courses */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  You Might Also Like
                </h4>
                <div className="space-y-4">
                  {courses
                    .filter(
                      (c) =>
                        c.id !== course.id && c.category === course.category
                    )
                    .slice(0, 2)
                    .map((related) => (
                      <div
                        key={related.id}
                        className="border-b pb-3 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded"
                        onClick={() => router.push(`/courses/${related.slug}`)}
                      >
                        <h5 className="font-medium text-gray-900">
                          {related.title}
                        </h5>
                        <p className=" text-gray-700 text-xs">
                          {course.description.split(" ").slice(0, 10).join(" ")}
                          {related.description.split(" ").length > 10
                            ? "…"
                            : ""}
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

// Helper to get dynamic route ID in App Router
function useRouteId() {
  const pathname = usePathname();
  return pathname.split("/").pop();
}

// You'll need to define this if not using useRouter
import { usePathname } from "next/navigation";
