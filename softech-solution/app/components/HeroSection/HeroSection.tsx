"use client";

import { motion } from "framer-motion";
import MainTextContent from "./MainTextContent";
import BackgroundDecoration from "@/app/components/HeroSection/BackgroundDecoration";
import IntegrationCard from "./IntegrationCard";
import InstallationCard from "./InstallationCard";
import StateCard from "./StateCard";
import ClientCard from "./ClientsCard";

const HeroSection = () => {
  return (
    <div className="flex items-center flex-col w-full relative min-h-screen justify-center overflow-hidden">
      <BackgroundDecoration />

      {/* Main Container */}
      <div className="max-w-7xl w-full z-10 px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto h-full py-20">
        {/* Left Section: Text Content */}
        <motion.div
          className="flex flex-col items-start justify-center text-left w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MainTextContent />
        </motion.div>

        {/* Right Section: Decorative Cards */}
        <motion.div
          className="relative w-full h-full min-h-[500px] hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Positioning these cards using 'absolute' allows you to stack 
              them or scatter them to match the "floating UI" aesthetic 
          */}
          {/* <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 z-40">
              <IntegrationCard />
            </div>
            <div className="absolute top-20 right-0 z-30">
              <InstallationCard />
            </div>
            <div className="absolute bottom-10 left-10 z-20">
              <StateCard />
            </div>
            <div className="absolute bottom-0 right-5 z-10">
              <ClientCard />
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
