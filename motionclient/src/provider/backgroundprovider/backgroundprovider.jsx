"use client";
import React, { createContext, useState, useContext } from "react";

// Style Modules
import background from "@/styles/background/background.module.scss";

// Create Context
export const BackgroundContext = createContext();

// Provider component
export const BackgroundProvider = ({ children }) => {
  const [type, setType] = useState("");
  // console.log("BackgroundState", type);
  return (
    <BackgroundContext.Provider value={{ type, setType }}>
      <div
        className={`-z-10 fixed top-0 w-screen ${type} h-screen ${background.imageBackground}`}
      ></div>
      {children}
    </BackgroundContext.Provider>
  );
};

// Custom hook to use the BackgroundContext
export const useBackground = () => {
  return useContext(BackgroundContext);
};
