"use client";
import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Styles
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
import useAnswerStore from "@/store/useChallengeStore";

const dataSoal = [
  {
    id: 1,
    kesulitan: "mudah",
    soal: "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
    jawaban: "c",
    kategori: "grammar",
  },
  {
    id: 2,
    kesulitan: "mudah",
    soal: "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
    jawaban: "c",
    kategori: "grammar",
  },
  {
    id: 3,
    kesulitan: "mudah",
    soal: "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
    jawaban: "c",
    kategori: "grammar",
  },
  {
    id: 4,
    kesulitan: "mudah",
    soal: "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
    jawaban: "c",
    kategori: "grammar",
  },
  {
    id: 5,
    kesulitan: "mudah",
    soal: "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
    jawaban: "c",
    kategori: "grammar",
  },
];

export default function page() {
  const { answers, setAnswer } = useAnswerStore();
  const [modalQuestionView, setModalQuestionView] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answers);
  };
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);
  return (
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
                {dataSoal.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${index}`}
                    onClick={() => {
                      setModalQuestionView(false);
                    }}
                    className={`rounded-lg w-14 aspect-square gap-3 flex-col relative flex justify-center items-center ${
                      answers[item.id]
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
              <div className="text-xl font-semibold">2:00:00</div>
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
            <div className="flex-[4] order-2 md:order-2"></div>
            <div className="flex-[1] order-1 md:order-2 ">
              <div className="rounded-xl h-20 bg-light-white flex justify-center items-center">
                <div className="text-center">
                  <div className="">Sisa Waktu</div>
                  <div className="text-xl font-semibold">2:00:00</div>
                </div>
              </div>
              <div className="w-full grid grid-cols-3 gap-2 justify-center items-center mt-4">
                {dataSoal.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${index}`}
                    className={`rounded-lg w-full aspect-square gap-3 flex-col relative flex justify-center items-center ${
                      answers[item.id]
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
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {dataSoal.map((item, index) => (
                <div
                  id={index}
                  key={item.id}
                  className="bg-light-white rounded-lg w-full min-h-20 gap-3 flex flex-col relative"
                >
                  <div
                    className="text-base w-full"
                    dangerouslySetInnerHTML={{
                      __html: `<div style="display: flex; align-items: start;"><span style="font-size: 1.5rem; margin-right: 8px;">${
                        index + 1
                      })</span><div>${item.soal}</div></div>`,
                    }}
                  ></div>
                  <div className="mt-2">
                    <div id="radioadmin" className="flex gap-3">
                      {["a", "b", "c", "d"].map((option, index) => (
                        <div key={index} className="w-full">
                          <label
                            htmlFor={item.id}
                            onClick={() => {
                              if (answers[item.id] === option) {
                                setAnswer(item.id, undefined);
                              } else {
                                setAnswer(item.id, option);
                              }
                            }}
                            className={`flex flex-1 items-center justify-center text-center h-12 p-4 cursor-pointer border rounded-lg ${
                              answers[item.id] === option
                                ? "border-green-400 bg-green-400 text-white"
                                : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name={item.id}
                              value={option}
                              checked={answers[item.id] === option}
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
              ))}
              <button
                type="submit"
                className={`${ButtonStyleColor(
                  "bg-green-600 hover:bg-green-700"
                )} w-full mt-8`}
              >
                Selesaikan!
              </button>
            </form>
          </div>
        </div>
        <div className="flex-[1] order-1 md:order-2"></div>
      </div>
    </>
  );
}
