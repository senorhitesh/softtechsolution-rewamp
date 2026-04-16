"use client";
import { useState } from "react";

export default function CosmicToggle({
  defaultChecked = true,
}: {
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="cursor-pointer inline-block">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked(true)}
      />
      <div
        className={`
        relative w-28 h-14 shadow-xl shadow-[#550de6]/30 rounded-full flex items-center p-1 overflow-hidden
        transition-all duration-300 ease-in-out
        ${
          checked
            ? "bg-gradient-to-br from-brand2 to-[#8a2be2] border-2 border-transparent"
            : "bg-gray-200 border-2 border-indigo-200"
        }
      `}
      >
        <div className="absolute bg-white w-20 h-8 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          className={`
        relative z-10 w-11 h-11 rounded-full bg-white shrink-0
        transition-all duration-300 ease-in-out
        ${
          checked
            ? "translate-x-[calc(7rem-3rem-8px)] shadow-[0_2px_10px_rgba(99,102,241,0.3)]"
            : "translate-x-0 shadow-[0_2px_8px_rgba(99,102,241,0.18)]"
        }
        `}
        />
      </div>
    </label>
  );
}
