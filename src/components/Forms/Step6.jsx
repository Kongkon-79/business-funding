import React from 'react';

const Step6 = ({handleNextStep}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[45px] lg:gap-[65px] py-[20px] md:py-0">
                <div className="md:col-span-3 flex flex-col justify-center pr-[20px] md:pr-0 pl-[20px] md:pl-[34px] lg:pl-[47px]">
                    <div className='w-full flex justify-center items-center pb-[30px] md:pb-[40px] lg:pb-[48px]'>
                        <img src="/assets/images/nav_logo.png" alt='logo' width={193} height={44} />
                    </div>
                    <h4 className='text-[48px] font-medium leading-[48px] text-white text-center'>
                        Thank You
                    </h4>
                    {/* buttton  */}
                    <div className='pt-[40px] md:pt-[50px] lg:pt-[69px] px-2 flex items-center justify-center'>
                        <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[12px] md:py-[14px] px-[40px] rounded-[4px]'>Start your Application</button>
                    </div>
                </div>
                <div className="md:col-span-2 px-[20px] md:px-0">
                    <img src="/assets/images/step6.png" alt="document and finish" width={412} height={553} className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Step6;


