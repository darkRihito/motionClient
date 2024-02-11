"use client";
import React, { useEffect, useState } from "react";

// Components
import { GlobalBackground } from "@/components/globalbackground/globalbackground";

// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);
  return (
    <>
      {/* DESKRIPSI DAN WAKTU */}
      <div className="fixed block md:hidden z-20 mx-auto max-w-screen-xl w-lg top-0">
        <div className="relative w-max top-11 left-4 rounded-full bg-light-white py-3 px-4">
          <div className="text-center">
            <div className="text-xl font-semibold">2:00:00</div>
          </div>
        </div>
      </div>

      <div className="hidden md:block fixed top-0 start-0 w-full">
        <div className="relative mx-auto max-w-screen-md mt-40 flex flex-col md:flex-row gap-4">
          <div className="flex-[4] order-2 md:order-2"></div>
          <div className="flex-[1] order-1 md:order-2 rounded-xl h-20 bg-light-white flex justify-center items-center">
            <div className="text-center">
              <div className="">Sisa Waktu</div>
              <div className="text-xl font-semibold">2:00:00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto mt-40 mb-16 flex flex-col md:flex-row gap-4">
        <div className="flex-[4] order-2 space-y-4 md:order-2">
          {/* SOAL */}
          <div className="bg-light-white p-6  rounded-xl">
            <h3 className="text-base">
              <span className="text-2xl">1)</span> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quidem, magnam eaque? Est a
              temporibus tenetur dicta, aliquam id laudantium repellendus
              similique nam libero minus vel distinctio, molestiae optio cumque
              nobis?
            </h3>
            <div className="mt-4 flex flex-wrap">
              <div className="w-full sm:w-1/2 p-1 sm:p-2">
                <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 border px-4 py-3 text-base">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-1 sm:p-2">
                <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 border px-4 py-3 text-base">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-1 sm:p-2">
                <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 border px-4 py-3 text-base">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-1 sm:p-2">
                <div className="flex flex-col sm:justify-center sm:items-center rounded-lg sm:min-h-24 border px-4 py-3 text-base">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 w-full rounded-xl bg-light-white p-6 text-center text-xl">
            Selesaikan!
          </div>
        </div>

        <div className="flex-[1] order-1 md:order-2"></div>
      </div>
    </>
  );
}
