"use client";
import { motion } from "framer-motion";
import MainTextContent from "./MainTextContent";
const LeftSection = () => {
  return (
    <motion.div
      className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <MainTextContent />
    </motion.div>
  );
};

export default LeftSection;
