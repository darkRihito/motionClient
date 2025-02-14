import { Inter, Varela_Round } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

// Fonts
const inter = Inter({ subsets: ["latin"] });
const round = Varela_Round({ subsets: ["latin"], weight: "400" });

import { BackgroundProvider } from "@/provider/backgroundprovider/backgroundprovider";
import ToasterProvider from "@/provider/hottoastprovider/hottoastprovider";

export const metadata = {
  title: "MotionApp",
  description: "BoostYourLearningMotivation",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={`${round.className}`}>
        <ToasterProvider/>
        <Suspense fallback={<Loading />}>
          <BackgroundProvider>{children}</BackgroundProvider>
        </Suspense>
      </body>
    </html>
  );
}
