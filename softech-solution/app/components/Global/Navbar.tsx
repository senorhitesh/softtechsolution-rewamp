"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logosts.png";
import { ModeToggle } from "./ToogleSwitch";

// ─── Types ────────────────────────────────────────────────────────────────────
type NavLink = { label: string; ariaLabel: string };

type NavItem = {
  label?: string;
  ariaLabel?: string;
  links?: NavLink[];
};

type TechCategory = {
  id: string;
  icon: string;
  label: string;
  items: NavLink[];
};

// ─── Tech Categories Data ─────────────────────────────────────────────────────
const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "lang",
    icon: "⌨️",
    label: "Programming languages",
    items: [
      { label: "Java", ariaLabel: "technologies/java" },
      { label: "Python", ariaLabel: "technologies/python" },
      { label: "PHP", ariaLabel: "technologies/php" },
      { label: "C#", ariaLabel: "technologies/csharp" },
    ],
  },
  {
    id: "fw",
    icon: "🧩",
    label: "Frameworks & libraries",
    items: [
      { label: "Spring", ariaLabel: "technologies/spring" },
      { label: "React", ariaLabel: "technologies/react" },
      { label: "Angular", ariaLabel: "technologies/angular" },
      { label: "Laravel", ariaLabel: "technologies/laravel" },
      { label: "Flutter", ariaLabel: "technologies/flutter" },
      { label: "Xamarin", ariaLabel: "technologies/xamarin" },
      { label: ".NET", ariaLabel: "technologies/dotnet" },
    ],
  },
  {
    id: "backend",
    icon: "⚙️",
    label: "Runtime & backend",
    items: [
      { label: "Node.js", ariaLabel: "technologies/nodejs" },
      { label: "Firebase", ariaLabel: "technologies/firebase" },
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    label: "Mobile & platforms",
    items: [
      { label: "Android", ariaLabel: "technologies/android" },
      { label: "iOS / Apple", ariaLabel: "technologies/apple" },
    ],
  },
  {
    id: "db",
    icon: "🗄️",
    label: "Databases",
    items: [
      { label: "MySQL", ariaLabel: "technologies/mysql" },
      { label: "PostgreSQL", ariaLabel: "technologies/postgresql" },
      { label: "MongoDB", ariaLabel: "technologies/mongodb" },
    ],
  },
  {
    id: "cms",
    icon: "🛒",
    label: "CMS & e-commerce",
    items: [
      { label: "WordPress", ariaLabel: "technologies/wordpress" },
      { label: "Magento", ariaLabel: "technologies/magento" },
    ],
  },
  {
    id: "fe",
    icon: "🎨",
    label: "Frontend",
    items: [
      { label: "HTML5", ariaLabel: "technologies/html5" },
      { label: "CSS3", ariaLabel: "technologies/css3" },
    ],
  },
];

