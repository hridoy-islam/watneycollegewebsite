"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+62");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formState);
    // Reset form or show success message
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };
 const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen ">
      <section className="relative bg-primary text-secondary">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/pattern.png"
            alt="Investment Partnership Background"
            fill
            className="object-cover"
          />
        </div>
        <section className="relative bg-primary text-secondary">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/pattern.png"
              alt="Investment Partnership Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container mx-auto py-16  relative z-10">
            <motion.div   initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-start ">
              <h1 className="text-secondary font-bold mb-4">Contact Us</h1>
              <h3 className="text-secondary font-normal ">
                Have a question or ready to move forward? MRST Consultancy is here to help with expert guidance and personalized support. Contact us today!
              </h3>
            </motion.div>
          </div>
        </section>
      </section>

      <div className="container flex flex-col items-center   py-12 ">
        <div className="w-full  grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="font-bold mb-4 text-primary"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>

            <motion.p className="text-black mb-8" variants={itemVariants}>
              Email, call, or complete the form to learn how MRST Consultancy
              can assist you with your needs.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 mb-2"
              variants={itemVariants}
            >
              <Mail className="h-5 w-5 text-black" />
              <a
                href="mailto:info@mrstconsultancy.com"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                mijan@smsonline.org.uk
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 mb-8"
              variants={itemVariants}
            >
              <Phone className="h-5 w-5 text-gray-500" />
              <a
                href="tel:+9714XXXXXXX"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                +9714 563204619
              </a>
            </motion.div>

            <motion.h3
              className="text-lg font-semibold mb-4 text-primary"
              variants={itemVariants}
            >
              Our Location
            </motion.h3>

            <motion.p
              className="text-black  flex items-start"
              variants={itemVariants}
            >
              <MapPin className="h-5 w-5 mt-2 text-primary  text-start mr-2" />
              MRST CONSULTANCY L.L.C-FZ <br />
              Meydan Grandstand, 6th Floor, Meydan Road, <br /> Nad Al Sheba,
              Dubai, United Arab Emirates
            </motion.p>

            {/* <div className="flex flex-col gap-6 mb-8">
    <motion.div 
      className="bg-white p-5 rounded-lg shadow-sm"
      variants={itemVariants}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <h4 className="font-semibold mb-2 text-gray-800">Customer Support</h4>
      <p className="text-sm text-gray-600">
        Our support team is available around the clock to address any concerns or queries you may have.
      </p>
    </motion.div>
    
    <motion.div 
      className="bg-white p-5 rounded-lg shadow-sm"
      variants={itemVariants}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <h4 className="font-semibold mb-2 text-gray-800">Feedback and Suggestions</h4>
      <p className="text-sm text-gray-600">
        We value your feedback and are continuously working to improve our services. Your input is crucial.
      </p>
    </motion.div>
    
    <motion.div 
      className="bg-white p-5 rounded-lg shadow-sm"
      variants={itemVariants}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <h4 className="font-semibold mb-2 text-gray-800">Media Inquiries</h4>
      <p className="text-sm text-gray-600">
        For media-related questions or press inquiries, please contact us at media@mrstconsultancy.com.
      </p>
    </motion.div>
  </div> */}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">You can reach us anytime</p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="sr-only">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="sr-only">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="mb-4 relative">
                  <label htmlFor="phone" className="sr-only">
                    Phone number
                  </label>
                  <div className="flex">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="sr-only">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we help?"
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit
                </motion.button>

                {/* <p className="text-xs text-center text-gray-500 mt-4">
                  By contacting us, you agree to our{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p> */}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
