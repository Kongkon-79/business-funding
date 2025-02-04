// const FinishStep = () => {
//     return (
//       <div className="space-y-4">
//         <h2 className="text-2xl font-semibold text-gray-900">Review & Submit</h2>
//         <p className="text-gray-600">
//           Please review your information before submitting. Click submit to complete the process.
//         </p>
//       </div>
//     )
//   }
  
//   export default FinishStep


// import React from 'react';

// const FinishStep = () => {

//   return (
//     <div>
//       <div className="px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] w-full flex items-center">
//         <div className="w-3/5 h-[550px] bg-primary rounded-l-[12px] pl-[47px] pr-[65px] flex flex-col justify-center">
//           <h4 className='text-xl font-medium leading-[20px] text-white'>Thank you for completing our application. Just click the button below andyou'll be taken to the funding source tha you match with.</h4>
//           <div className='pt-[61px]'>
//           <button className='w-full py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]'>Finish</button>
//         </div>
//         </div>
//         <div className="w-2/5">
//           <img src="/assets/images/documents_finish.png" alt="document and finish" width={412} height={553} />
//         </div>
        
//       </div>
        
        
//     </div>
//   );
// };

// export default FinishStep;

import React from 'react';

const FinishStep = () => {
  return (
    <div>
      <div className="px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px] w-full flex items-center">
        <div className="w-3/5 h-[550px] bg-primary rounded-l-[12px] pl-[47px] pr-[65px] flex flex-col justify-center">
          <h4 className='text-xl font-medium leading-[20px] text-white'>
            Thank you for completing our application. Just click the button below and you'll be taken to the funding source that you match with.
          </h4>
        </div>
        <div className="w-2/5">
          <img src="/assets/images/documents_finish.png" alt="document and finish" width={412} height={553} />
        </div>
      </div>
    </div>
  );
};

export default FinishStep;

  
  