"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

const IntegrationCard = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setValue(50);
    }
  }, [isInView]);

  return (
    <div className="absolute right-20 top-20 perspective-[1000px]">
      <motion.div
        ref={ref}
        initial={{
          y: 40,
          scale: 0.9,
          opacity: 0,
          rotateX: 15,
          rotateY: -20,
          filter: "blur(10px)",
        }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          rotateX: -8,
          rotateY: -14,
          filter: "blur(0px)",
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
        className="px-8 py-4 bg-purple-50 ring-2 ring-purple-300 
                   rounded-lg shadow-md flex flex-col items-center justify-center"
      >
        <div className="flex items-center">
          <AnimatedNumber
            className="text-2xl font-semibold text-purple-700"
            springOptions={{
              bounce: 0,
              duration: 15000,
            }}
            value={value}
          />
          <p className="text-md font-medium text-purple-800 ml-1">+</p>
        </div>

        <p className="text-purple-600 text-center">
          Enterprise Integration <br /> Experience
        </p>
      </motion.div>
    </div>
  );
};

export default IntegrationCard;
