"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

export default function ProspectusPage() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with an API here
    alert(
      "Thank you! Your prospectus request has been sent. We'll email it shortly."
    );
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-80 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-80 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>
        {/* Hero Section */}
        <section className="relative bg-ocean-breeze py-24 text-white">
          <div className="container mx-auto px-6 text-center z-50">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black z-50">
              Request Your{" "}
              <span className="text-watney-blue-primary">Watney College</span>{" "}
              Prospectus
            </h1>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              Discover our range of courses, campus life, student support, and
              career opportunities. Download or request a physical copy of our
              official prospectus today.
            </p>
          </div>
        </section>
        {/* Prospectus Options */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Digital Prospectus Options */}
              <Card className="border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-watney-blue-primary">
                    Watney College Prospectuses
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Explore our programs in Business, Technology, Healthcare,
                    and Education.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-primary text-lg hover:underline"
                      >
                        Download Undergraduate Prospectus (PDF)
                      </a>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-primary text-lg hover:underline"
                      >
                        Download Postgraduate Prospectus (PDF)
                      </a>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-primary text-lg hover:underline"
                      >
                        International Student Guide
                      </a>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-primary text-lg hover:underline"
                      >
                        View Campus Virtual Tour
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Request Physical Copy */}
              <Card className="bg-gradient-to-br from-primary to-primary/90 text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Request a Physical Copy
                  </CardTitle>
                  <CardDescription className="text-white text-lg">
                    Prefer a printed prospectus? Fill out the form and we’ll
                    mail it to you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-white text-lg">
                    Ideal for parents, counselors, and students who want a
                    tangible overview of Watney College.
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-gray-100 text-lg font-semibold py-6"
                    onClick={() => setOpen(true)}
                  >
                    Request a Prospectus <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-soft-sky">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our admissions team is here to help you every step of the way.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <a href="/contact">
                Contact Admissions <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        {/* Prospectus Request Form in shadcn Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white mt-8">
            <DialogHeader>
              <DialogTitle>Request a Prospectus</DialogTitle>
              <DialogDescription>
                Fill in your details and we’ll send it by post.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full address"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interested In *
                </label>
                <select
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a program</option>
                  <option value="business">Business & Leadership</option>
                  <option value="tech">Technology & Data</option>
                  <option value="healthcare">Healthcare & Nursing</option>
                  <option value="education">Education & Training</option>
                </select>
              </div>

              <div className="text-sm text-gray-500">
                <p>
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white text-lg py-3 font-semibold"
                >
                  Send Request
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}