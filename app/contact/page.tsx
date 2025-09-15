"use client";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

import type React from "react";

import { Button } from "@/components/ui/button";
import { useState } from "react";



export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   setIsSubmitted(true);
  //   setIsLoading(false);
  //   // Optionally reset form
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return; // Prevent double submission
    setIsLoading(true);

    try {
      // Send to admin
      const adminRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Send confirmation to user
      const userRes = await fetch("/api/send-email-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (adminRes.ok && userRes.ok) {
        setIsSubmitted(true);

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Hide success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // Always stop loading
    }
  };

  return (
    <div className="bg-white">
      <div className="relative">
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Mail className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Get In <span className="text-watney-blue-primary">Touch</span>
            </h1>
            <p className="text-lg  text-gray-600 leading-relaxed  mx-auto">
              We're here to help! Contact Watney College for any inquiries,
              support, or information.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Contact{" "}
                  <span className="text-gradient-watney">Information</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-watney-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-watney-blue-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Our Location
                      </h3>
                      <p className="text-gray-600">
                        80-82 Nelson Street Whitechapel, London, E1 2DY, United
                        Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-watney-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-watney-blue-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Phone Support
                      </h3>
                      <p className="text-gray-600">+44 (0) 2080046463</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-watney-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-watney-blue-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Email Us
                      </h3>
                      <a
                        href="mailto:info@watneycollege.ac.uk"
                        className="text-watney-blue-primary hover:underline"
                      >
                        info@watneycollege.co.uk
                      </a>
                      <p className="text-gray-500 text-sm">
                        We aim to respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-watney-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-watney-blue-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">Mon-Fri: 9AM - 5PM</p>
                      <p className="text-gray-600">Sat: 10AM - 1PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-watney-blue-light rounded-3xl p-8 shadow-xl border border-watney-blue-accent">
                <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
                  Send Us a Message
                </h2>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <Mail className="w-20 h-20 text-watney-blue-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Thank You for Your Message!
                    </h3>
                    <p className="text-gray-600">
                      We have received your inquiry and will get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watney-blue-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                        required
                        className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watney-blue-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Subject
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Inquiry about admissions"
                        required
                        className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watney-blue-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-900 font-medium mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Type your message here..."
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-watney-blue-primary focus:border-transparent resize-y"
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full btn-knowera-gradient font-bold py-4 rounded-xl transition-all duration-300 group"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
