"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import bg from "@/public/contact-bg.png";
import {
  ChevronRight,
  FileSignature,
  Layout,
  BookOpen,
  CreditCard,
  UserCheck,
  Video,
  CheckCircle,
  Landmark,
  Database,
  Link2,
  PenTool,
  FileText,
  Layers,
} from "lucide-react";

const Links = [
  {
    label: "CMS",
    ariaLabel: "products/cms",
    icon: <Layout className="w-4 h-4" />,
  },
  {
    label: "LMS",
    ariaLabel: "products/lms",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    label: "Service Charges",
    ariaLabel: "products/service-charges",
    icon: <CreditCard className="w-4 h-4" />,
  },
  {
    label: "E-kyc",
    ariaLabel: "products/kyc",
    icon: <UserCheck className="w-4 h-4" />,
  },
  {
    label: "Video Kyc",
    ariaLabel: "products/videokyc",
    icon: <Video className="w-4 h-4" />,
  },
  {
    label: "Kyc Validation",
    ariaLabel: "products/kyc-validation",
    icon: <CheckCircle className="w-4 h-4" />,
  },
  {
    label: "PFMS Automation",
    ariaLabel: "products/pfms-automation",
    icon: <Landmark className="w-4 h-4" />,
  },
  {
    label: "NGRSTGS",
    ariaLabel: "products/ngrstgs",
    icon: <Database className="w-4 h-4" />,
  },
  {
    label: "API eMandate Destination",
    ariaLabel: "products/api-emandate-destination",
    icon: <Link2 className="w-4 h-4" />,
  },
  {
    label: "API eMandate Sponser",
    ariaLabel: "products/api-emandate-sponser",
    icon: <Link2 className="w-4 h-4" />,
  },
  {
    label: "eSign E-Mandate",
    ariaLabel: "products/esign",
    icon: <PenTool className="w-4 h-4" />,
  },
  {
    label: "Host 2 Host Automation",
    ariaLabel: "products/host-automation",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    label: "NACH Application",
    ariaLabel: "products/nach-app",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    label: "NACH Signing Tools",
    ariaLabel: "products/nach-signing-tools",
    icon: <FileSignature className="w-4 h-4" />,
  },
  {
    label: "PDF DigiSign Tools",
    ariaLabel: "products/pdf-digisigning-tools",
    icon: <FileSignature className="w-4 h-4" />,
  },
  {
    label: "CTS",
    ariaLabel: "products/cts",
    icon: <Database className="w-4 h-4" />,
  },
  {
    label: "PPS",
    ariaLabel: "products/pps",
    icon: <Database className="w-4 h-4" />,
  },
  {
    label: "Online Aadhar Seeding Platform",
    ariaLabel: "products/online-aadhar-seeding-platforms",
    icon: <UserCheck className="w-4 h-4" />,
  },
];
const QuickLinkServices = ({ activepage }: { activepage: string }) => {
  const activeService = activepage;

  return (
    <aside className="lg:col-span-4 flex flex-col gap-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-brand2 p-4">
          <h3 className="text-white font-bold text-lg">Our Services</h3>
        </div>
        <nav className="flex flex-col">
          {Links.map((link, idx) => (
            <Link
              key={idx}
              href={link.ariaLabel}
              className={`flex items-center justify-between p-4 transition-all duration-200 group hover:bg-blue-50 ${
                activeService === link.label
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600"
              }`}
            >
              <motion.div initial className="flex items-center gap-3">
                <span
                  className={
                    activeService === link.label
                      ? "text-blue-600"
                      : "text-slate-400 group-hover:text-brand2"
                  }
                >
                  {link.icon}
                </span>
                <span className="text-sm">{link.label}</span>
              </motion.div>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${activeService === link.label ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`}
              />
            </Link>
          ))}
        </nav>
      </div>

      {/* Contact Promo Card */}
      <div
        className="relative h-64 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end p-6 text-white group"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10">
          <h4 className="text-xl font-bold mb-2">Still have Doubts?</h4>
          <p className="text-sm text-slate-200 mb-4">
            Contact our experts today for a personalized consultation.
          </p>
          <button className="bg-white text-brand2 px-6 py-2 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </aside>
  );
};

export default QuickLinkServices;
