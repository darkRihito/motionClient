import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import toast from "react-hot-toast";

// Store for answers
const useAnswerStore = create(
    persist(
      (set) => ({
        answers: {},
        setAnswer: (questionId, answer) =>
          set((state) => {
            if (questionId) {
              const newState = { ...state.answers };
              newState[questionId] = answer;
              return { answers: newState };
            }
            return state;
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

// Store for challenge information
const useChallengeInfoStore = create((set) => ({
  questionCount: 0,
  countdown: 2400,
  decrementCountdown: () =>
    set((state) => ({ countdown: state.countdown - 1 })),
  resetCountdown: (value) => set({ countdown: value }),
  setQuestionCount: (value) => set({ questionCount: value }),
  setCountdown: (newCountdown) => set({ countdown: newCountdown }),
}));

// Store for questions
const useQuestionStore = create((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
}));

const fetchData = async ({ type }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/simulation/start/${type}`,
        "",
        { withCredentials: true }
      );
      const { data } = response.data;
  
      const startTime = new Date(data.start_time);
      const currentDateTime = new Date();
      const differenceInSeconds = Math.floor((currentDateTime - startTime) / 1000);
      const totalTimeInSeconds = 2400; // 40 minutes
      const timeLeft = Math.max(0, totalTimeInSeconds - differenceInSeconds);
  
      useChallengeInfoStore.getState().setCountdown(timeLeft);
  
      const questions = data.answer.map(item => ({
        _id: item.question_id,
        question: item.question,
      }));
      useQuestionStore.getState().setQuestions(questions);
  
      if (JSON.stringify(useAnswerStore.getState().answers) === "{}") {
        questions.forEach(question => {
          if (question._id) {
            useAnswerStore.getState().setAnswer(question._id, "");
          }
        });
      }
  
      useChallengeInfoStore.getState().setQuestionCount(questions.length);
    } catch (error) {
      console.error(error);
      toast.error(`${error.response?.data.message || "An unexpected error occurred"}!`);
    }
  };

export { useAnswerStore, useQuestionStore, useChallengeInfoStore, fetchData };
