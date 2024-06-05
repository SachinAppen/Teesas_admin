import React, { useState } from "react";
import uploadstates from '../../assets/images/uploadstates.png'
import Rectangle from "../../assets/images/Rectangle.png";


const Customadduser = ({isOpen}) => {
    const [show,setshow]=useState(false);
    const handleclick=()=>{
        setshow(!show)
    }

  return (
  <div>
    <div className={`  lg:flex justify-center gap-10   ${isOpen ? "ml-[240px]" : ""}`}>
        {
            show?(<>
                <div className=" bg-[#ffffff]   lg:w-[800px]  pt-[8px] pb-[30px] px-[16px] rounded-3xl ">
        <h2 className="text-[18px] users  leading-[20px]  pb-[10px] text-[#000000] font-medium">
          Add Multiple User
        </h2>
        <div className="">
          <p className=" font-medium text-[14px] leading-[18px] text-[#3D3D3D] py-[10px] px-[17px]">
            Upload User List CSV
          </p>
          <div className="bg-[#FFF9ED] py-[8px] px-[24px] rounded-lg  border-dashed border border-[#B9B9B9] flex flex-col justify-center mx-5">
            <div className="flex flex-col justify-center items-center gap-1 text-center text-[#98A2B3]">
              <img src={ uploadstates} alt="Rectangle" className=" w-[69px] h-[73px] mb-[20px]" />
              <p className=" font-medium text-[16px] leading-[24px] ">Upload Successful</p>
              <p className=" font-normal text-[12px] leading-[20px]">File Title.pdf | 313 KB . 31 Aug, 2022  </p>
              <div className=" flex items-center  gap-4 justify-center">
              <p className=" font-medium text-[12px] leading-[12px] text-[#F2994A]">View List</p>
              <p className=" font-medium text-[12px] leading-[12px] text-[#F2994A]">Reupload List</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="users bg-[#ffffff]  rounded-2xl " onClick={handleclick}>
        <h2 className="text-[18px]  leading-[20px]  pb-[10px] text-[#000000] font-medium">
          Summary
        </h2>
        <div className="bg-[#FFF9ED] lg:w-[400px]  px-[10px] py-[20px]  h-[80px]  rounded-2xl">
            <div className="addborder flex justify-between items-center py-[10px] ">
          <div className=" font-light text-[14px] leading-[16px] text-[#5A5B5C] w-full "> 
            Total Number
          </div>

          <div>24</div>
          </div>
        </div>
        <div className="bg-[FFF9FD] mt-5 flex justify-center">
          <button className=" h-[32px] rounded-lg text-center  w-[200px]  text-white bg-[#F2994A]">
            Add User
          </button>
        </div>
      </div>
            </>):(
                <>
                    <div className=" bg-[#ffffff] lg:w-[800px]  pt-[8px] pb-[30px] px-[16px] rounded-3xl ">
        <h2 className="text-[18px] users  leading-[20px]  pb-[10px] text-[#000000] font-medium">
          Add Multiple User
        </h2>
        <div className="">
          <p className=" font-medium text-[14px] leading-[18px] text-[#3D3D3D] py-[10px] px-[17px]">
            Upload User List CSV
          </p>
          <div className="bg-[#FFF9ED] py-[8px] px-[24px] rounded-lg  border-dashed border border-[#B9B9B9] flex flex-col justify-center mx-5">
            <div className="flex flex-col justify-center items-center gap-1 text-center text-[#98A2B3]">
              <img src={Rectangle} alt="Rectangle" className=" w-[69px] h-[73px] mb-[20px]" />
              <p className=" font-medium text-[16px] leading-[24px] ">Drag and drop an image, or browse</p>
              <p className=" font-normal text-[12px] leading-[20px]">Upload .pdf, .doc or .doc, Max 6 MB</p>
              <p className=" font-medium text-[12px] leading-[12px] text-[#F2994A]">Download Sample File</p>
          
            </div>
          </div>
        </div>
      </div>
      <div className="users bg-[#ffffff] mt-5 lg:mt-0 rounded-2xl " onClick={handleclick}>
        <h2 className="text-[18px]  leading-[20px]  pb-[10px] text-[#000000] font-medium">
          Summary
        </h2>
        <div className="bg-[#FFF9ED] w-auto lg:w-[400px]  px-[10px] py-[20px]  h-[80px]  rounded-2xl">
            <div className="addborder flex justify-between items-center py-[10px] ">
          <div className=" font-light text-[14px] leading-[16px] text-[#5A5B5C] w-full "> 
            Total Number
          </div>

          <div>24</div>
          </div>
        </div>
        <div className="bg-[FFF9FD] mt-5 flex justify-center">
          <button className=" h-[32px] rounded-lg text-center  w-[200px]  text-white bg-[#F2994A]">
            Add User
          </button>
        </div>
      </div>
                </>
            )
        }
  
    </div>
    </div>
  );
};

export default Customadduser;
