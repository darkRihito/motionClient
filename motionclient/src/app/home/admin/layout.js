import React from "react";
import { Suspense } from "react";
import { GlobalBackground } from "@/components/globalbackground/globalbackground";

export default function layout({ children }) {
  return (
    <>
      <Suspense>{children}</Suspense>{" "}
    </>
  );
}
