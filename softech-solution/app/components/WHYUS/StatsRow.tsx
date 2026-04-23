"use client";

import { useEffect, useRef, useState } from "react";
import { User, Workflow, Locate, WavesArrowDownIcon } from "lucide-react";
type Stat = {
  label: string;
  target: number;
  suffix?: string;
  color: string;
  bgColor: string;
  icon: any;
  delta: string;
  sparkline: string;
};

const STATS: Stat[] = [
  {
    label: "Happy clients",
    target: 1200,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    icon: <User />,
    delta: "+18% YoY",
    sparkline: "0,18 8,14 16,10 24,6 32,8 40,2",
  },
  {
    label: "Installations",
    target: 7000,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    icon: <WavesArrowDownIcon />,
    delta: "+31% YoY",
    sparkline: "0,16 8,12 16,14 24,6 32,4 40,1",
  },
  {
    label: "Enterprise integrations",
    target: 50,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: <Workflow />,
    delta: "+12 new",
    sparkline: "0,18 8,15 16,11 24,8 32,5 40,3",
  },
  {
    label: "States presence (India)",
    target: 26,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    icon: <Locate />,
    delta: "All major states",
    sparkline: "0,16 8,14 16,10 24,7 32,5 40,3",
  },
];

// Cubic ease-out for a snappier feel
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    let raf: number;
    function tick(now: number) {
      const t = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(easeOut(t) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

const Sparkline = ({ points, color }: { points: string; color: string }) => (
  <svg width="40" height="20" viewBox="0 0 40 20">
    <polyline
      points={points}
      fill="none"
      className={`stroke-current ${color}`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.7}
    />
  </svg>
);

const StatCard = ({
  stat,
  started,
  index,
}: {
  stat: Stat;
  started: boolean;
  index: number;
}) => {
  const value = useCountUp(stat.target, 1800, started);
  const progress = started ? (value / stat.target) * 0.75 : 0;
  const circumference = 213;
  const offset = circumference * (1 - progress);

  return (
    <div
      className="relative overflow-hidden bg-white border border-neutral-200 rounded-xl p-4
        opacity-0 translate-y-2 transition-all duration-500"
      style={{
        animationDelay: `${index * 80}ms`,
        opacity: started ? 1 : 0,
        transform: started ? "translateY(0)" : "translateY(8px)",
        transition: `opacity .4s ease ${index * 80}ms, transform .4s ease ${index * 80}ms`,
      }}
    >
      {/* Icon badge */}
      <div
        className={`absolute top-3 right-3 w-7 h-7 rounded-md flex items-center justify-center text-sm ${stat.bgColor}`}
      >
        {stat.icon}
      </div>

      {/* Label */}
      <p className="text-xs text-neutral-500 mb-2 pr-8 leading-tight">
        {stat.label}
      </p>

      {/* Value */}
      <p className={`text-2xl font-medium ${stat.color}`}>
        {value.toLocaleString()}
        {stat.suffix ?? "+"}
      </p>

      {/* Sparkline + delta */}
      <div className="flex items-center gap-2 mt-2">
        <Sparkline points={stat.sparkline} color={stat.color} />
        <span
          className={`text-[11px] font-medium px-1.5 py-0.5 rounded ${stat.bgColor} ${stat.color}`}
        >
          {stat.delta}
        </span>
      </div>

      {/* Decorative ring */}
      <div className="absolute -bottom-2 -right-2 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
            className={`stroke-current ${stat.color}`}
            style={{
              transition: "stroke-dashoffset 1.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default function StatsRow() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3"
    >
      {STATS.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} started={started} index={i} />
      ))}
    </div>
  );
}
