"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="testimonials" className="relative bg-[#050505] py-24 md:py-32">
      {/* Background blobs */}
      <div className="absolute left-1/4 bottom-1/3 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
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
            Client Reviews
          </motion.h2>
          <p className="mt-4 text-base text-secondary-text max-w-2xl mx-auto">
            Here is what startup founders, technical leads, and operations managers say about working with me.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 h-1 w-20 bg-accent text-glow origin-center"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#101010] p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_25px_rgba(0,214,0,0.02)] group"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-accent mb-6">
                  <Quote className="h-8 w-8 rotate-180 fill-current opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-white/90 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-8 flex items-center border-t border-white/5 pt-6">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white/5 border border-white/10">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-3.5">
                  <h4 className="font-display text-sm font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {t.author}
                  </h4>
                  <p className="text-xs text-secondary-text mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
