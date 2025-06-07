import { createContext, useState } from "react";
import { CASE_STEP } from "./data/stepsData";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(CASE_STEP);

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
