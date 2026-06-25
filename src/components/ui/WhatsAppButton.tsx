"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent(
      "Hi Satyam, I visited your portfolio and would like to discuss a project with you."
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="mr-3 hidden sm:block rounded bg-[#101010] border border-[#25d366]/20 px-3 py-1.5 text-xs font-semibold text-white shadow-xl"
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-black shadow-lg shadow-[#25d366]/30 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6 fill-current" />
        {/* Radar ping ring */}
        <span className="absolute inset-0 -z-10 rounded-full animate-ping bg-[#25d366] opacity-75"></span>
      </button>
    </div>
  );
}
