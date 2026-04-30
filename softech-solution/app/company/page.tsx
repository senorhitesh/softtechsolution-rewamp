import Navbar from "@/app/components/Global/Navbar";
import Header from "@/app/components/About Page/Header";
import STInfoBlock from "../components/About Page/STInfoBlock";
import AboutSection from "../components/About Page/AboutSection";
import Footer from "../components/Global/Footer";
import GlobalReach from "../components/About Page/GlobalCard";
import BrandJourney from "../components/Journey/Journey";
import Stats from "@/app/components/About Page/Stats";
import ImagesSection from "../components/About Page/ImagesSection";
const Page = () => {
  return (
    <div className="flex flex-col bg-olive-50 overflow-x-hidden w-full ">
      <Navbar />
      <Header />
      <AboutSection />
      <Stats />
      <STInfoBlock />
      <ImagesSection />s
      <BrandJourney />
      <GlobalReach />
      <Footer />
    </div>
  );
};

export default Page;
