import React from "react";
import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-full ">
      <Image
        src={
          "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-9/12 mb-5 h-large-box"
      />
    </div>
  );
};

export default SingleHotel;
