import React from "react";
import Custombutton from "../../../common/Custombutton";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

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

      {/* <div>
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
      </div> */}

      <div class="overflow-x-auto mt-5  rounded-t-[16px]  ">
        <table id="table-body" class=" min-w-full">
          <thead class="bg-[#B053F9] text-white">
            <tr>
            <th class="px-4 py-4 whitespace-nowrap font-bold text-[14px] leading-[16px] text-white">Position</th>
              <th class="px-4 py-4 whitespace-nowrap font-bold text-[14px] leading-[16px] text-white">Student Name</th>
              <th class="px-4 py-4 whitespace-nowrap font-bold text-[14px] leading-[16px] text-white">Student Name</th>
              <th class="px-4 py-4 whitespace-nowrap font-bold text-[14px] leading-[16px] text-white">Academy Name</th>
              <th class="px-4 py-4 whitespace-nowrap font-bold text-[14px] leading-[16px] text-white">Local Government</th>
              <th class="px-4 py-4 whitespace-nowra font-bold text-[14px] leading-[16px] text-whitep">Last seen</th>
              <th class="px-4 py-4 whitespace-nowrap font-bold text-[14px] leading-[16px] text-white">Points</th>
            </tr>
          </thead>
          <tbody>
          
            <tr class="bg-white my-4">
            <td class="px-4 py-5 text-center whitespace-nowrap  font-semibold text-[15px] leading-[20px] text-[#000000] ">1</td>
              <td class="px-4 py-5 text-center whitespace-nowrap  font-semibold text-[15px] leading-[20px] text-[#000000] ">James Omokewe</td>
              <td class="px-4 py-4 text-center whitespace-nowrap  font-semibold text-[15px] leading-[20px] text-[#000000] ">Abasco Academy</td>
              <td class="px-4 py-4 text-center whitespace-nowrap  font-semibold text-[15px] leading-[20px] text-[#000000] ">Edo West</td>
              <td class="px-4 py-4 text-center whitespace-nowrap  font-semibold text-[15px] leading-[20px] text-[#000000] ">30 seconds ago</td>
              <td class="px-4 py-4 text-center whitespace-nowrap  font-semibold text-[15px] leading-[20px] text-[#000000] ">120</td>
              <td class="px-4 py-4 text-center whitespace-nowrap  font-semibold text-[15px] leading-[20px] text-[#000000] ">
              <div className="text-[#FB9F00] font-normal text-[12px] leading-[16px] cursor-pointer" onClick={()=>{Navigate('/LeaderBoardProfile')}} >
                View Performance
              </div>
              </td>

              
            </tr>
        
       
          </tbody>
     
        
        </table>
          
        <div className="user bg-white fixed    w-full">
    
    <Custombutton
        value="Previous"
        hidden="hidden"
        icon={<FaArrowLeft />}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="left"
        width="w-[115px]"
      />
      <Custombutton
        value="Next"
          hidden="hidden"
        icon={<FaArrowRight />}
        backgroundcolor="bg-[#F2F2F2]"
        textcolor="text-[#000000]"
        imagePosition="right"
      />
              </div>
      </div>
    </div>
  );
};


export default LeaderBoardlist;