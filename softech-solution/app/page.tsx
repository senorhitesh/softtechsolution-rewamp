import Navbar from "./components/Global/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-50 font-sans">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between">
        {/* <Navbar /> */}
        <HeroSection />
      </main>
    </div>
  );
}
