import React, { useEffect, useState } from "react";
import arrowleft from "../../assets/images/arrowleft.png";
import arrowright from "../../assets/images/arrowright.png";
import Custombutton from "../common/Custombutton";
import frame2 from "../../assets/images/Frame2.png";
import check from "../../assets/images/check.png";
import Modal from "../common/Modal";
import { getuserAsync, userAsync } from "../../apis/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const StudentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [data, setdata] = useState([]);
  const Navigate=useNavigate();
  const token = localStorage.getItem("authToken");
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFilterByCourse = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(false);
  };

  const handleFilterByStatus = (status) => {
    setSelectedStatus(status);
    setIsModalOpen(false);
  };

  const handleFilterByMonth = (month) => {
    setSelectedMonth(month);
    setIsModalOpen(false);
  };
  useEffect(() => {
    getuserAsync({
      dispatch: dispatch,
      token: token,
      callbackFn: (res) => {
        console.log(res);
        if (res?.data?.status === 200) {
          // const data = res?.data?.data?.user?.[0];
          // const data=res?.data?.data?.statistics
          setdata(res?.data?.data?.users);
          setLoading(false);
        } else {
          toast.error(res?.data?.message);
          setLoading(false);
        }
      },
    });
  }, [dispatch, token]);

  return (
    <div className="py-[2px]  rounded-[18px] bg-[#FFFFFF]  mt-3 ">
      <div className="user">
        <h2 className="text-[22px]  leading-6 text-[#2C2E32] font-medium">
          Users/Student List
        </h2>
        <Custombutton
          value="Filter"
          img={frame2}
          backgroundcolor="bg-[#F2F2F2]"
          textcolor="text-[#000000]"
          imagePosition="right"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div className="">
        <ul>
          {data.map((user) => (
            <li key={user.id} className="cursor-pointer" onClick={()=>{Navigate('/userDetails')}} >
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
                             grade
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
                          <Custombutton value="Status"
                            img={check}
                            backgroundcolor="bg-[#ede1d5]"
                            textcolor="text-[#EA8527]"
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
      {isModalOpen && (
        <Modal
          closeModal={handleModalClose}
          label="Filter"
          value1="Filter By Course"
          value2="Filter By Status"
          value3="Filter By Month"
          onSelectCourse={handleFilterByCourse}
          onSelectStatus={handleFilterByStatus}
          onselectmonth={handleFilterByMonth}
        />
      )}
    </div>
  );
};

export default StudentList;
