import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";

const AddStudent = ({isOpen}) => {
    const [errors, setError] = useState({});
    const[modalopen,setmodalopen]=useState(false)
    const [formData, setformData] = useState({
    Sname:"",
    live:""
    });
    const onchangeHandler = (event) => {
      const { name, value } = event.target;
      setformData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  return (
    <div
    className={`py-[7rem] lg:px-[5rem]  flex flex-col gap-2 px-[10px] ${isOpen ? "lg:ml-[260px]" : ""}`}>
      <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home / Practice <span className='text-black font-medium'>Add Live Class Student</span></div>
        </div>
      </div>
    <div className="lg:flex gap-14 ">
      <div className=" rounded-[24px] py-[20px] px-[16px] bg-[#FFFFFF] lg:w-[80%]">
        <div className="Border ">
          <h2 className=" font-medium text-[18px] mt-5  leading-[20px] text-[#000000] pb-[20px]">
            Add Live Class Student
          </h2>
        </div>
        <div>
          <div className=" ">
            <form>
              {/* Grade */}
              <div className="block lg:grid grid-cols-2 gap-5 mt-5 pb-[18px]">
                

                <div className="">
                  <label
                    for="live"
                    className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] "
                  >
               Select Live Class
                  </label>
                  <input
                    type="text"
                    name="live"
                    placeholder="Enter Details"
                    value={formData.live}
                    onChange={onchangeHandler}
                    className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                  />
                  {errors.live && (
                    <span className="text-red-500 block p-[8px]">
                      Select Live Class 
                    </span>
                  )}
                </div>

                <div className="">
                  <label
                    for="Sname"
                    className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] "
                  >
                   Student Name
                  </label>
                  <input
                    type="text"
                    name="Sname"
                    placeholder="Enter Details"
                    value={formData.Sname}
                    onChange={onchangeHandler}
                    className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                  />
                  {errors.Sname && (
                    <span className="text-red-500 block p-[8px]">
                      Enter Student Name
                    </span>
                  )}
                </div>
              
                </div>
            </form>
          </div>
        </div>
      </div>
      <div className="users bg-[#ffffff] lg:mt-0 mt-5 lg:w-[50%] rounded-lg h-[50%]">
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
          <button
            type="button"
            className=" h-[32px] rounded-lg text-center  w-[200px]  text-white bg-[#F2994A]"
            // onClick={() => {
            //   setmodalopen(!modalopen)
            // }}
          >
         Add Student
          </button>
        </div>
      </div>
    </div>
    {modalopen && <SucessfullSchedule/>}
  </div>
  )
}

export default AddStudent
