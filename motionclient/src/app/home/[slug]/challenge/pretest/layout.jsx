"use client";
import React, { useEffect } from "react";
import useAnswerStore from "@/store/useAnswerStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function layout({ children }) {
  const router = useRouter();
  const setCountdownFromResponse = useAnswerStore(
    (state) => state.setCountdownFromResponse
  );
  const setType = useAnswerStore((state) => state.setType);
  const setIsFinished = useAnswerStore((state) => state.setIsFinished);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/challenge/start/pretest",
          "",
          {
            withCredentials: true,
          }
        );
        console.log(response);
        const startTime = new Date(response.data.data.start_time);
        const currentDateTime = new Date();
        const differenceInMilliseconds = currentDateTime - startTime;
        const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
        console.log(differenceInSeconds);
        let timeLeft = 0;
        if (differenceInSeconds > 7200) {
          console.log("END QUIZ");
        } else {
          timeLeft = 7200 - differenceInSeconds ;
        }
        setCountdownFromResponse(timeLeft);
        setType(response.data.data.type);
        setIsFinished(response.data.data.is_finished);
      } catch (error) {
        console.log(error);
        router.push("challenge/");
        toast.error(`${error.response.data.message}!`);
      }
    };

    fetchData(); // Call the async function inside useEffect

    // You might want to pass an empty dependency array to useEffect if this effect should only run once on mount
  }, []);
  return <>{children}</>;
}
