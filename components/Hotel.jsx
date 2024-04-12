import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hotel = () => {
  return (
    <div className="flex w-full p-5 mb-5 border-2 border-red-500 rounded-lg h-72">
      <div className="flex">
        <Image
          src={
            "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
          }
          alt="hotel"
          width={200}
          height={200}
          className="mr-3 h-60 w-96"
        />
        <div className="grid grid-rows-3">
          <Image
            src={
              "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 "
          />
          <Image
            src={
              "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
        </div>
        <div className="ml-20">
          <h2 className="text-xl font-bold line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisincing elit.
          </h2>
          <p className="my-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
          <p className="my-5 text-2xl">
            <span className="font-bold">Facilities :</span>
            <span>Free wifi , Pet care , Swimming Pool , Benches , Resort</span>
          </p>
          <div className="flex items-center">
            <button className="text-lg bg-blue-400 rounded-lg w-60 h-14">
              Price : 4500
            </button>
            <Link href={"/hotels/2"} className="ml-10 text-xl font-bold text-red-600">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
