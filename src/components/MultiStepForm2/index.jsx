import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "./ProgressSteps";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Review from "./Review";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MultiStepFormAllComponents2 = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { trigger, watch } = methods;
  const [currentStep, setCurrentStep] = useState(1);
  const [subStep, setSubStep] = useState(1); // Track sub-steps within progress steps

  const formData = watch();

  const handleNextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      if (currentStep === 1 && subStep === 1) {
        setSubStep(2); // Move to Step2
      } else if (currentStep === 2 && subStep === 1) {
        setSubStep(2); // Move to Step4
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
        setSubStep(1); // Reset subStep when progressing to a new progress step
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 1 && subStep === 2) {
      setSubStep(1); // Move back to Step1
    } else if (currentStep === 2 && subStep === 2) {
      setSubStep(1); // Move back to Step3
    } else {
      setCurrentStep((prevStep) => prevStep - 1);
      setSubStep(2); // Move to last sub-step of previous progress step
    }
  };

  // data fetch
  const { mutate, isPending } = useMutation({
    mutationKey: ["second-form"],
    mutationFn: (formData) =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/second`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }),

    onSuccess: (data) => {
      if (data.status) {
        toast.success(data.message || "Form Submitted Successfully", {
          position: "top-right",
          autoClose: 5000,
        });
        setTimeout(() => {
          navigate("/message");
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

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <div className="bg-[#D3E6FF] pt-[36px] pb-[31px]">
      <div className="container ">
        {/* navbar part  */}
        <section>
          <Navbar />
        </section>
        {/* Toast Notifications */}
        <ToastContainer />
        <FormProvider {...methods}>
          <div>
            <ProgressSteps
              currentStep={currentStep}
              steps={[
                { id: 1, name: "Owners" },
                { id: 2, name: "Business" },
                { id: 3, name: "Application" },
                { id: 4, name: "Documents" },
                { id: 5, name: "Additional" },
              ]}
            />
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {currentStep === 1 &&
              (subStep === 1 ? (
                <Step1 handleNextStep={handleNextStep} />
              ) : (
                <Step2
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                />
              ))}
            {currentStep === 2 &&
              (subStep === 1 ? (
                <Step3
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                />
              ) : (
                <Step4
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                />
              ))}
            {currentStep === 3 && (
              <Step5
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                data={formData}
              />
            )}
            {currentStep === 4 && (
              <Step6
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
              />
            )}
            {currentStep === 5 && (
              <Step7
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                isPending={isPending}
              />
            )}
          </form>
        </FormProvider>

        {/* review part  */}
        <section>
          <Review />
        </section>

        {/* footer part  */}
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default MultiStepFormAllComponents2;
