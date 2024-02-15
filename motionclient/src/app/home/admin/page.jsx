"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { QuillToolbar, modules, formats } from "./EditorToolbar";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

// Icon
import { MdDelete } from "react-icons/md";
import { IoIosAdd, IoIosCloseCircle } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa6";

// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";

const ModalAddQuestion = ({ closeModal }) => {
  const [value, setValue] = useState("");
  // Handler for changes in the editor
  const handleChange = (content) => {
    setValue(content);
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
          <h3 className="text-xl font-semibold mb-2">Tambah Soal</h3>
          <p className="mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti asperiores nisi veritatis unde et?
          </p>
          <div className="">
            <QuillToolbar /> {/* Render the custom toolbar */}
            <ReactQuill
              theme="snow"
              value={value}
              onChange={handleChange}
              modules={modules}
              formats={formats}
            />
          </div>
          <button type="button" onClick={()=>{console.log(value)}}>TEST</button>
        </div>
      </div>
    </>
  );
};

export default function page() {
  const [sectionActive, setSectionActive] = useState("userlist");
  const changeSectionActive = (section) => {
    setSectionActive(section);
  };

  const [modalAddQuestion, setModalAddQuestion] = useState(false);
  const toggleModalAddQuestion = () => setModalAddQuestion(!modalAddQuestion);

  const copyTextToClipboard = async () => {
    const textToCopy = document.getElementById("copyable").textContent; // Get the text content
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
                  <h2 className="text-2xl font-semibold">20</h2>
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
                  <h2 className="text-2xl font-semibold">20</h2>
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
                      <tr className="">
                        <th
                          scope="row"
                          className="px-6 py-3 font-medium text-center"
                        >
                          1
                        </th>
                        <td className="py-3 w-full">
                          <div className="flex items-center gap-2 ">
                            <div className="">
                              <div className="border h-10 w-10 md:h-11 md:w-11 rounded-full relative overflow-hidden">
                                <Image
                                  fill
                                  src="/assets/img/profile.jpg"
                                  alt="Profile pict"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col min-w-24 w-full">
                              <div className="lg:text-base font-semibold">
                                Rihito
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-center w-full hidden md:table-cell">
                          50
                        </td>
                        <td className="py-3 text-center w-full hidden md:table-cell">
                          50
                        </td>
                        <td className=" px-4 py-3 text-center w-full md:hidden table-cell">
                          50/50
                        </td>
                        <td className="px-6 py-3 text-center w-full cursor-pointer text-red-400  hover:text-red-500 ">
                          <MdDelete className="text-2xl " />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : sectionActive == "questionbank" ? (
          <>
            <div className="flex rounded-xl min-h-24 mt-6">
              <div
                onClick={toggleModalAddQuestion}
                className="w-full h-24 border-4 border-dashed rounded-xl flex justify-center items-center cursor-pointer"
              >
                <IoIosAdd className="text-7xl text-gray-200" />
                <h4 className="text-lg text-gray-200 font-semibold">
                  Tambah Soal
                </h4>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
