import ProcessLayout from "./components/Layout/ProcessLayout";
import StepContent from "./components/Layout/StepContent";
import { AppContextProvider } from "./context";

function App() {

  return (
    <AppContextProvider>
      <ProcessLayout>
        <StepContent />
      </ProcessLayout>
    </AppContextProvider>
  );
}

export default App;
