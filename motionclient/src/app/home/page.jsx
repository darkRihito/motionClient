import React from "react";
import Image from "next/image";

import { GoPerson, GoHistory } from "react-icons/go";

export default function page() {
  return (
    <>
      <div className="max-w-screen-md mx-auto h-screen mt-40">
        {/* HEADER */}
        <div className="">
          <div className="w-full mt-56 h-20 bg-white rounded-t-xl flex">
            <div className="w-44 flex-none h-full flex items-center justify-center">
              <div className="rounded-xl w-32 h-32 mb-14 bg-white relative ">
                <div className="absolute rounded-xl w-full h-full hover: z-10 hover:brightness-10 hover:bg-black-100 hover:opacity-10 cursor-pointer"></div>
                <Image
                  className="rounded-xl border-4 border-light-white"
                  fill
                  src="/assets/img/profile.jpg"
                />
              </div>
            </div>
            <div className="w-full h-full py-3">
              <p className="text-base">Good Morning,</p>
              <h4 className="text-2xl font-semibold">Rihito</h4>
            </div>
          </div>
          {/* BODY */}
          <div className="w-full p-8 bg-white rounded-b-xl flex">
            <div className="md:flex gap-8">
              <div
                className={`relative w-full lg:max-w-md flex-[2] min-w-max flex flex-col justify-center items-center rounded-xl p-6 border-2`}
              >
                <h4 className="text-2xl font-semibold mb-4">Pencapaian</h4>
                <p className="text-lg mb-2">
                  Rank: <span>Grandmaster</span>
                </p>
                {/* <p className="text-sm">
                    Title: <span>Intellectual Adept / Doctor</span>
                  </p> */}
                <div className="w-32 h-32 rounded-xl mb-2 relative">
                  <Image src="/assets/img/rank.png" alt="rank picture" fill />
                </div>
                <p>Bintang Terkumpul</p>
                <div className="flex justify-center items-center gap-2 text-2xl font-semibold mt-2 mb-4 rounded-full px-4 py-2">
                  <span className="inline-block w-12 h-12 -mt-2">
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
                  250
                </div>
                <div className="flex gap-8">
                  <div className="">
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
                  <div className="">
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
                        210 <span className="text-lg font-normal">pt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[4] py-6 pe-6 leading-6 mt-6 md:mt-0 max-w-2xl">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Status</h3>
                  <p className="">I feel happy today</p>
                </div>
                <div className="mb-2">
                  <div className="flex items-center gap-1 mb-4">
                    <GoPerson className="text-2xl" />
                    <h3 className="text-xl font-semibold">Biografi</h3>
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
                      No Telepon : <span>+6289655602145</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
