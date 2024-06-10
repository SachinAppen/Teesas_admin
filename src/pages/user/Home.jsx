import React, { useEffect, useState } from "react";
import Navigation from "../../components/common/Navigation";
import frame2 from "../../assets/images/Frame2.png";
import UserCard from "../../components/common/UserCard";
import Button from "../../components/common/Button";
import StudentList from "../../components/Core/StudentList";
import Headcomponent from "../../components/common/Headcomponent";
import arrow_upward from '../../assets/images/arrow_upward.png'
import { useDispatch } from "react-redux";
import { userAsync } from "../../apis/slices/authSlice";
import { FaChevronLeft } from "react-icons/fa";
import notes from "../../assets/images/Group1000001600.png";
const Home = ({ isOpen, toggleSidebar }) => {
  const [selectedMonth, setSelectedMonth] = useState("August");
  const [data, setdata] = useState([]);
  const token = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("months", selectedMonth);
    userAsync({
      dispatch: dispatch,
      month: selectedMonth,
      token: token,
      callbackFn: (res) => {
        console.log(res);
        console.log("month", selectedMonth);
        if (res?.data?.status === 200) {
          setdata(res?.data?.data?.statistics);
          setLoading(false);
        } else {
          toast.error(res?.data?.message);
          setLoading(false);
        }
      },
    });
  }, [selectedMonth, dispatch, token]);

  return (
    <div>
      <div
        className={` py-[7rem] lg:px-[5rem] px-[10px] ${isOpen ? "xl:ml-[260px]" : ""}`}>
              <div className='flex justify-start items-center lg:gap-3'>
          <FaChevronLeft />
          <div>
           <div className=' font-normal text-[14px] lg:text-[16px] leading-[20px] text-[#B6B6B6]'>Home /<span className='text-black font-medium'> Users</span></div>
          </div>
    </div>
        <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] mt-10 ">
          Users
        </h2>
        <div className="flex gap-5 flex-col mt-4 ">
          <UserCard
            label="Total User"
            height="h-[153px]"
            backgroundcolor="bg-[#FFFFFF]"
            value={data.total_users}
            value2="1.10% Since yesterday"
            img={arrow_upward}
            img2={notes}
          />
          <div className="  lg:h-[214px] py-[16px] px-[17px] rounded-xl bg-[#FFFFFF]">
            <div className="flex items-center justify-end mb-[10px] border border-[#ECEDEE] ml-auto px-[8px] rounded w-[95px] h-[30px]">
              <button className=" font-normal text-[14px] leading-[18px] text-[#000000]">
                Monthly
              </button>
              <img src={frame2} className="w-[22px] h-[22px]" />
            </div>
            <div className="lg:flex  block  gap-[10px] ">
              <UserCard
                label="Total Active Users"
                width="lg:w-[50%]"
                height="lg:h-[142px]"
                backgroundcolor="bg-[#F2F2F2]"
                value={data.active_users}
                value2="1.10% Since yesterday"
                img={arrow_upward}
                img2={notes}
              />
              <UserCard
                label="Total Deactivated Users"
                width="lg:w-[50%]"
                height="lg:h-[142px]"
                backgroundcolor="bg-[#F2F2F2]"
                value={data.suspended_user}
                value2="1.10% Since yesterday"
                 img={arrow_upward}
                 img2={notes}
              />
            </div>
          </div>
        </div>
        <Button value1={"Export CSV"}
        value2={"Add User"} />
        <Headcomponent border="none"  />
        <StudentList />
      </div>
    </div>
  );
};
export default Home;
