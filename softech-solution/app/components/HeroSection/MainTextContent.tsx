"use client";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import StarBorder from "@/components/StarBorder";

const MainTextContent = () => {
  return (
    <div className="flex flex-col mt-12 items-start w-full max-w-2xl">
      {/* Subheading */}
      <div className="text-neutral-400 text-start flex gap-2 overflow-hidden uppercase text-[12px] tracking-[0.2em] mb-4">
        {["EMPOWERING", "FINANCIAL", "INNOVATION"].map((word, i) => (
          <GlideText key={word} text={word} delay={i * 0.1} />
        ))}
      </div>

      {/* Main Heading */}
      <h1 className="lg:text-6xl md:text-5xl text-4xl  leading-[1.1] font-bold mb-8 text-[#1a2b3b] flex flex-col items-start">
        <span className="flex items-center gap-4">
          <span className="flex gap-2">
            {["We", "Support"].map((word, i) => (
              <GlideText key={word} text={word} delay={i * 0.1 + 0.3} />
            ))}
          </span>
          {/* Arrow Icon Badge */}
          <motion.span
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center"
          >
            <ArrowUpRightIcon className="text-white" size={24} />
          </motion.span>
        </span>

        <motion.span
          initial={{ border: 0 }}
          animate={{ border: 1, borderColor: "#4ADE80" }}
          transition={{ delay: 1 }}
          className="lg:text-6xl md:text-5xl text-4xl relative  m-1 pl-2 pr-6   bg-green-100 tracking-tight"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute w-2 h-2 border border-green-500 bg-green-200 -top-1 -left-1 "
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute w-2 h-2 border border-green-500 bg-green-200 -top-1  -right-1 "
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute w-2 h-2 border border-green-500 bg-green-200 -right-1 -bottom-1"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute w-2 h-2 border border-green-500 bg-green-200 -left-1 -bottom-1"
          />
          Growth
        </motion.span>

        <span className="flex gap-2 lg:text-6xl md:text-5xl text-4xl">
          {["of", "your", "business"].map((word, i) => (
            <GlideText key={word} text={word} delay={i * 0.1 + 0.6} />
          ))}
        </span>
      </h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-sm lg:text-md text-start leading-relaxed max-w-sm text-neutral-500 mb-8"
      >
        At SOFT-TECH Solutions, we don’t just deliver projects on time, we build
        interactive, long-term partnerships based on trust, accessibility, and
        competitive value.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <StarBorder
          as="button"
          className="custom-class"
          color="magenta"
          speed="2s"
        >
          Contact Us <ArrowUpRightIcon size={20} />
        </StarBorder>
      </motion.div>
    </div>
  );
};

export default MainTextContent;

interface GlideTextProps {
  text: string;
  delay?: number;
}

export function GlideText({ text, delay = 0 }: GlideTextProps) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", skewY: 5 }}
        animate={{ y: 0, skewY: 0 }}
        transition={{
          delay,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}
