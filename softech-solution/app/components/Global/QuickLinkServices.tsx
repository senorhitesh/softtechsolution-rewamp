import Link from "next/link";
import bg from "@/public/contact-bg.png";
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
  ChevronRight,
} from "lucide-react";

const Links = [
  {
    label: "Whatsapp Bot & Api",
    href: "/services/whatsappbot",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    label: "SMS Solution",
    href: "/services/sms",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    label: "Miscall Solution",
    href: "/services/miscall",
    icon: <PhoneCall className="w-5 h-5" />,
  },
  {
    label: "IVR Solution",
    href: "/services/ivrsolution",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    label: "Rich Communication Services",
    href: "/services/rcs",
    icon: <MessagesSquare className="w-5 h-5" />,
  },
  {
    label: "SSL Certificate",
    href: "/services/ssl",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    label: "Web Hosting",
    href: "/services/hosting",
    icon: <Server className="w-5 h-5" />,
  },
  {
    label: "Domain",
    href: "/services/domain",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    icon: <Code className="w-5 h-5" />,
  },
  {
    label: "G Suite",
    href: "/services/gsuite",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    label: "Bulk Email",
    href: "/services/bullkmail",
    icon: <Send className="w-5 h-5" />,
  },
  {
    label: "DSC Certificate",
    href: "/services/dsc-certificate",
    icon: <FileSignature className="w-5 h-5" />,
  },
  {
    label: "Software Development",
    href: "/services/software-development",
    icon: <Cpu className="w-5 h-5" />,
  },
];
const QuickLinkServices = () => {
  const activeService = "Web Development";

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
              href={link.href}
              className={`flex items-center justify-between p-4 transition-all duration-200 group hover:bg-blue-50 ${
                activeService === link.label
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-600"
              }`}
            >
              <div className="flex items-center gap-3">
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
              </div>
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
