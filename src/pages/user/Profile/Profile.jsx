import React from 'react'
import letter from '../../../assets/images/letter.png'
import Headcomponent from '../../../components/common/Headcomponent'

const Profile = ({isOpen}) => {
    const formdata = [
        {
          id: 1,
          label: "Full Name",
          value: "John Doe"
        },
        {
          id: 2,
          label: "Gender",
          value: "Male"
        },
        {
          id: 3,
          label: "Date of Birth",
          value: "10-10-2020"
        },
        {
          id: 4,
          label: "Email",
          value: "sidd@gmail.com"
        },
        {
          id: 5,
          label: "Phone Number",
          value: "+234 9065245732"
        },
        {
          id: 6,
          label: "Address",
          value: "sid"
        },
      ]
  return (
<div className={`py-[8rem] lg:px-[9rem] px-[10px]  ${isOpen ? "ml-[240px]" : ""}`}>
      <div className="bg-[#FFFFFF] border rounded-lg mb-[20px] border-[#CAC4D0] h-[80px] p-[8px]">
        <div className="flex items-center gap-4">
          <div>
            <img src={letter} className="w-[40px] h-[40px]" />
          </div>
          <div className="">
            <p className=" font-bold text-[16px] leading-[24px]  tracking-wider text-[#1D2026]">
              James Omokewe
            </p>
            <button className="w-[97px] h-[21px] rounded-full font-medium text-[13px] leading-[15px]  text-[#2760EA] bg-[#DBE5FF]">
            Administrator
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:grid grid-cols-2 gap-4">
        <div className="">
          <div className=" w-full rounded-2xl border py-[10px] px-[12px] lg:px-[18px]  bg-[#FFFFFF] ">
               <Headcomponent value="Basic Information"
                border="border-bottom:1px solid #EBE6DC"
               />

            <div className="mt-5 bg-[#F2F2F2] rounded-2xl px-[13px] lg:px-[20px] py-[20px]" >
              <div className="flex justify-between items-center ">
                <div className="">
                  <h2 className="font-medium text-[16px] leading-[35px] text-[#49454F]">Bio And Contact</h2>
                </div>
                <div className=" text-green-500">
                  Edit
                </div>
              </div>
              <div className="bg-[#FFFFFF] py-[10px] px-[10px] mt-[10px] rounded-[8px] flex flex-col gap-4" >
                {
                  formdata.map((item, index) => (
                    <div key={item.id} className="flex lg:gap-[5rem] gap-[10px]  md:gap-[10rem] items-center  ">
                      <div className=" text-[14px] w-[116px] lg:w-[200px] leading-[18px] text-[#1F1F1FB2]">{item.label}</div>
                      <div className="text-[#222222E5] text-[14px] lg:text-[16px] font-normal">{item.value}</div>
                    </div>
                  ))
                }
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
