import React from "react";

export default function page() {
  let htmlContent = ``;
  return (
    <>
      <div className="w-10 h-10">
        <div className="relative" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </>
  );
}
