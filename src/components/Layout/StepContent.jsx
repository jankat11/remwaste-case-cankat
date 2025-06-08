import SkipSelector from "../SkipSelector";
import { useContext } from "react";
import AppContext from "../../context";
import { CASE_STEP } from "../../data/stepsData";

const StepContent = () => {
  const { currentStep, setCurrentStep } = useContext(AppContext);

  const OutsideCaseNotice = () => (
    <div className="flex flex-col items-center justify-center p-8  rounded-md">
      <p className="text-center text-lg font-medium ">
        This section is outside the scope of the case study requirements.
      </p>
      <button
        onClick={() => setCurrentStep(CASE_STEP)}
        className="mt-6 button-primary"
      >
        Return to Skip Selection
      </button>
    </div>
  );

  return currentStep === CASE_STEP ? (
    <SkipSelector />
  ) : (
    <OutsideCaseNotice />
  );
};

export default StepContent;
