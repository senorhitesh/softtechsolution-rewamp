"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Service = {
  id: number;
  title: string;
  tag: string;
  color: string;
  bg: string;
  tagColor: string;
  description: string;
};

type ServiceGroup = {
  id: number;
  name: string;
  services: Service[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: ServiceGroup[] = [
  {
    id: 1,
    name: "TELCO SERVICES",
    services: [
      {
        id: 1,
        title: "WhatsApp Bot & Business API",
        tag: "Messaging",
        color: "#16a34a",
        bg: "#dcfce7",
        tagColor: "#15803d",
        description:
          "Automate customer communication on WhatsApp using secure API integration.\nSend rich messages and manage conversations at scale in real time.",
      },
      {
        id: 2,
        title: "Secure SMS Service",
        tag: "SMS",
        color: "#2563eb",
        bg: "#dbeafe",
        tagColor: "#1d4ed8",
        description:
          "Send fast and reliable SMS for OTPs, alerts, and notifications.\nBuilt on a secure platform with API integration and real-time delivery reports.",
      },
      {
        id: 3,
        title: "Missed Call Service",
        tag: "Voice",
        color: "#f59e0b",
        bg: "#fef3c7",
        tagColor: "#b45309",
        description:
          "Capture leads and trigger responses using a simple missed call mechanism.\nIdeal for campaigns, feedback, and real-time customer engagement.",
      },
      {
        id: 4,
        title: "IVR Solutions",
        tag: "Voice",
        color: "#f97316",
        bg: "#ffedd5",
        tagColor: "#c2410c",
        description:
          "Automate call handling with interactive voice response systems.\nRoute queries efficiently and provide 24/7 customer support.",
      },
      {
        id: 5,
        title: "Voice Broadcast",
        tag: "Voice",
        color: "#7c3aed",
        bg: "#ede9fe",
        tagColor: "#6d28d9",
        description:
          "Send pre-recorded voice messages to customers at scale.\nPerfect for alerts, reminders, and promotional campaigns.",
      },
      {
        id: 6,
        title: "Long Code (Virtual Mobile Number)",
        tag: "Numbers",
        color: "#ec4899",
        bg: "#fdf2f8",
        tagColor: "#be185d",
        description:
          "Enable two-way SMS communication using a virtual mobile number.\nAutomate responses and integrate with systems via API.",
      },
      {
        id: 7,
        title: "Rich Communication Services (RCS)",
        tag: "Messaging",
        color: "#0ea5e9",
        bg: "#e0f2fe",
        tagColor: "#0369a1",
        description:
          "Enhance messaging with rich media like images, buttons, and carousels.\nDeliver interactive and branded communication experiences.",
      },
    ],
  },
  {
    id: 2,
    name: "NPCI NACH PRODUCTS",
    services: [
      {
        id: 1,
        title: "API eMandate Destination",
        tag: "Banking",
        color: "#2563eb",
        bg: "#dbeafe",
        tagColor: "#1e40af",
        description:
          "Enable banks to receive and process eMandates through secure API integration.\nSupports real-time validation and seamless debit authorization workflows.",
      },
      {
        id: 2,
        title: "API eMandate Sponsor (Bank & Corporate Portal)",
        tag: "Payments",
        color: "#7c3aed",
        bg: "#ede9fe",
        tagColor: "#6d28d9",
        description:
          "Allow corporates and banks to create and manage eMandates via API or portal.\nFacilitates recurring payments with secure authentication methods.",
      },
      {
        id: 3,
        title: "eSign eMandate",
        tag: "eSign",
        color: "#0d9488",
        bg: "#ccfbf1",
        tagColor: "#0f766e",
        description:
          "Digitally authorize mandates using Aadhaar-based eSign authentication.\nEnsures secure, paperless, and legally valid mandate registration.",
      },
      {
        id: 4,
        title: "Host to Host eMandate",
        tag: "Integration",
        color: "#0284c7",
        bg: "#e0f2fe",
        tagColor: "#0369a1",
        description:
          "Automate mandate processing between bank systems and NPCI via host-to-host setup.\nEnables secure file transfer, validation, and high-volume transaction handling.",
      },
      {
        id: 5,
        title: "NACH Application (Complete Suite)",
        tag: "Banking",
        color: "#ea580c",
        bg: "#ffedd5",
        tagColor: "#c2410c",
        description:
          "Comprehensive platform for managing bulk debit and credit transactions.\nSupports payments like salaries, pensions, EMIs, and utility collections.",
      },
      {
        id: 6,
        title: "NACH Signing Tool",
        tag: "Tools",
        color: "#16a34a",
        bg: "#dcfce7",
        tagColor: "#15803d",
        description:
          "Digitally sign and verify NACH files as per NPCI standards.\nEnsures secure encryption and authentication for bulk transaction processing.",
      },
      {
        id: 7,
        title: "PDF Signing Tool",
        tag: "Tools",
        color: "#4f46e5",
        bg: "#e0e7ff",
        tagColor: "#4338ca",
        description:
          "Sign multiple PDF documents digitally with ease and compliance.\nReduces manual effort while ensuring secure and verifiable document handling.",
      },
      {
        id: 8,
        title: "CTS - Cheque Transaction System",
        tag: "Banking",
        color: "#ca8a04",
        bg: "#fef9c3",
        tagColor: "#a16207",
        description:
          "Image-based cheque clearing system for faster and secure processing.\nEliminates physical cheque movement and improves clearing efficiency.",
      },
      {
        id: 9,
        title: "Positive Pay System",
        tag: "Security",
        color: "#dc2626",
        bg: "#fee2e2",
        tagColor: "#991b1b",
        description:
          "Enhance cheque security by verifying issued cheque details before clearing.\nPrevents fraud through customer confirmation and validation mechanisms.",
      },
      {
        id: 10,
        title: "Online Aadhaar Seeding Base Platform",
        tag: "Identity",
        color: "#0891b2",
        bg: "#cffafe",
        tagColor: "#0e7490",
        description:
          "Enable customers to link Aadhaar with bank accounts through an online platform.\nSupports seamless integration with CBS for secure identity mapping.",
      },
    ],
  },
  {
    id: 3,
    name: "DIGITAL BANKING",
    services: [
      {
        id: 1,
        title: "Complaint Management System",
        tag: "Banking",
        color: "#2563eb",
        bg: "#dbeafe",
        tagColor: "#1d4ed8",
        description:
          "Manage and resolve customer complaints through a centralized platform.\nTrack tickets, monitor status, and improve service response efficiency.",
      },
      {
        id: 2,
        title: "Pre-Validate Bank Account (ITR Portal)",
        tag: "Payments",
        color: "#16a34a",
        bg: "#dcfce7",
        tagColor: "#15803d",
        description:
          "Enable real-time bank account validation through the ITR e-filing portal.\nEnsures seamless processing of income tax refunds with API integration.",
      },
      {
        id: 3,
        title: "e-KYC",
        tag: "Identity",
        color: "#db2777",
        bg: "#fce7f3",
        tagColor: "#be185d",
        description:
          "Verify customer identity instantly using Aadhaar-based digital KYC.\nEliminates paperwork and reduces onboarding time with secure authentication.",
      },
      {
        id: 4,
        title: "Video KYC",
        tag: "Identity",
        color: "#ec4899",
        bg: "#fdf2f8",
        tagColor: "#9d174d",
        description:
          "Perform remote KYC verification through live video interaction.\nEnhances compliance while offering a convenient and paperless onboarding process.",
      },
      {
        id: 5,
        title: "KYC Validation API Suite",
        tag: "API",
        color: "#7c3aed",
        bg: "#ede9fe",
        tagColor: "#6d28d9",
        description:
          "Validate customer identity using APIs for Aadhaar, PAN, and other documents.\nIntegrates seamlessly into applications for fast and secure verification.",
      },
      {
        id: 6,
        title: "Lead Management System",
        tag: "CRM",
        color: "#0ea5e9",
        bg: "#e0f2fe",
        tagColor: "#0369a1",
        description:
          "Capture, track, and manage leads from multiple sources in one platform.\nEliminate duplication and improve conversion with smart workflow management.",
      },
      {
        id: 7,
        title: "NREGS Crypto Signer Tool",
        tag: "Tools",
        color: "#f59e0b",
        bg: "#fef3c7",
        tagColor: "#b45309",
        description:
          "Digitally sign and secure financial transaction messages for NREGS processes.\nEnsures compliance and eliminates manual intervention in payment workflows.",
      },
      {
        id: 8,
        title: "PFMS Automation",
        tag: "Automation",
        color: "#10b981",
        bg: "#d1fae5",
        tagColor: "#047857",
        description:
          "Automate file processing and validation between CBS and PFMS platform.\nReduces manual effort and ensures accurate, real-time financial data exchange.",
      },
    ],
  },
  {
    id: 4,
    name: "OTHER SERVICES",
    services: [
      {
        id: 1,
        title: "SSL Certificate",
        tag: "Security",
        color: "#f59e0b",
        bg: "#fef3c7",
        tagColor: "#b45309",
        description:
          "Secure your website with encrypted HTTPS connections and data protection.\nBuild user trust by safeguarding transactions and sensitive information.",
      },
      {
        id: 2,
        title: "Website Development",
        tag: "Development",
        color: "#7c3aed",
        bg: "#ede9fe",
        tagColor: "#6d28d9",
        description:
          "Design and develop responsive, SEO-friendly websites tailored to your business.\nDeliver seamless user experience with scalable and modern web solutions.",
      },
      {
        id: 3,
        title: "Domain & Web Hosting",
        tag: "Hosting",
        color: "#0ea5e9",
        bg: "#e0f2fe",
        tagColor: "#0369a1",
        description:
          "Register domains and host your website on secure, high-availability servers.\nEnsure fast performance, reliability, and compliance with security standards.",
      },
      {
        id: 4,
        title: "Google Workspace (G Suite Mail)",
        tag: "Communication",
        color: "#ef4444",
        bg: "#fee2e2",
        tagColor: "#991b1b",
        description:
          "Professional email and collaboration tools powered by Google Workspace.\nManage communication, files, and meetings efficiently from anywhere.",
      },
      {
        id: 5,
        title: "Bulk Email (API Integration)",
        tag: "API",
        color: "#8b5cf6",
        bg: "#f3e8ff",
        tagColor: "#6d28d9",
        description:
          "Send bulk and transactional emails using API-based integration.\nTrack performance with analytics like opens, clicks, and delivery reports.",
      },
      {
        id: 6,
        title: "DSC (Digital Signature Certificate)",
        tag: "Security",
        color: "#14b8a6",
        bg: "#ccfbf1",
        tagColor: "#0f766e",
        description:
          "Digitally sign documents securely for compliance and authentication.\nUsed for e-filing, e-tendering, and secure online transactions.",
      },
    ],
  },
];

const TABS = [
  "TELCO SERVICES",
  "NPCI NACH PRODUCTS",
  "DIGITAL BANKING",
  "OTHER SERVICES",
];

// ─── Main Component ───────────────────────────────────────────────────────────

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("TELCO SERVICES");
  const selected = services.find((s) => s.name === activeTab);

  return (
    <div className="flex max-w-7xl mx-auto flex-col mt-16 gap-6 p-8 w-full">
      {/* Header */}
      <div>
        <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-2">
          Our Offerings
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-1">
          What We Do
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          End-to-end communication infrastructure for modern enterprises.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-150 tracking-wide cursor-pointer ${
              activeTab === tab
                ? "bg-gray-900 text-white border-transparent"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
            }`}
          >
            {tab.charAt(0) + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {selected?.services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;

// ─── Service Card ─────────────────────────────────────────────────────────────

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  return (
    <div
      className="group bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-4 cursor-pointer hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Icon Tile */}
      <div
        className="w-full h-40 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: service.bg, color: service.color }}
      ></div>

      {/* Title */}
      <p className="text-xl font-medium text-gray-900 leading-snug flex-1">
        {service.title}
      </p>
      <p className="text-sm">{service.description}</p>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ background: service.bg, color: service.tagColor }}
        >
          {service.tag}
        </span>

        <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-150 group-hover:bg-gray-900 group-hover:border-transparent">
          <ArrowRightIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:-rotate-45 transition-colors duration-150" />
        </div>
      </div>
    </div>
  );
};
