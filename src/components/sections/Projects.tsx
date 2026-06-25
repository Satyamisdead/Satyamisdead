"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ExternalLink, FolderGit2, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  url: string;
  description: string;
  tech: string[];
  status: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setCoords({ x: mouseX, y: mouseY });

    // 3D rotation calculation
    const rX = -(mouseY - height / 2) / 12;
    const rY = (mouseX - width / 2) / 12;
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const isLive = project.status === "live";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, rotateX: 12, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.05 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: rotate.x,
        rotateY: rotate.y
      }}
      className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#101010] p-6 sm:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,214,0,0.05)] group"
    >
      {/* Dynamic Cursor Spotlight Radial Mask */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(0, 214, 0, 0.08), transparent 80%)`,
        }}
      />
      
      {/* Hover Card Border Glow Helper */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none card-border-glow" />

      <div>
        {/* Top bar of project card */}
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-accent group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors duration-300">
            <FolderGit2 className="h-5 w-5" />
          </div>
          <div>
            {isLive ? (
              <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Live Demo
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-[#1b1b1b] border border-white/10 px-2.5 py-0.5 text-xs font-semibold text-secondary-text">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-secondary-text" />
                Coming Soon
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-6 font-display text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-secondary-text leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-8">
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded bg-white/5 border border-white/5 px-2 py-1 text-xs font-semibold text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Dynamic CTA link */}
        {isLive ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300"
          >
            Visit Website
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#555555] cursor-not-allowed">
            Swipe Right
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>

    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section id="projects" className="relative bg-[#050505] py-24 md:py-32">
      {/* Background radial overlay */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Featured Projects
          </motion.h2>
          <p className="mt-4 text-base text-secondary-text max-w-2xl mx-auto">
            A handpicked selection of production web apps, mobile products, and client workflows built from concept to launch.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 h-1 w-20 bg-accent text-glow origin-center"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
