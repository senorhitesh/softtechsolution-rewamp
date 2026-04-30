const STInfoBlock = () => {
  return (
    <div className="border-y  border-green-200 mb-12  mt-18 ">
      <div className="max-w-7xl border-x relative  border-green-200 mx-auto  w-fit lg:px-20 md:px-16 px-10 flex flex-col">
        <div className="absolute w-2 h-2 border border-green-500 bg-green-200 -top-1 -left-1 " />
        <div className="absolute w-2 h-2 border border-green-500 bg-green-200 -top-1  -right-1 " />
        <div className="absolute w-2 h-2 border border-green-500 bg-green-200 -right-1 -bottom-1" />
        <div className="absolute w-2 h-2 border border-green-500 bg-green-200 -left-1 -bottom-1" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#64748b 0,#64748b 1px,transparent 0,transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        />
        <div className="w-20 h-40 bg-green-100 skew-x-18 blur-sm absolute top-[50%] left-[50%] z-0 -translate-x-[50%] -translate-y-[50%]" />

        <div className=" w-full h-20 z-12 flex items-center justify-center">
          <p className="uppercase font-medium text-neutral-500">OUR MISSSON </p>
        </div>
        <div className="w-full flex z-12 items-center mb-8  gap-4 justify-center flex-col">
          <p className="lg:text-4xl md:text-3xl text-2xl text-center tracking-tight font-semibold text-neutral-700">
            Empowering Your Business <br />
            Through Smart{" "}
            <span className="text-brand2 italic">IT Solutions.</span>
          </p>
          <p className="max-w-lg text-sm text-center  text-neutral-600">
            SOFT-TECH Solutions is a leading ISO 27001:2022 certified fintech
            and telecom software solution provider for over 1200+ Banks, NBFC
            financial institutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default STInfoBlock;
