import React from "react";
import { TechnicalAnalysis, Ticker } from "react-tradingview-embed";

export default function AssetWidgetTwo() {
  return (
    <>
      <div className="mb-3">
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
      </div>
    </>
  );
}
