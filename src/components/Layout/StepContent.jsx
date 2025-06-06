import SkipSelector from "../SkipSelector";

const StepContent = ({currentStep, setCurrentStep}) => {
  switch (currentStep) {
    case 2:
      return (
        <SkipSelector
          onContinue={() => setCurrentStep(3)}
          onBack={() => setCurrentStep(1)}
        />
      );
    case 3:
      return <></>;
    case 4:
      return <></>;
    case 5:
      return <></>;
    default:
      return <></>;
  }
};

export default StepContent;
