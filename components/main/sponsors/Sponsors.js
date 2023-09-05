/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Sponsors() {
  const settings2 = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    rtl: true,
  };
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="Partners"
        className="spons-cont items-center lg:flex bg-gray50 py-14  my-12 w-full relative"
      >
        <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image
            width={500}
            height={500}
            alt=""
            src="/assets/map-pattern.png"
          />
        </div>
        <div className="spons-message-cont mx-10 lg:w-1/2">
          <div className="message">
            <div className="message-little flex items-center font-bold uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-1 text-red-700"
              >
                <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
              </svg>

              <p className="text-sm">Honoured Sponsors</p>
            </div>
            <div className="message-head capitalize">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold my-3">
                Top <span className="text-red-700">Companies</span> and{" "}
                <span className="text-red-700">Trade</span>{" "}
                <br className="hidden md:block lg:hidden" /> Partners !!!
              </p>
            </div>
            <div className="message-text text-sm ">
              Companies and agencies as well as industries being a tester and
              validator of <br className="hidden md:block lg:hidden" /> [broker
              name] has given a support to partnership
            </div>
          </div>
        </div>
        <div className="spons-sides my-10 mx-10 lg:w-1/2 lg:my-0 items-center ">
          <div>
            <Slider {...settings}>
              <div className="slide1">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor1.png"
                  />
                </div>
              </div>
              <div className="slide2">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor2.png"
                  />
                </div>
              </div>
              <div className="slide3">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor3.png"
                  />
                </div>
              </div>
              <div className="slide4">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor4.png"
                  />
                </div>
              </div>
              <div className="slide5 hidden md:block lg:block">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor2.png"
                  />
                </div>
              </div>
              <div className="slide5 hidden md:block lg:block">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor3.png"
                  />
                </div>
              </div>
            </Slider>
          </div>
          <div className="my-4 hidden lg:block">
            <Slider {...settings2}>
              <div className="slide1">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor1.png"
                  />
                </div>
              </div>
              <div className="slide2">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor2.png"
                  />
                </div>
              </div>
              <div className="slide3">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor3.png"
                  />
                </div>
              </div>
              <div className="slide4">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor4.png"
                  />
                </div>
              </div>
              <div className="slide5 hidden md:block lg:block">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor2.png"
                  />
                </div>
              </div>
              <div className="slide5 hidden md:block lg:block">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/sponsor3.png"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
