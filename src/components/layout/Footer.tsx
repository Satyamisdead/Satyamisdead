"use client";
import React from "react";
import { Github, Linkedin, Instagram, ArrowUp, Terminal } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] py-12 md:py-16">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center space-x-2 font-display text-xl font-bold tracking-tight text-white group">
              <span className="text-accent relative flex items-center justify-center">
                <Terminal className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute h-6 w-6 animate-ping rounded bg-accent/20 opacity-75"></span>
              </span>
              <span className="transition-colors duration-300 group-hover:text-accent font-bold">
                {siteConfig.name}
              </span>
            </a>
            <p className="text-sm text-secondary-text">
              {siteConfig.hero.heading}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-accent transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#101010] text-secondary-text transition-all duration-300 hover:border-accent hover:text-white hover:shadow-[0_0_10px_rgba(0,214,0,0.2)]"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-secondary-text">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Made with <span className="text-[#ff3b30]">❤️</span> for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
