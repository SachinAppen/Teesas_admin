import React from 'react'
import Custombutton from '../../../components/common/Custombutton'
import sharp from '../../../assets/images/sharp.png'
import bookopen from "../../../assets/images/bookopen.png";
import Button from '../../../components/common/Button';
import Details from '../../../components/Core/Dashboard/Admin/Details';

const LiveClassDetails = ({isOpen}) => {
   
  return (
    <div
    className={` py-[8rem] lg:px-[10rem] px-[10px] flex flex-col  lg:gap-2 ${
      isOpen ? "ml-[240px]" : ""
    }`}
  >
        <div className="bg-[#FFF9ED] border rounded-lg lg:mb-[20px] border-[#CAC4D0] h-[80px] p-[8px]">
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
