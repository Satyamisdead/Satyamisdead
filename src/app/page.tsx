import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Security from "@/components/sections/Security";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CursorGlow from "@/components/ui/CursorGlow";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-accent/20 selection:text-white">
      {/* Dynamic Cursor Glow Follower */}
      <CursorGlow />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex flex-col w-full">
        {/* Hero Landing Section */}
        <Hero />

        {/* Detailed Professional Introduction */}
        <About />

        {/* Interactive Case Studies Grid */}
        <Projects />

        {/* Development & Security Services */}
        <Services />

        {/* Cybersecurity Trust Banner */}
        <Security />

        {/* Full Technology Stack Grid */}
        <Skills />

        {/* Client Reviews Section */}
        <Testimonials />

        {/* Project Request & Consultation Scheduler Form */}
        <Contact />
      </main>

      {/* Global Page Footer */}
      <Footer />
    </div>
  );
}
