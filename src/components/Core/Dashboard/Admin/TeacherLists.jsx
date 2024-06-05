import React from 'react'
import Custombutton from '../../../common/Custombutton';
import arrowleft from "../../../../assets/images/arrowleft.png";
import arrowright from "../../../../assets/images/arrowright.png";
import bookopen from "../../../../assets/images/bookopen.png";
import sharp from "../../../../assets/images/sharp.png";
import Headcomponent from '../../../common/Headcomponent';
const TeacherLists = () => {
    const data = [
        {

          firstname: "James ",
          lastname: "Omokewe",
        },
        {
       
          firstname: "James ",
          lastname: "Omokewe",
        },
        {
         
          firstname: "James ",
          lastname: "Omokewe",
        },
        {
        
          firstname: "James ",
          lastname: "Omokewe",
        },
        {
        
          firstname: "James ",
          lastname: "Omokewe",
        },
      ];
  return (
    <div className="bg-[#FFFFFF] p-4 mt-5 rounded-[18px]">
    <Headcomponent value="Teachers List" border="Border" />
    <div className="">
      <ul>
        {data.map((user) => (
          <li key={user.id}>
          <div className="flex justify-between gap-4 items-center">
            <div className="px-[18px] py-[10px] mt-5 flex  items-center gap-[10px] pr-[15px]">
              <div className="w-[32px] h-[32px] rounded-[16px] bg-[#F8F5ED] relative">
                <img src={bookopen} alt="" className=" absolute top-[8px] left-[9px]" />
              </div>
              <div>
              <div className="flex items-center gap-3 px-[18px]">
                {/* <div>
                  <img src={item.icon1} alt="Icon 1" />
                </div> */}
                <div className="flex items-center  gap-2">
                  <p className=" font-bold text-[14px] leading-[16px] text-[#171717] ">{user.firstname}</p>
                  <p className=" font-bold text-[14px] leading-[16px] text-[#171717]    ">{user.lastname}</p>
                </div>
              </div>
              </div>
            </div>
         
           
              <div>
                <Custombutton
                  value="status"
                  img={sharp}
                  backgroundcolor="bg-[#E9FDEE]"
                  textcolor="text-[#2760EA]"
                  imagePosition="left"
                />
              </div>

            </div>
          </li>
        ))}
      </ul>
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
  </div>
  )
}

export default TeacherLists
