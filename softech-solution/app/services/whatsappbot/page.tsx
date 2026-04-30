import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";
import { CheckCircle2 } from "lucide-react";

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
                    <p className="text-slate-600 hover:text-neutral-900 hover:font-medium transition duration-100 text-sm leading-snug">
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
          <QuickLinkServices />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
