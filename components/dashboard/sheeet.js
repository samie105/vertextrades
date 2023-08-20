"use client";
import { usePathname } from "next/navigation";
import { SheetClose, SheetHeader, SheetTitle } from "../ui/sheet";
import { navList } from "./navList";
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
        {navList.map((item) => (
          <Link
            key={item.nav}
            href={item.linkPath}
            passHref
            className={`flex items-center py-[15px] w-full transition-all cursor-pointer text-sm font-medium px-3 rounded-xl ${
              router === item.linkPath
                ? "text-white bg-slate-800 py- font-bold"
                : "text-gray-600"
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
