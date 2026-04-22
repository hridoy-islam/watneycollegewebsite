"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Award,
  Star,
  CheckCircle,
  BookOpen,
  Building,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Info,
  Mail,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
// Animation variants
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.5,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden ">
        <div className="absolute right-[350px]  w-screen h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[350px] top-0 w-screen h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-0  z-10"></div>

        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <BookOpen className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              About{" "}
              <span className="text-watney-blue-primary">Watney College</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed  mx-auto">
              A progressive institution in the heart of London, dedicated to
              empowering students through exceptional education and practical
              career-focused training.
            </p>
          </div>
        </section>

        {/* Introduction */}
        {/* Introduction with Image */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left: Text Content */}
              <div className="z-50">
                <h2 className="text-4xl  font-bold mb-6">
                  About <span className="text-gradient-watney">Us</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Watney College is a progressive institution dedicated to
                  delivering positive outcomes for students through exceptional
                  education and training opportunities at both Further and
                  Higher Education levels. Our mission is to empower students to
                  thrive in their chosen careers while meeting the needs of
                  local employers. Located in the heart of London, we offer
                  excellent teaching across a diverse range of higher education
                  programmes. We are committed to providing a transformative
                  learning experience that combines academic rigor with
                  practical skills, preparing students to succeed in a rapidly
                  evolving global workforce. Watney College is a private limited
                  company (Company No. 12858207) registered in England and
                  Wales.
                </p>
              </div>

              {/* Right: Image */}
              <div className="relative z-50">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/about.jpg"
                    alt="Students collaborating at Watney College"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-16 bg-white z-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Recognized{" "}
                <span className="text-gradient-watney">Accreditations</span>
              </h2>
              <p className="text-gray-600 text-lg mx-auto">
                Our programs are accredited by respected awarding bodies,
                ensuring quality and global recognition.
              </p>
            </motion.div>

            <div className="">
              <div className="container mx-auto px-4 z-50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-50"
                >
                  {[
                    // {
                    //   title: "Klaspad",
                    //   logo: "/klaspad.png",
                    //   link: "https://system.klaspad.com/login",
                    //   description:
                    //     "Klaspad is a leading accreditation body that ensures educational institutions meet high standards of quality and excellence.",
                    // },
                    {
                      title: "ASIC",
                      logo: "/asic.svg",
                      link: "https://www.asic.org.uk/",
                      description:
                        "The Accreditation Service for International Schools, Colleges, and Universities (ASIC) is a UK-based, internationally recognized quality assurance body that accredits private post-secondary institutions globally",
                    },
                    {
                      title: "ESB",
                      logo: "/esb.png",
                      link: "https://esbuk.org/web/",
                      description:
                        "English Speaking Board recognizes institutions that provide industry-relevant skills and qualifications. ESB is an Ofqual-regulated awarding organisation specialising in spoken English qualifications and communication skills.",
                    },
                    {
                      title: "Focus Award",
                      logo: "/focus-award.png",
                      link: "https://focusawards.org.uk/",
                      description:
                        "Focus Awards is a regulated awarding organisation delivering qualifications in health, social care, business and education sectors. It is regulated by Ofqual in England",
                    },
                    {
                      title: "NQual",
                      logo: "/nqual.png",
                      link: "https://nqual.com",
                      description:
                        "NQual provides high-quality qualifications and assessments designed to meet the needs of learners and help them achieve their potential, both professionally and personally.",
                    },
                    {
                      title: "ATHE",
                      logo: "/SVG.svg",
                      link: "https://athe.co.uk",
                      description:
                        "ATHE is a global awarding organisation regulated by Ofqual and other UK and international regulators since 2011. Working with 220 centres in over 35 countries to complement our strong brand presence in the UK.",
                    },
                  ].map((acc, index) => (
                    <motion.div
                      key={acc.title}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex z-50 border border-gray-200 rounded-xl"
                    >
                      <a
                        href={acc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full h-full"
                      >
                        {/* Logo */}
                        <div className="mb-4 flex items-center justify-center">
                          <div
                            className={`relative ${
                              acc.title === "ESB" ? "w-64 h-28" : "w-32 h-20"
                            }`}
                          >
                            <Image
                              src={acc.logo}
                              alt={`${acc.title} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Title */}
                        {/* <CardHeader>
                                  <CardTitle className="text-xl text-watney-blue-primary text-center mb-3">
                                    {acc.title}
                                  </CardTitle>
                                </CardHeader> */}

                        {/* Description */}
                        <CardContent className="flex-grow">
                          <CardDescription className="text-gray-700 text-base text-center">
                            {acc.description}
                          </CardDescription>
                        </CardContent>

                        {/* Learn More Button */}
                        <div className="mt-4 flex justify-center">
                          <Button>
                            Read More
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Status Section */}
        <section className="py-16  z-50">
          <div className="container mx-auto ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-t-4 border-watney-blue-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-6 h-6 text-watney-blue-primary" />
                    <CardTitle className="text-2xl font-bold">
                      Regulatory Status
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    
                    <p>
                      We are accredited by{" "}
                      <span className="font-semibold text-gray-900">ASIC</span>{" "}
                      and deliver regulated qualifications through{" "}
                      <span className="font-semibold text-gray-900">NQual</span>{" "}
                      and
                      <span className="font-semibold text-gray-900">
                        {" "}
                        ATHE
                      </span>{" "}
                      awarding bodies, both of which are regulated by{" "}
                      <span className="font-semibold text-gray-900">
                        Ofqual
                      </span>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 sm:py-20 text-primary">
          <div className="container mx-auto px-4 space-y-16">
            {/* Vision Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Vision Images - Top on small screens */}
              <div className="order-1 lg:order-2 relative">
                {/* Main large image */}
                <div className="relative z-50">
                  <img
                    src="/vision.jpg"
                    alt="Graduates celebrating their success at Watney College"
                    className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Overlapping smaller image */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 z-50">
                  <img
                    src="/vision1.jpg"
                    alt="Students discussing future opportunities"
                    className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-white z-50"
                  />
                </div>
              </div>

              {/* Vision Content */}
              <div className="order-2 lg:order-1 space-y-4 text-center lg:text-left z-50">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                  Our vision is for an integrated employment and skills system
                  for the region, through which we can stimulate economic
                  growth, deliver better outcomes for residents and businesses,
                  and create healthier thriving communities.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Mission Images - Top on small screens */}
              <div className="order-1 relative">
                {/* Main large image */}
                <div className="relative">
                  <img
                    src="/mission.jpg"
                    alt="Watney College students engaging in classroom learning"
                    className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Overlapping smaller image */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32">
                  <img
                    src="/mission1.jpg"
                    alt="Group of students collaborating on a project"
                    className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-white"
                  />
                </div>
              </div>

              {/* Mission Content */}
              <div className="order-2 space-y-4 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                  To empower individuals through high-quality, accessible
                  education that promotes personal growth, cultivates critical
                  thinking, and inspires lifelong learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-watney-blue-primary">Objectives</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto max-w-3xl">
                Guiding our mission to deliver high-quality, employer-aligned
                education in line with UK Higher Education standards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "To be a recognized Institution to provide Higher Education as per the UK Higher Education regulator expected standards.",
                "Offer programmes that address employer and economic needs by delivering targeted interventions to meet short to medium-term demand.",
                "Deliver flexible short training programmes to employers based on sector 'in-demand' skills needs.",
                "Build strong and inclusive communities to support local residents into employment and career progression.",
                "Encourage collaboration between providers, employers, and stakeholders to create a cohesive approach to skills development and employment support.",
              ].map((objective, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  className="z-[50]"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="h-full border border-gray-200 hover:shadow-md transition-shadow ">
                    <CardContent className="pt-6 pb-6 px-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-watney-blue-primary" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {objective}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-primary shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                        Message From the Principal
                      </h3>

                      <blockquote className="text-gray-600 leading-relaxed space-y-4 text-sm sm:text-base">
                        <p>
                          On behalf of Watney College, I’d like to welcome all
                          who are planning to enrich their professional and
                          academic skills. We are committed to supporting
                          ambitious learners in developing the knowledge and
                          expertise needed to achieve their desired goals.
                        </p>
                        <p>
                          We understand that returning to education can be a
                          challenge — many people step away from learning due to
                          circumstances beyond their control. Watney College is
                          here to offer a supportive, inclusive platform that
                          encourages students to re-engage with higher
                          education, advance in their careers, or finally
                          achieve that dream they’ve always held.
                        </p>
                        <p className="font-medium text-gray-800">
                          — Dr. S. Alam, Principal, Watney College
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 ">
          <div className="container text-white ">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-4">
                What Sets Us{" "}
                <span className="text-gradient-watney">Apart?</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto">
                We combine academic excellence with real-world readiness to
                ensure every student thrives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Career-Focused Curriculum",
                  desc: "Programs designed with industry input to ensure relevance and employability.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Personalized Support",
                  desc: "Dedicated advisors and mentors to guide you at every step of your journey.",
                },
                {
                  icon: <Building className="w-6 h-6" />,
                  title: "London Advantage",
                  desc: "Study in one of the world’s most dynamic cities with endless opportunities.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Flexible Learning",
                  desc: "Online, hybrid, and in-person options to fit your lifestyle.",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "High Success Rate",
                  desc: "Strong success rate in student outcomes",
                },
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Progress to Degrees",
                  desc: "Progress to bachelor's and master's programs through university links.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="z-50"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-white/20 hover:border-white h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 text-watney-blue-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-black group-hover:text-watney-blue-primary">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20  bg-soft-sky text-black text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Watney College?
              </h2>
              <p className="text-xl mb-8 text-gray-600">
                With our strong partnerships and accreditations, you can trust
                that you are receiving a world-class education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="default"
                  className="border-white bg-primary hover:bg-primary/90 text-white "
                  asChild
                >
                  <Link href="/contact">
                    Contact Us <Info className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
