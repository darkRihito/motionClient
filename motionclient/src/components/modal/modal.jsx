"use client";
import React from "react";

// Store
import useModalStore from "@/store/useModalStore";

// Icons
import { IoClose } from "react-icons/io5";

// Style Modules
import containerblur from "@/styles/containerblur/containerblur.module.scss";

export default function Modal({ children }) {
  const { isModalOpen, toggleModal } = useModalStore();
  if (!isModalOpen) {
    return null;
  }
  return (
    <>
      <div className="">
        <div
          className={`z-30 fixed top-0 w-screen h-screen bg-black-100 ${containerblur.blur}`}
        ></div>
        <div className="fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[30rem] min-h-40 justify-center items-center w-full px-2">
          <div className="relative rounded-xl bg-white p-6">
            <div className="">
              <IoClose
                onClick={toggleModal}
                className="absolute cursor-pointer z-40 md:top-4 md:right-8 top-2 right-6 text-4xl md:text-5xl "
              />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}