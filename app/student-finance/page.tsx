"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PoundSterlingIcon as Pound, CheckCircle, ExternalLink, FileText, Calculator, Users, GraduationCap, ArrowRight, Info, AlertCircle } from 'lucide-react'
import GeometricBgPattern from "../../components/geometric-bg-pattern"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function StudentFinancePage() {
  const eligibilityCriteria = [
    {
      title: "British Citizenship",
      description: "You must be a British citizen to be eligible for standard student finance support.",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Indefinite Leave to Remain (ILR)",
      description: "If you hold ILR status, you may be eligible for the same support as British citizens.",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Residency Requirements",
      description: "You must have been ordinarily resident in the UK for at least 3 years before your course starts.",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Course Requirements",
      description: "Your course must be eligible for student finance - we can help verify this for you.",
      icon: GraduationCap,
      color: "text-purple-600"
    }
  ]

  const supportTypes = [
    {
      title: "Tuition Fee Loans",
      description: "Covers the full cost of your course fees, paid directly to the college.",
      amount: "Up to £9,250/year",
      features: ["Paid directly to institution", "No upfront payment required", "Repaid after graduation"]
    },
    {
      title: "Maintenance Loans",
      description: "Help with living costs including accommodation, food, and study materials.",
      amount: "Up to £12,667/year",
      features: ["Based on household income", "Paid in termly instalments", "Flexible repayment terms"]
    },
    {
      title: "Grants & Bursaries",
      description: "Additional support that doesn't need to be repaid, based on circumstances.",
      amount: "Varies by situation",
      features: ["Income-assessed", "No repayment required", "Additional support available"]
    }
  ]

  const applicationSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Use the government's eligibility checker to confirm you qualify for student finance."
    },
    {
      step: "2",
      title: "Gather Documents",
      description: "Collect required documents including passport, bank statements, and household income details."
    },
    {
      step: "3",
      title: "Apply Online",
      description: "Complete your application through the official Student Finance England website."
    },
    {
      step: "4",
      title: "Submit Evidence",
      description: "Upload or post required supporting documents to complete your application."
    },
    {
      step: "5",
      title: "Receive Decision",
      description: "Get your student finance decision and payment schedule before your course starts."
    }
  ]

  return (
    <div className="min-h-screen ">
     <div className="relative">
             <GeometricBgPattern />
      {/* Hero Section */}
      <section className="relative bg-ocean-breeze py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Pound className="w-8 h-8 text-watney-blue-primary" />
            </div>
            <h1 className="text-5xl lg:text-6xl text-black font-bold mb-6">
              Student <span className="text-watney-blue-primary">Finance</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600 mx-auto">
              If you are facing financial difficulties and are a British citizen or hold Indefinite Leave to Remain (ILR), you may be eligible to apply for funding to cover course fees and maintenance support.
            </p>
            {/* <Button size="lg" className="btn-watney-primary  text-white hover:bg-watney-blue-primary/90">
              Check Your Eligibility
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button> */}
          </motion.div>
        </div>
      </section>

     

      {/* Eligibility Criteria */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-black font-bold mb-4">
              Check Funding <span className="text-gradient-watney">Eligibility</span>
            </h2>
            <p className="text-lg text-black   mx-auto">
              Understanding the key eligibility criteria for student finance support in the UK.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {eligibilityCriteria.map((criteria, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-black/10 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <criteria.icon className={`w-6 h-6 text-white`} />
                      </div>
                      <CardTitle className="text-xl  text-primary">{criteria.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black text-lg">{criteria.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Types of Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-black font-bold mb-4">
              Types of <span className="text-gradient-watney">Financial Support</span>
            </h2>
            <p className="text-lg text-gray-600  mx-auto">
              Explore the different types of financial support available to help fund your education.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {supportTypes.map((support, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 border-black/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Pound className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2 text-primary">{support.title}</CardTitle>
                    <CardDescription className="text-black text-lg mb-4">
                      {support.description}
                    </CardDescription>
                    {/* <div className="text-2xl font-bold text-primary">{support.amount}</div> */}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {support.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-lg text-black">
                          <CheckCircle className="w-4 h-4 text-primary/80 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-gradient-watney font-bold mb-4">
              Application Process
            </h2>
            <p className="text-lg text-gray-600 mx-auto">
              Follow these steps to apply for student finance and secure funding for your studies.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {applicationSteps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-watney-blue-primary font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="w-px h-8 bg-gray-300 ml-6 mt-4"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-soft-sky">
        <div className="container mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Apply for Student Finance?
            </h2>
            <p className="text-lg text-primary mb-8  mx-auto">
              Don't let financial concerns hold you back from achieving your educational goals. Get the support you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-watney-blue-primary text-white hover:bg-watney-blue-primary/90">
                <ExternalLink className="w-4 h-4 mr-2" />
                Apply on Gov.UK
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Get Financial Advice
              </Button>
            </div>

            <div className="mt-12 bg-primary/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <AlertCircle className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary font-semibold">Need Help?</span>
              </div>
              <p className="text-primary text-sm">
                Our student support team can help guide you through the application process and answer any questions you may have.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  )
}
