"use client";
import React, { useEffect } from "react";
import Image from "next/image";
// Provider
import { useBackground } from "@/provider/backgroundprovider/backgroundprovider";
import { useLeaderboardStore } from "@/store/useLeaderboardStore";

export default function page() {
  const leaderboardData = useLeaderboardStore((state) => state.leaderboardData);

  const { setType } = useBackground();
  useEffect(() => {
    setType("bg-bkg0");
  }, []);
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-24 mb-16">
        <div
          className="w-full mt-12 text-center mb-14 animate-slideIn opacity-0"
          style={{ "--delay": 0.25 + "s" }}
        >
          <p className="text-xl font-semibold mb-1">Welcome!</p>
          <h2 className="text-4xl font-bold mb-4">Hall of Fame</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            corporis, dolor commodi placeat debitis vel voluptas quas vitae
            itaque quibusdam! Natus doloremque error debitis perspiciatis dicta
            iste asperiores!
          </p>
        </div>
        {leaderboardData && (
          <>
            {leaderboardData.length >= 3 && (
              <div
                className="min-h-44 aspect-[3/1] w-full flex justify-center items-center gap-4 lg:gap-6 mb-14 px-2 lg:px-0 animate-slideIn opacity-0"
                style={{ "--delay": 0.5 + "s" }}
              >
                <div className="rounded-lg border-2 w-56 px-2 py-3 lg:px-4 lg:py-6">
                  <div className="flex flex-col items-center gap-2.5 ">
                    <div className="h-16 w-16 md:h-20 flex-none md:w-20 rounded-full relative overflow-hidden border-2">
                      <img src={leaderboardData[1].pict_url} alt="Profile pict" />
                    </div>
                    <h4 className="lg:text-lg font-semibold text-center bg-light-white px-3 py-2 rounded-xl">
                      {leaderboardData[1].nickname}
                      <span> {leaderboardData[1].title}</span>
                    </h4>
                  </div>
                </div>
                <div className="rounded-lg border-2 w-56 px-2 py-3 lg:px-4 lg:py-6">
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="h-20 w-20 flex-none md:h-24 md:w-24 rounded-full relative overflow-hidden border-2">
                      <img src={leaderboardData[0].pict_url} alt="Profile pict" />
                    </div>
                    <h4 className="lg:text-lg font-semibold text-center bg-light-white px-3 py-2 rounded-xl">
                      {leaderboardData[0].nickname}
                      <span> {leaderboardData[0].title}</span>
                    </h4>
                  </div>
                </div>
                <div className="rounded-lg border-2 w-56 px-2 py-3 lg:px-4 lg:py-6">
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="h-16 w-16 md:h-20 flex-none md:w-20 rounded-full relative overflow-hidden border-2">
                      <img src={leaderboardData[2].pict_url} alt="Profile pict" />
                    </div>
                    <h4 className="lg:text-lg font-semibold text-center bg-light-white px-3 py-2 rounded-xl">
                      {leaderboardData[2].nickname}
                      <span> {leaderboardData[2].title}</span>
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        <div
          className="px-2 lg:px-0 animate-slideIn opacity-0"
          style={{ "--delay": 0.75 + "s" }}
        >
          <div className={`relative overflow-x-auto rounded-lg`}>
            {leaderboardData ? (
              <>
                {leaderboardData.length > 0 ? (
                  <>
                    <table
                      className={`w-full text-sm text-left rtl:text-right bg-light-white`}
                    >
                      <thead className={`text-xs uppercase `}>
                        <tr>
                          <th scope="col" className="px-6 py-4 w-8">
                            No
                          </th>
                          <th scope="col" className="py-4 min-w-32">
                            Nikcname
                          </th>
                          <th
                            scope="col"
                            className="py-4 text-center hidden md:table-cell"
                          >
                            Rank
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-center min-w-32"
                          >
                            Star
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 hidden lg:table-cell"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboardData.map((item, index) => (
                          <tr key={index} className="">
                            <th
                              scope="row"
                              className="px-6 lg:py-4 py-3 font-medium text-center"
                            >
                              {index + 1}
                            </th>
                            <td className="lg:py-4 py-3">
                              <div className="flex items-center gap-2 ">
                                <div className="">
                                  <div className="border h-10 w-10 md:h-11 md:w-11 rounded-full relative overflow-hidden">
                                    <img
                                      src={item.pict_url}
                                      alt="Profile pict"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col min-w-36">
                                  <div className="lg:text-base font-semibold">
                                    {item.nickname}
                                    <span className="text-sm"> {item.title}</span>
                                  </div>
                                  <div className="text-sm">{item.rank}</div>
                                </div>
                              </div>
                            </td>
                            <td className="hidden md:table-cell">
                              <div className="flex items-center justify-center">
                                <div className="h-10 w-10 md:h-11 md:w-11 rounded-lg relative">
                                  <Image
                                    src={item.rank_url}
                                    alt="rank picture"
                                    fill
                                    sizes="100%"
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="px-6 lg:py-4 py-3 text-center">
                              {item.star_collected}
                            </td>
                            <td className="px-6 lg:py-4 py-3 hidden lg:table-cell">
                              {item.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>Belum ada jawara</>
                )}
              </>
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
