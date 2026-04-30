"use client";
import { useState } from "react";
import ElectricBorder from "@/components/ElectricBorder";
import UpperContent from "./UpperContent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/motion-primitives/carousel";

type Era = {
  years: string;
  label: string;
  color: string;
  dot: string;
  line: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  isActive?: boolean;
  tags: string[];
};

const eras: Era[] = [
  {
    years: "2025–26",
    label: "Next-gen integrations",
    isActive: true,
    color: "blue",
    dot: "bg-blue-500",
    line: "bg-blue-100",
    tagBg: "bg-blue-50",
    tagText: "text-blue-800",
    tagBorder: "border-blue-200",
    tags: [
      "RCS Messaging",
      "MNRL Integration",
      "FRI Integration",
      "Aadhaar Seeding",
      "BNL Portal",
      "NCRP Integration",
    ],
  },
  {
    years: "2023–24",
    label: "APIs & compliance suite",
    color: "violet",
    dot: "bg-violet-500",
    line: "bg-violet-100",
    tagBg: "bg-violet-50",
    tagText: "text-violet-800",
    tagBorder: "border-violet-200",
    tags: [
      "WhatsApp Bot API",
      "eNACH eMandate",
      "Power SMPP",
      "PFMS Interface",
      "eMandate API",
      "KYC Validation",
      "PAN API (CBDT/GST)",
    ],
  },
  {
    years: "2021–22",
    label: "Payments & KYC expansion",
    color: "teal",
    dot: "bg-teal-500",
    line: "bg-teal-100",
    tagBg: "bg-teal-50",
    tagText: "text-teal-800",
    tagBorder: "border-teal-200",
    tags: [
      "Positive Pay",
      "Fuel POS Solution",
      "SmartERP HRMS",
      "Ticketing System",
      "V-KYC / Re-KYC",
      "E-KYC Solutions",
    ],
  },
  {
    years: "2019–20",
    label: "Digital infrastructure",
    color: "amber",
    dot: "bg-amber-500",
    line: "bg-amber-100",
    tagBg: "bg-amber-50",
    tagText: "text-amber-800",
    tagBorder: "border-amber-200",
    tags: [
      "NACH Application",
      "NACH Signing Tool",
      "CTS Solution",
      "POS International",
      "PDF Signing Tool",
      "DSC (Digital Signature)",
    ],
  },
  {
    years: "2017–18",
    label: "Messaging & web services",
    color: "orange",
    dot: "bg-orange-500",
    line: "bg-orange-100",
    tagBg: "bg-orange-50",
    tagText: "text-orange-800",
    tagBorder: "border-orange-200",
    tags: [
      "Long Code",
      "Bulk Email",
      "SSL Certificate",
      "Website Development",
      "Voice Broadcasting",
    ],
  },
  {
    years: "2015–16",
    label: "Foundation — where it began",
    color: "green",
    dot: "bg-green-500",
    line: "bg-transparent",
    tagBg: "bg-green-50",
    tagText: "text-green-800",
    tagBorder: "border-green-200",
    tags: [
      "SMS Service",
      "IVRS Service",
      "FAS (Finance Mgmt)",
      "Miscall Service",
    ],
  },
];

const TimeLineContent = () => {
  return (
    <div className="relative w-full">
      <Carousel>
        <CarouselContent className="-ml-4">
          {eras.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-4">
              <div className="flex flex-col items-center">
                {/* Year Pill */}
                <span className="bg-brand2 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-3 tracking-wide">
                  {item.years}
                </span>

                {/* Timeline Line + Dot */}
                <div className="relative w-full flex items-center justify-center h-[2px] mb-0">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-zinc-200 dark:bg-zinc-700" />
                  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-brand2 ring-2 ring-white dark:ring-zinc-950 ring-offset-0" />
                </div>

                {/* Stem */}
                <div className="w-px h-7 bg-zinc-200 dark:bg-zinc-700" />

                {/* Card */}
                {index === 0 ? (
                  <ElectricBorder
                    color="#fff"
                    speed={0.9}
                    chaos={0.05}
                    className={""}
                    style={{ borderRadius: 10 }}
                  >
                    <div className="w-full h-55  rounded-2xl   bg-white    p-5 transition-all duration-200   group">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2 leading-snug">
                        {item.label}
                      </h3>
                      <div className="  gap-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  ">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full text-nowrap border cols-span-1 px-2.5 py-1 w-fit h-fit text-xs font-medium ${item.tagBg} ${item.tagText} ${item.tagBorder}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ElectricBorder>
                ) : (
                  <div className="w-full h-55 rounded-xl  bg-white  p-5 transition-all duration-200 hover:-translate-y-1 border border-neutral-200 group">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2 leading-snug">
                      {item.label}
                    </h3>
                    <div className="  gap-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  ">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full text-nowrap border cols-span-1 px-2.5 py-1 w-fit h-fit text-xs font-medium ${item.tagBg} ${item.tagText} ${item.tagBorder}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TimeLineContent;
