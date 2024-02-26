import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAnswerStore = create(persist(
  (set) => ({
    answers: {}, // Object to hold question IDs and their answers
    setAnswer: (questionId, answer) => set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    })),
    toggleAnswer: (questionId, answer) => set((state) => {
      // Toggle the answer if it's the same as the current one
      if (state.answers[questionId] === answer) {
        const { [questionId]: _, ...rest } = state.answers;
        return { answers: rest };
      }
      return {
        answers: {
          ...state.answers,
          [questionId]: answer,
        },
      };
    }),
    clearAnswers: () => set(() => ({ answers: {} })),
  }),
  {
    name: 'answer-storage', // name of the storage (required)
    getStorage: () => localStorage, // specify localStorage as the storage
  }
));

export default useAnswerStore;