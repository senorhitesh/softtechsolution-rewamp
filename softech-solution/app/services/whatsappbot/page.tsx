import Link from "next/link";
import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
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
  CheckCircle2,
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

const WhatsappPage = () => {
  const activeService = "Whatsapp Bot & Api";

  const benefits = [
    "Engage customers at scale with HTTPS-based Restful API.",
    "Support for multiple formats: Images, Videos, Audio, and VCards.",
    "Send automated updates and offers to DND numbers legally.",
    "Cross-platform availability with no plug-ins required.",
    "Dynamic bot configuration tailored to your business needs.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar />
      <Header title={"Whatsapp Bot & API"} />

      <main className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar: Quick Links */}
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
                            : "text-slate-400 group-hover:text-blue-500"
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

          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Scale Your Engagement with{" "}
                <span className="text-blue-600">WhatsApp Business API</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  The WhatsApp Business API was launched to help mid-to-large
                  sized businesses communicate with their leads and customers at
                  scale. It is the <strong>official</strong> way to grow your
                  user engagement and automate support.
                </p>
                <p>
                  <strong>SOFT-TECH Solutions</strong> provides a robust
                  platform for integrating WhatsApp bots through secure
                  HTTPS-based RESTful APIs. We offer dynamic configurations,
                  ensuring your bot reflects your brand's unique voice and
                  workflow.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose WhatsApp Bot?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start p-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <p className="text-slate-600 text-sm leading-snug">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>
                WhatsApp is an unparalleled promotional tool. With support for
                rich media like
                <strong> images, videos, and locations</strong>, your marketing
                messages become interactive experiences rather than static text.
                Because it is a cross-platform app, your business becomes
                accessible on almost any device globally, without requiring
                additional plugins from your users.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
