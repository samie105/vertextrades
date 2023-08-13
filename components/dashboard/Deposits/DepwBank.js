"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export default function DepwBank() {
  const [amountForTransfer, setAmountForTransfer] = useState("");

  const handleAmountChange = (e) => {
    setAmountForTransfer(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="deposits-cont shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-3 rounded-lg transition-all">
        <div className="heading pb-1 flex items-center mt-3 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>

          <p className="text-sm uppercase">Bank Transfers</p>
        </div>
        <div className="header-text font-bold capitalize text-lg pb-4 w-full text-center">
          Deposit using Bank Wire
        </div>

        <div className="input my-3 flex  items-center">
          <div className="w-full">
            <input
              type="number"
              min="0"
              value={amountForTransfer}
              onChange={handleAmountChange}
              className="w-full px-4 py-3 text-sm rounded-lg bg-gray-50 font-bold border"
              placeholder="Enter amount in USD"
            />
          </div>
        </div>
        <Dialog>
          <DialogTrigger className="w-full">
            <div
              className={`flex-cont ${
                amountForTransfer && amountForTransfer != 0
                  ? "bg-slate-800 text-white"
                  : "bg-gray-300 text-gray-700"
              }  py-4 cursor-pointer capitalize flex  items-center font-bold  px-3 justify-center rounded-lg fon-bold text-sm w-full`}
            >
              <button className="capitalize">Deposit with bank wire</button>
            </div>
          </DialogTrigger>
          <DialogContent className="w-[90%] rounded-lg">
            <DialogHeader className="font-bold">
              Deposit Using Bank Wire
            </DialogHeader>
            <div className="my-2 p-2">
              <div className="message-cont border border-yellow-600 text-sm font-bold bg-yellow-50 text-yellow-700 rounded-lg p-2">
                Bank wire details are withheld due to security reasons, please
                contact live support using the live chat system below for more
                info
              </div>
            </div>

            <DialogClose>
              {" "}
              <div
                className={`flex-cont"bg-slate-800 text-white bg-slate-800 py-4 cursor-pointer capitalize flex  items-center font-bold  px-3 justify-center rounded-lg fon-bold text-sm w-full`}
              >
                <button className="capitalize">Continue</button>
              </div>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
