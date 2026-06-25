"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { siteConfig } from "@/config/site";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Security", href: "#security" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll blur & active link tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass py-4 shadow-lg shadow-black/30 border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 font-display text-xl font-bold tracking-tight text-white group">
              <span className="text-accent relative flex items-center justify-center">
                <Terminal className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute h-6 w-6 animate-ping rounded bg-accent/20 opacity-75"></span>
              </span>
              <span className="transition-colors duration-300 group-hover:text-accent">
                {siteConfig.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-sans text-sm font-medium transition-colors duration-300 hover:text-white ${
                    activeSection === item.href ? "text-white" : "text-secondary-text"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute -bottom-[23px] left-0 right-0 h-[2px] bg-accent text-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              
              {/* Hire Me CTA Button */}
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-md border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(0,214,0,0.4)]"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-secondary-text hover:bg-white/5 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 block md:hidden bg-black/60 backdrop-blur-sm"
            />
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[80vw] h-full bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl block md:hidden"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
                  <span className="font-display text-lg font-bold tracking-tight text-white flex items-center space-x-1.5">
                    <Terminal className="h-5 w-5 text-accent" />
                    <span>Navigation</span>
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-md text-secondary-text hover:bg-white/5 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-300 ${
                        activeSection === item.href
                          ? "bg-accent/10 text-accent font-bold"
                          : "text-secondary-text hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA in Drawer */}
              <div className="pt-6 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center rounded-md border border-accent bg-accent px-4 py-3 text-base font-bold text-black shadow-[0_0_15px_rgba(0,214,0,0.3)]"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
