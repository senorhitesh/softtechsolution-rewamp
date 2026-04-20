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

// ─── Types ───────────────────────────────────────────────────────────────────
type NavItem = {
  label: string;
  ariaLabel?: string;
  links?: { label: string; ariaLabel: string }[];
};

// ─── Data ────────────────────────────────────────────────────────────────────
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
    label: "More",
    links: [
      { label: "Careers", ariaLabel: "/careers" },
      { label: "Support", ariaLabel: "/support" },
      { label: "Blog", ariaLabel: "/blog" },
    ],
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

// ─── Mega Dropdown ─────────────────────────────────────────────────────────────
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
        className={`
          flex items-center gap-1.5 px-1 py-1.5 text-sm font-medium tracking-wide
          transition-colors duration-150 outline-none group
          ${open ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}
        `}
      >
        {item.label}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-3.5 h-3.5 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
        {/* animated underline */}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
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
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
              <div className="w-3 h-3 bg-white border border-slate-200 rotate-45 translate-y-1 mx-auto shadow-sm" />
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/80 overflow-hidden">
              {/* Header stripe */}
              <div className="h-1 w-full bg-linear-to-r from-blue-500 via-indigo-500 to-blue-400" />

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className={`p-4 grid gap-x-6 gap-y-0.5`}
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
                      className="
                        flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-slate-600
                        hover:bg-blue-50 hover:text-blue-700 transition-all duration-150 group/link
                        font-medium
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover/link:bg-blue-500 transition-colors duration-150 shrink-0" />
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

// ─── Mobile Accordion Item ────────────────────────────────────────────────────
function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.links) {
    return (
      <Link
        href={item.ariaLabel ?? "/"}
        onClick={onClose}
        className="flex items-center px-4 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-xl"
      >
        {item.label}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
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
                  className="flex items-center gap-2.5 px-5 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  // Lock body scroll when mobile menu open
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
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/8 border-b border-slate-200/80"
              : "bg-white/80 backdrop-blur-sm border-b border-transparent"
          }
        `}
      >
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
                {/* subtle glow on hover */}
                <div className="absolute inset-0 rounded-lg bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors duration-300 blur-sm" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-4 flex-1">
              {NAV_ITEMS.map((item) =>
                item.links ? (
                  <MegaDropdown key={item.label} item={item} />
                ) : (
                  <Link
                    key={item.label}
                    href={item.ariaLabel ?? "/"}
                    className="relative px-1 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-150 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                ),
              )}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <Link
                href="/contact"
                className="
                  relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  bg-blue-600 text-white overflow-hidden
                  hover:bg-blue-700 active:scale-95
                  transition-all duration-200 shadow-md shadow-blue-500/25
                  group
                "
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
                {/* shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
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
              className="fixed top-16 left-0 right-0 z-30 lg:hidden bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="p-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 pb-2 border-t border-slate-100 mt-4 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
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
