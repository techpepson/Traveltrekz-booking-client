import React from "react";
import { Link } from "react-router-dom";

interface StepIndicatorProps {
  steps: { name: string; path: string }[];
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <ul className="steps max-md:mt-10">
      {steps.map((step, index) => (
        <Link to={step.path}
          key={index}
          className={`step ${index <= currentStep ? "step-info" : ""}`}
        >
          <li className="max-md:hidden">{step.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default StepIndicator;
