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
      {/* /ridoy */}
      {/* CTA Section */}
      <section className="py-20 bg-soft-sky">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient-watney">Educational Journey?</span>
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
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
    </div>
  );
}
