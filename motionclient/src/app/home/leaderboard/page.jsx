"use client";
import React, {useEffect} from "react";
import Image from "next/image";

import ContainerBlur from "@/styles/containerblur/containerblur.module.scss";
import { GlobalBackground } from "@/components/globalbackground/globalbackground";

export default function page() {
  return (
    <>
      <GlobalBackground type="/assets/bkg/background01.webp" />

      <div className="max-w-screen-md mx-auto mt-24 mb-16">
        <div className="w-full mt-12 text-center mb-14 animate-slideIn opacity-0" style={{ "--delay": 0.25 + "s" }}>
          <p className="text-xl font-semibold mb-1">Selamat Datang!</p>
          <h2 className="text-4xl font-bold mb-4">Papan Peringkat</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            corporis, dolor commodi placeat debitis vel voluptas quas vitae
            itaque quibusdam! Natus doloremque error debitis perspiciatis dicta
            iste asperiores!
          </p>
        </div>
        <div className="min-h-44 aspect-[3/1] w-full flex justify-center items-center gap-4 lg:gap-6 mb-14 px-2 lg:px-0 animate-slideIn opacity-0" style={{ "--delay": 0.5 + "s" }}>
          <div className="rounded-lg border-2 w-56 h-[90%] flex flex-col items-center gap-2.5 px-4 py-6">
            <div className="h-16 w-16 md:h-20 flex-none md:w-20 rounded-full relative overflow-hidden border-2">
              <Image className="" fill src="" alt="Profile pict" />
            </div>
            <h4 className="lg:text-lg font-semibold text-center">Unknown<span></span></h4>
          </div>
          <div className="rounded-lg border-2 w-56 h-full flex flex-col items-center gap-2.5 px-4 py-6">
            <div className="h-20 w-20 flex-none md:h-24 md:w-24 rounded-full relative overflow-hidden border-2">
              <Image className="" fill src="/assets/img/profile.jpg" alt="Profile pict" />
            </div>
            <h4 className="lg:text-lg font-semibold text-center">Rihito<span> ,GM</span></h4>
          </div>
          <div className="rounded-lg border-2 w-56 h-[90%] flex flex-col items-center gap-2.5 px-4 py-6">
            <div className="h-16 w-16 md:h-20 flex-none md:w-20 rounded-full relative overflow-hidden border-2">
              <Image className="" fill src="" alt="Profile pict" />
            </div>
            <h4 className="lg:text-lg font-semibold text-center">Unknown<span></span></h4>
          </div>
        </div>
        <div className="px-2 lg:px-0 animate-slideIn opacity-0" style={{ "--delay": 0.75 + "s" }}>
          <div className={`relative overflow-x-auto rounded-lg`}>
            <table
              className={`w-full text-sm text-left rtl:text-right bg-light-white`}
            >
              <thead className={`text-xs uppercase `}>
                <tr>
                  <th scope="col" className="px-6 py-4 w-8">
                    No
                  </th>
                  <th scope="col" className="py-4 min-w-32">
                    Nama
                  </th>
                  <th
                    scope="col"
                    className="py-4 text-center hidden md:table-cell"
                  >
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-4 text-center min-w-32">
                    Bintang
                  </th>
                  <th
                    scope="col"
                    className="px-6 text-center py-4 hidden md:table-cell"
                  >
                    Penyelesaian
                  </th>
                  <th scope="col" className="px-6 py-4 hidden lg:table-cell">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 lg:py-4 py-3 font-medium text-center"
                  >
                    1
                  </th>
                  <td className="lg:py-4 py-3">
                    <div className="flex items-center gap-2 ">
                      <div className="">
                        <div className="border h-10 w-10 md:h-11 md:w-11 rounded-full relative overflow-hidden">
                          <Image
                            fill
                            src="/assets/img/profile.jpg"
                            alt="Profile pict"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col min-w-36">
                        <div className="lg:text-base font-semibold">
                          Rihito<span className="text-sm"> ,GM</span>
                        </div>
                        <div className="text-sm">Maestro</div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell">
                    <div className="flex items-center justify-center">
                      <div className="h-10 w-10 md:h-11 md:w-11 rounded-lg relative">
                        <Image
                          src="/assets/img/rank.png"
                          alt="rank picture"
                          fill
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 lg:py-4 py-3 text-center">50</td>
                  <td className="px-6 lg:py-4 py-3 hidden md:table-cell text-center">
                    1
                  </td>
                  <td className="px-6 lg:py-4 py-3 hidden lg:table-cell">
                    Im happy today{" "}
                    <span className="hidden">
                      ipsam magni debitis neque, animi error officia sit
                      ducimus. Animi minus quo ut fugit in ipsam veniam quaerat
                      iusto quibusdam.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
