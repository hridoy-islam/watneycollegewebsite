"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Phone,
  MapPin,
  Ambulance,
  ShieldCheck,
  FileText,
  ExternalLink,
  BriefcaseMedical,
  Flame,
} from "lucide-react";

export default function AccidentAndEmergencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        {/* Decorative Background Patterns */}
        <div className="absolute right-[290px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[290px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AlertTriangle className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Accident &{" "}
              <span className="text-watney-blue-primary">
                Emergency Support
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your safety is our priority. This page sets out the emergency
              procedures and key contacts for students, staff and visitors at
              Watney College.
            </p>
          </div>
        </section>

        {/* Section 1: In an Emergency - Content Left, Image Right */}
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
                  In an Emergency
                </h2>
                <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded-r-lg mb-6">
                  <p className="text-xl text-red-700 font-bold">
                    Call 999 immediately if there is an immediate risk to life.
                  </p>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center font-medium">
                    <Phone className="w-5 h-5 text-watney-blue-primary mr-3" />
                    Then contact Watney College: +44 (0) 2080046463
                  </p>
                  <p className="flex items-center">
                    <FileText className="w-5 h-5 text-watney-blue-primary mr-3" />
                    info@watneycollege.co.uk
                  </p>
                  <p className="text-sm italic text-gray-500 ml-8">
                    Monday to Friday, 9:00am – 5:00pm
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[350px]">
                <img
                  src="/e1.jpg"
                  alt="Emergency contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Location & Hospitals - Image Left, Content Right */}
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
                <img
                  src="/e2.jpg"
                  alt="Hospital map location"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="mr-3 text-watney-blue-primary" />  Our Location
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Watney College
                    </h3>
                    <p className="text-gray-600">
                      80–82 Nelson Street, Whitechapel, London, E1 2DY
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-watney-blue-primary flex items-center mb-1">
                      <Ambulance className="w-5 h-5 mr-2" /> Nearest A&E
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Royal London Hospital Whitechapel Road, London, E1 1BB
                      <br />
                      +44 (0) 20 7377 7000
                      <br />
                      <span className="italic">
                        Approximately 0.4 miles — 8 minutes on foot
                      </span>
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-watney-blue-primary flex items-center mb-1">
                      <BriefcaseMedical className="w-5 h-5 mr-2" /> Nearest
                      Urgent Treatment Centre
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Barts Health Walk-in Centre
                      <br />9 Alie Street, London, E1 8DE
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Procedures - Content Left, Image Right */}
        <section className="py-16 bg-white relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Emergency Procedures
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-watney-blue-primary">
                      <BriefcaseMedical size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Medical Emergency
                      </h3>
                      <ul className="text-gray-600 space-y-1 list-disc ml-4">
                        <li>Call 999 immediately</li>
                        <li>
                          Do not move the person unless there is immediate
                          danger
                        </li>
                        <li>
                          Inform the nearest member of staff, who will
                          coordinate the response
                        </li>
                        <li>A first aider will attend</li>
                        <li>
                          Remain with the person until emergency services arrive
                        </li>
                        <li>
                          Report the incident to the Head of Admin & Registry
                          within 24 hours
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <Flame size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Fire
                      </h3>
                      <ul className="text-gray-600 space-y-1 list-disc ml-4">
                        <li>Activate the nearest fire alarm</li>
                        <li>Evacuate immediately via the nearest fire exit</li>
                        <li>Do not use the lift</li>
                        <li>
                          Assemble at the designated muster point outside the
                          building
                        </li>
                        <li>
                          Do not re-enter until cleared by the fire service or
                          the Principal
                        </li>
                        <li>
                          The Principal will account for all persons present
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Accident or Injury
                      </h3>
                      <ul className="text-gray-600 space-y-1 list-disc ml-4">
                        <li>Ensure the area is safe before approaching</li>
                        <li>Call for a first aider immediately</li>
                        <li>Call 999 if the injury is serious</li>
                        <li>
                          Do not move the injured person unless there is
                          immediate danger
                        </li>
                        <li>
                          Complete an accident report with the Head of Admin &
                          Registry within 24 hours
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
                <img
                  src="/e3.jpg"
                  alt="Safety procedure icons"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Mental Health Table Section */}
        <section className="py-16 bg-gray-50 relative z-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Mental Health Emergency
              </h2>
              <p className="text-gray-600 mb-8">
                If you or someone you know is in crisis:
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white mb-6">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-watney-blue-primary text-white">
                    <tr>
                      <th className="p-4 font-bold border-r border-white/10">
                        Service
                      </th>
                      <th className="p-4 font-bold border-r border-white/10">
                        Contact
                      </th>
                      <th className="p-4 font-bold">Availability</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="p-4 border-r border-gray-100 font-medium">
                        Samaritans
                      </td>
                      <td className="p-4 border-r border-gray-100">116 123</td>
                      <td className="p-4">Free, 24/7</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="p-4 border-r border-gray-100 font-medium">
                        East London NHS Crisis Line
                      </td>
                      <td className="p-4 border-r border-gray-100">
                        0800 073 0003
                      </td>
                      <td className="p-4">Free, 24/7</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 border-r border-gray-100 font-medium">
                        NHS urgent advice
                      </td>
                      <td className="p-4 border-r border-gray-100">111</td>
                      <td className="p-4">24/7</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 border-r border-gray-100 font-medium">
                        Emergency services
                      </td>
                      <td className="p-4 border-r border-gray-100">999</td>
                      <td className="p-4">24/7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-left">
                For non-emergency mental health support, speak to your Personal
                Tutor or contact student support at support@watneycollege.co.uk.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 5 & 6: Action Section - Reporting & Safeguarding */}
        <section className="py-20 bg-ocean-breeze/30 relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center p-10 bg-white rounded-3xl shadow-xl border border-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <ShieldCheck className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />

              <div className="text-left space-y-8 mb-10">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                   Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    All accidents, incidents and near misses must be reported to
                    the Head of Admin & Registry within 24 hours.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Serious incidents are escalated to the Principal and
                    reported to the Board of Directors through the College's
                    governance framework.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Where required, incidents are reported to the Health and
                    Safety Executive (HSE) under RIDDOR 2013.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    Safeguarding
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Any safeguarding concern must be reported immediately to the
                    Designated Safeguarding Lead.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Full details are set out in the College's Safeguarding and
                    Prevent Policy, available on the Policies page.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Key Contacts Table Section */}
        <section className="py-16 bg-white relative z-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Contacts
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-10">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-100 text-gray-800">
                    <tr>
                      <th className="p-4 font-bold border-b border-gray-200">
                        Role
                      </th>
                      <th className="p-4 font-bold border-b border-gray-200">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">General enquiries</td>
                      <td className="p-4 text-watney-blue-primary">
                        info@watneycollege.co.uk
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/30">
                      <td className="p-4 font-medium">Student support</td>
                      <td className="p-4 text-watney-blue-primary">
                        support@watneycollege.co.uk
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">On-site emergency</td>
                      <td className="p-4 font-bold">+44 (0) 2080046463</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/30">
                      <td className="p-4 font-medium">
                        Royal London Hospital A&E
                      </td>
                      <td className="p-4">+44 (0) 20 7377 7000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Police non-emergency</td>
                      <td className="p-4">101</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/30">
                      <td className="p-4 font-medium">Emergency services</td>
                      <td className="p-4">999</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">NHS non-emergency</td>
                      <td className="p-4">111</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center text-sm text-gray-400 font-medium pb-8">
                Last reviewed: April 2026 | Next review: April 2027 | Approved
                by: Board of Directors
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
