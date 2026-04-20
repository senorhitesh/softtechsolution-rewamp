import { ArrowRight, ArrowUpRight } from "lucide-react";

const LeftPart = () => {
  return (
    <div className="flex flex-col gap-4 items- z-100 jusify-center text-center">
      <div className="flex flex-col gap-2">
        {" "}
        <p className="text-4xl font-extrabold text-white">
          Scale Faster with Smarter <br />
          Digital Solutionss.
        </p>
        <p className="text-gray-200 max-w-md">
          Join 1,000+ businesses using SOFT-TECH Solutions to simplify
          operations, improve customer engagement, and scale faster.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <button className="bg-white font-semibold hover:scale-102 transtion flex group gap-2 rounded-full px-6 py-3">
          Contact Now{" "}
          <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200 " />
        </button>
        <button className="bg-transparent text-gray-300   group transtion flex gap-2 ">
          Still have doubts?{" "}
          <span className="text-gray-200 items-center  font-semibold underline underline-offset-3 flex gap-1">
            Inquriry{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LeftPart;
