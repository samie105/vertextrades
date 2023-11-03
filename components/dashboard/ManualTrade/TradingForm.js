import React, { useState } from "react";
import { Input } from "../../ui/input";
import { useTheme } from "../../../contexts/themeContext";
import { useUserData } from "../../../contexts/userrContext";
import { cryptos } from "../MarketsPage/data/cryptos";
import { find } from "@amcharts/amcharts4/.internal/core/utils/Iterator";

export default function TradingForm({ market, marketType, provider }) {
  const { cryptoPrices, details } = useUserData();
  const [entryPrice, setEntryPrice] = useState();
  const [stopLoss, setStopLoss] = useState();
  const [takeProfit, setTakeProfit] = useState();
  const [lotSize, setLotSize] = useState();
  const { isDarkMode } = useTheme();

  const coinName = cryptos.find((crypto) => crypto.symbol === market);
  const price =
    details !== 0 &&
    cryptoPrices[coinName.name.replace(/ /g, "-").toLowerCase()].usd;
  return (
    <div
      className={`flex flex-col md:flex-row gap-y-2 md:gap-y-0 items-center  ${
        isDarkMode ? " text-white" : "bg-black/5"
      }`}
    >
      <div className={`buy-form  p-3 w-full`}>
        <div
          className={`Price mb-2 rounded text-sm  ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={`1 ${market} - $${price}`}
            type="text"
            readOnly
            placeholder="Amount (USD)"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`Lotsize mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={lotSize}
            type="number"
            onChange={(e) => setLotSize(e.target.value)}
            placeholder="Lot size"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`EntryPrice mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={entryPrice}
            type="number"
            onChange={(e) => setEntryPrice(e.target.value)}
            placeholder="Entry Price"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`EntryPrice mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={stopLoss}
            type="number"
            onChange={(e) => setStopLoss(e.target.value)}
            placeholder="Stop Loss"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`EntryPrice mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={takeProfit}
            type="number"
            onChange={(e) => setTakeProfit(e.target.value)}
            placeholder="Take Profit"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div className="btn mt-3">
          <button className="w-full bg-green-600 text-white font-bold text-sm py-3 text-center rounded">
            Buy {market}
          </button>
        </div>
      </div>
      <div
        className={`sell-form  p-3 w-full ${isDarkMode ? " text-white" : ""}`}
      >
        <div
          className={`Price mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={`1 ${market} - $${price}`}
            type="text"
            readOnly
            placeholder="Amount (USD)"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`Lotsize mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={lotSize}
            type="number"
            onChange={(e) => setLotSize(e.target.value)}
            placeholder="Lot size"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`EntryPrice mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={entryPrice}
            type="number"
            onChange={(e) => setEntryPrice(e.target.value)}
            placeholder="Entry Price"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`EntryPrice mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={stopLoss}
            type="number"
            onChange={(e) => setStopLoss(e.target.value)}
            placeholder="Stop Loss"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div
          className={`EntryPrice mb-2 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={takeProfit}
            type="number"
            onChange={(e) => setTakeProfit(e.target.value)}
            placeholder="Take Profit"
            className="border-0 font-bold bg-[#22222270] h-11"
          />
        </div>
        <div className="btn mt-3">
          <button className="w-full bg-red-600 text-white font-bold text-sm py-3 text-center rounded">
            Sell {market}
          </button>
        </div>
      </div>
    </div>
  );
}
