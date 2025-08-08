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

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partner with <span className="text-pink-200">Watney College</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100  mx-auto leading-relaxed">
              Join our network of trusted partners and help us empower students across London and beyond.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="#affiliates">
                Explore Our Affiliates <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Affiliate List */}
      <section id="affiliates" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/15 text-primary">Our Affiliates</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Trusted Partners in Education & Healthcare
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Watney College collaborates with leading organizations to provide comprehensive support to our students.
            </p>
          </motion.div>

          {/* Table Layout */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-bold uppercase">Affiliate Name</th>
                  <th className="px-4 py-3 font-bold uppercase">Services Provided</th>
                  <th className="px-4 py-3 font-bold uppercase">Contact</th>
                </tr>
              </thead>
              <tbody>
                {/* Affiliate 1 */}
                <motion.tr
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="border-b border-gray-200"
                >
                  <td className="px-4 py-3">SMS</td>
                  <td className="px-4 py-3">Student Support Services</td>
                  <td className="px-4 py-3">
                    <a
                      href="mailto:sms@watneycollege.com"
                      className="text-primary hover:underline"
                    >
                      sms@watneycollege.com
                    </a>
                  </td>
                </motion.tr>

                {/* Affiliate 2 */}
                <motion.tr
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="border-b border-gray-200"
                >
                  <td className="px-4 py-3">Icare</td>
                  <td className="px-4 py-3">Healthcare Consultations</td>
                  <td className="px-4 py-3">
                    <a
                      href="mailto:icare@watneycollege.com"
                      className="text-primary hover:underline"
                    >
                      icare@watneycollege.com
                    </a>
                  </td>
                </motion.tr>

                {/* Affiliate 3 */}
                <motion.tr
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="border-b border-gray-200"
                >
                  <td className="px-4 py-3">Care Square</td>
                  <td className="px-4 py-3">Community Outreach Programs</td>
                  <td className="px-4 py-3">
                    <a
                      href="mailto:caresquare@watneycollege.com"
                      className="text-primary hover:underline"
                    >
                      caresquare@watneycollege.com
                    </a>
                  </td>
                </motion.tr>

                {/* Affiliate 4 */}
                <motion.tr
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="border-b border-gray-200"
                >
                  <td className="px-4 py-3">Medicare Link</td>
                  <td className="px-4 py-3">Medical Insurance Coordination</td>
                  <td className="px-4 py-3">
                    <a
                      href="mailto:medicarelink@watneycollege.com"
                      className="text-primary hover:underline"
                    >
                      medicarelink@watneycollege.com
                    </a>
                  </td>
                </motion.tr>

                {/* Affiliate 5 */}
                <motion.tr
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="border-b border-gray-200"
                >
                  <td className="px-4 py-3">Everycare Romford</td>
                  <td className="px-4 py-3">Local Healthcare Services</td>
                  <td className="px-4 py-3">
                    <a
                      href="mailto:everycareromford@watneycollege.com"
                      className="text-primary hover:underline"
                    >
                      everycareromford@watneycollege.com
                    </a>
                  </td>
                </motion.tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Become an Affiliate Today!
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Partner with Watney College to reach a growing community of students and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/become-an-affiliate">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white"
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