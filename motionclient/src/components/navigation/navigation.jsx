"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

// Store
import useStore from "@/store/useModalStore";

// Icons
import { GrCircleQuestion } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

// Style Modules
import containerblur from "@/styles/containerblur/containerblur.module.scss";

// LEFT NAVIGATION
const LeftNavigation = () => {
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
      setLoading(true);
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
            className={`transition duration-500 ease-in-out flex flex-col lg:items-start items-end gap-4 text-md  mt-8 ${
              isMenuVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {isMenuVisible ? (
              <>
                {/* Home Link */}
                <Link
                  href={"/home"}
                  onClick={() => handleLinkClick("/home")}
                  className="block cursor-pointer"
                >
                  <li
                    className={`flex gap-2 w-max bg-white p-3 lg:px-4 rounded-2xl ${
                      isActive("/home") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill src="/assets/icon/house.png" />
                    </div>
                    <span className="hidden md:block">Beranda</span>
                  </li>
                </Link>

                {/* Admin Link */}
                <Link
                  href={"/home/admin"}
                  onClick={() => handleLinkClick("/home/admin")}
                  className="block cursor-pointer"
                >
                  <li
                    className={`flex gap-2 w-max bg-white p-3 lg:px-4 rounded-2xl ${
                      isActive("/home/admin") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill src="/assets/icon/settings.png" />
                    </div>
                    <span className="hidden md:block">Pengelolaan</span>
                  </li>
                </Link>

                {/* Challenge Link */}
                <Link
                  href={"/home/challenge"}
                  onClick={() => handleLinkClick("/home/challenge")}
                  className="block cursor-pointer"
                >
                  <li
                    className={`flex gap-2 w-max bg-white p-3 lg:px-4 rounded-2xl ${
                      isActive("/home/challenge") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill src="/assets/icon/flag.png" />
                    </div>
                    <span className="hidden md:block">Tantangan</span>
                  </li>
                </Link>

                {/* Leaderboard Link */}
                <Link
                  href={"/home/leaderboard"}
                  onClick={() => handleLinkClick("/home/leaderboard")}
                  className="block cursor-pointer"
                >
                  <li
                    className={`flex gap-2 w-max bg-white p-3 lg:px-4 rounded-2xl ${
                      isActive("/home/leaderboard") ? "font-semibold" : ""
                    }`}
                  >
                    <div className="inline-block relative w-6 h-6">
                      <Image alt="" fill src="/assets/icon/trophy.png" />
                    </div>
                    <span className="hidden md:block">Papan Peringkat</span>
                  </li>
                </Link>
              </>
            ) : null}
          </div>
          <li
            onClick={toggleMenuVisibility}
            className="flex gap-2 w-max bg-white p-3 lg:px-4 rounded-2xl cursor-pointer"
          >
            <BsThreeDots className="text-2xl text-gray-300" />
          </li>
        </ul>
      </div>
    </>
  );
};


const TopNavigationDropdown = () => {
  return (
    <>
      <div className="z-20 absolute right-4 top-24">
        <div className="relative rounded-lg flex flex-col gap-2 items-end">
          <div className="cursor-auto px-4 py-3 text-sm text-end bg-light-white rounded-xl">
            <div>Pengguna</div>
            <div className="font-medium">
              muhammadrafishidiq@gmail.com
            </div>
          </div>
          <ul className="text-sm flex flex-col gap-2">
            <li className="">
              <div
                href="#"
                className="px-4 py-3 bg-light-white rounded-xl hover:bg-gray-100 block"
              >
                <FiEdit2 className="text-xl inline-block me-2" />
                Edit Profil
              </div>
            </li>
            <li>
              <Link href="#" className="px-4 py-3 bg-light-white rounded-xl hover:bg-gray-100 block">
                <GrCircleQuestion className="text-xl inline-block me-2" />
                Dukungan
              </Link>
            </li>
          </ul>
          <a href="/">
            <div className="px-4 py-3 rounded-xl block bg-red-400 hover:bg-red-500">
              <button
                type="button"
                className="text-sm text-white"
              >
                <RiLogoutBoxLine className="text-xl inline-block me-2" />
                Keluar
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

// TOP NAVIGATION
const TopNavigation = () => {
  const [isDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!isDropdown);
  };
  return (
    <>
      <div className="fixed mx-auto max-w-screen-xl w-full">
        <div className="relative pt-4 z-20 float-end w-max top-6 right-4">
          <nav className="">
            <div className="flex flex-wrap items-center justify-between mx-auto py-3 ps-8 pe-4 rounded-full bg-white">
              <div
                className="flex items-center gap-3 md:gap-4 cursor-pointer"
                onClick={toggleDropdown}
              >
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
                <>
                  <TopNavigationDropdown />
                </>
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
