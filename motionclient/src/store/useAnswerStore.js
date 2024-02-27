import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAnswerStore = create(
  persist(
    (set) => ({
      answers: {},
      setAnswer: (questionId, answer) =>
        set((state) => {
          const newState = { ...state.answers };

          newState[questionId] = answer; // Set new answer otherwise
          return { answers: newState };
        }),
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAnswerStore;
