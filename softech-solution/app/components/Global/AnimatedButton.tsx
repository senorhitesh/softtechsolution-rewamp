import { ArrowRightLeft, LucideArrowUpRight, LucideIcon } from "lucide-react";
import React, { useState } from "react";

type Ripple = {
  x: number;
  y: number;
  size: number;
};

const PositionAwareButton = ({
  title,
  Icon,
}: {
  title: string;
  Icon?: LucideIcon;
}) => {
  return (
    <div className="buttons ">
      <button className="blob-btn px-5  group py-3 flex items-center  justify-center gap-2 text-neutral-700 font-medium">
        {title}{" "}
        <LucideArrowUpRight className="w-6 h-6 text-neutral-600 group-hover:text-white  transition  " />
        <span className="blob-btn__inner w-full">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      <br />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default PositionAwareButton;
