"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navList } from "./navList";
export default function Sidebar() {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <div className="bg-slate-800 h-screen pt-1">
      <div className="">
        {navList.map((item, index) => (
          <Link key={index} href={item.linkPath} passHref>
            <div
              className={`flex flex-col md:flex-row items-center py-4 px-2 transition-all ${
                activeNavItem === index
                  ? "text-white font-bold bg-green-700"
                  : "text-gray-300 hover:text-gray-100"
              }`}
              onClick={() => handleNavItemClick(index)}
            >
              <div className="mx-2 font-bold ">{item.icon}</div>
              <span className="text-xs lg:ext-sm">{item.nav}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
