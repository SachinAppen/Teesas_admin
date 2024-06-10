import React from 'react'
import live from '../../../assets/images/live.png'
import liveimage from '../../../assets/images/liveimage.png'
import UserCard from '../../../components/common/UserCard'
import TeacherLists from '../../../components/Core/Dashboard/Admin/TeacherLists'
import { FaChevronLeft } from "react-icons/fa";

const TeacherList = ({isOpen}) => {
  return (
    <div
    className={`py-[7rem] lg:px-[5rem]  flex flex-col gap-2 px-[10px] ${isOpen ? "xl:ml-[260px]" : ""}`}>
             <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home / <span className='text-black font-medium'>Live Classes</span></div>
        </div>
      </div>
    <h2 className=" mt-6 font-bold text-[22px]  leading-[28px] text-[#2C2E32] ">
    Teacher
    </h2>
    <div className=" mt-3 ">
      <UserCard
        label="Total 1-on-1 Classes"
        height="h-[111px]"
        backgroundcolor="bg-[#FFFFFF]"
        value="5,000"
        imgbg={live}
        imglogo={liveimage}
      />
    </div>
    <div className=" flex  justify-end mt-4 ">
      <button className="text-[14px] leading-[20px] text-center font-bold  w-[181px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={()=>Navigate('/Addone-on-oneClass')}>
       + Add Teacher   
      </button>
    </div>
    <TeacherLists/>
  </div>
  )
}

export default TeacherList
