import Link from "next/link";
import React from "react";

function Articles() {
  return (
    <div className="flex flex-col gap-y-10 p-5 ">
      <h2 className="text-3xl border-l-2 px-5">Take a Look at the Latest Articles from Our Blog</h2>
      <div className="grid grid-cols-1 bg-white/60 shadow p-5  lg:grid-cols-3 items-center gap-5 ">
      <div className="flex flex-col bg-white z-10 items-center gap-y-2 pb-2.5 rounded shadow hover:shadow-lg ">
        <div className="flex flex-col items-center p-5 gap-y-2.5">
          <h2 className="">
            Efficient Experience with Superb Customer Support
          </h2>
          <p className=" font-bold">Sep 17 2025</p>
          <p className="text-gray-500 text-xs capitalize">elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam</p>
          <Link href={'/'} className="bg-black p-2 rounded-xl text-white hover:bg-white hover:text-black hover:border">read more</Link>
        </div>
      </div>
     <div className="flex flex-col bg-white z-10 items-center gap-y-2 pb-2.5 rounded shadow hover:shadow-lg ">
        <div className="flex flex-col items-center p-5 gap-y-2.5">
          <h2 className="">
            Efficient Experience with Superb Customer Support
          </h2>
          <p className=" font-bold">Sep 17 2025</p>
          <p className="text-gray-500 text-xs capitalize">elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam</p>
          <Link href={'/'} className="bg-black p-2 rounded-xl text-white hover:bg-white hover:text-black hover:border">read more</Link>
        </div>
      </div>
<div className="flex flex-col z-10 items-center gap-y-2 pb-2.5 rounded shadow hover:shadow-lg ">
        <div className="flex flex-col bg-white items-center p-5 gap-y-2.5">
          <h2 className="">
            Efficient Experience with Superb Customer Support
          </h2>
          <p className=" font-bold">Sep 17 2025</p>
          <p className="text-gray-500 text-xs capitalize">elementum sed sit amet. Nulla port titor accumsan tincidunt. Proin eget tortor risus. Vestibulum ac diam sit amet quam</p>
          <Link href={'/'} className="bg-black p-2 rounded-xl text-white hover:bg-white hover:text-black hover:border">read more</Link>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Articles;
