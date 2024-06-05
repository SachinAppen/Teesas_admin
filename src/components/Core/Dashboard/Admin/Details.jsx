import React from "react";
import Headcomponent from "../../../common/Headcomponent";
import Custombutton from "../../../common/Custombutton";
import sharp from '../../../../assets/images/sharp.png'
import arrowleft from "../../../../assets/images/arrowleft.png";
import arrowright from "../../../../assets/images/arrowright.png";

const Details = () => {
  const data = [
    {
      label: "Date",
      value: "10-10-2020",
    },
    {
      label: "Date",
      value: "10-10-2020",
    },
    {
      label: "Date",
      value: "10-10-2020",
    },
    {
      label: "Date",
      value: "10-10-2020",
    },
    {
      label: "Date",
      value: "10-10-2020",
    },
    {
      label: "Date",
      value: "10-10-2020",
    },
  ];
  const History=[
    {
        username:"username",
        message:"I need to upgrade my son's grade because he's now in high school. what are the steps to doing that please"
    },
    {
        username:"username",
        message:"I need to upgrade my son's grade because he's now in high school. what are the steps to doing that please"
    },
    {
        username:"username",
        message:"I need to upgrade my son's grade because he's now in high school. what are the steps to doing that please"
    },
    {
        username:"username",
        message:"I need to upgrade my son's grade because he's now in high school. what are the steps to doing that please"
    },
  ]
  return (
    <div className="">
      <div className=" rounded-[24px] py-[20px] px-[16px] bg-[#FFFFFF] mt-4 ">
        <div className="Border ">
          <h2 className=" font-medium text-[18px]  leading-[20px] text-[#2C2E32] pb-[20px]">
            Details
          </h2>
        </div>
        <div className="bg-[#F2F2F2] p-[16px] rounded-[16px] mt-5">
          <div>
            <p className=" font-normal text-[14px] leading-[20px] text-[#219653] text-right">
              Download CSV
            </p>
          </div>
          <div className="bg-[#FFFFFF] py-[10px] px-[8px] mt-2 rounded">
            {data.map((item) => (
              <div className="flex custom-gap-md .custom-gap-lg gap-12 items-center">
                <div>
                  <p className=" font-normal text-[12px] lg:text-[14px] leading-[18px] text-[#1F1F1FB2]">
                    {item.label}
                  </p>
                  <p className=" text-[13px] lg:text-[16px] leading-[20px] font-normal text-[#222222E5]">
                    {item.value}
                  </p>
                </div>
                <div>
                  <p className=" font-normal text-[12px] lg:text-[14px] leading-[18px] text-[#1F1F1FB2]">
                    {item.label}
                  </p>
                  <p className=" text-[13px] lg:text-[16px] leading-[20px] font-normal text-[#222222E5]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" lg:grid grid-cols-2  gap-6">
        <div className=" rounded-[18px] py-[20px] px-[20px] bg-[#FFFFFF] box-shadow mt-5  ">
            <div className="Border">
          <Headcomponent value="Student List" />
          </div>

          <div className="">
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <div className="px-[18px] py-[10px]">
                <h6 className=" font-light text-[12px] leading-[13px] text-[#767676] ">
                  {user.created_at}
                </h6>
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex  items-center gap-3 px-[18px]">
                  {/* <div>
                    <img src={item.icon1} alt="Icon 1" />
                  </div> */}
                  <div className="flex items-center  gap-2">
                    <p>{user.first_name}</p>
                    <p>{user.last_name}</p>
                  </div>
                </div>
                <div className="flex justify-between pr-[15px]">
                        <div>
                          <div className="pl-[20px]  flex flex-col gap-[10px]">
                            <p className=" font-normal text-[#555555] text-[12px] leading-[15px]">
                            User Type
                            </p>
                            <div className="flex  items-center  py-[1px]  w-[96px] h-[16px]  bg-[#F2F2F2] ">
                              {/* <img
                                className="h-[11px]"
                                src={item.icon2}
                                alt="Icon 2"
                              /> */}
                              <p className=" font-bold text-[12px] leading-[15px] text-[#555555]">
                               
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Custombutton value="Visible"
                             img={sharp}
                             backgroundcolor="bg-[#E9FDEE]"
                             textcolor="text-[#2760EA]"
                             imagePosition="left"
                          />
                        </div>
                      </div>
               
              </div>
            </li>
          ))}
        </ul>
      </div>
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
        <div className=" rounded-[18px] py-[20px] px-[14px] lg:px-[20px] bg-[#FFFFFF] box-shadow mt-5  ">
            <div className="Border font-medium text-[18px] leading-[25px] text-[#2C2E32]">
            Chat History
          </div>
          <div className="bg-[#F2F2F2] rounded-[16px] p-[16px] mt-5">
            {
                History.map((item)=>(
                    <div className=" border border-[#A8A8A8] bg-[#FFFFFF] px-[8px] mt-4 py-[10px] h-[135px] rounded-[8px]">
                        <div className="flex gap-2 pb-[10px]  Border">
                        <div className=" w-[32px] h-[32px] bg-[#D9D9D9] rounded-full"></div>
                        <div className=" font-bold text-[12px] leading-[21px] text-[#221B38]">{item.username}</div>
                        </div>
                        <p className=" font-normal mt-2 text-[13px] lg:text-[14px] leading-[18px] text-[#222222E5]">{item.message}</p>

                    </div>
                ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
