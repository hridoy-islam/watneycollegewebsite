"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheck,
  FileText,
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  Building,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function PoliciesPage() {
  const policies = [
    {
      title: "Academic Integrity Policy",
      description: "Commitment to honesty, trust, fairness, respect, and responsibility in all academic work.",
      icon: ShieldCheck,
      href: "#academic-integrity",
    },
    {
      title: "Student Code of Conduct",
      description: "Guidelines for respectful behavior, community standards, and disciplinary procedures.",
      icon: Users,
      href: "#code-of-conduct",
    },
    {
      title: "Attendance & Punctuality",
      description: "Expectations for class participation, absence reporting, and consequences for non-compliance.",
      icon: Calendar,
      href: "#attendance",
    },
    {
      title: "Assessment & Grading",
      description: "Transparency in evaluation methods, grade appeals, and academic progress monitoring.",
      icon: FileText,
      href: "#assessment",
    },
    {
      title: "Health & Safety",
      description: "Protocols for campus safety, emergency response, and student well-being support.",
      icon: ShieldCheck,
      href: "#health-safety",
    },
    {
      title: "Privacy & Data Protection",
      description: "Compliance with GDPR/FERPA and handling of student personal information.",
      icon: ShieldCheck,
      href: "#privacy",
    },
    {
      title: "Accessibility Statement",
      description: "Commitment to inclusive education and reasonable accommodations for all students.",
      icon: GraduationCap,
      href: "#accessibility",
    },
    {
      title: "Complaints Procedure",
      description: "Fair process for raising concerns and resolving disputes with the institution.",
      icon: AlertCircle,
      href: "#complaints",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0  z-10"></div>
        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative z-10 text-center">
            <FileText className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Watney College <span className="text-watney-blue-primary">Policies</span>
            </h1>
            <p className="text-lg text-gray-600  mx-auto leading-relaxed">
              Our policies ensure a fair, safe, and supportive learning environment for all students, 
              staff, and partners. Transparency and accountability are at the heart of our institutional values.
            </p>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-gray-600  mx-auto">
                These policies reflect our dedication to academic quality, student welfare, 
                and regulatory compliance across all programs and services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 z-50">
              {policies.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="z-50"
                >
                  <Card className="h-full border-gray-200 hover:shadow-md transition-shadow z-50">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-watney-blue-primary/10 flex items-center justify-center mb-4">
                        <policy.icon className="w-6 h-6 text-watney-blue-primary" />
                      </div>
                      <CardTitle className="text-xl">{policy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {policy.description}
                      </CardDescription>
                      <Button variant="link" asChild className="p-0 h-auto font-medium">
                        <Link href={policy.href} className="flex items-center">
                          Read Policy
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            
          </div>
        </section>
      </div>
    </div>
  );
}

// Add this helper component if ArrowRight isn't already imported
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);