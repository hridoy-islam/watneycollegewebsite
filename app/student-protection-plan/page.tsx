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
  AlertTriangle,
  FileText,
  Users,
  BookOpen,
  Calendar,
  ExternalLink,
  Info,
} from "lucide-react";

export default function StudentProtectionPlanPage() {
  const protectionMeasures = [
    {
      icon: ShieldCheck,
      title: "Continuity of Learning",
      description: "Guaranteed teaching delivery through alternative providers or remote methods if disruption occurs.",
    },
    {
      icon: BookOpen,
      title: "Qualification Assurance",
      description: "Clear pathways to complete your award or receive a comparable qualification if your course closes.",
    },
    {
      icon: Calendar,
      title: "Fee Protection",
      description: "Tuition fee refunds or transfers if you cannot complete your course due to provider failure.",
    },
    {
      icon: Users,
      title: "Support During Transitions",
      description: "Dedicated advisors to help you transfer credits, access records, and continue your education.",
    },
    {
      icon: AlertTriangle,
      title: "Early Warning System",
      description: "Proactive monitoring of risks to teaching delivery and swift communication of any issues.",
    },
    {
      icon: FileText,
      title: "Transparent Communication",
      description: "Clear updates via email, portal, and SMS in the event of significant course changes or closures.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ShieldCheck className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Student Protection <span className="text-watney-blue-primary">Plan</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Watney College, your education and investment are safeguarded. 
              Our Student Protection Plan ensures you can complete your studies 
              even in the unlikely event of significant disruption or course closure.
            </p>
          </div>
        </section>

       

        {/* Protection Measures Grid */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How We Protect You
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key safeguards embedded in our institutional planning and delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protectionMeasures.map((measure, index) => (
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
                        <measure.icon className="w-5 h-5 text-watney-blue-primary" />
                      </div>
                      <CardTitle className="text-lg">{measure.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{measure.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Plan & Contact */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center p-8 bg-ocean-breeze/10 rounded-2xl border border-ocean-breeze/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Info className="w-12 h-12 text-watney-blue-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Full Student Protection Plan
              </h3>
              <p className="text-gray-600 mb-6">
                Review our complete, OfS-approved Student Protection Plan including risk assessments, 
                contingency arrangements, and your rights as a learner.
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
                    Speak to Student Services
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