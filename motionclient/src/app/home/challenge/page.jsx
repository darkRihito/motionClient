"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

// Icon
import { IoIosCloseCircle } from "react-icons/io";

// Component
import { ButtonStyle, ButtonStyleColor } from "@/components/mybutton/mybutton";

const ModalSeleksi = ({ closeModal }) => {
  return (
    <>
      <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
      <div className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
              style={{ "--delay": 0 + "s" }}>
        <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoIosCloseCircle
            onClick={closeModal}
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
          />
          <h3 className="text-xl font-semibold mb-2">Mulai Seleksi?</h3>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti asperiores nisi veritatis unde et?
          </p>
          <button
            type="button"
            className={`${ButtonStyleColor("bg-green-600")} w-full`}
          >
            Mulai!
          </button>
        </div>
      </div>
    </>
  );
};

const ModalLatihan = ({ closeModal }) => {
  return (
    <>
      <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
      <div className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
              style={{ "--delay": 0 + "s" }}>
        <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoIosCloseCircle
            onClick={closeModal}
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
          />
          <h3 className="text-xl font-semibold mb-2">Mulai Latihan?</h3>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti asperiores nisi veritatis unde et?
          </p>
          <button
            type="button"
            className={`${ButtonStyleColor("bg-green-600")} w-full`}
          >
            Mulai!
          </button>
        </div>
      </div>
    </>
  );
};

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  const [modalSeleksi, setModalSeleksi] = useState(false);
  const toggleModalSeleksi = () => setModalSeleksi(!modalSeleksi);

  const [modalLatihan, setModalLatihan] = useState(false);
  const toggleModalLatihan = () => setModalLatihan(!modalLatihan);

  return (
    <>
      {modalSeleksi ? <ModalSeleksi closeModal={toggleModalSeleksi} /> : null}
      {modalLatihan ? <ModalLatihan closeModal={toggleModalLatihan} /> : null}
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
              style={{ "--delay": 0.5 + "s" }}
              onClick={toggleModalSeleksi}
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
              className="bg-white/75 backdrop-blur-lg h-[11rem] rounded-2xl p-6 text-xl sm:text-2xl text-white flex gap-4 animate-zoom opacity-0 cursor-pointer"
              style={{ "--delay": 0.75 + "s" }}
              onClick={toggleModalLatihan}

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
