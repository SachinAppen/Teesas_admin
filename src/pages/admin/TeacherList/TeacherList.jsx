import React from 'react'
import live from '../../../assets/images/live.png'
import liveimage from '../../../assets/images/liveimage.png'
import UserCard from '../../../components/common/UserCard'
import TeacherLists from '../../../components/Core/Dashboard/Admin/TeacherLists'
const TeacherList = ({isOpen}) => {
  return (
    <div
    className={` py-[8rem] lg:px-[10rem] px-[10px] flex flex-col  gap-2 ${
      isOpen ? "ml-[240px]" : ""
    }`}
  >
    <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] ">
    Teacher
    </h2>
    <div className=" mt-5 ">
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
      Add Teacher   
      </button>
    </div>
    <TeacherLists/>
  </div>
  )
}

export default TeacherList
