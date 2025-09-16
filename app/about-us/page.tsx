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
        <div className="absolute right-80 top-0 w-screen h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-80 top-0 w-screen h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-0  z-10"></div>
        
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
                <Badge className="mb-6 bg-primary/15 text-primary hover:bg-primary/10">
                  Who We Are
                </Badge>
                <h2 className="text-4xl  font-bold mb-6">
                  Empowering Futures{" "}
                  <span className="text-gradient-watney">
                    Through Education
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Watney College is a progressive institution dedicated to
                  providing exceptional education and training opportunities
                  that empower students to thrive in their chosen careers.
                  Located in the heart of London, we aim to deliver a
                  transformative learning experience that combines academic
                  rigor with practical skills to meet the demands of a rapidly
                  evolving global workforce.
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

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "ESB",
                  desc: "English for Speakers of Other Languages",
                },
                {
                  name: "Focus Awards",
                  desc: "Vocational & Technical Qualifications",
                },
                {
                  name: "ASIC",
                  desc: "Accreditation Service for International Schools",
                },
              ].map((accreditation, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">
                        {accreditation.name}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {accreditation.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 text-primary">
          <div className="container mx-auto px-4 space-y-8">
           

            {/* Vision Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center z-50">
              {/* Vision Content - Left */}
              <div className="space-y-6 z-50">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We aspire to become a leading higher education provider in
                  London, recognized for our student-centered approach and
                  innovative teaching methods. Through partnerships with
                  reputable universities, we aim to offer accredited degree
                  pathways and advanced professional qualifications that prepare
                  our students for success in a competitive global economy.
                </p>
              </div>

              {/* Vision Images - Right */}
              <div className="relative z-50">
                {/* Main large image */}
                <div className="relative">
                  <img
                    src="/vision.jpg"
                    alt="Graduates celebrating their success at Watney College"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Overlapping smaller image */}
                <div className="absolute -bottom-6 -left-6 w-48 h-32">
                  <img
                    src="/vision1.jpg"
                    alt="Students discussing future opportunities"
                    className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-white"
                  />
                </div>
              </div>
            </div>

             {/* Mission Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Mission Images - Left */}
              <div className="relative">
                {/* Main large image */}
                <div className="relative">
                  <img
                    src="/mission.jpg"
                     alt="Watney College students engaging in classroom learning"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Overlapping smaller image */}
                <div className="absolute -bottom-6 -right-6 w-48 h-32">
                  <img
                    src="/mission1.jpg"
                     alt="Group of students collaborating on a project"
                    className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-white"
                  />
                </div>
              </div>

              {/* Mission Content - Right */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Watney College, we believe that education is the key to
                  unlocking potential. Our mission is to empower individuals by
                  delivering high-quality, accessible education that nurtures
                  personal growth, cultivates critical thinking, and fosters
                  lifelong learning.
                </p>
              </div>
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
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Message From the Principal
                      </h3>
                      <blockquote className="text-gray-600 leading-relaxed space-y-4">
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
                          — Principal, Watney College
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
                  desc: "98% of our students achieve their academic or career goals.",
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
