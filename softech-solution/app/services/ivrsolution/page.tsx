import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";
import arrow from "@/public/arrow left.png";
import { CheckCircle2 } from "lucide-react";
import roadmap from "@/public/roadmap.png";
import Image from "next/image";
const WhatsappPage = () => {
  const benefits = [
    "Don’t make your customer confused. Have Superior voice quality to reduce disputes to a minimum.",
    "Get your customer data organized. Create better customer environment and increase productivity.",
    "Greet your customers with company anthem. Put Music on hold and improve brand image. With expanding business verticals, manage heavy call flow easily with scalable IVR.",
    "Record and monitor calls to analyze call quality, agent performance and more with few clicks.",
    "Keep your phone system going for 24 x 7. Even capture after hour calls and never miss a lead.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar />
      <Header title={"IVR Solution"} />

      <main className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Fasten your work with{" "}
                <span className="text-brand2">IVR Solutions.</span>
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
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">
                How IVR works?
              </h2>
              {/* steps */}
              <div className="flex flex-col gap-8 ">
                <Image
                  src={roadmap}
                  alt="jaishree"
                  className="pointer-events-none"
                />
                <p className="text-neutral-700">
                  The IVR system in the latter case eliminates the need for a
                  switchboard operator to answer incoming calls.This instance
                  often presents a caller with a menu of options and can attempt
                  to answer frequently asked questions.
                </p>
              </div>
            </section>
            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose IVR ?
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
          <QuickLinkServices activepage={"IVR Solution"} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
