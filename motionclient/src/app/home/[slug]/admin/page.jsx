"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import Select from "react-select";
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
import axios from "axios";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Icon
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosAdd, IoIosCloseCircle } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";
// Styles
import { InputStyleColor } from "@/components/myinput/myinput";
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
// Store
import { useUserStore } from "@/store/useUserStore";
import { useAdminStore } from "@/store/useAdminStore";

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

const ModalDeleteQuestion = ({ closeModal, id }) => {
  const deleteQuestion = async () => {
    const response = await axios.delete(
      `http://localhost:8000/question/question/${id}`,
      {
        withCredentials: true,
      }
    );
    console.log(response);
  };
  return (
    <>
      <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
      <div
        className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
        style={{ "--delay": 0 + "s" }}
      >
        <div className="relative max-w-lg w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoIosCloseCircle
            onClick={closeModal}
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
          />
          <h3 className="text-xl font-semibold mb-4">Tambah Soal</h3>
          <button
            type="button"
            onClick={deleteQuestion}
            className={`${ButtonStyleColor(
              "bg-green-600 hover:bg-green-700"
            )} max-w-48 w-full mt-8 self-end justify-self-end me-0 mb-0`}
          >
            Hapus!
          </button>
        </div>
      </div>
    </>
  );
};

const ModalEditQuestion = ({
  closeModal,
  id,
  kesulitan,
  soal,
  jawaban,
  kategori,
}) => {
  const [questionValue, setQuestionValue] = useState(soal);
  const handleChange = (content) => {
    setQuestionValue(content);
  };
  const initialCategories = [
    { value: "pretest", label: "PreTest" },
    { value: "posttest", label: "PostTest" },
    { value: "any", label: "Any" },
  ];

  return (
    <>
      <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
      <div
        className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
        style={{ "--delay": 0 + "s" }}
      >
        <div className="relative max-w-lg w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoIosCloseCircle
            onClick={closeModal}
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
          />
          <h3 className="text-xl font-semibold mb-4">Tambah Soal</h3>
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
                  answer: jawaban,
                  difficulty: kesulitan,
                  category: kategori
                    .map((category) => {
                      const option = initialCategories.find(
                        (opt) => opt.value === category
                      );
                      return option || null;
                    })
                    .filter(Boolean),
                }}
                validate={(values) => {
                  const errors = {};
                  if (!questionValue || !values.answer) {
                    errors.answer = "Soal atau jawaban tidak boleh kosong!";
                  }
                  if (!values.difficulty) {
                    errors.difficulty = "Kesulitan tidak boleh kosong!";
                  }
                  if (!values.category) {
                    errors.category = `Kategori tidak boleh kosong!`;
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  let payload = {
                    answer: values.answer,
                    difficulty: values.difficulty,
                    category: values.category.map((item) => item.value),
                    question: questionValue,
                  };

                  const response = await axios.patch(
                    `http://localhost:8000/question/question/${id}`,
                    { payload },
                    {
                      withCredentials: true,
                    }
                  );
                  console.log(response);
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
                  setFieldValue,
                }) => {
                  const validOptions = initialCategories.filter(
                    (option) =>
                      option.value !== undefined && option.label !== undefined
                  );
                  return (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                      <div className="mt-4">
                        <div id="radioadmin" className="flex gap-3">
                          <label
                            htmlFor="opt1"
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "A" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt1"
                                type="radio"
                                value="A"
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
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "B" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt2"
                                type="radio"
                                value="B"
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
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "C" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt3"
                                type="radio"
                                value="C"
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
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "D" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt4"
                                type="radio"
                                value="D"
                                name="answer"
                                className="w-4 h-4 hidden peer"
                              />
                              <span className="w-full py-4 text-sm font-semibold">
                                D
                              </span>
                            </div>
                          </label>
                        </div>
                        <span className="text-sm mt-1">
                          {submitCount > 0 && touched.answer && errors.answer}
                        </span>

                        <div className="flex gap-3 mt-4">
                          <div className="flex-1">
                            <div className="relative">
                              <Field
                                name="category"
                                component={Select}
                                options={validOptions}
                                isMulti
                                value={values.category}
                                onChange={(selectedOptions) =>
                                  setFieldValue("category", selectedOptions)
                                }
                              />
                            </div>

                            <span className="text-sm mt-1">
                              {submitCount > 0 &&
                                touched.category &&
                                errors.category}
                            </span>
                          </div>

                          <div className="flex-1">
                            <div className="relative">
                              <select
                                id="difficulty"
                                name="difficulty"
                                onChange={handleChange}
                                value={values.difficulty}
                                className="text-black-100 bg-light-white focus:ring-transparent focus:outline-none focus:border border-none rounded-lg block w-full h-12 px-3"
                              >
                                <option className="hidden">
                                  Tingkat Kesulitan
                                </option>
                                <option value="easy">Mudah</option>
                                <option value="medium">Sedang</option>
                                <option value="hard">Sulit</option>
                              </select>
                            </div>
                            <span className="text-sm mt-1">
                              {submitCount > 0 &&
                                touched.difficulty &&
                                errors.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className={`${ButtonStyleColor(
                          "bg-green-600 hover:bg-green-700"
                        )} max-w-48 w-full mt-8 self-end justify-self-end me-0 mb-0`}
                      >
                        Tambahkan!
                      </button>
                    </form>
                  );
                }}
              </Formik>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

const ModalAddQuestion = ({ closeModal }) => {
  const userData = useUserStore((state) => state.userData);

  const [questionValue, setQuestionValue] = useState("");
  const handleChange = (content) => {
    setQuestionValue(content);
  };
  const initialCategories = [
    { value: "pretest", label: "PreTest" },
    { value: "posttest", label: "PostTest" },
    { value: "any", label: "Any" },
  ];
  return (
    <>
      <div className="fixed top-0 start-0 w-screen h-screen z-20 bg-white/10 backdrop-blur-sm"></div>
      <div
        className="fixed top-0 start-0 w-screen h-screen z-30 px-4 animate-zoom opacity-0"
        style={{ "--delay": 0 + "s" }}
      >
        <div className="relative max-w-lg w-full bg-white rounded-xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IoIosCloseCircle
            onClick={closeModal}
            className="absolute -right-3 -top-3 md:-right-4 md:-top-4 cursor-pointer text-5xl md:text-6xl text-red-400"
          />
          <h3 className="text-xl font-semibold mb-4">Tambah Soal</h3>
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
                  difficulty: "",
                  category: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!questionValue || !values.answer) {
                    errors.answer = "Soal atau jawaban tidak boleh kosong!";
                  }
                  if (!values.difficulty) {
                    errors.difficulty = "Kesulitan tidak boleh kosong!";
                  }
                  if (!values.category) {
                    errors.category = `Kategori tidak boleh kosong!`;
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  let payload = {
                    answer: values.answer,
                    difficulty: values.difficulty,
                    category: values.category.map((item) => item.value),
                    room_code: userData.admin_room_code,
                    question: questionValue,
                  };

                  console.log(payload);

                  const response = await axios.post(
                    "http://localhost:8000/question/question",
                    { payload },
                    {
                      withCredentials: true,
                    }
                  );

                  console.log(response);
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
                  setFieldValue,
                }) => {
                  const validOptions = initialCategories.filter(
                    (option) =>
                      option.value !== undefined && option.label !== undefined
                  );
                  return (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                      <div className="mt-4">
                        <div id="radioadmin" className="flex gap-3">
                          <label
                            htmlFor="opt1"
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "A" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt1"
                                type="radio"
                                value="A"
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
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "B" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt2"
                                type="radio"
                                value="B"
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
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "C" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt3"
                                type="radio"
                                value="C"
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
                            className={`flex flex-1 items-center justify-center h-12 p-4 cursor-pointer border rounded-lg ${
                              values.answer == "D" && "border border-green-400"
                            }`}
                          >
                            <div className="">
                              <Field
                                id="opt4"
                                type="radio"
                                value="D"
                                name="answer"
                                className="w-4 h-4 hidden peer"
                              />
                              <span className="w-full py-4 text-sm font-semibold">
                                D
                              </span>
                            </div>
                          </label>
                        </div>
                        <span className="text-sm mt-1">
                          {submitCount > 0 && touched.answer && errors.answer}
                        </span>

                        <div className="flex gap-3 mt-4">
                          <div className="flex-1">
                            <div className="relative">
                              <Field
                                name="category"
                                component={Select}
                                options={validOptions}
                                isMulti
                                placeholder="Pilih Kategori"
                                value={values.category}
                                onChange={(selectedOptions) =>
                                  setFieldValue("category", selectedOptions)
                                }
                              />
                            </div>

                            <span className="text-sm mt-1">
                              {submitCount > 0 &&
                                touched.category &&
                                errors.category}
                            </span>
                          </div>

                          <div className="flex-1">
                            <div className="relative">
                              <select
                                id="difficulty"
                                name="difficulty"
                                onChange={handleChange}
                                value={values.difficulty}
                                className="text-black-100 bg-light-white focus:ring-transparent focus:outline-none focus:border border-none rounded-lg block w-full h-12 px-3"
                              >
                                <option className="hidden">
                                  Tingkat Kesulitan
                                </option>
                                <option value="easy">Mudah</option>
                                <option value="medium">Sedang</option>
                                <option value="hard">Sulit</option>
                              </select>
                            </div>
                            <span className="text-sm mt-1">
                              {submitCount > 0 &&
                                touched.difficulty &&
                                errors.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className={`${ButtonStyleColor(
                          "bg-green-600 hover:bg-green-700"
                        )} max-w-48 w-full mt-8 self-end justify-self-end me-0 mb-0`}
                      >
                        Tambahkan!
                      </button>
                    </form>
                  );
                }}
              </Formik>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default function page() {
  const { users, questions } = useAdminStore();
  const userData = useUserStore((state) => state.userData);
  // SECTION MENU
  const { sectionActive, setSectionActive } = useStore();
  const changeSectionActive = (section) => {
    setSectionActive(section);
  };
  // ADD QUESTION MODAL HANDLER
  const [modalAddQuestion, setModalAddQuestion] = useState(false);
  const toggleModalAddQuestion = () => setModalAddQuestion(!modalAddQuestion);
  // DELETE QUESTION MODAL HANDLER
  const [modalDeleteQuestion, setModalDeleteQuestion] = useState(false);
  const [currentDeleteItem, setCurrentDeleteItem] = useState(null);
  const toggleModalDeleteQuestion = (item) => {
    setCurrentDeleteItem(item);
    setModalDeleteQuestion(true);
  };
  // EDIT QUESTION MODAL HANDLER
  const [modalEditQuestion, setModalEditQuestion] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const toggleModalEditQuestion = (item) => {
    setCurrentEditItem(item);
    setModalEditQuestion(true);
  };
  // COPY CLIPBOARD
  const copyTextToClipboard = async () => {
    const textToCopy = document.getElementById("copyable").textContent;
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  // BACKGROUND
  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  useEffect(() => {
    const sessionActiveValue = sessionStorage.getItem("adminsectionstate");
    const parsedValue = JSON.parse(sessionActiveValue);
    const sectionActive = parsedValue.state.sectionActive;
    if (sectionActive === "") {
      changeSectionActive("userlist");
    }
  }, []);
  return (
    <>
      {modalAddQuestion ? (
        <ModalAddQuestion closeModal={() => setModalAddQuestion(false)} />
      ) : null}
      {modalDeleteQuestion && currentDeleteItem && (
        <ModalDeleteQuestion
          closeModal={() => setModalDeleteQuestion(false)}
          id={currentDeleteItem._id}
        />
      )}
      {modalEditQuestion && currentEditItem && (
        <ModalEditQuestion
          closeModal={() => setModalEditQuestion(false)}
          id={currentEditItem._id}
          kesulitan={currentEditItem.difficulty}
          soal={currentEditItem.question}
          jawaban={currentEditItem.answer}
          kategori={currentEditItem.category}
        />
      )}
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
                    <Image
                      fill
                      sizes="100%"
                      src="/assets/icon/users.png"
                      alt=""
                    />
                  </span>
                  <h2 className="text-2xl font-semibold">{users?.length}</h2>
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
                    <Image
                      sizes="100%"
                      fill
                      src="/assets/icon/documents.png"
                      alt=""
                    />
                  </span>
                  <h2 className="text-2xl font-semibold">
                    {questions?.length}
                  </h2>
                </div>
              </div>
            </div>
            <div
              onClick={copyTextToClipboard}
              className="flex items-center justify-between sm:items-start w-full sm:w-1/2 bg-light-white sm:rounded-lg rounded-b-lg p-4 cursor-pointer"
            >
              <div className="flex items-center sm:flex-col gap-2">
                <h4 className="min-w-max ">Kode Undangan :</h4>
                <div
                  id="copyable"
                  className=" w-full h-full text-lg font-semibold"
                >
                  {userData?.admin_room_code}
                </div>
              </div>
              <FaRegCopy className="text-2xl text-gray-400" />
            </div>
          </div>
        </div>

        {/* TABLE */}
        {sectionActive == "userlist" ? (
          <>
            {users ? (
              <>
                <div className="flex flex-col rounded-xl min-h-48 mt-6">
                  <div
                    className="w-full animate-slideIn opacity-0"
                    style={{ "--delay": 0.25 + "s" }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Daftar Pengguna
                    </h3>
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
                              className="px-4 py-4 text-center w-full"
                            >
                              Poin Tantangan
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 text-center w-full"
                            >
                              Kualifikasi
                            </th>
                            {/* <th
                              scope="col"
                              className=" text-center w-full table-cell"
                            >
                              Action
                            </th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user, index) => (
                            <tr key={index}>
                              <th
                                scope="row"
                                className="px-6 py-3 font-medium text-center"
                              >
                                {index + 1}
                              </th>
                              <td className="py-3 w-full">
                                <div className="flex items-center gap-2">
                                  <div>
                                    {/* FOTO PROFIL */}
                                    <div className="border h-10 w-10 md:h-11 md:w-11 rounded-full relative overflow-hidden">
                                      <img
                                        src={user.pict_url}
                                        alt="Profile pict"
                                        className="relative"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col min-w-24 w-full">
                                    {/* NAMA */}
                                    <div className="lg:text-base font-semibold">
                                      {user.name}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-3 text-center w-full">
                                {/* POIN A */}
                                {user.challenge_point}
                              </td>
                              <td className="py-3 text-center w-full">
                                {/* POIN B */}
                                {user.qualification}
                              </td>
                              {/* <td className="px-6 py-3 text-center w-full cursor-pointer text-red-400  hover:text-red-500 ">
                                <MdDelete className="text-2xl " />
                              </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        ) : sectionActive == "questionbank" ? (
          <>
            {questions ? (
              <>
                <div
                  className="animate-slideIn opacity-0 flex flex-col rounded-xl min-h-24 mt-6"
                  style={{ "--delay": 0.25 + "s" }}
                >
                  <div
                    onClick={toggleModalAddQuestion}
                    className="w-full h-24 border-4 border-dashed rounded-xl flex justify-center items-center cursor-pointer mb-8"
                  >
                    <IoIosAdd className="text-7xl text-black-100" />
                    <h4 className="text-lg text-black-100 font-semibold">
                      Tambah Soal
                    </h4>
                  </div>
                  <p className="text-xl font-semibold mb-6">Daftar Soal</p>
                  {/* LIST */}
                  <div className="">
                    <div className="flex flex-col gap-4">
                      {questions.map((item, index) => (
                        <div
                          key={index}
                          className="bg-light-white rounded-lg w-full min-h-20 p-4 gap-3 flex relative"
                        >
                          <div className="absolute -top-2 flex">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3 py-1 rounded-full ">
                              {item.difficulty}
                            </span>
                            {item.category.map((category, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3 py-1 rounded-full"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                          <div className="w-full flex flex-col justify-between gap-2">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.question,
                              }}
                              className="mt-2"
                            ></div>
                            <div>
                              Jawaban:{" "}
                              <span className="font-semibold text-sm ">
                                {item.answer}
                              </span>
                            </div>
                          </div>
                          <div className="w-max">
                            <div
                              onClick={() => toggleModalEditQuestion(item)}
                              className="cursor-pointer border rounded-md p-3 mb-1"
                            >
                              <MdEdit className="text-2xl text-blue-400" />
                            </div>
                            <div
                              className="cursor-pointer border rounded-md p-3"
                              onClick={() => toggleModalDeleteQuestion(item)}
                            >
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
          </>
        ) : null}
      </div>
    </>
  );
}
