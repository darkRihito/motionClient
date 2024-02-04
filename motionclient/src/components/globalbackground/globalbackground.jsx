import React from "react";

// Style Modules
import background from "@/styles/background/background.module.scss";

export const GlobalBackground = ({ type }) => {
  return (
    <>
      <div
        className={`-z-10 fixed top-0 w-screen h-screen ${type} ${background.imageBackground}`}
      ></div>
    </>
  );
};
