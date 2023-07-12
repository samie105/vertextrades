/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Slider from "react-slick";
export default function Testimonials() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="wwd-container md:flex flex flex-col max-w-[100vw] lg:items-center mx-10 lg:flex-row my-10">
        <div className="second-cont mt-10 mb-3 md:w-2/3 lg:w-1/3 mr-10">
          <div className="inner-cont">
            <div className="smallertex">
              <div className="inner-smaller-text flex items-center font-semibold my-2 uppercase text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Testimonials</p>
              </div>
            </div>
            <div className="larger-text text-2xl font-bold capitalize">
              what people say about us.
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
          </div>
        </div>{" "}
        <div className="first-cont lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="TestimonyOne hidden md:block">
            <div className="testi-card shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-5 rounded-xl">
              <div className="card-brand mb-4">
                <div className="icon-container flex items-center font-bold ">
                  <div className=" mr-2">
                    <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                  </div>
                  <p>Twitter</p>
                </div>
              </div>
              <div className="card-body text-sm">
                <blockquote>
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>{" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam, deserunt. Voluptate veniam facere, delectus eveniet
                  nisi quis incidunt mollitia veritatis.{" "}
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>
                </blockquote>
              </div>
              <div className="card-author mt-5 flex items-center">
                <div className="avatar ">
                  <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      className=""
                      src="/assets/nellyaran.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="av-writeUp ml-5 text-xs font-semibold">
                  <div className="name mb-1">Nelly Aran</div>
                  <div className="desc">Candle Forecasts at Inksquare</div>
                </div>
              </div>
            </div>
          </div>
          <div className="TestimonyTwo hidden md:block">
            <div className="testi-card shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-5 rounded-xl">
              <div className="card-brand mb-4">
                <div className="icon-container flex items-center font-bold ">
                  <div className=" mr-2">
                    <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                  </div>
                  <p>Facebook</p>
                </div>
              </div>
              <div className="card-body text-sm">
                <blockquote>
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>{" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam, deserunt. Voluptate veniam facere, delectus eveniet
                  nisi quis incidunt mollitia veritatis.{" "}
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>
                </blockquote>
              </div>
              <div className="card-author mt-5 flex items-center">
                <div className="avatar ">
                  <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      className=""
                      src="/assets/nellyaran.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="av-writeUp ml-5 text-xs font-semibold">
                  <div className="name mb-1">Da Silva P. Viera</div>
                  <div className="desc">Indicator Analyst at Voce-Bulls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Slider {...settings} className="w-full ">
            <div className="TestimonyOne w-60">
              <div className="testi-card shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-5 rounded-xl w-full">
                <div className="card-brand mb-4">
                  <div className="icon-container flex items-center font-bold ">
                    <div className=" mr-2">
                      <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                    </div>
                    <p>Twitter</p>
                  </div>
                </div>
                <div className="card-body text-sm">
                  <div>
                    <sup>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="w-3 h-3 inline text-gray-300"
                      />
                    </sup>{" "}
                    I can't thank my broker enough for their outstanding
                    service. From the moment I signed up, they have provided
                    exceptional support and guidance. Their platform is
                    intuitive and packed with powerful features that have
                    greatly improved my trading experience.{" "}
                    <sup>
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="w-3 h-3 inline text-gray-300"
                      />
                    </sup>
                  </div>
                </div>
                <div className="card-author mt-5 flex items-center">
                  <div className="avatar ">
                    <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                      <Image
                        height={50}
                        width={50}
                        className=""
                        src="/assets/testiii.jpg"
                        alt=""
                        priority
                      />
                    </div>
                  </div>
                  <div className="av-writeUp ml-5 text-xs font-semibold">
                    <div className="name mb-1">Nelly Aran</div>
                    <div className="desc">Candle Forecasts at Inksquare</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="TestimonyTwo">
              <div className="testi-card shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-5 rounded-xl">
                <div className="card-brand mb-4">
                  <div className="icon-container flex items-center font-bold ">
                    <div className=" mr-2">
                      <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                    </div>
                    <p>Facebook</p>
                  </div>
                </div>
                <div className="card-body text-sm">
                  <div>
                    <sup>
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="w-3 h-3 inline text-gray-300"
                      />
                    </sup>{" "}
                    Choosing this platform was a game-changer for me. Their
                    dedication to customer satisfaction is unmatched. Whenever I
                    have a question or need assistance, their knowledgeable
                    support team is always there to help.{" "}
                    <sup>
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="w-3 h-3 inline text-gray-300"
                      />
                    </sup>
                  </div>
                </div>
                <div className="card-author mt-5 flex items-center">
                  <div className="avatar ">
                    <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                      <Image
                        height={50}
                        width={50}
                        className=""
                        src="/assets/nellyaran.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="av-writeUp ml-5 text-xs font-semibold">
                    <div className="name mb-1">Da Silva P. Viera</div>
                    <div className="desc">Indicator Analyst at Voce-Bulls</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
