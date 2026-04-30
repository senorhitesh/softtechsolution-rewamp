import LeftPart from "@/app/components/HeroSection/Left";
import RightPart from "./Right";
import SvgBig from "./SVGBIG";
import SvgSmall from "./SVGSMALL";
import SideSvg from "@/app/components/HeroSection/SvgSide";
const HeroSection = () => {
  return (
    <>
      <section className="relative w-full flex items-center justify-center overflow-hidden bg-background">
        <SvgBig />
        <SvgSmall />
        <SideSvg />
        {/* Main Container */}
        <div className="container max-w-8xl mx-auto  px-6 sm:px-10  z-1">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
            {/* Left Section: Text Content */}
            <LeftPart />
            {/* Right Section: Decorative Visual */}
            <RightPart />
          </div>
        </div>

        {/* Purple Glow Top */}
        <div
          className="absolute -top-272 inset-0 z-0"
          style={{
            background: "#ffffff",
            backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(74, 119, 255, 0.5),
          transparent 70%
        )
      `,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>
    </>
  );
};
export default HeroSection;
