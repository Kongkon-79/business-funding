import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1 = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className='pt-[44px] pb-[61px] px-[65px]'>
            <div className='w-full flex justify-center items-center pb-[57px]'>
                <img src="/assets/images/step1_logo.png" alt='logo' width={114} height={35} />
            </div>
            <div className="w-full flex items-center gap-[65px]">
                <div className="w-4/6">
                    <h3 className='text-[32px] font-semibold leading-[40px] text-white'>Small Business Financing</h3>
                    <h5 className='text-xl font-medium leading-[30px] text-white pt-[18px]'>Immediate approval & next day funding from $2,500 - $250,000.</h5>
                    <p className='text-base font-normal leading-[30px] text-white/50 pt-[12px]'>Please complete the basic information below to see how much funding you qualify for.</p>
                    <p className='text-base font-normal leading-[30px] text-white/50 pt-[12px] pb-[40px]'>This will not effect your credit.</p>

                    <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="businessName">What is the legal name of your business?</label>
                    <input
                        {...register("businessName", { required: "Business name is required" })}
                        placeholder="Enter business name"
                        className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
                    />
                    {errors?.businessName && (
                        <p className="text-sm text-red-500">{errors.businessName.message}</p>
                    )}
                </div>
                <div className="w-2/6">
                    <img src="/assets/images/step1.png" alt="step 1" width={262} height={393} className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default Step1;

