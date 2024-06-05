import React from 'react'
import UserCard from '../../../components/common/UserCard'
import TeacherList from '../../../components/Core/Dashboard/Admin/TeacherList'
import Modal from '../../../components/common/Modal';



const Teachers = ({isOpen}) => {
  const [isModalOpen, setIsModalOpen] =  useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div
    className={`p-4 lg:pl-[161px] lg:pr-[129px] ${
      isOpen ? "lg:ml-[240px]" : ""
    }`}
  >
    <h2 className=" font-bold text-[22px]  leading-[28px] text-[#2C2E32] mt-32">
    Live Classes - Teachers
    </h2>
    <div className="mt-5">
      <UserCard
        label="Total Live Classes"
        height="h-[111px]"
        backgroundcolor="bg-[#FFFFFF]"
        value="5,000"
      />
    </div>
    <div className=" flex  justify-end mt-4 ">
        <button className="text-[14px] leading-[20px] text-center font-bold  w-[122px] h-[40px] rounded-lg py-[7px] px-[12px] bg-[#F2994A] text-white" onClick={() => setIsModalOpen(true)}>
        Add Teacher
        </button>
      </div>
      <TeacherList/>
      {isModalOpen && (
        <Modal
          closeModal={handleModalClose}
          value1="Add Single Teacher"
          value2="Add Bulk Teacher"
          onClick={()=>{Navigate('/Teacher/AddTeacher')}}
        />
      )}
    </div>
  )
}

export default Teachers
