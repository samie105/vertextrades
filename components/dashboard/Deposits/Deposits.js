"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { deposits, othermeans } from "./deeps";
import Image from "next/image";

export default function Deposit() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amountInUSD, setAmountInUSD] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (selectedMethod) {
      const assetId = selectedMethod.toLowerCase().replace(/\s+/g, "-");
      const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${assetId}&vs_currencies=usd`;

      console.log("Fetching price for:", assetId); // Debugging log

      axios
        .get(apiUrl)
        .then((response) => {
          console.log("Price fetched:", response.data); // Debugging log
          setCurrentPrice(response.data[assetId]?.usd || 0);
        })
        .catch((error) => {
          console.error("Error fetching the current price:", error);
        });
    }
  }, [selectedMethod]);
  const handleMethodChange = (value) => {
    setSelectedMethod(value);
    const selectedOption = [...deposits, ...othermeans].find(
      (option) => option.short === value
    );
    setSelectedAddress(selectedOption?.address || "");
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedAddress);
    navigator.clipboard.writeText(selectedAddress);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleAmountChange = (e) => {
    setAmountInUSD(e.target.value);
  };

  const equivalentInCrypto = (amountInUSD / currentPrice).toFixed(8);

  return (
    <div className="p-4">
      <div className="deposits-cont shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-3 rounded-lg">
        <div className="py-4">
          {" "}
          <div className="heading pb-1 flex items-center mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              />
            </svg>
            <p className="text-sm uppercase">Crypto</p>
          </div>
          <div className="header-text font-bold capitalize text-lg pb-4">
            Deposit using Crypto
          </div>
        </div>

        <div>
          <Select
            className="w-full outline-none bg-gray-50 py-4"
            onValueChange={handleMethodChange}
          >
            <SelectTrigger className="w-full bg-gray-50 py-4">
              <SelectValue
                className="font-bold"
                placeholder="Select a Deposit Method"
              />
            </SelectTrigger>
            <SelectContent className="border-0">
              <SelectGroup>
                <SelectLabel>Recommended</SelectLabel>
                {deposits.map((option) => (
                  <>
                    <SelectItem key={option.address} value={option.short}>
                      <div className="flex py-2">
                        {" "}
                        <div className="mr-2">
                          <Image
                            src={option.image}
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="font-bold">{option.coinName}</div>
                      </div>
                    </SelectItem>
                  </>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Others Assets</SelectLabel>
                {othermeans.map((option) => (
                  <>
                    <SelectItem key={option.address} value={option.short}>
                      <div className="flex py-2">
                        {" "}
                        <div className="mr-2">
                          <Image
                            src={option.image}
                            alt=""
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="font-bold">{option.coinName}</div>
                      </div>
                    </SelectItem>
                  </>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {selectedAddress && (
          <div className=" flex items-center bg-gray-50 px-2 py-1 my my-4 rounded-lg">
            <input
              type="text"
              value={selectedAddress}
              readOnly
              className="w-full px-2 py-3 text-sm rounded-lg bg-gray-50 font-bold text-gray-500"
            />
            <button onClick={handleCopyAddress} className="ml-3">
              {isCopied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
        <div className="input mt-3 flex  items-center">
          <div className="w-full">
            <input
              type="number"
              value={amountInUSD}
              onChange={handleAmountChange}
              className="w-full px-4 py-3 text-sm rounded-lg bg-gray-50"
              placeholder="Enter amount in USD"
              disabled={!selectedMethod}
            />
          </div>
          {amountInUSD && (
            <div className="flex-cont bg-slate-800 text-white py-3 flex items-center  px-3 ml-3 rounded-lg fon-bold text-sm">
              {/* <button>Deposit</button> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {amountInUSD && (
          <div className="mt-3 mb-6 font-semibod text-xs text-gray-600">
            1 {selectedMethod} = ${currentPrice} ~ ${amountInUSD} ={" "}
            {equivalentInCrypto} {selectedMethod}
          </div>
        )}
      </div>
    </div>
  );
}
