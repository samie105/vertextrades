"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "../../ui/table";
import dynamic from "next/dynamic";

// List of names for simulation
const names = [
  "John",
  "Jane",
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ivan",
  "Jasmine",
  "Kyle",
  "Laura",
  "Mason",
  "Nina",
  "Oscar",
  "Pamela",
  "Quentin",
  "Rachel",
  "Steve",
  "Tina",
  "Ursula",
  "Victor",
  "Wendy",
  "Xavier",
  "Yvonne",
  "Zach",
  "Akio",
  "Binh",
  "Chen",
  "Dinesh",
  "Eun",
  "Fatima",
  "Guillermo",
  "Hiroshi",
  "Indira",
  "Jorge",
  "Kiran",
  "Lien",
  "Ming",
  "Nadia",
  "Omar",
  "Pia",
  "Qasim",
  "Rashid",
  "Sakura",
  "Tariq",
  "Uma",
  "Vinh",
  "Wei",
  "Xia",
  "Yasmin",
  "Zara",
];

// List of market pairs for simulation
const marketPairs = [
  "EUR/CAD",
  "USD/JPY",
  "GBP/USD",
  "AUD/USD",
  "USD/CHF",
  "NZD/USD",
  "USD/ZAR",
  "EUR/JPY",
  "EUR/GBP",
  "GBP/JPY",
  "AUD/CAD",
  "CHF/JPY",
  "NZD/JPY",
  "GBP/CAD",
  "AUD/JPY",
  "EUR/AUD",
  "GBP/CHF",
  "CAD/JPY",
  "EUR/NZD",
  "AUD/NZD",
  "AUD/CHF",
  "GBP/NZD",
  "USD/SGD",
  "USD/HKD",
  "USD/TRY",
  "EUR/TRY",
  "NZD/CHF",
  "CAD/CHF",
  "NZD/CAD",
  "SGD/JPY",
];

const ActiveTraders = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random transaction ID
      const transactionId = (
        "#" +
        Math.random().toString(36).substring(2, 6) +
        "-" +
        Math.floor(Math.random() * 1e9)
      ).toUpperCase();

      // Pick a random name from the list
      const name = names[Math.floor(Math.random() * names.length)];

      // Pick a random market pair from the list
      const market =
        marketPairs[Math.floor(Math.random() * marketPairs.length)];

      const newTrade = {
        transactionId,
        name,
        profit: "$" + Math.floor(Math.random() * 10000),
        market,
        autoTrade: Math.random() > 0.5 ? "Active" : "Self-Trader",
      };

      setTrades((prevTrades) => [newTrade, ...prevTrades.slice(0, 5)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full my-2 px-2 rounded-lg ">
      <div className=" py-5 shadow[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        {" "}
        <div className="heading text-lg font-bold text-slate-800 px-3 my-2 rounded-lg">
          Latest Trades
        </div>
        <Table className=" ">
          <TableRow>
            <TableHead className="font-bold">Transaction ID</TableHead>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Profit</TableHead>
            <TableHead className="font-bold">Market</TableHead>
            <TableHead className="font-bold">Auto-Trade</TableHead>
          </TableRow>
          <TableBody>
            {trades.map((trade, index) => (
              <TableRow key={index} className="border-0">
                <TableCell className="border-0">
                  {trade.transactionId}
                </TableCell>
                <TableCell className="border-0">{trade.name}</TableCell>
                <TableCell className="border-0">{trade.profit}</TableCell>
                <TableCell className="border-0">{trade.market}</TableCell>
                <TableCell className="border-0">{trade.autoTrade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ActiveTraders), { ssr: false });
