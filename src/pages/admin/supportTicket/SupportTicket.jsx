import React from "react";
import live from "../../../assets/images/live.png";
import liveimage from "../../../assets/images/liveimage.png";
import UserCard from "../../../components/common/UserCard";
import TicketList from "../../../components/Core/Dashboard/Admin/TicketList";
const SupportTicket = ({ isOpen }) => {
  return (
    <div
      className={`p-4 lg:pl-[161px] lg:pr-[129px] ${
        isOpen ? "lg:ml-[240px]" : ""
      }`}
    >
      <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] mt-32">
        Support Ticket
      </h2>
      <div className="mt-5">
        <UserCard
          label="Total Support Ticket"
          height="h-[111px]"
          backgroundcolor="bg-[#FFFFFF]"
          value="10"
          imgbg={live}
          imglogo={liveimage}
        />
        <div className=" lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 mt-5 gap-4">
        <UserCard
          label="Total Resolved"
          height="h-[90px]"
          backgroundcolor="bg-[#EEFFEE]"
          value="10"
        />
        <UserCard
          label="Total Pending"
          height="h-[90px]"
          backgroundcolor="bg-[#FFF2DA]"
          value="18"
        />
        <UserCard
          label="Total Delayed"
          height="h-[90px]"
          backgroundcolor="bg-[#FFE1E2]"
          value="45"
        />
        </div>
      </div>
      <TicketList/>
    </div>
  );
};

export default SupportTicket;
