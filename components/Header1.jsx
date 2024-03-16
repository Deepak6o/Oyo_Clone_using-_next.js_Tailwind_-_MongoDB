import Image from "next/image";
import Block from "./Block";
import { IoCallSharp } from "react-icons/io5";
import { MdBusinessCenter,MdRememberMe  } from "react-icons/md";
import { FaBuilding,FaUser  } from "react-icons/fa";
const Header1 = () => {
  return (
    <div className="flex h-20 px-5 justify-between border-b-2 border-gray-300 items-center ">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className="flex border-r-2 border-gray-300 h-full">
        <Block title={"Become a Member"} para={"Additional 10% off on stays."} icons={<MdRememberMe  />}/>
        <Block title={"OYO for business"} para={"Trusted by 5000 corporates."} icons={<MdBusinessCenter/>}/>
        <Block title={"List your property"} para={"Start earning in 30 min."} icons={<FaBuilding/>}/>
        <Block title={"987654321"} para={"Call us to book now."} icons={<IoCallSharp />}/>
        <div className="flex items-center px-4 py-2">
          <FaUser className="text-xl" /> 
          <h3 className="ml-2 font-bold">Login / Signup</h3> 
        </div>
      </div>
    </div>
  );
};

export default Header1;
