"use client";
import { motion } from "framer-motion";
import MainTextContent from "./MainTextContent";
import BackgroundDecoration from "@/app/components/HeroSection/BackgroundDecoration";
import OrbitalDashboard from "./Orbit";
const HeroSection = () => {
  return (
    <div className="flex items-center flex-col w-full relative min-h-screen justify-center overflow-hidden">
      {/* <BackgroundDecoration /> */}

      {/* Main Container */}
      <div className="max-w-7xl w-full flex  lg:flex-row md:flex-row flex-col  z-10 px-6 sm:px-10   gap-10 items-center mx-auto h-full py-20">
        {/* Left Section: Text Content */}
        <motion.div
          className="flex flex-col items-start c justify-center text-left w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MainTextContent />
        </motion.div>

        {/* Right Section: Decorative Cards */}
        <motion.div
          className="relative w-full h-full min-h-125  hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrbitalDashboard />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
