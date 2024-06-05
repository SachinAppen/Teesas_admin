import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoIosCloseCircleOutline } from "react-icons/io";


const Modal = ({ closeModal, label, value1, value2, onSelectCourse, onSelectStatus, onselectmonth, value3, onClick }) => {
  const [formData, setFormData] = useState({
    Adduser: ''
  })



  const onchangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
     Adduser: event.target.value
    }))
  }


  return (
    <div>
      <Popup open={true} closeOnDocumentClick={false} onClose={closeModal} position="center center">

        <div className="h-[250px] bg-[#FFF9ED] pl-[15px]  py-2 ">
          <div className=" flex justify-end cursor-pointer">
            <IoIosCloseCircleOutline onClick={closeModal} className=" text-[20px] " />
          </div>
          <div>
            <h2 className=" font-medium text-[18px] leading-[20px] text-[#162D3A]">{label}</h2>
            <p className=" font-light text-[14px] leading-[16px] text-[#4C4C4C] my-2">
            {label==="ADD USER" ?"Select one of the options below":""}</p>
            <div className="py-[16px] px-[10px] bg-[#FFFFFF] flex flex-col gap-4 mt-4 rounded-[24px] h-[128px]">
              {value1==="Add Single User"?(
                <div className="flex items-center gap-[20px]  mt-2 px-[10px]">
                <input type="radio" name="Adduser" value={formData.AddSingleuser} className="w-[24px] h-[24px] bg-[#00000033]"  onChange={onchangeHandler} onClick={onClick}/>
                <label className="font-bold text-[16px] leading-[16px] text-[#162D3A]">{value1}</label>
                </div>
              ):( <label className=" mt-2 px-[10px] font-bold text-[16px] leading-[16px] text-[#162D3A]" onClick={onClick}>{value1}</label>)}
              {value2==="Upload Bulk Users"?(
                <div className="flex items-center gap-[20px]  px-[10px]">
                <input type="radio"  name="Adduser" value={formData.AddBulkuser} className="w-[24px] h-[24px] bg-[#00000033]" onChange={onchangeHandler}/>
                <label className=" font-bold text-[16px] px-[10px] leading-[16px] text-[#162D3A]">{value2}</label>
                </div>
              ):(
                <div className="flex flex-col gap-4">
                <label className="font-bold text-[16px] px-[10px] leading-[16px] text-[#162D3A]">{value2}</label>
                <label className="font-bold text-[16px] px-[10px] leading-[16px] text-[#162D3A]">{value3}</label>
                </div>)}
  

            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Modal;
