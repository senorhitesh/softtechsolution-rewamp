"use client";
import { motion } from "framer-motion";

// Extracting path data from your SVG
const MAP_DATA = [
  { id: "INAN", name: "Andaman and Nicobar", d: "M802.5 941.1l-0.2 0.4..." },
  { id: "INTG", name: "Telangana", d: "M355.2 698.3l0.1-1.2-0.2-0.3..." },
  { id: "INAP", name: "Andhra Pradesh", d: "M427.5 763.5l0.5 0.8-0.5 1.1..." },
];

const IndiaMap = () => {
  // Animation for the "drawing" effect
  const drawEffect = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.05, duration: 1.5, ease: "easeInOut" },
        opacity: { delay: i * 0.05, duration: 0.5 },
      },
    }),
  };

  return (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center p-4">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        className="w-full max-w-200 h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        initial="hidden"
        animate="visible"
      >
        <g id="features">
          {MAP_DATA.map((state, index) => (
            <motion.path
              key={state.id}
              d={state.d}
              id={state.id}
              custom={index}
              variants={drawEffect}
              stroke="#ffffff"
              strokeWidth="0.5"
              fill="#2d5a27" // A deep green matching your original theme
              whileHover={{
                fill: "#4ade80",
                scale: 1.01,
                strokeWidth: 1.5,
                transition: { duration: 0.2 },
              }}
              style={{ cursor: "pointer", originX: "50%", originY: "50%" }}
            >
              <title>{state.name}</title>
            </motion.path>
          ))}
        </g>
      </motion.svg>
    </div>
  );
};

export default IndiaMap;
