"use client";
import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";

// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

// Styles
import { ButtonStyleColor } from "@/components/mybutton/mybutton";

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
  // Bisa menambahkan lebih banyak objek soal di sini
];

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);
  return (
    <>
      {/* DESKRIPSI DAN WAKTU */}
      <div className="fixed block md:hidden z-20 mx-auto max-w-screen-xl w-lg top-0">
        <div className="relative w-max top-11 left-4 rounded-full bg-light-white py-3 px-4">
          <div className="text-center">
            <div className="text-xl font-semibold">2:00:00</div>
          </div>
        </div>
      </div>

      <div className="hidden md:block fixed top-0 start-0 w-full">
        <div className="relative mx-auto max-w-screen-md mt-40 flex flex-col md:flex-row gap-4">
          <div className="flex-[4] order-2 md:order-2"></div>
          <div className="flex-[1] order-1 md:order-2 rounded-xl h-20 bg-light-white flex justify-center items-center">
            <div className="text-center">
              <div className="">Sisa Waktu</div>
              <div className="text-xl font-semibold">2:00:00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto mt-40 mb-16 flex flex-col md:flex-row gap-4">
        <div className="flex-[4] order-2 space-y-2 md:order-2">
          {/* SOAL */}
          <div className="bg-light-white p-4 rounded-xl">
            <Formik
              initialValues={{
                answers: dataSoal.map(() => ""),
              }}
              onSubmit={(values, { setSubmitting }) => {
                const formattedAnswers = values.answers.map(
                  (answer, index) => ({
                    id: dataSoal[index].id,
                    selectedAnswer: answer,
                  })
                );
                alert(JSON.stringify(formattedAnswers, null, 2));
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleSubmit,
              }) => (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  {dataSoal.map((item, index) => (
                    <div
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
                          {["a", "b", "c", "d"].map((option) => (
                            <label
                              key={option}
                              htmlFor={`opt${option}-${index}`}
                              className={`flex flex-1 items-center justify-center text-center h-12 p-4 cursor-pointer border rounded-lg ${
                                values.answers[index] === option
                                  ? "border-green-400"
                                  : ""
                              }`}
                            >
                              <Field
                                id={`opt${option}-${index}`}
                                type="radio"
                                name={`answers[${index}]`}
                                value={option}
                                className="w-4 h-4 hidden peer"
                              />
                              <span className="w-full py-4 text-sm font-semibold">
                                {option.toUpperCase()}
                              </span>
                            </label>
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
                // <form className="flex flex-col" onSubmit={handleSubmit}>
                //   {dataSoal.map((item, index) => (
                //     <div
                //       key={item.id}
                //       className="bg-light-white rounded-lg w-full min-h-20 gap-3 flex relative"
                //     >
                //       <div
                //         className="text-base w-full"
                //         dangerouslySetInnerHTML={{
                //           __html: `<div style="display: flex; align-items: start;"><span style="font-size: 1.5rem; margin-right: 8px;">${
                //             index + 1
                //           })</span><div>${item.soal}</div></div>`,
                //         }}
                //       ></div>
                //       <div className="mt-4">
                //         <div id="radioadmin" className="flex gap-3">
                //           <label
                //             htmlFor="opt1"
                //             className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                //               values.answer == "a" && "border border-green-400"
                //             }`}
                //           >
                //             <div className="">
                //               <Field
                //                 id="opt1"
                //                 type="radio"
                //                 value="a"
                //                 name="answer"
                //                 className="w-4 h-4 hidden peer"
                //               />
                //               <span className="w-full py-4 text-sm font-semibold">
                //                 A
                //               </span>
                //             </div>
                //           </label>
                //           <label
                //             htmlFor="opt2"
                //             className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                //               values.answer == "b" && "border border-green-400"
                //             }`}
                //           >
                //             <div className="">
                //               <Field
                //                 id="opt2"
                //                 type="radio"
                //                 value="b"
                //                 name="answer"
                //                 className="w-4 h-4 hidden peer"
                //               />
                //               <span className="w-full py-4 text-sm font-semibold">
                //                 B
                //               </span>
                //             </div>
                //           </label>
                //           <label
                //             htmlFor="opt3"
                //             className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                //               values.answer == "c" && "border border-green-400"
                //             }`}
                //           >
                //             <div className="">
                //               <Field
                //                 id="opt3"
                //                 type="radio"
                //                 value="c"
                //                 name="answer"
                //                 className="w-4 h-4 hidden peer"
                //               />
                //               <span className="w-full py-4 text-sm font-semibold">
                //                 C
                //               </span>
                //             </div>
                //           </label>
                //           <label
                //             htmlFor="opt4"
                //             className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                //               values.answer == "d" && "border border-green-400"
                //             }`}
                //           >
                //             <div className="">
                //               <Field
                //                 id="opt4"
                //                 type="radio"
                //                 value="d"
                //                 name="answer"
                //                 className="w-4 h-4 hidden peer"
                //               />
                //               <span className="w-full py-4 text-sm font-semibold">
                //                 D
                //               </span>
                //             </div>
                //           </label>
                //         </div>
                //       </div>
                //     </div>
                //   ))}
                // </form>
              )}
            </Formik>
          </div>
        </div>

        <div className="flex-[1] order-1 md:order-2"></div>
      </div>
    </>
  );
}
