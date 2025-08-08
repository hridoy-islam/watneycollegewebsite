"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Connect With MRST Consultancy</h2>
            <p className="mt-4 text-lg opacity-90">
              Take the first step toward your international success. Contact our team to schedule a consultation and
              discover how MRST Consultancy can help you achieve your global ambitions.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                  <MailIcon className="h-5 w-5" />
                </div>
                <span>info@mrstconsultancy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <span>Meydan Grandstand, Dubai, UAE</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="#">Our Services</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="#">Schedule a Consultation</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-primary-foreground/10 p-1 backdrop-blur-sm"
          >
            <div className="h-full rounded-lg bg-primary-foreground/10 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="mt-2 opacity-80">Fill out the form below and our team will get back to you shortly.</p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="mb-2 block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full rounded-md border-primary-foreground/20 bg-primary-foreground/10 p-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:ring-primary-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-2 block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full rounded-md border-primary-foreground/20 bg-primary-foreground/10 p-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:ring-primary-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border-primary-foreground/20 bg-primary-foreground/10 p-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:ring-primary-foreground"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border-primary-foreground/20 bg-primary-foreground/10 p-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:ring-primary-foreground"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

