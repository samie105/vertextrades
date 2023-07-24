import React from "react";
import { TechnicalAnalysis, Ticker } from "react-tradingview-embed";

export default function AssetWidgetTwo() {
  return (
    <>
      <div className="mb-3">
        <Ticker
          className="border-0"
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
            isTransparent: false,
            showSymbolLogo: true,
            locale: "en",
          }}
        />
      </div>

      <div className="text hidden">AI Signals</div>

      <div>
        <TechnicalAnalysis
          widgetPropsAny={{
            interval: "1m",
            width: "100%",
            isTransparent: false,
            height: 450,
            symbol: "COINBASE:BTCUSD",
            showIntervalTabs: true,
            locale: "en",
            colorTheme: "light",
          }}
        />
      </div>
    </>
  );
}
