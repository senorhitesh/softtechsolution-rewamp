import { ArrowUpRightIcon } from "lucide-react";
import Toggle from "../Global/AnimatedToogle";

const HeroSection = () => {
  return (
    <div className="flex items-center w-full h-screen justify-center">
      <div className="max-w-7xl w-full items-center border-neutral-950 border h-screen justfy-content-center mx-auto">
        <div className="flex flex-col items-center justify-center w-fit mx-auto h-full ">
          {" "}
          <p className="text-neutral-600 uppercase text-sm tracking-widest mb-4">
            EMPOWERING FINANCIAL INOVATION
          </p>
          <h1 className="text-4xl text-center  font-bold mb-6 text-gray-800">
            <span className="relative ">
              We Support{" "}
              <span className="w-10 h-10 top-0 -right-15 rounded-full absolute bg-neutral-800 flex items-center justify-center">
                <ArrowUpRightIcon className="text-white" />
              </span>
            </span>
            <span className="lg:text-7xl flex items-center justify-center md:text-5xl text-4xl">
              <span className="leading-none">GR</span>
              <span className="leading-none">
                <Toggle />
              </span>
              <span className="leading-none">WTH</span>
            </span>
            <span>your business</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
