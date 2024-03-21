"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// Store
import { useLeaderboardStore, fetchData } from "@/store/useLeaderboardStore";
import { useUserStore } from "@/store/useUserStore";

export default function layout({ children }) {
  const setLeaderboardData = useLeaderboardStore(
    (state) => state.setLeaderboardData
  );

  const userData = useUserStore((state) => state.userData);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      console.log(userData);
      fetchData(setLeaderboardData);
      if (userData.role === "admin") {
        router.back();
      }
    }
  }, [userData, setLeaderboardData]);
  if (userData?.role === "user") {
    return <>{children}</>;
  }
}
