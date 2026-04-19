import React from "react";
import Partners from "../OurPartners/Partners";
import InfiniteSliderBasic from "./InfiniteSlider";
import Journey from "@/app/components/Journey/Journey";

const TrustSection = () => {
  return (
    <div className="flex flex-col mt-12 items-center justify-center">
      {" "}
      <Journey />
      <div>
        <div className="flex mb-4 flex-col gap-4 items-center justify-center text-center">
          <p className="text-neutral-500 font-medium">
            {" "}
            Trusted by 1000 + clients Globally
          </p>
          <InfiniteSliderBasic />{" "}
        </div>
        <Partners />
      </div>
    </div>
  );
};

export default TrustSection;
