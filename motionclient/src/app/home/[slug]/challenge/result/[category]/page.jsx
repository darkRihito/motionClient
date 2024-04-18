"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Styles
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
// Store
import { useTestResult } from "@/store/useTestResultStore";

export default function page() {
  const { result } = useTestResult();

  const [modalQuestionView, setModalQuestionView] = useState(false);

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);

  return (
    <>
      {result ? (
        <>
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
                    {result.answers.map((item, index) => (
                      <a
                        key={item.question_id}
                        href={`#${index}`}
                        onClick={() => {
                          setModalQuestionView(false);
                        }}
                        className={`rounded-lg w-14 aspect-square gap-3 flex-col relative flex justify-center items-center ${
                          item.is_correct
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
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
                <div className="flex-[4] order-2 md:order-2"></div>
                <div className="flex-[1] order-1 md:order-2 ">
                  <div className="w-full grid grid-cols-3 gap-2 justify-center items-center mt-4">
                    {result.answers.map((item, index) => (
                      <a
                        key={item.question_id}
                        href={`#${index}`}
                        className={`rounded-lg w-full aspect-square gap-3 flex-col relative flex justify-center items-center ${
                          item.is_correct
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
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
                {result ? (
                  <>
                    <form className="flex flex-col gap-6">
                      {result.answers.map((item, index) => (
                        <div
                          id={index}
                          key={item.question_id}
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
                              {["A", "B", "C", "D"].map((option, index) => (
                                <div key={index} className="w-full">
                                  <label
                                    htmlFor={item.question_id}
                                    className={`flex flex-1 items-center justify-center text-center h-12 p-4 cursor-pointer border rounded-lg ${
                                      item.user_answer ===
                                        item.correct_answer &&
                                      option === item.correct_answer
                                        ? "border-green-400 bg-green-400 text-white"
                                        : item.user_answer === option &&
                                          item.user_answer !=
                                            item.correct_answer
                                        ? "border-red-400 bg-red-400 text-white"
                                        : ""
                                    }`}
                                  >
                                    {option.toUpperCase()}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                      <a href="../../challenge">
                        <button
                          type="button"
                          className={`${ButtonStyleColor(
                            "bg-green-600 hover:bg-green-700"
                          )} w-full mt-8`}
                        >
                          Kembali!
                        </button>
                      </a>
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
      ) : null}
    </>
  );
}
