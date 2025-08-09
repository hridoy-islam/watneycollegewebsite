'use client';

import { use, useState } from 'react';
import { ArrowLeft, MapPin, Clock, Calendar, Star, Users, Award, Share, Heart, Download, Book, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter, useSearchParams } from 'next/navigation';
import { courses } from '@/app/courses/data/courseData';

export default function CourseDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramId = searchParams.get('id'); // Optional: for query param style
  const routeId = useRouteId(); // Custom hook to get dynamic segment
  const id = parseInt(routeId || paramId || '0');

  const course = courses.find(c => c.id === id);

  const [activeTab, setActiveTab] = useState('overview');

  if (!course) {
    return (
      <div className="min-h-screen bg-primary/5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Course not found</h2>
          <Button variant="link" onClick={() => router.back()} className="text-primary">
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
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
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
          className="flex items-center text-primary hover:text-white mb-6 transition-colors"
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
                <Badge variant="secondary" className="bg-purple-100 text-primary">
                  {course.category}
                </Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  London, UK
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students}
                </div>
                <div className="flex items-center">
                  {renderStars(course.rating)}
                  <span className="ml-1">{course.rating} ({course.id === 1 ? 156 : course.id}) reviews</span>
                </div>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/60 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
              <div className="relative p-8 lg:p-12 flex items-center">
                <div className="flex-1">
                  <div className="text-6xl lg:text-8xl font-bold text-white opacity-50 mb-4">
                    {course.category[0].toUpperCase()}
                  </div>
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
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                  <TabsContent value="overview" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Course Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {course.description} This program is ideal for professionals looking to advance their careers in{' '}
                      <strong>{course.category}</strong>. With expert instruction and real-world projects, you’ll gain the skills needed to succeed.
                    </p>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.tags.map((tag, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <span className="text-gray-600">{tag}</span>
                          </div>
                        ))}
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Instructor: {course.instructor}</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <span className="text-gray-600">Duration: {course.duration}</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="curriculum" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Suggested Curriculum</h3>
                    <p className="text-gray-600">This course includes hands-on learning, projects, and assessments.</p>
                    <div className="space-y-3 mt-4">
                      {['Introduction', 'Core Concepts', 'Advanced Topics', 'Final Project'].map((topic, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900">{topic}</h4>
                          <p className="text-sm text-gray-500">Week {i * 3 + 1} - {i * 3 + 3}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="requirements" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Requirements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Laptop with internet access</li>
                      <li>• Basic understanding of {course.category}</li>
                      <li>• Willingness to learn and participate</li>
                      {course.level === 'Advanced' && <li>• Prior experience recommended</li>}
                    </ul>
                  </TabsContent>

                  <TabsContent value="career" className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">Career Outcomes</h3>
                    <p className="text-gray-600">Graduates of this program go on to roles such as:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {['Project Manager', 'Team Lead', 'Consultant', 'Specialist'].map((role, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded text-center">
                          <p className="font-medium text-gray-800">{role}</p>
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
                <div className="text-3xl font-bold mb-2">{course.price}</div>
                <div className="text-purple-100 mb-6">One-time Program Fee</div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-purple-200" />
                    <div className="text-2xl font-bold">
                      {course.students.split(' ')[0]}
                    </div>
                    <div className="text-sm text-purple-200">Students</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 mx-auto mb-2 text-purple-200" />
                    <div className="text-2xl font-bold">Certified</div>
                    <div className="text-sm text-purple-200">Program</div>
                  </div>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold py-6 text-lg">
                  🚀 Apply Now
                </Button>

                <div className="flex justify-center space-x-4 mt-4">
                  <button className="flex items-center space-x-1 text-purple-200 hover:text-white">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">Save</span>
                  </button>
                  <button className="flex items-center space-x-1 text-purple-200 hover:text-white">
                    <Share className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                <div className="text-center mt-4">
                  <span className="text-sm text-purple-200">Need help? </span>
                  <button className="text-sm text-white underline">Contact us</button>
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
                <h4 className="font-semibold text-gray-900 mb-4">You Might Also Like</h4>
                <div className="space-y-4">
                  {courses
                    .filter(c => c.id !== course.id && c.category === course.category)
                    .slice(0, 2)
                    .map((related) => (
                      <div
                        key={related.id}
                        className="border-b pb-3 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded"
                        onClick={() => router.push(`/course/${related.id}`)}
                      >
                        <h5 className="font-medium text-gray-900">{related.title}</h5>
                        <p className="text-sm text-gray-500">{related.duration} • {related.price}</p>
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
  return pathname.split('/').pop();
}

// You'll need to define this if not using useRouter
import { usePathname } from 'next/navigation';