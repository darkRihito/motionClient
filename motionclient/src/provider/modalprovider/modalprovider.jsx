"use client";
import React, { createContext, useState } from "react";

// Icons
import { IoClose } from "react-icons/io5";

// Style Modules
import containerblur from "@/styles/containerblur/containerblur.module.scss";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);
  // Function to open the modal
  const openModal = (content) => {
    setModalContent(content);
  };
  // Function to close the modal
  const closeModal = () => {
    setModalContent(null);
  };
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent ? (
        <>
          <div
            className={`z-20 fixed top-0 w-screen h-screen ${containerblur.blur}`}
          ></div>
          <div className="z-20 fixed top-0 left-0 h-screen w-screen flex justify-center items-center px-2">
            <div className="rounded-xl p-4 relative bg-white">
              <div className="relative w-fit flex justify-end">
                <IoClose
                  onClick={closeModal}
                  className="relative cursor-pointer text-4xl md:text-5xl"
                />
              </div>
              <div className="relative mt-4">{modalContent}</div>
            </div>
          </div>
        </>
      ) : null}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return React.useContext(ModalContext);
}
