"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import Container from "../Shared/Container";
import Logo from "../Shared/Logo";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import AdmissionButton from "../Shared/AdmissionButton";
import contactInfo from "@/data/contact.data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import LanguageSwitcher from "../LanguageSwither/LanguageSwither";
import { useTranslation } from "@/hooks/useTranslation";
export default function Navbar() {
  const { address, email, phone } = contactInfo;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const t = useTranslation();
  const { navItems } = t;
  const sectionIds = useMemo(
    () => navItems.map((link) => link.href.replace("#", "")),
    [navItems]
  );

  const activeId = useScrollSpy(sectionIds, 120);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Smooth Scroll
  const handleNavClick = (href: string) => {
    // href: "#home", "#about", etc
    const id = href.replace("#", ""); // remove #
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close mobile menu
    }
  };
  return (
    <>
      <motion.header
        ref={ref}
        className={`${
          visible && "bg-white shadow-2xl"
        } transition-all duration-300 fixed top-0 left-0 w-full z-50  `}
      >
        <Container>
          <div
            className={`${
              visible ? "hidden" : "flex"
            } justify-center flex-wrap items-center bg-primary py-2 gap-x-10 md:w-4/6 mx-auto rounded-2xl`}
          >
            {/* Address */}
            <div className="flex items-center gap-x-3 text-white">
              <span>
                <MapPin size={20} />
              </span>
              <span>{address}</span>
            </div>
            {/* email */}
            <div className="flex items-center gap-x-3 text-white">
              <span>
                <Mail size={20} />
              </span>
              <span>{email}</span>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-3 text-white">
              <span>
                <Phone size={20} />
              </span>
              <span>{phone}</span>
            </div>
          </div>
          {/* Navigation Bar */}
          <div className="flex py-4 items-center justify-between">
            {/* Logo Section */}
            <div className="shrink-0">
              <a href="#" className="flex items-center space-x-2">
                <div className="bg-white  rounded-full flex items-center justify-center">
                  <Logo />
                </div>
                <span
                  className={`font-bold text-2xl ${
                    visible ? "text-black" : "text-white"
                  } `}
                >
                  GTSC
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-lg cursor-pointer font-medium transition-colors duration-300 hover:text-secondary ${
                      activeId === id
                        ? "text-secondary"
                        : visible
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>
            <div className="flex flex-row-reverse items-center gap-x-3">
              <LanguageSwitcher />
              {/* Desktop call to action */}
              <div className="hidden md:flex items-center space-x-3">
                <AdmissionButton />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${
                  isMenuOpen && "hidden"
                } p-2 text-gray-600 dark:text-gray-300 bg-gray-100  rounded-md`}
                aria-label="Toggle menu"
              >
                <Menu
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />

                <X
                  className={`h-6 w-6  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 bg-opacity-50 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">
                TechBlog
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 dark:text-gray-400 rounded-md hover:bg-gray-100 "
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="grow p-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <AdmissionButton fullWidth />
          </div>
        </div>
      </div>
    </>
  );
}
