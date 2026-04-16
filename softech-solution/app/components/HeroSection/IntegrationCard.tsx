"use client";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { motion } from "framer-motion";
const IntegrationCard = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  if (isInView && value === 0) {
    setValue(50);
  }
  return (
    <>
      <motion.div
        initial={{
          y: 40,
          scale: 0.89,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{
          delay: 1,
        }}
        ref={ref}
        className="px-8 py-4 bg-purple-50 ring-2 ring-purple-300 absolute flex flex-col item-center justify-center right-20 top-20  rotate-y-18  rounded-lg "
      >
        {" "}
        <div className="flex  items-center">
          <AnimatedNumber
            className="inline-flex items-center  text-2xl  text-purple-700 font-semibold"
            springOptions={{
              bounce: 0,
              duration: 10000,
            }}
            value={value}
          />
          <p className="text-md font-medium text-purple-800"> +</p>
        </div>
        <div>
          <p className="text-purple-600">
            Enterprise Integration <br /> Experience
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default IntegrationCard;
