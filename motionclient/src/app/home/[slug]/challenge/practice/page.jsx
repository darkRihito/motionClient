"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
// Store
import { usePracticeStore, submitAnswer } from "@/store/usePracticeStore";
// Styles
import background from "@/styles/background/background.module.scss";
import { useUserStore } from "@/store/useUserStore";
// Icons
import { IoIosCloseCircle } from "react-icons/io";

export default function page() {
  const router = useRouter();
  const userData = useUserStore((state) => state.userData);
  const practiceData = usePracticeStore();
  const updateUserPoints = useUserStore((state) => state.updateUserPoints);
  const updateUserStar = useUserStore((state) => state.updateUserStar);
  const { is_answered } = usePracticeStore();
  console.log("STORED DATA:", practiceData);

  const [loadingPrep, setLoadingPrep] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoadingPrep(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);
  const resetLoadingPrep = () => {
    setLoadingPrep(true);
    setTimeout(() => {
      setLoadingPrep(false);
    }, 1000);
  };

  const [battleState, setBattleState] = useState(false);
  const [resultState, setResultState] = useState(false);
  const [explanationState, setExplanationState] = useState(false);
  const [finishedState, setFinishedState] = useState(false);

  // BKT INFO AND CLOSE
  const [bktInfo, setBktInfo] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setBktInfo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const submit = async (answer) => {
    usePracticeStore.getState().setPrevQuestion({
      id: practiceData.question.id,
      question: practiceData.question.question,
      difficulty: practiceData.question.difficulty,
    });
    const payload = {
      question_id: practiceData.question.id,
      user_answer: answer,
      stage: practiceData.stage,
      health: practiceData.health,
      point_gain: practiceData.point_gain,
      knowledge: practiceData.bkt.knowledge,
      correct_count: practiceData.correct,
    };

    // Assume submitAnswer is an async operation
    const response = await submitAnswer(payload);

    // Set battleState to true to indicate processing
    setBattleState(true);

    // Wait for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Set battleState to false and resultState to true
    setBattleState(false);
    setResultState(true);

    // Wait for another 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Set resultState to false and explanationState to true for the explanation screen
    setResultState(false);
    setExplanationState(true);
    usePracticeStore.getState().setAnswered(true);
  };

  const afterContinue = () => {
    usePracticeStore.getState().setContinue(true);

    setExplanationState(false);
    usePracticeStore.getState().setAnswered(false);
    if (practiceData.is_finished) {
      setFinishedState(true);
      updateUserPoints(userData?.challenge_point +(practiceData?.point_gain));
      updateUserStar(userData?.star_collected +(practiceData?.star_collected));
    }
    // resetLoadingPrep();
  };

  return (
    <>
      {bktInfo && (
        <div>
          <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-black/10 backdrop-blur-sm"></div>
          <div
            className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
            style={{ "--delay": 0 + "s" }}
          >
            <div
              ref={modalRef}
              className={`relative max-w-xs w-full border-yellow-950 bg-bkg1 ${background.patternBackground} rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white`}
            >
              <h2 className="text-xl font-semibold mb-2">Info BKT</h2>
              <div className="w-full text-base">
                <div className="w-full bg-yellow-950 px-3 py-2 rounded-t-lg">
                  <p>Current Knowledge: {practiceData.bkt.knowledge}</p>
                </div>
                <div className="w-full bg-yellow-950 px-3 py-2 rounded-b-lg">
                  <p>Current Knowledge: {practiceData.question.difficulty}</p>
                </div>
                {/* <div className="w-full bg-yellow-950 px-3 py-2">
                  <p>Current PLearn: {practiceData.bkt.p_learn}</p>
                </div>
                <div className="w-full bg-yellow-950 px-3 py-2 rounded-b-lg">
                  <p>Current PGuess: {practiceData.bkt.p_guess}</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {battleState && (
        <>
          <div className="battleState">
            {" "}
            <div>
              <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-black/10 backdrop-blur-sm"></div>
              <div
                className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
                style={{ "--delay": 0 + "s" }}
              >
                <div
                  className={`relative max-w-xs rounded-xl px-4 py-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col justify-center items-center`}
                >
                  <h2 className="absolute text-2xl font-medium mb-2 animate-ping">
                    Memeriksa Jawaban
                  </h2>
                  <div className="">
                    <div className="relative aspect-square h-28 ms-2 mb-3 animate-spin">
                      {" "}
                      <Image
                        alt=""
                        fill
                        sizes="100%"
                        src="/assets/icon/battle.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </>
      )}
      {resultState && (
        <>
          <div className="resultState">
            {" "}
            <div>
              <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-black/10 backdrop-blur-sm"></div>
              <div
                className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
                style={{ "--delay": 0 + "s" }}
              >
                <div
                  className={`relative max-w-xs w-full rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white`}
                >
                  {practiceData?.is_correct ? (
                    <>
                      <div className="relative aspect-square h-64 ms-2 mb-3">
                        {" "}
                        <Image
                          alt=""
                          fill
                          sizes="100%"
                          src="/assets/icon/correct.png"
                        />
                      </div>
                      <div
                        className={`bg-bkg1 p-2 px-4 border-4 border-yellow-950 rounded-full ${background.patternBackground}`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative w-8 h-8 flex-none">
                            <Image
                              src="/assets/icon/coin.png"
                              alt=""
                              fill
                              sizes="100%"
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl ">
                            +{" "}
                            <span className="font-semibold">
                              {practiceData?.point_add} Points
                            </span>
                          </h3>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative aspect-square h-64 ms-2 mb-3">
                        {" "}
                        <Image
                          alt=""
                          fill
                          sizes="100%"
                          src="/assets/icon/incorrect.png"
                        />
                      </div>
                      <div
                        className={`bg-bkg1 p-2 px-4 border-4 border-yellow-950 rounded-full ${background.patternBackground}`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative flex items-center justify-center w-8 h-8 flex-none">
                            <div className="relative aspect-square h-6 ">
                              <Image
                                alt=""
                                fill
                                sizes="100%"
                                src="/assets/icon/heart.png"
                              />
                            </div>
                          </div>
                          <h3 className="text-lg sm:text-xl ">
                            - <span className="font-semibold">1 Point Bonus</span>
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {explanationState && (
        <>
          <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-black/10 backdrop-blur-sm"></div>
          <div
            className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
            style={{ "--delay": 0 + "s" }}
          >
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="relative w-[32rem] h-[36rem] flex-none justify-center items-start flex">
                <IoIosCloseCircle
                  onClick={() => {
                    setExplanationState(false);
                  }}
                  className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400 z-20"
                />
                <Image
                  src="/assets/icon/explanation.png"
                  alt=""
                  fill
                  sizes="100%"
                />
                <div className="absolute z-20 w-[62%] h-full flex flex-col items-center justify-between py-16">
                  {/* Status */}
                  <div className="text-4xl font-semibold text-yellow-950">
                    Explanation
                  </div>
                  <div
                    className="mt-12"
                    dangerouslySetInnerHTML={{
                      __html: `<div style="display: flex; align-items: start;"><span style="font-size: 1.5rem; margin-right: 8px;"></span><div>${practiceData.explanation}</div></div>`,
                    }}
                  ></div>
                  <div
                    onClick={afterContinue}
                    className={`mt-6 bg-bkg1 p-2 px-6 border-4 border-yellow-950 rounded-full text-white text-xl ${background.patternBackground}`}
                  >
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {finishedState ? (
        <>
          <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="relative w-[24rem] h-[24rem] flex-none">
              <Image src="/assets/icon/board.png" alt="" fill sizes="100%" />
              <div className="absolute z-20 w-full h-full flex flex-col items-center">
                <div className="text-4xl font-semibold text-yellow-950 mt-8">
                  {practiceData?.result_category}
                </div>
                <div className="mt-6">
                  <div className="flex justify-center items-center gap-2 text-2xl font-semibold rounded-full">
                    {practiceData?.star_collected === 0 && (
                      <>
                        <div className="w-12 h-12 -mt-2"></div>
                      </>
                    )}
                    {[...Array(practiceData?.star_collected)].map(
                      (_, index) => (
                        <div key={index} className="">
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
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="text-lg font-semibold text-yellow-700 mt-8">
                  Correct Answer: {practiceData?.correct}
                </div>
                <div className="text-lg font-semibold text-yellow-700">
                  Wrong Answer: {practiceData?.wrong}
                </div>
                <div className="text-xl font-semibold text-yellow-950 mt-8">
                  Point Collected
                </div>
                <div className="text-2xl font-semibold text-yellow-950 mt-2">
                  {practiceData?.point_gain} + {practiceData?.point_bonus}
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                usePracticeStore.getState().setIsFinished(false);
                router.back();
              }}
              className={`mt-6 bg-bkg1 p-3 px-8 border-4 border-yellow-950 rounded-full text-white text-xl ${background.patternBackground}`}
            >
              Finish!
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-screen-sm min-h-[80vh] mx-auto px-3 mt-40 mb-16 flex flex-col gap-4 text-white">
            <div className="">
              {practiceData ? (
                <>
                  <div
                    onClick={() => {
                      setBktInfo(true);
                    }}
                    className="flex justify-center items-center cursor-pointer"
                  >
                    {" "}
                    <div className="text-3xl font-semibold text-center">
                      STAGE {practiceData.stage + 1}
                    </div>
                    <div className="relative aspect-square h-6 ms-2 mb-3">
                      {" "}
                      <Image
                        alt=""
                        fill
                        sizes="100%"
                        src="/assets/icon/information.png"
                      />
                    </div>
                  </div>

                  {loadingPrep ? (
                    <>
                      <div className="fixed top-0 start-0 w-screen h-screen z-30 ">
                        <div
                          className={`relative max-w-xs rounded-xl px-4 py-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col justify-center items-center`}
                        >
                          <h2 className="absolute text-xl sm:text-2xl font-medium mb-2 animate-ping">
                            Menyiapkan
                          </h2>
                          <div className="">
                            <div className="relative aspect-square h-20 sm:h-28 ms-2 mb-3 animate-spin">
                              {" "}
                              <Image
                                alt=""
                                fill
                                sizes="100%"
                                src="/assets/icon/battle.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      style={{ "--delay": 0.25 + "s" }}
                      className=" animate-zoom opacity-0"
                    >
                      <div className="flex mt-6 justify-end">
                        <div className="flex justify-center items-center gap-3">
                          <div className="text-xl text-gray-100">Point Bonus</div>

                          <div className="relative w-28 h-10 sm:w-32 sm:h-12 flex-none">
                            <Image
                              src={`/assets/icon/plate.png`}
                              alt=""
                              fill
                              sizes="100%"
                            />
                            <div className="absolute inset-0 flex gap-2 items-center justify-start px-3 sm:px-4">
                              {practiceData.health > 0 && (
                                <>
                                  {[...Array(practiceData.health)].map(
                                    (_, index) => (
                                      <div
                                        key={index}
                                        className="relative aspect-square h-6 "
                                      >
                                        <Image
                                          alt=""
                                          fill
                                          sizes="100%"
                                          src="/assets/icon/heart.png"
                                        />
                                      </div>
                                    )
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-6">
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative w-8 h-8 flex-none">
                            <Image
                              src="/assets/icon/check-mark.png"
                              alt=""
                              fill
                              sizes="100%"
                            />
                          </div>
                          <h3 className="text-base sm:text-lg ">
                            Correct:{" "}
                            <span className="font-semibold">
                              {practiceData.correct}
                            </span>
                          </h3>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative w-6 h-6 flex-none">
                            <Image
                              src="/assets/icon/cross.png"
                              alt=""
                              fill
                              sizes="100%"
                            />
                          </div>
                          <h3 className="text-base sm:text-lg ">
                            Wrong:{" "}
                            <span className="font-semibold">
                              {practiceData.wrong}
                            </span>
                          </h3>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="relative w-8 h-8 flex-none">
                            <Image
                              src="/assets/icon/coin.png"
                              alt=""
                              fill
                              sizes="100%"
                            />
                          </div>
                          <h3 className="text-base sm:text-lg ">
                            Point:{" "}
                            <span className="font-semibold">
                              {practiceData.point_gain}
                            </span>
                          </h3>
                        </div>
                      </div>

                      <div className="text-white">
                        {!usePracticeStore.getState().is_continue ? (
                          <>
                            <div
                              className="mt-12"
                              dangerouslySetInnerHTML={{
                                __html: `<div style="display: flex; align-items: start;"><span style="font-size: 1.5rem; margin-right: 8px;"></span><div>${practiceData.prev_question.question}</div></div>`,
                              }}
                            ></div>
                          </>
                        ) : (
                          <>
                            <div
                              className="mt-12"
                              dangerouslySetInnerHTML={{
                                __html: `<div style="display: flex; align-items: start;"><span style="font-size: 1.5rem; margin-right: 8px;"></span><div>${practiceData.question.question}</div></div>`,
                              }}
                            ></div>
                          </>
                        )}
                      </div>

                      <div
                        id="radioadmin"
                        className="grid grid-cols-4 gap-2 sm:gap-4 mt-6"
                      >
                        {is_answered ? (
                          <>
                            <div className="relative flex items-center justify-center w-full h-14 sm:h-16 flex-none hover:scale-[105%]">
                              <img
                                src={`/assets/icon/button.png`}
                                alt=""
                                className="w-48 h-16"
                              />
                              <div
                                onClick={() => {
                                  setExplanationState(true);
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <span className="text-white text-base sm:text-xl">
                                  Penjelasan
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {["a", "b", "c", "d"].map((option, index) => (
                              <div key={index} className="relative">
                                <label
                                  htmlFor={`option-${option}`}
                                  onClick={() => {
                                    submit(option);
                                  }}
                                  className={`flex flex-1 items-center justify-center text-center cursor-pointer rounded-lg`}
                                >
                                  <input
                                    type="radio"
                                    id={`option-${option}`}
                                    name="option"
                                    value={option}
                                    readOnly
                                    className="w-4 h-4 opacity-0 absolute"
                                  />
                                  <div className="relative flex items-center justify-center w-full h-14 sm:h-16 flex-none hover:scale-[105%]">
                                    <img
                                      src={`/assets/icon/button.png`}
                                      alt=""
                                      className="w-full h-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <span className="text-white text-base sm:text-2xl">
                                        {option.toUpperCase()}
                                      </span>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </>
      )}
    </>
  );
}
