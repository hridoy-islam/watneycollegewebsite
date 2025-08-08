"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Users,
  Clock,
  Star,
  Search,
  Filter,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Business Management & Leadership",
      description:
        "Comprehensive program covering modern business practices and leadership skills.",
      category: "Business",
      level: "Intermediate",
      duration: "12 weeks",
      students: "1,250 students",
      rating: 4.8,
      price: "£2,499",
      image: "/e1.jpg",
      tags: ["Live Sessions", "Case Studies", "Certification"],
      instructor: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description:
        "Master data analysis, machine learning, and statistical modeling techniques.",
      category: "Technology",
      level: "Advanced",
      duration: "16 weeks",
      students: "2,100 students",
      rating: 4.9,
      price: "£3,299",
      image: "/e2.jpg",
      tags: ["Hands-on Projects", "Industry Tools", "Mentoring"],
      instructor: "Prof. Michael Chen",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description:
        "Learn modern digital marketing strategies and tools for business growth.",
      category: "Marketing",
      level: "Beginner",
      duration: "10 weeks",
      students: "3,200 students",
      rating: 4.7,
      price: "£1,899",
      image: "/c3.jpg",
      tags: ["Real Campaigns", "Analytics Tools", "Social Media"],
      instructor: "Emma Rodriguez",
    },
    {
      id: 4,
      title: "Healthcare Administration",
      description:
        "Comprehensive training in healthcare management and administration.",
      category: "Healthcare",
      level: "Intermediate",
      duration: "14 weeks",
      students: "1,650 students",
      rating: 4.6,
      price: "£2,799",
      image: "/e3.jpg",
      tags: ["Healthcare Systems", "Compliance", "Leadership"],
      instructor: "Dr. James Wilson",
    },
    {
      id: 5,
      title: "Software Engineering Bootcamp",
      description:
        "Intensive program to become a full-stack software developer.",
      category: "Technology",
      level: "Beginner",
      duration: "20 weeks",
      students: "1,900 students",
      rating: 4.8,
      price: "£4,999",
      image: "/b2.jpg",
      tags: ["Full-Stack Development", "Portfolio Projects", "Code Reviews"],
      instructor: "Alex Thompson",
    },
    {
      id: 6,
      title: "Educational Leadership",
      description:
        "Develop leadership skills for educational institutions and organizations.",
      category: "Education",
      level: "Advanced",
      duration: "12 weeks",
      students: "1,420 students",
      rating: 4.9,
      price: "£2,999",
      image: "/b3.jpg",
      tags: ["Leadership Theory", "Change Management", "Policy Development"],
      instructor: "Dr. Lisa Parker",
    },
  ];

  const categories = [
    "all",
    "Business",
    "Technology",
    "Marketing",
    "Healthcare",
    "Education",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Explore Our <span className="text-white">Courses</span>
            </h1>
            <p className="text-xl mb-12 text-white  mx-auto">
              Discover world-class programs designed to advance your career and
              unlock new opportunities.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full md:w-48 h-12 text-black">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container text-primary">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div key={course.id} variants={itemVariants}>
                <Card className="h-full border-primary/30 hover:shadow-lg  transition-all duration-300 group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${
                        course.level === "Beginner"
                          ? "bg-white border-none hover:bg-white"
                          : course.level === "Intermediate"
                          ? "bg-white border-none hover:bg-white"
                          : "bg-white border-none hover:bg-white"
                      }`}
                    >
                      {course.level}
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-white border-none hover:bg-white ">
                      {course.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {course.rating}
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {course.price}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-sm text-gray-600">
                        <strong>Instructor:</strong> {course.instructor}
                      </div>

                      <Button className="w-full group-hover:bg-primary group-hover:text-white/80 transition-colors">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black/5 to-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with
              our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary"
              >
                View All Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
