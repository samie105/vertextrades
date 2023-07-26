import React from "react";
import { TechnicalAnalysis, Ticker } from "react-tradingview-embed";

export default function AssetWidgetTwo() {
  return (
    <>
      <div className="mb-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <div className="flex items-center pr-3">
          <Ticker
            widgetPropsAny={{
              symbols: [
                {
                  proName: "FX_IDC:EURUSD",
                  title: "EUR to USD",
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "Bitcoin",
                },
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "Ethereum",
                },
              ],
              colorTheme: "light",
              isTransparent: true,
              showSymbolLogo: true,
              locale: "en",
            }}
          />{" "}
          <div className="mx-1 flex items-center">
            <button className=" rounded-full bg-slate-800/5 p-3 mr-1 text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className=" rounded-full bg-slate-800/5 p-3 text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-3 md:hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <div className="flex items-center pr-3">
          <Ticker
            widgetPropsAny={{
              symbols: [
                {
                  proName: "FOREXCOM:SPXUSD",
                  title: "S&P 500",
                },
                {
                  proName: "FOREXCOM:NSXUSD",
                  title: "US 100",
                },
                {
                  proName: "FX_IDC:EURUSD",
                  title: "EUR to USD",
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "Bitcoin",
                },
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "Ethereum",
                },
              ],
              colorTheme: "light",
              isTransparent: true,
              showSymbolLogo: true,
              locale: "en",
            }}
          />
          <div className="mx-1 flex items-center ml-3">
            <button className=" rounded-full bg-slate-800/5 p-3 mr-1 text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className=" rounded-full bg-slate-800/5 p-3 text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
