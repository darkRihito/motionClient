"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { IoIosCloseCircle } from "react-icons/io";
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
import toast from "react-hot-toast";

const ModalStructureWritten = ({ closeModal }) => {
  const { userData } = useUserStore();
  const router = useRouter();

  const startHandler = () => {
    if (
      userData?.is_doing_challenge != "free" &&
      userData?.is_doing_challenge != "structurewritten"
    ) {
      toast.error(`Sedang berada dalam aktivitas lain!`);
    } else {
      router.push("simulation/structurewritten");
    }
  };
  return (
    <>
      {userData && (
        <>
          <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
          <div
            className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
            style={{ "--delay": 0 + "s" }}
          >
            <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <IoIosCloseCircle
                onClick={closeModal}
                className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
              />

              <>
                <h3 className="text-xl font-semibold mb-2">
                  Start Simulation?
                </h3>
                <p className="mb-4">
                Are you ready to begin the simulation? You will have 40 minutes to complete 25 Structure questions and 15 Written Expression questions. Please note, you won't be able to perform other activities during the simulation. Click "Confirm" to start.
                </p>
                <button
                  type="button"
                  onClick={startHandler}
                  className={`${ButtonStyleColor("bg-green-600")} w-full`}
                >
                  Confirm!
                </button>
              </>
            </div>
            
          </div>
        </>
      )}
    </>
  );
};

// const ModalWritten = ({ closeModal }) => {
//   const { userData } = useUserStore();
//   const router = useRouter();

//   const startHandler = () => {
//     if (
//       userData?.is_doing_challenge != "free" &&
//       userData?.is_doing_challenge != "written"
//     ) {
//       toast.error(`Sedang berada dalam aktivitas lain!`);
//     } else {
//       router.push("simulation/written");
//     }
//   };
//   return (
//     <>
//       {userData && (
//         <>
//           <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
//           <div
//             className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
//             style={{ "--delay": 0 + "s" }}
//           >
//             <div className="relative max-w-sm w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <IoIosCloseCircle
//                 onClick={closeModal}
//                 className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
//               />

//               <>
//                 <h3 className="text-xl font-semibold mb-2">
//                   Start Writen Expression Simulation?
//                 </h3>
//                 <p className="mb-4">
//                   Are you ready to begin the simulation? You will have 40
//                   minutes to complete 25 Structure questions and 15 Written
//                   Expression questions. Please note, you won't be able to
//                   perform other activities during the simulation. Click
//                   "Confirm" to start.
//                 </p>
//                 <button
//                   type="button"
//                   onClick={startHandler}
//                   className={`${ButtonStyleColor("bg-green-600")} w-full`}
//                 >
//                   Confirm!
//                 </button>
//               </>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

export default function page() {
  const [modalStructureWritten, setModalStructureWritten] = useState(false);
  const toggleModalStructureWritten = () =>
    setModalStructureWritten(!modalStructureWritten);
  const [modalWritten, setModalWritten] = useState(false);
  const toggleModalWritten = () => setModalWritten(!modalWritten);

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  const { userData } = useUserStore();

  return (
    <>
      {modalStructureWritten ? (
        <ModalStructureWritten closeModal={toggleModalStructureWritten} />
      ) : null}
      {modalWritten ? <ModalWritten closeModal={toggleModalWritten} /> : null}
      <div className="">
        <div className="max-w-screen-md mx-auto mt-24 mb-16">
          <div
            className="animate-slideIn opacity-0"
            style={{ "--delay": 0.25 + "s" }}
          >
            <div className="w-full mt-12 text-center">
              <p className="text-xl font-semibold mb-1">Welcome!</p>
              <h2 className="text-4xl font-bold mb-4">Simulation Lobby</h2>
              <p>
                Immerse yourself in the authentic TOEFL Structure and Written
                Expression test environment with our Simulation feature.
                Practice with the same time limits and question count as the
                real exam, receive detailed performance feedback, and track your
                progress over time to enhance your readiness and boost your
                confidence for test day.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-center items-center gap-3 sm:gap-6">
            <div
              className={`bg-white/75 backdrop-blur-lg rounded-2xl ps-4 pe-6 text-xl sm:text-2xl text-white flex gap-4 animate-zoom opacity-0 ${
                userData?.pretest_done ? "cursor-pointer" : "cursor-not-allowed grayscale"
              } justify-center items-center`}
              style={{ "--delay": 0.5 + "s" }}
              onClick={userData?.pretest_done ? toggleModalStructureWritten : null}
            >
              <div className="relative sm:w-28 sm:h-28 h-24 w-24 flex-none">
                <Image
                  alt=""
                  fill
                  sizes="100%"
                  src="/assets/icon/startsimulation.png"
                />
                {!userData?.pretest_done && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                    <Image
                      alt="Lock"
                      width={100}
                      height={100}
                      src="/assets/icon/lock.png"
                      className="grayscale"
                    />
                  </div>
                )}
              </div>
              <div className="text-[#D93644] my-6 sm:my-8">
                <div className="">Structure & Written Expression</div>
                <p className="text-sm font-normal max-w-md">
                  Start Simulation to begin a 40-minute practice session
                  replicating the real TOEFL exam. You'll answer 25 Structure
                  questions and 15 Written Expression questions under timed
                  conditions, helping you to prepare effectively for test day.
                </p>
              </div>
            </div>

            {/* <div
              className={`relative bg-white/75 backdrop-blur-lg rounded-2xl ps-4 pe-6 text-xl sm:text-2xl text-white flex gap-4 animate-zoom opacity-0 cursor-pointer justify-center items-center`}
              style={{ "--delay": 0.75 + "s" }}
              onClick={toggleModalWritten}
            >
              <div className="relative sm:w-44 sm:h-44 h-36 w-36 flex-none">
                <Image
                  alt=""
                  fill
                  sizes="100%"
                  src="/assets/icon/selectionc.png"
                />
              </div>
              <div className="text-[#D93644] my-6 sm:my-8">
                <div className="">Writen Expression</div>
                <p className="text-sm font-normal max-w-md">
                  Enhance your writing skills by practicing with exercises that
                  focus on identifying and correcting errors in written English.
                  This section will help you improve your ability to express
                  ideas clearly and correctly in writing.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}