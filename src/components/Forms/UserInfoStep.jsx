import React from 'react';
import { useFormContext } from 'react-hook-form';

const UserInfoStep = ({ handleNextStep }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[45px] lg:gap-[65px] py-[20px] md:py-0">
        <div className="md:col-span-3 flex flex-col justify-center pr-[20px] md:pr-0 pl-[20px] md:pl-[34px] lg:pl-[47px]">
          <div>
            <label className='text-xl md:text-2xl font-medium leading-[24px] text-white' htmlFor="email">Email Address</label>
            <input
              type='email'
              {...register("email", { required: true })}
              placeholder="Enter Address"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px] mb-1"
            />
            {errors?.email && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
          <div className='pt-[20px] md:pt-[30px] lg:pt-[40px]'>
            <label className='text-xl md:text-2xl font-medium leading-[24px] text-white' htmlFor="phoneNumber">Phone Number</label>
            <input
              type='text'
              {...register("phoneNumber", { required: true })}
              placeholder="Enter Phone number"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px] mb-1"
            />
            {errors?.phoneNumber && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
            {/* buttton  */}
            <div className='pt-[30px] md:pt-[45px] lg:pt-[61px] flex items-center justify-center'>
              <button type='button' onClick={handleNextStep} className='w-full text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] md:px-[170px] rounded-[4px]'>Continue</button>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 px-[20px] md:px-0">
          <img src="/assets/images/user_info.png" alt="user info" width={409} height={551} className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default UserInfoStep;

