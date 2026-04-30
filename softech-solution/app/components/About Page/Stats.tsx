"use client";
import { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface StatItem {
  number: number;
  title: string;
  suffix?: string;
}

const STATSDATA: StatItem[] = [
  { number: 1200, title: "Happy Clients", suffix: "+" },
  { number: 40, title: "Solutions", suffix: "+" },
  { number: 10, title: "Trusted Partners", suffix: "+" },
  { number: 500, title: "Banks Onboarded", suffix: "+" },
  { number: 50, title: "Integrations", suffix: "+" },
];

const Stats = () => {
  return (
    <section className="py-20 overflow-hidden relative ">
      {/* Striped Dark */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
        }}
      />
      <div className="absolute -bottom-20 rotate-45 -right-10">
        {" "}
        <svg
          width="205"
          height="288"
          viewBox="0 0 205 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_122_7)">
            <path
              d="M209.263 40.7651C209.263 63.3476 200.53 101.426 233.508 142.59C265.719 182.797 221.405 55.4798 176.9 47.5995C124.876 38.388 214.533 251.677 219.156 208.27C221.743 183.986 146.491 56.5214 125.324 77.6886C98.3965 104.616 169.005 258.422 185.492 255.892C214.578 251.43 110.552 74.5107 81.0346 89.7481C45.8375 107.918 103.852 229.17 130.772 235.673C152.308 240.876 71.985 123.369 18.2354 150.263"
              stroke="#EB5310"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M15.3713 142.201C14.6865 140.975 12.8128 141.608 13.0109 142.998C13.1297 143.832 12.4168 144.547 11.5825 144.431L8.93937 144.065C6.81925 143.771 5.78129 146.563 7.57871 147.725L8.0636 148.039C9.2653 148.816 9.10003 150.623 7.77731 151.169L7.108 151.445C5.68788 152.031 5.88869 154.103 7.39497 154.406C8.30838 154.589 8.85105 155.545 8.56026 156.431C8.10808 157.807 9.55685 159.066 10.832 158.378L10.9598 158.309C12.2893 157.593 13.796 158.909 13.2637 160.323C12.6454 161.965 14.6971 163.294 15.9427 162.058L18.0222 159.996C18.6582 159.365 19.6359 159.234 20.4155 159.675L21.195 160.116C23.0479 161.164 25.0035 158.927 23.7854 157.181C23.1863 156.323 23.3438 155.137 24.1558 154.475L26.7149 152.392C28.1745 151.204 27.3343 148.841 25.4523 148.841H24.8993C23.9431 148.841 23.1323 148.139 22.9958 147.192L22.7449 145.452C22.5226 143.911 20.3832 143.7 19.8645 145.168C19.4373 146.378 17.7839 146.518 17.1583 145.399L15.3713 142.201Z"
              fill="#FCB006"
            />
          </g>
          <defs>
            <clipPath id="clip0_122_7">
              <rect width="205" height="288" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="max-w-6xl z-12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center">
          {STATSDATA.map((card, index) => (
            <StatsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ number, title, suffix = "+" }: StatItem) => {
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(number);
  }, [number, spring]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-center p-3 transition-all duration-300 hover:bg-neutral-950 rounded-xl"
    >
      <div className="absolute left-0 h-25 w-1 rounded-full bg-linear-to-b from-[#FF2F2F] to-[#1534FF] transition-transform duration-300 group-hover:scale-y-110" />

      <div className="pl-3">
        <div className="flex items-baseline gap-1">
          <motion.h3 className="text-5xl font-bold tracking-tight text-gray-100">
            {display}
          </motion.h3>
          <span className="text-3xl font-semibold text-[#AF1CBD]">
            {suffix}
          </span>
        </div>
        <p className="mt-2 text-lg font-medium text-gray-300 uppercase tracking-wide">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default Stats;
