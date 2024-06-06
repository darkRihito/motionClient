"use client";
import React, { useEffect } from "react";
// Store
import { fetchData } from "@/store/useSimulationResultStore";

export default function layout({ children, params }) {
  useEffect(() => {
    if (params.category === "structurewritten") {
      fetchData({ category: "structurewritten" });
    }else if(params.category === ""){
      fetchData({ category: "" });
    }
  }, []);

  return <>{children}</>;
}
