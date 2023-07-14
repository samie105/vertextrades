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

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 100;
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
        className={`nav-container flex justify-between duration-300 items-center py-6 px-10 transition-colors ${
          isScrolled ? "bg-slate-900" : "bg-transparent"
        }`}
      >
        <div className="logo-area">
          <h2 className="font-bold text-base">Broker Logo Name</h2>
        </div>
        <div className="Navigation-Items">
          <div className="itemcontainer lg:flex hidden">
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
                  className={`text-sm ${
                    activeNavItem === item.label ? "font-bold" : "font-normal"
                  } px-3 cursor-pointer transition-opacity duration-500 text-white ${
                    activeNavItem !== item.label
                      ? "text-gray-400 hover:opacity-100"
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
        <div className="ctaButtons lg:flex justify-between text-sm font-bold hidden">
          <div
            className="btn1 px-4 cursor-pointer flex py-3 rounded-xl"
            style={{ backgroundColor: "#ffffff10" }}
          >
            <p className="px-0.5 opacity-90">Create an account</p>
          </div>
        </div>
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
              className="bg-slate-900 border-0 text-white"
            >
              <SheetHeader className="text-white">
                <SheetTitle>
                  <div className="text-white font-bold">Broker Name</div>
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
                        className={`menu-item mb-1 py-3 opacity-50 hover:opacity-90 duration-200 cursor-pointer hover:bg-slate-800 px-3 rounded-md flex items-center ${
                          activeNavItem === item.label
                            ? "bg-slate-800 text-white opacity-100 font-bold rounded-xl hover:bg-slate-800"
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
              <SheetClose>
                <div className="cta-button justify-center flex items-center pr-12 cursor-pointer w-full absolute bottom-5 ">
                  <div className=" w-full bg-slate-800  text-white px-7 py-3 rounded-xl">
                    Create an account
                  </div>
                </div>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
