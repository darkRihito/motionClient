import React from "react";

export default function page() {
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-24 mb-16">
        <div className="">
          <div className="w-full mt-12 text-center">
            <p className="text-xl font-semibold mb-1">Selamat Datang!</p>
            <h2 className="text-4xl font-bold mb-4">Lobi Tantangan</h2>
            <p>
              Anda dapat mengambil tantangan tersedia dan menyelesaikannya untuk
              meningkatkan progress dan mendapatkan poin. Persiapkan dengan
              matang!
            </p>
          </div>
        </div>
        <div className="mt-8 p-6 sm:grid grid-cols-5 grid-rows-2 gap-6 space-y-6 sm:space-y-0">
          <div className="row-span-2 col-span-2">
            <div className="sm:h-full h-[11rem] border rounded-2xl p-6 text-xl sm:text-2xl">Practice</div>
          </div>
          <div className="col-span-3">
            <div className="h-[11rem] border rounded-2xl p-6 text-xl sm:text-2xl">Dungeon</div>
          </div>
          <div className="col-span-3">
            <div className="h-[11rem] border rounded-2xl p-6 text-xl sm:text-2xl">Abyssal</div>
          </div>
        </div>
      </div>
    </>
  );
}
