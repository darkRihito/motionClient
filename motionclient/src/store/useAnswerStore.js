import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAnswerStore = create(
  persist(
    (set) => ({
      answers: {},
      type: '',
      isFinished: '',
      countdown: 3600,
      decrementCountdown: () => set((state) => ({ countdown: state.countdown - 1 })),
      resetCountdown: (value) => set({ countdown: value }),
      setIsFinished: (value) => set({ isFinished: value }),
      setType: (value) => set({ type: value }),
      setCountdownFromResponse: (newCountdown) => set({ countdown: newCountdown }),
      setAnswer: (questionId, answer) =>
        set((state) => {
          const newState = { ...state.answers };

          newState[questionId] = answer; // Set new answer otherwise
          return { answers: newState };
        }),
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAnswerStore;
