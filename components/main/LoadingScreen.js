/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../contexts/themeContext";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(59);
  const { isDarkMode, basecolor } = useTheme();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Increment the progress by a certain amount
  //     setProgress((prevProgress) => {
  //       if (prevProgress < 100) {
  //         return prevProgress + 5; // Increase by 10% (adjust as needed)
  //       } else {
  //         clearInterval(interval); // Stop the interval when progress reaches 100%
  //         setIsVisible(false);
  //         return prevProgress;
  //       }
  //     });
  //   }, 500);

  // Clear the timer when the component unmounts to prevent memory leaks
  // }, []);

  return isVisible ? (
    <div
      className={`fixed top-0 left-0 z-50 ${
        isDarkMode ? basecolor : "bg-white"
      } w-full h-full`}
    >
      <section className="section relative w-full h-full">
        {" "}
        <div
          className={`   animate__animated text-xl flex w-full h-full justify-center items-center ${
            progress > 94 ? "animate__slideOutRight" : ""
          }`}
        >
          <div className="progress-cont w-4/5 md:w-1/2">
            <div
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              } progressguauge w-full h-1.5 rounded-full  overflow-hidden transition-all relative`}
            >
              <div
                className="progressbar absolute rounded-full h-full top-0 left-0 transition-all bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>{" "}
        <div
          className={`header  absolute w-full flex items-center justify-center font-bold pt-4  ${
            progress > 10 ? "top-0 " : "-top-20"
          }`}
        >
          <div
            className={` animate__faster animate__animated font-bold text-lg ${
              progress > 10 && progress <= 95 ? "animate__slideInDown" : ""
            } ${progress >= 95 ? "animate__slideOutUp" : ""}`}
          >
            Brokersite Name
          </div>
        </div>
        <div
          className={`messages absolute w-full flex items-center justify-center pb-4 ${
            progress > 10 ? "bottom-0" : "-bottom-20"
          }`}
        >
          {progress <= 40 && (
            <div
              className={`text-sm md:text-base rounded-full animate__faster animate__animated py-3 px-4 font-bold bg-white shadow-[0px_0px_15px_10px_#00000009] ${
                progress > 10 && progress <= 35 ? "animate__slideInUp" : ""
              } ${progress >= 35 ? "animate__slideOutDown" : ""}`}
            >
              Hey👋 Nice seeing you
            </div>
          )}
          {progress > 40 && progress <= 80 && (
            <div
              className={`text-sm md:text-base rounded-full animate__faster animate__animated py-3 px-4 font-bold bg-white shadow-[0px_0px_15px_10px_#00000009] ${
                progress > 40 && progress <= 75 ? "animate__slideInUp" : ""
              } ${progress >= 75 ? "animate__slideOutDown" : ""}`}
            >
              🌟Setting Up the page...
            </div>
          )}
          {progress > 85 && (
            <div
              className={`text-sm md:text-base rounded-full animate__faster animate__animated py-3 px-4 font-bold bg-white shadow-[0px_0px_15px_10px_#00000009] ${
                progress > 85 && progress <= 95 ? "animate__slideInUp" : ""
              }${progress >= 95 ? "animate__slideOutDown" : ""}`}
            >
              ✅ Your page is ready
            </div>
          )}
        </div>
      </section>{" "}
    </div>
  ) : null;
}
