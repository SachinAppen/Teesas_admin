import React from 'react'

const DetailsTech = () => {
    const data = [
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
        {
          label: "Date",
          value: "10-10-2020",
        },
      ];
  return (
    <div>
       <div>
          <div className=" rounded-[24px] py-[20px] px-[16px] bg-[#FFFFFF] mt-4 ">
        <div className="Border ">
          <h2 className=" font-medium text-[18px]  leading-[20px] text-[#2C2E32] pb-[20px]">
            Details
          </h2>
        </div>
        <div className="bg-[#F2F2F2] p-[16px] rounded-[16px] mt-3">
          <div className="bg-[#FFFFFF] py-[10px] px-[8px] mt-2 rounded">
            {data.map((item) => (
              <div className="flex  gap-[40rem]  items-center">
                <div>
                  <p className=" font-normal text-[14px] leading-[18px] text-[#1F1F1FB2]">
                    {item.label}
                  </p>
                  <p className=" text-[16px] leading-[20px] font-normal text-[#222222E5]">
                    {item.value}
                  </p>
                </div>
                <div>
                  <p className=" font-normal text-[14px] leading-[18px] text-[#1F1F1FB2]">
                    {item.label}
                  </p>
                  <p className=" text-[16px] leading-[20px] font-normal text-[#222222E5]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailsTech
