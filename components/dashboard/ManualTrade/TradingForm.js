import React, { useState } from "react";
import { Input } from "../../ui/input";
import { useTheme } from "../../../contexts/themeContext";
import { useUserData } from "../../../contexts/userrContext";
import { cryptos } from "../MarketsPage/data/cryptos";
import { find } from "@amcharts/amcharts4/.internal/core/utils/Iterator";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import toast from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";

export default function TradingForm({ market, marketType, provider, price }) {
  const { details, email, setDetails, setNotification } = useUserData();
  const [entryPrice, setEntryPrice] = useState(price);
  const [stopLoss, setStopLoss] = useState();
  const [takeProfit, setTakeProfit] = useState();
  const [amount, setAmount] = useState(0);
  const [lotSize, setLotSize] = useState();
  const [entryPrice1, setEntryPrice1] = useState(price);
  const [stopLoss1, setStopLoss1] = useState();
  const [takeProfit1, setTakeProfit1] = useState();
  const [lotSize1, setLotSize1] = useState();
  const [amount1, setAmount1] = useState(0);
  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);
  const [loading, isloading] = useState();
  const [loading1, isloading1] = useState();

  const { isDarkMode } = useTheme();

  const handleClick = async () => {
    // Check if any of the variables is empty

    // Convert amount and tradingBalance to numbers for comparison
    const amountNumber = parseFloat(amount);
    const tradingBalanceNumber = parseFloat(details.tradingBalance);

    if (amountNumber > tradingBalanceNumber) {
      setError("Amount exceeds balance");
      return;
    }

    if (
      !entryPrice ||
      !stopLoss ||
      !takeProfit ||
      !amount ||
      !lotSize ||
      amountNumber <= 0
    ) {
      setError("All fields are required & valid");
      // You can return or perform other actions based on the error condition
      return;
    }

    // If all variables have values, proceed with the rest of your logic
    // ...

    // Clear the error state if there were no issues
    setError(null);

    const trade = {
      id: crypto.randomUUID(),
      type: "Buy",
      status: "Running",
      stopLoss,
      takeProfit,
      amount,
      entryPrice,
      lotSize,
      marketType,
      market,
      progress: parseFloat(amount) + Math.random * 5,
    };

    try {
      isloading(true);
      const response = await axios.post("/db/trade", { email, trade, amount });
      await console.log(response);
      if (response.status === 200) {
        setDetails((prevDeets) => ({
          ...prevDeets,
          tradingBalance: prevDeets.tradingBalance - amount,
          stakings: [...prevDeets.trades, trade],
        }));
        setNotification(
          `Your ${market} trade is running at ${entryPrice} `,

          "trade",
          "success"
        );
        toast.success(`${market} trade placed successfully`, {
          duration: 4000,
        });

        setAmount("");
        setEntryPrice("");
        setLotSize("");
        setStopLoss("");
        setTakeProfit("");
      }
      if (response.status !== 200) {
        toast.error(`${market} trade encountered an error placing`);
      }
    } catch (error) {}
    isloading(false);
  };

  const handleClick1 = () => {
    // Check if any of the variables is empty
    const amountNumber = parseFloat(amount1);
    const tradingBalanceNumber = parseFloat(details.tradingBalance);

    if (amountNumber > tradingBalanceNumber) {
      setError1("Amount exceeds balance");
      return;
    }

    if (
      !entryPrice1 ||
      !stopLoss1 ||
      !takeProfit1 ||
      !amount1 ||
      !lotSize1 ||
      amount1 <= 0
    ) {
      setError1("All fields are required");
      // You can return or perform other actions based on the error condition
      return;
    }

    // If all variables have values, proceed with the rest of your logic
    // ...

    // Clear the error state if there were no issues
    setError1(null);
  };

  return (
    <div
      className={`flex flex-col md:flex-row gap-y-2 md:gap-y-0 items-center  ${
        isDarkMode ? " text-white" : ""
      }`}
    >
      <div className={`buy-form  p-3 w-full`}>
        <Label id="" className=" text-sm font-bold">
          Current Price
        </Label>
        <div
          className={`Price mb-2 mt-1  rounded text-sm  ${
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
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Trade Amount (USD)
        </Label>
        <div
          className={`Price mb-2 mt-1 pr-5 flex items-center justify-between rounded text-sm  ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <div className="div">
            <Input
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount (USD)"
              className={`border-0 w-full font-bold h-11 ring-0 focus-within:ring-0 focus:ring-0 focus-visible:ring-0 ${
                isDarkMode ? "bg-transparent" : "bg-black/5"
              }`}
            />
          </div>
          <div className="priceArea font-bold">
            {amount / price} {market}
          </div>
        </div>

        <Label id="" className=" text-sm font-bold">
          Lotsize
        </Label>
        <div
          className={`Lotsize mb-2 mt-1 rounded  text-sm ${
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
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Entry Price
        </Label>
        <div
          className={`EntryPrice mb-2 mt-1 rounded  text-sm ${
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
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Stop Loss
        </Label>
        <div
          className={`EntryPrice mb-2 rounded mt-1 text-sm ${
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
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Take Profit
        </Label>
        <div
          className={`EntryPrice mb-2 rounded mt-1 text-sm ${
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
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <div className="btn mt-3">
          <button
            disabled={loading || loading1}
            onClick={() => handleClick()}
            className={`w-full bg-green-600 text-white font-bold text-sm disabled:bg-muted-foreground ${
              loading ? "" : "py-3"
            } text-center rounded `}
          >
            {loading ? (
              <div className="w-full flex justify-center items-center">
                {" "}
                <InfinitySpin width="100" color="white" />
              </div>
            ) : (
              `Buy ${market}`
            )}
          </button>
          {error && (
            <p className="text-red-500 mt-2 error-message font-bold text-sm ">
              {error}
            </p>
          )}
        </div>
      </div>
      <div
        className={`sell-form  p-3 w-full ${isDarkMode ? " text-white" : ""}`}
      >
        <Label id="" className=" text-sm font-bold">
          Current Price
        </Label>
        <div
          className={`Price mb-2 rounded mt-1  text-sm ${
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
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Trade Amount (USD)
        </Label>
        <div
          className={`Price mb-2 mt-1 pr-5 flex items-center justify-between rounded text-sm  ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <div className="div">
            <Input
              value={amount1}
              type="number"
              onChange={(e) => setAmount1(e.target.value)}
              placeholder="Amount (USD)"
              className={`border-0 w-full font-bold h-11 ring-0 focus-within:ring-0 focus:ring-0 focus-visible:ring-0 ${
                isDarkMode ? "bg-transparent" : "bg-black/5"
              }`}
            />
          </div>
          <div className="priceArea font-bold">
            {amount1 / price} {market}
          </div>
        </div>
        <Label id="" className=" text-sm font-bold">
          Lotsize
        </Label>
        <div
          className={`Lotsize mb-2 mt-1 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={lotSize1}
            type="number"
            onChange={(e) => setLotSize1(e.target.value)}
            placeholder="Lot size"
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Entry Price
        </Label>
        <div
          className={`EntryPrice mb-2 mt-1 first-line:rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={entryPrice1}
            type="number"
            onChange={(e) => setEntryPrice1(e.target.value)}
            placeholder="Entry Price"
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Stop Loss
        </Label>
        <div
          className={`EntryPrice mb-2 mt-1 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={stopLoss1}
            type="number"
            onChange={(e) => setStopLoss1(e.target.value)}
            placeholder="Stop Loss"
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <Label id="" className=" text-sm font-bold">
          Take Profit
        </Label>
        <div
          className={`EntryPrice mb-2 mt-1 rounded  text-sm ${
            isDarkMode
              ? "bg-[#22222270] text-white/80"
              : "bg-black/5 text-black/80"
          }`}
        >
          <Input
            value={takeProfit1}
            type="number"
            onChange={(e) => setTakeProfit1(e.target.value)}
            placeholder="Take Profit"
            className={`border-0 font-bold h-11 ${
              isDarkMode ? "bg-[#111]" : "bg-black/5"
            }`}
          />
        </div>
        <div className="btn mt-3">
          <button
            onClick={() => handleClick1()}
            className="w-full bg-red-600 text-white font-bold text-sm py-3 text-center rounded"
          >
            Sell {market}
          </button>
          {error1 && (
            <p className="text-red-500 mt-2 error-message font-bold text-sm ">
              {error1}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
