import React from "react";
import tessas from "../../../assets/images/Tessas.png";
import arrowleft from "../../../assets/images/arrowleft.png";
import arrowright from "../../../assets/images/arrowright.png";
import Headcomponent from "../../../components/common/Headcomponent";
import Custombutton from "../../../components/common/Custombutton";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const AdminRoleList = () => {
  const data = [
    {
      name: "Admin",
    },
    {
      name: "SubAdmin",
    },
    {
      name: "SalesAdmin",
    },
  ];
  return (
    <div className="bg-[#FFFFFF] p-4 mt-5 rounded-[18px]">
      <Headcomponent value="Admin Role List" border="Border" />
      <div className="">
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <div className="flex gap-2 items-center">
                <div className="px-[18px]  mt-5 flex  items-center gap-[2px] ">
                  <div className="w-[39px] h-[33px] rounded-full bg-[#F8F5ED] relative">
                    <img
                      src={tessas}
                      alt=""
                      className=" absolute top-[11px] left-[6px]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      {/* <div>
                  <img src={item.icon1} alt="Icon 1" />
                </div> */}
                      <div className="">
                        <p className=" font-bold text-[14px] leading-[16px] text-[#171717] ">
                          {user.name}
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="user">
    
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

export default AdminRoleList;
