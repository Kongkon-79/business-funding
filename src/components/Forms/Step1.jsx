import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1 = ({handleNextStep}) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className='py-[20px] md:py-[30px] lg:py-[50px] px-[20px] md:px-[40px] lg:px-[65px]'>
            <div className='w-full flex justify-center items-center pb-[20px] md:pb-[40px] lg:pb-[57px]'>
                <img src="/assets/images/nav_logo.png" alt='logo' width={193} height={44} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[45px] lg:gap-[65px]">
                <div className="md:col-span-2">
                    <h3 className='text-2xl md:text-[28px] lg:text-[32px] font-semibold leading-[40px] text-white'>Small Business Financing</h3>
                    <h5 className='text-base md:text-lg lg:text-xl font-medium leading-[26px] md:leading-[30px] text-white pt-[12px] md:pt-[15px] lg:pt-[18px]'>Immediate approval & next day funding from $2,500 - $250,000.</h5>
                    <p className='text-sm md:text-base font-normal leading-[24px] md:leading-[30px] text-white/50 pt-[8px] md:pt-[10px] lg:pt-[12px]'>Please complete the basic information below to see how much funding you qualify for.</p>
                    <p className='text-sm md:text-base font-normal leading-[24px] md:leading-[30px] text-white/50 pt-[8px] md:pt-[10px] lg:pt-[12px] pb-[25px] md:pb-[32px] lg:pb-[40px]'>This will not effect your credit.</p>

                    <label className='text-xl md:text-2xl font-medium leading-[24px] text-white' htmlFor="money">How much money are you looking for?</label>
                    <input
                        type='text'
                        {...register("money", { required: true })}
                        placeholder="$2,500"
                        className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px] mb-1"
                    />
                    {errors?.money && (
                        <p className="text-sm text-red-500">This field is required</p>
                    )}

                    {/* buttton  */}
                    <div className='flex items-center justify-center md:justify-start pt-[15px] md:pt-[22px] lg:pt-[29px]'>
                        <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[65px] rounded-[4px]'>Get Approved</button>
                    </div>

                </div>
                <div className="md:col-span-1">
                    <img src="/assets/images/step1.png" alt="step 1" width={262} height={393} className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Step1;

