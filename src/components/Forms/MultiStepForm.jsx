// import { useState } from "react"
// import { useForm, FormProvider } from "react-hook-form"
// import ProgressSteps from "./ProgressSteps"
// import BusinessStep from "./BusinessStep"
// import OwnerStep from "./OwnerStep"
// import UserInfoStep from "./UserInfoStep"
// import FinishStep from "./FinishStep"

// const steps = [
//   { id: 1, name: "Business" },
//   { id: 2, name: "Personal" },
//   { id: 3, name: "Contact" },
//   { id: 4, name: "Finish" },
// ]

// const MultiStepForm = () => {
//   const [currentStep, setCurrentStep] = useState(1)
//   const methods = useForm()
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = methods

//   const onSubmit = (data) => {
//     if (currentStep < 4) {
//       setCurrentStep((prev) => prev + 1)
//     } else {
//       console.log("Form submitted:", data)
//       // Handle form submission here
//     }
//   }

//   const goBack = () => {
//     setCurrentStep((prev) => prev - 1)
//   }

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <BusinessStep register={register} errors={errors} />
//       case 2:
//         return <OwnerStep register={register} errors={errors} />
//       case 3:
//         return <UserInfoStep register={register} errors={errors} />
//       case 4:
//         return <FinishStep />
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <FormProvider {...methods}>
//         <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
//           <ProgressSteps currentStep={currentStep} steps={steps} />

//           <div className="bg-white rounded-lg shadow-md mt-8">
//             <div className="p-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-6">{renderStep()}</div>

//                 {/* <div className="hidden md:block">
//                   <img
//                     src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/form-5zmddCvJtgLdAcQeakAn2uRkSWgbLk.png"
//                     alt="Decorative"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div> */}
//               </div>

//               <div className="flex justify-between mt-8">
//                 {currentStep > 1 && (
//                   <button
//                     type="button"
//                     onClick={goBack}
//                     className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                   >
//                     Back
//                   </button>
//                 )}
//                 <button
//                   type="submit"
//                   className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   {currentStep === 4 ? "Submit" : "Continue"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </FormProvider>
//     </div>
//   )
// }

// export default MultiStepForm




// import React from 'react';
// import { FormProvider, useForm, useFormContext } from 'react-hook-form';
// import BusinessStep from './BusinessStep';

// const MultiStepForm = () => {
//   const methods = useForm();
//   const onSubmit = (data)=>{
//     console.log(data)
//   }
//   return (
//     <div>
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)}>
//             <BusinessStep/>
//             <input type='submit'/>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default MultiStepForm;


// import React, { useState } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import BusinessStep from './BusinessStep';
// import OwnerStep from './OwnerStep';
// import UserInfoStep from './UserInfoStep';
// import FinishStep from './FinishStep';
// import ProgressSteps from './ProgressSteps';

// const MultiStepForm = () => {
//   const methods = useForm();
//   const [currentStep, setCurrentStep] = useState(1);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)}>
//           <ProgressSteps/>
//           {currentStep === 1 && <BusinessStep />}
//           {currentStep === 2 && <OwnerStep />}
//           {currentStep === 3 && <UserInfoStep />}
//           {currentStep === 4 && <FinishStep />}
          
//           <input type="submit" value="Submit" className="btn" />
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default MultiStepForm;



// import React, { useState } from 'react';
// import { FormProvider, useForm } from 'react-hook-form';
// import BusinessStep from './BusinessStep';
// import OwnerStep from './OwnerStep';
// import UserInfoStep from './UserInfoStep';
// import FinishStep from './FinishStep';
// import ProgressSteps from './ProgressSteps';

// const MultiStepForm = () => {
//   const methods = useForm();
//   const [currentStep, setCurrentStep] = useState(1);

//   // Handle step change
//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => prevStep + 1);
//   };

//   // Handle form submission
//   const onSubmit = (data) => {
//     console.log(data); // Handle your form submission logic here
//   };

//   return (
//     <div className='container'>
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)}>
//           <ProgressSteps currentStep={currentStep} steps={[
//             { id: 1, name: "Business" },
//             { id: 2, name: "Owner" },
//             { id: 3, name: "User Info" },
//             { id: 4, name: "Finish" }
//           ]} />
          
//           {currentStep === 1 && <BusinessStep />}
//           {currentStep === 2 && <OwnerStep />}
//           {currentStep === 3 && <UserInfoStep />}
//           {currentStep === 4 && <FinishStep />}

//           {currentStep !== 4 ? (
//             <button
//               type="button"
//               onClick={handleNextStep}
//               className="w-full py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]"
//             >
//               Continue
//             </button>
//           ) : (
//             <button
//               type="submit"
//               className="w-full py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]"
//             >
//               Finish
//             </button>
//           )}
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// export default MultiStepForm;

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
        
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6"> {/* Added margin-top for separation */}
          {currentStep === 1 && <BusinessStep />}
          {currentStep === 2 && <OwnerStep />}
          {currentStep === 3 && <UserInfoStep />}
          {currentStep === 4 && <FinishStep />}

          {currentStep !== 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="w-full py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="w-full py-[14px] rounded-[4px] bg-white text-base text-primary font-normal leading-[20px]"
            >
              Finish
            </button>
          )}
        </form>
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


