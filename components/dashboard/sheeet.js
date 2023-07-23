"use client";
import { useState } from "react";
import { SheetHeader, SheetTitle } from "../ui/sheet";
import { navList } from "./navList";

export default function Sheeet() {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <>
      <SheetHeader className="text-white">
        <SheetTitle>
          <div className="text font-bold">Broker Name</div>
        </SheetTitle>
      </SheetHeader>
      <div className="mt-10 nav-menus">
        {navList.map((item, index) => (
          <div
            key={item.nav}
            className={`flex items-center py-[15px] transition-all cursor-pointer text-sm font-medium px-3 rounded-xl ${
              activeNavItem === index
                ? "text-white bg-slate-800 py- font-bold"
                : "text-gray-600"
            }`}
            onClick={() => handleNavItemClick(index)}
          >
            <div className="icon mr-2">{item.icon}</div>
            <div className="nav">{item.nav}</div>
          </div>
        ))}
      </div>
    </>
  );
}
