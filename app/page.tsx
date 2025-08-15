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
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Hero from "@/components/hero";

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
    <div>
      <Hero />

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
            {/* <Badge className="bg-primary/15 hover:bg-primary/15 text-primary mb-4">
              Student Support
            </Badge> */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Essential <span className="text-gradient-watney">Resources</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services We{" "}
              <span className="text-gradient-watney">Proudly Offer</span>
            </h2>
            <p className="text-xl text-gray-600 ">
              We deliver transformative education to meet the demands of an
              evolving world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className=" ">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-watney-blue-primary">
                  Academic Excellence Program
                </CardTitle>
                <CardDescription className="text-lg">
                  Top-tier curriculum content covering diverse fields with
                  international standards and cutting-edge methodologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg text-gray-600">
                  <div>• Certified Programs</div>
                  <div>• Expert Delivery Team</div>
                  <div>• Flexible Scheduling</div>
                </div>
              </CardContent>
            </Card>

            <Card className="">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-watney-blue-primary">
                  Student Success Support
                </CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive guidance through personalized mentoring and
                  professional development programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg text-gray-600">
                  <div>• Career Guidance</div>
                  <div>• Academic Support</div>
                  <div>• Mental Health</div>
                </div>
              </CardContent>
            </Card>

            <Card className="">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-watney-blue-primary">
                  Global Education Network
                </CardTitle>
                <CardDescription className="text-lg">
                  Connecting students with worldwide opportunities through
                  partnerships and international programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg text-gray-600">
                  <div>• Study Abroad</div>
                  <div>• Exchange Programs</div>
                  <div>• Global Partnerships</div>
                </div>
              </CardContent>
            </Card>

            <Card className="">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-watney-blue-primary">
                  Professional Certification Hub
                </CardTitle>
                <CardDescription className="text-lg">
                  Industry-recognized certifications and professional
                  development programs for career advancement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg text-gray-600">
                  <div>• Industry Certifications</div>
                  <div>• Skill Assessments</div>
                  <div>• Career Placement</div>
                </div>
              </CardContent>
            </Card>

            <Card className="">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-watney-blue-primary">
                  Skills Development Lab
                </CardTitle>
                <CardDescription className="text-lg">
                  Hands-on learning experiences with cutting-edge technology and
                  practical skill development.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg text-gray-600">
                  <div>• Practical Training</div>
                  <div>• Lab Sessions</div>
                  <div>• Project Work</div>
                </div>
              </CardContent>
            </Card>

            <Card className="">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10  rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-watney-blue-primary">
                  Work Placement (Healthcare)
                </CardTitle>
                <CardDescription className="text-lg">
                  Connecting students with real-world opportunities to apply
                  their skills and gain industry experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-lg text-gray-600">
                  <div>• Internships</div>
                  <div>• Industry Projects</div>
                  <div>• Professional Networking</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* /ridoy */}
      {/* CTA Section */}
      <section className="py-20 bg-soft-sky">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient-watney">Educational Journey?</span>
          </h2>
          <p className="text-lg text-black mb-8  mx-auto">
            Join thousands of successful students who have transformed their
            careers through our comprehensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/courses"}>
              <Button
                size="lg"
                className="btn-watney-primary flex items-center justify-center"
              >
                Get Started Today
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button
                size="lg"
                variant="outline"
                className="btn-outline-watney flex items-center text-watney-blue-primary justify-center bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
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
              Why Choose{" "}
              <span className="text-gradient-watney">Watney College?</span>
            </h2>
            <p className="text-lg text-gray-600  mx-auto leading-relaxed">
              There are many reasons to choose us as your education partner.
              Here are the most important ones that set us apart.
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
              Building <span className="text-gradient-watney">Connections</span>{" "}
              & Advancing{" "}
              <span className="text-gradient-watney">Knowledge</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our thriving alumni network and explore cutting-edge research
              opportunities that shape the future of education.
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
            {/* Student Alumni Club Card */}
            <motion.div variants={cardVariants}>
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-primary/5 to-purple-50" />

                {/* Content */}
                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Icon Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Network className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        Student Alumni Club
                      </h3>
                      <p className="text-primary font-medium">
                        Connect • Network • Thrive
                      </p>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/alumni.jpg"
                      alt="User Icon"
                      width={600}
                      height={28}
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Join our exclusive alumni community of over 15,000+
                      graduates worldwide. Access mentorship programs,
                      networking events, and career advancement opportunities.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Global networking events & meetups
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Exclusive job board & career services
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Mentorship & professional development
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  {/* <Button className="w-full btn-watney-primary group-hover:shadow-lg transition-shadow duration-300">
                    Join Alumni Network
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>

            {/* Research At Watney College Card */}
            <motion.div variants={cardVariants}>
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-primary/5 to-purple-50" />

                {/* Content */}
                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Icon Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FlaskConical className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        Research At Watney College
                      </h3>
                      <p className="text-primary  font-medium">
                        Discover • Innovate • Impact
                      </p>
                    </div>
                  </div>

                  <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/research.jpg"
                      alt="User Icon"
                      width={600}
                      height={28}
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Explore groundbreaking research initiatives across
                      multiple disciplines. Join faculty-led projects that
                      address real-world challenges and contribute to global
                      knowledge advancement.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Interdisciplinary research programs
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        State-of-the-art research facilities
                      </li>
                      <li className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        Publication & conference opportunities
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  {/* <Button className="w-full btn-watney-primary group-hover:shadow-lg transition-shadow duration-300">
                    Explore Research
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Student Engagement Section */}
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
            {/* <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium tracking-wide">
                Student Life & Engagement
              </span>
            </motion.div> */}
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Beyond the <span className="text-gradient-watney">Classroom</span>
            </h2>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed">
              Discover opportunities to grow, connect, and make a meaningful
              impact through our comprehensive student engagement programs.
            </p>
          </motion.div>

          {/* 3-Grid Layout */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Student Associate Card */}
            <motion.div variants={cardVariants}>
              <Card className="group relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    Student Associate
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    Become a student representative and gain valuable leadership
                    experience while representing your peers' interests and
                    contributing to college governance.
                  </p>

                  {/* Stats */}
                  <div className="bg-primary/5 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Active Members</span>
                      <span className="font-bold text-primary">250+</span>
                    </div>
                  </div>

                  {/* CTA */}
                  {/* <Button
                    variant="outline"
                    className="w-full btn-outline-watney"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>

            {/* News and Events Card */}
            <motion.div variants={cardVariants}>
              <Card className="group relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    News & Events
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    Stay connected with campus life through our vibrant calendar
                    of academic seminars, cultural celebrations, workshops, and
                    networking events.
                  </p>

                  {/* Upcoming Event Preview */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                    <p className="text-sm font-medium text-orange-800">
                      Next Event
                    </p>
                    <p className="text-xs text-orange-600">
                      Annual Career Fair - March 15
                    </p>
                  </div>

                  {/* CTA */}
                  {/* <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                  >
                    View Calendar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>

            {/* Community Project Engagement Card */}
            <motion.div variants={cardVariants}>
              <Card className="group relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    Community Project Engagement
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    Make a real difference through volunteer opportunities,
                    social impact projects, and community partnerships that
                    create positive change locally and globally.
                  </p>

                  {/* Impact Stats */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-green-600">120+</div>
                        <div className="text-gray-600">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">2,500</div>
                        <div className="text-gray-600">Hours</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  {/* <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-50"
                  >
                    Get Involved
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
    </div>
  );
}
