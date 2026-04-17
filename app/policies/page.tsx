"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Users,
  GraduationCap,
  Calendar,
  AlertCircle,
  AlertTriangle,
  BookOpen,
  Briefcase,
  CreditCard,
  FileCheck,
  HeartHandshake,
  Megaphone,
  PieChart,
  RefreshCw,
  Scale,
  ShieldAlert,
  Lock,
} from "lucide-react";

// Helper component for the arrow
const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function PoliciesPage() {
  const policyGroups = [
    {
      groupTitle: "Academic Policies",
      policies: [
        {
          title: "Academic Regulations",
          icon: BookOpen,
          href: "/policies/academic-regulations",
        },
        {
          title: "Student Engagement Strategies",
          icon: Users,
          href: "/policies/student-engagement-strategies",
        },
        {
          title: "Student Assessment Feedback Process",
          icon: FileText,
          href: "/policies/student-assessment-feedback-process",
        },
        {
          title: "Course Change and Closure Policy",
          icon: RefreshCw,
          href: "/policies/course-change-and-closure-policy",
        },
      ],
    },
    {
      groupTitle: "Complaints, Conduct, Safeguarding and Data",
      policies: [
        {
          title: "Complaint Policy and Process",
          icon: AlertCircle,
          href: "/policies/complaint-policy-and-process.pdf",
        },
        {
          title: "Safeguarding and Prevent Policy",
          icon: ShieldCheck,
          href: "/policies/safeguarding-and-prevent.pdf",
        },
        {
          title: "Whistleblowing Policy",
          icon: Megaphone,
          href: "/policies/whistleblowing-policy",
        },
        {
          title: "Anti-Bribery and Anti-Corruption Policy",
          icon: ShieldAlert,
          href: "/policies/anti-bribery-and-corruption.pdf",
        },
        {
          title: "Data Protection Policy",
          icon: Lock,
          href: "/policies/data-protection.pdf",
        },
        {
          title: "Equality, Diversity and Inclusion Policy",
          icon: Users,
          href: "/policies/equality-diversity-inclusion.pdf",
        },
        {
          title: "Information Accuracy and Completeness Policy",
          icon: FileCheck,
          href: "/policies/information-accuracy.pdf",
        },
      ],
    },
    {
      groupTitle: "Financial Policies",
      policies: [
        {
          title: "Tuition Fees Refund and Compensation Policy",
          icon: CreditCard,
          file: "/policies/tuition-fees-refund.pdf",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden ">
          <div className="container mx-auto relative text-center">
            <FileText className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Watney College{" "}
              <span className="text-watney-blue-primary">Policies</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-5xl">
              These policies govern the relationship between Watney College and
              its students. All prospective and current students should read
              these documents before and during enrolment. All documents are
              available as PDF downloads.
            </p>
          </div>
        </section>

        {/* Policies List */}
        <section className="py-12 bg-gray-50 ">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              className="mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Download Policies
              </h2>
              <p className="text-gray-600">
                Click any policy below to download the PDF.
              </p>
            </motion.div>

            <div className="space-y-12 relative z-50">
              {policyGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-4">
                  <motion.h3
                    className="text-xl font-bold text-gray-800 border-b pb-2 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {group.groupTitle}
                  </motion.h3>

                  <ul className="space-y-3">
                    {[...group.policies]
                      .sort((a, b) => a.title.localeCompare(b.title))
                      .map((policy, index) => {
                        const Icon = policy.icon;
                        return (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="z-50 hover:cursor-pointer"
                          >
                            <a
                              href={policy.href || policy.file}
                              {...(policy.file ? { download: true } : {})}
                              className="flex items-center justify-between w-full p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-watney-blue-primary/30 transition-colors group z-[9999]"
                            >
                              <div className="flex items-start md:items-center gap-4 z-[9999] pr-4">
                                <div className="w-10 h-10 mt-1 md:mt-0 rounded-lg bg-watney-blue-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-5 h-5 text-watney-blue-primary" />
                                </div>
                                <div className="flex flex-col text-left">
                                  <span className="font-medium text-gray-900 group-hover:text-watney-blue-primary transition-colors">
                                    {policy.title}
                                  </span>
                                  {policy.notice && (
                                    <span className="text-sm text-gray-500 mt-1 leading-relaxed">
                                      {policy.notice}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-watney-blue-primary transition-colors flex-shrink-0" />
                            </a>
                          </motion.li>
                        );
                      })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
