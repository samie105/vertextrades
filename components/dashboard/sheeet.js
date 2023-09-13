"use client";
import { usePathname } from "next/navigation";
import { SheetClose, SheetHeader, SheetTitle } from "../ui/sheet";
import { navList, accountList } from "./navList";
import Link from "next/link";

export default function Sheeet() {
  const router = usePathname();

  return (
    <>
      <SheetHeader className="text-white">
        <SheetTitle>
          <div className="text font-bold">Broker Name</div>
        </SheetTitle>
      </SheetHeader>
      <div className="mt-10 nav-menus">
        <div className="classes mb-4 text-m font-bold">User Access</div>
        {accountList.map((item) => (
          <Link
            key={item.nav}
            href={item.linkPath}
            passHref
            className={`flex items-center py-3 w-full transition-all cursor-pointer text-sm font-medium px-3 rounded-xl ${
              router === item.linkPath
                ? "text-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 font-bold"
                : "text-black/80 "
            }`}
          >
            <SheetClose className="w-full">
              <div className="w-full flex items-center py-1">
                <div className="icon mr-2">{item.icon}</div>
                <div className="nav">{item.nav}</div>
              </div>
            </SheetClose>
          </Link>
        ))}
        <div className="classes mb-4 text-m font-bold mt-10">Accounts</div>
        {navList.map((item) => (
          <Link
            key={item.nav}
            href={item.linkPath}
            passHref
            className={`flex items-center py-3 w-full transition-all cursor-pointer text-sm font-medium px-3 rounded-xl ${
              router === item.linkPath
                ? "text-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 font-bold"
                : "text-black/80 "
            }`}
          >
            <SheetClose className="w-full">
              <div className="w-full flex items-center py-1">
                <div className="icon mr-2">{item.icon}</div>
                <div className="nav">{item.nav}</div>
              </div>
            </SheetClose>
          </Link>
        ))}
      </div>
    </>
  );
}
