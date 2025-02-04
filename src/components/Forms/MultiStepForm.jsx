import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import BusinessStep from './BusinessStep';
import OwnerStep from './OwnerStep';
import UserInfoStep from './UserInfoStep';
import FinishStep from './FinishStep';
import ProgressSteps from './ProgressSteps';

const MultiStepForm = () => {
  const methods = useForm();
  const [currentStep, setCurrentStep] = useState(1);

  // Handle step change
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data); // Handle your form submission logic here
  };

  return (
    <div className="container">
      <FormProvider {...methods}>
        <div className="mb-6"> {/* Added margin to give space for the ProgressSteps */}
          <ProgressSteps
            currentStep={currentStep}
            steps={[
              { id: 1, name: "Business" },
              { id: 2, name: "Owner" },
              { id: 3, name: "User Info" },
              { id: 4, name: "Finish" }
            ]}
          />
        </div>
        
        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px]'>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6 bg-primary rounded-l-[12px]">
          {currentStep === 1 && <BusinessStep/>}
          {currentStep === 2 && <OwnerStep />}
          {currentStep === 3 && <UserInfoStep />}
          {currentStep === 4 && <FinishStep />}

          <div className=''>
          {currentStep !== 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="w-3/5 py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="w-3/5 py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]"
            >
              Finish
            </button>
          )}
          </div>
        </form>
        </div>

      </FormProvider>
    </div>
  );
};

export default MultiStepForm;






// import React, { useState } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import BusinessStep from './BusinessStep';
// import OwnerStep from './OwnerStep';
// import UserInfoStep from './UserInfoStep';
// import FinishStep from './FinishStep';
// // import ProgressSteps from './ProgressSteps';

// const MultiStepForm = () => {
//   const methods = useForm();
//   const [currentStep, setCurrentStep] = useState(1);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const nextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   const prevStep = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div>
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)}>
//           {/* <ProgressSteps/> */}
//           {currentStep === 1 && <BusinessStep />}
//           {currentStep === 2 && <OwnerStep />}
//           {currentStep === 3 && <UserInfoStep />}
//           {currentStep === 4 && <FinishStep />}
          
//           <div className="flex justify-between">
//             {currentStep > 1 && (
//               <button type="button" onClick={prevStep} className="btn">
//                 Previous
//               </button>
//             )}
//             <button type="button" onClick={nextStep} className="btn">
//               Next
//             </button>
//           </div>

//           {currentStep === 2 && (
//             <input type="submit" value="Submit" className="btn" />
//           )}
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default MultiStepForm;


