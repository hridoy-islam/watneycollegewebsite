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
  Flame,
  ShieldCheck,
  MapPin,
  Users,
  FileText,
  AlertTriangle,
  ExternalLink,
  Info,
} from "lucide-react";

export default function FireSafetyStatementPage() {
  const fireSafetyMeasures = [
    {
      icon: ShieldCheck,
      title: "Regular Fire Drills",
      description: "Mandatory drills held each term to ensure all students and staff know evacuation routes and procedures.",
    },
    {
      icon: Flame,
      title: "Fire Detection Systems",
      description: "Automatic smoke/heat detectors, manual call points, and alarm systems installed throughout all buildings.",
    },
    {
      icon: MapPin,
      title: "Clear Evacuation Routes",
      description: "Well-marked exits, unobstructed pathways, and illuminated signage for safe egress during emergencies.",
    },
    {
      icon: Users,
      title: "Trained Fire Wardens",
      description: "Designated staff trained in fire safety, evacuation coordination, and use of firefighting equipment.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessments",
      description: "Annual fire risk assessments conducted and reviewed by certified safety officers.",
    },
    {
      icon: FileText,
      title: "Fire Safety Policy",
      description: "Comprehensive procedures aligned with the Regulatory Reform (Fire Safety) Order 2005.",
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
            <Flame className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Fire Safety <span className="text-watney-blue-primary">Statement</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watney College is committed to maintaining the highest standards of fire safety 
              to protect our students, staff, visitors, and campus facilities at all times.
            </p>
          </div>
        </section>

        {/* Compliance Notice */}
        <section className="py-6 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="font-medium">
              🔥 <strong>Compliant with:</strong> The Regulatory Reform (Fire Safety) Order 2005 | Responsible Person: Estates & Safety Manager
            </p>
          </div>
        </section>



        {/* Fire Safety Measures */}
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
                Our Fire Safety Commitments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proactive measures to prevent, detect, and respond to fire risks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fireSafetyMeasures.map((measure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-gray-200 hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-start gap-4 pb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
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

       

        {/* Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center p-8 bg-white rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Info className="w-12 h-12 text-watney-blue-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Fire Safety Documentation
              </h3>
              <p className="text-gray-600 mb-6">
                Access our full fire risk assessments, evacuation plans, and safety policies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-primary hover:bg-primary-700">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Download Fire Safety Policy (PDF)
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact" className="flex items-center">
                    Contact Safety Officer
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