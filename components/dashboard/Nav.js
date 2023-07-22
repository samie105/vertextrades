import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navList } from "./navList";

export default function Nav() {
  return (
    <>
      <div className="nav-container flex justify-between duration-300 items-center py-4 px-5 transition-colors bg-slate-900">
        <div className="burger md:hidden cursor-pointer">
          <Sheet>
            <SheetTrigger>
              <div className="burger-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-[50%]">
              <Sheeet />
            </SheetContent>
          </Sheet>
        </div>
        <div className="title">
          <h2 className="">Broker Name</h2>
        </div>
        <div className="nav-tools">
          <div>Some info</div>
        </div>
      </div>
    </>
  );
}
function Sheeet() {
  return (
    <>
      {" "}
      <SheetHeader className="text-white">
        <SheetTitle>
          <div className="text font-bold">Broker Name</div>
        </SheetTitle>
      </SheetHeader>
      <div className="mt-10 nav-menus">
        {navList.map((item) => (
          <div
            key={item.nav}
            className="flex items-center pb-8 cursor-pointer text-sm font-medium text-gray-500"
          >
            <div className="icon mr-2 ">{item.icon}</div>
            <div className="nav">{item.nav}</div>
          </div>
        ))}
      </div>
    </>
  );
}
