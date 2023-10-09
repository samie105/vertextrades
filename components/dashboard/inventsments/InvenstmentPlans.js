"use client";
import React from "react";
import { investmentPlans } from "./plans";
import { useTheme } from "../../../contexts/themeContext";
import Image from "next/image";
import { useUserData } from "../../../contexts/userrContext";

export default function InvestmentPlans() {
  const { details } = useUserData();
  const getColor = (packageName) => {
    switch (packageName) {
      case "gold plan":
        return "#CF9B03";
      case "premium plan":
        return "#6B4BC9";
      case "silver plan":
        return "#C0C0C0";
      case "bronze plan":
        return "#CD7F32";
      default:
        return "#000000";
    }
  };
  const getColorRed = (packageName) => {
    switch (packageName) {
      case "gold plan":
        return "#CF9B0330";
      case "premium plan":
        return "#6B4BC930";
      case "silver plan":
        return "#C0C0C030";
      case "bronze plan":
        return "#CD7F3230";
      default:
        return "#000000";
    }
  };
  const { isDarkMode } = useTheme();
  return (
    <div className="p-4 grid-cols-1 grid md:grid-cols-2 gap-4 mt-5">
      {investmentPlans.map((plan, index) => (
        <div
          key={index}
          className={` p-4 rounded-xl border relative ${
            isDarkMode ? "bg-[#111] text-white/80" : "bg-white"
          }`}
          style={{ border: "1px solid " + getColorRed(plan.package) }}
        >
          <div className="absolute bottom-20 right-0 mb-3">
            <Image
              alt=""
              src={plan.image}
              width={1000}
              height={1000}
              className="opacity-40 w-32 h-32"
            />
          </div>
          <div
            className={`text-xl font-bold mb-5 text-center flex items-center justify-center ${getColor(
              plan.package
            )}`}
            style={{ color: getColor(plan.package) }}
          >
            {" "}
            <Image
              alt=""
              src={plan.image}
              width={1000}
              height={1000}
              className="w-8 h-8"
            />
            <div className="capitalize">{plan.package}</div>
          </div>
          <div className="flex items-center justify-center cursor-pointer z-50">
            {" "}
            <div
              className={`text-x my-1 p-2 font-bold rounded-sm ${
                isDarkMode ? `  ` : ""
              }`}
              style={{ backgroundColor: getColorRed(plan.package) }}
            >
              <sup>$</sup> {plan.min.toLocaleString()} ~ <sup>$</sup>{" "}
              {plan.max.toLocaleString()}
            </div>
          </div>

          <div className="list-disc pl-5">
            {plan.packageBenefit.map((benefit, idx) => (
              <div
                key={idx}
                className="text-sm flex p-2 font-bold items-center text-right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-5 h-5 mr-2 ${
                    isDarkMode ? "text-white/80" : "text-gray-900"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>{benefit}</div>
              </div>
            ))}
          </div>

          <div className="button-container flex justify-center">
            <button
              disabled={details.investmentPackage === plan.package}
              className={`rounded-full px-7 ${isDarkMode ? "text-white" : ""} ${
                details.investmentPackage === plan.package
                  ? "cursor-not-allowed"
                  : ""
              } my-4 py-3 text-sm font-bold`}
              style={{
                backgroundColor:
                  details.investmentPackage === plan.package
                    ? isDarkMode
                      ? "#222"
                      : "#F6F7F8" // Provide a valid color code for light mode
                    : getColor(plan.package), // Replace this with your getColor function
              }}
            >
              {details.investmentPackage == plan.package
                ? "Current Running Plan"
                : "Purchase Plan"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
