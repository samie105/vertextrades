import React from "react";
import TradingPage from "../../../../../../../components/dashboard/ManualTrade/TradingPage";
export default function page({ params }) {
  const { marketType, market, provider } = params;
  return (
    <div>
      <TradingPage
        market={market}
        marketType={marketType}
        provider={provider}
      />
    </div>
  );
}
