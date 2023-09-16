"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { lists } from "./navList";
import { ScrollArea } from "../ui/scroll-area";
import { useTheme } from "../../contexts/themeContext";

export default function Sidebar() {
  const { isDarkMode, baseColor } = useTheme();
  const router = usePathname();

  return (
    <div className={`${isDarkMode ? `${baseColor} text-white` : ""}`}>
      <div
        className={`border-r ${
          isDarkMode ? "border-white/5" : ""
        } px-2 pt-4 pb-8`}
      >
        <ScrollArea>
          {lists.map((item, index) => (
            <Link key={index} href={item.linkPath} passHref>
              <div
                className={`flex flex-col md:flex-row text-sm items-center rounded-md py-3 my-1 px-2 transition-all ${
                  router === item.linkPath
                    ? "text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-500"
                    : isDarkMode
                    ? "text-white/80 hover:bg-[#111] text-xs font-bold"
                    : "text-black/70 hover:bg-gray-200 text-xs font-bold"
                }`}
              >
                <div className="mx-2 font-bold ">{item.icon}</div>
                <span className="text-xs lg:text-sm font-bol">{item.nav}</span>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
