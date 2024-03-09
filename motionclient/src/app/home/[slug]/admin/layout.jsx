"use client";
import React, { useEffect } from "react";
// Store
import { fetchData } from "@/store/useAdminStore";
import { useUserStore } from "@/store/useUserStore";

export default function layout({ children, params }) {
  const userData = useUserStore((state) => state.userData);

  useEffect(() => {
    if (userData) {
      console.log(userData);
      fetchData({ code: userData.admin_room_code });
    }
  }, [userData]);

  return <>{children}</>;
}
