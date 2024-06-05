import React from 'react';
const Custombutton = ({ value, img, backgroundcolor, textcolor, imagePosition,onClick }) => {
  const justifyContent = imagePosition === 'left' ? 'flex-start' : 'flex-end';
  return (
    <div className={`flex items-center justify-${justifyContent} gap-[20px] w-[95px] h-[30px] rounded-md border border-[#ECEDEE] p-[10px] ${backgroundcolor}`}>
      {imagePosition === 'left' && (
        <div>
          <img src={img} className='w-[22px] h-[22px] pt-[2px]' alt='Left Icon' />
        </div>
      )}
      <button className={`font-normal text-[14px] leading-[18px] ${textcolor}`}>
        {value}
      </button>
      {imagePosition === 'right' && (
        <div>
          <img src={img} className='w-[22px] h-[22px] pt-[2px]' alt='Right Icon'  onClick={onClick} />
        </div>
      )}
    </div>
  );
};
export default Custombutton;