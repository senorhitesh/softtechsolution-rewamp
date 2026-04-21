"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import { Suspense } from "react";
import Navbar from "./components/Global/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Whyus from "@/app/components/WHYUS/Whyus";
import OurServices from "./components/Our Services/OurServices";
import Footer from "@/app/components/Global/Footer";
import TrustSection from "./components/Global/TrustSection";
import Blogs from "@/app/components/Blogs/Blogs";
import FinalCta from "@/app/components/FinalCta/FinalCta";
import SoftTechLoader from "@/app/loading";
export default function Home() {
  return (
    <Suspense fallback={<SoftTechLoader />}>
      <div className="flex flex-col    w-full overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <OurServices />
        <Whyus />
        <TrustSection />
        <Blogs />
        <FinalCta />
        <Footer />
      </div>
    </Suspense>
  );
}
