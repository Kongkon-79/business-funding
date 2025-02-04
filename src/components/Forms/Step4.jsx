import React from "react";
import { useFormContext } from "react-hook-form";

const Step4 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className="w-full flex items-center gap-[65px]">
        {/* Left Side (Form Fields) */}
        <div className="w-3/5 pl-[47px]">
          <label htmlFor="payment" className="text-2xl font-medium leading-[24px] text-white">
            Does your business accept credit cards as a form of payment?
          </label>
          
          <div className="mt-[16px] flex items-center justify-center gap-6">
            {/* Yes Radio Button */}
            <label className="flex items-center gap-2 text-white text-lg cursor-pointer">
              <input
                type="radio"
                value="yes"
                {...register("payment", { required: "Please select an option" })}
                className="w-5 h-5 accent-primary"
              />
              Yes
            </label>

            {/* No Radio Button */}
            <label className="flex items-center gap-2 text-white text-lg cursor-pointer">
              <input
                type="radio"
                value="no"
                {...register("payment", { required: "Please select an option" })}
                className="w-5 h-5 accent-primary"
              />
              No
            </label>
          </div>

          {errors?.payment && (
            <p className="text-sm text-red-500 mt-2">{errors.payment.message}</p>
          )}
        </div>

        {/* Right Side (Image) */}
        <div className="w-2/5">
          <img src="/assets/images/step4.png" alt="step 3" width={409} height={553} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Step4;
