"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { lists } from "./navList";
import { ScrollArea } from "../ui/scroll-area";
import { useTheme } from "../../contexts/themeContext";
import Image from "next/image";

export default function Sidebar() {
  const { isDarkMode, baseColor } = useTheme();
  const router = usePathname();
  const isPathMatch = (path) => {
    if (Array.isArray(path)) {
      return path.map((subPath) => router === subPath);
    } else {
      return router === path;
    }
  };

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
                  isPathMatch(item.linkPath)
                    ? "text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-500"
                    : isDarkMode
                    ? "text-white/95 hover:bg-[#111] text-xs "
                    : "text-black/70 hover:bg-gray-200 text-xs "
                }`}
              >
                <div className="mx-2 font-bold ">{item.icon}</div>
                <div className="text-xs lg:text-sm font-bol">{item.nav}</div>
                {item.new && (
                  <div className=" ml-2">
                    <Image
                      alt=""
                      src="/assets/new.png"
                      width={1000}
                      height={1000}
                      className="w-8 h-8 opacity-60"
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
