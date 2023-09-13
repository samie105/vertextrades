import React from "react";
import { investmentPlans } from "./plans";

export default function InvestmentPlans() {
  const getColor = (packageName) => {
    switch (packageName) {
      case "Gold Plan":
        return "#D4AF37";
      case "Platinum Plan":
        return "%0b39ac";
      case "Silver Plan":
        return "#C0C0C0";
      case "Bronze Plan":
        return "#CD7F32";
      default:
        return "#000000";
    }
  };
  return (
    <div className="p-4 grid-cols-1 grid md:grid-cols-2 gap-4 mt-20">
      {investmentPlans.map((plan, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl border /shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        >
          <div
            className={`text-xl font-bold mb-5 text-center flex items-center justify-center ${getColor(
              plan.package
            )}`}
            style={{ color: getColor(plan.package) }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 mr-2 "
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>{plan.package}</div>
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
                  className="w-5 h-5 mr-2 text-slate-900"
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
            <button className="rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-500 px-7 text-white my-4 py-3 text-sm font-bold">
              Purchase Plan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
