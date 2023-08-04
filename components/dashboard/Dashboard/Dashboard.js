"use client";
import React from "react";
import { dashhh } from "./dashbd";
import AssetWidget from "./AssetWidgtet";
import AssetWidgetTwo from "./AssetWidgetTwo";
import LatestTrades from "./LatestTrades";
import AssetWidgetThree from "./AssetWidgetThree";
import AssetWidgetFour from "./AssetWidgetFour";

export default function Dash() {
  return (
    <>
      <div className="dash-cont p-4">
        {/* <div className="dash-header font-bold text-xl mt-3">Dashboard</div> */}
        <div className="account-boards w-full my-3 text-sm">
          <div className="border sticky rounded-lg px-2 py-4  bg-slate-800  ">
            <div className="card-info shado-md flex items-center justify-between">
              <div className="card-header font-bold ml-1 flex items-center text-white">
                <div className="block">
                  {" "}
                  <div className="icon-cont bg-gry-50 bg-slate-700 rounded-full p-3 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center text-xs ml-2">
                  <div className="flex items-center">
                    <p>Trading Balance</p>{" "}
                    <div className="live md:hidden">
                      <div className="live-info p-1 flex items-center bg-green-700 text-xs mx-3 text-white rounded-full">
                        <div className="dot w-1 h-1 animate-ping bg-white  rounded-full"></div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-0 bg-gay-200 rounded-lg md:ml-2 text-sm text-left text-gray-400">
                    $0.00
                  </div>
                  <div className="live hidden md:block">
                    <div className="live-info py-1 px-2 flex items-center bg-green-700 text-xs mx-3 text-white rounded-full">
                      <div className="dot w-1 h-1 mr-2 animate-ping bg-white  rounded-full"></div>{" "}
                      <p>Live</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-info flex">
                <div className="mx-1 bg-slate-700 text-white flex font-bold text-xs items-center cursor-pointer md:px-4 md:py-3 p-3 rounded-full md:rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 md:mr-1"
                  >
                    <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
                  </svg>
                  <p className="hidden md:block">Withdraw</p>
                </div>
                <div className="mx-1 bg-slate-700 text-white flex font-bold text-xs items-center cursor-pointer md:px-4 md:py-3 p-3 rounded-full md:rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 md:mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="hidden md:block">Deposit</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="dash-boards w-full my-2 text-sm grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-2">
          {dashhh.map((items) => (
            <>
              <div
                key={items.name}
                className={`card border rounded-lg p-5 flex items-center bg-slate-800/5 cursor-pointer `}
              >
                <div
                  className={`icon p-3 rounded-full text-white mr-4 bg-slate-800`}
                >
                  {items.icon}
                </div>
                <div>
                  <div className="card-header capitalize font-bold">
                    {items.name}
                  </div>
                  <div className="card-info mt-1 text-base font-bold text-gray-500">
                    {items.bal}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="assets">
          <AssetWidget />
          <div className="my-2">
            {" "}
            <AssetWidgetTwo />
          </div>

          <AssetWidgetThree />
        </div>
        <AssetWidgetFour />
        <div className="latest-trades mt-5">
          <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
            <div className="header text-lg font-bold mb-3 px-4 pt-3">
              Latest Trades
            </div>
            <LatestTrades />
          </div>
        </div>
      </div>
    </>
  );
}
