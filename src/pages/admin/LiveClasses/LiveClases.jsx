import React from "react";
import UserCard from "../../../components/common/UserCard";
import LiveclasesList from "../../../components/Core/Dashboard/Admin/LiveclasesList";
import { useNavigate } from "react-router-dom";
import Ynotes from '../../../assets/images/Ynotes.png'
import { FaChevronLeft } from "react-icons/fa";

const LiveClases = ({ isOpen }) => {
  const Navigate=useNavigate();
  return (
    <div
      className={`py-[7rem] lg:px-[5rem]  flex flex-col gap-2 px-[10px] ${isOpen ? "xl:ml-[260px]" : ""}`}>
    
          <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home /<span className='text-black font-medium'>Live Classes</span></div>
        </div>
      </div>
      <h2 className=" mt-5 font-bold text-[22px]  leading-[28px] text-[#2C2E32] ">
        Live Classes
      </h2>
      <div className=" mt-5 ">
        <UserCard
          label="Total Scheduled Live Classes"
          height="h-[120px]"
          backgroundcolor="bg-[#FFFFFF]"
          value="5,000"
          img2={Ynotes}
        />
      </div>
      <div className=" flex  justify-end ">
        <button className="text-[14px] leading-[20px] text-center font-bold  w-[166px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={()=>Navigate('/AddLiveClass')}>
       +  Add Live Class
        </button>
      </div>
      <LiveclasesList/>
    </div>
  );
};

export default LiveClases;
