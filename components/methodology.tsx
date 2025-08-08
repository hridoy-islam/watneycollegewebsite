"use client"

import { motion } from "framer-motion"
import { SearchIcon, BarChart3Icon, PencilRulerIcon, RocketIcon, RefreshCwIcon } from "lucide-react"

export default function Methodology() {
  const steps = [
    {
      icon: <SearchIcon className="h-6 w-6" />,
      title: "Discover",
      description: "Thorough assessment of your current position and objectives",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <BarChart3Icon className="h-6 w-6" />,
      title: "Analyze",
      description: "In-depth research and strategic evaluation of opportunities",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <PencilRulerIcon className="h-6 w-6" />,
      title: "Develop",
      description: "Creation of customized solutions aligned with your goals",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <RocketIcon className="h-6 w-6" />,
      title: "Implement",
      description: "Expert execution of strategies with ongoing support",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <RefreshCwIcon className="h-6 w-6" />,
      title: "Optimize",
      description: "Continuous refinement to maximize results and adapt to changing conditions",
      color: "bg-primary/10 text-primary",
    },
  ]

  return (
    <section className="bg-gradient-to-t from-secondary to-primary/20 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className=" font-bold tracking-tight text-primary ">Our Methodology</h2>
          <p className="mt-4 ">
            A proven approach to delivering exceptional results for our clients
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Connecting line */}
          {/* <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:hidden"></div> */}

        

          <div className="relative grid gap-12 md:grid-cols-5 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center md:px-4"
              >
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${step.color}`}>
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-medium text-primary">{step.title}</h3>
                <p className="mt-2 text-black">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

