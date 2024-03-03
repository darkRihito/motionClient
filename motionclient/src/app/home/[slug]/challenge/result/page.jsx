"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Styles
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
// Store
import {
  useChallengeStore,
  useQuestionStore,
  useChallengeInfo,
} from "@/store/useChallengeStore";

const newdata = {
  quiz_id: "65ce16656a7216a4d00890e8",
  total_correct: 2,
  total_point: 66.66,
  answers: [
    {
      question_id: "65e2e336fabb977fd755dc8c",
      question:
        "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
      answer: "A",
      user_answer: "C",
      is_correct: false,
    },
    {
      question_id: "65e2e336fabb977fd755dc8d",
      question:
        "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
      answer: "C",
      user_answer: "C",
      is_correct: true,
    },
    {
      question_id: "65e2e336fabb977fd755dc8e",
      question:
        "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
      answer: "C",
      user_answer: "C",
      is_correct: true,
    },
  ],
  end_time: "2024-03-03T16:29:08.824Z",
  isFinished: true,
  _id: "65e4a5542299630f7bf422bc",
  createdAt: "2024-03-03T16:29:08.825Z",
  updatedAt: "2024-03-03T16:29:08.825Z",
  start_time: "2024-03-03T16:29:08.826Z",
};

function processAndCombineData(useranswer, question) {
  // Convert the array of questions into an object for easy lookup by question ID
  const questionsById = question.question.reduce((acc, curr) => {
    acc[curr._id] = curr;
    return acc;
  }, {});

  // Map over the user's answers to add question details and correctness
  const combinedAnswers = useranswer.data.answers.map((userAnswer) => {
    const questionDetails = questionsById[userAnswer.question_id];
    return {
      question_id: userAnswer.question_id,
      question: questionDetails.question,
      correct_answer: questionDetails.answer,
      user_answer: userAnswer.answer,
      is_correct: userAnswer.answer === questionDetails.answer,
    };
  });

  // Construct the new combined data structure
  return {
    quiz_id: useranswer.data.quiz_id,
    total_correct: useranswer.data.total_correct,
    total_point: useranswer.data.total_point,
    answers: combinedAnswers,
    end_time: useranswer.data.end_time,
    isFinished: useranswer.data.isFinished,
    _id: useranswer.data._id,
    createdAt: useranswer.data.createdAt,
    updatedAt: useranswer.data.updatedAt,
    start_time: useranswer.data.start_time,
  };
}

export default function page() {
  //   const { answers, setAnswer } = useChallengeStore();
  //   const { questions } = useQuestionStore();
  const [modalQuestionView, setModalQuestionView] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);

  useEffect(() => {
    // Simulate fetching useranswer and question data
    // In a real application, replace the following lines with actual data fetching logic
    const useranswer = {
      success: true,
      message: "Quiz finished",
      data: {
        quiz_id: "65ce16656a7216a4d00890e8",
        total_correct: 2,
        total_point: 66.66,
        answers: [
          {
            question_id: "65e2e336fabb977fd755dc8c",
            answer: "A",
          },
          {
            question_id: "65e2e336fabb977fd755dc8d",
            answer: "C",
          },
          {
            question_id: "65e2e336fabb977fd755dc8e",
            answer: "C",
          },
        ],
        end_time: "2024-03-03T16:29:08.824Z",
        isFinished: true,
        _id: "65e4a5542299630f7bf422bc",
        createdAt: "2024-03-03T16:29:08.825Z",
        updatedAt: "2024-03-03T16:29:08.825Z",
        start_time: "2024-03-03T16:29:08.826Z",
      },
    };

    const question = {
      success: true,
      message: "successful",
      question: [
        {
          _id: "65e2e336fabb977fd755dc8c",
          difficulty: "easy",
          question:
            "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
          answer: "C",
          category: ["pretest", "any"],
        },
        {
          _id: "65e2e336fabb977fd755dc8d",
          difficulty: "easy",
          question:
            "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
          answer: "C",
          category: ["pretest", "any"],
        },
        {
          _id: "65e2e336fabb977fd755dc8e",
          difficulty: "easy",
          question:
            "<p>I am planning to go to the party tonight but it is not raining. Its raining very hard now. I wish ...</p><p>A. It had stopped</p><p>B. It stops</p><p>C. It would stop</p><p>D. It will stop</p>",
          answer: "C",
          category: ["pretest", "any"],
        },
      ],
    };

    // Process and combine data after fetching
    const combinedData = processAndCombineData(useranswer, question);
    setQuizResults(combinedData);
    console.log(quizResults);
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  useEffect(() => {
    if (quizResults) {
      console.log("Quiz results:", quizResults);
    }
  }, [quizResults]); // This effect depends on quizResults

  //   const [quizResults, setQuizResults] = useState(null);
  //   const combinedData = processAndCombineData(useranswer, question);
  //   setQuizResults(combinedData);

  return (
    <>
      {quizResults ? (
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
                    {quizResults.answers.map((item, index) => (
                      <a
                        key={item.question_id}
                        href={`#${index}`}
                        className={`rounded-lg w-full aspect-square gap-3 flex-col relative flex justify-center items-center ${
                          item.is_correct
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
                    {quizResults.answers.map((item, index) => (
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
                {quizResults ? (
                  <>
                    <form className="flex flex-col gap-6">
                      {quizResults.answers.map((item, index) => (
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
