import Slider from "../components/main/sliders/Sliders";
import TradingView from "../components/main/tradingView/tradingView";
import GettingStarted from "../components/main/gettingStarted/GettingStarted";
import WhatNRating from "../components/main/whatnrating/WhatNRating";
import Sponsors from "../components/main/sponsors/Sponsors";
import AboutUs from "../components/main/AboutUs/AboutUs";
import Wcy from "../components/main/whyUs/Wcy";
import Testimonials from "../components/main/Testimonials/Testimonials";
import FAQ from "../components/main/Faq/FAQ";
import Footer from "../components/main/footer/Footer";
import Navbar from "../components/main/navbars/Navbar";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full text-white z-30 ">
        <Navbar />
      </div>
      <main className=" w-full relative overflow-hidden">
        <div className="relative w-full  animate__animated animate__slideInUp">
          <Slider />
        </div>

        <TradingView />
        <GettingStarted />
        <WhatNRating />
        <Sponsors />
        <AboutUs />
        <Wcy />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
