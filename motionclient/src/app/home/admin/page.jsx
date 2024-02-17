"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import {
  QuillToolbar,
  modules,
  formats,
} from "@/components/quilleditor/quilleditor";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Icon
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosAdd, IoIosCloseCircle } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";

import { InputStyleColor } from "@/components/myinput/myinput";
import { ButtonStyleColor } from "@/components/mybutton/mybutton";

const useStore = create(
  persist(
    (set) => ({
      sectionActive: "",
      setSectionActive: (sectionActive) => set({ sectionActive }),
    }),
    {
      name: "adminsectionstate",
      storage: createJSONStorage(() => sessionStorage), //
    }
  )
);

const ModalAddQuestion = ({ closeModal }) => {
  const [questionValue, setQuestionValue] = useState("");
  const handleChange = (content) => {
    setQuestionValue(content);
  };
  return (
    <>
      <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
      <div
        className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
        style={{ "--delay": 0 + "s" }}
      >
        <div className="relative max-w-xl w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoIosCloseCircle
            onClick={closeModal}
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
          />
          <h3 className="text-xl font-semibold mb-2">Tambah Soal</h3>
          <p className="mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti asperiores nisi veritatis unde et?
          </p>
          <div className="">
            <QuillToolbar />
            <ReactQuill
              className="h-[10rem] overflow-y-auto"
              theme="snow"
              value={questionValue}
              onChange={handleChange}
              modules={modules}
              formats={formats}
            ></ReactQuill>
          </div>
          <div className="">
            {/* Tingkat Kesulitan */}
            <div className="">
              <Formik
                initialValues={{
                  answer: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!questionValue) {
                    errors.answer = "Soal tidak boleh kosong!";
                  } else if (!values.answer) {
                    errors.answer = "Pilih satu jawaban benar!";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    // alert(JSON.stringify({values, questionValue}, null, 2));
                    console.log(questionValue);
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
                }) => (
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label
                      htmlFor="radioadmin"
                      className="block mt-3 mb-2 text-md font-medium"
                    >
                      Pilih Jawaban Benar
                    </label>
                    <div id="radioadmin" className="flex gap-3">
                      <label
                        htmlFor="opt1"
                        className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border-2 ${
                          values.answer == "a" && "border-2 border-green-400"
                        }`}
                      >
                        <div className="">
                          <Field
                            id="opt1"
                            type="radio"
                            value="a"
                            name="answer"
                            className="w-4 h-4 hidden peer"
                          />
                          <span className="w-full py-4 text-sm font-semibold">
                            A
                          </span>
                        </div>
                      </label>
                      <label
                        htmlFor="opt2"
                        className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border-2 ${
                          values.answer == "b" && "border-2 border-green-400"
                        }`}
                      >
                        <div className="">
                          <Field
                            id="opt2"
                            type="radio"
                            value="b"
                            name="answer"
                            className="w-4 h-4 hidden peer"
                          />
                          <span className="w-full py-4 text-sm font-semibold">
                            B
                          </span>
                        </div>
                      </label>
                      <label
                        htmlFor="opt3"
                        className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border-2 ${
                          values.answer == "c" && "border-2 border-green-400"
                        }`}
                      >
                        <div className="">
                          <Field
                            id="opt3"
                            type="radio"
                            value="c"
                            name="answer"
                            className="w-4 h-4 hidden peer"
                          />
                          <span className="w-full py-4 text-sm font-semibold">
                            C
                          </span>
                        </div>
                      </label>
                      <label
                        htmlFor="opt4"
                        className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border-2 ${
                          values.answer == "d" && "border-2 border-green-400"
                        }`}
                      >
                        <div className="">
                          <Field
                            id="opt4"
                            type="radio"
                            value="d"
                            name="answer"
                            className="w-4 h-4 hidden peer"
                          />
                          <span className="w-full py-4 text-sm font-semibold">
                            D
                          </span>
                        </div>
                      </label>
                    </div>
                    <span className="text-sm mt-2">
                      {submitCount > 0 &&
                        errors.answer &&
                        touched.answer &&
                        errors.answer}
                    </span>
                    {/* <div>Picked: {values.answer}</div> */}

                    <button
                      type="submit"
                      className={`${ButtonStyleColor(
                        "bg-green-600 hover:bg-green-700"
                      )} max-w-48 w-full mt-8 self-end`}
                    >
                      Tambahkan!
                    </button>
                  </form>
                )}
              </Formik>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

