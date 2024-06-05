import React from "react";
import Parctice from "./Parctice";
import BarChart from "./Barcharts";
import Profile from '../../../../assets/images/Profile.png'

const ActivityLog = () => {
  const data = [
    {
      Date: "12/03/2022",
      tag: "Esther watched numbers in mathematics",
      time: "12:30",
    },
    {
      Date: "12/03/2022",
      tag: "Esther watched numbers in mathematics",
      time: "12:30",
    },
    {
      Date: "12/03/2022",
      tag: "Esther watched numbers in mathematics",
      time: "12:30",
    },
    {
      Date: "12/03/2022",
      tag: "Esther watched numbers in mathematics",
      time: "12:30",
    },
  ];

  const subjects=[
    {
        name:"Mathematics"
    },
    {
        name:"English"
    },
    {
        name:"Science"
    },
  ]
  return (
    <div className="lg:grid grid-cols-2  gap-10 mt-5">
      <div>
        <div className=" rounded-[12px] py-[20px] px-[25px] bg-[#FFFFFF] activity lg:h-[450px]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className=" font-extrabold text-[15px] lg:text-[22px] leading-[30px] text-[#000000]">
              Activity Log
              </h2>
            </div>
            <div className=" text-[12px] lg:text-[14px] leading-[19px] font-normal text-[#0B6661] ">
              View All
            </div>
          </div>

          <div className=" lg:px-[20px] py-[30px] flex flex-col gap-4 ">
            {data.map((item) => (
              <div className="flex flex-col gap-4 ">
                <p className=" font-bold text-[12px] lg:text-[14px] text-[#999999] leading-[11px]">
                  {item.Date}
                </p>
                <p className=" font-semibold text-[15px] lg:text-[18px] leading-[19px] text-[#000000]">
                  {item.tag}
                </p>
                <p className=" font-normal text-[12px] lg:text-[14px] leading-[11px] text-[#126DFB]">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
    
      <div className="mt-9">
        <div className=" rounded-[12px] py-[20px] px-[25px] bg-[#FFFFFF] activity lg:h-[450px]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className=" font-extrabold  text-[15px] lg:text-[22px] leading-[30px] text-[#000000]">
              Favourite Lessons
              </h2>
            </div>
            <div className=" text-[12px] lg:text-[14px] leading-[19px] font-normal text-[#0B6661] ">
              View All
            </div>
          </div>

          <div className=" lg:px-[20px] py-[30px] flex flex-col gap-4 ">
            {data.map((item) => (
              <div className="flex flex-col gap-4 ">
                <p className=" font-bold  text-[12px] lg:text-[14px] text-[#999999] leading-[11px]">
                  {item.Date}
                </p>
                <p className=" font-semibold text-[15px] lg:text-[18px] leading-[19px] text-[#000000]">
                  {item.tag}
                </p>
                <p className=" font-normal text-[12px] lg:text-[14px] leading-[11px] text-[#126DFB]">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className=" mt-10">
            <div>
                <h2 className="font-extrabold text-[22px] leading-[30px] text-[#171818]">Stats</h2>
            </div>
            <div className="lg:p-[24px] rounded-[12px] bg-[#FFFFFF] border border-[#EFF1F5] mt-5">
                <div className=" rounded-[8px] lg:p-[16px] bg-[#FFFAF4] lg:w-[460px] lg:h-[290px]">
                    <BarChart/>

                </div>

            </div>
        </div>
        <div className="mt-5 lg:mt-10 ">
            <div>
                <h2 className="font-extrabold text-[18px] lg:text-[22px] leading-[30px] text-[#171818]">Subject Performance</h2>
            </div>
            <div className="lg:p-[24px] rounded-[12px] bg-[#FFFFFF] border border-[#EFF1F5] mt-2 lg:mt-5 px-[8px] ">
           {
            subjects.map((item)=>(
                <div className="flex justify-between items-center mt-5">
                    <div className="flex items-center gap-4">
                    <img src={Profile} className="lg:w-[40px] lg:h-[40px]"/>
                    <p className=" font-bold text-[15px] lg:text-[18px] leading-[24px] text-[#000000] ">{item.name}</p>
                    </div>
                    <div>
                        <p className=" font-normal text-[12px] leading-[21px] text-[#000000]">20% Completed</p>
                        <input type="range" min="0" max="100" value='20' className="accent"/>
                    </div>
                </div>
            ))
           }
            </div>
        </div>
      </div>
      <div>
        <Parctice />
      </div>
    </div>
  );
};

export default ActivityLog;
