import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "Custom software development helps to optimize your business processes.",
    "You have the option to decide what kind of software development technology to use to design your own app.",
    "Proper testing of your custom software ensures you have a reliable IT tool that can grow your business.",
    "Customized software can be easily changed – New processes and technologies can be integrated into your existing software as and when marketing trends change.",
    "Customized software development, you have the power to decide which data-security technology or protocol is ideally suited for your business software.",
    "Highly developed infrastructure and favorable business environment",
    "Our company is always aware of updates in Custom software development and the latest trends to develop robust software applications",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar />
      <Header title={"Software Development"} />

      <main className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar: Quick Links */}

          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Take your development to the next level{" "}
                <span className="text-brand2">Software Development</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  SOFT-TECH Solutions provide customize software development
                  services for your business. We have full stack developer team
                  to provide software development services on various
                  development platform.
                </p>
                <p>
                  <strong>SOFT-TECH Solutions</strong> provides customized
                  software development services tailored to your business needs.
                  Our full-stack development team delivers reliable solutions
                  across a wide range of platforms.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Software Development ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start p-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <p className="text-slate-600 hover:text-neutral-900 hover:font-medium transition duration-100 text-sm leading-snug">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <QuickLinkServices />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
