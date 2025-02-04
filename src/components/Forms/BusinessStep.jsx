// const BusinessStep = ({ register, errors }) => {
//     return (
//       <div className="space-y-4 border-2 border-red-500">
//         <h2 className="text-2xl font-semibold text-gray-900">What is the legal name of your business?</h2>
//         <div className="space-y-2">
//           <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
//             Business Name
//           </label>
//           <input
//             id="businessName"
//             {...register("business.name", { required: "Business name is required" })}
//             placeholder="Enter business name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//           {errors?.business?.name && <p className="text-sm text-red-600">{errors.business.name.message}</p>}
//         </div>
//       </div>
//     )
//   }

//   export default BusinessStep


// import React from 'react';

// const BusinessStep = ({ register, errors }) => {
//   return (
//     <div className='w-full flex items-center'>
//       <div className='w-3/5 border-2 border-red-500'>
//         <label htmlFor="businessName">What is legal name of your business?</label>
//         <input {...register("businessName", { required: "Business name is Required" })} placeholder='Enter business name' className='w-full py-[12px] pl-[16px] ' />
//         {errors?.businessName && <p className='text-sm text-red-500'>{errors.businessName}</p>}
//       </div>
//       <div className='w-2/5 border-2 border-red-500'>
//         <img src='/assets/images/business.png' alt='business' width={409} height={553} />
//       </div>
//     </div>
//   );
// };

// export default BusinessStep;

import React from 'react';
import { useFormContext } from 'react-hook-form';

const BusinessStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] w-full flex items-center">
        <div className="w-3/5 h-[550px] bg-primary rounded-l-[12px] pl-[47px] pr-[65px] flex flex-col justify-center">
          <label className='text-2xl font-medium leading-[24px] text-white pb-[16px]' htmlFor="businessName">What is the legal name of your business?</label>
          <input
            {...register("businessName", { required: "Business name is required" })}
            placeholder="Enter business name"
            className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white"
          />
          {errors?.businessName && (
            <p className="text-sm text-red-500">{errors.businessName.message}</p>
          )}
        </div>
        <div className="w-2/5">
          <img src="/assets/images/business.png" alt="business" width={409} height={553} />
        </div>
      </div>
    </div>
  );
};

export default BusinessStep;

