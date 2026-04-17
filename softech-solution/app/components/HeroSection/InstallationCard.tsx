"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { Download } from "lucide-react";

const InstallationCard = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setValue(7000);
    }
  }, [isInView]);

  return (
    <div className="absolute overflow-hidden left-20 top-20 perspective-[1000px]">
      <motion.div
        ref={ref}
        initial={{
          y: 40,
          scale: 0.9,
          opacity: 0,
          rotateX: 20,
          rotateY: 15,
          filter: "blur(10px)",
        }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          rotateX: -10,
          rotateY: 14,
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
                   bg-orange-50 ring-2 ring-orange-200 rounded-lg shadow-md"
      >
        <div className="flex items-center">
          <AnimatedNumber
            className="text-2xl font-semibold text-orange-500"
            springOptions={{
              bounce: 0,
              duration: 15000,
            }}
            value={value}
          />
          <p className="text-md text-orange-400 ml-1">+</p>
        </div>

        <p className="text-orange-500">Installations</p>
      </motion.div>
    </div>
  );
};

export default InstallationCard;
