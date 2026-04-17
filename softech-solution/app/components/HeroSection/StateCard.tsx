"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

const StateCard = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  if (isInView && value === 0) {
    setValue(26);
  }
  return (
    <div ref={ref} className="w-full right-20 bottom-20 perspective-[1000px]">
      <motion.div
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        whileHover={{
          rotateX: 0,
          rotateY: 0,
          scale: 1.05,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="px-4 py-2 right-12 bottom-12
                   rounded-lg  flex flex-col items-center justify-center"
      >
        {" "}
        <div className="flex  items-center">
          <AnimatedNumber
            className="inline-flex items-center  text-2xl font-semibold text-indigo-600"
            springOptions={{
              bounce: 0,
              duration: 10000,
            }}
            value={value}
          />
          <p className="text-md text-indigo-400">+</p>
        </div>
        <div>
          <p className="text-indigo-600">States Presence in INDIA</p>
        </div>
      </motion.div>
    </div>
  );
};
export default StateCard;
