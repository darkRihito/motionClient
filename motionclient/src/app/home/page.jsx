"use client"
import React, {useState} from "react";
import Image from "next/image";

// Icons
import { MdModeEditOutline } from "react-icons/md";
import { useModal } from "@/provider/modalprovider/modalprovider";

export default function page() {

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow((prevState) => !prevState);

   const { openModal } = useModal();

  return (
    <>
      <div className="max-w-screen-md mx-auto mt-64 mb-16 animate-slideIn opacity-0" style={{ "--delay": 0.25 + "s" }}>
        {/* HEADER */}
        <div className="">
          <div className={`w-full h-20 bg-light-white rounded-t-xl flex`}>
            <div className="w-44 flex-none h-full flex items-center justify-center">
              <div className="rounded-xl w-32 h-32 mb-14 bg-light-white relative ">
                <div className="absolute rounded-xl w-full h-full hover: z-10 hover:brightness-10 hover:bg-black-100 hover:opacity-10 cursor-pointer"></div>
                <Image
                  className="rounded-xl border-4 border-light-white"
                  fill alt=""
                  src="/assets/img/profile.jpg"
                />
              </div>
            </div>
            <div className="w-full h-full py-3">
              <p className="text-base">Hello,</p>
              <h4 className="text-3xl font-semibold">
                Rihito <span className="text-base text-blue-500">,GM</span>
              </h4>
            </div>
          </div>

          {/* BODY */}
          <div className="w-full p-6 lg:p-8 bg-light-white rounded-b-xl flex">
            <div className="md:flex gap-8">
              <div
                className={`relative h-max w-full flex-[2] min-w-max flex flex-col justify-center items-center rounded-xl px-6 py-8 border-2`}
              >
                <h4 className="text-xl font-semibold mb-2">Pencapaian</h4>
                <p className="text-lg mb-2">
                  Rank: <span>Grandmaster</span>
                </p>
                <div className="w-32 h-32 rounded-xl mb-2 relative">
                  <Image src="/assets/img/rank.png" alt="rank picture" fill />
                </div>
                <p>Bintang Terkumpul</p>
                <div className="flex justify-center items-center gap-2 text-2xl font-semibold mt-2 mb-4 rounded-full px-4 py-2">
                  <span className="inline-block w-10 h-10 -mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      id="star"
                    >
                      <polygon
                        fill="#ffd759"
                        points="102.6 494.1 137 320.1 6 200.5 182.1 179.5 255.3 17.9 329.7 178.9 506 198.6 375.9 319.2 411.6 492.9 256.8 406.4"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="256 256 6 200.5 137 320.1"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="256 256 102.6 494.1 256.8 406.4 411.6 492.9"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="256 256 506 198.6 375.9 319.2"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="255.3 17.9 256 256 329.7 178.9"
                      ></polygon>
                    </svg>
                  </span>
                  12
                </div>
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg">
                    <p className="text-sm">Poin Tantangan</p>
                    <div className="flex justify-center items-center gap-1">
                      <div className="h-8 w-8 relative">
                        <Image
                          src="/assets/icon/target.png"
                          alt="challenge icon"
                          fill
                        />
                      </div>
                      <div className="text-xl font-semibold">
                        210 <span className="text-lg font-normal">pt</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg cursor-pointer hover:bg-gray-100" onClick={() => openModal(<div className="">Some modal content</div>)}>
                    <p className="text-sm">Poin Keaktifan</p>
                    <div className="flex justify-center items-center gap-1">
                      <div className="h-8 w-8 relative">
                        <Image
                          src="/assets/icon/active.png"
                          alt="active icon"
                          fill
                        />
                      </div>
                      <div className="text-xl font-semibold">
                        30 <span className="text-lg font-normal">pt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[4] py-6 pe-6 leading-6 mt-6 md:mt-0 max-w-2xl">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/assets/icon/feather-pen.png"
                          alt=""
                          fill
                        ></Image>
                      </div>
                      <h3 className="text-xl font-semibold">Status</h3>
                    </div>
                    <MdModeEditOutline className="text-xl place-self-start text-gray-600 cursor-pointer" />
                  </div>
                  <p className="">I feel happy today</p>
                </div>
                <div className="mb-2">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/assets/icon/user.png"
                          alt=""
                          fill
                        ></Image>
                      </div>
                      <h3 className="text-xl font-semibold">Biografi</h3>
                    </div>
                    <MdModeEditOutline className="text-xl place-self-start text-gray-600 cursor-pointer" />
                  </div>
                  <p>
                    Salam kenal! Aku adalah Rihito, Asalku dari Purwakarta.
                    Hobiku bermain game dan menonton anime. Saat ini saya sedang
                    menempuh perkuliahan di UPI Ilmu Komputer. Cita-citaku
                    menjadi programmer.
                  </p>
                </div>
                <div className="text-base">
                  <ul className="space-y-1 text-gray-500 list-none list-inside">
                    <li>
                      Nama Lengkap : <span>Muhammad Rafi Shidiq</span>
                    </li>
                    <li>
                      Nomor Identitas : <span>2004222</span>
                    </li>
                    <li>
                      Email : <span>muhammadrafishidiq@gmail.com</span>
                    </li>
                    <li>
                      No Telepon : <span>+62-8965-5602-145</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* HISTORY */}
          <div className="mt-6">
            <div className="w-full md:flex flex-col  px-6 bg-light-white py-8 rounded-2xl border">
              <div className="">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-10 h-10">
                    <Image src="/assets/icon/history.webp" alt="" fill></Image>
                  </div>
                  <h3 className="text-xl font-semibold">Riwayat</h3>
                </div>
                <p className="max-w-2xl">
                  Berikut adalah trak rekor perolehan skor beserta poin dan
                  sumbernya.
                </p>
                <div className="my-4 text-sm sm:text-base">
                  <ul className="text-gray-500 list-none list-inside flex flex-wrap gap-x-8 justify-end">
                    <li>
                      Tantangan Diselesaikan : <span>1</span>
                    </li>
                    <li>
                      Rata-Rata Skor : <span>50</span>
                    </li>
                  </ul>
                  <p className="mt-4 max-w-2xl text-base text-red-400 font-medium">
                    Hasilnya belum cukup memuaskan nih. Ayo semangat tingkatkan
                    lagi dengan perbanyak latihan!
                  </p>
                </div>
              </div>
              <div className="">
                <div className="relative overflow-x-auto rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Skor
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Poin
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 hidden sm:table-cell"
                        >
                          Kategori
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 hidden sm:table-cell"
                        >
                          Tanggal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-light-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          DBMS (database management system) Dasar
                        </th>
                        <td className="px-6 py-4">50</td>
                        <td className="px-6 py-4">50</td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          Challenge
                        </td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          12/04/2023
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
