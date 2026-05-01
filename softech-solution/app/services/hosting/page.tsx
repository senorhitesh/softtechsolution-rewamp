import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";

import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "Reliability - Web hosting is a much better option for your business needs.",
    "Technical Support - You get round the clock technical support by the professionals who will resolve your issues quickly and make sure you get maximum uptime.",
    "Email and Domain - You can pick your email accounts to choose as well as domain.",
    "More Security - There are advanced tools and the availability of professional system engineers who are responsible for the security concerns.",
    "Data Recovery - Your data is properly backed up and can be retrieved whenever the need be.",
    "Save Your Money and Time-You have the opportunity to save time and money as you will get the services of experts who will be responsible for managing your servers. You can easily concentrate on your business growth.",
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
                Host your website with our{" "}
                <span className="text-brand2">Web Hosting</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  SOFT-TECH provide web hosting for your web business.Web
                  hosting provides space and access for your website on the
                  Internet. Before visitors can view your website, it must be
                  published on a webserver. This is done by uploading all the
                  files of your website. Webpages are made up of HTML and
                  JavaScript, and images and videos and fonts. All of these must
                  be uploaded to your web host so that they can be accessed by
                  your visitors. A web hosting service provides the space for
                  these files, and allows them to be accessed over the Internet.
                </p>
                <p>
                  Web hosting is a service that allows organizations and
                  individuals to post a website or web page onto the Internet. A
                  web host, or web hosting service provider, is a business that
                  provides the technologies and services needed for the website
                  or webpage to be viewed in the Internet. Websites are hosted,
                  or stored, on special computers called servers. When Internet
                  users want to view your website, all they need to do is type
                  your website address or domain into their browser. Their
                  computer will then connect to your server and your webpages
                  will be delivered to them through the browser.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Benifts of Hosting ?
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
          <QuickLinkServices activepage="Web Hosting" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
