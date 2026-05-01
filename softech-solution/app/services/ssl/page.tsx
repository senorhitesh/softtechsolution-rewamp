import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "The SSL protocol is used by millions of online business to protect their customers, ensuring their online transactions remain confidential.",
    "A web page should use encryption when it expects users to submit confidential data, including personal information, passwords, or credit card details.",
    "All web browsers have the ability to interact with secured sites so long as the site's certificate is issued by a trusted CA.",
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
                Take your Encription to the next level{" "}
                <span className="text-brand2">SSL CERTIFICATE</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  SOFT-TECH Solutions provide SSL certificates of various CA
                  (Certificate authority), SSL is a standard security protocol
                  for establishing encrypted links between a web server and a
                  browser in an online communication. The usage of SSL
                  technology ensures that all data transmitted between the web
                  server and browser remains encrypted.
                </p>
                <p>
                  An SSL certificate is necessary to create Secure HTTP
                  connection. You need to give all details about the identity of
                  your website and your company as and when you choose to
                  activate SSL on your web server. Following this, two
                  cryptographic keys are created - a Private Key and a Public
                  Key. Typically, SSL is used to secure credit card
                  transactions, data transfer and logins, and more recently is
                  becoming the norm when securing browsing of social media
                  sites.
                </p>
              </div>
            </section>
            <section className="flex gap-4 flex-col">
              <h2 className="text-xl font-semibold ">
                What is SSL Certificate?
              </h2>
              <p className="text-neutral-800">
                SSL Certificates are small data files that digitally bind a
                cryptographic key to an organization’s details. When installed
                on a web server, it activates the padlock and the https protocol
                and allows secure connections from a web server to a browser.
                Typically, SSL is used to secure credit card transactions, data
                transfer and logins, and more recently is becoming the norm when
                securing browsing of social media sites.
              </p>
              <p className="text-neutral-700">
                {" "}
                Example :{" "}
                <span className=" font-medium text-orange-700">https</span>
                ://soft-techsolutions.com
              </p>
            </section>
            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose SSL(Secure Sockets Layer) ?
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
          <QuickLinkServices activepage="SSL Certificate" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
