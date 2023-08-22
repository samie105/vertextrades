"use client";

import React, { useState, useEffect } from "react";
import { livess } from "./lives";
import { Card, CardContent } from "../../ui/card";
import CountUp from "react-countup";

const Livetrade = () => {
  const [randomNumbers, setRandomNumbers] = useState({});
  const [changePercent, setChangePercent] = useState(0); // Store the change percentage for "live" only

  useEffect(() => {
    // Initialize random numbers
    const initialRandomNumbers = {};
    livess.forEach((item) => {
      initialRandomNumbers[item.name] =
        Math.floor(Math.random() * (120 - 20 + 1)) + 20;
    });
    setRandomNumbers(initialRandomNumbers);

    // Set interval to update the random numbers every second
    const interval = setInterval(() => {
      setRandomNumbers((prevRandomNumbers) => {
        const updatedRandomNumbers = { ...prevRandomNumbers };
        const previousNumber = prevRandomNumbers["live"];
        const minDiff = -10;
        const maxDiff = 10;
        const randomDiff =
          Math.floor(Math.random() * (maxDiff - minDiff + 1)) + minDiff;
        const newNumber = Math.max(previousNumber + randomDiff, 20);
        updatedRandomNumbers["live"] = newNumber;

        const percentChange =
          ((newNumber - previousNumber) / previousNumber) * 100;
        setChangePercent(percentChange);

        return updatedRandomNumbers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <div className="dash-boards w-full my-2 text-sm grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-2">
        {livess.map((items) => (
          <div key={items.name}>
            <Card>
              <CardContent className="p-4 bg-gray-50">
                <div className="cont flex justify-between rounded-xl">
                  <div className="deets w-full">
                    <div className="name capitalize text-sm font-bold">
                      {items.name}
                    </div>
                    <div className={`bal font-bold text-2xl text-black my-1`}>
                      {items.name === "live" ? (
                        <CountUp
                          end={randomNumbers[items.name]}
                          duration={0.5}
                        />
                      ) : (
                        items.bal
                      )}
                    </div>
                  </div>
                  <div className="icon">
                    <div>
                      {items.name === "live" ? (
                        <div className="live md:hidden">
                          <div className="live-info p-1 flex items-center animate-ping bg-green-700 text-xs mx-3 text-white rounded-full">
                            <div className="dot w-1 h-1 animate-ping bg-white  rounded-full"></div>{" "}
                          </div>
                        </div>
                      ) : (
                        items.icon
                      )}
                    </div>
                  </div>
                </div>
                <div className="extra font-semibold text-xs text-green-700">
                  {items.name === "live"
                    ? `${changePercent.toFixed(1)}% from last second`
                    : "+0% from last month"}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Livetrade;
