import InfiniteSliderBasic from "./InfiniteSlider";
import Journey from "@/app/components/Journey/Journey";

const TrustSection = () => {
  return (
    <div className="flex flex-col mt-12 items-center justify-center">
      <div>
        <div className="flex mb-2 flex-col gap-4 items-center justify-center text-center">
          <p className="text-neutral-500 font-medium">
            {" "}
            Trusted by 1000 + clients Globally
          </p>
          <InfiniteSliderBasic />{" "}
        </div>

        {/* <Journey /> */}
      </div>
    </div>
  );
};

export default TrustSection;
