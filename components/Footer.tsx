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
    { name: "Policies", href: "/policies" },
    { name: "Access And Participation Statement", href: "/access-and-participation" },
    { name: "Student Protection Plan", href: "/student-protection-plan" },
    { name: "Governance and Management", href: "#" },
    { name: "Accident and Emergency Support", href: "/accident-and-emergency" },
    { name: "Prevent Duty Statement", href: "/prevent-duty-statement" },
    { name: "Academic Calendar", href: "#" },
    { name: "Fire Safety", href: "fire-safety-statement" },
    {
      name: "Staff Login",
      href: "https://app.watneycollege.co.uk/",
      external: true,
    },
  ];

  const campusLinks = [
    { name: "KLASPAD (VLE)", href: "https://www.klaspad.com/", external: true,},
    { name: "Employers & Partners", href: "/employers-and-partners" },
    { name: "Verify", href: "/verify" },
    // { name: "Student Finance", href: "/student-finance" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Career & Employablity", href: "/career-employability" },
    { name: "Request a prospectus", href: "/prospectus" },
     { name: "Jobs", href: "/jobs" },
  ];

  const aboutLinks = [
    { name: "About Watney College", href: "/about" },
    { name: "Our History", href: "/about/history" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "Careers at Watney", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative bg-primary">
  <div className="container mx-auto px-4 py-16">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 text-center lg:text-left">
      {/* College Info */}
      <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
        <div className="mb-6">
          <Image
            src="/whitelogo.png"
            alt="Watney College Logo"
            width={200}
            height={60}
            className="h-48 w-auto mb-4"
          />
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-2xl text-white mb-1 cursor-pointer" />
          </Link>

          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-2xl text-white mb-1 cursor-pointer" />
          </Link>

          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-2xl text-white mb-1 cursor-pointer" />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="text-2xl text-white mb-1 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Academic Links */}
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
        <ul className="space-y-3">
          {academicLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Campus Life Links */}
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
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
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>

        <div className="space-y-4 text-center lg:text-left">
          {/* Address */}
          <div className="flex items-start space-x-3 justify-center lg:justify-start">
            <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
            <div>
              <p className="text-white text-sm leading-relaxed">
                80-82 Nelson Street, Whitechapel,
                <br />
                London, E1 2DY, United Kingdom
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 justify-center lg:justify-start">
            <Phone className="w-5 h-5 text-white flex-shrink-0" />
            <a
              href="tel:+442012345678"
              className="text-white transition-colors text-sm"
            >
              +44 (0) 2080046463
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 justify-center lg:justify-start">
            <Mail className="w-5 h-5 text-white flex-shrink-0" />
            <a
              href="mailto:info@watneycollege.co.uk"
              className="text-white hover:text-white transition-colors text-sm"
            >
              info@watneycollege.co.uk
            </a>
          </div>

          {/* Office Hours */}
          <div className="flex items-start space-x-3 justify-center lg:justify-start">
            <Clock className="w-5 h-5 text-white flex-shrink-0" />
            <div className="text-white text-sm">
              <div>Mon-Fri: 9AM-5PM</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-200 mt-12 pt-8 text-center lg:text-left">
      <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center space-y-4 md:space-y-0">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} Watney College. All rights reserved.
        </p>
        <div className="flex items-center flex-row  space-x-6 text-sm ">
          <Link
            href="/privacy-policy"
            className="text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-white transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/cookies"
            className="text-white transition-colors"
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
