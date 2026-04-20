import { Suspense } from "react";
import Navbar from "./components/Global/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Whyus from "@/app/components/WHYUS/Whyus";
import OurServices from "./components/Our Services/OurServices";
import About from "./components/AboutUs/About";
import Footer from "@/app/components/Global/Footer";
import TrustSection from "./components/Global/TrustSection";
import Blogs from "@/app/components/Blogs/Blogs";
import FinalCta from "@/app/components/FinalCta/FinalCta";
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
      <div className="flex flex-col    w-full overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <About />
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
