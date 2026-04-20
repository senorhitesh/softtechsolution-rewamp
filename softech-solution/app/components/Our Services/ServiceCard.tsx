"use client";
import { SVGProps } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, Mail, BookOpen } from "lucide-react";
import { useState } from "react"; // 1. Added useState
type Service = {
  id: number;
  title: string;
  tag: string;
  color: string;
  bg: string;
  tagColor: string;
  description: string;
};
const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={31}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={"#22c55e"}
          fillRule="evenodd"
          stroke={"#fff"}
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={"#22c55e"} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="group perspective-[1000px] w-full h-100">
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }} // 4. Animate based on state
        transition={{
          duration: 0.2,
        }}
        onClick={handleFlip}
        className="relative w-full h-full transition-all cursor-pointer duration-500 transform-3d"
      >
        {" "}
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="h-full bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-4 shadow-sm group-hover:border-gray-300 transition-colors duration-200">
            {/* Icon Tile */}
            <div
              className="w-full h-40 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: service.bg, color: service.color }}
            ></div>

            {/* Title */}
            <p className="text-xl font-medium text-gray-900 leading-snug flex-1">
              {service.title}
            </p>
            <p className="text-sm text-gray-600 line-clamp-3">
              {service.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ background: service.bg, color: service.tagColor }}
              >
                {service.tag}
              </span>

              <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center">
                <ArrowRightIcon className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        {/* --- BACK SIDE --- */}
        <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)]">
          <div
            className="h-full rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl border border-gray-200"
            style={{ backgroundColor: "#f9fafb" }} // Light neutral back
          >
            <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
              Interested in {service.title}?
            </h3>

            <div className="flex flex-col w-full gap-3">
              {/* Read More Button */}
              <button
                className="flex cursor-pointer items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-medium transition-all active:scale-95"
                style={{ backgroundColor: service.bg, color: service.tagColor }}
              >
                <BookOpen className="w-4 h-4" />
                Read More
              </button>

              {/* Contact Us Button */}
              <button className="flex items-center cursor-pointer justify-center gap-2 w-full py-3 px-4 rounded-lg font-medium border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-all active:scale-95">
                <Mail className="w-4 h-4" />
                Contact Us
              </button>
            </div>

            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-4">
              Secure & Certified
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
