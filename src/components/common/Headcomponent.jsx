import React from 'react'
import container from "../../assets/images/container.png";
import Vector from "../../assets/images/Vector.png";
import SearchButton from "../../assets/images/Searchbutton.png";

const Headcomponent = ({value,border}) => {
  return (
    
    <div className={`flex justify-between items-center ${border}`}>
    <div>
      <h2 className=" font-medium  text-[16px] lg:text-[18px] leading-[25px] text-[#2C2E32]">{value}</h2>
    </div>
    <div>
    <div className="h-[50px] lg:px-[8px]  flex justify-end items-center mt-[5px]">
    <div className="w-[34px] lg:w-[39px] lg:h-[42px]">
      <img src={SearchButton} />
    </div>
    <div className=" w-[20px] lg:w-[24px] lg:h-[24px]">
      <img src={Vector} />
    </div>
    <div className=" w-[30px] lg:w-[34px] lg:h-[40px]">
      <img src={container} />
    </div>
  </div>
    </div>
  </div>
  
  )
}

export default Headcomponent
