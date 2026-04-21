"use client";
import { motion } from "framer-motion";
import MainTextContent from "./MainTextContent";
import OrbitalDashboard from "./Orbit";
import Particles from "@/components/Particles";

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full  flex items-center justify-center overflow-hidden bg-background">
        {/* <BackgroundDecoration /> */}

        {/* Main Container */}
        <div className="container mx-auto px-6 sm:px-10  ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
            {/* Left Section: Text Content */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <MainTextContent />
            </motion.div>

            {/* Right Section: Decorative Visual */}
            <motion.div
              className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-full h-full transform scale-75 sm:scale-90 lg:scale-100 transition-transform duration-500">
                <OrbitalDashboard />
              </div>
            </motion.div>
          </div>
        </div>
        {/* <Particles
          particleColors={["#2bfb57"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover
          alphaParticles
          disableRotation={true}
          pixelRatio={1}
          className={""}
        /> */}
      </section>
    </>
  );
};

export default HeroSection;
