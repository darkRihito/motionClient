import React from "react";
import Image from "next/image";
// Styles
import background from "@/styles/background/background.module.scss";

export default function page() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="relative w-[32rem] h-[36rem] flex-none">
          <Image src="/assets/icon/explanation.png" alt="" fill sizes="100%" />
          <div className="absolute z-20 w-full h-full flex flex-col items-center justify-between py-16">
            {/* Status */}
            <div className="text-4xl font-semibold text-yellow-950">
              Explanation
            </div>
            <div className="">
              
            </div>
            <div
              className={`mt-6 bg-bkg1 p-2 px-6 border-4 border-yellow-950 rounded-full text-white text-xl ${background.patternBackground}`}
            >
              Continue
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
