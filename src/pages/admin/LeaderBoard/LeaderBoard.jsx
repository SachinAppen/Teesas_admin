import React from "react";
import { NavLink } from "react-router-dom";
import frame from "../../../assets/images/Frame2.png";
import search from "../../../assets/images/search.svg";
import LeaderBoardlist from "../../../components/Core/Dashboard/Admin/LeaderBoardlist";

const LeaderBoard = ({ isOpen }) => {
  return (
    <div
      className={`py-[8rem] lg:px-[9rem] px-[10px]  ${
        isOpen ? "ml-[240px]" : ""
      }`}
    >
      <div>
        <h2 className=" font-bold text-[22px] leading-[28px] text-[#2C2E32]">
          Leaderboard
        </h2>
      </div>
      <div className="lg:flex justify-end items-center gap-5">
      <div className="flex gap-5 my-5">
        <NavLink to="" className=" text-[16px] font-bold leading-[21px]  text-[#B8B8B8]">ALL</NavLink>
     
        <NavLink to="" className="text-[16px] font-bold leading-[21px]  text-[#B8B8B8] flex items-center">
          Grade 3
          <img src={frame} />
        </NavLink>

        <NavLink to="" className="text-[16px] font-bold leading-[21px]  text-[#B8B8B8] flex items-center gap-2">
          <div className="w-[17px] h-[17px] bg-[#FB9F00] rounded-full"></div>
          LGA
          <img src={frame} />
        </NavLink>
        </div>
        <div className=" relative">
          <div>
            <input type="text"  placeholder="Search" className=" placeholder:pl-4 font-normal text-[12px] leading-[21px]  text-[#000000] outline-none w-[189px] h-[44px] rounded-[40px] border border-[#0000001A] bg-[#FFFFFF] p-4" />
          </div>
          <div className="absolute top-[15px] left-[14px]">
            <img src={search} className="" />
          </div>
        </div>
      </div>
      <LeaderBoardlist/>
    </div>
  );
};

export default LeaderBoard;
