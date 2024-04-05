"use client";
import React, { useState, useEffect } from "react";
// Store
import { fetchData } from "@/store/usePracticeStore";
import { fetchUserData } from "@/store/useUserStore";
// Component
import Loader from "@/components/loader/loader";
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";


export default function Layout({ children }) {
  const { setType } = useBackground();

  const [isLoading, setIsLoading] = useState(false);
  

  const [audioRef, setAudioRef] = useState(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    const fetchDataAndUser = async () => {
      try {
        await fetchData();
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    setType("bg-bkg3");
    fetchDataAndUser();

    const audio = new Audio('/assets/music/practice.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    setAudioRef(audio);

    const storedUserInteraction = localStorage.getItem('userInteracted');
    if (storedUserInteraction) {
      setIsUserInteracted(JSON.parse(storedUserInteraction));
      playAudioAfterUserInteraction(audio);
    }

    const handleUserInteraction = () => {
      setIsUserInteracted(true);
      localStorage.setItem('userInteracted', JSON.stringify(true));
      playAudioAfterUserInteraction(audio);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && audioRef && isUserInteracted) {
        playAudioAfterUserInteraction(audioRef);
      } else if (audioRef) {
        audioRef.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [audioRef, isUserInteracted]);

  const playAudioAfterUserInteraction = (audio) => {
    audio.play().catch((error) => {
      if (error.name === 'NotAllowedError') {
        console.error('Autoplay is not allowed by the browser');
      } else {
        console.error('Error playing audio:', error);
      }
    });
  };

  return isLoading ? <Loader /> : <>{children}</>;
}
