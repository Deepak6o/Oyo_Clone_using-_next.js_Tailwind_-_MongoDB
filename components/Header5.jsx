import React from "react";
import Image from "next/image";
const Header5 = () => {
  return (
    <div className="grid grid-cols-12 p-8 bg-slate-100">
      <div className="col-span-6">
        <Image
          src={"/banner3.avif"}
          alt="banner1"
          width={200}
          height={200}
          className="w-full h-30"
        />
      </div>
      <div className="col-span-6 m-8">
        <h1 className="mb-6 text-3xl font-bold">
          There's an OYO around. Always.
        </h1>
        <p className="mb-6 text-xl font-light">
          More Destinations. More Ease. More Affordable.
        </p>
        <div className="flex mb-6">
          <div>
            <h1 className="text-3xl font-bold">35+</h1>
            <p className="mb-6 font-light">Countries</p>
          </div>

          <div className="ml-10">
            <h1 className="text-3xl font-bold">174,000+</h1>
            <p className="mb-6 font-light">Hotels & Homes</p>
          </div>
        </div>
        <div className="ml-6">
          <div>
            <ul className="grid grid-cols-12 text-lg list-disc">
              <li className="col-span-4 text-red-500 list-disc">Indonesia</li>
              <li className="col-span-4 text-green-500">Malaysia</li>
              <li className="col-span-4 text-orange-500">Denmark</li>
            </ul>
          </div>
          <div className="mt-6">
            <ul className="grid grid-cols-12 text-lg list-disc">
              <li className="col-span-4 text-blue-500" >US</li>
              <li className="col-span-4 text-purple-500">UK</li>
              <li className="col-span-4 text-indigo-500">Netherlands</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header5;
