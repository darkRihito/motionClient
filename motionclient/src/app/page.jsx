"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Component
import { GlobalContainer } from "@/components/globalcontainer/globalcontainer";
import { ButtonStyle } from "@/components/mybutton/mybutton";
import { InputStyleSVG } from "@/components/myinput/myinput";
import Loader from "@/components/loader/loader";
// Styles
import background from "@/styles/background/background.module.scss";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

export default function page() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  const [shown, setShown] = useState(false);
  const type = shown ? "text" : "password";
  const Icon = shown ? FaEye : FaEyeSlash;

  return (
    <>
      {isLoading && <Loader />}
      <GlobalContainer>
        <div>
          <div className="flex items-center justify-center min-h-screen">
            <div
              className={`flex flex-col justify-center items-center bg-bkg1 ${background.patternBackground} w-max px-8 py-10 relative rounded-2xl border-4 border-yellow-950 text-light-white`}
            >
              <div className="relative w-20 h-20">
                <Image
                  src="/assets/logo-motion.png"
                  fill
                  sizes="100%"
                  alt="Motion Logo"
                />
              </div>
              <div className={`text-start mt-12 w-full max-w-sm`}>
                <h2 className={`text-4xl font-bold mb-4 text-light-white`}>
                  MotivaMission
                </h2>
                <p className="text-base">
                  Harap isi rincian Anda untuk mengakses akun Anda.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    } else if (!values.password) {
                      errors.password = "Required";
                    } else if (values.password.includes(" ")) {
                      errors.password = "No spaces are allowed";
                    } else if (values.password.length < 4) {
                      errors.password =
                        "Pass must be greater than 8 characters";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting, setErrors }) => {
                    setIsLoading(true);
                    try {
                      const response = await axios.post(
                        "http://localhost:8000/api/login",
                        values,
                        {
                          withCredentials: true,
                        }
                      );
                      toast.success(`Hello ${response.data.data.nickname}!`);
                      if (response.data.data.role === "admin") {
                        router.push(
                          `/home/${response.data.data._id}/admin`
                        );
                      } else {
                        router.push(`/home/${response.data.data.nickname}`);
                      }
                      console.log("Login successful:", response.data);
                    } catch (error) {
                      console.error("Login failed:", error.response);
                      toast.error(`${error.response.data.message}!`);
                      setIsLoading(false);
                    }
                    setIsLoading(false);
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
                    <form
                      className="flex flex-col mt-16"
                      onSubmit={handleSubmit}
                    >
                      <div className="">
                        <label className="block mb-2 text-md font-medium text-light-white">
                          Email Anda
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5">
                            <svg
                              className="w-4 h-4 text-light-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 16"
                            >
                              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                          </div>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="cth: johndoe@gmail.com"
                            className={InputStyleSVG}
                          />
                        </div>
                        <span className="text-sm mt-1">
                          {submitCount > 0 &&
                            errors.email &&
                            touched.email &&
                            errors.email}
                        </span>
                      </div>
                      <div className="mb-16">
                        <label className="block mb-2 mt-4 text-md font-medium text-light-white ">
                          Password
                        </label>
                        <div className="relative">
                          <div className="relative flex">
                            <span className="absolute left-2 top-2/4 transform -translate-y-2/4">
                              <svg
                                width="22px"
                                height="22px"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="ms-1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17ZM17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16Z"
                                    fill="#FAFAFA"
                                  ></path>{" "}
                                </g>
                              </svg>
                            </span>
                            <input
                              id="password"
                              type={type}
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              placeholder="masukkan password anda"
                              className={InputStyleSVG}
                            />
                            <button
                              type="button"
                              onClick={() => setShown(!shown)}
                              className="absolute right-2 top-2/4 transform -translate-y-2/4 p-2"
                            >
                              <Icon className="w-5 h-5 text-gray-500" />
                            </button>
                          </div>
                        </div>
                        <span className="text-sm mt-1">
                          {submitCount > 0 &&
                            errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={ButtonStyle}
                      >
                        Masuk
                      </button>
                      <p className="mt-2 mb-6 text-light-white text-sm text-center">
                        Tidak memiliki akun?{" "}
                        <Link
                          className="inline-flex items-center hover:underline font-bold"
                          href="/register"
                        >
                          Daftar
                        </Link>
                      </p>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            {/* <div className="flex-[1] hidden lg:flex items-center justify-center border relative w-max h-[90vh] rounded-3xl bg-[#CBCCE8] overflow-hidden">
            <Image
              src="/assets/login-illust-compressed.png"
              width={650}
              height={500}
              alt="Picture of the author"
            />
          </div> */}
          </div>
        </div>
      </GlobalContainer>
    </>
  );
}
