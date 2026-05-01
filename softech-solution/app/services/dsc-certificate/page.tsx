import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "Digital Certificate solutions.",
    "Digital Signing Solutions.",
    "Digital Certificate Authentication System.",
    "Trusted Time Stamping Services.",
    "offers variety of other services including Tax filing, MCA, e-tendering Services etc.",
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
                Certifiy your documnets with{" "}
                <span className="text-brand2">
                  {" "}
                  Digital Signature Certificate
                </span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  SOFT-TECH Solutions provide Digital Certificate Services from
                  Certifying Authority (CA) authorised by the Controller of
                  Certifying Authority (CCA) for issuance of Digital Signature
                  Certificates in India. We are provides Class 1, Class 2 and
                  Class 3 Digital Signature Certificates (DSC) along with
                  digital signatures & encrypiton for specific needs such as
                  NACH File Signing, PFMS, NSDL PAN Number Verification, Income
                  Tax filing, MCA, e-tendering, e-procurement and Foreign Trade
                  etc..
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Features of Digital Certificate
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
          <QuickLinkServices activepage="DSC Certificate" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
