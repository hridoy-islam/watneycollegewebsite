"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gradient-to-t from-primary to-primary/80 w-full text-secondary relative">
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-20 h-18 bg-primary rounded-full flex items-center justify-center">
                  <Image
                    src="/watney-white.png" // Replace with your logo image path
                    alt="Watney College Logo"
                    width={80} // Adjust the width as needed
                    height={80} // Adjust the height as needed
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold">WATNEY COLLEGE</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students to achieve their educational dreams through
                innovative programs and personalized support.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white/70 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white/70 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white/70 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white/70 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Featured Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Student Life
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Career Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Alumni Network
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white/70">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Faculty & Staff
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Campus Tours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    Financial Aid
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white/70">
                    International Students
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>
                    80-82 Nelson Street Whitechapel, <br />London, E1 2DY, United
                    Kingdom
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+44 (0) 2080046463</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@watneycollege.co.uk</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-gray-800 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2025 Watney College. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
