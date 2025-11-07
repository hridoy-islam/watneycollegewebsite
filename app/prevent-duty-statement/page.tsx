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
  Users,
  BookOpen,
  AlertTriangle,
  FileText,
  Handshake,
  ExternalLink,
  Info,
} from "lucide-react";

export default function PreventDutyStatementPage() {
  const preventCommitments = [
    {
      icon: ShieldCheck,
      title: "Safeguarding Responsibility",
      description: "We actively protect students from being drawn into terrorism or extremist ideologies.",
    },
    {
      icon: BookOpen,
      title: "Promoting Fundamental British Values",
      description: "Democracy, rule of law, individual liberty, and mutual respect are embedded in our curriculum and culture.",
    },
    {
      icon: Users,
      title: "Staff Training & Vigilance",
      description: "All staff receive annual Prevent awareness training and understand how to identify and report concerns.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "We assess and mitigate risks related to external speakers, events, and online content.",
    },
    {
      icon: Handshake,
      title: "Partnership with Authorities",
      description: "We work closely with local police, Channel panels, and safeguarding partners when concerns arise.",
    },
    {
      icon: BookOpen,
      title: "Open Dialogue & Critical Thinking",
      description: "We encourage respectful debate and equip students to challenge extremist narratives.",
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
              Prevent Duty <span className="text-watney-blue-primary">Statement</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watney College is committed to safeguarding our students and promoting an inclusive, 
              respectful environment that challenges all forms of extremism and radicalisation.
            </p>
          </div>
        </section>



        {/* Prevent Commitments */}
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
                Our Prevent Duty Commitments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                How we fulfill our legal and moral obligations to keep our community safe.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventCommitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-start gap-4 pb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mt-1">
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

        {/* Reporting Concerns */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="bg-blue-50 rounded-2xl p-8 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Reporting a Concern
              </h3>
              <p className="text-gray-700 mb-4">
                If you have concerns about a student’s vulnerability to radicalisation—or about extremist content—
                please report it immediately. All reports are treated with care and confidentiality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="border-blue-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-3">
                      <Users className="w-5 h-5 text-watney-blue-primary mr-2" />
                      <span className="font-semibold">Internal Report</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Speak to your tutor, the Safeguarding Team, or use our secure online form.
                    </p>
                    <Button variant="link" asChild className="p-0 h-auto mt-2">
                      <Link href="/safeguarding/report-concern">Report a Concern Online</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-blue-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-3">
                      <AlertTriangle className="w-5 h-5 text-watney-blue-primary mr-2" />
                      <span className="font-semibold">External Support</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Contact the national Anti-Terrorist Hotline or local police if urgent.
                    </p>
                    <p className="text-sm font-medium mt-1">Anti-Terrorist Hotline: <span className="text-watney-blue-primary">0800 789 321</span></p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

      
      </div>
    </div>
  );
}