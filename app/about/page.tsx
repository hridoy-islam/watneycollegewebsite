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
      <section className="relative py-20 bg-ocean-breeze overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Mail className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            About{" "}
            <span className="text-watney-blue-primary">Watney College</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
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
            <div>
              <Badge className="mb-6 bg-primary/15 text-primary hover:bg-primary/10">
                Who We Are
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Empowering Futures Through Education
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Watney College is a progressive institution dedicated to
                providing exceptional education and training opportunities that
                empower students to thrive in their chosen careers. Located in
                the heart of London, we aim to deliver a transformative learning
                experience that combines academic rigor with practical skills to
                meet the demands of a rapidly evolving global workforce.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recognized <span className="text-primary">Accreditations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our programs are accredited by respected awarding bodies, ensuring
              quality and global recognition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "ESB", desc: "English for Speakers of Other Languages" },
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
                    <CardDescription>{accreditation.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-tr from-primary to-primary/60 text-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Vision */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-xl shadow-md h-full" // ← Added h-full
            >
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-primary leading-relaxed">
                We aspire to become a leading higher education provider in
                London, recognized for our student-centered approach and
                innovative teaching methods. Through partnerships with reputable
                universities, we aim to offer accredited degree pathways and
                advanced professional qualifications that prepare our students
                for success in a competitive global economy.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-xl shadow-md h-full" // ← Added h-full
            >
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-primary leading-relaxed">
                At Watney College, we believe that education is the key to
                unlocking potential. Our mission is to empower individuals by
                delivering high-quality, accessible education that nurtures
                personal growth, cultivates critical thinking, and fosters
                lifelong learning.
              </p>
            </motion.div>
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
                        On behalf of Watney College, I’d like to welcome all who
                        are planning to enrich their professional and academic
                        skills. We are committed to supporting ambitious
                        learners in developing the knowledge and expertise
                        needed to achieve their desired goals.
                      </p>
                      <p>
                        We understand that returning to education can be a
                        challenge — many people step away from learning due to
                        circumstances beyond their control. Watney College is
                        here to offer a supportive, inclusive platform that
                        encourages students to re-engage with higher education,
                        advance in their careers, or finally achieve that dream
                        they’ve always held.
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
      <section className="py-20 bg-gradient-to-tr from-primary to-primary/80">
        <div className="container text-white ">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-foreground-200/20 text-white mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Sets Us Apart?
            </h2>
            <p className="text-xl text-gray-600 mx-auto">
              We combine academic excellence with real-world readiness to ensure
              every student thrives.
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
                desc: "98% of our graduates achieve their academic or career goals.",
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Pathways to Degrees",
                desc: "Progress to bachelor's and master's programs through university links.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-white/20 hover:border-white h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white/10 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-foreground-100 text-primary text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Join a growing community of learners transforming their futures
              with Watney College.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/courses">
                  Explore Our Courses <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white  hover:bg-white text-primary"
                asChild
              >
                <Link href="/contact">
                  Contact Admissions <Info className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
