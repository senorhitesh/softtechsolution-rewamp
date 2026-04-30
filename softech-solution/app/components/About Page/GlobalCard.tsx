import React from "react";
import Image from "next/image";
import globalImage from "@/public/our-global 1.png";
import { ArrowUpRight } from "lucide-react";
const GlobalReach: React.FC = () => {
  return (
    <section className="w-full mb-12 bg-linear-to-r max-w-7xl mx-auto from-brand2 to-brand2 text-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Content */}
      <div className="max-w-xl z-10">
        <h2 className="text-4xl md:text-5xl  flex gap-2 items-center font-bold mb-6">
          Our Global Reach{" "}
          <span className="bg-brand h-10 flex items-center justify-center w-10  rounded-full">
            <ArrowUpRight className="" />
          </span>
        </h2>
        <p className="text-lg text-white/90 leading-relaxed">
          We've been the trusted choice for businesses, industries, individuals,
          and communities across major continents, including Europe, USA, and
          Australia.
        </p>
      </div>
      {/* Right Map + Bubbles */}
      <div className="relative w-full md:w-1/2 h-[300px] mt-10 md:mt-0">
        <Image src={globalImage} alt="globle-image" className="object-cover" />
      </div>
    </section>
  );
};

export default GlobalReach;
