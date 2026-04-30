"use client";
import { motion } from "framer-motion";
import OrbitalDashboard from "@/app/components/HeroSection/Orbit";
const RightPart = () => {
  return (
    <motion.div
      className="relative w-full lg:w-1/2 flex items-center justify-center min-h-75 sm:min-h-100 lg:min-h-125"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full h-full transform scale-75 sm:scale-90 lg:scale-100 transition-transform duration-500">
        <OrbitalDashboard />
      </div>
    </motion.div>
  );
};

export default RightPart;
