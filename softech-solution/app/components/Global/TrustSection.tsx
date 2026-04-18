import React from "react";
import Partners from "../OurPartners/Partners";
import InfiniteSliderBasic from "../HeroSection/InfiniteSlider";
import { TooltipProvider } from "@base-ui/react";
const TrustSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <div className="flex mb-4 flex-col gap-4 items-center justify-center text-center">
        <p className="text-neutral-500 font-medium">
          {" "}
          Trusted by 1000 + clients Globally
        </p>
        <InfiniteSliderBasic />{" "}
      </div>
      <div>
        <Partners />
      </div>
    </div>
  );
};

export default TrustSection;
