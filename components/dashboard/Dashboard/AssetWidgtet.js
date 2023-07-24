import React from "react";
import { MarketOverview } from "react-tradingview-embed";

export default function AssetWidgtet() {
  return (
    <div>
      <MarketOverview
        widgetPropsAny={{
          colorTheme: "light",
          dateRange: "12M",
          showChart: true,
          locale: "en",
          largeChartUrl: "",
          isTransparent: true,
          showSymbolLogo: true,
          showFloatingTooltip: true,
          width: "100%",
          height: "660",
          plotLineColorGrowing: "rgba(28, 69, 135, 1)",
          plotLineColorFalling: "rgba(41, 98, 255, 1)",
          gridLineColor: "rgba(42, 46, 57, 0)",
          scaleFontColor: "rgba(106, 109, 120, 1)",
          belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
          belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
          belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
          belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
          symbolActiveColor: "rgba(41, 98, 255, 0.12)",
          tabs: [
            {
              title: "Your Assets",
              symbols: [
                {
                  s: "CME_MINI:ES1!",
                  d: "S&P 500",
                },
                {
                  s: "CME:6E1!",
                  d: "Euro",
                },
                {
                  s: "COMEX:GC1!",
                  d: "Gold",
                },
                {
                  s: "NYMEX:CL1!",
                  d: "Crude Oil",
                },
                {
                  s: "NYMEX:NG1!",
                  d: "Natural Gas",
                },
                {
                  s: "CBOT:ZC1!",
                  d: "Corn",
                },
              ],
              originalTitle: "Futures",
            },
            {
              title: "Bonds",
              symbols: [
                {
                  s: "CBOT:ZB1!",
                  d: "T-Bond",
                },
                {
                  s: "CBOT:UB1!",
                  d: "Ultra T-Bond",
                },
                {
                  s: "EUREX:FGBL1!",
                  d: "Euro Bund",
                },
                {
                  s: "EUREX:FBTP1!",
                  d: "Euro BTP",
                },
                {
                  s: "EUREX:FGBM1!",
                  d: "Euro BOBL",
                },
              ],
              originalTitle: "Bonds",
            },
            {
              title: "Forex",
              symbols: [
                {
                  s: "FX:EURUSD",
                  d: "EUR to USD",
                },
                {
                  s: "FX:GBPUSD",
                  d: "GBP to USD",
                },
                {
                  s: "FX:USDJPY",
                  d: "USD to JPY",
                },
                {
                  s: "FX:USDCHF",
                  d: "USD to CHF",
                },
                {
                  s: "FX:AUDUSD",
                  d: "AUD to USD",
                },
                {
                  s: "FX:USDCAD",
                  d: "USD to CAD",
                },
              ],
              originalTitle: "Forex",
            },
            {
              title: "Futures",
              symbols: [
                {
                  s: "BINANCE:BTCUSDT",
                },
                {
                  s: "BINANCE:MATICUSDT",
                },
                {
                  s: "FX:GBPUSD",
                },
                {
                  s: "NASDAQ:TSLA",
                },
                {
                  s: "NASDAQ:AAPL",
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
