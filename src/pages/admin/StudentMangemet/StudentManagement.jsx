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


const StudentManagement = ({isOpen}) => {
  const [isModalOpen, setIsModalOpen] =  useState(false);
  const Navigate=useNavigate();
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
    const data=[

    ]
  return (
    <div
    className={`p-4 lg:pl-[161px] lg:pr-[129px] ${
      isOpen ? "lg:ml-[240px]" : ""
    }`}
  >
    <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] mt-32">
       Student List
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
        Add Student
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
        img={arrowleft}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="left"
      />
      <Custombutton
        value="Next"
        img={arrowright}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="right"
      />
    </div>
  </div>
  {isModalOpen && (
        <Modal
          closeModal={handleModalClose}
          value1="Add Single Student"
          value2="Add Bulk Student"
          onClick={()=>{Navigate('/AddLiveClassStudent')}}
        />
      )}
    </div>
  )
}

export default StudentManagement