const dataPeserta = [
  {
    id: 1,
    fotoProfil: "/assets/img/profile.jpg",
    nama: "Rihito",
    poinA: 50,
    poinB: 50,
  },
  // Tambahkan objek lainnya sesuai dengan data peserta
];

const dataSoal = [
  {
    id: 1,
    kesulitan: "Mudah",
    soal: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda provident mollitia, suscipit veritatis rem.",
    jawaban: "A",
  },
  // Bisa menambahkan lebih banyak objek soal di sini
];

export default function page() {
  const { sectionActive, setSectionActive } = useStore();

  const changeSectionActive = (section) => {
    setSectionActive(section);
  };

  const [modalAddQuestion, setModalAddQuestion] = useState(false);
  const toggleModalAddQuestion = () => setModalAddQuestion(!modalAddQuestion);

  const copyTextToClipboard = async () => {
    const textToCopy = document.getElementById("copyable").textContent;
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  return (
    <>
      {modalAddQuestion ? (
        <ModalAddQuestion closeModal={toggleModalAddQuestion} />
      ) : null}
      <div className="max-w-screen-md px-2 mx-auto mt-32 mb-8">
        <div
          className="w-full mt-12 text-start mb-8 animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          <p className="text-xl font-semibold mb-1">Selamat Datang!</p>
          <h2 className="text-4xl font-bold mb-4">Admin Kelola</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            corporis, dolor commodi placeat debitis vel voluptas quas vitae
            itaque quibusdam!
          </p>
        </div>

        {/* TABS */}
        <div
          className="animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 mb-6">
            <div className="flex sm:w-1/2 gap-2 sm:gap-4">
              <div
                onClick={() => {
                  changeSectionActive("userlist");
                }}
                className="flex flex-col gap-2 w-full rounded-tl-lg sm:rounded-lg bg-light-white p-4 cursor-pointer "
              >
                <h4 className="min-w-max ">Jumlah Pengguna</h4>
                <div className="flex items-center gap-3">
                  <span className="relative block w-12 h-12">
                    <Image fill src="/assets/icon/users.png" alt="" />
                  </span>
                  <h2 className="text-2xl font-semibold">{dataPeserta.length}</h2>
                </div>
              </div>
              <div
                onClick={() => {
                  changeSectionActive("questionbank");
                }}
                className="flex flex-col gap-2 w-full rounded-tr-lg sm:rounded-lg  bg-light-white p-4 cursor-pointer"
              >
                <h4 className="min-w-max ">Total Soal</h4>
                <div className="flex items-center gap-3">
                  <span className="relative block w-12 h-12">
                    <Image fill src="/assets/icon/documents.png" alt="" />
                  </span>
                  <h2 className="text-2xl font-semibold">{dataSoal.length}</h2>
                </div>
              </div>
            </div>
            <div
              onClick={copyTextToClipboard}
              className="flex items-center justify-between sm:items-start w-full sm:w-1/2 bg-light-white sm:rounded-lg rounded-b-lg p-4 cursor-pointer"
            >
              <div className="flex items-center sm:flex-col gap-2">
                <h4 className="min-w-max ">Kode Kelas :</h4>
                <div
                  id="copyable"
                  className=" w-full h-full text-lg font-semibold"
                >
                  ASD32F
                </div>
              </div>

              <FaRegCopy className="text-2xl text-gray-400" />
            </div>
          </div>
        </div>

        {/* TABLE */}
        {sectionActive == "userlist" ? (
          <>
            <div className="flex flex-col rounded-xl min-h-48 mt-6">
              <div
                className="w-full animate-slideIn opacity-0"
                style={{ "--delay": 0.25 + "s" }}
              >
                <h3 className="text-xl font-semibold mb-2">Daftar Pengguna</h3>
                <div className={`relative overflow-x-auto rounded-lg`}>
                  <table
                    className={`w-full text-sm text-left rtl:text-right bg-light-white`}
                  >
                    <thead className={`text-xs uppercase `}>
                      <tr>
                        <th scope="col" className="px-6 py-4 w-8">
                          No
                        </th>
                        <th scope="col" className="py-4 min-w-24 w-full">
                          Nama
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-4 text-center min-w-40 w-full hidden md:table-cell"
                        >
                          Poin Tantangan
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-center min-w-40 w-full hidden md:table-cell"
                        >
                          Poin Aktivitas
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-center w-full md:hidden table-cell"
                        >
                          Poin
                        </th>
                        <th
                          scope="col"
                          className=" text-center w-full table-cell"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataPeserta.map((peserta) => (
                        <tr key={peserta.id}>
                          <th
                            scope="row"
                            className="px-6 py-3 font-medium text-center"
                          >
                            {peserta.id}
                          </th>
                          <td className="py-3 w-full">
                            <div className="flex items-center gap-2">
                              <div>
                                {/* FOTO PROFIL */}
                                <div className="border h-10 w-10 md:h-11 md:w-11 rounded-full relative overflow-hidden">
                                  <img
                                    src={peserta.fotoProfil}
                                    alt="Profile pict"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col min-w-24 w-full">
                                {/* NAMA */}
                                <div className="lg:text-base font-semibold">
                                  {peserta.nama}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-3 text-center w-full hidden md:table-cell">
                            {/* POIN A */}
                            {peserta.poinA}
                          </td>
                          <td className="py-3 text-center w-full hidden md:table-cell">
                            {/* POIN B */}
                            {peserta.poinB}
                          </td>
                          <td className="px-4 py-3 text-center w-full md:hidden table-cell">
                            {/* POIN A / POIN B */}
                            {`${peserta.poinA}/${peserta.poinB}`}
                          </td>
                          <td className="px-6 py-3 text-center w-full cursor-pointer text-red-400  hover:text-red-500 ">
                            <MdDelete className="text-2xl " />
                            {/* Ikon MdDelete harus diimpor */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : sectionActive == "questionbank" ? (
          <>
            <div
              className="animate-slideIn opacity-0 flex flex-col rounded-xl min-h-24 mt-6"
              style={{ "--delay": 0.25 + "s" }}
            >
              <div
                onClick={toggleModalAddQuestion}
                className="w-full h-24 border-4 border-dashed rounded-xl flex justify-center items-center cursor-pointer mb-8"
              >
                <IoIosAdd className="text-7xl text-gray-200" />
                <h4 className="text-lg text-gray-200 font-semibold">
                  Tambah Soal
                </h4>
              </div>
              <p className="text-xl font-semibold mb-6">Daftar Soal</p>
              {/* LIST */}
              <div className="">
                <div>
                  {dataSoal.map((item) => (
                    <div
                      key={item.id}
                      className="bg-light-white rounded-lg w-full min-h-20 p-4 gap-3 flex relative"
                    >
                      <div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3 py-1 rounded-full absolute -top-2">
                          {item.kesulitan}
                        </span>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="mt-2">{item.soal}</div>
                        <div>
                          Jawaban:{" "}
                          <span className="font-semibold">{item.jawaban}</span>
                        </div>
                      </div>
                      <div className="w-max">
                        <div className="cursor-pointer border rounded-md p-3 mb-1">
                          <MdEdit className="text-2xl text-blue-400" />
                        </div>
                        <div className="cursor-pointer border rounded-md p-3">
                          <MdDelete className="text-2xl text-red-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
