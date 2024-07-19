"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Formik, Field } from "formik";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// Icons
import { MdModeEditOutline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Component
import Loader from "@/components/loader/loader";
import { InputStyleColor } from "@/components/myinput/myinput";
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
// Store
import { useUserStore } from "@/store/useUserStore";

const ModalEditStatus = ({ closeModal, status, setIsLoading }) => {
  return (
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
          <h3 className="text-xl font-semibold mb-2">Change Status</h3>
          <p className="mb-4">
            Your status is public and will be visible on the leaderboard!
          </p>
          <Formik
            initialValues={{
              status: status,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.status) {
                errors.status = "Status tidak boleh kosong!";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setIsLoading(true);
              try {
                const response = await axios.patch(
                  "https://motionapp-backend.vercel.app/user/userstatus",
                  values,
                  {
                    withCredentials: true,
                  }
                );
                useUserStore.getState().updateUserStatus(values.status);
                toast.success(`Status berhasil diupdate!`);
                setIsLoading(false);
              } catch (error) {
                setIsLoading(false);
                toast.error(error);
              }
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              submitCount,
            }) => (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-8">
                  <div className="relative">
                    <textarea
                      id="status"
                      type="text"
                      name="status"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.status}
                      placeholder="What do you feel?"
                      className={`${InputStyleColor({
                        bgColor: "bg-gray-100",
                        textColor: "text-black-100",
                      })} min-h-20`}
                    />
                  </div>
                  <span className="text-sm mt-1">
                    {submitCount > 0 && errors.status && touched.status}
                  </span>
                </div>
                <button
                  type="submit"
                  className={`${ButtonStyleColor(
                    "bg-green-600 hover:bg-green-700"
                  )} w-full`}
                >
                  Confirm!
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default function page() {
  const [isLoading, setIsLoading] = useState(false);

  const userData = useUserStore((state) => state.userData);
  const userHistory = useUserStore((state) => state.userHistory);
  // console.log(userData);
  // console.log(userHistory);
  const [modalEditStatus, setModalEditStatus] = useState(false);
  const toggleModalEditStatus = () => setModalEditStatus(!modalEditStatus);
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  // Image Handler
  const [imageUrl, setImageUrl] = useState("");
  const [rankUrl, setRankUrl] = useState("");
  useEffect(() => {
    if (userData) {
      setImageUrl(userData.pict_url);
      setRankUrl(userData.rank_url);
    }
  }, [userData]);
  const fileInputRef = useRef(null);
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };
  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file); // Adjust the 'file' field based on your backend API
    console.log(formData);
    axios
      .post("YOUR_BACKEND_ENDPOINT", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Assuming the backend responds with the URL of the uploaded image
        setImageUrl(response.data.imageUrl); // Adjust based on actual response structure
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      {modalEditStatus ? (
        <ModalEditStatus
          closeModal={toggleModalEditStatus}
          status={userData.status}
          setIsLoading={setIsLoading}
        />
      ) : null}
      <div
        className="max-w-screen-md mx-auto mt-64 mb-16 animate-slideIn opacity-0"
        style={{ "--delay": 0.25 + "s" }}
      >
        {/* HEADER */}
        <div className="">
          <div className={`w-full h-20 bg-light-white rounded-t-xl flex`}>
            <div className="w-44 flex-none h-full flex items-center justify-center">
              <div
                className="rounded-xl w-32 h-32 mb-14 bg-light-white relative"
                // onClick={triggerFileInput}
              >
                {/* <div className="absolute rounded-xl w-full h-full z-10 flex justify-center items-center hover:text-black text-transparent hover:bg-black hover:bg-opacity-10">
                  Unggah
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                /> */}
                {userData && (
                  <img
                    src={imageUrl}
                    className="rounded-xl border-4 border-light-white"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="w-full h-full py-3">
              <p className="text-base">Hello,</p>
              {userData && (
                <h4 className="text-3xl font-semibold">
                  {userData.nickname}{" "}
                  {/* <span className="text-base text-blue-500">
                    {userData.title}
                  </span> */}
                </h4>
              )}
            </div>
          </div>
          {/* BODY */}
          <div className="w-full p-6 lg:p-8 bg-light-white rounded-b-xl flex">
            <div className="md:flex gap-8 w-full">
              <div
                className={`relative h-max w-full flex-[2] min-w-max flex flex-col justify-center items-center rounded-xl px-6 py-8 border-2 bg-white`}
              >
                <h4 className="text-xl font-semibold mb-2">Achievement</h4>
                <p className="text-lg mb-2">
                  Current Rank: {userData && <span>{userData.rank}</span>}
                </p>
                <div className="w-32 h-32 rounded-xl mb-2 relative">
                  {userData ? <img src={rankUrl} alt="rank picture" /> : null}
                </div>
                <p>Star Collected</p>
                <div className="flex justify-center items-center gap-2 text-2xl font-semibold mt-2 mb-4 rounded-full px-4 py-2">
                  <span className="inline-block w-10 h-10 -mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                      id="star"
                    >
                      <polygon
                        fill="#ffd759"
                        points="102.6 494.1 137 320.1 6 200.5 182.1 179.5 255.3 17.9 329.7 178.9 506 198.6 375.9 319.2 411.6 492.9 256.8 406.4"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="256 256 6 200.5 137 320.1"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="256 256 102.6 494.1 256.8 406.4 411.6 492.9"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="256 256 506 198.6 375.9 319.2"
                      ></polygon>
                      <polygon
                        fill="#fabd3b"
                        points="255.3 17.9 256 256 329.7 178.9"
                      ></polygon>
                    </svg>
                  </span>
                  {userData && <p>{userData.star_collected} </p>}
                </div>
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg">
                    <p className="text-sm">Challenge Point</p>
                    <div className="flex justify-center items-center gap-1">
                      <div className="h-8 w-8 relative">
                        <Image
                          src="/assets/icon/target.png"
                          alt="challenge icon"
                          fill
                          sizes="100%"
                        />
                      </div>
                      <div className="text-xl font-semibold">
                        {userData && <>{userData.challenge_point}</>}{" "}
                        <span className="text-lg font-normal">pt</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg">
                    <p className="text-sm">Qualification</p>
                    <div className="flex justify-center items-center gap-1">
                      <div className="h-8 w-8 relative">
                        <Image
                          src="/assets/icon/active.png"
                          alt="active icon"
                          fill
                          sizes="100%"
                        />
                      </div>
                      <div className="text-xl font-semibold">
                        {userData && (
                          <>
                            {userData?.qualification
                              ? userData?.qualification
                              : "???"}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[4] py-6 pe-6 leading-6 mt-6 md:mt-0 max-w-2xl ">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/assets/icon/feather-pen.png"
                          alt=""
                          fill
                          sizes="100%"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">Status</h3>
                    </div>
                    <MdModeEditOutline
                      onClick={toggleModalEditStatus}
                      className="text-xl place-self-start text-gray-600 cursor-pointer"
                    />
                  </div>
                  <p className="">
                    {userData && (
                      <>
                        {userData.status == "" ? (
                          <>Write your status</>
                        ) : (
                          <>{userData.status}</>
                        )}
                      </>
                    )}
                  </p>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/assets/icon/user.png"
                          alt=""
                          fill
                          sizes="100%"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">Bio</h3>
                    </div>
                    {/* <MdModeEditOutline
                      onClick={toggleModalEditBiografi}
                      className="text-xl place-self-start text-gray-600 cursor-pointer"
                    /> */}
                  </div>
                  {/* <p>
                    Salam kenal! Aku adalah Rihito, Asalku dari Purwakarta.
                    Hobiku bermain game dan menonton anime. Saat ini saya sedang
                    menempuh perkuliahan di UPI Ilmu Komputer. Cita-citaku
                    menjadi programmer.
                  </p> */}
                </div>
                <div className="text-base">
                  <ul className="space-y-1 text-gray-500 list-none list-inside">
                    <li>
                      Full Name :{" "}
                      <span>{userData && <>{userData.name}</>}</span>
                    </li>
                    <li>
                      Email : <span>{userData && <>{userData.email}</>}</span>
                    </li>
                    <li>
                      Room Code :{" "}
                      <span>{userData && <>{userData.room}</>}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-6">
            <div className="w-full md:flex flex-col  px-6 bg-light-white py-8 rounded-2xl">
              <div className="">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/assets/icon/progress.png"
                      alt=""
                      fill
                      sizes="100%"
                    ></Image>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Progress & Milestones
                  </h3>
                </div>
                <p className="max-w-2xl">
                  Here is your progress monitoring, including the total number
                  of training sessions, simulations, and materials studied.
                </p>
                <div className="my-4 text-sm sm:text-base flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="border flex-1 rounded-md p-2 sm:p-3 flex flex-col justify-between relative bg-white">
                      <div>
                        <div className="font-semibold mb-2">
                          Modules Completed
                        </div>
                        <div className="text-3xl mb-2">
                          {userData?.completedModulesCount
                            ? userData?.completedModulesCount
                            : 0}
                          <span className="text-lg">/10</span>
                        </div>
                      </div>
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <circle
                          cx="50"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#d2d6dc"
                          strokeWidth="5"
                        />
                        <circle
                          cx="50"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#4f46e5"
                          strokeWidth="8"
                          strokeDasharray={`${
                            (userData?.completedModulesCount / 10) * 125.6
                          } 125.6`}
                          transform="rotate(-90, 50, 25)"
                        />
                      </svg>
                    </div>
                    <div className="border flex-1 rounded-md p-2 sm:p-3 flex flex-col justify-between relative bg-white">
                      <div>
                        <div className="font-semibold mb-2">Total Practice</div>
                        <div className="text-3xl mb-2">
                          {userHistory?.practiceCount}
                          <span className="text-lg">
                            {userHistory?.practiceCount === 0
                              ? "/5"
                              : `/${
                                  Math.ceil(userHistory?.practiceCount / 5) * 5
                                }`}
                          </span>
                        </div>
                      </div>
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <circle
                          cx="50"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#d2d6dc"
                          strokeWidth="5"
                        />
                        <circle
                          cx="50"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#4f46e5"
                          strokeWidth="8"
                          strokeDasharray={`${
                            userHistory?.practiceCount === 0
                              ? 0
                              : (userHistory?.practiceCount /
                                  (Math.ceil(userHistory?.practiceCount / 5) *
                                    5)) *
                                125.6
                          } 125.6`}
                          transform="rotate(-90, 50, 25)"
                        />
                      </svg>
                    </div>
                    <div className="border flex-1 rounded-md p-2 sm:p-3 flex flex-col justify-between relative bg-white">
                      <div>
                        <div className="font-semibold mb-2">
                          Total TOEFL Simulation
                        </div>
                        <div className="text-3xl mb-2">
                          {userHistory?.simulationCount}
                          <span className="text-lg">
                            {userHistory?.simulationCount === 0
                              ? "/1"
                              : `/${
                                  Math.ceil(userHistory?.simulationCount / 2) *
                                  2
                                }`}
                          </span>
                        </div>
                      </div>
                      <svg viewBox="0 0 100 50" className="w-full h-full">
                        <circle
                          cx="50"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#d2d6dc"
                          strokeWidth="5"
                        />
                        <circle
                          cx="50"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#4f46e5"
                          strokeWidth="8"
                          strokeDasharray={`${userHistory?.simulationCount === 0
                            ? 0
                            :
                            (userHistory?.simulationCount /
                              (Math.ceil(userHistory?.simulationCount / 2) *
                                2)) *
                            125.6
                          } 125.6`}
                          transform="rotate(-90, 50, 25)"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="border rounded-md font-semibold p-2 sm:p-3 max-w-md bg-white">
                    <div className="">Achievement Completion</div>
                    <div className="p-2 mt-2">
                      <div className="w-full h-6 bg-gray-200 rounded-full">
                        <div
                          className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
                          style={{
                            width: `${userData?.achievementPercentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="mt-4 max-w-lg text-base text-red-400 font-medium">
                    Quest To do: {userData?.nextQuest}
                  </p>
                </div>
              </div>
              <div className="">
                <div className="relative overflow-x-auto rounded-lg max-h-64">
                  {userData ? (
                    <>
                      <div className=""></div>
                    </>
                  ) : (
                    <>Loading...</>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* HISTORY */}
          <div className="mt-6">
            <div className="w-full md:flex flex-col  px-6 bg-light-white py-8 rounded-2xl">
              <div className="">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/assets/icon/history.webp"
                      alt=""
                      fill
                      sizes="100%"
                    ></Image>
                  </div>
                  <h3 className="text-xl font-semibold">History</h3>
                </div>
                <p className="max-w-2xl">
                  Here are the records of your activities, including training
                  and simulation, along with the scores and points earned.
                </p>
                <div className="my-4 text-sm sm:text-base">
                  {/* <ul className="text-gray-500 list-none list-inside flex flex-wrap gap-x-8 justify-end">
                    <li>
                      Tantangan Diselesaikan : <span>1</span>
                    </li>
                    <li>
                      Rata-Rata Skor : <span>50</span>
                    </li>
                  </ul> */}
                  {/* <p className="mt-4 max-w-2xl text-base text-red-400 font-medium">
                    Hasilnya belum cukup memuaskan nih. Ayo semangat tingkatkan
                    lagi dengan perbanyak latihan!
                  </p> */}
                </div>
              </div>
              <div className="">
                <div className="relative overflow-x-auto rounded-lg max-h-64">
                  {userHistory ? (
                    userHistory.history.length > 0 ? (
                      <>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                Name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Skor
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 hidden sm:table-cell"
                              >
                                Point
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Result
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 hidden sm:table-cell"
                              >
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <>
                              {userHistory.history.map((item, index) => (
                                <tr
                                  key={index}
                                  className="bg-light-white border-b"
                                >
                                  <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900"
                                  >
                                    {item.name}
                                  </th>
                                  <td className="px-6 py-4">{item.score}</td>
                                  <td className="px-6 py-4 hidden sm:table-cell">
                                    {item.point}
                                  </td>
                                  <td className="px-6 py-4">{item.result}</td>
                                  <td className="px-6 py-4 hidden sm:table-cell">
                                    {item.date_created}
                                  </td>
                                </tr>
                              ))}
                            </>
                          </tbody>
                        </table>
                      </>
                    ) : (
                      <div className="">
                        No Activity History Found! Start Your First Challenge
                        Now!
                      </div>
                    )
                  ) : (
                    <>Loading...</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
