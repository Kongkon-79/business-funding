import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BusinessStep from "./BusinessStep";
import OwnerStep from "./OwnerStep";
import UserInfoStep from "./UserInfoStep";
import FinishStep from "./FinishStep";
import ProgressSteps from "./ProgressSteps";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FormFooter from "./FormFooter";
import FormNavbar from "./FormNavbar";
import { CustomerReviews } from "../Homes/ReviewDemo/ReviewDemo";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { trigger } = methods;
  const [currentStep, setCurrentStep] = useState(1);

  // Handle next step change
  const handleNextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  // Handle previous step change
  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // data fetc
  const { mutate, isPending } = useMutation({
    mutationKey: "first-form",
    mutationFn: (formData) =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/first`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json()),

    onSuccess: (data) => {
      if (data.status) {
        toast.success(data.message || "Form Submitted Successfully", {
          position: "top-right",
          autoClose: 5000,
        });
        setTimeout(() => {
          navigate("/second-step");
        }, 5000);
      } else {
        toast.error(data.message || "Submission Failed", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong", {
        position: "top-right",
        autoClose: 5000,
      });
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="container">
      {/* navbar start  */}
      <FormNavbar />
      {/* Toast Notifications */}
      <ToastContainer />
      {/* navbar end  */}
      <FormProvider {...methods}>
        <div className="mb-6">
          <ProgressSteps
            currentStep={currentStep}
            steps={[
              { id: 1, name: "" },
              { id: 2, name: "" },
              { id: 3, name: "" },
              { id: 4, name: "" },
              { id: 5, name: "" },
              { id: 6, name: "" },
              { id: 7, name: "" },
              { id: 8, name: "" },
              { id: 9, name: "" },
              { id: 10, name: "" },
            ]}
          />
        </div>

        <div className="container">
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mt-6 bg-primary rounded-[12px] md:rounded-l-[12px]"
          >
            {currentStep === 1 && (
              <Step1
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 2 && (
              <Step2
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 3 && (
              <Step3
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 4 && (
              <Step4
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 5 && (
              <Step5
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 6 && (
              <Step6
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 7 && (
              <BusinessStep
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 8 && (
              <OwnerStep
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 9 && (
              <UserInfoStep
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 10 && (
              <FinishStep
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                isPending={isPending}
              />
            )}
          </form>
        </div>
      </FormProvider>

      {/* review part  */}
      <CustomerReviews />

      {/* form footer start */}
      <FormFooter />
      {/* form footer end  */}
    </div>
  );
};

export default MultiStepForm;
