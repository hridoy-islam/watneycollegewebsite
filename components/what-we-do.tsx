"use client";

import { Building2, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Building2,
    title: "Real Estate Investment",
    description:
      "Strategic property acquisition and development across global markets, focusing on value creation and sustainable growth.",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: Globe,
    title: "Import-Export Solutions",
    description:
      "Facilitating international trade through comprehensive import-export services, connecting businesses worldwide.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: GraduationCap,
    title: "Education Services",
    description:
      "Expert guidance for students pursuing international education, with comprehensive support throughout their academic journey.",
    gradient: "from-pink-600 to-orange-600",
  },
];

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-primary to-primary/80">
      <div className="container mx-auto px-4 text-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-secondary font-bold mb-4">What We Do</h2>
          <p className="text-secondary max-w-5xl mx-auto">
            MRST CONSULTANCY L.L.C-FZ is dedicated to investment across multiple
            industries, creating value-driven opportunities by connecting
            businesses, investors, and students with the right resources and
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-1" // Set min height
            >
              {/* Gradient Glow Effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 blur-3xl transition-all duration-500 group-hover:opacity-60" /> */}

              {/* Glassmorphic Card */}
              <div className="relative bg-secondary/80 backdrop-blur-xl rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.03] flex flex-col justify-between min-h-[240px]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <service.icon className="w-8 h-8 text-primary  transition duration-100" />

                    <h3 className="font-semibold">{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                </div>

                <div className="absolute -bottom-6 left-1/2 w-32 h-32 bg-primary opacity-20 rounded-full blur-3xl group-hover:opacity-50 transition duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
