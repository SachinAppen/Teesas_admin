import React from "react";
import Custombutton from "../../../common/Custombutton";
import arrowleft from "../../../../assets/images/arrowleft.png";
import arrowright from "../../../../assets/images/arrowright.png";
import { useNavigate } from "react-router-dom";

const LeaderBoardlist = () => {
  const Navigate = useNavigate();
  const data = [
    {
      name: "Position",
    },
    {
      name: "Student Name",
    },
    {
      name: "Academy Name",
    },
    {
      name: "Local Governmanet",
    },
    {
      name: "Last Seen",
    },
    {
      name: "Points",
    },
  ];
  const info = [
    {
      id: 1,
      name: "James Omokewe",
      AcademyName: "Abasco Academy",
      Localgover: "Edo West",
      Lastseen: "30 seconds ago",
      Points: "120",
    },
    {
      id: 2,
      name: "James Omokewe",
      AcademyName: "Abasco Academy",
      Localgover: "Edo West",
      Lastseen: "30 seconds ago",
      Points: "120",
    },
    {
      id: 3,
      name: "James Omokewe",
      AcademyName: "Abasco Academy",
      Localgover: "Edo West",
      Lastseen: "30 seconds ago",
      Points: "120",
    },
    {
      id: 4,
      name: "James Omokewe",
      AcademyName: "Abasco Academy",
      Localgover: "Edo West",
      Lastseen: "30 seconds ago",
      Points: "120",
    },
    {
      id: 5,
      name: "James Omokewe",
      AcademyName: "Abasco Academy",
      Localgover: "Edo West",
      Lastseen: "30 seconds ago",
      Points: "120",
    },
  ];
  return (
    <div>
      <div>
        <div
          className="h-[77px] border border-[#EBEBEB] bg-[#B053F9] rounded-t-[16px] rounded-r-[16px] mt-5"
          style={{ overflowX: "auto" }}
        >
          <ul
            className="flex items-center gap-[155px] pl-[50px] "
            style={{ minWidth: "800px" }}
          >
            {data.map((item) => (
              <li
                className=" mt-[27px] font-bold text-[14px] leading-[16px] text-white"
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="bg-[#FFFFFF]  rounded-b-[16px] rounded-l-[16px] flex-col pt-[2rem]  flex gap-[5rem]"
          style={{ overflowY: "auto", maxHeight: "500px" }}
        >
          {info.map((item) => (
            <div
              className="flex justify-around items-center  "
              key={item.id}
            >
              <div className="text-center font-semibold text-[15px] leading-[20px] text-[#000000] ">
                {item.id}
              </div>
              <div className="text-center font-semibold text-[15px] leading-[20px] text-[#000000] ">
                {item.name}
              </div>
              <div className="text-center font-semibold text-[15px] leading-[20px] text-[#000000] ">
                {item.AcademyName}
              </div>
              <div className="text-center font-semibold text-[15px] leading-[20px] text-[#000000] ">
                {item.Localgover}
              </div>
              <div className="text-center font-semibold text-[15px] leading-[20px] text-[#000000]">
                {item.Lastseen}
              </div>
              <div className="text-center font-semibold text-[15px] leading-[20px] text-[#000000] ">
                {item.Points}
              </div>
              <div className="text-[#FB9F00] font-normal text-[12px] leading-[16px] cursor-pointer" onClick={()=>{Navigate('/LeaderBoardProfile')}} >
                View Performance
              </div>
            </div>
          ))}
          <div className="user">
            <Custombutton
              value="Previous"
              img={arrowleft}
              backgroundcolor="bg-[#F2F2F2]"
              textcolor="text-[#000000]"
              imagePosition="left"
            />
             <Custombutton
              value="Next"
              img={arrowright}
              backgroundcolor="bg-[#F2F2F2]"
              textcolor="text-[#000000]"
              imagePosition="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default LeaderBoardlist;