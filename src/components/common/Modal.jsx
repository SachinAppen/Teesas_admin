import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoIosCloseCircleOutline } from "react-icons/io";


const Modal = ({ closeModal, label, value1, value2, value3, onClick }) => {
  const [formData, setFormData] = useState({
    Adduser: ''
  });

  const onchangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      Adduser: event.target.value
    }));
  };

  const renderModalContent = () => {
    switch (label) {
      case "ADD USER":
        return (
          <div className="px-[20px]">
            <p className="font-light text-[14px] leading-[16px] text-[#4C4C4C] my-2">Select one of the options below</p>
            <div className="py-[16px] px-[10px] bg-[#FFFFFF] flex flex-col gap-4 mt-4 rounded-[24px] h-[128px]">
              <div className="flex items-center gap-[20px] mt-2 px-[10px]">
                <div className="w-[24px] h-[24px] bg-[#CCCCCC] rounded-full" onChange={onchangeHandler} onClick={onClick}></div>
                <label className="font-bold text-[16px] leading-[16px] text-[#162D3A]">{value1}</label>
              </div>
              <div className="flex items-center gap-[20px] px-[10px]">
                <div className="w-[24px] h-[24px]  bg-[#CCCCCC] rounded-full" onChange={onchangeHandler} />
                <label className="font-bold text-[16px] leading-[16px] text-[#162D3A]">{value2}</label>
              </div>
            </div>
          </div>
        );

    
        case "Export":
          return (
            <div className="px-[20px]">
              <p className="font-light text-[14px] leading-[16px] text-[#4C4C4C] my-2">Select one of the options below</p>
              <div className="py-[16px] px-[10px] bg-[#FFFFFF] flex flex-col gap-4 mt-4 rounded-[24px] h-[128px]">
                <div className="flex items-center gap-[20px] mt-2 px-[10px]">
                  <div className="w-[24px] h-[24px] bg-[#CCCCCC] rounded-full" onChange={onchangeHandler} onClick={onClick}></div>
                  <label className="font-bold text-[16px] leading-[16px] text-[#162D3A]">Users' List</label>
                </div>
                <div className="flex items-center gap-[20px] px-[10px]">
                  <div className="w-[24px] h-[24px]  bg-[#CCCCCC] rounded-full" onChange={onchangeHandler} />
                  <label className="font-bold text-[16px] leading-[16px] text-[#162D3A]">Users' Progress</label>
                </div>
              </div>
            </div>
          );
      case "Filter":
        return (
          <div className="px-[20px]">
            <div className="py-[16px] px-[10px] bg-[#FFFFFF] h-[128px] flex flex-col gap-4 mt-4 rounded-[24px]">
              <label className="font-bold text-[16px] mt-6 px-[10px] leading-[16px] text-[#162D3A]">{value2}</label>
              <label className="font-bold text-[16px] px-[10px] leading-[16px] text-[#162D3A]">{value3}</label>
            </div>
          </div>
        );
        case "Sort By":
          return (
            <div className="px-[20px]">
              <div className="py-[16px] px-[10px] bg-[#FFFFFF] h-[128px] flex flex-col gap-4 mt-4 rounded-[24px]">
                <label className="font-bold text-[16px] mt-6 px-[10px] leading-[16px] text-[#162D3A]">Ascending Order</label>
                <label className="font-bold text-[16px] px-[10px] leading-[16px] text-[#162D3A]">Descending Order</label>
              </div>
            </div>
          );
      default:
        return <p>No content available</p>;
    }
    
  };
  

  return (
    <div>
      <Popup open={true} closeOnDocumentClick={false} onClose={closeModal} position="center center">
        <div className="h-[250px] py-2 bg-[#FFF9ED] ">
          <div className="flex justify-end cursor-pointer">
            <IoIosCloseCircleOutline onClick={closeModal} className="text-[20px]" />
          </div>
          <div>
            <h2 className="font-medium pl-[20px] text-[18px] leading-[20px] text-[#162D3A]">{label}</h2>
            {renderModalContent()}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Modal;
