import StepBar from "../StepBar";

const ProcessLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <div className="md:flex md:justify-center overflow-x-auto ">
        <div className="fade-left" />
        <StepBar />
        <div className="fade-right" />
      </div>

      <div className="pt-4 ">{children}</div>
    </div>
  );
};

export default ProcessLayout;
