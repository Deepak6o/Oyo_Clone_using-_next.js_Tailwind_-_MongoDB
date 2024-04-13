import React from "react";
import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
      <Image
        src={
          "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full my-5 h-large-box"
      />
      <div className="">
        <h3 className="text-2xl font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <p className="my-5 text-lg text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <button className="text-lg bg-blue-400 rounded-lg w-60 h-14">
          Price : 4500
        </button>
        <p className="my-5 text-2xl font-bold">Facilities :</p>
        <ul className="flex justify-between text-xl">
            <li>Swimming Pool</li>
            <li>Dogs</li>
            <li>Garden</li>
            <li>Loundry</li>
            <li>Cricket</li>
        </ul>
        <button className="my-5 text-lg bg-red-400 rounded-lg w-60 h-14">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
