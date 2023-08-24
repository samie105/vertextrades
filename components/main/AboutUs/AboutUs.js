/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import AuthUi from "../AuthUi/AuthUi";
import dynamic from "next/dynamic";

function AboutUs() {
  return (
    <>
      <div
        id="Features & Benefits"
        className="wwd-container md:flex flex flex-col max-w-[100vw] px-6 md:px-10 lg:flex-row md:bg-gradient-to-r bg-gradient-to-b from-green-50 via-white to-white"
      >
        <div className="second-cont mt-10 mb-3 md:w-2/3 mr-10">
          <div className="inner-cont">
            <div className="smallertex">
              <div className="inner-smaller-text flex items-center font-semibold my-2 uppercase text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-green-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Features & Benefits</p>
              </div>
            </div>
            <div className="larger-text text-2xl font-bold">
              Get <span className="text-green-700">Exceptional</span> Services!!
            </div>
            <div className="text-writeUp text-sm my-3">
              <p>
                Immerse yourself in an unparalleled experience of exceptional
                service. Our dedicated team is committed to exceeding your
                expectations with meticulous attention to detail and
                personalized care. From the moment you arrive, we create a warm
                and sophisticated atmosphere tailored to your desires.{" "}
              </p>{" "}
            </div>
            <Dialog>
              <DialogTrigger>
                <div className="btn mt-5 md:mt-12 mb-5 lg:block">
                  <button className="px-5 py-4 bg-green-700 text-white font-semibold text-sm items-center rounded-xl flex">
                    <p>Start enjoying benefits</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 ml-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </DialogTrigger>
              <AuthUi />
            </Dialog>
          </div>
        </div>{" "}
        <div className="first-cont  md:flex md:w-full flex-grow">
          {" "}
          <div className="card-container1 md:mr-5 w-full">
            <div className="card1">
              <div className="stepOne  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   py-6 px-3 rounded-xl">
                <div className="stepHead ">
                  <div className="small-text">
                    <div className="cont flex items-center uppercase font-semibold opaity-70 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-green-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Benefits</p>
                    </div>
                  </div>
                  <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
                    <p>
                      Safe & <span className="text-green-700">Secure</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="stepBody">
                  <div className="body-cont text-sm px-3 text-gray-500">
                    <p>
                      This platform is built and maintained with maximum
                      security in order to retain the ability to keep the trust
                      of it's users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="stepOne  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   py-6 px-3 rounded-xl">
                <div className="stepHead ">
                  <div className="small-text">
                    <div className="cont flex items-center uppercase font-semibold opaity-70 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-green-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p>Benefits</p>
                    </div>
                  </div>
                  <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
                    <p>
                      Profitable <span className="text-green-700">Assets</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="stepBody">
                  <div className="body-cont text-sm px-3 text-gray-500">
                    <p>
                      All assets enlisted on this platform have been tested and
                      found to be really profitable to make any sort of
                      investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container2 w-full">
            <div className="card1 my-2 md:my-0">
              <div className="stepOne shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   py-6 px-3 rounded-xl ">
                <div className="stepHead ">
                  <div className="small-text">
                    <div className="cont flex items-center uppercase font-semibold opacty-70 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-green-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Features</p>
                    </div>
                  </div>
                  <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
                    <p>
                      <span className="text-green-700">Secure </span>Wallet{" "}
                    </p>
                  </div>
                </div>
                <div className="stepBody">
                  <div className="body-cont text-sm pl-3 pr-6 text-gray-500">
                    <p>
                      Each user's wallet is safe and secured, as all asset,
                      funds are stored in a secured offline storage system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="stepOne  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   py-6 px-3 rounded-xl ">
                <div className="stepHead ">
                  <div className="small-text">
                    <div className="cont flex items-center uppercase font-semibold opacit-70 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2 text-green-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p>Features</p>
                    </div>
                  </div>
                  <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
                    <p>
                      <span className="text-green-700">Instant</span>{" "}
                      Withdrawals
                    </p>
                  </div>
                </div>
                <div className="stepBody">
                  <div className="body-cont text-sm px-3 text-gray-500">
                    <p>
                      Choose the amount to withdraw and receive it instantly, to
                      your preferred crypto wallet in your account, instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(AboutUs), { ssr: false });
