"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import { useUserStore } from "@/store/useUserStore";
import { IoIosAdd, IoIosCloseCircle } from "react-icons/io";
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
import Loader from "@/components/loader/loader";

const ModalBuy = ({ closeModal, setIsLoading, item_target, item_url }) => {
  const buyHandler = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://motionapp-backend.vercel.app/shop/avatar",
        { item_target: item_target, item_url: item_url },
        { withCredentials: true }
      );
      useUserStore.getState().updateUserProfile(item_url);
      toast.success(`Penukaran berhasil!`);
      setIsLoading(false);
      console.log(response);
      closeModal();
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
      closeModal();
    }
  };
  return (
    <>
      <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
      <div
        className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
        style={{ "--delay": 0 + "s" }}
      >
        <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoIosCloseCircle
            onClick={closeModal}
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
          />
          <h3 className="text-xl font-semibold mb-2">
            Tukar {item_target} poin dengan avatar?
          </h3>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti asperiores nisi veritatis unde et?
          </p>
          <button
            type="button"
            onClick={buyHandler}
            className={`${ButtonStyleColor("bg-green-600")} w-full`}
          >
            Beli!
          </button>
        </div>
      </div>
    </>
  );
};

export default function page() {
  const [isLoading, setIsLoading] = useState(false);

  const userData = useUserStore((state) => state.userData);

  const [modalBuy, setModalBuy] = useState(false);
  const [currentBuy, setCurrentBuy] = useState(null);
  const toggleModalBuy = (item) => {
    setCurrentBuy(item);
    setModalBuy(true);
  };

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  return (
    <>
      {isLoading && <Loader />}

      {modalBuy && currentBuy && (
        <ModalBuy
          setIsLoading={setIsLoading}
          closeModal={() => setModalBuy(false)}
          item_target={currentBuy.itemTarget}
          item_url={currentBuy.itemUrl}
        />
      )}
      <div className="max-w-screen-md mx-auto mt-24 mb-16">
        <div
          className="w-full mt-12 text-center mb-6 animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          <p className="text-xl font-semibold mb-1">Selamat Datang!</p>
          <h2 className="text-4xl font-bold mb-4">Toko Penukaran</h2>
          <p>
            Tukarkan poin tantanganmu dengan avatar yang akan ditampilkan di
            papan peringkat. Poin tidak akan berkurang setelah proses penukaran.
            Perbanyak latihan untuk mendapatkan lebih banyak poin dan membuka
            avatar selanjutnya!
          </p>
        </div>
        <div
          className="flex justify-center items-center animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          {/* Jumlah Poin */}
          <div className="flex gap-4 justify-center items-center">
            <div className="text-lg font-semibold">Poin Tantangan</div>
            <div className="relative w-40 h-16 flex-none ">
              <Image src={`/assets/icon/plate.png`} alt="" fill sizes="100%" />
              <div className="absolute inset-0 flex gap-2 items-center justify-start px-3 sm:px-4">
                <div className="flex justify-center items-center gap-1">
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/assets/icon/target.png"
                      alt="challenge icon"
                      fill
                      sizes="100%"
                    />
                  </div>
                  <div className="text-xl font-semibold">
                    {userData && <>{userData.challenge_point}</>}{" "}
                    <span className="text-lg font-normal">pt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Penukaran sertifikat */}
        </div>
        {/* Penukaran avatar */}
        <div
          className="mt-8 flex flex-wrap justify-center gap-y-1 sm:gap-y-2 gap-x-6 animate-slideIn opacity-0"
          style={{ "--delay": 0.5 + "s" }}
        >
          <div
            onClick={() => {
              toggleModalBuy({
                itemTarget: 20,
                itemUrl: "/assets/icon/avamen.jpg",
              });
            }}
            className={`relative sm:w-24 sm:h-24 w-20 h-20  mt-6 ${
              userData?.challenge_point < 20
                ? "filter grayscale"
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                20 Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div className="sm:h-16 sm:w-16 h-14 w-14 relative">
                  <Image
                    src="/assets/icon/avamen.jpg"
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              toggleModalBuy({
                itemTarget: 40,
                itemUrl: "/assets/icon/avamored.jpg",
              });
            }}
            className={`relative sm:w-24 sm:h-24 w-20 h-20 mt-6 ${
              userData?.challenge_point < 40
                ? "filter grayscale "
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                40 Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div className="sm:h-16 sm:w-16 h-14 w-14 relative">
                  <Image
                    src="/assets/icon/avamored.jpg"
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              toggleModalBuy({
                itemTarget: 100,
                itemUrl: "/assets/icon/avashadow.jpg",
              });
            }}
            className={`relative sm:w-24 sm:h-24 w-20 h-20 mt-6 ${
              userData?.challenge_point < 100
                ? "filter grayscale "
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                100 Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div className="sm:h-16 sm:w-16 h-14 w-14 relative">
                  <Image
                    src="/assets/icon/avashadow.jpg"
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              toggleModalBuy({
                itemTarget: 150,
                itemUrl: "/assets/icon/avabeluga.png",
              });
            }}
            className={`relative sm:w-24 sm:h-24 w-20 h-20 mt-6 ${
              userData?.challenge_point < 150
                ? "filter grayscale "
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                150 Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox2.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div className="sm:h-16 sm:w-16 h-14 w-14 relative">
                  <Image
                    src="/assets/icon/avabeluga.png"
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              toggleModalBuy({
                itemTarget: 300,
                itemUrl: "/assets/icon/avawerewolf.jpg",
              });
            }}
            className={`relative sm:w-24 sm:h-24 w-20 h-20 mt-6 ${
              userData?.challenge_point < 300
                ? "filter grayscale "
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                300 Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox2.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div className="sm:h-16 sm:w-16 h-14 w-14 relative">
                  <Image
                    src="/assets/icon/avawerewolf.jpg"
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              toggleModalBuy({
                itemTarget: 500,
                itemUrl: "/assets/icon/avadoge.jpg",
              });
            }}
            className={`relative sm:w-24 sm:h-24 w-20 h-20 mt-6 ${
              userData?.challenge_point < 500
                ? "filter grayscale "
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                500 Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox3.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div className="sm:h-16 sm:w-16 h-14 w-14 relative">
                  <Image
                    src="/assets/icon/avadoge.jpg"
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              toggleModalBuy({
                itemTarget: 700,
                itemUrl: "/assets/icon/avazom.jpg",
              });
            }}
            className={`relative sm:w-24 sm:h-24 w-20 h-20 mt-6 ${
              userData?.challenge_point < 700
                ? "filter grayscale "
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                700 Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox3.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div className="sm:h-16 sm:w-16 h-14 w-14 relative">
                  <Image
                    src="/assets/icon/avazom.jpg"
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
