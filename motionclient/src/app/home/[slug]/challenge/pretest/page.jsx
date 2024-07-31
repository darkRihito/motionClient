"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Styles
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
// Store
import {
  useAnswerStore,
  useQuestionStore,
  useChallengeInfoStore,
} from "@/store/useChallengeStore";
import { useUserStore, fetchData } from "@/store/useUserStore";

export default function page() {
  const router = useRouter();

  const { answers, setAnswer, clearAnswers } = useAnswerStore();
  const { userData } = useUserStore();

  const { countdown, decrementCountdown, questionCount } =
    useChallengeInfoStore();
  const { questions } = useQuestionStore();
  const [modalFinish, setmodalFinish] = useState({
    isOpened: false,
    score: 0,
  });

  const sendAnswer = async () => {
    try {
      const response = await axios.post(
        "https://motionapp-backend.vercel.app/challenge/end/pretest",
        { answer: answers, questionCount: questionCount },
        { withCredentials: true }
      );
      clearAnswers(); // Use Zustand action within component logic
      console.log("Post request successful:", response);
      setmodalFinish((prevState) => ({
        ...prevState,
        isOpened: true,
        score: response.data.data.score,
      }));
      useUserStore.getState().updateUserPretest();
    } catch (error) {
      console.error("Error making post request:", error);
    }
  };

  useEffect(() => {
    let timer;

    if (userData) {
      if (countdown > 0 && userData.is_doing_challenge === "pretest") {
        timer = setInterval(() => {
          decrementCountdown();
        }, 1000);
      } else if (countdown < 1 && userData.is_doing_challenge === "pretest") {
        sendAnswer();
      } else if (userData.is_doing_challenge != "pretest") {
        router.back();
      }
    }

    return () => clearInterval(timer);
  }, [countdown, decrementCountdown, userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    sendAnswer();
  };

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  const [modalQuestionView, setModalQuestionView] = useState(false);

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);

  return (
    <>
      {modalFinish.isOpened ? (
        <div>
          <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
          <div
            className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
            style={{ "--delay": 0 + "s" }}
          >
            <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Pre-Test Selesai!
              </h3>
              <p className="text-xl text-center mb-2">
                skor akurasi kamu sebesar
              </p>
              <p className="text-2xl mb-8 text-center font-semibold">
                {modalFinish.score} %
              </p>
              <button
                onClick={() => {
                  router.push("../challenge/result/pretest");
                  setmodalFinish(false);
                  // useUserStore.getState().updateUserChallengeStatus();
                  // useUserStore.getState().updateUserChallengeStatus();
                }}
                className={`${ButtonStyleColor(
                  "bg-green-600 hover:bg-green-700"
                )} `}
              >
                Lihat Hasil!
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {modalQuestionView ? (
        <div>
          <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
          <div
            className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
            style={{ "--delay": 0 + "s" }}
          >
            <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-xl font-semibold mb-2">Pilih Soal</h3>
              <div className="w-full flex flex-wrap gap-2 justify-center items-center">
                {questions.map((item, index) => (
                  <a
                    key={item._id}
                    href={`#${index}`}
                    onClick={() => {
                      setModalQuestionView(false);
                    }}
                    className={`rounded-lg w-14 aspect-square gap-3 flex-col relative flex justify-center items-center ${
                      answers[item._id]
                        ? "bg-green-500 text-white"
                        : "bg-light-white "
                    }`}
                  >
                    {index + 1}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="max-w-screen-md mx-auto mt-40 mb-16 flex flex-col md:flex-row gap-4">
        <div className="fixed block md:hidden z-20 mx-auto max-w-screen-xl w-lg top-0 left-0">
          <div className="relative w-max top-11 left-3 rounded-lg bg-light-white py-3 px-4">
            <div className="text-center">
              <div className="text-xl font-semibold">{`${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`}</div>
            </div>
          </div>
          <button
            onClick={() => {
              setModalQuestionView(!modalQuestionView);
            }}
            className="relative w-max top-12 left-3 rounded-lg bg-light-white py-2 px-4"
          >
            <div className="text-center">
              <div className="text-base">List Soal</div>
            </div>
          </button>
        </div>
        <div className="hidden md:block fixed top-0 start-0 w-full">
          <div className="relative mx-auto max-w-screen-md mt-40 flex flex-col md:flex-row gap-4">
            <div className="z-10 flex-[4] order-2 md:order-2"></div>
            <div className="flex-[1] order-1 md:order-2 ">
              <div className="rounded-xl h-20 bg-light-white flex justify-center items-center">
                <div className="text-center">
                  <div className="">Sisa Waktu</div>
                  <div className="text-xl font-semibold">{`${hours
                    .toString()
                    .padStart(2, "0")}:${minutes
                    .toString()
                    .padStart(2, "0")}:${seconds
                    .toString()
                    .padStart(2, "0")}`}</div>
                </div>
              </div>
              <div className="w-full grid grid-cols-3 gap-2 justify-center items-center mt-4">
                {questions.map((item, index) => (
                  <a
                    key={item._id}
                    href={`#${index}`}
                    className={`rounded-lg w-full aspect-square gap-3 flex-col relative flex justify-center items-center ${
                      answers[item._id]
                        ? "bg-green-500 text-white"
                        : "bg-light-white "
                    }`}
                  >
                    {index + 1}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[4] order-2 space-y-2 md:order-2">
          <div className="bg-light-white p-4 rounded-xl">
            {questions.length != 0 ? (
              <>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  {questions.map((item, index) => (
                    <React.Fragment key={item._id}>
                      {index === 0 && (
                        <div className="bg-light-white rounded-lg w-full min-h-20 gap-3 flex flex-col p-4">
                          <h2 className="text-2xl font-bold mb-4">Structure</h2>
                          <p className="mb-4">
                            <strong>Directions:</strong> Questions 1-15 are
                            incomplete sentences. Beneath each sentence you will
                            see four words or phrases, marked (A), (B), (C), and
                            (D). Choose the one word or phrase that best
                            completes the sentence. Then, on your answer sheet,
                            find the number of the question and fill in the
                            space that corresponds to the letter of the answer
                            you have chosen. Fill in the space so that the
                            letter inside the oval cannot be seen.
                          </p>
                          <p className="mb-4">
                            Look at the following examples.
                          </p>

                          <div className="mb-4">
                            <h3 className="font-semibold">Example I</h3>
                            <p>
                              The president _____ the election by a landslide.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                              <li>(A) won</li>
                              <li>(B) he won</li>
                              <li>(C) yesterday</li>
                              <li>(D) fortunately</li>
                            </ul>
                            <p>
                              The sentence should read, “The president won the
                              election by a landslide.” Therefore, you should
                              choose (A).
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold">Example II</h3>
                            <p>When _____ the conference?</p>
                            <ul className="list-disc list-inside ml-4">
                              <li>(A) the doctor attended</li>
                              <li>(B) did the doctor attend</li>
                              <li>(C) the doctor will attend</li>
                              <li>(D) the doctor's attendance</li>
                            </ul>
                            <p>
                              The sentence should read, “When did the doctor
                              attend the conference?” Therefore, you should
                              choose (B).
                            </p>
                          </div>
                        </div>
                      )}

                      {index === 15 && (
                        <div className="bg-light-white rounded-lg w-full min-h-20 gap-3 flex flex-col p-4">
                          <h2 className="text-2xl font-bold mb-4">
                            Written Expression
                          </h2>
                          <p className="mb-4">
                            <strong>Directions:</strong> In questions 16-40,
                            each sentence has four underlined words or phrases.
                            The four underlined parts of the sentence are marked
                            (A), (B), (C), and (D). Identify the one underlined
                            word or phrase that must be changed in order for the
                            sentence to be correct. Then, on your answer sheet,
                            find the number of the question and fill in the
                            space that corresponds to the letter of the answer
                            you have chosen.
                          </p>
                          <p className="mb-4">
                            Look at the following examples.
                          </p>

                          <div className="mb-4">
                            <h3 className="font-semibold">Example I</h3>
                            <p>
                              The four string on a violin are tuned in fifths.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                              <li>(A) The four string</li>
                              <li>(B) on a violin</li>
                              <li>(C) are tuned</li>
                              <li>(D) in fifths</li>
                            </ul>
                            <p>
                              The sentence should read, “The four strings on a
                              violin are tuned in fifths.” Therefore, you should
                              choose (A).
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold">Example II</h3>
                            <p>
                              The research for the book Roots taking Alex Haley
                              twelve years.
                            </p>
                            <ul className="list-disc list-inside ml-4">
                              <li>(A) The research</li>
                              <li>(B) for the book Roots</li>
                              <li>(C) taking</li>
                              <li>(D) Alex Haley twelve years</li>
                            </ul>
                            <p>
                              The sentence should read, “The research for the
                              book Roots took Alex Haley twelve years.”
                              Therefore, you should choose (C).
                            </p>
                          </div>
                        </div>
                      )}

                      <div
                        id={index}
                        className="bg-light-white rounded-lg w-full min-h-20 gap-3 flex flex-col relative"
                      >
                        <div
                          className="text-base w-full"
                          dangerouslySetInnerHTML={{
                            __html: `<div style="display: flex; align-items: start;"><span style="font-size: 1.5rem; margin-right: 8px;">${
                              index + 1
                            })</span><div>${item.question}</div></div>`,
                          }}
                        ></div>
                        <div className="mt-2">
                          <div id="radioadmin" className="flex gap-3">
                            {["a", "b", "c", "d"].map((option, optionIndex) => (
                              <div key={optionIndex} className="w-full">
                                <label
                                  htmlFor={item._id}
                                  onClick={() => {
                                    if (answers[item._id] === option) {
                                      setAnswer(item._id, undefined);
                                    } else {
                                      setAnswer(item._id, option);
                                    }
                                  }}
                                  className={`flex flex-1 items-center justify-center text-center h-12 p-4 cursor-pointer border rounded-lg ${
                                    answers[item._id] === option
                                      ? "border-green-400 bg-green-400 text-white"
                                      : ""
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name={item._id}
                                    value={option}
                                    checked={answers[item._id] === option}
                                    readOnly
                                    className="w-4 h-4 opacity-0 absolute"
                                  />
                                  {option.toUpperCase()}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  <button
                    type="submit"
                    className={`${ButtonStyleColor(
                      "z-30 bg-green-600 hover:bg-green-700"
                    )} w-full mt-8`}
                  >
                    Selesaikan!
                  </button>
                </form>
              </>
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
        <div className="flex-[1] order-1 md:order-2"></div>
      </div>
    </>
  );
}
