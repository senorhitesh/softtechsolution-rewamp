import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "Custom spam and inbound mail filtering tools, to complement powerful spam filters that automatically work with no up-front configuration.",
    "Custom outbound mail filtering tools to prevent sensitive information from being distributed.",
    "Custom password length requirements and visual strength indicators to help employees pick secure passwords.",
    "Enforced SSL connections with G Suite to ensure secure HTTPS access.",
    "Optional email archiving, having unlimited retention option.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar />
      <Header title={"Software Development"} />

      <main className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Improvised your{" "}
                <span className="text-brand2">G-Suite Service</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  SOFT-TECH Solutions provide G Suite email services. G Suite
                  Email chosen by millions of businesses, from small companies
                  to the Fortune. Millions of People Trust G Suite Email
                  Collaboration. G Suite is a suite of cloud computing,
                  productivity and collaboration tools, software and products
                  developed by Google Cloud. G Suite has the tools to boost your
                  productivity by my one of best mail service, collaborate on
                  files in real time, quickly find space on everybody's
                  calendar, and take meetings from anywhere. G-Suite Gmail keeps
                  you updated with real-time message notifications, and safely
                  stores your important emails and data. IT admins can centrally
                  manage accounts across your organization and devices.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose G-Suite ?
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
          <QuickLinkServices activepage="G Suite" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
