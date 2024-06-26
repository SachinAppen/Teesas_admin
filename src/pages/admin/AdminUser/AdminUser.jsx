import React from 'react'
import live from '../../../assets/images/live.png'
import liveimage from '../../../assets/images/liveimage.png'
import bookopen from "../../../assets/images/bookopen.png";
import sharp from "../../../assets/images/sharp.png";
import UserCard from '../../../components/common/UserCard';
import Headcomponent from '../../../components/common/Headcomponent';
import Custombutton from '../../../components/common/Custombutton';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const AdminUser = ({isOpen}) => {
  const Navigate = useNavigate();
    const data = [
        {

          firstname: "James ",
          lastname: "Omokewe",
        },
        {
       
          firstname: "James ",
          lastname: "Omokewe",
        },
        {
         
          firstname: "James ",
          lastname: "Omokewe",
        },
        {
        
          firstname: "James ",
          lastname: "Omokewe",
        },
        {
        
          firstname: "James ",
          lastname: "Omokewe",
        },
      ];
  return (
    <div
    className={`py-[7rem] lg:px-[5rem]   px-[10px] ${isOpen ? "lg:ml-[260px]" : ""}`}>

       <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home / <span className='text-black font-medium'> Admin Users</span></div>
        </div>
      </div>
    <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] mt-6">
    Admin Users 
    </h2>
    <div className="mt-5">
      <UserCard
        label="Total Live Classes Students"
        height="h-[111px]"
        backgroundcolor="bg-[#FFFFFF]"
        value="12"
        imgbg={live}
        imglogo={liveimage}
      />
    </div>
    <div className=" flex  justify-end mt-4 ">
        <button className="text-[14px] leading-[20px] text-center font-bold  w-[160px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={()=>{Navigate('/AddAdminUser')}}>
       + Add Admin Users 
        </button>
      </div>
      <div className="py-[2px] px-[20px]  rounded-[18px] bg-[#FFFFFF] mt-8 ">
    <div className="Border">
       <Headcomponent value={"Admin Users list"}/>
    </div>
    <div className="">
      <ul>
      {data.map((user) => (
          <li key={user.id}>
          <div className="flex justify-between gap-4 items-center">
            <div className="px-[18px] py-[10px] mt-5 flex  items-center gap-[10px] pr-[15px]">
              <div className="w-[32px] h-[32px] rounded-[16px] bg-[#F8F5ED] relative">
                <img src={bookopen} alt="" className=" absolute top-[8px] left-[9px]" />
              </div>
              <div>
              <div className="flex items-center gap-3 px-[18px] cursor-pointer" onClick={()=> Navigate('/AdminUserDetails')}>
                {/* <div>
                  <img src={item.icon1} alt="Icon 1" />
                </div> */}
                <div className="flex items-center  gap-2">
                  <p className=" font-bold text-[14px] leading-[16px] text-[#171717] ">{user.firstname}</p>
                  <p className=" font-bold text-[14px] leading-[16px] text-[#171717]    ">{user.lastname}</p>
                </div>
              </div>
              </div>
            </div>
         
           
              <div>
                <Custombutton
                  value="status"
                  img={sharp}
                  backgroundcolor="bg-[#E9FDEE]"
                  textcolor="text-[#2760EA]"
                  imagePosition="left"
                />
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="user">
    
    <Custombutton
        value="Previous"
        hidden="hidden"
        icon={<FaArrowLeft />}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="left"
        width="w-[115px]"
      />
      <Custombutton
        value="Next"
          hidden="hidden"
        icon={<FaArrowRight />}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="right"
      />
              </div>
  </div>
    </div>
  )
}

export default AdminUser
