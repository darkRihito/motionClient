"use client"
import React, {useState} from "react";
import Image from "next/image";

// Style Modules
import background from "@/styles/background/background.module.scss";

import Loader from "@/components/loader/loader";

export const GlobalBackground = ({ type }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className={`-z-10 fixed top-0 start-0 w-screen h-screen ${background.imageBackground}`}>
        <Image
          src={type}
          fill
          priority
          className="object-cover object-center bg-no-repeat dark:bg-black"
          onLoad={() => setLoading(false)}
        />
      </div>
      {loading ? (<Loader />) : null }
    </>
  );
};
