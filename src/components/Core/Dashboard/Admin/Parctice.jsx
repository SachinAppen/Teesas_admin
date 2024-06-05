import React from "react";

const Parctice = () => {
  const data = [
    {
      id: 1,
      Date: "22 - 04 - 2022",
      items: [
        {
          name: "Practice Test",
          Subject: "Maths, English, Agriculture, Sciences",
        },
        {
          name: "Mock Practice",
          Subject: "Maths, English, Agriculture, Sciences",
        },
        {
          name: "Practice Test",
          Subject: "Maths, English, Agriculture, Sciences",
        },
        {
          name: "Mock Practice",
          Subject: "Maths, English, Agriculture, Sciences",
        },
      ],
    },
    {
      id: 2,
      Date: "21 - 04 - 2022",
      items: [
        {
          name: "Practice Test",
          Subject: "Maths, English, Agriculture, Sciences",
        },
        {
          name: "Practice Test",
          Subject: "Maths, English, Agriculture, Sciences",
        },
      ],
    },
    {
      id: 3,
      Date: "20 - 04 - 2022",
      items: [
        {
          name: "Practice Test",
          Subject: "Maths, English, Agriculture, Sciences",
        },
        {
          name: "Practice Test",
          Subject: "Maths, English, Agriculture, Sciences",
        },
      ],
    },
    {
      id: 2,
      Date: "19 - 04 - 2022",
      items: [
        {
          name: "Mock Practice",
          Subject: "Maths, English, Agriculture, Sciences",
        },
      ],
    },
  ];
  return(
     <div className="rounded-[16px] lg:p-[16px] bg-[#FFFFFF]">
        {
            data.map((section)=>(
                <div className="">
                <p className=" font-light px-[5px] text-[12px] lg:text-[14px] leading-[14px] text-[#000000] my-[10px]">{section.Date}</p>
                <div className="bg-[#F8F8F8] py-[5px] px-[5px] lg:py-[16px] lg:px-[8px] rounded-lg :mt-2">
                {section.items.map((item)=>(
                    <div className="flex flex-col gap-4 mt-4">
                        <div className={`rounded-[4px] border p-[8px] h-[34px] text-[13px] w-[106px]  lg:w-[150px] text-center border-[#C3C3C3] ${item.name==="Mock Practice" ? 'bg-[#DEF3FF]':' bg-[#FFF1DE]'} lg:text-[18px] leading-[18px] font-normal text-[#000000]`}>{item.name}</div>
                        <div className=" font-bold text-[15px] lg:text-[19px] text-[#000000] ">{item.Subject}</div>
                    </div>
                ))}
                </div>
                </div>

            ))
        }
      
       <div>
         
       </div>
  </div>
  )
};

export default Parctice;
