"use client";
import { motion } from "framer-motion";

import StatsRow from "@/app/components/WHYUS/StatsRow";
import card from "@/public/card.png";
import Image from "next/image";
export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
        @keyframes node-ping { 0%,100%{r:3;opacity:1;} 50%{r:5;opacity:0.5;} }
        @keyframes bar-rise { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        .bar-1 { transform-origin: 13px 40px; animation: bar-rise 0.4s ease 0.1s both; }
        .bar-2 { transform-origin: 27px 40px; animation: bar-rise 0.4s ease 0.25s both; }
        .bar-3 { transform-origin: 41px 40px; animation: bar-rise 0.4s ease 0.4s both; }
        .bar-4 { transform-origin: 55px 40px; animation: bar-rise 0.4s ease 0.55s both; }
        .trend-line { stroke-dasharray: 80; stroke-dashoffset: 80; animation: dash-draw 1s ease 0.6s forwards; }
        .globe-mid { stroke-dasharray: 40; stroke-dashoffset: 40; animation: dash-draw 0.9s ease 0.2s forwards; }
        .globe-top { stroke-dasharray: 35; stroke-dashoffset: 35; animation: dash-draw 0.9s ease 0.4s forwards; }
        .globe-bot { stroke-dasharray: 35; stroke-dashoffset: 35; animation: dash-draw 0.9s ease 0.6s forwards; }
        .node-ping { animation: node-ping 1.8s ease-in-out infinite; }
        .arrow-line { stroke-dasharray: 80; stroke-dashoffset: 80; animation: dash-draw 1.2s ease 0.3s forwards; }
        @media (prefers-reduced-motion: reduce) {
          svg * { animation: none !important; }
        }
      `}</style>

      <section className="w-full max-w-7xl mx-auto px-4 py-14">
        {/* Header */}
        <div className="w-full flex flex-col gap-3 justify-center mb-6">
          <motion.span
            initial={{ border: 0 }}
            animate={{ border: 1, borderColor: "#4ADE80" }}
            transition={{ delay: 1 }}
            className=" w-fit  tracking-widest  relative px-4  py-1  bg-orange-100 "
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute w-2 h-2 border border-orange-500 bg-orange-200 -top-1 -left-1 "
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute w-2 h-2 border border-orange-500 bg-orange-200 -top-1  -right-1 "
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute w-2 h-2 border border-orange-500 bg-orange-200 -right-1 -bottom-1"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute w-2 h-2 border border-orange-500 bg-orange-200 -left-1 -bottom-1"
            />
            Why we're the best
          </motion.span>
          <div className="flex items-start ">
            <p className="font-extrabold md:text-5xl text-4xl lg:text-6xl">
              Why Us ?
            </p>

            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              scale={170}
              className="mt-3"
            >
              <path
                d="M1.00024 5.75094C1.71288 4.26866 2.42552 2.78637 2.84965 1.99427C3.27377 1.20216 3.38779 1.14515 3.50527 1.00003"
                stroke="#FF7B1C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3.15967 7.2194C6.06723 6.7063 8.97479 6.1932 10.5439 5.92887C12.113 5.66455 12.2555 5.66455 12.4024 5.66455"
                stroke="#FF7B1C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M5.49194 10.3291C7.80089 10.7852 10.1098 11.2412 11.8694 11.5475C13.629 11.8537 14.7692 11.9962 16.0303 12.1431"
                stroke="#FF7B1C"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-neutral-500 max-w-xl">
            {" "}
            Most solutions haven't evolved with industry needs. We use
            personalised approaches and modern technology to deliver results
            that are faster, smarter, and built to last.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-3 mb-4">
          {/* Featured dark card — row span 2 */}
          <div className="col-span-1 overflow-hidden row-span-2 bg-neutral-900 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded-full bg-emerald-900/40 text-emerald-400 mb-3">
                Track record
              </span>
              <p className="text-white font-semibold text-xl leading-snug mb-2">
                Proven Industry Excellence
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                Our extensive track record of successful implementations has
                established us as a trusted leader in fintech and telecom
                innovation.
              </p>
            </div>
            <div className="scale-150">
              <Image src={card} alt="card" className="object-cover " />
            </div>
          </div>
          {/* Client-Centric Philosophy */}
          <div className="col-span-1 bg-white border border-neutral-200 rounded-2xl p-5 hover:-translate-y-0.5 transition-transform duration-200">
            <span className="inline-block text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded-full bg-blue-50 text-blue-700 mb-3">
              Approach
            </span>
            <p className="text-neutral-800 font-semibold text-xl mb-1.5">
              Client-Centric Philosophy
            </p>
            <p className="text-neutral-500 text-xs leading-relaxed">
              We go beyond standard requirements, deeply aligning solutions with
              your unique business goals.
            </p>
            <svg
              className="mt-4"
              width="60"
              height="36"
              viewBox="0 0 60 36"
              fill="none"
            >
              <circle cx="30" cy="18" r="10" stroke="#BFDBFE" strokeWidth="1" />
              <circle
                cx="30"
                cy="18"
                r="5"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="1"
              />
              <circle cx="30" cy="18" r="2" fill="#3B82F6" />
              <line
                x1="10"
                y1="18"
                x2="20"
                y2="18"
                stroke="#BFDBFE"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <line
                x1="40"
                y1="18"
                x2="50"
                y2="18"
                stroke="#BFDBFE"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <circle
                cx="8"
                cy="18"
                r="2.5"
                fill="#EFF6FF"
                stroke="#1D4ED8"
                strokeWidth="1"
              />
              <circle
                cx="52"
                cy="18"
                r="2.5"
                fill="#EFF6FF"
                stroke="#1D4ED8"
                strokeWidth="1"
              />
            </svg>
          </div>
          {/* Leading-Edge Innovation */}
          <div className="col-span-1 bg-white border border-neutral-200 rounded-2xl p-5 hover:-translate-y-0.5 transition-transform duration-200">
            <span className="inline-block text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded-full bg-amber-50 text-amber-700 mb-3">
              Innovation
            </span>
            <p className="text-neutral-800 font-semibold text-xl mb-1.5">
              Leading-Edge Innovation
            </p>
            <p className="text-neutral-500 text-xs leading-relaxed">
              We stay at the forefront of emerging technologies to deliver
              future-proof solutions.
            </p>
            <svg
              className="mt-4"
              width="60"
              height="36"
              viewBox="0 0 60 36"
              fill="none"
            >
              <path
                className="arrow-line"
                d="M6 30 L18 18 L30 22 L42 10 L54 6"
                stroke="#FCD34D"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M48 4 L54 6 L51 12"
                stroke="#F59E0B"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="18"
                cy="18"
                r="2.5"
                fill="#FFFBEB"
                stroke="#F59E0B"
                strokeWidth="1"
              />
              <circle
                cx="30"
                cy="22"
                r="2.5"
                fill="#FFFBEB"
                stroke="#F59E0B"
                strokeWidth="1"
              />
              <circle
                cx="42"
                cy="10"
                r="2.5"
                fill="#FFFBEB"
                stroke="#F59E0B"
                strokeWidth="1"
              />
            </svg>
          </div>
          {/* Global Expertise */}
          <div className="col-span-1 bg-white border border-neutral-200 rounded-2xl p-5 hover:-translate-y-0.5 transition-transform duration-200">
            <span className="inline-block text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-3">
              Global
            </span>
            <p className="text-neutral-800 font-semibold text-xl mb-1.5">
              Global Expertise
            </p>
            <p className="text-neutral-500 text-xs leading-relaxed">
              With presence across diverse industries and regions, we bring
              world-class technical insights.
            </p>
            <svg
              className="mt-4"
              width="56"
              height="36"
              viewBox="0 0 56 36"
              fill="none"
            >
              <ellipse
                cx="28"
                cy="18"
                rx="14"
                ry="14"
                stroke="#9FE1CB"
                strokeWidth="1"
              />
              <path
                className="globe-mid"
                d="M14 18 Q21 12,28 18 Q35 24,42 18"
                stroke="#1D9E75"
                strokeWidth="1"
                fill="none"
              />
              <path
                className="globe-top"
                d="M16 11 Q22 7,28 11 Q34 15,40 11"
                stroke="#9FE1CB"
                strokeWidth="0.7"
                fill="none"
              />
              <path
                className="globe-bot"
                d="M16 25 Q22 21,28 25 Q34 29,40 25"
                stroke="#9FE1CB"
                strokeWidth="0.7"
                fill="none"
              />
              <circle
                className="node-ping"
                cx="28"
                cy="18"
                r="2.5"
                fill="#1D9E75"
              />
              <circle cx="20" cy="15" r="1.5" fill="#5DCAA5" opacity="0.7" />
              <circle cx="38" cy="21" r="1.5" fill="#5DCAA5" opacity="0.7" />
            </svg>
          </div>
          {/* Agile Scalability — bottom row spans 3 */}
          <div className="lg:col-span-3 col-span-1 bg-white border border-neutral-200 rounded-2xl p-5 flex items-start justify-between hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <span className="inline-block text-[10px] font-medium tracking-wider uppercase px-2 py-1 rounded-full bg-purple-50 text-purple-700 mb-3">
                Scalability
              </span>
              <p className="text-neutral-800 font-semibold text-xl mb-1.5">
                Agile Scalability
              </p>
              <p className="text-neutral-500 text-xs leading-relaxed max-w-sm">
                Our architecture is engineered for flexibility, designed to
                scale alongside your business as it grows and evolves over time.
              </p>
            </div>
            <svg
              className="shrink-0 mt-1"
              width="80"
              height="44"
              viewBox="0 0 80 44"
              fill="none"
            >
              <rect
                className="bar-1"
                x="8"
                y="32"
                width="10"
                height="8"
                rx="2"
                fill="#C0DD97"
              />
              <rect
                className="bar-2"
                x="22"
                y="24"
                width="10"
                height="16"
                rx="2"
                fill="#97C459"
              />
              <rect
                className="bar-3"
                x="36"
                y="16"
                width="10"
                height="24"
                rx="2"
                fill="#639922"
              />
              <rect
                className="bar-4"
                x="50"
                y="8"
                width="10"
                height="32"
                rx="2"
                fill="#3B6D11"
              />
              <path
                className="trend-line"
                d="M8 34 L26 26 L42 18 L58 10"
                stroke="#C0DD97"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Stats Row */}
        <StatsRow />
      </section>
    </>
  );
}
