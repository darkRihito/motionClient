"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Icon
import { IoIosCloseCircle } from "react-icons/io";
// Component
import { ButtonStyle, ButtonStyleColor } from "@/components/mybutton/mybutton";
// Store
import { useChallengeInfoStore } from "@/store/useChallengeStore";
import { useUserStore } from "@/store/useUserStore";

const ModalPreTest = ({ closeModal }) => {
  const { userData } = useUserStore();
  const router = useRouter();

  const startHandler = () => {
    if (
      userData?.is_doing_challenge != "free" &&
      userData?.is_doing_challenge != "pretest"
    ) {
      toast.error(`Sedang berada dalam aktivitas lain!`);
    } else if (
      userData?.is_doing_challenge === "free" &&
      userData?.pretest_done === false
    ) {
      router.push("challenge/pretest");
    } else if (
      userData?.is_doing_challenge === "pretest" &&
      userData?.pretest_done === false
    ) {
      router.push("challenge/pretest");
    } else {
      console.log("uwu")
    }
  };
  return (
    <>
      {userData && (
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
              {userData.pretest_done ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">See Result?</h3>
                  <p className="mb-4">
                    You have completed the challenge. Click "Confirm" to view
                    your detailed performance and progress.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      router.push("challenge/result/pretest");
                    }}
                    className={`${ButtonStyleColor("bg-green-600")} w-full`}
                  >
                    Confirm!
                  </button>
                </>
              ) : !userData.pretest_done ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">
                    Are you ready to start the Pretest?
                  </h3>
                  <p className="mb-4">
                    You will have 2 hours to complete 25 Structure questions and
                    15 Written Expression questions. You won't be able to
                    perform other activities while taking the Pretest. Click
                    "Confirm" to begin.
                  </p>
                  <button
                    type="button"
                    onClick={startHandler}
                    className={`${ButtonStyleColor("bg-green-600")} w-full`}
                  >
                    Confirm!
                  </button>
                </>
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const ModalLatihan = ({ closeModal }) => {
  const { userData } = useUserStore();
  const router = useRouter();

  const startHandler = () => {
    if (
      userData?.is_doing_challenge != "free" &&
      userData?.is_doing_challenge != "practice"
    ) {
      toast.error(`Sedang berada dalam aktivitas lain!`);
    } else if (userData?.pretest_done === false) {
      toast.error(`Selesaikan Pretest Terlebih Dahulu!`);
    } else if (
      userData?.is_doing_challenge === "free" &&
      userData?.pretest_done === true
    ) {
      router.push("challenge/practice");
    } else if (
      userData?.is_doing_challenge === "practice" &&
      userData?.pretest_done === true
    ) {
      router.push("challenge/practice");
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
            Are you ready to start Practice?
          </h3>
          <p className="mb-4">
            There is no time limit. You have 3 chances to get a wrong answer per
            round, with a total of 10 rounds and 1 question per round. Questions
            will be randomly selected from Structure and Written Expression. You
            won't be able to perform other activities while practicing. Click
            "Confirm" to begin.
          </p>
          <button
            type="button"
            onClick={startHandler}
            className={`${ButtonStyleColor("bg-green-600")} w-full`}
          >
            Confirm!
          </button>
        </div>
      </div>
    </>
  );
};

const ModalPostTest = ({ closeModal }) => {
  const { userData } = useUserStore();
  const router = useRouter();

  const startHandler = () => {
    if (
      userData?.is_doing_challenge != "free" &&
      userData?.is_doing_challenge != "posttest"
    ) {
      toast.error(`Sedang berada dalam aktivitas lain!`);
    } else if (userData?.pretest_done === false) {
      toast.error(`Selesaikan Pretest Terlebih Dahulu!`);
    } else if (
      userData?.is_doing_challenge === "free" &&
      userData?.posttest_done === false
    ) {
      router.push("challenge/posttest");
    }else {
      console.log("uwuw");
    }
  };
  return (
    <>
      {userData && (
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
              {userData.posttest_done ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">See Result?</h3>
                  <p className="mb-4">
                    You have completed the challenge.Click "Confirm" to view
                    your detailed performance and progress.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      router.push("challenge/result/posttest");
                    }}
                    className={`${ButtonStyleColor("bg-green-600")} w-full`}
                  >
                    Confirm!
                  </button>
                </>
              ) : !userData.posttest_done ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">
                    Are you ready to start the Posttest?
                  </h3>
                  <p className="mb-4">
                    You will have 2 hours to complete 25 Structure questions and
                    15 Written Expression questions. Click "Confirm" to begin.
                    You won't be able to perform other activities while taking
                    the Posttest.
                  </p>
                  <button
                    type="button"
                    onClick={startHandler}
                    className={`${ButtonStyleColor("bg-green-600")} w-full`}
                  >
                    Confirm!
                  </button>
                </>
              ) : (
                <>Loading...</>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  const { userData } = useUserStore();

  const [modalPreTest, setModalPreTest] = useState(false);
  const toggleModalPreTest = () => setModalPreTest(!modalPreTest);

  const [modalLatihan, setModalLatihan] = useState(false);
  const toggleModalLatihan = () => setModalLatihan(!modalLatihan);

  const [modalPostTest, setModalPostTest] = useState(false);
  const toggleModalPostTest = () => setModalPostTest(!modalPostTest);

  return (
    <>
      {modalPreTest ? <ModalPreTest closeModal={toggleModalPreTest} /> : null}
      {modalLatihan ? <ModalLatihan closeModal={toggleModalLatihan} /> : null}
      {modalPostTest ? (
        <ModalPostTest closeModal={toggleModalPostTest} />
      ) : null}
      <div className="max-w-screen-md mx-auto mt-24 mb-16">
        <div
          className="animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          <div className="w-full mt-12 text-center">
            <p className="text-xl font-semibold mb-1">Welcome!</p>
            <h2 className="text-4xl font-bold mb-4">Challenge Page</h2>
            <p>
              Take on the available challenges to boost your progress and earn
              points. Start with the Pretest to gauge your current skills, then
              dive into Practice sessions that adapt to your knowledge level
              with our advanced BKT algorithm. Finally, conquer the Posttest to
              see how far you’ve come. Each challenge is an opportunity to learn
              and excel. Prepare thoroughly and watch your skills soar!
            </p>
          </div>
        </div>
        <div className="mt-8 p-6 sm:grid grid-cols-5 grid-rows-2 gap-6 space-y-6 sm:space-y-0">
          <div className="row-span-2 col-span-2">
            <div
              className={`bg-white/75 backdrop-blur-lg sm:h-full h-[11rem] rounded-2xl p-6 text-xl sm:text-2xl text-white flex sm:flex-col gap-4 animate-zoom opacity-0 cursor-pointer`}
              style={{ "--delay": 0.5 + "s" }}
              onClick={toggleModalPreTest}
            >
              <div className="relative aspect-square h-full sm:h-auto sm:w-full sm:order-2">
                <Image
                  alt=""
                  fill
                  sizes="100%"
                  src="/assets/icon/selectionc.png"
                />
              </div>
              <div className="text-[#D93644]">
                <div className="sm:order-1">Pre-Test</div>
                <p className="text-sm font-normal">
                  Evaluate your initial TOEFL skills with the Pretest to
                  identify strengths and areas for improvement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div
              className={`bg-white/75 backdrop-blur-lg h-[11rem] rounded-2xl p-6 text-xl sm:text-2xl text-white flex gap-4 animate-zoom opacity-0 ${
                userData?.pretest_done ? "cursor-pointer" : "cursor-not-allowed grayscale"
              }`}
              style={{ "--delay": 0.75 + "s" }}
              onClick={userData?.pretest_done ? toggleModalLatihan : null}
            >
              <div className="relative aspect-square h-full ">
                <Image
                  alt=""
                  fill
                  sizes="100%"
                  src="/assets/icon/dungeonc.png"
                />
                {!userData?.pretest_done && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                    <Image
                      alt="Lock"
                      width={100}
                      height={100}
                      src="/assets/icon/lock.png"
                      className="grayscale"
                    />
                  </div>
                )}
              </div>
              <div className="text-[#7197BA]">
                <h4>Practice</h4>
                <p className="text-sm font-normal">
                  Improve your skills with Practice sessions using adaptive
                  difficulty, tracked by the BKT algorithm.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div
              className={`bg-white/75 backdrop-blur-lg h-[11rem] rounded-2xl p-6 text-xl sm:text-2xl text-white flex gap-4 animate-zoom opacity-0 ${
                userData?.pretest_done ? "cursor-pointer" : "cursor-not-allowed grayscale"
              }`}
              style={{ "--delay": 1 + "s" }}
              onClick={userData?.pretest_done ? toggleModalPostTest : null}
            >
              <div className="relative aspect-square h-full ">
                <Image alt="" fill sizes="100%" src="/assets/icon/abyssc.png" />
                {!userData?.pretest_done && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                    <Image
                      alt="Lock"
                      width={100}
                      height={100}
                      src="/assets/icon/lock.png"
                      className="grayscale"
                    />
                  </div>
                )}
              </div>
              <div className="text-[#FF9B0B]">
                <h4>Post-Test</h4>
                <p className="text-sm font-normal">
                  Measure your progress with the Posttest and compare it to your
                  Pretest results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
