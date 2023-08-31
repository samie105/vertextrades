/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import AssetWidget from "./AssetWidgtet";
import AssetWidgetTwo from "./AssetWidgetTwo";
import LatestTrades from "./LatestTrades";
import AssetWidgetThree from "./AssetWidgetThree";
import AssetWidgetFour from "./AssetWidgetFour";
import Link from "next/link";
import { Card, CardContent } from "../../ui/card";
import { useUserData } from "../../../contexts/userrContext";

export default function Dash() {
  const { details } = useUserData();

  const dashhh = [
    {
      name: "deposited",
      bal: `$${details && details.totalDeposited.toLocaleString()}.00`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "withdrawn",
      bal: `$${details && details.totalWithdrawn.toLocaleString()}.00`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-green-700"
        >
          <path
            fillRule="evenodd"
            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm5.25-9.25a.75.75 0 00-1.5 0v4.59l-1.95-2.1a.75.75 0 10-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V7.75z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "assets",
      bal: details && details.totalAssets.toLocaleString(),

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-blue-700"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46.757.99 1.798 1.54 2.894 1.54s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "trade",
      bal: `${details && details.trade.toLocaleString()}`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-yellow-700"
        >
          <path
            fillRule="evenodd"
            d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
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
                    <p className="text-gray-400">Trading Balance</p>{" "}
                    <div className="live md:hidden">
                      <div className="live-info p-1 flex items-center bg-green-700 text-xs mx-3 text-white rounded-full">
                        <div className="dot w-1 h-1 animate-ping bg-white  rounded-full"></div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-0 bg-gay-200 rounded-lg md:ml-2 text-lg md:text-sm text-left text-white ">
                    {`$${
                      details && details.tradingBalance.toLocaleString()
                    }.00`}
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
                <Link href="/dashboard/withdrawals" passHref>
                  {" "}
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
                </Link>
                <Link href="dashboard/deposits" passHref>
                  {" "}
                  <div className="mx-1 bg-green-700 text-white flex font-bold text-xs items-center cursor-pointer md:px-4 md:py-3 p-3 rounded-full md:rounded-lg">
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
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="dash-boards w-full my-2 text-sm grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-2">
          {dashhh.map((items) => (
            <div key={items.name}>
              <Card>
                <CardContent className="p-4 bg-gray-50">
                  <div className="cont flex justify-between rounded-xl">
                    <div className="deets w-full">
                      <div className="name capitalize text-sm font-bold">
                        {items.name}
                      </div>
                      <div
                        className={`bal font-bold text-xl text-black my-2 md:text-2xl`}
                      >
                        {items.bal}
                      </div>
                    </div>
                    <div className="icon">
                      <div>{items.icon}</div>
                    </div>
                  </div>
                  <div className="extra font-semibold text-xs text-green-700">
                    +0 from last month
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="assets">
          {details && <AssetWidget />}
          <div className="my-2"> {details && <AssetWidgetTwo />}</div>

          <AssetWidgetThree />
        </div>
        {details && <AssetWidgetFour />}
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
