"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Field } from "formik";
import axios from "axios";
// Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Component
import { GlobalContainer } from "@/components/globalcontainer/globalcontainer";
import { ButtonStyle, ButtonStyleColor } from "@/components/mybutton/mybutton";
import { InputStyle } from "@/components/myinput/myinput";
import Loader from "@/components/loader/loader";
// Styles
import background from "@/styles/background/background.module.scss";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

export default function page() {
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
      {/* <GlobalBackground type="bg-bkg0" /> */}
      {isLoading && <Loader />}
      <GlobalContainer>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center lg:place-self-start h-[10vh] pointer-events-none select-none lg:ps-4 ">
              <div className="relative h-10 w-40 lg:h-10 lg:w-40 lg:ms-4 ms-0 mt-4 lg:hidden block">
                <Image
                  src="/assets/logo-motion-text.png"
                  fill
                  alt="Motion Logo"
                  className="relative"
                />
              </div>
              <div className="relative h-10 w-40 lg:h-10 lg:w-40 lg:ms-4 ms-0 mt-4 lg:block hidden">
                <Image
                  src="/assets/logo-motion-text.png"
                  fill
                  alt="Motion Logo"
                  className="relative"
                />
              </div>
            </div>
            <div
              className={`flex flex-col items-center bg-bkg1 ${background.patternBackground} relative text-light-white px-4 py-5 lg:px-8 lg:py-10 mb-8 rounded-2xl border-4 border-yellow-950 max-w-lg w-full`}
            >
              <div className="text-start mt-3 w-full max-w-md p-3">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Registrasi Akun
                </h2>
                <p className="text-base lg:text-lg">
                  Harap isi rincian Anda untuk membuat akun.
                </p>
              </div>
              <div className="w-full max-w-md px-3">
                {/* FORM */}
                <Formik
                  initialValues={{
                    name: "",
                    nickname: "",
                    email: "",
                    password: "",
                    room: "",
                    role: "user",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Required";
                    }
                    if (!values.role) {
                      errors.role = "Required";
                    }
                    if (values.role === "user") {
                      if (!values.nickname) {
                        errors.nickname = "Required";
                      } else if (values.nickname.includes(" ")) {
                        errors.nickname = "Spaces are prohibited";
                      } else if (values.nickname.length > 15) {
                        errors.nickname =
                          "Nickname must be less than 15 characters";
                      }
                      if (!values.room) {
                        errors.room = "Required";
                      }
                    }
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "Required";
                    } else if (values.password.includes(" ")) {
                      errors.password = "Spaces are prohibited";
                    } else if (values.password.length < 8) {
                      errors.password =
                        "Pass must be greater than 8 characters";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting, setErrors }) => {
                    setIsLoading(true);
                    try {
                      const response = await axios.post(
                        "http://localhost:8000/api/register",
                        values
                      );
                      // toast.success(`Hello ${response.data.user.name}!`);
                      // router.push(`/home/${response.data.user.name}`);
                      console.log("Register successful:", response);
                    } catch (error) {
                      console.error("Register failed:", error);
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
                      className="flex flex-col mt-12"
                      onSubmit={handleSubmit}
                    >
                      {/* FULLNAME (FIRST & LAST) */}
                      <div className="flex gap-4">
                        <div className="w-full">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-md font-medium text-light-white "
                          >
                            Nama Lengkap
                          </label>
                          <div className="relative">
                            <input
                              id="name"
                              type="text"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              placeholder="Ahmad John"
                              className={InputStyle}
                            />
                          </div>
                          <span className="text-sm mt-1">
                            {submitCount > 0 &&
                              errors.name &&
                              touched.name &&
                              errors.name}
                          </span>
                        </div>
                      </div>
                      {/* RADIO ADMIN */}
                      <label
                        htmlFor="radioadmin"
                        className="block mt-3 mb-2 text-md font-medium text-light-white "
                      >
                        Daftar Sebagai
                      </label>
                      <div id="radioadmin" className="flex gap-4 w-full">
                        <label
                          htmlFor="role1"
                          className={`flex items-center h-12 p-4 bg-yellow-950 rounded-lg cursor-pointer w-full ${
                            values.role == "user" &&
                            "border-2 border-light-white"
                          }`}
                        >
                          <div className="">
                            <Field
                              id="role1"
                              type="radio"
                              value="user"
                              name="role"
                              className="w-4 h-4 text-yellow-950 bg-yellow-950 border-yellow-950 focus:ring-yellow-950 hidden peer"
                            />
                            <span className="w-full py-4 text-sm font-medium text-light-white dark:text-gray-300">
                              Pengguna
                            </span>
                          </div>
                        </label>
                        <label
                          htmlFor="role2"
                          className={`flex items-center h-12 p-4 bg-yellow-950 rounded-lg cursor-pointer w-full ${
                            values.role == "admin" &&
                            "border-2 border-light-white"
                          }`}
                        >
                          <div className="">
                            <Field
                              id="role2"
                              type="radio"
                              value="admin"
                              name="role"
                              className="w-4 h-4 text-yellow-950 bg-yellow-950 border-yellow-950 focus:ring-yellow-950 hidden peer"
                            />
                            <span className="w-full py-4 text-sm font-medium text-light-white dark:text-gray-300">
                              Admin
                            </span>
                          </div>
                        </label>
                      </div>
                      <span className="text-sm mt-1">
                        {submitCount > 0 &&
                          errors.role &&
                          touched.role &&
                          errors.role}
                      </span>
                      {/* <div>Picked: {values.role}</div> */}
                      {/* NICKNAME */}
                      {values.role === "user" ? (
                        <>
                          <label
                            htmlFor="nickname"
                            className="block mb-2 mt-3 text-md font-medium text-light-white "
                          >
                            Nickname
                          </label>
                          <div className="relative">
                            <input
                              id="nickname"
                              type="text"
                              name="nickname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.nickname}
                              placeholder="superjohn28"
                              className={InputStyle}
                            />
                          </div>
                        </>
                      ) : null}
                      <span className="text-sm mt-1">
                        {submitCount > 0 &&
                          errors.nickname &&
                          touched.nickname &&
                          errors.nickname}
                      </span>
                      {/* EMAIL */}
                      <label
                        htmlFor="email"
                        className="block mb-2 mt-3 text-md font-medium text-light-white "
                      >
                        Email
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="text"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="johndoe@gmail.com"
                          className={InputStyle}
                        />
                      </div>
                      <span className="text-sm mt-1">
                        {submitCount > 0 &&
                          errors.email &&
                          touched.email &&
                          errors.email}
                      </span>
                      {/* PASSWORD */}
                      <label
                        htmlFor="password"
                        className="block mb-2 mt-3 text-md font-medium text-light-white "
                      >
                        Kata Sandi
                      </label>
                      <div className="relative">
                        <div className="relative flex">
                          <input
                            id="password"
                            type={type}
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="masukkan password anda"
                            className={InputStyle}
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
                      {/* KODE UNDANGAN */}
                      {values.role === "user" ? (
                        <>
                          <div className="flex gap-4 mt-3">
                            <div className="flex-[2]">
                              <label
                                htmlFor="room"
                                className="block mb-2 text-md font-medium text-light-white "
                              >
                                Kode Undangan
                              </label>
                              <div className="relative">
                                <input
                                  id="room"
                                  type="text"
                                  name="room"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.room}
                                  placeholder="K001"
                                  className={InputStyle}
                                />
                              </div>
                              <span className="text-sm mt-1">
                                {submitCount > 0 &&
                                  errors.room &&
                                  touched.room &&
                                  errors.room}
                              </span>
                            </div>
                          </div>
                        </>
                      ) : null}
                      <div className="flex items-start mb-12 mt-3"></div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={ButtonStyle}
                      >
                        Daftarkan
                      </button>
                      <p className="mt-2 mb-6 text-light-white text-sm text-center">
                        Sudah memiliki akun?{" "}
                        <Link
                          className="inline-flex items-center text-light-white hover:underline font-bold"
                          href="/"
                        >
                          Masuk
                        </Link>
                      </p>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </>
  );
}
