import Image from "next/image";
import Scripter from "./ScriptOne";

export default function GoogleTranslate() {
  return (
    <div className="fixed top-32 right-0 z-50 translate-x-[7.5rem] hover:translate-x-0 cursor-pointer transition-all">
      <div className=" rounded-tl-full rounded-bl-full bg-white py-2 pl-2 pr-4 shadow-md w-44">
        <div className="flex items-center gap-x-3">
          <div>
            <Image
              width={1000}
              height={1000}
              alt=""
              src="/assets/google.png"
              className="w-8 h-8 ml-2"
            />
          </div>

          <Scripter />
        </div>
      </div>
    </div>
  );
}
