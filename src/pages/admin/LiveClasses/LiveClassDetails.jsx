import React from 'react'
import Custombutton from '../../../components/common/Custombutton'
import sharp from '../../../assets/images/sharp.png'
import bookopen from "../../../assets/images/bookopen.png";
import Button from '../../../components/common/Button';
import Details from '../../../components/Core/Dashboard/Admin/Details';
import { FaChevronLeft } from "react-icons/fa";

const LiveClassDetails = ({isOpen}) => {
   
  return (
    <div
    className={`py-[7rem] lg:px-[5rem]  flex flex-col gap-2 px-[10px] ${isOpen ? "xl:ml-[260px]" : ""}`}>
  
         <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home / Practice /<span className='text-black font-medium'>Live Classes Details</span></div>
        </div>
      </div>
        <div className="bg-[#FFF9ED] mt-5 border rounded-lg lg:mb-[20px] border-[#CAC4D0] h-[80px] p-[8px]">
        <div className="flex items-center gap-4">
        <div className="w-[32px] h-[32px] rounded-[16px] bg-[#F8F5ED] relative">
                  <img src={bookopen} alt="" className=" absolute top-[8px] left-[9px]" />
                </div>
          <div className="">
            <p className=" font-bold text-[16px] leading-[24px] lg:pb-0  tracking-wider text-[#1D2026]">
            Grade 4-Mathematics.
            </p>
            <div>
                  <Custombutton
                    value="Visible"
                    img={sharp}
                    backgroundcolor="bg-[#E9FDEE]"
                    textcolor="text-[#2760EA]"
                    imagePosition="left"
                    width="w-[120px]"
                  />
                </div>
          </div>
        </div>
      </div>
      <div>
      <Button value1="Manage Class"
      value2="Launch Class"/>
      </div>
    <Details/>
      
    </div>
  )
}

export default LiveClassDetails
