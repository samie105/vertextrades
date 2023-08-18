"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import Btcpayment from "./Btcpayment";

export default function Withdrawals() {
  const isVerified = true;
  const [formData, setFormData] = useState({
    walletAddress: "",
    amount: "",
    password: "",
  });
  const [btcFilled, setBtcFilled] = useState(true);
  const [formErrors, setFormErrors] = useState({
    walletAddress: "",
    amount: "",
    password: "",
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.walletAddress) {
      errors.walletAddress = "Wallet Address is required";
    }
    if (!formData.amount) {
      errors.amount = "Amount is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform submit logic here
      setBtcFilled(false);
    }
  };
  return (
    <div>
      {!isVerified && (
        <>
          <div className="flex w-full md:w-1/2 md:mx-auto h-[80vh] justify-center items-center">
            <div className="not-verified-container rounded-xl p-6 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
              <div className="header-text text-lg uppercase font-bold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M13.92 3.845a19.361 19.361 0 01-6.3 1.98C6.765 5.942 5.89 6 5 6a4 4 0 00-.504 7.969 15.974 15.974 0 001.271 3.341c.397.77 1.342 1 2.05.59l.867-.5c.726-.42.94-1.321.588-2.021-.166-.33-.315-.666-.448-1.004 1.8.358 3.511.964 5.096 1.78A17.964 17.964 0 0015 10c0-2.161-.381-4.234-1.08-6.155zM15.243 3.097A19.456 19.456 0 0116.5 10c0 2.431-.445 4.758-1.257 6.904l-.03.077a.75.75 0 001.401.537 20.902 20.902 0 001.312-5.745 1.999 1.999 0 000-3.545 20.902 20.902 0 00-1.312-5.745.75.75 0 00-1.4.537l.029.077z" />
                </svg>
                Verification Required
              </div>
              <div className="message py-1 text-sm my-3 font-bold text-gray-600">
                You need to be verified to make a withdrawal. Please complete
                the verification process to continue.
              </div>
              <div className="cta pt-2">
                <Link href="verify" passHref>
                  <button className="bg-slate-800 text-white py-3 px-5 text-sm font-bold rounded-xl hover:bg-slate-600">
                    Verify Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {isVerified && (
        <>
          <div className="">
            <div>
              <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sticky rounded-lg px-2 py-4  bg-white  ">
                <div className="card-info shado-md flex items-center justify-between">
                  <div className="card-header font-bold ml-1 flex items-center ">
                    <div className="block">
                      {" "}
                      <div className="icon-cont bg-gry-50 bg-white-700 rounded-full p-3 mr-2 border bg-slate-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-white"
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
                        <p>Available Balance</p>{" "}
                      </div>

                      <div className="mt-2 md:mt-0 bg-gay-200 rounded-lg md:ml-2 text-sm text-left text-gray-700">
                        $0.00
                      </div>
                    </div>
                  </div>
                  <div className="crypto-quivalents mx-4 flex justify-around">
                    <div className="btc flex items-center text-xs bg-orange-50 rounded-xl p-3">
                      <div className="image mr-2">
                        <Image
                          alt=""
                          src="/assets/bitcoin.webp"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="font-bold">0.0004</div>
                    </div>
                    <div className="btc sm:flex hidden items-center ml-3 text-xs bg-cyan-50 rounded-xl p-3">
                      <div className="image mr-2">
                        <Image
                          alt=""
                          src="/assets/Tether.webp"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="font-bold">55.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="mb-1 mt-3">
                  <label
                    htmlFor="paymentOption"
                    className="font-bold text-sm py-2"
                  >
                    Select payment method
                  </label>
                </div>

                <Select id="paymentOption">
                  <SelectTrigger className="border-0 font-bold shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <SelectValue
                      placeholder="Select Method"
                      className="font-bold"
                    />
                  </SelectTrigger>
                  <SelectContent className="font-bold">
                    <SelectItem value="Bitcoin Payment" className="">
                      <div className="flex items-center py-2">
                        {" "}
                        <div className="image mr-2">
                          <Image
                            alt=""
                            src="/assets/bitcoin.webp"
                            width={20}
                            height={20}
                          />
                        </div>{" "}
                        <p>Bitcoin Payment</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="Bank Wire" className="">
                      <div className="flex items-center py-2">
                        {" "}
                        <div className="image mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-slate-800"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>{" "}
                        <p>Bank Wire</p>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bitcoin-payment my-3 rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                <Btcpayment
                  formErrors={formErrors}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  formData={formData}
                  btcFilled={btcFilled}
                  setBtcFilled={setBtcFilled}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
