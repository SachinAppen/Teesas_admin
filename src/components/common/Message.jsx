import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
const Message = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [show, setshow] =  useState(false);
    const handleclick=()=>{
        setshow(!show) 
        if (!show) {
          setIsModalOpen(true);
        }

      }
  return (
    <div className="mt-10 bg-[#FFFFFF] border border-[#ECEDEE] rounded-[18px]  pb-[20px] box-shadow">
    <div className="Border">
      <div className=" py-[10px] px-[15px]">
        <h2 className=" font-medium text-[18px] leading-[25px] text-[#2C2E32]">
          Message
        </h2>
      </div>
    </div>
    <div className="px-[10px] mt-5 h-full">
      <div className=" rounded-2xl bg-[#F2F2F2] p-[16px] ">
        <div className="bg-[#FFFFFF] py-[10px] px-[8px] rounded-[4px]">
          <div className="lg:h-[38px] ">
            <p className="text-[14px] leading-4 text-[#222222E5] mb-[5px]">
              I need to upgrade my son's grade because he's now in high
              school. what are the steps to doing that please
            </p>
          </div>
          <div className=" h-[1px] bg-[#A3A3A3]"></div>
          <div className="mt-2 flex items-center pb-[10px]">
            <span className=" text-[#B8B8B8] text-[12px] font-normal leading-[21px]">
              Rating :
            </span>
            <span className="flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
           
              <CiStar />
            </span>
          </div>
        </div>
        <div className="mt-4 text-[#27AE60] text-[14px] font-bold">
      {isModalOpen && "You will have to give us more details so we can help you."}
    </div>

        <div className=" mt-2 p-[8px] rounded-lg ">
          {show ? (
            <>
               {/* <label>Message</label> */}
              <div className="bg-[#F8F8F8] p-[8px] rounded-lg mt-2 h-[130px] border  border-[#D9D9D9] ">
                <textarea
                  placeholder="Enter Message Here"
                  className=" outline-none w-full"
                ></textarea>
                   <div className="flex justify-end gap-[20px] my-[20px]">
                  <button
                    onClick={() => setshow(!show)}
                    className="text-[#828282] py-[10px] rounded-lg cancel px-[24px] text-[14px] leading-[20px] text-center font-bold "
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#27AE60] rounded-lg h-[40px] roundrd-l py-[10px] px-[24px] text-[#FFFFFF] font-bold leading-[20px]"
                    onClick={handleclick}
                  >
                    Send
                  </button>
                </div>
              </div>
          
            </>
          ) : (
            <div className="flex justify-end items-center">
              <button
                className="text-[14px] leading-[20px]  bg-[#F2994A] h-[40px] rounded-lg py-[10px] px-[24px] text-center  text-white"
                onClick={() => setshow(!show)}
              >
                Reply
              </button>
              </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Message
