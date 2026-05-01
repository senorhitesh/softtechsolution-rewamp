import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "Do not miss out any lead.",
    "Helps in surveys, voting and campaigning.",
    "Get your customers connected.",
    "Lower Service Costs.",
    "Our system will check your contact details whether, your services are active or not.",
    "Improve customer satisfaction.",
    "24 hrs. Service with Instant delivery of the messages.",
    "Send Messages with your Company's Name.",
    "Faster than SMS.",
    "Can be used by both Landline and Mobile.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar />
      <Header title={"Miscall Service"} />

      <main className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Automate your{" "}
                <span className="text-brand2">Miscall Service</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  SOFT-TECH Solutions provide Miscalls Platform that you can
                  integrate with your core system, for that you select your
                  choice a number on which caller will call and in return,
                  caller gets a SMS notification on his number. Callers do not
                  pay any calling charges. It will integrate with your core
                  system to send reply SMS accordingly.
                </p>
                <p>
                  Our Miscalls Service is a completely automated web-based
                  application enables you to get the realtime notifications of
                  all calls via<strong> API's call by integration</strong> with
                  your core system software. Our Miscalls service is a platform
                  that lets you create instant feedback, voting, business lead
                  generation, balance inquiry or other banking services. Start
                  customer engagement instantly with Miscalls Service Increase
                  your customer base with just one ring, and powerful Get lead
                  API. Miscalls service is an advanced feature used by
                  businesses for their customer to communication for various
                  services.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Miscall Service ?
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
          <QuickLinkServices activepage="Miscall Solution" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
