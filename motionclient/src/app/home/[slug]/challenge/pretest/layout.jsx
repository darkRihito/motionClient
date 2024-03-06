"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
// Store
import {
  useChallengeStore,
  useQuestionStore,
  useChallengeInfo,
} from "@/store/useChallengeStore";

// Extracted API call for starting the challenge
async function startChallenge() {
  const response = await axios.post(
    "https://motionapp-backend.vercel.app/challenge/start/pretest",
    "",
    {
      withCredentials: true,
    }
  );
  return response.data.data;
}

// Extracted API call for fetching questions
async function fetchQuestions() {
  const response = await axios.get(
    "https://motionapp-backend.vercel.app/question/question/pretest",
    {
      withCredentials: true,
    }
  );
  return response.data.data;
}

export default function Layout({ children }) {
  const router = useRouter();
  const { setIsFinished, setType, setCountdownFromResponse, setQuestionCount } =
    useChallengeInfo();

  useEffect(() => {
    async function fetchData() {
      try {
        const challengeInfo = await startChallenge();
        const startTime = new Date(challengeInfo.start_time);
        const currentDateTime = new Date();
        const differenceInSeconds = Math.floor(
          (currentDateTime - startTime) / 1000
        );
        let timeLeft = Math.max(0, 7200 - differenceInSeconds);

        if (timeLeft === 0) {
          console.log("END QUIZ");
          // Consider adding logic to handle the end of the quiz, such as redirecting the user or showing a message.
        } else {
          setCountdownFromResponse(timeLeft);
          setType("pretest");
          setIsFinished(false);

          try {
            const questions = await fetchQuestions();
            useQuestionStore.getState().setQuestions(questions);
            setQuestionCount(questions.length);
          } catch (error) {
            console.error("Error fetching questions:", error);
            toast.error("There was an error fetching the questions!");
          }
        }
      } catch (error) {
        console.error(error);
        router.push("/challenge"); // Ensure the path is correctly specified based on your routing setup
        toast.error(
          `${error.response?.data.message || "An unexpected error occurred"}!`
        );
      }
    }

    fetchData();
  }, []);

  return <>{children}</>;
}
