"use client";
import { Button } from "@/components/ui/button";
import {
  Star,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { courses } from "@/app/courses/data/courseData";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchFocused, setSearchFocused] = useState(false);

  // const categories = ["all", "Business", "English", "Healthcare"];
  const categories = ["all", "Healthcare"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-20 md:py-0  ">
      <div className="absolute left-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0"></div>

      <div className="absolute right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0"></div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large Blue Orb */}
        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-watney-blue-secondary rounded-full blur-3xl opacity-80 animate-pulse-light"></div>
        {/* Smaller Accents */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-watney-blue-primary/10 rounded-full blur-3xl animate-float-light delay-500"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-watney-blue-accent/10 rounded-full blur-3xl animate-float-light delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                <span className="block">Education Empowerment</span>
                <span className="block text-watney-blue-primary">
                  Opportunity Success..
                </span>
              </h1>

              {/* <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in delay-200">
                At Watney College, we empower you with the knowledge and skills
                to thrive in tomorrow's world.
              </p> */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-400">
              <Button className="btn-watney-primary flex items-center justify-center">
                <Link href="/courses" className="flex items-center">
                  Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              {/* <Button
                variant="outline"
                className="btn-outline-watney flex items-center justify-center bg-transparent"
              >
                <Link href="/courses" className="flex items-center">
                  Explore Courses <BookOpen className="w-5 h-5 ml-2" />
                </Link>
              </Button> */}
            </div>

            {/* Partner Logos
            <div className="flex items-center gap-8 pt-8 animate-fade-in delay-600">
              <span className="text-gray-500 font-semibold">Trusted By:</span>
              <div className="flex items-center space-x-6">
                <img
                  src="/placeholder.svg?height=40&width=120&text=University+A"
                  alt="University A Logo"
                  className="h-8 opacity-70"
                />
                <img
                  src="/placeholder.svg?height=40&width=120&text=University+B"
                  alt="University B Logo"
                  className="h-8 opacity-70"
                />
                <img
                  src="/placeholder.svg?height=40&width=120&text=University+C"
                  alt="University C Logo"
                  className="h-8 opacity-70"
                />
              </div>
            </div> */}
          </div>

          {/* Right Content - Illustration */}
          <div className="relative flex justify-center items-center animate-fade-in delay-500">
            <div className="relative w-full max-w-lg">
              {/* Main Student Image */}
              <img
                src="./hero.png"
                alt="Happy College Student"
                className="w-full h-auto object-contain rounded-full shadow-2xl"
              />

              {/* Floating elements */}
              <div className="absolute top-[20%] left-0 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg animate-float-light">
                <GraduationCap className="w-10 h-10 text-watney-blue-primary" />
              </div>
              <div className="absolute top-[40%] right-0 transform translate-x-1/2 bg-white rounded-full p-3 shadow-lg animate-float-light delay-300">
                <BookOpen className="w-10 h-10 text-watney-blue-secondary" />
              </div>

              {/* Review Card */}
              {/* <div className="absolute bottom-[10%] left-0 transform -translate-x-1/4 bg-white rounded-xl p-4 shadow-lg animate-fade-in-up delay-700">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/23.jpg"
                      alt="Avatar 1"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Avatar 2"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/92.jpg"
                      alt="Avatar 3"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="flex items-center text-watney-blue-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {" (10k+ Reviews)"}
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="container mx-auto relative pb-36">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-5 text-gray-800">
            Explore Our <span className="text-gradient-watney">Courses</span>
          </h2>

          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg mb-8 relative">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 150)} // small delay to allow click
                  className="w-full pl-10 h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Search Results Dropdown */}
                {searchTerm !== "" || searchFocused ? (
                  <div className="absolute z-[1000] w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-auto">
                    {filteredCourses.length > 0 ? (
                      filteredCourses.map((course) => (
                        <Link
                          href={`/courses/${course.slug}`}
                          key={course.id}
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                        >
                          {course.title}
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">
                        No courses found matching your search.
                      </div>
                    )}
                  </div>
                ) : null}
              </div>

              {/* Category Filter */}
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full md:w-48 h-12 text-gray-700 ">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="z-50"
                    >
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
