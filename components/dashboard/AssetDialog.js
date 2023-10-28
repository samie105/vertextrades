import Image from "next/image";
import React from "react";
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

export default function AssetDialog({ image, symbol, name, price, duration }) {
  const { isDarkMode } = useTheme();
  const { details } = useUserData();
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
            placeholder="Enter amount to stake"
            className={`mt-2 text-sm rounded-sm h-12 ${
              isDarkMode ? " bg-[#222] text-white border-white/5" : ""
            }`}
          />
        </div>
        <div className={`font-bold mt-3 text-sm md:flex items-center gap-x-2`}>
          <div>
            {" "}
            Balance:{" "}
            {details !== 0 &&
              parseFloat(details.tradingBalance) / parseFloat(price)}{" "}
            {symbol}{" "}
            <Link
              href="/dashboard/deposits"
              className={`rounded py-1 px-2 ${
                isDarkMode ? "bg-[#222]" : "bg-black/5"
              }`}
            >
              Deposit
            </Link>
          </div>
          <div
            className={`p-0.5 ${
              isDarkMode ? "bg-[#333]" : "bg-black/20"
            } w-1 h-1 rounded-full`}
          ></div>
          <div className="text-red-500 mt-2 md:mt-0">
            Amount exceeds available balance
          </div>
        </div>

        <div className="duration mt-4">
          <label htmlFor="duration" className="text-sm font-bold pb-4">
            Staking Duration
          </label>
          <Select defaultValue="1">
            <SelectTrigger
              className={`h-12 mt-2 rounded-sm  ${
                isDarkMode ? "bg-[#222] border-white/5" : ""
              }`}
            >
              <SelectValue />
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
        <div className="roi-form mt-4">
          <label htmlFor="roi" className="text-sm font-bold pb-4">
            ROI
          </label>
          <Input
            id="amount"
            readOnly
            value="20"
            className={`mt-2 text-sm rounded-sm h-12 ${
              isDarkMode ? " bg-[#222] text-white border-white/5" : ""
            }`}
          />
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
              6.5% RPC (Return Per Cycle)
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
              20 days
            </span>{" "}
            . Your earnings will be sent to your live {symbol} account.
          </p>
        </div>

        <div className="btn bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 text-sm text-white rounded-sm w-full text-center py-3 mt-3">
          Stake 0.3 {symbol}{" "}
        </div>
      </div>
    </div>
  );
}
