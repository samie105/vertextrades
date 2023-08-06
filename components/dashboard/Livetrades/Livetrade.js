/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import ChartMovement from "./ChartMovement";
import { livess } from "./lives";

const Livetrade = () => {
  const [randomNumbers, setRandomNumbers] = useState({});

  useEffect(() => {
    // Function to generate a random number between min and max (inclusive)
    const getRandomNumberInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to generate a random number near the previous number
    const generateRandomNumberNearPrevious = (previousNumber) => {
      const minDiff = -10; // Minimum difference from the previous number
      const maxDiff = 10; // Maximum difference from the previous number
      const randomDiff = getRandomNumberInRange(minDiff, maxDiff);
      const newNumber = previousNumber + randomDiff;
      return Math.max(newNumber, 20); // Ensure the new number is not below 40
    };

    // Initialize the random numbers for each item in the list
    const initialRandomNumbers = {};
    livess.forEach((item) => {
      initialRandomNumbers[item.name] = getRandomNumberInRange(20, 120);
    });
    setRandomNumbers(initialRandomNumbers);

    // Function to update the random numbers every second
    const interval = setInterval(() => {
      setRandomNumbers((prevRandomNumbers) => {
        const updatedRandomNumbers = {};
        livess.forEach((item) => {
          const previousNumber = prevRandomNumbers[item.name];
          updatedRandomNumbers[item.name] =
            generateRandomNumberNearPrevious(previousNumber);
        });
        return updatedRandomNumbers;
      });
    }, 1000); // Change the number every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <div className="dash-boards w-full my-2 text-sm grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-2">
        {livess.map((items) => (
          <div
            key={items.name}
            className={`card border rounded-lg p-5 flex items-center ${
              items.name === "live"
                ? "bg-green-800/5 animae-pulse"
                : "bg-slate-800/5"
            } cursor-pointer `}
          >
            <div
              className={`icon p-3 rounded-full text-white mr-4 ${
                items.name === "live"
                  ? "bg-green-800 animate-pulse"
                  : "bg-slate-800"
              } bg-slate-800`}
            >
              {items.icon}
            </div>
            <div>
              <div className={`card-header capitalize font-bold`}>
                <div className="flex items-center">
                  {items.name === "live" && (
                    <div className="number mr-1">
                      {randomNumbers[items.name]}
                    </div>
                  )}
                  <div> {items.name}</div>
                </div>
              </div>
              <div
                className={`card-info mt-1 text-base font-bold text-gray-500`}
              >
                {items.bal}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1">
        <div className="ai-trading-cont w-full">
          <ChartMovement />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Livetrade;
