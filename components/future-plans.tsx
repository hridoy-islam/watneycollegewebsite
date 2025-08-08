"use client"

import { motion } from "framer-motion"
import { Building2, Globe, GraduationCap, TrendingUp } from "lucide-react"
import { useRef } from "react"

export default function FuturePlans() {
  const containerRef = useRef<HTMLDivElement>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const plans = [
    {
      title: "Real Estate Investment & Development",
      icon: <Building2 className="h-10 w-10 mb-4" />,
      description: [
        "Expanding property buying and selling operations in key markets",
        "Partnering with international investors for commercial and residential developments",
        "Strengthening rental and property management services",
      ],
    },
    {
      title: "Export-Import Expansion",
      icon: <Globe className="h-10 w-10 mb-4" />,
      description: [
        "Expanding our global trade network to increase exports and imports",
        "Entering new high-demand markets for sustainable trade growth",
        "Enhancing logistics and supply chain efficiency for seamless operations",
      ],
    },
    {
      title: "Student Consultancy Services",
      icon: <GraduationCap className="h-10 w-10 mb-4" />,
      description: [
        "Partnering with top universities and colleges worldwide",
        "Offering comprehensive services including visa assistance and career counselling",
        "Establishing regional offices to provide direct support to students",
      ],
    },
    {
      title: "Financial & Mutual Investment Growth",
      icon: <TrendingUp className="h-10 w-10 mb-4" />,
      description: [
        "Expanding MRST Investment's portfolio in real estate and startups",
        "Developing investment funds for high-net-worth individuals",
        "Collaborating with global financial institutions to enhance capital growth",
      ],
    },
  ]

  return (
    <div className="relative overflow-hidden py-20 bg-secondary  bg-[url('/future.jpg')] bg-cover bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>

      <div className="container  relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className=" font-bold mb-6 text-primary ">
            Future Plans
          </h2>
          <p className=" max-w-3xl mx-auto text-black">
            MRST CONSULTANCY L.L.C-FZ is dedicated to expanding across multiple industries with a strategic focus on
            growth and innovation.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
              }}
              className="relative rounded-2xl bg-secondary/60  p-6 text-center shadow-xl transition duration-100 hover:shadow-xl"
            >
              
              <div className="text-primary">{plan.icon}</div>
              <h3 className=" font-bold mb-4 text-start text-primary ">{plan.title}</h3>
              <ul className="space-y-3">
                {plan.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start justify-start text-secondary"
                  >
                    <span className="text-primary mr-2">•</span>
                    <span className="flex text-start text-black">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </div>
  )
}
