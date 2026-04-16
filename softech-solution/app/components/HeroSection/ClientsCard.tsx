"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";

const ClientCard = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  if (isInView && value === 0) {
    setValue(1200);
  }
  return (
    <motion.div
      ref={ref}
      initial={{
        y: 20,
        scale: 0.92,
        opacity: 0,
        filter: "blur(8px)",
      }}
      animate={{
        y: [0, -10, 0],
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay: 1.5,
        damping: 14,
        mass: 0.8,
      }}
      className="px-8 py-4 absolute flex flex-col item-center justify-center left-20 bottom-20 -rotate-x-8 rotate-y-8 bg-green-50 ring-2 ring-green-200 rounded-lg shadow-lg"
    >
      {" "}
      <div className="flex  items-center">
        <AnimatedNumber
          className="inline-flex items-center  text-2xl font-semibold text-green-600"
          springOptions={{
            bounce: 0,
            duration: 100000,
          }}
          value={value}
        />
        <p className="text-md text-green-500">+</p>
      </div>
      <div>
        <p className="text-green-600">Happy Clients</p>
      </div>
    </motion.div>
  );
};

export default ClientCard;
