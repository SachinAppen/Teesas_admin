import React from 'react'
import activity from '../../../assets/images/activity.png'

const ActivityHistory = () => {
  const ListData = [
    {
      id: 1,
      Date: "25 Janurary 2023",
      items: [
        {
          name: "Logged In",
          icon: activity,
        },
        {
          name: "English for Secondary school Exam",
          icon: activity,
        },
      ],
    },
    {
      id: 2,
      Date: "24 Janurary 2023",
      items: [
        {
          name: "Logged In",
          icon: activity
        },
      ],
    },
  ];
  return (
    <div className="rounded-2xl p-[10px] bg-[#F2F2F2]  pb-[20px] mt-5">
      <div className="px-[10px]">
        <h3 className=" font-medium text-[16px] leading-[35px] text-[#49454F]">Activity History</h3>
        <div className="bg-[#FFFFFF] py-[10px] px-[10px] mt-[10px] rounded-[8px] flex flex-col gap-4" >
          {
            ListData.map((data) => (
              <div key={data.id}>
                <div className=" py-[10px]">
                  <h6 className="font-light text-[12px] leading-[13px] text-[#767676]">
                    {data.Date}
                  </h6>
                </div>
                <div className="flex flex-col gap-5">
                  {data.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div>
                        <img src={item.icon} alt="Icon" />
                      </div>
                      <div>
                        <p className='text-[14px] lg:text-[16px]'>{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default ActivityHistory