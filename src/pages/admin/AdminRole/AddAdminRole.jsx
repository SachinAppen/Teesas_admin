import React from "react";
import ToggleButton from "../../../components/common/ToggleButton";
import { FaChevronLeft } from "react-icons/fa"

const AddAdminRole = ({ isOpen }) => {
  const data = [
    {
      value: "Create_Institution",
    },
    {
      value: "View_Institution",
    },
    {
      value: "Edit_Institution",
    },
  ];
  return (
    <div
   className={`py-[7rem] lg:px-[5rem]  px-[10px] ${isOpen ? "lg:ml-[260px]" : ""}`}>
        <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Admin Role List / <span className='text-black font-medium'> Admin Role</span></div>
        </div>
      </div>
      <div className=" lg:flex gap-14">
        <div className=" rounded-[24px] py-[20px] mt-5 px-[16px] bg-[#FFFFFF] lg:w-[80%] ">
          <div className="Border">
            <h2 className=" font-medium text-[18px] leading-[20px] pb-[10px] text-[#000000]">
              Add Admin Role
            </h2>
          </div>
          <div>
            <div className=" flex flex-col gap-4">
              {data.map((item) => (
                <div className=" bg-[#F2F2F2] border border-[#D9D9D9] rounded-sm p-[8px]">
                  <p className=" font-normal text-[12px] leading-[20px] text-[#827F85]">
                    Permission Type
                  </p>
                  <h6 className=" font-medium text-[16px] leading-[24px] text-[#201D23]">
                    {item.value}
                  </h6>
                  <div className="flex justify-end gap-2">
                    <p className="font-normal text-[14px] leadig-[19px] text-[#000000]">
                      Activated
                    </p>
                    <ToggleButton />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="users bg-[#ffffff] lg:mt-5 mt-5 lg:w-[50%] rounded-lg h-[50%]">
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
                setmodalopen(!modalopen);
              }}
            >
             Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdminRole;
