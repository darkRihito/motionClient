"use client";
import React, { useEffect } from "react";

import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-24 mb-16 px-3 flex flex-col md:flex-row gap-4">
        
        <div className="flex-[4] order-2 md:order-2 bg-white/70 backdrop-blur-sm p-6 rounded-xl">
          <h3 className="text-base">
            <span className="text-2xl">1)</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem, magnam eaque? Est a temporibus
            tenetur dicta, aliquam id laudantium repellendus similique nam
            libero minus vel distinctio, molestiae optio cumque nobis?
          </h3>
          <div className="mt-4 flex flex-wrap">
            <div className="w-full sm:w-1/2 p-1 sm:p-2">
              <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 bg-light-white px-4 py-3 text-base">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-1 sm:p-2">
              <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 bg-light-white px-4 py-3 text-base">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-1 sm:p-2">
              <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 bg-light-white px-4 py-3 text-base">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-1 sm:p-2">
              <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 bg-light-white px-4 py-3 text-base">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex-[1] order-1 md:order-2 rounded-xl h-full p-4 lg:p-6">
          <div className="text-center">
            <div className="">Sisa Waktu</div>
            <div className="text-xl font-semibold">2:00:00</div>
          </div>
        </div> */}
      </div>
    </>
  );
}
