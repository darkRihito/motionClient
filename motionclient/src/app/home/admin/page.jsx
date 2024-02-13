"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-32 mb-16">
        {/* TABS */}
        <div className="">
          <ul className="flex gap-4 px-6">
            <li className="relative text-purple-400 text-xl px-4 py-2.5 rounded-xl  cursor-pointer">
              Ruangan
            </li>
            <li className="text-yellow-400 text-xl px-4 py-2.5 rounded-xl  cursor-pointer">
              Bank Soal
            </li>
          </ul>
        </div>

        {/* CLASS */}
        <div className="flex flex-wrap gap-4 w-full rounded-xl border min-h-48 p-6">
          <div className="h-20 w-20 bg-light-white rounded-lg"></div>
          <div className="h-20 w-20 bg-light-white rounded-lg"></div>
          <div className="h-20 w-20 bg-light-white rounded-lg"></div>
        </div>

        {/* TABLE */}
        <div className="flex rounded-xl min-h-48 border mt-6">
          <div
            className="w-full animate-slideIn opacity-0"
            style={{ "--delay": 0.75 + "s" }}
          >
            <div className={`relative overflow-x-auto rounded-lg`}>
              <table
                className={`w-full text-sm text-left rtl:text-right bg-light-white`}
              >
                <thead className={`text-xs uppercase `}>
                  <tr>
                    <th scope="col" className="px-6 py-4 w-8">
                      No
                    </th>
                    <th scope="col" className="py-4 min-w-32 w-full">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-4 text-center min-w-40 w-full hidden md:table-cell">
                      Poin Tantangan
                    </th>
                    <th scope="col" className="px-6 py-4 text-center min-w-40 w-full hidden md:table-cell">
                      Poin Aktivitas
                    </th>
                    <th scope="col" className="px-6 py-4 text-center min-w-40 w-full md:hidden table-cell">
                      Poin
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
                    <td className="lg:py-4 py-3 w-full">
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
                        <div className="flex flex-col min-w-36 w-full">
                          <div className="lg:text-base font-semibold">
                            Rihito
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 lg:py-4 py-3 text-center w-full hidden md:table-cell">
                      50
                    </td>
                    <td className="px-6 lg:py-4 py-3 text-center w-full hidden md:table-cell">
                      50
                    </td>
                    <td className="px-6 lg:py-4 py-3 text-center w-full md:hidden table-cell">
                      50
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
