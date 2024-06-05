import React, { useState } from "react";
import Headcomponent from "../../components/common/Headcomponent";
import Userfeedback from "../../components/Core/Dashboard/Admin/Userfeedback";
const Feedback = ({ isOpen }) => {
  const [isActive, setIsActive] =  useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
   
  };
  return (

    <div
      className={` py-[8rem] lg:px-[10rem] px-[10px] flex flex-col  gap-2 ${
        isOpen ? "ml-[240px]" : ""
      }`}
    >
      <div>
        <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] ">
          Users Feedback
        </h2>
        <div className="lg:flex gap-[10px]  justify-between mt-5 ">
          <div className="p-[10px] bg-[#FFFFFF] flex flex-col gap-2  w-full lg:h-[72px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[12px] leading-[12px] text-[#001D4A] mt-2">
                Total Feedback
              </p>
            </div>
            <div>
              <p className="font-meduim text-[20px] leading-[20px]">231</p>
            </div>
          </div>

          <div className="p-[10px] bg-[#FFFFFF] flex flex-col gap-2  lg:mt-0 mt-5  w-full lg:h-[72px]  py-[10px]  px-[15px] rounded-xl">
            <div className="">
              <p className="text-[12px] leading-[12px] text-[#001D4A] mt-2">
                Total Resolved Feedback
              </p>
            </div>
            <div>
              <p className="font-meduim text-[20px] leading-[20px]">123</p>
            </div>
          </div>
        </div>

        <div className={`border border-[#F2994A] w-[120px] h-[40px] rounded-lg py-[7px] px-[16px] mt-3 float-right ${
        isActive ? 'bg-[#F2994A]' : 'bg-white'}`} >
      <button className={`text-[14px] leading-[20px] text-center ${
          isActive ? 'text-white' : 'text-[#F2994A]' }`} onClick={handleClick}>
        Export CSV
      </button>
    </div>
      </div>
      <div>
        <Headcomponent border="none" />
        <Userfeedback />
      </div>
    </div>
  );
};

export default Feedback;
