"use client";
import React from "react";

// Style Modules
import loaderstyle from "@/styles/loader/loader.module.scss";

export default function Loader() {
  return (
    <>
      <div className="fixed top-0 start-0 flex justify-center items-center h-screen w-screen z-30">
        <div className={`${loaderstyle.loader}`}></div>
      </div>
    </>
  );
}