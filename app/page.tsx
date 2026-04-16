"use client";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Users,
  Globe,
  Award,
  GraduationCap,
  Lightbulb,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Check,
  Dumbbell,
  Banknote,
  ArrowRight,
  Briefcase,
  FlaskConical,
  Microscope,
  Network,
  Calendar,
  Heart,
  UserCheck,
  Search,
  Filter,
  CalendarDays,
  Send,
  CreditCard,
  MessageCircle,
} from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Hero from "@/components/hero";
import { courses } from "./courses/data/courseData";

export default function page() {
  function Counter({
    target,
    label,
    suffix = "",
  }: {
    target: number;
    label: string;
    suffix?: string;
  }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = target;
        const duration = 1500; // 1.5s
        let startTime: number | null = null;

        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * (end - start) + start));
          if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      }
    }, [isInView, target]);

    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-3xl font-bold text-primary">
          {count.toLocaleString()}
          {suffix}
          {suffix === "" && "+"}
        </div>
        <div className="text-lg text-primary">{label}</div>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 400, damping: 15 },
    },
  };

  const cardData = [
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      bg: "bg-primary/30",
      title: "Academic Excellence Program",
      desc: "Top-tier curriculum content covering diverse fields with international standards and cutting-edge methodologies.",
      points: [
        "Certified Programs",
        "Expert Instructors",
        "Flexible Scheduling",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      bg: "bg-pink-500/30",
      title: "Student Success Support",
      desc: "Comprehensive 24/7 guidance through personalized mentoring and professional development programs.",
      points: ["Career Guidance", "Academic Support", "Mental Health"],
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      bg: "bg-blue-500/30",
      title: "Global Education Network",
      desc: "Connecting students with worldwide opportunities through partnerships and international programs.",
      points: ["Study Abroad", "Exchange Programs", "Global Partnerships"],
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      bg: "bg-green-500/30",
      title: "Professional Certification Hub",
      desc: "Industry-recognized certifications and professional development programs for career advancement.",
      points: [
        "Industry Certifications",
        "Skill Assessments",
        "Career Placement",
      ],
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      bg: "bg-purple-500/30",
      title: "Skills Development Lab",
      desc: "Hands-on learning experiences with cutting-edge technology and practical skill development.",
      points: ["Practical Training", "Lab Sessions", "Project Work"],
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      bg: "bg-orange-500/30",
      title: "Innovation & Research Center",
      desc: "Fostering creativity and innovation through research projects and collaborative learning environments.",
      points: ["Research Projects", "Innovation Labs", "Collaboration Spaces"],
    },
  ];

 const features = [
   {
     icon: <Users className="w-8 h-8 text-primary" />,
     title: "Experienced Academic Staff",
     description:
       "Learn from dedicated tutors committed to supporting your progress and achievement throughout your studies.",
     bg: "bg-primary/10 text-primary",
   },
   {
     icon: <Star className="w-8 h-8 text-primary" />,
     title: "Flexible Learning Options",
     description:
       "Choose from online, hybrid, or in-person learning formats that fit your schedule.",
     bg: "bg-primary/10 text-primary",
   },
   {
     icon: <Award className="w-8 h-8 text-primary" />,
     title: "Accessible Education",
     description:
       "Quality education at transparent, competitive fees with no hidden costs.",
     bg: "bg-primary/10 text-primary",
   },
   {
     icon: <BookOpen className="w-8 h-8 text-primary" />,
     title: "Student Support",
     description:
       "Dedicated support throughout your studies including academic guidance and personal tutoring.",
     bg: "bg-primary/10 text-primary",
   },
   {
     icon: <MapPin className="w-8 h-8 text-primary" />,
     title: "London Location",
     description:
       "Study in one of the world's most vibrant educational and cultural cities.",
     bg: "bg-primary/10 text-primary",
   },
   {
     icon: <Globe className="w-8 h-8 text-primary" />,
     title: "International Community",
     description:
       "Learn alongside students from a range of backgrounds in a welcoming, inclusive environment.",
     bg: "bg-primary/10 text-primary",
   },
 ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Business", "English", "Healthcare"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Hero />
      <div className="relative overflow-hidden">
        {/* Essential Resources Section */}
        <section className="relative py-20 bg-watney-blue-primary/5 overflow-hidden z-0">
          <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180  z-0"></div>
          <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none  z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Essential{" "}
                <span className="text-gradient-watney">Resources</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know before and during your studies at
                Watney College — from applying and fees to support and key
                dates.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "How to Apply",
                  description:
                    "Ready to join Watney College? Apply online in minutes by clicking the Apply Now button and registering your details. Our team will guide you through the next steps.",
                  icon: <Send className="w-6 h-6" />,
                  href: "https://app.watneycollege.co.uk/",
                },
                {
                  title: "Tuition Fees",
                  description:
                    "Tuition fees vary by programme. Full fee details for each course are listed on the individual course page. Please refer to your chosen course for specific fee information.",
                  icon: <Banknote className="w-6 h-6" />,
                  href: "/courses",
                },
                {
                  title: "Student Finance",
                  description:
                    "All programmes at Watney College are currently self-funded or employer-sponsored. Funding options vary by qualification and individual circumstances. Please refer to your chosen course page for specific funding information, or contact us to discuss your options.",
                  icon: <CreditCard className="w-6 h-6" />,
                  href: "/student-finance",
                },
                {
                  title: "Accommodation",
                  description:
                    "We recommend that all students arrange accommodation before registering with Watney College. We can provide guidance and signposting to help you find safe, affordable housing in London. For support please contact us at support@watneycollege.co.uk.",
                  icon: <MapPin className="w-6 h-6" />,
                  href: "mailto:support@watneycollege.co.uk",
                },
                {
                  title: "Student Handbook",
                  description:
                    "Your essential guide to life at Watney College — covering policies, expectations, support services and your rights as a student. Your handbook is available in your student account via the Watney College Student Management System (WCSMS). Click here to login to your account to access the Student Handbook.",
                  icon: <BookOpen className="w-6 h-6" />,
                  href: "#",
                },
                {
                  title: "Academic Calendar",
                  description:
                    "Key dates for the academic year including term dates, assessment periods, submission deadlines and college closure days. Click here to see the 2025–2026 Academic Calendar.",
                  icon: <CalendarDays className="w-6 h-6" />,
                  href: "/academic-calendar",
                },
              ].map((card, index) => (
                <div key={index}>
                  <Link href={card.href}>
                    <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 h-full flex flex-col cursor-pointer">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-tr from-primary to-primary/60 rounded-xl flex items-center justify-center mb-5 text-white shadow">
                        {card.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-200">
                        {card.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                        {card.description}
                      </p>

                      {/* CTA (ONLY for Student Finance) */}
                      {card.title === "Student Finance" && (
                        <div className="flex items-center mt-5 text-primary text-sm font-medium">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className=" relative py-20 bg-watney-blue-primary/5 overflow-hidden">
          <div className="absolute right-80 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0"></div>
          <div className="absolute left-80 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0  z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Watney College{" "}
                <span className="text-gradient-watney">Offers</span>
              </h2>
              <p className="text-xl text-gray-600 ">
                Quality education and student support across healthcare and
                vocational programmes, designed to develop your skills and
                advance your career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-[1000]">
              {[
                {
                  title: "Healthcare Programmes",
                  description:
                    "Nationally recognised qualifications in adult health and social care, delivered by experienced practitioners.",
                  icon: <BookOpen className="w-8 h-8 text-primary" />,
                  points: [
                    "NQual Level 2 Adult Social Care",
                    "NQual Level 4 Diploma in Adult Care",
                    "ATHE Level 4 Healthcare",
                  ],
                },
                {
                  title: "Student Support",
                  description:
                    "Dedicated academic and personal support throughout your studies to help you achieve your goals.",
                  icon: <Users className="w-8 h-8 text-primary" />,
                  points: [
                    "Personal Tutoring",
                    "Academic Guidance",
                    "Wellbeing Support",
                  ],
                },
                {
                  title: "Employer Partnerships",
                  description:
                    "Strong links with healthcare employers supporting student progression and workforce development.",
                  icon: <Globe className="w-8 h-8 text-primary" />,
                  points: [
                    "Healthcare Employer Network",
                    "Industry Engagement",
                    "Career Pathways",
                  ],
                },
                {
                  title: "Professional Certifications",
                  description:
                    "Industry-recognised qualifications designed to develop your professional skills and support career advancement in health and social care.",
                  icon: <Award className="w-8 h-8 text-primary" />,
                  points: [
                    "Recognised Qualifications",
                    "Skills Assessment",
                    "Career Progression",
                  ],
                },
                {
                  title: "Practical Skills Development",
                  description:
                    "Hands-on learning designed to build the competencies required for professional practice in care.",
                  icon: <GraduationCap className="w-8 h-8 text-primary" />,
                  points: [
                    "Practical Training",
                    "Portfolio Assessment",
                    "Work-Based Learning",
                  ],
                },
                {
                  title: "Work Placement (Healthcare)",
                  description:
                    "Connecting students with real-world opportunities to apply their skills and gain industry experience.",
                  icon: <Lightbulb className="w-8 h-8 text-primary" />,
                  points: [
                    "Placements",
                    "Industry Projects",
                    "Professional Networking",
                  ],
                },
              ].map((card, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {card.icon}
                    </div>

                    <CardTitle className="text-xl text-watney-blue-primary">
                      {card.title}
                    </CardTitle>

                    <CardDescription className="text-lg">
                      {card.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 text-lg text-gray-600">
                      {card.points.map((point, i) => (
                        <div key={i}>• {point}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=" relative py-20 bg-soft-sky">
          <div className="absolute left-72  top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none   z-0"></div>
          <div className="absolute right-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180  z-0"></div>
          <div className="container mx-auto px-4  text-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Ready to Start Your{" "}
              <span className="text-gradient-watney">Educational Journey?</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto px-2">
              Take the next step. Apply today or speak to our team to find out
              more.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="btn-watney-primary w-full sm:w-auto flex items-center justify-center"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className=" relative py-20 bg-watney-blue-primary/5 ">
          <div className="absolute left-80  top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none   z-0"></div>
          <div className="absolute right-80 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180  z-0"></div>

          <div className="container mx-auto px-4 z-10 relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium tracking-wide">
                  Why Choose Us
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
                Why Choose{" "}
                <span className="text-gradient-watney">Watney College?</span>
              </h2>
              <p className="text-lg text-gray-600  mx-auto leading-relaxed">
                Here is what makes Watney College a great place to study.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-24"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group text-center gap-4"
                >
                  {/* Icon Circle */}
                  <motion.div
                    className={`w-16 h-16 ${feature.bg} rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
                    variants={iconVariants}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className=" relative py-20 bg-white">
          <div className="absolute left-80  top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none   z-0"></div>
          <div className="absolute right-80 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180  z-0"></div>
          <div className="container mx-auto px-4 z-10 relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium tracking-wide">
                Excellence & Innovation
              </span>
            </motion.div> */}
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
                Student Community &
                <span className="text-gradient-watney">Engagement </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get involved in college life and connect with your peers
                throughout your studies at Watney College.
              </p>
            </motion.div>

            {/* 2-Grid Layout */}
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Tile 1 — Student Engagement */}
              <motion.div variants={cardVariants}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-primary/5 to-purple-50" />

                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          Student Engagement
                        </h3>
                        <p className="text-primary font-medium">
                          Connect • Participate • Belong
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Become part of the Watney College student community.
                        Engage with your peers, participate in college life and
                        contribute to shaping your learning experience.
                      </p>

                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Student Representative Programme
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Peer Support Network
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          College Events & Activities
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tile 2 — Student Voice */}
              <motion.div variants={cardVariants}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-primary/5 to-purple-50" />

                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          Student Voice
                        </h3>
                        <p className="text-primary font-medium">
                          Listen • Respond • Improve
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Your feedback matters. Watney College actively seeks
                        student input to improve the quality of teaching,
                        support and the overall student experience.
                      </p>

                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Student Surveys
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Course Committee Representation
                        </li>
                        <li className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          Annual Student Experience Review
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative bg-watney-blue-primary/5">
          <div className="absolute -left-72  top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180   z-0"></div>
          <div className="absolute -right-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none   z-0"></div>
          <div className="container mx-auto px-4 z-10 relative">
            <div className="text-center mb-16">
              {/* <Badge className="mb-4">Student Success Stories</Badge> */}
              <h2 className="text-4xl font-bold mb-4">
                What Our{" "}
                <span className="text-gradient-watney">Students Say</span>
              </h2>
              <p className="text-xl text-gray-600  mx-auto">
                Hear from our successful graduates who have achieved their
                educational dreams with our support and guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarImage src="/noushin.jpeg" />
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Noushin</div>
                  </div>
                </div>

                <p className="text-gray-600">
                  "As a recent graduate of the OTHM Level 3 Foundation Diploma
                  in Health and Social Care at Watney College, I can confidently
                  say that the program has been instrumental in shaping my
                  career. The comprehensive curriculum and the unwavering
                  support from the faculty equipped me with the essential
                  knowledge and skills to excel in the health and social care
                  sector. The practical approach to learning, combined with
                  real-world case studies, provided me with a solid foundation
                  to pursue further studies and professional opportunities in
                  this field."
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-3">
                    <AvatarImage src="/tayef.jpeg" />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Tayef</div>
                  </div>
                </div>

                <p className="text-gray-600 ">
                  "Completing the OTHM Level 3 Foundation Diploma in Health and
                  Social Care at Watney College was a transformative experience.
                  The diverse and inclusive environment, along with the
                  dedicated instructors, made learning both engaging and
                  insightful. The program's emphasis on personal and
                  professional development has not only prepared me for
                  immediate employment but also instilled a lifelong passion for
                  contributing positively to the health and social care
                  community."
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
