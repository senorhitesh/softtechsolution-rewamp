"use client";

import { motion } from "framer-motion";
import MainTextContent from "./MainTextContent";
import { InfiniteSliderBasic } from "@/app/components/HeroSection/InfiniteSlider";
import BackgroundDecoration from "@/app/components/HeroSection/BackgroundDecoration";
import IntegrationCard from "./IntegrationCard";
import InstallationCard from "./InstallationCard";
import StateCard from "./StateCard";
import ClientCard from "./ClientsCard";

const HeroSection = () => {
  return (
    <div className="flex items-center flex-col w-full relative h-screen justify-center overflow-hidden">
      <BackgroundDecoration />
      {/* Main content */}
      <div className="max-w-7xl w-full z-10 items-center justify-between relative h-screen mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center w-fit mx-auto h-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MainTextContent />
        </motion.div>
      </div>
      <IntegrationCard />
      <InstallationCard />
      <StateCard />
      <ClientCard />
      <InfiniteSliderBasic />
    </div>
  );
};

export default HeroSection;
