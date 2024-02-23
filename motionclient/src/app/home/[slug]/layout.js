import React from "react";
import { Suspense } from "react";
import Loading from "./loading";

// Components
import {
  LeftNavigation,
  TopNavigation,
} from "@/components/navigation/navigation";
import { GlobalContainer } from "@/components/globalcontainer/globalcontainer";

import { ModalProvider } from "@/provider/modalprovider/modalprovider";

export default function layout({ children }) {
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
