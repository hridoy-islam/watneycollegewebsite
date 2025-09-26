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
  // {
  //   name: "SMS Higher Education Group",
  //   service:
  //     "SMS Higher Education Group (SMS HEG) has extensive experience supporting students who aspire to study in the UK. Collaborating with a wide network of institutions offering diverse courses, the organisation focuses on a student-first approach that shapes its role as a trusted education consultancy.",
  //   logo: "/affiliates/sms.png",
  //   link: "https://smsheg.co.uk/",
  // },
  // {
  //   name: "IEEUK",
  //   service:
  //     "International Education Exchange (IEE) works with leading UK colleges and universities to place the right people in the right opportunities, both locally and internationally. The organisation values openness, with friendly service at its core, and is committed to building strong, effective relationships with all stakeholders and partners. IEE has supported students across Europe in achieving British degrees.",
  //   logo: "/affiliates/icare.png",
  //   link: "https://ieeuk.com/",
  // },
  // {
  //   name: "Medicare",
  //   service:
  //     "Medicare Training delivers accredited, flexible courses for individuals and organisations in health and social care. Through workshops, virtual classrooms, and online learning, the organisation provides engaging, compliant training on topics such as medicine administration, safeguarding, infection control, and equality. With expert tutors and accessible formats, Medicare Training has supported hundreds of learners in gaining essential qualifications.",
  //   logo: "/affiliates/medicare.png",
  //   link: "https://medicaretraining.co.uk/",
  // },
  {
    name: "Care Square",
    service:
      "Care Square is delighted to collaborate with residents of London Borough of Barking and Dagenham, Havering, Redbridge, Tower Hamlet and Newham to deliver supported living for the people in need.",
    logo: "/affiliates/caresquare.png",
    link: "https://caresquare.org.uk/",
  },
  {
    name: "Medicare Link",
    service:
      "Established in 1993, Everycare provides home care support to individuals allowing them to remain in the comfort and familiar surroundings of their own home.",
    logo: "/affiliates/medicare-link.png",
    link: "https://medicarelink.co.uk/",
  },
  {
    name: "Everycare Romford",
    service:
      "We believe that the elders in any society are the most precious members of our community. They have endured world wars and have the most life experiences that we can only learn from, hence they should be given the respect they deserve, with a person-centered approach that focuses on the individual and their own distinctive personality.",
    logo: "/affiliates/everycare.png",
    link: "https://everycare.co.uk/romford/",
  },
];

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
          <div className="absolute right-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none rotate-180  z-10"></div>
        <div className="absolute left-96  top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-contain bg-center pointer-events-none  z-10"></div>
        {/* Hero Section */}
        <section className=" relative bg-ocean-breeze py-20 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-watney-blue-primary" />
              </div>
              <h1 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold mb-6">
                Partner with{" "}
                <span className="text-watney-blue-primary">Watney College</span>
              </h1>
              <p className="text-lg mb-8 text-gray-600  mx-auto leading-relaxed">
                Join our network of trusted partners and help us empower
                students across London and beyond.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Trusted Partners in{" "}
                <span className="text-gradient-watney">
                  Education & Healthcare
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Watney College collaborates with leading organizations to
                provide comprehensive support to our students.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-50">
              {affiliates.map((affiliate, index) => (
                <motion.div
                  key={affiliate.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex z-50"
                >
                  <div className="w-full">
                    <div className="bg-white hover:shadow-md rounded-xl p-6 cursor-pointer transition-all h-full flex flex-col items-center text-center">
                      {/* Logo */}
                      <div
                        className={`${
                          affiliate.name === "SMS Higher Education Group" ||
                          affiliate.name === "Medicare Link"
                            ? "w-40 h-28"
                            : "w-32 h-24"
                        } mb-4 relative flex items-center justify-center`}
                      >
                        <Image
                          src={affiliate.logo}
                          alt={`${affiliate.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Service */}
                      <p className="text-gray-600 text-justify mb-4 flex-grow">
                        {affiliate.service}
                      </p>

                      {/* Learn More Button */}
                      <Button asChild className="">
                        <a
                          href={affiliate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-soft-sky text-white text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-black font-bold mb-6">
                Become an Affiliate Today!
              </h2>
              <p className="text-xl mb-8 text-gray-600  ">
                Partner with Watney College to reach a growing community of
                students and professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  size="lg"
                  asChild
                  className="bg-primary text-white hover:bg-primary"
                >
                  <Link href="/become-an-affiliate">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button> */}
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-outline-watney text-primary hover:bg-primary hover:text-white"
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
    </div>
  );
}
