import Image from "next/image";
import bg from "@/public/backgroundofeverthing.png";
const header = ({ title }: { title: string }) => {
  return (
    <>
      <div className="w-full flex max-w-7xl mx-auto items-center justify-center  relative overflow-hidden h-75">
        <div className="inset-0 top-0 z-0 left-0 absolute">
          <Image src={bg} alt="background" className="object-cover" />
        </div>
        <div className="z-12">
          <p className="text-white font-semibold text-3xl">{title}</p>{" "}
        </div>
      </div>
    </>
  );
};

export default header;
