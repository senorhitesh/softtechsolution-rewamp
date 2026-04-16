"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

const InstallationCard = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  if (isInView && value === 0) {
    setValue(7000);
  }
  return (
    <motion.div
      initial={{
        y: 40,
        scale: 0.89,
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{
        delay: 1.2,
      }}
      ref={ref}
      className="px-8 py-4 absolute flex flex-col item-center justify-center left-20 top-20 rotate-x-12 rotate-y-8 bg-orange-50 ring-2 ring-orange-200 rounded-lg shadow-lg"
    >
      {" "}
      <div className="flex  items-center">
        <AnimatedNumber
          className="inline-flex items-center  text-2xl font-semibold text-orange-400"
          springOptions={{
            bounce: 0,
            duration: 10000,
          }}
          value={value}
        />
        <p className="text-md text-orange-400">+</p>
      </div>
      <div>
        <p className="text-orange-400">Installations</p>
      </div>
    </motion.div>
  );
};

export default InstallationCard;
