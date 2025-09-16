"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const navLinks = [
    // { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Courses", path: "/courses" },
    { name: "Employers", path: "/employers" },
   
    { name: "Accreditations", path: "/accreditations" },

    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[99999] bg-white/85 backdrop-blur-md shadow-sm border-b-2 border-watney ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/watney.png"
            alt="Watney College Logo"
            width={200}
            height={60}
            className="h-28 w-auto p-4"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.subItems ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => {
                  if (submenuTimeout.current)
                    clearTimeout(submenuTimeout.current);
                  setOpenSubMenu(link.name);
                }}
                onMouseLeave={() => {
                  submenuTimeout.current = setTimeout(
                    () => setOpenSubMenu(null),
                    200
                  );
                }}
              >
                <button
                  className="text-gray-700 hover:text-watney font-medium transition-colors duration-200 flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={openSubMenu === link.name}
                  onClick={() =>
                    setOpenSubMenu(openSubMenu === link.name ? null : link.name)
                  }
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg transition-opacity duration-200 ${
                    openSubMenu === link.name
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => {
                    if (submenuTimeout.current)
                      clearTimeout(submenuTimeout.current);
                  }}
                  onMouseLeave={() => {
                    submenuTimeout.current = setTimeout(
                      () => setOpenSubMenu(null),
                      200
                    );
                  }}
                >
                  <ul className="py-2 w-48">
                    {link.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-watney font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-watney transition-all duration-200 group-hover:w-full"></span>
              </Link>
            )
          )}
        </nav>

        {/* "Apply Now" Button for Desktop */}
        <div className="hidden lg:block space-x-4">
          <a
            href="https://system.klaspad.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-watney-primary">VLE</Button>
          </a>

          <Link href="/courses">
            <Button className="btn-watney-primary ">Apply Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white transform transition-transform duration-300 shadow-2xl ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/watney-logo.png"
                alt="Watney College Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-2">
              {navLinks.map((link) =>
                link.subItems ? (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setOpenSubMenu(
                          openSubMenu === link.name ? null : link.name
                        )
                      }
                      className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-gray-700 hover:text-watney-blue-primary hover:bg-watney-blue-light transition-all duration-200"
                    >
                      <span className="font-medium">{link.name}</span>
                      {openSubMenu === link.name ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {openSubMenu === link.name && (
                      <div className="pl-6 mt-1 space-y-1">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-watney-blue-primary hover:bg-watney-blue-light transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">{link.name}</span>
                  </Link>
                )
              )}
            </nav>

            <div className="mt-8">
              <Link href="/courses">
                <Button
                  className="w-full btn-watney-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
