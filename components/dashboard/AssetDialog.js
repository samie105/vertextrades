import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../contexts/themeContext";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useUserData } from "../../contexts/userrContext";
import Link from "next/link";

export default function AssetDialog({
  minimum,
  image,
  symbol,
  name,
  price,
  duration,
}) {
  const { isDarkMode } = useTheme();
  const { details } = useUserData();
  const [error, setError] = useState();
  const [showError, setShowError] = useState();
  const [amount, setAmount] = useState(minimum || 0);
  const [percentage, setPercentage] = useState(0);
  const [month, setMonth] = useState(0);
  const roi = amount + (percentage * amount) / 100;
  const amountperMonth = (roi / month).toFixed(2);
  const stakeEquivalent = (
    amount / parseFloat(price.replace(/,/g, ""))
  ).toFixed(3);
  const balance = (
    parseFloat(details.tradingBalance) / parseFloat(price.replace(/,/g, ""))
  ).toFixed(3);
  const handleChange = (value) => {
    setShowError(false);
    const numericValue = Number(value);

    if (numericValue > details.tradingBalance) {
      setShowError(true);
      setError("Staking amount exceeds balance");
    } else {
      setAmount(numericValue);
    }
  };

  const getPercentageByMonths = (data, months) => {
    const entry = data.find((item) => item.months === months);

    setPercentage(entry.percentage);
    setMonth(entry.months);
  };

  const handleStaking = () => {};

  return (
    <div className={`${isDarkMode ? "textwhite" : ""}`}>
      <div className="header-section flex gap-x-2 items-center justify-between">
        <div className="header-section flex gap-x-3 items-center">
          <div className="image rounded-full overflow-hidden">
            <Image
              alt=""
              src={image}
              width={1000}
              height={1000}
              className="w-11 h-11"
            />
          </div>
          <div className="description">
            <div className="bigtext text-lg font-semibold">{name}</div>
            <div className="smalltext font-bold opacity-60 text-sm">
              {symbol}
            </div>
          </div>
        </div>

        <div className="price">
          {" "}
          <div
            className={`${
              isDarkMode ? "/bg-[#222] text-white" : "/bg-black/10"
            } font-bold text-sm p-2 rounded-sm`}
          >
            1 {symbol} ~ {price}
          </div>
        </div>
      </div>
      <div
        className={`demacator mt-3 rounded-full w-1/2 mx-auto h-0.5 px-10 ${
          isDarkMode ? "bg-[#222]" : "bg-black/10"
        }`}
      ></div>
      <div className="form-section mt-6">
        <div className="amount-form">
          <label htmlFor="amount" className="text-sm font-bold pb-4">
            Staking Amount (USD)
          </label>
          <Input
            id="amount"
            type="number"
            value={amount === 0 ? "" : amount}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Enter amount to stake"
            className={`mt-2 text-sm rounded-sm h-12 ${
              isDarkMode ? " bg-[#222] text-white border-white/5" : ""
            }`}
          />
        </div>
        <div
          className={`font-bold mt-3 text-sm /md:flex /items-center gap-x-2`}
        >
          <div>
            {" "}
            Balance: {details !== 0 && balance} {symbol}{" "}
            <Link
              href="/dashboard/deposits"
              className={`rounded py-1 px-2 pr-2 ${
                isDarkMode ? "bg-[#222]" : "bg-black/5"
              }`}
            >
              Deposit
            </Link>
          </div>
          {showError && <div className="text-red-500 mt-2 ">{error}</div>}
        </div>
        <div className="flex items-center gap-x-3 w-full">
          {" "}
          <div className="duration mt-4 w-full">
            <label htmlFor="duration" className="text-sm font-bold pb-4">
              Staking Duration
            </label>
            <Select
              onValueChange={(value) => getPercentageByMonths(duration, value)}
            >
              <SelectTrigger
                className={`h-12 mt-2 rounded-sm  ${
                  isDarkMode ? "bg-[#222] border-white/5" : ""
                }`}
              >
                <SelectValue placeholder="Select a duration" />
              </SelectTrigger>
              <SelectContent
                className={`rounded-sm ${
                  isDarkMode ? "bg-[#222] text-white border-white/5" : ""
                }`}
              >
                {duration.map((d) => (
                  <SelectItem
                    key={d.months}
                    value={d.months}
                    className="font-bold py-2 capitalize"
                  >
                    {d.months} months
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="monthly-form mt-4 w-full">
            <label htmlFor="monthly" className="text-sm font-bold pb-4">
              Return per cycle
            </label>
            <Input
              id="monthly"
              readOnly
              value={`${percentage ? amountperMonth : "0"} per months`}
              className={`mt-2 w-full text-sm rounded-sm h-12 ${
                isDarkMode ? " bg-[#222] text-white border-white/5" : ""
              }`}
            />
          </div>
        </div>

        <div className="flex items-center gap-x-3 w-full justify-stretch">
          <div className="roi-form mt-4 w-full">
            <label htmlFor="roi" className="text-sm font-bold pb-4">
              ROI (USD)
            </label>
            <Input
              id="amount"
              readOnly
              value={roi}
              className={`mt-2 w-full text-sm rounded-sm h-12 ${
                isDarkMode ? " bg-[#222] text-white border-white/5" : ""
              }`}
            />
          </div>
          <div className="roi-form mt-4 w-full">
            <label htmlFor="roi" className="text-sm font-bold pb-4">
              Staking Equivalent
            </label>
            <Input
              id="amount"
              readOnly
              value={`${stakeEquivalent} ${symbol}`}
              className={`mt-2 w-full text-sm rounded-sm h-12 ${
                isDarkMode ? " bg-[#222] text-white border-white/5" : ""
              }`}
            />
          </div>
        </div>

        <div
          className={` text-sm rounded-sm border p-2 mt-3 ${
            isDarkMode ? "text-white/60 border-white/5" : "text-black/60"
          }`}
        >
          <p>
            Staking results in an estimated{" "}
            <span
              className={`font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {percentage}% RPC (Return Per Cycle)
            </span>{" "}
            for{" "}
            <span
              className={`font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {symbol}
            </span>
          </p>
        </div>
        <div
          className={` text-sm rounded-sm border p-2 mt-3 ${
            isDarkMode ? "text-white/60 border-white/5" : "text-black/60"
          }`}
        >
          <p>
            Your staking period will end in{" "}
            <span
              className={`font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {month} month(s)
            </span>{" "}
            . Your earnings will be sent to your live {symbol} account.
          </p>
        </div>

        <button
          onClick={() => handleStaking()}
          disabled={percentage === 0 || amount === 0 || showError}
          className={`btn  font-bold disabled:cursor-not-allowed  text-sm text-white rounded-sm w-full text-center py-3 mt-3 ${
            percentage === 0 || amount === 0 || showError
              ? "bg-muted-foreground"
              : " bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700"
          }`}
        >
          Stake {stakeEquivalent} {symbol}{" "}
        </button>
      </div>
    </div>
  );
}

{
  /* <div
            className={`p-0.5 ${
              isDarkMode ? "bg-[#333]" : "bg-black/20"
            } w-1 h-1 rounded-full`}
          ></div> */
}
{
  /* <div className="text-red-500 mt-2 ">
            Amount exceeds available balance
          </div> */
}
