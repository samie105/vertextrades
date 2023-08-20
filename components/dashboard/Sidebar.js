"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navList } from "./navList";

export default function Sidebar() {
  const router = usePathname();

  return (
    <div className="h-auto pt-1">
      <div className="">
        {navList.map((item, index) => (
          <Link key={index} href={item.linkPath} passHref>
            <div
              className={`flex flex-col md:flex-row border-r items-center py-4 px-2 transition-all ${
                router === item.linkPath
                  ? "text-white font-bold bg-slate-800"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="mx-2 font-bold ">{item.icon}</div>
              <span className="text-xs lg:text-sm font-bol">{item.nav}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
