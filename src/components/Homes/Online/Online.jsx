import React from 'react';

const Online = () => {
    return (
        <div className='container padding_top roboto_font'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[81px]'>
                <div className='md:col-span-1'>
                    <img src='/assets/images/online.png' alt='online' width={476} height={376} />
                </div>
                <div className='md:col-span-1 flex flex-col justify-center items-start'>
                    <h2 className='text-[26px] md:text-[32px] lg:text-[40px] font-semibold leading-[30px] md:leading-[40px] lg:leading-[48px] text-primary'>Online doesn't have to be
                        impersonal - with
                        Capitalized you get real
                        people to talk to.</h2>
                        <p className='text-base font-normal leading-[20px] text-secondary/50 pt-[24px]'>Your dedicated, U.S. based loan advisor is available to help you 
                        every step of the way.</p>
                        <p className='text-base font-normal leading-[20px] text-black pt-[32px]'>Call Us: <span className='text-[#225C93] font-semibold'> (800) 919-5351</span></p>
                </div>
            </div>
        </div>
    );
};

export default Online;