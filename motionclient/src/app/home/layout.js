import React from "react";
import { Suspense } from "react";
import Loading from "./loading";

// Style Module
import background from "@/styles/background/background.module.scss";

// Components
import {
  LeftNavigation,
  TopNavigation,
} from "@/components/navigation/navigation";
import { GlobalContainer } from "@/components/globalcontainer/globalcontainer";
import { GlobalBackground } from "@/components/globalbackground/globalbackground";

export default function layout({ children }) {
  return (
    <>
      <GlobalBackground type="bg-bkg2" />
      <GlobalContainer>
        <LeftNavigation />
        <TopNavigation />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </GlobalContainer>
    </>
  );
}
