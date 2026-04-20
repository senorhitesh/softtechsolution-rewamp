import bg from "@/public/coolgradientbg.png";
import Image from "next/image";
import LeftPart from "./LeftPart";
const FinalCta = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="  w-full p-8 h-100 flex items-center justify-center scale-80 rounded-3xl overflow-hidden">
        <div className="inset-0 absolute z-0 w-full h-full overflow-hidden rounded-3xl top-0 left-0">
          <Image src={bg} className="object-contain" alt={"alS"} />
        </div>
        <LeftPart />
      </div>
    </div>
  );
};

export default FinalCta;
