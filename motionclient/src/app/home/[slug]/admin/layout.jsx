"use client";
import React, { useState, useEffect } from "react";
// Store
import { fetchData } from "@/store/useAdminStore";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";

export default function layout({ children, params }) {
  const userData = useUserStore((state) => state.userData);
  // const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      console.log(userData);
      if (userData.role === "user") {
        router.back();
      }
      fetchData({ code: userData.admin_room_code });
    }
  }, [userData]);
  if (userData?.role === "admin") {
    return <>{children}</>;
  }
}
