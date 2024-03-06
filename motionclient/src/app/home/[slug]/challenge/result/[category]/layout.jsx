"use client";
import React, { useEffect } from "react";
// Store
import { useTestResult, fetchData } from "@/store/useTestResultStore";

export default function layout({ children, params }) {
  useEffect(() => {
    if (params.category === "pretest") {
      fetchData({ category: "pretest" });
    }else if(params.category === "posttest"){
      fetchData({ category: "posttest" });
    }
  }, []);
  return <>{children}</>;
}
