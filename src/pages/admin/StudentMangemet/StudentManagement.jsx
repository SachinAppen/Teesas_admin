import React, { useState } from 'react'

import live from '../../../assets/images/live.png'
import liveimage from '../../../assets/images/liveimage.png'
import arrowleft from "../../../assets/images/arrowleft.png";
import arrowright from "../../../assets/images/arrowright.png";
import check from "../../../assets/images/check.png";
import UserCard from '../../../components/common/UserCard';
import Headcomponent from '../../../components/common/Headcomponent';
import Custombutton from '../../../components/common/Custombutton';
import Modal from '../../../components/common/Modal';
import {  useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const StudentManagement = ({isOpen}) => {
  const [isModalOpen, setIsModalOpen] =  useState(false);
  const Navigate=useNavigate();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
    const data=[

    ]
  return (
    <div className={`py-[7rem] lg:px-[5rem]  flex flex-col gap-2 px-[10px] ${isOpen ? "lg:ml-[260px]" : ""}`}>
        <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home / <span className='text-black font-medium'>Live Classes</span></div>
        </div>
      </div>
    <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] mt-5">
    Live Classes - Students
    </h2>
    <div className="mt-5">
      <UserCard
        label="Total Live Classes Students"
        height="h-[111px]"
        backgroundcolor="bg-[#FFFFFF]"
        value="5,000"
        imgbg={live}
        imglogo={liveimage}
      />
    </div>
    <div className=" flex  justify-end mt-4 ">
        <button className="text-[14px] leading-[20px] text-center font-bold  w-[122px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white"   onClick={() => setIsModalOpen(true)}>
       + Add Student
        </button>
      </div>
      <div className="py-[2px] px-[20px]  rounded-[18px] bg-[#FFFFFF] mt-8 ">
    <div className="Border">
       <Headcomponent value={"Student List"}/>
    </div>
    <div className="">
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <div className="px-[18px] py-[10px]">
              <h6 className=" font-light text-[12px] leading-[13px] text-[#767676] ">
                {user.created_at}
              </h6>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="flex  items-center gap-3 px-[18px]">
                {/* <div>
                  <img src={item.icon1} alt="Icon 1" />
                </div> */}
                <div className="flex items-center  gap-2">
                  <p>{user.first_name}</p>
                  <p>{user.last_name}</p>
                </div>
              </div>
              <div className="flex justify-between pr-[15px]">
                      <div>
                        <div className="pl-[20px]  flex flex-col gap-[10px]">
                          <p className=" font-normal text-[#555555] text-[12px] leading-[15px]">
                           grade
                          </p>
                          <div className="flex  items-center  py-[1px]  w-[96px] h-[16px]  bg-[#F2F2F2] ">
                            {/* <img
                              className="h-[11px]"
                              src={item.icon2}
                              alt="Icon 2"
                            /> */}
                            <p className=" font-bold text-[12px] leading-[15px] text-[#555555]">
                             
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Custombutton value="Status"
                          img={check}
                          backgroundcolor="bg-[#ede1d5]"
                          textcolor="text-[#EA8527]"
                          imagePosition="left" 
                        />
                      </div>
                    </div>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="user">
    
    <Custombutton
        value="Previous"
        hidden="hidden"
        icon={<FaArrowLeft />}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="left"
        width="w-[115px]"
      />
      <Custombutton
        value="Next"
          hidden="hidden"
        icon={<FaArrowRight />}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="right"
      />
              </div>
  </div>
  {isModalOpen && (

    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-64">
      <div className=" bg-[#FFFFFF] p-4 rounded-[20px]  w-full">
                <div className=" font-medium text-[16px] leading-[16px] text-[#162D3A] cursor-pointer" onClick={()=>{(Navigate('/AddLiveClassStudent'))}}>Add Single Student</div>
                <div  className=" font-medium mt-5 text-[16px] leading-[16px] text-[#162D3A] cursor-pointer">Add Bulk Student</div>
                 
            </div>
        <button
          onClick={handleModalClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  
      )}
    </div>
  )
}

export default StudentManagement
