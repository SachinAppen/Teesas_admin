import React, { useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Button = ({ value1, value2 }) => {
    const [activeButton, setActiveButton] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = (button) => {
        setActiveButton(button);
        if (button === 'Add User') {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleClick = (e) => {
        // console.log("Clicked on Add User");
        navigate('/addusers');
    };

    return (
        <div className='flex justify-end items-center gap-[15px] mt-5'>
            <div
                className={`border w-[128px] h-[40px] rounded-lg py-[7px] px-[16px] cursor-pointer ${
                    activeButton === value1 ? 'bg-[#F2994A] text-white' : 'border-[#F2994A] text-[#F2994A]'
                }`}
                onClick={() => handleButtonClick(value1)}
            >
                <button className='text-[14px] leading-[20px] text-center'>
                    {value1}
                </button>
            </div>

            <div
                className={`border w-[123px] h-[40px] rounded-lg py-[7px] pl-[27px] cursor-pointer ${
                    activeButton === value2 ? 'bg-[#F2994A] text-white' : 'border-[#F2994A] text-[#F2994A]'
                }`}
                onClick={() => handleButtonClick(value2)}
            >
                <button className='text-[14px] leading-[20px] text-center'>
                    {value2}
                </button>
            </div>
            {isModalOpen && (
                <Modal
                    closeModal={closeModal}
                    label="ADD USER"
                    value1="Add Single User"
                    value2="Upload Bulk Users"
                    onClick={handleClick}
                />
            )}
        </div>
    );
};

export default Button;
