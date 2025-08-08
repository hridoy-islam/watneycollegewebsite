"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Award, TrendingUp, CheckCircle, Mail, GraduationCap, ArrowRight, Target, FileText, UserCheck, Building } from 'lucide-react'

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

export default function CareerEmployabilityPage() {
  const industryPartners = [
    {
      name: "iCare",
      description: "Leading care provider offering comprehensive health and social care services.",
      opportunities: "Healthcare Assistant, Support Worker positions"
    },
    {
      name: "Everycare Romford",
      description: "Specialized in domiciliary care services with excellent training programs.",
      opportunities: "Domiciliary Care Worker, Senior Care Assistant roles"
    },
    {
      name: "Medicare Link",
      description: "Healthcare recruitment specialists connecting qualified professionals with opportunities.",
      opportunities: "Various healthcare positions across London"
    },
    {
      name: "Care Square",
      description: "Modern care facilities focused on person-centered care approaches.",
      opportunities: "Care Home positions, Team Leader opportunities"
    },
    {
      name: "SMS Higher Education Recruitment",
      description: "Educational recruitment agency specializing in healthcare education placements.",
      opportunities: "Training positions, Career progression support"
    }
  ]

  const careerSupport = [
    {
      title: "CV & Interview Preparation",
      description: "Tailored CV writing and interview coaching specifically for the care industry.",
      icon: FileText,
      color: "bg-primary"
    },
    {
      title: "Employability Workshops",
      description: "Comprehensive workshops focusing on workplace readiness and professional skills.",
      icon: Users,
      color: "bg-primary"
    },
    {
      title: "One-to-One Progression Advice",
      description: "Personalized career guidance for Healthcare Assistant, Support Worker, or further study paths.",
      icon: UserCheck,
      color: "bg-primary"
    },
    {
      title: "Active Vacancy Referrals",
      description: "Direct referrals to current job openings through our recruitment partner network.",
      icon: Briefcase,
      color: "bg-primary"
    }
  ]

  const careerPaths = [
    {
      title: "Healthcare Assistant",
      description: "Entry-level position providing direct patient care and support.",
      requirements: ["Level 3 Adult Care Diploma", "Good communication skills", "Compassionate nature"],
      progression: "Senior Healthcare Assistant → Team Leader → Care Manager"
    },
    {
      title: "Support Worker",
      description: "Supporting individuals with daily living activities and personal care.",
      requirements: ["Relevant qualifications", "Patience and empathy", "Physical fitness"],
      progression: "Senior Support Worker → Specialist Support → Service Manager"
    },
    {
      title: "Further Education",
      description: "Progress to higher qualifications in health and social care.",
      requirements: ["Strong academic performance", "Commitment to learning", "Career ambition"],
      progression: "Level 4/5 Qualifications → Degree Programs → Management Roles"
    }
  ]

  const outcomes = [
    {
      stat: "100%",
      description: "Adult Care Level 3 graduates secured employment",
      icon: Award
    },
    {
      stat: "95%",
      description: "Students placed within 3 months of completion",
      icon: TrendingUp
    },
    {
      stat: "50+",
      description: "Active partnerships with care providers",
      icon: Building
    },
    {
      stat: "24/7",
      description: "Ongoing career support for graduates",
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen bg-primary">
   

      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Career & <span className="text-pink-300">Employability</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 mx-auto">
              At Watney College, we are proud to provide not only high-quality education but also real career outcomes, especially in the health and social care sector. We are committed to supporting every learner in becoming career-ready and confident.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Explore Career Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Proven Outcomes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary text-primary">Proven Results</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our Success Story
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Our Level 3 Diploma in Adult Care has been successfully delivered with all students achieving certification and progressing directly into employment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {outcomes.map((outcome, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <outcome.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{outcome.stat}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary">{outcome.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Strong Industry Partnerships
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Watney College is affiliated with a network of trusted care providers and recruitment agencies, ensuring our students have direct pathways to employment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industryPartners.map((partner, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-foreground-50/10 rounded-lg p-4">
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Opportunities:</h4>
                      <p className="text-sm text-gray-600">{partner.opportunities}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-foreground-100/10 rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Partnership Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold">Workplace Opportunities</h4>
                    <p className="text-sm text-gray-600">Secure placements for health and social care students</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold">Real-Life Experience</h4>
                    <p className="text-sm text-gray-600">Hands-on experience in care home and domiciliary settings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold">Job Placement Support</h4>
                    <p className="text-sm text-gray-600">Direct job placements and references after course completion</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Support Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-primary font-bold mb-4">
              Career Focused Support
            </h2>
            <p className="text-xl text-primary max-w-6xl mx-auto">
              Our comprehensive career support services are designed to prepare you for success in the healthcare industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {careerSupport.map((support, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className={`w-16 h-16 ${support.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <support.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-primary">{support.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary">{support.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Career Pathways
            </h2>
            <p className="text-xl text-gray-600  mx-auto">
              Explore the various career paths available to our graduates in the health and social care sector.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {careerPaths.map((path, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {path.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {path.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Progression Route:</h4>
                        <p className="text-sm text-gray-600">{path.progression}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-foreground-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-xl text-primary mb-8  mx-auto">
              We continue to support former students with career guidance and progression routes. Let us help you achieve your career goals in the health and social care sector.
            </p>
            
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-semibold">Career Support</span>
              </div>
              <p className="text-primary text-lg">careers@watneycollege.co.uk</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary hover:bg-gray-100">
                Get Career Support
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Job Opportunities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
