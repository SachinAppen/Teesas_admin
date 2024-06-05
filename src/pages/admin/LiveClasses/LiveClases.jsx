import React from "react";
import UserCard from "../../../components/common/UserCard";
import LiveclasesList from "../../../components/Core/Dashboard/Admin/LiveclasesList";
import { useNavigate } from "react-router-dom";

const LiveClases = ({ isOpen }) => {
  const Navigate=useNavigate();
  return (
    <div
      className={` py-[8rem] lg:px-[10rem] px-[10px] flex flex-col  gap-2 ${
        isOpen ? "ml-[240px]" : ""
      }`}
    >
      <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] ">
        Live Classes
      </h2>
      <div className=" mt-5 ">
        <UserCard
          label="Total Scheduled Live Classes"
          height="h-[120px]"
          backgroundcolor="bg-[#FFFFFF]"
          value="5,000"
        />
      </div>
      <div className=" flex  justify-end ">
        <button className="text-[14px] leading-[20px] text-center font-bold  w-[125px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={()=>Navigate('/AddLiveClass')}>
        Add Live Class
        </button>
      </div>
      <LiveclasesList/>
    </div>
  );
};

export default LiveClases;
