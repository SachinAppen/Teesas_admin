import React, { useState } from 'react';
import container from "../../assets/images/container.png";
import Vector from "../../assets/images/Vector.png";
import SearchButton from "../../assets/images/Searchbutton.png";
import Modal from '../common/Modal';

const Headcomponent = ({ value, border }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

    const toggleSearchBox = () => {
        setIsSearchBoxOpen(prevState => !prevState);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={`flex justify-between items-center ${border} relative mt-3`}>
            <div>
                <h2 className="font-medium text-[16px] lg:text-[18px] leading-[25px] text-[#2C2E32]">{value}</h2>
            </div>
            <div className="flex items-center relative">
                <div className="h-[50px] lg:px-[8px] flex items-center mt-[5px]">
                    <div className="w-[34px] lg:w-[39px] lg:h-[42px] cursor-pointer" onClick={toggleSearchBox}>
                        <img src={SearchButton} alt="Search" />
                    </div>
                    {isSearchBoxOpen && (
                        <div className="absolute top-0 left-0 transform -translate-x-full mt-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-300 outline-none rounded-lg p-2 w-48 lg:w-64"
                            />
                        </div>
                    )}
                    <div className="w-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer ml-2" onClick={() => setIsModalOpen(true)}>
                        <img src={Vector} alt="Vector" />
                    </div>
                    <div className="w-[30px] lg:w-[34px] lg:h-[40px] ml-2">
                        <img src={container} alt="Container" />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    closeModal={handleModalClose}
                    label="Sort By"
                />
            )}
        </div>
    );
};

export default Headcomponent;
