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
      {/* Header Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Accreditations & Partnerships
            </h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">
              Watney College is proud to be accredited by leading organizations,
              ensuring the quality and recognition of our programs.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="#accreditations">
                Explore Our Accreditations <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section id="accreditations" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Accreditation Card 1 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
                            className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl"

            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-2" /> Klaspad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Klaspad is a leading accreditation body that ensures educational
                  institutions meet high standards of quality and excellence.
                </CardDescription>
              </CardContent>
            </motion.div>

            {/* Accreditation Card 2 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
                            className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl"

            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-6 h-6 mr-2" /> ASIC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ASIC (Australian Securities and Investments Commission) ensures
                  compliance with financial regulations, providing trust and
                  security to students and professionals.
                </CardDescription>
              </CardContent>
            </motion.div>

            {/* Accreditation Card 3 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
                            className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl"

            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" /> ESB
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ESB (European Skills Body) recognizes institutions that provide
                  industry-relevant skills and qualifications.
                </CardDescription>
              </CardContent>
            </motion.div>

            {/* Accreditation Card 4 */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-2" /> Focus Award
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Focus Award is a prestigious recognition for institutions that
                  excel in student support and career readiness.
                </CardDescription>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer or CTA Section */}
      <section className="py-20 bg-foreground-100 text-primary text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Watney College?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              With our strong partnerships and accreditations, you can trust that
              you are receiving a world-class education.
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
  );
}