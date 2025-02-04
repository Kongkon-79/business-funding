import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="w-full flex items-center gap-[65px]">
        <div className="w-3/5 pl-[47px] pr-[65px]">
          <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="revenue">What is your average monthly revenue?</label>
          <input
            {...register("revenue", { required: "Revenue is required" })}
            placeholder="$25,000"
            className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
          />
          {errors?.revenue && (
            <p className="text-sm text-red-500">{errors.revenue.message}</p>
          )}
        </div>
        <div className="w-2/5">
          <img src="/assets/images/step3.png" alt="step 3" width={409} height={553} className='w-full'/>
        </div>
      </div>
    </>
  );
};

export default Step3;

