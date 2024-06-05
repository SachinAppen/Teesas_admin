import React from 'react'
import letter from '../../..//assets/images/letter.png'
import DetailsTech from '../../../components/Core/Dashboard/Admin/DetailsTech'
const TeacherDetails = ({isOpen}) => {
  return (
    <div
    className={` py-[8rem] lg:px-[10rem] px-[10px]  ${
      isOpen ? "ml-[240px]" : ""
    }`}
  >
      <div className="bg-[#FFF9ED] border rounded-lg mb-[10px] border-[#CAC4D0] h-[80px] p-[8px]">
        <div className="flex items-center gap-4">
          <div>
            <img src={letter} className="w-[40px] h-[40px]" />
          </div>
          <div className="">
            <p className=" font-bold text-[16px] leading-[24px]  tracking-wider text-[#1D2026]">
              James Omokewe
            </p>
            <button className="w-[64px] h-[21px] rounded-full font-medium text-[13px] leading-[15px] mt-[4px]  text-white bg-[#08AA58]">
              Active
            </button>
          </div>
        </div>
      </div>

        <p className=' font-medium text-[14px] leading-[20px] text-[#F2994A] text-center cursor-pointer '>Manage</p>
      <DetailsTech/>
    </div>
  )
}

export default TeacherDetails
