"use client";
import React, { useEffect } from "react";
// Store
import { fetchData } from "@/store/useChallengeStore";

export default function Layout({ children }) {
  useEffect(() => {
    fetchData();
  }, []);

  return <>{children}</>;
}
