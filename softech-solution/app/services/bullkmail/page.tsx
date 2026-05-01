import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "When a user makes a transaction or purchase, they get a transactional email confirming that purchase.",
    "When a user abandons their shopping cart, they get an email reminding them to come back and complete the purchase.",
    "When a user signs up for any web application, they get a transactional email thanking them for joining.",
    "User get Monthly Bank A/c transaction Statement Emails.",
    "You might also hear transactional emails referred to as automatic, triggered, personalized and one-to-one email.",
    "SOFT-TECH Solutions provide transactional email services API for integration with your Core System.",
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
                Send high-volume emails quickly with{" "}
                <span className="text-brand2">Bulk Email Services</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  While every business needs an email service platform that can
                  send out transactional emails and marketing mails, not every
                  business needs the marketing functions that SmartEmail can
                  provide. For those businesses that are looking for API based
                  eMail solution, SOFT-TECH SmartEmail Service provide seamless
                  integration with your core software. Integrate SmartEmail in
                  just a few minutes and start scheduling, sending, and tracking
                  emails via SMTP relay or our Smart API Service. By using our
                  email analytics to retrieve your campaign’s statistics
                  including opens, clicks, bounces, and more.
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
                Why Bulk Mail ?
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
          <QuickLinkServices activepage="Bulk Email" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
