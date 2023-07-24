import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Sheeet from "./sheeet";

export default function Nav() {
  return (
    <>
      <div className="nav-container flex justify-between duration-300 text-slate-900 items-center py-6 px-5 transition-colors border-b bg-white">
        <div className="burger md:hidden cursor-pointer">
          <Sheet className="p-0">
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
            <SheetContent side="left" className="px-4">
              <Sheeet />
            </SheetContent>
          </Sheet>
        </div>
        <div className="title">
          <h2 className="font-bold">Broker Name</h2>
        </div>
        <div className="nav-tools text-sm">
          <div>Logout</div>
        </div>
      </div>
    </>
  );
}
