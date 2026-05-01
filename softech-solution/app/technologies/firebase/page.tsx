import React from 'react';
import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkTechnologies from "@/app/components/Global/QuickLinkTechnologies";
import { CheckCircle2 } from "lucide-react";

const Page = () => {
  const benefits = [
    "Synchronize data across all clients in real-time for highly interactive apps.",
    "Focus on frontend code while Firebase handles the backend infrastructure.",
    "Deep integration with Google Analytics to understand user behavior.",
    "Production-grade web content hosting backed by a global CDN.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar />
      <Header title={"Firebase Services"} />

      <main className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Firebase Services
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Leverage Google's powerful Firebase platform to accelerate your app development with real-time databases and robust backend services.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Firebase?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <div className="absolute top-6 left-0 w-1.5 h-8 bg-green-500 rounded-r-md group-hover:h-12 group-hover:top-4 transition-all duration-300" />
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow group-hover:text-slate-800 transition-colors">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <QuickLinkTechnologies activepage="Firebase" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
