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

export default function AcademicCalendarPage() {



  return (
    <div className="min-h-screen bg-primary">
      
<div className="relative overflow-hidden">
        <div className="absolute right-44 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-44  top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0  z-10"></div>
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

      </div>
    </div>
  )
}
