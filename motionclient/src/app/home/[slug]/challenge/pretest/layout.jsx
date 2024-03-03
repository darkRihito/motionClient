"use client";
import React, { useEffect } from "react";
import {
  useChallengeStore,
  useQuestionStore,
  useChallengeInfo,
} from "@/store/useChallengeStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function layout({ children }) {
  const router = useRouter();
  const { setIsFinished, setType, setCountdownFromResponse } =
    useChallengeInfo();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const challengeInfo = await axios.post(
          "https://motionapp-backend.vercel.app/challenge/start/pretest",
          "",
          {
            withCredentials: true,
          }
        );
        const startTime = new Date(challengeInfo.data.data.start_time);
        const currentDateTime = new Date();
        const differenceInMilliseconds = currentDateTime - startTime;
        const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
        let timeLeft = 0;
        if (differenceInSeconds > 7200) {
          console.log("END QUIZ");
        } else {
          timeLeft = 7200 - differenceInSeconds;
        }
        setCountdownFromResponse(timeLeft);
        setType(challengeInfo.data.data.type);
        setIsFinished(false);
        try {
          const response = await axios.get(
            "https://motionapp-backend.vercel.app/question/pretestquestion",
            {
              withCredentials: true,
            }
          );
          const questions = response.data.data;
          useQuestionStore.getState().setQuestions(questions);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      } catch (error) {
        console.log(error);
        // router.push("../challenge");
        // setType("pretest");
        // setIsFinished(true);
        toast.error(`${error.response.data.message}!`);
      }
    };

    fetchData();
  }, []);
  return <>{children}</>;
}
