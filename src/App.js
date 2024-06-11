import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Summary from './components/Summary';
import { Provider } from 'react-redux';
import store from './redux/store';
import Stepper from './components/Stepper';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <Provider store={store}>
    <div className="App">
      <Stepper currentStep={currentStep} />
      {currentStep === 1 && <Step1 nextStep={nextStep} />}
      {currentStep === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 4 && <Summary />}
    </div>
    </Provider>
  );
};

export default App;


