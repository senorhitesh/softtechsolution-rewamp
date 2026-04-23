import { Suspense } from "react";
import Navbar from "./components/Global/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Whyus from "@/app/components/WHYUS/Whyus";
import OurServices from "./components/Our Services/OurServices";
import Footer from "@/app/components/Global/Footer";
import TrustSection from "./components/Global/TrustSection";
import Blogs from "@/app/components/Blogs/Blogs";
import FinalCta from "@/app/components/FinalCta/FinalCta";
import Partners from "@/app/components/OurPartners/Partners";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="bg-white flex items-center justify-center w-full h-screen">
          <p className="font-semibold text=3xl ">Soft-Tech Solution.</p>
        </div>
      }
    >
      <div className="flex flex-col    w-full overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <OurServices />
        <Whyus />
        <TrustSection />
        <Blogs />
        <FinalCta />
        <div className="w-full ">
          {" "}
          <Partners />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}
