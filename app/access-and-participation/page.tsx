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
  Users,
  
  Handshake,
  GraduationCap,
  Award,
  TrendingUp,
  FileText,
  ExternalLink,
  Accessibility,
} from "lucide-react";

export default function AccessAndParticipationPage() {
  const commitmentPoints = [
    {
      icon: Accessibility,
      title: "Fair Access",
      description: "We actively remove barriers to higher education for underrepresented and disadvantaged groups.",
    },
    {
      icon: Handshake,
      title: "Outreach Programs",
      description: "Partnerships with schools and communities to inspire and prepare future students from all backgrounds.",
    },
    {
      icon: GraduationCap,
      title: "Inclusive Curriculum",
      description: "Our courses are designed to support diverse learning needs and cultural perspectives.",
    },
    {
      icon: Award,
      title: "Financial Support",
      description: "Scholarships, bursaries, and emergency funds to ensure financial circumstances aren’t a barrier.",
    },
    {
      icon: TrendingUp,
      title: "Student Success",
      description: "Targeted academic and wellbeing support to improve retention and achievement for all.",
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "We celebrate diversity and foster an inclusive environment where every voice matters.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[328px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[328px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Users className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Access and{" "}
              <span className="text-watney-blue-primary">Participation Statement</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watney College is committed to ensuring that all students regardless of background, 
              identity, or circumstance have equal opportunity to access, succeed in, and benefit from 
              high-quality education.
            </p>
          </div>
        </section>


        {/* Commitment Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Commitments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These pillars guide our strategy to widen participation and enhance student success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitmentPoints.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-start gap-4 pb-2">
                      <div className="w-10 h-10 rounded-lg bg-watney-blue-primary/10 flex items-center justify-center mt-1">
                        <item.icon className="w-5 h-5 text-watney-blue-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center p-8 bg-ocean-breeze/10 rounded-2xl border border-ocean-breeze/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FileText className="w-12 h-12 text-watney-blue-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Access and Participation Statement
              </h3>
              <p className="text-gray-600 mb-6">
                Read our complete, OfS-approved plan detailing targets, activities, and investment in student success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="btn-watney-primary hover:btn-watney-primary/90">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Download Full Plan (PDF)
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact" className="flex items-center text-primary">
                    Contact Our Access Team
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