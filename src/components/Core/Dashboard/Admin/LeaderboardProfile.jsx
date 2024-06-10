import React from "react";
import Ellipse from "../../../../assets/images/Ellipse.png";
import PieChart from "../../Userpage/piechart";
import BarChart from "./Barcharts";
import Profile from "../../../../assets/images/Profile.png";
import ActivityLog from "./ActivityLog";
import { FaChevronLeft } from "react-icons/fa";

const LeaderboardProfile = ({ isOpen }) => {
  const pieChartData = [30, 20, 50];
  const pieChartLabels = ["Label 1", "Label 2", "Label 3"];
  const data=[
    {
      time:"50%",
      accuracy:'Accuracy',
      img:{Profile}
    },
    {
        time:"12 sec",
        accuracy:'Avg Speed /Question',
        img:{Profile}
      },
      {
        time:"12 sec",
        accuracy:'Avg Speed /Question',
        img:{Profile}
      },
      {
        time:"12 sec",
        accuracy:'Avg Speed /Question',
        img:{Profile}
      },
  ]
  return (
    <div
     className={`py-[7rem] lg:px-[5rem]  px-[10px] ${isOpen ? "xl:ml-[260px]" : ""}`}>
         <div className='flex justify-start  items-center lg:gap-3'>
        <FaChevronLeft />
        <div>
          <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home /<span className='text-black font-medium'> LeaderBoard</span></div>
        </div>
      </div>
      <div>
        <h2 className=" font-bold mt-7 text-[22px] leading-[28px] text-[#2C2E32]">
          Profile Details
        </h2>
      </div>
      <div className=" rounded-2xl lg:h-[150px] lg:p-[16px]  bg-[#FFFFFF]  lg:flex items-center  gap-40   mt-5">
        <div className="flex items-center gap-5">
          <div>
            <img src={Ellipse} />
          </div>
          <div className="flex flex-col items-center gap-2 pt-[12px] lg:pt-0">
            <h3 className=" font-bold text-[20px] leading-[27px] text-[#171818]">
              Esther Umeh
            </h3>
            <div className="w-[118px]">
              <p className=" font-bold text-[12px] text-[#7A7A7A]">Grade 3</p>
              <p className=" pt-3  font-normal text-[12px] leading-[21px] text-[#7A7A7A]">
                Last Seen
              </p>
            </div>
          </div>
        </div>

        <div className=" md:grid lg:grid grid-cols-4 gap-5 px-[8px] pb-[10px] lg:pb-0 lg:px-0">
          <div className="p-[10px] bg-[#F3F7FC] mt-4 lg:mt-0 flex flex-col gap-2  lg:w-[223px] h-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[16px] font-normal leading-[12px] text-[#001D4A] mt-2">
                Total Points
              </p>
            </div>
            <div>
              <p className="font-bold text-[19px] lg:text-[26px] leading-[38px] text-[#000000]">
                12,345
              </p>
            </div>
          </div>
          <div className="p-[10px] bg-[#F3F7FC] flex flex-col gap-2 mt-4 lg:mt-0  lg:w-[223px]  lh-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[16px] leading-[12px] text-[#001D4A] mt-2">
                Dialogues Passed
              </p>
            </div>
            <div>
              <p className="font-bold text-[19px] lg:text-[26px] leading-[38px] text-[#000000]">
                20
              </p>
            </div>
          </div>
          <div className="p-[10px] bg-[#F3F7FC] mt-4 lg:mt-0  flex flex-col gap-2  lg:w-[223px] h-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[16px] leading-[12px] text-[#001D4A] mt-2">
                Top 3 Finish
              </p>
            </div>
            <div>
              <p className="font-bold text-[19px] lg:text-[26px] leading-[38px] text-[#000000]">
                20
              </p>
            </div>
          </div>
          <div className="p-[10px] bg-[#F3F7FC] mt-4 lg:mt-0  flex flex-col gap-2    lg:w-[223px] h-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[16px] leading-[12px] text-[#001D4A] mt-2">
                Highest Score
              </p>
            </div>
            <div>
              <p className="font-bold text-[26px] leading-[38px] text-[#000000]">
                20
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" rounded-[12px] border border-[#EFF1F5] lg:p-[24px] bg-[#FFFFFF] mt-10">
          {/* <div className=" lg:grid grid-cols-3 gap-[33px]">
            <div className=" font-bold text-[18px] leading-[20px] text-[#A7A7A7]">
              Daily Points Stats
            </div>
            <div className=" font-bold text-[18px] text-left leading-[20px] text-[#A7A7A7]">
              Overall Stats
            </div>
            <div className=" font-bold text-[18px] text-left leading-[20px] text-[#A7A7A7] ">
              Statistics
            </div>
          </div> */}
          <div className=" lg:grid grid-cols-3 gap-6 mt-3">
          <div>
            <div className=" my-[20px] px-[10px] font-bold text-[18px] leading-[20px] text-[#A7A7A7]">
              Daily Points Stats
            </div>
            <div className=" rounded-lg px-[10px] lg:p-[16px] bg-[#FFFAF4]">
              <BarChart />
            </div>
            </div>
            <div>
            <div className=" my-[20px] px-[10px] font-bold text-[18px] text-left leading-[20px] text-[#A7A7A7]">
              Overall Stats
            </div>
            <div className=" lg:mt-0 mt-5 rounded-lg lg:p-[16px] bg-[#FFFAF4] ">
              <PieChart data={pieChartData} labels={pieChartLabels} />
            </div>
            </div>
            <div>
            <div className=" my-[20px] px-[10px] font-bold text-[18px] text-left leading-[20px] text-[#A7A7A7] ">
              Statistics
            </div>
            <div className=" rounded-lg  lg:p-[16px] bg-[#FFFAF4] ">
     
              <div>
                <div className="lg:mt-0 mt-5  p-[8px] w-full flex flex-col  gap-[2rem] ">
                    {
                        data.map((item)=>(
                            <div className="lg:flex items-center w-full  bg-[#FFFFFF]  p-2 border-2 border-[#EFF1F5] rounded-[16px]">
                            <div className="w-[24px] h-[24px] roumded-[4px]">
                              <img src={Profile} />
                            </div>
                            <div>
                              <p className=" text-[16px]  leading-[20px] font-bold text-[#252526]">{item.time}</p>
                              <p className=" font-light text-[10px] leading-[12px] text-[#A7A7A7]">{item.accuracy}</p>
                            </div>
                          </div>
                        ))
                    }
               
               
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <ActivityLog/>

    </div>
  );
};

export default LeaderboardProfile;
