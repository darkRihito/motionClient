"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore"; // Assuming you have a user store
import { IoIosCloseCircle } from "react-icons/io";
import Loader from "@/components/loader/loader"; // Assuming you have a Loader component
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
import toast from "react-hot-toast";

const Shop = () => {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalBuy, setModalBuy] = useState(false);
  const [currentBuy, setCurrentBuy] = useState(null);
  const userData = useUserStore((state) => state.userData);
  const [timeLeft, setTimeLeft] = useState({});
  const updateUserPoints = useUserStore((state) => state.updateUserPoints);

  useEffect(() => {
    const fetchDailyAvatars = async () => {
      try {
        const response = await axios.get(
          "https://motionapp-backend.vercel.app/shop/dailyavatars",
          { withCredentials: true }
        );
        const sortedAvatars = response.data.data.sort(
          (a, b) => a.points - b.points
        );
        setAvatars(sortedAvatars);
      } catch (error) {
        console.error("Failed to fetch daily avatars:", error);
      }
    };

    fetchDailyAvatars();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextReset = new Date();
      nextReset.setHours(24, 0, 0, 0); // Set next reset to midnight

      const difference = nextReset - now;
      const timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };

      setTimeLeft(timeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleModalBuy = (item) => {
    setCurrentBuy(item);
    setModalBuy(true);
  };

  const closeModal = () => {
    setModalBuy(false);
    setCurrentBuy(null);
  };

  const buyAvatar = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://motionapp-backend.vercel.app/shop/avatar",
        { item_target: currentBuy.points, item_url: currentBuy.icon },
        { withCredentials: true }
      );
      const newPoints = userData.challenge_point - currentBuy.points;
      useUserStore.getState().updateUserProfile(currentBuy.icon); // Update the user profile
      toast.success('Avatar purchased successfull');
      updateUserPoints(newPoints);
      setIsLoading(false);
      closeModal();
    } catch (error) {
      setIsLoading(false);
      toast.error('Failed to purchase avatar');

    }
  };

  return (
    <div className="max-w-screen-md mx-auto mt-24 mb-16">
      {isLoading && <Loader />}
      <div className="w-full mt-12 text-center mb-6">
        <p className="text-xl font-semibold mb-1">Welcome</p>
        <h2 className="text-4xl font-bold mb-4">Exchange Store</h2>
        <p>
          Redeem your challenge points for an avatar that will be displayed on
          the leaderboard. Your points will not decrease after the redemption
          process. Practice more to earn additional points and unlock the next
          avatar!
        </p>
        <p className="mt-4">
          Time until next reset:{" "}
          <span className="text-3xl font-bold text-ternary">
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          <div className="text-lg font-semibold">Current Point</div>
          <div className="relative w-40 h-16 flex-none">
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
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-y-1 sm:gap-y-2 gap-x-6">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            onClick={
              userData?.challenge_point >= avatar.points
                ? () => toggleModalBuy(avatar)
                : null
            }
            className={`relative sm:w-24 sm:h-24 w-20 h-20 mt-6 ${
              userData?.challenge_point < avatar.points
                ? "cursor-not-allowed"
                : "cursor-pointer hover:scale-105"
            }`}
          >
            <div className="relative -bottom-2 flex gap-2 h-full items-end justify-center">
              <h3 className="text-xl font-semibold text-yellow-300 bg-yellow-950 p-0.5 rounded-md z-20">
                {avatar.points} Pt
              </h3>
            </div>
            <Image src={`/assets/icon/shopbox.png`} alt="" fill sizes="100%" />
            <div className="absolute inset-0 flex gap-2 items-center justify-center">
              <div className="flex justify-center items-center gap-1">
                <div
                  className={`sm:h-16 sm:w-16 h-14 w-14 relative ${
                    userData?.challenge_point < avatar.points ? "blur-sm" : ""
                  }`}
                >
                  <Image
                    src={`${avatar.icon}`}
                    alt="challenge icon"
                    fill
                    sizes="100%"
                  />
                  {userData?.challenge_point < avatar.points && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <h3 className="text-3xl font-bold text-white">?</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalBuy && currentBuy && (
        <>
          <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
          <div
            className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-100"
            style={{ "--delay": "0s" }}
          >
            <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <IoIosCloseCircle
                onClick={closeModal}
                className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
              />
              <h3 className="text-xl font-semibold mb-2">
                Exchange {currentBuy.points} points for an avatar?
              </h3>
              <button
                type="button"
                onClick={buyAvatar}
                className={`${ButtonStyleColor("bg-green-600")} w-full`}
              >
                Buy
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
