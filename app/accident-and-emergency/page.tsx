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
  AlertTriangle,
  Phone,
  MapPin,
  
  Ambulance,
  ShieldCheck,
  Users,
  FileText,
  ExternalLink,
  BriefcaseMedical,
} from "lucide-react";

export default function AccidentAndEmergencyPage() {
  const emergencyContacts = [
    {
      title: "On-Campus Emergency",
      number: "020 7946 0123",
      description: "For immediate assistance within college premises",
      icon: Phone,
    },
    {
      title: "Medical Emergency",
      number: "999",
      description: "Call for ambulance, fire, or police (UK)",
      icon: Ambulance,
    },
    {
      title: "Non-Urgent Medical",
      number: "111",
      description: "NHS 24/7 advice line for health concerns",
      icon: BriefcaseMedical,
    },
    {
      title: "Security Office",
      number: "020 7946 0456",
      description: "Campus security (24/7 during term time)",
      icon: ShieldCheck,
    },
  ];

  const procedures = [
    {
      step: "1",
      title: "Ensure Safety",
      description: "Remove yourself or others from immediate danger if safe to do so.",
    },
    {
      step: "2",
      title: "Call for Help",
      description: "Dial 999 for life-threatening emergencies or campus security for on-site incidents.",
    },
    {
      step: "3",
      title: "Report the Incident",
      description: "Notify your tutor, the Health & Safety Officer, or complete an online incident form within 24 hours.",
    },
    {
      step: "4",
      title: "Seek Support",
      description: "Access counseling, academic adjustments, or medical follow-up as needed.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[290px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[290px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AlertTriangle className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Accident & <span className="text-watney-blue-primary">Emergency</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your safety is our priority. Know how to respond in an emergency, 
              who to contact, and how Watney College supports you during and after critical incidents.
            </p>
          </div>
        </section>

        {/* Urgent Notice */}
        <section className="py-6 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="font-medium">
              🚨 <strong>In a life-threatening emergency:</strong> Call{" "}
              <span className="font-bold text-xl mx-1">999</span> immediately, then notify campus security.
            </p>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Emergency Contacts
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Save these numbers—know who to call based on the situation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-50">
              {emergencyContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="z-50"
                >
                  <Card className="h-full border border-gray-200 text-center hover:shadow-md transition-shadow z-50">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 rounded-full bg-red-50 mx-auto flex items-center justify-center mb-3">
                        <contact.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">{contact.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                      <CardDescription>{contact.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What To Do */}
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
                In Case of an Emergency
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Follow these steps to ensure your safety and help us respond effectively.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procedures.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="z-50"
                >
                  <Card className="h-full border-gray-200 p-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-watney-blue-primary text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="mb-2">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
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