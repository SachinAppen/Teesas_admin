import React from 'react'
import UserCard from '../../../components/common/UserCard'
import OneClassList from '../../../components/Core/Dashboard/Admin/OneClassList'
import live from '../../../assets/images/live.png'
import liveimage from '../../../assets/images/liveimage.png'
import { useNavigate } from 'react-router-dom'

const OneOnclass = ({isOpen}) => {
    const Navigate=useNavigate();
  return (
    <div
    className={` py-[8rem] lg:px-[10rem] px-[10px] flex flex-col  gap-2 ${
      isOpen ? "ml-[240px]" : ""
    }`}
  >
    <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] ">
    One -on-One Classes
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
      <button className="text-[14px] leading-[20px] text-center font-bold  w-[193px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={()=>Navigate('/Addone-on-oneClass')}>
      Add One-on-One Class
      </button>
    </div>
   <OneClassList/>
  </div>
  )
}

export default OneOnclass