// ─── Nav Items Data ───────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "Home", ariaLabel: "/" },
  { label: "About", ariaLabel: "/about" },
  {
    label: "Services",
    links: [
      { label: "Whatsapp Bot & Api", ariaLabel: "/services/whatsappbot" },
      { label: "SMS Solution", ariaLabel: "/services/sms" },
      { label: "Miscall Solution", ariaLabel: "/services/miscall" },
      { label: "IVR Solution", ariaLabel: "/services/ivrsolution" },
      { label: "Rich Communication Services", ariaLabel: "/services/rcs" },
      { label: "SSL Certificate", ariaLabel: "/services/ssl" },
      { label: "Web Hosting", ariaLabel: "/services/hosting" },
      { label: "Domain", ariaLabel: "/services/domain" },
      { label: "Web Development", ariaLabel: "/services/web-development" },
      { label: "G Suite", ariaLabel: "/services/gsuite" },
      { label: "Bulk Email", ariaLabel: "/services/bullkmain" },
      { label: "DSC Certificate", ariaLabel: "/services/dsc-certificate" },
      {
        label: "Software Development",
        ariaLabel: "/services/software-development",
      },
    ],
  },
  {
    label: "Products",
    links: [
      { label: "CMS", ariaLabel: "products/cms" },
      { label: "LMS", ariaLabel: "products/lms" },
      { label: "Service Charges", ariaLabel: "products/servicecharges" },
      { label: "E-kyc", ariaLabel: "products/kyc" },
      { label: "Video Kyc", ariaLabel: "products/videokyc" },
      { label: "Kyc Validation", ariaLabel: "products/kycvalidation" },
      { label: "PFMS Automation", ariaLabel: "products/pfms" },
      { label: "NGRSTGS", ariaLabel: "products/ngrstgs" },
      {
        label: "API eMandate Destination",
        ariaLabel: "products/apiemandatedestination",
      },
      {
        label: "API eMandate Sponser",
        ariaLabel: "products/apiemandatesponser",
      },
      { label: "eSign E-Mandate", ariaLabel: "products/esign" },
      { label: "Host 2 Host Automation", ariaLabel: "products/hostautomation" },
      { label: "NACH Application", ariaLabel: "products/nachapp" },
      { label: "NACH Signing Tools", ariaLabel: "products/nach-signing-tools" },
      {
        label: "PDF DigiSign Tools",
        ariaLabel: "products/pdf-digisigning-tools",
      },
      { label: "CTS", ariaLabel: "products/cts" },
      { label: "PPS", ariaLabel: "products/pps" },
      {
        label: "Online Aadhar Seeding Platform",
        ariaLabel: "products/online-aadhar-seeding-platforms",
      },
    ],
  },
  {
    label: "Technologies",
    links: [],
  },
  {
    label: "More",
    links: [
      { label: "Careers", ariaLabel: "/careers" },
      { label: "Support", ariaLabel: "/support" },
      { label: "Blog", ariaLabel: "/blog" },
    ],
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

// ─── Chevron SVG ──────────────────────────────────────────────────────────────
function Chevron({
  open,
  className = "w-3.5 h-3.5 opacity-60",
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}

// ─── Desktop: Generic Mega Dropdown ──────────────────────────────────────────
function MegaDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };
  const leave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  const cols =
    item.links && item.links.length > 8
      ? 3
      : item.links && item.links.length > 4
        ? 2
        : 1;

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={`flex items-center gap-1.5 px-1 py-1.5 text-sm font-medium tracking-wide
          transition-colors duration-150 outline-none group
          ${open ? "text-brand2" : "text-slate-700 hover:text-brand2"}`}
      >
        {item.label}
        <Chevron open={open} />
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand2 group-hover:w-full transition-all duration-300 rounded-full" />
      </button>

      <AnimatePresence>
        {open && item.links && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              y: -6,
              scale: 0.97,
              transition: { duration: 0.15, ease: "easeIn" },
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
            style={{ minWidth: cols === 3 ? 600 : cols === 2 ? 380 : 220 }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
              <div className="w-3 h-3 bg-white border border-slate-200 rotate-45 translate-y-1 mx-auto shadow-sm" />
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/80 overflow-hidden">
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="p-4 grid gap-x-6 gap-y-0.5"
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
              >
                {item.links.map((link) => (
                  <motion.li
                    key={link.ariaLabel}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.18, ease: "easeOut" },
                    }}
                  >
                    <Link
                      href={link.ariaLabel}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-slate-600
                        hover:bg-brand2/10 hover:text-brand2 transition-all duration-150 group/link font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand2 shrink-0" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Desktop: Technologies Mega Dropdown (categorized) ───────────────────────
function TechMegaDropdown() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };
  const leave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={`flex items-center gap-1.5 px-1 py-1.5 text-sm font-medium tracking-wide
          transition-colors duration-150 outline-none group
          ${open ? "text-brand2" : "text-slate-700 hover:text-brand2"}`}
      >
        Technologies
        <Chevron open={open} />
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand2 group-hover:w-full transition-all duration-300 rounded-full" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              y: -6,
              scale: 0.97,
              transition: { duration: 0.15, ease: "easeIn" },
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
            style={{ width: 560 }}
          >
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
              <div className="w-3 h-3 bg-white border border-slate-200 rotate-45 translate-y-1 mx-auto shadow-sm" />
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/80 overflow-hidden flex">
              {/* Sidebar */}
              <div className="w-52 border-r border-slate-100 p-2 shrink-0">
                {TECH_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(i)}
                    onClick={() => setActiveCategory(i)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                      text-sm font-medium transition-all duration-150 text-left
                      ${
                        activeCategory === i
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                      }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-md flex items-center justify-center text-sm shrink-0
                        ${activeCategory === i ? "bg-indigo-100" : "bg-slate-100"}`}
                      >
                        {cat.icon}
                      </span>
                      {cat.label}
                    </span>
                    <svg
                      className={`w-3.5 h-3.5 opacity-40 transition-transform duration-150
                        ${activeCategory === i ? "translate-x-0.5 opacity-100" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Items panel */}
              <div className="flex-1 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3">
                  {TECH_CATEGORIES[activeCategory].label}
                </p>
                <motion.ul
                  key={activeCategory}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-0.5"
                  style={{
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(140px, 1fr))",
                  }}
                >
                  {TECH_CATEGORIES[activeCategory].items.map((item) => (
                    <motion.li
                      key={item.ariaLabel}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }}
                    >
                      <Link
                        href={item.ariaLabel}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-600
                          hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-150 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile: Generic Nav Item ─────────────────────────────────────────────────
function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.links || item.links.length === 0) {
    return (
      <Link
        href={item.ariaLabel ?? "/"}
        onClick={onClose}
        className="flex items-center px-4 py-3.5 text-sm font-semibold text-slate-700
          hover:bg-brand2/10 rounded-xl transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold
          text-slate-700 hover:bg-brand2/10 transition-colors rounded-xl"
      >
        {item.label}
        <Chevron open={open} className="w-4 h-4 opacity-60" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.18, ease: "easeIn" },
            }}
            className="overflow-hidden bg-slate-50/80 rounded-xl mx-1 mb-1"
          >
            {item.links.map((link) => (
              <li key={link.ariaLabel}>
                <Link
                  href={link.ariaLabel}
                  onClick={onClose}
                  className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-slate-600
                    hover:bg-brand2/10 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile: Technologies Nav Item (two-level accordion) ─────────────────────
function MobileTechNavItem({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState<string | null>(null);

  const toggleCat = (id: string) =>
    setOpenCat((prev) => (prev === id ? null : id));

  return (
    <div className="rounded-xl overflow-hidden">
      {/* Top-level row */}
      <button
        onClick={() => {
          setOpen(!open);
          setOpenCat(null);
        }}
        className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold
          text-slate-700 hover:bg-brand2/10 transition-colors rounded-xl"
      >
        Technologies
        <Chevron open={open} className="w-4 h-4 opacity-60" />
      </button>

      {/* Category list */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.18, ease: "easeIn" },
            }}
            className="overflow-hidden bg-slate-50/80 rounded-xl mx-1 mb-1"
          >
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                {/* Category row */}
                <button
                  onClick={() => toggleCat(cat.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium
                    transition-colors
                    ${
                      openCat === cat.id
                        ? "text-indigo-700 bg-indigo-50"
                        : "text-slate-600 hover:bg-brand2/10"
                    }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs shrink-0
                      ${openCat === cat.id ? "bg-indigo-100" : "bg-slate-200"}`}
                    >
                      {cat.icon}
                    </span>
                    {cat.label}
                  </span>
                  <Chevron
                    open={openCat === cat.id}
                    className="w-3.5 h-3.5 opacity-50"
                  />
                </button>

                {/* Items under category */}
                <AnimatePresence>
                  {openCat === cat.id && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.15, ease: "easeIn" },
                      }}
                      className="overflow-hidden bg-white"
                    >
                      {cat.items.map((item) => (
                        <li key={item.ariaLabel}>
                          <Link
                            href={item.ariaLabel}
                            onClick={onClose}
                            className="flex items-center gap-2.5 pl-12 pr-4 py-2.5 text-sm
                              text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-indigo-300 shrink-0" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/8 border-b border-slate-200/80"
              : "bg-white/80 backdrop-blur-sm border-b border-transparent"
          }`}
      >
        {/* Upper strip */}
        <div className="max-w-7xl px-4 py-2 sm:px-6 mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <p className="text-[#59B039] border-gray-300 border-r pr-3">
              GST-IN: <span className="text-neutral-900">24ACUFS8893B1ZH</span>
            </p>
            <div className="flex gap-2">
              {/* LinkedIn */}
              <div className="flex rounded-md">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3369 15.3372H12.6698V11.1604C12.6698 10.1644 12.652 8.88221 11.2827 8.88221C9.8936 8.88221 9.68107 9.9674 9.68107 11.0879V15.3369H7.01402V6.74767H9.57438V7.92148H9.61023C9.86646 7.48336 10.2367 7.12295 10.6816 6.87862C11.1264 6.63429 11.6292 6.5152 12.1364 6.53402C14.8396 6.53402 15.338 8.31211 15.338 10.6253L15.3369 15.3372ZM4.00472 5.57358C3.69861 5.57363 3.39935 5.48291 3.1448 5.31289C2.89025 5.14286 2.69185 4.90117 2.57465 4.61837C2.45746 4.33558 2.42675 4.02438 2.48641 3.72413C2.54608 3.42388 2.69344 3.14807 2.90985 2.93157C3.12626 2.71507 3.40201 2.56761 3.70223 2.50784C4.00245 2.44806 4.31364 2.47866 4.59647 2.59575C4.8793 2.71285 5.12105 2.91119 5.29116 3.16569C5.46128 3.42018 5.55211 3.71941 5.55216 4.02553C5.5522 4.22879 5.51219 4.43006 5.43445 4.61786C5.3567 4.80566 5.24274 4.9763 5.09905 5.12005C4.95535 5.2638 4.78474 5.37784 4.59698 5.45566C4.40922 5.53347 4.20797 5.57354 4.00472 5.57358ZM5.33824 15.3372H2.66842V6.74767H5.33824V15.3372ZM16.6665 0.00122637H1.32824C0.980108 -0.00270246 0.644638 0.131748 0.39558 0.375032C0.146522 0.618316 0.00424879 0.95053 0 1.29867V16.7011C0.00410338 17.0494 0.146293 17.3818 0.395343 17.6254C0.644393 17.8689 0.979935 18.0036 1.32824 17.9999H16.6665C17.0155 18.0043 17.352 17.8699 17.602 17.6264C17.852 17.3829 17.9952 17.0501 18 16.7011V1.29756C17.995 0.948728 17.8518 0.616136 17.6017 0.372858C17.3517 0.12958 17.0153 -0.00448607 16.6665 0.000114616"
                    fill="#3D3D3D"
                  />
                </svg>
              </div>
              {/* Instagram */}
              <div className="flex rounded-md">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_36_8)">
                    <path
                      d="M14.8661 4.19088C14.8661 3.59341 14.3819 3.11096 13.7866 3.11096C13.1913 3.11096 12.7067 3.59341 12.7067 4.19088C12.7067 4.78617 13.1913 5.26859 13.7866 5.26859C14.3819 5.26859 14.8661 4.78617 14.8661 4.19088Z"
                      fill="#3D3D3D"
                    />
                    <path
                      d="M16.3045 12.6204C16.2646 13.4969 16.118 13.9731 15.9963 14.2894C15.8328 14.7088 15.6378 15.0086 15.3215 15.3231C15.0087 15.6376 14.7089 15.8322 14.2895 15.9939C13.9732 16.1174 13.4952 16.2644 12.6188 16.3062C11.6712 16.348 11.3905 16.3569 8.98766 16.3569C6.58706 16.3569 6.30405 16.348 5.35652 16.3062C4.48008 16.2644 4.00429 16.1174 3.68798 15.9939C3.26642 15.8322 2.9688 15.6376 2.65428 15.3231C2.33754 15.0086 2.14253 14.7088 1.98127 14.2894C1.85953 13.9731 1.71074 13.4969 1.67296 12.6204C1.62678 11.6729 1.61832 11.3877 1.61832 8.98974C1.61832 6.58691 1.62678 6.30393 1.67296 5.35637C1.71074 4.47993 1.85953 4.00418 1.98127 3.6852C2.14253 3.2663 2.33754 2.96821 2.65428 2.65369C2.9688 2.33965 3.26642 2.14461 3.68798 1.98115C4.00429 1.85721 4.48008 1.71238 5.35652 1.67064C6.30405 1.62886 6.58706 1.61819 8.98766 1.61819C11.3905 1.61819 11.6712 1.62886 12.6188 1.67064C13.4952 1.71238 13.9732 1.85721 14.2895 1.98115C14.7089 2.14461 15.0087 2.33965 15.3215 2.65369C15.6378 2.96821 15.8328 3.2663 15.9963 3.6852C16.118 4.00418 16.2646 4.47993 16.3045 5.35637C16.3485 6.30393 16.3592 6.58691 16.3592 8.98974C16.3592 11.3877 16.3485 11.6729 16.3045 12.6204ZM17.9229 5.28265C17.8789 4.32488 17.7278 3.67054 17.5035 3.10061C17.2752 2.50933 16.9691 2.00824 16.468 1.50715C15.9692 1.00829 15.4681 0.702207 14.8768 0.471217C14.3046 0.249092 13.6525 0.0962649 12.6943 0.0545188C11.7361 0.00830768 11.43 -0.00012207 8.98766 -0.00012207C6.54748 -0.00012207 6.23923 0.00830768 5.28101 0.0545188C4.32502 0.0962649 3.67332 0.249092 3.0985 0.471217C2.50945 0.702207 2.00836 1.00829 1.5095 1.50715C1.00841 2.00824 0.702327 2.50933 0.471772 3.10061C0.249646 3.67054 0.0986188 4.32488 0.052408 5.28265C0.0106615 6.24087 0 6.54737 0 8.98974C0 11.4299 0.0106615 11.736 0.052408 12.6942C0.0986188 13.6502 0.249646 14.3041 0.471772 14.8767C0.702327 15.4657 1.00841 15.9691 1.5095 16.4679C2.00836 16.9668 2.50945 17.2751 3.0985 17.5056C3.67332 17.7277 4.32502 17.8788 5.28101 17.9228C6.23923 17.9668 6.54748 17.9774 8.98766 17.9774C11.43 17.9774 11.7361 17.9668 12.6943 17.9228C13.6525 17.8788 14.3046 17.7277 14.8768 17.5056C15.4681 17.2751 15.9692 16.9668 16.468 16.4679C16.9691 15.9691 17.2752 15.4657 17.5035 14.8767C17.7278 14.3041 17.8789 13.6502 17.9229 12.6942C17.9669 11.736 17.9775 11.4299 17.9775 8.98974C17.9775 6.54737 17.9669 6.24087 17.9229 5.28265Z"
                      fill="#3D3D3D"
                    />
                    <path
                      d="M8.98768 11.9835C7.3338 11.9835 5.99179 10.6437 5.99179 8.98983C5.99179 7.33329 7.3338 5.99176 8.98768 5.99176C10.642 5.99176 11.9858 7.33329 11.9858 8.98983C11.9858 10.6437 10.642 11.9835 8.98768 11.9835ZM8.98768 4.37122C6.43825 4.37122 4.37347 6.44041 4.37347 8.98983C4.37347 11.5371 6.43825 13.6041 8.98768 13.6041C11.5371 13.6041 13.6041 11.5371 13.6041 8.98983C13.6041 6.44041 11.5371 4.37122 8.98768 4.37122Z"
                      fill="#3D3D3D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_8">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {/* Facebook */}
              <div className="flex rounded-md">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 9.02256C18 4.04211 13.968 0 9 0C4.032 0 0 4.04211 0 9.02256C0 13.3895 3.096 17.0256 7.2 17.8647V11.7293H5.4V9.02256H7.2V6.76692C7.2 5.02556 8.613 3.60902 10.35 3.60902H12.6V6.31579H10.8C10.305 6.31579 9.9 6.7218 9.9 7.21804V9.02256H12.6V11.7293H9.9V18C14.445 17.5489 18 13.7053 18 9.02256Z"
                    fill="#3D3D3D"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>

        {/* Main nav row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-16 gap-8">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src={logo}
                  alt="Logo"
                  height={36}
                  className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 rounded-lg bg-brand2-400/0 group-hover:bg-brand2-400/10 transition-colors duration-300 blur-sm" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-4 flex-1">
              {NAV_ITEMS.map((item) =>
                item.label === "Technologies" ? (
                  // ← Categorized dropdown for Technologies
                  <TechMegaDropdown key={item.label} />
                ) : item.links && item.links.length > 0 ? (
                  // ← Generic mega dropdown for everything else with links
                  <MegaDropdown key={item.label} item={item} />
                ) : (
                  // ← Plain link (Home, About)
                  <Link
                    key={item.label}
                    href={item.ariaLabel ?? "/"}
                    className="relative px-1 py-1.5 text-sm font-medium text-slate-700
                      hover:text-brand2-600 transition-colors duration-150 group"
                  >
                    {item.label}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand2-600
                      group-hover:w-full transition-all duration-300 rounded-full"
                    />
                  </Link>
                ),
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  bg-brand2 text-white overflow-hidden hover:bg-brand2-700 active:scale-95
                  transition-all duration-200 group"
              >
                <span className="relative z-10">Get Started</span>
                <svg
                  className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700 bg-linear-to-r from-transparent via-white/20
                  to-transparent skew-x-12"
                />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden ml-auto p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={
                    mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="block h-0.5 w-full bg-slate-700 rounded-full origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  className="block h-0.5 w-full bg-slate-700 rounded-full"
                />
                <motion.span
                  animate={
                    mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="block h-0.5 w-full bg-slate-700 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              className="fixed top-16 left-0 right-0 z-30 lg:hidden bg-white border-b
                border-slate-200 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="p-4 space-y-1">
                {NAV_ITEMS.map((item) =>
                  item.label === "Technologies" ? (
                    <MobileTechNavItem
                      key={item.label}
                      onClose={() => setMobileOpen(false)}
                    />
                  ) : (
                    // ← Regular accordion for everything else
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      onClose={() => setMobileOpen(false)}
                    />
                  ),
                )}

                {/* Mobile CTA */}
                <div className="pt-4 pb-2 border-t border-slate-100 mt-4 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                      text-white text-sm font-semibold bg-brand2 hover:bg-brand2-700
                      transition-colors shadow-md shadow-brand2-500/20"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
