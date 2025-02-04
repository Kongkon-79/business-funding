// const OwnerStep = ({ register, errors }) => {
//     return (
//       <div className="space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//               First Name
//             </label>
//             <input
//               id="firstName"
//               {...register("personal.firstName", { required: "First name is required" })}
//               placeholder="Enter first name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {errors?.personal?.firstName && <p className="text-sm text-red-600">{errors.personal.firstName.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last Name
//             </label>
//             <input
//               id="lastName"
//               {...register("personal.lastName", { required: "Last name is required" })}
//               placeholder="Enter last name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {errors?.personal?.lastName && <p className="text-sm text-red-600">{errors.personal.lastName.message}</p>}
//           </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default OwnerStep



// import React from 'react';
// import { useFormContext } from 'react-hook-form';

// const OwnerStep = () => {
//   const { register, formState: { errors } } = useFormContext();

//   return (
//     <div>
//       <div className="px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] w-full flex items-center">
//         <div className="w-3/5 h-[550px] bg-primary rounded-l-[12px] pl-[47px] pr-[65px] flex flex-col justify-center">
//         {/* first  */}
//           <div>
//           <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="firstName">First Name</label>
//           <input
//             {...register("firstName", { required: "First Name is required" })}
//             placeholder="Enter first name"
//             className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
//           />
//           {errors?.firstName && (
//             <p className="text-sm text-red-500">{errors.firstName.message}</p>
//           )}
//           </div>
//           {/* second  */}
//           <div className='pt-[40px]'>
//           <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="lastName">Last Name</label>
//           <input
//             {...register("lastName", { required: "Last Name is required" })}
//             placeholder="Enter last name"
//             className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
//           />
//           {errors?.lastName && (
//             <p className="text-sm text-red-500">{errors.lastName.message}</p>
//           )}
//           </div>
//           <div className='pt-[61px]'>
//           <button className='w-full py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]'>Continue</button>
//         </div>
//         </div>
//         <div className="w-2/5">
//           <img src="/assets/images/owner.png" alt="owner" width={409} height={551} />
//         </div>
        
//       </div>
        
        
//     </div>
//   );
// };

// export default OwnerStep;


import React from 'react';
import { useFormContext } from 'react-hook-form';

const OwnerStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] w-full flex items-center">
        <div className="w-3/5 h-[550px] bg-primary rounded-l-[12px] pl-[47px] pr-[65px] flex flex-col justify-center">
          <div>
            <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="firstName">First Name</label>
            <input
              {...register("firstName", { required: "First Name is required" })}
              placeholder="Enter first name"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
            />
            {errors?.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className='pt-[40px]'>
            <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="lastName">Last Name</label>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Enter last name"
              className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
            />
            {errors?.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="w-2/5">
          <img src="/assets/images/owner.png" alt="owner" width={409} height={551} />
        </div>
      </div>
    </div>
  );
};

export default OwnerStep;


  
  