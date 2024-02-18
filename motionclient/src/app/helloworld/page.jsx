import React from "react";

export default function page() {
  let htmlContent = ``;
  return (
    <>
      <div className="">
        <div
          className="relative"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </>
  );
}
