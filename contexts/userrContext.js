"use client";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [details, setDetails] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [coinPrices, setCoinPrices] = useState({});
  let email = ""; // Initialize email

  if (typeof document !== "undefined") {
    const rawEmail = decodeURIComponent(
      document.cookie.replace(
        /(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      )
    );
    email = rawEmail.replace(/%40/g, "@");
  }
  const deposits = [
    {
      coinName: "Bitcoin",
      short: "Bitcoin",
      image: "/assets/bitcoin.webp",
      address: "0xiohxhihfojdokhijkhnofwefodsdhfodhod",
    },
    {
      coinName: "Ethereum",
      short: "Ethereum",
      image: "/assets/ethereum.webp",
      address: "0xiohxhihfojhijkhnowefodsdhfodhod",
    },
    {
      coinName: "Tether USDT",
      short: "Tether",
      image: "/assets/Tether.webp",
      address: "0Xxiohxhihfookhijkhnofwefodsdhfodhod",
    },
  ];
  useEffect(() => {
    const fetchCoinPrices = async () => {
      try {
        // Create an array of coin symbols for API request
        const coinSymbols = deposits.map((coin) => coin.short.toLowerCase());

        // API request to fetch coin prices
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinSymbols.join(
            ","
          )}&vs_currencies=usd`
        );

        // Update coinPrices state with fetched prices
        setCoinPrices(response.data);
      } catch (error) {
        console.error("Error fetching coin prices:", error);
      }
    };

    fetchCoinPrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch("/fetching/fetchAllDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
          next: { revalidate: 1 },
        });

        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch details initially
    fetchDetails();

    // Set up a timer to fetch details every 2 seconds
  }, [email]);

  return (
    <UserDataContext.Provider
      value={{
        details,
        setDetails,
        selectedMethod,
        setSelectedMethod,
        currentPrice,
        setCurrentPrice,
        coinPrices,
        setCoinPrices,
        email,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
