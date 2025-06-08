import { createContext, useState } from "react";
import { CASE_STEP } from "./data/stepsData";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(CASE_STEP);

  return (
    <AppContext
      value={{
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </AppContext>
  );
};

export default AppContext;

/* 
  NOTE:
  by react 19 no need AppContext.Provider anymore. AppContext is enough
*/