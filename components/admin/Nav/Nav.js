import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="w-full px-4 py-4 fixed z-50 shadow-muted shadow-lg bg-white">
      <div className="flex items-center justify-between">
        <div className="name-section font-bold text-lg ">
          Brokersite | Admin
        </div>
        <div className="name-section">
          <Link passHref href="/dashboard">
            <div className="bg-red-50/80 p-3 rounded-full">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-red-700"
              >
                <path d="M4 5h12v7H4V5z" />
                <path
                  fillRule="evenodd"
                  d="M1 3.5A1.5 1.5 0 012.5 2h15A1.5 1.5 0 0119 3.5v10a1.5 1.5 0 01-1.5 1.5H12v1.5h3.25a.75.75 0 010 1.5H4.75a.75.75 0 010-1.5H8V15H2.5A1.5 1.5 0 011 13.5v-10zm16.5 0h-15v10h15v-10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
