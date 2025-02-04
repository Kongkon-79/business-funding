import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import BusinessStep from './BusinessStep';
import OwnerStep from './OwnerStep';
import UserInfoStep from './UserInfoStep';
import FinishStep from './FinishStep';
import ProgressSteps from './ProgressSteps';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';

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
              { id: 1, name: "" },
              { id: 2, name: "" },
              { id: 3, name: "" },
              { id: 4, name: "" },
              { id: 5, name: "" },
              { id: 6, name: "" },
              { id: 7, name: "Business" },
              { id: 8, name: "Owner" },
              { id: 9, name: "User Info" },
              { id: 10, name: "Finish" }
            ]}
          />
        </div>
        
        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] 3xl:px-[230] 4xl:px-[260px] 5xl:px-[285px]'>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6 bg-primary rounded-l-[12px]">
          {currentStep === 1 && <Step1/>}
          {currentStep === 2 && <Step2/>}
          {currentStep === 3 && <Step3/>}
          {currentStep === 4 && <Step4/>}
          {currentStep === 5 && <Step5/>}
          {currentStep === 6 && <Step6/>}
          {currentStep === 7 && <BusinessStep/>}
          {currentStep === 8 && <OwnerStep />}
          {currentStep === 9 && <UserInfoStep />}
          {currentStep === 10 && <FinishStep />}

          <div className=''>
          {currentStep !== 10 ? (
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
