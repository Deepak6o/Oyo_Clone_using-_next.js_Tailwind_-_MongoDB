'use client'
import React from "react";
import bgbanner from "/public/banner.jpeg";

const Header3 = () => {
  return (
    <div
      className="bg-{bgbanner} bg-cover bg-center h-64"
      style={{ backgroundImage: `url(banner.jpeg)` }}
    >
      <div className="p-5">
        <h2 className="text-4xl text-white text-center font-bold">Over 174,000+ hotels and homes across 35+ countries</h2>
        <div className="grid grid-cols-5 my-5 mx-20">
            <input type="text" placeholder="Search by city, hotel, neighborh" className="h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-2"/>
            <input type="text" placeholder="Search by city, hotel, neighborh" className="h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-1 "/>
            <input type="text" placeholder="Search by city, hotel, neighborh" className="h-16 outline-none px-3 text-lg border-r-2 border-gray-300 col-span-1"/>
            <button type="submit" className="h-16 px-3 py-2 col-span-1 bg-green-500 text-xl hover:cursor-pointer hover:bg-green-600 text-white">Search</button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
        <button type="submit" className="h-10 px-3 py-1 hover:cursor-pointer text-white  mr-5">Continue your search</button>
        <button type="submit" className="h-10 px-3 py-1 hover:cursor-pointer border-2 border-white text-white mr-5 rounded-md hover:bg-slate-600">Homestay in India hotels</button>

        </div>
      </div>
    </div>
  );
};

export default Header3;
