import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import success from '../../../assets/images/success.png'
import { useNavigate } from "react-router-dom";

const SucessfullSchedule = () => {
const Navigate = useNavigate();
  return (
    <div>
      <Popup
        open={true}
        closeOnDocumentClick={false}
        position="center center"  
      >
        <div className=" rounded-[16px] bg-[#FFFFFF] flex flex-col p-4 gap-3 lg:gap-6 justify-center items-center lg:w-[700px] ">
          <div className=" w-[60px] lg:w-[150px] lg:h-[150px]">
            <img  src={success}/>
          </div>
          <h3 className="font-bold text-[18px] lg:text-[42px] lg:leading-[54px] text-[#171818]">Class Schedule Successful</h3>
          <div className=" rounded-lg py-[10px] px-[20px] bg-[#FFF9ED] flex justify-between w-[280px] lg:w-[500px] h-[78px]">
            <div>
              <p className=" font-normal text-[12px] lg:text-[14px] leading-[19px] text-[#000000]">
                Your Live Class Link
              </p>
              <a
                href="#"
                className=" font-bold text-[14px] lg:text-[18px] leading-[18px] text-[#000000]"
              >
                liveclass . link
              </a>
            </div>
            <div className="mt-2">
              <p className=" text-[12px] text-center lg:text-[16px] leading-[19px] py-[5px] rounded-[40px] px-[17px] lg:pt-[5px] lg:pb-[9px] cursor-pointer  border border-[#000000] w-[68px]">
              copy
                </p>
            </div>
          </div>
          <div className="flex  gap-2 lg:gap-4" >
            <button className=" rounded-lg border border-[#F2994A] w-[120px] text-[14px] text-[#F2994A] leading-[20px] text-center lg:w-[244px] h-[40px]" onClick={()=>{Navigate('/scheduleliveclasses')}}>Back to Home</button>
            <button className="rounded-lg border border-[#F2994A] w-[137px] text-[14px] text-[#F2994A] leading-[20px] text-center lg:w-[244px] h-[40px]">Send Class Invitation</button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default SucessfullSchedule;
