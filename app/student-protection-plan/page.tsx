"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  FileText,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export default function StudentProtectionPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute right-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ShieldCheck className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Student Protection{" "}
              <span className="text-watney-blue-primary">Plan</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Watney College is committed to protecting your studies. This plan
              sets out what we will do to ensure you can complete your programme
              if something significant disrupts your education.
            </p>
          </div>
        </section>

        {/* Section 1: Content Left, Image Right */}
        <section className="py-16 bg-white relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What This Plan Covers
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  This plan applies to all students enrolled at Watney College,
                  regardless of how your studies are funded. It covers:
                </p>
                <ul className="space-y-3">
                  {[
                    "Programme discontinuation",
                    "Loss of awarding body approval",
                    "Campus closure",
                    "Financial or regulatory disruption",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-watney-blue-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                {/* Replace src with your actual image path */}
                <img
                  src="/st1.jpg"
                  alt="Plan coverage details"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Image Left, Content Right */}
        <section className="py-16 bg-gray-50 relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg h-[400px]">
                {/* Replace src with your actual image path */}
                <img
                  src="/st2.jpg"
                  alt="Student support and contingency"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  If Something Goes Wrong
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      You will be able to finish your studies
                    </h3>
                    <p className="text-gray-600">
                      If your programme is discontinued, we will put in place a
                      teach-out arrangement so you can complete your
                      qualification.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      We will help you transfer if needed
                    </h3>
                    <p className="text-gray-600">
                      If completion at Watney College is not possible, we will
                      support you in transferring to an equivalent programme
                      elsewhere and cover reasonable costs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Content Left, Image Right */}
        <section className="py-16 bg-white relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Rights and Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      You may be entitled to compensation
                    </h3>
                    <p className="text-gray-600">
                      Where disruption causes you additional expense, you may be
                      eligible for compensation under our Tuition Fees Refund
                      and Compensation Policy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      We will keep you informed
                    </h3>
                    <p className="text-gray-600">
                      Any significant changes affecting your studies will be
                      communicated to you promptly through your college portal
                      and email.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      You have the right to complain
                    </h3>
                    <p className="text-gray-600">
                      If you are unhappy with how a situation has been handled,
                      you can raise a formal complaint. If unresolved
                      internally, you may refer your case to the Office of the
                      Independent Adjudicator for Higher Education at{" "}
                      <a
                        href="http://www.oiahe.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-watney-blue-primary hover:underline"
                      >
                        www.oiahe.org.uk
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                {/* Replace src with your actual image path */}
                <img
                  src="/st3.jpg"
                  alt="Information sharing"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Risk Assessment Table */}
        <section className="py-16 bg-gray-50 relative z-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Risk Assessment
              </h2>
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200 text-gray-800">
                      <th className="p-4 font-bold border-r border-gray-200 w-1/3">
                        Risk
                      </th>
                      <th className="p-4 font-bold border-r border-gray-200 w-1/4">
                        Likelihood
                      </th>
                      <th className="p-4 font-bold w-5/12">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Programme closure
                      </td>
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Low
                      </td>
                      <td className="p-4 text-gray-700">
                        Teach-out arrangements
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Loss of awarding body approval
                      </td>
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Low
                      </td>
                      <td className="p-4 text-gray-700">
                        Alternative awarding body arrangements
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Loss of key academic staff
                      </td>
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Medium
                      </td>
                      <td className="p-4 text-gray-700">
                        Associate lecturer pool
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50/50">
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Financial instability
                      </td>
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Very Low
                      </td>
                      <td className="p-4 text-gray-700">
                        Conservative financial planning and reserves
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Campus closure
                      </td>
                      <td className="p-4 border-r border-gray-200 text-gray-700">
                        Very Low
                      </td>
                      <td className="p-4 text-gray-700">
                        Alternative delivery arrangements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Action Section - Just ONE Button */}
        <section className="py-16 bg-white relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center p-8 bg-ocean-breeze/10 rounded-2xl border border-ocean-breeze/20"
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
                    href="/Student Protection Plan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-center justify-center whitespace-normal h-auto"
                  >
                    Download the full Student Protection Plan (PDF)
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
