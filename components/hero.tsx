"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary w-full min-h-screen flex items-center z-0">
      {/* Full-screen grid background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10  lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-bold tracking-tight">
              Your Gateway to Global Opportunities
            </h1>
            <p className="mt-6 ">
              At MRST Consultancy L.L.C-FZ, we bridge international markets,
              facilitate cross-border investments, and guide students toward
              educational excellence worldwide.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-secondary text-primary"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              {/* <Button asChild variant="outline" size="lg" className="bg-secondary text-primary">
                <Link href="#services">Our Services</Link>
              </Button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
            <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/dubai.jpg" // Corrected path
                  alt="Dubai skyline"
                  className="object-cover"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-lg bg-gradient-to-r from-primary/70 to-primary/40 p-4 ">
                <div>
                  <p className="font-medium">Headquartered in Dubai</p>
                  <p className="text-sm opacity-80">Meydan Grandstand, UAE</p>
                </div>
                <div className="rounded-full bg-primary p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
