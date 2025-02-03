import React from 'react';

const Services = () => {
    return (
        <div className='padding_top '>
            <div className='flex flex-col md:flex-row items-center justify-between bg-primary px-[30px] md:px-[50px] lg:px-[70px]'>
                <div className='py-[22px]'>
                    <p className='text-xl md:text-[24px] font-semibold leading-[28px] text-white text-center md:text-left'>Pre- qualification in one minutes</p>
                </div>
                <div className='hidden md:block w-[1px] h-[49px] bg-white' />
                <div className='block md:hidden w-full h-[1px] bg-white' />
                <div className='py-[22px]'>
                    <p className='text-xl md:text-[24px] font-semibold leading-[28px] text-white text-center md:text-left'>Funding in less then 24 hours</p>
                </div>
                <div className='hidden md:block w-[1px] h-[49px] bg-white' />
                <div className='block md:hidden w-full h-[1px] bg-white' />
                <div className='py-[22px]'>
                    <p className='text-xl md:text-[24px] font-semibold leading-[28px] text-white text-center md:text-left'>Funding Range from $2.5K to $1,000,000 </p>
                </div>
            </div>
        </div>
    );
};

export default Services;