import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import toast from "react-hot-toast";
import { data } from "autoprefixer";

const usePracticeStore = create((set) => ({
  is_finished: false,
  is_winning: false,
  star_collected: 0,
  result_category: "",
  is_correct: false,
  stage: 0,
  correct: 0,
  wrong: 0,
  health: 0,
  point_gain: 0,
  point_add: 0,
  question: {
    id: "",
    question: "",
    difficulty: "",
  },
  explanation: "",
  user_answer: "",
  bkt: {
    knowledge: 0,
    // p_learn: 0,
    // p_guess: 0,
  },
  is_continue: false,
  is_answered: false,
  prev_question: {
    id: "",
    question: "",
    difficulty: "",
  },
  setIsFinished: (is_finished) => set({ is_finished }),
  setIsWinning: (is_winning) => set({ is_winning }),
  setStarCollected: (star_collected) => set({ star_collected }),
  setresultCategory: (result_category) => set({ result_category }),
  setStage: (stage) => set({ stage }),
  setIsCorrect: (is_correct) => set({ is_correct }),
  setCorrect: (correct) => set({ correct }),
  setWrong: (wrong) => set({ wrong }),
  setHealth: (health) => set({ health }),
  setPointGain: (point_gain) => set({ point_gain }),
  setPointAdd: (point_add) => set({ point_add }),
  setQuestion: (question) => set({ question }),
  setPrevQuestion: (prev_question) => set({ prev_question }),
  setExplanation: (explanation) => set({ explanation }),
  setUserAnswer: (user_answer) => set({ user_answer }),
  setBkt: (bkt) => set({ bkt }),
  setContinue: (is_continue) => set({ is_continue }),
  setAnswered: (is_answered) => set({ is_answered }),
  setKnowledge: (knowledge) =>
    set((state) => ({
      bkt: { ...state.bkt, knowledge },
    })),
}));

const submitAnswer = async (payload) => {
  try {
    const response = await axios.post(
      "https://motionapp-backend.vercel.app/practice/submit",
      payload,
      {
        withCredentials: true,
      }
    );
    const responsedata = response.data.data;
    console.log(responsedata);
    usePracticeStore.getState().setIsCorrect(responsedata.isCorrect);
    usePracticeStore.getState().setPointAdd(responsedata.addPoint);
    const isFinished = responsedata.isFinished;
    usePracticeStore.getState().setExplanation(responsedata.explanation);
    if (!isFinished) {
      // Introducing a delay of 3 seconds
      // await new Promise(resolve => setTimeout(resolve, 3000));

      // Introducing a delay of 3 seconds before executing the subsequent lines

      // if(usePracticeStore.getState().is_continue){
      usePracticeStore.getState().setContinue(false);
      usePracticeStore.getState().setAnswered(false);
      usePracticeStore.getState().setStage(responsedata.curStage);
      usePracticeStore.getState().setCorrect(responsedata.curCorrect);
      usePracticeStore.getState().setQuestion({
        id: responsedata.curQuestion.questionId,
        question: responsedata.curQuestion.question,
        difficulty: responsedata.curQuestion.difficulty,
      });
      usePracticeStore.getState().setKnowledge(responsedata.bkt.curKnowledge);
      let health = 3 - (responsedata.curStage - responsedata.curCorrect);
      let wrong = 3 - health;
      usePracticeStore.getState().setHealth(health);
      usePracticeStore.getState().setWrong(wrong);
      usePracticeStore.getState().setPointGain(responsedata.curPoint);
      // }
    } else {
      usePracticeStore.getState().setIsFinished(responsedata.isFinished);
      usePracticeStore.getState().setIsWinning(responsedata.isWinning);
      usePracticeStore
        .getState()
        .setresultCategory(responsedata.resultCategory);
      usePracticeStore.getState().setPointAdd(responsedata.addPoint);
      usePracticeStore.getState().setIsCorrect(responsedata.isCorrect);
      usePracticeStore.getState().setKnowledge(responsedata.bkt.curKnowledge);
      usePracticeStore.getState().setCorrect(responsedata.curCorrect);
      usePracticeStore.getState().setPointGain(responsedata.curPoint);
      usePracticeStore.getState().setStarCollected(responsedata.starGain);
      let health = 3 - (responsedata.curStage - responsedata.curCorrect);
      let wrong = 3 - health;
      usePracticeStore.getState().setWrong(wrong);
    }

    return response;
  } catch (error) {
    console.error(error);
    toast.error(
      `${error.response?.data.message || "An unexpected error occurred"}!`
    );
  }
};

const fetchData = async () => {
  try {
    const [startPracticeResponse] = await Promise.all([
      axios.post(`https://motionapp-backend.vercel.app/practice/start`, "", {
        withCredentials: true,
      }),
    ]);

    const dataPractice = startPracticeResponse.data.data;
    usePracticeStore.getState().setStage(dataPractice.stage);
    usePracticeStore.getState().setCorrect(dataPractice.correct);
    usePracticeStore.getState().setQuestion({
      id: dataPractice.question.id,
      question: dataPractice.question.question,
      difficulty: dataPractice.question.difficulty,
    });

    usePracticeStore.getState().setPrevQuestion({
      id: dataPractice.question.id,
      question: dataPractice.question.question,
      difficulty: dataPractice.question.difficulty,
    });
    usePracticeStore.getState().setKnowledge(dataPractice.knowledge);
    let health = 3 - (dataPractice.stage - dataPractice.correct);
    let wrong = 3 - health;
    usePracticeStore.getState().setHealth(health);
    usePracticeStore.getState().setWrong(wrong);
    usePracticeStore.getState().setPointGain(dataPractice.point_gain);
    // usePracticeStore.getState().setContinue(true);
  } catch (error) {
    console.error(error);
    toast.error(
      `${error.response?.data.message || "An unexpected error occurred"}!`
    );
  }
};

export { usePracticeStore, fetchData, submitAnswer };
