import React, { useState } from "react";
import Vector from "../../../../assets/images/Vector.png";
import SearchButton from "../../../../assets/images/Searchbutton.png";
import { CiStar } from "react-icons/ci";
import PopMessage from "./PopMessage";
import Message from "../../../common/Message";

const FeedbackInfo = () => {

  const data = [  
    {
      id: 1,
      label: "First Name",
      value: "James",
    },
    {
      id: 2,
      label: "Last Name",
      value: "Sid",
    },
    {
      id: 3,
      label: "ID",
      value: "TES110201",
    },
    {
      id: 4,
      label: "Date of registration",
      value: "10-10-2020",
    },
    {
      id: 5,
      label: "Channel",
      value: "Lesson Videos",
    },
    {
      id: 6,
      label: "Date Sent",
      value: "10-10-2020",
    },
    {
      id: 7,
      label: "Email",
      value: "siddxd@growthx.com",
    },
    {
      id: 8,
      label: "Phone Number",
      value: "+234 9065245732",
    },
    {
      id: 9,
      label: "Status",
      value: "Resolved",
    },
  ];
  return (
    <div>
      <div className="mt-10 bg-[#FFFFFF] border border-[#ECEDEE]  rounded-[18px]  pb-[20px] box-shadow">
        <div className="Border">
          <div className="flex justify-between items-center py-[10px] px-[15px] ">
            <div>
              <h2 className=" font-medium text-[18px] leading-[25px] text-[#2C2E32]">
                Feedback Information
              </h2>
            </div>
            <div className="flex items-center">
              <div className="w-[39px] h-[42px]">
                <img src={SearchButton} />
              </div>
              <div className="w-[24px] h-[24px]">
                <img src={Vector} />
              </div>
            </div>
          </div>
        </div>
        <div className="px-[10px] mt-5">
          <div className=" rounded-2xl bg-[#F2F2F2] p-[16px]">
            <div className="bg-[#FFFFFF] py-[10px] px-[8px] rounded-[4px]">
              {data.map((item) => (
                <div
                  key={item.id}
                  className=" flex gap-2 md:gap-[30rem] lg:gap-[40rem] mt-2 "
                >
                  <div className=" w-[121px] md:w-[121px] lg:w-[121px] font-normal text-[14px] leading-[18px] text-[#1F1F1FB2]">
                    {item.label}
                  </div>
                  <div className="">
                    <p className=" font-normal   text-[16px] leading-[20px] text-[#222222E5]">
                    {item.value}
                    { item.value=="Status"?(
                      <>
                        <div className="h-[20px] bg-[#70FFB7] rounded-[15px] text-black font-normal text-[13px] leading-[15px] text-center">
                        {item.value}
                        </div>
                      </>
                    ):""}
                    
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    <Message/>
    </div>
  );
};

export default FeedbackInfo;
