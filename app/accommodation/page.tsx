"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, MapPin, Shield, Users, Train, Mail, CheckCircle, ArrowRight, GraduationCap, FileText } from 'lucide-react'

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

export default function AccommodationPage() {
  const supportServices = [
    {
      title: "Finding Accommodation Options",
      description: "We help you find private or shared accommodation options that suit your needs.",
      icon: Home,
      color: "bg-primary"
    },
    {
      title: "Verified Landlords & Agencies",
      description: "Connect with trusted landlords and reputable student housing agencies we work with.",
      icon: Shield,
      color: "bg-primary"
    },
    {
      title: "Contract & Deposit Guidance",
      description: "Get expert guidance on contracts, deposits, and living arrangements.",
      icon: FileText,
      color: "bg-primary"
    },
    {
      title: "Transport & Local Advice",
      description: "Receive advice on transport links, local amenities, and budgeting.",
      icon: Train,
      color: "bg-primary"
    }
  ]

  return (
    <div className="min-h-screen bg-primary">
      
<div className="relative">
       
      {/* Hero Section */}
      <section className="relative bg-ocean-breeze py-20">
        <div className="container ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-watney-blue-primary" />
            </div>
            <h1 className="text-5xl lg:text-6xl text-black font-bold mb-6">
              Find Your <span className="text-watney-blue-primary">Perfect Home</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600  mx-auto">
              We want you to be happy in every aspect of your life at college, and that includes finding a home which is friendly, comfortable and safe. While Watney College does not offer on-campus accommodation, we work closely with trusted local providers to help students secure safe, affordable, and convenient housing near our London campus.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              We Offer <span className="text-gradient-watney">Support With</span>
            </h2>
            <p className="text-lg text-gray-600 mx-auto">
              Our dedicated team provides comprehensive support to help you find and secure accommodation near our London campus.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text=primary"
          >
            {supportServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group text-primary">
                  <CardHeader>
                    <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      {/* Contact Section */}
      <section className="py-20 bg-soft-sky">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Need Accommodation Support?
            </h2>
            <p className="text-xl text-gray-600 mb-8  mx-auto">
              Our team is ready to help you find the perfect accommodation for your studies at Watney College.
            </p>
            
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary mr-2" />
                <span className="text-black font-semibold">Contact Us</span>
              </div>
              <p className="text-black text-lg">student.support@watneycollege.co.uk</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-watney-blue-primary text-white hover:bg-watney-blue-primary/90">
                Get Accommodation Help
              </Button>
              <Button size="lg" variant="outline" className="btn-outline-watney flex items-center justify-center bg-transparent">
                Contact Support Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  )
}
