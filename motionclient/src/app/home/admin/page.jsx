"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Icon
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

export default function page() {
  const { setType } = useBackground();
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    setType("bg-bkg0");
    const checkScreenSize = () => {
      const isMdScreen = window.innerWidth >= 600;
      if (isMdScreen) {
        setPerPage(3);
      } else {
        setPerPage(2);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-32 mb-16">
        {/* TABS */}
        <div
          className="animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          <ul className="flex gap-4 px-6">
            <li className="relative text-lg px-4 py-2.5 rounded-xl bg-light-white cursor-pointer flex justify-center gap-2">
              <span className="relative block w-8 h-8">
                <Image fill src="/assets/icon/open-door.png" alt="" />
              </span>
              Ruangan
            </li>
            <li className="relative text-lg px-4 py-2.5 rounded-xl bg-light-white cursor-pointer flex justify-center gap-2">
              <span className="relative block w-8 h-8">
                <Image fill src="/assets/icon/documents.png" alt="" />
              </span>
              Bank Soal
            </li>
          </ul>
        </div>
        <div
          className="w-full animate-slideIn opacity-0 rounded-xl min-h-48 p-6 mt-12"
          style={{ "--delay": 0.5 + "s" }}
        >
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
              perPage: perPage,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="w-full h-48 bg-light-white rounded-xl"></div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-48 border-4 border-dashed rounded-xl flex flex-col justify-center items-center cursor-pointer">
                <IoIosAdd className="text-7xl text-gray-300" />
                <h4 className="text-lg text-gray-300 font-semibold">Tambah Ruangan</h4>
              </div>
            </SplideSlide>
          </Splide>
        </div>

        {/* TABLE */}
        <div className="flex rounded-xl min-h-48 mt-6">
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
                    <th scope="col" className="py-4 min-w-24 w-full">
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-center min-w-40 w-full hidden md:table-cell"
                    >
                      Poin Tantangan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center min-w-40 w-full hidden md:table-cell"
                    >
                      Poin Aktivitas
                    </th>
                    <th
                      scope="col"
                      className="py-4 text-center w-full md:hidden table-cell"
                    >
                      Poin
                    </th>
                    <th scope="col" className=" text-center w-full table-cell">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <th
                      scope="row"
                      className="px-6 py-3 font-medium text-center"
                    >
                      1
                    </th>
                    <td className="py-3 w-full">
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
                        <div className="flex flex-col min-w-24 w-full">
                          <div className="lg:text-base font-semibold">
                            Rihito
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-center w-full hidden md:table-cell">
                      50
                    </td>
                    <td className="py-3 text-center w-full hidden md:table-cell">
                      50
                    </td>
                    <td className=" px-4 py-3 text-center w-full md:hidden table-cell">
                      50/50
                    </td>
                    <td className="px-6 py-3 text-center w-full cursor-pointer text-red-400  hover:text-red-500 ">
                      <MdDelete className="text-2xl " />
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
