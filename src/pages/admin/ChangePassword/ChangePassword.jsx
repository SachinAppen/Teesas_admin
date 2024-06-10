import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
const ChangePassword = ({isOpen}) => {
    const[errors,setError]= useState({});
    const [formData, setformData] = useState({
      Opassword:"" ,
      password:"",
      ConfirmPassword:""
    });
    const onchangeHandler = (event) => {
  
        const { name, value } = event.target;
        setformData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
  return (
   <div  className={`py-[7rem] lg:px-[5rem]  flex flex-col gap-2 px-[10px] ${isOpen ? "lg:ml-[260px]" : ""}`}>
         <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home / <span className='text-black font-medium'> Change Password</span></div>
        </div>
      </div>
      <div className= 'block lg:flex justify-center gap-10 '>
          <div className="users bg-[#FFFFFF] rounded-xl lg:w-[80%]">
            <div className='Border'>
            <h2 className="text-[18px]  leading-[20px] Border  pb-[16px] text-[#000000] font-medium">
            Change Password
            </h2>
            </div>
            <div className=" p-2 py-[20px] ">
              <form > 
                <div>
                <div className="">
                    <label for="OPassword" className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] ">
                     Old Password
                    </label>
                    <input
                      type="password"
                      name="Opassword"
                      placeholder="Enter Details"
                      value={formData.OPassword}
                      onChange={onchangeHandler}
                      className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
              
                    />
                    {errors.Opassword && (
                      <span className="text-red-500 block p-[8px]"></span>
                    )}
                  </div>
                  </div>
             <div className="block lg:grid grid-cols-2 gap-5 mt-5">
                  <div className="">
                    <label for="Password" className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] ">
                     New Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Details"
                      value={formData.Password}
                      onChange={onchangeHandler}
                      className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
              
                    />
                    {errors.password && (
                      <span className="text-red-500 block p-[8px]"></span>
                    )}
                  </div>
                  <div className="">
                    <label for="ConfirmPassword" className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] ">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="ConfirmPassword"
                      value={formData.ConfirmPassword}
                      placeholder="Enter Details"
                      onChange={onchangeHandler}
                      className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
          
                    />
                    {errors.Confirmpassword && (
                      <span className="text-red-500 block p-[8px]">Enter Confirm Password *</span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="users bg-[#ffffff] lg:mt-0 mt-5 lg:w-[35%] rounded-lg h-[50%]">
            <h2 className="text-[18px]  leading-[20px]  pb-[10px] text-[#000000] font-medium">
              Summary
            </h2>
            <div className="rounded-2xl bg-[#FFF9ED] p-2">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="flex  justify-between mt-2">
          <div className="font-light mt-3 text-[14px] leading-[16px] text-[#5A5B5C]">
            {key.replace(/_/g, " ")}
          </div>
          <div className="text-[16px] leading-[24px] text-[#000000]">{value}</div>
        </div>
      ))}
    </div>

            <div className="bg-[FFF9FD] m-auto my-10">
              <button type="button" className=" h-[32px] rounded-lg text-center  w-[200px]  text-white bg-[#F2994A]">Create</button>
            </div>
          </div>
  </div>
  </div>
  )
}

export default ChangePassword
