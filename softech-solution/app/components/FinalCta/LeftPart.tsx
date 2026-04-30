import { ArrowRight, ArrowUpRight } from "lucide-react";

const LeftPart = () => {
  return (
    <div className="flex flex-col z-0 gap-6 items-center md:items-start justify-center text-center md:text-left px-4 sm:px-6 lg:px-0">
      {/* Text Section */}
      <div className="flex flex-col gap-3">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Scale Faster with Smarter <br className="hidden sm:block" />
          Digital Solutions.
        </p>

        <p className="text-gray-200 max-w-sm sm:max-w-md text-sm sm:text-base">
          Join 1,000+ businesses using SOFT-TECH Solutions to simplify
          operations, improve customer engagement, and scale faster.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-white text-black font-semibold hover:scale-105 transition flex items-center justify-center gap-2 rounded-full px-6 py-3">
          Contact Now
          <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200" />
        </button>

        <button className="w-full sm:w-auto bg-transparent text-gray-300 flex items-center justify-center gap-2">
          Still have doubts?
          <span className="text-gray-200 font-semibold underline underline-offset-4 flex items-center gap-1">
            Inquiry
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LeftPart;