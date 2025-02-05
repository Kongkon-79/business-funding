import React from 'react';
import './Banner.css';
import Button from '../../../common/Button';

const Banner = () => {
    return (
        <div className='banner__bg roboto_font'>
            <div className='h-full flex flex-col items-center justify-center'>
                <h1 className='text-2xl md:text-3x lg:text-[48px] font-bold leading-[30px] md:leading-[40px] lg:leading-[60px] text-primary text-center'>Obtaining working capital for your <br />
                    business has never been easier.</h1>
                <p className='text-lg md:text-xl font-normal leading-[20px] text-black text-center pt-[18px]'>Business funding made fast and simple for all types of business needs, and credit situations.</p>
                <div className='flex items-center justify-center pt-[38px]'>
                    <Button />
                </div>
                <h5 className='text-xl md:text-2xl lg:text-[32px] font-normal leading-[40px] text-black pt-[20px] md:pt-[30px] lg:pt-[38px]'>Talk to a <span className='py-[5px] px-[8px] bg-primary rounded-[8px] font-medium text-white'>Financial Advisor</span></h5>
                <button className='flex items-center gap-[15px] pt-[18px]'>
                    <img src='/assets/images/phone_icon.png' alt='phone icon' width={24} height={24}/>
                    <span className='text-lg md:text-xl font-semibold leading-[32px] text-primary'> (800) 919-5351</span>
                </button>

            </div>
        </div>
    );
};

export default Banner;