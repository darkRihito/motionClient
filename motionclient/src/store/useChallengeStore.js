import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
      clearAnswers: () =>
        set(() => ({
          answers: {},
        })),
    }),
    {
      name: "challenge-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const useChallengeInfoStore = create((set) => ({
  questionCount: 0,
  countdown: 3600,
  decrementCountdown: () =>
    set((state) => ({ countdown: state.countdown - 1 })),
  resetCountdown: (value) => set({ countdown: value }),
  setQuestionCount: (value) => set({ questionCount: value }),
  setCountdown: (newCountdown) => set({ countdown: newCountdown }),
}));

const useQuestionStore = create((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
}));

const fetchData = async ({ type }) => {
  try {
    const [startChallengeResponse, questionResponse] = await Promise.all([
      axios.post(`https://motionapp-backend.vercel.app/challenge/start/${type}`, "", {
        withCredentials: true,
      }),
      axios.get(`https://motionapp-backend.vercel.app/question/question/${type}`, {
        withCredentials: true,
      }),
    ]);
    const startTime = new Date(startChallengeResponse.data.data.start_time);
    const currentDateTime = new Date();
    const differenceInSeconds = Math.floor(
      (currentDateTime - startTime) / 1000
    );
    let timeLeft = Math.max(0, 7200 - differenceInSeconds);
    useChallengeInfoStore.getState().setCountdown(timeLeft);
    useQuestionStore.getState().setQuestions(questionResponse.data.data);
    if (JSON.stringify(useAnswerStore.getState().answers) === "{}") {
      useQuestionStore.getState().questions.forEach((element) => {
        useAnswerStore.getState().setAnswer(element._id, "");
      });
    }
    useChallengeInfoStore
      .getState()
      .setQuestionCount(questionResponse.data.data.length);
  } catch (error) {
    console.error(error);
    toast.error(
      `${error.response?.data.message || "An unexpected error occurred"}!`
    );
    router.back();
    window.location.reload();
  }
};

export { useAnswerStore, useQuestionStore, useChallengeInfoStore, fetchData };
