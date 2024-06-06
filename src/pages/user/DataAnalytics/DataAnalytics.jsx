import React from 'react'
import UserCard from '../../../components/common/UserCard'
import Custombutton from '../../../components/common/Custombutton'
import frame2 from "../../../assets/images/Frame2.png";
import arrow_upward from '../../../assets/images/arrow_upward.png'
import notes from "../../../assets/images/Group1000001600.png";
import { useNavigate } from 'react-router-dom';

const DataAnalytics = ({ isOpen }) => {
    const Navigaite=useNavigate();
    return (
        <div className={`py-[8rem] px-[10px] lg:py-[8rem] lg:px-[9rem]  ${isOpen ? "ml-[240px]" : ""}`}>
            <div>
                <h2 className=' text-[22px] leading-[28px] text-[#2C2E32]'>Data analytics</h2>
            </div>
            <div>
                <div className='flex justify-between my-[20px]'>
                    <div className=' font-medium text-[18px] leading-[25px]'>
                        User Stats
                    </div>
                    <div>
                        <Custombutton
                            value="Daily"
                            img={frame2}
                            backgroundcolor="bg-[#FFFFFF]"
                            textcolor="text-[#000000]"
                            imagePosition="right"
                        />
                    </div>
                </div>
                <div className=' md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 '>
                    <div>
                        <UserCard
                            label="Total User"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="5000"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>

                    <div>
                        <UserCard
                            label="Total Active Users"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="5000"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>

                    <div>
                        <UserCard
                            label="Total Deactivated Users"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="5000"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>
                </div>


                <div className='w-full mt-5 bg-white p-3 rounded-[5px]'>
                    <p className=' font-normal cursor-pointer text-[14px] leading-[18px] text-center ' onClick={()=>{Navigaite('/ViewAnalytics')}}>View Analytics/Report</p>
                </div>
            </div>

            <div className='mt-5'>
                <div className='flex justify-between my-[20px]'>
                    <div className=' font-medium text-[18px] leading-[25px]'>
                        Conversion Rates
                    </div>
                    <div>
                        <Custombutton
                            value="Filter"
                            img={frame2}
                            backgroundcolor="bg-[#FFFFFF]"
                            textcolor="text-[#000000]"
                            imagePosition="right"
                        />
                    </div>
                </div>
                <div className=' md:grid md:grid-cols-2  lg:grid lg:grid-cols-3 gap-4 '>
                    <div>
                        <UserCard
                            label="Login"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="23%"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>

                    <div>
                        <UserCard
                            label="Dashboard"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="23%"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>

                    <div>
                        <UserCard
                            label="Video Lessons"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="23%"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>
                </div> 


                <div className='w-full mt-5 bg-white p-3 rounded-[5px]'>
                    <p className=' font-normal cursor-pointer text-[14px] leading-[18px] text-center'  onClick={()=>{Navigaite('/ConversionRates')}}>View Analytics/Report</p>
                </div>
            </div>

            <div className='mt-5'>
                <div className='flex justify-between my-[20px]'>
                    <div className=' font-medium text-[18px] leading-[25px]'>
                        Retention Rates
                    </div>
                    <div>
                        <Custombutton
                            value="Filter"
                            img={frame2}
                            backgroundcolor="bg-[#FFFFFF]"
                            textcolor="text-[#000000]"
                            imagePosition="right"
                        />
                    </div>
                </div>
                <div className=' md:grid md:grid-cols-2  lg:grid lg:grid-cols-3 gap-4 '>
                    <div>
                        <UserCard
                            label="Login"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="23%"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>

                    <div>
                        <UserCard
                            label="Dashboard"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="23%"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>

                    <div>
                        <UserCard
                            label="Video Lessons"
                            height="h-[153px]"
                            backgroundcolor="bg-[#FFFFFF]"
                            value="23%"
                            value2="1.10% Since yesterday"
                            img={arrow_upward}
                            img2={notes}
                        />
                    </div>
                </div>


                <div className='w-full mt-5 bg-white p-3 rounded-[5px]'>
                    <p className=' font-normal cursor-pointer text-[14px] leading-[18px] text-center'>View Analytics/Report</p>
                </div>
            </div>


        </div>
    )
}

export default DataAnalytics