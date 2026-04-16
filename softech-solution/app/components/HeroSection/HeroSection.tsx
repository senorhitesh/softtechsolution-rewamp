"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import BGGradient from "./BGGradient";
import MainTextContent from "./MainTextContent";
import BGRINGS from "./BGRINGS";

// Tiny sparkle dots scattered around
const sparkles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 90 + 5}%`,
  left: `${Math.random() * 90 + 5}%`,
  size: Math.random() * 6 + 3,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

const Sparkle = ({ s }: { s: (typeof sparkles)[0] }) => (
  <motion.div
    style={{
      position: "absolute",
      top: s.top,
      left: s.left,
      width: s.size,
      height: s.size,
      borderRadius: "50%",
      background: "white",
      pointerEvents: "none",
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.5, 1.3, 0.5],
    }}
    transition={{
      duration: s.duration,
      delay: s.delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  return (
    <div className="flex items-center w-full relative h-screen justify-center overflow-hidden">
      {/* Background */}
      {/* <BGGradient /> */}
      {/* Sparkle dots */}
      {sparkles.map((s) => (
        <Sparkle key={s.id} s={s} />
      ))}
      {/* Decorative rings */}
      <BGRINGS size={1400} />
      <BGRINGS size={700} />
      <BGRINGS size={1000} />

      {/* Main content */}
      <div className="max-w-7xl w-full z-10 items-center relative h-screen mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center w-fit mx-auto h-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MainTextContent />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
