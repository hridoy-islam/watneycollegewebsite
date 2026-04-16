"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, FileText, ExternalLink, CheckCircle2 } from "lucide-react";

export default function AccessAndParticipationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute right-[328px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[328px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Users className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Our Commitment to{" "}
              <span className="text-watney-blue-primary">
                Access and Participation
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Watney College is committed to making higher education accessible
              to all, regardless of background, identity or circumstance. We
              actively work to widen participation and support every student to
              succeed throughout their studies and beyond.
            </p>
          </div>
        </section>

        {/* Section 1: Content Left, Image Right */}
        <section className="py-16 bg-white relative ">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="z-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Who We Support
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We are committed to improving access and outcomes for students
                  from underrepresented groups, including:
                </p>
                <ul className="space-y-3">
                  {[
                    "Students from Black, Asian and Minority Ethnic communities",
                    "Mature students and working adults",
                    "Students from low-income households",
                    "Students with disabilities",
                    "Care leavers and estranged students",
                    "Refugees and asylum seekers",
                    "Students with specific learning difficulties",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-watney-blue-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] z-20">
                {/* Replace src with your actual image path */}
                <img
                  src="/com1.jpg"
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Image Left, Content Right */}
        <section className="py-16 bg-gray-50 relative ">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-[400px] z-20">
                {/* Replace src with your actual image path */}
                <img
                  src="/com2.jpg"
                  alt="Student support session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2 z-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Support You
                </h2>
                <ul className="space-y-4">
                  {[
                    "Personal tutoring and one-to-one academic guidance",
                    "Access to our WCSMS (VLE)",
                    "Mental health and wellbeing support",
                    "Mitigating circumstances process",
                    "Flexible delivery models including blended and in-person learning",
                    "Employer-aligned programmes supporting workforce progression",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-watney-blue-primary mt-2 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Content Left, Image Right */}
        <section className="py-16 bg-white relative ">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="z-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Access, Success and Progression
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We monitor student data to identify and close participation
                  and attainment gaps. Our goal is to ensure every student
                  regardless of background, has an equal opportunity to access,
                  succeed in and progress from their studies at Watney College.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] z-20">
                {/* Replace src with your actual image path */}
                <img
                  src="/com3.jpg"
                  alt="Data and progression"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Action Section - Just ONE Button */}
        <section className="py-16 bg-ocean-breeze/30 relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FileText className="w-12 h-12 text-watney-blue-primary mx-auto mb-4" />

              <div className="mb-8">
                <p className="text-gray-500 italic">
                  Last reviewed: November 2025 | Next review: November 2026
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-watney-primary hover:btn-watney-primary/90 text-md sm:text-lg h-auto py-4 px-6 w-full sm:w-auto"
                >
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-center justify-center whitespace-normal h-auto"
                  >
                    Download the full Access and Participation Statement (PDF)
                    <ExternalLink className="w-5 h-5 ml-2 flex-shrink-0" />
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
