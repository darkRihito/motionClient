"use client";
import React from "react";

// Store
// import useLoadingStore from "@/store/useLoadingStore";

// Style Modules
import loaderstyle from "@/styles/loader/loader.module.scss";

export default function Loader() {
  // const { isLoading } = useLoadingStore();
  // if (!isLoading) {
  //   return null;
  // }
  return (
    <>
      <div className="fixed top-0 start-0 flex justify-center items-center h-screen w-screen">
        <div className={`${loaderstyle.loader}`}></div>
      </div>
    </>
  );
}