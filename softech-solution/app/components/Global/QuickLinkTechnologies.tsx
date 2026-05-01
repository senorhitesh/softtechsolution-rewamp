"use client";
import { motion } from "framer-motion";

import Link from "next/link";
import bg from "@/public/contact-bg.png";
import {
  Code,
  Smartphone,
  Server,
  Globe,
  Database,
  ChevronRight,
} from "lucide-react";

const Links = [
  { label: "Android", href: "/technologies/android", icon: <Smartphone className="w-5 h-5" /> },
  { label: "Angular", href: "/technologies/angular", icon: <Globe className="w-5 h-5" /> },
  { label: "Apple (iOS)", href: "/technologies/apple", icon: <Smartphone className="w-5 h-5" /> },
  { label: "C#", href: "/technologies/csharp", icon: <Code className="w-5 h-5" /> },
  { label: "CSS3", href: "/technologies/css3", icon: <Code className="w-5 h-5" /> },
  { label: ".NET", href: "/technologies/dotnet", icon: <Code className="w-5 h-5" /> },
  { label: "Firebase", href: "/technologies/firebase", icon: <Server className="w-5 h-5" /> },
  { label: "Flutter", href: "/technologies/flutter", icon: <Smartphone className="w-5 h-5" /> },
  { label: "HTML5", href: "/technologies/html5", icon: <Globe className="w-5 h-5" /> },
  { label: "Java", href: "/technologies/java", icon: <Code className="w-5 h-5" /> },
  { label: "Laravel", href: "/technologies/laravel", icon: <Code className="w-5 h-5" /> },
  { label: "MongoDB", href: "/technologies/mongodb", icon: <Database className="w-5 h-5" /> },
  { label: "MySQL", href: "/technologies/mysql", icon: <Database className="w-5 h-5" /> },
  { label: "Node.js", href: "/technologies/nodejs", icon: <Server className="w-5 h-5" /> },
  { label: "PHP", href: "/technologies/php", icon: <Code className="w-5 h-5" /> },
  { label: "PostgreSQL", href: "/technologies/postgresql", icon: <Database className="w-5 h-5" /> },
  { label: "Python", href: "/technologies/python", icon: <Code className="w-5 h-5" /> },
  { label: "React", href: "/technologies/react", icon: <Code className="w-5 h-5" /> },
  { label: "Spring Boot", href: "/technologies/spring", icon: <Server className="w-5 h-5" /> },
  { label: "Xamarin", href: "/technologies/xamarin", icon: <Smartphone className="w-5 h-5" /> },
];

const QuickLinkTechnologies = ({ activepage }: { activepage: string }) => {
  const activeService = activepage;

  return (
    <aside className="lg:col-span-4 flex flex-col gap-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-brand2 p-4">
          <h3 className="text-white font-bold text-lg">Technologies</h3>
        </div>
        <nav className="flex flex-col max-h-[600px] overflow-y-auto">
          {Links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
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

export default QuickLinkTechnologies;
