"use client"
import React from "react";
import Image from "next/image";

// Provider
import { useModal } from "@/provider/modalprovider/modalprovider";

export default function page() {
  const { openModal } = useModal();

  return (
    <>
      <div className="max-w-screen-md mx-auto mt-24 mb-16">
        <div
          className="animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          <div className="w-full mt-12 text-center">
            <p className="text-xl font-semibold mb-1">Selamat Datang!</p>
            <h2 className="text-4xl font-bold mb-4">Lobi Tantangan</h2>
            <p>
              Anda dapat mengambil tantangan tersedia dan menyelesaikannya untuk
              meningkatkan progress dan mendapatkan poin. Persiapkan dengan
              matang!
            </p>
          </div>
        </div>
        <div className="mt-8 p-6 sm:grid grid-cols-5 grid-rows-2 gap-6 space-y-6 sm:space-y-0">
          <div className="row-span-2 col-span-2">
            <div
              className={`bg-white/75 backdrop-blur-lg sm:h-full h-[11rem] rounded-2xl p-6 text-xl sm:text-2xl text-white flex sm:flex-col gap-4 animate-zoom opacity-0 cursor-pointer`}
              style={{ "--delay": 0.5 + "s" }} onClick={() => openModal(<div className="">Some modal content</div>)}
            >
              <div className="relative aspect-square h-full sm:h-auto sm:w-full sm:order-2">
                <Image alt="" fill src="/assets/icon/selectionc.png" />
              </div>
              <div className="text-[#D93644]">
                <div className="sm:order-1">Seleksi</div>
                <p className="text-sm font-normal">
                  Tes terlebih dahulu untuk mengukur tingkat kemampuanmu!
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div
              className="bg-white/75 backdrop-blur-lg h-[11rem] rounded-2xl p-6 text-xl sm:text-2xl text-white flex gap-4 animate-zoom opacity-0"
              style={{ "--delay": 0.75 + "s" }}
            >
              <div className="relative aspect-square h-full ">
                <Image alt="" fill src="/assets/icon/dungeonc.png" />
              </div>
              <div className="text-[#7197BA]">
                <h4>Latihan</h4>
                <p className="text-sm font-normal">
                  Asah kemampuanmu dengan latihan terus menerus
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div
              className="bg-white/75 backdrop-blur-lg h-[11rem] rounded-2xl p-6 text-xl sm:text-2xl text-white flex gap-4 animate-zoom opacity-0"
              style={{ "--delay": 1 + "s" }}
            >
              <div className="relative aspect-square h-full ">
                <Image alt="" fill src="/assets/icon/abyssc.png" />
              </div>
              <div className="text-[#FF9B0B]">
                <h4>Kejuaraan</h4>
                <p className="text-sm font-normal">
                  Tantang para sesepuh untuk mengambil alih posisi papan
                  peringkat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
