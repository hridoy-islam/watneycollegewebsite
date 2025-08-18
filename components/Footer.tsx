"use client";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  GraduationCap,
  BookOpen,
  Facebook,
  Linkedin,
  Instagram,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const academicLinks = [
    { name: "Policies", href: "/acc" },
    { name: "Access And Participation Statement", href: "/acc" },
    { name: "Student Protection Plan", href: "/acc" },
    { name: "Governance and Management", href: "/acc" },
    { name: "Accident and Emergency Support", href: "/acc" },
    { name: "Prevent Duty Statement", href: "/prevent-duty-statement" },
    { name: "Academic Calendar", href: "/academic-calendar" },
    { name: "Fire Safety", href: "/fire-safety" },
  ];

  const campusLinks = [
    { name: "KLASPAD (VLE)", href: "/klaspad" },
    { name: "Partners", href: "/partners" },
    { name: "Recruitment", href: "/career-employability" },
    { name: "Verify", href: "/verify" },
    { name: "Student Finance", href: "/student-finance" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Career & Employablity", href: "/career-employability" },
    { name: "Request a prospectus", href: "/prospectus" },
  ];

  const aboutLinks = [
    { name: "About Watney College", href: "/about" },
    { name: "Our History", href: "/about/history" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "Careers at Watney", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-primary  ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/whitelogo.png"
                alt="Watney College Logo"
                width={200}
                height={60}
                className="h-48 w-auto mb-4"
              />
            </div>

            {/* <p className="text-gray-600 leading-relaxed mb-6">
              Watney College is a leading institution in UK higher education,
              committed to academic excellence and student success.
            </p> */}

            {/* Quick Stats */}
            <div className="grid grid-cols-6 gap-1 mb-6">
              <Facebook className="text-2xl text-white mb-1" />
              <Linkedin className="text-2xl text-white mb-1" />
              <Instagram className="text-2xl text-white mb-1" />
              <X className="text-2xl text-white mb-1" />
            </div>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Life Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Campus Life</h3>
            <ul className="space-y-3">
              {campusLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm leading-relaxed">
                    80-82 Nelson Street Whitechapel,
                    <br />
                    London, E1 2DY, United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="tel:+442012345678"
                  className="text-white  transition-colors text-sm"
                >
                  +44 (0) 2080046463
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href="mailto:info@watneycollege.co.uk"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  info@watneycollege.co.uk
                </a>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div className="text-white text-sm">
                  <div>Mon-Fri: 9AM-5PM</div>
                  <div>Sat: 10AM-1PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Watney College. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-white hover:text-watney-blue-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-white hover:text-watney-blue-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookies"
                className="text-white hover:text-watney-blue-primary transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
