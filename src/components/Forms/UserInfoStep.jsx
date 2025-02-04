// const UserInfoStep = ({ register, errors }) => {
//     return (
//       <div className="space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               {...register("contact.email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Invalid email address",
//                 },
//               })}
//               placeholder="Enter email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {errors?.contact?.email && <p className="text-sm text-red-600">{errors.contact.email.message}</p>}
//           </div>
//           <div className="space-y-2">
//             <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               id="phoneNumber"
//               {...register("contact.phoneNumber", {
//                 required: "Phone number is required",
//                 pattern: {
//                   value: /^\+?[\d\s-]+$/,
//                   message: "Invalid phone number",
//                 },
//               })}
//               placeholder="Enter phone number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {errors?.contact?.phoneNumber && <p className="text-sm text-red-600">{errors.contact.phoneNumber.message}</p>}
//           </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default UserInfoStep



// import React from 'react';
// import { useFormContext } from 'react-hook-form';

// const UserInfoStep = () => {
//   const { register, formState: { errors } } = useFormContext();

//   return (
//     <div>
//       <div className="px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] w-full flex items-center">
//         <div className="w-3/5 h-[550px] bg-primary rounded-l-[12px] pl-[47px] pr-[65px] flex flex-col justify-center">
//         {/* first  */}
//           <div>
//           <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="email">Email Address</label>
//           <input
//             {...register("email", { required: "Email is required" })}
//             placeholder="Enter Address"
//             className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
//           />
//           {errors?.email && (
//             <p className="text-sm text-red-500">{errors.email.message}</p>
//           )}
//           </div>
//           {/* second  */}
//           <div className='pt-[40px]'>
//           <label className='text-2xl font-medium leading-[24px] text-white' htmlFor="phoneNumber">Phone Number</label>
//           <input
//             {...register("phoneNumber", { required: "Phone Number is required" })}
//             placeholder="Enter Phone number"
//             className="w-full py-[12px] px-[16px] border-[1px] rounded-[4px] bg-primary text-white outline-white mt-[16px]"
//           />
//           {errors?.phoneNumber && (
//             <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
//           )}
//           </div>
//           <div className='pt-[61px]'>
//           <button className='w-full py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]'>Continue</button>
//         </div>
//         </div>
//         <div className="w-2/5">
//           <img src="/assets/images/user_info.png" alt="user info" width={409} height={551} />
//         </div>
        
//       </div>
        
        
//     </div>
//   );
// };

// export default UserInfoStep;


import React from 'react';
import { useFormContext } from 'react-hook-form';

const UserInfoStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div className="px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] w-full flex items-center">
        <div className="w-3/5 h-[550px] bg-primary rounded-l-[12px] pl-[47px] pr-[65px] flex flex-col justify-center">
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
          <img src="/assets/images/user_info.png" alt="user info" width={409} height={551} />
        </div>
      </div>
    </div>
  );
};

export default UserInfoStep;

  