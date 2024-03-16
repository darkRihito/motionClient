"use client";
import React, { useState, useEffect } from "react";
// Store
import { fetchData } from "@/store/useChallengeStore";
import { fetchUserData } from "@/store/useUserStore";
// Component
import Loader from "@/components/loader/loader";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndUser = async () => {
      try {
        await fetchData({ type: "pretest" });
        await fetchUserData();
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataAndUser();
  }, []);

  return isLoading ? <Loader /> : <>{children}</>;
}