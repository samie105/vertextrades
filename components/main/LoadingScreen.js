"use client";
import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the progress by a certain amount
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + Math.random() * 10; // Increase by 10% (adjust as needed)
        } else {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          setIsVisible(false);
          return prevProgress;
        }
      });
    }, 600);

    // Clear the timer when the component unmounts to prevent memory leaks
  }, []);

  return isVisible ? (
    <div className="fixed top-0 left-0 z-50 bg-white text-xl flex w-full h-full justify-center items-center">
      <div className="progress-cont w-4/5 md:w-1/2">
        <div className="progressguauge w-full h-2 rounded-full bg-gray-100 overflow-hidden transition-all relative">
          <div
            className="progressbar absolute rounded-full h-full top-0 left-0 transition-all bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  ) : null;
}
