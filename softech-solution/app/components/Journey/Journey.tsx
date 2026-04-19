"use client";
import { Calendar, CodeXmlIcon, LightbulbIcon } from "lucide-react";
import type { ExperienceItemType } from "@/components/work-experience";
import { WorkExperience } from "@/components/work-experience";
export default function Journey() {
  return (
    <div className="max-w-7xl flex-col mx-auto flex items-center justify-center p-12">
      <div className="relative  overflow-hidden"></div>
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
