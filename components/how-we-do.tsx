"use client"

import { motion } from "framer-motion"
import { Lightbulb, Globe, TrendingUp, Shield, Users, Award } from "lucide-react"

export default function HowWeDo() {
  const features = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Driving cutting-edge solutions across all sectors we engage with.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliability",
      description: "Built on 15+ years of expertise across multiple industries.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Sustainable Investments",
      description: "Creating long-term value with responsible investment strategies.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Partnerships",
      description: "Leveraging international networks for broader opportunities.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Service Excellence",
      description: "Ensuring client satisfaction through dedicated support.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#C9E1F1] to-secondary">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true" className="text-primary/10">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern-squares)" />
        </svg>
      
      </div>

      <div className="absolute bottom-0 max-lg:hidden left-0 -mb-16 -ml-16 transform rotate-180">
        <svg
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
          className="text-primary/80"
        >
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern-circles)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-30"></div>

      <div className="relative container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with shapes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Main image */}
              <div className="aspect-[4/3] relative z-10">
                <img src="/team.jpg" alt="MRST Consultancy Team" className="w-full h-full object-cover" />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent mix-blend-overlay z-0"></div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-70 blur-md z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-70 blur-md z-0"></div>

              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] bg-repeat opacity-5 mix-blend-overlay z-0"></div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-secondary rounded-xl shadow-xl p-4 z-30"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 bg-primary/20 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">15+ Years</p>
                  <p className="text-xs text-black">Industry Expertise</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <h1 className=" text-primary font-extrabold">
                How We Do
              </h1>
              <p className="mt-4 text-lg text-black">
                Supported by our parent company's 15+ years of expertise in education, real estate, and recruitment, we
                deliver innovation, reliability, and excellence in every sector we engage with.
              </p>
              <p className="mt-4 text-lg text-black">
                At MRST CONSULTANCY L.L.C-FZ, we are committed to sustainable investments, global partnerships, and
                service excellence, ensuring long-term success for our clients and stakeholders.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative flex items-start p-4 rounded-xl transition-all duration-300 "
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg  text-primary transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-black">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

