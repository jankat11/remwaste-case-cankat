import SkipSelector from "../SkipSelector";
import { useContext } from "react";
import AppContext from "../../context";

const StepContent = () => {
  const { currentStep } = useContext(AppContext);
  switch (currentStep) {
    case 0:
      return <></>;
    case 1:
      return <></>;
    case 2:
      return <SkipSelector />;
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
