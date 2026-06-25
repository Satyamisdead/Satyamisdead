"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  
  const springConfig = { damping: 40, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,214,0,0.08)_0%,rgba(0,214,0,0)_70%)]"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
    />
  );
}
