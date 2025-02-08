import React from "react";
import { useFormContext } from "react-hook-form";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Step4 = ({handleNextStep, handlePreviousStep}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[45px] lg:gap-[65px] py-[20px] md:py-0">
        {/* Left Side (Form Fields) */}
        <div className="md:col-span-3 flex flex-col justify-center pr-[20px] md:pr-0 pl-[20px] md:pl-[34px] lg:pl-[47px]">
          <label htmlFor="payment" className="text-xl md:text-2xl font-medium leading-[24px] text-white">
            Does your business accept credit cards as a form of payment?
          </label>
          
          <div className="mt-[16px] flex items-center justify-center gap-6">
            {/* Yes Radio Button */}
            <label className="flex items-center gap-2 text-white text-lg cursor-pointer">
              <input
                type="radio"
                value="yes"
                {...register("payment", { required: true })}
                className="w-5 h-5 accent-primary"
              />
              Yes
            </label>

            {/* No Radio Button */}
            <label className="flex items-center gap-2 text-white text-lg cursor-pointer">
              <input
                type="radio"
                value="no"
                {...register("payment", { required: true })}
                className="w-5 h-5 accent-primary"
              />
              No
            </label>
          </div>

          {errors?.payment && (
            <p className="text-sm text-red-500 mt-2 text-center">This field is required</p>
          )}
          {/* buttton  */}
          <div className='flex justify-between items-center pt-[30px] lg:pt-[40px]'>
            <button type='button' onClick={handlePreviousStep} className='flex items-center gap-[8px] text-base font-normal leading-[20px] bg-transparent border-[1px] border-white text-white py-[14px] pl-[14px] pr-[19px] rounded-[4px]'> <HiArrowNarrowLeft/> Back</button>
            <button type='button' onClick={handleNextStep} className='text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] rounded-[4px]'>Continue</button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="md:col-span-2 px-[20px] md:px-0">
          <img src="/assets/images/step4.png" alt="step 3" width={409} height={553} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Step4;
