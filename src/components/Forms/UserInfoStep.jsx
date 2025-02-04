import React from 'react';
import { useFormContext } from 'react-hook-form';

const UserInfoStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="w-full flex items-center gap-[65px]">
        <div className="w-3/5 pl-[47px] pr-[65px]">
          <div>
            <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="email">Email Address</label>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Address"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
            />
            {errors?.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className='pt-[40px]'>
            <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="phoneNumber">Phone Number</label>
            <input
              {...register("phoneNumber", { required: "Phone Number is required" })}
              placeholder="Enter Phone number"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
            />
            {errors?.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>
        <div className="w-2/5">
          <img src="/assets/images/user_info.png" alt="user info" width={409} height={551} className='w-full'/>
        </div>
      </div>
    </div>
  );
};

export default UserInfoStep;

  