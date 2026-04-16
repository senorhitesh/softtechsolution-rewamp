"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

const ClientCard = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setValue(1200);
    }
  }, [isInView]);

  return (
    <div className="absolute left-20 bottom-20 perspective-[1000px]">
      <motion.div
        ref={ref}
        initial={{
          y: 20,
          scale: 0.9,
          opacity: 0,
          rotateX: -15,
          rotateY: 20,
          filter: "blur(10px)",
        }}
        animate={{
          y: [0, -10, 0],
          scale: 1,
          opacity: 1,
          rotateX: 6,
          rotateY: 12,
          filter: "blur(0px)",
        }}
        whileHover={{
          rotateX: 0,
          rotateY: 0,
          scale: 1.05,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="px-8 py-4 flex flex-col items-center justify-center 
                   bg-green-50 ring-2 ring-green-200 rounded-lg shadow-md"
      >
        <div className="flex items-center">
          <AnimatedNumber
            className="text-2xl font-semibold text-green-600"
            springOptions={{
              bounce: 0,
              duration: 20000,
            }}
            value={value}
          />
          <p className="text-md text-green-500 ml-1">+</p>
        </div>

        <p className="text-green-600">Happy Clients</p>
      </motion.div>
    </div>
  );
};

export default ClientCard;
