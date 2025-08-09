"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Star,
  CheckCircle,
  BookOpen,
  Building,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Info,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.5,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};


const affiliates = [
  {
    name: "SMS",
    service: "Student Support Services",
    email: "sms@watneycollege.com",
    logo: "/logos/sms.png",
    link: "/affiliates/sms"
  },
  {
    name: "Icare",
    service: "Healthcare Consultations",
    email: "icare@watneycollege.com",
    logo: "/logos/icare.png",
    link: "/affiliates/icare"
  },
  {
    name: "Care Square",
    service: "Community Outreach Programs",
    email: "caresquare@watneycollege.com",
    logo: "/logos/caresquare.png",
    link: "/affiliates/caresquare"
  },
  {
    name: "Medicare Link",
    service: "Medical Insurance Coordination",
    email: "medicarelink@watneycollege.com",
    logo: "/logos/medicare.png",
    link: "/affiliates/medicare-link"
  },
  {
    name: "Everycare Romford",
    service: "Local Healthcare Services",
    email: "everycareromford@watneycollege.com",
    logo: "/logos/everycare.png",
    link: "/affiliates/everycare-romford"
  }
];



export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partner with <span className="text-pink-200">Watney College</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100  mx-auto leading-relaxed">
              Join our network of trusted partners and help us empower students across London and beyond.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="#affiliates">
                Explore Our Affiliates <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

     <section id="affiliates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className=" mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-primary/15 text-primary">
            Our Affiliates
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Trusted Partners in Education & Healthcare
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Watney College collaborates with leading organizations to provide
            comprehensive support to our students.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {affiliates.map((affiliate, index) => (
            <motion.div
              key={affiliate.name}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={affiliate.link}>
                <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 cursor-pointer transition-all h-full flex flex-col items-center text-center">
                  {/* Logo */}
                  <div className="w-20 h-20 mb-4 relative">
                    <Image
                      src={affiliate.logo}
                      alt={`${affiliate.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {affiliate.name}
                  </h3>

                  {/* Service */}
                  <p className="text-gray-600 mb-3">{affiliate.service}</p>

                  {/* Contact */}
                  <a
                    href={`mailto:${affiliate.email}`}
                    className="text-primary hover:underline text-sm"
                  >
                    {affiliate.email}
                  </a>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground-100 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-primary font-bold mb-6">
              Become an Affiliate Today!
            </h2>
            <p className="text-xl mb-8 text-primary  ">
              Partner with Watney College to reach a growing community of students and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-primary  text-primary hover:bg-primary/90"
              >
                <Link href="/become-an-affiliate">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white"
                asChild
              >
                <Link href="/contact">
                  Contact Us <Info className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}