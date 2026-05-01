import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "Easy-to-Remember Domain Names-A good domain name will be easy to remember, making your website easy to find.",
    "Improved Search Engine Rankings-Domain name that relates to your business or organization improves your ranking in search engines..",
    "Establish a Business Identity-Domain names should tell people a bit about your business. Create your business with a domain name helps establish your business' identity and industry.",
    "Customized software can be easily changed – New processes and technologies can be integrated into your existing software as and when marketing trends change.",
    "Establish a Type of Organization-You can really distinguish yourself from similar-sounding companies in different industries or your competitors.",
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
                Give your website a Domain with{" "}
                <span className="text-brand2">DOMAIN SERVICE</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  SOFT-TECH is domain services provider in india. Domain name is
                  the address where Internet users can access your
                  website.Domain names are used to identify one or more IP
                  addresses. For example, the domain name soft-techsolutions.com
                  represents about a dozen IP addresses. Domain names are used
                  in URLs to identify particular Web pages.
                </p>
                <p>
                  For example, in the URL
                  <span className="text-orange-500 font-medium">
                    https://soft-techsolutions.com/service/domain
                  </span>
                  , the domain name is soft-techsolutions.com There are only a
                  limited number of such domains. For example:
                </p>
                <p className="px-8">
                  <ul className="list-disc">
                    <li>.com - Commercial business</li>
                    <li>.gov - Government agencies</li>
                    <li>.org - Organizations (nonprofit)</li>
                    <li>.net - Network organizations</li>
                    <li>.in - India</li>
                  </ul>
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
          <QuickLinkServices activepage="Domain" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
