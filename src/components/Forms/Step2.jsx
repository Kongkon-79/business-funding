import React from "react";
import { useFormContext } from "react-hook-form";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Step2 = ({ handleNextStep, handlePreviousStep }) => {
  const { register, formState: { errors } } = useFormContext();

  // Generate years dynamically (from 2000 to current year)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2010 }, (_, i) => 2011 + i);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[45px] lg:gap-[65px] py-[20px] md:py-0">
        {/* Left Side (Form Fields) */}
        <div className="md:col-span-3 flex flex-col justify-center pr-[20px] md:pr-0 pl-[20px] md:pl-[34px] lg:pl-[47px] ">
          {/* Business Start Month */}
          <div>
            <label className="text-xl md:text-2xl font-medium leading-[24px] text-white" htmlFor="startMonth">
              Business Start Month
            </label>
            <select
              {...register("startMonth", { required: true })}
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white  mt-[8px] md:mt-[12px] lg:mt-[16px] mb-1"
            >
              <option value="">Select Month</option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
            {errors?.startMonth && <p className="text-sm text-red-500">This field is required</p>}
          </div>

          {/* Business Start Year */}
          <div className="pt-[20px] md:pt-[30px] lg:pt-[40px]">
            <label className="text-xl md:text-2xl font-medium leading-[24px] text-white" htmlFor="startYear">
              Business Start Year
            </label>
            <select
              {...register("startYear", { required: true })}
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[8px] md:mt-[12px] lg:mt-[16px] mb-1"
            >
              <option  value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors?.startYear && <p className="text-sm text-red-500">This field is required</p>}
          </div>
          {/* buttton  */}
          <div className='flex justify-between items-center pt-[30px] md:pt-[45px] lg:pt-[61px]'>
            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] bg-transparent border-[1px] border-white text-white py-[14px] pl-[14px] pr-[19px] rounded-[4px]'> <HiArrowNarrowLeft/> Back </button>
            <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] rounded-[4px]'>Continue</button>
          </div>

        </div>

        {/* Right Side (Image) */}
        <div className="md:col-span-2 px-[20px] md:px-0">
          <img src="/assets/images/step2.png" alt="step2 " width={409} height={553} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Step2;

