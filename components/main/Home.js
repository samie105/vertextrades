import React from "react";
import Slider from "./sliders/Sliders";
import TradingView from "./tradingView/tradingView";
import GettingStarted from "./gettingStarted/GettingStarted";
import WhatNRating from "./whatnrating/WhatNRating";
import Sponsors from "./sponsors/Sponsors";
import AboutUs from "./AboutUs/AboutUs";
import Wcy from "./whyUs/Wcy";
import Testimonials from "./Testimonials/Testimonials";
import FAQ from "./Faq/FAQ";
import Footer from "./footer/Footer";
import Commodities from "./commodities/Commodities";
import MT from "./MetaTrader/MT";
import CT from "./CopyTrading/CT";
import Stock from "./Stocks/Stocks";
import Navbar from "./navbars/Navbar";
import LoadingScreen from "./LoadingScreen";
import { ThemeProvider } from "../../contexts/themeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative">
        <div className="z-50 w-full">
          <LoadingScreen />
        </div>
        <div className="fixed top-0 left-0 w-full text-white z-30 ">
          <Navbar />
        </div>
        <main className=" w-full relative overflow-hidden">
          <div className="relative w-full  animate__animated animate__slideInUp">
            <Slider />
          </div>
          <div className="my-2">
            <TradingView />
          </div>

          <GettingStarted />
          <WhatNRating />
          <AboutUs />
          {/* <ImageUsing /> */}
          <MT />
          <Commodities />
          <Stock />
          <Wcy />
          <CT />
          <Sponsors />
          <Testimonials />
          <FAQ />
          <Footer />
        </main>
      </main>
    </ThemeProvider>
  );
}
