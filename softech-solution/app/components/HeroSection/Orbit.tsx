import Image from "next/image";
import Logo from "@/public/image.png";
import items from "@/lib/data";
const DURATION = 40;
import { Tilt } from "@/components/motion-primitives/tilt";

export default function RotatingOrbit() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div className="relative flex items-center justify-center w-full h-160   ">
        <style>{`
        @keyframes cwSpin  { to { transform: rotate(360deg);  } }
        @keyframes ccwSpin { to { transform: rotate(-360deg); } }
        .orbit-arm  { animation: cwSpin  ${DURATION}s linear infinite; }
        .orbit-face { animation: ccwSpin ${DURATION}s linear infinite; }
      `}</style>
        {/* Crosshair */}
        {/* <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-slate-200 pointer-events-none" /> */}
        {/* <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-slate-200 pointer-events-none" /> */}
        {/* Guide rings */}
        {[150, 248].map((r) => (
          <div
            key={r}
            className={`absolute rounded-full pointer-events-none border border-dashed border-slate-500/70 animate-spin`}
            style={{ width: r * 2, height: r * 2 }}
          />
        ))}

        {/* Orbital items */}
        {items.map((item) => {
          const delay = `${-((item.startDeg / 160) * DURATION)}s`;
          return (
            <div
              key={item.id}
              className="orbit-arm absolute top-1/2  left-1/2 w-0 h-0"
              style={{ animationDelay: delay }}
            >
              <div className="absolute left-0" style={{ top: item.radius }}>
                <div
                  className="orbit-face -translate-x-1/2 -translate-y-1/2"
                  style={{ animationDelay: delay }}
                >
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
        <Tilt rotationFactor={8} isRevese>
          {/* Center hub */}
          <div className="relative ">
            <div className="absolute -inset-8 rounded-full bg-green-300/20 blur-2xl" />
            <div className="relative w-21 h-21 animate-pulse rounded-full bg-white flex items-center overflow-hidden justify-center shadow-2xl ring-1 ring-black/5">
              <Image
                alt="Softech-Logo"
                src={Logo}
                className="w-18 h-18 object-cover"
              />
            </div>
          </div>
        </Tilt>
      </div>
    </Tilt>
  );
}
