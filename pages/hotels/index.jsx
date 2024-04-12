import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import React from "react";

const Hotels = () => {
  return (
    <>
      <Header1 />
      <div className="m-5">
        <Hotel />
        <Hotel />
      </div>
    </>
  );
};

export default Hotels;
