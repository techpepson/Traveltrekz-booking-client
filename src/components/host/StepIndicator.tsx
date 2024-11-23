import React from "react";
import { Link } from "react-router-dom";

interface StepIndicatorProps {
  steps: { name: string; path: string }[];
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <ul className="steps">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${index <= currentStep ? "step-info" : ""}`}
        >
          <Link to={step.path}>{step.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default StepIndicator;
