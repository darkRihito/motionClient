"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
// Icons
import { GrCircleQuestion } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
// Components
import Loader from "@/components/loader/loader";

// LEFT NAVIGATION
const LeftNavigation = () => {
  const userName = "user";

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
  }, [pathname, searchParams]);
  const isActive = (path) => {
    return pathname === path;
  };
  const handleLinkClick = (path) => {
    if (pathname !== path) {
      router.push(path);
    }
  };
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <div
        className="fixed z-20 lg:top-20 top-auto bottom-16 lg:bottom-auto right-4 lg:right-auto"
        id="navbar-user"
      >
        <ul className="flex flex-col lg:ms-8 lg:items-start items-end gap-4 text-md">
          <div
            className={`transition duration-500 ease-in-out flex flex-col lg:items-start items-end gap-3 text-md  mt-8 ${
              isMenuVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {isMenuVisible ? (
              <>
                {/* Home Link */}
                <Link
                  href={"/home"}
                  onClick={() => handleLinkClick("/home")}
                  className="block cursor-pointer transition duration-150 hover:scale-[1.05]"
                >
                  <li
                    className={`flex gap-2 w-max bg-light-white border-2 p-3 lg:px-4 rounded-2xl ${
                      isActive("/home") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill sizes="100%" src="/assets/icon/house.png" />
                    </div>
                    <span className="hidden md:block">Beranda</span>
                  </li>
                </Link>

                {/* Admin Link */}
                <Link
                  href={`/home/${userName}/admin`}
                  onClick={() => handleLinkClick(`/home/${userName}/admin`)}
                  className="block cursor-pointer hover:scale-[1.05] transition duration-150"
                >
                  <li
                    className={`flex gap-2 w-max bg-light-white border-2 p-3 lg:px-4 rounded-2xl ${
                      isActive("/home/admin") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill sizes="100%" src="/assets/icon/settings.png" />
                    </div>
                    <span className="hidden md:block">Pengelolaan</span>
                  </li>
                </Link>

                {/* Challenge Link */}
                <Link
                  href={"/home/challenge"}
                  onClick={() => handleLinkClick("/home/challenge")}
                  className="block cursor-pointer hover:scale-[1.05] transition duration-150"
                >
                  <li
                    className={`flex gap-2 w-max bg-light-white border-2 p-3 lg:px-4 rounded-2xl ${
                      isActive("/home/challenge") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill sizes="100%" src="/assets/icon/flag.png" />
                    </div>
                    <span className="hidden md:block">Tantangan</span>
                  </li>
                </Link>

                {/* Leaderboard Link */}
                <Link
                  href={"/home/leaderboard"}
                  onClick={() => handleLinkClick("/home/leaderboard")}
                  className="block cursor-pointer hover:scale-[1.05]"
                >
                  <li
                    className={`flex gap-2 w-max bg-light-white border-2 p-3 lg:px-4 rounded-2xl ${
                      isActive("/home/leaderboard") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill sizes="100%" src="/assets/icon/trophy.png" />
                    </div>
                    <span className="hidden md:block">Papan Peringkat</span>
                  </li>
                </Link>
              </>
            ) : null}
          </div>
          <li
            onClick={toggleMenuVisibility}
            className="flex gap-2 w-max bg-green-500 p-3 lg:px-4 rounded-2xl cursor-pointer hover:scale-[1.05]"
          >
            <BsThreeDots className="text-2xl text-white" />
          </li>
        </ul>
      </div>
    </>
  );
};

const TopNavigationDropdown = ({ onLogOutClicked }) => {
  return (
    <>
      <div className="z-20 absolute right-4 top-24">
        <div className="relative rounded-lg flex flex-col gap-2 items-end">
          <div className="cursor-auto px-4 py-3 text-sm text-end bg-light-white rounded-xl">
            <div>Pengguna</div>
            <div className="font-medium">muhammadrafishidiq@gmail.com</div>
          </div>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <Link
                href="#"
                className="px-4 py-3 bg-light-white rounded-xl hover:bg-gray-100 block"
              >
                <GrCircleQuestion className="text-xl inline-block me-2" />
                Dukungan
              </Link>
            </li>
          </ul>
          <div
            className="px-4 py-3 rounded-xl block bg-red-400 hover:bg-red-500"
            onClick={onLogOutClicked}
          >
            <button type="button" className="text-sm text-white">
              <RiLogoutBoxLine className="text-xl inline-block me-2" />
              Keluar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// TOP NAVIGATION
const TopNavigation = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/logout", "", {
        withCredentials: true,
      });
      console.log(response.data);
      setIsLoading(false);
      router.push(`/`);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const [isDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!isDropdown);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="fixed z-20 mx-auto max-w-screen-xl w-full top-0">
        <div className="relative pt-4 float-end w-max top-6 right-4">
          <nav className="">
            <div
              onClick={toggleDropdown}
              className="flex flex-wrap items-center justify-between mx-auto py-3 ps-8 pe-4 rounded-full bg-light-white cursor-pointer"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-sm md:text-base text-end">
                  <div className="font-semibold text-black-100">
                    Muhammad Rafi Shidiq
                  </div>
                  <div className="text-sm text-gray-500">Ruangan A1</div>
                </div>
                <img
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full"
                  src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Kiki"
                  alt="Avatar"
                />
                {isDropdown ? (
                  <TopNavigationDropdown onLogOutClicked={logoutHandler} /> // Pass logoutHandler as prop
                ) : null}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export { LeftNavigation, TopNavigation };
