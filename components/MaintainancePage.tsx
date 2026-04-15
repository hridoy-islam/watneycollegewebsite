"use client";

import React from "react";
import { motion } from "framer-motion";

const MaintenancePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center text-slate-900 px-6 overflow-hidden">
      
      {/* Background Blobs - Adjusted sizes and opacity for mobile */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-400 rounded-full blur-[80px] md:blur-[140px] opacity-30 md:opacity-40 mix-blend-multiply"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600 rounded-full blur-[80px] md:blur-[150px] opacity-30 md:opacity-40 mix-blend-multiply"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl mx-auto"
      >
        {/* Logo Section */}
        <motion.div
          variants={itemVariants}
          className="flex \flex-row items-center gap-3 md:gap-4 mb-8"
        >
          <img
            src="/watney.png"
            alt="Watney College Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
          <h2 className="text-2xl font-semibold tracking-tight">
            Watney College
          </h2>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
        >
          Scheduled  Maintenance
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base md:text-xl  max-w-md md:max-w-2xl leading-relaxed"
        >
          Our website is currently undergoing maintenance. We’ll be back shortly.
        </motion.p>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          className="mt-10 pt-8 "
        >
          <p className="text-sm font-medium  capitalize tracking-widest">
            Thank you for your patience
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MaintenancePage;