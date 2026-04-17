"use client";
import { ArrowUpRightIcon } from "lucide-react";
import Toggle from "../Global/AnimatedToogle";
import { motion } from "framer-motion";
const MainTextContent = () => {
  return (
    <>
      {" "}
      <p className="text-neutral-400 text-left flex gap-1 overflow-hidden uppercase text-[10px] tracking-widest mb-4">
        {["EMPOWERING", "FINANCIAL", "INNOVATION"].map((word, i) => (
          <GlideText key={word} text={word} delay={i * 0.1} />
        ))}
      </p>
      <h1 className="text-4xl text-left  font-bold mb-6 text-gray-800">
        <span className="relative  space-x-1">
          {/* We Support{" "} */}
          {["We", "Support"].map((word, i) => (
            <GlideText key={word} text={word} delay={i * 0.1} />
          ))}
          <motion.span
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="w-10 h-10 top-0 -right-15 rounded-full absolute bg-neutral-800 flex items-center justify-center"
          >
            <ArrowUpRightIcon className="text-white" />
          </motion.span>
        </span>
        <span className="lg:text-7xl flex items-center justify-center md:text-5xl text-4xl">
          <span className="leading-none text-shadow-[8px_4px_6px_rgba(103,103,103,0.1)]">
            {/* GR */}
            {["GR"].map((word, i) => (
              <GlideText key={word} text={word} delay={i * 0.1} />
            ))}
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="leading-none"
          >
            <Toggle />
          </motion.span>
          <span className="leading-none text-shadow-[8px_4px_6px_rgba(103,103,103,0.1)]">
            {/* WTH */}
            {["WTH"].map((word, i) => (
              <GlideText key={word} text={word} delay={i * 0.1} />
            ))}
          </span>
        </span>
        <span className="space-x-1">
          {/* of your business */}
          {["of", "your", "business"].map((word, i) => (
            <GlideText key={word} text={word} delay={i * 0.1} />
          ))}
        </span>
      </h1>
      <motion.p
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        className="text-sm max-w-xl text-left text-neutral-500"
      >
        At SOFT-TECH Solutions, we don’t just deliver projects on time, we build
        interactive, long-term partnerships based on trust, accessibility, and
        competitive value.
      </motion.p>
      <div className="mt-6">
        <button className="bg-brand2/90 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold gap-2 flex items-center px-8 py-3 rounded-full hover:bg-brand2 transition-all shadow-lg">
          Contact Us <ArrowUpRightIcon size={18} />
        </button>
      </div>
    </>
  );
};

export default MainTextContent;

interface GlideTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export function GlideText({ text, delay = 0, className }: GlideTextProps) {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
        verticalAlign: "bottom",
      }}
    >
      <motion.span
        className={className}
        style={{ display: "inline-block" }}
        initial={{ y: 60, skewY: 4, opacity: 0 }}
        animate={{ y: 0, skewY: 0, opacity: 1 }}
        transition={{
          delay,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1], // custom spring-like easing
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}
