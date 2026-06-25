"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Code, Server, Shield } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const categories = [
    {
      title: "Frontend Engineering",
      icon: Code,
      skills: siteConfig.skills.frontend,
      description: "Building responsive, modern, dynamic client interfaces and cross-platform mobile apps."
    },
    {
      title: "Backend & Databases",
      icon: Server,
      skills: siteConfig.skills.backend,
      description: "Developing scalable backend servers, APIs, databases, and serverless workflows."
    },
    {
      title: "Security, Languages & Tools",
      icon: Shield,
      skills: siteConfig.skills.toolsAndSecurity,
      description: "Assessing system safety, automating builds, containerization, and platform development."
    }
  ];

  return (
    <section id="skills" className="relative bg-[#050505] py-24 md:py-32">
      {/* Background decoration elements */}
      <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/3 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#002200]/5 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div ref={ref} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Technical Stack
          </motion.h2>
          <p className="mt-4 text-base text-secondary-text max-w-2xl mx-auto">
            A comprehensive toolbox of programming languages, libraries, platforms, and cybersecurity protocols I work with.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 h-1 w-20 bg-accent text-glow origin-center"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIndex) => {
            const IconComponent = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#101010] p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_25px_rgba(0,214,0,0.02)] group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-secondary-text leading-relaxed mb-8">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default rounded-md bg-white/5 border border-white/5 hover:border-accent/40 hover:bg-accent/5 px-3 py-1.5 text-sm font-semibold text-white/95 transition-all duration-300 hover:text-accent hover:shadow-[0_0_15px_rgba(0,214,0,0.15)]"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
