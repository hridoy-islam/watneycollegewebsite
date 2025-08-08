"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Globe, Award, GraduationCap, Lightbulb, CheckCircle, ArrowRight, Star, Clock, MapPin } from 'lucide-react'

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

export default function ServicesPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Academic Excellence Program",
      description: "Top-tier curriculum content covering diverse fields with international standards and cutting-edge methodologies.",
      features: ["Certified Programs", "Expert Instructors", "Flexible Scheduling", "Industry Recognition"],
      color: "bg-primary",
      students: "2,500+ Students",
      duration: "6-24 months"
    },
    {
      icon: Users,
      title: "Student Success Support",
      description: "Comprehensive 24/7 guidance through personalized mentoring and professional development programs.",
      features: ["Career Guidance", "Academic Support", "Mental Health", "Peer Mentoring"],
      color: "bg-pink-500",
      students: "1,800+ Students",
      duration: "Ongoing"
    },
    {
      icon: Globe,
      title: "Global Education Network",
      description: "Connecting students with worldwide opportunities through partnerships and international programs.",
      features: ["Study Abroad", "Exchange Programs", "Global Partnerships", "Cultural Immersion"],
      color: "bg-blue-500",
      students: "3,200+ Students",
      duration: "1-4 years"
    },
    {
      icon: Award,
      title: "Professional Certification Hub",
      description: "Industry-recognized certifications and professional development programs for career advancement.",
      features: ["Industry Certifications", "Skill Assessments", "Career Placement", "Portfolio Development"],
      color: "bg-green-500",
      students: "4,100+ Students",
      duration: "3-12 months"
    },
    {
      icon: GraduationCap,
      title: "Skills Development Lab",
      description: "Hands-on learning experiences with cutting-edge technology and practical skill development.",
      features: ["Practical Training", "Lab Sessions", "Project Work", "Technology Access"],
      color: "bg-purple-500",
      students: "2,900+ Students",
      duration: "4-18 months"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research Center",
      description: "Fostering creativity and innovation through research projects and collaborative learning environments.",
      features: ["Research Projects", "Innovation Labs", "Collaboration Spaces", "Publication Support"],
      color: "bg-orange-500",
      students: "1,600+ Students",
      duration: "6-36 months"
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
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Services</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Services We <span className="text-pink-300">Proudly Offer</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              We provide comprehensive educational services designed to empower students and professionals with the knowledge, skills, and opportunities needed for success in today's dynamic global marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {service.students}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
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
              Why Choose Our <span className="text-primary">Services?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the education industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Star, title: "Expert Faculty", desc: "World-class instructors with industry experience" },
              { icon: Globe, title: "Global Recognition", desc: "Internationally recognized certifications" },
              { icon: Users, title: "Personalized Support", desc: "One-on-one guidance throughout your journey" },
              { icon: Award, title: "Proven Results", desc: "98% success rate in student outcomes" }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their goals through our comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
