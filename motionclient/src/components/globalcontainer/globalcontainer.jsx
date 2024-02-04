import React from "react";

export const GlobalContainer = ({ children }) => {
  return (
    <>
      <div className="relative w-full max-w-screen-xl mx-auto px-2 lg:px-0">{children}</div>
    </>
  );
};
