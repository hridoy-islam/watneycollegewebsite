"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Building2, GraduationCap, LineChart, Ship } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GrowthProjections() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const sectors = [
    {
      title: "Real Estate Sector",
      description: "Targeting 20% annual growth through new property acquisitions and developments.",
      icon: <Building2 className="h-6 w-6" />,
      growth: "20%",
      direction: "up",
    },
    {
      title: "Export-Import Business",
      description:
        "Expanding trade operations into Asia, Africa, and Europe, with an expected 30% annual revenue increase.",
      icon: <Ship className="h-6 w-6" />,
      growth: "30%",
      direction: "up",
    },
    {
      title: "Student Consultancy Services",
      description: "Aiming to assist 100+ students annually in securing international education opportunities.",
      icon: <GraduationCap className="h-6 w-6" />,
      growth: "100+",
      direction: "students",
    },
    {
      title: "Investment Growth",
      description: "Projecting 15-25% annual capital growth, with diversified investments across multiple sectors.",
      icon: <LineChart className="h-6 w-6" />,
      growth: "15-25%",
      direction: "up",
    },
  ]

  return (
    <section className="relative bg-[url('/growth.jpg')] bg-cover bg-center bg-no-repeat py-24">
    {/* Background Overlay for Opacity Effect */}
    <div className="absolute inset-0 bg-black/60"></div>
  
    {/* Content Wrapper (Ensures Text Stays Visible) */}
    <div className="relative container ">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mx-auto  text-center mb-16"
      >
        <h2 className="tracking-tight text-secondary mb-4">Growth Projections</h2>
        <h3 className="text-secondary mb-4">Next 5 Years</h3>
        <p className="text-secondary">Strategic growth initiatives across our core business sectors</p>
      </motion.div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {sectors.map((sector, index) => (
          <motion.div
            key={sector.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group bg-white/60 backdrop-blur-lg">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors duration-300"></div>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">{sector.icon}</div>
                  <CardTitle className="text-xl text-primary">{sector.title}</CardTitle>
                </div>
                <Badge className="font-bold">
                  {sector.growth}
                  {sector.direction === "up" && <ArrowUpRight className="ml-1 h-3 w-3" />}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-800">{sector.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  )
}

