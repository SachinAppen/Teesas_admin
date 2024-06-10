import React, { useState } from 'react'
import UserCard from '../../../components/common/UserCard'
import TeacherList from '../../../components/Core/Dashboard/Admin/TeacherList'
import Modal from '../../../components/common/Modal';
import { FaChevronLeft } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';



const Teachers = ({isOpen}) => {
  const [isModalOpen, setIsModalOpen] =   useState(false);
  const Navigate =useNavigate();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`py-[7rem] lg:px-[5rem]  flex flex-col gap-2 px-[10px] ${isOpen ? "lg:ml-[260px]" : ""}`}>
             <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home / <span className='text-black font-medium'>Live Classes</span></div>
        </div>
      </div>
    <h2 className=" font-bold text-[22px]   leading-[28px] text-[#2C2E32]  mt-6">
    Live Classes - Teachers
    </h2>
    <div className="mt-5">
      <UserCard
        label="Total Live Classes"
        height="h-[111px]"
        backgroundcolor="bg-[#FFFFFF]"
        value="5,000"
      />
    </div>
    <div className=" flex  justify-end mt-4 ">
        <button className="text-[14px] leading-[20px] text-center font-bold  w-[170px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={() => Navigate('/AddLiveClass')}>
       + Add Teacher
        </button>
      </div>
      <TeacherList/>
      {isModalOpen && (
        <Modal
          closeModal={handleModalClose}
          value1="Add Single Teacher"
          value2="Add Bulk Teacher"
          onClick={()=>{Navigate('/Teacher/AddTeacher')}}
        />
      )}
    </div>
  )
}

export default Teachers
