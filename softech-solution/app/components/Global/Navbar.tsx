"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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
  { label: "About", href: "/about" },
  {
    label: "More",
    dropdown: [
      { label: "Careers", href: "/careers" },
      { label: "Support", href: "/support" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const path = usePathname();

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  return (
    <div className="fixed top-0 left-0 z-100000  right-0 ynflex justify-center p-6 pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto
          flex items-center justify-center  transition-all duration-500 ease-in-out
          
        `}
      >
        <div
          className={`
          flex items-center gap-1 bg-white/95 backdrop-blur-md border border-neutral-200 px-6 py-2 rounded-full  transition-all duration-300
        `}
        >
          {/* Logo Moved Inside the Pill */}
          <Link href="/" className="pl-3 pr-2 shrink-0 group">
            <Image
              src={logo}
              alt="Logo"
              height={22}
              className={`transition-all duration-300 `}
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex  items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isOpen = openDropdown === item.label;
              const isActive = item.href === path;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href ?? "#"}
                    className={`
                      px-4 py-2 rounded-full text-[13px] font-medium transition-all flex items-center gap-1.5
                      ${isActive ? "bg-neutral-900/90 text-white" : "text-neutral-700 hover:bg-neutral-50 hover:text-black"}
                    `}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-3 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-100 p-1.5 overflow-hidden"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2.5 text-[13px] text-neutral-600 hover:bg-neutral-50 hover:text-black rounded-xl transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Mobile Toggle inside Pill */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-full transition-colors `}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white m-5 rounded-[2rem] shadow-2xl border border-neutral-100 p-6 overflow-hidden md:hidden pointer-events-auto"
            >
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter mb-2 px-2">
                      {item.label}
                    </p>
                    {item.dropdown ? (
                      <div className="grid grid-cols-2 gap-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="py-2 px-2 text-sm text-neutral-700 bg-neutral-50 rounded-lg"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href ?? "#"}
                        className="block py-2 px-2 text-sm text-neutral-800 font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
