"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Key, Lock, Eye, ArrowRight } from "lucide-react";

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="security" className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute right-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#00ff00]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 bg-grid-pattern pointer-events-none opacity-25 w-full h-full" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Animated Shield Illustration */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] flex items-center justify-center"
            >
              {/* Spinning security radar grids */}
              <div className="absolute inset-0 rounded-full border border-accent/10 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-dashed border-accent/5 animate-pulse" />

              {/* Glowing background halo */}
              <div className="absolute inset-16 rounded-full bg-accent/10 blur-xl animate-pulse" />

              {/* Main SVG Shield Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10 w-[180px] h-[220px] sm:w-[220px] sm:h-[270px] drop-shadow-[0_0_35px_rgba(0,214,0,0.25)] animate-shield-glow"
              >
                <svg
                  viewBox="0 0 100 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-accent"
                >
                  {/* Shield Outer Path */}
                  <path
                    d="M50 5 L90 20 V60 C90 90 50 115 50 115 C50 115 10 90 10 60 V20 L50 5 Z"
                    fill="url(#shieldGrad)"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Shield Inner Path */}
                  <path
                    d="M50 15 L80 26 V58 C80 81 50 102 50 102 C50 102 20 81 20 58 V26 L50 15 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                  {/* Glowing Core SVG definition */}
                  <defs>
                    <linearGradient id="shieldGrad" x1="50" y1="5" x2="50" y2="115" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgba(0, 214, 0, 0.15)" />
                      <stop offset="100%" stopColor="rgba(0, 214, 0, 0.02)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating center padlock icon inside shield */}
                <div className="absolute inset-0 flex items-center justify-center text-accent">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/60 border border-accent/30 shadow-lg shadow-black/80"
                  >
                    <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-glow text-accent" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Extra cybersecurity details floating around */}
              <div className="absolute top-4 right-4 z-20 h-10 w-10 glass border-accent/20 rounded-lg flex items-center justify-center text-accent shadow-md">
                <Key className="h-5 w-5" />
              </div>

              <div className="absolute bottom-6 left-6 z-20 h-10 w-10 glass border-accent/20 rounded-lg flex items-center justify-center text-accent shadow-md">
                <Eye className="h-5 w-5" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title and Details */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Promo Badge */}
              <span className="inline-flex items-center space-x-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase mb-4">
                <ShieldCheck className="h-3.5 w-3.5 animate-pulse" />
                <span>{siteConfig.securityBanner.offer}</span>
              </span>

              {/* Title */}
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
                {siteConfig.securityBanner.title}
              </h2>
              
              {/* Description */}
              <p className="mt-4 text-base text-secondary-text sm:text-lg">
                {siteConfig.securityBanner.description}
              </p>

              {/* Feature Points */}
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white font-medium">Full Penetration Testing:</strong>
                    <span className="text-secondary-text text-sm ml-1">Simulating real-world cyberattacks to discover loopholes.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white font-medium">Vulnerability Assessment:</strong>
                    <span className="text-secondary-text text-sm ml-1">Continuous scans to check database safety and API vulnerabilities.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent/10 text-accent">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white font-medium">OWASP Top 10 Audits:</strong>
                    <span className="text-secondary-text text-sm ml-1">Hardening web app architectures against injection, XSS, and broken auth.</span>
                  </div>
                </li>
              </ul>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4 pt-4">
                <button
                  onClick={scrollToContact}
                  className="group relative inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,214,0,0.5)] active:scale-95 cursor-pointer"
                >
                  Get Website Security Audit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-[#101010] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
