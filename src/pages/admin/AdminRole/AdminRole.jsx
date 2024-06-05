import React from 'react'
import UserCard from '../../../components/common/UserCard'
import AdminRoleList from './AdminRoleList'
import { useNavigate } from 'react-router-dom'

const AdminRole = ({isOpen}) => {
    const Navigate=useNavigate();
  return (
    <div
    className={` py-[8rem] lg:px-[10rem] px-[10px] flex flex-col  gap-2 ${
      isOpen ? "ml-[240px]" : ""
    }`}
  >
    <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] ">
    Admin Role
    </h2>
    <div className=" mt-5 ">
      <UserCard
        label="Total Admin Role"
        height="h-[111px]"
        backgroundcolor="bg-[#FFFFFF]"
        value="12"   
      />
    </div>
    <div className=" flex  justify-end mt-4 ">
      <button className="text-[14px] leading-[20px] text-center font-bold  w-[181px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={()=>Navigate('/Addadminrole')}>
      Add Role 
      </button>
    </div>
    <AdminRoleList/>
  </div>
  )
}

export default AdminRole
