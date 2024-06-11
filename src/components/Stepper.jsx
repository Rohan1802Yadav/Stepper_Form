import React from 'react';

const Stepper = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Step 1' },
    { number: 2, label: 'Step 2' },
    { number: 3, label: 'Step 3' },
    { number: 4, label: 'Summary' },
  ];

  const getProgressWidth = () => {
    return ((currentStep - 1) / (steps.length - 1)) * 100;
  };

  return (
    <div className="stepper-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${getProgressWidth()}%` }}
        ></div>
      </div>
      <div className="stepper">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`step ${currentStep >= step.number ? 'completed' : ''} ${currentStep === step.number ? 'current' : ''}`}
          >
            <div className="step-number">{step.number}</div>
            <div className="step-label">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
