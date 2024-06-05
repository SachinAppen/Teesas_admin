import React from 'react'
import letter from '../../..//assets/images/letter.png'
const AdminUserDetails = ({isOpen}) => {
    const data = [
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
      ];
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
        <div>
       <div>
          <div className=" rounded-[24px] py-[20px] px-[16px] bg-[#FFFFFF] mt-4 ">
        <div className="Border ">
          <h2 className=" font-medium text-[18px]  leading-[20px] text-[#2C2E32] pb-[20px]">
            Details
          </h2>
        </div>
        <div className="bg-[#F2F2F2] p-[16px] rounded-[16px] mt-3">
          <div className="bg-[#FFFFFF] py-[10px] px-[8px] mt-2 rounded">
            {data.map((item) => (
              <div className="flex  gap-[40rem]  items-center">
                <div>
                  <p className=" font-normal text-[14px] leading-[18px] text-[#1F1F1FB2]">
                    {item.label}
                  </p>
                  <p className=" text-[16px] leading-[20px] font-normal text-[#222222E5]">
                    {item.value}
                  </p>
                </div>
                <div>
                  <p className=" font-normal text-[14px] leading-[18px] text-[#1F1F1FB2]">
                    {item.label}
                  </p>
                  <p className=" text-[16px] leading-[20px] font-normal text-[#222222E5]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AdminUserDetails
