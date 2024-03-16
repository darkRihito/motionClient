"use client";
import React, { useEffect } from "react";
import { Suspense } from "react";
import Loading from "./loading";
// Store
import { useUserStore, fetchUserData } from "@/store/useUserStore";
// Components
import {
  LeftNavigation,
  TopNavigation,
} from "@/components/navigation/navigation";
import { GlobalContainer } from "@/components/globalcontainer/globalcontainer";

import { ModalProvider } from "@/provider/modalprovider/modalprovider";

export default function layout({ children }) {
  useEffect(() => {
    fetchUserData();
  });
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
