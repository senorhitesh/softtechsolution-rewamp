const UpperContent = () => {
  return (
    <div className="mb-10  max-w-3xl items-center mx-auto flex lg:flex-row md:flex-row flex-col w-full">
      <div className="w-1/2">
        <h1 className="lg:text-5xl text-3xl font-bold text-white sm:text-4xl">
          12+ Years of <br /> growth and <br /> technology <br /> innovation.
        </h1>
        <svg
          width="54"
          height="9"
          viewBox="0 0 54 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.70329C19.7837 1.1271 38.5673 0.550915 40.6381 1.5217C42.7089 2.49249 27.4976 5.02771 20.18 6.39135C12.8624 7.75499 13.8996 7.87022 20.6567 7.92959C27.4138 7.98895 39.8594 7.98895 52.6821 7.98895"
            stroke="#FF9500"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="mt-1 flex flex-col gap-4 justify-between text-sm w-1/2 text-gray-200">
        <p>
          Founded in 2014, Softtech began as a three-person powerhouse focused
          on delivering highly customized SMS Solutions.{" "}
        </p>
        <p>
          Over the years, we have evolved dramatically - driven by a passionate
          team and innovative technologies - growing into an organization of{" "}
          <span className="font-semibold">50+ exceptional professionals</span>.
        </p>

        <p>
          Our mission is to solve complex business challenges by leveraging a
          broad technological toolkit and delivering creative,{" "}
          <span className="font-semibold">high-impact solutions. </span>
          Today, we proudly serve a global clientele, empowering businesses to
          innovate, scale, and thrive in the{" "}
          <span className="font-semibold">rapidly evolving age of AI.</span>
        </p>
      </div>
    </div>
  );
};

export default UpperContent;
