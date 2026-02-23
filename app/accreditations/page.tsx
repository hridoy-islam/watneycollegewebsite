"use client";

import { motion } from "framer-motion";
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
  Award,
  Star,
  CheckCircle,
  BookOpen,
  Building,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Info,
  Handshake,
  BookCheck,
} from "lucide-react";
import Link from "next/link";

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

export default function AccreditationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[290px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[294px]  top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0  z-10"></div>
        {/* Header Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Handshake className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              <span className="text-watney-blue-primary">Accreditations</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mx-auto">
              Watney College is proud to be accredited by leading organizations,
              ensuring the quality and recognition of our programs.
            </p>
          </div>
        </section>

        {/* Accreditations Section */}
        <section id="accreditations" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 z-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-50"
            >
              {[
                {
                  title: "Klaspad",
                  logo: "/klaspad.png",
                  link: "https://system.klaspad.com/login",
                  description:
                    "Klaspad is a leading accreditation body that ensures educational institutions meet high standards of quality and excellence.",
                },
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
                    "English Speaking Board recognizes institutions that provide industry-relevant skills and qualifications.",
                },
                {
                  title: "Focus Award",
                  logo: "/focus-award.png",
                  link: "https://focusawards.org.uk/",
                  description:
                    "Focus Award is a prestigious recognition for institutions that excel in student support and career readiness.",
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
                  className="flex z-50"
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
        </section>

        {/* Footer or CTA Section */}
        {/* <section className="py-20  bg-soft-sky text-black text-center">
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
        </section> */}
      </div>
    </div>
  );
}
