import ProcessLayout from "./components/Layout/ProcessLayout";
import StepContent from "./components/Layout/StepContent";
import { useState } from "react";
import { steps, CASE_STEP } from "./data/stepsData";

function App() {
  const [currentStep, setCurrentStep] = useState(CASE_STEP);

  return (
    <ProcessLayout steps={steps} currentStep={currentStep}>
      <StepContent currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </ProcessLayout>
  );
}

export default App;
