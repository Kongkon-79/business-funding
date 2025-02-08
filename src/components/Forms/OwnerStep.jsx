import React from 'react';
import { useFormContext } from 'react-hook-form';

const OwnerStep = ({ handleNextStep }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[45px] lg:gap-[65px] py-[20px] md:py-0">
        <div className="md:col-span-3 flex flex-col justify-center pr-[20px] md:pr-0 pl-[20px] md:pl-[34px] lg:pl-[47px]">
          <div>
            <label className='text-xl md:text-2xl font-medium leading-[24px] text-white' htmlFor="firstName">First Name</label>
            <input
            type='text'
              {...register("firstName", { required: true })}
              placeholder="Enter first name"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px] mb-1"
            />
            {errors?.firstName && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
          <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
            <label className='text-xl md:text-2xl font-medium leading-[24px] text-white' htmlFor="lastName">Last Name</label>
            <input
            type='text'
              {...register("lastName", { required: true })}
              placeholder="Enter last name"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px] mb-1"
            />
            {errors?.lastName && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
            {/* buttton  */}
            <div className='pt-[30px] md:pt-[45px] lg:pt-[61px] flex items-center justify-center'>
              <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] md:px-[170px] rounded-[4px]'>Continue</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 px-[20px] md:px-0">
          <img src="/assets/images/owner.png" alt="owner" width={409} height={551} className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default OwnerStep;



