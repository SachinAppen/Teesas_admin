import React, { useState } from 'react';
import home from '../../assets/images/home.png';
import search from "../../assets/images/search.svg";
import Logout from '../../assets/images/logout.png';
import { Sidebardata } from '../data/Sidebardata';
import { BiMoon } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import LogoutModal from '../Core/Dashboard/Admin/LogoutModal';
import { HiOutlineSun } from "react-icons/hi2";

const Sidebar = ({ isOpen }) => {
  const [show, setshow] = useState(false);
  const location = useLocation();

  const handleModalClose = () => {
    setshow(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={`w-80 bg-white fixed z-50 mt-[50px] flex flex-col py-[10px] px-[18px] overflow-scroll height ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='flex items-center search'>
        <img src={search} className="absolute left-[28px] top-[19px] w-[24px] h-[27px] z-50" />
        <input
          type="text"
          name="search"
          className="w-full mt-1 bg-[#F8F8F8] text-[14px] border p-2 border-[#D9D9D9] h-[36px] rounded-[4px] px-[16px] relative"
          placeholder="search Item"
        />
      </div>
      <div className='flex flex-col items-center w-[284px] h-[44px] mt-[17px] gap-3 '>
        <div className={`flex item-center mr-auto pl-[15px] gap-4 pt-[12px] pb-[28px] rounded w-[292px] h-[36px] px-[16px] border-[#E5FFE8]  ${isActive('/Dashboard') ? 'bg-[#E1F6E1] text-black' : ''}`}>
          <img src={home} className='w-[20px] h-[20px]' />
          <Link to='/Dashboard'>
            <h2 className='text-[14px] leading-[20px] text-left  font-medium cursor-pointer '>Dashboard</h2>
          </Link>
        </div>
        <ul className='h-[150px]'>
          {Sidebardata.map((section, index) => (
            <li key={index} className='cursor-pointer'>
              <div className='w-full h-[20px]'>
                <h3 className='text-[14px] font-medium leading-[20px] text-[#98A2B3] pl-[10px]'>{section.heading}</h3>
              </div>
              <div className='pl-[6px] flex flex-col gap-[18px] my-[20px]'>
                {section.items.map((item, i) => (
                  <div key={i} className={`pt-[12px] pb-[28px] rounded w-[292px] h-[36px] px-[16px] border-[#E5FFE8] ${isActive(item.path) ? 'bg-[#E1F6E1] text-black' : ''}`}>
                    <Link to={item.path} className='flex items-center gap-4 cursor-pointer'>
                      <img src={home} alt={item.name} />
                      <p className='text-[14px] leading-[20px] text-[#596780] '>{item.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </li>
          ))}
          <li className='cursor-pointer mt-[10rem]'>
            <div className='flex flex-col gap-[18px] my-[20px]'>
              <div>
                <div className='flex items-center gap-[10px] cursor-pointer'>
                  <div className='flex items-center pl-[7px]'>
                    <BiMoon />
                    <HiOutlineSun />
                  </div>
                  <p className='text-[14px] leading-[20px] text-[#596780]'>Dark MODE</p>
                </div>
              </div>
            </div>
          </li>
          <li className='cursor-pointer'>
            <div className='pl-[10px] flex flex-col gap-[18px] my-[20px]'>
              <div>
                <div className='flex items-center gap-4 cursor-pointer'>
                  <img src={Logout} />
                  <p onClick={() => { setshow(!show) }} className='text-[14px] leading-[20px] text-[#596780]'>Logout</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {show && <LogoutModal closeModal={handleModalClose} />}
    </div>
  );
}

export default Sidebar;
