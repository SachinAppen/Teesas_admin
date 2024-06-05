import React, { useState } from 'react'

const AddParentReportType = ({isOpen}) => {
    const [errors, setError] = useState({});
    const[modalopen,setmodalopen]=useState(false)
    const [formData, setformData] = useState({
  title:"",
  message:""
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
      className={` py-[8rem] lg:px-[10rem] px-[10px] flex flex-col  gap-2 ${
        isOpen ? "ml-[240px]" : ""
      }`}
    >
            <div className="flex gap-14 ">
        <div className=" rounded-[24px] py-[20px] px-[16px] bg-[#FFFFFF] lg:w-[80%]">
          <div className="Border ">
            <h2 className=" font-medium text-[18px]  leading-[20px] text-[#000000] pb-[20px]">
            Add Parent Report-Type
            </h2>
          </div>
          <div>
            <div className=" ">
              <form >
                
                  <div className="">
                    <label
                      for="title"
                      className="font-medium text-[14px] leading-[18px] text-[#3D3D3D] "
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter Details"
                      value={formData.title}
                      onChange={onchangeHandler}
                      className="w-full mt-1  text-[14px]  outline-none  border p-2 border-[#D9D9D9] h-[40px] rounded-lg"
                    />
                    {errors.title && (
                      <span className="text-red-500 block p-[8px]">
                        Enter  Title *
                      </span>
                    )}
                  </div>
             
                <div className="mt-4">
                  <label htmlFor='message' className=" font-medium text-[14px] leading-[18px] text-[#3D3D3D]">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter Message Here"
                    className=" outline-none w-full border border-[#D9D9D9] py-[10px] px-[16px] rounded-lg h-[149px]"
                    type="text"
                    name='message'
                    onChange={onchangeHandler}
                  ></textarea>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
        <div className="users bg-[#ffffff] lg:mt-0 mt-5 lg:w-[50%] rounded-lg h-[50%]">
          <h2 className="text-[18px]  leading-[20px]  pb-[10px] text-[#000000] font-medium">
            Summary
          </h2>
          {/* <div className=" rounded-2xl bg-[#FFF9ED] p-4 ">
                {
                  formData.map((item) => (
                    <div key={item.id} className=" flex justify-between mt-2 ">
                      <div className=" font-light text-[14px] leading-[16px] text-[#5A5B5C]">{item.label}</div>
                      <div className="text-[16px] leading-[24px] text-[#000000]">{item.value}</div>
                    </div>
                  ))
                }
              </div> */}

          <div className="bg-[FFF9FD] m-auto my-10">
            <button
              type="button"
              className=" h-[32px] rounded-lg text-center  w-[200px]  text-white bg-[#F2994A]"
              onClick={() => {
                setmodalopen(!modalopen)
              }}
            >
            Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddParentReportType
