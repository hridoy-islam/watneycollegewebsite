"use client"

import { motion } from "framer-motion"
import { GlobeIcon, TrendingUpIcon, GraduationCapIcon, HomeIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Real Estate Investment",
      description:
        "Strategic property acquisition and development across global markets, focusing on value creation and sustainable growth.",
    },
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      title: "Export & Import Consultancy",
      description:
        "Facilitating international trade through comprehensive import-export services, connecting businesses worldwide.",
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8" />,
      title: "Mutual Investment",
      description:
        "Create valuable cross-border partnerships through our investment consultancy services. We connect capital with opportunity, ensuring mutually beneficial outcomes for investors and businesses alike.",
    },
    {
      icon: <GraduationCapIcon className="h-8 w-8" />,
      title: "Student Consultancy",
      description:
        "Expert guidance for students pursuing international education, with comprehensive support throughout their academic journey.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="bg-gradient-to-tl from-secondary to-primary/10 py-24">
      <div className="container ">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold tracking-tight text-primary">What We Do</h2>
            <p className="mt-4 ">
            MRST CONSULTANCY L.L.C-FZ is dedicated to investment across multiple industries, creating value-driven opportunities by connecting businesses, investors, and students with the right resources and solutions.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {services.map((service, index) => (
  <motion.div key={index} variants={itemVariants}>
    <Card className="h-full border-none bg-white/10 backdrop-blur-lg backdrop-saturate-150 bg-opacity-30 rounded-lg shadow-xl transition-all duration-300 hover:bg-primary/20 hover:backdrop-blur-sm hover:shadow-2xl hover:border hover:border-primary">
      <CardHeader className="flex flex-row justify-start gap-3 items-center p-4">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/20 text-primary shadow-lg">
          {service.icon}
        </div>
        <CardTitle className="text-2xl font-semibold text-primary">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-3">
        <CardDescription className="text-base text-foreground/80">{service.description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
))}




        </motion.div>
      </div>
    </section>
  )
}

