"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight, Code, MessageSquare } from "lucide-react";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const subheadings = siteConfig.hero.subheading;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = subheadings[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2500); // Stay on full word
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % subheadings.length);
          setTypingSpeed(100);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 40 : 100);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed, subheadings]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-16">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

      {/* Futuristic Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 animate-blob rounded-full bg-accent/10 blur-[60px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 animate-blob rounded-full bg-[#005500]/10 blur-[80px]" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Premium Top pill */}
              <span className="inline-flex items-center space-x-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-accent uppercase mb-6 w-fit">
                <Code className="h-3.5 w-3.5" />
                <span>Available for Freelance & Contract</span>
              </span>

              {/* Heading */}
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {siteConfig.hero.heading.split(" ").map((word, i) => (
                  <span key={i} className={word === "Reality." ? "text-accent text-glow" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              {/* Animated Subheading / Typing Effect */}
              <div className="mt-4 h-8 sm:h-10 text-xl sm:text-2xl md:text-3xl font-display font-medium text-secondary-text">
                I am a{" "}
                <span className="text-white border-r-2 border-accent pr-1 animate-pulse">
                  {currentText}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base text-secondary-text sm:text-lg">
                {siteConfig.hero.description}
              </p>

              {/* CTA Button Group */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="group relative inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,214,0,0.5)] active:scale-95 cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center justify-center rounded-md border border-white/10 bg-[#101010] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent cursor-pointer"
                >
                  View Projects
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-[#101010] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:text-accent cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  Hire Me
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Avatar Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,214,0,0.15)_0%,transparent_70%)] animate-pulse-slow" />
              
              {/* Spinning futuristic border */}
              <div className="absolute inset-6 rounded-full border border-dashed border-accent/20 animate-spin-slow" />

               {/* Floating inner glass IDE window with 3D wobble */}
               <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotateX: [0, 4, -4, 0],
                    rotateY: [0, -6, 6, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "easeInOut" 
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                  className="relative z-10 w-[280px] h-[280px] sm:w-[340px] sm:h-[320px] rounded-2xl glass flex flex-col justify-between border-accent/20 shadow-2xl shadow-black/80 p-6 text-left font-mono"
               >
                 {/* Window Header */}
                 <div className="flex items-center space-x-2 border-b border-white/5 pb-3">
                   <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                   <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                   <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                   <span className="text-[11px] text-secondary-text ml-2">satyam.ts</span>
                 </div>

                 {/* Code Editor Body */}
                 <div className="mt-4 flex-1 space-y-1.5 text-[11px] sm:text-[13px] text-white/90">
                   <p><span className="text-accent">const</span> developer = &#123;</p>
                   <p className="pl-4">name: <span className="text-accent">&apos;Satyam Tiwari&apos;</span>,</p>
                   <p className="pl-4">role: <span className="text-accent">&apos;Founder &amp; DevSecOps&apos;</span>,</p>
                   <p className="pl-4">experience: <span className="text-[#00D600]">&apos;7+ Years&apos;</span>,</p>
                   <p className="pl-4">skills: [</p>
                   <p className="pl-8"><span className="text-[#00D600]">&apos;Next.js&apos;</span>, <span className="text-[#00D600]">&apos;React Native&apos;</span>,</p>
                   <p className="pl-8"><span className="text-[#00D600]">&apos;TypeScript&apos;</span>, <span className="text-[#00D600]">&apos;Docker&apos;</span>,</p>
                   <p className="pl-8"><span className="text-[#00D600]">&apos;Cyber Security&apos;</span></p>
                   <p className="pl-4">],</p>
                   <p className="pl-4">hardened: <span className="text-[#00D600]">true</span></p>
                   <p>&#125;;</p>
                 </div>

                 {/* Window Footer */}
                 <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] text-secondary-text">
                   <span>UTF-8</span>
                   <span className="flex items-center gap-1.5">
                     <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                     active
                   </span>
                 </div>
               </motion.div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-12 left-6 z-20 rounded-md glass border-accent/20 px-3 py-1.5 text-xs font-semibold text-accent hidden sm:flex items-center gap-1.5 shadow-lg shadow-black/50"
              >
                <div className="h-2 w-2 rounded-full bg-accent animate-ping" />
                Next.js
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-16 right-4 z-20 rounded-md glass border-accent/20 px-3 py-1.5 text-xs font-semibold text-accent hidden sm:flex items-center gap-1.5 shadow-lg shadow-black/50"
              >
                <div className="h-2 w-2 rounded-full bg-accent animate-ping" />
                Cyber Security
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
