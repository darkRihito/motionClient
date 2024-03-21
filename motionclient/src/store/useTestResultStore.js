import { create } from "zustand";
import axios from "axios";

const useTestResult = create((set) => ({
  result: null,
  setResult: (res) => set({ result: res }),
}));

function processAndCombineData(questionsResponse, answersResponse) {
  const questionsById = questionsResponse.reduce((acc, curr) => {
    acc[curr._id] = curr;
    return acc;
  }, {});

  const combinedAnswers = answersResponse.map((userAnswer) => {
    const questionDetails = questionsById[userAnswer.question_id];
    return {
      question_id: userAnswer.question_id,
      question: questionDetails.question,
      correct_answer: questionDetails.answer,
      user_answer: userAnswer.answer,
      is_correct: userAnswer.is_correct,
    };
  });
  return {
    answers: combinedAnswers,
  };
}

const fetchData = async ({ category }) => {
  try {
    const [Response] = await Promise.all([
      axios.get(`http://localhost:8000/challenge/detail/${category}`, {
        withCredentials: true,
      }),
    ]);
    const combinedData = processAndCombineData(
      Response.data.data.questions,
      Response.data.data.challenge.answer
    );
    useTestResult.setState({
      result: combinedData,
    });
  } catch (error) {
    console.error("Failed:", error.message);
  }
};

export { useTestResult, fetchData };
