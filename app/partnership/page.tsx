"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Users, Heart, GraduationCap, ArrowRight, Award, BookOpen, Target, Handshake } from 'lucide-react'

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

export default function PartnershipPage() {
  const partnershipPrograms = [
    {
      title: "UK/EU University Partnerships",
      description: "We help UKVI students to enroll at their dream Universities/Colleges in the UK. We can help you to secure a place at any University in the UK if you can fulfill the requirements.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Direct admission support for UK universities",
        "Guaranteed placement if requirements are met",
        "UKVI compliance guidance",
        "Comprehensive application guidance",
        "Interview preparation and support"
      ],
      color: "bg-primary"
    },
    {
      title: "International University Network",
      description: "We are working with many Universities from Europe, Australia, Canada, and the USA. We want to ensure that our preferred young talents get the best education opportunities worldwide.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Access to universities in Europe, Australia, Canada, USA",
        "World-class tertiary partnerships",
        "Cultural diversity promotion",
        "Global education opportunities",
        "International student excellence"
      ],
      color: "bg-pink-500"
    },
    {
      title: "Educational Institution Partnerships",
      description: "We have built up one-to-one relationships effectively with different Universities/Colleges and other partner organizations that are also committed to student success.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Effective one-to-one institutional relationships",
        "Partner organization collaborations",
        "Higher education network access",
        "Flexible student excellence",
        "Mutual benefit partnerships"
      ],
      color: "bg-blue-500"
    }
  ]

  const missionPillars = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We maintain the highest standards in student selection and university partnerships, ensuring quality outcomes."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Our extensive network spans across the UK, Europe, Australia, Canada, and the USA for maximum opportunities."
    },
    {
      icon: Heart,
      title: "One-to-One Relationships",
      description: "We build effective personal relationships with universities and partner organizations for student success."
    }
  ]

  const universityBenefits = [
    "Access to talented and culturally diverse students",
    "Global student recruitment support",
    "Quality-assured student selection",
    "Reduced recruitment costs",
    "Enhanced international presence"
  ]

  const studentBenefits = [
    "Dream university placement guarantee",
    "Expert admission consultation",
    "Comprehensive application support",
    "Interview preparation",
    "Visa application assistance"
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
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Partnership <span className="text-pink-300">Excellence</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100  mx-auto">
              Connecting talented students with world-class universities through strategic partnerships and dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Partnership <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At Watney College, we are committed to creating meaningful partnerships that benefit both students and institutions. Through our global network, we ensure that potential students are getting the best education from world-class institutes and universities without compromising on quality and contribute to their academic excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {missionPillars.map((pillar, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <pillar.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Partnership <span className="text-primary">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive partnership programs designed to connect students with their dream institutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {partnershipPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge className={`mb-4 ${program.color} text-white`}>
                    {program.title.split(' ')[0]}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">{program.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-lg">Key Benefits:</h4>
                    {program.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      width={400}
                      height={300}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mutual Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Mutual <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partnerships create value for both educational institutions and students worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">For Universities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {universityBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-pink-600" />
                  </div>
                  <CardTitle className="text-2xl">For Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {studentBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Join our network of prestigious educational institutions and help us connect talented students with world-class education opportunities.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Explore Partnership Plans
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
