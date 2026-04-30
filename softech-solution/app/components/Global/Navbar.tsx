"use client";

import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
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
import {
  MessageCircle,
  MessageSquare,
  PhoneCall,
  Phone,
  MessagesSquare,
  ShieldCheck,
  Server,
  Globe,
  Code,
  Mail,
  Send,
  FileSignature,
  Cpu,
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
  Briefcase,
  LifeBuoy,
  Newspaper,
  HandHelping,
} from "lucide-react";
// ─── Types ────────────────────────────────────────────────────────────────────
type NavLink = {
  label: string;
  ariaLabel: string;
  icon?: any;
  className?: string;
};
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
import {
  SiPython,
  SiPhp,
  SiSharp,
  SiSpring,
  SiReact,
  SiAngular,
  SiLaravel,
  SiFlutter,
  SiDotnet,
  SiNodedotjs,
  SiFirebase,
  SiAndroid,
  SiIos,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiWordpress,
  SiHtml5,
} from "react-icons/si";

import { FaJava, FaCss3 } from "react-icons/fa";
import { TbBrandXamarin } from "react-icons/tb";
// ─── Tech Categories Data ─────────────────────────────────────────────────────
const TECH_CATEGORIES = [
  {
    id: "lang",
    icon: "⌨️",
    label: "Programming Languages",
    items: [
      {
        label: "Java",
        ariaLabel: "technologies/java",
        icon: (
          <FaJava className="w-4 h-4 text-gray-500 group-hover:text-[#f89820] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "Python",
        ariaLabel: "technologies/python",
        icon: (
          <SiPython className="w-4 h-4 text-gray-500 group-hover:text-[#3776AB] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "PHP",
        ariaLabel: "technologies/php",
        icon: (
          <SiPhp className="w-4 h-4 text-gray-500 group-hover:text-[#777BB4] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "C#",
        ariaLabel: "technologies/csharp",
        icon: (
          <SiSharp className="w-4 h-4 text-gray-500 group-hover:text-[#68217A] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
    ],
  },
  {
    id: "fw",
    icon: "🧩",
    label: "Frameworks & Libraries",
    items: [
      {
        label: "React",
        ariaLabel: "technologies/react",
        icon: (
          <SiReact className="w-4 h-4 text-gray-500 group-hover:text-[#61DAFB] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "Angular",
        ariaLabel: "technologies/angular",
        icon: (
          <SiAngular className="w-4 h-4 text-gray-500 group-hover:text-[#DD0031] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "Laravel",
        ariaLabel: "technologies/laravel",
        icon: (
          <SiLaravel className="w-4 h-4 text-gray-500 group-hover:text-[#FF2D20] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "Flutter",
        ariaLabel: "technologies/flutter",
        icon: (
          <SiFlutter className="w-4 h-4 text-gray-500 group-hover:text-[#02569B] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "Spring",
        ariaLabel: "technologies/spring",
        icon: (
          <SiSpring className="w-4 h-4 text-gray-500 group-hover:text-[#6DB33F] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "Xamarin",
        ariaLabel: "technologies/xamarin",
        icon: (
          <TbBrandXamarin className="w-4 h-4 text-gray-500 group-hover:text-[#3498DB] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: ".NET",
        ariaLabel: "technologies/dotnet",
        icon: (
          <SiDotnet className="w-4 h-4 text-gray-500 group-hover:text-[#512BD4] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
    ],
  },
  {
    id: "backend",
    icon: "⚙️",
    label: "Runtime & Backend",
    items: [
      {
        label: "Node.js",
        ariaLabel: "technologies/nodejs",
        icon: (
          <SiNodedotjs className="w-4 h-4 text-gray-500 group-hover:text-[#339933] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "Firebase",
        ariaLabel: "technologies/firebase",
        icon: (
          <SiFirebase className="w-4 h-4 text-gray-500 group-hover:text-[#FFCA28] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    label: "Mobile & Platforms",
    items: [
      {
        label: "Android",
        ariaLabel: "technologies/android",
        icon: (
          <SiAndroid className="w-4 h-4 text-gray-500 group-hover:text-[#3DDC84] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "iOS / Apple",
        ariaLabel: "technologies/apple",
        icon: (
          <SiIos className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
    ],
  },
  {
    id: "db",
    icon: "🗄️",
    label: "Databases",
    items: [
      {
        label: "MySQL",
        ariaLabel: "technologies/mysql",
        icon: (
          <SiMysql className="w-4 h-4 text-gray-500 group-hover:text-[#4479A1] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "PostgreSQL",
        ariaLabel: "technologies/postgresql",
        icon: (
          <SiPostgresql className="w-4 h-4 text-gray-500 group-hover:text-[#336791] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "MongoDB",
        ariaLabel: "technologies/mongodb",
        icon: (
          <SiMongodb className="w-4 h-4 text-gray-500 group-hover:text-[#47A248] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
    ],
  },
  {
    id: "cms",
    icon: "🛒",
    label: "CMS & E-commerce",
    items: [
      {
        label: "WordPress",
        ariaLabel: "technologies/wordpress",
        icon: (
          <SiWordpress className="w-4 h-4 text-gray-500 group-hover:text-[#21759B] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
    ],
  },
  {
    id: "fe",
    icon: "🎨",
    label: "Frontend",
    items: [
      {
        label: "HTML5",
        ariaLabel: "technologies/html5",
        icon: (
          <SiHtml5 className="w-4 h-4 text-gray-500 group-hover:text-[#E34F26] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
      {
        label: "CSS3",
        ariaLabel: "technologies/css3",
        icon: (
          <FaCss3 className="w-4 h-4 text-gray-500 group-hover:text-[#1572B6] transition-colors" />
        ),
        className: " hover:bg-[#61DAFB]/20 text-[#61DAFB]",
      },
    ],
  },
];

// ─── Nav Items Data ───────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "Home", ariaLabel: "/" },
  { label: "Company", ariaLabel: "/company" },
  {
    label: "Services",
    links: [
      {
        label: "Whatsapp Bot & Api",
        ariaLabel: "/services/whatsappbot",
        icon: <MessageCircle className="w-4 h-4" />,
      },
      {
        label: "SMS Solution",
        ariaLabel: "/services/sms",
        icon: <MessageSquare className="w-4 h-4" />,
      },
      {
        label: "Miscall Solution",
        ariaLabel: "/services/miscall",
        icon: <PhoneCall className="w-4 h-4" />,
      },
      {
        label: "IVR Solution",
        ariaLabel: "/services/ivrsolution",
        icon: <Phone className="w-4 h-4" />,
      },
      {
        label: "Rich Communication Services",
        ariaLabel: "/services/rcs",
        icon: <MessagesSquare className="w-4 h-4" />,
      },
      {
        label: "SSL Certificate",
        ariaLabel: "/services/ssl",
        icon: <ShieldCheck className="w-4 h-4" />,
      },
      {
        label: "Web Hosting",
        ariaLabel: "/services/hosting",
        icon: <Server className="w-4 h-4" />,
      },
      {
        label: "Domain",
        ariaLabel: "/services/domain",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        label: "Web Development",
        ariaLabel: "/services/web-development",
        icon: <Code className="w-4 h-4" />,
      },
      {
        label: "G Suite",
        ariaLabel: "/services/gsuite",
        icon: <Mail className="w-4 h-4" />,
      },
      {
        label: "Bulk Email",
        ariaLabel: "/services/bullkmail",
        icon: <Send className="w-4 h-4" />,
      },
      {
        label: "DSC Certificate",
        ariaLabel: "/services/dsc-certificate",
        icon: <FileSignature className="w-4 h-4" />,
      },
      {
        label: "Software Development",
        ariaLabel: "/services/software-development",
        icon: <Cpu className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Products",
    links: [
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
    ],
  },
  { label: "Technologies", links: [] },
  {
    label: "More",
    links: [
      {
        label: "Careers",
        ariaLabel: "/careers",
        icon: <Briefcase className="w-4 h-4" />,
      },
      {
        label: "ReSeller",
        ariaLabel: "/ReSeller",
        icon: <LifeBuoy className="w-4 h-4" />,
      },
      {
        label: "Blog",
        ariaLabel: "/blog",
        icon: <Newspaper className="w-4 h-4" />,
      },
    ],
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor">
        <path d="M15.3369 15.3372H12.6698V11.1604C12.6698 10.1644 12.652 8.88221 11.2827 8.88221C9.8936 8.88221 9.68107 9.9674 9.68107 11.0879V15.3369H7.01402V6.74767H9.57438V7.92148H9.61023C9.86646 7.48336 10.2367 7.12295 10.6816 6.87862C11.1264 6.63429 11.6292 6.5152 12.1364 6.53402C14.8396 6.53402 15.338 8.31211 15.338 10.6253L15.3369 15.3372ZM4.00472 5.57358C3.69861 5.57363 3.39935 5.48291 3.1448 5.31289C2.89025 5.14286 2.69185 4.90117 2.57465 4.61837C2.45746 4.33558 2.42675 4.02438 2.48641 3.72413C2.54608 3.42388 2.69344 3.14807 2.90985 2.93157C3.12626 2.71507 3.40201 2.56761 3.70223 2.50784C4.00245 2.44806 4.31364 2.47866 4.59647 2.59575C4.8793 2.71285 5.12105 2.91119 5.29116 3.16569C5.46128 3.42018 5.55211 3.71941 5.55216 4.02553C5.5522 4.22879 5.51219 4.43006 5.43445 4.61786C5.3567 4.80566 5.24274 4.9763 5.09905 5.12005C4.95535 5.2638 4.78474 5.37784 4.59698 5.45566C4.40922 5.53347 4.20797 5.57354 4.00472 5.57358ZM5.33824 15.3372H2.66842V6.74767H5.33824V15.3372ZM16.6665 0.00122637H1.32824C0.980108-.00270246.644638.131748.39558.375032.146522.618316.00424879.95053 0 1.29867V16.7011C.00410338 17.0494.146293 17.3818.395343 17.6254.644393 17.8689.979935 18.0036 1.32824 17.9999H16.6665C17.0155 18.0043 17.352 17.8699 17.602 17.6264 17.852 17.3829 17.9952 17.0501 18 16.7011V1.29756C17.995.948728 17.8518.616136 17.6017.372858 17.3517.12958 17.0153-.00448607 16.6665.000114616" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.75-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor">
        <path d="M18 9.02256C18 4.04211 13.968 0 9 0 4.032 0 0 4.04211 0 9.02256c0 4.3669 3.096 8.003 7.2 8.8421V11.7293H5.4V9.02256H7.2V6.76692C7.2 5.02556 8.613 3.60902 10.35 3.60902H12.6v2.70677H10.8c-.495 0-.9.40601-.9.90225V9.02256H12.6v2.70674H9.9V18c4.545-.451 8.1-4.2946 8.1-8.97744Z" />
      </svg>
    ),
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const staggerList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.04 } },
};

// ─── Chevron ──────────────────────────────────────────────────────────────────
const Chevron = memo(function Chevron({
  open,
  size = "sm",
}: {
  open: boolean;
  size?: "sm" | "md";
}) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
});

// ─── Dropdown Arrow ───────────────────────────────────────────────────────────
function DropdownArrow() {
  return (
    <div className="absolute -top-2.25 left-1/2 -translate-x-1/2 w-5 h-2.5 overflow-hidden pointer-events-none">
      <div className="w-3 h-3 bg-white border-l border-t border-slate-200/80 rotate-45 translate-y-1.25 mx-auto shadow-sm" />
    </div>
  );
}

// ─── Desktop Nav Link Item ────────────────────────────────────────────────────
function DropdownLinkItem({ link }: { link: NavLink }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -5 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
    >
      <Link
        href={link.ariaLabel}
        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-slate-600
          font-medium transition-all group duration-150 group/link ${link.className ? link.className : "hover:bg-blue-50 hover:text-brand2 hover:font-semibold transition"}`}
      >
        {link.icon}
        {link.label}
      </Link>
    </motion.li>
  );
}

// ─── Desktop: Generic Mega Dropdown ──────────────────────────────────────────
function MegaDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const enter = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }, []);

  const leave = useCallback(() => {
    timerRef.current = setTimeout(() => setOpen(false), 130);
  }, []);

  const cols = useMemo(() => {
    if (!item.links) return 1;
    if (item.links.length > 10) return 3;
    if (item.links.length > 5) return 2;
    return 1;
  }, [item.links]);

  const minWidth = cols === 3 ? 620 : cols === 2 ? 400 : 230;

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        ref={buttonRef}
        className={`relative flex items-center gap-1 px-1 py-1.5 text-sm font-medium
          tracking-[-0.01em] transition-colors duration-150 outline-none
          ${open ? "text-brand2" : "text-slate-600 hover:text-slate-900"}`}
      >
        {item.label}
        <span
          className={`transition-colors duration-150 ${open ? "text-brand2" : "text-slate-400"}`}
        >
          <Chevron open={open} />
        </span>
        {/* Active indicator */}
        <motion.span
          animate={{ scaleX: open ? 1 : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand2 rounded-full origin-left"
        />
      </button>

      <AnimatePresence>
        {open && item.links && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              y: -6,
              scale: 0.97,
              transition: { duration: 0.14, ease: "easeIn" },
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-1"
            style={{ minWidth }}
          >
            <DropdownArrow />
            <div className="rounded-2xl border bg-white/99 backdrop-blur-2xl border-slate-200/80  shadow-xl shadow-slate-900/8 overflow-hidden ring-1 ring-black/3">
              {/* Header strip */}
              <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-400">
                  {item.links.length} options
                </span>
              </div>
              <motion.ul
                variants={staggerList}
                initial="hidden"
                animate="visible"
                className="p-3 grid gap-x-2 gap-y-0"
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
              >
                {item.links.map((link) => (
                  <DropdownLinkItem key={link.ariaLabel} link={link} />
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Desktop: Technologies Mega Dropdown ─────────────────────────────────────
function TechMegaDropdown() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  }, []);

  const leave = useCallback(() => {
    timerRef.current = setTimeout(() => setOpen(false), 130);
  }, []);

  const activeItems = TECH_CATEGORIES[activeCategory].items;
  const activeCat = TECH_CATEGORIES[activeCategory];

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={`relative flex items-center gap-1 px-1 py-1.5 text-sm font-medium
          tracking-[-0.01em] transition-colors duration-150 outline-none
          ${open ? "text-brand2" : "text-slate-600 hover:text-slate-900"}`}
      >
        Technologies
        <span
          className={`transition-colors duration-150 ${open ? "text-brand2" : "text-slate-400"}`}
        >
          <Chevron open={open} />
        </span>
        <motion.span
          animate={{ scaleX: open ? 1 : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand2 rounded-full origin-left"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              opacity: 0,
              y: -6,
              scale: 0.97,
              transition: { duration: 0.14, ease: "easeIn" },
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-101"
            style={{ width: 580 }}
          >
            <DropdownArrow />
            <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/8 overflow-hidden ring-1 ring-black/3 flex">
              {/* Sidebar */}
              <div className="w-56 bg-slate-50/70 border-r border-slate-100 p-2 shrink-0">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 px-3 py-1.5">
                  Categories
                </p>
                {TECH_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(i)}
                    onClick={() => setActiveCategory(i)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl mb-0.5
                      text-[13px] font-medium transition-all duration-150 text-left group
                      ${
                        activeCategory === i
                          ? "bg-white text-brand2 shadow-sm shadow-slate-200"
                          : "text-slate-600 hover:bg-white/70 hover:text-slate-800"
                      }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 transition-colors
                          ${activeCategory === i ? "bg-indigo-100" : "bg-slate-100 group-hover:bg-slate-200"}`}
                      >
                        {cat.icon}
                      </span>
                      <span className="leading-tight">{cat.label}</span>
                    </span>
                    <svg
                      className={`w-3 h-3 shrink-0 transition-all duration-150
                        ${activeCategory === i ? "opacity-100 text-indigo-500 translate-x-0.5" : "opacity-0"}`}
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

              {/* Items Panel */}
              <div className="flex-1 p-5 min-h-75">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center text-base">
                    {activeCat.icon}
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      {activeCat.label}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {activeItems.length} technologies
                    </p>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeCategory}
                    variants={staggerList}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.08 } }}
                    className="grid gap-0.5"
                    style={{
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(140px, 1fr))",
                    }}
                  >
                    {activeItems.map((techItem) => (
                      <DropdownLinkItem
                        key={techItem.ariaLabel}
                        link={techItem}
                      />
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────
const MobileNavItem = memo(function MobileNavItem({
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
        className="flex items-center px-4 py-3 text-[15px] font-semibold text-slate-700
          hover:bg-slate-50 rounded-xl transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="z-101">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold
          transition-colors rounded-xl
          ${open ? "text-brand2 bg-brand2/5" : "text-slate-700 hover:bg-slate-50"}`}
      >
        {item.label}
        <span
          className={`transition-colors ${open ? "text-brand2" : "text-slate-400"}`}
        >
          <Chevron open={open} size="md" />
        </span>
      </button>

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
            className="overflow-hidden"
          >
            {/* Count badge */}
            <div className="flex items-center gap-2 px-4 pt-2 pb-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {item.links.length} options
              </span>
            </div>
            <ul className="px-2 pb-2">
              {item.links.map((link) => (
                <li key={link.ariaLabel}>
                  <Link
                    href={link.ariaLabel}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-slate-600
                      font-medium hover:bg-brand2/8 hover:text-brand2 rounded-lg transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// ─── Mobile Technologies Item ─────────────────────────────────────────────────
function MobileTechNavItem({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState<string | null>(null);

  const toggleCat = useCallback(
    (id: string) => setOpenCat((prev) => (prev === id ? null : id)),
    [],
  );

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
          setOpenCat(null);
        }}
        className={`w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold
          transition-colors rounded-xl
          ${open ? "text-brand2 bg-brand2/5" : "text-slate-700 hover:bg-slate-50"}`}
      >
        Technologies
        <span
          className={`transition-colors ${open ? "text-brand2" : "text-slate-400"}`}
        >
          <Chevron open={open} size="md" />
        </span>
      </button>

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
            className="overflow-hidden"
          >
            <div className="px-2 pb-2 pt-1 space-y-0.5">
              {TECH_CATEGORIES.map((cat) => (
                <div key={cat.id} className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleCat(cat.id)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] font-medium
                      transition-colors rounded-xl
                      ${
                        openCat === cat.id
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0
                          ${openCat === cat.id ? "bg-indigo-100" : "bg-slate-100"}`}
                      >
                        {cat.icon}
                      </span>
                      {cat.label}
                    </span>
                    <span
                      className={
                        openCat === cat.id
                          ? "text-indigo-500"
                          : "text-slate-400"
                      }
                    >
                      <Chevron open={openCat === cat.id} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {openCat === cat.id && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            duration: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.15 },
                        }}
                        className="overflow-hidden pl-4"
                      >
                        {cat.items.map((techItem) => (
                          <li key={techItem.ariaLabel} className="list-none">
                            <Link
                              href={techItem.ariaLabel}
                              onClick={onClose}
                              className="flex items-center gap-3 pl-8 pr-4 py-2.5 text-[13px]
                                text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-indigo-300 shrink-0" />
                              {techItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
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

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0  left-0 right-0 z-101 "
      >
        {/* ── Top Strip ── */}
        <div
          className={`border-b z-101 transition-all duration-300
            ${
              scrolled
                ? "bg-slate-50/95 border-slate-200/60"
                : "bg-slate-50/80 border-slate-200/40"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between">
            {/* GST + Social */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-slate-500 font-medium hidden sm:block">
                GST-IN:{" "}
                <span className="text-slate-700 font-semibold">
                  24ACUFS8893B1ZH
                </span>
              </span>
              <div className="hidden sm:block w-px h-3.5 bg-slate-300" />
              <div className="flex items-center gap-1.5">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-6 h-6 flex items-center justify-center rounded-md text-slate-500
                      hover:text-slate-800 hover:bg-slate-200/60 transition-all duration-150"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: quick links + toggle */}
            <div className="flex z-101 items-center gap-3">
              <ModeToggle />
            </div>
          </div>
        </div>

        {/* ── Main Nav Row ── */}
        <div
          className={`transition-all duration-300
            ${
              scrolled
                ? "bg-white/97 backdrop-blur-lg shadow-lg shadow-slate-900/6 border-b border-slate-200/70"
                : "bg-white/90 backdrop-blur-md border-b border-slate-100/80"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center h-15 gap-6">
              {/* Logo */}
              <Link href="/" className="shrink-0 group">
                <div className="relative">
                  <Image
                    src={logo}
                    alt="Logo"
                    height={34}
                    className="h-8.5 w-auto transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-90"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1 flex-1">
                {NAV_ITEMS.map((item) =>
                  item.label === "Technologies" ? (
                    <TechMegaDropdown key="Technologies" />
                  ) : item.links && item.links.length > 0 ? (
                    <MegaDropdown key={item.label} item={item} />
                  ) : (
                    <Link
                      key={item.label}
                      href={item.ariaLabel ?? "/"}
                      className="relative px-1 py-1.5 text-sm font-medium text-slate-600
                        hover:text-slate-900 transition-colors duration-150 group"
                    >
                      {item.label}
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand2 rounded-full
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                      />
                    </Link>
                  ),
                )}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-2 ml-auto">
                <Link
                  href="/support"
                  className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl
                    text-[13px] font-semibold text-slate-700 border border-slate-200
                    hover:bg-slate-50 transition-all duration-150"
                >
                  Support <HandHelping />
                </Link>
                <Link
                  href="/get-started"
                  className="relative inline-flex items-center gap-2 px-5 py-2 rounded-xl text-[13px]
                    font-semibold bg-brand2 text-white overflow-hidden group
                    hover:bg-brand2/90 active:scale-[0.98] transition-all duration-150 shadow-md shadow-brand2/20"
                >
                  <span className="relative">Get Started</span>
                  <svg
                    className="w-3.5 h-3.5 relative  transition-transform duration-200 group-hover:translate-x-0.5"
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
                  {/* Shine sweep */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                    transition-transform duration-600 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                  />
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden ml-auto w-9 h-9 flex flex-col items-center justify-center gap-1.25
                  rounded-xl hover:bg-slate-100 active:bg-slate-200 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <motion.span
                  animate={
                    mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="block h-0.5 w-5 bg-slate-700 rounded-full origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0.3 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.18 }}
                  className="block h-0.5 w-5 bg-slate-700 rounded-full"
                />
                <motion.span
                  animate={
                    mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="block h-0.5 w-5 bg-slate-700 rounded-full origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              className="fixed inset-0 z-101 bg-slate-900/30 backdrop-blur-[2px] lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
              }}
              exit={{
                opacity: 0,
                y: -8,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              className="fixed top-24 left-3 z-101 right-3  lg:hidden bg-white rounded-2xl
                border border-slate-200/80 shadow-2xl shadow-slate-900/12
                max-h-[calc(100vh-112px)] overflow-hidden flex flex-col"
            >
              {/* Nav items */}
              <div className="overflow-y-auto flex-1 px-2 py-2 space-y-0.5">
                {NAV_ITEMS.map((item) =>
                  item.label === "Technologies" ? (
                    <MobileTechNavItem
                      key="Technologies"
                      onClose={closeMobile}
                    />
                  ) : (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      onClose={closeMobile}
                    />
                  ),
                )}
              </div>

              {/* Footer CTA */}
              <div className="px-3 py-3 border-t border-slate-100 flex gap-2">
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-xl
                    text-[14px] font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-started"
                  onClick={closeMobile}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                    text-[14px] font-semibold text-white bg-brand2 hover:bg-brand2/90
                    transition-colors shadow-md shadow-brand2/25"
                >
                  Get Started
                  <svg
                    className="w-3.5 h-3.5"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-24" />
    </>
  );
}
