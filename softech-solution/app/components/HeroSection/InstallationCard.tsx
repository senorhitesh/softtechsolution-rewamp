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
    <div className="w-full overflow-hidden left-20 top-20 perspective-[1000px]">
      <motion.div
        ref={ref}
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
          delay: 1.2,
          duration: 0.8,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="px-4 py-2 flex flex-col items-center justify-center 
                     rounded-lg "
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
