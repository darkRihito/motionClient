"use client";
import React, {useEffect} from "react";

import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

export default function page() {
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg2");
  }, []);
  return (
    <>
      <div className=""></div>
    </>
  );
}
