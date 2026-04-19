"use client";
import icons from "@/public/DevloperIcons.png";
import Image from "next/image";
const cards = [
  {
    id: 1,
    span: "md:col-span-2 md:row-span-2",
    title: "Proven Industry Excellence",
    desc: "Our extensive track record of successful implementations has established us as a trusted leader in fintech and telecom innovation.",
  },
  {
    id: 2,
    span: "md:col-span-2",
    title: "Client-Centric Philosophy",
    desc: "We go beyond standard requirements, deeply aligning solutions with your unique business goals.",
  },
  {
    id: 3,
    span: "md:col-span-2",
    title: "Leading-Edge Innovation",
    desc: "We stay at the forefront of emerging technologies to deliver future-proof solutions.",
  },
  {
    id: 4,
    span: "md:col-span-2",
    title: "Global Expertise",
    desc: "With presence across diverse industries and regions, we bring world-class technical insights.",
    svg: (
      <svg
        className="mt-4 w-20 h-11 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 80 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="40"
          cy="22"
          rx="20"
          ry="20"
          stroke="#9FE1CB"
          strokeWidth="1.5"
        />
        <path
          d="M20 22 Q30 14,40 22 Q50 30,60 22"
          stroke="#1D9E75"
          strokeWidth="1"
          fill="none"
          className="[stroke-dasharray:50] [stroke-dashoffset:50] group-hover:[animation:dash-draw_0.8s_ease_forwards]"
        />
        <path
          d="M22 14 Q31 8,40 14 Q49 20,58 14"
          stroke="#9FE1CB"
          strokeWidth="0.8"
          fill="none"
          className="[stroke-dasharray:45] [stroke-dashoffset:45] group-hover:[animation:dash-draw_0.8s_ease_0.2s_forwards]"
        />
        <path
          d="M22 30 Q31 24,40 30 Q49 36,58 30"
          stroke="#9FE1CB"
          strokeWidth="0.8"
          fill="none"
          className="[stroke-dasharray:45] [stroke-dashoffset:45] group-hover:[animation:dash-draw_0.8s_ease_0.4s_forwards]"
        />
        <path
          d="M40 2 Q48 12,48 22 Q48 32,40 42"
          stroke="#9FE1CB"
          strokeWidth="0.8"
          fill="none"
          className="[stroke-dasharray:50] [stroke-dashoffset:50] group-hover:[animation:dash-draw_0.8s_ease_0.1s_forwards]"
        />
        <circle
          cx="40"
          cy="22"
          r="3"
          fill="#1D9E75"
          className="[animation:node-ping_1.8s_ease-in-out_infinite_paused] group-hover:[animation-play-state:running]"
        />
        <circle cx="28" cy="18" r="2" fill="#5DCAA5" opacity="0.7" />
        <circle cx="54" cy="26" r="2" fill="#5DCAA5" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: 5,
    span: "md:col-span-2",
    title: "Agile Scalability",
    desc: "Our architecture is engineered for flexibility, designed to scale alongside your business.",
    svg: (
      <svg
        className="mt-4 w-20 h-11 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 80 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[
          { x: 8, y: 32, h: 8, fill: "#C0DD97", delay: "0.1s" },
          { x: 22, y: 24, h: 16, fill: "#97C459", delay: "0.25s" },
          { x: 36, y: 16, h: 24, fill: "#639922", delay: "0.4s" },
          { x: 50, y: 8, h: 32, fill: "#3B6D11", delay: "0.55s" },
        ].map(({ x, y, h, fill, delay }, i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="10"
            height={h}
            rx="2"
            fill={fill}
            style={{ transformOrigin: `${x}px 40px` }}
            className={`group-hover:[animation:bar-rise_0.4s_ease_${delay}_both]`}
          />
        ))}
        <path
          d="M8 34 L26 26 L42 18 L58 10"
          stroke="#C0DD97"
          strokeWidth="1.5"
          fill="none"
          className="[stroke-dasharray:80] [stroke-dashoffset:80] group-hover:[animation:dash-draw_1s_ease_0.6s_forwards]"
        />
        <path
          d="M52 8 L58 10 L55 16"
          stroke="#C0DD97"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="[stroke-dasharray:20] [stroke-dashoffset:20] group-hover:[animation:dash-draw_0.3s_ease_1.4s_forwards]"
        />
      </svg>
    ),
  },
];

const Whyus = () => {
  return (
    <>
      <style>{`
        @keyframes dash-draw { to { stroke-dashoffset: 0; } }
        @keyframes glow-pulse { 0%,100%{r:14;opacity:0.15;} 50%{r:22;opacity:0.3;} }
        @keyframes orbit {
          0%,100%{transform:translate(0,0);}
          25%{transform:translate(4px,-4px);}
          50%{transform:translate(0,-8px);}
          75%{transform:translate(-4px,-4px);}
        }
        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-5px);}
        }
        @keyframes node-ping {
          0%,100%{r:3;opacity:1;}
          50%{r:5;opacity:0.5;}
        }
        @keyframes bar-rise {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          svg * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="w-full h-fit flex flex-col items-center justify-center mt-12">
        <p className="text-neutral-800  text-xl font-semibold mb-4">
          Why Choose Us?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 w-full max-w-5xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`group ${card.span} p-5 rounded-xl bg-white/5 backdrop-blur border border-gray-500/20
                hover:border-gray-400/40 hover:-translate-y-0.5 transition-all duration-300`}
            >
              <h3 className="font-semibold text-sm text-neutral-800  mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-neutral-500  leading-relaxed">
                {card.desc}
              </p>
              {card?.svg}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Whyus;
