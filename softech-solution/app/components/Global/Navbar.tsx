"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logosts.png";
type NavItem = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },

  {
    label: "Services",
    dropdown: [
      { label: "Accounts", href: "/services/accounts" },
      { label: "Cards", href: "/services/cards" },
      { label: "Loans", href: "/services/loans" },
      { label: "Deposits", href: "/services/deposits" },
    ],
  },
  {
    label: "Products",
    dropdown: [
      { label: "Bank Holiday", href: "/bankholiday" },
      { label: "Interest Rate", href: "/interestrate" },
      { label: "Service Charges", href: "/servicecharges" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "More",
    dropdown: [
      { label: "Careers", href: "/careers" },
      { label: "Support", href: "/support" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export default function Navbar({ className = "" }: { className?: string }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const path = usePathname();

  const isNavItemActive = (item: NavItem): boolean => {
    if (item.href) {
      return path === item.href;
    }
    return item.dropdown?.some((sub) => path === sub.href) ?? false;
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0  right-0 z-50000 max-w-7xl mx-auto rounded-full mt-4 bg-white/95 backdrop-blur-md justify-between border-b border-[#e8dfc0] ${className}`}
      >
        <div className="mx-auto flex items-stretch h-18 max-w-350">
          {/* ── Logo block ──────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 pl-8 pr-6 group shrink-0"
          >
            <Image src={logo} alt="Logo" height={33} />
          </Link>

          {/* ── Desktop nav items ────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-0 flex-1 px-2">
            {NAV_ITEMS.map((item) => {
              const isOpen = openDropdown === item.label;
              const isActive = isNavItemActive(item);

              return (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13.5px] font-medium transition-all
                        ${
                          isActive
                            ? "bg-brand text-white"
                            : "text-[#3a2e1a] hover:bg-[#f5f0e4]"
                        }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors
                        ${
                          isActive
                            ? "bg-[#274573] text-white"
                            : "text-[#3a2e1a] hover:bg-[#f5f0e4]"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-[#e8dfc0] py-2 overflow-hidden"
                      >
                        {item.dropdown.map((sub, i) => (
                          <motion.div
                            key={sub.label}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <Link
                              href={sub.href}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#5a4a2a] hover:bg-[#fdf8ed] hover:text-[#1a1208] transition-colors"
                            >
                              <span
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{ background: "#ACE238" }}
                              />
                              {sub.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* ── Right: CTA ─────────────────────────── */}
          <div className="hidden lg:flex items-center shrink-0">
            <div className="flex items-center gap-3 pr-8">
              <Link
                href="/open-account"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white transition-all active:scale-95 hover:opacity-90"
                style={{ background: "#1a3a6b" }}
              >
                Contact Us <ArrowUpRight size={14} className=" arrow-up" />
              </Link>
            </div>
          </div>

          {/* ── Mobile menu toggle ───────────────────────────────── */}
          <div className="flex lg:hidden items-center ml-auto pr-6">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-full hover:bg-brand2 transition-colors"
            >
              {mobileOpen ? (
                <X size={22} color="#1a1208" />
              ) : (
                <Menu size={22} color="#1a1208" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ─────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-[#e8dfc0]"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <p className="px-3 py-2 text-[12px] uppercase tracking-widest text-[#8a7a5a] font-medium">
                          {item.label}
                        </p>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 px-5 py-2.5 text-[14px] text-[#3a2e1a] hover:bg-[#fdf8ed] rounded-xl transition-colors"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "#ACE238" }}
                            />
                            {sub.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href ?? "#"}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-[14px] font-medium text-[#1a1208] hover:bg-[#fdf8ed] rounded-xl transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-3 pt-3 w-fit border-t border-[#e8dfc0] flex flex-col gap-2">
                  <Link
                    href="/open-account"
                    onClick={() => setMobileOpen(false)}
                    className="text-center w-fit py-3 px-5 rounded-full text-[14px] font-semibold text-white"
                    style={{ background: "#1a3a6b" }}
                  >
                    Contact Us <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-18" />
    </>
  );
}
