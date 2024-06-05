import React from 'react'
import FeedbackInfo from '../../components/Core/Dashboard/Admin/FeedbackInfo'

const UserFeedbackDetails = ({isOpen}) => {
  return (
    <div className={`py-[8rem] lg:py-[8rem] lg:px-[9rem]  ${isOpen ? "ml-[240px]" : ""}`}>
    <div className="bg-[#FFF9ED] border rounded-lg  mb-[20px] border-[#CAC4D0] h-[68px] p-[8px]">
      <div className="flex items-center gap-4">
        <div>
          {/* <img src={letter} className="w-[40px] h-[40px]" /> */}
        </div>
        <div className="">
          <p className=" font-bold text-[16px] leading-[24px]  tracking-wider text-[#1D2026]">
            James Omokewe
          </p>
          <button className="w-[64px] h-[20px] rounded-full font-medium text-[13px] leading-[15px] mt-[4px] pt-[2px]  text-white bg-[#08AA58]">
            Active
          </button>
        </div>
      </div>
    </div>
    <div>
        <p className=' text-[14px] leading-[20px] text-center text-[#F2994A] cursor-pointer'>View Profile</p>
    </div>

  <FeedbackInfo/>
    </div>
  )
}

export default UserFeedbackDetails