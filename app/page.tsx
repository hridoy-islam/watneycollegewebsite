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
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      title: "Expert Academic Advisors",
      description:
        "Get personalized guidance from experienced professionals who understand your goals.",
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
      title: "Top-Value Education",
      description:
        "Quality education at competitive prices with excellent return on investment.",
      bg: "bg-primary/10 text-primary",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Career Support",
      description:
        "Comprehensive career services including job placement assistance and networking.",
      bg: "bg-primary/10 text-primary",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "London Location",
      description:
        "Study in one of the world's most vibrant educational and cultural centers.",
      bg: "bg-primary/10 text-primary",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "International Environment",
      description:
        "Learn alongside students from around the world in a diverse, inclusive environment.",
      bg: "bg-primary/10 text-primary",
    },
  ];

  return (
    <main className="min-h-screen">
     <section className="bg-gradient-to-r from-primary/80 to-primary/40 py-16 overflow-hidden">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Badge / Trust Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
            >
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              Accredited & Industry-Recognized Programs
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Shape Your Future With{" "}
              <span className="text-pink-300">Watney College</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-purple-100 leading-relaxed max-w-xl"
            >
              Join a globally recognized institution offering career-focused education designed for success in today’s competitive world.
            </motion.p>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg font-semibold py-7 px-10"
              >
                🚀 Apply Now – Secure Your Spot
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Counter target={10000} label="Active Students" />
              <Counter target={5000} label="Graduates" />
              <Counter target={98} suffix="%" label="Success Rate" />
            </motion.div>
          </motion.div>

          {/* Right Image + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/home.jpg"
                alt="Student studying with laptop and books"
                width={600}
                height={720}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 bg-white text-primary rounded-full px-4 py-2 shadow-lg text-sm font-bold whitespace-nowrap"
            >
              Limited Seats
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="absolute top-12 right-8 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2 text-gray-800">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Live Online</span>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 1.2,
              }}
              className="absolute bottom-16 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2 text-gray-800">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">250+ Career-Focused Courses</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Essential Resources Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/15 hover:bg-primary/15 text-primary mb-4">
              Student Support
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Essential <span className="text-primary">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to succeed — from housing and funding to
              career support and course guides.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Accommodation",
                description:
                  "Secure safe, affordable, and convenient housing near campus with our trusted partners.",
                icon: <MapPin className="w-6 h-6" />,
                href: "/accommodation",

                delay: 0,
              },
              {
                title: "Student Finance",
                description:
                  "Comprehensive guidance on tuition, scholarships, loans, and budget planning.",
                icon: <Banknote className="w-6 h-6" />,
                href: "/student-finance",
                gradient: "from-green-500 to-emerald-600",
                delay: 0.1,
              },
              {
                title: "Career & Employability",
                description:
                  "Boost your employability with CV reviews, mock interviews, and job placements.",
                icon: <Briefcase className="w-6 h-6" />,
                href: "/career-employability",
                gradient: "from-purple-500 to-violet-600",
                delay: 0.2,
              },
              {
                title: "Request a Prospectus",
                description:
                  "Get a free, detailed course guide delivered to your inbox or by post.",
                icon: <BookOpen className="w-6 h-6" />,
                href: "/prospectus",
                gradient: "from-pink-500 to-rose-600",
                delay: 0.3,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: card.delay, duration: 0.5 }}
              >
                <Link href={card.href}>
                  <motion.div
                    className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 h-full flex flex-col"
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon Circle with Gradient */}
                    <div
                      className={`w-14 h-14 bg-gradient-to-tr from-primary to-primary/60 rounded-xl flex items-center justify-center mb-5 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      {card.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                      {card.description}
                    </p>

                    {/* CTA Arrow */}
                    <div className="flex items-center mt-5 text-primary text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Services We <span className="text-primary">Proudly Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive educational services designed to empower
              students and professionals with the knowledge, skills, and
              opportunities needed for success in today's dynamic global
              marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20  hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Academic Excellence Program
                </CardTitle>
                <CardDescription>
                  Top-tier curriculum content covering diverse fields with
                  international standards and cutting-edge methodologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Certified Programs</div>
                  <div>• Expert Instructors</div>
                  <div>• Flexible Scheduling</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Student Success Support
                </CardTitle>
                <CardDescription>
                  Comprehensive 24/7 guidance through personalized mentoring and
                  professional development programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Career Guidance</div>
                  <div>• Academic Support</div>
                  <div>• Mental Health</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Global Education Network
                </CardTitle>
                <CardDescription>
                  Connecting students with worldwide opportunities through
                  partnerships and international programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Study Abroad</div>
                  <div>• Exchange Programs</div>
                  <div>• Global Partnerships</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Professional Certification Hub
                </CardTitle>
                <CardDescription>
                  Industry-recognized certifications and professional
                  development programs for career advancement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Industry Certifications</div>
                  <div>• Skill Assessments</div>
                  <div>• Career Placement</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Skills Development Lab
                </CardTitle>
                <CardDescription>
                  Hands-on learning experiences with cutting-edge technology and
                  practical skill development.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Practical Training</div>
                  <div>• Lab Sessions</div>
                  <div>• Project Work</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  Innovation & Research Center
                </CardTitle>
                <CardDescription>
                  Fostering creativity and innovation through research projects
                  and collaborative learning environments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Research Projects</div>
                  <div>• Innovation Labs</div>
                  <div>• Collaboration Spaces</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your{" "}
            <span className="text-white">Educational Journey?</span>
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their
            careers through our comprehensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="default"
              className="border-white text-primary hover:bg-white bg-white hover:text-primary"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
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
              Why Choose <span className="text-primary">Watney Education?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              There are many reasons to choose us as your education partner.
              Here are the most important ones that set us apart.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group text-center"
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the{" "}
            <span className="text-pink-200">Watney Difference?</span>
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers
            through our innovative education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white hover:text-primary"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Student Success Stories</Badge>
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-primary">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates who have achieved their
              educational dreams with our support and guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="mr-3">
                  <AvatarImage src="/p1.jpg" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">
                    Business Administration
                  </div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Watney College made my dream of studying in London a reality.
                Their support throughout the application process was
                exceptional, and I couldn't have asked for better guidance."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="mr-3">
                  <AvatarImage src="/p2.jpg" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Michael Kim</div>
                  <div className="text-sm text-gray-600">Computer Science</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The practical approach to learning and industry connections at
                Watney College helped me land my dream job right after
                graduation."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="mr-3">
                  <AvatarImage src="/p3.jpg" />
                  <AvatarFallback>EP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Json Parker</div>
                  <div className="text-sm text-gray-600">Digital Marketing</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "The flexible learning options allowed me to balance work and
                studies perfectly. The quality of education exceeded my
                expectations."
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Counter target={5000} label="Happy Students" />
              <Counter target={98} label="Success Rate" suffix="%" />
              <Counter target={50} label="Countries" suffix="+" />
              <Counter target={15} label="Years Experience" suffix="+" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
