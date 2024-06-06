"use client";
import React, { useState, useEffect } from "react";
// Store
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";

export default function layout({ children, params }) {
  const userData = useUserStore((state) => state.userData);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      console.log(userData);
      if (userData.role === "admin") {
        router.back();
      }
    }
  }, [userData]);
  if (userData?.role === "user") {
    return <>{children}</>;
  }
}
