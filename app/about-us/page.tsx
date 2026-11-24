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
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-black">
              About{" "}
              <span className="text-watney-blue-primary">Watney College</span>
            </h1>
            <p className="text-lg text-black leading-relaxed  mx-auto">
              The UAE branch of Watney College Limited, United Kingdom, located
              in Dubai Knowledge Park and committed to vocational education,
              professional training and career-focused learning.
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
                <p className="text-lg text-black leading-relaxed">
                  Watney College Dubai is the UAE branch of Watney College
                  Limited, United Kingdom. Located in Dubai Knowledge Park, the
                  College is committed to delivering high-quality vocational
                  education, professional training and career-focused learning
                  opportunities. Our approach combines practical skills,
                  industry-relevant knowledge and supportive teaching to prepare
                  learners for the evolving needs of employers in the UAE and
                  beyond.
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Our Recognition and{" "}
                <span className="text-gradient-watney">
                  Educational Partnerships
                </span>
              </h2>
              <p className="text-black text-lg mx-auto max-w-4xl">
                Watney College Dubai is committed to quality education and
                responsible institutional partnerships. Details of awarding
                organisations and approved qualifications are provided only
                where the relevant arrangements and approvals apply to the Dubai
                campus.
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
                      heading: "UK Institutional Accreditation",
                      logo: "/asic.jpeg",
                      link: "https://www.asic.org.uk/",
                      description:
                        "Watney College UK holds accreditation from the Accreditation Service for International Schools, Colleges and Universities (ASIC). This accreditation relates to the UK institution and does not by itself constitute accreditation of the Dubai campus.",
                    },
                    {
                      title: "ESB",
                      heading: "English Language Learning",
                      logo: "/esb.png",
                      link: "https://esbuk.org/web/",
                      description:
                        "Our English-language tuition is designed to strengthen communication skills for academic, professional and everyday contexts. Any externally awarded qualification is identified separately and subject to applicable approval.",
                    },
                    {
                      title: "Focus Award",
                      heading: "Professional and Vocational Learning",
                      logo: "/focus-award.png",
                      link: "https://focusawards.org.uk/",
                      description:
                        "We support vocational learning and professional development in subjects relevant to learners and employers. The availability of specific qualifications depends on approval and programme arrangements.",
                    },
                    {
                      title: "NQual",
                      heading: "NQual",
                      logo: "/nqual.png",
                      link: "https://nqual.com",
                      description:
                        "NQual is a UK awarding organisation. Any NQual qualifications promoted for Watney College Dubai will be clearly identified and offered only where appropriate centre, qualification and regulatory approvals are in place.",
                    },
                    {
                      title: "ATHE",
                      heading: "ATHE",
                      logo: "/SVG.svg",
                      link: "https://athe.co.uk",
                      description:
                        "Watney College, London, UK holds accreditation from the ATHE. ATHE is a UK awarding organisation providing vocational and professional qualifications. The Dubai campus will publish information about ATHE programmes only where the relevant approval and delivery arrangements have been confirmed.",
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
                        <h3 className="text-xl font-bold text-black text-center mb-3">
                          {acc.heading}
                        </h3>

                        {/* Description */}
                        <CardContent className="flex-grow">
                          <CardDescription className="text-black text-base text-center">
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
                  <div className="space-y-4 text-black leading-relaxed">
                    
                    <p>
                      Watney College Limited operates in Dubai as a branch of
                      Watney College Limited, United Kingdom, under{" "}
                      <span className="font-semibold text-black">
                        Dubai Development Authority Commercial Licence No.
                        108243
                      </span>
                      . Its licensed business activity is{" "}
                      <span className="font-semibold text-black">
                        Specialized Professional Institute
                      </span>
                      . Educational activities and qualifications are subject
                      to the relevant approvals and requirements of the
                      competent authorities in Dubai.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-black">
                  Our Vision
                </h2>
                <p className="text-black leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
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
                <h2 className="text-3xl sm:text-4xl font-bold text-black">
                  Our Mission
                </h2>
                <p className="text-black leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
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
              <h2 className="text-4xl font-bold text-black mb-4">
                Our <span className="text-watney-blue-primary">Objectives</span>
              </h2>
              <p className="text-xl text-black mx-auto max-w-3xl">
                To provide practical, career-focused vocational education and
                professional training that responds to the needs of learners,
                employers and Dubai’s diverse economy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Educational Quality",
                  text: "To provide an accessible and supportive learning environment with clear learning outcomes, appropriate quality assurance and continuous improvement.",
                },
                {
                  title: "Employer Relevance",
                  text: "To develop vocational learning opportunities that address emerging workplace skills, professional development and changing industry requirements.",
                },
                {
                  title: "Professional Development",
                  text: "To offer relevant short courses and professional training that support career growth, lifelong learning and workforce development.",
                },
                {
                  title: "Inclusive Learning Community",
                  text: "Build an inclusive learning community that welcomes learners from diverse backgrounds and supports their personal development, employability and career progression.",
                },
                {
                  title: "Employer and Stakeholder Engagement",
                  text: "Encourage collaboration with employers, education providers and stakeholders to understand skills needs and strengthen opportunities for practical learning and professional development.",
                },
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
                        <div>
                          <h3 className="text-lg font-bold text-black mb-2">
                            {objective.title}
                          </h3>
                          <p className="text-black leading-relaxed">
                            {objective.text}
                          </p>
                        </div>
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
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                        Message From the Principal
                      </h3>

                      <blockquote className="text-black leading-relaxed space-y-4 text-sm sm:text-base">
                        <p>
                          Welcome to Watney College Dubai, the UAE branch of
                          Watney College, United Kingdom. Our aim is to create
                          an inclusive and academically supportive learning
                          environment where students and professionals can
                          strengthen their knowledge, develop practical skills
                          and pursue meaningful career goals.
                        </p>
                        <p>
                          Located in Dubai Knowledge Park, our College is
                          committed to professional education that connects
                          learning with the needs of an evolving international
                          workforce. We look forward to supporting your
                          learning journey.
                        </p>
                        <p className="font-medium text-black">
                          — Mahfuzur Rahman, PhD
                          <br />
                          Principal, Watney College Dubai
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
              <p className="text-xl text-black mx-auto">
                We combine academic excellence with real-world readiness to
                ensure every student thrives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building className="w-6 h-6" />,
                  title: "Dubai Advantage",
                  desc: "Study in Dubai Knowledge Park, an established education and professional development destination in one of the region’s most internationally connected cities.",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "Career-Focused Learning",
                  desc: "Our learning approach emphasises practical knowledge, workplace relevance and the skills needed for professional development.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Personalised Academic Support",
                  desc: "Learners receive guidance and support to help them make informed choices, build confidence and progress towards their learning goals.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Flexible Learning",
                  desc: "Face-to-face teaching and scheduled learning support designed around the requirements of each course. Additional delivery formats are offered only where available and approved.",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Learner Progress and Development",
                  desc: "Our focus is on clear learning objectives, regular feedback and continuous improvement to support meaningful learner progress.",
                },
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Career and Further Study Pathways",
                  desc: "Build foundational and professional skills that may support career development, further training or future study, subject to the entry requirements of receiving institutions.",
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
                      <p className="text-black text-lg">{feature.desc}</p>
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
              <p className="text-xl mb-8 text-black">
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
