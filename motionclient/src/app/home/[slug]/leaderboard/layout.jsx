"use client";
import React, { useEffect } from "react";
// Store
import { useLeaderboardStore, fetchData } from "@/store/useLeaderboardStore";

export default function layout({ children }) {
  const setLeaderboardData = useLeaderboardStore(
    (state) => state.setLeaderboardData
  );
  useEffect(() => {
    fetchData(setLeaderboardData);
  }, [setLeaderboardData]);
  return <>{children}</>;
}
