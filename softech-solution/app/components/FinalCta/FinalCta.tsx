import bg from "@/public/coolgradientbg.png";
import Image from "next/image";
import LeftPart from "./LeftPart";

const FinalCta = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
      <div className="w-full max-w-6xl px-4 sm:px-8 py-8 sm:py-12 flex flex-col md:flex-row items-center md:items-start relative rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bg}
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <LeftPart />
        </div>
      </div>
    </div>
  );
};

export default FinalCta;
