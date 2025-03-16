import React from 'react';
import { useFormContext } from 'react-hook-form';
import { HiArrowNarrowLeft } from "react-icons/hi";

const Step3 = ({handleNextStep, handlePreviousStep}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[45px] lg:gap-[65px] py-[20px] md:py-0">
        <div className="md:col-span-3 flex flex-col justify-center pr-[20px] md:pr-0 pl-[20px] md:pl-[34px] lg:pl-[47px] ">
          <label className='text-xl md:text-2xl font-medium leading-[24px] text-white' htmlFor="monthlyRevenue">What is your average monthly revenue?</label>
          <input
            {...register("monthlyRevenue", { required: true })}
            type='text'
            placeholder="$25,000"
            className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px] mb-1"
          />
          {errors?.monthlyRevenue && (
            <p className="text-sm text-red-500">This field is required</p>
          )}
          {/* buttton  */}
          <div className='flex justify-between items-center pt-[30px] md:pt-[45px] lg:pt-[61px]'>
            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] bg-transparent border-[1px] border-white text-white py-[14px] pl-[14px] pr-[19px] rounded-[4px]'> <HiArrowNarrowLeft/> Back</button>
            <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] rounded-[4px]'>Continue</button>
          </div>
        </div>
        <div className="md:col-span-2 px-[20px] md:px-0">
          <img src="/assets/images/step3.png" alt="step 3" width={409} height={553} className='w-full'/>
        </div>
      </div>
    </>
  );
};

export default Step3;

