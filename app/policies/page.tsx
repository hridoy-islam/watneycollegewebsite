"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Users,
  GraduationCap,
  Calendar,
  AlertCircle,
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
  const policies = [
    {
      title: "Academic Integrity Policy",
      icon: ShieldCheck,
      file: "/policies/academic-integrity.pdf",
    },
    {
      title: "Student Code of Conduct",
      icon: Users,
      file: "/policies/code-of-conduct.pdf",
    },
    {
      title: "Attendance & Punctuality Policy",
      icon: Calendar,
      file: "/policies/attendance.pdf",
    },
    {
      title: "Assessment & Grading Policy",
      icon: FileText,
      file: "/policies/assessment-grading.pdf",
    },
    {
      title: "Health & Safety Policy",
      icon: ShieldCheck,
      file: "/policies/health-safety.pdf",
    },
    {
      title: "Privacy & Data Protection Policy",
      icon: ShieldCheck,
      file: "/policies/privacy.pdf",
    },
    {
      title: "Accessibility Statement",
      icon: GraduationCap,
      file: "/policies/accessibility.pdf",
    },
    {
      title: "Complaints Procedure",
      icon: AlertCircle,
      file: "/policies/complaints.pdf",
    },
    // Add more policies here as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden ">
          <div className="container mx-auto relative  text-center">
            <FileText className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Watney College <span className="text-watney-blue-primary">Policies</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-2xl">
              Download official college policies. All documents are in PDF format.
            </p>
          </div>
        </section>

        {/* Policies List */}
        <section className="py-12 bg-gray-50 ">
          <div className="container mx-auto px-4 ">
            <motion.div
              className="mx-auto text-center mb-10"
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

            <ul className="space-y-3 relative z-50">
              {policies.map((policy, index) => {
                const Icon = policy.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="z-50 hover:cursor-pointer"
                  >
                    <a
                      // href={policy.file}
                      // download
                      className="flex items-center justify-between w-full p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-watney-blue-primary/30 transition-colors group  group-hover:cursor-pointer z-[9999]"
                    >
                      <div className="flex items-center gap-4 z-[9999]">
                        <div className="w-10 h-10 rounded-lg bg-watney-blue-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-watney-blue-primary" />
                        </div>
                        <span className="font-medium text-gray-900 group-hover:text-watney-blue-primary">
                          {policy.title}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-watney-blue-primary transition-colors" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}