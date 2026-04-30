import { SpinningText } from "@/components/motion-primitives/spinning-text";

const AboutSection = () => {
  return (
    <div className="w-full mb-12  mt-16 items-center justify-center  flex">
      <div className="w-full  max-w-7xl mx-auto p-6 relative  items-center justify-center flex">
        <div className="absolute z-0 bottom-8 right-8">
          {" "}
          <SpinningText
            radius={5}
            fontSize={1.2}
            className="font-medium leading-none"
          >
            {`Innovate • Integrate  • Elevate • `}
          </SpinningText>
        </div>{" "}
        <div className="absolute z-0 top-8 left-8">
          {" "}
          <SpinningText
            radius={5}
            fontSize={1.2}
            className="font-medium leading-none"
          >
            {`Innovate • Integrate  • Elevate • `}
          </SpinningText>
        </div>{" "}
        <section className="bg-[#f7f5f2] z-12 relative rounded-lg py-20 px-6 md:px-12">
          <div className="max-w-7xl z-12 mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="flex-1 overflow-hidden rounded-md   h-100">
              <div className="overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/22/3e/86/223e86fbab83cfefa0234302b75dc41e.jpg"
                  alt="Bank Building"
                  className="w-full h-full   object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <p className="text-red-600 font-semibold tracking-wide mb-2">
                ABOUT
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Known For Trust,
                <br />
                Honesty & Customer
                <br />
                Support
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                We help enterprises to engage and stay connected with their
                customers throughout IT communication tools and plugins. Our
                multi-channel, ready to use communication API's, can be securely
                integrated into any software for SMS, MISCALL, IVR, Voice Call,
                or any Customize software Solutions
              </p>

              <p className="text-gray-600 leading-relaxed">
                Over the years, the bank has consistently shown robust growth
                not only in size of solutions and Advances but has also
                maintained profitability.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
