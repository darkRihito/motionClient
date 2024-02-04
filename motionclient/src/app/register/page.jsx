"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Field } from "formik";

// Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Component
import { GlobalContainer } from "@/components/globalcontainer/globalcontainer";
import ButtonStyle from "@/components/mybutton/mybutton";
import { InputStyle } from "@/components/myinput/myinput";
import { GlobalBackground } from "@/components/globalbackground/globalbackground";

// Styles
import background from "@/styles/background/background.module.scss";

export default function page() {
  const [shown, setShown] = useState(false);
  const type = shown ? "text" : "password";
  const Icon = shown ? FaEye : FaEyeSlash;
  return (
    <>
      <GlobalBackground type="bg-bkg0"/>
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
              className={`flex flex-col items-center bg-bkg1 ${background.patternBackground} relative text-light-white px-4 py-5 lg:px-8 lg:py-10 mb-8 rounded-2xl border-4 border-yellow-950`}
            >
              <div className="text-start mt-3 w-full max-w-md">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Registrasi Akun
                </h2>
                <p className="text-base lg:text-lg">
                  Harap isi rincian Anda untuk membuat akun.
                </p>
              </div>
              <div className="w-full max-w-md">
                {/* FORM */}
                <Formik
                  initialValues={{
                    firstname: "",
                    lastname: "",
                    nickname: "",
                    email: "",
                    password: "",
                    idnumber: "",
                    roomcode: "",
                    isadmin: "user",
                  }}
                  validate={(values) => {
                    const errors = {};

                    // Validate nama
                    if (!values.firstname) {
                      errors.firstname = "Required";
                    }

                    // Validate isadmin
                    if (!values.isadmin) {
                      errors.isadmin = "Required";
                    }

                    // Validate nickname
                    if (values.isadmin === "user") {
                      if (!values.nickname) {
                        errors.nickname = "Required";
                      } else if (values.nickname.includes(" ")) {
                        errors.nickname = "Spaces are prohibited";
                      } else if (values.nickname.length > 15) {
                        errors.nickname =
                          "Nickname must be less than 15 characters";
                      }

                      // Validate idnumber and roomcode
                      const numberRegex = /^[0-9]+$/;

                      if (!values.idnumber) {
                        errors.idnumber = "Required";
                      } else if (!numberRegex.test(values.idnumber)) {
                        errors.idnumber = "Must contain only numbers";
                      } else if (!values.roomcode) {
                        errors.roomcode = "Required";
                      }
                    }

                    // Validate email
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }

                    // Validate password
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
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
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
                    /* and other goodies */
                  }) => (
                    <form
                      className="flex flex-col mt-12"
                      onSubmit={handleSubmit}
                    >
                      {/* FULLNAME (FIRST & LAST) */}
                      <div className="flex gap-4">
                        <div className="">
                          <label
                            htmlFor="firstname"
                            className="block mb-2 text-md font-medium text-light-white "
                          >
                            Nama Depan
                          </label>
                          <div className="relative">
                            <input
                              id="firstname"
                              type="text"
                              name="firstname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstname}
                              placeholder="Ahmad John"
                              className={InputStyle}
                            />
                          </div>
                          <span className="text-sm mt-1">
                            {submitCount > 0 &&
                              errors.firstname &&
                              touched.firstname &&
                              errors.firstname}
                          </span>
                        </div>
                        <div className="">
                          <label
                            htmlFor="lastname"
                            className="block mb-2 text-md font-medium text-light-white "
                          >
                            Nama Belakang
                          </label>
                          <div className="relative">
                            <input
                              id="lastname"
                              type="text"
                              name="lastname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastname}
                              placeholder="Doe"
                              className={InputStyle}
                            />
                          </div>
                        </div>
                      </div>
                      {/* RADIO ADMIN */}
                      <label
                        htmlFor="radioadmin"
                        className="block mt-3 mb-2 text-md font-medium text-light-white "
                      >
                        Daftar Sebagai
                      </label>
                      <div id="radioadmin" className="flex gap-4">
                        <label
                          htmlFor="isadmin1"
                          className={`flex items-center h-12 p-4 bg-yellow-950 rounded-lg cursor-pointer ${values.isadmin == "user" && "border-2 border-light-white"}`}
                        >
                          <div className="">
                            <Field
                              id="isadmin1"
                              type="radio"
                              value="user"
                              name="isadmin"
                              className="w-4 h-4 text-yellow-950 bg-yellow-950 border-yellow-950 focus:ring-yellow-950 hidden peer"
                            />
                            <span className="w-full py-4 text-sm font-medium text-light-white dark:text-gray-300">
                              Pengguna
                            </span>
                          </div>
                        </label>
                        <label
                          htmlFor="isadmin2"
                          className={`flex items-center h-12 p-4 bg-yellow-950 rounded-lg cursor-pointer ${values.isadmin == "admin" && "border-2 border-light-white"}`}
                        >
                          <div className="">
                            <Field
                              id="isadmin2"
                              type="radio"
                              value="admin"
                              name="isadmin"
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
                          errors.isadmin &&
                          touched.isadmin &&
                          errors.isadmin}
                      </span>
                      {/* <div>Picked: {values.isadmin}</div> */}

                      {/* NICKNAME */}
                      {values.isadmin === "user" ? (
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
                      {/* idnumber & KODE KELAS */}
                      {values.isadmin === "user" ? (
                        <>
                          <div className="flex gap-4 mt-3">
                            <div className="flex-[3]">
                              <label
                                htmlFor="idnumber"
                                className="block mb-2 text-md font-medium text-light-white "
                              >
                                Nomor Identitas
                              </label>
                              <div className="relative">
                                <input
                                  id="idnumber"
                                  type="text"
                                  name="idnumber"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.idnumber}
                                  placeholder="2004222"
                                  className={InputStyle}
                                />
                              </div>
                              <span className="text-sm mt-1">
                                {submitCount > 0 &&
                                  errors.idnumber &&
                                  touched.idnumber &&
                                  errors.idnumber}
                              </span>
                            </div>
                            <div className="flex-[2]">
                              <label
                                htmlFor="roomcode"
                                className="block mb-2 text-md font-medium text-light-white "
                              >
                                Kode Ruangan
                              </label>
                              <div className="relative">
                                <input
                                  id="roomcode"
                                  type="text"
                                  name="roomcode"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.roomcode}
                                  placeholder="K001"
                                  className={InputStyle}
                                />
                              </div>
                              <span className="text-sm mt-1">
                                {submitCount > 0 &&
                                  errors.roomcode &&
                                  touched.roomcode &&
                                  errors.roomcode}
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
