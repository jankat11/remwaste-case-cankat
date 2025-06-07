
import StepBar from "../StepBar";


const ProcessLayout = ({ steps, currentStep, children }) => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <div className="md:flex md:justify-center overflow-x-auto ">
        <div className="fade-left" />
        <StepBar steps={steps} currentStep={currentStep} />
        <div className="fade-right" />
      </div>

   
      <div className="pt-4 ">{children}</div>
    </div>
  );
};

export default ProcessLayout;
