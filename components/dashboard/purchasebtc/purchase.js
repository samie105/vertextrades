import React from "react";
import { deets } from "./purchasedeets";
import Image from "next/image";
import Link from "next/link";

export default function Purchase() {
  return (
    <div>
      <div className="md:grid-cols-3 grid grid-cols-1 p-4">
        {deets.map((info, idx) => (
          <div
            key={idx}
            className=" shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl p-4 m-2"
          >
            <div className="image lg:h-40 w-full">
              <Image
                src={info.image}
                alt=""
                className="rounded-lg w-full"
                width={300}
                height={300}
              />
            </div>
            <div className="button flex justify-center">
              <Link href={info.link} passHref>
                {" "}
                <button className=" bg-slate-900 font-bold text-white rounded-full px-4 py-3 mt-6 text-sm">
                  Purchase from {info.name}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
