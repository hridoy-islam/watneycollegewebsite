"use client"

import { motion } from "framer-motion"
import { MapPinIcon, UsersIcon, BarChartIcon, GlobeIcon } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Strategic Location",
      description: "Headquartered in Dubai, UAE—a global hub for international trade",
    },
    {
      icon: <BarChartIcon className="h-6 w-6" />,
      title: "Comprehensive Solutions",
      description: "Integrated services covering the full spectrum of international business and education needs",
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "Client-Centered Approach",
      description: "Customized strategies aligned with your specific objectives",
    },
    {
      icon: <GlobeIcon className="h-6 w-6" />,
      title: "Global Network",
      description: "Established partnerships across key markets worldwide",
    },
  ]

  return (
    <section className="bg-primary/5 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto  text-center"
        >
          <h2 className="font-bold tracking-tight text-primary ">
            Why Choose MRST Consultancy?
          </h2>
          <p className="mt-4 ">
            Our unique advantages that set us apart in the global consultancy landscape
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {reason.icon}
              </div>
              <h3 className="mt-6  font-medium text-primary">{reason.title}</h3>
              <p className="mt-2 ">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

