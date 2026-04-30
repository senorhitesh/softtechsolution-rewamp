import Navbar from "@/app/components/Global/Navbar";
import Footer from "@/app/components/Global/Footer";
import Header from "@/app/components/Services/WhatsappPage/header";
import QuickLinkServices from "@/app/components/Global/QuickLinkServices";
import TexhGrid from "@/app/components/Global/TechGrid";
import { CheckCircle2 } from "lucide-react";

const WhatsappPage = () => {
  const benefits = [
    "Easy to Navigate with effective UX design will ensure customers stay engaged.",
    "Fast Turn-around Time.",
    "Best mobile responsive and SEO friendly website which keep your bussiness in top search.",
    "Accessible on all leading browsers viz., google chrome, mozilla firefox, internet explorer / edge, apple safari, etc. (browser independent ).",
    "Accessible on different devices such as tablets, desktops and laptops with responsive UI.",
    "Website is designed to meet the security requirements of OWASP application security verification standard.",
    "Support HTTPS communications protocol for secure transmission over the internet. SSL/TLS 1.5 encryption of customer data over all online activity.",
    "As per GOVT guidelines other security aspects like disabling FTP, disabling telnet, using proxy server firewall, etc are present on hosting server.",
    "Offer Affordable Price of development and Hosting.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden w-full">
      <Navbar />
      <Header title={"Website Development"} />

      <main className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Grow your online presence with{" "}
                <span className="text-blue-600">Website Development</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  A well-designed website helps your business connect with
                  customers, showcase your services, and{" "}
                  <strong>grow your presence online </strong>. It’s a powerful
                  way to engage users and create meaningful interactions at
                  scale.
                </p>
                <p>
                  <strong>SOFT-TECH Solutions</strong> We specialize in banking
                  application development, but we also place a lot of focus on
                  banking web sites development. We offer comprehensive web
                  design and development services that are tailored to meet the
                  unique needs of your business. Our team of experienced
                  designers and developers work closely with you to create a
                  website that not only looks great but also functions
                  seamlessly. We provides web development for banking,
                  e-commerce, and transform your Ideas into a captivating
                  digital experience with our expert website development team.
                  Web development is the coding or programming that enables
                  website functionality as per the owner's requirements. It
                  mainly deals with the non-design aspect of building websites,
                  which includes coding and writing markup. Web development
                  ranges from creating plain text pages to complex web-based
                  applications includes web design and web content development,
                  network security configuration, e-commerce development, social
                  network applications and electronic business applications.
                </p>
              </div>
            </section>

            <section>
              <TexhGrid />
            </section>
            <section className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Web Development?
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
          {/* Sidebar: Quick Links */}
          <QuickLinkServices />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsappPage;
