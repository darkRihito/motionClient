import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { redirect } from 'next/navigation'

import axios from "axios";
import toast from "react-hot-toast";

const useAnswerStore = create(
  persist(
    (set) => ({
      answers: {},
      setAnswer: (questionId, answer) =>
        set((state) => {
          const newState = { ...state.answers };
          newState[questionId] = answer;
          return { answers: newState };
        }),
    }),
    {
      name: "challenge-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const useChallengeInfoStore = create((set) => ({
  type: "",
  isFinished: "",
  questionCount: 0,
  countdown: 3600,
  decrementCountdown: () =>
    set((state) => ({ countdown: state.countdown - 1 })),
  resetCountdown: (value) => set({ countdown: value }),
  setIsFinished: (value) => set({ isFinished: value }),
  setType: (value) => set({ type: value }),
  setQuestionCount: (value) => set({ questionCount: value }),
  setCountdown: (newCountdown) => set({ countdown: newCountdown }),
}));

const useQuestionStore = create((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
}));

const fetchData = async () => {
  try {
    const [startChallengeResponse, questionResponse] = await Promise.all([
      axios.post(
        "https://motionapp-backend.vercel.app/challenge/start/pretest",
        "",
        {
          withCredentials: true,
        }
      ),
      axios.get(
        "https://motionapp-backend.vercel.app/question/question/pretest",
        {
          withCredentials: true,
        }
      ),
    ]);

    console.log(startChallengeResponse);

    const startTime = new Date(startChallengeResponse.data.data.start_time);
    const currentDateTime = new Date();
    const differenceInSeconds = Math.floor(
      (currentDateTime - startTime) / 1000
    );
    let timeLeft = Math.max(0, 7200 - differenceInSeconds);
    if (timeLeft < 1) {
      // Consider adding logic to handle the end of the quiz, such as redirecting the user or showing a message.
    } else {
      useChallengeInfoStore.getState().setCountdown(timeLeft);
      useChallengeInfoStore.getState().setType("pretest");
      useChallengeInfoStore.getState().setIsFinished(false);
    }
    useQuestionStore.getState().setQuestions(questionResponse.data.data);
    useChallengeInfoStore.getState().setQuestionCount(questionResponse.data.data.length);
  } catch (error) {
    console.error(error);
    toast.error(
      `${error.response?.data.message || "An unexpected error occurred"}!`
    );
    redirect("/challenge");
  }
};

export { useAnswerStore, useQuestionStore, useChallengeInfoStore, fetchData };
