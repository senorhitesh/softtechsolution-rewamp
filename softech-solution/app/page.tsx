import { Suspense } from "react";
import Navbar from "./components/Global/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Whyus from "@/app/components/WHYUS/Whyus";
import ApplyStyleDock from "@/app/components/Global/DockComp";
import Partners from "./components/OurPartners/Partners";
import OurServices from "./components/Our Services/OurServices";
import About from "./components/AboutUs/About";
export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      {" "}
      <div className="flex flex-col flex-1 items-center justify-center bg-gray-50 font-sans">
        {/* <main className="flex flex-1 w-full mx-auto max-w-7xl flex-col items-center justify-between"> */}
        <Navbar />
        <HeroSection />
        <About />
        <Whyus />
        <OurServices />
        <Partners />
        {/* </main> */}
        {/* <ApplyStyleDock /> */}
      </div>
    </Suspense>
  );
}
