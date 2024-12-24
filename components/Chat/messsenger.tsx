import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Messsenger() {
  return (
    <Link
      href={"#"}
      className="bg-green-500 fixed bottom-5 right-5 text-white z-50 h-14 flex items-center justify-center w-14 rounded-full"
    >
      {" "}
      <FontAwesomeIcon icon={faWhatsapp} />
    </Link>
  );
}
