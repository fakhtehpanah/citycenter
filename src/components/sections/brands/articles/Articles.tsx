import React from "react";

function Articles() {
  return (
    <div className="flex flex-col gap-y-10">
      <h2 className="text-3xl border-l-2 border-dashed border-amber-400 px-5">Take a Look at the Latest Articles from Our Blog</h2>
      <div className="grid grid-cols-1 border border-dashed border-amber-400 p-5 gap-x-6 lg:grid-cols-3 z-10 items-center gap-y-2 ">
      <div className="flex flex-col z-10 items-center gap-y-2 pb-2.5 rounded shadow hover:shadow-lg transition">
        <img src="/food.JPG" className="rounded-t" width={400} />
        <div className="flex flex-col gap-y-2">
          <h2 className="">
            hello title
          </h2>
          <p className=" font-bold">Sep 17 2025</p>
          <p className="text-gray-500 text-xs capitalize">hello category</p>
        </div>
      </div>
      <div className="shadow hover:shadow-lg transition flex flex-col rounded items-center gap-y-2 pb-2.5  rounded-t">
        <img src="/food.JPG" className="rounded-t" width={400} />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-semibold text-center line-clamp-2">
            hello title
          </h2>
          <p className=" font-bold">Sep 17 2025</p>
          <p className="text-gray-500 text-xs capitalize">hello category</p>
        </div>
      </div>
      <div className="shadow hover:shadow-lg transition flex flex-col rounded items-center gap-y-2 pb-2.5  rounded-t">
        <img src="/food.JPG" className="rounded-t" width={400} />
        <div className="flex flex-col gap-y-2">
          <h2 className="text-sm font-semibold text-center line-clamp-2">
            hello title
          </h2>
          <p className=" font-bold">Sep 17 2025</p>
          <p className="text-gray-500 text-xs capitalize">hello category</p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Articles;
