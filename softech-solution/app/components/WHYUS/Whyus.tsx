import { div } from "motion/react-client";
import React from "react";

const Whyus = () => {
  return (
    <div className="w-full h-fit border flex flex-col items-center  justify-center py-20">
      <p>Our Procress</p>
      <div className="flex items-center ">
        <div>DIAGRAM</div>
        <div>
          <svg
            width="226"
            height="225"
            viewBox="0 0 376 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 297.5C16.5 199.167 108.8 2.1 350 0.5"
              stroke="black"
            />
            <path
              d="M0.5 297.5C16.4771 395.833 108.645 592.9 349.5 594.5"
              stroke="black"
            />
            <path d="M0 297.5H375.5" stroke="black" />
          </svg>
        </div>
        <div className="h-full border flex flex-col justify-between">
          <p>Requirmetn</p>
          <p>Documention</p>
          <p>FInalise</p>
        </div>
        <div className="rotate-180">
          <svg
            width="226"
            height="225"
            viewBox="0 0 376 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 297.5C16.5 199.167 108.8 2.1 350 0.5"
              stroke="black"
            />
            <path
              d="M0.5 297.5C16.4771 395.833 108.645 592.9 349.5 594.5"
              stroke="black"
            />
            <path d="M0 297.5H375.5" stroke="black" />
          </svg>
        </div>
        <div>Ultimate Satisfaction</div>
      </div>
    </div>
  );
};

export default Whyus;
