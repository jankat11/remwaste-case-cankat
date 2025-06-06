
import StepBar from "../StepBar";


const ProcessLayout = ({ steps, currentStep, children }) => {
  return (
    <div className="min-h-screen bg-background ">
      <div className="sticky top-0 z-50 bg-background  border-b">
        <StepBar steps={steps} currentStep={currentStep} />
      </div>

   
      <div className="pt-4 ">{children}</div>
    </div>
  );
};

export default ProcessLayout;
