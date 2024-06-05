import React from "react";
import Ellipse from "../../../../assets/images/Ellipse.png";
import PieChart from "../../Userpage/piechart";
import BarChart from "./Barcharts";
import Profile from "../../../../assets/images/Profile.png";
import ActivityLog from "./ActivityLog";

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
      className={`py-[8rem] lg:px-[9rem] px-[10px]  ${
        isOpen ? "ml-[240px]" : ""
      }`}
    >
      <div>
        <h2 className=" font-bold text-[22px] leading-[28px] text-[#2C2E32]">
          Profile Details
        </h2>
      </div>
      <div className=" rounded-2xlx lg:h-[150px] lg:p-[16px]  bg-[#FFFFFF]  lg:flex items-center justify-between mt-5">
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
              <p className="  font' text-[12px] leading-[21px] text-[#7A7A7A]">
                Last Seen
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex lg:flex items-center gap-5 px-[8px] pb-[10px] lg:pb-0 lg:px-0">
          <div className="p-[10px] bg-[#F3F7FC] mt-4 lg:mt-0 flex flex-col gap-2 md:w-[180px] lg:w-[200px] lg:h-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[12px] leading-[12px] text-[#001D4A] mt-2">
                Total Points
              </p>
            </div>
            <div>
              <p className="font-bold text-[19px] lg:text-[28px] leading-[38px] text-[#000000]">
                12,345
              </p>
            </div>
          </div>
          <div className="p-[10px] bg-[#F3F7FC] flex flex-col gap-2 mt-4 lg:mt-0 md:w-[180px] lg:w-[200px]  lg:h-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[12px] leading-[12px] text-[#001D4A] mt-2">
                Dialogues Passed
              </p>
            </div>
            <div>
              <p className="font-bold text-[19px] lg:text-[28px] leading-[38px] text-[#000000]">
                20
              </p>
            </div>
          </div>
          <div className="p-[10px] bg-[#F3F7FC] mt-4 lg:mt-0  flex flex-col gap-2 md:w-[180px] lg:w-[200px] lg:h-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[12px] leading-[12px] text-[#001D4A] mt-2">
                Top 3 Finish
              </p>
            </div>
            <div>
              <p className="font-bold text-[19px] lg:text-[28px] leading-[38px] text-[#000000]">
                20
              </p>
            </div>
          </div>
          <div className="p-[10px] bg-[#F3F7FC] mt-4 lg:mt-0  flex flex-col gap-2  md:w-[180px] lg:w-[200px]  lg:h-[80px]  py-[10px]  px-[15px] rounded-xl">
            <div>
              <p className="text-[12px] leading-[12px] text-[#001D4A] mt-2">
                Highest Score
              </p>
            </div>
            <div>
              <p className="font-bold text-[28px] leading-[38px] text-[#000000]">
                20
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" rounded-[12px] border border-[#EFF1F5] lg:p-[24px] bg-[#EFF1F5] mt-10">
          <div className="lg:flex items-center gap-[23rem]">
            <div className=" font-bold text-[18px] leading-[20px] text-[#A7A7A7]">
              Daily Points Stats
            </div>
            <div className=" font-bold text-[18px] leading-[20px] text-[#A7A7A7]">
              Overall Stats
            </div>
            <div className=" font-bold text-[18px] leading-[20px] text-[#A7A7A7] lg:pl-[8px]">
              Statistics
            </div>
          </div>
          <div className="lg:flex gap-[3rem] items-center mt-3">
            <div className=" rounded-lg lg:p-[16px] lg:w-[469px] lg:h-[330px] bg-[#FFFAF4]">
              <BarChart />
            </div>
            <div className=" lg:mt-0 mt-5 rounded-lg lg:p-[16px] bg-[#FFFAF4]  lg:w-[430px] lg:h-[330px]">
              <PieChart data={pieChartData} labels={pieChartLabels} />
            </div>
            <div className=" rounded-lg  lg:p-[16px] bg-[#FFFAF4] ">
              <div>
                <div className="lg:mt-0 mt-5  p-[8px] lg:w-[430px] lg:h-[300px] flex flex-col  gap-[2rem] ">
                    {
                        data.map((item)=>(
                            <div className="lg:flex items-center  bg-[#FFFFFF]  p-2 border-2 border-[#EFF1F5] rounded-[16px]">
                            <div className="w-[24px] h-[24px] roumded-[4px]">
                              <img src={Profile} />
                            </div>
                            <div>
                              <p className=" text-[16px] leading-[20px] font-bold text-[#252526]">{item.time}</p>
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
      <ActivityLog/>

    </div>
  );
};

export default LeaderboardProfile;
