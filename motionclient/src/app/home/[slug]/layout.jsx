"use client"
import React, {useEffect} from "react";
import { Suspense } from "react";
import Loading from "./loading";
// Store
import { useUserStore, fetchData } from "@/store/useUserStore";
// Components
import {
  LeftNavigation,
  TopNavigation,
} from "@/components/navigation/navigation";
import { GlobalContainer } from "@/components/globalcontainer/globalcontainer";

import { ModalProvider } from "@/provider/modalprovider/modalprovider";

export default function layout({ children }) {
  const setUserData = useUserStore((state) => state.setUserData);
  useEffect(() => {
    fetchData(setUserData);
  }, [setUserData]);
  return (
    <>
      <ModalProvider>
        <GlobalContainer>
          <LeftNavigation />
          <TopNavigation />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </GlobalContainer>
      </ModalProvider>
    </>
  );
}
