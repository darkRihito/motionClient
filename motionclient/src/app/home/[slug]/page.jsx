"use client";
import React, { useState, useEffect, useRef } from "react";
import { Formik, Field } from "formik";
import Image from "next/image";
import axios from "axios";
// Icons
import { MdModeEditOutline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
// Component
import { InputStyleColor } from "@/components/myinput/myinput";
import { ButtonStyleColor } from "@/components/mybutton/mybutton";
// Store
import useUserStore from "@/store/useUserStore";

const ModalEditStatus = ({ closeModal }) => {
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
          <h3 className="text-xl font-semibold mb-2">Ubah Status</h3>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deleniti asperiores nisi veritatis unde et?
          </p>
          <Formik
            initialValues={{
              status: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.status) {
                errors.status = "Status tidak boleh kosong!";
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
                      placeholder="Bagaimana perasaanmu?"
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
                  Tambahkan!
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
  const setUserData = useUserStore((state) => state.setUserData);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/getuser", {
        withCredentials: true,
      });
      let star_collected = response.data.data.challenge_point / 2;
      setUserData({ ...response.data.data, star_collected });
    } catch (error) {
      console.error("Failed:", error.message);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const userData = useUserStore((state) => state.userData);
  console.log(userData);

  const [modalEditStatus, setModalEditStatus] = useState(false);
  const toggleModalEditStatus = () => setModalEditStatus(!modalEditStatus);

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);

  // Image Handler
  const [imageUrl, setImageUrl] = useState("/assets/img/profile.jpg");
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

    // axios
    //   .post("YOUR_BACKEND_ENDPOINT", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     // Assuming the backend responds with the URL of the uploaded image
    //     setImageUrl(response.data.imageUrl); // Adjust based on actual response structure
    //   })
    //   .catch((error) => {
    //     console.error("Error uploading file:", error);
    //   });
  };

  return (
    <>
      {modalEditStatus ? (
        <ModalEditStatus closeModal={toggleModalEditStatus} />
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
                className="rounded-xl w-32 h-32 mb-14 bg-light-white relative cursor-pointer"
                onClick={triggerFileInput}
              >
                <div className="absolute rounded-xl w-full h-full z-10 flex justify-center items-center hover:text-black text-transparent hover:bg-black hover:bg-opacity-10">
                  Unggah
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <Image
                  className="rounded-xl border-4 border-light-white"
                  fill
                  sizes="100%"
                  alt=""
                  src={imageUrl}
                />
              </div>
            </div>
            <div className="w-full h-full py-3">
              <p className="text-base">Hello,</p>
              {userData && (
                <h4 className="text-3xl font-semibold">
                  {userData.nickname}{" "}
                  <span className="text-base text-blue-500">,GM</span>
                </h4>
              )}
            </div>
          </div>

          {/* BODY */}
          <div className="w-full p-6 lg:p-8 bg-light-white rounded-b-xl flex">
            <div className="md:flex gap-8 w-full">
              <div
                className={`relative h-max w-full flex-[2] min-w-max flex flex-col justify-center items-center rounded-xl px-6 py-8 border-2`}
              >
                <h4 className="text-xl font-semibold mb-2">Pencapaian</h4>
                <p className="text-lg mb-2">
                  Rank: <span>Grandmaster</span>
                </p>
                <div className="w-32 h-32 rounded-xl mb-2 relative">
                  <Image
                    src="/assets/img/rank.png"
                    alt="rank picture"
                    fill
                    sizes="100%"
                  />
                </div>
                <p>Bintang Terkumpul</p>
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
                    <p className="text-sm">Poin Tantangan</p>
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
                    <p className="text-sm">Kualifikasi</p>
                    <div className="flex justify-center items-center gap-1">
                      <div className="h-8 w-8 relative">
                        <Image
                          src="/assets/icon/active.png"
                          alt="active icon"
                          fill
                          sizes="100%"
                        />
                      </div>
                      <div className="text-xl font-semibold">Int</div>
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
                  <p className="">I feel happy today</p>
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
                      <h3 className="text-xl font-semibold">Biografi</h3>
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
                      Nama Lengkap : <span>Muhammad Rafi Shidiq</span>
                    </li>
                    <li>
                      Email : <span>muhammadrafishidiq@gmail.com</span>
                    </li>
                    <li>
                      Kode Undangan : <span>R001</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* HISTORY */}
          <div className="mt-6">
            <div className="w-full md:flex flex-col  px-6 bg-light-white py-8 rounded-2xl border">
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
                  <h3 className="text-xl font-semibold">Riwayat</h3>
                </div>
                <p className="max-w-2xl">
                  Berikut adalah trak rekor perolehan skor beserta poin dan
                  sumbernya.
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
                <div className="relative overflow-x-auto rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Skor
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 hidden sm:table-cell"
                        >
                          Poin
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Hasil
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 hidden sm:table-cell"
                        >
                          Tanggal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-light-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Pre-Test
                        </th>
                        <td className="px-6 py-4">50</td>
                        <td className="px-6 py-4 hidden sm:table-cell">50</td>
                        <td className="px-6 py-4 ">Intermediate</td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          12/04/2023
                        </td>
                      </tr>
                      <tr className="bg-light-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Latihan
                        </th>
                        <td className="px-6 py-4">50</td>
                        <td className="px-6 py-4 hidden sm:table-cell">50</td>
                        <td className="px-6 py-4">Belum Berhasil</td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          12/04/2023
                        </td>
                      </tr>
                      <tr className="bg-light-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Latihan
                        </th>
                        <td className="px-6 py-4 hidden sm:table-cell">50</td>
                        <td className="px-6 py-4">50</td>
                        <td className="px-6 py-4">Berhasil</td>
                        <td className="px-6 py-4 hidden sm:table-cell">
                          12/04/2023
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
