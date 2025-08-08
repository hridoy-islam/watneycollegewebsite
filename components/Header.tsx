"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, ChevronDown, ChevronRight, X } from "lucide-react";
import logo from "@/public/watney.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [openDeepSubMenuIndices, setOpenDeepSubMenuIndices] = useState<
    Record<number, number | null>
  >({});
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", path: "/" },
  
    { name: "Courses", path: "/courses" },
    // { name: "Partnership", path: "/partnership" },
    // {
    //   name: "Investment Opportunity",
    //   subItems: [
    //     {
    //       name: "Real Estate Development",
    //       path: "/invesment-opportunities/real-estate",
    //     },
    //     {
    //       name: "Export Import",
    //       path: "/invesment-opportunities/export-import",
    //     },
    //     {
    //       name: "Student Career Service",
    //       path: "/invesment-opportunities/career",
    //     },
    //     {
    //       name: "Financial and Mutual Investment Opportunities",
    //       subItems: [
    //         {
    //           name: "Forex Investment",
    //           path: "/invesment-opportunities/financial-investment/forex",
    //         },
    //         {
    //           name: "Crypto Investment",
    //           path: "/invesment-opportunities/financial-investment/crypto",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Software Development (Tailor-made Solution)",
    //       path: "/invesment-opportunities/software-development",
    //     },
    //     {
    //       name: "Business Funding",
    //       path: "/invesment-opportunities/business-funding",
    //     },
    //   ],
    // },
    {
      name: "Partners",
      subItems: [
        {
          name: "Affiliate Partners",
          path: "/partners/affiliate",
        },
        {
          name: "Accreditions",
          path: "/partners/accreditations",
        },
       
      ],
    },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;
      setHideNavbar(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-secondary shadow-lg`}
    >
      {/* Mobile Topbar */}
      <div className="hidden px-4 max-md:flex justify-between items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon className="w-6 h-6 text-primary" />
        </button>
        <Link href="/">
          <Image src={logo} alt="logo" width={60}  />
        </Link>
      </div>

      {/* Desktop Navbar */}
      <div className="container">
        <div
          className="w-full font-medium bg-secondary hidden md:flex items-center justify-between"
          ref={desktopMenuRef}
        >
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={60}  />
          </Link>
          <div className="flex gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                onMouseEnter={() => {
                  if (hoverTimeout) clearTimeout(hoverTimeout);
                  setActiveMenuIndex(index);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setActiveMenuIndex(null);
                  }, 300); // 300ms delay before hiding
                  setHoverTimeout(timeout);
                }}
              >
                {item.path ? (
                  <Link
                    href={item.path}
                    className="py-2 rounded-md transition-all duration-300 relative flex items-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="py-2 cursor-pointer relative flex items-center font-medium">
                    {item.name}
                    {item.subItems && (
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={{
                          rotate: activeMenuIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    )}
                  </span>
                )}

                {/* Dropdown */}
                {/* Dropdown for Desktop */}
                {item.subItems && (
                  <div
                    className={`absolute left-0 top-full mt-2 bg-white text-black rounded shadow-xl ${
                      activeMenuIndex === index ? "block" : "hidden"
                    } z-50 min-w-[250px]`}
                    onMouseEnter={() => {
                      if (hoverTimeout) clearTimeout(hoverTimeout);
                      setActiveMenuIndex(index);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setActiveMenuIndex(null);
                      }, 300);
                      setHoverTimeout(timeout);
                    }}
                  >
                    {item.subItems.map((sub, i) =>
                      sub.subItems ? (
                        <div
                          key={i}
                          className="relative group/item"
                          onMouseEnter={() =>
                            setOpenDeepSubMenuIndices((prev) => ({
                              ...prev,
                              [index]: i,
                            }))
                          }
                          onMouseLeave={() =>
                            setOpenDeepSubMenuIndices((prev) => ({
                              ...prev,
                              [index]: null,
                            }))
                          }
                        >
                          <div className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer group-hover/item:bg-primary group-hover/item:text-white transition-all duration-200 flex items-center justify-between  ">
                            {sub.name}
                            <motion.span
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </motion.span>
                          </div>
                          <div
                            className="absolute left-full top-0 bg-white shadow-lg min-w-[220px] z-50"
                            style={{
                              display:
                                activeMenuIndex === index &&
                                openDeepSubMenuIndices[index] === i
                                  ? "block"
                                  : "none",
                            }}
                          >
                            {sub.subItems.map((deepSub, j) => (
                              <Link
                                key={j}
                                href={deepSub.path}
                                className="block px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200 "
                              >
                                {deepSub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={i}
                          href={sub.path}
                          className="block px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200"
                        >
                          {sub.name}
                        </Link>
                      )
                    )}
                  </div>
                )}

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="fixed top-0 right-0 w-64 h-screen bg-primary shadow-lg md:hidden flex flex-col p-6 z-[90] overflow-y-auto"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-2xl mb-6 text-white"
            >
              <X className="w-6 h-6" />
            </button>
            {menuItems.map((item, index) => (
              <div key={index} className="mb-2">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenSubMenuIndex(
                          openSubMenuIndex === index ? null : index
                        )
                      }
                      className="text-white font-medium py-2 w-full text-left flex items-center"
                    >
                      {item.name}
                      <motion.span
                        animate={{
                          rotate: openSubMenuIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openSubMenuIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 text-white space-y-1"
                        >
                          {item.subItems.map((sub, subIdx) =>
                            sub.subItems ? (
                              <div key={subIdx}>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOpenDeepSubMenuIndices((prev) => ({
                                      ...prev,
                                      [index]:
                                        prev[index] === subIdx ? null : subIdx,
                                    }));
                                  }}
                                  className="font-medium py-1 w-full text-left flex items-center"
                                >
                                  {sub.name}
                                  <motion.span
                                    animate={{
                                      rotate:
                                        openDeepSubMenuIndices[index] === subIdx
                                          ? 90
                                          : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="ml-1"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </motion.span>
                                </button>
                                <AnimatePresence>
                                  {openDeepSubMenuIndices[index] === subIdx && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="pl-3 text-sm space-y-1"
                                    >
                                      {sub.subItems.map((deepSub, deepIdx) => (
                                        <Link
                                          key={deepIdx}
                                          href={deepSub.path}
                                          className="block py-1"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {deepSub.name}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                key={subIdx}
                                href={sub.path}
                                className="block text-sm py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="block py-2 text-white text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
