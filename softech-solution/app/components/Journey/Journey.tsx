"use client";
import { motion } from "framer-motion";
import { Calendar, LightbulbIcon } from "lucide-react";
import type { ExperienceItemType } from "@/components/work-experience";
import { WorkExperience } from "@/components/work-experience";
export default function Journey() {
  return (
    <div className="flex-col w-full flex items-start justify-center p-12">
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
          Where did we Started ?
        </motion.span>
        <div className="flex items-start ">
          <p className="font-extrabold md:text-5xl text-4xl lg:text-6xl">
            Journey ?
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
      </div>
      <div>
        <WorkExperience
          className="w-full bg-transparent"
          experiences={JOURNEY}
        />
      </div>
    </div>
  );
}

const JOURNEY: ExperienceItemType[] = [
  {
    id: "Soft Tech Solution",
    companyName: "Soft Tech Solution",
    companyLogo: "https://soft-techsolutions.com/assets/img/btn-img.png",
    companyWebsite: "https://quaric.com",
    positions: [
      {
        id: "6",
        title: "2015-2016",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        skills: [
          "SMS Service",
          "FAS (Finance Managment Solution)",
          "IVRS Service",
          "Miscall Service",
        ],
      },
      {
        id: "5",
        title: "2017 - 2018",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <Calendar />,
        skills: [
          "Long Code",
          "Webiste Development",
          "Bulk Email",
          "Voice Call/Broadcasting",
          "SSL Certificate",
        ],
      },
      {
        id: "4",
        title: "2019 - 2020",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <Calendar />,
        skills: [
          "NACH Application",
          "NACH Signing Tool",
          "CTS Solution",
          "POS (Point of Sale) for International Clients",
          "PDF Signing Tool",
          "Digital Signature Certificate (DSC)",
        ],
      },
      {
        id: "3",
        title: " 2021 -2022",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <Calendar />,
        skills: [
          "PPS (Positive Pay)",
          "Fuel POS Solution for International Clients",
          "NACH Host to Host",
          "Ticketing Tool/Complaint Management System",
          "SmartERP (HRMS/Payroll/CRMS)",
          "V-KYC/Re-KYC / E-KYC Solutions",
        ],
      },
      {
        id: "2",
        title: "2023 - 2024",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <Calendar />,
        skills: [
          "WhatsApp Bot & Business API",
          "Simplified eMandate API",
          "eSign eMandate",
          "eNACH Sponsor eMandate API ",
          "ENACH Destination eMandate API",
          "Bank & Corporator Portal",
          "Power SMPP for International Client",
          "API Based PAN CBDT/DGFT/EPFO/GSTD",
          "PFMS Automation interface",
          "KYC Validation API Suite",
        ],
      },
      {
        id: "1",
        title: "2025 - 2026",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: <Calendar />,
        skills: [
          "SMS Service",
          "FAS (Finance Managment Solution)",
          "IVRS Service",
          "Miscall Service",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
];
