"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "../../ui/sheet";

import AuthUi from "../AuthUi/AuthUi";
import { DialogTrigger } from "../../ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 150;
      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home" },
    { label: "Getting Started" },
    { label: "About Us" },
    { label: "Partners" },
    { label: "Features & Benefits" },
    { label: "Advantages" },
    { label: "Testimonials" },
    { label: "FAQ" },
  ];

  return (
    <>
      <div
        className={`nav-container flex justify-between duration-300 items-center py-6 px-5 transition-colors ${
          isScrolled ? "bg-gray-950" : "bg-transparent"
        }`}
      >
        <div className="logo-area">
          <h2 className="font-bold text-base ">Broker Logo Name</h2>
        </div>
        <div className="Navigation-Items">
          <div className="itemcontainer lg:flex hidden text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.label}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="font-bold"
                onSetActive={() => setActiveNavItem(item.label)}
              >
                <div
                  className={`text-xs ${
                    activeNavItem === item.label
                      ? "font-bold opacity-100"
                      : "font-normal opacity-40"
                  } pl-3 cursor-pointer transition-opacity duration-500 text-white ${
                    activeNavItem !== item.label
                      ? "text-white hover:opacity-100"
                      : ""
                  }`}
                  onClick={() => handleNavItemClick(item.label)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Dialog>
          <DialogTrigger>
            <div className="ctaButtons lg:flex justify-between text-sm font-bold hidden">
              <div
                className="btn1 px-4 cursor-pointer flex py-3 bg-clip-tet text-transprent bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-700 to-orange-500 rounded-xl"
                // style={{ backgroundColor: "#ffffff10" }}
              >
                <p className="px-0.5 opacity-90">Get started trading</p>
              </div>
            </div>
          </DialogTrigger>
          <AuthUi />
        </Dialog>
        <div className="menu-bar cursor-pointer lg:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-b from-red-50 via-white to-white border-0 "
            >
              <SheetHeader className="text-white">
                <SheetTitle>
                  <div className=" font-bold">Broker Name</div>
                </SheetTitle>
              </SheetHeader>
              <div className="nav-menus mt-10 flex-col w-full flex">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.label}
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    className="w-full"
                    activeClass="font-bold"
                    onSetActive={() => setActiveNavItem(item.label)}
                  >
                    <SheetClose key={item.label} className="w-full">
                      <div
                        className={`menu-item mb-1 py-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-1 //rounded-md flex items-center ${
                          activeNavItem === item.label
                            ? " opacity-100 border-black border-b-2 text-black font-bold //rounded-md hover:bg-green-50"
                            : ""
                        }`}
                        onClick={() => handleNavItemClick(item.label)}
                      >
                        <p>{item.label}</p>
                      </div>
                    </SheetClose>
                  </Link>
                ))}
              </div>
              <Dialog>
                <DialogTrigger>
                  <SheetClose>
                    <div className="cta-button justify-center text-sm flex items-center pr-12 cursor-pointer w-full absolute bottom-5">
                      <button className="w-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-700 via-rose-700 to-orange-700  text-white px-7 py-4 rounded-xl font-bold">
                        Login or Sign up
                      </button>
                    </div>
                  </SheetClose>
                </DialogTrigger>
                <AuthUi />
              </Dialog>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
