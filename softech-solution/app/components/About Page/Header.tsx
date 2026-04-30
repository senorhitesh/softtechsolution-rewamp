import background from "@/public/baout_bg.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full max-w-7xl mx-auto relative  h-75 p-6">
      <div className="relative w-full h-full overflow-hidden rounded-md">
        <Image
          src={background}
          alt="background-image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay text */}
        <div className="absolute text-center flex-col inset-0 flex items-center justify-center  ">
          <p className="text-blue-200">About</p>
          <p className="text-white font-medium lg:text-3xl md:text-2xl text-xl">
            Soft-tech Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
