"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  Search,
  Filter,
  GraduationCap,
  ArrowRight,
  Tag,
} from "lucide-react";
import axiosInstance from "@/utils/axios";
import { DataTablePagination } from "@/components/data-table-pagination";
import { BlinkingDots } from "@/components/blinking-dots";

function stripHtml(html: string): string {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return tmp.textContent || tmp.innerText || "";
}

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
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(1);

  // Debounce logic for search input (500ms delay)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/course-categories?status=active");
        const data = res.data?.data?.result || res.data?.data || [];
        setCategories(Array.isArray(data) ? data : data.result || []);
      } catch (err) {
        console.error("Failed to fetch categories", err);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const params: Record<string, string | number> = {
          status: "active",
          page: currentPage,
          limit: entriesPerPage,
        };
        if (debouncedSearchTerm.trim()) {
          params.searchTerm = debouncedSearchTerm.trim();
        }
        if (selectedCategory !== "all") {
          params.categoryId = selectedCategory;
        }

        const res = await axiosInstance.get("/courses", { params });
        const payload = res.data?.data || {};
        const resultData = payload.result || payload || [];
        const meta = payload.meta || {};

        setCourses(Array.isArray(resultData) ? resultData : resultData.result || []);
        setTotalPages(meta.totalPage || 1);
      } catch (err) {
        console.error("Failed to fetch courses", err);
        setCourses([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [debouncedSearchTerm, selectedCategory, currentPage, entriesPerPage]);

  return (
    <div className="min-h-screen bg-primary">
      <div className="relative overflow-hidden">
        <div className="absolute right-[308px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[308px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <GraduationCap className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Explore Our{" "}
              <span className="text-watney-blue-primary">Courses</span>
            </h1>
            <p className="mb-12 text-lg text-gray-600 leading-relaxed mx-auto">
              Discover world-class programs designed to advance your career and
              unlock new opportunities.
            </p>
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="pl-10 h-12"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={(val) => {
                    setSelectedCategory(val);
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-full md:w-48 h-12 text-black">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat: any) => (
                      <SelectItem key={cat._id} value={cat._id}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container text-primary">
            {loading ? (
              <div className="text-center py-12 text-gray-500">
                <BlinkingDots />
              </div>
            ) : (
              <>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {courses.map((course: any, index: number) => (
                    <motion.div
                      key={course._id || course.slug || index}
                      variants={itemVariants}
                      className="z-50"
                    >
                      <Card className="h-full flex flex-col border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden z-50">
                        <div className="relative overflow-hidden">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.name || course.title || "Course"}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <CardHeader className="flex-grow">
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {course.name || course.title}
                            {course.intakeId?.termName && (
                              <span className="block text-sm font-medium text-gray-800 mt-1">
                                {course.intakeId.termName}
                              </span>
                            )}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {(() => {
                              const plain = stripHtml(course.description || "");
                              const words = plain.split(" ").slice(0, 20).join(" ");
                              return words + (plain.split(" ").length > 20 ? "…" : "");
                            })()}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center">
                                <Tag className="w-4 h-4 mr-1" />
                                {course.categoryId?.title || "General"}
                              </div>
                            </div>
                            <Link
                              href={`/courses/${course.slug}`}
                              className="w-full block"
                            >
                              <Button className="w-full group-hover:bg-primary group-hover:text-white/80 transition-colors">
                                View Details
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {courses.length === 0 && !loading && (
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

                {totalPages > 1 && (
                  <div className="flex items-center justify-end gap-2 pt-4">
                    <DataTablePagination
                      pageSize={entriesPerPage}
                      setPageSize={setEntriesPerPage}
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}