import React, { useState } from "react";
import Headcomponent from "../../components/common/Headcomponent";
import Userfeedback from "../../components/Core/Dashboard/Admin/Userfeedback";
import { FaChevronLeft } from "react-icons/fa";
import Modal from "../../components/common/Modal";
const Feedback = ({ isOpen }) => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setIsModalOpen(true)

  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (

    <div
      className={` py-[7rem] lg:px-[5rem]  px-[10px] ${isOpen ? "xl:ml-[260px]" : ""}`}
    >
      <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home /<span className='text-black font-medium'> User Feedback</span></div>
        </div>
      </div>
      <div>
        <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] mt-7">
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
        <div className={`border border-[#F2994A] w-[120px] h-[40px] rounded-lg py-[7px] px-[16px] mt-3 float-right ${isActive ? 'bg-[#F2994A]' : 'bg-white'}`} >
          <button className={`text-[14px] leading-[20px] text-center ${isActive ? 'text-white' : 'text-[#F2994A]'}`} onClick={handleClick}>
            Export CSV
          </button>
        </div>
        
      </div>


      <div className="mt-[60px]">
      <Headcomponent border="none" />
 
        <Userfeedback />
        {isModalOpen && (
        <Modal
          closeModal={handleModalClose}
          label="Export"
        />
      )}
      </div>
    </div>
  );
};

export default Feedback;
