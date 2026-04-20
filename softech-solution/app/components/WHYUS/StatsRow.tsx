"use client";

import { useEffect, useRef, useState } from "react";

const StatsRow = () => {
  const [started, setStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={statsRef} className="grid grid-cols-4 gap-3">
      <StatCard
        label="Happy clients"
        target={1200}
        color="text-emerald-600"
        started={started}
      />
      <StatCard
        label="Installations"
        target={7000}
        color="text-amber-600"
        started={started}
      />
      <StatCard
        label="Enterprise integrations"
        target={50}
        color="text-purple-600"
        started={started}
      />
      <StatCard
        label="States presence (India)"
        target={26}
        color="text-indigo-600"
        started={started}
      />
    </div>
  );
};

export default StatsRow;

const StatCard = ({
  label,
  target,
  suffix = "+",
  color,
  started,
}: {
  label: string;
  target: number;
  suffix?: string;
  color: string;
  started: boolean;
}) => {
  const value = useCountUp(target, Math.min(2000, target * 0.5), started);
  return (
    <div className="bg-white border border-neutral-200 rounded-md p-4">
      <p className="text-xs text-neutral-500 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>
        {value.toLocaleString()}
        {suffix}
      </p>
    </div>
  );
};

const useCountUp = (target: number, duration = 3000, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(Math.round(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return value;
};
